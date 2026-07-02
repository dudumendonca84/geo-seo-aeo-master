# Default models by engine — reference

Used by the SINAL self-audit workflow to document which model version served each prompt test.
If this file is more than 7 days old, refresh from Tier-1 sources before running a new audit.

Last refresh: 2026-06-01

---

## ChatGPT (OpenAI)

| Tier | Default model | Notes |
|---|---|---|
| Free | GPT-5.5 Instant | Default since early May 2026. Replaced GPT-5.3 Instant. |
| Plus / Pro | GPT-5.5 Instant (auto) | GPT-5.3 remains available via model selector for 3 months. |
| API | gpt-5.5-instant, gpt-5.3-instant, gpt-5.1, o3 | Per [platform.openai.com/docs/models](https://platform.openai.com/docs/models) |

Sources: [OpenAI blog](https://openai.com/index/introducing-gpt-5-5/), [TechCrunch](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/). Announced ~5 May 2026.

---

## Claude (Anthropic)

| Tier | Default model | Notes |
|---|---|---|
| Claude.ai Free | claude-sonnet-4-6 | Default as of Jun 2026 |
| Claude.ai Pro | claude-opus-4-8 (selectable) | Most capable; Sonnet 4.6 is default speed tier |
| API | claude-sonnet-4-6 | Recommended; Opus 4.8 for highest capability |

Model IDs for API: `claude-opus-4-8`, `claude-sonnet-4-6`, `claude-haiku-4-5-20251001`.

Sources: [Anthropic model docs](https://docs.anthropic.com/en/docs/models-overview). Last checked: 2026-06-01.

---

## Perplexity

| Tier | Default model | Notes |
|---|---|---|
| Free | Sonar | Built on Llama 3.3 70B, Cerebras inference. Free users get no model selector. |
| Pro | Sonar Pro (default) | Pro users can switch to GPT-5.5 Instant, Claude Sonnet 4.6, or Sonar Huge. |
| API | sonar, sonar-pro, sonar-reasoning-pro | See [docs.perplexity.ai/docs/sonar/models](https://docs.perplexity.ai/docs/sonar/models) |

Sources: [Perplexity hub](https://www.perplexity.ai/hub/blog/meet-new-sonar), [Perplexity API docs](https://docs.perplexity.ai/docs/sonar/models). Last checked: 2026-06-01.

---

## Google AI Mode / AI Overviews

| Context | Default model | Notes |
|---|---|---|
| AI Mode in Search (global) | Gemini 3.5 Flash | Default since 19 May 2026 (Google I/O 2026 announcement). |
| Gemini app | Gemini 3.5 Flash | Same announcement. |
| AI Overviews (standard queries) | Gemini 3.5 Flash | Drives both AIO and AI Mode. |

Sources: [Google DeepMind blog](https://deepmind.google/models/gemini/flash/), [TechCrunch](https://techcrunch.com/2026/05/19/with-gemini-3-5-flash-google-bets-its-next-ai-wave-on-agents-not-chatbots/), [Digital Trends](https://www.digitaltrends.com/computing/gemini-3-5-flash-is-googles-new-default-ai-model-and-its-built-to-act-not-just-answer/). Announced 19 May 2026.

---

## Bing Copilot (Microsoft)

| Tier | Default model | Notes |
|---|---|---|
| Free (web) | GPT-5 | GPT-5 became standard free tier default Oct 2025. |
| Paid / enterprise | GPT-5.5 (rolling out) | GPT-5.5 in active rollout as of May–Jun 2026. |
| Commercial customers | Anthropic Claude models available | Added Jan 2026 per Microsoft announcement. |

Note: Bing Copilot in the browser sidebar may not expose model version. For audit documentation, note "Copilot/web — model not surfaced in UI" if exact version not visible.

Sources: [Microsoft Copilot Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Copilot), [Copilot Weekly](https://www.bighatgroup.com/blog/copilot-weekly-2026-05-19/). Last checked: 2026-06-01.

---

## Maintenance

Refresh when any of the following occurs:
- A major engine announces a new default model
- A model previously listed is deprecated or retired
- A new engine is added to the mandatory audit scope

Tier-1 sources to check:
- [openai.com/news](https://openai.com/news)
- [anthropic.com/news](https://anthropic.com/news)
- [developers.google.com/search/blog](https://developers.google.com/search/blog)
- [deepmind.google/discover/blog](https://deepmind.google/discover/blog)
- [blogs.bing.com](https://blogs.bing.com)
- [perplexity.ai/changelog](https://perplexity.ai/changelog)

---

## Deck Builder API mappings

Tabela **machine-consumed** pelos executores (deck-builder Step 10 e tracker
`resolveModel`). Contrato de parse em `INTERFACES.md`: linhas
`| Deck engine | Vendor | production | cost_optimized |`; backticks são
removidos. Mudar um model id aqui propaga aos audits em ≤1h (cache do loader),
sem deployment. Motores que não existam no `ENGINES` dos executores são
ignorados silenciosamente.

| Deck engine | Vendor | production | cost_optimized |
|---|---|---|---|
| `chatgpt` | OpenAI | `gpt-5` | `gpt-4o` |
| `claude` | Anthropic | `claude-sonnet-4-6` | `claude-haiku-4-5-20251001` |
| `gemini` | Google | `gemini-3.5-flash` | `gemini-2.5-flash` |
| `grok` | xAI | `grok-4` | `grok-4.1-fast` |
| `deepseek` | DeepSeek | `deepseek-v4-pro` | `deepseek-v4-flash` |
| `mistral` | Mistral | `mistral-large-latest` | `mistral-small-latest` |
| `perplexity` | Perplexity | `sonar-pro` | `sonar` |

Notas operacionais:
- `deepseek`: a API rejeita o alias `deepseek-v4` — usar sempre `-pro`/`-flash`.
- `claude` cost_optimized (haiku) não expõe o tool `web_search` — os executores
  saltam o caminho augmented nesse tier (a metade knowledge corre).
- `perplexity` é search-grounded por definição (ver `search_modes.md`) —
  corre augmented-only.
