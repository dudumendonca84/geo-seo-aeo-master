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
7. Actualiza:
   - skills/geo-seo-aeo-master/destaque-ai-self/audit-baseline.md — substitui completamente com a nova auditoria (score global /100, scorecard 12 categorias, top findings cross-dimensional, plano em 4 horizontes)
   - skills/geo-seo-aeo-master/destaque-ai-self/improvements-backlog.md — move items resolvidos para DONE, adiciona items novos, re-prioritiza (P0-P3)
   - skills/geo-seo-aeo-master/destaque-ai-self/audit-history.md — adiciona entry datada com delta vs semana anterior (score global, score por categoria, items movidos para DONE, items novos)
8. Commit + push directo ao branch main com mensagem: "audit: YYYY-MM-DD destaque.ai SINAL self-audit". NÃO abras pull request — esta é uma routine autónoma; faz `git push` directo a `main`. Se falhar por branch protection, reporta o erro em vez de criar PR.

Tom: sóbrio Economist style. Sem hype. Sem buzzwords ("game-changer", "revolutionary", "10x"). Números concretos com unidade e data. Honesto sobre o que destaque.ai ainda não tem feito — não inventar urgência. Caveats explícitos quando dados não verificáveis (ex: PageSpeed Insights rate-limited; manual prompt-test em determinado engine não accessível por geo-restriction). Crisis-response protocol (SKILL.md §14) aplica-se se for detectada menção negativa hallucinated em qualquer LLM.
