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
];

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
  [/\bfetch\s*\(/, "chamada fetch()"],
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
const pareceBase64 = (s) => /[A-Z]/.test(s) && /[a-z]/.test(s) && /[0-9]/.test(s);

// --- Regra 5: invisível. Caracteres de largura zero, controlos bidi
// (Trojan Source), etiquetas Unicode (texto que o leitor não vê e o modelo
// lê), e markdown/HTML que esconde texto do leitor humano.
const INVISIVEL_CHAR =
  /[\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\uFEFF\u00AD\u180E]|[\u{E0000}-\u{E007F}]/u;
const ESCONDIDO = [
  [/<(details|summary)\b/i, "<details>/<summary> (texto fechado por omissão)"],
  [/<(script|iframe|object|embed|style|noscript|template)\b/i, "elemento HTML ativo ou escondido"],
  [/<[a-z][^>]*\s(hidden\b|aria-hidden\s*=\s*["']?true|style\s*=\s*["'][^"']*(display\s*:\s*none|visibility\s*:\s*hidden|font-size\s*:\s*0|opacity\s*:\s*0))/i, "atributo que esconde texto"],
  [/^\s*\[(\/\/|comment|_)\]\s*:\s*[#<]/i, "comentário markdown escondido"],
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
const DOMINIO_NU_RE = /(?<![\w@./-])((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z]{2,24}))\/[^\s<>()[\]"'`|]*/gi;

export function extrairDominios(texto) {
  const out = [];
  for (const m of texto.matchAll(URL_RE)) {
    let host;
    try { host = new URL(m[0].replace(/[.,;:!?*_]+$/, "")).hostname; } catch { continue; }
    if (host) out.push({ host: host.toLowerCase(), url: m[0], index: m.index });
  }
  const semUrls = texto.replace(URL_RE, (s) => " ".repeat(s.length));
  for (const m of semUrls.matchAll(DOMINIO_NU_RE)) {
    const tld = m[2].toLowerCase();
    if (NAO_TLD.has(tld)) continue;
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
    const add = (regra, detalhe, index) => {
      const citado = regra === "invisivel" ? false : citacaoLinha || (index != null && dentro(index, ivs));
      achados.push({ ficheiro, linha: n, regra, detalhe, citado, trecho: trecho(linha, index) });
    };

    // Regra 5: invisível
    const inv = linha.match(INVISIVEL_CHAR);
    if (inv) {
      const cp = inv[0].codePointAt(0).toString(16).toUpperCase().padStart(4, "0");
      add("invisivel", `caractere invisível U+${cp}`, inv.index);
    }
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
    for (const re of INSTRUCAO_IA) {
      const m = linha.match(re);
      if (m) { add("instrucao-ia", `«${m[0].trim()}»`, m.index); break; }
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
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(reg)) add("dominio-novo", `IP literal ${reg}`, d.index);
      else if (!allowlist.has(reg)) add("dominio-novo", `${reg} (${d.url.slice(0, 120)})`, d.index);
    }
  }
  return achados;
}

function trecho(linha, index) {
  const i = Math.max(0, (index ?? 0) - 40);
  const s = linha.slice(i, i + 160).replace(/[\u0000-\u001F]/g, " ");
  // Mostra o invisível em vez de o copiar para o PR.
  return (i > 0 ? "…" : "") + s.replace(new RegExp(INVISIVEL_CHAR.source, "gu"), (c) =>
    `<U+${c.codePointAt(0).toString(16).toUpperCase()}>`);
}

// Lê um diff unificado (--unified=0) e devolve Map ficheiro -> Set(linhas novas).
export function linhasAcrescentadas(diff) {
  const out = new Map();
  let atual = null;
  let n = 0;
  for (const l of diff.split("\n")) {
    if (l.startsWith("+++ ")) {
      const p = l.slice(4);
      atual = p === "/dev/null" ? null : p.replace(/^b\//, "");
      if (atual && !out.has(atual)) out.set(atual, new Set());
      continue;
    }
    if (l.startsWith("--- ") || l.startsWith("diff --git")) continue;
    const h = l.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/);
    if (h) { n = Number(h[1]); continue; }
    if (!atual) continue;
    if (l.startsWith("+")) { out.get(atual).add(n); n++; }
    else if (l.startsWith(" ")) n++;
  }
  return out;
}

const git = (args, opts = {}) =>
  execFileSync("git", ["-c", "core.quotePath=false", ...args], {
    encoding: "utf8", maxBuffer: 512 * 1024 * 1024, ...opts,
  });

export function correr({ base, head }) {
  const mb = git(["merge-base", base, head]).trim();
  const diff = git(["diff", "--unified=0", "--no-color", "--no-ext-diff", "--find-renames", mb, head]);
  const porFicheiro = linhasAcrescentadas(diff);
  // Binários ficam de fora do texto, mas um binário novo num caminho de
  // routine também é estranho: reporta-se.
  const numstat = git(["diff", "--numstat", "--find-renames", mb, head]);
  const achados = [];
  for (const l of numstat.split("\n")) {
    const m = l.match(/^-\t-\t(.+)$/);
    if (m) achados.push({ ficheiro: m[1], linha: 0, regra: "invisivel", detalhe: "ficheiro binário no diff", citado: false, trecho: "" });
  }
  // Allowlist e linhas já aprovadas: tudo o que o repositório tinha em `base`.
  const textoBase = git(["grep", "-I", "-h", "-e", "", base, "--"], { stdio: ["ignore", "pipe", "ignore"] });
  const allowlist = allowlistDe(textoBase);
  const linhasBase = new Set(textoBase.split("\n").map((s) => s.trim()).filter(Boolean));
  for (const [ficheiro, acrescentadas] of porFicheiro) {
    if (!acrescentadas.size) continue;
    let conteudo;
    try { conteudo = git(["show", `${head}:${ficheiro}`]); }
    catch { continue; } // binário ou apagado
    if (conteudo.includes("\u0000")) continue;
    achados.push(...analisarFicheiro(conteudo.split("\n"), acrescentadas, { allowlist, linhasBase, ficheiro }));
  }
  return { mergeBase: mb, ficheiros: [...porFicheiro.keys()], achados, dominiosConhecidos: allowlist.size };
}

export function emMarkdown(r, { max = 100 } = {}) {
  if (!r.achados.length) return "Trava de injeção: sem achados.";
  const porRegra = {};
  for (const a of r.achados) porRegra[a.regra] = (porRegra[a.regra] || 0) + 1;
  const linhas = [
    "## Trava de injeção: merge automático retido",
    "",
    `O diff deste ramo tem **${r.achados.length}** achado(s) nas linhas acrescentadas. ` +
      "Nada foi apagado: o conteúdo está no ramo e só entra no main com revisão humana.",
    "",
    "| Regra | Achados | O que procura |",
    "|---|---|---|",
    ...Object.entries(porRegra).map(([k, v]) => `| \`${k}\` | ${v} | ${REGRAS[k]} |`),
    "",
    "| Ficheiro:linha | Regra | Detalhe | Citação? | Trecho |",
    "|---|---|---|---|---|",
  ];
  const esc = (s) => String(s).replace(/\|/g, "\\|").replace(/`/g, "ʼ").replace(/</g, "&lt;");
  for (const a of r.achados.slice(0, max)) {
    linhas.push(`| \`${a.ficheiro}:${a.linha}\` | \`${a.regra}\` | ${esc(a.detalhe)} | ${a.citado ? "sim (reportado, vai a revisão)" : "não"} | ${esc(a.trecho)} |`);
  }
  if (r.achados.length > max) linhas.push("", `… e mais ${r.achados.length - max} achado(s). Ver o log da corrida.`);
  linhas.push("", "Revisão: ler cada linha. Se for legítima, fazer merge deste PR à mão; se não, fechar o PR e apagar o ramo.");
  return linhas.join("\n");
}

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
      for (const x of r.achados) console.log(`  ${x.ficheiro}:${x.linha}  [${x.regra}]${x.citado ? " (citação)" : ""}  ${x.detalhe}`);
      process.exit(2);
    }
    console.log(`Trava de injeção: sem achados (${r.ficheiros.length} ficheiro(s), ${r.dominiosConhecidos} domínios conhecidos).`);
    process.exit(0);
  } catch (e) {
    console.error(`Trava de injeção: ERRO, tratado como achado (falha fechada): ${e?.stack || e}`);
    process.exit(1);
  }
}
