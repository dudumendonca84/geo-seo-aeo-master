# Search modes — augmentação por motor

Fonte canónica de **capability** para o split SINAL knowledge vs augmented.
Os executores (deck-builder e tracker) consomem apenas a coluna
**augmented mode**; a coluna "API surface" é informativa para humanos — a
mecânica de chamada (endpoint, tool name, payload, parser) vive em TS nos
executores (`web-search.ts` + adapters). Regra documentada em `INTERFACES.md`
(lição do incidente Grok `search_parameters` HTTP 410, 2026-01-12).

Valores aceites em "augmented mode": `supported` (corre knowledge +
augmented), `not supported` (só knowledge), `always-on` (search-grounded por
definição — só augmented; knowledge não é medível).

## Per-engine augmentation feature

| Deck engine | API surface (informativo) | augmented mode |
|---|---|---|
| `chatgpt` | Responses API, tool `web_search` | supported |
| `claude` | Messages API, server tool `web_search_20260209` | supported |
| `gemini` | tool `googleSearch` (grounding, @google/genai) | supported |
| `grok` | Responses API, tool `web_search` | supported |
| `deepseek` | sem pesquisa web na API (app-only) | not supported |
| `mistral` | pesquisa só via Agents/Conversations API | not supported |
| `perplexity` | sonar pesquisa sempre a web viva | always-on |

Manutenção: quando um vendor adicionar/remover search nativo na API, actualizar
a linha respectiva (daily agent monitoriza vendor docs; ver INTERFACES.md).
