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

_(Actualizado 10 agosto 2026 — quinta execução do Routine. 1 P0 novo: créditos de API esgotados em 3 motores do Tracker — Gemini há mais de 7 semanas, Perplexity e OpenAI desde 03 ago — distinto do incidente de quota SerpApi da semana passada, que parece ter sido resolvido. CONTENT escalado de P2 para P1: hiato editorial chega a 26/28 dias sem resposta pela 2ª escalada consecutiva.)_

### 2026-08-03 added — MEASUREMENT — Tracker: quota SerpApi esgotada + erro de campo DataForSEO, 3 motores degradados agora
- **Prioridade:** P1 (descida de P0 — sintoma agudo não recorreu; DataForSEO continua instável por outra via, ver Notes)
- **Esforço:** 2-4h (diagnóstico) + variável (correcção — pode ser só reposição/upgrade de quota, ou correcção do payload de campo)
- **Origem:** auditoria semanal 2026-08-03 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`, janela 7 dias); revisto 2026-08-10
- **Estado:** IN PROGRESS
- **Descrição:** Desde 31 jul 15h UTC, chamadas `copilot_bing/dataforseo` (augmented) falhavam com `Invalid Field: 'language_name'`/`'language_code'`. A SerpApi ficou sem quota a partir de 03 ago 07:58 UTC, afectando `copilot`, `google_ai_mode` e `google_aio`. **Actualização 2026-08-10:** nenhuma destas duas assinaturas exactas de erro recorreu na janela de 7 dias desta auditoria — parece resolvido (quota reposta ou corrigido), mas não confirmado por commit. A DataForSEO continua a falhar por causa própria e distinta: `Internal SE Server Error`, 18 ocorrências, a mais recente às 07:54 UTC de hoje (10 ago) — durante esta própria auditoria. Surgiu também um erro novo e isolado no mesmo integrador SerpApi (`Copilot sem texto na resposta SerpApi`, 1 ocorrência, hoje) — não confirmado se relacionado.
- **Acção:** Confirmar se o incidente de quota SerpApi foi de facto resolvido (reposição manual ou reset de ciclo) ou se está apenas latente. Diagnosticar a causa do `Internal SE Server Error` recorrente da DataForSEO — se for do lado do fornecedor, considerar contacto com suporte DataForSEO; se for do lado do payload, corrigir.
- **Verificação:** `mcp__Vercel__get_runtime_errors` para o projecto não mostra novas ocorrências de `Internal SE Server Error` num período de 7 dias.
- **Notes:** O incidente agudo original parece ter passado. O que resta é uma instabilidade de fornecedor de baixo volume mas persistente — ver também o novo item P0 desta semana sobre créditos de API esgotados, que é hoje o problema maior do Tracker.

### 2026-08-10 added — MEASUREMENT — Tracker: créditos de API esgotados em 3 motores (Gemini 7+ semanas, Perplexity, OpenAI)
- **Prioridade:** P0
- **Esforço:** 30min-1h (top-up de billing) — o mais barato de toda esta lista
- **Origem:** auditoria semanal 2026-08-10 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** Três motores de IA usados pelo Tracker estão a falhar por falta de crédito pré-pago na conta do fornecedor, não por erro de código: **Gemini** (`RESOURCE_EXHAUSTED — Your prepayment credits are depleted`, 30 ocorrências, **activo desde 23 jun 2026, última ocorrência confirmada 05 ago — mais de 7 semanas sem resolução**, afecta `gemini/gemini-3.5-flash` em modo knowledge e augmented); **Perplexity** (`401 — exceeded your current quota`, 42 ocorrências, 03-05 ago, afecta `perplexity/sonar-pro` augmented); **ChatGPT/OpenAI** (`429 — no credits remaining`, 21 ocorrências, 03 ago, afecta `chatgpt/gpt-5.6-luna` knowledge e augmented).
- **Acção:** Repor/aumentar o crédito pré-pago nas contas Google AI Studio (Gemini), Perplexity API e OpenAI platform usadas pelo Tracker. Considerar alerta automático de saldo baixo para não repetir um hiato de 7 semanas.
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências de `RESOURCE_EXHAUSTED`/`401`/`429` de crédito para estes 3 motores num período de 7 dias; confirmar com uma corrida de teste em cada um.
- **Notes:** O caso do Gemini é o mais grave por duração (7+ semanas) mas também o mais barato de resolver de toda esta auditoria — não precisa de diagnóstico, só de um cartão de crédito. Distinto do item de quota SerpApi/DataForSEO acima (fornecedores de dados de busca, não de LLM).

### 2026-08-03 added — MEASUREMENT — Tracker: BING_OAUTH_CLIENT_ID em falta
- **Prioridade:** P2
- **Esforço:** 30min-1h
- **Origem:** auditoria semanal 2026-08-03 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`)
- **Estado:** TODO
- **Descrição:** `Error: BING_OAUTH_CLIENT_ID env is missing`, rota `/api/integrations/bing/connect`, 4 ocorrências, 1 utilizador, 31 jul 11:11-11:18 UTC.
- **Acção:** Configurar a variável de ambiente em falta no projecto Vercel `destaque-ai-tracker`.
- **Verificação:** Rota `/api/integrations/bing/connect` deixa de gerar este erro.
- **Notes:** Esforço pequeno, impacto limitado a integração de conta Bing por utilizador — não bloqueia o motor de auditoria em si. **Actualização 2026-08-10:** sem ocorrência nova na janela de 7 dias desta auditoria, mas a janela não cobre a data original (31 jul); não confirmável como resolvido.

### 2026-08-03 added — PROCESS — Estrutura duplicada do repositório do skill: dois caminhos divergentes, `news-feed.md` fragmentado
- **Prioridade:** P1
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-08-03 (comparação directa de `git log`/árvores entre `skills/geo-seo-aeo-master/` e a raiz do repositório)
- **Estado:** TODO
- **Descrição:** O repositório tem duas cópias não sincronizadas da estrutura do skill: o caminho canónico `skills/geo-seo-aeo-master/` (referenciado pelas URLs raw em `models.md`/`prompts.md`) e uma árvore paralela na raiz (`daily-agent/`, `destaque-ai-self/`, `radar-geo/`, `competitor-monitor/`, `routines/`). A rotina diária tem escrito, sessão após sessão, ora num caminho ora no outro — `skills/geo-seo-aeo-master/daily-agent/news-feed.md` pára em 28 jul; `daily-agent/news-feed.md` (raiz) tem 29 jul-03 ago mas falta 15-28 jul. O histórico de notícias está fragmentado entre os dois ficheiros, nenhum tem o registo completo. A árvore `destaque-ai-self/` da raiz está morta desde 01 jun 2026 (relicário de antes da reorganização para `skills/`) — não está a ser escrita activamente, mas continua a existir e pode confundir uma execução futura que não verifique com cuidado qual caminho é o vivo.
- **Acção:** Decidir um único caminho canónico (aparenta ser `skills/geo-seo-aeo-master/`, dado ser o referenciado pelas URLs raw usadas por Deck Builder/Tracker), consolidar todo o histórico de `news-feed.md` num único ficheiro sem duplicar nem perder entradas, apagar ou arquivar explicitamente a árvore morta `destaque-ai-self/` da raiz para não confundir execuções futuras, e reforçar a instrução da rotina diária para nunca escrever fora do caminho canónico (a instrução já existe em texto — o problema é execução, não especificação).
- **Verificação:** Uma única árvore de skill no repositório; `git log` mostra escrita consistente sempre no mesmo caminho nas próximas 2-3 semanas.
- **Notes:** Risco real, não cosmético — se uma execução futura ler o `news-feed.md` errado (ou o `destaque-ai-self/` morto da raiz), produz uma auditoria com contexto de mercado desactualizado ou, no limite, sobrescreve trabalho novo com um formato de 01 jun 2026. **Actualização 2026-08-10:** fóssil da raiz confirmado inalterado (ainda 1 único commit, 01 jun); nenhum `news-feed.md` duplicado encontrado desta vez — a migração de 06 ago manteve-se estável. Consolidação/remoção formal ainda não feita.

### 2026-07-27 added — STRATEGIC — Peer set desactualizado face ao mercado; novos entrantes PT não classificados
- **Prioridade:** P1 (mantida — 5ª semana em aberto, evidência reforçada de novo)
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-07-20 (teste multi-motor em modo augmented); reforçado 2026-07-27, 2026-08-03 e 2026-08-10
- **Estado:** TODO
- **Descrição:** Studio.351, AISO Hub, Infinidata, 3HASH (par já formal), AP Portugal e UniK SEO continuam a aparecer de forma estável em pesquisas independentes semana após semana. **Actualização 2026-08-10:** dois concorrentes reclamam liderança de categoria de forma explícita em prompts distintos — AISO Hub ("Portugal's first agency fully dedicated to AI search optimization", em `GD2`) e UniK SEO ("Agência de SEO e GEO Líder em Portugal", em `V5`, o prompt mais alinhado ao ICP de SaaS PT com M&A). Nenhum dos dois foi ainda formalmente classificado.
- **Acção:** Passar Studio.351, AISO Hub, Infinidata, AP Portugal e UniK SEO pelo teste de 4 perguntas de `competitor_filtering.md` §1; classificar em `peer` ou nas categorias não-par de §3; actualizar o conjunto de pares se algum passar.
- **Verificação:** `competitor_filtering.md` reflecte um conjunto de pares revisto com data de revisão actualizada.
- **Notes:** 5ª semana em aberto. AISO Hub e UniK SEO são agora os dois candidatos mais fortes por reclamarem liderança de categoria explicitamente, não apenas por aparecerem.

### 2026-07-13 added — GEO — Routine sem acesso ao teste multi-motor ao vivo
- **Prioridade:** P1 (5ª semana em aberto — deixa de ser tratável como contratempo pontual)
- **Esforço:** 1 dia (trabalho de infraestrutura, fora do site)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O ambiente de execução deste Routine não tem sessão de browser autenticada nem integração de API a ChatGPT, Perplexity, Google AI Mode ou Bing Copilot. Claude continua o único motor com dado real (31 prompts × modo knowledge, 21 × modo augmented, prompts diferentes a cada semana). **Agravante que persiste:** o próprio Visibility Tracker, que testaria estes motores, tem esta semana créditos de API esgotados em 3 motores (ver item MEASUREMENT P0 novo) — mesmo que este Routine ganhasse acesso de leitura ao Tracker hoje, herdaria dados parcialmente degradados.
- **Acção:** Ligar este Routine a uma via de acesso real a pelo menos os 5 motores mandatórios — via API onde exista, via automação de browser autenticada onde não exista. Alternativa continua a ser dar a este Routine acesso de leitura à base de dados/API do Tracker — mas só depois de resolver o item P0 de créditos, para não herdar dados degradados.
- **Verificação:** Próxima execução semanal reporta pelo menos 3 dos 5 motores mandatórios testados com dado real (não N/D).
- **Notes:** 5ª semana sem progresso neste item específico.

### 2026-07-13 added — TECH — CSP em modo Report-Only, não enforced
- **Prioridade:** P1 (5ª semana sem progresso)
- **Esforço:** 2h-1 dia
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O header `content-security-policy-report-only` está presente e bem configurado, mas em modo Report-Only não bloqueia nada de facto. Confirmado byte-idêntico na política (mesmo conteúdo do header) nas execuções de 2026-07-20, 2026-07-27, 2026-08-03 e 2026-08-10.
- **Acção:** Confirmar que a política actual não quebra nenhum recurso legítimo, depois substituir o header por `Content-Security-Policy` (enforced) com a mesma política.
- **Verificação:** `curl -sI https://www.destaque.ai/` devolve `content-security-policy` (não `-report-only`) e o site continua a funcionar sem erros de consola relacionados com CSP.
- **Notes:** Baixo risco. Sem progresso em 5 semanas.

### 2026-07-13 added — ENTITY — Confirmar perfis sameAs populados
- **Prioridade:** P1 (não re-verificado esta semana — fora da amostra mais estreita de 2026-08-03)
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` declara LinkedIn, Crunchbase, Clutch e Wikidata (Q140043087). Bloqueio de rede de saída deste ambiente impede verificação directa de qualquer URL externo. **Actualização 2026-08-10:** reconfirmado directamente no JSON-LD da homepage (extracção programática, não amostra visual); adicionalmente descoberto `Person` do fundador com `sameAs` a LinkedIn pessoal — mais um URL externo por verificar. `WebFetch` a `www.wikidata.org` tentado nesta execução, falhou com `EGRESS_BLOCKED` explícito.
- **Acção:** Verificar manualmente cada um dos 5 perfis agora conhecidos (4 da Organization + 1 do Person) fora desta sessão; completar campos em falta no Wikidata; confirmar página de LinkedIn tem posts recentes.
- **Verificação:** Cada URL abre e mostra conteúdo correcto e actual.
- **Notes:** O schema em si está confirmado e é mais rico do que se pensava; o que falta é só a verificação externa, bloqueada por rede em todas as 5 execuções até agora.

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
- **Prioridade:** P1 (subida de P2 — 2ª escalada consecutiva; o pedido explícito de decisão registada da semana passada também não foi atendido)
- **Esforço:** variável
- **Origem:** auditoria semanal 2026-07-27; escalado 2026-08-03 e 2026-08-10
- **Estado:** TODO
- **Descrição:** Sem nenhuma publicação editorial nova (post de blog ou estudo) desde 15 jul (post) / 13 jul (estudo). **Actualização 2026-08-10:** agora 26/28 dias. As seis PRs mergeadas esta semana (#108-#113) foram todas de produto/copy/arquitectura da homepage — nenhuma é conteúdo editorial novo. O pedido da semana passada — publicar, ou registar explicitamente a decisão de não publicar — não foi atendido em nenhuma das duas formas.
- **Acção:** Publicar pelo menos 1 post ou estudo novo. Se a prioridade da equipa continuar a ser produto por decisão consciente, registar essa decisão explicitamente — este pedido já foi feito duas vezes.
- **Verificação:** `sitemap.xml`/histórico de deploys mostra conteúdo editorial novo (não apenas re-render ou feature) na próxima execução.
- **Notes:** Escalado de P2 para P1 porque o hiato ultrapassa agora um mês corrido e a auditoria já pediu duas vezes, sem resposta de nenhum tipo, um mínimo de reconhecimento explícito.

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

### 2026-08-10 added — TECH — Performance/CWV sem dado há 5 semanas; via alternativa confirmada desligada
- **Prioridade:** P1
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-08-10 (PSI `HTTP 429` confirmado de novo; `mcp__Vercel__get_web_analytics` no projecto `destaque-ai`)
- **Estado:** TODO
- **Descrição:** PageSpeed Insights devolve `HTTP 429` há 5 semanas consecutivas. A alternativa recomendada em Horizonte 1 de 03 ago (Vercel Web Analytics como proxy de CWV) foi testada nesta execução e devolveu `404 Not Found — "Web Analytics not found"`: não está activada no projecto `destaque-ai`. Este é o primeiro item de backlog formal para esta lacuna — até agora só constava como recomendação de Horizonte 1, repetida sem acção 5 vezes.
- **Acção:** Activar Vercel Web Analytics (ou Speed Insights) no projecto `destaque-ai` no dashboard Vercel — é uma opção de configuração, não requer código. Alternativa: espaçar os pedidos à PSI (ex. 1×/semana em vez de a cada execução) para não esgotar o rate-limit antes de o usar.
- **Verificação:** `mcp__Vercel__get_web_analytics` devolve dados em vez de 404, ou PSI devolve resposta válida na próxima execução.
- **Notes:** Formalizado esta semana porque "recomendação de Horizonte 1" repetida 5 vezes sem se tornar item de backlog rastreável era, na prática, invisível.

### 2026-08-10 added — STRATEGIC — Colisão do termo "GEO" com a indústria de geodesia/topografia em pesquisas genéricas
- **Prioridade:** P2
- **Esforço:** variável (conteúdo)
- **Origem:** auditoria semanal 2026-08-10 (teste multi-motor augmented, `GD1`/`GD6`/`GD7`, parcialmente `V3`/`V4`)
- **Estado:** TODO
- **Descrição:** Em 3 dos 21 prompts mandatórios ("melhor agência de GEO em Portugal", "especialistas em GEO em Portugal", e a versão inglesa), os resultados de pesquisa foram dominados por empresas de geodesia/topografia (Sistopo, Geolayer, Geo21, GeoSurveys, GEOÁREA, GeoPoint, GeoNatural) — zero resultados sobre optimização para IA. `V3`/`V4` mostraram desambiguação errada parcial para IT-outsourcing e consultoria de risco geoespacial, respectivamente. Não há concorrente a "ganhar" estas queries — ninguém do sector de AI search aparece.
- **Acção:** Considerar conteúdo que reforce a associação do termo "GEO" (no sentido de Generative Engine Optimization) à marca — já existe glossário; avaliar se precisa de mais densidade de uso do termo em contexto correcto nas páginas mais genéricas do site.
- **Verificação:** Re-testar os mesmos 3 prompts numa próxima execução; ver se algum resultado relacionado com AI search optimization aparece.
- **Notes:** Achado novo, uma semana de evidência. Regra das duas auditorias antes de propor edição a `engine_playbooks.md`.

### 2026-08-10 added — GEO — llms.txt: falha de fetch distinta do bloqueio de rede geral, não explicada
- **Prioridade:** P3
- **Esforço:** 15-30min
- **Origem:** auditoria semanal 2026-08-10 (`mcp__Vercel__web_fetch_vercel_url`)
- **Estado:** TODO
- **Descrição:** Duas tentativas de fetch a `llms.txt` (apex e `www`) devolveram `"Unable to create shareable URL"` — uma mensagem de erro diferente do `EGRESS_BLOCKED` que afecta o resto da rede externa nesta sessão. `robots.txt` e `sitemap.xml`, pedidos nos mesmos minutos com a mesma ferramenta, funcionaram normalmente.
- **Acção:** Confirmar directamente (browser normal, ou `curl` de uma máquina sem as restrições deste sandbox) que `https://www.destaque.ai/llms.txt` responde 200 com o conteúdo esperado.
- **Verificação:** `llms.txt` confirmado acessível e com o conteúdo esperado.
- **Notes:** Provavelmente uma limitação da ferramenta de fetch desta sessão, não um problema real do site — mas não confirmado, por isso fica registado em vez de assumido. Se recorrer na próxima execução com o mesmo padrão isolado, sobe de prioridade.

### 2026-07-20 added — SCHEMA — Casos de estudo sem schema de resultado verificável
- **Prioridade:** P3
- **Esforço:** variável (schema) — a parte de verificação de conteúdo está concluída
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** IN PROGRESS (actualizado 2026-08-03 — `author` (Organization) adicionado aos 3 casos via PR #93; schema de resultado estruturado continua por fazer)
- **Descrição:** Os 3 casos de estudo continuam sem `Review`, `AggregateRating`, nem tipo com resultado estruturado, apesar de terem métricas T0/T1 concretas e datadas em texto corrido. Confirmado de novo em 2026-08-03 no caso `/casos/saas-facturacao-b2b`: "anonimizado" continua só em metadata, não no corpo visível do artigo.
- **Acção:** Considerar adicionar dados estruturados de resultado (`Claim`/`Dataset` ou tipo dedicado). Avaliar se a divulgação de anonimização deve também aparecer no corpo visível do artigo.
- **Verificação:** Próxima auditoria confirma se algum schema de resultado foi adicionado e se a divulgação de anonimização passou a estar visível no corpo.
- **Notes:** `author` (Organization) já resolvido via PR #93 — progresso parcial genuíno.

### 2026-08-10 added — SCHEMA — FAQPage da homepage é markup inerte para rich results do Google desde 7 mai 2026
- **Prioridade:** P3 (informativo — sem acção urgente)
- **Esforço:** N/A
- **Origem:** `daily-agent/news-feed.md` 2026-08-04 (Search Engine Land — fim do suporte a FAQ rich results); confirmado o markup ainda presente na auditoria de 2026-08-10
- **Estado:** TODO
- **Descrição:** A homepage declara `FAQPage`/`Question`/`Answer` (4 pares na amostra). O Google deixou de suportar rich results de FAQ na SERP desde 7 mai 2026 — o markup não gera erro e continua legível por LLMs directamente no HTML, mas não produz mais nenhum resultado visível no Google.
- **Acção:** Nenhuma correcção necessária. Não recomendar `FAQPage` como alavanca de rich results em conteúdo comercial futuro; o valor do formato pergunta-resposta mantém-se para GEO (ChatGPT/Perplexity continuam a poder extrair estes blocos), só a codificação schema.org perdeu utilidade específica no Google.
- **Verificação:** N/A — item de awareness, não de correcção.
- **Notes:** Cruzado do news-feed per o passo 6 do workflow da rotina ("se houve mudança no mercado que... cria nova urgência"). Aqui é o oposto — remove uma urgência que talvez existisse antes, não cria uma nova.

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
