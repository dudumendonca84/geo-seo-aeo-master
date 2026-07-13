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

_(Primeira execução do Routine — 13 julho 2026. Sem P0: nenhum achado desta auditoria quebra algo fundamental.)_

### 2026-07-13 added — GEO — Routine sem acesso ao teste multi-motor ao vivo
- **Prioridade:** P1
- **Esforço:** 1 dia (trabalho de infraestrutura, fora do site)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O ambiente de execução deste Routine não tem sessão de browser autenticada nem integração de API a ChatGPT, Perplexity, Google AI Mode ou Bing Copilot. O único dado real obtido esta semana foi Claude Sonnet 5 em modo knowledge (0/4 menções a destaque.ai, mas também 0/4 concorrentes nomeados). O teste central da metodologia SINAL — visibilidade multi-motor, knowledge vs. augmented — não correu.
- **Acção:** Ligar este Routine a uma via de acesso real a pelo menos os 5 motores mandatórios — via API onde exista (OpenAI, Anthropic, Perplexity, Google) e via automação de browser autenticada onde não exista API de consumidor equivalente (Bing Copilot, Google AI Mode). Alternativa: ligar a base de dados do produto próprio Visibility Tracker (destaque-ai-tracker) a este ambiente, já que esse produto já faz este tracking — dogfooding directo em vez de duplicar o trabalho.
- **Verificação:** Próxima execução semanal reporta pelo menos 3 dos 5 motores mandatórios testados com dado real (não N/D).
- **Notes:** Confirmado nesta sessão que não existe projecto Supabase `destaque-ai-tracker` acessível — se os dados do Tracker existem, estão numa conta/org diferente da ligada a este ambiente.

### 2026-07-13 added — TECH — CSP em modo Report-Only, não enforced
- **Prioridade:** P1
- **Esforço:** 2h-1 dia
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** O header `content-security-policy-report-only` está presente e bem configurado (`default-src 'self'`, `frame-ancestors 'none'`, etc.) em todas as páginas testadas, mas em modo Report-Only não bloqueia nada de facto — apenas regista violações hipotéticas.
- **Acção:** Confirmar (via ferramenta de reporting, se configurada, ou por inspecção) que a política actual não quebra nenhum recurso legítimo, depois substituir o header por `Content-Security-Policy` (enforced) com a mesma política.
- **Verificação:** `curl -sI https://www.destaque.ai/` devolve `content-security-policy` (não `-report-only`) e o site continua a funcionar sem erros de consola relacionados com CSP.
- **Notes:** Baixo risco — a política já testada em report-only não terá estado a acumular violações inesperadas há muito tempo, presumivelmente.

### 2026-07-13 added — ENTITY — Confirmar perfis sameAs populados
- **Prioridade:** P1
- **Esforço:** 30min-2h
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.sameAs` declara LinkedIn, Crunchbase, Clutch e Wikidata (Q140043087). A pesquisa web desta sessão não devolveu snippets indexados para nenhum destes — não foi possível confirmar directamente se estão populados, activos e correctos (pode ser apenas falta de indexação por serem recentes).
- **Acção:** Verificar manualmente cada um dos 4 perfis; completar campos em falta no Wikidata (instance of, país, sede, fundador, data de fundação, website oficial); confirmar página de LinkedIn tem posts recentes.
- **Verificação:** Cada URL abre e mostra conteúdo correcto e actual.
- **Notes:** —

### 2026-07-13 added — STRATEGIC — Schema declara alcance (ES/EN/pt-BR) que o site não cobre
- **Prioridade:** P2
- **Esforço:** 2h (decisão) + variável conforme opção
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `Organization.areaServed` inclui Espanha e Europa; `contactPoint.availableLanguage` inclui `en`, `es`, `pt-BR`. O site é monolingue PT-PT, sem páginas `/en` ou `/es`, sem `hreflang`.
- **Acção:** Decidir entre (a) construir conteúdo real nessas línguas/mercados, ou (b) reduzir a declaração de schema ao que o site cobre hoje (Portugal, PT-PT), evitando prometer a crawlers/LLMs um alcance que o conteúdo não sustenta.
- **Verificação:** Schema e conteúdo alinhados — ou ambos expandidos, ou a declaração revista.
- **Notes:** Não é um erro técnico (não há inconsistência de hreflang porque não há páginas alternativas), é uma promessa de alcance por cumprir.

### 2026-07-13 added — CONTENT — Cadência de publicação parada desde 06 jul 2026
- **Prioridade:** P2
- **Esforço:** variável
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Cadência quinzenal-ish de abril a final de junho 2026 (10 publicações em ~10 semanas); sem publicação nova desde `/estudo/gap-google-ia` (06 jul 2026) — hiato de uma semana à data desta auditoria.
- **Acção:** Retomar publicação (blog ou próximo estudo original).
- **Verificação:** `sitemap.xml` mostra `lastmod` novo para conteúdo genuinamente novo (não apenas re-render).
- **Notes:** Não é grave isoladamente; acompanhar se se prolongar mais de 2-3 semanas.

### 2026-07-13 added — MEASUREMENT — Stack de medição não verificável de fora
- **Prioridade:** P2
- **Esforço:** 1-2h (verificação interna)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** Não foi possível confirmar de fora se GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance e o Visibility Tracker próprio estão configurados e a recolher dados.
- **Acção:** Confirmação interna directa (não depende desta auditoria externa) + considerar dar a este Routine acesso de leitura a pelo menos um destes para reduzir o N/D estrutural da categoria 12 do scorecard.
- **Verificação:** Próxima auditoria reporta estado real em vez de N/D.
- **Notes:** —

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
- **Estado:** TODO
- **Descrição:** Nenhum case study com cliente nomeado e resultados verificáveis encontrado nas páginas amostradas.
- **Acção:** Publicar o primeiro case study assim que exista um cliente disposto a ser nomeado com resultados mensuráveis.
- **Verificação:** Página de case study publicada com schema `Review`/`CaseStudy` ou similar.
- **Notes:** Depende do ciclo de vendas/entrega, não é uma acção puramente editorial.

### 2026-07-13 added — SCHEMA — Templates não amostrados nesta execução
- **Prioridade:** P3
- **Esforço:** 30min (verificação)
- **Origem:** auditoria semanal 2026-07-13
- **Estado:** TODO
- **Descrição:** `/servico`, `/sobre` e `/glossario` não foram amostrados nesta execução (falha intermitente da ferramenta de fetch a criar link de partilha para esses caminhos).
- **Acção:** Confirmar schema JSON-LD nestes 3 templates na próxima execução.
- **Verificação:** Secção 6 da próxima auditoria reporta os 3 templates.
- **Notes:** Falha de ferramenta, não do site — não assumir ausência de schema nestas páginas.
