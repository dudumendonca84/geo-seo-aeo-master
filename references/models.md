# Default models por engine — referência para auditorias SINAL

Arquivo de referência para `geo-seo-aeo-master`. Regista o modelo **default** activo em cada engine de resposta IA relevante para auditorias de destaque.ai. Actualizar sempre que um engine mude o modelo default. Citar a fonte primária.

---

## Last refresh: 2026-06-15

---

## ChatGPT (OpenAI)

| Tier | Modelo default | Desde | Fonte |
|---|---|---|---|
| Free / Plus / Pro (web) | **GPT-5.5 Instant** | 5 Mai 2026 | [TechCrunch, 5 Mai 2026](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/) |
| Team / Enterprise | GPT-5.5 Instant (com opção GPT-5) | 5 Mai 2026 | [OpenAI Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) |

**Notas:**
- GPT-4o foi retirado como default em Fevereiro 2026 e substituído pela família GPT-5.
- ChatGPT activa web search em apenas ~34,5% das queries (Semrush clickstream, Fev 2026) — relevante para testes de citação.

---

## Perplexity

| Modo | Modelo default | Desde | Fonte |
|---|---|---|---|
| Padrão ("Auto") | **Best mode** (selecção automática consoante o tipo de query) | Contínuo | [Perplexity Release Notes](https://releasebot.io/updates/perplexity-ai) |
| Max — browser agent | Claude Opus 4.6 | Mai 2026 | [Agency Journal](https://theagencyjournal.com/perplexitys-latest-model-updates-what-changed-in-the-past-two-weeks/) |

**Notas:**
- O modo "Best" alterna entre modelos Perplexity-sonar, Gemini e Claude consoante a complexidade da query; o modelo exacto numa resposta específica não é declarado.
- Para fins de prompt-testing documentar "Perplexity Auto" como model ID quando o modelo específico não é visível na interface.

---

## Google AI Mode / AI Overviews

| Produto | Modelo default | Desde | Fonte |
|---|---|---|---|
| AI Mode (Google Search) | **Gemini 3.5 Flash** | 19 Mai 2026 (Google I/O 2026) | [Tech-Insider / Google I/O 2026](https://tech-insider.org/google-ai-mode-1-billion-users-io-2026/) |
| Google AI Overviews | Gemini 3.5 Flash | 19 Mai 2026 | [Google I/O 2026 announcements](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/) |

**Notas:**
- Gemini 3.5 Pro está em teste interno (disponibilidade pública esperada Jun 2026).
- AI Mode ultrapassou 1 mil milhão de utilizadores mensais (Google I/O 2026, dado não verificável de forma independente).
- O índice que alimenta AI Mode é o mesmo índice Googlebot — bloquear Googlebot remove a marca de AI Mode inteiramente.

---

## Claude (Anthropic)

| Produto | Modelo default | Desde | Fonte |
|---|---|---|---|
| Claude.ai (web / app) | **Claude Fable 5** | 9 Jun 2026 | [Releasebot — Anthropic](https://releasebot.io/updates/anthropic/claude) |
| API (claude-code-action) | claude-sonnet-4-6 | — | Session environment metadata |

**Notas:**
- Claude Fable 5 é o modelo mais capaz da Anthropic em produção geral (disponível via API, Claude Platform, Amazon Bedrock, Vertex AI, Microsoft Foundry a partir de 9 Jun 2026).
- Web search em Claude utiliza Brave Search como backend de recuperação.
- Para prompt-testing documentar o modelo exacto visível na interface (Fable 5 como default público).

---

## Bing Copilot (Microsoft)

| Tier | Modelo default | Desde | Fonte |
|---|---|---|---|
| Gratuito / Microsoft 365 Consumer | **GPT-5** (rollout GPT-5.5 em progresso) | Jan 2026 | [Datastudios.org — Copilot models](https://www.datastudios.org/post/microsoft-copilot-all-models-available-productivity-platform-tiers-and-integration-scope) |
| Enterprise | GPT-5 + Claude (disponível) | 7 Jan 2026 | mesma fonte |

**Notas:**
- Microsoft lançou suporte a Claude na Copilot para clientes enterprise em Janeiro 2026.
- MAI Image 2 foi lançado em Março 2026 para Copilot Image Creation (não relevante para text-search).
- A Microsoft adicionou um "kill switch" para desactivar respostas IA no Bing (Jun 2026) — relevante para medição de AI impression share.
- Primeiro-partido de dados de citação disponível via **Bing Webmaster Tools AI Performance** (preview público desde 9 Fev 2026).

---

## Gemini (Google DeepMind — aplicação standalone)

| Produto | Modelo default | Desde | Fonte |
|---|---|---|---|
| Gemini.google.com | **Gemini 3.5 Flash** | 19 Mai 2026 | [Google I/O 2026](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/) |
| Gemini Advanced | Gemini 3.5 Flash / Pro (rollout) | Mai-Jun 2026 | mesma fonte |

---

## Frequência de actualização

Actualizar este ficheiro quando:
1. Um engine anuncia mudança de modelo default (fonte primária obrigatória).
2. Um engine lança produto com retrieval que ainda não esteja listado.
3. Passarem mais de 30 dias desde "Last refresh" — verificar nos changelogs dos vendors.

Fontes Tier 1 para monitoring: [developers.google.com/search/blog](https://developers.google.com/search/blog), [openai.com/news](https://openai.com/news), [anthropic.com/news](https://anthropic.com/news), [blogs.bing.com](https://blogs.bing.com), [deepmind.google/discover/blog](https://deepmind.google/discover/blog), [perplexity.ai/changelog](https://perplexity.ai/changelog).
