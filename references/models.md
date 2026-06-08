---
title: Default models by engine — reference for prompt-test documentation
maintained_by: weekly self-audit (manual refresh trigger if >7 days old)
last_refresh: 2026-06-08
sources:
  - https://help.openai.com/en/articles/9624314-model-release-notes
  - https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/
  - https://docs.perplexity.ai/docs/sonar/models
  - https://blog.google/products-and-platforms/products/search/search-io-2026/
  - https://www.businesstoday.in/technology/artificial-intelligence/story/google-io-2026-google-announces-gemini-3-5-models-and-gemini-spark-ai-agent-532351-2026-05-19
  - https://pasqualepillitteri.it/en/news/3342/microsoft-bing-copilot-guide-2026
---

# Default models by engine — June 2026

Use this table when documenting prompt-test results. Always record the model version shown in the UI at query time; the defaults below are the confirmed baseline, but individual accounts or A/B rollouts may differ.

---

## ChatGPT (chat.openai.com)

| Tier | Default model | Notes |
|---|---|---|
| Free | **GPT-5.5 Instant** | Default for all tiers since 5 May 2026 (TechCrunch, 5 May 2026). GPT-4o retired 13 Feb 2026. |
| Plus / Team / Enterprise | **GPT-5.5 Instant** (auto-routing) | Plus/Team can manually switch to GPT-5, GPT-5.5, o3, etc. |

Web search: enabled on ~34.5% of queries (Semrush clickstream, Feb 2026). Real-time fetch via OAI-SearchBot; index is Bing + OpenAI proprietary crawl.

---

## Perplexity (perplexity.ai)

| Tier | Default model | Notes |
|---|---|---|
| Free | **Sonar** | Built on Llama 3.3 70B, further trained for factuality (perplexity.ai/hub, 2026). Runs at ~1,200 tok/s via Cerebras inference. |
| Pro | **Sonar Pro** (default); user-switchable | Pro users can select: GPT-5.4, Claude Sonnet 4.6, Claude Opus 4.8, Gemini 3.1 Pro, Nemotron 3 Super, Kimi K2.5 Thinking, Sonar family. |

Real-time retrieval via PerplexityBot (indexes) + Perplexity-User (live fetch on query). ~21.9 citations/answer (Profound).

---

## Google AI Mode / AI Overviews (google.com)

| Surface | Default model | Notes |
|---|---|---|
| AI Mode (google.com/search?udm=50) | **Gemini 3.5 Flash** | Default since May 2026 (Google I/O 2026, 20 May 2026). Surpasses Gemini 3.1 Pro on coding/agentic benchmarks at Flash speeds. AI Mode surpassed 1B monthly users as of I/O 2026. |
| AI Overviews (standard SERP) | **Gemini 3.5 Flash** | Same underlying model. Triggered on ~50% of queries (BrightEdge, 2026). |

Index: Googlebot (same as classical Search). Blocking Googlebot removes site from AI Overviews entirely.

---

## Claude (claude.ai)

| Tier | Default model | Notes |
|---|---|---|
| Free / Pro | **Claude Sonnet 4.6** (`claude-sonnet-4-6`) | Current default as of June 2026. |
| Pro (toggleable) | Claude Opus 4.8 (`claude-opus-4-8`) | Higher capability, slower. |
| All | Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) | Fastest/cheapest; not the default web UI model. |

Web search backend: **Brave Search** (lower citation density than Perplexity; conservative sourcing). Citations required when web-search tool is active (Anthropic API docs).

---

## Bing Copilot (copilot.microsoft.com / bing.com/chat)

| Tier | Default model | Notes |
|---|---|---|
| Free | **GPT-5** (automatic routing) | GPT-5.5 rollout in progress as of June 2026. |
| Commercial / Enterprise | GPT-5 or Claude Sonnet 4.5 (Anthropic partnership, from 7 Jan 2026) | Enterprise customers can select Anthropic models. |

Index: Bing index. First-party citation telemetry via **Bing Webmaster Tools → AI Performance** dashboard (public preview, 9 Feb 2026).

---

## Notes on refresh protocol

If the `last_refresh` date is >7 days from today:
1. Search `"{engine} default model {current_month} {current_year}"` for each of the five engines above.
2. Prioritise: OpenAI Help Center, Perplexity docs, Google Blog, Anthropic changelog, Microsoft Copilot release notes.
3. Update this file, commit, and note the refresh in the audit entry.
