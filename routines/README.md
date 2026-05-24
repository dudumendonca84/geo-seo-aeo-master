# Routines — prompts prontos a copiar

Routines do Claude Code Web não se podem criar programaticamente. Aqui estão os prompts canónicos das routines da destaque.ai, prontos a copiar e colar em Claude Code Web → Routines → Nova rotina.

## Routines actuais

| Ficheiro | Nome da Routine | Schedule | O que faz |
|---|---|---|---|
| [`geo-seo-news-daily.md`](./geo-seo-news-daily.md) | `geo-seo-news-daily` | Diário 08:00 Lisboa | Research das 24-48h, alimenta `news-feed.md`, absorve insights em references |
| [`destaque-ai-self-audit-weekly.md`](./destaque-ai-self-audit-weekly.md) | `destaque-ai-self-audit-weekly` | Segundas 09:00 Lisboa | Self-audit SINAL ao destaque.ai, actualiza baseline/backlog/history |

## Setup

Para cada routine:

1. Vai a Claude Code Web → Routines → **Nova rotina** (ou abre a existente para editar)
2. Define o nome (ver tabela acima)
3. Define o schedule
4. Define o repo: `dudumendonca84/geo-seo-aeo-master` (branch `main`)
5. Cola o **prompt completo** do ficheiro `.md` correspondente
6. Save

## Manutenção

Sempre que o repo restructure ou a metodologia evoluir (ver `methodology-changelog.md`), os prompts neste directório também são actualizados. Re-cola o prompt na routine quando isso acontecer.
