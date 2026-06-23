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

## Bucket — regra

Nenhuma marca entra em cálculo de SoV sem `bucket` atribuído (ver `references/competitor_filtering.md`, teste das 4 perguntas). Valores: `peer`, `adjacent_consultancy`, `adjacent_vendor`, `expert_individual`, `media_publisher`, `academic_source`, `distractor`. Só `peer` conta para o SoV-headline; os restantes ficam em buckets separados. O bucket é uma frase ligada à pergunta que **passou** (peer) ou **falhou** (não-peer).

## Lista

| Nome | URL | Desde (YYYY-MM-DD) | Bucket | Porquê entra + razão do bucket |
|---|---|---|---|---|
| 3HASH | https://3hash.com | 2026-06-23 | `peer` | Pioneer PT de "LLMs próprios / infra NVIDIA" para SEO/GEO; mesmo buyer (B2B SaaS PT), mesmo momento (audit/diagnostic), substituível ~70% à destaque.ai. Audit format inspirou o 3HASH audit pattern. |
| AISO Hub | https://aiso-hub.com | 2026-06-23 | `peer` | **Passa as 4 perguntas.** Agência de Lisboa dedicada exclusivamente a AI Search Optimization (AISO Audit/Optimize/Foundation/Monitor); mesmo buyer (B2B SaaS), mesmo JTBD (ser citado por assistentes de IA), mesmo momento (audit-first), substituível ≥70% à SINAL. Diferenciador da destaque.ai é PT-PT contextual vs AISO Hub PT/EN/FR. Peer mais sério desde o 3HASH. |
| Studio.351 | https://studio351.pt | 2026-06-23 | `adjacent_consultancy` | Agência SEO + GEO full-service em Lisboa; falha substitutability — buyer compra pacote SEO largo, GEO é um serviço dentro do portfólio, não consultoria GEO-only audit-first. |
| Marketing Gabriel | https://www.gabrielcunha.com/agencia-geo/ | 2026-06-23 | `adjacent_consultancy` | Marca do consultor Gabriel Cunha; 16 anos de SEO técnico, lançou serviços GEO/AEO em Fev 2026 em 3 níveis de maturidade. Falha JTBD — base é content development SEO→GEO, não audit-first measurement (SINAL). URL canónico do serviço é gabrielcunha.com/agencia-geo/ (marketinggabriel.com era entrada incorrecta — ver execution-log 2026-06-23). |
| AP\|Portugal | https://www.apportugal.com | 2026-06-23 | `adjacent_vendor` | Tradução/localização com vertical de AI search visibility para conteúdo multilingue. Falha buyer + JTBD — comprar-se-ia junto de consultoria GEO, não em vez de; complementar, não substituto. |
| LPM Comunicação | https://lpmcom.pt | 2026-06-23 | `adjacent_consultancy` | Agência de comunicação/PR com componente declarada de AI search optimization. Falha JTBD — base é comunicação/relações públicas, GEO é extensão. |
| Up We Go | https://upwego.pt | 2026-06-23 | `adjacent_consultancy` | Agência digital full-service com serviço explícito de GEO/AEO. Falha substitutability — GEO é um item de menu, não a oferta-núcleo. |
| Latigid | https://latigid.pt | 2026-06-23 | `adjacent_consultancy` | Consultoria com peso em SEO clássico; menciona AI search como extensão. Falha JTBD — SEO clássico, momento mais cedo no funil (exemplo canónico em `references/competitor_filtering.md`). |
| Infinidata | https://www.infinidata.pt | 2026-06-23 | `adjacent_consultancy` | Agência digital de Lisboa com posicionamento explícito em GEO/AEO; auto-declara pioneirismo em GEO em PT. Falha substitutability — "agência digital" full-service com GEO no portfólio ≠ consultoria GEO-only. Revisitar se aparecer em ≥3 prompts/2 semanas. |

## Manutenção

Adicionar à **base** da tabela (mais recente em cima de Junho 2026 seria contraproducente; ordem é cronológica para deixar ler quem entrou quando). Linha-formato:

```
| <Nome> | <URL https> | <YYYY-MM-DD descoberto> | <bucket via teste das 4 perguntas> | <1 linha: serviço observado + razão do bucket (pergunta que passou/falhou)> |
```

Quando remover uma entrada (raro): só se a entidade fechou, deixou de operar em PT, ou pivotou para fora do scope. Não remover por inactividade temporária — anotar em `execution-log.md` que está dormente.
