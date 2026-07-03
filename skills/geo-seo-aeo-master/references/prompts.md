# Prompts — destaque.ai (single source of truth)

> **Consumidores:**
> 1. **Skill** (self-audit semanal) — usa § 4 Catálogo destaque.ai como test suite.
> 2. **Deck Builder** (`destaque-ai-deck-builder/src/lib/llm/prompts/generate-audit-prompts.ts`) — usa § 1 Princípios + § 2 Categorias + § 3 Distribuição para gerar prompts de auditoria para qualquer cliente.
>
> **Raw URL para Deck Builder:**
> `https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/prompts.md`

**Last refresh: 23 May 2026** — Routine semanal valida cada prompt do catálogo nos 5 engines mandatórios; Routine diária absorve novos prompts descobertos.

---

## 1. Princípios (para Deck Builder e self-audit)

- **Persona implícita**: cada prompt deve soar a decisor B2B real (CIO, CTO, CFO, Head of CX, VP Sales, Director de Operações, Procurement). Não nomeies a persona no texto — escreve como ela escreveria.
- **Contexto realista**: inclui tamanho da empresa, geografia (se relevante), vertical, restrições conhecidas. Prompts vagos produzem respostas vagas.
- **Intent claro**: cada prompt expressa um destes intents — `research`, `comparison`, `validation`, `migration`, `pricing`, `integration`, `pain_point`.
- **Nunca nomeies a marca do cliente**: queremos ver se aparece organicamente.
- **Português europeu (PT-PT)** por defeito; PT-BR só se o público-alvo for tipicamente brasileiro.
- **Varia a formulação**: evita quase-duplicados na mesma categoria.

---

## 2. Categorias canónicas

5 categorias que cobrem o espaço de prompts em audits de visibilidade IA. Usadas pelo Deck Builder para gerar prompts e pelo catálogo destaque.ai (§ 4) para classificar prompts existentes.

### 2.1 `generic_category`
Pergunta ampla sobre o tipo de serviço/produto, sem nomear empresas. Captura "o que existe no mercado" e também prompts problem-stated (dor concreta sem nomear vendor).

Intents típicos: `research`, `pain_point`.

Forma exemplo:
> "Quais são as principais soluções de [categoria] para empresas com [escala]? Quero perspectivar antes de iniciar um RFP."

Forma problem-stated:
> "O meu site não aparece em ChatGPT quando os meus prospects pesquisam [categoria]. Como resolvo?"

### 2.2 `direct_comparison`
Confronta fornecedores/soluções nomeados entre si.

Intents típicos: `comparison`, `validation`, `migration`.

Forma exemplo:
> "Estou a comparar [vendor A], [vendor B] e [vendor C] para [caso de uso] numa operação de [escala]. Em que critérios cada um se destaca?"

### 2.3 `local_recommendation`
Pede recomendações para uma geografia específica.

Intents típicos: `research`, `validation`.

Forma exemplo:
> "Sou [persona] numa [vertical] em [cidade/país] e preciso de fornecedor de [categoria] com [requisito local: suporte PT, presença, GDPR, conformidade]. Que opções recomendam?"

### 2.4 `feature_specific`
Foca uma funcionalidade ou capacidade técnica concreta.

Intents típicos: `integration`, `validation`.

Forma exemplo:
> "Que plataformas de [categoria] têm a melhor integração nativa com [sistema relevante: Salesforce, SAP, M365, etc.] e oferecem [capacidade-chave] em 2026?"

### 2.5 `price_comparison`
Pergunta sobre custos, planos ou orçamento.

Intents típicos: `pricing`, `comparison`.

Forma exemplo:
> "Para [escala], qual é o range de preço por [unidade: agente, utilizador, transacção] das principais soluções de [categoria] e que componentes costumam ser add-ons cobrados à parte?"

---

## 3. Distribuição por tier (Deck Builder)

| Tier         | Total | generic | direct_comp | local | feature | price |
|--------------|-------|---------|-------------|-------|---------|-------|
| `free`       | 5     | 1       | 1           | 1     | 1       | 1     |
| `diagnostic` | 30    | 8       | 8           | 6     | 4       | 4     |

Se mudares o conjunto de categorias (adicionar/remover), coordena com o repo `destaque-ai-deck-builder`: a constante `PROMPT_CATEGORIES` em `src/lib/llm/prompts/generate-audit-prompts.ts` e a tabela de distribuição em código têm de bater certo com este ficheiro.

---

## 4. Catálogo destaque.ai — prompts efectivos do segmento

Prompts reais que o segmento (B2B SaaS PT, prospects de consultoria GEO/SEO/AEO) usa quando consulta LLMs sobre a categoria. Organizados pelas 5 categorias canónicas. Cada entrada inclui intent + notas + tier de prioridade no self-audit.

### 4.1 `generic_category`

#### Discovery (research intent)

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| GD1 | "qual a melhor agência GEO em Portugal?" | PT-PT | Mandatory |
| GD2 | "consultoria AI search para empresas portuguesas" | PT-PT | Mandatory |
| GD3 | "consultor SEO B2B SaaS Lisboa" | PT-PT | Mandatory |
| GD4 | "agência de optimização para ChatGPT em Portugal" | PT-PT | Mandatory |
| GD5 | "consultoria de visibilidade em IA Portugal" | PT-PT | Mandatory |
| GD6 | "especialista GEO Portugal" | PT-PT | Mandatory |
| GD7 | "GEO consultancy Portugal" | EN | Mandatory |
| GD8 | "AI search optimization agency Portuguese B2B SaaS" | EN | Mandatory |

#### Problem-stated (pain_point intent — high-intent)

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| GP1 | "site não aparece em ChatGPT como resolver?" | PT-PT | Mandatory |
| GP2 | "AI Overview tirou tráfego o que fazer?" | PT-PT | Mandatory |
| GP3 | "como aparecer em Google AI Mode?" | PT-PT | Mandatory |
| GP4 | "não apareço em Perplexity" | PT-PT | Mandatory |
| GP5 | "concorrente aparece em ChatGPT e eu não" | PT-PT | Mandatory |
| GP6 | "como ser citado em respostas de IA?" | PT-PT | Mandatory |
| GP7 | "Schema.org melhora visibilidade em IA?" | PT-PT | Rotative |
| GP8 | "llms.txt vale a pena?" | PT-PT | Rotative |
| GP9 | "tráfego orgânico caiu 50% culpa do AI?" | PT-PT | Rotative |

#### Evaluation (research intent — buyer education)

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| GE1 | "como avaliar uma agência de SEO?" | PT-PT | Rotative |
| GE2 | "o que esperar de uma auditoria GEO?" | PT-PT | Rotative |
| GE3 | "metodologia de auditoria de IA o que cobre?" | PT-PT | Rotative |
| GE4 | "que perguntar a um consultor GEO?" | PT-PT | Rotative |
| GE5 | "como sei se a minha agência sabe GEO?" | PT-PT | Rotative |
| GE6 | "audit técnico SEO o que inclui?" | PT-PT | Rotative |

### 4.2 `direct_comparison`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| DC1 | "destaque.ai vs [competitor]" (variantes para cada competitor conhecido) | PT-PT | Rotative |
| DC2 | "diferença entre SEO e GEO" | PT-PT | Rotative |
| DC3 | "AEO vs GEO o que escolher?" | PT-PT | Rotative |
| DC4 | "preciso de SEO clássico ou GEO?" | PT-PT | Rotative |
| DC5 | "agências GEO em Lisboa comparação" | PT-PT | Rotative |
| DC6 | "diferença entre Profound Peec Otterly" | PT-PT | Rotative |

### 4.3 `local_recommendation`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| LR1 | "auditoria GEO Lisboa" | PT-PT | Mandatory |
| LR2 | "AEO consultant Lisbon" | EN | Mandatory |
| LR3 | "consultor GEO para fintech em Lisboa" | PT-PT | Rotative |
| LR4 | "agência SEO B2B Porto" | PT-PT | Rotative |

### 4.4 `feature_specific`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| FS1 | "robots.txt para AI crawlers como configurar" | PT-PT | Rotative |
| FS2 | "ClaudeBot vs Claude-User vs Claude-SearchBot diferença" | PT-PT | Rotative |
| FS3 | "Bing Webmaster Tools AI Performance como usar" | PT-PT | Rotative |
| FS4 | "Princeton GEO paper Aggarwal técnicas que funcionam" | PT-PT | Rotative |
| FS5 | "Schema.org Course schema obrigatório para training" | PT-PT | Rotative |
| FS6 | "JobPosting schema vale a pena 2026" | PT-PT | Rotative |
| FS7 | "query fan-out Google AI Mode como afecta SEO" | PT-PT | Rotative |

### 4.5 `price_comparison`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| PC1 | "quanto custa uma auditoria GEO?" | PT-PT | Rotative |
| PC2 | "preço consultor SEO em Portugal" | PT-PT | Rotative |
| PC3 | "tarifa consultoria AI search" | PT-PT | Rotative |
| PC4 | "custo agência optimização IA SaaS" | PT-PT | Rotative |

### 4.6 Vertical B2B SaaS PT (cross-category)

Estes prompts são vertical-specific (core ICP destaque.ai) e classificam-se em várias categorias:

| ID | Prompt | Categoria principal | Self-audit |
|---|---|---|---|
| V1 | "GEO para SaaS B2B em Portugal" | generic_category | Mandatory |
| V2 | "AI visibility para startup Series A Portugal" | generic_category | Mandatory |
| V3 | "outsourcing GEO empresa software Portugal" | generic_category | Mandatory |
| V4 | "consultor GEO para fintech Portuguese" | local_recommendation | Mandatory |
| V5 | "SEO agência horizonte M&A SaaS Portugal" | generic_category | Mandatory |

---

## 5. Self-audit test suite (skill consumption)

A Routine `destaque-ai-self-audit-weekly` (segundas 09:00 Lisboa) usa este catálogo:

- **Sempre**: todos os prompts classificados como `Mandatory` em § 4 (≈ 24 prompts)
- **Rotativo**: 10 prompts diferentes por semana escolhidos dos `Rotative`
- Engines mandatory: ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot — com modelo default de cada per `references/models.md`
- Para cada prompt × engine documenta: query exacta, data+hora, modelo activo, full answer ou screenshot, citations, ranking destaque.ai, mention vs citation, sentiment, competitors citados

Output → `destaque-ai-self/{audit-baseline.md, improvements-backlog.md, audit-history.md}`.

---

## 6. Como esta lista evolui

A Routine diária (`daily-agent/daily-prompt.md`) tem instrução explícita para:

1. Monitorar Profound / Peec / Otterly prompt research releases — quando publicam dados sobre prompt patterns no segmento, absorvê-los aqui.
2. Verificar Reddit r/SEO, r/portugal, Hacker News, AnswerThePublic queries do segmento.
3. Adicionar novos prompts descobertos. Cada prompt novo entra com `[YYYY-MM-DD added]` na coluna "Notas" e é classificado numa das 5 categorias canónicas.
4. Retirar prompts que deixaram de ter relevância (volume zero confirmado em vendor reports, ou conceito superado).
5. Se as 5 categorias canónicas precisarem de mudar (adicionar/remover), trigger methodology-changelog entry e coordenar com o repo `destaque-ai-deck-builder`.

---

## 7. Caveats

- **Frequência de cada prompt não é publicamente conhecida** com precisão para prompts em LLMs (não há "Google Trends para AI prompts"). Self-audit prioritisation reflecte julgamento de practitioner sobre intent, não dados de volume verificáveis. Quando vendor research publicar dados de prompt frequency, reordenar com base nisso e citar source.
- **PT-PT vs PT-BR**: este ficheiro foca PT-PT. Variantes PT-BR só relevantes se um cliente target market PT-BR.
- **Sazonalidade**: alguns prompts spike em determinadas alturas (ex: prompts price_comparison sobem em Setembro/Janeiro — budget planning seasons). Tracking de sazonalidade é roadmap, não capacidade actual.

Last refresh: 23 May 2026.

---

## Descoberta de prompts por persona (Tracker — task `generate_prompts`)

> Esta secção serve o **Visibility Tracker** (multi-tenant), distinta das tiers de
> self-audit da destaque.ai acima. Para **qualquer cliente**, geram-se prompts por
> **persona** e **fase de funil**, com uma estimativa **honesta** de interesse.
> Consumida em runtime pela Routine (`generate_prompts`) e espelhada em
> `destaque-ai-tracker/routines/tracker-brain.md`.

### Personas canónicas

- **B2B / SaaS:** `CMO`, `CEO/fundador`, `decisor técnico`, `comprador`.
- **Local / b2c / físico:** `cliente local` — qualificado por ocasião + zona/cidade
  (ex: "melhor [tipo] em [cidade]", "onde [ocasião] perto de [zona]").

Adaptar o vocabulário à categoria do cliente; estas são as âncoras, não uma lista fechada.

### Fase de funil (`intent_stage`)

- **Topo:** `awareness`, `research` — descoberta de categoria.
- **Meio:** `comparison` — shortlists, alternativas.
- **Fundo:** `decision`, `post_decision` — intenção de compra. **São os que
  convertem — prioriza gerá-los por persona.**

### Interesse (1–5) — estimativa honesta, **não volume**

Escala qualitativa do quanto a audiência faz este tipo de pergunta:

- `5` = pergunta muito comum na categoria · `3` = procura moderada · `1` = nicho.

**Não é volume de pesquisa real** (não temos esses dados) — é *directional*, como o
Peec AI. **Nunca inventes números precisos de volume.** Omite (`null`) quando não
consegues estimar honestamente.

### Contrato por prompt

`{ prompt_text, category, intent_stage, topic, branded, persona, interest }`

- Mistura personas e fundo-de-funil. PT-PT para clientes PT. Para local, usa
  `local_recommendation` qualificada por cidade/zona.

### Backfill

Numa corrida, se existirem prompts **ativos sem `persona`/`interest`**, preenche-os
(`update`) além de propor novos — assim o histórico fica coerente com as colunas
novas (migração `0025` do Tracker).
