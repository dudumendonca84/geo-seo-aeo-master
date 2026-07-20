# destaque.ai audit history

## Formato

Cada execução produz uma entrada datada com:
- Score global delta vs. semana anterior
- Score por categoria delta
- Items movidos para DONE esta semana
- Items novos detectados
- Mudanças material observadas (regressões, melhorias)

## Entradas

### 2026-07-20 — Segunda execução

**Score global:** 71/100 (Bom, com lacunas de verificação que persistem — 2 de 12 categorias N/D: Performance/CWV, Medição). **Δ vs. 13 jul: +3.**

**Score por categoria (delta vs. baseline 13 jul):**

| Categoria | Score | Δ |
|---|---|---|
| SEO Técnico | 87/100 | +2 |
| Performance / CWV | N/D | — |
| SEO On-Page | 92/100 | +2 |
| Schema / dados estruturados | 94/100 | +2 |
| Optimização de imagens | 55/100 | 0 |
| GEO técnica | 87/100 | −1 |
| Conteúdo & topical authority | 91/100 | +6 |
| Entidade / brand foundation | 77/100 | −1 |
| Autoridade & digital PR | 20/100 | 0 |
| Sinais sociais & community | 35/100 | 0 |
| E-E-A-T & on-site authority | 68/100 | +13 |
| Medição & feedback loop | N/D | — |

**Items movidos para DONE esta semana:** 3 — "GEO — Routine sem acesso ao teste multi-motor" **não** (continua TODO); os 3 efectivamente resolvidos foram: "CONTENT — Cadência de publicação parada" (cadência retomada, 6 posts + 2 estudos), "E-E-A-T — Sem case studies públicos" (3 casos publicados em `/casos`, com ressalva de schema — ver novo item de follow-up), "SCHEMA — Templates não amostrados" (`/servico`, `/sobre`, `/glossario` todos confirmados com schema rico).

**Items novos detectados:** 5 — 0 P0, 2 P1 (STRATEGIC peer set desactualizado; CONTENT/GEO multimodal persistente), 1 P2 (SCHEMA/GEO — ver nota), 3 P3 (SCHEMA casos sem resultado verificável, GEO llms.txt sem /en/, SCHEMA /perguntas não amostrado). Item STRATEGIC "Schema declara alcance ES/EN/pt-BR" passou de TODO a IN PROGRESS (EN arrancou parcialmente).

**Mudanças materiais observadas:**
- **Melhoria:** cadência editorial retomada com força (6 posts + 2 estudos originais em ~10 dias); 3 casos de estudo publicados (nova secção `/casos`); início de conteúdo bilingue (`/en/about`, `/en/studies` + 3 estudos traduzidos, com `hreflang` correcto); 7 novos tipos de schema confirmados (`DefinedTermSet`, `CollectionPage`, `ItemList`, `ItemPage`, `Article`, `AboutPage`, `HowTo`); meta description da homepage reescrita para formato mais próximo do padrão SERP (331→167 caracteres); `sitemap.xml` cresceu de 24 para 40 URLs.
- **Estagnação notável:** zero imagens em todo o site, confirmado de novo mesmo em 3 casos de estudo novos e 1 estudo com 2.205 respostas — a única categoria do scorecard que não se moveu (0 pontos de delta) apesar de conteúdo novo relevante ter sido publicado à sua volta.
- **Regressão marginal (−1 pt cada, dentro da margem de leitura, não um sinal de alarme):** Entidade/brand foundation e GEO técnica — sem progresso visível em `sameAs`/Wikidata e com o gap novo de `llms.txt` não referenciar `/en/`.
- **Achado novo mais importante:** teste multi-motor em modo augmented (novo esta semana) mostrou destaque.ai citada em 3/21 prompts mandatórios (todos de nicho específico) e ausente em 17/21 (sobretudo descoberta genérica), onde concorrentes portugueses não classificados formalmente (Studio.351, AISO Hub, Infinidata, LPM) e o par já conhecido (3HASH, activo em conteúdo GEO/AEO próprio) dominam. Substitui a lacuna "não testável" da semana passada por um achado accionável real.

**Limitações operacionais desta execução (evolução face à semana passada):**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited — mesma falha estrutural, 2ª semana.
- ChatGPT, Perplexity, Google AI Mode, Bing Copilot continuam sem acesso — 2ª semana sem progresso neste item específico.
- Claude: teste muito mais robusto esta semana (31 prompts × modo knowledge, 21 × modo augmented, vs. 4 prompts × 1 modo há uma semana), com desvio de metodologia assumido (lotes de 7 prompts por sub-agente em vez de 1:1) — ver `audit-baseline.md` nota de metodologia.
- `WebSearch` devolveu, pela primeira vez, resultados indexados reais para o próprio domínio e para o panorama competitivo — melhoria notável face à semana passada, causa não confirmada (pode ser variância do motor, não indexação genuinamente nova).
- Supabase `destaque-ai-tracker` continua inacessível — confirmado de novo, sem progresso.

Ver `audit-baseline.md` para o detalhe completo, e `improvements-backlog.md` para os itens novos e actualizados.

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
