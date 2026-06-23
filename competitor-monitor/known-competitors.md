---
title: Concorrentes GEO PT — lista conhecida
maintained_by: competitor-monitor (Dimensão 0)
updated_via: rotina semanal `competitor-monitor-weekly`
---

# Concorrentes GEO PT — lista conhecida

Entidades reais com serviços de **GEO / AEO / AI-visibility** com foco ou operação em **Portugal**. Esta lista é o ponto de partida da rotina semanal de monitorização (`competitor-monitor/monitor-prompt.md`); a Dimensão 0 adiciona linhas novas quando descobre candidatos que cumprem critério.

**Não inclui:**
- Ferramentas internacionais genéricas (Profound, Peec AI, Otterly, etc.) — essas vivem em `references/tools.md`
- Agências de SEO puro sem menção a GEO/AEO
- Homónimos (empresas com nome igual mas noutro sector)
- Entidades que mencionaram o tema 1 vez mas não oferecem o serviço

## Lista

| Nome | URL | Desde (YYYY-MM-DD) | Porquê entra (1 linha) |
|---|---|---|---|
| 3HASH | https://3hash.com | 2026-06-23 | Pioneer em PT de "LLMs próprios / infra NVIDIA" para SEO/GEO; faz audit format que serviu de inspiração ao 3HASH audit pattern. |
| Studio.351 | https://studio351.pt | 2026-06-23 | Agência SEO + GEO em Lisboa; comunica explicitamente "generative engine optimization" como serviço. |
| Marketing Gabriel | https://marketinggabriel.com | 2026-06-23 | Dos primeiros operadores PT a posicionar-se em GEO/AEO; conteúdo público recorrente sobre o tema. |
| AP\|Portugal | https://www.apportugal.com | 2026-06-23 | Tradução/localização com vertical de AI search visibility para conteúdo multilingue. |
| LPM Comunicação | https://lpmcom.pt | 2026-06-23 | Agência de comunicação com componente declarada de AI search optimization. |
| Up We Go | https://upwego.pt | 2026-06-23 | Agência digital com serviço explícito de GEO/AEO. |
| Latigid | https://latigid.pt | 2026-06-23 | Consultoria com peso em SEO clássico; menciona AI search como extensão. Classificar como `adjacent_consultancy` ao usar para SoV (ver `references/competitor_filtering.md`). |
| AISO Hub | https://aiso-hub.com | 2026-06-23 | Primeira agência PT dedicada exclusivamente a AI Search Optimization; fundada 2024, Precious Episode LDA, Lisboa; opera em PT/EN/FR; audit com 377+ prompts em 6 engines de IA declarado. |
| Infinidata | https://www.infinidata.pt | 2026-06-23 | Agência digital de Lisboa com posicionamento explícito em GEO/AEO (blog "Agência SEO e GEO" e serviço de estruturação de autoridade semântica para LLMs); auto-declara pioneirismo em GEO em PT. |

## Manutenção

Adicionar à **base** da tabela (mais recente em cima de Junho 2026 seria contraproducente; ordem é cronológica para deixar ler quem entrou quando). Linha-formato:

```
| <Nome> | <URL https> | <YYYY-MM-DD descoberto> | <1 linha: serviço observado + porque cumpre critério> |
```

Quando remover uma entrada (raro): só se a entidade fechou, deixou de operar em PT, ou pivotou para fora do scope. Não remover por inactividade temporária — anotar em `execution-log.md` que está dormente.
