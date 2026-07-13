# destaque.ai audit history

## Formato

Cada execução produz uma entrada datada com:
- Score global delta vs. semana anterior
- Score por categoria delta
- Items movidos para DONE esta semana
- Items novos detectados
- Mudanças material observadas (regressões, melhorias)

## Entradas

### 2026-07-13 — Baseline (primeira execução)

Primeira corrida do Routine `destaque-ai-self-audit-weekly`. Sem semana anterior para comparar — todos os números abaixo são o ponto de partida, não um delta.

**Score global:** 68/100 (Bom, com lacunas de verificação — 2 de 12 categorias N/D nesta execução: Performance/CWV, Medição).

**Score por categoria (baseline):**

| Categoria | Score |
|---|---|
| SEO Técnico | 85/100 |
| Performance / CWV | N/D (PSI rate-limited 429; sem curl de saída) |
| SEO On-Page | 90/100 |
| Schema / dados estruturados | 92/100 |
| Optimização de imagens | 55/100 |
| GEO técnica | 88/100 (prontidão técnica); teste de citação real N/D salvo Claude knowledge (0/4) |
| Conteúdo & topical authority | 85/100 |
| Entidade / brand foundation | 78/100 |
| Autoridade & digital PR | 20/100 |
| Sinais sociais & community | 35/100 |
| E-E-A-T & on-site authority | 55/100 |
| Medição & feedback loop | N/D |

**Items DONE esta semana:** nenhum (primeira execução, backlog acabado de criar).

**Items novos detectados:** 11 (ver `improvements-backlog.md`) — 0 P0, 3 P1, 3 P2, 5 P3.

**Mudanças materiais observadas:** N/A (baseline).

**Limitações operacionais desta execução** (afectam a comparabilidade de futuras entradas até serem resolvidas):
- Sem acesso de rede de saída irrestrito neste ambiente — dados técnicos obtidos via `mcp__Vercel__web_fetch_vercel_url` (real, mas não idêntico a um `curl` PT nem a um crawler anónimo).
- Sem sessão/API a ChatGPT, Perplexity, Google AI Mode, Bing Copilot — teste multi-motor da metodologia SINAL não executado; único dado real é Claude Sonnet 5 em modo knowledge (0/4 menções destaque.ai, 0/4 concorrentes nomeados, sobre GD5/LR1/GP1/V4).
- PageSpeed Insights rate-limited (429) no momento do pedido.
- Sem acesso a GSC/GA4/BWT/Tracker próprio.

Ver `audit-baseline.md` § "Nota de metodologia desta execução" para o detalhe completo, e item P1 "GEO — Routine sem acesso ao teste multi-motor ao vivo" em `improvements-backlog.md` para a acção proposta.
