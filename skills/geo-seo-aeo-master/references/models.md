# LLM models tracker — May 2026

> **Consumidores:**
> 1. **Skill** (audit workflow §7 — prompt test multi-engine) — usa coluna "Default in" para saber qual modelo testar em cada engine.
> 2. **Deck Builder** (`destaque-ai-deck-builder`) — fetch via raw URL antes de cada audit para garantir que testa o modelo currently default de cada engine.
> 3. **Routine self-audit semanal** — refresh deste ficheiro se >7 dias desde Last refresh, antes de prosseguir.
>
> **Raw URL para Deck Builder:**
> `https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/models.md`

Tracks current LLM model versions, capabilities and defaults across the major vendors. Critical for GEO work because **which model a given AI product uses determines its citation behavior, recency window and grounding mechanism**.

This file evolves fast. The `daily-agent/news-feed.md` carries day-to-day announcements; this file is the **canonical "what is current"** synthesis, refreshed when material changes accumulate.

**Last refresh: 23 May 2026** — see `daily-agent/news-feed.md` for releases after this date.

---

## How to use this file

- **Client says "I use [vendor] [model]"** → look up the entry below, confirm if current, advise upgrade path.
- **Recommending a tool stack** → check which models power the AI search products that matter for the client's vertical.
- **Audit context** → record the model used at time of audit (citation behavior in 2 months may differ if vendor updates default).

When citing capabilities, **always include the model version and the date observed**. "ChatGPT cites Wikipedia heavily" is wrong; "GPT-5 in ChatGPT Search cites Wikipedia ~47.9% of top citations as of Q1 2026 (Profound, 680M citations)" is right.

---

## OpenAI

### Current production models

| Model | Released | Context | Web search | Default in |
|---|---|---|---|---|
| **GPT-5** | Aug 2025 | 256k tokens | Yes (with tool) | ChatGPT (paid), ChatGPT Search, API default |
| **GPT-5 mini** | Oct 2025 | 256k | Yes (with tool) | Free ChatGPT for some queries |
| **GPT-4o** | May 2024 | 128k | Yes | Legacy in API, deprecation announced Q3 2026 |
| **o1 / o1-pro** | Sept 2024 | 128k | No (reasoning only) | "Think longer" mode |
| **o3 / o3-pro** | Jan 2026 | 200k | Yes | Pro tier "deep research" |

### Products and which model

- **ChatGPT Search / SearchGPT** — GPT-5 default since Sept 2025; web search via Bing index + OpenAI crawl.
- **ChatGPT Atlas browser** — GPT-5 with browsing tools enabled by default.
- **Custom GPTs** — pinned to model owner chose (often GPT-4o legacy still).

### GEO-relevant notes

- ChatGPT Search enables web search on only **~34.5% of queries** (Semrush clickstream Feb 2026). 65% of answers come from training-data recall — no live citation possible.
- UTM tagging in citation links since June 2025: `?utm_source=chatgpt.com`.
- Bot user-agents: `GPTBot` (training), `OAI-SearchBot` (search index), `ChatGPT-User` (real-time fetch). See `frameworks.md` §2.

---

## Anthropic

### Current production models

| Model | Released | Context | Web search | Default in |
|---|---|---|---|---|
| **Claude Opus 4.7** | Apr 2026 | 1M tokens | Yes | Claude Pro / Max ("Most intelligent") |
| **Claude Sonnet 4.6** | Mar 2026 | 1M tokens | Yes | claude.ai default, API default |
| **Claude Haiku 4.5** | Oct 2025 | 200k | Yes | Speed tier, batch jobs |
| **Claude Sonnet 4.5** | Sept 2025 | 1M tokens | Yes | Still available in API for compat |

### Products and which model

- **claude.ai** (web) — Sonnet 4.6 default; Opus 4.7 for Max subscribers.
- **Claude Desktop** — same as claude.ai.
- **Claude Code (CLI + Web Routines)** — Sonnet 4.6 default; Opus 4.7 for "fast mode" on Opus.
- **API** — explicit model parameter required. IDs: `claude-opus-4-7`, `claude-sonnet-4-6`, `claude-haiku-4-5-20251001`.

### GEO-relevant notes

- Web search backend: **Brave Search**. Conservative citation behavior — cites only when grounding specific claims.
- Bot user-agents: `ClaudeBot` (training), `Claude-User` (real-time fetch), `Claude-SearchBot` (search index), `claude-code` (Claude Code CLI/SDK tool). Legacy `anthropic-ai` and `Claude-Web` superseded. See `frameworks.md` §2.
- API requires citations to be **shown to end users** when surfacing search results ([web search docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)).

---

## Google

### Current production models

| Model | Released | Context | Web grounding | Default in |
|---|---|---|---|---|
| **Gemini 3.5 Flash** | May 2026 (I/O) | 2M tokens | Yes | AI Mode (announced 23 May 2026), Gemini app free tier |
| **Gemini 3.5 Pro** | May 2026 (I/O) | 2M tokens | Yes | Gemini Advanced ($), Workspace integrations |
| **Gemini 2.5 Pro** | Dec 2025 | 1M tokens | Yes | Still available in Vertex AI, AI Studio |
| **Gemini 2.5 Flash** | Dec 2025 | 1M tokens | Yes | API default before I/O 2026 |
| **Gemini 2.0 Flash** | Feb 2025 | 1M tokens | Yes | **Deprecated path** — clients still on this should migrate |

### Products and which model

- **Google Search AI Overviews** — Gemini 3.5 Flash since I/O 2026 (replacing 2.5 Flash). Uses **same Google index as classic Search** ([Search Central docs](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing)).
- **Google AI Mode** — Gemini 3.5 Flash globally since I/O 2026; >1B monthly users declared at I/O.
- **Gemini app / Gemini Advanced** — 3.5 Pro for paid tier.
- **Vertex AI / AI Studio** — exposes all current generation models with explicit selection.

### GEO-relevant notes

- AI Overviews and AI Mode draw from **the same crawl, same index, same core ranking** as classic Search. Per Google, "no additional technical requirements beyond SEO best practices" to appear in either.
- **Query fan-out**: an AIO query is decomposed into multiple sub-queries; pages ranking outside top-3 of any single query can still cite if they rank well across the sub-query *set*.
- Bot user-agent: `Googlebot` for crawl; `Google-Extended` as control token to opt out of Gemini training/grounding without affecting Search ranking. See `frameworks.md` §2.
- AI Overview presence: ~50% of queries (BrightEdge avg early 2026); 82% in B2B Tech specifically.

---

## Microsoft

### Current production models

| Model | Used in | Notes |
|---|---|---|
| **GPT-5** (via Azure OpenAI) | Bing Copilot, Microsoft 365 Copilot | Microsoft partners with OpenAI for frontier model access |
| **GPT-4o** | Legacy Copilot fallback | Being phased out |
| **Phi-4** (Microsoft internal) | Edge Copilot sidebar, lightweight tasks | Open weights, ~14B params |

### Products

- **Bing Copilot** — GPT-5 with Bing index for retrieval and citation.
- **Microsoft 365 Copilot** — GPT-5 + customer's Graph data via Microsoft Search.
- **Bing Webmaster Tools AI Performance** — first-party telemetry of Copilot citations, public preview since 9 Feb 2026.

### GEO-relevant notes

- Bing is the underlying index for both Copilot AND ChatGPT Search — improving Bing ranking lifts citation probability in both.
- Microsoft (Fabrice Canel, Mar 2025) publicly stated schema helps Copilot understand content. See `frameworks.md` §3.

---

## Perplexity

### Models

Perplexity uses a multi-model architecture: user can select per-query.

| Model | Source | Default for |
|---|---|---|
| **Sonar / Sonar Pro** | Perplexity-trained | Free tier default |
| **GPT-5** | OpenAI via API | Pro tier "best for advanced queries" |
| **Claude Sonnet 4.6** | Anthropic via API | Pro tier "best for writing" |
| **Gemini 3.5 Pro** | Google via API | Pro tier "best for research" |
| **DeepSeek V3.5** | DeepSeek via API | Pro tier "best for math" |

### GEO-relevant notes

- Citation density: **~21.9 citations/answer** vs ChatGPT's ~7.9 (Profound). Highest in industry.
- Heavy Reddit (~46.7% of top citations) and YouTube (~14%) bias.
- Bot user-agents: `PerplexityBot` (indexing), `Perplexity-User` (real-time, **does not respect robots.txt** per Perplexity's own docs). Cloudflare alleged undeclared crawlers Aug 2025 (disputed). See `frameworks.md` §2.

---

## Meta

### Current production models

| Model | Released | Open weights | Used in |
|---|---|---|---|
| **Llama 5** | Apr 2026 | Yes (405B, 70B, 8B) | Meta AI across FB/IG/WhatsApp/Threads |
| **Llama 4** | Jul 2025 | Yes | Still available |
| **Llama 4 Behemoth** | Aug 2025 | Yes (2T params, distilled) | Research use |

### GEO-relevant notes

- Meta AI is integrated into FB/IG/WA/Threads but does not return source citations the way Google AIO or Perplexity do — citation tracking on Meta surfaces is immature.
- Bot user-agent: `Meta-ExternalAgent` for training; `FacebookBot` historically for link previews now also training.

---

## xAI

| Model | Released | Context | Used in |
|---|---|---|---|
| **Grok 4** | Feb 2026 | 1M tokens | X (Twitter) integrated, grok.com |
| **Grok 3** | Aug 2025 | 256k | Legacy, still in API |

### GEO-relevant notes

- Grok citation behavior poorly documented publicly. Some tracking via Profound and Goodie (which monitor Grok among 9+ engines).
- Web search via X (Twitter) data + standard web crawl.

---

## DeepSeek

| Model | Released | Open weights | Notes |
|---|---|---|---|
| **DeepSeek V4** | Mar 2026 | Yes | Frontier-tier reasoning at fraction of frontier cost |
| **DeepSeek V3.5** | Dec 2025 | Yes | Earlier reasoning model |
| **DeepSeek R1** | Jan 2025 | Yes | Pure reasoning, no tools |

### GEO-relevant notes

- Tracked by Profound, Goodie and Semrush AI Toolkit among monitored engines.
- China-based; geographic/regulatory considerations for some clients.

---

## Mistral

| Model | Released | Open weights | Notes |
|---|---|---|---|
| **Mistral Large 3** | Oct 2025 | No (API only) | Frontier European alternative |
| **Mistral Small 3** | Nov 2025 | Yes | 24B params |
| **Codestral 25** | Jan 2026 | Yes | Code-specialized |

### GEO-relevant notes

- Le Chat (Mistral's consumer product) has web search. Citation tracking thin in public studies — under-represented in Profound/Peec dashboards.
- European positioning relevant for EU clients with data residency concerns.

---

## Cross-vendor patterns to know

### Web search ≠ training

A model with "web search" enabled retrieves and cites pages at query time. Without it, the model recalls from training data — no live citation. **Critical distinction for GEO**: only the web-search variant of a model can cite your site.

### Context window inflation

All major frontier models 2026 ship with ≥1M token contexts. This means a single answer can pull in many more candidate pages than was true in 2024-2025. Practical effect: **citation ceilings have not increased proportionally** (Perplexity still ~22 cit/answer, ChatGPT still ~8). The model has room to consider more, but answer surface area is bounded.

### Multimodal grounding

GPT-5, Claude 4.6+, Gemini 3.5 all accept image input and can cite image sources. Image SEO (alt text, surrounding context, image schema) becomes a citation surface. Limited public data on how often this is triggered in practice.

### Reasoning vs retrieval

Reasoning models (o1, o3, DeepSeek R1) typically do **not** browse the web. They reason from training-data knowledge. If a client query needs "what's the latest," reasoning models are the wrong choice — the user should explicitly enable web-search mode or switch to a retrieval-augmented model.

---

## Practical advice for clients

### "Should I upgrade from Gemini 2.x to 3.5?"

For most use cases, **yes — at least 2.5 → 3.5 Flash**. Concrete reasons:
- 2.0 Flash deprecation path announced; will lose support in Vertex AI by Q4 2026.
- 3.5 Flash matches 2.5 Pro on most benchmarks at lower cost.
- 3.5 series is what powers AI Mode and AI Overviews — testing against 2.x means testing against a model variant Google no longer uses for end users.

Exceptions: legacy integrations with custom prompts tuned to 2.0 output style may need re-tuning before migrating.

### "Which model should I use to test how my brand appears in AI search?"

Match the production target:
- Testing Google AI Mode → Gemini 3.5 Flash in Gemini app (not API directly — API has different prompts).
- Testing ChatGPT Search → GPT-5 in ChatGPT with web search enabled.
- Testing Perplexity → Perplexity Pro with all models selected (default mix).
- Testing Bing Copilot → Bing Copilot in Edge browser (not API).

Vendor monitoring tools (Profound, Peec, Otterly) automate this — see `tools.md`.

### "What's the cheapest way to test prompts at scale?"

DeepSeek V4 (open weights, ~$0.10 per million tokens vs $5 for GPT-5) for bulk evaluation. Validate hits with a small sample against the frontier model your client actually uses.

---

## What's NOT in this file (intentional)

- Detailed benchmark scores (MMLU, etc.) — `benchmarks.md` doesn't track LLM capability benchmarks; that's vendor marketing terrain. We track GEO/AEO citation behavior, not raw model intelligence.
- Pricing — moves too fast. Check vendor pricing pages directly when quoting clients.
- Roadmap rumors — only released and shipping models. Speculation goes nowhere productive.

---

## Vendor behavior changes (not just model releases)

This file tracks **how each vendor works right now**, not only which model they ship. Behavior changes matter as much as model releases — sometimes more, because they directly affect citation outcomes without any new model being announced.

Examples of behavior changes that warrant updating this file (and `frameworks.md` §5):

- **Citation mechanics**: vendor changes how citations are surfaced (inline → footnote, density, source caps).
- **Crawler compliance**: new bot user-agent, change in `robots.txt` compliance posture, alleged stealth crawling reports (e.g., Cloudflare on Perplexity Aug 2025).
- **Query mechanics**: Google adding/removing query fan-out, reformulation logic, sub-query weighting in AI Mode.
- **Source weighting**: sudden shift in domain preferences (e.g., Perplexity boosting Reddit, ChatGPT increasing Wikipedia share).
- **Web search defaults**: vendor turning web search on/off by default per tier (ChatGPT free vs paid, Claude Pro vs API).
- **Index behavior**: Bing reindex frequency, Google AIO trigger threshold changes, what proportion of queries actually invoke web search.
- **API surface changes** affecting AI search products (e.g., schema requirement changes, prompt format updates).
- **Pricing/access changes** that bottleneck citations (rate limits, country restrictions).

When the daily agent detects such a change in primary sources (Tier 1 in `daily-agent/daily-prompt.md`), it updates the relevant vendor section here, not just the news-feed entry. The news-feed records the announcement; this file records the new state of the world.

---

## Maintenance

Update this file when:
- A major vendor releases a new flagship (any of the 8 above).
- A vendor changes the default model in one of its key products (especially AI Overviews / ChatGPT Search / Copilot — these affect GEO observations).
- A model's web-search / citation behavior changes materially.
- A vendor changes how its AI search product works in any of the dimensions listed in "Vendor behavior changes" above.

The `daily-agent/news-feed.md` carries the running record between refreshes — consult both when answering "what's current?" questions.

---

## Deck Builder API mappings

**Single source of truth for API model IDs** used programmatically by the Deck Builder (and any other consumer that needs to call vendor APIs). The per-vendor tables above are product-name-oriented (human-friendly); this table is the machine-readable contract that maps Deck Builder engine names to exact API IDs.

Two columns per engine:
- **`production`** — what real users currently encounter in default product usage (highest fidelity, highest cost). Use for **paid-tier audits** (diagnostic, premium) where credibility of the deliverable requires testing the same model real users see.
- **`cost_optimized`** — cheaper variant from the same vendor with sufficient quality for high-volume / lead-gen contexts. Use for **free-tier audits** where unit economics matter.

| Deck engine | Vendor | production | cost_optimized |
|---|---|---|---|
| `chatgpt` | OpenAI | `gpt-5.5` | `gpt-5.5` |
| `claude` | Anthropic | `claude-sonnet-4-6` | `claude-haiku-4-5-20251001` |
| `gemini` | Google | `gemini-3.5-flash` | `gemini-2.5-flash` |
| `perplexity` | Perplexity | `sonar-pro` | `sonar` |
| `copilot` | Microsoft (Azure OpenAI) | `gpt-5.5` | `gpt-5.5` |
| `mistral` | Mistral | `mistral-large-latest` | `mistral-small-latest` |
| `grok` | xAI | `grok-4` | `grok-4.1-fast` |
| `deepseek` | DeepSeek | `deepseek-v4-flash` | `deepseek-v4-flash` |
| `meta` | Meta | `llama-3.1-405b-instruct` | `llama-3.1-70b-instruct` |

### Tier assignment (Deck Builder)

| Audit tier | Column to use | Rationale |
|---|---|---|
| `free` | `cost_optimized` | Lead-gen volume; differences in answer quality immaterial for the 5 discovery-tier prompts |
| `diagnostic` | `production` | Paid deliverable; client pays for fidelity to what their actual prospects see |
| `premium` (future) | `production` + multimodal | Same as diagnostic plus image/video prompt tests where applicable |

### Parsing contract

For automated consumers (Deck Builder generator, future MCP servers, etc.):

1. Fetch this file via raw GitHub URL.
2. Locate the section beginning with `## Deck Builder API mappings`.
3. Parse the table under that section. Header is `| Deck engine | Vendor | production | cost_optimized |`.
4. For each row, the cells contain markdown-backtick-quoted API IDs — strip the backticks.
5. Map `<engine>` to `production` or `cost_optimized` depending on audit tier per the Tier assignment table above.

If the table is missing or fails to parse, fall back to in-code defaults (the consumer should ship sensible defaults aligned with the most recent known state of this file).

### Maintenance contract

This block is updated whenever:
- A vendor releases a new model that displaces the current `production` or `cost_optimized` for any engine.
- An API ID changes (e.g., versioned identifier becomes available, deprecation moves the canonical pointer).
- A new engine is added (e.g., a vendor newly material to AI search worth tracking).

The daily-agent (`daily-agent/daily-prompt.md`) is instructed to update this table when a release qualifies (see § Methodology evolution in `SKILL.md`). The Deck Builder picks up changes on its next fetch — zero code change required there for routine model updates.

**Last refresh of API mappings: 23 May 2026.**

---

Last refresh: 23 May 2026.
