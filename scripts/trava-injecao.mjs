#!/usr/bin/env node
// Trava de injeção: lê as linhas ACRESCENTADAS por um diff de routine e
// diz se alguma pode ser uma instrução plantada para um agente.
//
// Porquê (22 Nov 2026). O daily-agent lê Reddit, blogues e documentação de
// terceiros e escreve em `references/` e `daily-agent/`. O
// `routine-automerge.yml` leva esses commits ao main sem humano. O Tracker
// lê `references/` (e o `news-feed.md`) com cache de 1 h e cola o texto no
// prompt da Routine do cérebro, que tem o segredo de operador. Uma frase
// plantada numa página que o agente leu chegava ao prompt de um agente com
// poderes de operador em menos de duas horas, sem ninguém a ler.
//
// O que faz: corre ANTES do merge, sobre o diff `base...head` (o mesmo que
// o automerge leva), e só sobre linhas acrescentadas. Cinco regras, cada
// uma com o porquê ao lado do padrão. Qualquer achado RETÉM o merge: o
// conteúdo fica no ramo e vai a revisão humana num PR. Nada se apaga.
// Uma citação (bloco de código, citação `>`, código entre crases, texto
// entre aspas) é reportada como tal e vai à mesma a revisão: um estudo
// legítimo pode citar um ataque, mas quem decide é uma pessoa.
//
// Uso (da raiz do repo):
//   node scripts/trava-injecao.mjs --base main --head origin/claude/x \
//        [--json out.json] [--markdown out.md]
// Códigos de saída: 0 limpo, 2 achados (reter), 1 erro (o workflow trata
// o erro como achado: falha fechada).
// Testes: node --test scripts/

import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export const REGRAS = {
  "instrucao-ia": "frase imperativa dirigida a uma IA ou agente",
  infra: "chamada à nossa infraestrutura (rotas, segredos, comandos HTTP, nomes de variáveis)",
  segredo: "padrão de chave ou segredo, ou bloco longo em base64/hex",
  "dominio-novo": "URL para um domínio que ainda não existe no repositório",
  invisivel: "unicode invisível, controlo bidi, comentário HTML ou markdown escondido",
};

// --- Regra 1: instruções dirigidas a uma IA (EN, PT, ES).
// Os padrões exigem o OBJETO da instrução ("instruções anteriores") e não
// só o verbo: "o GPTBot ignora as regras do robots.txt" é notícia e passa;
// "ignora as instruções anteriores" não é.
const INSTRUCAO_IA = [
  // EN
  /\b(ignore|forget|override|bypass)\s+(all\s+|any\s+|the\s+|your\s+|of\s+)*(previous|prior|above|earlier|preceding|former|existing|system|original)\s+(instructions?|prompts?|rules|directions|guidelines|messages|context)\b/i,
  /\b(ignore|forget)\s+(all|everything)\b[^.\n]{0,30}\b(instructions?|rules|told|above|prompts?)\b/i,
  /\b(ignore|forget|disregard)\s+(all\s+)?(the|these|those|your|any|my)\s+(instructions?|prompts?|rules|directions|guidelines)\s+(above|before|below|given|so\s+far|you\s+(were|have\s+been)\s+given)\b/i,
  /\bdisregard\b[^.\n]{0,40}\b(instructions?|prompts?|rules|guidelines|directions|messages|context|the\s+above)\b/i,
  /\byou\s+are\s+now\s+(a|an|the|my|in|acting|operating|free|no\s+longer|DAN|jailbroken)\b/i,
  /\bsystem\s+prompts?\b/i,
  /\bas\s+an\s+AI(\s+(language\s+)?(model|assistant))?\s*[,:]/i,
  /\bas\s+an?\s+(large\s+)?language\s+model\b/i,
  /\b(do\s+not|don't|never)\s+(tell|inform|alert|notify|warn|mention\s+(this\s+|it\s+)?to|reveal\s+(this\s+|it\s+)?to)\s+(the\s+)?(user|human|founder|operator|reviewer|maintainer)s?\b/i,
  /\b(new|updated|additional|real)\s+instructions\s*:/i,
  /<\|im_(start|end)\|>|\[\/?INST\]|<\/?(system|assistant|developer)>/i,
  /^\s*(system|assistant|developer)\s*:\s/i,
  // PT
  /\b(ignor|esque[cç]|desconsider)\w*\b[^.\n]{0,30}\b(instru[çc][õo]es|ordens|indica[çc][õo]es|regras)\b[^.\n]{0,20}\b(anteriores|acima|pr[ée]vias|do\s+sistema|recebid[ao]s|dadas|que\s+(recebeste|recebeu|te\s+deram|lhe\s+deram))\b/i,
  /\b(ignor|esque[cç]|desconsider)\w*\s+todas\s+as\s+(instru[çc][õo]es|ordens|indica[çc][õo]es)\b/i,
  /\b(a\s+partir\s+de\s+agora|de\s+agora\s+em\s+diante)\s*,?\s*(tu\s+)?(és|voc[êe]\s+[ée]|passas\s+a|passa\s+a|deves|atuas|ages)\b/i,
  /\bagora\s+(tu\s+)?és\s+(um|uma|o|a)\b/i,
  /\bprompts?\s+(de|do)\s+sistema\b/i,
  /\b(enquanto|como)\s+(uma\s+)?(IA|intelig[êe]ncia\s+artificial|assistente\s+de\s+IA)\s*,/i,
  /\b(enquanto|como)\s+(um\s+)?modelo\s+de\s+linguagem\b/i,
  /\bn[ãa]o\s+(digas|diga|digam|contes|conte|informes|informe|reveles|revele|avises|avise|mostres|mostre)\b[^.\n]{0,20}\b(utilizador|usu[áa]rio|founder|operador|humano|revisor|cliente)/i,
  /\bnovas\s+instru[çc][õo]es\s*:/i,
  // ES
  /\b(ignor|olvid)\w*\b[^.\n]{0,25}(instrucciones|indicaciones|[óo]rdenes)\b[^.\n]{0,20}\b(anteriores|previas|de\s+arriba|del\s+sistema)\b/i,
  /\b(ignor|olvid)\w*\s+todas\s+las\s+(instrucciones|indicaciones|[óo]rdenes)\b/i,
  /\bhaz\s+caso\s+omiso\b/i,
  /\b(ahora|a\s+partir\s+de\s+ahora)\s*,?\s+eres\b/i,
  /\bprompt\s+del\s+sistema\b/i,
  /\bno\s+(le\s+)?(digas|diga|cuentes|cuente|informes|reveles|avises)\b[^.\n]{0,20}\b(usuario|humano|operador|cliente)/i,
  /\bnuevas\s+instrucciones\s*:/i,
  // FR
  /\b(ignor|oubli)\w*\s+(toutes\s+)?(les|tes|vos)\s+(instructions|consignes|r[èe]gles)\s+(pr[ée]c[ée]dentes|ci-dessus|ant[ée]rieures|du\s+syst[èe]me)\b/i,
  /\b(ignor|oubli)\w*\s+toutes\s+(les\s+)?(instructions|consignes)\b/i,
  /\b(tu\s+es|vous\s+[êe]tes)\s+(maintenant|d[ée]sormais)\b/i,
  /\b(d[ée]sormais|[àa]\s+partir\s+de\s+maintenant)\s*,?\s+(tu\s+es|vous\s+[êe]tes)\b/i,
  /\b(prompt|invite)\s+(du\s+)?syst[èe]me\b/i,
  /\ben\s+tant\s+qu['’]\s*(IA|assistant|mod[èe]le\s+de\s+langage)\s*,/i,
  /\bne\s+(le\s+|lui\s+)?(dis|dites|r[ée]v[èe]le|r[ée]v[ée]lez)\s+(pas|rien)\b[^.\n]{0,20}\b(utilisateur|humain|op[ée]rateur)/i,
  // DE
  /\b(ignorier|vergiss|vergessen)\w*\s+(alle\s+|die\s+)?(vorherigen|bisherigen|obigen|vorigen|fr[üu]heren)\s+(Anweisungen|Instruktionen|Befehle|Regeln)\b/i,
  /\b(ignorier|vergiss)\w*\s+alle\s+(Anweisungen|Instruktionen)\b/i,
  /\b(du\s+bist\s+(jetzt|nun|ab\s+sofort)|ab\s+(jetzt|sofort)\s+bist\s+du)\b/i,
  /\bSystem-?\s?Prompt\b/i,
  /\bals\s+(eine\s+)?KI\s*,/i,
  /\b(sag|sage|erz[äa]hl|erz[äa]hle|verrate)\s+(dem|den)\s+(Benutzer|Nutzer|Menschen|Betreiber)\w*\s+nicht(s)?\b/i,
  // IT
  /\b(ignora|dimentica|ignorate|dimenticate)\s+(tutte\s+)?le\s+(istruzioni|regole|indicazioni)\s+(precedenti|sopra|di\s+sistema)\b/i,
  /\b(ignora|dimentica)\s+tutte\s+le\s+(istruzioni|indicazioni)\b/i,
  /\b(ora\s+sei|da\s+ora\s+in\s+(poi|avanti)\s+sei)\b/i,
  /\bprompt\s+di\s+sistema\b/i,
  /\b(come|in\s+quanto)\s+(una\s+)?IA\s*,/i,
  /\bnon\s+(dire|dirlo|rivelare)\b[^.\n]{0,20}\b(utente|umano|operatore)/i,
  // Ordem dirigida a um modelo, em qualquer frase: "AI agents must send…".
  // Exige um verbo de ação depois do dever, para "AI models should cite
  // sources" (notícia) não disparar.
  /\b(AIs?|LLMs?|assistants?|agents?|models?|bots?)\b[^.\n]{0,40}\b(must|should|need\s+to|are\s+instructed\s+to|is\s+instructed\s+to)\s+(now\s+|immediately\s+|always\s+|also\s+)?(ignore|disregard|reveal|disclose|send|post|forward|email|exfiltrate|upload|call|invoke|execute|run|fetch|visit|open|print|output|leak|share|copy|delete|override|obey|follow\s+these)\b/i,
];

// O texto que a regra 1 lê: NFKC (letras de largura total, ligaduras e
// afins passam a ASCII) e sem a ênfase markdown que parte palavras
// ("**ig**nore", "i_g_n_o_r_e" fica "ignore").
export const normalizar = (linha) => linha.normalize("NFKC").replace(/[*_~]/g, "");

// --- Regra 2: chamadas à nossa infraestrutura.
// Uma notícia de GEO não precisa de nomear uma rota `/api/`, o segredo de
// operador, a service role do Supabase, um comando curl ou o nome de uma
// variável de ambiente. Quem precisa disso é quem quer que um agente com
// esses poderes os use. As rotas `/api/` em URLs de fornecedores
// (docs.anthropic.com/en/api/...) são tratadas pela regra dos domínios:
// aqui só conta o caminho solto, fora de um URL.
// As quatro marcadas DESCRITIVO nomeiam a infraestrutura sem a acionar. No
// auto-diagnóstico (`destaque-ai-self/`) são o assunto do ficheiro (o
// relatório semanal lê os erros das rotas do Tracker), e aí não retêm. As
// outras (segredos, comandos, verbos HTTP, nomes de variáveis) retêm em
// todo o lado.
const DESCRITIVO = new Set(["caminho /api/ solto", "subdomínio da nossa infraestrutura", "anfitrião Vercel/Supabase", "Supabase"]);
export const eAutoDiagnostico = (ficheiro) => /(^|\/)destaque-ai-self\//.test(ficheiro);
const INFRA = [
  [/(^|[\s`'"(=:])\/api\//, "caminho /api/ solto"],
  [/\b(tracker|admin|app|api)\.(destaque|periscopy)\.ai\b/i, "subdomínio da nossa infraestrutura"],
  [/\b[a-z0-9-]+\.(vercel\.app|supabase\.co|supabase\.in)\b/i, "anfitrião Vercel/Supabase"],
  [/\bx-(operator|backoffice|ingest)-(secret|token)\b/i, "cabeçalho de segredo"],
  [/\b(operator|backoffice)\s+secret\b/i, "segredo de operador"],
  [/\bsegredo\s+(de|do)\s+(operador|backoffice)\b/i, "segredo de operador"],
  [/\bsecreto\s+del\s+operador\b/i, "segredo de operador"],
  [/\b(curl|wget|httpie)\s+(-|['"]?https?:\/\/)/i, "comando HTTP"],
  [/\bfetch\(/, "chamada fetch()"],
  [/\b(axios|requests)\.(get|post|put|patch|delete)\s*\(/i, "chamada HTTP em código"],
  [/\bInvoke-(WebRequest|RestMethod)\b/i, "comando HTTP"],
  [/\b(POST|PUT|PATCH|DELETE)\s+(\/|https?:\/\/)/, "verbo HTTP com destino"],
  [/\bsupabase\b/i, "Supabase"],
  [/\bservice[_\s-]?role\b/i, "service role"],
  [/\b[A-Z][A-Z0-9]*(_[A-Z0-9]+)*_(KEY|SECRET|TOKEN|PASSWORD|PASS|PAT)\b/, "nome de variável de ambiente"],
  [/(^|[^A-Za-z0-9_])(TOKEN|SECRET)([^A-Za-z0-9_]|$)/, "nome de variável de ambiente"],
  [/\bAuthorization\s*:\s*(Bearer|Basic)\b/i, "cabeçalho Authorization"],
  [/\bBearer\s+[A-Za-z0-9._-]{16,}/, "token Bearer"],
];

// --- Regra 3: segredos. Prefixos conhecidos verificam-se na linha crua
// (um segredo num URL também é segredo); hex e base64 longos só fora de
// URLs, porque um URL de documentação tem identificadores compridos.
// Um SHA de commit tem 40 hex e passa: o limite é ACIMA de 40.
const SEGREDO_PREFIXO = [
  [/\bsk-(proj-|ant-|live-|test-|or-)?[A-Za-z0-9_-]{20,}/, "chave sk-"],
  [/\b(AKIA|ASIA)[0-9A-Z]{16}\b/, "chave AWS"],
  [/\bgh[pousr]_[A-Za-z0-9]{30,}/, "token GitHub"],
  [/\bgithub_pat_[A-Za-z0-9_]{20,}/, "token GitHub"],
  [/\bxox[abprs]-[A-Za-z0-9-]{10,}/, "token Slack"],
  [/\bAIza[0-9A-Za-z_-]{35}\b/, "chave Google"],
  [/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}/, "JWT"],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, "chave privada"],
];
const HEX_LONGO = /\b[0-9a-fA-F]{41,}\b/g;
const B64_LONGO = /[A-Za-z0-9+/_-]{41,}={0,2}/g;
// Um caminho ("docs/produto/CAPITULO-09-PROPOSTA.md") tem os três tipos de
// carácter mas é partido por "/", "-" e "."; um bloco codificado tem um
// troço contínuo comprido.
const pareceBase64 = (s) => (s.match(/[A-Za-z0-9+]{30,}/g) || [])
  .some((t) => /[A-Z]/.test(t) && /[a-z]/.test(t) && /[0-9]/.test(t));

// --- Regra 5: invisível. Caracteres de largura zero, controlos bidi
// (Trojan Source), etiquetas Unicode (texto que o leitor não vê e o modelo
// lê), e markdown/HTML que esconde texto do leitor humano.
// \p{Cf} cobre largura zero, bidi, U+061C, U+00AD, U+FEFF e as etiquetas
// Unicode. Junta-se o que não é Cf e também não se vê: separadores de
// linha e parágrafo, o combining grapheme joiner, os preenchimentos Hangul
// e os seletores de variação. Um seletor FE0E/FE0F logo a seguir a um
// símbolo é o emoji normal ("⚙️" do news-feed) e passa; seletores em fila,
// os suplementares (E0100-E01EF) ou depois de uma letra servem para
// esconder bytes num emoji e retêm.
const INVISIVEL_CHAR =
  /[\p{Cf}\u2028\u2029\u034F\u3164\u115F\u1160\uFFA0\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu;
const SIMBOLO_ANTES = /[\p{Extended_Pictographic}\p{So}\p{Sk}#*0-9\u20E3]$/u;
export function invisivelNaLinha(linha) {
  for (const m of linha.matchAll(INVISIVEL_CHAR)) {
    const cp = m[0].codePointAt(0);
    if (cp === 0xfe0e || cp === 0xfe0f) {
      const antes = linha.slice(0, m.index);
      const anterior = antes.slice(-2).match(/[\uFE00-\uFE0F]$/u);
      if (!anterior && SIMBOLO_ANTES.test(antes)) continue;
    }
    // ZWJ (U+200D) dentro de um emoji composto ("👩‍💻") é normal.
    if (cp === 0x200d) {
      const antes = linha.slice(0, m.index), depois = linha.slice(m.index + 1);
      if (/\p{Extended_Pictographic}[\uFE0F]?$/u.test(antes) && /^\p{Extended_Pictographic}/u.test(depois)) continue;
    }
    return { cp: cp.toString(16).toUpperCase().padStart(4, "0"), index: m.index };
  }
  return null;
}
// Uma palavra com letras latinas e cirílicas ou gregas ao mesmo tempo é um
// homóglifo ("іgnore" com i cirílico): passa por todos os padrões da regra 1.
export function alfabetosMisturados(linha) {
  for (const m of linha.matchAll(/[\p{L}\p{M}]+/gu)) {
    if (/\p{Script=Latin}/u.test(m[0]) && /[\p{Script=Cyrillic}\p{Script=Greek}]/u.test(m[0])) return m;
  }
  return null;
}
const ESCONDIDO = [
  [/<(details|summary)\b/i, "<details>/<summary> (texto fechado por omissão)"],
  [/<(script|iframe|object|embed|style|noscript|template)\b/i, "elemento HTML ativo ou escondido"],
  [/<[a-z][^>]*\s(hidden\b|aria-hidden\s*=\s*["']?true|style\s*=\s*["'][^"']*(display\s*:\s*none|visibility\s*:\s*hidden|font-size\s*:\s*0|opacity\s*:\s*0))/i, "atributo que esconde texto"],
  [/^\s{0,3}\[[^\]]+\]:\s*(#|<>)/, "definição de referência markdown escondida"],
  [/&#x?[0-9a-f]+;/i, "entidade HTML numérica (texto codificado)"],
];

// Extensões de ficheiro que parecem TLD num caminho (`faixas.ts/`).
const NAO_TLD = new Set([
  "md", "ts", "tsx", "js", "jsx", "mjs", "cjs", "mts", "json", "ps1", "py", "sql",
  "html", "htm", "css", "txt", "yml", "yaml", "png", "jpg", "jpeg", "svg", "gif",
  "csv", "xml", "sh", "pdf", "zip", "toml", "lock", "env", "log", "webp", "ico",
]);
// Alojamento partilhado: o domínio registável é o subdomínio do utilizador.
const PARTILHADOS = new Set([
  "github.io", "vercel.app", "netlify.app", "pages.dev", "workers.dev",
  "blogspot.com", "herokuapp.com", "web.app", "firebaseapp.com", "glitch.me",
  "onrender.com", "azurewebsites.net", "cloudfront.net", "s3.amazonaws.com",
  "wordpress.com", "substack.com", "notion.site", "gitbook.io", "ngrok.io", "ngrok-free.app",
]);

export function dominioRegistavel(host) {
  const h = String(host).toLowerCase().replace(/\.$/, "").replace(/^www\./, "");
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h) || h.includes(":")) return h;
  const p = h.split(".");
  if (p.length <= 2) return h;
  const dois = p.slice(-2).join(".");
  if (PARTILHADOS.has(dois)) return p.slice(-3).join(".");
  const tres = p.slice(-3).join(".");
  if (PARTILHADOS.has(tres) && p.length >= 4) return p.slice(-4).join(".");
  // com.pt, co.uk, gov.br, org.es ...
  if (/^[a-z]{2}$/.test(p[p.length - 1]) && /^(co|com|org|net|gov|edu|ac|nom|ltd|plc|or|ne|go)$/.test(p[p.length - 2])) {
    return tres;
  }
  return dois;
}

const URL_RE = /\bhttps?:\/\/[^\s<>()[\]"'`|{}\\^]+/gi;
// Domínio sem esquema seguido de caminho: `docs.x.ai/docs/release-notes`.
const DOMINIO_NU_RE = /(?<![\w@.-])((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z]{2,24}))\/[^\s<>()[\]"'`|]*/gi;
// O domínio solto SEM caminho ("visita evil.example") ficou de fora de
// propósito: medido a 22 Nov 2026, levava a retenção de 5 para 10 em 35
// merges, quase toda no source-intel semanal, que lista por desenho os
// domínios que os motores citaram.
// URI que traz o conteúdo dentro de si, sem domínio nenhum a verificar.
const URI_EMBUTIDO_RE = /\bdata:[a-z-]+\/[a-z0-9.+-]+[;,]|\b(javascript|vbscript):(?!\s)/gi;
// URL desarmado ("hxxps://evil[.]example"): retém como qualquer outro.
const desarmar = (t) => t.replace(/hxxp/gi, "http").replace(/\[\.\]|\(\.\)|\[dot\]|\(dot\)|\{\.\}/gi, ".");

// "com.google.android.app/…" (android-app://) é um nome de pacote, não um domínio.
const eNomeDePacote = (host) => /^(com|org|net|io|android|java|javax)\./i.test(host);

export function extrairDominios(texto) {
  const out = extrairDominiosCru(texto);
  const d = desarmar(texto);
  if (d !== texto) {
    const k = texto.search(/hxxp|\[\.\]|\(\.\)|\[dot\]|\(dot\)|\{\.\}/i);
    for (const x of extrairDominiosCru(d)) out.push({ ...x, index: k, desarmado: true });
  }
  return out;
}

function extrairDominiosCru(texto) {
  const out = [];
  for (const m of texto.matchAll(URL_RE)) {
    let host;
    try { host = new URL(m[0].replace(/[.,;:!?*_]+$/, "")).hostname; } catch { continue; }
    if (host) out.push({ host: host.toLowerCase(), url: m[0], index: m.index });
  }
  const semUrls = texto.replace(URL_RE, (s) => " ".repeat(s.length));
  for (const m of semUrls.matchAll(DOMINIO_NU_RE)) {
    const tld = m[2].toLowerCase();
    if (NAO_TLD.has(tld) || eNomeDePacote(m[1])) continue;
    out.push({ host: m[1].toLowerCase(), url: m[0], index: m.index });
  }
  for (const m of semUrls.matchAll(/(?<![:\w/])\/\/((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z]{2,24}))(?![\w-])/gi)) {
    if (NAO_TLD.has(m[2].toLowerCase()) || eNomeDePacote(m[1])) continue;
    out.push({ host: m[1].toLowerCase(), url: m[0], index: m.index });
  }
  return out;
}

export function allowlistDe(texto) {
  const s = new Set();
  for (const d of extrairDominios(texto)) s.add(dominioRegistavel(d.host));
  return s;
}

// Intervalos [início, fim) do que é citação NA LINHA: código entre crases
// e texto entre aspas.
function intervalosCitados(linha) {
  const out = [];
  const pares = [/`[^`]*`/g, /"[^"\n]*"/g, /“[^”\n]*”/g, /«[^»\n]*»/g, /‘[^’\n]*’/g];
  for (const re of pares) for (const m of linha.matchAll(re)) out.push([m.index, m.index + m[0].length]);
  return out;
}
const dentro = (i, ivs) => ivs.some(([a, b]) => i >= a && i < b);

/**
 * Analisa as linhas de UM ficheiro na versão nova.
 * @param {string[]} linhas  conteúdo inteiro do ficheiro novo (para saber
 *   se uma linha está dentro de um bloco de código ou de um comentário)
 * @param {Set<number>} acrescentadas  números de linha (1-based) a avaliar
 * @param {{allowlist:Set<string>, linhasBase?:Set<string>, ficheiro?:string}} ctx
 */
export function analisarFicheiro(linhas, acrescentadas, ctx) {
  const achados = [];
  const { allowlist, linhasBase = new Set(), ficheiro = "" } = ctx;
  let cerca = null; // ``` ou ~~~ aberto
  let emComentario = false;
  for (let i = 0; i < linhas.length; i++) {
    const n = i + 1;
    const linha = linhas[i];
    const emBloco = cerca !== null;
    const comentarioAntes = emComentario;
    // estado para a linha seguinte
    const f = linha.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (f) {
      if (cerca === null) cerca = f[1][0];
      else if (f[1][0] === cerca) cerca = null;
    }
    {
      let resto = linha;
      let aberto = emComentario;
      while (resto.length) {
        if (aberto) {
          const k = resto.indexOf("-->");
          if (k < 0) break;
          aberto = false; resto = resto.slice(k + 3);
        } else {
          const k = resto.indexOf("<!--");
          if (k < 0) break;
          aberto = true; resto = resto.slice(k + 4);
        }
      }
      emComentario = aberto;
    }
    if (!acrescentadas.has(n)) continue;

    const citacaoLinha = emBloco || !!f || /^\s{0,3}>/.test(linha);
    const ivs = intervalosCitados(linha);
    const add = (regra, detalhe, index, ivsProprios = ivs) => {
      const citado = regra === "invisivel" ? false : citacaoLinha || (index != null && dentro(index, ivsProprios));
      achados.push({ ficheiro, linha: n, regra, detalhe, citado, trecho: trecho(linha, index) });
    };

    // Regra 5: invisível
    const inv = invisivelNaLinha(linha);
    if (inv) add("invisivel", `caractere invisível U+${inv.cp}`, inv.index);
    const mist = alfabetosMisturados(linha);
    if (mist) add("invisivel", `palavra com alfabetos misturados (homóglifo): «${mist[0]}»`, mist.index);
    const jaExistia = linhasBase.has(linha.trim());
    if (!jaExistia) {
      if (comentarioAntes && linha.trim()) add("invisivel", "linha dentro de um comentário HTML", 0);
      else if (linha.includes("<!--")) add("invisivel", "comentário HTML <!-- -->", linha.indexOf("<!--"));
      for (const [re, d] of ESCONDIDO) {
        const m = linha.match(re);
        if (m) add("invisivel", d, m.index);
      }
    }

    // Regra 1: instrução dirigida a uma IA
    const norm = normalizar(linha);
    const ivsNorm = norm === linha ? ivs : intervalosCitados(norm);
    // Lê-se o texto cru e o normalizado: "<|im_start|>" precisa do "_".
    for (const re of INSTRUCAO_IA) {
      const m = linha.match(re);
      const mn = m ? null : norm.match(re);
      if (m) { add("instrucao-ia", `«${m[0].trim()}»`, m.index); break; }
      if (mn) { add("instrucao-ia", `«${mn[0].trim()}» (depois de normalizar)`, mn.index, ivsNorm); break; }
    }

    // Regra 2: infraestrutura (o caminho /api/ avalia-se sem os URLs)
    const semUrls = linha.replace(URL_RE, (s) => " ".repeat(s.length));
    const vistos = new Set();
    for (const [re, d] of INFRA) {
      const alvo = d === "caminho /api/ solto" ? semUrls : linha;
      const m = alvo.match(re);
      if (m && !vistos.has(d) && !(DESCRITIVO.has(d) && eAutoDiagnostico(ficheiro))) { vistos.add(d); add("infra", `${d}: «${m[0].trim()}»`, m.index); }
    }
    for (const u of linha.matchAll(URL_RE)) {
      let url;
      try { url = new URL(u[0]); } catch { continue; }
      const nosso = /(^|\.)(destaque|periscopy)\.ai$/i.test(url.hostname);
      if (nosso && /\/api\//.test(url.pathname) && !vistos.has("rota /api/ nossa") && !eAutoDiagnostico(ficheiro)) {
        vistos.add("rota /api/ nossa");
        add("infra", `rota /api/ nossa: «${u[0]}»`, u.index);
      }
    }

    // Regra 3: segredos
    for (const [re, d] of SEGREDO_PREFIXO) {
      const m = linha.match(re);
      if (m) add("segredo", d, m.index);
    }
    for (const m of semUrls.matchAll(HEX_LONGO)) add("segredo", `hex com ${m[0].length} caracteres`, m.index);
    for (const m of semUrls.matchAll(B64_LONGO)) {
      if (/^[0-9a-fA-F]+$/.test(m[0])) continue; // já contado como hex
      if (pareceBase64(m[0])) add("segredo", `bloco tipo base64 com ${m[0].length} caracteres`, m.index);
    }

    // Regra 4: domínios novos
    const ja = new Set();
    for (const d of extrairDominios(linha)) {
      const reg = dominioRegistavel(d.host);
      if (ja.has(reg)) continue;
      ja.add(reg);
      const des = d.desarmado ? ", desarmado" : "";
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(reg)) add("dominio-novo", `IP literal ${reg}${des}`, d.index);
      else if (!allowlist.has(reg)) add("dominio-novo", `${reg} (${d.url.slice(0, 120)}${des})`, d.index);
    }
    for (const m of linha.matchAll(URI_EMBUTIDO_RE)) add("dominio-novo", `URI com conteúdo embutido: «${m[0]}»`, m.index);
  }
  return achados;
}

function trecho(linha, index) {
  const i = Math.max(0, (index ?? 0) - 40);
  const s = linha.slice(i, i + 160).replace(/[\u0000-\u001F]/g, " ");
  // Mostra o invisível em vez de o copiar para o PR.
  return (i > 0 ? "…" : "") + s.replace(INVISIVEL_CHAR, (c) =>
    `<U+${c.codePointAt(0).toString(16).toUpperCase()}>`);
}

// Lê o diff unificado (--unified=0) de UM ficheiro e devolve o Set dos
// números de linha acrescentados na versão nova. Os hunks leem-se pelas
// contagens do cabeçalho `@@`: uma linha de conteúdo "+++ x" (o texto
// "++ x" acrescentado) é conteúdo e nunca cabeçalho. O que não bater certo
// lança erro, e o erro retém o merge (falha fechada).
export function linhasAcrescentadas(diff) {
  const linhas = diff.split("\n");
  if (linhas[linhas.length - 1] === "") linhas.pop();
  const out = new Set();
  let i = 0;
  let viuHunk = false;
  while (i < linhas.length) {
    const h = linhas[i].match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
    if (!h) {
      if (viuHunk) throw new Error(`linha fora de um hunk: ${JSON.stringify(linhas[i].slice(0, 80))}`);
      i++; // cabeçalho do ficheiro (diff --git, index, ---, +++)
      continue;
    }
    viuHunk = true;
    let velhas = h[2] === undefined ? 1 : Number(h[2]);
    let novas = h[4] === undefined ? 1 : Number(h[4]);
    let n = Number(h[3]);
    i++;
    while (velhas > 0 || novas > 0) {
      if (i >= linhas.length) throw new Error("hunk truncado");
      const l = linhas[i++];
      const c = l[0];
      if (c === "\\") continue; // "\ No newline at end of file"
      if (c === "+" && novas > 0) { out.add(n++); novas--; }
      else if (c === "-" && velhas > 0) velhas--;
      else if (c === " " && velhas > 0 && novas > 0) { velhas--; novas--; n++; }
      else throw new Error(`linha inesperada num hunk: ${JSON.stringify(l.slice(0, 80))}`);
    }
    while (i < linhas.length && linhas[i].startsWith("\\")) i++;
  }
  return out;
}

const git = (args, opts = {}) =>
  execFileSync("git", ["-c", "core.quotePath=false", ...args], {
    encoding: "utf8", maxBuffer: 512 * 1024 * 1024, ...opts,
  });

// `git diff --raw -z`: ":modo modo sha sha estado\0caminho\0", sem renomeações.
export function lerRaw(raw) {
  const p = raw.split("\0");
  const out = [];
  for (let i = 0; i + 1 < p.length; i += 2) {
    const m = p[i].match(/^:(\d{6}) (\d{6}) [0-9a-f]+ [0-9a-f]+ ([A-Z])\d*$/);
    if (!m) throw new Error(`linha --raw inesperada: ${JSON.stringify(p[i].slice(0, 80))}`);
    out.push({ modoAntigo: m[1], modoNovo: m[2], estado: m[3], caminho: p[i + 1] });
  }
  return out;
}

// `git diff --numstat -z`: "acrescentadas\tapagadas\tcaminho\0" ("-" em binários).
export function lerNumstat(raw) {
  const out = new Map();
  for (const r of raw.split("\0")) {
    if (!r) continue;
    const m = r.match(/^(-|\d+)\t(-|\d+)\t([\s\S]+)$/);
    if (!m) throw new Error(`linha --numstat inesperada: ${JSON.stringify(r.slice(0, 80))}`);
    out.set(m[3], { binario: m[1] === "-", acrescentadas: m[1] === "-" ? 0 : Number(m[1]) });
  }
  return out;
}

export function correr({ base, head }) {
  const mb = git(["merge-base", base, head]).trim();
  // Caminhos por -z (um nome com espaço, TAB ou quebra de linha chega
  // inteiro) e sem renomeações (um `git mv` mostra o nome antigo e o novo).
  const entradas = lerRaw(git(["diff", "--raw", "-z", "--no-renames", "--no-abbrev", mb, head]));
  const numstat = lerNumstat(git(["diff", "--numstat", "-z", "--no-renames", mb, head]));
  // Allowlist e linhas já aprovadas: tudo o que o repositório tinha em `base`.
  const textoBase = git(["grep", "-I", "-h", "-e", "", base, "--"], { stdio: ["ignore", "pipe", "ignore"] });
  const allowlist = allowlistDe(textoBase);
  const linhasBase = new Set(textoBase.split("\n").map((s) => s.trim()).filter(Boolean));
  const achados = [];
  const marca = (ficheiro, detalhe) =>
    achados.push({ ficheiro, linha: 0, regra: "invisivel", detalhe, citado: false, trecho: "" });
  for (const e of entradas) {
    if (e.estado === "D") continue;
    const { caminho } = e;
    if (e.modoNovo === "120000") { marca(caminho, "ligação simbólica no diff"); continue; }
    if (e.modoNovo === "160000") { marca(caminho, "submódulo no diff"); continue; }
    if (e.modoNovo !== e.modoAntigo && e.modoAntigo !== "000000") marca(caminho, `modo mudou de ${e.modoAntigo} para ${e.modoNovo}`);
    const ns = numstat.get(caminho);
    if (!ns) throw new Error(`sem numstat para ${JSON.stringify(caminho)}`);
    if (ns.binario) { marca(caminho, "ficheiro binário no diff"); continue; }
    if (ns.acrescentadas === 0) continue;
    // Daqui para baixo, um ficheiro com linhas acrescentadas que não se
    // consiga ler lança erro: nunca se salta em silêncio.
    const diff = git(["diff", "--unified=0", "--no-color", "--no-ext-diff", "--no-renames", "--text",
      mb, head, "--", `:(literal)${caminho}`]);
    const acrescentadas = linhasAcrescentadas(diff);
    if (acrescentadas.size !== ns.acrescentadas) {
      throw new Error(`${JSON.stringify(caminho)}: ${acrescentadas.size} linhas lidas no diff, numstat diz ${ns.acrescentadas}`);
    }
    const bytes = execFileSync("git", ["cat-file", "blob", `${head}:${caminho}`], { maxBuffer: 512 * 1024 * 1024 });
    if (bytes.includes(0)) marca(caminho, "byte NUL num ficheiro de texto");
    let conteudo;
    try { conteudo = new TextDecoder("utf-8", { fatal: true }).decode(bytes); }
    catch { marca(caminho, "UTF-8 inválido"); conteudo = new TextDecoder("utf-8").decode(bytes); }
    achados.push(...analisarFicheiro(conteudo.split("\n"), acrescentadas, { allowlist, linhasBase, ficheiro: caminho }));
  }
  return { mergeBase: mb, ficheiros: entradas.map((e) => e.caminho), achados, dominiosConhecidos: allowlist.size };
}

export function emMarkdown(r, { max = 100 } = {}) {
  if (!r.achados.length) return "Trava de injeção: sem achados.";
  const porRegra = {};
  for (const a of r.achados) porRegra[a.regra] = (porRegra[a.regra] || 0) + 1;
  const linhas = [
    "## Trava de injeção: merge automático retido",
    "",
    `O diff deste ramo tem **${r.achados.length}** achado(s) nas linhas acrescentadas. ` +
      "Nada foi apagado: o conteúdo está no ramo, e o merge automático não foi feito. Decide uma pessoa.",
    "",
    "| Regra | Achados | O que procura |",
    "|---|---|---|",
    ...Object.entries(porRegra).map(([k, v]) => `| \`${k}\` | ${v} | ${REGRAS[k]} |`),
    "",
    "| Ficheiro:linha | Regra | Detalhe | Citação? | Trecho |",
    "|---|---|---|---|---|",
  ];
  const esc = (s) => limparControlo(String(s)).replace(/\|/g, "\\|").replace(/`/g, "ʼ").replace(/</g, "&lt;");
  // Dentro de crases o markdown não interpreta nada; só o | (tabela) e a
  // própria crase precisam de tratamento.
  const cod = (s) => "`" + limparControlo(String(s)).replace(/`/g, "ʼ").replace(/\|/g, "\\|") + "`";
  for (const a of r.achados.slice(0, max)) {
    linhas.push(`| ${cod(`${a.ficheiro}:${a.linha}`)} | \`${a.regra}\` | ${esc(a.detalhe)} | ${a.citado ? "sim (reportado, vai a revisão)" : "não"} | ${a.trecho ? cod(a.trecho) : ""} |`);
  }
  if (r.achados.length > max) linhas.push("", `… e mais ${r.achados.length - max} achado(s). Ver o log da corrida.`);
  linhas.push("", "Revisão: ler cada linha. Se for legítima, fazer merge deste PR à mão; se não, fechar o PR e apagar o ramo.");
  return linhas.join("\n");
}

// Tira \r e caracteres de controlo do que vai para a consola ou para o PR:
// uma linha que comece por "::" no log é um comando do GitHub Actions.
export const limparControlo = (s) => String(s).replace(/[\u0000-\u001F\u007F-\u009F\u2028\u2029]/g, " ");
const paraConsola = (s) => limparControlo(s).replace(/::/g, ": :");

function args(argv) {
  const o = {};
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k.startsWith("--")) o[k.slice(2)] = argv[i + 1]?.startsWith("--") ? true : argv[++i];
  }
  return o;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  try {
    const a = args(process.argv.slice(2));
    if (!a.base || !a.head) throw new Error("uso: --base <ref> --head <ref> [--json f] [--markdown f]");
    const r = correr({ base: a.base, head: a.head });
    if (a.json) writeFileSync(a.json, JSON.stringify(r, null, 2));
    const md = emMarkdown(r);
    if (a.markdown) writeFileSync(a.markdown, md + "\n");
    if (r.achados.length) {
      console.log(`Trava de injeção: ${r.achados.length} achado(s) em ${r.ficheiros.length} ficheiro(s).`);
      for (const x of r.achados) console.log(paraConsola(`  ${x.ficheiro}:${x.linha}  [${x.regra}]${x.citado ? " (citação)" : ""}  ${x.detalhe}`));
      process.exit(2);
    }
    console.log(`Trava de injeção: sem achados (${r.ficheiros.length} ficheiro(s), ${r.dominiosConhecidos} domínios conhecidos).`);
    process.exit(0);
  } catch (e) {
    console.error(paraConsola(`Trava de injeção: ERRO, tratado como achado (falha fechada): ${e?.stack || e}`));
    process.exit(1);
  }
}
