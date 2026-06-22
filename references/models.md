# Default models por engine de pesquisa IA
Last refresh: 2026-06-22

Fontes verificadas:
- Anthropic: platform.claude.com/docs/en/about-claude/models/overview (acedido 2026-06-22, Tier 1)
- OpenAI: WebSearch com resultados de TechCrunch 2026-05-05 e OpenAI changelog (fonte Tier 2 — primary source bloqueada por egress)
- Google: Anúncio Google I/O 2026 (2026-05-20), confirmado via WebSearch Tier 2
- Bing Copilot: WebSearch Tier 2 (primary source microsoft.com não acedida)
- Perplexity: WebSearch Tier 2 (perplexity.ai/changelog bloqueado por egress nesta sessão)

Confiança Tier 1 = fonte primária acedida directamente. Tier 2 = WebSearch com resultado de media/changelog. Tier 3 = inferência.

---

## Tabela de defaults (utilizador standard/gratuito), Junho 2026

| Engine | Modelo default (standard/free) | Modelo tier pago / avançado | Última alteração de default | Confiança |
|---|---|---|---|---|
| ChatGPT (OpenAI) | GPT-5.5 Instant | GPT-5.4 Thinking; GPT-5.5 Pro | 2026-05-05 (substituiu GPT-5.3 Instant) | Tier 2 |
| Claude (Anthropic, web) | claude-fable-5 | claude-mythos-5 (invite-only, Project Glasswing) | 2026-06-09 (Fable 5 GA) | Tier 1 |
| Google AI Mode | Gemini 3.5 Flash | Gemini 3.5 Flash (mesmo modelo; Pro tem rate limites mais altos) | 2026-05-20 (I/O 2026) | Tier 2 |
| Bing Copilot | GPT-5 (standard); GPT-5.5 em rollout | GPT-5.5 (rollout parcial) | 2025-10-16 (GPT-5 activado para todos os utilizadores) | Tier 2 |
| Perplexity | Sonar Pro (modelo proprietário) | Acesso a claude-fable-5, GPT-5.5, Gemini 3.5 Flash (Pro subscribers) | Ongoing (Sonar iterativo) | Tier 2 |

> **Nota de auditoria**: Para prompt-tests, usar sempre o modelo default da tier gratuita/standard para simular o utilizador típico não subscrito. Para testes Pro, executar separadamente e documentar o modelo seleccionado explicitamente.

---

## Modelos Claude (fonte Tier 1 — Anthropic docs 2026-06-22)

| Model ID | API alias | Context window | Max output | Posição na linha |
|---|---|---|---|---|
| claude-fable-5 | claude-fable-5 | 1M tokens | 128k | Mais capaz; GA 2026-06-09 |
| claude-mythos-5 | claude-mythos-5 | 1M tokens | 128k | Invite-only (Project Glasswing) |
| claude-opus-4-8 | claude-opus-4-8 | 1M tokens | 128k | Default API para trabalho complexo |
| claude-sonnet-4-6 | claude-sonnet-4-6 | 1M tokens | 64k | Equilíbrio velocidade/inteligência |
| claude-haiku-4-5 | claude-haiku-4-5-20251001 | 200k tokens | 64k | Mais rápido |

Legacy (ainda disponíveis, mas migração recomendada):
- claude-opus-4-7, claude-opus-4-6, claude-sonnet-4-5, claude-opus-4-5
- claude-opus-4-1: **deprecated**, retiro previsto 2026-08-05

---

## Modelos descontinuados (referência)

| Modelo | Engine | Data de descontinuação | Substituído por |
|---|---|---|---|
| GPT-4o | ChatGPT | 2026-02-13 | GPT-5.x family |
| GPT-5.3 Instant | ChatGPT | 2026-05-05 | GPT-5.5 Instant |
| Gemini 2.0 / 1.5 | Google | 2026-05 | Gemini 3.5 Flash |

---

## Próxima revisão
Rever quando qualquer engine anunciar mudança de default. Fontes primárias a consultar:
- OpenAI: help.openai.com/en/articles/6825453-chatgpt-release-notes
- Anthropic: platform.claude.com/docs/en/about-claude/models/overview
- Google: developers.google.com/search/blog + blog.google
- Bing: blogs.bing.com/webmaster
- Perplexity: perplexity.ai/changelog
