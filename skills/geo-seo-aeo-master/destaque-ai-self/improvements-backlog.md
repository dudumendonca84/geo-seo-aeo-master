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
- `MEASUREMENT` — GSC config, GA4 channel groups, Bing Webmaster AI Performance, Visibility Tracker próprio
- `STRATEGIC` — posicionamento, pricing, pitch
- `PROCESS` — integridade do próprio repositório/rotina de auditoria (nova categoria, 03 ago 2026 — ver item PROCESS abaixo)

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

_(Actualizado 03 agosto 2026 — quarta execução do Routine. 1 P0 novo: falha activa de medição no Tracker, 3 motores degradados neste preciso momento por quota de fornecedor esgotada — o item mais severo encontrado até agora nesta auditoria.)_

### 2026-08-03 added — MEASUREMENT — Tracker: quota SerpApi esgotada + erro de campo DataForSEO, 3 motores degradados agora
- **Prioridade:** P0
- **Esforço:** 2-4h (diagnóstico) + variável (correcção — pode ser só reposição/upgrade de quota, ou correcção do payload de campo)
- **Origem:** auditoria semanal 2026-08-03 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** Desde 31 jul 15h UTC, chamadas `copilot_bing/dataforseo` (augmented) falham com `Invalid Field: 'language_name'`/`'language_code'` (385 ocorrências combinadas). O código já tem fallback automático para SerpApi (`[surfaces] DataForSEO falhou, a cair para SerpApi`), mas a própria SerpApi ficou **sem quota** ("Your account has run out of searches") a partir de 03 ago 07:58 UTC, com 130 ocorrências combinadas afectando `copilot/serpapi` (knowledge e augmented), `google_ai_mode/dataforseo` e `google_aio/dataforseo` — a última ocorrência 21 minutos antes desta auditoria. Efeito prático: qualquer cliente que peça hoje um relatório actualizado do Tracker para Bing Copilot, Google AI Mode ou Google AI Overviews recebe dados parciais ou nenhuns.
- **Acção:** (1) Corrigir o payload que envia `language_name`/`language_code` inválido para a DataForSEO — provavelmente um valor de configuração de locale mudou de formato numa integração recente. (2) Confirmar o plano/quota actual da SerpApi e repor/aumentar conforme volume necessário, ou implementar rate-limiting proactivo no lado do Tracker para não esgotar a quota antes do fim do ciclo de facturação. (3) Confirmar que o aviso de cobertura parcial introduzido na PR #171 (para o caso de rate-limit da Mistral) também cobre este cenário de quota SerpApi esgotada — não testado nesta auditoria.
- **Verificação:** `mcp__Vercel__get_runtime_errors` para o projecto não mostra novas ocorrências destes erros específicos num período de 7 dias; confirmar com um relatório de teste em cada um dos 3 motores afectados.
- **Notes:** Mais severo do que o bug de `/competitors/[id]` da semana passada (que era isolado a uma rota) — este afecta directamente a cobertura de medição prometida a clientes em 3 dos 7 motores, e está activo neste preciso momento, não é um sintoma histórico.

### 2026-08-03 added — MEASUREMENT — Tracker: BING_OAUTH_CLIENT_ID em falta
- **Prioridade:** P2
- **Esforço:** 30min-1h
- **Origem:** auditoria semanal 2026-08-03 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`)
- **Estado:** TODO
- **Descrição:** `Error: BING_OAUTH_CLIENT_ID env is missing`, rota `/api/integrations/bing/connect`, 4 ocorrências, 1 utilizador, 31 jul 11:11-11:18 UTC.
- **Acção:** Configurar a variável de ambiente em falta no projecto Vercel `destaque-ai-tracker`.
- **Verificação:** Rota `/api/integrations/bing/connect` deixa de gerar este erro.
- **Notes:** Esforço pequeno, impacto limitado a integração de conta Bing por utilizador — não bloqueia o motor de auditoria em si.

### 2026-08-03 added — PROCESS — Estrutura duplicada do repositório do skill: dois caminhos divergentes, `news-feed.md` fragmentado
- **Prioridade:** P1
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-08-03 (comparação directa de `git log`/árvores entre `skills/geo-seo-aeo-master/` e a raiz do repositório)
- **Estado:** TODO
- **Descrição:** O repositório tem duas cópias não sincronizadas da estrutura do skill: o caminho canónico `skills/geo-seo-aeo-master/` (referenciado pelas URLs raw em `models.md`/`prompts.md`) e uma árvore paralela na raiz (`daily-agent/`, `destaque-ai-self/`, `radar-geo/`, `competitor-monitor/`, `routines/`). A rotina diária tem escrito, sessão após sessão, ora num caminho ora no outro — `skills/geo-seo-aeo-master/daily-agent/news-feed.md` pára em 28 jul; `daily-agent/news-feed.md` (raiz) tem 29 jul-03 ago mas falta 15-28 jul. O histórico de notícias está fragmentado entre os dois ficheiros, nenhum tem o registo completo. A árvore `destaque-ai-self/` da raiz está morta desde 01 jun 2026 (relicário de antes da reorganização para `skills/`) — não está a ser escrita activamente, mas continua a existir e pode confundir uma execução futura que não verifique com cuidado qual caminho é o vivo.
- **Acção:** Decidir um único caminho canónico (aparenta ser `skills/geo-seo-aeo-master/`, dado ser o referenciado pelas URLs raw usadas por Deck Builder/Tracker), consolidar todo o histórico de `news-feed.md` num único ficheiro sem duplicar nem perder entradas, apagar ou arquivar explicitamente a árvore morta `destaque-ai-self/` da raiz para não confundir execuções futuras, e reforçar a instrução da rotina diária para nunca escrever fora do caminho canónico (a instrução já existe em texto — o problema é execução, não especificação).
- **Verificação:** Uma única árvore de skill no repositório; `git log` mostra escrita consistente sempre no mesmo caminho nas próximas 2-3 semanas.
- **Notes:** Risco real, não cosmético — se uma execução futura ler o `news-feed.md` errado (ou o `destaque-ai-self/` morto da raiz), produz uma auditoria com contexto de mercado desactualizado ou, no limite, sobrescreve trabalho novo com um formato de 01 jun 2026.

### 2026-07-27 added — STRATEGIC — Peer set desactualizado face ao mercado; novos entrantes PT não classificados
- **Prioridade:** P1 (mantida — 4ª semana em aberto, evidência reforçada de novo)
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-07-20 (teste multi-motor em modo augmented); reforçado 2026-07-27 e 2026-08-03
- **Estado:** TODO
- **Descrição:** Studio.351, AISO Hub, Infinidata, 3HASH (par já formal) e AP Portugal continuam a aparecer de forma estável em pesquisas independentes semana após semana. **Actualização 2026-08-03:** `LR1` ("quem faz auditorias de GEO em Lisboa?"), testado pela primeira vez em modo augmented, devolveu 7 concorrentes citados com URL (Studio.351, AISO Hub, 3HASH, AP Portugal, UniK SEO, BeFound, Infinidata) e destaque.ai ausente — o sinal mais forte até agora de que o conjunto de pares precisa de revisão antes de qualquer cálculo de share-of-voice fazer sentido.
- **Acção:** Passar Studio.351, AISO Hub, Infinidata e AP Portugal pelo teste de 4 perguntas de `competitor_filtering.md` §1; classificar em `peer` ou nas categorias não-par de §3; actualizar o conjunto de pares se algum passar. Nota: `competitor_filtering.md` foi actualizado em 31 jul (fora desta auditoria) com uma regra nova — rank trackers internacionais nunca são peer, mesmo com features de AI-visibility — não afecta directamente este item mas mantém presente ao rever.
- **Verificação:** `competitor_filtering.md` reflecte um conjunto de pares revisto com data de revisão actualizada.
- **Notes:** 4ª semana em aberto. AISO Hub continua o candidato mais forte, mas Studio.351 e Infinidata têm agora evidência igualmente recorrente.

### 2026-07-13 added — GEO — Routine sem acesso ao teste multi-motor ao vivo
- **Prioridade:** P1 (4ª semana em aberto — deixa de ser tratável como contratempo pontual)
- **Esforço:** 1 dia (trabalho de infraestrutura, fora do site)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O ambiente de execução deste Routine não tem sessão de browser autenticada nem integração de API a ChatGPT, Perplexity, Google AI Mode ou Bing Copilot. Claude continua o único motor com dado real (31 prompts × modo knowledge, 21 × modo augmented na execução de 2026-08-03). **Agravante novo 2026-08-03:** o próprio Visibility Tracker, que testaria estes motores, está com falhas activas de quota/integração (ver item MEASUREMENT P0 acima) — mesmo que este Routine ganhasse acesso de leitura ao Tracker hoje, herdaria dados parcialmente degradados até essas falhas serem corrigidas.
- **Acção:** Ligar este Routine a uma via de acesso real a pelo menos os 5 motores mandatórios — via API onde exista, via automação de browser autenticada onde não exista. Alternativa continua a ser dar a este Routine acesso de leitura à base de dados/API do Tracker — mas só depois de resolver o item P0 de quota/integração, para não herdar dados degradados.
- **Verificação:** Próxima execução semanal reporta pelo menos 3 dos 5 motores mandatórios testados com dado real (não N/D).
- **Notes:** 4ª semana sem progresso neste item específico.

### 2026-07-13 added — TECH — CSP em modo Report-Only, não enforced
- **Prioridade:** P1 (4ª semana sem progresso)
- **Esforço:** 2h-1 dia
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O header `content-security-policy-report-only` está presente e bem configurado, mas em modo Report-Only não bloqueia nada de facto. Confirmado byte-idêntico na política (mesmo conteúdo do header) nas execuções de 2026-07-20, 2026-07-27 e 2026-08-03.
- **Acção:** Confirmar que a política actual não quebra nenhum recurso legítimo, depois substituir o header por `Content-Security-Policy` (enforced) com a mesma política.
- **Verificação:** `curl -sI https://www.destaque.ai/` devolve `content-security-policy` (não `-report-only`) e o site continua a funcionar sem erros de consola relacionados com CSP.
- **Notes:** Baixo risco. Sem progresso em 4 semanas.

### 2026-07-13 added — ENTITY — Confirmar perfis sameAs populados
- **Prioridade:** P1 (não re-verificado esta semana — fora da amostra mais estreita de 2026-08-03)
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` declara LinkedIn, Crunchbase, Clutch e Wikidata (Q140043087). Bloqueio de rede de saída deste ambiente impede verificação directa de qualquer URL externo (confirmado 2026-07-27, não re-testado 2026-08-03).
- **Acção:** Verificar manualmente cada um dos 4 perfis (fora desta sessão); completar campos em falta no Wikidata; confirmar página de LinkedIn tem posts recentes.
- **Verificação:** Cada URL abre e mostra conteúdo correcto e actual.
- **Notes:** Sem alteração de estado esta semana — item não re-amostrado, não porque foi resolvido.

### 2026-07-13 added — STRATEGIC — Schema declara alcance (ES/EN/pt-BR) que o site não cobre
- **Prioridade:** P2
- **Esforço:** 2h (decisão) + variável conforme opção
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** IN PROGRESS (sem novo progresso confirmado em 2026-08-03 — não re-amostrado)
- **Descrição:** `Organization.areaServed` inclui Espanha e Europa; `contactPoint.availableLanguage` inclui `en`, `es`, `pt-BR`. `es` e `pt-BR` continuam sem qualquer conteúdo correspondente confirmado em 2026-07-27; não re-verificado esta semana.
- **Acção:** Decidir entre (a) construir conteúdo real em `es`/`pt-BR`, ou (b) reduzir a declaração de schema a `pt-PT`+`en`.
- **Verificação:** Schema e conteúdo alinhados.
- **Notes:** Sem indício de progresso desde 2026-07-13.

### 2026-07-27 added — CONTENT — Cadência de publicação parada desde 17 jul
- **Prioridade:** P2 (subida de P3 — o hiato ultrapassou o limiar de 2-3 semanas definido na semana passada)
- **Esforço:** variável
- **Origem:** auditoria semanal 2026-07-27; escalado 2026-08-03
- **Estado:** TODO
- **Descrição:** Sem nenhuma publicação editorial nova (post de blog ou estudo) desde 15 jul (post) / 13 jul (estudo) — confirmado de novo em 2026-08-03, agora ~19 dias. A actividade de 27-31 jul no repositório do site foi inteiramente técnica/produto (schema, imagens, Content-Signal, IndexNow) — nenhuma delas é conteúdo editorial novo, apesar de ser trabalho real e valioso.
- **Acção:** Publicar pelo menos 1 post ou estudo novo. Se a prioridade da equipa continuar a ser técnica/produto por decisão consciente, registar essa decisão explicitamente em vez de deixar o item a subir de prioridade silenciosamente.
- **Verificação:** `sitemap.xml`/histórico de deploys mostra conteúdo editorial novo (não apenas re-render ou feature) na próxima execução.
- **Notes:** Escalado de P3 para P2 porque o próprio backlog da semana passada definiu 2-3 semanas como o limiar de escalada, e esta execução confirma que o hiato já o ultrapassou.

### 2026-07-27 added — STRATEGIC — destaque.ai ausente dos próprios roundups "melhores agências" de concorrentes
- **Prioridade:** P2
- **Esforço:** 2-4h (outreach)
- **Origem:** auditoria semanal 2026-07-27 (pesquisa directa ao roundup da AISO Hub)
- **Estado:** TODO
- **Descrição:** AISO Hub publica "Best SEO & AI Search Optimization Agencies in Portugal/Lisbon" — destaque.ai não figura em nenhuma das listas confirmadas em 27 jul. Não re-verificado esta semana.
- **Acção:** Identificar 3-5 roundups/directórios do género e fazer pitch directo de inclusão, com os estudos originais já publicados como prova de credibilidade.
- **Verificação:** Pelo menos 1 menção/inclusão nova confirmada num roundup de terceiros.
- **Notes:** Sem progresso de outreach conhecido.

### 2026-08-03 added — GEO — Re-testar/confirmar scan de preparação para agentes (isitagentready.com) e negociação de conteúdo em markdown
- **Prioridade:** P3
- **Esforço:** 1-2h
- **Origem:** auditoria semanal 2026-08-03 (mensagem de commit da PR #94, não verificado directamente por esta auditoria)
- **Estado:** TODO
- **Descrição:** A PR #94 (Content-Signal, índice de Agent Skills, negociação de conteúdo em markdown) cita uma pontuação inicial de 21/100 num scan externo (isitagentready.com) como motivação, e a própria negociação de conteúdo (`.md`/`Accept: text/markdown`) não foi testada directamente nesta execução.
- **Acção:** Correr o scan isitagentready.com de novo para confirmar a pontuação actual pós-PR #94; testar directamente `GET /blog/<slug>.md` e `GET / ` com `Accept: text/markdown` para confirmar a negociação de conteúdo funciona como descrito.
- **Verificação:** Próxima auditoria reporta uma pontuação própria confirmada (não citada de segunda mão) e confirma o comportamento da negociação de conteúdo.
- **Notes:** Baixo risco, mais uma questão de fechar a verificação do que de suspeita de problema.

### 2026-07-20 added — SCHEMA — Casos de estudo sem schema de resultado verificável
- **Prioridade:** P3
- **Esforço:** variável (schema) — a parte de verificação de conteúdo está concluída
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** IN PROGRESS (actualizado 2026-08-03 — `author` (Organization) adicionado aos 3 casos via PR #93; schema de resultado estruturado continua por fazer)
- **Descrição:** Os 3 casos de estudo continuam sem `Review`, `AggregateRating`, nem tipo com resultado estruturado, apesar de terem métricas T0/T1 concretas e datadas em texto corrido. Confirmado de novo em 2026-08-03 no caso `/casos/saas-facturacao-b2b`: "anonimizado" continua só em metadata, não no corpo visível do artigo.
- **Acção:** Considerar adicionar dados estruturados de resultado (`Claim`/`Dataset` ou tipo dedicado). Avaliar se a divulgação de anonimização deve também aparecer no corpo visível do artigo.
- **Verificação:** Próxima auditoria confirma se algum schema de resultado foi adicionado e se a divulgação de anonimização passou a estar visível no corpo.
- **Notes:** `author` (Organization) já resolvido via PR #93 — progresso parcial genuíno.

### 2026-07-13 added — ENTITY — Google Business Profile para o endereço de Lisboa
- **Prioridade:** P2
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Sem Google Business Profile correspondente verificado ao endereço físico de Lisboa usado como sinal de credibilidade.
- **Acção:** Criar/reivindicar Google Business Profile com NAP idêntico ao schema.
- **Verificação:** Perfil aparece em pesquisa Google pelo nome da empresa + "Lisboa".
- **Notes:** Prioridade mais baixa dado o modelo de negócio ser B2B remoto.

### 2026-07-13 added — SOCIAL — Sem presença em X, GitHub ou Reddit/HN
- **Prioridade:** P3
- **Esforço:** 1 semana (arranque) + contínuo
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` não inclui X/Twitter nem GitHub; sem presença confirmada em Reddit/Hacker News.
- **Acção:** Avaliar arranque de presença mínima e autêntica em Reddit. GitHub só faz sentido se/quando existir algo open-source a publicar.
- **Verificação:** Presença mínima estabelecida e sustentada por 4+ semanas.
- **Notes:** X é opcional.

### 2026-07-13 added — BACKLINKS — Zero cobertura Tier-1 PT encontrada
- **Prioridade:** P3
- **Esforço:** 1 semana+ (horizonte longo)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Nenhuma menção a destaque.ai ou Eduardo Mendonça encontrada em Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo (confirmado até 27 jul; não re-verificado 03 ago).
- **Acção:** Iniciar pipeline de digital PR de forma orgânica, usando os estudos originais como gancho.
- **Verificação:** Primeira peça Tier-1 publicada.
- **Notes:** Expectável para empresa fundada em 2025 — horizonte 3-4, não urgente.

## Items DONE (últimas 4 semanas, por rastreabilidade)

### 2026-07-20 added — GEO — llms.txt não referencia as novas páginas /en/
- **Estado:** DONE (2026-08-03)
- **Descrição:** `/en/about`, `/en/studies` e as 3 traduções de estudos estavam publicados e no `sitemap.xml`, mas não listados em `llms.txt`.
- **Notes:** Resolvido via PR #93 (27-31 jul). `llms.txt` confirmado directamente em 2026-08-03 com secção "English" nova. Mantém-se aqui 4 semanas por rastreabilidade.

### 2026-07-27 added — GEO — hreflang em falta na página pilar /consultoria-geo-portugal e x-default em falta no estudo mais recente
- **Estado:** DONE (2026-08-03) — resolvido parcialmente por implementação, parcialmente por decisão explícita
- **Descrição:** `/consultoria-geo-portugal` não tinha `hreflang`; o estudo mais recente tinha o par `pt-PT`/`en` mas faltava `x-default`.
- **Notes:** O `x-default` foi adicionado aos 3 estudos PT via PR #93, confirmado directamente em 2026-08-03 no estudo amostrado. A parte da página pilar foi resolvida por **decisão explícita**, não por implementação — a mensagem de commit da PR #93 explica que só páginas com contrapartida noutra língua declaram `hreflang` no site, e a página pilar não tem par EN, pelo que declarar `hreflang` sem par seria incorrecto. Esta auditoria aceita essa leitura como razoável e fecha o item, mas regista que não houve mudança de código para essa parte, apenas confirmação de que não era uma lacuna genuína.

### 2026-07-20 added — GEO — Multimodal: primeira ruptura confirmada, mas isolada e sem ImageObject
- **Estado:** DONE (2026-08-03)
- **Descrição:** `/tracker` tinha 12 imagens com `alt` descritivo mas sem `ImageObject`; o estudo e a página pilar continuavam com zero imagens.
- **Notes:** `ImageObject` adicionado às 12 imagens (PR #95) e mais 2 imagens novas com `ImageObject` desde o início (PR #96, total 14) — confirmado no HTML renderizado per mensagem de commit. Estudo e página pilar continuam com zero imagens — não confundir "backlog fechado para o `/tracker`" com "multimodal resolvido sitewide"; ver novo item recomendado em Horizonte 2 do `audit-baseline.md` para estender a outras páginas.

### 2026-07-27 added — MEASUREMENT — Bug de produção no Tracker: /competitors/[id] rebenta para pelo menos um cliente real
- **Estado:** DONE (2026-08-03) — resolvido, não confirmado por commit específico
- **Descrição:** `TypeError: S.services.join is not a function`, rota `/competitors/[id]`, 7 ocorrências, 2 utilizadores, 25 jul.
- **Notes:** Não aparece na lista de 12 grupos de erro dos últimos 7 dias (`mcp__Vercel__get_runtime_errors`, 03 ago). Marcado DONE com ressalva: não se identificou o commit específico que o corrigiu — se reaparecer numa próxima execução, reabrir em vez de assumir recorrência de um problema "novo".

### 2026-07-20 added — CONTENT — Cadência de publicação parada desde 06 jul 2026
- **Estado:** DONE (2026-07-20)
- **Notes:** Resolvido dentro de uma semana em julho — 6 posts + 2 estudos publicados entre 06-17 jul. Mantido aqui por rastreabilidade; nota: um hiato **novo e distinto** (desde 15/13 jul) está registado como item TODO separado acima — não confundir os dois.

### 2026-07-20 added — E-E-A-T — Sem case studies públicos
- **Estado:** DONE (2026-07-20), com ressalva — ver item SCHEMA acima
- **Notes:** 3 casos publicados em `/casos`. Ressalva sobre schema de resultado e divulgação de anonimização tratada como item SCHEMA separado, ainda aberto.

### 2026-07-20 added — SCHEMA — /perguntas não amostrado nesta execução
- **Estado:** DONE (2026-07-27)
- **Notes:** Confirmado `FAQPage`+`Question`+`Answer`+`BreadcrumbList`+`WebPage` (speakable), 26 perguntas declaradas.

### 2026-07-13 added — SCHEMA — Templates não amostrados nesta execução
- **Estado:** DONE (2026-07-20)
- **Notes:** `/servico`, `/sobre`, `/glossario` todos confirmados com schema rico.
