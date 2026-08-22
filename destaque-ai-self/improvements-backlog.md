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
- `PERFORMANCE` — Core Web Vitals, fontes de dados de performance
- `PROCESS` — integridade do próprio repositório/rotina de auditoria

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

_(Actualizado 17 agosto 2026. 1 P0 novo: o repositório GitHub acessível a esta rotina nunca conteve, em todo o seu histórico `git`, o trabalho de semanas anteriores — achado confirmado, não suspeito, desta execução. 2 items movidos para DONE — cadência editorial e `BING_OAUTH_CLIENT_ID`. Item P0 de medição de 03 ago reclassificado para P1: sintoma de crise não reproduzido, causa-raiz ainda activa.)_

### 2026-08-17 added — PROCESS — Repositório GitHub nunca recebeu o histórico de auditorias, `models.md`, `prompts.md` nem `methodology-changelog.md`
- **Prioridade:** P0
- **Esforço:** 1-2h de investigação + decisão de processo
- **Origem:** auditoria semanal 2026-08-17 (`git log`, `git ls-tree` no repositório `dudumendonca84/geo-seo-aeo-master` comparados contra o directório de skill sincronizado localmente)
- **Estado:** TODO
- **Descrição:** O repositório GitHub para onde esta sessão tem acesso de escrita real tem apenas três commits, o mais recente "docs: clarify token setup", e nunca teve `destaque-ai-self/`, `references/models.md`, `references/prompts.md` nem `methodology-changelog.md` — apesar de semanas de auditorias anteriores (lidas a partir de uma cópia local do skill, não deste repositório) relatarem explicitamente "commit + push para main". O `daily-agent/news-feed.md` deste repositório está vazio (só cabeçalho); a cópia local tem 71 entradas até 07 ago. Isto era descrito em notas de metodologia anteriores como uma divergência estrutural suspeita entre "dois caminhos no mesmo repositório" — esta execução confirma algo mais específico e mais grave: o próprio remoto GitHub acessível nunca recebeu o conteúdo, independentemente de qual caminho interno era usado.
- **Acção:** (1) Confirmar, a partir de uma sessão com acesso ao histórico de execuções anteriores desta rotina, se o passo de "commit + push" estava de facto a correr contra este repositório GitHub ou contra outro destino. (2) Se for outro destino, decidir formalmente qual é a fonte de verdade e documentar isso em `SKILL.md`. (3) Se for este repositório e o push estava a falhar silenciosamente, identificar a causa (permissões, branch errada, passo omitido) e corrigir. (4) Depois de identificada a causa, confirmar nas 2-3 execuções seguintes que o conteúdo desta auditoria (escrito nesta execução directamente neste repositório) persiste e é lido correctamente na próxima corrida.
- **Verificação:** Uma execução futura, ao arrancar, encontra neste repositório GitHub o conteúdo escrito pela execução anterior, sem necessidade de recorrer a uma cópia local sincronizada para reconstruir contexto.
- **Notes:** Esta execução escreveu `destaque-ai-self/*`, `references/models.md` e `references/prompts.md` directamente neste repositório pela primeira vez, precisamente para testar esta via. Os seis ficheiros de referência adicionais (`alert_thresholds.md`, `competitor_filtering.md`, `engine_playbooks.md`, `gap_action_mapping.md`, `narrative_templates.md`, `search_modes.md`) e `methodology-changelog.md` **não** foram trazidos — fica como acção de Horizonte 2, fora do âmbito mínimo desta auditoria semanal. Corrigida de passagem uma consequência directa da mesma confusão: os comentários de raw URL no topo de `models.md` e `prompts.md` apontavam para `skills/geo-seo-aeo-master/references/...`, um caminho que nunca existiu neste repositório — corrigidos para o caminho real (`references/...`, na raiz).

### 2026-08-03 added — MEASUREMENT — Tracker: erro de campo DataForSEO activo, fallback SerpApi a absorver o impacto
- **Prioridade:** P1 (reclassificado de P0 — o sintoma de crise, quota SerpApi esgotada, não reapareceu nos erros dos últimos 7 dias)
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-08-03; reconfirmado 2026-08-17 (`mcp__Vercel__get_runtime_errors`, projecto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** `[surfaces] DataForSEO falhou, a cair para SerpApi: Invalid Field: 'language_name'` — 54 ocorrências acumuladas desde 01 ago, **última ocorrência 17 ago 08:09 UTC** (a manhã desta auditoria) — o bug continua activo 2,5 semanas depois da primeira ocorrência. O erro de quota SerpApi esgotada que definiu o P0 de 03 ago não aparece na janela de 7 dias desta execução, nem o erro `BING_OAUTH_CLIENT_ID em falta` (ver item DONE abaixo) — ambos possivelmente corrigidos, sem confirmação por commit específico.
- **Acção:** Corrigir o payload que envia `language_name`/`language_code` inválido para a DataForSEO — a causa mais provável é um valor de configuração de locale que mudou de formato numa integração recente e nunca foi actualizado no lado que chama a DataForSEO.
- **Verificação:** `mcp__Vercel__get_runtime_errors` para o projecto deixa de mostrar este erro específico num período de 7 dias consecutivos.
- **Notes:** O fallback automático para SerpApi está a funcionar bem o suficiente para que o sintoma visível a um cliente seja mínimo — mas é uma dependência de dois fornecedores em vez de um, e cada chamada à DataForSEO que falha é uma chamada desperdiçada antes do fallback.

### 2026-07-27 added — STRATEGIC — Peer set desactualizado face ao mercado; lista de nomes cresceu de forma material esta semana
- **Prioridade:** P1 (mantida — 5ª execução em aberto, lista de nomes candidatos quase duplicou)
- **Esforço:** 3-5h (subiu de 2-4h dado o volume de nomes novos)
- **Origem:** auditoria semanal 2026-07-20 (primeira detecção); reforçado 2026-07-27, 2026-08-03, 2026-08-17
- **Estado:** TODO
- **Descrição:** Studio.351, AISO Hub, Infinidata, 3HASH (par já formal) e AP Portugal já estavam identificados. **Actualização 2026-08-17:** o teste multi-motor desta semana (amostra parcial, 8 prompts, via `WebSearch`) surfaceou sete nomes adicionais não antes rastreados nesta auditoria — Marketing Gabriel, LusoAI, Tráfego Digital, BI4ALL, SEO Labs, Marco Gouveia (consultor individual, com preçário público: auditoria desde 3.000€, consultoria desde 1.000€/mês) e Taptwice Media. Infinidata e UniK SEO reconfirmaram presença recorrente.
- **Acção:** Passar todos os nomes acumulados pelo teste de 4 perguntas de `competitor_filtering.md` §1; classificar em `peer` ou nas categorias não-par de §3; actualizar o conjunto de pares se algum passar.
- **Verificação:** `competitor_filtering.md` reflecte um conjunto de pares revisto com data de revisão actualizada, incluindo os nomes novos desta semana.
- **Notes:** A lista cresceu mais numa execução do que nas quatro anteriores combinadas — sinal de que o método de descoberta (teste multi-motor, mesmo que parcial) está a funcionar, independentemente da limitação de acesso aos motores mandatórios reais.

### 2026-07-13 added — GEO — Routine sem acesso ao teste multi-motor ao vivo
- **Prioridade:** P1 (sem progresso desde pelo menos 2026-07-13)
- **Esforço:** 1 dia (trabalho de infraestrutura, fora do site)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O ambiente de execução deste Routine não tem sessão de browser autenticada nem integração de API a ChatGPT, Perplexity, Google AI Mode, Claude.ai ou Bing Copilot. A execução de 2026-08-17 usou a ferramenta `WebSearch` (Claude com pesquisa web real) como proxy parcial para 8 dos 21 prompts mandatórios — não é equivalente a nenhum dos cinco motores mandatórios, é um sinal direccional de um mecanismo só.
- **Acção:** Ligar este Routine a uma via de acesso real a pelo menos os 5 motores mandatórios — via API onde exista, via automação de browser autenticada onde não exista.
- **Verificação:** Uma execução semanal reporta pelo menos 3 dos 5 motores mandatórios testados com dado real (não N/D nem proxy via ferramenta genérica).
- **Notes:** Sem progresso neste item específico desde a sua criação.

### 2026-07-13 added — TECH — CSP em modo Report-Only, não enforced
- **Prioridade:** P1 (sem progresso há pelo menos 6 semanas de execuções conhecidas)
- **Esforço:** 2h-1 dia
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O header `content-security-policy-report-only` está presente e bem configurado, mas em modo Report-Only não bloqueia nada de facto. Confirmado byte-idêntico na política em 2026-07-20, 2026-07-27, 2026-08-03 e 2026-08-17.
- **Acção:** Confirmar que a política actual não quebra nenhum recurso legítimo, depois substituir o header por `Content-Security-Policy` (enforced) com a mesma política.
- **Verificação:** `curl -sI https://www.destaque.ai/` devolve `content-security-policy` (não `-report-only`) e o site continua a funcionar sem erros de consola relacionados com CSP.
- **Notes:** Baixo risco técnico. Sem progresso há mais de um mês de execuções conhecidas.

### 2026-07-13 added — PERFORMANCE — PageSpeed Insights rate-limited, sem fonte alternativa de CWV
- **Prioridade:** P1 (subida de P2 — 5ª falha consecutiva com a mesma assinatura, deixa de justificar mais tentativas sem mudar de fonte)
- **Esforço:** 1 dia
- **Origem:** auditoria semanal 2026-07-13; escalado 2026-08-17
- **Estado:** TODO
- **Descrição:** PageSpeed Insights devolve HTTP 429 em todas as execuções conhecidas desta auditoria (13/20/27 jul, 03 ago, 17 ago). Performance/CWV está N/D desde o início desta série.
- **Acção:** Substituir PSI como fonte primária por Vercel Speed Insights (já disponível no plano Vercel usado) ou pela CrUX API pública (chave própria, sem o rate-limit partilhado do endpoint público de PSI).
- **Verificação:** Uma execução semanal reporta LCP/INP/CLS reais, não N/D.
- **Notes:** Continuar a tentar PSI sem mudar de estratégia não é razoável ao fim de cinco tentativas idênticas.

### 2026-07-13 added — ENTITY — Confirmar perfis sameAs populados
- **Prioridade:** P1 (não re-verificado esta semana)
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` declara LinkedIn, Crunchbase, Clutch e Wikidata (Q140043087). Bloqueio de rede de saída impede verificação directa; `WebSearch` em 2026-08-17 não devolveu conteúdo indexado directo do item Wikidata.
- **Acção:** Verificar manualmente cada um dos 4 perfis (fora desta sessão); completar campos em falta no Wikidata; confirmar página de LinkedIn tem posts recentes.
- **Verificação:** Cada URL abre e mostra conteúdo correcto e actual.
- **Notes:** Sem alteração de estado há várias semanas — item não re-amostrado, não porque foi resolvido.

### 2026-08-17 added — SCHEMA — Confirmar conteúdo real dos blocos `Person`
- **Prioridade:** P2
- **Esforço:** 30min-1h
- **Origem:** auditoria semanal 2026-08-17 (fetch directo da homepage e da página pilar `/consultoria-geo-portugal`)
- **Estado:** TODO
- **Descrição:** Confirmado por leitura directa do JSON-LD que ambas as páginas amostradas declaram um bloco `Person`, ao lado de `Organization`/`WebSite`/`Service`/`FAQPage` (homepage) e `Article`/`BreadcrumbList` (página pilar). Não inspeccionado se o(s) bloco(s) `Person` têm nome, cargo, credenciais e `sameAs` (LinkedIn/ORCID) preenchidos, ou se são um tipo com campos mínimos.
- **Acção:** Ler o conteúdo completo do(s) bloco(s) `Person` numa próxima execução e confirmar campos preenchidos.
- **Verificação:** Relatório confirma nome, cargo e pelo menos um `sameAs` real no bloco `Person`.
- **Notes:** Se estiver bem preenchido, é um sinal de E-E-A-T genuíno não creditado ainda no scorecard com confiança total.

### 2026-08-17 added — GEO — Investigar colisão de acrónimo GEO/geotecnia e AEO/aduaneiro nos motores reais
- **Prioridade:** P2
- **Esforço:** 1-2h, condicional ao item de acesso multi-motor acima
- **Origem:** auditoria semanal 2026-08-17 (teste via `WebSearch`, prompts `LR1`/`LR2`)
- **Estado:** TODO
- **Descrição:** `LR1` ("quem faz auditorias de GEO em Lisboa?") devolveu, via `WebSearch`, resultados de auditoria geotécnica/geológica; `LR2` ("who does AEO consulting in Lisbon?") devolveu resultados de comércio aduaneiro (Authorised Economic Operator) e uma consultora de TI homónima no Reino Unido. Ambos os prompts são local_recommendation de alta intenção comercial, e ambos estão historicamente entre os prompts onde destaque.ai está ausente.
- **Acção:** Assim que houver acesso real a qualquer um dos 5 motores mandatórios, repetir `LR1`/`LR2` e confirmar se a mesma colisão de acrónimo ocorre. Se confirmada, considerar conteúdo que desambigue "GEO"/"AEO" explicitamente e cedo no texto das páginas dirigidas a estes prompts.
- **Verificação:** Resultado documentado por motor, com confirmação ou refutação da hipótese.
- **Notes:** Pode ser uma particularidade do mecanismo por trás de `WebSearch`, não generalizável aos motores mandatórios — tratar como hipótese, não como facto confirmado.

### 2026-07-27 added — CONTENT — Cadência de publicação
- **Prioridade:** P3 (descida de P2 — hiato resolvido)
- **Esforço:** contínuo, monitorização
- **Origem:** auditoria semanal 2026-07-27; escalado 2026-08-03; resolvido 2026-08-17
- **Estado:** IN PROGRESS (reversão confirmada, sustentação por confirmar)
- **Descrição:** O hiato editorial de ~19-25 dias, escalado para P2 em 03 ago, inverteu-se: dois posts novos confirmados a 10 agosto 2026, mais duas páginas novas (`/auditoria`, `/ai-usage`). Não é ainda evidência de cadência sustentada — uma janela de duas semanas com actividade não confirma um padrão.
- **Acção:** Confirmar nas próximas 2-3 execuções que a cadência se mantém antes de fechar definitivamente o item.
- **Verificação:** `sitemap.xml` mostra conteúdo editorial novo em pelo menos 2 das próximas 3 execuções.
- **Notes:** Rebaixado de P2 para P3 porque o sintoma que motivou a escalada desapareceu — mantido aberto, não fechado, até confirmar sustentação.

### 2026-07-27 added — STRATEGIC — destaque.ai ausente dos próprios roundups "melhores agências" de concorrentes
- **Prioridade:** P2
- **Esforço:** 2-4h (outreach)
- **Origem:** auditoria semanal 2026-07-27
- **Estado:** TODO
- **Descrição:** AISO Hub publica "Best SEO & AI Search Optimization Agencies in Portugal/Lisbon" — destaque.ai não figurava em nenhuma lista confirmada em 27 jul. Não re-verificado esta semana.
- **Acção:** Identificar 3-5 roundups/directórios do género e fazer pitch directo de inclusão, com os estudos originais já publicados como prova de credibilidade.
- **Verificação:** Pelo menos 1 menção/inclusão nova confirmada num roundup de terceiros.
- **Notes:** Sem progresso de outreach conhecido.

### 2026-07-13 added — STRATEGIC — Schema declara alcance (ES/EN/pt-BR, e agora mercados adicionais em llms.txt) que o site não cobre
- **Prioridade:** P2
- **Esforço:** 2h (decisão) + variável conforme opção
- **Origem:** auditoria semanal 2026-07-13; reforçado 2026-08-17
- **Estado:** IN PROGRESS
- **Descrição:** `Organization.areaServed` inclui Espanha e Europa; `contactPoint.availableLanguage` inclui `en`, `es`, `pt-BR`. **Novo em 2026-08-17:** o `llms.txt` descreve a nova página `/auditoria` com mercados-alvo "Portugal, Brasil, Estados Unidos, Reino Unido, Espanha, França, Alemanha" — mais amplo ainda do que a declaração de schema já sinalizada como desalinhada do conteúdo real (predominantemente PT+EN).
- **Acção:** Decidir entre (a) construir conteúdo real nos mercados declarados, ou (b) reduzir a declaração de schema/llms.txt à cobertura real actual (PT+EN).
- **Verificação:** Schema, `llms.txt` e conteúdo alinhados.
- **Notes:** O desalinhamento cresceu em vez de diminuir esta semana.

### 2026-07-20 added — SCHEMA — Casos de estudo sem schema de resultado verificável
- **Prioridade:** P3
- **Esforço:** variável
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** IN PROGRESS (sem novo progresso confirmado — não re-amostrado esta semana)
- **Descrição:** Os 3 casos de estudo continuavam, na última amostra directa (03 ago), sem `Review`, `AggregateRating` nem tipo com resultado estruturado, apesar de terem métricas T0/T1 concretas em texto corrido.
- **Acção:** Considerar adicionar dados estruturados de resultado. Avaliar se a divulgação de anonimização deve também aparecer no corpo visível do artigo.
- **Verificação:** Próxima auditoria confirma se algum schema de resultado foi adicionado.
- **Notes:** `author` (Organization) já resolvido via PR anterior — progresso parcial genuíno, mantido.

### 2026-08-03 added — GEO — Re-testar/confirmar scan de preparação para agentes (isitagentready.com) e negociação de conteúdo em markdown
- **Prioridade:** P3
- **Esforço:** 1-2h
- **Origem:** auditoria semanal 2026-08-03; não testado 2026-08-17
- **Estado:** TODO
- **Descrição:** A negociação de conteúdo em markdown (`.md`/`Accept: text/markdown`) é descrita em detalhe no `llms.txt` mas não foi testada directamente em nenhuma execução até agora.
- **Acção:** Correr o scan isitagentready.com de novo; testar directamente `GET /blog/<slug>.md` e `GET /` com `Accept: text/markdown`.
- **Verificação:** Próxima auditoria reporta uma pontuação própria confirmada e confirma o comportamento da negociação de conteúdo.
- **Notes:** Baixo risco, mais uma questão de fechar a verificação do que de suspeita de problema.

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
- **Origem:** auditoria semanal 2026-07-13; reconfirmado 2026-08-17
- **Estado:** TODO
- **Descrição:** Nenhuma menção a destaque.ai ou Eduardo Mendonça encontrada em Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo — reconfirmado por pesquisa directa em 2026-08-17.
- **Acção:** Iniciar pipeline de digital PR de forma orgânica, usando os estudos originais como gancho.
- **Verificação:** Primeira peça Tier-1 publicada.
- **Notes:** Expectável para empresa fundada em 2025 — horizonte 3-4, não urgente.

## Items DONE (últimas 4 semanas, por rastreabilidade)

### 2026-07-27 added — CONTENT — Cadência de publicação parada desde 17 jul
- **Estado:** DONE (2026-08-17)
- **Descrição:** Hiato editorial escalado para P2 em 03 ago (~19-25 dias sem conteúdo novo).
- **Notes:** Dois posts novos confirmados a 10 ago 2026 via `sitemap.xml`, mais duas páginas novas (`/auditoria`, `/ai-usage`). Reaberto como item P3 de monitorização de sustentação (ver acima) — a resolução do sintoma não implica cadência garantida a longo prazo.

### 2026-08-03 added — MEASUREMENT — Tracker: BING_OAUTH_CLIENT_ID em falta
- **Estado:** DONE (2026-08-17) — resolvido, não confirmado por commit específico
- **Descrição:** `Error: BING_OAUTH_CLIENT_ID env is missing`, rota `/api/integrations/bing/connect`, 4 ocorrências em 31 jul.
- **Notes:** Não aparece nos 2 grupos de erro dos últimos 7 dias (`mcp__Vercel__get_runtime_errors`, 17 ago). Marcado DONE com a mesma ressalva de execuções anteriores: sem commit identificado, reabrir se reaparecer.

### 2026-08-03 added — GEO — llms.txt não referencia as novas páginas /en/
- **Estado:** DONE (2026-08-03), mantido por rastreabilidade
- **Notes:** Confirmado de novo em 2026-08-17 — secção "English" completa e detalhada no `llms.txt`.

### 2026-07-27 added — GEO — hreflang em falta na página pilar /consultoria-geo-portugal e x-default em falta no estudo mais recente
- **Estado:** DONE (2026-08-03), mantido por rastreabilidade
- **Notes:** Ver histórico completo em execuções anteriores.

### 2026-07-20 added — GEO — Multimodal: primeira ruptura confirmada, mas isolada e sem ImageObject
- **Estado:** DONE (2026-08-03), mantido por rastreabilidade
- **Notes:** `/tracker` não re-amostrado em 2026-08-17 — não assumir persistência sem re-verificação.

### 2026-07-27 added — MEASUREMENT — Bug de produção no Tracker: /competitors/[id] rebenta para pelo menos um cliente real
- **Estado:** DONE (2026-08-03), mantido por rastreabilidade
- **Notes:** Não reaparece nos erros de 2026-08-17.

> **Correcção (22 Ago 2026, sessão principal):** o item PROCESS acima está
> errado no diagnóstico. O caminho canónico É
> `skills/geo-seo-aeo-master/references/...` — é o que o Tracker consome em
> runtime (`src/lib/skill/loader.ts`). A sessão de 17 Ago trabalhou a partir
> de uma cópia na raiz que ela própria criou, e "corrigiu" a URL na direcção
> errada. A raiz tem agora symlinks para o canónico, para qualquer sessão
> desorientada escrever no sítio certo sem saber.
