# Cross-repo interface contracts

> **Quem deve ler isto:** qualquer Claude Code session que esteja a trabalhar em `geo-seo-aeo-master` (esta repo) OU `destaque-ai-deck-builder` (consumidor downstream) OU futuros consumidores.
>
> **Primeira acção em qualquer sessão**: ler este ficheiro antes de fazer qualquer alteração que possa afectar contratos.
>
> **Last interface review:** 23 May 2026.

---

## Arquitectura

```
┌──────────────────────────────────────┐
│  geo-seo-aeo-master (this repo)      │  ← skill canónica destaque.ai
│  - SKILL.md (método SINAL)           │
│  - references/ (knowledge)           │
│  - daily-agent/ (auto-updates)       │
│  - destaque-ai-self/ (self-audit)    │
└────────────┬─────────────────────────┘
             │
             │ raw GitHub URL fetch
             ▼
┌──────────────────────────────────────┐
│  destaque-ai-deck-builder            │  ← gerador de audits para clientes
│  - src/lib/llm/prompts/              │
│    generate-audit-prompts.ts         │  ← consome prompts.md + models.md
│  - audit engine                      │
└──────────────────────────────────────┘

Future consumers:
- Claude Desktop (skill upload, manual sync)
- Claude.ai (skill upload via UI)
- MCP servers (raw fetch on demand)
```

---

## Contratos expostos por `geo-seo-aeo-master`

Todos os contratos são ficheiros markdown servidos via `raw.githubusercontent.com`. Branch `main` é a única fonte de verdade pública.

### Contrato 1: prompts (audit prompt generation)

**Path no repo:** `skills/geo-seo-aeo-master/references/prompts.md`

**Raw URL:**
```
https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/prompts.md
```

**Estrutura consumida:**
- **§ 1 Princípios** — meta-rules para escrever prompts (persona, contexto, intent, etc.)
- **§ 2 Categorias canónicas** — 5 categorias: `generic_category`, `direct_comparison`, `local_recommendation`, `feature_specific`, `price_comparison`
- **§ 3 Distribuição por tier** — tabela markdown com distribuição de prompts por audit tier (free: 5, diagnostic: 30)

**Estrutura interna (não para Deck Builder):**
- § 4 Catálogo destaque.ai — prompts específicos do segmento (usado só pelo self-audit da skill, não exportado)
- § 5-7 — operacionais

**Parsing contract para Deck Builder:**
1. Fetch a URL acima
2. `loadPromptDirectives` (`src/lib/skill/prompts.ts`): slice de `## 1. Princípios` até (exclusive) `## 4. Catálogo destaque.ai`; prepend ao SYSTEM do gerador
3. `loadPromptConfig` (mesmo ficheiro): parse da tabela `## 3.` para a distribuição por tier. As colunas a seguir a "Total" mapeiam, **por ordem posicional**, para `PROMPT_CATEGORIES` (a constante TS dona do SET). `premium` espelha `diagnostic` se ausente. `generate-audit-prompts.ts` segue esta distribuição (já não a constante hardcoded)
4. Se fetch ≠ 200, slice vazio, ou a tabela §3 faltar/`free`/`diagnostic` inválidos → fallback hardcoded (`FALLBACK_PROMPTS_MD` / `TIER_DISTRIBUTION`)

**Mudar a ORDEM das colunas da tabela §3** (ou a ordem de `PROMPT_CATEGORIES`) parte o zip posicional — coordenar. Mudar só os **números** é seguro e propaga em ≤1h.

**Língua e mercado (Ago 2026).** O consumidor passa dois campos com o pedido:

| Campo | Origem no Tracker | Efeito |
|---|---|---|
| `locale` | `clients.locale` (`pt-PT` \| `en`) | Língua do catálogo gerado e de tudo o que o cliente lê. |
| `market` | `clients.market` (ISO do país) | Referência geográfica dentro dos prompts e localização das superfícies. |

São campos distintos de propósito: uma marca inglesa pode competir no mercado
português. Gerar prompts na língua errada não é um defeito cosmético, mede outra
coisa e produz uma taxa de citação incomparável.


### Contrato 2: models (API ID lookup)

**Path no repo:** `skills/geo-seo-aeo-master/references/models.md`

**Raw URL:**
```
https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/models.md
```

**Estrutura consumida:**

Bloco `## Deck Builder API mappings` no fim do ficheiro. Tabela com header:

```
| Deck engine | Vendor | production | cost_optimized |
```

Engines actualmente listados: `chatgpt`, `claude`, `gemini`, `perplexity`, `copilot`, `mistral`, `grok`, `deepseek`, `meta`.

**Parsing contract para Deck Builder:**
1. Fetch a URL acima
2. Localizar a secção `## Deck Builder API mappings`
3. Parse da tabela com o header exacto acima
4. Strip dos backticks nas cells (cada cell contém `id-do-modelo` em backticks)
5. Map por audit tier:
   - `free` → coluna `cost_optimized`
   - `diagnostic` → coluna `production`
   - `premium` (futuro) → coluna `production`
6. Se fetch ≠ 200 OU parse falhar → usar fallback hardcoded em código

---

### Contrato 3: benchmarks (core stats do deck público)

**Path no repo:** `skills/geo-seo-aeo-master/references/benchmarks.md`

**Raw URL:**
```
https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/benchmarks.md
```

**Estrutura consumida:**

Bloco `## Deck Builder core stats` no fim do ficheiro. Tabela com header:

```
| key | value | caption | source | url | date |
```

Keys consumidas hoje pelo Deck Builder:
- `b2b_ai_answer`, `aio_click_share`, `cited_brand_clicks` → os 3 headline do Slide 03 (as 3 primeiras linhas, por ordem)
- `aio_top10_share` → Slide 05 (SEO vs GEO), lookup por `key`
- `b2b_ai_answer` → Slide 10b (custo da invisibilidade), lookup por `key`

**Parsing contract para Deck Builder** (`src/lib/skill/benchmarks.ts` → `loadCoreBenchmarks` / `findBenchmark`):
1. Fetch a URL acima
2. Localizar a secção `## Deck Builder core stats`
3. Parse da tabela com o header exacto acima; strip de backticks nas cells
4. Slide 03 usa as 3 primeiras linhas; outros slides procuram por `key` via `findBenchmark`
5. Se a tabela tiver < 3 linhas válidas OU fetch ≠ 200 → fallback hardcoded em código
6. `caption` é client-facing → PT-PT. Toda a linha tem `source` + `url` (princípio SINAL: nenhuma estatística sem fonte)

**Adicionar uma linha** é seguro. **Mudar o header** parte o parser — coordenar. **Remover uma `key` consumida** esconde o número no slide respectivo (graceful, não crasha).

---

### Contrato 4: method (glossário + 8 dimensões do deck público)

**Path no repo:** `SKILL.md`

**Raw URL:**
```
https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/SKILL.md
```

**Estrutura consumida:**

Secção `## Deck Builder method` no fim do ficheiro. Contém:
- uma linha `SINAL: <expansão>`;
- a tabela **glossário** com header `| sigla | nome | definicao |`;
- a tabela **8 dimensões** com header `| n | dimensao | foco |`;
- a tabela **SEO vs GEO** com header `| seo | geo |`.

É o resumo client-facing (PT-PT) da lista canónica em `## Methodology — SINAL` (§ Scope — holistic, §116-130). Fonte única — o deck **não** reescreve o método.

**Parsing contract para Deck Builder** (`src/lib/skill/method.ts` → `loadMethod`):
1. Fetch a URL acima; localizar `## Deck Builder method`; cortar até ao próximo `## `
2. `SINAL:` via regex de linha; as três tabelas classificadas pelo header (`sigla` → glossário, `dimensao` → dimensões, `| seo | geo |` → contraste SEO vs GEO); strip de backticks
3. Slide 06 usa o glossário; Slide 07 usa as 8 dimensões + a expansão SINAL; Slide 05 usa a tabela SEO vs GEO
4. Se < 3 linhas de glossário OU < 8 dimensões OU fetch ≠ 200 → fallback hardcoded inteiro. A tabela SEO vs GEO tem fallback parcial próprio (se < 4 linhas, só ela cai para o hardcoded)

**Adicionar/editar uma linha** é seguro e propaga em ≤1h. **Mudar um header** parte o parser — coordenar.

---

### Contrato 5: search modes (knowledge vs augmented, per-engine activation)

**Path no repo:** `skills/geo-seo-aeo-master/references/search_modes.md`

**Raw URL:**
```
https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/search_modes.md
```

**Estrutura consumida:**

Bloco `## Per-engine augmentation feature` no meio do ficheiro. Tabela com header:

```
| Deck engine | Vendor | augmented mode | API surface | Notes |
```

Engines listados: os mesmos do Contrato 2 (`chatgpt`, `claude`, `gemini`, `grok`, `perplexity`, `copilot`, `mistral`, `deepseek`, `meta`). Coluna 3 (`augmented mode`) declara *como* activar o modo augmented:

- `web_search` / `google_search` / `live_search` / etc → consumer activa a tool/feature nativa correspondente do vendor
- `n/a (always on)` → engine só tem modo augmented (Perplexity); skip do half `knowledge`
- `not supported` → engine só tem modo knowledge; skip do half `augmented`, persistir `null` nas séries augmented

**Parsing contract** (consumers — Deck Builder e Tracker, `src/lib/skill/searchModes.ts`):
1. Fetch a URL acima
2. Localizar a secção `## Per-engine augmentation feature`
3. Parse da tabela com o header exacto acima; strip de backticks
4. Para cada engine, mapear coluna 1 → coluna 3. Aplicar a regra de skip quando coluna 3 = `n/a (always on)` ou `not supported`
5. Se fetch ≠ 200 OU tabela vazia → fallback hardcoded em código (estado canónico mais recente conhecido)

**Adicionar uma linha** (novo engine) é seguro. **Mudar o header ou alterar os valores `n/a (always on)` / `not supported`** parte os skip rules — coordenar com PR no(s) consumer(s) antes.

**Reporting contract** (downstream, não parsing): consumers MUST persist `search_mode` por row em `audit_responses` / `audit_runs` e expor métricas duplicadas (`knowledge_cr` + `augmented_cr`, `knowledge_sov` + `augmented_sov`, etc) no client-facing UI. Nunca blend.

---

### Contrato 6: engine playbooks (como aparecer em cada motor)

**Path no repo:** `skills/geo-seo-aeo-master/references/engine_playbooks.md`

**Raw URL:**
```
https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/engine_playbooks.md
```

**Estrutura consumida:**

Bloco `## Deck Builder/Tracker playbooks` com uma secção `### <engine_key>`
por motor/superfície. Keys = as engine keys do Tracker (`chatgpt`, `claude`,
`gemini`, `grok`, `deepseek`, `mistral`, `perplexity`, `google_aio`,
`google_ai_mode`, `copilot`, `copilot_bing`). O corpo de cada secção é prosa
PT-PT client-facing (o Tracker mostra-o tal como está no cartão do motor,
secção "Como aparecer aqui").

**Parsing contract** (Tracker, `src/lib/skill/playbooks.ts`):
1. Fetch a URL acima
2. Localizar `## Deck Builder/Tracker playbooks`
3. Cada `### <key>` → texto até ao próximo `###`/fim
4. Keys desconhecidas ignoram-se em silêncio; keys em falta escondem a
   secção no cartão (sem fallback hardcoded — conteúdo editorial vive na skill)

**Regras editoriais:** tom sóbrio, números só com fonte, acção concreta.
Renomear as keys ou o header do bloco parte o parser — coordenar com PR no
Tracker.

---

## Frequência de actualização

| Ficheiro | Cadência | Trigger |
|---|---|---|
| `prompts.md` § 1-3 (princípios + categorias + distribuição) | Raro | Mudança de metodologia (`methodology-changelog.md`) |
| `prompts.md` § 4 (catálogo segmento) | Semanal/diário | Daily agent absorve novos prompts |
| `search_modes.md` per-engine table | Quando um vendor adiciona/remove search nativo | Daily agent monitor + manual |
| `models.md` per-vendor tables | Quando há release | Daily agent monitor + manual |
| `models.md` § Deck Builder API mappings | Quando há release ou deprecation | Daily agent + manual coordination |
| `engine_playbooks.md` por motor | Quando o mecanismo de um motor muda | Daily agent (vendor changes) + self-audit + synthesis-weekly |

**Implicação para Deck Builder:** fetch antes de cada audit é seguro. O ficheiro pode mudar entre dois audits do mesmo cliente; é feature, não bug (audits posteriores usam modelos mais recentes).

---

## Quando o skill maintainer (esta repo) muda algo que afecta o Deck Builder

1. **Mudança a § 1-3 do prompts.md** (princípios/categorias/distribuição) → coordenar com Deck Builder antes do push. A constante `PROMPT_CATEGORIES` em `src/lib/llm/prompts/generate-audit-prompts.ts` e a tabela de distribuição em código têm de bater certo.
2. **Mudança ao bloco § Deck Builder API mappings em models.md** → safe, Deck Builder picks up no próximo fetch.
3. **Reestruturação de paths (movement de ficheiros)** → URL muda. Deck Builder precisa de update da URL hardcoded em `generate-audit-prompts.ts`. **Coordenar antes do push.**
4. **Mudança de schema do bloco API mappings** (adicionar/remover coluna) → coordenar antes.

---

## Quando o Deck Builder maintainer muda algo que afecta a skill

1. **Mudar o que o Deck Builder consome** (passar a usar outro ficheiro / outra secção) → updates a este `INTERFACES.md` no skill.
2. **Adicionar nova consumer (ex: novo audit tier que precisa de novos prompts)** → propor adição a `prompts.md` (nova categoria? novo tier de distribuição?) via PR contra esta repo.

---

## Como coordenar entre sessões Claude Code

**Sessão para `geo-seo-aeo-master` (skill):**
- GitHub MCP scope: `dudumendonca84/geo-seo-aeo-master` + `dudumendonca84/destaque-ai-deck-builder` (pedir ambos ao iniciar)
- Pode ler ficheiros do Deck Builder via `mcp__github__get_file_contents` quando precisar de verificar contratos
- Antes de mexer em ficheiros consumidos pelo Deck Builder, ler `INTERFACES.md` (este ficheiro) primeiro

**Sessão para `destaque-ai-deck-builder` (consumer):**
- GitHub MCP scope: ambos os repos (idem)
- Pode ler `INTERFACES.md` e ficheiros `references/` da skill via MCP
- Antes de alterar o que consome (URLs, parsing contracts), ler `INTERFACES.md`

**Para Eduardo (operador):**
- Quando inicias uma sessão Claude Code para qualquer dos repos, granti scope GitHub a AMBOS — assim cada sessão pode ler o outro lado sem ter que copiar/colar.
- Mudanças aos contratos devem ser coordenadas — não basta uma sessão mudar a URL no Deck Builder se o ficheiro na skill ainda não mudou (ou vice-versa).

---

## Log de mudanças aos contratos

| Data | Mudança | Impacto |
|---|---|---|
| 2026-05-23 | Inicialização — prompts.md (§1-3) + models.md (§ API mappings) | Baseline para Deck Builder |
| 2026-05-24 | `dudumendonca84/destaque-ai-ops` criado como **private consumer downstream** — memória operacional privada (clientes, propostas, learnings) que consome a metodologia SINAL via `SKILL.md` (§ Methodology + § Audit workflow), `references/prompts.md` (catálogo segmento) e `references/models.md` (lock-in modelos por engine). Fluxo private → public mediado por camada de anonimização (`learnings/`) e futura Routine `synthesis-weekly`. Counterpart documentation: `INTERFACES.md` em `destaque-ai-ops`. | Nenhum impacto a contratos públicos existentes. Implicação para esta repo: mudanças materiais a § Audit workflow / scorecard / 4 horizontes em `SKILL.md` devem sinalizar potencial follow-up em `destaque-ai-ops/templates/` (private; sessões públicas não veem, mas registar no `methodology-changelog.md` ajuda a tracker). |
| 2026-05-26 | **Triagem de PRs.** Correcções de model ID em `models.md` § Deck Builder API mappings: `claude` cost_optimized `claude-haiku-4-5-20251001`→`claude-haiku-4-5`; `grok` production `grok-4`→`grok-4.3` (grok-4 retira 15 Ago 2026). `deepseek` mantém-se `deepseek-v4-flash` (decisão de main, pro é lento). PRs stale fechados (#2, #5, #6), #9 merged (3 tracker references), #3 merged (este log). | Deck Builder picks up no próximo fetch — sem code change. Engines `chatgpt`/`copilot` em `gpt-5.5`. |
| 2026-05-29 | **Contrato 3 (benchmarks) formalizado.** `## Deck Builder core stats` em `benchmarks.md` ganha a `key` `aio_top10_share` (54%, BrightEdge §6) consumida pelo Slide 05; `b2b_ai_answer` (82%) passa a alimentar também o Slide 10b. Antes destes slides hardcodavam os números. | Deck Builder picks up no próximo fetch — sem code change. Os números GEO dos Slides 03/05/10b passam a vir vivos da skill; fallback hardcoded mantém paridade se a tabela faltar. |
| 2026-05-29 | **Contrato 4 (method) criado.** Nova secção `## Deck Builder method` em `SKILL.md` — glossário (SEO/GEO/AEO) + 8 dimensões client-facing, resumo parseável da lista canónica §116-130. Consumido pelos Slides 06 e 07. Corrige drift do deck que dizia "4 disciplinas" e inventava o acrónimo "AISO". | Deck Builder picks up no próximo fetch — sem code change. O método no deck passa a vir vivo da skill; fallback hardcoded mantém paridade. |
| 2026-05-29 | **Contrato 4 estendido + Contrato 1 reforçado + drift de taxonomia decidido.** (1) `## Deck Builder method` ganha 3.ª tabela **SEO vs GEO** (`\| seo \| geo \|`), consumida pelo Slide 05 (antes hardcoded no componente). (2) Contrato 1: a tabela §3 de `prompts.md` passa a ser **parseada** (`loadPromptConfig`, zip posicional com `PROMPT_CATEGORIES`) — `generate-audit-prompts.ts` segue a distribuição viva, já não a constante. (3) **Decisão do founder:** a lista canónica das 8 dimensões é a detalhada §116-130 (technical · content · entity · authority · **social** · **authority-on-site** · measurement · positioning). `destaque-ai-deck-builder/CLAUDE.md` foi alinhado a esta lista. | Deck Builder picks up no próximo fetch. **`gap_action_mapping.md` reconciliado (SINAL v1.7):** DIMENSÃO 5 → Social & community signals, nova 6 → Authority signals on site (E-E-A-T), Measurement → 7, Positioning → 8; cadência editorial movida para a DIMENSÃO 2, UX/engagement passa a transversal. Consumido como prosa por `synthesize-deck.ts` (sem parser estrutural) — restruturação segura. |

Adicionar entry sempre que algum contrato mudar.
