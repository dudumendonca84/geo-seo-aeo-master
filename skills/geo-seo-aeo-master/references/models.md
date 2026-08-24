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

**Last refresh: 24 Aug 2026 (attempted, no confirmed default-model change)** — Weekly self-audit routine refresh, 4 targeted `WebSearch` queries (OpenAI/ChatGPT, Google/Gemini AI Mode, Anthropic/Claude, Perplexity). Direct `WebFetch` to Tier 1 sources returned `EGRESS_BLOCKED` (this session's network proxy) for `www.destaque.ai` and, per this session's other fetch attempts, the same restriction applies to external domains generally — consistent with the pattern reported in every self-audit since mid-July. No new default-model change confirmed: GPT-5.6 Luna remains the Free/Go default (OpenAI's own reporting this week adds detail — internal testing showing factual-error rates down 62%/68% vs GPT-5.5-Instant for Luna/Sol respectively, and a "Think" button for Free/Go — a quality/product refinement, not a new default, already reflected in this file since the 10 Aug refresh); GPT-5.6 Sol unchanged as Plus/Pro/Business/Enterprise default. Gemini 3.7 Flash remains opt-in only for AI Pro/Ultra subscribers in AI Mode (confirmed again this week); Gemini 3.5 Flash remains the AI Mode default for everyone — no change since the 16 Aug refresh. One secondary-sourced, unconfirmed item found and **not** used to change any row: a third-party aggregator described a Perplexity "Model Council" default set (GPT-5.6 Sol w/ Thinking + Claude Opus 5 w/ Thinking + Gemini 3.1 Pro w/ Thinking) dated July 2026 — not corroborated against Perplexity's own docs/changelog, and unclear whether it describes the consumer Search product or a distinct feature; left as a flag for next refresh rather than a row change. Claude: no new model since Opus 5 (24 Jul); Anthropic's August news is compliance-driven (EU AI Act Article 50 watermarking on all new-model output since 2 Aug 2026) and safety-tuning (biology-safeguard false-positive reduction), neither of which is a citation-mechanic change under this file's maintenance criteria. **No material default-model change confirmed this week — sixth consecutive refresh with the same result.** Primary-source access remains blocked for this routine's execution environment.

Prior entry — **Last refresh: 16 Aug 2026 (partial)** — Google section: added **Gemini 3.7 Flash** row (13 Aug 2026 launch, built on Gemini 3.6 Flash) — selectable in AI Mode via model picker for Google AI Pro/Ultra subscribers, English only, since 14 Aug 2026 ([Search Engine Land](https://searchengineland.com/gemini-3-7-flash-rolling-out-in-google-search-485058)); opt-in only, does **not** change the AI Mode default (still Gemini 3.5 Flash, with Flash-Lite latency routing unchanged). xAI section: added **Grok 4.6** row (12 Aug 2026) — added to Perplexity's Agent API (developer product, distinct from Perplexity's consumer Search/Pro tiers) alongside DeepSeek V4 Flash and NVIDIA Nemotron models; does not change Perplexity's consumer-facing citation surface, so the Perplexity "Models" table (consumer tiers) was left unchanged. No Deck Builder API mapping changes — neither addition displaces a `production`/`cost_optimized` default. `WebFetch` direct blocked by this session's network proxy (`EGRESS_BLOCKED`) for all Tier 1 sources; verified via `WebSearch` cross-corroboration (Search Engine Land, Search Engine Journal, Bloomberg for Gemini 3.7 Flash; Perplexity's own changelog for the Agent API additions).

Prior entry — **Last refresh: 10 Aug 2026 (attempted, no confirmed default-model change)** — Weekly self-audit routine attempted the refresh before running the prompt test. Direct `WebFetch` to Tier 1 primary sources returned `EGRESS_BLOCKED` (this execution environment's network proxy, not a vendor-side block) for `destaque.ai` and, per today's `daily-agent/news-feed.md` entry, for `developers.google.com`, `openai.com`, `anthropic.com`, `blogs.bing.com`, `perplexity.ai`. `WebSearch` was used as a fallback with 3 targeted queries (OpenAI/ChatGPT, Google/Gemini AI Mode, Anthropic/Claude). No new default-model change found: GPT-5.6 Sol remains default for ChatGPT Plus/Pro/Business/Enterprise; the one relevant announcement this week (6 Aug 2026, OpenAI) makes GPT-5.6 Luna the default for Free/Go users with unlimited text chats — this is a **quota/product change**, not a new default model, since GPT-5.6 Luna was already the Free/Go default row in this file as of the 03 Aug refresh. Gemini 3.5 Flash remains confirmed default for AI Mode (no change since the 21 Jul Flash-Lite routing note). Claude Opus 5 (24 Jul launch) remains the most recent Anthropic release; no new model since. **No material default-model change confirmed this week.** Primary-source access remains blocked for this routine's execution environment — see `destaque-ai-self/improvements-backlog.md`, item "GEO — Routine sem acesso ao teste multi-motor ao vivo" (the same network restriction affects both the model-refresh step and the live multi-engine prompt test).

Prior entry — **Last refresh: 03 Aug 2026 (attempted, no confirmed default-model change)** — Direct `WebFetch` to all 7 Tier 1 primary sources returned HTTP 403 (bot-protection) from this execution environment. `WebSearch` fallback returned only third-party aggregator sites with contradictory claims, none used to alter any row. One behavior change absorbed from a credible secondary source: Perplexity began using **Claude Opus 5** in Search and Computer during the week of 24 Jul 2026 (TechCrunch, via `daily-agent/news-feed.md` entry 2026-07-31) — added as a note to the Perplexity table below; not used to change the Deck Builder `production`/`cost_optimized` mapping without primary-source confirmation.

Prior entry — **Last refresh: 25 Jul 2026 (partial)** — Anthropic section: added Claude Opus 5 row, absorbing Anthropic's 24 Jul 2026 launch (anthropic.com/news/claude-opus-5) — new default on Claude Max (superseding Opus 4.8), strongest selectable model on Claude Pro; not yet confirmed whether it displaces Opus 4.8 in Claude Code Fast mode. No change to the Deck Builder `claude` production/cost_optimized mapping — Free/Pro default (what the `production` ID represents) remains Sonnet 5, unaffected by the Max-tier change (see news-feed 2026-07-25). Prior refresh 23 Jul 2026 (partial): Google section: added Gemini 3.5 Flash-Lite row, absorbing Google's 21 Jul 2026 launch (blog.google) — Google confirmed Search queries are now routed to Flash-Lite depending on the question (conversational intent understanding, agentic search, document processing), alongside the existing 3.5 Flash default for AI Overviews/AI Mode; not yet clear whether Flash-Lite displaces 3.5 Flash as primary or is an additional latency-routing tier (see news-feed 2026-07-23). Deck Builder API mappings `gemini` `cost_optimized` updated accordingly. Prior refresh 17 Jul 2026 (partial): Microsoft section corrected: Microsoft 365 Copilot moved from GPT-5 to GPT-5.6 Sol (preferred model since 9 Jul 2026), absorbing an item missed by 8 days (see news-feed 2026-07-17 for the gap note). Bing Copilot row left unchanged — no evidence that surface moved off GPT-5. Prior refresh 11 Jul 2026 (partial): OpenAI section (GPT-5.6 Sol/Terra/Luna GA rows) and the Deck Builder API mappings `chatgpt` row updated, absorbing the 9 Jul 2026 GPT-5.6 launch. Prior refresh 04 Jul 2026: Claude Fable 5 / Mythos 5 rows added (Anthropic section), absorbing the 01 Jul 2026 export-control restoration. Interim vendor releases between 03 Jun and 01 Jul (e.g. Claude Tag, GPT-5.2 sunset) remain not absorbed. See `skills/geo-seo-aeo-master/daily-agent/news-feed.md` for the full running record.

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
| **GPT-5.6 — Sol** (`gpt-5.6-sol`) | 9 Jul 2026 (GA) | 256k tokens | Yes (with tool) | ChatGPT Plus/Pro/Business/Enterprise default (regular chat) since 9 Jul 2026; gradual rollout, not yet on Free/Go |
| **GPT-5.6 — Terra** (`gpt-5.6-terra`) | 9 Jul 2026 (GA) | 256k tokens | Yes (with tool) | ChatGPT Work default for Free/Go; selectable elsewhere. ~Sol performance at lower cost |
| **GPT-5.6 — Luna** (`gpt-5.6-luna`) | 9 Jul 2026 (GA) | 256k tokens | Yes (with tool) | Lowest-cost GPT-5.6 variant; selectable in ChatGPT Work, API |
| **GPT-5.5 Instant** | May 2026 | 256k tokens | Yes (with tool) | ChatGPT Free/Go default (regular chat) — remains the free-tier default after the GPT-5.6 launch |
| **GPT-5** | Aug 2025 | 256k tokens | Yes (with tool) | ChatGPT Search, API (explicit), some paid workflows |
| **GPT-5 mini** | Oct 2025 | 256k | Yes (with tool) | Free ChatGPT fallback for some queries |
| **GPT-4o** | May 2024 | 128k | Yes | Legacy in API, deprecation announced Q3 2026 |
| **GPT-4.5** | 2025 | 128k | Yes | **Retiring June 27 2026** — 30-day sunset announced |
| **o1 / o1-pro** | Sept 2024 | 128k | No (reasoning only) | "Think longer" mode |
| **o3 / o3-pro** | Jan 2026 | 200k | Yes | **Retiring August 26 2026** — 90-day sunset announced |

### Products and which model

- **ChatGPT Search / SearchGPT** — since 9 Jul 2026, default is tier-dependent: GPT-5.6 Sol for Plus/Pro/Business/Enterprise, GPT-5.5 Instant unchanged for Free/Go (gradual rollout, not confirmed complete as of 11 Jul). Web search via Bing index + OpenAI crawl for both. Source: [openai.com/index/gpt-5-6](https://openai.com/index/gpt-5-6/) (9 Jul 2026); publish-date and detail cross-confirmed via OpenAI Help Center, TechCrunch, CNBC (direct fetch of openai.com blocked by bot-protection at verification time).
- **ChatGPT Atlas browser** — GPT-5.5 Instant with browsing tools enabled by default (not yet confirmed migrated to GPT-5.6).
- **Custom GPTs** — pinned to model owner chose (often GPT-4o legacy still).
- **ChatGPT Voice (GPT-Live)** — since 8 Jul 2026, full-duplex voice models (GPT-Live-1 flagship for paid tiers, GPT-Live-1 mini default for free users) replace Advanced Voice Mode. Voice layer only — delegates web search/reasoning to the GPT-5.5 backend when a query needs it; underlying search/citation model unchanged. Source: [openai.com/index/introducing-gpt-live](https://openai.com/index/introducing-gpt-live/).
- **GPT-5.6 Sol API pricing cut (21 Aug 2026)** — promotional pricing through at least 21 Nov 2026: input $5.00→$4.00/1M tokens (-20%), cached input $0.50→$0.40/1M, output $30.00→$20.00/1M (-33%). Applies to the pay-as-you-go API, Codex credits and eligible ChatGPT Work plans; Plus/Pro/Business subscription prices unchanged. Now cheaper than Claude Opus 5 on both input and output — framed by OpenAI as a response to Anthropic/Chinese-lab price competition, not a model change. Source: [OpenAI Developer Community](https://community.openai.com/t/20-price-reduction-for-gpt-5-6-sol-api-codex-credits-and-chatgpt-work/1391726) (21 Aug 2026), corroborated by Reuters/Investing.com.

### GEO-relevant notes

- ChatGPT Search enables web search on only **~34.5% of queries** (Semrush clickstream Feb 2026). 65% of answers come from training-data recall — no live citation possible.
- UTM tagging in citation links since June 2025: `?utm_source=chatgpt.com`.
- Bot user-agents: `GPTBot` (training), `OAI-SearchBot` (search index), `ChatGPT-User` (real-time fetch). See `frameworks.md` §2.

---

## Anthropic

### Current production models

| Model | Released | Context | Web search | Default in |
|---|---|---|---|---|
| **Claude Fable 5** | Jun 2026 (export-restricted); access restored 01 Jul 2026 | 1M tokens, 128k max output | Yes | Anthropic's most capable widely-released model; not a default anywhere yet — opt-in for demanding agentic/reasoning work |
| **Claude Mythos 5** | Jun 2026 (limited release) | 1M tokens, 128k max output | Yes | Limited release via "Project Glasswing"; same capabilities as Fable 5, routes cyber/bio-chem/distillation-flagged requests to Opus 4.8 instead |
| **Claude Opus 5** | 24 Jul 2026 | 1M tokens | Yes | **New default on Claude Max** (superseding Opus 4.8); strongest selectable model on Claude Pro. Approaches Fable 5 on many benchmarks at half the price ($5/$25 per million input/output tokens, same as Opus 4.8) |
| **Claude Opus 4.8** | May 2026 | 1M tokens | Yes | Claude Code Fast mode; superseded by Opus 5 as Claude Max default (24 Jul 2026) — still selectable |
| **Claude Sonnet 5** | 30 Jun 2026 | 1M tokens (default and max), 128k max output | Yes | **New default for Free and Pro plans on claude.ai** (since 30 Jun 2026); also available Max/Team/Enterprise and API (`claude-sonnet-5`) |
| **Claude Opus 4.7** | Apr 2026 | 1M tokens | Yes | Claude Pro / Max (previous default — being superseded) |
| **Claude Sonnet 4.6** | Mar 2026 | 1M tokens | Yes | Superseded as claude.ai/API default by Sonnet 5 (30 Jun 2026); still available in API |
| **Claude Haiku 4.5** | Oct 2025 | 200k | Yes | Speed tier, batch jobs |
| **Claude Sonnet 4.5** | Sept 2025 | 1M tokens | Yes | Still available in API for compat |

Claude Sonnet 5 pricing: intro $2/$10 per million input/output tokens through 31 Aug 2026, then $3/$15. Anthropic positions it as close to Opus 4.8 performance at lower cost; safety card reports lower hallucination/sycophancy and improved agentic-safety (prompt-injection resistance) vs. Sonnet 4.6. Uses an updated tokenizer (same input maps to ~1.0–1.35x tokens vs. prior tokenizer). Source: [anthropic.com/news/claude-sonnet-5](https://www.anthropic.com/news/claude-sonnet-5).

Claude Fable 5 / Mythos 5 pricing: $10/$50 per million input/output tokens. Both were subject to US Department of Commerce export controls that suspended access; Anthropic began restoring Fable 5 on 01 Jul 2026 across Claude Platform, Claude.ai, Claude Code and Claude Cowork globally after the controls were lifted, with Pro/Max/Team/select-Enterprise users credited up to 50% of weekly usage limits through 07 Jul 2026 as compensation for the disruption. Source: [anthropic.com/news](https://www.anthropic.com/news).

Claude Opus 5 pricing: $5/$25 per million input/output tokens — identical to Opus 4.8, exactly half of Fable 5. Ships with an effort toggle (low/medium/high) letting users trade cost against capability per task. Anthropic's own benchmarks show Opus 5 ahead of Opus 4.8 on agentic coding, novel problem-solving, knowledge work, computer use and multidisciplinary reasoning; still behind Mythos 5 on cybersecurity tasks. Source: [anthropic.com/news/claude-opus-5](https://www.anthropic.com/news/claude-opus-5).

### Products and which model

- **claude.ai** (web) — Sonnet 5 default for Free/Pro (since 30 Jun 2026); Opus 5 default for Max (since 24 Jul 2026, superseding Opus 4.8); Opus 5 also selectable on Pro as the strongest available option.
- **Claude Desktop** — same as claude.ai.
- **Claude Code (CLI + Web Routines)** — Sonnet 5 default; Opus 4.8 in Fast mode (released May 28 2026) — not yet confirmed whether Fast mode moves to Opus 5.
- **API** — explicit model parameter required. IDs: `claude-opus-4-7`, `claude-sonnet-5`, `claude-sonnet-4-6`, `claude-haiku-4-5-20251001`.

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
| **Gemini 3.5 Flash-Lite** | 21 Jul 2026 | 2M tokens | Yes | Routed for latency-sensitive Google Search queries (conversational intent, agentic search, document processing) and Gemini app; fastest/most cost-effective 3.5-class model (350 output tokens/sec) |
| **Gemini 3.7 Flash** | 13 Aug 2026 | not confirmed | Yes | Selectable in AI Mode via model picker for Google AI Pro/Ultra subscribers (English only) since 14 Aug 2026 — built on Gemini 3.6 Flash, marketed as better instruction-following/intent understanding; opt-in, not yet the AI Mode default |
| **Gemini 3.5 Pro** | May 2026 (I/O) | 2M tokens | Yes | Gemini Advanced ($), Workspace integrations |
| **Gemini 2.5 Pro** | Dec 2025 | 1M tokens | Yes | Still available in Vertex AI, AI Studio |
| **Gemini 2.5 Flash** | Dec 2025 | 1M tokens | Yes | API default before I/O 2026 |
| **Gemini 2.0 Flash** | Feb 2025 | 1M tokens | Yes | **Deprecated path** — clients still on this should migrate |

### Products and which model

- **Google Search AI Overviews** — Gemini 3.5 Flash since I/O 2026 (replacing 2.5 Flash). Uses **same Google index as classic Search** ([Search Central docs](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing)). Since 21 Jul 2026, Google routes some Search queries to **Gemini 3.5 Flash-Lite** instead, depending on the question — not yet confirmed whether this is a partial replacement or an additional latency tier ([blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)).
- **Google AI Mode** — Gemini 3.5 Flash globally since I/O 2026; >1B monthly users declared at I/O. Flash-Lite routing (see above) also applies here for conversational/agentic queries. Since 14 Aug 2026, Google AI Pro/Ultra subscribers (English only) can opt into **Gemini 3.7 Flash** via the model picker — not a default change, but the first paid-tier model choice inside AI Mode itself ([Search Engine Land](https://searchengineland.com/gemini-3-7-flash-rolling-out-in-google-search-485058), 14 Aug 2026).
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
| **GPT-5** (via Azure OpenAI) | Bing Copilot | Microsoft partners with OpenAI for frontier model access |
| **GPT-5.6 — Sol** (via Azure OpenAI) | Microsoft 365 Copilot (Word, Excel, PowerPoint, Chat, Cowork) | Preferred model since 9 Jul 2026; Copilot may auto-select it or expose it via a model picker depending on region/tenant |
| **GPT-4o** | Legacy Copilot fallback | Being phased out |
| **Phi-4** (Microsoft internal) | Edge Copilot sidebar, lightweight tasks | Open weights, ~14B params |

### Products

- **Bing Copilot** — GPT-5 with Bing index for retrieval and citation. No evidence found (as of 17 Jul 2026) that this AI-search-facing surface has moved to GPT-5.6 — distinct from the Microsoft 365 Copilot productivity product below.
- **Microsoft 365 Copilot** — GPT-5.6 Sol (preferred model since 9 Jul 2026, replacing GPT-5) + customer's Graph data via Microsoft Search. Productivity assistant embedded in Office apps, not an AI search engine — tracked here for completeness, not part of the Deck Builder `copilot` engine (which represents Bing Copilot).
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
| **Claude Sonnet 4.6** | Anthropic via API | Pro tier "best for writing" (note: secondary-sourced reports, TechCrunch via news-feed 2026-07-31, say Perplexity Search/Computer moved to **Claude Opus 5** the week of 24 Jul 2026 — not yet confirmed against Perplexity's own docs/changelog; row left unchanged pending primary-source confirmation) |
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
| **Grok 4.6** | 12 Aug 2026 | not confirmed | X (Twitter) integrated, grok.com, xAI API; added to Perplexity's **Agent API** (developer/agent-building product, distinct from Perplexity's consumer Search) alongside DeepSeek V4 Flash and NVIDIA Nemotron models the same week ([Perplexity changelog](https://docs.perplexity.ai/docs/resources/changelog)) |
| **Grok 4** | Feb 2026 | 1M tokens | X (Twitter) integrated, grok.com |
| **Grok 3** | Aug 2025 | 256k | Legacy, still in API |

### GEO-relevant notes

- Grok citation behavior poorly documented publicly. Some tracking via Profound and Goodie (which monitor Grok among 9+ engines).
- Web search via X (Twitter) data + standard web crawl.
- Grok 4.6's addition to third-party agent products (Perplexity Agent API, Cursor, OpenRouter) is a distribution/reach signal, not a citation-surface change — it does not alter how Grok itself sources or cites content in grok.com/X answers.

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
| `chatgpt` | OpenAI | `gpt-5.6-sol` | `gpt-5.6-luna` |
| `claude` | Anthropic | `claude-sonnet-5` | `claude-haiku-4-5` |
| `gemini` | Google | `gemini-3.5-flash` | `gemini-3.5-flash-lite` |
| `perplexity` | Perplexity | `sonar-pro` | `sonar` |
| `copilot` | Microsoft (Azure OpenAI) | `gpt-5.5` | `gpt-5.5` |
| `mistral` | Mistral | `mistral-large-latest` | `mistral-small-latest` |
| `grok` | xAI | `grok-4.3` | `grok-4.1-fast` |
| `deepseek` | DeepSeek | `deepseek-v4-flash` | `deepseek-v4-flash` |
| `llama` | Meta (third-party hosts) | `llama-4-maverick-17b-128e-instruct` | `llama-4-scout-17b-16e-instruct` |

**Caveat — `llama` row (04 Aug 2026):** the engine key was `meta` with Llama 3.1 IDs; renamed to `llama` and moved to Llama 4, and the vendor column now says "third-party hosts" on purpose. Meta's own Llama API (llama.developer.meta.com) shut down on 6 Jul 2026, so the models are reachable only through Groq, Together, Fireworks, Bedrock and similar, all OpenAI-compatible. **This row is the MODEL, not the assistant.** Meta AI as a consumer surface (WhatsApp, Instagram, meta.ai) has no public API and no SERP provider exposes it, so it is not measurable today; a consumer must not label a Llama API call as "Meta AI", because the assistant carries its own system prompt, retrieval and guardrails and answers differently. Ungrounded: none of the third-party hosts expose a first-party web-search tool on the chat endpoint, so this engine runs training-memory only.

**Caveat — `chatgpt` row (11 Jul 2026):** with GPT-5.6's launch, ChatGPT's default is tier-dependent for the first time (previously a single model served all tiers). `gpt-5.6-sol` reflects the Plus/Pro/Business/Enterprise default; free/Go ChatGPT users still default to `gpt-5.5-instant` as of this refresh. The `production` value above is calibrated to the paid-diagnostic-audit rationale in the Tier assignment table below, not to the free-tier product experience.

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

**Last refresh of API mappings: 23 Jul 2026** — `gemini` `cost_optimized` updated from `gemini-2.5-flash` to `gemini-3.5-flash-lite` following Google's 21 Jul 2026 launch and confirmation that Google Search now routes some queries to Flash-Lite (see news-feed 2026-07-23 and Google section above); `production` (`gemini-3.5-flash`) left unchanged — no evidence Flash-Lite has displaced 3.5 Flash as the primary AI Overviews/AI Mode model. Previous refresh: 11 Jul 2026 — `chatgpt` production/cost_optimized updated from `gpt-5.5`/`gpt-5.5` to `gpt-5.6-sol`/`gpt-5.6-luna` following OpenAI's 9 Jul 2026 GPT-5.6 GA launch (Plus/Pro/Business/Enterprise default; free/Go tier unchanged on `gpt-5.5-instant` — see caveat above the table). Prior refresh: 02 Jul 2026 — `claude` production ID updated from `claude-sonnet-4-6` to `claude-sonnet-5` following Anthropic's 30 Jun 2026 release (now default on claude.ai Free/Pro).

---

Last refresh: 02 Jul 2026.
