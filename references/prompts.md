# Prompts — destaque.ai (single source of truth)

> **Consumidores:**
> 1. **Skill** (self-audit semanal) — usa § 4 Catálogo destaque.ai como test suite.
> 2. **Deck Builder** (`destaque-ai-deck-builder/src/lib/llm/prompts/generate-audit-prompts.ts`) — usa § 1 Princípios + § 2 Categorias + § 3 Distribuição para gerar prompts de auditoria para qualquer cliente.
> 3. **Visibility Tracker** (`destaque-ai-tracker`, task `generate_prompts`) — usa § 1 + § 2 + § 8 (personas) para gerar prompts por persona e fase de funil para qualquer cliente.
>
> **Raw URL:**
> `https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/references/prompts.md`
> (Corrigido 17 Aug 2026 — a URL apontava para `skills/geo-seo-aeo-master/references/prompts.md`, um caminho que nunca existiu no histórico `git` deste repositório; o repositório em si é a raiz do skill. Ver `destaque-ai-self/improvements-backlog.md` item PROCESS.)

**Last refresh: 06 Jul 2026** — catálogo § 4 reescrito de fragmentos-keyword para **perguntas naturais** (como um utilizador escreve a um LLM); regra de formulação reforçada; § 8 personas expandido (ângulo por persona × funil).

---

## 1. Princípios (para Deck Builder, Tracker e self-audit)

- **Perguntas naturais, não keywords.** Um prompt é uma **pergunta como um humano a escreve a um assistente de IA** — frase completa, com interrogação quando aplicável. **Nunca** fragmentos estilo pesquisa Google ("consultoria visibilidade IA Portugal"). Escreve *"que empresa recomendam para consultoria de visibilidade em IA em Portugal?"*.
- **Persona implícita**: cada prompt deve soar a um decisor real (CEO/fundador, CMO, decisor técnico, comprador/procurement; ou cliente local para b2c). Não nomeies a persona no texto — escreve como ela escreveria (ver § 8).
- **Contexto realista**: inclui, quando fizer sentido, tamanho da empresa, geografia, vertical, restrições (suporte PT, GDPR, escala). Prompts vagos produzem respostas vagas.
- **Intent claro**: cada prompt expressa um destes intents — `research`, `comparison`, `validation`, `migration`, `pricing`, `integration`, `pain_point`.
- **Nunca nomeies a marca do cliente**: queremos ver se aparece organicamente (exceção: prompts branded de self-audit, ex. DC1).
- **A língua é a do cliente, não a nossa.** O consumidor passa `locale` (`pt-PT` | `en`) com o pedido: gera o catálogo nessa língua, com o idioma do mercado dele. PT-PT é o valor por omissão e a nossa casa, não uma regra universal. Isto **não é cosmético**: um comprador em Londres escreve em inglês, e medi-lo com perguntas em português mede outra coisa, com uma taxa de citação que não é comparável com nada. Dentro de PT, PT-BR só se o público-alvo for tipicamente brasileiro; e mesmo num cliente PT-PT, EN quando a query real do segmento é em inglês (termos técnicos que ninguém traduz).
- **Geografia segue o mercado.** Um prompt para um cliente britânico diz "in the UK", não "em Portugal". A referência geográfica sai de `market`, não da língua: uma marca inglesa pode competir no mercado português.
- **Varia a formulação**: evita quase-duplicados na mesma categoria; muda o ângulo (dor, comparação, preço, exequibilidade técnica).

---

## 2. Categorias canónicas

5 categorias que cobrem o espaço de prompts em audits de visibilidade IA. Usadas pelo Deck Builder e pelo Tracker para gerar prompts, e pelo catálogo destaque.ai (§ 4) para classificar prompts existentes.

### 2.1 `generic_category`
Pergunta ampla sobre o tipo de serviço/produto, sem nomear empresas. Captura "o que existe no mercado" e também prompts problem-stated (dor concreta sem nomear vendor).

Intents típicos: `research`, `pain_point`.

Forma exemplo:
> "Quais são as principais soluções de [categoria] para empresas com [escala]? Quero perspectivar antes de iniciar um RFP."

Forma problem-stated:
> "O meu site não aparece no ChatGPT quando os meus prospects pesquisam [categoria]. Como resolvo?"

### 2.2 `direct_comparison`
Confronta fornecedores/soluções nomeados entre si.

Intents típicos: `comparison`, `validation`, `migration`.

Forma exemplo:
> "Estou a comparar [vendor A], [vendor B] e [vendor C] para [caso de uso] numa operação de [escala]. Em que critérios cada um se destaca?"

**Regra dura — a marca medida tem de caber na resposta.**

Num catálogo de tracking, uma pergunta de comparação só é válida se a marca
medida puder aparecer na resposta. Há duas formas de garantir isso, e só duas:

1. **A marca é um dos lados nomeados.** "Como se compara [marca] com [concorrente]?"
2. **A comparação é de categoria**, com os lados descritos por tipo e não por
   nome, de maneira que a marca cabe num deles. "Vale a pena escolher uma rede
   nacional ou um operador regional para [caso de uso]?"

**Nunca dois concorrentes nomeados um contra o outro sem a marca medida.**
"Como se compara [concorrente A] com [concorrente B]?" mede o duelo dos outros:
a ausência da marca está garantida antes de a pergunta correr, e entra na
métrica como se fosse uma derrota. Não é um sinal fraco, é um zero fabricado —
baixa a taxa de citação com uma pergunta onde estar ausente era o único
resultado possível.

O erro é fácil de cometer quando se geram prompts a partir do panorama
competitivo: os nomes dos concorrentes estão à mão e a pergunta sai natural.
Ao rever um catálogo gerado, ler cada `direct_comparison` e perguntar "se o
motor responder bem a isto, há alguma hipótese de nomear a marca?". Se não
houver, reescrever pela forma 1 ou 2.

(Excepção conhecida: no self-audit da destaque.ai, DC6 compara ferramentas de
terceiros de propósito — mede o panorama, não a nossa visibilidade, e está
marcado como tal.)

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

Prompts reais que o segmento (B2B SaaS PT, prospects de consultoria GEO/SEO/AEO) usa quando consulta LLMs sobre a categoria. Organizados pelas 5 categorias canónicas. Cada entrada inclui intent + tier de prioridade no self-audit.

> **Regra de formulação (não negociável):** cada entrada é uma **pergunta natural**, como um decisor a escreveria a um assistente de IA — frase completa, com interrogação. **Proibido** o modo keyword ("auditoria GEO Lisboa"); escreve *"quem faz auditorias de GEO em Lisboa?"*. Quem adiciona prompts (Routine diária, § 6) segue esta regra.

### 4.1 `generic_category`

#### Discovery (research intent)

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| GD1 | "qual é a melhor agência de GEO em Portugal?" | PT-PT | Mandatory |
| GD2 | "que consultorias de AI search existem para empresas portuguesas?" | PT-PT | Mandatory |
| GD3 | "quem recomendam como consultor de SEO para SaaS B2B em Lisboa?" | PT-PT | Mandatory |
| GD4 | "que agências ajudam a otimizar a presença de uma marca no ChatGPT em Portugal?" | PT-PT | Mandatory |
| GD5 | "que empresa recomendam para consultoria de visibilidade em IA em Portugal?" | PT-PT | Mandatory |
| GD6 | "quem são os especialistas em GEO em Portugal?" | PT-PT | Mandatory |
| GD7 | "which GEO consultancies operate in Portugal?" | EN | Mandatory |
| GD8 | "which agencies do AI search optimization for Portuguese B2B SaaS companies?" | EN | Mandatory |

#### Problem-stated (pain_point intent — high-intent)

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| GP1 | "o meu site não aparece no ChatGPT quando pesquisam a minha categoria — como resolvo isto?" | PT-PT | Mandatory |
| GP2 | "o AI Overview do Google tirou-me tráfego orgânico — o que posso fazer?" | PT-PT | Mandatory |
| GP3 | "como faço para a minha empresa aparecer no Google AI Mode?" | PT-PT | Mandatory |
| GP4 | "a minha marca não aparece nas respostas do Perplexity — porquê e como mudo isso?" | PT-PT | Mandatory |
| GP5 | "um concorrente meu aparece no ChatGPT e eu não — como reverto isto?" | PT-PT | Mandatory |
| GP6 | "como consigo que a minha marca seja citada nas respostas de IA?" | PT-PT | Mandatory |
| GP7 | "usar Schema.org melhora a visibilidade nas respostas de IA?" | PT-PT | Rotative |
| GP8 | "vale a pena criar um ficheiro llms.txt no meu site?" | PT-PT | Rotative |
| GP9 | "o meu tráfego orgânico caiu 50% — a culpa é das respostas de IA?" | PT-PT | Rotative |

#### Evaluation (research intent — buyer education)

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| GE1 | "como avalio se uma agência de SEO é boa?" | PT-PT | Rotative |
| GE2 | "o que devo esperar de uma auditoria de GEO?" | PT-PT | Rotative |
| GE3 | "o que é que a metodologia de uma auditoria de IA costuma cobrir?" | PT-PT | Rotative |
| GE4 | "que perguntas devo fazer a um consultor de GEO antes de o contratar?" | PT-PT | Rotative |
| GE5 | "como sei se a minha agência atual domina mesmo GEO?" | PT-PT | Rotative |
| GE6 | "o que inclui uma auditoria técnica de SEO?" | PT-PT | Rotative |

### 4.2 `direct_comparison`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| DC1 | "como se compara a destaque.ai com [competitor]?" (variantes por competitor conhecido — **branded**, só self-audit) | PT-PT | Rotative |
| DC2 | "qual é a diferença entre SEO e GEO?" | PT-PT | Rotative |
| DC3 | "AEO ou GEO — qual devo escolher para a minha empresa?" | PT-PT | Rotative |
| DC4 | "preciso de SEO clássico ou de GEO?" | PT-PT | Rotative |
| DC5 | "como se comparam as agências de GEO em Lisboa?" | PT-PT | Rotative |
| DC6 | "qual é a diferença entre o Profound, o Peec e o Otterly?" | PT-PT | Rotative |

### 4.3 `local_recommendation`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| LR1 | "quem faz auditorias de GEO em Lisboa?" | PT-PT | Mandatory |
| LR2 | "who does AEO consulting in Lisbon?" | EN | Mandatory |
| LR3 | "que consultor de GEO recomendam para uma fintech em Lisboa?" | PT-PT | Rotative |
| LR4 | "que agência de SEO para B2B recomendam no Porto?" | PT-PT | Rotative |

### 4.4 `feature_specific`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| FS1 | "como configuro o robots.txt para os crawlers de IA?" | PT-PT | Rotative |
| FS2 | "qual é a diferença entre o ClaudeBot, o Claude-User e o Claude-SearchBot?" | PT-PT | Rotative |
| FS3 | "como uso o relatório de AI Performance do Bing Webmaster Tools?" | PT-PT | Rotative |
| FS4 | "que técnicas do paper de GEO de Princeton (Aggarwal) funcionam mesmo?" | PT-PT | Rotative |
| FS5 | "vale a pena usar o schema Course do Schema.org para visibilidade em IA?" | PT-PT | Rotative |
| FS6 | "vale a pena implementar o schema JobPosting em 2026?" | PT-PT | Rotative |
| FS7 | "como é que o query fan-out do Google AI Mode afeta o SEO?" | PT-PT | Rotative |

### 4.5 `price_comparison`

| ID | Prompt | Lang | Self-audit |
|---|---|---|---|
| PC1 | "quanto custa uma auditoria de GEO?" | PT-PT | Rotative |
| PC2 | "quanto cobra um consultor de SEO em Portugal?" | PT-PT | Rotative |
| PC3 | "qual é a tarifa típica de uma consultoria de AI search?" | PT-PT | Rotative |
| PC4 | "quanto custa uma agência de otimização para IA para uma SaaS?" | PT-PT | Rotative |

### 4.6 Vertical B2B SaaS PT (cross-category)

Estes prompts são vertical-specific (core ICP destaque.ai) e classificam-se em várias categorias. A definição do ICP — qualificação por **mecanismo** (compra ponderada, research-driven), nunca por receita ou tamanho — vive em `SKILL.md` § ICP / qualificação destaque.ai.

| ID | Prompt | Categoria principal | Self-audit |
|---|---|---|---|
| V1 | "como funciona o GEO para uma SaaS B2B em Portugal?" | generic_category | Mandatory |
| V2 | "como melhoro a visibilidade em IA de uma startup Series A em Portugal?" | generic_category | Mandatory |
| V3 | "vale a pena fazer outsourcing de GEO numa empresa de software em Portugal?" | generic_category | Mandatory |
| V4 | "que consultor de GEO recomendam para uma fintech portuguesa?" | local_recommendation | Mandatory |
| V5 | "que agência de SEO/GEO recomendam para uma SaaS portuguesa com horizonte de M&A?" | generic_category | Mandatory |

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
3. Adicionar novos prompts descobertos, **sempre como pergunta natural** (§ 4 regra), com `[YYYY-MM-DD added]` e classificados numa das 5 categorias canónicas.
4. Retirar prompts que deixaram de ter relevância (volume zero confirmado em vendor reports, ou conceito superado).
5. Se as 5 categorias canónicas precisarem de mudar (adicionar/remover), trigger methodology-changelog entry e coordenar com o repo `destaque-ai-deck-builder`.

---

## 7. Caveats

- **Frequência de cada prompt não é publicamente conhecida** com precisão para prompts em LLMs (não há "Google Trends para AI prompts"). Self-audit prioritisation reflecte julgamento de practitioner sobre intent, não dados de volume verificáveis. Quando vendor research publicar dados de prompt frequency, reordenar com base nisso e citar source.
- **PT-PT vs PT-BR**: este ficheiro foca PT-PT. Variantes PT-BR só relevantes se um cliente target market PT-BR.
- **Sazonalidade**: alguns prompts spike em determinadas alturas (ex: prompts price_comparison sobem em Setembro/Janeiro — budget planning seasons). Tracking de sazonalidade é roadmap, não capacidade actual.

---

## 8. Descoberta de prompts por persona (Tracker — task `generate_prompts`)

> Esta secção serve o **Visibility Tracker** (multi-tenant), distinta das tiers de
> self-audit da destaque.ai acima. Para **qualquer cliente**, geram-se prompts por
> **persona** e **fase de funil**, com uma estimativa **honesta** de interesse.
> Consumida em runtime pela Routine (`generate_prompts`) e espelhada em
> `destaque-ai-tracker/routines/tracker-brain.md`.

### 8.1 Personas canónicas — ângulo por persona

Cada persona pergunta de um ângulo diferente. Gera prompts que **soem a essa pessoa**
(sem a nomear no texto). Âncoras — adapta o vocabulário à categoria do cliente:

**B2B / SaaS:**

| Persona | Quem é | O que o preocupa | Como pergunta (exemplo fundo-de-funil) |
|---|---|---|---|
| **CEO / fundador** | Decisor final; vê ROI e risco | crescer pipeline, não deitar dinheiro fora, reputação da marca | *"vale a pena investir em GEO para uma SaaS B2B portuguesa este ano, ou ainda é cedo?"* |
| **CMO / marketing** | Dono do canal; responde por leads | perder tráfego para AI Overviews, share of voice vs concorrentes, atribuição | *"que agência em Portugal me ajuda a recuperar a visibilidade que perdi para o AI Overview?"* |
| **Decisor técnico** (CTO/eng) | Avalia exequibilidade e esforço | schema, llms.txt, crawlers de IA, o que é preciso implementar | *"preciso de programadores ou uma agência trata do schema e do llms.txt para visibilidade em IA?"* |
| **Comprador / procurement** | Compara, negoceia, valida âmbito | preço, o que está incluído, contrato, comparáveis | *"quanto custa uma auditoria de GEO em Portugal e o que deve incluir?"* |

**Local / b2c / físico:** `cliente local` — qualifica por **ocasião + zona/cidade**
(ex: *"qual é o melhor [tipo de negócio] em [zona] para [ocasião]?"*, *"onde encontro
[serviço] perto de [zona]?"*).

**Regra:** gera **pelo menos 1–2 prompts de fundo-de-funil por persona**, e varia o
ângulo entre personas (o CEO não pergunta como o CTO). Nunca nomeies a marca do cliente.

### 8.2 Fase de funil (`intent_stage`)

- **Topo:** `awareness`, `research` — descoberta de categoria.
- **Meio:** `comparison` — shortlists, alternativas.
- **Fundo:** `decision`, `post_decision` — intenção de compra. **São os que
  convertem — prioriza gerá-los por persona.**

### 8.3 Interesse (1–5) — estimativa honesta, **não volume**

Escala qualitativa do quanto a audiência faz este tipo de pergunta:

- `5` = pergunta muito comum na categoria · `3` = procura moderada · `1` = nicho.

**Não é volume de pesquisa real** (não temos esses dados) — é *directional*, como o
Peec AI. **Nunca inventes números precisos de volume.** Omite (`null`) quando não
consegues estimar honestamente.

### 8.4 Contrato por prompt

`{ prompt_text, category, intent_stage, topic, branded, persona, interest }`

- `prompt_text` — **pergunta natural** (§ 1 e § 4 regra). Nunca keyword.
- Mistura personas e fundo-de-funil. PT-PT para clientes PT. Para local, usa
  `local_recommendation` qualificada por cidade/zona.

### 8.5 Backfill

Numa corrida, se existirem prompts **ativos sem `persona`/`interest`**, preenche-os
(`update`) além de propor novos. E se um prompt ativo estiver **em modo keyword**
(sem interrogação, estilo pesquisa), **reescreve o `prompt_text` em cima do mesmo
`id`** para uma pergunta natural — preserva o histórico (a série é por `id`, não por
texto) e afina a redação. Assim o catálogo do cliente converge para perguntas reais
sem perder as semanas já medidas.

### 8.6 Cobertura de funil e balanço de personas (recomendação)

Ao gerar ou rever o catálogo de um cliente, **verifica e corrige**:

- **Todos os estágios de funil cobertos — especialmente BOFU** (`decision` /
  `post_decision`). Um catálogo só com topo/meio (descoberta e comparação) deixa o
  **momento da compra por medir** — o mapa de funil fica a `0/0` no BOFU, que é
  precisamente o estágio que converte. Se um estágio estiver vazio, **gera prompts
  para o preencher**. Exemplos BOFU (sem nomear a marca do cliente):
  - *"Qual é a melhor [categoria] em [país] para contratar para [ICP]?"*
  - *"Que [fornecedor] tem casos de sucesso comprovados com resultados verificáveis?"*
  - *"Vale mais a pena contratar ou desenvolver a capacidade internamente?"*
  - *"Quanto devo orçamentar para contratar e o que está incluído?"*
  - *"O que esperar nos primeiros 90 dias de trabalho com [fornecedor]?"* (`post_decision`)
- **Personas equilibradas por ângulo** — não concentres o catálogo num só perfil.
  Cada persona pergunta de forma diferente (§8.1): CEO/fundador = ROI e decisão de
  investir; CMO = tráfego e visibilidade; decisor técnico = exequibilidade;
  comprador = preço e quem contratar. Evita que uma persona domine enquanto outra
  (tipicamente **CEO/fundador**) fica quase ausente — se acontecer, reatribui a
  persona dos prompts cujo ângulo é claramente de outro perfil (`update` no mesmo
  `id`, não perde histórico).
