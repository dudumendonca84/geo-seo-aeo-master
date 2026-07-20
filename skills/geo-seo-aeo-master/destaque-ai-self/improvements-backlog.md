# destaque.ai improvements backlog

## Formato

Cada item segue este formato:

```
### YYYY-MM-DD added — [Categoria] — Título curto
- **Prioridade:** P0 / P1 / P2 / P3
- **Esforço:** 30min / 2h / 1 dia / 1 semana
- **Origem:** auditoria semanal X / news-feed entry Y / pedido externo
- **Estado:** TODO / IN PROGRESS / DONE / WONT FIX
- **Descrição:** O que é o problema/oportunidade
- **Acção:** Passos concretos para resolver
- **Verificação:** Como confirmar que ficou resolvido
- **Notes:** Contexto adicional
```

## Categorias

- `TECH` — performance, headers, compressão, CDN, security
- `SCHEMA` — JSON-LD coverage por template
- `CONTENT` — copy, headings, alt, bilingual hygiene
- `GEO` — llms.txt, robots IA, server rendering, prompt visibility
- `ENTITY` — Wikidata, Knowledge Panel, sameAs, NAP consistency
- `BACKLINKS` — digital PR, mentions em Tier-1 media PT/EN
- `MEASUREMENT` — GSC config, GA4 channel groups, Bing Webmaster AI Performance
- `STRATEGIC` — posicionamento, pricing, pitch

## Prioridade

- **P0** — Blocker. Quebra algo fundamental. Resolver esta semana.
- **P1** — Alta. Gap visível que afecta visibilidade ou credibilidade.
- **P2** — Média. Optimização desejável.
- **P3** — Baixa. Nice-to-have, sem urgência.

## Workflow

A Routine semanal:
1. Analisa o `audit-baseline.md` actualizado
2. Compara com a iteração anterior (em `audit-history.md`)
3. Move items que foram resolvidos para "DONE" e regista a data
4. Adiciona novos items detectados na nova auditoria
5. Cruza com `daily-agent/news-feed.md` da semana — se houve mudança no mercado que abre nova oportunidade ou cria nova urgência, adiciona

Items completados ficam aqui (estado DONE) pelo menos 4 semanas para rastreabilidade, depois movem-se para `audit-history.md`.

## Items actuais

_(Actualizado 20 julho 2026 — segunda execução do Routine. Sem P0: nenhum achado desta auditoria quebra algo fundamental.)_

### 2026-07-20 added — STRATEGIC — Peer set desactualizado face ao mercado; novos entrantes PT não classificados
- **Prioridade:** P1
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-07-20 (teste multi-motor em modo augmented)
- **Estado:** TODO
- **Descrição:** O teste multi-motor em modo augmented (novo esta semana, ver `audit-baseline.md` §7 e §14) identificou pelo menos 4 nomes portugueses com posicionamento explícito de GEO/AEO — Studio.351, AISO Hub, Infinidata, LPM — a aparecer repetidamente em resultados reais para as mesmas queries de descoberta que a destaque.ai visa, e nenhum foi ainda avaliado pelo teste formal de 4 perguntas de `references/competitor_filtering.md`. Só 3HASH está formalmente classificado como par. Adicionalmente, 3HASH reapareceu esta semana a publicar conteúdo GEO/AEO próprio (2 posts citados em respostas distintas) — sinal de que o par de referência está a investir mais na categoria, não menos.
- **Acção:** Passar Studio.351, AISO Hub, Infinidata e LPM pelo teste de 4 perguntas (mesmo buyer / mesmo JTBD / mesmo momento / substitutibilidade ≥70%); classificar em `peer` ou nas categorias não-par de `competitor_filtering.md` §3; actualizar o conjunto de pares se algum passar.
- **Verificação:** `competitor_filtering.md` reflecte um conjunto de pares revisto com data de revisão actualizada.
- **Notes:** AISO Hub em particular merece atenção prioritária — posicionamento específico de "AI Search Optimization" com arquitectura "entity-first", mais próximo do posicionamento da destaque.ai do que os outros três (mais generalistas SEO+GEO).

### 2026-07-20 added — CONTENT/GEO — Multimodal continua a zero apesar de duas oportunidades óbvias perdidas
- **Prioridade:** P2 (subiu de menção informal em Horizonte 4)
- **Esforço:** 2-4h (imagens + schema para o estudo mais recente)
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** TODO
- **Descrição:** O site publicou 3 casos de estudo e 1 estudo com 2.205 respostas na última semana — nenhum destes, conteúdo naturalmente propício a gráficos e capturas, tem uma única imagem. Zero `<img>`, zero `ImageObject` continua confirmado em todas as 13 páginas amostradas esta semana. Já não é apenas "ausência de activo" (enquadramento da semana passada); é uma prioridade que ficou de fora de dois ciclos de publicação seguidos.
- **Acção:** Adicionar pelo menos 1-2 visualizações de dados (gráficos) ao estudo `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`, com `ImageObject` schema (`caption`, `description`, `contentUrl` absoluto). Considerar o mesmo para os 3 casos de estudo se houver dados visualizáveis (antes/depois).
- **Verificação:** Próxima auditoria confirma pelo menos 1 `ImageObject` em produção.
- **Notes:** Gemini 3.5+ e GPT-5+ já citam imagens directamente (`references/models.md`) — esta é uma superfície de citação inexplorada há duas execuções seguidas.

### 2026-07-13 added — GEO — Routine sem acesso ao teste multi-motor ao vivo
- **Prioridade:** P1
- **Esforço:** 1 dia (trabalho de infraestrutura, fora do site)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O ambiente de execução deste Routine não tem sessão de browser autenticada nem integração de API a ChatGPT, Perplexity, Google AI Mode ou Bing Copilot. Na execução de 2026-07-20, o teste em Claude foi muito reforçado (31 prompts × modo knowledge, 21 × modo augmented, vs. 4 prompts × 1 modo na semana anterior) e produziu, pela primeira vez, dado real de citação e um mapa de concorrência — mas os 4 motores mandatórios em falta (ChatGPT, Perplexity, Google AI Mode, Bing Copilot) continuam completamente por testar, agora há duas semanas consecutivas. O teste central da metodologia SINAL continua parcial.
- **Acção:** Ligar este Routine a uma via de acesso real a pelo menos os 5 motores mandatórios — via API onde exista (OpenAI, Anthropic, Perplexity, Google) e via automação de browser autenticada onde não exista API de consumidor equivalente (Bing Copilot, Google AI Mode). Alternativa: ligar a base de dados do produto próprio Visibility Tracker (destaque-ai-tracker) a este ambiente, já que esse produto já faz este tracking — dogfooding directo em vez de duplicar o trabalho.
- **Verificação:** Próxima execução semanal reporta pelo menos 3 dos 5 motores mandatórios testados com dado real (não N/D).
- **Notes:** Confirmado de novo nesta sessão (2026-07-20) que não existe projecto Supabase `destaque-ai-tracker` acessível — apenas "Deck Builder Platform Project" visível. Sem progresso em 2 semanas.

### 2026-07-13 added — TECH — CSP em modo Report-Only, não enforced
- **Prioridade:** P1
- **Esforço:** 2h-1 dia
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O header `content-security-policy-report-only` está presente e bem configurado (`default-src 'self'`, `frame-ancestors 'none'`, etc.) em todas as páginas testadas, mas em modo Report-Only não bloqueia nada de facto — apenas regista violações hipotéticas. Confirmado inalterado (mesmo header, mesma política) na execução de 2026-07-20.
- **Acção:** Confirmar (via ferramenta de reporting, se configurada, ou por inspecção) que a política actual não quebra nenhum recurso legítimo, depois substituir o header por `Content-Security-Policy` (enforced) com a mesma política.
- **Verificação:** `curl -sI https://www.destaque.ai/` devolve `content-security-policy` (não `-report-only`) e o site continua a funcionar sem erros de consola relacionados com CSP.
- **Notes:** Baixo risco — a política já testada em report-only não terá estado a acumular violações inesperadas há muito tempo, presumivelmente. Sem progresso em 2 semanas.

### 2026-07-13 added — ENTITY — Confirmar perfis sameAs populados
- **Prioridade:** P1
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` declara LinkedIn, Crunchbase, Clutch e Wikidata (Q140043087). A pesquisa web desta sessão não devolveu snippets indexados para nenhum destes — não foi possível confirmar directamente se estão populados, activos e correctos (pode ser apenas falta de indexação por serem recentes). Repetido sem sucesso na execução de 2026-07-20 — mesmos 4 URLs, mesma ausência de resultado indexado.
- **Acção:** Verificar manualmente cada um dos 4 perfis; completar campos em falta no Wikidata (instance of, país, sede, fundador, data de fundação, website oficial); confirmar página de LinkedIn tem posts recentes.
- **Verificação:** Cada URL abre e mostra conteúdo correcto e actual.
- **Notes:** Sem progresso em 2 semanas — esta verificação não pode ser feita a partir desta sessão (limite estrutural de `WebSearch`, não do perfil em si); precisa de confirmação humana directa.

### 2026-07-13 added — STRATEGIC — Schema declara alcance (ES/EN/pt-BR) que o site não cobre
- **Prioridade:** P2
- **Esforço:** 2h (decisão) + variável conforme opção
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** IN PROGRESS (actualizado 2026-07-20)
- **Descrição:** `Organization.areaServed` inclui Espanha e Europa; `contactPoint.availableLanguage` inclui `en`, `es`, `pt-BR`. Na execução de 2026-07-13 o site era monolingue PT-PT. Na execução de 2026-07-20, `/en/about` e `/en/studies` (+3 estudos traduzidos) foram publicados, com `hreflang` correcto — o `en` de `availableLanguage` começou a ganhar conteúdo real. `es` e `pt-BR` continuam sem qualquer conteúdo correspondente.
- **Acção:** Decidir entre (a) construir conteúdo real em `es`/`pt-BR` também, ou (b) reduzir a declaração de schema a `pt-PT`+`en` (o que o site cobre hoje), evitando prometer a crawlers/LLMs um alcance que o conteúdo ainda não sustenta nessas duas línguas.
- **Verificação:** Schema e conteúdo alinhados — ou ambos expandidos, ou a declaração revista.
- **Notes:** Progresso parcial e não confirmado como intencional (pode ser coincidência de roadmap, não resposta a este item de backlog) — mas o gap para `es`/`pt-BR` mantém-se integralmente.

### 2026-07-13 added — CONTENT — Cadência de publicação parada desde 06 jul 2026
- **Prioridade:** P2
- **Esforço:** variável
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** DONE (2026-07-20)
- **Descrição:** Cadência quinzenal-ish de abril a final de junho 2026 (10 publicações em ~10 semanas); sem publicação nova desde `/estudo/gap-google-ia` (06 jul 2026) — hiato de uma semana à data da auditoria de 13 jul.
- **Acção:** Retomar publicação (blog ou próximo estudo original).
- **Verificação:** `sitemap.xml` mostra `lastmod` novo para conteúdo genuinamente novo (não apenas re-render).
- **Notes:** Resolvido dentro de uma semana — 6 posts de blog novos (15, 14, 13, 11, 09, mais) e 2 estudos originais novos publicados entre 06 e 17 jul 2026. Confirmado via `sitemap.xml` e `llms.txt` (11→17 posts listados). Mantém-se aqui 4 semanas por rastreabilidade per protocolo do ficheiro.

### 2026-07-13 added — MEASUREMENT — Stack de medição não verificável de fora
- **Prioridade:** P2
- **Esforço:** 1-2h (verificação interna)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Não foi possível confirmar de fora se GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance e o Visibility Tracker próprio estão configurados e a recolher dados. Confirmado de novo em 2026-07-20: `mcp__Supabase__list_projects` só mostra "Deck Builder Platform Project", sem projecto `destaque-ai-tracker`.
- **Acção:** Confirmação interna directa (não depende desta auditoria externa) + considerar dar a este Routine acesso de leitura a pelo menos um destes para reduzir o N/D estrutural da categoria 12 do scorecard.
- **Verificação:** Próxima auditoria reporta estado real em vez de N/D.
- **Notes:** Sem progresso em 2 semanas.

### 2026-07-13 added — ENTITY — Google Business Profile para o endereço de Lisboa
- **Prioridade:** P2
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Endereço físico em Lisboa usado como sinal de credibilidade (relevante para prompts tipo "quem faz auditorias de GEO em Lisboa?"), sem Google Business Profile correspondente verificado.
- **Acção:** Criar/reivindicar Google Business Profile com NAP idêntico ao schema (`Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa`, `+351 933 497 858`, `contacto@destaque.ai`).
- **Verificação:** Perfil aparece em pesquisa Google pelo nome da empresa + "Lisboa".
- **Notes:** Prioridade mais baixa dado o modelo de negócio ser B2B remoto — não é onde a maioria dos prospects entra em contacto.

### 2026-07-13 added — SOCIAL — Sem presença em X, GitHub ou Reddit/HN
- **Prioridade:** P3
- **Esforço:** 1 semana (arranque) + contínuo
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` não inclui X/Twitter nem GitHub; pesquisa não encontrou presença em Reddit/Hacker News. Reddit representa ~47% das citações de topo do Perplexity (per `references/models.md`) — canal desproporcionadamente relevante face à ausência actual.
- **Acção:** Avaliar arranque de presença mínima e autêntica em Reddit (participação genuína em r/SEO, comunidades PT relevantes), não spam. GitHub só faz sentido se/quando existir algo open-source a publicar (ex. ferramentas internas do Tracker).
- **Verificação:** Presença mínima estabelecida e sustentada por 4+ semanas.
- **Notes:** X é opcional — avaliar se o público-alvo B2B PT está lá.

### 2026-07-13 added — BACKLINKS — Zero cobertura Tier-1 PT encontrada
- **Prioridade:** P3
- **Esforço:** 1 semana+ (horizonte longo)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Pesquisa dirigida a Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo não encontrou nenhuma menção a destaque.ai ou Eduardo Mendonça.
- **Acção:** Iniciar pipeline de digital PR de forma orgânica — pitches a jornalistas de tecnologia/negócios PT com os estudos originais já publicados como gancho (dados de 45 empresas SaaS B2B já são material citável).
- **Verificação:** Primeira peça Tier-1 publicada.
- **Notes:** Expectável para empresa fundada em 2025 — horizonte 3-4 (semana 7-12 a 90+ dias), não urgente.

### 2026-07-13 added — E-E-A-T — Sem case studies públicos
- **Prioridade:** P3
- **Esforço:** variável (depende de ter clientes com resultados a partilhar)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** DONE (2026-07-20), com ressalva — ver item de follow-up SCHEMA abaixo
- **Descrição:** Nenhum case study com cliente nomeado e resultados verificáveis encontrado nas páginas amostradas.
- **Acção:** Publicar o primeiro case study assim que exista um cliente disposto a ser nomeado com resultados mensuráveis.
- **Verificação:** Página de case study publicada com schema `Review`/`CaseStudy` ou similar.
- **Notes:** 3 casos publicados em `/casos` (SaaS facturação B2B, clínica dentária multilocal, energia solar residencial). Ressalva: usam schema `Article`, não `Review`/`AggregateRating`/`CaseStudy`; esta auditoria não confirmou por leitura do corpo se nomeiam clientes reais e verificáveis — ver novo item SCHEMA abaixo. Mantém-se aqui 4 semanas por rastreabilidade.

### 2026-07-20 added — SCHEMA — Casos de estudo sem schema de resultado verificável
- **Prioridade:** P3
- **Esforço:** 1-2h (verificação de conteúdo) + variável (schema)
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** TODO
- **Descrição:** Os 3 casos de estudo publicados esta semana (`/casos/*`) usam schema `ItemPage`+`Article`+`BreadcrumbList` — sem `Review`, `AggregateRating`, nem qualquer tipo com resultado estruturado (métricas antes/depois marcadas como dados). Esta auditoria não leu o corpo integral dos 3 casos, apenas confirmou o schema — não é possível dizer, sem essa leitura, se os casos nomeiam clientes reais e verificáveis ou são compostos de forma ilustrativa/anonimizada.
- **Acção:** Confirmar directamente (leitura do corpo) se os casos nomeiam clientes reais com resultados auditáveis; se sim, considerar adicionar dados estruturados de resultado (métricas com data, não só texto corrido) para reforçar o sinal de E-E-A-T.
- **Verificação:** Próxima auditoria reporta se os casos são nomeados/verificáveis, e se algum schema de resultado foi adicionado.
- **Notes:** Não é uma falha confirmada — é uma lacuna de verificação desta auditoria, distinta da lacuna original (que já foi resolvida: os casos existem).

### 2026-07-20 added — GEO — llms.txt não referencia as novas páginas /en/
- **Prioridade:** P3
- **Esforço:** 15-30min
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** TODO
- **Descrição:** `/en/about` e `/en/studies` (+ 3 estudos traduzidos) estão publicados e no `sitemap.xml`, mas não estão listados em `llms.txt`, que continua estruturado só em torno do conteúdo PT-PT.
- **Acção:** Adicionar uma secção ao `llms.txt` referenciando as páginas `/en/`.
- **Verificação:** `llms.txt` lista `/en/about` e `/en/studies*`.
- **Notes:** Risco baixo — `llms.txt` não é um canal de citação confirmado (`SKILL.md` anti-patterns), mas é higiene de documentação barata de corrigir.

### 2026-07-20 added — SCHEMA — /perguntas não amostrado nesta execução
- **Prioridade:** P3
- **Esforço:** 15min (verificação)
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** TODO
- **Descrição:** `/perguntas` é nova no `sitemap.xml` (prioridade 0.8, ao nível de `/blog` e `/estudo`) mas não foi amostrada nesta execução — falha de criação de link partilhável na primeira tentativa, sem retry dedicado a esta página específica.
- **Acção:** Confirmar schema JSON-LD e conteúdo de `/perguntas` na próxima execução.
- **Verificação:** Secção 6/7 da próxima auditoria reporta `/perguntas`.
- **Notes:** Falha de ferramenta, não do site — não assumir nada sobre o conteúdo desta página.

### 2026-07-13 added — SCHEMA — Templates não amostrados nesta execução
- **Prioridade:** P3
- **Esforço:** 30min (verificação)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** DONE (2026-07-20)
- **Descrição:** `/servico`, `/sobre` e `/glossario` não foram amostrados nesta execução (falha intermitente da ferramenta de fetch a criar link de partilha para esses caminhos).
- **Acção:** Confirmar schema JSON-LD nestes 3 templates na próxima execução.
- **Verificação:** Secção 6 da próxima auditoria reporta os 3 templates.
- **Notes:** Todos os 3 amostrados com sucesso em 2026-07-20: `/servico` (`CollectionPage`+`FAQPage`+`Service`×4+`ItemList`+`BreadcrumbList`), `/sobre` (`AboutPage`+`BreadcrumbList`), `/glossario` (`WebPage`+`DefinedTermSet`+`BreadcrumbList`). Mantém-se aqui 4 semanas por rastreabilidade.
