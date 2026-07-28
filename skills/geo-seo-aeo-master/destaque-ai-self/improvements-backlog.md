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

_(Actualizado 27 julho 2026 — terceira execução do Routine. Sem P0: nenhum achado desta auditoria quebra algo fundamental para o site de marketing; há 1 P1 novo, mas no produto Tracker, não no site.)_

### 2026-07-27 added — MEASUREMENT — Bug de produção no Tracker: `/competitors/[id]` rebenta para pelo menos um cliente real
- **Prioridade:** P1
- **Esforço:** 1-2h
- **Origem:** auditoria semanal 2026-07-27 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`)
- **Estado:** TODO
- **Descrição:** `TypeError: S.services.join is not a function`, rota `/competitors/[id]`, 7 ocorrências, 2 utilizadores distintos, 25 jul 2026 17:00–17:16 UTC, último deployment antes da correcção. Afecta uma página vista por um cliente real (dossiê de concorrente), não um caminho interno/admin.
- **Acção:** Identificar o campo `services` que deixou de ser array (provavelmente uma migração de dados ou um novo tipo de resposta da API de um LLM que mudou de formato) e corrigir o `.join()` para tolerar o tipo real; adicionar teste de regressão para a rota.
- **Verificação:** `mcp__Vercel__get_runtime_errors` para o projecto não mostra novas ocorrências deste erro após o deploy da correcção.
- **Notes:** Descoberto porque esta auditoria verificou, pela primeira vez, `mcp__Vercel__list_projects`/`get_runtime_errors` para além do site principal — ver item MEASUREMENT "Stack de medição" abaixo para o contexto completo desta descoberta.

### 2026-07-27 added — MEASUREMENT — Rate-limit recorrente da Mistral no motor de auditoria do Tracker, desde 23 jun
- **Prioridade:** P2
- **Esforço:** 2-4h (diagnóstico) + variável (correcção — pode ser só aumento de quota/plano ou backoff mais robusto)
- **Origem:** auditoria semanal 2026-07-27 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`)
- **Estado:** TODO
- **Descrição:** `[audit-engine] mistral/mistral-large-latest (knowledge) failed: API error occurred: Status 429` — primeira ocorrência registada 23 jun 2026, última 27 jul 2026 (data desta auditoria) — mais de um mês de degradação intermitente da cobertura de medição num dos 7 motores que o Tracker testa. A PR mais recente do produto (#171, 25 jul) já introduziu um aviso de cobertura parcial no dashboard quando isto acontece, mas a causa raiz (quota/rate-limit da Mistral) continua por resolver.
- **Acção:** Confirmar o plano/quota actual da API Mistral usada pelo Tracker; considerar backoff exponencial com retry, ou upgrade de plano se o volume de chamadas justificar.
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências deste erro específico num período de 7 dias.
- **Notes:** A equipa já tinha identificado o sintoma (o aviso de cobertura parcial da PR #171 é a prova) — este item é sobre a causa, não sobre o sintoma, que já está mitigado no produto.

### 2026-07-20 added — STRATEGIC — Peer set desactualizado face ao mercado; novos entrantes PT não classificados
- **Prioridade:** P1 (mantida — 3ª semana em aberto, evidência reforçada)
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-07-20 (teste multi-motor em modo augmented); reforçado 2026-07-27
- **Estado:** TODO
- **Descrição:** O teste multi-motor em modo augmented identificou pelo menos 4 nomes portugueses com posicionamento explícito de GEO/AEO — Studio.351, AISO Hub, Infinidata, LPM — a aparecer repetidamente em resultados reais para as mesmas queries de descoberta que a destaque.ai visa, e nenhum foi ainda avaliado pelo teste formal de 4 perguntas de `references/competitor_filtering.md`. Só 3HASH está formalmente classificado como par. **Actualização 2026-07-27:** pesquisas independentes desta semana reconfirmaram Studio.351, Infinidata, AISO Hub e Latigid como presenças estáveis (não ruído de uma corrida) — Studio.351 e Infinidata apareceram de novo em `LR1` ("quem faz auditorias de GEO em Lisboa?"). AISO Hub confirma-se com evidência mais forte ainda: descreve o próprio serviço como "AISO Audit / AISO Optimize / AISO Monitor", arquitectura "entity-first", foco B2B SaaS — e publica os seus próprios roundups "melhores agências" nos quais destaque.ai não figura (ver item STRATEGIC de roundups abaixo).
- **Acção:** Passar Studio.351, AISO Hub, Infinidata e LPM pelo teste de 4 perguntas (mesmo buyer / mesmo JTBD / mesmo momento / substitutibilidade ≥70%); classificar em `peer` ou nas categorias não-par de `competitor_filtering.md` §3; actualizar o conjunto de pares se algum passar.
- **Verificação:** `competitor_filtering.md` reflecte um conjunto de pares revisto com data de revisão actualizada.
- **Notes:** AISO Hub continua o candidato mais forte — duas semanas de evidência acumulada, sem classificação formal. Vale a pena resolver este item antes da próxima execução para não deixar o Tracker a medir SoV contra um conjunto de pares desactualizado.

### 2026-07-20 added — GEO — Multimodal: primeira ruptura confirmada, mas isolada e sem `ImageObject`
- **Prioridade:** P2
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-07-20; actualizado 2026-07-27
- **Estado:** IN PROGRESS (actualizado 2026-07-27 — antes TODO)
- **Descrição:** **Resolvido parcialmente esta semana**: `/tracker` ganhou 12 imagens reais com `alt` descritivo — primeira ruptura do padrão "zero imagens sitewide" em três auditorias. Mas nenhuma tem schema `ImageObject`, e as duas páginas mais ricas em dados citáveis — o estudo de 2.205 respostas e a nova página pilar `/consultoria-geo-portugal` — continuam com zero imagens, confirmado de novo esta semana.
- **Acção:** Adicionar `ImageObject` (`caption`, `description`, `contentUrl` absoluto) às 12 imagens já publicadas em `/tracker`. Adicionar pelo menos 1-2 visualizações de dados ao estudo mais recente e à página pilar, com `ImageObject` desde o início.
- **Verificação:** Próxima auditoria confirma pelo menos 1 `ImageObject` em produção e/ou imagens no estudo/página pilar.
- **Notes:** Gemini 3.5+ e GPT-5+ já citam imagens directamente (`references/models.md`) — a superfície de citação continua largamente inexplorada apesar do primeiro passo real.

### 2026-07-13 added — GEO — Routine sem acesso ao teste multi-motor ao vivo
- **Prioridade:** P1 (3ª semana em aberto — deixa de ser tratável como contratempo pontual)
- **Esforço:** 1 dia (trabalho de infraestrutura, fora do site)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O ambiente de execução deste Routine não tem sessão de browser autenticada nem integração de API a ChatGPT, Perplexity, Google AI Mode ou Bing Copilot. O teste em Claude continua o único motor com dado real (31 prompts × modo knowledge, 21 × modo augmented na execução de 2026-07-27, mesma escala da semana anterior) — mas os 4 motores mandatórios em falta continuam completamente por testar, agora há três semanas consecutivas.
- **Acção:** Ligar este Routine a uma via de acesso real a pelo menos os 5 motores mandatórios — via API onde exista (OpenAI, Anthropic, Perplexity, Google) e via automação de browser autenticada onde não exista API de consumidor equivalente (Bing Copilot, Google AI Mode). Alternativa a considerar com prioridade, dado que 2026-07-27 confirmou que o Visibility Tracker (`destaque-ai-tracker`) está em produção e já testa 7 motores (incluindo pelo menos ChatGPT/Perplexity/Gemini/Grok/Mistral/DeepSeek, per `llms.txt`): dar a este Routine acesso de leitura à base de dados/API do Tracker em vez de duplicar o trabalho manualmente via sub-agentes.
- **Verificação:** Próxima execução semanal reporta pelo menos 3 dos 5 motores mandatórios testados com dado real (não N/D).
- **Notes:** Actualização 2026-07-27: o Tracker foi finalmente encontrado (via Vercel, não Supabase — ver item MEASUREMENT) mas esta sessão não tem credenciais de login para o painel em si, só visibilidade de infraestrutura (logs, deployments). Ligar este Routine ao Tracker por API/DB é agora o caminho mais directo para resolver este item, não só uma alternativa entre várias.

### 2026-07-13 added — TECH — CSP em modo Report-Only, não enforced
- **Prioridade:** P1 (3ª semana sem progresso)
- **Esforço:** 2h-1 dia
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O header `content-security-policy-report-only` está presente e bem configurado (`default-src 'self'`, `frame-ancestors 'none'`, etc.) em todas as páginas testadas, mas em modo Report-Only não bloqueia nada de facto. Confirmado byte-idêntico (mesmo header, mesma política, mesmo `etag`/`last-modified`) nas execuções de 2026-07-20 e 2026-07-27.
- **Acção:** Confirmar (via ferramenta de reporting, se configurada, ou por inspecção) que a política actual não quebra nenhum recurso legítimo, depois substituir o header por `Content-Security-Policy` (enforced) com a mesma política.
- **Verificação:** `curl -sI https://www.destaque.ai/` devolve `content-security-policy` (não `-report-only`) e o site continua a funcionar sem erros de consola relacionados com CSP.
- **Notes:** Baixo risco — a política já testada em report-only não terá estado a acumular violações inesperadas há muito tempo, presumivelmente. Sem progresso em 3 semanas.

### 2026-07-13 added — ENTITY — Confirmar perfis sameAs populados
- **Prioridade:** P1 (3ª semana sem progresso)
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` declara LinkedIn, Crunchbase, Clutch e Wikidata (Q140043087). Repetido sem sucesso pela terceira semana — mas 2026-07-27 esclarece a causa: `WebFetch` directo a `wikidata.org/wiki/Q140043087` foi tentado pela primeira vez e devolveu HTTP 403, o mesmo erro que qualquer domínio externo devolve neste sandbox. **Não é falta de indexação do perfil — é uma restrição de rede de saída deste ambiente**, que afecta a verificação de qualquer URL externo, não só Wikidata.
- **Acção:** Verificar manualmente cada um dos 4 perfis (fora desta sessão, que não tem rede de saída para o fazer); completar campos em falta no Wikidata; confirmar página de LinkedIn tem posts recentes.
- **Verificação:** Cada URL abre e mostra conteúdo correcto e actual.
- **Notes:** Actualização 2026-07-27: a causa da não-verificação está agora esclarecida (bloqueio de rede do sandbox, não falha do perfil) — isto não muda a acção necessária, mas evita gastar mais tempo de auditoria a tentar diagnosticar a causa em vez de assumir que precisa de confirmação humana directa.

### 2026-07-13 added — STRATEGIC — Schema declara alcance (ES/EN/pt-BR) que o site não cobre
- **Prioridade:** P2
- **Esforço:** 2h (decisão) + variável conforme opção
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** IN PROGRESS (sem novo progresso em 2026-07-27)
- **Descrição:** `Organization.areaServed` inclui Espanha e Europa; `contactPoint.availableLanguage` inclui `en`, `es`, `pt-BR`. `/en/about` e `/en/studies` (+3 estudos traduzidos) cobrem parcialmente `en`. `es` e `pt-BR` continuam sem qualquer conteúdo correspondente. **Nota nova 2026-07-27:** a página pilar nova `/consultoria-geo-portugal` (prioridade 0.9 no sitemap) também não ganhou par EN nem `hreflang` — o padrão de conteúdo novo continua a nascer só em PT-PT, o que não fecha o gap de alcance declarado, mantém-no estável.
- **Acção:** Decidir entre (a) construir conteúdo real em `es`/`pt-BR` também, ou (b) reduzir a declaração de schema a `pt-PT`+`en` (o que o site cobre hoje).
- **Verificação:** Schema e conteúdo alinhados — ou ambos expandidos, ou a declaração revista.
- **Notes:** Sem indício de que este item esteja a ser activamente trabalhado — 2 semanas sem qualquer movimento adicional para `es`/`pt-BR`, e o conteúdo novo mais recente (`/consultoria-geo-portugal`) reforça o padrão PT-only em vez de o contrariar.

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
- **Estado:** IN PROGRESS (actualizado 2026-07-27 — antes TODO)
- **Descrição:** Não foi possível confirmar de fora se GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance estão configurados. **Actualização 2026-07-27 — resolvido parcialmente**: o Visibility Tracker próprio (`destaque-ai-tracker`) estava, afinal, sempre acessível — a auditoria de 2026-07-13 e 2026-07-20 só verificaram Supabase (onde de facto não há projecto visível) e nunca verificaram os projectos Vercel da conta, onde `destaque-ai-tracker` existe desde 5 jun 2026, em produção (`tracker.destaque.ai`), com cliente real e cadência de desenvolvimento activa. Ver os dois itens MEASUREMENT novos (bug `/competitors/[id]` e rate-limit Mistral) para o que essa descoberta revelou.
- **Acção:** Confirmar directamente (dentro da empresa, com credenciais de login) se GSC, GA4 canal IA e BWT AI Performance estão ligados ao Tracker ou configurados em paralelo. Dar a este Routine acesso de leitura ao Tracker (API/DB) para reduzir o N/D estrutural do teste multi-motor (ver item GEO "Routine sem acesso ao teste multi-motor").
- **Verificação:** Próxima auditoria reporta estado real de GSC/GA4/BWT em vez de N/D.
- **Notes:** Progresso real esta semana, mas por correcção do processo de auditoria (verificar Vercel, não só Supabase), não por mudança no produto em si — o Tracker já existia há quase 2 meses sem ser encontrado.

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
- **Esforço:** variável (schema) — a parte de verificação de conteúdo está concluída
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** IN PROGRESS (actualizado 2026-07-27 — antes TODO)
- **Descrição:** Os 3 casos de estudo (`/casos/*`) usam schema `ItemPage`+`Article`+`BreadcrumbList`+`Thing` — sem `Review`, `AggregateRating`, nem tipo com resultado estruturado. **Actualização 2026-07-27 — verificação de conteúdo concluída por leitura integral do corpo dos 3 casos**: os 3 são explicitamente anonimizados (não nomeiam nenhuma empresa real, usam perfis genéricos "A empresa...", "A clínica..."), mas têm métricas T0/T1 concretas e datadas (ex.: citação 7,3%→29,6%, SoV 5,8%→16,9%) atribuídas a "Exports T0 e T1 do Visibility Tracker" — fonte interna, não verificação de terceiro. A divulgação "anonimizado" só existe em metadata (meta description, OG tags, JSON-LD `description`), não no texto visível do artigo.
- **Acção:** Considerar adicionar dados estruturados de resultado (as métricas T0/T1 já existem em texto corrido — marcá-las como dados, ex. via `Claim`/`Dataset` ou um tipo de resultado dedicado, reforçaria o sinal). Avaliar se a divulgação de anonimização deve também aparecer no corpo visível do artigo, não só em metadata, por transparência com o leitor.
- **Verificação:** Próxima auditoria confirma se algum schema de resultado foi adicionado e se a divulgação de anonimização passou a estar visível no corpo.
- **Notes:** A pergunta original ("nomeiam clientes reais?") está respondida com confiança — não, são anonimizados, com metodologia transparente (secção "Limitações" própria em cada caso). Isto é bom o suficiente para não ser tratado como falha, mas não é o padrão-ouro de E-E-A-T (caso nomeado, verificado por terceiro).

### 2026-07-20 added — GEO — llms.txt não referencia as novas páginas /en/
- **Prioridade:** P3 (2ª semana sem progresso)
- **Esforço:** 15-30min
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** TODO
- **Descrição:** `/en/about` e `/en/studies` (+ 3 estudos traduzidos) continuam publicados e no `sitemap.xml`, mas não estão listados em `llms.txt`, confirmado de novo em 2026-07-27 por leitura directa do ficheiro (estrutura rica com 9 secções, nenhuma delas `/en/`).
- **Acção:** Adicionar uma secção ao `llms.txt` referenciando as páginas `/en/`.
- **Verificação:** `llms.txt` lista `/en/about` e `/en/studies*`.
- **Notes:** Risco baixo — `llms.txt` não é um canal de citação confirmado (`SKILL.md` anti-patterns), mas é higiene de documentação barata de corrigir. Sem progresso em 2 semanas.

### 2026-07-20 added — SCHEMA — /perguntas não amostrado nesta execução
- **Prioridade:** P3
- **Esforço:** 15min (verificação)
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** DONE (2026-07-27)
- **Descrição:** `/perguntas` é nova no `sitemap.xml` (prioridade 0.8) mas não tinha sido amostrada até 2026-07-20.
- **Acção:** Confirmar schema JSON-LD e conteúdo de `/perguntas`.
- **Verificação:** Secção 6/7 da auditoria reporta `/perguntas`.
- **Notes:** Confirmado em 2026-07-27: `FAQPage`+`Question`+`Answer`+`BreadcrumbList`+`WebPage` (speakable), 1×H1, 26 perguntas declaradas no `llms.txt`/navegação (20 confirmadas por extracção directa do HTML nesta execução — pequena discrepância de amostragem sinalizada para reconfirmação, não tratada como gap de conteúdo). Mantém-se aqui 4 semanas por rastreabilidade.

### 2026-07-27 added — GEO — hreflang em falta na página pilar `/consultoria-geo-portugal` e `x-default` em falta no estudo mais recente
- **Prioridade:** P2
- **Esforço:** 30min-1h
- **Origem:** auditoria semanal 2026-07-27
- **Estado:** TODO
- **Descrição:** `/consultoria-geo-portugal` (prioridade 0.9 no sitemap, a segunda página mais prioritária do site a seguir à homepage) não tem `hreflang` nem par EN — inconsistente com o padrão usado em `/en/about`/`/en/studies`. Em paralelo, `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026` tem o par `pt-PT`/`en` mas falta `x-default`, também inconsistente com o padrão dos outros pares bilingues do site.
- **Acção:** Decidir se `/consultoria-geo-portugal` justifica um par EN (é conteúdo de categoria, potencialmente citável internacionalmente); se sim, criar e adicionar `hreflang` completo. Adicionar `x-default` ao par existente do estudo.
- **Verificação:** Ambas as páginas com `hreflang` consistente com o padrão do resto do site (ou justificação explícita de porque não se aplica).
- **Notes:** Risco baixo, esforço pequeno — mais uma questão de consistência do que de impacto directo confirmado.

### 2026-07-27 added — STRATEGIC — destaque.ai ausente dos próprios roundups "melhores agências" de concorrentes
- **Prioridade:** P2
- **Esforço:** 2-4h (outreach)
- **Origem:** auditoria semanal 2026-07-27 (pesquisa directa ao roundup da AISO Hub)
- **Estado:** TODO
- **Descrição:** AISO Hub publica "Best SEO & AI Search Optimization Agencies in Portugal/Lisbon" (conteúdo editorial próprio, não pago) — destaque.ai não figura em nenhuma das listas confirmadas esta semana, nem 3HASH. A lista inclui UniK SEO, Local SEO (localseo.pt), DivSync Digital, Digiton.ai, BeFound, entre outras.
- **Acção:** Identificar 3-5 roundups/directórios do género (agências concorrentes, directórios de marketing digital PT) e fazer pitch directo de inclusão, com o argumento dos estudos originais já publicados como prova de credibilidade.
- **Verificação:** Pelo menos 1 menção/inclusão nova confirmada num roundup de terceiros.
- **Notes:** Não é imprensa Tier-1, mas é uma oportunidade de backlink/mention concreta e de baixo esforço — distinta do item BACKLINKS de Tier-1 PT (horizonte mais longo).

### 2026-07-27 added — CONTENT — Cadência de publicação parada desde 17 jul (vigiar, não ainda urgente)
- **Prioridade:** P3
- **Esforço:** variável
- **Origem:** auditoria semanal 2026-07-27 (histórico de deploys Vercel)
- **Estado:** TODO
- **Descrição:** Sem nenhum deploy de produção ao site principal entre 17 e 27 de julho (~10 dias), depois de um ciclo intenso (6 posts + 2 estudos entre 06–17 jul). Ainda dentro de margem normal de variação de cadência editorial — não é o mesmo padrão do hiato de 06-13 jul (que se resolveu em poucos dias), mas justifica vigilância.
- **Acção:** Nenhuma acção correctiva ainda — reconfirmar na próxima execução se o hiato se prolonga.
- **Verificação:** `sitemap.xml`/histórico de deploys mostra conteúdo novo na próxima execução, ou este item sobe de prioridade se o hiato ultrapassar 2-3 semanas.
- **Notes:** Item de vigilância explícita, mesmo padrão de linguagem usado no `daily-agent/news-feed.md` para sinais que ainda não justificam alarme.

### 2026-07-13 added — SCHEMA — Templates não amostrados nesta execução
- **Prioridade:** P3
- **Esforço:** 30min (verificação)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** DONE (2026-07-20)
- **Descrição:** `/servico`, `/sobre` e `/glossario` não foram amostrados nesta execução (falha intermitente da ferramenta de fetch a criar link de partilha para esses caminhos).
- **Acção:** Confirmar schema JSON-LD nestes 3 templates na próxima execução.
- **Verificação:** Secção 6 da próxima auditoria reporta os 3 templates.
- **Notes:** Todos os 3 amostrados com sucesso em 2026-07-20: `/servico` (`CollectionPage`+`FAQPage`+`Service`×4+`ItemList`+`BreadcrumbList`), `/sobre` (`AboutPage`+`BreadcrumbList`), `/glossario` (`WebPage`+`DefinedTermSet`+`BreadcrumbList`). Mantém-se aqui 4 semanas por rastreabilidade.
