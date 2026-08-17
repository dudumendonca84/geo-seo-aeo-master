# destaque.ai audit history

## Formato

Cada execução produz uma entrada datada com:
- Score global delta vs. semana anterior
- Score por categoria delta
- Items movidos para DONE esta semana
- Items novos detectados
- Mudanças material observadas (regressões, melhorias)

## Nota sobre este ficheiro

Escrito de raiz em 2026-08-17 directamente no repositório GitHub `dudumendonca84/geo-seo-aeo-master`, que até esta execução nunca tinha recebido este conteúdo (ver `audit-baseline.md` § Nota de metodologia e o item P0 em `improvements-backlog.md`). As entradas de 2026-07-13 a 2026-08-03 abaixo foram reconstruídas a partir de uma cópia local do skill sincronizada neste ambiente, que tinha o registo contínuo; preservadas tal como encontradas, sem reescrita de conteúdo. Não existe entrada para 2026-08-10 em nenhuma das fontes consultadas por esta sessão — gap de calendário não explicado, ver `audit-baseline.md`.

## Entradas

### 2026-08-17 — Quinta execução conhecida

**Score global:** 72/100 (Bom, com lacunas de verificação que persistem — 1 de 12 categorias N/D: Performance/CWV). **Δ vs. 03 ago: +3, com reserva de comparabilidade** — gap de calendário não explicado entre execuções, e o teste multi-motor desta semana usa amostra e ferramenta diferentes de 03 ago (ver `audit-baseline.md`).

**Score por categoria (delta vs. 03 ago):**

| Categoria | Score | Δ |
|---|---|---|
| SEO Técnico | 87/100 | 0 |
| Performance / CWV | N/D | — |
| SEO On-Page | 93/100 | 0 |
| Schema / dados estruturados | 96/100 | 0 |
| Optimização de imagens | 72/100 | 0 |
| GEO técnica | 92/100 | +1 |
| Conteúdo & topical authority | 90/100 | +5 |
| Entidade / brand foundation | 77/100 | 0 |
| Autoridade & digital PR | 20/100 | 0 |
| Sinais sociais & community | 35/100 | 0 |
| E-E-A-T & on-site authority | 72/100 | +2 |
| Medição & feedback loop | 58/100 | +20 |

**Achado de processo dominante:** confirmação directa, pela primeira vez, de que o repositório GitHub acessível a esta rotina nunca recebeu, em todo o seu histórico `git`, o conteúdo de auditorias anteriores — nem `destaque-ai-self/`, nem `references/models.md`, nem `references/prompts.md`, nem `methodology-changelog.md`. Ver item P0 em `improvements-backlog.md` e a nota de metodologia completa em `audit-baseline.md`.

**Items movidos para DONE esta semana:** 2 — "CONTENT — Cadência de publicação parada desde 17 jul" (dois posts novos confirmados a 10 ago, mais duas páginas novas `/auditoria` e `/ai-usage`; reaberto como item P3 de monitorização de sustentação); "MEASUREMENT — BING_OAUTH_CLIENT_ID em falta" (não observado nos erros dos últimos 7 dias, resolvido sem commit identificado).

**Items novos detectados:** 4 — 1 P0 (PROCESS — repositório GitHub sem histórico de auditorias, achado confirmado), 2 P2 (SCHEMA — confirmar conteúdo real dos blocos `Person`; GEO — investigar colisão de acrónimo GEO/geotecnia e AEO/aduaneiro), reclassificação de 1 item de P0 para P1 (MEASUREMENT — erro de campo DataForSEO, sintoma de crise não reproduzido mas causa-raiz activa).

**Mudanças materiais observadas:**
- **Achado de processo mais severo desta série de auditorias:** o único destino de escrita real desta sessão nunca conteve o trabalho que semanas de auditorias anteriores relatam ter enviado para `main`. Não é possível, a partir desta sessão, determinar a causa exacta.
- **Melhoria genuína, com reserva:** o hiato editorial escalado para P2 há duas semanas inverteu-se — dois posts novos e duas páginas novas (`/auditoria`, com prioridade de sitemap igual à homepage; `/ai-usage`), sem que esta auditoria os tivesse pedido de novo esta semana especificamente. Sustentação por confirmar nas próximas execuções.
- **Melhoria em Medição, com reserva:** o incidente mais grave de 03 ago (quota SerpApi esgotada, 3 motores do Tracker degradados) não reaparece nos erros dos últimos 7 dias — mas a causa-raiz (erro de campo DataForSEO) continua activa, com a última ocorrência na própria manhã desta auditoria.
- **Teste multi-motor — amostra parcial, ferramenta diferente, achado qualitativo novo:** 0/8 prompts mandatórios testados citaram destaque.ai na resposta sintetizada; 2/8 tinham conteúdo de destaque.ai no índice bruto de resultados sem citação na síntese — uma variante mais precisa do padrão "citado, não recomendado" de 03 ago. Os dois prompts de recomendação local (`LR1`/`LR2`) mostraram um padrão novo: possível colisão de acrónimo (GEO→geotecnia, AEO→aduaneiro), não confirmada nos motores mandatórios reais. Lista de concorrentes candidatos a classificação formal quase duplicou (7 nomes novos: Marketing Gabriel, LusoAI, Tráfego Digital, BI4ALL, SEO Labs, Marco Gouveia, Taptwice Media).
- **`references/models.md`:** um default de modelo absorvido com reserva — ChatGPT Free/Go terá mudado de GPT-5.5 Instant para GPT-5.6 Luna por volta de 6 ago 2026 (três fontes secundárias convergentes, sem confirmação de fonte primária — `openai.com`/`help.openai.com` devolveram `EGRESS_BLOCKED`).

**Limitações operacionais desta execução:**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited.
- ChatGPT, Perplexity, Google AI Mode, Claude.ai, Bing Copilot continuam sem acesso directo — proxy parcial via `WebSearch` usado esta semana, explicitamente não equivalente.
- Amostragem técnica directa mais estreita do que em execuções com amostra completa: `/`, `robots.txt`, `sitemap.xml`, `llms.txt`, `/consultoria-geo-portugal`. `/tracker` e os restantes templates não re-amostrados.
- Gap de calendário de 14 dias desde a última entrada confirmada (03 ago), sem entrada para 10 ago em nenhuma fonte consultada.

Ver `audit-baseline.md` para o detalhe completo, e `improvements-backlog.md` para os itens novos e actualizados.

### 2026-08-03 — Quarta execução

**Score global:** 69/100 (Bom, com lacunas de verificação que persistem — 1 de 12 categorias N/D: Performance/CWV). **Δ vs. 27 jul: 0.**

**Score por categoria (delta vs. 27 jul):**

| Categoria | Score | Δ |
|---|---|---|
| SEO Técnico | 87/100 | +1 |
| Performance / CWV | N/D | — |
| SEO On-Page | 93/100 | 0 |
| Schema / dados estruturados | 96/100 | +1 |
| Optimização de imagens | 72/100 | +7 |
| GEO técnica | 91/100 | +4 |
| Conteúdo & topical authority | 85/100 | −3 |
| Entidade / brand foundation | 77/100 | 0 |
| Autoridade & digital PR | 20/100 | 0 |
| Sinais sociais & community | 35/100 | 0 |
| E-E-A-T & on-site authority | 70/100 | 0 |
| Medição & feedback loop | 38/100 | −7 |

**Nota sobre o Δ global de 0:** não reflecte estagnação. Ganhos reais em Schema (+1), Optimização de imagens (+7) e GEO técnica (+4) — três itens de backlog fechados por 6 PRs mergeados entre 27-31 jul (#93-#98) — são compensados por uma queda em Medição (nova degradação activa de 3 motores no Visibility Tracker por quota SerpApi esgotada) e em Conteúdo (hiato editorial de ~19 dias que ultrapassou o limiar de escalada definido na semana passada).

**Items movidos para DONE esta semana:** 4 — "GEO — llms.txt não referencia /en/"; "GEO — hreflang em falta na página pilar + x-default em falta no estudo" (parcialmente por decisão explícita, não só por código); "GEO — Multimodal: primeira ruptura sem ImageObject" (`ImageObject` confirmado nas 14 imagens do `/tracker`); "MEASUREMENT — bug `/competitors/[id]`" (não observado nos erros dos últimos 7 dias, resolvido sem commit identificado).

**Items novos detectados:** 4 — 1 P0 (MEASUREMENT — quota SerpApi esgotada + erro de campo DataForSEO, 3 motores do Tracker degradados), 1 P1 (PROCESS — estrutura de repositório duplicada, `news-feed.md` fragmentado entre dois caminhos), 1 P2 (MEASUREMENT — `BING_OAUTH_CLIENT_ID` em falta), 1 P3 (GEO — re-testar scan de preparação para agentes).

**Mudanças materiais observadas:**
- Confirmação de que o repositório tem duas árvores paralelas e não sincronizadas do skill, com `daily-agent/news-feed.md` fragmentado entre ambas.
- Degradação mais severa em Medição: o bug isolado da semana passada (`/competitors/[id]`) foi resolvido, mas substituído por uma falha activa mais ampla — quota SerpApi esgotada, mais `BING_OAUTH_CLIENT_ID` em falta, mais o rate-limit da Mistral (6+ semanas sem resolução).
- Progresso técnico genuíno: 6 PRs mergeados fecharam 3 itens do backlog e introduziram uma superfície nova de "preparação para agentes" (Content-Signal, índice de Agent Skills, negociação de conteúdo em markdown).
- Teste multi-motor: destaque.ai citada em 5/21 prompts mandatórios (a taxa mais alta das execuções até então), mas nunca como opção recomendada. `LR1` testado pela primeira vez em modo augmented — destaque.ai ausente, 7 concorrentes citados.
- Descoberta lateral: quarto projecto Vercel da conta, `destaque-ai-commercial`, ferramenta interna de prospecção.

**Limitações operacionais desta execução:**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited — 4ª semana consecutiva.
- ChatGPT, Perplexity, Google AI Mode, Bing Copilot continuam sem acesso — 4ª semana sem progresso.
- `references/models.md` — tentativa de refresh mandatório feita, sem mudança confirmada com fonte primária.
- Amostragem técnica de páginas mais estreita do que em execuções anteriores (6 URLs directamente amostrados).

### 2026-07-27 — Terceira execução

**Score global:** 69/100 (Bom, com lacunas de verificação que persistem — 1 de 12 categorias N/D: Performance/CWV). **Δ vs. 20 jul: −2.**

**Score por categoria (delta vs. 20 jul):**

| Categoria | Score | Δ |
|---|---|---|
| SEO Técnico | 86/100 | −1 |
| Performance / CWV | N/D | — |
| SEO On-Page | 93/100 | +1 |
| Schema / dados estruturados | 95/100 | +1 |
| Optimização de imagens | 65/100 | +10 |
| GEO técnica | 87/100 | 0 |
| Conteúdo & topical authority | 88/100 | −3 |
| Entidade / brand foundation | 77/100 | 0 |
| Autoridade & digital PR | 20/100 | 0 |
| Sinais sociais & community | 35/100 | 0 |
| E-E-A-T & on-site authority | 70/100 | +2 |
| Medição & feedback loop | 45/100 | N/D→45 |

**Nota sobre o Δ global negativo:** não reflecte regressão do site — a categoria Medição passou de N/D para uma pontuação real de 45/100, puxando a média para baixo por efeito aritmético, não por piora.

**Items movidos para DONE esta semana:** 1 — "SCHEMA — /perguntas não amostrado" (confirmado FAQPage+Question+Answer+BreadcrumbList+WebPage speakable, 26 perguntas declaradas).

**Items novos detectados:** 5 — 1 P1 (MEASUREMENT — bug `/competitors/[id]` no Tracker), 3 P2 (MEASUREMENT — rate-limit Mistral recorrente; GEO — lacunas de `hreflang`; STRATEGIC — ausência de destaque.ai em roundups de concorrentes), 1 P3 (CONTENT — hiato de publicação desde 17 jul, vigilância).

**Mudanças materiais observadas:**
- Confirmação de que `destaque-ai-tracker` está em produção desde 5 jun 2026, com cliente real e cadência de desenvolvimento activa, mas também um bug de produção e um rate-limit de fornecedor recorrente.
- Primeira ruptura do padrão "zero imagens sitewide" — `/tracker` ganhou 12 imagens com `alt` descritivo.
- Zero deploys de produção ao site principal entre 17 e 27 jul (~10 dias) — vigiar, não ainda urgente.
- Teste multi-motor: taxa de presença estável em modo augmented (4/21 mandatórios citados com URL), ausente dos dois prompts de descoberta de maior intenção comercial.

**Limitações operacionais desta execução:**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited — 3ª semana consecutiva.
- ChatGPT, Perplexity, Google AI Mode, Bing Copilot continuam sem acesso — 3ª semana sem progresso.
- Vercel (`list_projects`, `list_deployments`, `get_runtime_errors`) usado pela primeira vez para além do site principal — revelou `destaque-ai-tracker`.

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

**Items movidos para DONE esta semana:** 3 — "CONTENT — Cadência de publicação parada" (6 posts + 2 estudos), "E-E-A-T — Sem case studies públicos" (3 casos publicados), "SCHEMA — Templates não amostrados" (`/servico`, `/sobre`, `/glossario` confirmados).

**Items novos detectados:** 5 — 0 P0, 2 P1 (STRATEGIC peer set desactualizado; CONTENT/GEO multimodal persistente), 1 P2, 3 P3.

**Mudanças materiais observadas:**
- Cadência editorial retomada com força; 3 casos de estudo publicados; início de conteúdo bilingue; 7 novos tipos de schema confirmados.
- Zero imagens em todo o site, confirmado de novo mesmo com conteúdo novo publicado à sua volta.
- Teste multi-motor em modo augmented (novo esta semana): destaque.ai citada em 3/21 prompts mandatórios, ausente em 17/21.

**Limitações operacionais desta execução:**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited — 2ª semana.
- ChatGPT, Perplexity, Google AI Mode, Bing Copilot continuam sem acesso — 2ª semana sem progresso.
- Supabase `destaque-ai-tracker` continua inacessível.

### 2026-07-13 — Baseline (primeira execução)

Primeira corrida do Routine `destaque-ai-self-audit-weekly`. Sem semana anterior para comparar.

**Score global:** 68/100 (Bom, com lacunas de verificação — 2 de 12 categorias N/D: Performance/CWV, Medição).

**Score por categoria (baseline):**

| Categoria | Score |
|---|---|
| SEO Técnico | 85/100 |
| Performance / CWV | N/D |
| SEO On-Page | 90/100 |
| Schema / dados estruturados | 92/100 |
| Optimização de imagens | 55/100 |
| GEO técnica | 88/100 |
| Conteúdo & topical authority | 85/100 |
| Entidade / brand foundation | 78/100 |
| Autoridade & digital PR | 20/100 |
| Sinais sociais & community | 35/100 |
| E-E-A-T & on-site authority | 55/100 |
| Medição & feedback loop | N/D |

**Items DONE esta semana:** nenhum (primeira execução).

**Items novos detectados:** 11 — 0 P0, 3 P1, 3 P2, 5 P3.

**Limitações operacionais desta execução:**
- Sem acesso de rede de saída irrestrito — dados técnicos obtidos via `mcp__Vercel__web_fetch_vercel_url`.
- Sem sessão/API a ChatGPT, Perplexity, Google AI Mode, Bing Copilot — único dado real Claude Sonnet 5 em modo knowledge (0/4 menções).
- PageSpeed Insights rate-limited (429).
- Sem acesso a GSC/GA4/BWT/Tracker próprio.
