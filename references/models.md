# Default models per engine — May 2026

Reference for `geo-seo-aeo-master`. Used in SINAL prompt-test to document which model was active at the time of each test run. Update when a new default is announced.

**Last refresh: 25 May 2026.**

---

## ChatGPT (OpenAI)

| Tier | Default model | Notes |
|---|---|---|
| Free | GPT-5.5 Instant | Released ~5 May 2026; replaced GPT-5.3 Instant as universal default ([TechCrunch, 5 May 2026](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/)) |
| Plus / Team | GPT-5.5 Instant | Same default; Plus/Team additionally unlock extended thinking models |
| Enterprise / API | Configurable; `gpt-4.1` and `gpt-4.1-mini` in API; GPT-4o deprecated API Feb 2026 ([OpenAI deprecations](https://platform.openai.com/docs/deprecations)) |

**Legacy note.** GPT-4o was removed from ChatGPT on 13 February 2026 after restoration in Aug 2025 ([VentureBeat](https://venturebeat.com/ai/openai-is-ending-api-access-to-fan-favorite-gpt-4o-model-in-february-2026)). Do not reference GPT-4o as current ChatGPT default.

---

## Perplexity

| Mode | Default model | Notes |
|---|---|---|
| Default (all tiers) | Sonar | Perplexity's own web-grounded model, built on open-source Llama architecture; fast, real-time web search |
| Pro switchable | GPT-5 family, Claude Sonnet 4.6, Gemini 3.5 Flash | Pro users can toggle; Sonar remains default on first load |

**Prompt-test instruction.** Use Sonar (default) unless testing model-specific behaviour. Note the model slug in the response footer.

Sources: [Perplexity help centre](https://www.perplexity.ai/hub/technical-faq/what-advanced-ai-models-does-perplexity-pro-unlock); [Perplexity API docs](https://docs.perplexity.ai/docs/agent-api/models).

---

## Google AI Mode / AI Overviews

| Surface | Default model | Notes |
|---|---|---|
| Google AI Mode (Search Labs) | Gemini 3.5 Flash | Announced Google I/O May 2026; replaced Gemini 3 (global default since 27 Jan 2026) ([Digital Trends](https://www.digitaltrends.com/computing/gemini-3-5-flash-is-googles-new-default-ai-model-and-its-built-to-act-not-just-answer/)) |
| AI Overviews (standard SERP) | Gemini 3.5 Flash | Same model feeds both surfaces via Google Search index |
| Gemini app | Gemini 3.5 Flash | Default; Gemini Advanced tier unlocks Gemini Ultra 3.5 |

**Critical note.** Google does not expose a separate AI-Overviews crawler; Googlebot feeds both classical Search and AI Overviews. Blocking Googlebot removes a site from both.

---

## Bing Copilot (Microsoft)

| Mode | Default model | Notes |
|---|---|---|
| Free Copilot | GPT-4o (usage-limited) | Microsoft continues routing free-tier through GPT-4o; GPT-5 family available on paid tiers |
| Copilot Pro | GPT-5 family (Microsoft routing) | |
| Copilot Gemini | Gemini 3.5 Flash | New collaboration feature; 48M active users as of Mar 2026 |

Sources: [Neuronad, May 2026](https://neuronad.com/gemini-vs-copilot/); [Windows Forum thread](https://windowsforum.com/threads/microsoft-copilot-vs-google-gemini-how-ai-search-defaults-beat-early-demos.419522/).

---

## Claude (Anthropic / claude.ai)

| Tier | Default model | Notes |
|---|---|---|
| Free (claude.ai) | Claude Sonnet 4.6 | Daily driver; Opus-level intelligence at Sonnet pricing per Anthropic positioning |
| Pro (claude.ai) | Claude Opus 4.7 (switchable) | Most capable generally available model; step-change in agentic coding vs 4.6 |
| API default | `claude-sonnet-4-6` | Recommended in API docs; `claude-opus-4-7` for complex tasks |

Claude uses **Brave Search** as retrieval backend when web search is enabled. Citation density is lower than Perplexity; citations are shown to end users when surfacing search results per [Anthropic docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool).

Sources: [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview); [StartupHub.ai guide](https://www.startuphub.ai/ai-news/reviews/2026/claude-ai-complete-guide-2026).

---

## Maintenance

Update this file when:
- A new default model is announced for any of the five engines above.
- A previously-current model is deprecated (note the date).
- A new engine enters the mandatory test suite.

Next refresh due: **1 June 2026** (or earlier if OpenAI/Google announce changes).
