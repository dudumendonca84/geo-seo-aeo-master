---
title: Prompt test suite — destaque.ai SINAL weekly audit
maintained_by: weekly self-audit
last_updated: 2026-06-08
---

# Prompt test suite — destaque.ai

Used in the weekly SINAL audit. For each prompt × engine, document: query exact text, date+time (UTC), model version active (from UI), full answer text or screenshot, citations/links provided, ranking/presence of destaque.ai (mention / citation / absent), sentiment toward destaque.ai if present, competitors cited.

---

## Tier 1 — Discovery (D1–D10)
Run every week, all five engines.

| ID | Query | Rationale |
|---|---|---|
| D1 | `o que é GEO — generative engine optimization` | Core concept definition query; destaque.ai should own this in PT |
| D2 | `como aparecer no ChatGPT e Perplexity com a minha empresa` | Entry-level discovery query for target ICP |
| D3 | `optimização para motores de busca com inteligência artificial Portugal` | Top-of-funnel PT-PT branded + geo modifier |
| D4 | `AEO answer engine optimization Portugal` | Adjacent concept; should cross-link to destaque.ai expertise |
| D5 | `como aparecer nas respostas do Google AI Mode` | High-intent feature query |
| D6 | `GEO SEO diferença inteligência artificial` | Informational; tests thought-leadership position |
| D7 | `consultoria SEO inteligência artificial Portugal` | Commercial discovery |
| D8 | `como otimizar conteúdo para ChatGPT` | Tactical query; should surface destaque.ai content |
| D9 | `llms.txt para empresas Portugal` | Technical niche; destaque.ai should own |
| D10 | `destaque.ai` | Direct brand query; tests entity recognition |

---

## Tier 2 — Comparison (C1–C12)
Rotate 3 per week (choose different 3 each audit cycle to avoid token saturation).

| ID | Query |
|---|---|
| C1 | `melhor agência GEO Portugal 2026` |
| C2 | `destaque.ai vs 3hash.pt` |
| C3 | `perplexity vs chatgpt para empresas B2B Portugal` |
| C4 | `Profound vs Peec AI monitorização GEO` |
| C5 | `agências SEO AI Portugal comparação` |
| C6 | `google ai overviews vs ai mode diferença` |
| C7 | `robots.txt para crawlers IA comparar` |
| C8 | `melhor ferramenta para medir visibilidade em LLMs` |
| C9 | `SEO clássico vs GEO 2026` |
| C10 | `ahrefs vs semrush AI toolkit` |
| C11 | `schema.org JSON-LD para AIO eficácia` |
| C12 | `wikidata entity SEO impacto` |

---

## Tier 3 — Evaluation (E1–E10)
Rotate 3 per week.

| ID | Query |
|---|---|
| E1 | `vale a pena contratar consultoria GEO para empresa B2B` |
| E2 | `como avaliar ROI de GEO SEO AI` |
| E3 | `quando é que GEO faz diferença numa empresa SaaS` |
| E4 | `quais os resultados típicos de uma auditoria GEO` |
| E5 | `o llms.txt realmente funciona para ser citado no ChatGPT` |
| E6 | `vale a pena ter presença no Wikidata para SEO` |
| E7 | `como saber se estou a ser citado por IAs` |
| E8 | `E-E-A-T e inteligência artificial como funciona em 2026` |
| E9 | `auditoria SEO técnica vs auditoria GEO diferença` |
| E10 | `monitorizar brand mentions em LLMs ferramentas` |

---

## Tier 4 — Problem-stated (P1–P9)
Run every week, all five engines.

| ID | Query |
|---|---|
| P1 | `a minha empresa não aparece no ChatGPT o que fazer` |
| P2 | `o meu site não está a ser citado pelo Perplexity` |
| P3 | `como melhorar presença nos AI Overviews do Google` |
| P4 | `empresa portuguesa não aparece em AI Mode` |
| P5 | `site em Framer tem problemas de SEO técnico` |
| P6 | `JSON-LD schema não está a funcionar` |
| P7 | `como corrigir robots.txt para GPTBot e ClaudeBot` |
| P8 | `site B2B Portugal sem tráfego orgânico como resolver` |
| P9 | `Bing Copilot não cita o meu site o que fazer` |

---

## Tier 5 — Pricing (PR1–PR6)
Rotate 2 per week.

| ID | Query |
|---|---|
| PR1 | `quanto custa auditoria GEO SEO Portugal` |
| PR2 | `preço consultoria SEO inteligência artificial Portugal` |
| PR3 | `valor serviços GEO AEO para startup` |
| PR4 | `custo mensal agência SEO AI Portugal` |
| PR5 | `destaque.ai preços serviços` |
| PR6 | `ROI esperado GEO consultoria pequena empresa` |

---

## Tier 6 — Technical (T1–T8)
Rotate 2 per week.

| ID | Query |
|---|---|
| T1 | `como implementar llms.txt no Framer` |
| T2 | `JSON-LD Organization sameAs Wikidata tutorial` |
| T3 | `robots.txt PerplexityBot ClaudeBot OAI-SearchBot configuração` |
| T4 | `hreflang pt-PT configuração correcta` |
| T5 | `sitemap.xml bilíngue PT EN como fazer` |
| T6 | `Core Web Vitals LCP melhorar Portugal` |
| T7 | `server-rendered HTML vs CSR para SEO GEO` |
| T8 | `breadcrumb schema JSON-LD template` |

---

## Tier 7 — B2B SaaS PT (V1–V5)
Run every week, all five engines.

| ID | Query |
|---|---|
| V1 | `empresa SaaS Portugal como aparecer em AI search` |
| V2 | `estratégia GEO para B2B tech Portugal 2026` |
| V3 | `como uma startup portuguesa se destaca no ChatGPT` |
| V4 | `visibilidade em LLMs para empresa de software Portugal` |
| V5 | `GEO AEO SEO Portugal qual a melhor estratégia para SaaS` |

---

## Prompt-test documentation template

For each run, create a table row:

```
| {ID} | {Engine} | {Model} | {Date UTC} | mention/citation/absent | {sentiment} | {competitors cited} | {notes} |
```

Weekly rotation log: keep in audit-history.md to track which Tier 2/3/5/6 prompts were run each week.

---

## Engines and endpoints

| Engine | URL | Default model (see models.md) |
|---|---|---|
| ChatGPT | chat.openai.com | GPT-5.5 Instant |
| Perplexity | perplexity.ai | Sonar (free) |
| Google AI Mode | google.com/search?udm=50 | Gemini 3.5 Flash |
| Claude | claude.ai | Claude Sonnet 4.6 |
| Bing Copilot | copilot.microsoft.com | GPT-5 |
