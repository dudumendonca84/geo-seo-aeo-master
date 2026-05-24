# AI engine default models — reference for prompt-test protocol

Maintained for: destaque.ai — SINAL audit prompt-test section.
Last refresh: 2026-05-24 (created from best available knowledge; primary-source verification required — see Refresh protocol below).

---

## Refresh protocol

Models change without notice. Before each SINAL weekly audit, verify the default models for each engine against the following Tier 1 sources. If any model has changed since the last refresh date above, update this file and commit before running the prompt-test suite.

| Engine | Primary source for model changelog |
|---|---|
| ChatGPT | https://openai.com/news — look for "GPT-4" or model announcement tags |
| Perplexity | https://perplexity.ai/changelog |
| Google AI Mode / AI Overviews | https://developers.google.com/search/blog |
| Claude (web) | https://anthropic.com/news |
| Bing Copilot | https://blogs.bing.com |
| Gemini (standalone) | https://deepmind.google/discover/blog |

---

## Current defaults (May 2026)

### ChatGPT (chat.openai.com)

| Context | Model | Notes |
|---|---|---|
| Free tier (unauthenticated or free account) | GPT-4o mini | May step up to GPT-4o for limited usage |
| Plus / Pro — default conversation | GPT-4o | Identified in the model selector as "GPT-4o" |
| Plus / Pro — reasoning mode | o3 or o4-mini | Triggered by "Think" toggle or complex query |
| ChatGPT Search (web-enabled) | GPT-4o with search tools | Identified in response footer; enabled on ~34.5% of queries (Semrush, Feb 2026) |

**Caveat.** OpenAI updates the production model behind "GPT-4o" without announcement. The model selector string is the closest proxy to the actual checkpoint. As of August 2025 (knowledge-base cutoff) o3 and o4-mini were available; verify current defaults before a prompt-test session.

### Perplexity (perplexity.ai)

| Context | Model | Notes |
|---|---|---|
| Default (free) | Sonar | Perplexity's own model, Llama-based |
| Pro Search | Sonar Pro | Higher reasoning budget |
| Model picker options | Claude Sonnet 4, GPT-4o, Gemini 2.5 Pro | Selectable; default remains Sonar |

**Caveat.** Perplexity updated its Sonar family multiple times in 2025. The response metadata typically shows the model name; record it per session.

### Google AI Mode / AI Overviews (google.com)

| Context | Model | Notes |
|---|---|---|
| AI Overviews (triggered automatically) | Gemini 2.5 Flash | Google does not always surface the model version in the UI |
| AI Mode (labs.google.com/search or opted-in users) | Gemini 2.5 Pro | Higher-capability; slower |
| Standard AI Overviews | Gemini 2.0 Flash (fallback) | Used for lower-complexity or cached responses |

**Caveat.** Google does not publicly confirm which checkpoint drives a given AIO response. "Gemini 2.5 Flash" is the best public attribution available as of the writing of this file. Treat as directional.

### Claude (claude.ai)

| Context | Model | Notes |
|---|---|---|
| Default (claude.ai web) | Claude Sonnet 4 (claude-sonnet-4-6) | Confirmed active as of 2026-05-24; model ID surfaced in this session |
| Pro plan with extended thinking | Claude Opus 4 (claude-opus-4-7) | Manual selection required |
| Mobile / lite contexts | Claude Haiku 4 (claude-haiku-4-5) | Selectable |

**Source.** Anthropic model IDs confirmed via system prompt in this environment: Opus 4.7 = `claude-opus-4-7`; Sonnet 4.6 = `claude-sonnet-4-6`; Haiku 4.5 = `claude-haiku-4-5-20251001`.

Web search in Claude: powered by Brave Search when web-search tool is active.

### Bing Copilot (copilot.microsoft.com)

| Context | Model | Notes |
|---|---|---|
| Default (Copilot web / Windows) | GPT-4o | Microsoft/OpenAI partnership; model version not always surfaced |
| Copilot Pro | GPT-4o or o3-mini | Higher reasoning budget options visible in settings |

**Caveat.** Microsoft does not consistently disclose the exact checkpoint. The Bing Webmaster Tools AI Performance dashboard does not expose model identifiers either. Record whatever version string appears in the Copilot UI during the prompt-test session.

---

## Change log

| Date | Change |
|---|---|
| 2026-05-24 | File created. Initial values derived from knowledge base (cutoff Aug 2025) plus Anthropic system-prompt confirmation for Claude. Primary-source verification outstanding for all other engines. |

---

## For prompt-test sessions: what to record

For each prompt × engine combination in the SINAL prompt-test:
1. Exact query string (copy/paste, no paraphrase).
2. Date and UTC time of the run.
3. Model string as shown in the UI (or as returned in the API response).
4. Full answer text or screenshot (if full text not copyable).
5. Citations array: URLs, domain, order.
6. Ranking of destaque.ai within the citation list (1-indexed; "not cited" if absent).
7. Mention vs citation distinction (mentioned in answer text without a source link = mention; linked = citation).
8. Sentiment toward destaque.ai if mentioned (positive / neutral / negative / mixed).
9. Competitors cited in the same response.
