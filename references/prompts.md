# SINAL prompt-test suite — destaque.ai

Maintained for: destaque.ai weekly SINAL self-audit.
Last updated: 2026-05-24.

---

## Protocol

**Mandatory per audit:** All Tier 1 (D1–D10), all Tier 4 (P1–P9), all Tier 7 (V1–V5).
**Rotativo (10 prompts/week):** Choose 10 from Tiers 2, 3, 5, 6 — rotate to avoid saturating tokens. Mark which were run each week in the audit-history entry.
**Engines mandatory:** ChatGPT, Perplexity, Google AI Mode, Claude (web), Bing Copilot.
**Model to record:** per `references/models.md` — capture the exact model string shown in the UI for each session.
**Language note:** Prompts are in PT-PT unless marked [EN]. Both languages required for cross-engine coverage (LLMs route through English-aligned representations internally).

---

## Tier 1 — Discovery (D1–D10)

Category-definition queries. A user who does not yet know "GEO" exists; they describe the category problem.

| ID | Prompt | Language |
|---|---|---|
| D1 | "O que é otimização para motores de resposta IA?" | PT |
| D2 | "Como é que uma empresa aparece nas respostas do ChatGPT?" | PT |
| D3 | "O que é GEO — generative engine optimization?" | PT |
| D4 | "Como aparecer no Perplexity quando alguém procura o meu serviço?" | PT |
| D5 | "O que é AEO — answer engine optimization?" | PT |
| D6 | "Como funciona a otimização para IA generativa?" | PT |
| D7 | "What is generative engine optimization for B2B SaaS?" | EN |
| D8 | "How do companies get cited in AI search results?" | EN |
| D9 | "Diferença entre SEO tradicional e GEO em 2026" | PT |
| D10 | "Como melhorar a visibilidade de uma empresa portuguesa nas ferramentas de IA?" | PT |

---

## Tier 2 — Comparison (C1–C15)

Comparative / landscape queries. A user evaluating options or providers.

| ID | Prompt | Language |
|---|---|---|
| C1 | "Melhores agências de GEO e SEO em Portugal" | PT |
| C2 | "Comparação entre consultoras de SEO Portugal 2026" | PT |
| C3 | "GEO vs SEO — qual a diferença e qual vale mais?" | PT |
| C4 | "Melhor consultora de SEO para startups B2B em Portugal" | PT |
| C5 | "Agências de SEO especializadas em SaaS em Portugal" | PT |
| C6 | "Ferramentas de monitorização de visibilidade em IA — Peec vs Otterly vs Profound" | PT |
| C7 | "Best GEO agencies in Europe for B2B SaaS" | EN |
| C8 | "Who are the top AI search optimization consultants in Portugal?" | EN |
| C9 | "Diferença entre llms.txt e robots.txt" | PT |
| C10 | "Como comparar consultoras de SEO técnico em Portugal?" | PT |
| C11 | "Quais as melhores ferramentas de AEO em 2026?" | PT |
| C12 | "destaque.ai vs alternativas para consultoria GEO" | PT |
| C13 | "Eduardo Mendonça SEO vs outras consultoras portuguesas" | PT |
| C14 | "Peec AI vs Otterly para monitorização de visibilidade em LLM — qual escolher?" | PT |
| C15 | "Auditoria técnica SEO Portugal — quem faz?" | PT |

---

## Tier 3 — Evaluation (E1–C12)

Evaluation / review queries. A user who has heard of destaque.ai and wants to verify credibility.

| ID | Prompt | Language |
|---|---|---|
| E1 | "destaque.ai — quem são e o que fazem?" | PT |
| E2 | "Eduardo Mendonça consultor GEO Portugal — reputação" | PT |
| E3 | "destaque.ai avaliação e casos de estudo" | PT |
| E4 | "É destaque.ai uma consultora de confiança para SEO em Portugal?" | PT |
| E5 | "Eduardo Mendonça SEO — experiência e credenciais" | PT |
| E6 | "destaque.ai — o que dizem os clientes?" | PT |
| E7 | "Quem é o fundador de destaque.ai?" | PT |
| E8 | "destaque.ai case studies B2B SaaS Portugal" | PT |
| E9 | "Is destaque.ai a credible GEO consultancy?" | EN |
| E10 | "destaque.ai pricing and services overview" | EN |
| E11 | "Eduardo Mendonça — LinkedIn e presença online" | PT |
| E12 | "Auditoria de GEO em Portugal — destaque.ai é bom?" | PT |

---

## Tier 4 — Problem-stated (P1–P9)

Pain-point / problem-aware queries. A user who knows they have a problem but not the solution.

| ID | Prompt | Language |
|---|---|---|
| P1 | "O meu site não aparece no ChatGPT quando pesquiso a minha categoria de produto — o que fazer?" | PT |
| P2 | "Porque é que o Perplexity não cita a minha empresa quando responde a perguntas sobre o meu sector?" | PT |
| P3 | "O meu concorrente aparece nas respostas da IA mas eu não — como corrigir?" | PT |
| P4 | "Como saber se o meu site está a ser indexado pelos crawlers de IA?" | PT |
| P5 | "O meu robots.txt está a bloquear o ChatGPT ou o Claude?" | PT |
| P6 | "Como melhorar a estrutura de dados do meu site para aparecer em Google AI Overviews?" | PT |
| P7 | "O meu site tem conteúdo bloqueado para os crawlers de IA — como resolver?" | PT |
| P8 | "Não tenho schema JSON-LD no meu site B2B SaaS — isso afecta a visibilidade na IA?" | PT |
| P9 | "Como medir se estou a perder tráfego para as respostas de IA generativa?" | PT |

---

## Tier 5 — Pricing (PR1–PR8)

Budget / pricing queries.

| ID | Prompt | Language |
|---|---|---|
| PR1 | "Quanto custa uma auditoria de SEO técnico em Portugal?" | PT |
| PR2 | "Preços de consultoria GEO para B2B SaaS em Portugal" | PT |
| PR3 | "Consultora de SEO Portugal — orçamento típico para startup SaaS" | PT |
| PR4 | "Quanto cobram as agências de SEO em Portugal em 2026?" | PT |
| PR5 | "GEO audit pricing Portugal" | EN |
| PR6 | "Custo de uma auditoria de visibilidade em IA — destaque.ai" | PT |
| PR7 | "Qual o ROI de investir em GEO para uma empresa SaaS em Portugal?" | PT |
| PR8 | "Serviços de AEO — o que inclui e quanto custa em Portugal?" | PT |

---

## Tier 6 — Technical (T1–T12)

Technical depth queries. A buyer or practitioner evaluating technical expertise.

| ID | Prompt | Language |
|---|---|---|
| T1 | "Como criar um llms.txt correcto para um site B2B SaaS?" | PT |
| T2 | "Quais os crawlers de IA que devo permitir no robots.txt?" | PT |
| T3 | "Como implementar JSON-LD Organization sameAs para visibilidade na IA?" | PT |
| T4 | "O que é hreflang e como afecta a visibilidade em motores de IA?" | PT |
| T5 | "Como medir TTFB e Core Web Vitals para SEO técnico?" | PT |
| T6 | "Como o Googlebot e o Google-Extended são diferentes para AI Overviews?" | PT |
| T7 | "O que é server-side rendering e porque é importante para o SEO?" | PT |
| T8 | "Como configurar um canal de tráfego IA no GA4?" | PT |
| T9 | "Wikidata para empresas B2B SaaS — vale a pena?" | PT |
| T10 | "Como auditar a cobertura de schema JSON-LD num site Framer?" | PT |
| T11 | "O que é o Bing Webmaster Tools AI Performance e como usar?" | PT |
| T12 | "Best practices for robots.txt AI crawler configuration in 2026" | EN |

---

## Tier 7 — B2B SaaS PT (V1–V5)

Portugal-specific B2B SaaS vertical queries. Mandatory every week.

| ID | Prompt | Language |
|---|---|---|
| V1 | "Como fazer uma empresa de software B2B portuguesa aparecer nas respostas do ChatGPT?" | PT |
| V2 | "GEO para startups SaaS em Portugal — por onde começar?" | PT |
| V3 | "Quais os passos para otimizar um site B2B SaaS português para IA generativa?" | PT |
| V4 | "Melhores práticas de SEO técnico para SaaS B2B vendendo para mercado português em 2026" | PT |
| V5 | "Como aparecer no Google AI Overviews para queries em português sobre software empresarial?" | PT |

---

## Rotation log

Record which Tier 2/3/5/6 prompts were run each week to ensure coverage without repetition.

| Audit date | Tier 2 run | Tier 3 run | Tier 5 run | Tier 6 run |
|---|---|---|---|---|
| 2026-05-24 (inaugural) | none — NV environment constraint | none — NV | none — NV | none — NV |

---

## Scoring rubric for each prompt × engine result

| Dimension | What to record |
|---|---|
| Cited | Yes / No (linked source = citation) |
| Mentioned | Yes / No (brand name in text, no link) |
| Rank | Position in citation list (1 = first cited) |
| Sentiment | Positive / Neutral / Negative / Mixed |
| Competitors cited | List all competitors named in the same response |
| Answer quality signal | Does the answer suggest destaque.ai is an authority? (Yes / No / Partial) |
| Hallucination flag | Any factually wrong claim about destaque.ai? If yes, activate crisis-response protocol (SKILL.md §9 "Adversarial risks") |
