#!/usr/bin/env node
// Valida que os blocos parseáveis consumidos pelo destaque-ai-deck-builder
// mantêm os headers e estrutura mínima do contrato em INTERFACES.md.
//
// Run from repo root:  node scripts/validate-skill-tables.mjs
// Exits 1 se algum contrato falhar. Usado pela routine antes de commit,
// para que uma absorção que parta um header não escape para main.

import { readFileSync } from "node:fs";

const SKILL = "skills/geo-seo-aeo-master";
const results = [];

const check = (name, ok, detail) => results.push({ name, ok, detail });

const read = (path) => {
  try { return readFileSync(path, "utf8"); }
  catch { return null; }
};

// Devolve o conteúdo de uma secção `## Header` até ao próximo `## ` (h2 only).
const sectionContent = (body, header) => {
  const idx = body.indexOf(header);
  if (idx < 0) return null;
  const rest = body.slice(idx + header.length);
  const next = rest.search(/\n## (?!#)/);
  return next < 0 ? rest : rest.slice(0, next);
};

// Conta linhas de tabela markdown (começam por `|`, excluindo separador `|---|`).
const countTableRows = (section) =>
  section
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("|") && !/^\|[\s\-:|]+\|$/.test(l))
    .length;

// --- Contrato 3: benchmarks core stats (consumido por loadCoreBenchmarks)
{
  const name = "Contrato 3 · benchmarks core stats";
  const body = read(`${SKILL}/references/benchmarks.md`);
  if (!body) { check(name, false, "ficheiro não encontrado"); }
  else {
    const section = sectionContent(body, "## Deck Builder core stats");
    if (!section) check(name, false, "secção '## Deck Builder core stats' ausente");
    else if (!section.includes("| key | value | caption | source | url | date |")) {
      check(name, false, "header da tabela mudou — esperado: '| key | value | caption | source | url | date |'");
    } else {
      const rows = countTableRows(section) - 1; // -1 do header
      rows >= 3
        ? check(name, true, `${rows} stats parseáveis`)
        : check(name, false, `menos de 3 stats (encontradas: ${rows}) — deck cai em fallback`);
    }
  }
}

// --- Contrato 4: SKILL.md Deck Builder method (consumido por loadMethod)
{
  const body = read(`${SKILL}/SKILL.md`);
  if (!body) { check("Contrato 4 · method", false, "SKILL.md não encontrado"); }
  else {
    const section = sectionContent(body, "## Deck Builder method");
    if (!section) check("Contrato 4 · method", false, "secção '## Deck Builder method' ausente");
    else {
      const haveGlossary = /\|\s*sigla\s*\|/i.test(section);
      const haveDims = /\|\s*dimens[aã]o\s*\|/i.test(section);
      const haveSeoGeo = /\|\s*seo\s*\|\s*geo\s*\|/i.test(section);
      check("Contrato 4 · glossário", haveGlossary, haveGlossary ? "header 'sigla' presente" : "header com 'sigla' ausente");
      check("Contrato 4 · 8 dimensões", haveDims, haveDims ? "header 'dimensao' presente" : "header com 'dimensao' ausente");
      check("Contrato 4 · SEO vs GEO", haveSeoGeo, haveSeoGeo ? "header '| seo | geo |' presente" : "header '| seo | geo |' ausente");
    }
  }
}

// --- Contrato 1: prompts §3 distribuição (consumido por loadPromptConfig)
{
  const name = "Contrato 1 · distribuição por tier";
  const body = read(`${SKILL}/references/prompts.md`);
  if (!body) { check(name, false, "prompts.md não encontrado"); }
  else {
    const section = sectionContent(body, "## 3.");
    if (!section) check(name, false, "anchor '## 3.' ausente");
    else {
      // Espelha a normalização do parser do deck (loadPromptConfig): strip de
      // backticks + lowercase, depois match por cell.
      const cleaned = section.toLowerCase().replace(/`/g, "");
      const hasFree = /\|\s*free\s*\|/.test(cleaned);
      const hasDiag = /\|\s*diagnostic\s*\|/.test(cleaned);
      hasFree && hasDiag
        ? check(name, true, "rows 'free' + 'diagnostic' presentes")
        : check(name, false, `tiers em falta (free: ${hasFree}, diagnostic: ${hasDiag})`);
    }
  }
}

// --- Contrato 2: models.md Deck Builder API mappings
{
  const name = "Contrato 2 · API mappings";
  const body = read(`${SKILL}/references/models.md`);
  if (!body) { check(name, false, "models.md não encontrado"); }
  else {
    const section = sectionContent(body, "## Deck Builder API mappings");
    if (!section) check(name, false, "secção '## Deck Builder API mappings' ausente");
    else if (!section.includes("| Deck engine | Vendor | production | cost_optimized |")) {
      check(name, false, "header da tabela mudou — esperado: '| Deck engine | Vendor | production | cost_optimized |'");
    } else {
      const rows = countTableRows(section) - 1;
      rows >= 6
        ? check(name, true, `${rows} engines parseáveis`)
        : check(name, false, `menos de 6 engines (encontradas: ${rows}) — deck cai em fallback`);
    }
  }
}

// --- Contrato 6: engine playbooks (consumido por loadEnginePlaybooks no Tracker)
// Sem fallback hardcoded do lado do Tracker: um header partido aqui faz
// desaparecer a secção "Como aparecer aqui" de TODOS os cartões de motor,
// em silêncio. As routines (daily-agent, self-audit, synthesis) editam este
// ficheiro, por isso o contrato tem de ser validado como os outros.
{
  const name = "Contrato 6 · engine playbooks";
  const body = read(`${SKILL}/references/engine_playbooks.md`);
  if (!body) { check(name, false, "engine_playbooks.md não encontrado"); }
  else {
    const section = sectionContent(body, "## Deck Builder/Tracker playbooks");
    if (!section) check(name, false, "secção '## Deck Builder/Tracker playbooks' ausente");
    else {
      // Espelha o parser do Tracker (src/lib/skill/playbooks.ts): `### <key>`
      // sozinho na linha, key em word chars.
      const keys = [...section.matchAll(/^###[ \t]+(\w+)[ \t]*$/gm)].map((m) => m[1]);
      // Keys do Tracker (src/lib/llm/models.ts ENGINES + superfícies).
      const EXPECTED = [
        "chatgpt", "claude", "gemini", "grok", "deepseek", "mistral", "perplexity",
        "google_aio", "google_ai_mode", "copilot", "copilot_bing",
      ];
      const missing = EXPECTED.filter((k) => !keys.includes(k));
      // Bloco vazio = cartão sem texto: o parser descarta, mas avisa-se aqui.
      const bodies = section.split(/^###[ \t]+\w+[ \t]*$/gm).slice(1);
      const empty = bodies.filter((b) => b.trim() === "").length;
      if (missing.length > 0) {
        check(name, false, `motores sem bloco '### <key>': ${missing.join(", ")}`);
      } else if (empty > 0) {
        check(name, false, `${empty} bloco(s) sem texto — o cartão fica sem "Como aparecer aqui"`);
      } else {
        check(name, true, `${keys.length} motores com playbook`);
      }
    }
  }
}

// --- Contrato 5: search_modes augmentation (consumido por loadEngineAugmentation)
// A tabela SOBREPÕE-SE ao fallback do código (`{...fallback, ...tabela}`), por
// isso uma linha errada aqui não dá erro: duplica chamadas ao fornecedor e
// rotula metade das linhas como "memória de treino" numa superfície que
// pesquisa sempre. Foi o que aconteceu com o `copilot` até Ago 2026, ao custo
// de metade da quota SerpApi.
{
  const name = "Contrato 5 · search modes";
  const body = read(`${SKILL}/references/search_modes.md`);
  if (!body) { check(name, false, "search_modes.md não encontrado"); }
  else {
    const section = sectionContent(body, "## Per-engine augmentation feature");
    if (!section) check(name, false, "secção '## Per-engine augmentation feature' ausente");
    else {
      // Espelha o parser do Tracker (src/lib/skill/searchModes.ts).
      const parsed = {};
      for (const line of section.split("\n")) {
        const t = line.trim();
        if (!t.startsWith("|")) continue;
        if (t.includes("Deck engine") || /^\|[\s\-:|]+\|$/.test(t)) continue;
        const cells = t.split("|").slice(1, -1).map((c) => c.trim().replace(/^`|`$/g, ""));
        if (cells.length < 3) continue;
        const [engine, , mode] = cells;
        if (!engine || !mode) continue;
        const l = mode.toLowerCase();
        parsed[engine] = { alwaysOn: l.includes("always") || l.includes("n/a") };
      }
      // Superfícies de consumo e Perplexity não têm modo "memória": têm de
      // estar na tabela E marcadas always-on.
      const ALWAYS = ["perplexity", "google_aio", "google_ai_mode", "copilot", "copilot_bing"];
      const missing = ALWAYS.filter((e) => !parsed[e]);
      const twoMode = ALWAYS.filter((e) => parsed[e] && !parsed[e].alwaysOn);
      if (missing.length > 0) {
        check(name, false, `superfícies ausentes da tabela: ${missing.join(", ")}`);
      } else if (twoMode.length > 0) {
        check(name, false, `correriam dois modos (duplicam custo): ${twoMode.join(", ")}`);
      } else {
        check(name, true, `${Object.keys(parsed).length} motores, ${ALWAYS.length} superfícies always-on`);
      }
    }
  }
}

// --- Contrato 8: visibility score (consumido pelo Tracker, loadScoreWeights)
//
// O parser do Tracker cai no fallback em silêncio quando esta tabela não
// bate certo, e é isso que torna a verificação necessária: um peso trocado
// ou um header mudado não dá erro em lado nenhum, dá o número de ontem
// para sempre. A soma tem de dar 1, senão o 0..100 deixa de ser 0..100.
{
  const name = "Contrato 8 · visibility score";
  const body = read(`${SKILL}/references/metrics.md`);
  if (!body) { check(name, false, "ficheiro não encontrado"); }
  else {
    const section = sectionContent(body, "## Visibility Score");
    if (!section) check(name, false, "secção '## Visibility Score' ausente");
    else if (!/\|\s*component\s*\|\s*weight\s*\|/i.test(section)) {
      check(name, false, "header da tabela mudou — esperado: '| component | weight |'");
    } else {
      const pesos = {};
      for (const linha of section.split("\n")) {
        const t = linha.trim();
        if (!t.startsWith("|")) continue;
        const cells = t.split("|").slice(1, -1).map((c) => c.trim().replace(/^`|`$/g, ""));
        if (cells.length < 2) continue;
        if (!["citation", "relative_sov", "net_sentiment"].includes(cells[0])) continue;
        const v = Number(cells[1].replace(",", "."));
        if (Number.isFinite(v)) pesos[cells[0]] = v;
      }
      const nomes = Object.keys(pesos);
      const soma = nomes.reduce((a, k) => a + pesos[k], 0);
      if (nomes.length !== 3) {
        check(name, false, `esperados 3 componentes, encontrados ${nomes.length} (${nomes.join(", ") || "nenhum"})`);
      } else if (Math.abs(soma - 1) > 0.001) {
        check(name, false, `os pesos somam ${soma} e têm de somar 1 — o número mudaria de escala`);
      } else {
        check(name, true, `3 pesos, soma 1 (citation ${pesos.citation})`);
      }
    }
  }
}

let allOk = true;

// --- Contrato 17: o Estúdio (consumido por src/lib/estudio/regras-de-escrita.ts e src/lib/skill/escritor.ts no Tracker)
// As quatro tabelas do escrita.md e os papéis dos modelos do produto. Um
// cabeçalho renomeado não parte o Tracker, que cai no recurso: é por isso
// que tem de falhar aqui, onde alguém olha, e não em silêncio lá.
{
  const name = "Contrato 17 · Estúdio";
  const escrita = read(`${SKILL}/references/escrita.md`);
  const models = read(`${SKILL}/references/models.md`);
  const falhas = [];
  // A primeira tabela debaixo de um cabeçalho (### ou ##), com linhas de expressões entre crases.
  const tabelaDe = (body, cabecalho) => {
    const linhas = body.split("\n");
    const i = linhas.findIndex((l) => l.trim() === cabecalho);
    if (i < 0) return null;
    const out = [];
    let dentro = false;
    for (const l of linhas.slice(i + 1)) {
      const t = l.trim();
      if (t.startsWith("|")) { dentro = true; out.push(t); }
      else if (dentro || /^#{1,3} /.test(t)) break;
    }
    return out.slice(2);
  };
  if (!escrita) falhas.push("escrita.md não encontrado");
  else {
    for (const cab of ["### Tiques (português)", "### Tiques (inglês)", "### Brasil → Portugal"]) {
      const t = tabelaDe(escrita, cab);
      if (!t) falhas.push(`'${cab}' ausente`);
      else if (!t.some((l) => /`[^`]+`/.test(l.split("|")[1] ?? ""))) falhas.push(`'${cab}' sem expressões entre crases`);
    }
    const lim = tabelaDe(escrita, "### Limites que se medem");
    const nomes = ["palavras por frase", "dois-pontos por parágrafo", "frases por parágrafo", "pontos de exclamação", "travessões"];
    if (!lim) falhas.push("'### Limites que se medem' ausente");
    else for (const n of nomes) if (!lim.some((l) => l.split("|")[1]?.trim().toLowerCase() === n && /\d/.test(l.split("|")[2] ?? ""))) falhas.push(`limite '${n}' ausente ou sem número`);
  }
  if (!models) falhas.push("models.md não encontrado");
  else {
    const sec = sectionContent(models, "\n## Tracker product models");
    if (!sec) falhas.push("'## Tracker product models' ausente");
    else for (const papel of ["estudio", "revisao", "agente", "registo", "classificar", "perguntas"]) {
      if (!new RegExp("^\\|\\s*`" + papel + "`\\s*\\|\\s*`[^`]+`", "m").test(sec)) falhas.push(`papel '${papel}' ausente`);
    }
  }
  falhas.length === 0
    ? check(name, true, "4 tabelas do escrita.md e 6 papéis dos modelos do produto parseáveis")
    : check(name, false, falhas.join("; "));
}

// --- Contrato 18: as perguntas que medem (consumido por src/lib/skill/regras-das-perguntas.ts no Tracker)
// A tabela dos limites do §8.7 e a linha do fundo do funil do §8.2. Uma
// chave que não se leia cai no recurso do Tracker em silêncio: tem de
// falhar aqui.
{
  const name = "Contrato 18 · perguntas";
  const body = read(`${SKILL}/references/prompts.md`);
  const falhas = [];
  if (!body) falhas.push("prompts.md não encontrado");
  else {
    const linhas = body.split("\n");
    const i = linhas.findIndex((l) => l.trim() === "#### Limites que se verificam");
    if (i < 0) falhas.push("'#### Limites que se verificam' ausente");
    else {
      const tabela = [];
      let dentro = false;
      for (const l of linhas.slice(i + 1)) {
        const t = l.trim();
        if (t.startsWith("|")) { dentro = true; tabela.push(t); }
        else if (dentro || /^#{1,4} /.test(t)) break;
      }
      for (const chave of ["palavras_min", "palavras_max", "semelhanca_max", "concorrentes_sem_marca", "fundo_de_funil_min"]) {
        const linha = tabela.find((l) => (l.split("|")[1] ?? "").trim() === "`" + chave + "`");
        const valor = linha ? Number((linha.split("|")[2] ?? "").trim().replace(",", ".")) : NaN;
        if (!linha) falhas.push(`chave '${chave}' ausente`);
        else if (!Number.isFinite(valor) || valor <= 0) falhas.push(`chave '${chave}' sem número positivo`);
      }
    }
    if (!/^\s*[-*]\s+\*\*Fundo:\*\*.*`[a-z_]+`/m.test(body)) falhas.push("linha '- **Fundo:**' do §8.2 sem chaves entre crases");
  }
  falhas.length === 0
    ? check(name, true, "5 limites do §8.7 e o fundo do funil do §8.2 parseáveis")
    : check(name, false, falhas.join("; "));
}

// --- Contrato 19: o caminho de cada pergunta (consumido por src/lib/skill/caminhos.ts no Tracker)
// A linha `limiar_dentro: N%` dentro da secção. Sem ela o Tracker cai no
// recurso (50%) sem erro: tem de falhar aqui.
{
  const name = "Contrato 19 · caminhos";
  const body = read(`${SKILL}/references/gap_action_mapping.md`);
  const falhas = [];
  if (!body) falhas.push("gap_action_mapping.md não encontrado");
  else {
    const sec = sectionContent(body, "\n## O caminho de cada pergunta (Perguntas x fontes)");
    if (!sec) falhas.push("'## O caminho de cada pergunta (Perguntas x fontes)' ausente");
    else {
      const m = /^limiar_dentro:\s*([\d.,]+)\s*%/m.exec(sec);
      const v = m ? Number(m[1].replace(",", ".")) : NaN;
      if (!m) falhas.push("linha 'limiar_dentro: N%' ausente");
      else if (!(v > 0 && v <= 100)) falhas.push("limiar_dentro fora de 0..100");
    }
  }
  falhas.length === 0
    ? check(name, true, "limiar_dentro parseável")
    : check(name, false, falhas.join("; "));
}

// --- Contrato editorial: nada do que a skill escreve leva travessões nem "canónico"
// (Tracker CLAUDE.md, regras 8 e 11; pedido do founder a 25 Ago e 9 Set 2026).
// Alargado à skill inteira a 10 Set 2026. Ficam de fora só os registos diários
// --- Contrato 13: alert thresholds (consumido por parseAlertThresholds no Tracker)
{
  const name = "Contrato 13 · alert thresholds";
  const body = read(`${SKILL}/references/alert_thresholds.md`);
  if (!body) { check(name, false, "ficheiro não encontrado"); }
  else {
    const linhas = body.split("\n");
    const temCabecalho = (h) => linhas.some((l) => l.trimEnd() === h || (l.startsWith(h) && !/[\p{L}\d]/u.test(l.charAt(h.length))));
    const faltas = [];
    for (const h of ["### Citation rate (CR)", "### Share of Voice (SoV)", "### Average position", "### Sentiment", "## 6. Time-bounded suppression"]) {
      if (!temCabecalho(h)) faltas.push(`cabeçalho '${h}'`);
    }
    for (const r of ["| Decrease |", "| Increase |", "| Worsens |", "| Improves |"]) {
      if (!body.includes(r)) faltas.push(`linha '${r}'`);
    }
    if (!/\d+\s*pp\s*\*\*or\*\*\s*≤\s*[−\-]?\d+%\s*rel/.test(body)) faltas.push("célula da CR sem 'pp **or** % rel'");
    if (!/crosses\s*\d+%/.test(body)) faltas.push("linha de sentimento sem 'crosses N%'");
    if (!/for the next \d+ weeks?/.test(body)) faltas.push("§6 sem 'for the next N weeks'");
    check(name, faltas.length === 0, faltas.length === 0 ? "§2 e §6 parseáveis" : `Tracker cai no recurso: ${faltas.join("; ")}`);
  }
}

// --- Contrato 15: mercado GEO (consumido por src/lib/skill/market-monitor.ts no Tracker)
// O Tracker lê as três tabelas por NOME de coluna. Um report sem o bloco não
// parte o ecrã (cai na prosa), mas aqui acusa-se, senão ninguém dá por isso.
{
  const name = "Contrato 15 · mercado GEO";
  const { readdirSync } = await import("node:fs");
  const faltas = [];
  const cabecalhoDe = (sec) => (sec ?? "").split("\n").map((l) => l.trim()).find((l) => l.startsWith("|")) ?? "";
  const colunas = (linha) => linha.split("|").slice(1, -1).map((c) => c.trim().toLowerCase());
  const exige = (onde, sec, pedidas) => {
    if (sec == null) { faltas.push(`${onde}: secção em falta`); return; }
    const tem = colunas(cabecalhoDe(sec));
    for (const c of pedidas) if (!tem.some((t) => t.startsWith(c))) faltas.push(`${onde}: coluna '${c}'`);
  };
  const reports = readdirSync("competitor-monitor/reports").filter((n) => /^\d{4}-\d{2}-\d{2}\.md$/.test(n)).sort();
  const ultimo = reports[reports.length - 1];
  if (!ultimo) faltas.push("sem reports");
  else exige(ultimo, sectionContent(read(`competitor-monitor/reports/${ultimo}`) ?? "", "## Tracker market data"), ["marca", "site", "preço de entrada", "movimento", "preço mudou"]);
  exige("known-competitors.md", sectionContent(read("competitor-monitor/known-competitors.md") ?? "", "## Lista"), ["nome", "url", "desde", "bucket"]);
  exige("share-of-voice-history.md", sectionContent(read("competitor-monitor/share-of-voice-history.md") ?? "", "## Tabela"), ["semana", "player", "aparições"]);
  check(name, faltas.length === 0, faltas.length === 0 ? `3 tabelas parseáveis (report ${ultimo})` : `Tracker cai na prosa: ${faltas.join("; ")}`);
}

// (news-feed, execution-log, drafts/), que são histórico e não copy.
{
  const name = "Contrato editorial · skill inteira";
  const { readdirSync, statSync } = await import("node:fs");
  const ficheiros = [];
  const walk = (dir) => {
    for (const nome of readdirSync(dir)) {
      const p = `${dir}/${nome}`;
      if (statSync(p).isDirectory()) walk(p);
      else if (nome.endsWith(".md") && !/news-feed\.md$|execution-log\.md$/.test(nome) && !p.includes("/drafts/")) ficheiros.push(p);
    }
  };
  walk(SKILL);
  ficheiros.push("INTERFACES.md");
  const faltas = [];
  for (const f of ficheiros) {
    const texto = read(f) ?? "";
    let emCodigo = false;
    texto.split("\n").forEach((l, i) => {
      if (l.trim().startsWith("```")) { emCodigo = !emCodigo; return; }
      if (emCodigo) return;
      const semCodigo = l.replace(/`[^`]*`/g, "");
      if (semCodigo.includes("—")) faltas.push(`${f}:${i + 1} travessão`);
      if (/canónic/i.test(semCodigo)) faltas.push(`${f}:${i + 1} "canónico"`);
    });
  }
  check(name, faltas.length === 0, faltas.length === 0 ? `sem travessões nem "canónico" em ${ficheiros.length} ficheiros` : `${faltas.length}: ` + faltas.slice(0, 6).join("; "));
}


for (const r of results) {
  console.log(`${r.ok ? "✓" : "✗"} ${r.name} — ${r.detail}`);
  if (!r.ok) allOk = false;
}

if (!allOk) {
  console.error("\n❌ Validation failed — um ou mais contratos parseáveis estão fora de sincronia com os parsers do deck-builder. Deck cai em fallback hardcoded até isto ser corrigido.");
  process.exit(1);
}
console.log("\n✅ Todos os contratos parseáveis válidos.");
