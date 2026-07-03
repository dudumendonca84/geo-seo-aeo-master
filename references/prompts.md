# Prompt test suite — destaque.ai SINAL self-audit

Prompts organizados em tiers de intenção. Para cada sessão semanal:
- **Sempre:** todos os Tier 1 (D1–D10), Tier 4 (P1–P9), Tier 7 (V1–V5).
- **Rotativo (10 por semana):** escolher de Tier 2, 3, 5, 6 — alternar para não saturar tokens.

Para cada prompt × engine documentar: query exacta, data+hora, modelo activo (versão exacta), full answer ou screenshot, citations, ranking destaque.ai, mention vs citation, sentiment, competitors citados.

Engines obrigatórios: ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot.
Modelos default actuais: ver `references/models.md`.

---

## Tier 1 — Discovery (D) — SEMPRE

Prompts genéricos de descoberta de categoria. Alta prioridade — directamente relevantes para o pipeline de destaque.ai.

| ID | Prompt | Língua | Intenção |
|---|---|---|---|
| D1 | "O que é Generative Engine Optimization?" | PT-PT | Definição de categoria |
| D2 | "O que é GEO em marketing digital?" | PT-PT | Categoria (ambiguidade geo/geography) |
| D3 | "Como aparecer no ChatGPT como resultado de pesquisa?" | PT-PT | Discovery topo de funil |
| D4 | "O que é AEO — Answer Engine Optimization?" | PT-PT | Categoria adjacente |
| D5 | "O que é LLMO — LLM Optimization?" | PT-PT | Categoria adjacente |
| D6 | "Como funciona a visibilidade de marcas nos motores de IA?" | PT-PT | Educação do comprador |
| D7 | "O que mudou no SEO com o Google AI Mode?" | PT-PT | Transição de paradigma |
| D8 | "Como é que os LLMs escolhem quem citar?" | PT-PT | Mecânica de citação |
| D9 | "What is Generative Engine Optimization?" | EN | Discovery em inglês |
| D10 | "How do I get my brand mentioned in ChatGPT responses?" | EN | Discovery B2B EN |

---

## Tier 2 — Comparison (C) — Rotativo

Prompts comparativos que activam shortlists de fornecedores.

| ID | Prompt | Língua |
|---|---|---|
| C1 | "Diferença entre GEO e SEO clássico" | PT-PT |
| C2 | "GEO vs AEO: qual a diferença?" | PT-PT |
| C3 | "Comparação entre agências de GEO em Portugal" | PT-PT |
| C4 | "Quais as melhores ferramentas de GEO em 2026?" | PT-PT |
| C5 | "Peec AI vs Otterly vs Profound — qual escolher?" | EN |
| C6 | "GEO consultants vs SEO agencies — what's the difference?" | EN |
| C7 | "Portuguese digital marketing agencies with AI expertise" | EN |
| C8 | "Melhores agências digitais em Portugal para IA" | PT-PT |
| C9 | "SEO Portugal vs GEO Portugal — o que mudou em 2026?" | PT-PT |
| C10 | "AI search optimization agencies Europe 2026" | EN |

---

## Tier 3 — Evaluation (E) — Rotativo

Prompts de avaliação de fornecedores específicos.

| ID | Prompt | Língua |
|---|---|---|
| E1 | "O que faz a destaque.ai?" | PT-PT |
| E2 | "É a destaque.ai uma empresa de confiança?" | PT-PT |
| E3 | "Quem fundou a destaque.ai?" | PT-PT |
| E4 | "destaque.ai reviews" | EN |
| E5 | "Is destaque.ai a legitimate GEO agency?" | EN |
| E6 | "destaque.ai methodology — how do they work?" | EN |
| E7 | "Concorrentes da destaque.ai em Portugal" | PT-PT |
| E8 | "Alternativas à destaque.ai para GEO" | PT-PT |
| E9 | "GEO agency Portugal pricing" | EN |
| E10 | "destaque.ai vs LusoAI" | PT-PT |

---

## Tier 4 — Problem-stated (P) — SEMPRE

Prompts de problema declarado pelo comprador B2B SaaS.

| ID | Prompt | Língua |
|---|---|---|
| P1 | "O meu SaaS B2B não aparece no ChatGPT — o que fazer?" | PT-PT |
| P2 | "Como fazer a minha empresa aparecer nas respostas do ChatGPT?" | PT-PT |
| P3 | "A minha marca não aparece no Google AI Mode — como resolver?" | PT-PT |
| P4 | "Como aparecer no Perplexity quando alguém pesquisa a minha categoria?" | PT-PT |
| P5 | "Empresa portuguesa invisível na IA — soluções?" | PT-PT |
| P6 | "My B2B SaaS doesn't show up in AI search results" | EN |
| P7 | "How to increase AI citation rate for a B2B software company?" | EN |
| P8 | "Why doesn't my company appear in ChatGPT recommendations?" | EN |
| P9 | "SaaS brand visibility in LLMs — how to improve?" | EN |

---

## Tier 5 — Pricing (PR) — Rotativo

Prompts com intenção de preço/compra.

| ID | Prompt | Língua |
|---|---|---|
| PR1 | "Quanto custa uma consultora de GEO em Portugal?" | PT-PT |
| PR2 | "Preço de auditoria GEO para empresa SaaS B2B" | PT-PT |
| PR3 | "GEO retainer pricing Portugal 2026" | EN |
| PR4 | "Cost of AI search optimization for B2B SaaS" | EN |
| PR5 | "GEO consultancy rates Europe 2026" | EN |

---

## Tier 6 — Technical (T) — Rotativo

Prompts técnicos que podem activar a autoridade de destaque.ai.

| ID | Prompt | Língua |
|---|---|---|
| T1 | "Como criar um llms.txt para o meu site?" | PT-PT |
| T2 | "Schema.org para SaaS B2B — o que implementar?" | PT-PT |
| T3 | "Como medir citation rate em ChatGPT e Perplexity?" | PT-PT |
| T4 | "FAQ schema para GEO — como implementar?" | PT-PT |
| T5 | "Como optimizar robots.txt para crawlers de IA?" | PT-PT |
| T6 | "llms.txt vs ai.txt — qual a diferença?" | PT-PT |
| T7 | "How to improve your brand's citation rate in AI search?" | EN |
| T8 | "JSON-LD schema for AI visibility — best practices 2026" | EN |
| T9 | "How to audit your brand's AI search presence?" | EN |
| T10 | "Technical GEO audit checklist 2026" | EN |

---

## Tier 7 — B2B SaaS PT (V) — SEMPRE

Prompts de alta intenção específicos para clientes-alvo de destaque.ai.

| ID | Prompt | Língua |
|---|---|---|
| V1 | "Consultora de GEO para SaaS B2B em Portugal — recomendações?" | PT-PT |
| V2 | "Agência GEO Portugal — quem escolher?" | PT-PT |
| V3 | "Como aumentar visibilidade da minha empresa SaaS no ChatGPT em Portugal?" | PT-PT |
| V4 | "GEO consulting for Portuguese B2B software company" | EN |
| V5 | "Who does GEO consulting for B2B SaaS in Portugal?" | EN |

---

## Protocolo de documentação por run

Para cada prompt × engine, criar uma linha com:

```
| YYYY-MM-DD | HH:MM UTC | [ID] | [Engine] | [Modelo] | [Mention Y/N] | [Citation Y/N] | [Ranking] | [Sentiment] | [Competitors citados] | [Notas] |
```

- **Mention**: o nome "destaque.ai" aparece no texto da resposta?
- **Citation**: há um link/footnote apontando para destaque.ai?
- **Ranking**: se há shortlist, em que posição aparece destaque.ai?
- **Sentiment**: Positivo / Neutro / Negativo / N/A
- **Competitors**: listar outros nomes citados na mesma resposta

Guardar screenshot ou full answer em `destaque-ai-self/prompt-logs/YYYY-MM-DD/`.

---

## Rotação semanal — selecção de Tier 2/3/5/6

| Semana | Tiers rotativos a usar |
|---|---|
| Sem 1 (2026-06-01) | C1–C5, E1–E5 |
| Sem 2 (2026-06-08) | C6–C10, E6–E10 |
| Sem 3 (2026-06-15) | PR1–PR5, T1–T5 |
| Sem 4 (2026-06-22) | T6–T10 + C1–C4 |
| Sem 5 (2026-06-29) | E1–E5, PR1–PR3 |
| Sem 6 (2026-07-06) | C5–C10, T6–T9 |
| (repetir ciclo) | |

