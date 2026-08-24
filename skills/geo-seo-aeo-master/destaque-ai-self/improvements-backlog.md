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

_(Actualizado 24 agosto 2026 — sexta execução do Routine, mas vs. 10 agosto: a rotina saltou a semana de 17 agosto sem registo do porquê, novo item PROCESS abaixo. CONTENT resolvido por completo — 11 posts novos + 2 páginas-pilar, maior vaga editorial já vista. GEO — llms.txt confirmado a funcionar, resolvido. ENTITY — hreflang confirmado correcto, resolvido. Gemini continua P0, agora 9 semanas. 3 items STRATEGIC novos do teste multi-engine mais extenso já feito (Marco Gouveia, destaque.ia.br, convergência da descrição de entidade).)_

### 2026-08-24 added — PROCESS — Routine semanal saltou a semana de 17 agosto sem registo
- **Prioridade:** P1
- **Esforço:** 1-2h (investigação) + variável (correcção do agendamento/trigger)
- **Origem:** auditoria semanal 2026-08-24 (`git log --grep="^audit:"` — último commit `destaque.ai SINAL self-audit` antes deste é 2026-08-10; a rotina distinta `audit: source-intel` correu normalmente em 10 e 17 ago, confirmando que o agendamento em si funciona para pelo menos uma rotina)
- **Estado:** TODO
- **Descrição:** Não existe nenhum commit `audit: 2026-08-17 destaque.ai SINAL self-audit` no histórico. Esta é a primeira vez desde a baseline de 13 jul que este Routine específico salta uma semana — as outras rotinas semanais (source-intel, competitor-monitor) parecem ter corrido normalmente na mesma janela. Todas as comparações "vs. semana anterior" na auditoria de 24 ago são, na prática, vs. há duas semanas.
- **Acção:** Confirmar se o agendamento (CronCreate ou equivalente) do Routine `destaque-ai-self-audit-weekly` está activo e correctamente configurado para segundas-feiras 09:00 Lisboa; verificar se houve uma falha silenciosa (sessão que não chegou a escrever, ou nunca chegou a correr) em 17 ago.
- **Verificação:** As próximas 2-3 execuções ocorrem em semanas consecutivas sem hiato.
- **Notes:** Risco directo para a comparabilidade de toda a série de `audit-history.md` se se repetir sem ser notado.

### 2026-08-24 added — STRATEGIC — Consultor individual (Marco Gouveia) venceu destaque.ai em 2 recomendações directas
- **Prioridade:** P1
- **Esforço:** 2-4h (classificação + resposta)
- **Origem:** auditoria semanal 2026-08-24 (teste multi-engine augmented, `LR1` e `V4`)
- **Estado:** TODO
- **Descrição:** Em `LR1` ("quem faz auditorias de GEO em Lisboa?"), destaque.ai aparece nos resultados brutos (posição 5/8) mas a resposta sintetizada nomeia só Marco Gouveia (`marcogouveia.pt/consultor-geo`), com preços explícitos. Em `V4` ("que consultor de GEO recomendam para uma fintech portuguesa?"), o mesmo Marco Gouveia é nomeado primeiro, destaque.ai em segundo. Primeira vez que este Routine confirma um consultor individual, não uma agência, a vencer destaque.ai numa recomendação directa — categoria de concorrente distinta das já classificadas.
- **Acção:** Passar Marco Gouveia pelo teste de 4 perguntas de `competitor_filtering.md` §1; avaliar se o padrão de preço explícito na resposta ("a partir de 3.000€") é algo que destaque.ai devia também expor de forma citável.
- **Verificação:** `competitor_filtering.md` reflecte a classificação; re-testar `LR1`/`V4` numa próxima execução.
- **Notes:** Junta-se a AISO Hub/UniK SEO (item já aberto há 6 execuções) e aos novos Luso AI, Infinidata, Latigid encontrados esta semana — lista de candidatos a classificar cresceu de 2 para 6.

### 2026-08-24 added — ENTITY — destaque.ia.br: empresa brasileira de nome quase idêntico, risco de confusão de marca em EN
- **Prioridade:** P2
- **Esforço:** 2-4h (avaliação) + variável
- **Origem:** auditoria semanal 2026-08-24 (teste de descrição de entidade, query EN "what is destaque.ai?")
- **Estado:** TODO
- **Descrição:** A pesquisa pela descrição de destaque.ai em inglês trouxe aos resultados **destaque.ia.br** ("Destaque.ia — Rankeie no Google e seja citado pelo ChatGPT, sem trabalho manual"), uma empresa brasileira não relacionada, com nome quase idêntico e categoria adjacente (SEO/GEO automatizado). Não é uma menção negativa nem alucinada — protocolo de crise não aplicável — mas é um risco real de confusão de marca em pesquisas EN, nunca antes detectado por este Routine.
- **Acção:** Confirmar se destaque.ia.br é uma marca registada ou apenas um domínio activo; avaliar se vale a pena reforçar a distinção (ex. mencionar explicitamente "Lisboa, Portugal" logo no primeiro parágrafo EN, já presente parcialmente).
- **Verificação:** Vigiar se a confusão persiste ou se agrava nas próximas execuções do teste de entidade.
- **Notes:** Baixa urgência por agora — vigilância, não crise.

### 2026-08-24 added — ENTITY/STRATEGIC — Convergência da descrição de entidade por motor: baseline dia 1, "consultoria" não "software"
- **Prioridade:** P1
- **Esforço:** variável — depende se o título/schema já corrigido hoje for suficiente ou se precisa de reforço
- **Origem:** auditoria semanal 2026-08-24 (novo teste per `routines/destaque-ai-self-audit-weekly.md`, métrica introduzida esta semana)
- **Estado:** TODO
- **Descrição:** Horas depois de o founder corrigir o título por omissão do site (de "com método" para "software de visibilidade em IA", em resposta a uma AI Overview da Google que descrevia destaque.ai como "consultoria"), o primeiro teste desta métrica nova confirma o mesmo problema em Claude augmented: PT e EN classificam destaque.ai como "consultoria"/"consultancy", não como empresa de software; a versão EN nem sequer menciona o Visibility Tracker.
- **Acção:** Acompanhar semana a semana (a correcção de hoje ainda não tinha tido tempo de propagar no momento deste teste — esperado no dia 1). Se "consultoria" persistir para além de 2-3 semanas, investigar se é preciso reforçar além do título (`Organization.@type`, descrição do schema, primeiro parágrafo visível de cada página).
- **Verificação:** Próximas 2-3 execuções mostram convergência crescente para "empresa de software" nas respostas testadas.
- **Notes:** Ponto de partida da série, não uma falha — mas cross-valida de forma independente o problema que o founder já tinha visto em produção no mesmo dia.

### 2026-08-03 added — MEASUREMENT — Tracker: quota SerpApi esgotada + erro de campo DataForSEO, 3 motores degradados agora
- **Prioridade:** P1 (descida de P0 — sintoma agudo não recorreu; DataForSEO continua instável por outra via, ver Notes)
- **Esforço:** 2-4h (diagnóstico) + variável (correcção — pode ser só reposição/upgrade de quota, ou correcção do payload de campo)
- **Origem:** auditoria semanal 2026-08-03 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`, janela 7 dias); revisto 2026-08-10
- **Estado:** IN PROGRESS
- **Descrição:** Desde 31 jul, chamadas `copilot_bing/dataforseo` (augmented) falham com `Invalid Field: 'language_name'`/`'language_code'`. A auditoria de 10 ago tinha registado esta assinatura como "não recorreu, parece resolvido" — **actualização 2026-08-24: a leitura estava errada, ou o problema voltou.** 54 ocorrências confirmadas entre 1 e 24 ago, a mais recente durante esta própria auditoria — é hoje o erro mais frequente do Tracker. Mais um erro distinto e menor no mesmo integrador: `Internal SE Server Error`, 9 ocorrências desde 31 jul.
- **Prioridade:** P1 (subida de P1 — regressão confirmada, não mais um resíduo de baixo volume)
- **Acção:** Corrigir o payload que envia `language_name`/`language_code` num formato inválido para a DataForSEO — este não é um problema de quota, é um erro de campo recorrente há mais de 3 semanas.
- **Verificação:** `mcp__Vercel__get_runtime_errors` para o projecto não mostra novas ocorrências de `Invalid Field: 'language_name'` num período de 7 dias.
- **Notes:** A "resolução" registada em 10 ago não se confirmou — lição para não marcar um erro como resolvido só por ausência numa única janela de 7 dias sem uma segunda confirmação.

### 2026-08-10 added — MEASUREMENT — Tracker: crédito de API esgotado no Gemini, 9 semanas
- **Prioridade:** P0
- **Esforço:** 30min-1h (top-up de billing) — o mais barato de toda esta lista
- **Origem:** auditoria semanal 2026-08-10 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`, janela 7 dias); reconfirmado 2026-08-24
- **Estado:** TODO
- **Descrição:** **Gemini** (`RESOURCE_EXHAUSTED — Your prepayment credits are depleted`) falha por falta de crédito pré-pago na conta do fornecedor, não por erro de código — afecta `gemini/gemini-3.5-flash` em modo knowledge e augmented. Activo desde 23 jun 2026; ocorrência mais recente confirmada 07:49 UTC de 24 ago 2026, **durante a própria auditoria — nove semanas sem resolução**. **Actualização 2026-08-24:** os dois motores irmãos deste item (Perplexity, OpenAI/ChatGPT, ambos por crédito esgotado) já não aparecem nos grupos de erro dos últimos 7 dias — resolução provável, não confirmada por commit; o Gemini é agora o único remanescente.
- **Acção:** Repor/aumentar o crédito pré-pago na conta Google AI Studio (Gemini) usada pelo Tracker. Considerar ligar isto ao cron `ops-health` (mergeado 24 ago) como verificação de saldo, não só de auditorias em falta.
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências de `RESOURCE_EXHAUSTED` para o Gemini num período de 7 dias; confirmar com uma corrida de teste.
- **Notes:** O item mais antigo em aberto de toda a auditoria (9 semanas) e também o mais barato de resolver — sinalizado como tal em pelo menos 3 execuções consecutivas (10 ago, 24 ago) sem acção. Distinto do item de DataForSEO abaixo (fornecedor de dados de busca, não de LLM).

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

### 2026-08-10 added — TECH — Performance/CWV sem dado; Vercel Web Analytics confirmado desligado
- **Prioridade:** P1
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-08-10; reconfirmado 2026-08-24
- **Estado:** TODO
- **Descrição:** Sem via de medição de CWV há várias semanas. `mcp__Vercel__get_web_analytics` no projecto `destaque-ai` reconfirmado em 24 ago (desta vez com parâmetros de data no formato correcto) a devolver `404 Not Found — "Web Analytics not found"` — a funcionalidade continua desligada. PageSpeed Insights não foi sequer tentável nesta sessão em 24 ago (sem via de acesso disponível pelas ferramentas desta execução).
- **Acção:** Activar Vercel Web Analytics (ou Speed Insights) no projecto `destaque-ai` no dashboard Vercel — é uma opção de configuração, não requer código.
- **Verificação:** `mcp__Vercel__get_web_analytics` devolve dados em vez de 404, ou PSI devolve resposta válida na próxima execução.
- **Notes:** Reconfirmado desligado pela 2ª vez com prova formal (não apenas repetição da recomendação de Horizonte 1).

### 2026-08-10 added — STRATEGIC — Colisão do termo "GEO" com a indústria de geodesia/topografia em pesquisas genéricas
- **Prioridade:** P2
- **Esforço:** variável (conteúdo)
- **Origem:** auditoria semanal 2026-08-10 (teste multi-motor augmented, `GD1`/`GD6`/`GD7`, parcialmente `V3`/`V4`); **reconfirmado 2026-08-24 em `GD6` e `V3`**
- **Estado:** TODO
- **Descrição:** **Confirmado pela 2ª auditoria consecutiva.** Em 24 ago, `GD6` ("quem são os especialistas em GEO em Portugal?") voltou a devolver resultados dominados por empresas de geodesia/topografia (Sistopo, GEOÁREA, Geolayer, Geo21, GeoSurveys) — zero resultados de AI search optimization; `V3` mostrou uma variante nova da mesma ambiguidade, com o próprio motor de pesquisa a assinalar explicitamente incerteza sobre se "GEO" significava Generative Engine Optimization ou "Geographic Expansion Outsourcing". Não há concorrente a "ganhar" estas queries — ninguém do sector de AI search aparece em nenhuma das duas semanas.
- **Acção:** Considerar conteúdo que reforce a associação do termo "GEO" (no sentido de Generative Engine Optimization) à marca — já existe glossário; avaliar se precisa de mais densidade de uso do termo em contexto correcto nas páginas mais genéricas do site.
- **Verificação:** Re-testar os mesmos prompts numa próxima execução.
- **Notes:** Regra das duas auditorias satisfeita para o padrão em si (é um achado de conteúdo/mercado, não uma alavanca de motor — não se aplica directamente a uma edição de `engine_playbooks.md`, que é sobre mecânica de motor, não sobre ambiguidade de termo de pesquisa).

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

### 2026-07-27 added — CONTENT — Cadência de publicação parada desde 17 jul
- **Estado:** DONE (2026-08-24)
- **Descrição:** Hiato editorial escalado três vezes consecutivas (27 jul, 03 ago, 10 ago), chegando a 26/28 dias sem publicação.
- **Notes:** Resolvido com folga — 11 posts novos entre 10 e 23 ago, mais duas páginas-pilar novas (`/agencia-geo`, `/playbook`). A maior vaga de publicação editorial já vista por este Routine. Ver `audit-baseline.md` Secção 8.

### 2026-08-10 added — GEO — llms.txt: falha de fetch distinta do bloqueio de rede geral
- **Estado:** DONE (2026-08-24)
- **Descrição:** Duas execuções (10 ago, e implicitamente antes) não conseguiram confirmar `llms.txt` por uma falha de fetch específica desta sessão (`"Unable to create shareable URL"`).
- **Notes:** Confirmado esta semana como falha da ferramenta desta sessão, não do site — `llms.txt` funciona, é rico e bem estruturado (resumo por secção, secção EN própria, negociação de conteúdo em markdown documentada). Ver `audit-baseline.md` Secção 7.

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
