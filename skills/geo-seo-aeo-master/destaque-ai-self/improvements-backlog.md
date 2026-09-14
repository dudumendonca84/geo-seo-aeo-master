# destaque.ai improvements backlog

## Formato

Cada item segue este formato:

```
### YYYY-MM-DD added: [Categoria]: Título curto
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

- `TECH` - performance, headers, compressão, CDN, security
- `SCHEMA` - JSON-LD coverage por template
- `CONTENT` - copy, headings, alt, bilingual hygiene
- `GEO` - llms.txt, robots IA, server rendering, prompt visibility
- `ENTITY` - Wikidata, Knowledge Panel, sameAs, NAP consistency
- `BACKLINKS` - digital PR, mentions em Tier-1 media PT/EN
- `MEASUREMENT` - GSC config, GA4 channel groups, Bing Webmaster AI Performance, Visibility Tracker próprio
- `STRATEGIC` - posicionamento, pricing, pitch
- `PROCESS` - integridade do próprio repositório/rotina de auditoria (nova categoria, 03 ago 2026: ver item PROCESS abaixo)

## Prioridade

- **P0**: Blocker. Quebra algo fundamental. Resolver esta semana.
- **P1**: Alta. Gap visível que afecta visibilidade ou credibilidade.
- **P2**: Média. Otimização desejável.
- **P3**: Baixa. Nice-to-have, sem urgência.

## Workflow

A Routine semanal:
1. Analisa o `audit-baseline.md` atualizado
2. Compara com a iteração anterior (em `audit-history.md`)
3. Move items que foram resolvidos para "DONE" e regista a data
4. Adiciona novos items detectados na nova auditoria
5. Cruza com `daily-agent/news-feed.md` da semana: se houve mudança no mercado que abre nova oportunidade ou cria nova urgência, adiciona

Items completados ficam aqui (estado DONE) pelo menos 4 semanas para rastreabilidade, depois movem-se para `audit-history.md`.

## Items atuais

_(Atualizado 14 setembro 2026: oitava execução do Routine, primeira semana consecutiva sem hiato desde a escalada do item PROCESS a 07 set. MEASUREMENT: achado mais sério da semana: o motor ChatGPT do Visibility Tracker está inoperacional desde 11 set por duas causas simultâneas (ID de modelo inválido `gpt-5.5-instant` + sem créditos OpenAI em `gpt-5.6-sol`), sobe a P0; Perplexity com duas assinaturas de falha distintas (rate-limit + quota). GEO/ENTITY: a correção do `llms.txt` ("consultancy") continua por aplicar 2ª semana, agora confirmada a alimentar uma resposta sintetizada real (`DC1`). ENTITY: `Organization.sameAs` perdeu a entrada Wikidata (de 4 para 3), causa (deliberada ou acidental) por confirmar. BACKLINKS: primeira citação de imprensa PT confirmada em 9 semanas (Marketeer, 2 artigos). STRATEGIC: BE VISIBLE reclassificado como agência internacional (Londres/Ostende/Lisboa/Cebu, não par português puro); Francisco Paredes corrigido para Porto, não Lisboa; concorrente novo SEO Alive; mais 5 nomes novos encontrados em pesquisa dedicada (AWISEE, SmartLinks, DivSync Digital, Digiton.ai, BeFound); terceira colisão do acrónimo GEO confirmada ("Global Employer of Record").)_

### 2026-09-14 added: MEASUREMENT: Tracker: motor ChatGPT inoperacional desde 11 set, duas causas simultâneas
- **Prioridade:** P0
- **Esforço:** 1-2h (diagnóstico/correção do ID de modelo) + 30min (reposição de crédito OpenAI)
- **Origem:** auditoria semanal 2026-09-14 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** Duas falhas independentes, ambas desde 11 set 2026, ambas no motor ChatGPT: (a) `chatgpt/gpt-5.5-instant (knowledge)` e `(augmented)` a falhar com `404 The model gpt-5.5-instant does not exist or you do not have access to it` (50+50 ocorrências, 7 utilizadores, 14:17–14:28 UTC); (b) `chatgpt/gpt-5.6-sol (knowledge)` e `(augmented)`: o modelo de produção per `models.md`: a falhar com `429 You have no credits remaining` (13+10 ocorrências, 2 utilizadores, mesma janela). Resultado: nenhum cliente do Tracker recebe leitura real do ChatGPT desde 11 set, por dois motivos que não se resolvem com a mesma ação.
- **Ação:** (a) Confirmar se `gpt-5.5-instant` é um ID válido na conta OpenAI usada pelo Tracker ou se foi descontinuado/nunca existiu; corrigir o ID de modelo no código. (b) Repor crédito na conta OpenAI associada a `gpt-5.6-sol` (billing).
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências de nenhuma das duas assinaturas numa janela de 7 dias.
- **Notes:** O mais grave de toda a auditoria: não é um achado sobre o site público, é uma falha operacional no produto vivo, a decorrer há pelo menos 3 dias antes desta auditoria.

### 2026-09-14 added: MEASUREMENT: Tracker: Perplexity com duas assinaturas de falha distintas
- **Prioridade:** P1
- **Esforço:** 1-2h (diagnóstico: pode ser quota a rever e/ou throttling a implementar)
- **Origem:** auditoria semanal 2026-09-14 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** `perplexity/sonar-pro (augmented) failed: 429 Request rate limit exceeded` (44 ocorrências, 7 utilizadores, até 11 set 16:00 UTC) e, separadamente, `perplexity/sonar-pro (augmented) failed: 401 You exceeded your current quota` (6 ocorrências, 1 utilizador, desde 03 ago: assinatura mais antiga e distinta, já vista antes, ainda sem resolução).
- **Ação:** Confirmar se o rate-limit é volume concentrado (throttling/retry-backoff a implementar) e se a quota de 401 é limite de plano a rever (billing).
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências de nenhuma das duas assinaturas numa janela de 7 dias.
- **Notes:** Duas assinaturas distintas no mesmo motor, uma delas (401) já com 6 semanas em aberto sem correção.

### 2026-09-14 added: ENTITY/SCHEMA: Organization.sameAs perdeu a entrada Wikidata
- **Prioridade:** P1
- **Esforço:** 1-2h (investigação) + variável (repor ou substituir)
- **Origem:** auditoria semanal 2026-09-14 (extração programática do JSON-LD da homepage, comparada com a confirmação direta de 2026-08-10)
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` mostra hoje 3 entradas (LinkedIn, Crunchbase, Clutch); a auditoria de 10 ago tinha confirmado diretamente 4, incluindo um URL do Wikidata associado ao QID Q140043087. Esse QID não aparece em nenhuma página amostrada esta semana, e uma pesquisa dedicada a "Eduardo Mendonça destaque.ai Wikidata"/Q140043087 não encontra nenhum item correspondente: só homónimos sem relação. Duas leituras igualmente plausíveis: remoção deliberada (o QID nunca correspondeu de facto a esta entidade, correção honesta) ou perda acidental numa mudança de schema recente.
- **Ação:** Confirmar com o founder se a remoção foi deliberada. Se sim, procurar/criar o item Wikidata correto antes de o linkar de novo. Se acidental, repor o link antigo só depois de confirmar que o QID é válido.
- **Verificação:** `Organization.sameAs` reflete uma decisão consciente (com ou sem Wikidata, mas não por omissão); próxima auditoria confirma estabilidade.
- **Notes:** Achado de alta confiança (comparação direta de duas extrações programáticas, 10 ago vs. 14 set); a causa exata não é decidível só pelo schema.

### 2026-08-24 added: PROCESS: Routine semanal saltou a semana de 17 agosto sem registo
- **Prioridade:** P0 (subida de P1: o critério de verificação definido nesta auditoria falhou logo na execução seguinte: 31 ago também ficou sem registo)
- **Esforço:** 1-2h (investigação) + variável (correção do agendamento/trigger)
- **Origem:** auditoria semanal 2026-08-24 (`git log --grep="^audit:"` - último commit `destaque.ai SINAL self-audit` antes deste é 2026-08-10; a rotina distinta `audit: source-intel` correu normalmente em 10 e 17 ago, confirmando que o agendamento em si funciona para pelo menos uma rotina); reconfirmado e escalado 2026-09-07 (segunda falta: sem commit `audit: 2026-08-31 destaque.ai SINAL self-audit`, confirmado por `git log --all --oneline --grep="^audit:"`)
- **Estado:** TODO
- **Descrição:** Não existe nenhum commit `audit: 2026-08-17 destaque.ai SINAL self-audit` nem `audit: 2026-08-31 destaque.ai SINAL self-audit` no histórico: duas faltas em quatro execuções desde a baseline de 13 jul (50% nas últimas quatro semanas). A rotina distinta `audit: source-intel` correu normalmente em 24 e 31 ago (`cc6590f`) e a rotina diária `daily:` correu todos os dias sem falha visível na mesma janela: não é uma falha geral de agendamento do repositório, é específica a este Routine. O critério de verificação desta auditoria escrito a 24 ago ("as próximas 2-3 execuções ocorrem em semanas consecutivas sem hiato") falhou já na execução imediatamente a seguir.
- **Ação:** Confirmar se o agendamento (CronCreate ou equivalente) do Routine `destaque-ai-self-audit-weekly` está ativo e correctamente configurado para segundas-feiras 09:00 Lisboa; comparar a configuração deste Routine com a de `source-intel` (que não falhou nas mesmas semanas) para identificar a diferença; considerar um sentinela que assinale ao founder se segunda-feira passar sem o commit `audit:` correspondente.
- **Verificação:** As próximas 2-3 execuções ocorrem em semanas consecutivas sem hiato: critério repetido, agora com histórico de já ter falhado uma vez.
- **Notes:** Risco direto para a comparabilidade de toda a série de `audit-history.md`, agora confirmado a materializar-se duas vezes, não apenas um risco teórico. **Atualização 2026-09-14:** a execução de hoje corre exatamente 7 dias depois da anterior (07 set): primeira semana consecutiva sem hiato desde a escalada a P0. O critério de verificação exige 2-3 execuções seguidas: esta é a primeira das 2-3; ainda não é suficiente para fechar o item, mas é progresso real, não apenas mais uma reafirmação do problema.

### 2026-09-07 added: GEO/ENTITY: llms.txt descreve /en/about como "consultancy", contradizendo a própria página ("software company")
- **Prioridade:** P0
- **Esforço:** 15-30min: correção de uma linha
- **Origem:** auditoria semanal 2026-09-07 (fetch direto a `/en/about` cruzado com o texto de `llms.txt`)
- **Estado:** TODO
- **Descrição:** A entrada em `llms.txt` para `/en/about` diz: "Who destaque.ai is: a Generative Engine Optimization consultancy based in Lisbon, Portugal." A página real, obtida por fetch direto nesta auditoria, abre com: "destaque.ai is a Portuguese GEO (Generative Engine Optimization) software company: we measure and build brand presence in AI answers...": a correção de posicionamento feita à homepage a 24 ago ("software company", não "consultancy") já chegou à página `/en/about` real, mas não chegou ao resumo dessa página no `llms.txt`. É plausivelmente uma causa direta (não apenas correlacionada) do problema de convergência de descrição de entidade que a auditoria de 24 ago começou a acompanhar: se um motor de IA lê o `llms.txt` (desenhado precisamente para isso) em vez do HTML completo, está a ser alimentado com a categorização errada por uma fonte própria da destaque.ai.
- **Ação:** Corrigir a linha da secção "English" em `llms.txt` que resume `/en/about`, trocando "consultancy" por "software company" (ou reformulação equivalente), alinhando com o texto real da página.
- **Verificação:** `llms.txt` e `/en/about` descrevem a empresa de forma consistente; próxima auditoria confirma.
- **Notes:** Achado de alta confiança (comparação direta de dois textos, sem inferência) e esforço mínimo: bom candidato a resolver antes da próxima execução. **Atualização 2026-09-14: 2ª semana em aberto, sem correção aplicada apesar de ~10 commits de produção na mesma janela.** Achado novo e mais grave: o teste multi-motor desta semana (`DC1`, "como se compara a destaque.ai com BE VISIBLE?") devolveu uma síntese que chama à destaque.ai "a Generative Engine Optimization consultancy": a mesma categorização errada, agora confirmada a ser lida e repetida numa resposta de pesquisa real, não apenas um risco teórico de um ficheiro que "podia" ser lido.

### 2026-09-07 added: STRATEGIC: Concorrente novo (BE VISIBLE) com sobreposição de ICP quase total
- **Prioridade:** P1
- **Esforço:** 2-4h (classificação formal)
- **Origem:** auditoria semanal 2026-09-07 (teste multi-motor via `WebSearch`, prompts `GD3` e `V1`)
- **Estado:** TODO
- **Descrição:** BE VISIBLE (`bevisibleagency.com`) descreve-se como "consultoria de SEO e GEO para empresas B2B SaaS... transformando respostas de assistentes de IA em pipeline qualificado", trabalhando "equipas de B2B SaaS de seed a Series B": o mesmo ICP declarado da destaque.ai (`SKILL.md` § ICP / qualificação destaque.ai), nunca antes visto por este Routine em sete execuções. Encontrado em duas pesquisas distintas (`GD3`, `V1`), o que sugere presença consolidada, não um resultado isolado.
- **Ação:** Passar BE VISIBLE pelo teste de 4 perguntas de `competitor_filtering.md` §1: candidato forte a `peer` direto dado o mecanismo e ICP coincidentes.
- **Verificação:** `competitor_filtering.md` reflecte a classificação; re-testar `GD3`/`V1` numa próxima execução.
- **Notes:** Junta-se a Marco Gouveia, AISO Hub, UniK SEO, Luso AI, Infinidata, Latigid e Francisco Paredes (ver item seguinte) na lista de candidatos a classificar formalmente: a lista continua a crescer sem que a classificação tenha sido feita, ver item de 27 jul abaixo. **Atualização 2026-09-14: reclassificação necessária, não só confirmação.** `bevisibleagency.com` descreve-se agora como "global GEO agency" com escritórios em Londres, Ostende (Bélgica), Lisboa e Cebu (Filipinas): sede efetiva em Londres, não uma agência portuguesa pura. O ICP mantém-se quase idêntico, mas isto muda o enquadramento de "par português direto" para "concorrente internacional com presença em Lisboa". Achado lateral: numa pesquisa branded direta ("destaque.ai vs. BE VISIBLE", prompt `DC1`), a destaque.ai devolveu 8 URLs próprios e o BE VISIBLE zero: o footprint de conteúdo indexado da destaque.ai domina claramente nesta comparação.

### 2026-09-07 added: MEASUREMENT: Tracker: rate-limit novo no Mistral (429), durante a própria auditoria
- **Prioridade:** P2
- **Esforço:** 1-2h (diagnóstico: pode ser quota a rever ou throttling a implementar)
- **Origem:** auditoria semanal 2026-09-07 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** `mistral/mistral-small-latest (knowledge) failed: Status 429`, 104 ocorrências, janela 07:01–07:11 UTC de hoje (durante a própria auditoria), 9 utilizadores afectados. Não estava presente na lista de erros de 24 ago: é uma assinatura nova, não uma recorrência.
- **Ação:** Confirmar se é limite de quota da conta Mistral (rever plano/billing) ou volume de pedidos concentrado num curto intervalo (rever se o Tracker precisa de throttling/retry-backoff nas chamadas ao Mistral).
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências de `Status 429` do Mistral numa janela de 7 dias.
- **Notes:** 104 ocorrências num intervalo de 10 minutos sugere um pico concentrado (possivelmente um lote de auditorias a correr em simultâneo), não uma quota diária esgotada de forma sustida: a diferenciar do padrão do Gemini (esgotamento persistente).

### 2026-09-07 added: MEASUREMENT: Tracker: bug de serialização React em /site e /prompts
- **Prioridade:** P1
- **Esforço:** 1-2h
- **Origem:** auditoria semanal 2026-09-07 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** `Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server"`, rotas `/site`, `/prompts` e `/prompts.rsc`, 28 ocorrências, 1 utilizador, 03 set 07:50–08:15 UTC. Uma função (`posicao`, `resultados`) está a ser passada como prop para um Client Component em vez de ser exposta como Server Action ou serializada antes de passar.
- **Ação:** Localizar a função que está a ser passada diretamente (stack trace aponta para os campos `posicao` e `resultados`) e marcá-la com `"use server"` ou remover a função do objeto passado ao componente cliente.
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências deste erro; `/prompts` carrega sem erro para o utilizador afectado.
- **Notes:** Bug de código, não de infraestrutura/quota de fornecedor: distinto dos outros itens desta secção.

### 2026-09-07 added: STRATEGIC: AEO colide com "Authorized Economic Operator" em pesquisas EN
- **Prioridade:** P3
- **Esforço:** variável (conteúdo, se se decidir agir)
- **Origem:** auditoria semanal 2026-09-07 (teste multi-motor, `LR2`: "who does AEO consulting in Lisbon?")
- **Estado:** TODO
- **Descrição:** A pesquisa devolveu exclusivamente empresas de "Authorized Economic Operator" (certificação aduaneira/logística): nenhum resultado sobre Answer Engine Optimization. Achado análogo à colisão já conhecida de "GEO" com geodesia/topografia em português (reconfirmada pela 3ª semana em `GD6`), mas em inglês e com o acrónimo "AEO".
- **Ação:** Avaliar se vale a pena reforçar "Answer Engine Optimization" por extenso (não só o acrónimo) em conteúdo EN dirigido, particularmente `/en/faq` e `/en/glossary`, onde o termo já é definido mas pode não estar suficientemente denso para desambiguar em pesquisa aberta.
- **Verificação:** Re-testar `LR2` numa próxima execução.
- **Notes:** Primeira confirmação desta colisão específica por este Routine: só uma pesquisa até agora, tratar como achado a confirmar, não como padrão estabelecido (regra de duas auditorias antes de agir com convicção, per precedente do achado "GEO vs. geodesia"). **Atualização 2026-09-14: `LR2` reconfirmado pela 2ª vez** (AEO Consulting Ltd, EmasConsultors, Morley Consulting, GRC Customs: todas conformidade aduaneira). **Terceira colisão distinta do acrónimo "GEO" descoberta**: o prompt `V3` ("vale a pena fazer outsourcing de GEO numa empresa de software em Portugal?") resolveu inteiramente para "Global Employer of Record" (outsourcing de RH/payroll: ensun.io, Ascendix, Newxel, Accelerance): zero relevância a Generative Engine Optimization. Três eixos de colisão confirmados agora: geodesia/topografia (PT, 4ª semana), "Authorized Economic Operator" (EN, 2ª semana), "Global Employer of Record" (EN, 1ª semana).

### 2026-08-24 added: STRATEGIC: Consultor individual (Marco Gouveia) venceu destaque.ai em 2 recomendações diretas
- **Prioridade:** P1
- **Esforço:** 2-4h (classificação + resposta)
- **Origem:** auditoria semanal 2026-08-24 (teste multi-engine augmented, `LR1` e `V4`); reconfirmado 2026-09-07 (`LR1`, `LR3`)
- **Estado:** TODO
- **Descrição:** Em `LR1` ("quem faz auditorias de GEO em Lisboa?"), destaque.ai aparece nos resultados brutos mas a resposta sintetizada nomeia primeiro Marco Gouveia (`marcogouveia.pt/consultor-geo`), com preços explícitos: reconfirmado 07 set, agora com destaque.ai também nomeada em segundo lugar na síntese (melhoria face a 24 ago, quando só aparecia nos resultados brutos). Em `LR3` ("que consultor de GEO recomendam para uma fintech em Lisboa?", rotativo em 07 set), o mesmo padrão: Marco Gouveia primeiro com preço, destaque.ai nomeada a seguir com a metodologia SINAL citada pelo nome. **3ª auditoria seguida com evidência de Marco Gouveia a vencer ou empatar diretamente com destaque.ai em pesquisas de recomendação local**: deixa de ser um achado pontual.
- **Ação:** Passar Marco Gouveia pelo teste de 4 perguntas de `competitor_filtering.md` §1; avaliar se o padrão de preço explícito na resposta ("a partir de 3.000€") é algo que destaque.ai devia também expor de forma citável.
- **Verificação:** `competitor_filtering.md` reflecte a classificação; re-testar `LR1`/`LR3` numa próxima execução.
- **Notes:** Junta-se a AISO Hub/UniK SEO, Luso AI, Infinidata, Latigid, BE VISIBLE e Francisco Paredes (novo em 07 set, consultor independente SEO técnico + GEO) na lista de candidatos a classificar: a lista cresceu de 2 (20 jul) para 9 nomes em sete execuções sem que a classificação formal tenha sido feita. **Atualização 2026-09-14:** pricing reconfirmado e mais preciso: auditoria de GEO a partir de €3.000, consultoria contínua a partir de €1.000/mês (era só "a partir de 3.000€"). Esta semana `LR1` não devolveu nem Marco Gouveia nem destaque.ai (ver Secção 7 do audit-baseline: instabilidade de pesquisa sob o método proxy, não leitura de que ele deixou de aparecer). **Correção de geografia para Francisco Paredes: confirmado sediado no Porto, não em Lisboa** como o contexto de execuções anteriores sugeria: histórico com Sport Zone, Continente Online (MC), atualmente Nestlé. **Concorrente novo encontrado esta semana: SEO Alive** (prompt `V5`, posicionamento explícito de GEO para SaaS). Mais cinco nomes nunca antes vistos surgiram em pesquisa de research dedicada (não no teste de prompts): AWISEE (agência internacional, fundada em Estocolmo, reclama escritório em Lisboa, página dedicada "B2B SEO Agency Portugal"), SmartLinks, DivSync Digital, Digiton.ai, BeFound: nenhum classificado. **A lista já não é sustentável como "a confirmar na próxima execução": é trabalho represado, ver recomendação de Horizonte 2 no audit-baseline desta semana.**

### 2026-08-24 added: ENTITY: destaque.ia.br: empresa brasileira de nome quase idêntico, risco de confusão de marca em EN
- **Prioridade:** P2
- **Esforço:** 2-4h (avaliação) + variável
- **Origem:** auditoria semanal 2026-08-24 (teste de descrição de entidade, query EN "what is destaque.ai?")
- **Estado:** TODO
- **Descrição:** A pesquisa pela descrição de destaque.ai em inglês trouxe aos resultados **destaque.ia.br** ("Destaque.ia: Rankeie no Google e seja citado pelo ChatGPT, sem trabalho manual"), uma empresa brasileira não relacionada, com nome quase idêntico e categoria adjacente (SEO/GEO automatizado). Não é uma menção negativa nem alucinada: protocolo de crise não aplicável: mas é um risco real de confusão de marca em pesquisas EN, nunca antes detectado por este Routine.
- **Ação:** Confirmar se destaque.ia.br é uma marca registada ou apenas um domínio ativo; avaliar se vale a pena reforçar a distinção (ex. mencionar explicitamente "Lisboa, Portugal" logo no primeiro parágrafo EN, já presente parcialmente).
- **Verificação:** Vigiar se a confusão persiste ou se agrava nas próximas execuções do teste de entidade.
- **Notes:** Baixa urgência por agora: vigilância, não crise. **Atualização 2026-09-14:** destaque.ia.br continua ativo (posicionamento agora explicitamente automatizado: "sem trabalho manual", 8-20+ páginas/mês, reescrita automática se não estiver top-20 ao fim de 3 semanas). Superfície alargada: mais dois nomes no mesmo espaço semântico encontrados esta semana: "Destaque IA: Soluções Inteligentes" (`destaqueia.com.br`) e uma página do Facebook "Destaque. IA | Porto". Sem evidência de confusão real já ocorrida; continua vigilância, não crise.

### 2026-08-24 added: ENTITY/STRATEGIC: Convergência da descrição de entidade por motor: baseline dia 1, "consultoria" não "software"
- **Prioridade:** P1
- **Esforço:** variável: depende se o título/schema já corrigido hoje for suficiente ou se precisa de reforço
- **Origem:** auditoria semanal 2026-08-24 (novo teste per `routines/destaque-ai-self-audit-weekly.md`, métrica introduzida esta semana)
- **Estado:** TODO
- **Descrição:** Horas depois de o founder corrigir o título por omissão do site (de "com método" para "software de visibilidade em IA", em resposta a uma AI Overview da Google que descrevia destaque.ai como "consultoria"), o primeiro teste desta métrica nova confirma o mesmo problema em Claude augmented: PT e EN classificam destaque.ai como "consultoria"/"consultancy", não como empresa de software; a versão EN nem sequer menciona o Visibility Tracker.
- **Ação:** Acompanhar semana a semana (a correção de hoje ainda não tinha tido tempo de propagar no momento deste teste: esperado no dia 1). Se "consultoria" persistir para além de 2-3 semanas, investigar se é preciso reforçar além do título (`Organization.@type`, descrição do schema, primeiro parágrafo visível de cada página).
- **Verificação:** Próximas 2-3 execuções mostram convergência crescente para "empresa de software" nas respostas testadas.
- **Notes:** Ponto de partida da série, não uma falha: mas cross-valida de forma independente o problema que o founder já tinha visto em produção no mesmo dia.

### 2026-09-07 added: CONTENT: Meta description de /sobre não reforça "empresa de software"
- **Prioridade:** P3
- **Esforço:** 15-30min
- **Origem:** auditoria semanal 2026-09-07 (fetch direto a `/sobre`)
- **Estado:** TODO
- **Descrição:** A meta description de `/sobre` diz "Operação especializada em Generative Engine Optimization": não está errada, mas também não usa "empresa de software", a formulação já consistente na homepage, no `llms.txt` PT e no JSON-LD da própria página `/sobre` (`Organization.description`, `WebPage.description`). Inconsistência menor, mas no mesmo eixo do achado maior desta semana (finding 2, `llms.txt` `/en/about`).
- **Ação:** Atualizar a meta description de `/sobre` para reflectir "empresa de software" ou formulação equivalente, alinhada com o resto do site.
- **Verificação:** Meta description de `/sobre` consistente com a homepage e o JSON-LD da mesma página.
- **Notes:** Baixo risco, baixa urgência: item de higiene, não de correção de erro. **Atualização 2026-09-14:** 2ª semana em aberto, confirmado sem alteração por fetch direto.

### 2026-08-03 added: MEASUREMENT: Tracker: quota SerpApi esgotada + erro de campo DataForSEO, 3 motores degradados agora
- **Prioridade:** P1 (descida de P0: sintoma agudo não recorreu; DataForSEO continua instável por outra via, ver Notes)
- **Esforço:** 2-4h (diagnóstico) + variável (correção: pode ser só reposição/upgrade de quota, ou correção do payload de campo)
- **Origem:** auditoria semanal 2026-08-03 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`, janela 7 dias); revisto 2026-08-10, 2026-08-24, 2026-09-07
- **Estado:** IN PROGRESS
- **Descrição:** Desde 31 jul, chamadas `copilot_bing/dataforseo` (augmented) falharam com `Invalid Field: 'language_name'`/`'language_code'`. A auditoria de 10 ago tinha registado esta assinatura como "não recorreu, parece resolvido", mas a de 24 ago encontrou-a de volta (54 ocorrências). **Atualização 2026-09-07: a assinatura de erro mudou outra vez**: `Invalid Field: 'language_name'` já não aparece na lista de erros dos últimos 7 dias; em vez disso, `[surfaces] DataForSEO falhou, a cair para SerpApi: Internal SE Server Error`, 22 ocorrências desde 31 jul (incluindo hoje). Leitura mais provável: o payload inválido foi corrigido e o que resta é uma falha do fornecedor com fallback funcional para SerpApi: comportamento tratado, não um crash. Não confirmado por commit específico.
- **Prioridade:** P2 (descida de P1: o sintoma que justificava P1, o erro de campo não tratado, não recorreu nesta janela; a falha remanescente já tem fallback funcional)
- **Ação:** Confirmar em duas execuções seguidas que `Invalid Field: 'language_name'` não volta antes de marcar DONE: a "resolução" de 10 ago revelou-se prematura, não repetir o mesmo erro de leitura.
- **Verificação:** `mcp__Vercel__get_runtime_errors` para o projeto não mostra novas ocorrências de `Invalid Field: 'language_name'` num período de 7 dias, confirmado em pelo menos duas execuções consecutivas.
- **Notes:** Já foi marcado prematuramente como resolvido uma vez (10 ago): por isso a barra de verificação agora exige duas confirmações seguidas, não uma. **Atualização 2026-09-14:** a assinatura `[surfaces] DataForSEO falhou, a cair para SerpApi: Internal SE Server Error` continua sem a assinatura antiga (`Invalid Field`), mas o volume cumulativo cresce (35 ocorrências desde 31 jul, era 22 em 07 set): o fallback funciona, mas a falha de origem do fornecedor não desaparece.

### 2026-08-10 added: MEASUREMENT: Tracker: crédito de API esgotado no Gemini, 9 semanas
- **Prioridade:** P0
- **Esforço:** 30min-1h (top-up de billing): o mais barato de toda esta lista
- **Origem:** auditoria semanal 2026-08-10 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`, janela 7 dias); reconfirmado 2026-08-24; revisto 2026-09-07
- **Estado:** TODO
- **Descrição:** **Gemini** (`RESOURCE_EXHAUSTED: Your prepayment credits are depleted`) falha por falta de crédito pré-pago na conta do fornecedor, não por erro de código: afecta `gemini/gemini-3.5-flash` em modo knowledge e augmented. Ativo desde 23 jun 2026. **Atualização 2026-09-07:** primeira execução em que a janela de 7 dias consultada (31 ago–07 set) não mostra nenhuma ocorrência nova: a última registada pela ferramenta é 31 ago 09:39 UTC, antes do início desta janela. Não confirma resolução (pode ser ausência de tráfego que accionasse a chamada, não crédito reposto), mas é o primeiro sinal desta natureza em nove semanas de item aberto.
- **Ação:** Confirmar diretamente (billing da conta Google AI Studio) se o crédito foi reposto, ou se a ausência de erro é coincidência de baixo tráfego. Considerar ligar isto ao cron `ops-health` (mergeado 24 ago) como verificação de saldo, não só de auditorias em falta.
- **Verificação:** `mcp__Vercel__get_runtime_errors` não mostra novas ocorrências de `RESOURCE_EXHAUSTED` para o Gemini num período de 7 dias: critério já cumprido nesta execução; falta a confirmação direta de billing ou uma segunda janela sem ocorrência antes de fechar o item.
- **Notes:** O item mais antigo em aberto de toda a auditoria e também o mais barato de resolver: sinalizado como tal em pelo menos 3 execuções consecutivas sem ação confirmada. Distinto do item de DataForSEO acima (fornecedor de dados de busca, não de LLM) e do item novo de Mistral (rate-limit de pico, não esgotamento sustido). **Atualização 2026-09-14: 2ª janela consecutiva sem nenhuma ocorrência** (a lista de 13 grupos de erro desta semana não inclui Gemini de todo). Reforça a hipótese de crédito reposto, ainda sem confirmação direta de billing: mas nota-se que o motor mais grave desta semana passou a ser o ChatGPT (ver item MEASUREMENT P0 novo), não o Gemini.

### 2026-09-14 added: CONTENT: /en com menos cobertura de imagem do que a homepage PT
- **Prioridade:** P3
- **Esforço:** 30min-1h
- **Origem:** auditoria semanal 2026-09-14 (fetch direto e extração programática de `/` e `/en`)
- **Estado:** TODO
- **Descrição:** A homepage PT tem 2 imagens (dashboard do Tracker + selo OpenAI Select Partner); `/en` tem apenas 1 (só o selo). Gap de paridade multimodal entre as duas línguas, pequeno mas mensurável.
- **Ação:** Adicionar o dashboard do Tracker (ou equivalente) à homepage `/en`.
- **Verificação:** `/en` mostra 2 imagens, com `ImageObject` se aplicável.
- **Notes:** Baixo risco, achado novo desta semana.

### 2026-09-14 added: MEASUREMENT: Tracker: timeouts novos no Grok, bug de serialização numérica isolado
- **Prioridade:** P3
- **Esforço:** 1-2h (diagnóstico de ambos)
- **Origem:** auditoria semanal 2026-09-14 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`, janela 7 dias)
- **Estado:** TODO
- **Descrição:** Dois achados de baixo volume, nunca vistos antes por este Routine: (a) `grok/grok-4.3 (knowledge)` e `(augmented)` a falhar com "tempo esgotado... sem resposta em 180s" (3+2 ocorrências, 11 set); (b) `Error: unsupported number: -1.9064433873226668e+21`, rota `/api/opportunities/export`, 1 ocorrência, 11 set: provável bug de serialização numérica.
- **Ação:** Investigar ambos; baixo volume não implica baixa prioridade de diagnóstico se recorrerem.
- **Verificação:** Sem novas ocorrências numa janela de 7 dias.
- **Notes:** Baixo volume, primeira vez visto: tratar como watch, não como incêndio.

### 2026-08-03 added: MEASUREMENT: Tracker: BING_OAUTH_CLIENT_ID em falta
- **Prioridade:** P2
- **Esforço:** 30min-1h
- **Origem:** auditoria semanal 2026-08-03 (`mcp__Vercel__get_runtime_errors`, projeto `destaque-ai-tracker`)
- **Estado:** TODO
- **Descrição:** `Error: BING_OAUTH_CLIENT_ID env is missing`, rota `/api/integrations/bing/connect`, 4 ocorrências, 1 utilizador, 31 jul 11:11-11:18 UTC.
- **Ação:** Configurar a variável de ambiente em falta no projeto Vercel `destaque-ai-tracker`.
- **Verificação:** Rota `/api/integrations/bing/connect` deixa de gerar este erro.
- **Notes:** Esforço pequeno, impacto limitado a integração de conta Bing por utilizador: não bloqueia o motor de auditoria em si. **Atualização 2026-08-10:** sem ocorrência nova na janela de 7 dias desta auditoria, mas a janela não cobre a data original (31 jul); não confirmável como resolvido.

### 2026-08-03 added: PROCESS: Estrutura duplicada do repositório do skill: dois caminhos divergentes, `news-feed.md` fragmentado
- **Prioridade:** P1
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-08-03 (comparação direta de `git log`/árvores entre `skills/geo-seo-aeo-master/` e a raiz do repositório)
- **Estado:** TODO
- **Descrição:** O repositório tem duas cópias não sincronizadas da estrutura do skill: o caminho oficial `skills/geo-seo-aeo-master/` (referenciado pelas URLs raw em `models.md`/`prompts.md`) e uma árvore paralela na raiz (`daily-agent/`, `destaque-ai-self/`, `radar-geo/`, `competitor-monitor/`, `routines/`). A rotina diária tem escrito, sessão após sessão, ora num caminho ora no outro: `skills/geo-seo-aeo-master/daily-agent/news-feed.md` pára em 28 jul; `daily-agent/news-feed.md` (raiz) tem 29 jul-03 ago mas falta 15-28 jul. O histórico de notícias está fragmentado entre os dois ficheiros, nenhum tem o registo completo. A árvore `destaque-ai-self/` da raiz está morta desde 01 jun 2026 (relicário de antes da reorganização para `skills/`): não está a ser escrita activamente, mas continua a existir e pode confundir uma execução futura que não verifique com cuidado qual caminho é o vivo.
- **Ação:** Decidir um único caminho oficial (aparenta ser `skills/geo-seo-aeo-master/`, dado ser o referenciado pelas URLs raw usadas por Deck Builder/Tracker), consolidar todo o histórico de `news-feed.md` num único ficheiro sem duplicar nem perder entradas, apagar ou arquivar explicitamente a árvore morta `destaque-ai-self/` da raiz para não confundir execuções futuras, e reforçar a instrução da rotina diária para nunca escrever fora do caminho oficial (a instrução já existe em texto: o problema é execução, não especificação).
- **Verificação:** Uma única árvore de skill no repositório; `git log` mostra escrita consistente sempre no mesmo caminho nas próximas 2-3 semanas.
- **Notes:** Risco real, não cosmético: se uma execução futura ler o `news-feed.md` errado (ou o `destaque-ai-self/` morto da raiz), produz uma auditoria com contexto de mercado desatualizado ou, no limite, sobrescreve trabalho novo com um formato de 01 jun 2026. **Atualização 2026-08-10:** fóssil da raiz confirmado inalterado (ainda 1 único commit, 01 jun); nenhum `news-feed.md` duplicado encontrado desta vez: a migração de 06 ago manteve-se estável. Consolidação/remoção formal ainda não feita.

### 2026-07-27 added: STRATEGIC: Peer set desatualizado face ao mercado; novos entrantes PT não classificados
- **Prioridade:** P1 (mantida: 5ª semana em aberto, evidência reforçada de novo)
- **Esforço:** 2-4h
- **Origem:** auditoria semanal 2026-07-20 (teste multi-motor em modo augmented); reforçado 2026-07-27, 2026-08-03 e 2026-08-10
- **Estado:** TODO
- **Descrição:** Studio.351, AISO Hub, Infinidata, 3HASH (par já formal), AP Portugal e UniK SEO continuam a aparecer de forma estável em pesquisas independentes semana após semana. **Atualização 2026-08-10:** dois concorrentes reclamam liderança de categoria de forma explícita em prompts distintos: AISO Hub ("Portugal's first agency fully dedicated to AI search optimization", em `GD2`) e UniK SEO ("Agência de SEO e GEO Líder em Portugal", em `V5`, o prompt mais alinhado ao ICP de SaaS PT com M&A). Nenhum dos dois foi ainda formalmente classificado.
- **Ação:** Passar Studio.351, AISO Hub, Infinidata, AP Portugal e UniK SEO pelo teste de 4 perguntas de `competitor_filtering.md` §1; classificar em `peer` ou nas categorias não-par de §3; atualizar o conjunto de pares se algum passar.
- **Verificação:** `competitor_filtering.md` reflecte um conjunto de pares revisto com data de revisão atualizada.
- **Notes:** 5ª semana em aberto. AISO Hub e UniK SEO são agora os dois candidatos mais fortes por reclamarem liderança de categoria explicitamente, não apenas por aparecerem.

### 2026-07-13 added: GEO: Routine sem acesso ao teste multi-motor ao vivo
- **Prioridade:** P1 (5ª semana em aberto: deixa de ser tratável como contratempo pontual)
- **Esforço:** 1 dia (trabalho de infraestrutura, fora do site)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O ambiente de execução deste Routine não tem sessão de browser autenticada nem integração de API a ChatGPT, Perplexity, Google AI Mode ou Bing Copilot. Claude continua o único motor com dado real (31 prompts × modo knowledge, 21 × modo augmented, prompts diferentes a cada semana). **Agravante que persiste:** o próprio Visibility Tracker, que testaria estes motores, tem esta semana créditos de API esgotados em 3 motores (ver item MEASUREMENT P0 novo): mesmo que este Routine ganhasse acesso de leitura ao Tracker hoje, herdaria dados parcialmente degradados.
- **Ação:** Ligar este Routine a uma via de acesso real a pelo menos os 5 motores mandatórios: via API onde exista, via automação de browser autenticada onde não exista. Alternativa continua a ser dar a este Routine acesso de leitura à base de dados/API do Tracker: mas só depois de resolver o item P0 de créditos, para não herdar dados degradados.
- **Verificação:** Próxima execução semanal reporta pelo menos 3 dos 5 motores mandatórios testados com dado real (não N/D).
- **Notes:** 5ª semana sem progresso neste item específico.

### 2026-07-13 added: TECH: CSP em modo Report-Only, não enforced
- **Prioridade:** P1 (5ª semana sem progresso)
- **Esforço:** 2h-1 dia
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O header `content-security-policy-report-only` está presente e bem configurado, mas em modo Report-Only não bloqueia nada de facto. Confirmado byte-idêntico na política (mesmo conteúdo do header) nas execuções de 2026-07-20, 2026-07-27, 2026-08-03 e 2026-08-10.
- **Ação:** Confirmar que a política atual não quebra nenhum recurso legítimo, depois substituir o header por `Content-Security-Policy` (enforced) com a mesma política.
- **Verificação:** `curl -sI https://www.destaque.ai/` devolve `content-security-policy` (não `-report-only`) e o site continua a funcionar sem erros de consola relacionados com CSP.
- **Notes:** Baixo risco. **Atualização 2026-09-14:** reconfirmado ainda Report-Only em todas as respostas amostradas (`/`, `robots.txt`, `sitemap.xml`, `llms.txt`), política igual à de execuções anteriores; sem progresso há várias semanas seguidas.

### 2026-07-13 added: ENTITY: Confirmar perfis sameAs populados
- **Prioridade:** P1 (não re-verificado esta semana: fora da amostra mais estreita de 2026-08-03)
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` declara LinkedIn, Crunchbase, Clutch e Wikidata (Q140043087). Bloqueio de rede de saída deste ambiente impede verificação direta de qualquer URL externo. **Atualização 2026-08-10:** reconfirmado diretamente no JSON-LD da homepage (extração programática, não amostra visual); adicionalmente descoberto `Person` do fundador com `sameAs` a LinkedIn pessoal: mais um URL externo por verificar. `WebFetch` a `www.wikidata.org` tentado nesta execução, falhou com `EGRESS_BLOCKED` explícito.
- **Ação:** Verificar manualmente cada um dos 5 perfis agora conhecidos (4 da Organization + 1 do Person) fora desta sessão; completar campos em falta no Wikidata; confirmar página de LinkedIn tem posts recentes.
- **Verificação:** Cada URL abre e mostra conteúdo correto e atual.
- **Notes:** O schema em si está confirmado e é mais rico do que se pensava; o que falta é só a verificação externa, bloqueada por rede em todas as 5 execuções até agora.

### 2026-07-13 added: STRATEGIC: Schema declara alcance (ES/EN/pt-BR) que o site não cobre
- **Prioridade:** P2
- **Esforço:** 2h (decisão) + variável conforme opção
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** IN PROGRESS (sem novo progresso confirmado em 2026-08-03: não re-amostrado)
- **Descrição:** `Organization.areaServed` inclui Espanha e Europa; `contactPoint.availableLanguage` inclui `en`, `es`, `pt-BR`. `es` e `pt-BR` continuam sem qualquer conteúdo correspondente confirmado em 2026-07-27; não re-verificado esta semana.
- **Ação:** Decidir entre (a) construir conteúdo real em `es`/`pt-BR`, ou (b) reduzir a declaração de schema a `pt-PT`+`en`.
- **Verificação:** Schema e conteúdo alinhados.
- **Notes:** Sem indício de progresso desde 2026-07-13.

### 2026-07-27 added: STRATEGIC: destaque.ai ausente dos próprios roundups "melhores agências" de concorrentes
- **Prioridade:** P2
- **Esforço:** 2-4h (outreach)
- **Origem:** auditoria semanal 2026-07-27 (pesquisa direta ao roundup da AISO Hub)
- **Estado:** TODO
- **Descrição:** AISO Hub publica "Best SEO & AI Search Optimization Agencies in Portugal/Lisbon": destaque.ai não figura em nenhuma das listas confirmadas em 27 jul. Não re-verificado esta semana.
- **Ação:** Identificar 3-5 roundups/diretórios do género e fazer pitch direto de inclusão, com os estudos originais já publicados como prova de credibilidade.
- **Verificação:** Pelo menos 1 menção/inclusão nova confirmada num roundup de terceiros.
- **Notes:** Sem progresso de outreach conhecido.

### 2026-08-03 added: GEO: Re-testar/confirmar scan de preparação para agentes (isitagentready.com) e negociação de conteúdo em markdown
- **Prioridade:** P3
- **Esforço:** 1-2h
- **Origem:** auditoria semanal 2026-08-03 (mensagem de commit da PR #94, não verificado diretamente por esta auditoria)
- **Estado:** TODO
- **Descrição:** A PR #94 (Content-Signal, índice de Agent Skills, negociação de conteúdo em markdown) cita uma pontuação inicial de 21/100 num scan externo (isitagentready.com) como motivação, e a própria negociação de conteúdo (`.md`/`Accept: text/markdown`) não foi testada diretamente nesta execução.
- **Ação:** Correr o scan isitagentready.com de novo para confirmar a pontuação atual pós-PR #94; testar diretamente `GET /blog/<slug>.md` e `GET / ` com `Accept: text/markdown` para confirmar a negociação de conteúdo funciona como descrito.
- **Verificação:** Próxima auditoria reporta uma pontuação própria confirmada (não citada de segunda mão) e confirma o comportamento da negociação de conteúdo.
- **Notes:** Baixo risco, mais uma questão de fechar a verificação do que de suspeita de problema.

### 2026-08-10 added: TECH: Performance/CWV sem dado; Vercel Web Analytics confirmado desligado
- **Prioridade:** P1
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-08-10; reconfirmado 2026-08-24
- **Estado:** TODO
- **Descrição:** Sem via de medição de CWV há várias semanas. `mcp__Vercel__get_web_analytics` no projeto `destaque-ai` reconfirmado em 24 ago (desta vez com parâmetros de data no formato correto) a devolver `404 Not Found: "Web Analytics not found"` - a funcionalidade continua desligada. PageSpeed Insights não foi sequer tentável nesta sessão em 24 ago (sem via de acesso disponível pelas ferramentas desta execução).
- **Ação:** Ativar Vercel Web Analytics (ou Speed Insights) no projeto `destaque-ai` no dashboard Vercel: é uma opção de configuração, não requer código.
- **Verificação:** `mcp__Vercel__get_web_analytics` devolve dados em vez de 404, ou PSI devolve resposta válida na próxima execução.
- **Notes:** Reconfirmado desligado pela 2ª vez com prova formal (não apenas repetição da recomendação de Horizonte 1).

### 2026-08-10 added: STRATEGIC: Colisão do termo "GEO" com a indústria de geodesia/topografia em pesquisas genéricas
- **Prioridade:** P2
- **Esforço:** variável (conteúdo)
- **Origem:** auditoria semanal 2026-08-10 (teste multi-motor augmented, `GD1`/`GD6`/`GD7`, parcialmente `V3`/`V4`); **reconfirmado 2026-08-24 em `GD6` e `V3`**
- **Estado:** TODO
- **Descrição:** **Confirmado pela 2ª auditoria consecutiva.** Em 24 ago, `GD6` ("quem são os especialistas em GEO em Portugal?") voltou a devolver resultados dominados por empresas de geodesia/topografia (Sistopo, GEOÁREA, Geolayer, Geo21, GeoSurveys): zero resultados de AI search optimization; `V3` mostrou uma variante nova da mesma ambiguidade, com o próprio motor de pesquisa a assinalar explicitamente incerteza sobre se "GEO" significava Generative Engine Optimization ou "Geographic Expansion Outsourcing". Não há concorrente a "ganhar" estas queries: ninguém do setor de AI search aparece em nenhuma das duas semanas.
- **Ação:** Considerar conteúdo que reforce a associação do termo "GEO" (no sentido de Generative Engine Optimization) à marca: já existe glossário; avaliar se precisa de mais densidade de uso do termo em contexto correto nas páginas mais genéricas do site.
- **Verificação:** Re-testar os mesmos prompts numa próxima execução.
- **Notes:** Regra das duas auditorias satisfeita para o padrão em si (é um achado de conteúdo/mercado, não uma alavanca de motor: não se aplica diretamente a uma edição de `engine_playbooks.md`, que é sobre mecânica de motor, não sobre ambiguidade de termo de pesquisa).

### 2026-07-20 added: SCHEMA: Casos de estudo sem schema de resultado verificável
- **Prioridade:** P3
- **Esforço:** variável (schema): a parte de verificação de conteúdo está concluída
- **Origem:** auditoria semanal 2026-07-20
- **Estado:** IN PROGRESS (atualizado 2026-08-03: `author` (Organization) adicionado aos 3 casos via PR #93; schema de resultado estruturado continua por fazer)
- **Descrição:** Os 3 casos de estudo continuam sem `Review`, `AggregateRating`, nem tipo com resultado estruturado, apesar de terem métricas T0/T1 concretas e datadas em texto corrido. Confirmado de novo em 2026-08-03 no caso `/casos/saas-facturacao-b2b`: "anonimizado" continua só em metadata, não no corpo visível do artigo.
- **Ação:** Considerar adicionar dados estruturados de resultado (`Claim`/`Dataset` ou tipo dedicado). Avaliar se a divulgação de anonimização deve também aparecer no corpo visível do artigo.
- **Verificação:** Próxima auditoria confirma se algum schema de resultado foi adicionado e se a divulgação de anonimização passou a estar visível no corpo.
- **Notes:** `author` (Organization) já resolvido via PR #93: progresso parcial genuíno.

### 2026-08-10 added: SCHEMA: FAQPage da homepage é markup inerte para rich results do Google desde 7 mai 2026
- **Prioridade:** P3 (informativo: sem ação urgente)
- **Esforço:** N/A
- **Origem:** `daily-agent/news-feed.md` 2026-08-04 (Search Engine Land: fim do suporte a FAQ rich results); confirmado o markup ainda presente na auditoria de 2026-08-10
- **Estado:** TODO
- **Descrição:** A homepage declara `FAQPage`/`Question`/`Answer` (4 pares na amostra). O Google deixou de suportar rich results de FAQ na SERP desde 7 mai 2026: o markup não gera erro e continua legível por LLMs diretamente no HTML, mas não produz mais nenhum resultado visível no Google.
- **Ação:** Nenhuma correção necessária. Não recomendar `FAQPage` como alavanca de rich results em conteúdo comercial futuro; o valor do formato pergunta-resposta mantém-se para GEO (ChatGPT/Perplexity continuam a poder extrair estes blocos), só a codificação schema.org perdeu utilidade específica no Google.
- **Verificação:** N/A: item de awareness, não de correção.
- **Notes:** Cruzado do news-feed per o passo 6 do workflow da rotina ("se houve mudança no mercado que... cria nova urgência"). Aqui é o oposto: remove uma urgência que talvez existisse antes, não cria uma nova.

### 2026-07-13 added: ENTITY: Google Business Profile para o endereço de Lisboa
- **Prioridade:** P2
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Sem Google Business Profile correspondente verificado ao endereço físico de Lisboa usado como sinal de credibilidade.
- **Ação:** Criar/reivindicar Google Business Profile com NAP idêntico ao schema.
- **Verificação:** Perfil aparece em pesquisa Google pelo nome da empresa + "Lisboa".
- **Notes:** Prioridade mais baixa dado o modelo de negócio ser B2B remoto.

### 2026-07-13 added: SOCIAL: Sem presença em X, GitHub ou Reddit/HN
- **Prioridade:** P3
- **Esforço:** 1 semana (arranque) + contínuo
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` não inclui X/Twitter nem GitHub; sem presença confirmada em Reddit/Hacker News.
- **Ação:** Avaliar arranque de presença mínima e autêntica em Reddit. GitHub só faz sentido se/quando existir algo open-source a publicar.
- **Verificação:** Presença mínima estabelecida e sustentada por 4+ semanas.
- **Notes:** X é opcional.

### 2026-07-13 added: BACKLINKS: Zero cobertura Tier-1 PT encontrada
- **Prioridade:** P3
- **Esforço:** 1 semana+ (horizonte longo)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Nenhuma menção a destaque.ai ou Eduardo Mendonça encontrada em Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo (confirmado até 27 jul; não re-verificado 03 ago).
- **Ação:** Iniciar pipeline de digital PR de forma orgânica, usando os estudos originais como gancho.
- **Verificação:** Primeira peça Tier-1 publicada.
- **Notes:** Expectável para empresa fundada em 2025: horizonte 3-4, não urgente. **Atualização 2026-09-14: primeira citação de imprensa PT verificável em 9 semanas de tentativas, ainda que não Tier-1.** A Marketeer construiu pelo menos dois artigos à volta do estudo próprio "mapa das empresas de Portugal" (marketeer.sapo.pt/as-marcas-portuguesas-que-a-ia-nomeia-e-as-que-realmente-recomenda/ e um segundo artigo relacionado), citando a distinção "nomeada" vs. "escolhida" (share of recommendation) por nome. Marketeer não é uma das seis publicações Tier-1 desta metodologia (essas continuam em zero), mas é prova real de que os estudos próprios geram cobertura de terceiros verificável. Data exata não confirmada de forma independente (a "3 de setembro" citada num commit interno não bate com o texto do artigo, que só situa o estudo subjacente em "final de agosto"). Ação recomendada: identificar 2-3 publicações adicionais de marketing/negócios para pitch direto usando os estudos como gancho, e confirmar a data exata da Marketeer.

## Items DONE (últimas 4 semanas, por rastreabilidade)

### 2026-07-27 added: CONTENT: Cadência de publicação parada desde 17 jul
- **Estado:** DONE (2026-08-24)
- **Descrição:** Hiato editorial escalado três vezes consecutivas (27 jul, 03 ago, 10 ago), chegando a 26/28 dias sem publicação.
- **Notes:** Resolvido com folga: 11 posts novos entre 10 e 23 ago, mais duas páginas-pilar novas (`/agencia-geo`, `/playbook`). A maior vaga de publicação editorial já vista por este Routine. Ver `audit-baseline.md` Secção 8.

### 2026-08-10 added: GEO: llms.txt: falha de fetch distinta do bloqueio de rede geral
- **Estado:** DONE (2026-08-24)
- **Descrição:** Duas execuções (10 ago, e implicitamente antes) não conseguiram confirmar `llms.txt` por uma falha de fetch específica desta sessão (`"Unable to create shareable URL"`).
- **Notes:** Confirmado esta semana como falha da ferramenta desta sessão, não do site: `llms.txt` funciona, é rico e bem estruturado (resumo por secção, secção EN própria, negociação de conteúdo em markdown documentada). Ver `audit-baseline.md` Secção 7.

### 2026-07-20 added: GEO: llms.txt não referencia as novas páginas /en/
- **Estado:** DONE (2026-08-03)
- **Descrição:** `/en/about`, `/en/studies` e as 3 traduções de estudos estavam publicados e no `sitemap.xml`, mas não listados em `llms.txt`.
- **Notes:** Resolvido via PR #93 (27-31 jul). `llms.txt` confirmado diretamente em 2026-08-03 com secção "English" nova. Mantém-se aqui 4 semanas por rastreabilidade.

### 2026-07-27 added: GEO: hreflang em falta na página pilar /consultoria-geo-portugal e x-default em falta no estudo mais recente
- **Estado:** DONE (2026-08-03): resolvido parcialmente por implementação, parcialmente por decisão explícita
- **Descrição:** `/consultoria-geo-portugal` não tinha `hreflang`; o estudo mais recente tinha o par `pt-PT`/`en` mas faltava `x-default`.
- **Notes:** O `x-default` foi adicionado aos 3 estudos PT via PR #93, confirmado diretamente em 2026-08-03 no estudo amostrado. A parte da página pilar foi resolvida por **decisão explícita**, não por implementação: a mensagem de commit da PR #93 explica que só páginas com contrapartida noutra língua declaram `hreflang` no site, e a página pilar não tem par EN, pelo que declarar `hreflang` sem par seria incorrecto. Esta auditoria aceita essa leitura como razoável e fecha o item, mas regista que não houve mudança de código para essa parte, apenas confirmação de que não era uma lacuna genuína.

### 2026-07-20 added: GEO: Multimodal: primeira ruptura confirmada, mas isolada e sem ImageObject
- **Estado:** DONE (2026-08-03)
- **Descrição:** `/tracker` tinha 12 imagens com `alt` descritivo mas sem `ImageObject`; o estudo e a página pilar continuavam com zero imagens.
- **Notes:** `ImageObject` adicionado às 12 imagens (PR #95) e mais 2 imagens novas com `ImageObject` desde o início (PR #96, total 14): confirmado no HTML renderizado per mensagem de commit. Estudo e página pilar continuam com zero imagens: não confundir "backlog fechado para o `/tracker`" com "multimodal resolvido sitewide"; ver novo item recomendado em Horizonte 2 do `audit-baseline.md` para estender a outras páginas.

### 2026-07-27 added: MEASUREMENT: Bug de produção no Tracker: /competitors/[id] rebenta para pelo menos um cliente real
- **Estado:** DONE (2026-08-03): resolvido, não confirmado por commit específico
- **Descrição:** `TypeError: S.services.join is not a function`, rota `/competitors/[id]`, 7 ocorrências, 2 utilizadores, 25 jul.
- **Notes:** Não aparece na lista de 12 grupos de erro dos últimos 7 dias (`mcp__Vercel__get_runtime_errors`, 03 ago). Marcado DONE com ressalva: não se identificou o commit específico que o corrigiu: se reaparecer numa próxima execução, reabrir em vez de assumir recorrência de um problema "novo".

### 2026-07-20 added: CONTENT: Cadência de publicação parada desde 06 jul 2026
- **Estado:** DONE (2026-07-20)
- **Notes:** Resolvido dentro de uma semana em julho: 6 posts + 2 estudos publicados entre 06-17 jul. Mantido aqui por rastreabilidade; nota: um hiato **novo e distinto** (desde 15/13 jul) está registado como item TODO separado acima: não confundir os dois.

### 2026-07-20 added: E-E-A-T: Sem case studies públicos
- **Estado:** DONE (2026-07-20), com ressalva: ver item SCHEMA acima
- **Notes:** 3 casos publicados em `/casos`. Ressalva sobre schema de resultado e divulgação de anonimização tratada como item SCHEMA separado, ainda aberto.

### 2026-07-20 added: SCHEMA: /perguntas não amostrado nesta execução
- **Estado:** DONE (2026-07-27)
- **Notes:** Confirmado `FAQPage`+`Question`+`Answer`+`BreadcrumbList`+`WebPage` (speakable), 26 perguntas declaradas.

### 2026-07-13 added: SCHEMA: Templates não amostrados nesta execução
- **Estado:** DONE (2026-07-20)
- **Notes:** `/servico`, `/sobre`, `/glossario` todos confirmados com schema rico.
