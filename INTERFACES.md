# INTERFACES.md — cross-repo contract

Canonical contract between the skill (`geo-seo-aeo-master`) and its programmatic consumers. Sessions touching either side must keep this file in sync with the code.

Last refresh: 25 May 2026.

---

## 1. Consumer inventory

| Consumer | Repo | Role |
|---|---|---|
| Deck Builder | `dudumendonca84/destaque-ai-deck-builder` | Generates audit prompts + runs paid audits (free/diagnostic/premium tiers) |
| Visibility Tracker | `dudumendonca84/destaque-ai-tracker` | Weekly multi-tenant audits with longitudinal storage and editorial narratives |
| Claude Desktop / Claude Code | personal install | Conversational use of the skill via `SKILL.md` and the references |
| Daily research agent | this repo's GitHub Action | Updates `daily-agent/news-feed.md` and, when warranted, the references |

The skill is the **single source of truth** for: prompt categories, tier distribution, LLM model identifiers, competitor classification rules, alert thresholds, narrative templates, and gap→action mapping. Consumers fetch, parse, and apply — they do not duplicate.

---

## 2. Canonical paths

All consumer fetches use the GitHub raw URL with the canonical base:

```
https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master
```

Files consumed by code (programmatic fetch, parsed):

| Path (relative to base) | Consumed by | Parse contract |
|---|---|---|
| `references/models.md` | Deck, Tracker | Section §3 `## Deck Builder API mappings` — pipe-separated table, 4 columns: `Deck engine \| Vendor \| production \| cost_optimized`. Cell values may be wrapped in backticks; strip on parse. |
| `references/prompts.md` | Deck, Tracker | Slice from `## 1. Princípios` (inclusive) to `## 4. Catálogo destaque.ai` (exclusive). The slice is prepended to the system prompt for prompt generation. |
| `references/competitor_filtering.md` | Tracker | Full file passed as system prompt for `askWithSkill('filter_competitors', …)`. |
| `references/alert_thresholds.md` | Tracker | Full file passed as system prompt for `askWithSkill('generate_alerts', …)`. |
| `references/narrative_templates.md` | Tracker | Full file passed as system prompt for `askWithSkill('generate_narrative', …)`. |
| `references/gap_action_mapping.md` | Tracker, Deck | Full file passed as system prompt for narrative generation and proposal action plans. |
| `references/metrics.md` | Tracker, Deck | Full file passed as system prompt where formula-grade rigour is needed (audit summary, monthly digest). Formulas in §1-3 are also implemented verbatim in code; the file is the canonical reference. |
| `references/benchmarks.md` | Deck (slide 03), Tracker (audit reports) | Either parsed for specific stats by key, or passed entire as system prompt. Code MUST NOT cite statistics that do not exist in this file. |
| `references/frameworks.md` | Audit workflow (manual) | Loaded by Claude Desktop / Claude Code when the audit workflow is invoked. Not consumed by Deck/Tracker programmatically. |
| `references/tools.md` | Manual / proposal copy | Loaded for vendor-landscape copy in proposals. |
| `daily-agent/news-feed.md` | Tracker (`askWithSkill('*'`) preface) | Last 24-48h field intelligence; included as preface to system prompts for editorial currency. |
| `SKILL.md` | All consumers | Identity + non-negotiable principles + editorial voice. Always included in system prompt. |

Files **not** consumed programmatically (skill-internal): `README.md`, `INTERFACES.md`, `daily-agent/daily-prompt.md`, `daily-agent/execution-log.md`, `daily-agent/drafts/`.

---

## 3. Parse contracts (stable anchors)

These markdown anchors are part of the contract. Renaming them breaks consumers silently (consumers fall back to hardcoded defaults). Do not rename without a coordinated PR.

| File | Anchor | Used by |
|---|---|---|
| `references/models.md` | `## Deck Builder API mappings` (exact, H2) | `src/lib/skill/models.ts` in Deck; equivalent in Tracker |
| `references/prompts.md` | `## 1. Princípios` (start of slice, exact, H2) | `src/lib/skill/prompts.ts` in Deck |
| `references/prompts.md` | `## 4. Catálogo destaque.ai` (end of slice, exact, H2) | `src/lib/skill/prompts.ts` in Deck — slice ends *exclusive* of this header |

### models.md table format (locked)

```
| Deck engine | Vendor                  | production            | cost_optimized       |
|-------------|-------------------------|-----------------------|----------------------|
| chatgpt     | OpenAI                  | gpt-5                 | gpt-4o               |
```

- Column count: exactly 4.
- Column order: `engine`, `vendor`, `production`, `cost_optimized`.
- Engine identifiers are stable strings (`chatgpt`, `claude`, `gemini`, `perplexity`, `copilot`, `mistral`, `grok`, `deepseek`, `meta`). Adding a new engine is allowed; renaming an existing one is a breaking change.
- Model identifiers may be wrapped in backticks (` `gpt-5` `) — parsers must strip them.

### prompts.md tier distribution format (locked)

The table under `## 3. Distribuição por tier` is parsed by name; consumers read the numbers per tier and per category. The category identifiers (`generic_category`, `direct_comparison`, `local_recommendation`, `feature_specific`, `price_comparison`) are stable strings.

---

## 4. Cache and fallback policy

- **Cache TTL**: 1 hour at the consumer side. The skill changes hourly at most; client cost matters more than instant propagation.
- **Fetch failure** (HTTP non-2xx, parse error, empty body, network error): consumer falls back to a hardcoded baseline (the most recent known version). Audits never block on skill availability.
- **Fallback origin**: hardcoded in TypeScript in each consumer, kept aligned with the last verified version of the file. When the skill changes structurally, update fallbacks in the same PR cycle.
- **No retries** at the consumer side. The next user request will retry, or the cron will re-fetch on its next cycle.

---

## 5. Update propagation

```
[skill commit]
   ↓
[GitHub raw URL serves new content within ~1 min]
   ↓
[consumer cache expires in ≤1h]
   ↓
[next consumer request returns new content]
```

No deployment is needed at the consumer when the skill changes. Exceptions: structural breaking changes (new column in models.md, new mandatory category in prompts.md) require a consumer-side PR.

---

## 6. Versioning

The skill is **not** versioned via package.json or semver. Versioning is via git history of this repo. Consumers reference `main` branch raw URLs. Two implications:

1. A commit to `main` is live globally within ≤1h.
2. Breaking changes must be coordinated — open a PR on the skill, open companion PRs on Deck and Tracker, merge in sequence (consumer fallbacks first, then skill).

For any change that touches the anchors in §3 or the engine list in `models.md`, follow this sequence:

1. PR on consumer(s) updating fallback and parser to accept both old and new format.
2. Merge consumer PR.
3. PR on skill with the change.
4. Merge skill PR.
5. Wait 1h for cache expiry.
6. PR on consumer(s) removing old-format compatibility.
7. Merge.

---

## 7. Routines (skill-side automation)

The skill currently runs one automation:

- **Daily research agent** (`.github/workflows/daily-news.yml`) — 07:00 UTC, updates `daily-agent/news-feed.md`. Has explicit instructions to update `references/models.md` when there is model release material (see `daily-agent/daily-prompt.md` § "Auto-update de referências críticas").

Planned (not yet implemented):

- **Self-audit weekly** (`routines/destaque-ai-self-audit-weekly.md`) — Mondays, runs the canonical 30 prompts × 6 engines, writes results to a `destaque-ai-self/` folder.
- **Synthesis weekly** — reads `destaque-ai-ops/learnings/` (anonymised patterns from real client work) and proposes updates to `references/`.

---

## 8. What this contract deliberately does not cover

- **Telemetry**: consumers do not report fetch counts, cache hit rates, or version usage back to the skill. If observability matters, add a separate metrics pipeline.
- **Authentication**: the skill repo is public; raw URL fetch is unauthenticated. If a consumer needs private content, it lives in a separate private repo (`destaque-ai-ops`), not here.
- **Schema versioning**: no version field in markdown frontmatter today. If schema drift becomes an issue, the contract evolves to require a `schema_version: N` line at the top of parsed files.
- **Localisation**: contract is single-locale. PT-PT for prose, EN for identifiers, as per `SKILL.md` § Editorial voice.

---

## 9. Sessions touching this contract

When a session modifies any of the parsed files or the consumer parsers, it MUST:

1. Read this file first.
2. Update the relevant section here if the contract changes.
3. Run the affected consumer locally (Deck or Tracker) and confirm the fetch succeeds and parses, not just the fallback.
4. Note the change in the PR description with a `Contract change:` line.

A contract change without a corresponding `INTERFACES.md` update will be caught at review.
