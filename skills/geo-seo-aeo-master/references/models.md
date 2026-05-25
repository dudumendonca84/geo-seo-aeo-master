# LLM model registry — May 2026

Canonical inventory of the inference models that matter for destaque.ai work, in two layers:

1. **Vendor tables** (human-friendly) — what each provider currently sells, with the **"Default in"** column noting which model is the default in each consumer product (ChatGPT free vs paid, claude.ai, Gemini app, etc.). The destaque.ai self-audit and the skill's audit workflow §7 use this column to decide *what to ask*.
2. **Deck Builder API mappings** (machine-readable) — a single table consumed by `destaque-ai-deck-builder` and `destaque-ai-tracker` via raw-URL fetch. Maps the Deck/Tracker's internal engine identifier to the API `model_id` for each tier.

Both layers must stay in sync. The daily agent (`daily-agent/daily-prompt.md`) has explicit instructions to update both when there is release material.

Last full refresh: **25 May 2026**. Auto-updated by the daily research agent when releases warrant. See `INTERFACES.md` for the consumption contract.

---

## Tables by vendor

Each row records the public `model_id` (the string an API expects), a one-line role, and the **Default in** column noting consumer-product defaults. Pricing is per 1M input/output tokens, USD, scraped from the vendor's own pricing page on the date noted.

### OpenAI

Source: [platform.openai.com/docs/models](https://platform.openai.com/docs/models), [openai.com/api/pricing](https://openai.com/api/pricing/) (25 May 2026).

| `model_id` | Role | Context | Input / Output (USD/1M) | Default in |
|---|---|---|---|---|
| `gpt-5` | Frontier reasoning + multimodal | 400k | 5.00 / 15.00 | **ChatGPT (Plus/Pro/Team), ChatGPT Search, OpenAI API default** |
| `gpt-5-mini` | Smaller frontier, low-latency | 400k | 0.50 / 1.50 | ChatGPT free tier (rate-limited) |
| `gpt-4o` | Previous-gen multimodal, still cost-effective | 128k | 2.50 / 10.00 | Cost-optimised production work |
| `gpt-4o-mini` | Budget tier | 128k | 0.15 / 0.60 | Embeddings sidecars, bulk classification |
| `o3` | Deep-reasoning (chain-of-thought) | 200k | 10.00 / 40.00 | Power-user "reasoning mode" in ChatGPT |

**Default in ChatGPT consumer experience:** `gpt-5` for paid; `gpt-5-mini` for free (with daily quota); o3 selectable for paid users wanting deep reasoning.

### Anthropic

Source: [docs.anthropic.com/en/docs/about-claude/models](https://docs.anthropic.com/en/docs/about-claude/models), [anthropic.com/pricing](https://www.anthropic.com/pricing#anthropic-api) (25 May 2026).

| `model_id` | Role | Context | Input / Output (USD/1M) | Default in |
|---|---|---|---|---|
| `claude-opus-4-7` | Frontier capability, long-task agentic | 1M | 15.00 / 75.00 | Claude Code "Opus" mode, agent SDKs |
| `claude-sonnet-4-6` | Default workhorse, strong reasoning + tool use | 1M | 3.00 / 15.00 | **claude.ai default, Anthropic API default** |
| `claude-haiku-4-5-20251001` | Smaller, fast, cost-optimised | 200k | 0.80 / 4.00 | Bulk classification, sentiment, lightweight extraction |

**Default in Claude consumer experience:** `claude-sonnet-4-6` is the default for claude.ai conversations. `claude-opus-4-7` is the default agentic model in Claude Code (CLI + IDE extensions).

### Google

Source: [ai.google.dev/gemini-api/docs/models](https://ai.google.dev/gemini-api/docs/models), [ai.google.dev/pricing](https://ai.google.dev/pricing) (25 May 2026).

| `model_id` | Role | Context | Input / Output (USD/1M) | Default in |
|---|---|---|---|---|
| `gemini-3.5-pro` | Frontier multimodal, deep reasoning | 2M | 5.00 / 15.00 | Gemini Advanced (paid app + AI Mode "Pro") |
| `gemini-3.5-flash` | Default workhorse, multimodal, fast | 1M | 0.30 / 1.20 | **AI Mode (since I/O 2026), Gemini app free tier, Google Search AI Overviews retrieval-augmented stage** |
| `gemini-2.5-flash` | Previous-gen, cost-optimised | 1M | 0.15 / 0.60 | Bulk classification, cost-optimised production |
| `gemini-2.5-flash-lite` | Budget tier | 32k | 0.05 / 0.20 | Embeddings sidecars |

**Note on AI Overviews.** Google does not expose the exact inference model behind AI Overviews. The Gemini 3.5 family powers retrieval-augmented generation in Search per the I/O 2026 keynote; the snippet-extraction stage may use a smaller distilled model not exposed in the public API.

### Microsoft (Azure)

Source: [learn.microsoft.com/azure/ai-services/openai/concepts/models](https://learn.microsoft.com/azure/ai-services/openai/concepts/models), [azure.microsoft.com/pricing/details/cognitive-services/openai-service](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/) (25 May 2026).

Microsoft Copilot consumer products are OpenAI models served via Azure. Pricing matches OpenAI within ~5% (region-dependent).

| `model_id` | Role | Default in |
|---|---|---|
| `gpt-5` (Azure deployment name varies) | Frontier | **Microsoft Copilot (Pro), Microsoft 365 Copilot, Bing Copilot** |
| `gpt-4o` | Cost-optimised | Copilot free tier, Edge Copilot sidebar |

**Note.** "Microsoft Copilot" the consumer product is not a separate model family; it's a UI over OpenAI models with Microsoft retrieval and grounding. For Tracker engine identification, treat `copilot` as a distinct engine because the *retrieval layer* and citation patterns differ materially from raw ChatGPT.

### Perplexity

Source: [docs.perplexity.ai/guides/model-cards](https://docs.perplexity.ai/guides/model-cards), [perplexity.ai/hub/pricing](https://www.perplexity.ai/hub/pricing) (25 May 2026).

| `model_id` | Role | Default in |
|---|---|---|
| `sonar-pro` | Default search-grounded answers, deep mode | **Perplexity Pro default, API default for "Pro Search"** |
| `sonar` | Cost-optimised, shorter answers | Perplexity free tier default |
| `sonar-reasoning` | Chain-of-thought search | Perplexity "Reasoning" toggle |

**Note.** Perplexity does not expose a frontier-foundation model in the API directly; its API is the search-RAG pipeline. The underlying foundation models are a rotating mix (per the model cards: "based on Llama / various"). For Tracker and Deck Builder, only the `sonar*` aliases are stable.

### Meta

Source: [llama.com](https://www.llama.com/), [together.ai/models](https://www.together.ai/models) (host pricing) (25 May 2026).

| `model_id` | Role | Default in |
|---|---|---|
| `llama-3.1-405b-instruct` | Frontier open-weights | **Meta AI app (consumer), WhatsApp / Instagram / Facebook AI integration** |
| `llama-3.1-70b-instruct` | Mid-tier open-weights | Cost-optimised self-hosted RAG |
| `llama-3.1-8b-instruct` | Edge / on-device | Mobile, embedded |

**Hosting.** Meta does not run a public API. Tracker/Deck Builder consume Llama via Together.ai, Groq, or Fireworks. Pricing varies by host; check `together.ai/models` for current rates.

### xAI

Source: [docs.x.ai/docs/models](https://docs.x.ai/docs/models), [x.ai/api](https://x.ai/api) (25 May 2026).

| `model_id` | Role | Context | Default in |
|---|---|---|---|
| `grok-4` | Frontier reasoning + real-time X retrieval | 1M | **Grok.com Pro, X premium, xAI API default** |
| `grok-4.1-fast` | Cost-optimised, lower-latency | 256k | Cost-optimised production work |
| `grok-3` | Previous-gen | 128k | Legacy compatibility only |

**Note on Grok retrieval.** Grok's distinctive trait is real-time X (Twitter) corpus access. For Tracker work, this means a Portuguese B2B query may pull from PT-language tweets — useful signal, also a hallucination risk during volatile news cycles.

### DeepSeek

Source: [api-docs.deepseek.com/quick_start/pricing](https://api-docs.deepseek.com/quick_start/pricing) (25 May 2026).

| `model_id` | Role | Context | Input / Output (USD/1M) | Default in |
|---|---|---|---|---|
| `deepseek-v4` | Frontier reasoning, MoE 671B | 128k | 0.27 / 1.10 | **DeepSeek chat app default, API default** |
| `deepseek-v4-flash` | Cost-optimised distilled | 128k | 0.07 / 0.30 | Bulk classification, cost-optimised work |
| `deepseek-r1` | Open-weights reasoning model | 64k | 0.55 / 2.19 | Self-hosted / vLLM deployments |

**Note.** DeepSeek's pricing is roughly an order of magnitude below US frontier providers. The trade-off is jurisdictional and editorial — the company is PRC-based; political-topic outputs filter accordingly. For destaque.ai's GEO work this rarely matters; flag if a prompt set covers regulated or politically sensitive ground.

### Mistral

Source: [docs.mistral.ai/getting-started/models/models_overview](https://docs.mistral.ai/getting-started/models/models_overview/), [mistral.ai/pricing](https://mistral.ai/pricing) (25 May 2026).

| `model_id` | Role | Context | Input / Output (USD/1M) | Default in |
|---|---|---|---|---|
| `mistral-large-latest` | Frontier reasoning, EU-hosted | 128k | 2.00 / 6.00 | **Le Chat default, Mistral API default** |
| `mistral-medium-latest` | Mid-tier | 128k | 0.40 / 2.00 | Cost-balanced production work |
| `mistral-small-latest` | Cost-optimised | 32k | 0.10 / 0.30 | Bulk classification |
| `pixtral-large-latest` | Multimodal frontier | 128k | 2.00 / 6.00 | Image+text workloads |

**Note.** Mistral is the only frontier provider with EU-only inference as a contractual option (Le Chat Enterprise). Relevant for destaque.ai clients with strict GDPR posture.

---

## Deprecated / retired models — do not use

Anything below has been retired or deprecated by the vendor. Code that still references these IDs will fail or silently fall back. Cross-check before use.

| `model_id` | Vendor | Status | Successor |
|---|---|---|---|
| `gpt-4-turbo`, `gpt-4-32k`, `gpt-4` | OpenAI | Retired Q1 2026 | `gpt-4o` then `gpt-5` |
| `gpt-3.5-turbo*` | OpenAI | Retired Q2 2025 | `gpt-4o-mini` |
| `claude-3-opus`, `claude-3-sonnet`, `claude-3-haiku` | Anthropic | Deprecated, sunset announced | Claude 4.x family |
| `claude-2.x`, `claude-instant-*` | Anthropic | Retired | — |
| `gemini-2.0-*`, `gemini-1.5-*` | Google | Deprecated | Gemini 2.5 / 3.5 family |
| `text-bison*`, `chat-bison*` | Google (PaLM legacy) | Retired | Gemini family |
| `grok-4-fast`, `grok-2*`, `grok-1*` | xAI | Retired | `grok-4`, `grok-4.1-fast` |
| `deepseek-v3*`, `deepseek-chat` | DeepSeek | Superseded | `deepseek-v4`, `deepseek-v4-flash` |
| `mistral-tiny`, `open-mistral-7b`, `open-mixtral-*` | Mistral | Legacy / superseded | `mistral-small-latest`, `mistral-medium-latest` |
| `llama-2-*`, `llama-3-*` (non-3.1) | Meta | Superseded | Llama 3.1 family |
| `pplx-*-online`, `llama-3.1-sonar-*` | Perplexity | Folded into `sonar*` aliases | `sonar`, `sonar-pro`, `sonar-reasoning` |

If a session encounters one of these in an existing codebase, flag and propose replacement from the vendor tables above.

---

## Deck Builder API mappings

Single source of truth for `destaque-ai-deck-builder` and `destaque-ai-tracker`. Parsed by `src/lib/skill/models.ts` (Deck) and the Tracker's equivalent. Cache TTL 1h, fallback to hardcoded.

The H2 header above is **the parse anchor** — exact string `## Deck Builder API mappings`, no numbering, no decoration. Do not rename.

The `production` column reflects the model used for paid deliverables; `cost_optimized` reflects what is used for free-tier / lead-gen / bulk work.

| Deck engine | Vendor                  | production                  | cost_optimized              |
|-------------|-------------------------|-----------------------------|-----------------------------|
| `chatgpt`   | OpenAI                  | `gpt-5`                     | `gpt-4o`                    |
| `claude`    | Anthropic               | `claude-sonnet-4-6`         | `claude-haiku-4-5-20251001` |
| `gemini`    | Google                  | `gemini-3.5-flash`          | `gemini-2.5-flash`          |
| `perplexity`| Perplexity              | `sonar-pro`                 | `sonar`                     |
| `copilot`   | Microsoft (Azure)       | `gpt-5`                     | `gpt-4o`                    |
| `mistral`   | Mistral                 | `mistral-large-latest`      | `mistral-small-latest`      |
| `grok`      | xAI                     | `grok-4`                    | `grok-4.1-fast`             |
| `deepseek`  | DeepSeek                | `deepseek-v4`               | `deepseek-v4-flash`         |
| `meta`      | Meta                    | `llama-3.1-405b-instruct`   | `llama-3.1-70b-instruct`    |

### Tier assignment (read by consumers)

- `free` audit → `cost_optimized` column.
- `diagnostic` audit → `production` column.
- `premium` audit (future) → `production` column.

### Engine set ownership

The list of engines a consumer actually runs lives in the consumer's TypeScript (`src/lib/llm/models.ts` in the Deck; equivalent in the Tracker). Engines that appear here but are not in the consumer's `ENGINES` set are **silently ignored**. Engines in the consumer's set but absent here fall back to the consumer's hardcoded constants. This split is intentional: the skill controls *configuration*; the consumer controls *capability*.

### Why `gemini-3.5-flash` and not `gemini-3.5-pro` in production

The default consumer-product surface for Gemini (AI Mode, the free app, AI Overviews retrieval) is the Flash tier. Tracker work is calibrated to *what the user sees*, not what costs most. Using Pro would over-state quality relative to a real Portuguese user's experience. Same logic for `gemini-2.5-flash` as cost-optimised — Flash family is the consumer surface.

### Why `claude-haiku-4-5-20251001` is pinned

Anthropic recommends pinning Haiku to a dated alias to avoid silent migrations. The Sonnet/Opus aliases are stable; Haiku has historically moved faster.

---

## Maintenance

- The daily research agent updates both layers when there is release material. See `skills/geo-seo-aeo-master/daily-agent/daily-prompt.md` § "Auto-update de referências críticas".
- A human reviewer must verify the daily agent's proposed updates before merge if the change is structural (new vendor, retired vendor, new tier column). Identifier renames within an existing vendor are auto-merged.
- Pricing snapshots should be refreshed quarterly. Treat the numbers above as **directional for cost modelling**, not contract pricing — vendors change tiers, add region surcharges, and adjust mid-quarter.

---

## Out of scope

- **Benchmarks / leaderboards.** Artificial Analysis, LMArena, Vellum publish moving rankings. Consult them when choosing between two models of similar tier; do not cache their numbers here.
- **Latency and throughput numbers.** Vary by region, deployment, hour of day. Measure per-deployment if it matters.
- **Fine-tuning availability.** Most vendors offer it for older tiers only; not relevant for destaque.ai's read-only audit work.
- **Embedding models.** Separate concern (`text-embedding-3-large`, `voyage-3`, `cohere-embed-v3`). Out of scope for inference-tier registry.
