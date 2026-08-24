# destaque.ai audit history

## Formato

Cada execução produz uma entrada datada com:
- Score global delta vs. semana anterior
- Score por categoria delta
- Items movidos para DONE esta semana
- Items novos detectados
- Mudanças material observadas (regressões, melhorias)

## Entradas

### 2026-08-24 — Sexta execução (vs. 10 ago — a rotina saltou 17 ago)

**Score global:** 72/100 (Bom, em melhoria real — 1 de 12 categorias N/D: Performance/CWV). **Δ vs. 10 ago: +3.** Primeira subida líquida em quatro execuções, mas a comparação é contra uma auditoria de há duas semanas: não existe commit `audit: 2026-08-17 destaque.ai SINAL self-audit` — ver novo item PROCESS.

**Score por categoria (delta vs. 10 ago):**

| Categoria | Score | Δ |
|---|---|---|
| SEO Técnico | 87/100 | 0 |
| Performance / CWV | N/D | — |
| SEO On-Page | 94/100 | +1 |
| Schema / dados estruturados | 97/100 | +1 |
| Optimização de imagens | 74/100 | +2 |
| GEO técnica | 94/100 | +3 |
| Conteúdo & topical authority | 95/100 | +14 |
| Entidade / brand foundation | 82/100 | +3 |
| Autoridade & digital PR | 20/100 | 0 |
| Sinais sociais & community | 35/100 | 0 |
| E-E-A-T & on-site authority | 70/100 | 0 |
| Medição & feedback loop | 48/100 | +13 |

**Nota sobre o Δ global de +3:** o número esconde tanto a maior melhoria já vista por este Routine numa única categoria (Conteúdo, +14 — hiato editorial de três escaladas resolvido com 11 posts novos e duas páginas-pilar) como a persistência do problema mais barato de resolver de toda a auditoria (Gemini sem crédito, agora 9 semanas). Medição sobe +13 porque dois dos três motores com crédito esgotado (Perplexity, OpenAI) já não aparecem nos erros dos últimos 7 dias, parcialmente compensado por uma regressão confirmada na DataForSEO (o erro `language_name` que parecia resolvido em 10 ago voltou, 54 ocorrências). Ver `audit-baseline.md` § Sumário executivo e § 16 para o detalhe.

**Items movidos para DONE esta semana:** 2 — "CONTENT — Cadência de publicação parada" (11 posts novos + 2 páginas-pilar, maior vaga editorial já vista); "GEO — llms.txt: falha de fetch não explicada" (confirmado esta semana que era limitação da ferramenta desta sessão, não do site — `llms.txt` funciona e é rico).

**Items novos detectados:** 4 — 1 P1 (PROCESS — a rotina semanal saltou 17 ago sem registo do porquê, primeira vez desde a baseline de 13 jul), 1 P1 (STRATEGIC — um consultor individual, Marco Gouveia, venceu destaque.ai em 2 recomendações directas no teste multi-motor, categoria de concorrente nova), 1 P1 (ENTITY/STRATEGIC — métrica nova de convergência de descrição de entidade por motor, baseline dia 1 mostra "consultoria" não "software" em Claude augmented PT e EN, cross-valida um problema que o founder já tinha visto e corrigido no próprio dia numa AI Overview da Google), 1 P2 (ENTITY — destaque.ia.br, empresa brasileira de nome quase idêntico, risco de confusão de marca detectado pela primeira vez em pesquisa EN). Adicionalmente, "MEASUREMENT — DataForSEO `language_name`" subiu de nota informal a P1 formal por regressão confirmada, e "STRATEGIC — colisão do termo GEO" foi reconfirmado pela 2ª auditoria consecutiva.

**Mudanças materiais observadas:**
- **Maior melhoria de conteúdo já vista por este Routine:** 11 posts novos (mais recente: ontem, 23 ago) e duas páginas-pilar novas (`/agencia-geo`, confronto software vs. agência; `/playbook`, o método publicado). O hiato de 26/28 dias, escalado três vezes seguidas, está resolvido por completo.
- **`llms.txt` confirmado a funcionar pela primeira vez em três execuções** — ficheiro rico, com secção EN própria e negociação de conteúdo em markdown documentada.
- **Correcção proactiva de categorização no próprio dia:** o founder corrigiu o título por omissão da homepage/`/en` (de "com método" para "software de visibilidade em IA") às 07:58 UTC de hoje, em resposta directa a uma AI Overview da Google que descrevia destaque.ai como "consultoria". O teste multi-motor desta mesma auditoria, horas depois, confirma o mesmo problema em Claude augmented (PT e EN) — não uma falha da correcção (é esperado no dia 1), mas uma validação cruzada independente do problema. Métrica de convergência de descrição de entidade introduzida esta semana para acompanhar isto.
- **Teste multi-motor mais extenso já feito por este Routine (21 prompts, 3 sub-agentes frescos com `WebSearch`) revela o padrão estrutural central:** destaque.ai aparece nos resultados brutos de pesquisa em 7/21 prompts mas só sobrevive à síntese da resposta em 2/21 — "citado sem ser recomendado" em 5 dos 7 casos onde aparece.
- **Concorrência nova:** Marco Gouveia (consultor individual, venceu destaque.ai em `LR1` e `V4`), Luso AI, Latigid, Digital Results, Somos6Digital — lista de candidatos a classificar formalmente cresce de 2 (AISO Hub, UniK SEO) para 6.
- **Regressão em Medição:** o erro `Invalid Field: 'language_name'` da DataForSEO, registado em 10 ago como "parece resolvido", regressou com 54 ocorrências desde 1 ago — a leitura de há duas semanas não se confirmou.
- **Recuperação parcial em Medição:** dos três motores com crédito de API esgotado (Gemini, Perplexity, OpenAI), dois já não aparecem nos erros dos últimos 7 dias. O Gemini continua exactamente onde estava — nona semana sem resolução, o item mais barato de toda a auditoria.
- **Novo sentinela de operação:** cron diário `ops-health` mergeado hoje no Tracker — verifica auditorias em falta, backlog, respostas mock e imprensa parada, envia email só quando algo está vermelho. Sem histórico ainda para avaliar se cumpre a promessa.
- **Processo:** a rotina semanal saltou 17 ago sem deixar registo — primeira vez desde a baseline. Todas as comparações desta entrada são, na prática, vs. há duas semanas.

**Reconciliação playbooks:** **1 edição feita** — bloco `grok` (PT e EN) em `engine_playbooks.md` corrigido: duas auditorias consecutivas do Visibility Tracker via `source_intelligence.md` (10 e 17 ago, mesmo nicho) mediram zero citações de x.com/twitter.com nas respostas do Grok, contradizendo a alavanca "peso invulgar a conversas no X" — a "Como decide" passou a atribuir esse peso à documentação do fornecedor (não a facto observado próprio) e regista a contradição medida com fonte e datas; item novo em "Faz" recomenda não contar com o X como canal de citação garantido nesta categoria. A alavanca de manter presença no X não foi removida, só recontextualizada. Registado em `methodology-changelog.md` 2026-08-24. `node scripts/validate-skill-tables.mjs` verde antes do commit.

### 2026-08-10 — Quinta execução

**Score global:** 69/100 (Bom, com lacunas de verificação que persistem — 1 de 12 categorias N/D: Performance/CWV). **Δ vs. 03 ago: 0.** Terceira semana seguida estável no número, por compensação, não por estagnação.

**Score por categoria (delta vs. 03 ago):**

| Categoria | Score | Δ |
|---|---|---|
| SEO Técnico | 87/100 | 0 |
| Performance / CWV | N/D | — |
| SEO On-Page | 93/100 | 0 |
| Schema / dados estruturados | 96/100 | 0 |
| Optimização de imagens | 72/100 | 0 |
| GEO técnica | 91/100 | 0 |
| Conteúdo & topical authority | 81/100 | −4 |
| Entidade / brand foundation | 79/100 | +2 |
| Autoridade & digital PR | 20/100 | 0 |
| Sinais sociais & community | 35/100 | 0 |
| E-E-A-T & on-site authority | 70/100 | 0 |
| Medição & feedback loop | 35/100 | −3 |

**Nota sobre o Δ global de 0:** Entidade sobe (+2) por reconfirmação directa do `Organization.sameAs` no JSON-LD da homepage e pela descoberta do `Person` do fundador (Eduardo Mendonça, `sameAs` LinkedIn) — sinal de E-E-A-T/entidade que as quatro execuções anteriores não tinham registado explicitamente. Conteúdo desce (−4) porque o hiato editorial, já escalado há uma semana, chega a 26/28 dias sem resposta de nenhum tipo. Medição desce (−3): o incidente agudo da semana passada (quota SerpApi) parece resolvido, mas foi substituído por algo mais crónico — créditos de API esgotados em Gemini (7+ semanas), Perplexity e OpenAI, parcialmente compensado por uma vaga de correcções de segurança de qualidade real no Tracker (#299-#302) que não move esta métrica mas é um sinal positivo genuíno noutro eixo. Ver `audit-baseline.md` § Sumário executivo e § 16 para o detalhe.

**Items movidos para DONE esta semana:** 0. Nenhum item do backlog atingiu resolução confirmada nesta execução — o incidente de quota SerpApi/DataForSEO de 03 ago desceu de P0 para P1 e passou a IN PROGRESS (sintoma agudo não recorreu, mas DataForSEO continua instável por outra via) sem ser marcado DONE.

**Items novos detectados:** 5 — 1 P0 (MEASUREMENT — créditos de API esgotados em Gemini/Perplexity/OpenAI, o Gemini há mais de 7 semanas), 1 P1 (TECH — Performance/CWV sem dado há 5 semanas, formalizado como item de backlog pela primeira vez após a via alternativa de Horizonte 1 ter sido confirmada desligada), 1 P2 (STRATEGIC — colisão do termo "GEO" com a indústria de geodesia em pesquisas genéricas, achado novo do teste multi-motor), 1 P3 (GEO — falha de fetch de `llms.txt` distinta do bloqueio de rede geral, não explicada), 1 P3 informativo (SCHEMA — `FAQPage` da homepage é markup inerte para o Google desde 7 mai 2026, cruzado do news-feed, sem acção necessária). Adicionalmente, "CONTENT — cadência de publicação parada" foi escalado de P2 para P1 — 2ª escalada consecutiva sem resposta.

**Mudanças materiais observadas:**
- **Escalada mais severa da execução: créditos de API esgotados, não quota de fornecedor de dados.** O incidente de 03 ago (quota SerpApi + erro de campo DataForSEO) não recorreu com a mesma assinatura, mas revelou-se menos importante do que um problema mais antigo e mais caro em tempo: o Gemini está sem crédito pré-pago desde 23 jun 2026 — mais de 7 semanas — juntando-se a Perplexity e OpenAI/ChatGPT esgotados desde 03 ago. É, ao mesmo tempo, o problema mais barato de resolver de toda a auditoria (top-up de conta) e o que está a durar mais tempo sem resolução.
- **Contraponto real: vaga de segurança de qualidade no Tracker, não pedida por esta auditoria.** 4 PRs (#299-#302) corrigiram uma falha P0 genuína — o papel `viewer` podia apagar dados de cliente via PostgREST directo, contornando toda a aplicação — mais bugs de impersonação de operador em 12 rotas OAuth. Trabalho de revisão de arquitectura séria, feito proactivamente.
- **Reconfirmação de entidade mais rica do que documentado antes:** extracção directa do JSON-LD da homepage (em vez de amostra visual) revelou `Person` do fundador com `sameAs`, `jobTitle` e `knowsAbout` — um sinal de E-E-A-T/entidade presente mas não registado nas quatro execuções anteriores.
- **Hiato de conteúdo editorial: 2ª escalada consecutiva sem resposta.** 26 dias sem post, 28 sem estudo; o pedido explícito de pelo menos registar uma decisão consciente, feito há uma semana, também não foi atendido.
- **Achado novo: colisão de termo.** "GEO" em português e inglês colide com a indústria de geodesia/topografia em 3 dos 21 prompts mandatórios — ninguém do sector de AI search aparece nessas queries, destaque.ai incluída. Distinto de competição directa: é um problema de desambiguação, não de posicionamento.
- **Teste multi-motor — mesmo padrão, prompts diferentes:** modo augmented, destaque.ai mencionada em 3/21 (`GD5`, `V1`, `V2`), citação genuína e usada na resposta em apenas 1/21 (`V1`). AISO Hub e UniK SEO reclamam liderança de categoria explicitamente em prompts distintos. Modo knowledge: 0/31 pela quinta semana, 0 alucinações, recusa correcta no prompt branded (desta vez UniK SEO). Protocolo de crise: não accionado.
- **Performance/CWV — a via alternativa também falhou.** PSI `HTTP 429` de novo (5ª semana); Vercel Web Analytics, recomendado na semana passada como proxy, confirmado **não activado** no projecto `destaque-ai` (`404 Not Found`).

**Reconciliação playbooks:** sem divergências. Os achados desta semana (colisão de termo "GEO", padrão citado-sem-recomendação em `V1`/`V2`/`GD5`, AISO Hub/UniK SEO a reclamar liderança) reforçam ou estendem blocos existentes em `engine_playbooks.md` sem os contradizer — nenhuma edição feita. `source_intelligence.md` continua sem entradas (a rotina do cérebro do Tracker ainda não gerou a primeira semana de dado).

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

**Nota sobre o Δ global de 0:** não reflecte estagnação. Ganhos reais em Schema (+1), Optimização de imagens (+7) e GEO técnica (+4) — três itens de backlog fechados por 6 PRs mergeados entre 27-31 jul (#93-#98) — são compensados por uma queda em Medição (−7, nova degradação activa de 3 motores no Visibility Tracker por quota SerpApi esgotada) e em Conteúdo (−3, hiato editorial de ~19 dias que ultrapassou o limiar de escalada definido na semana passada). Ver `audit-baseline.md` § Sumário executivo e § 16 para o detalhe.

**Items movidos para DONE esta semana:** 4 — "GEO — llms.txt não referencia /en/" (secção English nova confirmada); "GEO — hreflang em falta na página pilar + x-default em falta no estudo" (x-default resolvido por implementação; hreflang da página pilar resolvido por decisão explícita documentada em commit, não por código); "GEO — Multimodal: primeira ruptura sem ImageObject" (`ImageObject` confirmado nas 14 imagens do `/tracker`); "MEASUREMENT — bug `/competitors/[id]`" (não observado nos erros dos últimos 7 dias, resolvido sem commit identificado — marcado com ressalva). "SCHEMA — Casos de estudo sem schema de resultado" passa a IN PROGRESS com progresso parcial (`author` Organization adicionado via PR #93; schema de resultado estruturado continua por fazer).

**Items novos detectados:** 4 — 1 P0 (MEASUREMENT — quota SerpApi esgotada + erro de campo DataForSEO, 3 motores do Tracker degradados agora mesmo — o item mais severo até agora nesta auditoria), 1 P1 (PROCESS — categoria nova; estrutura de repositório duplicada, `news-feed.md` fragmentado entre dois caminhos não sincronizados), 1 P2 (MEASUREMENT — `BING_OAUTH_CLIENT_ID` em falta no Tracker), 1 P3 (GEO — re-testar scan de preparação para agentes isitagentready.com e confirmar negociação de conteúdo em markdown). Adicionalmente, "CONTENT — cadência de publicação parada" foi escalado de P3 para P2 por ultrapassar o limiar de 2-3 semanas definido em 27 jul.

**Mudanças materiais observadas:**
- **Correcção de processo mais importante da execução:** confirmação de que o repositório tem duas árvores paralelas e não sincronizadas do skill (`skills/geo-seo-aeo-master/` canónico vs. uma árvore duplicada na raiz), com o `daily-agent/news-feed.md` fragmentado entre ambas — um risco estrutural real para a fiabilidade de auditorias futuras, não apenas um incómodo de sessão. Ver item PROCESS no backlog.
- **Degradação mais severa do que a semana passada em Medição:** o bug isolado da semana passada (`/competitors/[id]`) foi resolvido, mas foi substituído por uma falha activa e mais ampla — quota da SerpApi esgotada, a afectar 3 motores de medição do Tracker neste preciso momento, mais um erro de configuração (`BING_OAUTH_CLIENT_ID`) e o rate-limit da Mistral que ultrapassa agora 6 semanas sem resolução de causa raiz.
- **Progresso técnico genuíno:** 6 PRs mergeados (#93-#98) fecharam 3 itens do backlog (x-default, `/en/` no llms.txt, `ImageObject` no `/tracker`) e introduziram uma superfície nova — "preparação para agentes" (Content-Signal, índice de Agent Skills, negociação de conteúdo em markdown) — ainda sem peso formal no scorecard SINAL.
- **Teste multi-motor — dado mais fino, padrão mais claro:** modo augmented passou a distinguir "citado" de "recomendado" pela primeira vez. destaque.ai foi citada em 5/21 prompts mandatórios (a taxa mais alta das 4 execuções), mas nunca como opção recomendada — sempre como fonte de dados/leitura de fundo, com concorrentes reais (Studio.351, Infinidata, UniK SEO) explicitamente recomendados à frente em pelo menos um caso (`V5`). `LR1` testado pela primeira vez em augmented — destaque.ai ausente, 7 concorrentes citados. Modo knowledge: 0/31 pela quarta semana, 0 alucinações, recusa correcta no prompt branded (`DC1`-variante com AISO Hub).
- **Descoberta lateral:** quarto projecto Vercel da conta, `destaque-ai-commercial` ("Caçador de Clientes"), uma ferramenta interna de prospecção que já usa a própria metodologia de destaque.ai (sinais Claude-only, directional) — não pública, sem impacto no scorecard, mas confirma a empresa a comer a sua própria comida.

**Limitações operacionais desta execução (evolução face às três semanas anteriores):**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited — 4ª semana consecutiva.
- ChatGPT, Perplexity, Google AI Mode, Bing Copilot continuam sem acesso — 4ª semana sem progresso, agora agravado pela degradação do próprio Tracker (ver acima).
- `references/models.md` — tentativa de refresh mandatório (>7 dias) feita, sem mudança confirmada com fonte primária; ver nota no próprio ficheiro.
- Amostragem técnica de páginas mais estreita do que nas três execuções anteriores (6 URLs directamente amostrados vs. 17-20 nas semanas anteriores), por causa do tempo dedicado ao diagnóstico da estrutura duplicada do repositório e ao teste multi-motor mais granular (5 sub-agentes, 52 pares prompt×motor). Categorias 8-11 do scorecard não re-verificadas esta semana — valores de 27 jul mantidos sem alteração assumida.

Ver `audit-baseline.md` para o detalhe completo, e `improvements-backlog.md` para os itens novos e actualizados.

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

**Nota sobre o Δ global negativo:** não reflecte regressão do site. A categoria Medição passou de N/D (excluída da média) para uma pontuação real de 45/100, o que por si só puxa a média de 11 categorias para baixo face à média de 10 categorias da semana passada — ver § "Nota de encerramento" de `audit-baseline.md` para o detalhe aritmético e a justificação de tratar isto como correcção de processo, não como piora.

**Items movidos para DONE esta semana:** 1 novo — "SCHEMA — /perguntas não amostrado" (confirmado FAQPage+Question+Answer+BreadcrumbList+WebPage speakable, 26 perguntas declaradas). "SCHEMA — Casos de estudo sem schema de resultado verificável" passa de TODO a IN PROGRESS (a parte de verificação por leitura do corpo ficou concluída e confirma anonimização; a parte de adicionar schema de resultado estruturado continua por fazer). "MEASUREMENT — Stack de medição não verificável" passa de TODO a IN PROGRESS (Tracker confirmado em produção via Vercel, ainda sem GSC/GA4/BWT confirmados).

**Items novos detectados:** 5 — 1 P1 (MEASUREMENT — bug `/competitors/[id]` no Tracker, cliente real afectado), 3 P2 (MEASUREMENT — rate-limit Mistral recorrente desde 23 jun; GEO — lacunas de `hreflang` em `/consultoria-geo-portugal` e no estudo mais recente; STRATEGIC — ausência de destaque.ai em roundups de concorrentes como AISO Hub), 1 P3 (CONTENT — hiato de publicação desde 17 jul, item de vigilância, não ainda urgente).

**Mudanças materiais observadas:**
- **Correcção de processo mais importante da execução:** duas auditorias anteriores (13 e 20 jul) verificaram apenas Supabase para o Visibility Tracker próprio e concluíram "sem projecto acessível". Esta semana, ao verificar os projectos Vercel da conta pela primeira vez, confirma-se que `destaque-ai-tracker` está em produção desde 5 jun 2026, com cliente real, cadência de desenvolvimento muito activa (8 PRs em ~48h) — mas também um bug de produção não corrigido e um rate-limit de fornecedor (Mistral) recorrente há mais de um mês.
- **Melhoria genuína:** primeira ruptura do padrão "zero imagens sitewide" em três auditorias — `/tracker` ganhou 12 imagens com `alt` descritivo (sem `ImageObject` ainda). Cinco tipos de schema novos confirmados (`SoftwareApplication`, `HowTo`/`HowToStep`, `BlogPosting`, `Dataset`/`PropertyValue`, `DefinedTerm`). Resposta honesta e completa, por leitura directa do corpo, à pergunta em aberto sobre os casos de estudo: são anonimizados, não nomeiam clientes reais, mas têm métricas T0/T1 datadas e uma secção de limitações própria. Descoberta de um canal de distribuição novo (`/feed.xml`, 20 itens reais).
- **Estagnação/regressão pontual:** zero deploys de produção ao site principal entre 17 e 27 jul (~10 dias) depois de um ciclo de publicação intenso — vigiar, não ainda urgente. CSP continua Report-Only, 3ª semana. `llms.txt` continua sem referenciar `/en/`, 2ª semana. Nova lacuna de `hreflang` na página pilar `/consultoria-geo-portugal` (prioridade 0.9, sem par EN nem hreflang).
- **Teste multi-motor:** taxa de presença global estável em modo augmented (4/21 mandatórios citados com URL, 0 mencionados sem citar — face a "3 citados + 1 mencionado" há uma semana), mas a composição dos prompts que ganham mudou; continua ausente dos dois prompts de descoberta de maior intenção comercial (`LR1`, `LR2`). Modo knowledge: 0/31 pela terceira semana, 0 alucinações, recusa correcta no prompt branded.

**Limitações operacionais desta execução (evolução face às duas semanas anteriores):**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited — 3ª semana consecutiva; deixa de ser tratável como falha pontual.
- ChatGPT, Perplexity, Google AI Mode, Bing Copilot continuam sem acesso — 3ª semana sem progresso.
- `WebFetch` directo a domínios externos (testado esta semana contra `destaque.ai`, `wikidata.org`, `aiso-hub.com`) confirma-se bloqueado de forma geral pelo sandbox — não é um problema específico de indexação do Wikidata, como se suspeitava.
- Vercel (`list_projects`, `list_deployments`, `get_runtime_errors`, `get_runtime_logs`) usado pela primeira vez para além do site principal — revelou o projecto `destaque-ai-tracker`, previamente invisível a esta auditoria. Recomenda-se manter este passo no Routine daqui para a frente.

Ver `audit-baseline.md` para o detalhe completo, e `improvements-backlog.md` para os itens novos e actualizados.

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

**Items movidos para DONE esta semana:** 3 — "GEO — Routine sem acesso ao teste multi-motor" **não** (continua TODO); os 3 efectivamente resolvidos foram: "CONTENT — Cadência de publicação parada" (cadência retomada, 6 posts + 2 estudos), "E-E-A-T — Sem case studies públicos" (3 casos publicados em `/casos`, com ressalva de schema — ver novo item de follow-up), "SCHEMA — Templates não amostrados" (`/servico`, `/sobre`, `/glossario` todos confirmados com schema rico).

**Items novos detectados:** 5 — 0 P0, 2 P1 (STRATEGIC peer set desactualizado; CONTENT/GEO multimodal persistente), 1 P2 (SCHEMA/GEO — ver nota), 3 P3 (SCHEMA casos sem resultado verificável, GEO llms.txt sem /en/, SCHEMA /perguntas não amostrado). Item STRATEGIC "Schema declara alcance ES/EN/pt-BR" passou de TODO a IN PROGRESS (EN arrancou parcialmente).

**Mudanças materiais observadas:**
- **Melhoria:** cadência editorial retomada com força (6 posts + 2 estudos originais em ~10 dias); 3 casos de estudo publicados (nova secção `/casos`); início de conteúdo bilingue (`/en/about`, `/en/studies` + 3 estudos traduzidos, com `hreflang` correcto); 7 novos tipos de schema confirmados (`DefinedTermSet`, `CollectionPage`, `ItemList`, `ItemPage`, `Article`, `AboutPage`, `HowTo`); meta description da homepage reescrita para formato mais próximo do padrão SERP (331→167 caracteres); `sitemap.xml` cresceu de 24 para 40 URLs.
- **Estagnação notável:** zero imagens em todo o site, confirmado de novo mesmo em 3 casos de estudo novos e 1 estudo com 2.205 respostas — a única categoria do scorecard que não se moveu (0 pontos de delta) apesar de conteúdo novo relevante ter sido publicado à sua volta.
- **Regressão marginal (−1 pt cada, dentro da margem de leitura, não um sinal de alarme):** Entidade/brand foundation e GEO técnica — sem progresso visível em `sameAs`/Wikidata e com o gap novo de `llms.txt` não referenciar `/en/`.
- **Achado novo mais importante:** teste multi-motor em modo augmented (novo esta semana) mostrou destaque.ai citada em 3/21 prompts mandatórios (todos de nicho específico) e ausente em 17/21 (sobretudo descoberta genérica), onde concorrentes portugueses não classificados formalmente (Studio.351, AISO Hub, Infinidata, LPM) e o par já conhecido (3HASH, activo em conteúdo GEO/AEO próprio) dominam. Substitui a lacuna "não testável" da semana passada por um achado accionável real.

**Limitações operacionais desta execução (evolução face à semana passada):**
- `curl` de saída e PageSpeed Insights continuam bloqueados/rate-limited — mesma falha estrutural, 2ª semana.
- ChatGPT, Perplexity, Google AI Mode, Bing Copilot continuam sem acesso — 2ª semana sem progresso neste item específico.
- Claude: teste muito mais robusto esta semana (31 prompts × modo knowledge, 21 × modo augmented, vs. 4 prompts × 1 modo há uma semana), com desvio de metodologia assumido (lotes de 7 prompts por sub-agente em vez de 1:1) — ver `audit-baseline.md` nota de metodologia.
- `WebSearch` devolveu, pela primeira vez, resultados indexados reais para o próprio domínio e para o panorama competitivo — melhoria notável face à semana passada, causa não confirmada (pode ser variância do motor, não indexação genuinamente nova).
- Supabase `destaque-ai-tracker` continua inacessível — confirmado de novo, sem progresso.

Ver `audit-baseline.md` para o detalhe completo, e `improvements-backlog.md` para os itens novos e actualizados.

### 2026-07-13 — Baseline (primeira execução)

Primeira corrida do Routine `destaque-ai-self-audit-weekly`. Sem semana anterior para comparar — todos os números abaixo são o ponto de partida, não um delta.

**Score global:** 68/100 (Bom, com lacunas de verificação — 2 de 12 categorias N/D nesta execução: Performance/CWV, Medição).

**Score por categoria (baseline):**

| Categoria | Score |
|---|---|
| SEO Técnico | 85/100 |
| Performance / CWV | N/D (PSI rate-limited 429; sem curl de saída) |
| SEO On-Page | 90/100 |
| Schema / dados estruturados | 92/100 |
| Optimização de imagens | 55/100 |
| GEO técnica | 88/100 (prontidão técnica); teste de citação real N/D salvo Claude knowledge (0/4) |
| Conteúdo & topical authority | 85/100 |
| Entidade / brand foundation | 78/100 |
| Autoridade & digital PR | 20/100 |
| Sinais sociais & community | 35/100 |
| E-E-A-T & on-site authority | 55/100 |
| Medição & feedback loop | N/D |

**Items DONE esta semana:** nenhum (primeira execução, backlog acabado de criar).

**Items novos detectados:** 11 (ver `improvements-backlog.md`) — 0 P0, 3 P1, 3 P2, 5 P3.

**Mudanças materiais observadas:** N/A (baseline).

**Limitações operacionais desta execução** (afectam a comparabilidade de futuras entradas até serem resolvidas):
- Sem acesso de rede de saída irrestrito neste ambiente — dados técnicos obtidos via `mcp__Vercel__web_fetch_vercel_url` (real, mas não idêntico a um `curl` PT nem a um crawler anónimo).
- Sem sessão/API a ChatGPT, Perplexity, Google AI Mode, Bing Copilot — teste multi-motor da metodologia SINAL não executado; único dado real é Claude Sonnet 5 em modo knowledge (0/4 menções destaque.ai, 0/4 concorrentes nomeados, sobre GD5/LR1/GP1/V4).
- PageSpeed Insights rate-limited (429) no momento do pedido.
- Sem acesso a GSC/GA4/BWT/Tracker próprio.

Ver `audit-baseline.md` § "Nota de metodologia desta execução" para o detalhe completo, e item P1 "GEO — Routine sem acesso ao teste multi-motor ao vivo" em `improvements-backlog.md` para a acção proposta.
