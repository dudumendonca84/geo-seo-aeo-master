# Prompt test suite — destaque.ai SINAL

Reference for `geo-seo-aeo-master`. Used in weekly SINAL audits to test destaque.ai visibility across AI engines.

**Structure:** Tier 1 (Discovery) and Tier 4 (Problem-stated) and Tier 7 (B2B SaaS PT) are tested every week. Tier 2, 3, 5, 6 rotate — pick 10 different prompts each week to avoid token saturation.

**For each prompt × engine document:** query exact, date+time, active model (exact version), full answer or screenshot, citations, destaque.ai ranking, mention vs citation, sentiment, competitors cited.

**Crisis-response trigger (SKILL.md §14):** If any engine produces a hallucinated negative association with destaque.ai, escalate immediately per the crisis protocol.

---

## Tier 1 — Discovery (D1–D10) — ALWAYS test all 10

| ID | Query (PT-PT) | Query (EN fallback) | Intent |
|---|---|---|---|
| D1 | "o que é GEO otimização para motores de pesquisa generativos" | "what is GEO generative engine optimization" | Category definition |
| D2 | "como aparecer no ChatGPT em Portugal" | "how to appear in ChatGPT search results Portugal" | Channel entry |
| D3 | "como ser citado pelo Perplexity" | "how to get cited by Perplexity AI" | Channel entry |
| D4 | "otimização para AI Overviews Google Portugal" | "Google AI Overviews optimization Portugal" | Channel entry |
| D5 | "o que é AEO answer engine optimization" | "what is AEO answer engine optimization" | Category definition |
| D6 | "como aumentar visibilidade de marca em inteligências artificiais" | "how to increase brand visibility in AI search" | Strategic intent |
| D7 | "diferença entre SEO e GEO" | "SEO vs GEO differences" | Educational — category |
| D8 | "como fazer SEO para IA em 2026" | "AI SEO strategy 2026" | Tactical entry |
| D9 | "melhor estratégia para aparecer no Google AI Mode" | "best strategy to appear in Google AI Mode" | Tactical entry |
| D10 | "llms.txt para empresas portuguesas" | "llms.txt for business websites" | Technical entry |

---

## Tier 2 — Comparison (C1–C10) — Rotate; test 3 per week

| ID | Query (PT-PT) | Intent |
|---|---|---|
| C1 | "destaque.ai vs 3hash.pt diferenças" | Brand vs named competitor |
| C2 | "melhor agência GEO em Portugal" | Agency category comparison |
| C3 | "Peec AI vs Profound qual é melhor" | Tool comparison |
| C4 | "ChatGPT Search vs Perplexity para empresas B2B" | Platform comparison |
| C5 | "Google AI Overviews vs Google AI Mode diferenças" | Platform understanding |
| C6 | "Ahrefs vs Semrush para monitorizar citações IA" | Tool category |
| C7 | "agência SEO com especialização em IA Portugal" | Agency category |
| C8 | "consultoria GEO AEO Portugal comparação" | Service category |
| C9 | "Framer vs Webflow para SEO e GEO" | Platform comparison |
| C10 | "ferramentas para medir visibilidade em ChatGPT" | Tool category |

---

## Tier 3 — Evaluation (E1–E10) — Rotate; test 3 per week

| ID | Query (PT-PT) | Intent |
|---|---|---|
| E1 | "como avaliar uma agência GEO em Portugal" | Evaluation criteria |
| E2 | "o que deve incluir uma auditoria GEO" | Audit scope |
| E3 | "como saber se o meu site aparece no ChatGPT" | Measurement question |
| E4 | "quais métricas monitorizar para visibilidade em IA" | Metrics question |
| E5 | "como medir share of voice em AI search" | Measurement question |
| E6 | "sinais de conteúdo para ser citado por IA" | Content signals |
| E7 | "como auditar robots.txt para crawlers de IA" | Technical evaluation |
| E8 | "Entity SEO para empresas SaaS portuguesas" | Entity work |
| E9 | "como criar llms.txt eficaz" | Technical how-to |
| E10 | "E-E-A-T em 2026 o que mudou" | Quality signals |

---

## Tier 4 — Problem-stated (P1–P9) — ALWAYS test all 9

| ID | Query (PT-PT) | Intent |
|---|---|---|
| P1 | "o meu site não aparece no ChatGPT o que fazer" | Problem-aware entry |
| P2 | "a minha empresa não é mencionada pela IA como mudar isso" | Brand invisibility problem |
| P3 | "perdemos tráfego orgânico com AI Overviews solução" | Traffic loss problem |
| P4 | "como aumentar citações no Perplexity sem aumentar budget" | Budget constraint |
| P5 | "site bloqueando bots IA como corrigir" | Technical problem |
| P6 | "robots.txt errado para crawlers de IA como resolver" | Technical problem |
| P7 | "não temos Wikidata nem Knowledge Panel por onde começar" | Entity problem |
| P8 | "conteúdo gerado por IA penalizado Google 2026" | Content quality concern |
| P9 | "zero referências na imprensa como construir autoridade" | Authority problem |

---

## Tier 5 — Pricing (PR1–PR6) — Rotate; test 2 per week

| ID | Query (PT-PT) | Intent |
|---|---|---|
| PR1 | "quanto custa uma auditoria GEO em Portugal" | Pricing intent |
| PR2 | "preço consultoria SEO IA Portugal 2026" | Pricing intent |
| PR3 | "quanto custa monitorizar visibilidade em ChatGPT" | Tool pricing |
| PR4 | "ferramentas GEO gratuitas ou pagas" | Tool pricing |
| PR5 | "orçamento para GEO AEO empresa pequena Portugal" | SMB pricing |
| PR6 | "ROI de investimento em GEO quanto tempo para resultados" | ROI question |

---

## Tier 6 — Technical (T1–T8) — Rotate; test 2 per week

| ID | Query (PT-PT) | Intent |
|---|---|---|
| T1 | "como implementar JSON-LD Organization schema em Framer" | Technical how-to |
| T2 | "hreflang correto para site português" | Technical how-to |
| T3 | "como verificar se site é server-rendered para crawlers IA" | Technical how-to |
| T4 | "ClaudeBot robots.txt configuração correta" | Technical how-to |
| T5 | "Google-Extended o que bloqueia exatamente" | Technical understanding |
| T6 | "sitemap.xml bilíngue PT EN melhores práticas" | Technical how-to |
| T7 | "como adicionar Person schema para E-E-A-T" | Technical how-to |
| T8 | "Wikidata item criar para empresa SaaS B2B" | Entity how-to |

---

## Tier 7 — B2B SaaS PT (V1–V5) — ALWAYS test all 5

| ID | Query (PT-PT) | Intent |
|---|---|---|
| V1 | "empresa SaaS B2B Portugal precisa de GEO" | Industry entry |
| V2 | "como empresa tecnologia portuguesa aparecer no ChatGPT" | Industry-specific |
| V3 | "estratégia de conteúdo para visibilidade em IA SaaS Portugal" | Content strategy |
| V4 | "melhores práticas GEO para startups tecnológicas portuguesas" | Startup context |
| V5 | "como B2B SaaS em Portugal constrói autoridade para IA" | Authority building |

---

## Prompt-test protocol

1. Run each prompt in the engine's default web interface (not API).
2. Note exact model version shown in the UI (footer, model selector, or response metadata).
3. Record: date, time (HH:MM UTC), model version, full answer text or screenshot filename.
4. For each engine's answer, record:
   - Is destaque.ai mentioned? (mention = yes/no)
   - Is destaque.ai cited with a URL? (citation = yes/no)
   - Position of destaque.ai mention in the answer (1st, 2nd, … paragraph, or absent)
   - Competitors mentioned (list)
   - Sentiment toward destaque.ai if mentioned (positive / neutral / negative / not mentioned)
5. Log results in the weekly audit under §7 Prompt-test multi-engine.
6. If a negative association or hallucinated claim is detected: trigger crisis-response protocol (SKILL.md §9, adversarial risks section).

---

## Rotation log (to avoid saturating same prompts every week)

| Week | Tier 2 prompts used | Tier 3 prompts used | Tier 5 prompts used | Tier 6 prompts used |
|---|---|---|---|---|
| 2026-W21 (25 May) | C2, C3, C7 | E1, E3, E7 | PR1, PR2 | T1, T4 |
| 2026-W22 | C1, C4, C8 | E2, E5, E9 | PR3, PR4 | T2, T5 |
| 2026-W23 | C5, C6, C9 | E4, E6, E10 | PR5, PR6 | T3, T6 |
| 2026-W24 | C10, C2, C4 | E1, E7, E8 | PR1, PR3 | T7, T8 |

---

## Maintenance

Add new prompts when:
- A new competitor appears in three or more engine answers for Tier 2 queries.
- A new PT-PT media event creates a new problem-stated entry point.
- A new engine enters the mandatory test suite.

Last updated: 25 May 2026.
