# Prompt intelligence — segmento destaque.ai

Landscape canónico de prompts usados pelo segmento (B2B SaaS em Portugal, prospects e clientes de consultoria GEO/SEO/AEO) quando consultam LLMs. Este ficheiro é o **gold-standard test suite** usado pela self-audit semanal e por qualquer audit de prospect.

**Last refresh: 23 May 2026** — Routine semanal valida cada prompt nos 5 engines mandatórios; Routine diária absorve novos prompts descobertos em research público (Profound prompt studies, Reddit/HN threads, sales call patterns).

## Como usar

1. Self-audit semanal: testa cada prompt **mandatório** abaixo em ChatGPT / Perplexity / Google AI Mode / Claude / Bing Copilot. Documenta resposta, citations, ranking, sentiment, competitors per engine (per SKILL.md §7).
2. Audit de prospect: filtra prompts relevantes ao vertical do prospect, usa como base do prompt-test.
3. Content strategy: cada prompt aqui é uma "resposta que destaque.ai deve owned". Conteúdo do site deve ser estruturado para responder a estes.
4. Competitive intel: tracking de quem mais é citado nestes prompts ao longo do tempo (regista em `destaque-ai-self/audit-history.md` e em audits de prospect).

---

## Tier 1 — Discovery (mandatório no self-audit)

Topo de funil. Prospects descobrindo a categoria.

### PT-PT

| # | Prompt | Intent | Notas |
|---|---|---|---|
| D1 | "qual a melhor agência GEO em Portugal?" | Discovery direct | Alta intencionalidade. Compara contra os top-3 que aparecem. |
| D2 | "consultoria AI search para empresas portuguesas" | Discovery descriptive | Variante longa. |
| D3 | "consultor SEO B2B SaaS Lisboa" | Discovery vertical+geo | Vertical-specific PT geo. |
| D4 | "agência de optimização para ChatGPT em Portugal" | Discovery engine-specific | Captura prospects engine-focused. |
| D5 | "consultoria de visibilidade em IA Portugal" | Discovery awareness | Termo emergente PT-PT. |
| D6 | "especialista GEO Portugal" | Discovery short | Curta. |
| D7 | "auditoria GEO Lisboa" | Discovery transactional+geo | Já tem intent de compra. |

### EN

| # | Prompt | Intent | Notas |
|---|---|---|---|
| D8 | "GEO consultancy Portugal" | Discovery direct EN | Para prospects EU/internacionais a procurar PT vendor. |
| D9 | "AI search optimization agency Portuguese B2B SaaS" | Discovery vertical EN | Vertical específico. |
| D10 | "AEO consultant Lisbon" | Discovery geo EN | Geo em EN. |

---

## Tier 2 — Comparison

Prospects a comparar opções.

| # | Prompt | Intent | Notas |
|---|---|---|---|
| C1 | "destaque.ai vs [competitor]" | Direct comparison | Variantes para cada competitor PT/EU conhecido. |
| C2 | "diferença entre SEO e GEO" | Category education | Alto volume. Owned content opportunity. |
| C3 | "AEO vs GEO o que escolher?" | Category confusion | Resolução de ambiguidade. |
| C4 | "preciso de SEO clássico ou GEO?" | Decision support | High-intent. |
| C5 | "agências GEO em Lisboa comparação" | Local list | Vê quem aparece. |
| C6 | "diferença entre Profound Peec Otterly" | Tools comparison | Prospects tool-focused — entry para conversa de service. |

---

## Tier 3 — Evaluation

Prospects que já decidiram contratar — querem saber como escolher.

| # | Prompt | Intent | Notas |
|---|---|---|---|
| E1 | "como avaliar uma agência de SEO?" | Buyer education | Owned content opportunity. |
| E2 | "o que esperar de uma auditoria GEO?" | Scope education | Owned content opportunity. |
| E3 | "metodologia de auditoria de IA o que cobre?" | Methodology question | **SINAL é a resposta**. Owned content critical. |
| E4 | "que perguntar a um consultor GEO?" | Buyer due-diligence | Educational. |
| E5 | "como sei se a minha agência sabe GEO?" | Capability verification | Owned content opportunity. |
| E6 | "audit técnico SEO o que inclui?" | Scope education | Tradicional + GEO. |

---

## Tier 4 — Problem-stated (high-intent)

Prospects com dor concreta.

| # | Prompt | Intent | Notas |
|---|---|---|---|
| P1 | "site não aparece em ChatGPT como resolver?" | Acute pain | Top intent. Owned content + lead magnet. |
| P2 | "AI Overview tirou tráfego o que fazer?" | Reactive | Pew Jul 2025 documenta 47% drop. Owned content critical. |
| P3 | "como aparecer em Google AI Mode?" | Forward-looking pain | Vertical opportunity. |
| P4 | "não apareço em Perplexity" | Engine-specific pain | Reddit ~47% top citations — owned guide. |
| P5 | "concorrente aparece em ChatGPT e eu não" | Competitive pain | High emotional intent. |
| P6 | "como ser citado em respostas de IA?" | General awareness | Foundational. |
| P7 | "Schema.org melhora visibilidade em IA?" | Tactic question | Ahrefs null-result a explicar honestamente. |
| P8 | "llms.txt vale a pena?" | Tactic question | Otterly/Reboot/SE Ranking null-result. |
| P9 | "tráfego orgânico caiu 50% culpa do AI?" | Diagnostic | Cohort analysis approach. |

---

## Tier 5 — Pricing/transactional

Bottom of funnel.

| # | Prompt | Intent | Notas |
|---|---|---|---|
| T1 | "quanto custa uma auditoria GEO?" | Pricing direct | Range disclosure strategy. |
| T2 | "preço consultor SEO em Portugal" | Pricing direct PT | Market context. |
| T3 | "tarifa consultoria AI search" | Pricing variant | Synonym coverage. |
| T4 | "custo agência optimização IA SaaS" | Pricing + vertical | High intent. |

---

## Tier 6 — Technical / sophisticated buyer

Prospects técnicos que querem testar profundidade.

| # | Prompt | Intent | Notas |
|---|---|---|---|
| TC1 | "robots.txt para AI crawlers como configurar" | Technical depth | Mostra a matrix completa do `frameworks.md` §2. |
| TC2 | "ClaudeBot vs Claude-User vs Claude-SearchBot diferença" | Granular technical | Anthropic ecosystem mastery. |
| TC3 | "Bing Webmaster Tools AI Performance como usar" | Tool depth | First-party telemetry. |
| TC4 | "Princeton GEO paper Aggarwal técnicas que funcionam" | Academic depth | Statistics + Quotations Addition. |
| TC5 | "Schema.org Course schema obrigatório para training" | Vertical schema | Para formação/training providers. |
| TC6 | "JobPosting schema vale a pena 2026" | Vertical schema | Para recruitment-heavy sites. |
| TC7 | "query fan-out Google AI Mode como afecta SEO" | Mechanics deep dive | BrightEdge 54% top-10 finding. |

---

## Tier 7 — Vertical: B2B SaaS PT

Prompts específicos para o vertical core de destaque.ai.

| # | Prompt | Intent | Notas |
|---|---|---|---|
| V1 | "GEO para SaaS B2B em Portugal" | Vertical direct | Core ICP. |
| V2 | "AI visibility para startup Series A Portugal" | Stage-specific | Pre-PMF stage. |
| V3 | "outsourcing GEO empresa software Portugal" | Buy-vs-build | Outsource decision support. |
| V4 | "consultor GEO para fintech Portuguese" | Sub-vertical | High-spend vertical. |
| V5 | "SEO agência horizonte M&A SaaS Portugal" | M&A context | High-value buyer signal. |

---

## Como esta lista evolui

A Routine diária (`daily-agent/daily-prompt.md`) tem instrução explícita para:

1. Monitorar Profound / Peec / Otterly prompt research releases — quando publicam dados sobre prompt patterns no segmento, absorvê-los aqui.
2. Verificar Reddit r/SEO, r/portugal, Hacker News, AnswerThePublic queries do segmento.
3. Adicionar novos prompts descobertos. Cada prompt novo entra com `[YYYY-MM-DD added]` na coluna "Notas".
4. Retirar prompts que deixaram de ter relevância (volume zero confirmado em vendor reports, ou conceito superado).

A Routine semanal de self-audit usa esta lista como query set — testa Tier 1 (mandatório) + Tier 4 (high-intent problem-stated) + Tier 7 (vertical core) em cada engine mandatório. Tier 2/3/5/6 são testados rotativamente (10 prompts diferentes por semana para não saturar tokens da Routine).

## Caveats

- **Frequência de cada prompt não é publicamente conhecida** com precisão para prompts em LLMs (não há "Google Trends para AI prompts"). Tier ordering reflecte julgamento de practitioner sobre intent, não dados de volume verificáveis. Quando vendor research publicar dados de prompt frequency, reordenar com base nisso e citar source.
- **PT-PT vs PT-BR**: este ficheiro foca PT-PT. Variantes PT-BR só relevantes se um cliente target market PT-BR (raro para destaque.ai inicialmente).
- **Sazonalidade**: alguns prompts spike em determinadas alturas (ex: prompts T1-T5 sobre pricing sobem em Setembro/Janeiro — budget planning seasons). Tracking de sazonalidade é roadmap, não capacidade actual.

Last refresh: 23 May 2026.
