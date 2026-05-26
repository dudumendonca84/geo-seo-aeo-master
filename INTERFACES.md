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
2. Slice do markdown de `## 1. Princípios` até (exclusive) `## 4. Catálogo destaque.ai`
3. Prepend ao SYSTEM do gerador de prompts
4. Se fetch ≠ 200 OU slice vazio → usar fallback hardcoded

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

## Frequência de actualização

| Ficheiro | Cadência | Trigger |
|---|---|---|
| `prompts.md` § 1-3 (princípios + categorias + distribuição) | Raro | Mudança de metodologia (`methodology-changelog.md`) |
| `prompts.md` § 4 (catálogo segmento) | Semanal/diário | Daily agent absorve novos prompts |
| `models.md` per-vendor tables | Quando há release | Daily agent monitor + manual |
| `models.md` § Deck Builder API mappings | Quando há release ou deprecation | Daily agent + manual coordination |

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

Adicionar entry sempre que algum contrato mudar.
