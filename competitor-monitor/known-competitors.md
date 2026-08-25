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
| SmartLinks | https://smartlinks.pt/seo-ai-search/ | 2026-06-30 | `peer` | Consultoria SEO & AI Search (AEO) em Amadora, Lisboa; metodologia declarada para influenciar "primary bias" e "selection rate" em LLMs (Schema Markup, grounding strategies, Q&A packs). Buyer B2B, mesmo momento (AEO/GEO), substituível. Entidade verificada (registo AEP). Revisitar bucket se o modelo de entrega se revelar conteúdo-only. |
| Studio.351 | https://studio351.pt | 2026-06-23 | `adjacent_consultancy` | Agência SEO + GEO full-service em Lisboa; falha substitutability — buyer compra pacote SEO largo, GEO é um serviço dentro do portfólio, não consultoria GEO-only audit-first. |
| Marketing Gabriel | https://www.gabrielcunha.com/agencia-geo/ | 2026-06-23 | `adjacent_consultancy` | Marca do consultor Gabriel Cunha; 16 anos de SEO técnico, lançou serviços GEO/AEO em Fev 2026 em 3 níveis de maturidade. Falha JTBD — base é content development SEO→GEO, não audit-first measurement (SINAL). URL canónico do serviço é gabrielcunha.com/agencia-geo/ (marketinggabriel.com era entrada incorrecta — ver execution-log 2026-06-23). |
| AP\|Portugal | https://www.apportugal.com | 2026-06-23 | `adjacent_vendor` | Tradução/localização com vertical de AI search visibility para conteúdo multilingue. Falha buyer + JTBD — comprar-se-ia junto de consultoria GEO, não em vez de; complementar, não substituto. |
| LPM Comunicação | https://lpmcom.pt | 2026-06-23 | `adjacent_consultancy` | Agência de comunicação/PR com componente declarada de AI search optimization. Falha JTBD — base é comunicação/relações públicas, GEO é extensão. |
| Up We Go | https://upwego.pt | 2026-06-23 | `adjacent_consultancy` | Agência digital full-service com serviço explícito de GEO/AEO. Falha substitutability — GEO é um item de menu, não a oferta-núcleo. |
| Latigid | https://latigid.pt | 2026-06-23 | `adjacent_consultancy` | Consultoria com peso em SEO clássico; menciona AI search como extensão. Falha JTBD — SEO clássico, momento mais cedo no funil (exemplo canónico em `references/competitor_filtering.md`). |
| Infinidata | https://www.infinidata.pt | 2026-06-23 | `adjacent_consultancy` | Agência digital de Lisboa com posicionamento explícito em GEO/AEO; auto-declara pioneirismo em GEO em PT. Falha substitutability — "agência digital" full-service com GEO no portfólio ≠ consultoria GEO-only. Revisitar se aparecer em ≥3 prompts/2 semanas. |
| LUSO AI | https://lusoai.com/cat-solucoes-e-servicos-ia-empresas-portugal/servicos-de-otimizacao-geo-para-empresas/ | 2026-06-30 | `adjacent_vendor` | Empresa PT de automação IA (chatbots, agentes, automação) com página dedicada de Otimização GEO para Empresas; cobre ChatGPT, Bing AI, Claude, Gemini, Perplexity. Falha JTBD — GEO é extensão do core IA/automação, não oferta-núcleo. Previamente retida (sem entidade PT verificável); URL confirmado nesta semana. |
| Helder Mesquita | https://heldermesquita.pt/otimizacao-para-ia/ | 2026-06-30 | `adjacent_consultancy` | Consultor individual com 15+ anos de experiência digital; serviço "Otimização para IA" (AEO+GEO+LLM SEO), Método R.E.F.E.R.E.N.C.I.A.™ e curso próprio. Falha buyer — individual vs empresas B2B SaaS; serve PME generalistas. Perfil de influência editorial relevante. |
| Websystems | https://www.websystems.pt/ | 2026-06-30 | `adjacent_consultancy` | Agência de Marketing Digital em Lisboa e Algarve com página dedicada "GEO | Otimização para ChatGPT e IA". Falha substitutability — digital marketing full-service com GEO no portfólio. |
| Bluesoft | https://www.bluesoft.pt/pt | 2026-06-30 | `adjacent_consultancy` | Agência digital PT com serviço AEO declarado: auditorias completas com análise técnica, gap analysis vs concorrência, plano de 90 dias com KPIs. Falha JTBD — foco AEO/técnico sem componente de medição LLM sistemática. |
| UniK SEO | https://www.unik-seo.com/ | 2026-06-30 | `adjacent_consultancy` | Agência de SEO e GEO com escritórios em Portugal e Reino Unido; posiciona-se como "Líder em Portugal" em GEO, 200+ clientes, 10+ anos. Falha substitutability — escala e posicionamento SEO-primeiro com GEO como extensão. |
| Jelly | https://www.jelly.pt/ | 2026-06-30 | `adjacent_consultancy` | Agência de Marketing Digital e IA em Lisboa; optimização para AI citations, schema markup com "AI licensing directives", monitorização em ChatGPT e Perplexity. Falha substitutability — GEO/AI citations é um serviço dentro de portfólio digital mais amplo. |
| SEOLabs | https://seolabs.pt/ | 2026-07-07 | `adjacent_consultancy` | Agência de SEO em V.N. Gaia/Porto, 12+ anos, passou a incluir GEO/AEO/"otimização para LLMs" como linha de serviço declarada (não só blog). Falha substitutability — SEO clássico continua o core, GEO é extensão. Previamente rejeitada em 2026-06-23 por "sem entidade PT verificável"; esta semana confirmada como entidade real com serviço GEO explícito — reclassificação, não erro. |
| Somos6Digital | https://somos6digital.com/ | 2026-07-07 | `adjacent_consultancy` | Agência de marketing digital no Porto, autoproclamada pioneira em AEO em Portugal; combina SEO clássico + AEO/GEO + CRM próprio + automação, opera PT/BR/Europa. Falha substitutability — pacote digital marketing + CRM mais amplo, GEO não é oferta-núcleo isolada. |
| Basicamente Digital | https://basicamente.pt/pages/seo-aeo | 2026-07-14 | `adjacent_consultancy` | "Technology-Led Growth Partner" com página dedicada SEO & AEO (optimização para ChatGPT, Gemini, Perplexity); portfólio inclui também publicidade, conteúdo, branding e design. Falha substitutability — buyer compra parceiro de crescimento full-stack, AEO é uma linha de serviço entre várias, não a oferta-núcleo. |
| Digital Fusion | https://www.digitalfusion.pt/consultoria-estrategia-seo/ | 2026-08-18 | `adjacent_consultancy` | Agência Martech no Porto (automação de marketing, HubSpot, PPC), fundador Pedro Silva; página dedicada de estratégia de conteúdo optimizada para SEO e AEO, visando aparecer como "fonte credível" em ChatGPT/Perplexity/Google SGE. Candidato em observação desde 2026-08-11 (WebFetch bloqueado); confirmado esta semana via síntese de pesquisa detalhada. Falha substitutability — parceiro Martech full-service, AEO é uma linha de conteúdo dentro de um portfólio mais amplo (automação, CRM, PPC), não a oferta-núcleo. |
| Marco Gouveia | https://www.marcogouveia.pt/consultor-geo | 2026-08-18 | `adjacent_consultancy` | Consultor individual de marketing digital (20+ anos, formador certificado Google) com página dedicada "Consultor GEO"; pricing público (auditoria a partir de €3.000, consultoria contínua a partir de €1.000/mês). Apareceu no Prompt 1 da Dimensão 1 (pos 2) na semana em que foi identificado. Falha buyer — serve PME/empresário generalista, mesma falha de bucket que Helder Mesquita, não o buyer B2B SaaS audit-first do peer set da destaque.ai. |
| Filipe Raimundo | https://www.filiperaimundo.pt/en/ | 2026-08-25 | `adjacent_consultancy` | Consultor SEO independente sediado em Lisboa (12+ anos), título dedicado "Consultor SEO · AI Search (GEO/AEO)". Entrou directamente em pos 1 do Prompt 4 na semana em que foi identificado. Falha buyer — serve mercados internacionais generalistas (PT, UK, USA, Brasil, +20 países), mesmo padrão de Marco Gouveia/Helder Mesquita, não o buyer B2B SaaS audit-first do peer set da destaque.ai. |
| Digiton.ai | https://digiton.ai | 2026-08-25 | `adjacent_vendor` | Agência de IA sediada em Lisboa (agentes/automação/n8n, opera também em Angola e Emirados); "AI search optimization (AEO/GEO)" consta do seu Solutions Index como uma linha entre vários serviços de automação. Falha JTBD/substitutability — mesmo padrão do LUSO AI, automação IA com GEO como extensão, não oferta-núcleo. |

## Manutenção

Adicionar à **base** da tabela (mais recente em cima de Junho 2026 seria contraproducente; ordem é cronológica para deixar ler quem entrou quando). Linha-formato:

```
| <Nome> | <URL https> | <YYYY-MM-DD descoberto> | <bucket via teste das 4 perguntas> | <1 linha: serviço observado + razão do bucket (pergunta que passou/falhou)> |
```

Quando remover uma entrada (raro): só se a entidade fechou, deixou de operar em PT, ou pivotou para fora do scope. Não remover por inactividade temporária — anotar em `execution-log.md` que está dormente.
