# Routine: `destaque-ai-self-audit-weekly`

**Schedule:** Segundas-feiras às 09:00 (Europe/Lisbon)
**Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
**Output:** `skills/geo-seo-aeo-master/destaque-ai-self/{audit-baseline.md, improvements-backlog.md, audit-history.md}`

---

## Prompt (copia tudo abaixo do `---`)

---

Hoje é {{TODAY}}. Vais fazer uma self-audit semanal ao site destaque.ai (https://destaque.ai) seguindo o método SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs) definido em skills/geo-seo-aeo-master/SKILL.md.

1. Lê skills/geo-seo-aeo-master/SKILL.md — secções § Methodology — SINAL, § Scope, § SINAL audit workflow (16 secções).
2. Lê skills/geo-seo-aeo-master/references/models.md para apanhar os modelos default actuais de cada engine. Se models.md tem >7 dias desde "Last refresh", refresh primeiro a partir das fontes Tier 1 (developers.google.com/search/blog, openai.com/news, anthropic.com/news, blogs.bing.com, deepmind.google/discover/blog, perplexity.ai/changelog) e actualiza models.md antes de prosseguir.
3. Faz a auditoria SINAL completa do destaque.ai cobrindo as 12 categorias do scorecard:
   - Técnica: TTFB (5 corridas curl PT, mediana), HTML weight, compression, Content-Encoding, security headers, sitemap, robots.txt (matrix de crawlers IA), hreflang, JSON-LD schema, llms.txt, server-rendered HTML check
   - Performance/CWV: LCP, INP, CLS (PageSpeed Insights se disponível)
   - On-page: title, meta, headings, alt coverage, bilingual hygiene
   - Schema: cobertura JSON-LD vs templates existentes
   - Optimização de imagens: alt %, image schema, formato
   - GEO técnica: llms.txt vs sitemap, multimodal grounding (image schema), prompt-test multi-engine (ver SKILL.md §7)
   - Conteúdo & topical authority: topics owned, original statistics, cadência
   - Entity & brand foundation: Wikidata QID, Knowledge Panel, sameAs, NAP, local presence (Google Business Profile, Bing Places, Apple Maps, pai.pt)
   - Authority & digital PR: Tier-1 PT media coverage, link graph, branded anchor
   - Sinais sociais: LinkedIn, GitHub, Reddit/HN, X
   - E-E-A-T on-site: named authors, credentials, case studies, certifications
   - Medição: GSC, GA4 AI channel, BWT AI Performance, monitoring tool, conversion attribution funnel
4. Prompt-test multi-engine. Abre skills/geo-seo-aeo-master/references/prompts.md e usa o test suite:
   - **Sempre**: todos os prompts Tier 1 (Discovery, D1-D10), todos os Tier 4 (Problem-stated, P1-P9), todos os Tier 7 (B2B SaaS PT, V1-V5)
   - **Rotativo**: 10 prompts diferentes por semana escolhidos de Tier 2 (Comparison), Tier 3 (Evaluation), Tier 5 (Pricing), Tier 6 (Technical) — alternar para não saturar tokens
   Engines mandatory: ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot. Usa os modelos default de cada engine per models.md. Para cada prompt × engine documenta: query exacta, data+hora, modelo activo (versão exacta), full answer ou screenshot, citations, ranking de destaque.ai, mention vs citation, sentiment, competitors citados.
5. Lê audit-baseline.md anterior (se existir) para comparar.
6. Lê daily-agent/news-feed.md das últimas 7 entradas para identificar mudanças no mercado que abrem novas oportunidades ou criam urgência para destaque.ai.
   **6b. Reconciliação news-feed → playbooks (passo fixo, toda a semana).** Para cada motor em `references/engine_playbooks.md`, verifica se alguma entrada do news-feed (não só as últimas 7 — usa pesquisa por nome do motor no ficheiro inteiro) **contradiz ou supera** o que o bloco afirma: uma estatística com estudo mais fresco a medir a mesma coisa, um mecanismo que mudou (novo modo de pesquisa, fontes preferidas, rollout), uma alavanca desmentida. O news-feed tem precedência por ser mais fresco. Se encontrares divergência, corrige o bloco (PT **e** o espelho EN) com fonte e data, e regista em `methodology-changelog.md`. Se nada divergiu, escreve uma linha no audit-history: "Reconciliação playbooks: sem divergências" — o passo corre sempre, o silêncio é que tem de ser explícito. (Precedente: a stat do top-10 orgânico no AIO esteve 2 meses superada no playbook porque esta reconciliação não existia; corrigida a 2026-08-08.)
7. Actualiza:
   - skills/geo-seo-aeo-master/destaque-ai-self/audit-baseline.md — substitui completamente com a nova auditoria (score global /100, scorecard 12 categorias, top findings cross-dimensional, plano em 4 horizontes)
   - skills/geo-seo-aeo-master/destaque-ai-self/improvements-backlog.md — move items resolvidos para DONE, adiciona items novos, re-prioritiza (P0-P3)
   - skills/geo-seo-aeo-master/destaque-ai-self/audit-history.md — adiciona entry datada com delta vs semana anterior (score global, score por categoria, items movidos para DONE, items novos)
   - skills/geo-seo-aeo-master/references/engine_playbooks.md — **só quando o prompt-test do ponto 4 contradiz ou refina o que lá está escrito**. O teste multi-engine é evidência empírica de como cada motor decide quem aparece: que fontes cita repetidamente (Reddit, Wikipedia, imprensa, docs do próprio site), se responde de memória ou pesquisa, se o bloco aparece de todo naquele mercado. Quando o observado diverge do bloco `### <engine>` (uma alavanca listada que os dados não sustentam, uma fonte dominante que o playbook não menciona, um motor que mudou de comportamento face à semana anterior), corrige esse bloco. Regras: formato "Como decide:" (mecanismo) + "Faz:" (acções numeradas, uma por linha, sem hard-wrap), no bloco PT **e** no espelho EN, sem travessões (o Tracker mostra isto ao cliente em runtime, secção "Como aparecer aqui"); estatística só com fonte e data; **uma semana de observação não derruba uma alavanca** — precisa de confirmação em duas auditorias seguidas ou de fonte primária do vendor; mudança de substância registada em `methodology-changelog.md`. Se nada divergiu, **não tocar no ficheiro** — silêncio é melhor que ruído.
8. **Se tocaste em `references/engine_playbooks.md` (ou em qualquer `references/`)**, corre `node scripts/validate-skill-tables.mjs` a partir da raiz do repo antes de commit. Exit code != 0 significa que partiste um contrato parseável consumido em runtime pelo Tracker ou pelo Deck Builder — corrige e re-corre; **não faças push com o validador vermelho**. Nos playbooks o modo de falha é silencioso: sem o header ou com uma key fora do formato `### <engine>`, a secção "Como aparecer aqui" desaparece de todos os cartões sem erro nenhum.
9. Commit + push ao branch da sessão com mensagem: "audit: YYYY-MM-DD destaque.ai SINAL self-audit". NÃO abras pull request. A sessão não consegue empurrar para `main` — quem leva ao main é o workflow `routine-automerge`, que faz merge automático de commits `claude/*` que comecem por `audit:` e toquem só caminhos de routine (`daily-agent/`, `destaque-ai-self/`, `references/`, `methodology-changelog.md`). O prefixo `audit:` na mensagem é obrigatório (é a assinatura que o automerge procura) e não podes tocar em ficheiros fora desses caminhos no mesmo commit — um ficheiro fora da lista trava o automerge inteiro. O validador corre outra vez dentro do workflow; se falhar lá, o merge não acontece e o erro fica nos Actions.

Tom: sóbrio Economist style. Sem hype. Sem buzzwords ("game-changer", "revolutionary", "10x"). Números concretos com unidade e data. Honesto sobre o que destaque.ai ainda não tem feito — não inventar urgência. Caveats explícitos quando dados não verificáveis (ex: PageSpeed Insights rate-limited; manual prompt-test em determinado engine não accessível por geo-restriction). Crisis-response protocol (SKILL.md §14) aplica-se se for detectada menção negativa hallucinated em qualquer LLM.
