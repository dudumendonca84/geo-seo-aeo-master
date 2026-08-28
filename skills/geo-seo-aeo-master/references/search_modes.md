# Search modes — knowledge vs augmented

SINAL audits every prompt **twice** per engine. The two queries are physically separate API calls and produce two distinct measurements that must be reported side-by-side, never blended.

This file is the canonical contract. Consumers (`destaque-ai-tracker`, `destaque-ai-deck-builder`) parse the per-engine table below to know **which tool/feature** to enable to put each engine in `augmented` mode.

Last refresh: **28 Aug 2026** (Mistral augmented surface corrected, then measured: the search tool exists on the Conversations API and is capped at 20 searches a day, 3 a minute).

---

## Why two modes

A B2B SaaS brand has two distinct exposures to large language models:

1. **What the model "knows" without searching.** Reflects training-corpus penetration. Slow to move — measured in months. Important because *some* user surfaces still run training-only (offline assistants, embedded copilots without browsing, older API integrations, mobile keyboards).
2. **What the model cites when it actually searches.** Reflects current crawlable web presence. Fast to move — measured in days. Important because *most* consumer surfaces today (ChatGPT browse, Gemini grounding, Perplexity, Copilot, Claude with web tool) put the model in this mode by default.

A single number conflating the two is a lie. A brand can be **invisible in training but well-cited via search** (recent launch, strong technical content, weak entity foundation) or **strong in training but poorly cited via search** (well-known legacy brand whose site no longer indexes well). The editorial direction is opposite in each case — and `gap_action_mapping.md` selects different patterns accordingly.

This is why SINAL formalises two modes and persists them separately. The Profound / Peec convention is the same; we adopt it.

---

## The two modes

### `knowledge`

The engine is called raw, with no web-search tool, grounding, or retrieval enabled. Output is generated from pretraining + post-training data only. Same prompt across weeks should produce stable answers (modulo sampling); week-on-week drift implies the vendor pushed a model update or RLHF tweak.

Metric naming: `knowledge_cr` (citation rate), `knowledge_sov` (share of voice), `knowledge_position`.

### `augmented`

The engine is called with its **native search / grounding feature enabled** (see per-engine table below). Output is generated from a tool-augmented response — the engine retrieves live web context and weaves it into the answer. Variance week-on-week reflects the open web's volatility, not the model.

Metric naming: `augmented_cr`, `augmented_sov`, `augmented_position`.

---

## Per-engine augmentation feature

Single source of truth for what consumers must enable to put each engine into `augmented` mode. The parse anchor is the H2 above; the table headers below are part of the contract — do not rename.

| Deck engine | Vendor    | augmented mode  | API surface (May/Jun 2026)                                                                 | Notes |
|-------------|-----------|-----------------|--------------------------------------------------------------------------------------------|-------|
| `chatgpt`   | OpenAI    | `web_search`    | Responses API, `tools: [{ type: "web_search" }]`                                           | Native since Apr 2025; recommended over the older `browsing` plugin path. |
| `claude`    | Anthropic | `web_search`    | Messages API, `tools: [{ type: "web_search_20260209", name: "web_search" }]`               | Current tool version (adds dynamic filtering); the older `web_search_20250305` still works. On `claude-sonnet-4-6` / `claude-opus-4-7`+; Haiku family limited. |
| `gemini`    | Google    | `google_search` | `generateContent` with `tools: [{ google_search: {} }]`                                    | Returns `groundingMetadata` with citation URIs in the response. |
| `grok`      | xAI       | `web_search`    | Responses API (`/v1/responses`), `tools: [{ type: "web_search" }]`                          | **Corrected 10 Jun 2026.** The old Live Search `search_parameters: { mode: "on" }` on chat completions was **retired 2026-01-12 (HTTP 410)**; use the Responses API `web_search` tool. Scope via `tools[].filters` (allowed/excluded domains). Source: xAI Live Search docs (field finding) — confirm against xAI's live docs before relying. |
| `perplexity`| Perplexity| n/a (always on) | `sonar*` models are search-grounded by definition                                          | `augmented` is the only mode; `knowledge` is **not measurable**. Consumers should skip Perplexity for the knowledge half of the run. |
| `copilot`   | Microsoft | n/a (always on) | Standalone Copilot surface, read as a consumption surface (SerpApi `bing_copilot`)          | **Consumption surface, not a model.** Copilot always searches the web; there is no knowledge mode to measure. Running both halves issues the *same* request twice: in a 35-prompt audit, 29 of 35 pairs came back byte-identical and 34 of 35 agreed on the citation (CUF, Aug 2026). The Azure OpenAI `data_sources` path is a different integration and is **not** what the Tracker measures. |
| `google_aio`| Google    | n/a (always on) | AI Overviews block inside the Google SERP (DataForSEO, SerpApi fallback)                    | Consumption surface. Absence of the block is data, not failure. |
| `google_ai_mode`| Google| n/a (always on) | Google AI Mode (DataForSEO, SerpApi fallback)                                              | Consumption surface. |
| `copilot_bing`| Microsoft| n/a (always on)| Copilot block inside the Bing SERP (DataForSEO)                                             | Consumption surface, distinct from standalone `copilot`; never sum the two. |
| `mistral`   | Mistral   | `web_search`, **capped** | **Conversations API**, `beta.conversations.start` with `tools: [{ type: "web_search" }]` — NOT `chat/completions` | **Corrected 28 Aug 2026, then measured the same day.** The row said "not supported", which was true only of the chat-completions endpoint. The tool lives on the Conversations API (`ConversationRequest.tools` accepts `WebSearchTool`) and citations come back as `tool_reference` chunks with `title` and `url`. **The tool carries its own quota, invisible in the account console and absent from the docs:** the response headers declare `x-ratelimit-limit-web-search-day: 20` and `x-ratelimit-limit-web-search-minute: 3`. Twenty searches a day, three a minute, separate from the model's token and request limits, and the account had credit left when it refused. Read the headers, do not infer the ceiling from behaviour. |
| `deepseek`  | DeepSeek  | not supported   | No first-party search tool in the API as of Jun 2026                                       | Same — skip the augmented half. |
| `llama`     | Meta      | not supported   | Llama 4 via Groq/Together/Fireworks/Bedrock, OpenAI-compatible; no first-party search        | Same, skip the augmented half. **This is the model, not the assistant**: Meta AI in WhatsApp/Instagram/meta.ai has no public API and no SERP provider exposes it, so it is not measurable. Meta's own Llama API shut down 6 Jul 2026. |

**Consumption surfaces have no knowledge mode.** `google_aio`, `google_ai_mode`, `copilot`, `copilot_bing` and `perplexity` are marked `n/a (always on)` and run the augmented half only. Marking one of them as two-mode does not produce an error: it silently doubles the provider bill and labels half the rows "training memory" for a surface that cannot answer without searching. Both happened with `copilot` until Aug 2026.

Engines marked **not supported** still participate in `knowledge` mode. Consumers persist `null` for their `augmented_*` series; downstream aggregates exclude them from the augmented-mode average. The daily agent updates this table when a vendor ships native search.

**A capped search tool is not the same as a search tool, and the cap belongs in the plan.** Mistral's twenty searches a day (measured 28 Aug 2026, see the row above) do not survive contact with a weekly audit. One 50-prompt client consumed the whole day's allowance in eleven answers, which puts the real cost near two searches per answer: a single client's augmented half is roughly 90 searches, or four to five days of allowance, and a portfolio of nine clients is beyond a month. The arithmetic, not the engineering, is what decides here. Consumers with a capped engine have three honest options and should pick explicitly: raise the ceiling with the vendor (Mistral's console offers a support request for exactly this), spread one client's augmented half across days and say so in the data-quality note, or run the engine knowledge-only and declare it. What they must not do is ship a half-measured column: eleven answers of fifty, presented beside engines measured at fifty, is a number that looks like a reading and is not one.

**A stale "not supported" row is expensive, and not in the way you would expect.** Mistral sat here from Jun to Aug 2026 after its search moved to a different endpoint. The visible cost was not a missing column: it was a *misleading* one. Mistral scored 0% citation for months, which reads as "this engine ignores the brand" and nearly got it dropped from the product. The real reading is that **no engine cites in knowledge mode**: in a 424-response sample across two clients, chatgpt, gemini, grok, deepseek and claude were all at 0% there, while the same engines ranged 7% to 14% augmented. Comparing a knowledge-only engine against two-mode engines is not a comparison. When this table marks an engine "not supported", consumers must never present its citation rate beside a two-mode engine's without saying which mode produced it.

---

## Contract for consumers

1. **For each prompt × engine, perform up to two API calls.** Skip the augmented call if the table marks the engine as not supported. Skip the knowledge call for Perplexity (always-on search).
2. **Persist both responses separately.** Schema must carry a `search_mode` column with values `knowledge` or `augmented`. Composite uniqueness keys must include it.
3. **Compute metrics per mode.** `citation_rate`, `share_of_voice`, `position_avg` exist twice in every audit summary: once with the `knowledge_` prefix, once with `augmented_`.
4. **Report both in client-facing surfaces.** The Tracker dashboard and the deck cover slide both show the two side-by-side. Editorial copy should reference the gap when material (e.g., "knowledge CR 14% vs augmented 38% — entity recall is the bottleneck, not web presence").
5. **Cost accounting.** Augmented mode is materially more expensive (additional tool calls, longer outputs). Budget at **2-3×** the knowledge-mode token cost as a planning estimate; measure for real.

---

## Out of scope

- **Search-quality grading.** This file declares the modes and how to enable them; it does not grade the quality of any vendor's search implementation. That belongs in `benchmarks.md` if it ever needs persisting.
- **Citation extraction.** How to extract URLs / source titles from each vendor's grounding metadata is implementation detail. Consumers should normalise to a shared `citations: { url, title, snippet }[]` shape in their own data model.
- **PT-PT-specific search-corpus health.** Vendor coverage of the Portuguese-language web varies and shifts; track it in `news-feed.md` as it changes, do not pin assumptions here.
