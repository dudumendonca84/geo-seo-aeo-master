# destaque.ai self-audit baseline

**Data da auditoria:** 03 agosto 2026, ~08:10–09:30 UTC. **Execução:** quarta corrida do Routine `destaque-ai-self-audit-weekly` (semana 4 — comparável com a baseline de 27 julho 2026, ver `audit-history.md`).
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Descoberta estrutural relevante para a fiabilidade de todas as auditorias anteriores.** Esta sessão começou, como as anteriores, a partir de uma branch de trabalho desatualizada (3 commits, ancestral antigo de `main`, sem qualquer conteúdo em `skills/`). Ao contrário das notas anteriores, que descreviam isto como um incidente pontual por execução, esta sessão confirmou, correndo `git log` e comparando árvores de ficheiros, que **o repositório tem duas cópias divergentes e não sincronizadas da estrutura do skill**: o caminho canónico `skills/geo-seo-aeo-master/` (referenciado pelas URLs raw em `models.md`/`prompts.md` e pelo próprio enunciado desta rotina) e uma árvore paralela na raiz do repositório (`daily-agent/`, `destaque-ai-self/`, `radar-geo/`, `competitor-monitor/`, `routines/`). A rotina diária tem estado, sessão após sessão, a escrever ora num caminho ora no outro — `skills/geo-seo-aeo-master/daily-agent/news-feed.md` tem a última entrada em 28 jul; `daily-agent/news-feed.md` (raiz) tem entradas de 29 jul a 03 ago, mas um hiato de 15 a 28 jul. Nenhum dos dois ficheiros tem o registo completo — o histórico de notícias está fragmentado entre os dois. A árvore `destaque-ai-self/` da raiz, em contraste, está morta desde 01 jun 2026 (uma única auditoria, formato diferente, nunca mais tocada) — não é uma cópia activa, é um fóssil de antes da reorganização para `skills/`. Esta auditoria mantém-se estritamente no caminho canónico `skills/geo-seo-aeo-master/` para escrita, como o enunciado da rotina instrui, e leu ambas as cópias de `news-feed.md` para reconstruir o contexto de mercado das últimas semanas sem lacunas. Ver Horizonte 1 para a acção de consolidação recomendada — isto é um risco real de dado perdido ou contraditório em execuções futuras, não um pormenor cosmético.

**Rede de saída restrita, mesmo padrão de três semanas.** `curl` directo a `destaque.ai` (5 corridas) falhou de novo (`CONNECT tunnel failed`) e `WebFetch` genérico devolveu HTTP 403 para `destaque.ai`, `openai.com/news`, `anthropic.com/news`, `blog.google`, `blogs.bing.com` e `perplexity.ai/changelog` — bloqueio de rede geral do sandbox, não específico de domínio, confirmado de novo. Os dados técnicos do site foram obtidos via `mcp__Vercel__web_fetch_vercel_url` e `mcp__Vercel__get_project`/`list_deployments`/`get_runtime_errors`/`get_runtime_logs` (fetch real, server-side, através da própria Vercel) — dado de produção genuíno, não simulação. `WebSearch` funcionou normalmente e foi a via usada para o teste multi-motor em modo augmented e para a tentativa de refresh de `models.md`.

**Amostra técnica mais estreita do que nas três execuções anteriores.** Esta sessão dedicou tempo relevante a (a) diagnosticar e corrigir a divergência de branch/estrutura acima, o que nas execuções anteriores não tinha sido feito com este grau de rigor, e (b) ao teste multi-motor (5 sub-agentes, 52 pares prompt×motor). Como resultado, a amostragem directa de páginas ficou mais estreita do que as 17-20 páginas cobertas em 13/20/27 jul: cobriram-se `/` (homepage), `robots.txt`, `sitemap.xml`, `llms.txt`, um estudo (`/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`) e um caso (`/casos/saas-facturacao-b2b`), mais o histórico completo de deployments e erros de runtime dos projectos Vercel `destaque-ai`, `destaque-ai-tracker` e a descoberta do projecto `destaque-ai-commercial`. Páginas não re-amostradas esta semana (`/servico`, `/sobre`, `/glossario`, `/perguntas`, `/consultoria-geo-portugal`, `/en/*`, os outros 2 casos) mantêm o valor confirmado em 27 jul salvo indicação em contrário — não foram re-verificadas, não assumir mudança nem ausência de mudança.

**O que não foi possível verificar nesta execução, e porquê:**
- **TTFB por curl de PT** — bloqueado, 4ª semana consecutiva.
- **PageSpeed Insights (LCP/INP/CLS)** — HTTP 429 de novo, ~08:12 UTC. 4ª semana consecutiva com a mesma assinatura de erro exacta — ver Horizonte 1, prioridade subida de novo.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot** — continua sem sessão de browser autenticada nem integração de API. 4ª semana consecutiva sem progresso. Agravante nova esta semana: o próprio Visibility Tracker, que testa estes motores para clientes, está com falhas activas de quota/integração (ver secção 13) — mesmo que este Routine ganhasse acesso de leitura ao Tracker amanhã, herdaria dados parcialmente degradados até essas falhas serem corrigidas.
- **Wikidata, LinkedIn, Crunchbase, Clutch, cobertura Tier-1 PT, sinais sociais** — não re-verificados esta semana (fora do âmbito da amostra mais estreita descrita acima); valores de 27 jul mantidos sem alteração assumida.
- **`references/models.md` — refresh tentado, sem mudança confirmada.** Ver nota completa no próprio ficheiro. `WebFetch` directo às 7 fontes Tier 1 devolveu 403 em todas; `WebSearch` devolveu apenas agregadores de terceiros com afirmações contraditórias entre si e desalinhadas com o estado já confirmado do ficheiro — nenhuma foi usada para alterar uma linha. Uma alteração de comportamento (não de modelo por defeito) foi absorvida com fonte secundária credível: a Perplexity passou a usar Claude Opus 5 em Search e Computer desde a semana de 24 jul (TechCrunch, via `news-feed.md` 31 jul) — anotada no ficheiro, não usada para mudar a tabela `production`/`cost_optimized` do Deck Builder sem confirmação primária.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar ou não foi re-amostrada esta semana, está marcado **N/D** ou **não re-verificado**.

---

## 1. Sumário executivo

**Score global: 69/100 — Bom, com lacunas de verificação que persistem.** Média de 11 categorias com evidência (Performance/CWV continua N/D, 4ª semana). **Δ vs. 27 julho: 0.** Score global estável, mas por trás de compensações reais que se anulam — não por estagnação: ganhos genuínos em Schema, Optimização de imagens e GEO técnica (fecho de três itens do backlog) são compensados por uma queda em Medição (nova degradação activa no Tracker) e em Conteúdo (hiato editorial que passou de "vigiar" a real). Ver scorecard.

### Scorecard — 12 categorias

| # | Categoria | Score | Δ vs. 27 jul | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 87/100 | +1 | Content-Signal adicionado ao robots.txt (`search=yes, ai-input=yes, ai-train=yes`); CSP continua só Report-Only, 4ª semana |
| 2 | Performance / CWV | N/D | — | PSI rate-limited (429) 4ª semana consecutiva; sem curl de saída |
| 3 | SEO On-Page | 93/100 | 0 | Não re-amostrado esta semana; homepage confirmada estável (título, meta, 0 imagens) |
| 4 | Schema / dados estruturados | 96/100 | +1 | `ImageObject` confirmado nas imagens do `/tracker` (novo); casos de estudo continuam sem schema de resultado |
| 5 | Optimização de imagens | 72/100 | +7 | As 12 imagens do `/tracker` (agora 14, per commit) ganharam `ImageObject` — item do backlog fechado; estudo e página pilar continuam com zero imagens |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 91/100 | +4 | `llms.txt` agora referencia `/en/` (item fechado); Content-Signal + índice de Agent Skills + negociação de conteúdo em markdown (`.md`/`Accept: text/markdown`) — três capacidades novas de preparação para agentes |
| 7 | Conteúdo & topical authority | 85/100 | −3 | Sem conteúdo editorial novo desde 15 jul (post) / 13 jul (estudo) — ~19 dias, hiato que passa de "vigiar" a real esta semana |
| 8 | Entidade / brand foundation | 77/100 | 0 | Não re-verificado esta semana (fora da amostra mais estreita) |
| 9 | Autoridade & digital PR | 20/100 | 0 | Não re-verificado esta semana |
| 10 | Sinais sociais & community | 35/100 | 0 | Não re-verificado esta semana |
| 11 | E-E-A-T & on-site authority | 70/100 | 0 | Não re-verificado esta semana; caso amostrado confirma "anonimizado" ainda só em metadata, não no corpo visível |
| 12 | Medição & feedback loop | 38/100 | −7 | Bug de produção da semana passada (`/competitors/[id]`) parece resolvido; mas nova degradação activa e mais severa: integração DataForSEO com erros de campo inválido e quota da SerpApi esgotada **agora mesmo**, afectando 3 motores medidos pelo Tracker |

### Top 4 findings (cross-dimensional)

1. **O Tracker está a falhar ao vivo, neste preciso momento, em três dos sete motores que promete medir a clientes pagantes — um problema mais sério do que o rate-limit isolado da semana passada.** `mcp__Vercel__get_runtime_errors` (7 dias) para `destaque-ai-tracker` devolveu 12 grupos de erro (vs. 1 há uma semana). O padrão: a partir de 31 jul 15h UTC, chamadas `copilot_bing/dataforseo` começaram a falhar com `Invalid Field: 'language_name'`/`'language_code'` (385 ocorrências combinadas, 6-7 utilizadores), com fallback automático já implementado no código para SerpApi (`[surfaces] DataForSEO falhou, a cair para SerpApi`) — mas essa própria SerpApi ficou sem quota ("Your account has run out of searches") a partir de hoje 07:58 UTC, com 130 ocorrências combinadas em `copilot/serpapi`, `google_ai_mode/dataforseo` e `google_aio/dataforseo`, a última há 21 minutos do momento desta auditoria. Soma-se um erro novo e isolado (`BING_OAUTH_CLIENT_ID env is missing`, 4 ocorrências, 31 jul) e o rate-limit da Mistral já conhecido, agora activo desde 23 jun sem interrupção — mais de 6 semanas. O bug de `/competitors/[id]` (`S.services.join is not a function`) da semana passada não aparece na lista desta semana — parece corrigido, embora não se tenha encontrado o commit específico que o resolveu. Em termos práticos: hoje, um cliente que peça um relatório actualizado do Tracker para Bing Copilot, Google AI Mode ou Google AI Overviews recebe dados parciais ou nenhum, sem que o dashboard necessariamente o explique com clareza suficiente (a PR #171 da semana passada introduziu um aviso de cobertura parcial só para o caso de rate-limit de fornecedor, não testado aqui contra este cenário novo de quota esgotada).
2. **O teste multi-motor mudou de metodologia esta semana — de "mencionado vs. citado" para "citado vs. recomendado" — e a distinção mais fina revela um padrão pior do que os números agregados sugeriam.** Em modo augmented (Claude com pesquisa web activa, 21 prompts mandatórios, 2 sub-agentes frescos), destaque.ai foi mencionada e citada com URL em 5/21 (`GD5`, `V2`, `V3`, `V4`, `V5` — face a "4/21 citados" na semana passada), a taxa mais alta das quatro execuções. Mas o detalhe pedido pela primeira vez esta semana — posição/ranking entre as fontes citadas — mostra que em **nenhum** dos 5 casos destaque.ai foi apresentada como a opção recomendada: em `GD5` é citada em 4º lugar como fonte de dados, não como vendor; em `V2`/`V3` é uma entre 3-4 fontes gerais citadas, sem ranking claro; em `V4` é citada de forma fraca, sem ser posicionada como especialista fintech; em `V5`, o caso mais claro, três concorrentes (Studio.351, Infinidata, UniK SEO) são nomeados e recomendados explicitamente **antes** de destaque.ai aparecer como leitura de fundo secundária. E no prompt de maior intenção comercial testado esta semana pela primeira vez em modo augmented — `LR1`, "quem faz auditorias de GEO em Lisboa?" — destaque.ai está **ausente**, enquanto 7 concorrentes reais aparecem citados com URL: Studio.351, AISO Hub, 3HASH (o único par formal já reconhecido), AP Portugal, UniK SEO, BeFound, Infinidata. Isto alinha-se, por coincidência de calendário mas não de conteúdo, com um achado absorvido hoje mesmo no `news-feed.md` (Lily Ray, via Search Engine Land, 03 ago): em 100 queries B2B testadas em 3 datas, 69% das citações a listicles auto-promocionais não se traduziram na recomendação final da AI Overview — citação sem recomendação é um padrão documentado no mercado, não uma particularidade de destaque.ai, mas os dados desta semana confirmam que a empresa está do lado errado dessa distinção. Em modo knowledge (31 prompts — 21 mandatórios + 10 rotativos —, 3 sub-agentes frescos), 0/31 mencionaram destaque.ai, 0/31 alucinaram, e o prompt branded rotativo desta semana (`DC1`-variante, "como se compara a destaque.ai com a AISO Hub?") recebeu de novo uma recusa explícita e correcta em vez de uma comparação inventada — mesmo padrão das três semanas anteriores. Protocolo de crise não accionado: 0 menções negativas ou alucinadas nos 52 pares prompt×motor testados esta semana.
3. **Seis PRs mergeados desde a semana passada fecharam três itens do backlog de uma só vez, e abriram uma superfície nova ainda não avaliada — "preparação para agentes".** Entre 27 e 31 jul, 6 PRs (#93–#98) foram publicados em produção: #93 fechou o `x-default` em falta no estudo e a ausência de `/en/` em `llms.txt` (dois itens P2/P3 abertos há 2-3 semanas), e adicionou `author` (Organization) ao schema dos casos; #94 introduziu Content-Signal no robots.txt, cabeçalhos `Link` a anunciar `llms.txt` e um índice de Agent Skills (`.well-known/agent-skills/index.json`, pinado a um commit sha256), e negociação de conteúdo em markdown por página (sufixo `.md` ou `Accept: text/markdown`) — motivado, segundo a mensagem de commit, por um scan externo (isitagentready.com, pontuação inicial 21/100) não previamente citado nesta auditoria; #95 e #96 adicionaram `ImageObject` às 12 (depois 14) imagens do `/tracker`, fechando o item P2 de multimodal grounding; #97 acrescentou ping automático ao IndexNow do Bing em cada deploy de produção; #98 simplificou a homepage (menos 3 secções). Não houve nenhum deploy de produção desde 31 jul 14:25 UTC — 3 dias de silêncio, ainda dentro de margem normal. Esta rajada de correcções confirma que o backlog desta auditoria está a ser lido e agido activamente, não arquivado — mas a "preparação para agentes" (Content-Signal, Agent Skills index, markdown negotiation) é uma superfície nova que a metodologia SINAL ainda não tem uma secção dedicada para avaliar sistematicamente; fica como candidato a evolução de metodologia se o padrão se confirmar relevante noutras auditorias (ver `SKILL.md` § Methodology evolution).
4. **Um quarto projecto Vercel da conta, nunca antes mencionado nesta auditoria, é um produto interno de prospecção — não faz parte da superfície pública de GEO, mas confirma que a destaque.ai está a usar a sua própria metodologia para gerar pipeline.** `comercial.destaque.ai` ("Caçador de Clientes") é um projecto Next.js criado a 03 jul 2026, protegido por login, com a descrição "Prospeção: negócios fortes no Google orgânico mas fracos nas respostas de AI" e um aviso próprio no rodapé — "Sinais de um único motor, o Claude da Anthropic. Direcionais. O diagnóstico multi-motor é o passo seguinte, no Deck Builder." Não é uma lacuna de auditoria (é uma ferramenta interna, correctamente fechada ao público) nem altera nenhuma pontuação do scorecard — mas é um sinal comercial real que vale registar: a mesma limitação estrutural desta auditoria (só Claude testável ao vivo) é reconhecida explicitamente no próprio produto interno da empresa, com um passo seguinte definido (Deck Builder) para a resolver a nível de cliente. Nenhum erro de runtime encontrado neste projecto nos últimos 7 dias.

### O que já está forte

A cadência de correcção mantém-se real: três itens do backlog fechados numa só rajada de PRs (x-default, `/en/` no llms.txt, `ImageObject` no `/tracker`), sem que nenhum tenha sido pedido de novo nesta auditoria — a equipa está a trabalhar a lista, não só a lê-la. O robots.txt continua completo e permissivo para 18 crawlers de IA nomeados, e ganhou esta semana uma declaração explícita de Content-Signal alinhada com a decisão de negócio ("ser encontrado e citado É o produto", per mensagem de commit). Zero alucinações e zero menções negativas em 52 pares prompt×motor testados esta semana — quarta semana consecutiva sem incidente de protocolo de crise. E a infraestrutura do site principal continua saudável: zero erros de runtime em `destaque-ai` nos últimos 7 dias, mesmo enquanto o produto irmão (`destaque-ai-tracker`) atravessa a pior semana de estabilidade registada até agora nesta auditoria.

---

## 2. Contexto de negócio

Sem alteração face a 27 jul: destaque.ai (`Tuasunt, Lda.`), consultoria GEO sediada em Lisboa, fundada 2025, fundador Eduardo Mendonça. Portfólio de serviços inalterado (Auditoria gratuita, Diagnóstico GEO, Avença Visibilidade, Avença Autoridade). Não re-verificado esta semana: `Organization.sameAs`, presença social declarada.

**Novidade confirmada:** `destaque-ai-commercial` (`comercial.destaque.ai`) — ver finding 4. Ferramenta interna de prospecção, não pública, não parte do âmbito de scoring desta auditoria.

---

## 3. Análise de plataforma

Hosting Vercel, projecto `destaque-ai` (`prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`), Next.js, `nodeVersion: 24.x`. Último deploy de produção: **31 jul 2026, 14:24:51 UTC** (`dpl_A98hSNyYxbqXuSEhAgESd2DUt3tx`), 6 PRs (#93-#98) mergeados entre 27-31 jul — ver finding 3 para o detalhe. Zero erros de runtime no projecto principal nos últimos 7 dias (`mcp__Vercel__get_runtime_errors`). Sem alteração de plataforma/hosting.

Confirma-se agora uma terceira aplicação na mesma conta Vercel (`team_GdiuFturz4hfmcBfWMKFhzms`) além de `destaque-ai` e `destaque-ai-tracker`: `destaque-ai-commercial` (ver secção 2). A conta tem também outros projectos não relacionados com destaque.ai (`mccapacityplanner`, `mcdigitalreports`, `vaga-pro-match`, etc.) — confirmados como pertencentes ao mesmo utilizador mas fora do âmbito desta auditoria.

---

## 4. Performance

**N/D, quarta semana consecutiva.** PageSpeed Insights devolveu HTTP 429 (~08:12 UTC), mesma assinatura de erro das três semanas anteriores. `curl` de saída bloqueado. **Recomendação reforçada de novo**: quatro semanas seguidas da mesma falha deixa de justificar qualquer novo adiamento — ver Horizonte 1.

Sinais indirectos via headers Vercel (páginas amostradas esta semana): `content-encoding: br` em todas, `x-vercel-cache: HIT` consistente, `cache-control` inalterado por tipo de recurso. Sem alteração face às três semanas anteriores.

---

## 5. SEO on-page

**Não re-amostrado na largura habitual esta semana** (ver nota de metodologia). Confirmado por amostra pontual da homepage: título ("destaque.ai: Visibilidade em IA, com método.") e meta description inalterados; **zero `<img>`** na homepage (inalterado); 1×H1, 11×H2 (era 9×H2 em 27 jul — a fusão de secções da PR #98 alterou a contagem sem que se tenha confirmado se é reestruturação de conteúdo existente ou adição líquida; não verificado em detalhe). `hreflang`: nenhum na homepage (nunca teve — a homepage não tem par EN dedicado, o par EN vive em `/en/about`).

Página do estudo amostrada (`/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`): título e meta confirmados estáveis; `hreflang` trio completo e correcto (`pt-PT`/`en`/`x-default`) — **item do backlog fechado** (era `x-default` em falta). Zero `<img>` (inalterado).

Página de caso amostrada (`/casos/saas-facturacao-b2b`): título/meta inalterados; **"anonimizado" continua só em metadata** (title, meta description, `og:description`, `twitter:description`, `description` do JSON-LD) — confirmado de novo que não aparece no texto visível do artigo. Zero `<img>` (inalterado, consistente com casos não teram beneficiado da vaga de `ImageObject` do `/tracker`).

Score mantido em 93/100 por ausência de evidência de regressão, não por confirmação positiva de estabilidade em todas as páginas.

---

## 6. SEO technical

- **`sitemap.xml`:** **43 URLs**, mesmo total de 27 jul. `lastmod` da maioria das páginas estruturais avançou para `2026-07-31T14:25:19.863Z` (reflectindo o deploy de 31 jul), mas as páginas de conteúdo datado (estudos, posts, casos) mantêm as suas datas de publicação originais — consistente com "sem conteúdo editorial novo, só código/features".
- **`robots.txt`:** **756 bytes** (era 701 há uma semana), `etag` novo, `last-modified: Fri, 31 Jul 2026 19:15:01 GMT`. Crescimento explicado por uma linha nova no bloco wildcard: `Content-Signal: search=yes, ai-input=yes, ai-train=yes` — declaração explícita de escolha de negócio ("ser encontrado e citado É o produto", per mensagem de commit da PR #94). 18 user-agents de IA nomeados, inalterados, todos `Allow: /`.
- **`hreflang`:** confirmado correcto (trio completo) no estudo amostrado — ver secção 5. `/consultoria-geo-portugal` não re-amostrada esta semana; a decisão documentada na PR #93 é explícita e vale registar: a equipa decidiu **não** adicionar `hreflang` à página pilar porque não tem par EN, e tratar isso como decisão de âmbito, não como lacuna técnica — leitura que esta auditoria aceita como razoável, mas que fecha o item do backlog por decisão, não por implementação.
- **JSON-LD schema:** `ImageObject` confirmado nas imagens do `/tracker` (novo, ver secção 7); `author` (`Organization`) confirmado nos 3 casos de estudo (novo, PR #93) — os casos continuam sem `Review`/`AggregateRating`/schema de resultado estruturado. Restante inventário de tipos por template inalterado face a 27 jul (não re-amostrado na íntegra).
- **Security headers:** inalteradas — HSTS, `x-content-type-options`, `x-frame-options`, `referrer-policy`, `permissions-policy`. **`content-security-policy-report-only` continua presente, enforced continua ausente** — 4ª semana consecutiva sem progresso neste item.
- **Compressão e cache:** Brotli em todas as respostas amostradas. Sem alteração.
- **Novo — negociação de conteúdo em markdown:** qualquer página responde em markdown via sufixo `.md` no URL ou cabeçalho `Accept: text/markdown` (PR #94), com cache CDN de 1h e `X-Robots-Tag: noindex` na representação markdown. Não testado directamente nesta execução (descoberto via histórico de commits, não via fetch); recomenda-se confirmar na próxima execução.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`:** confirmado directamente — estrutura inalterada nas secções PT, mas **secção "English" nova**, referenciando `/en/about`, `/en/studies` e as 3 traduções — **item do backlog fechado** (2 semanas em aberto). Continua a declarar `llms-full.txt` e agora também a negociação de conteúdo em markdown por página.
- **Robots.txt / postura para crawlers de IA:** inalterada, ver secção 6, mais Content-Signal novo.
- **HTML server-renderizado:** confirmado na amostra desta semana (homepage, estudo, caso).
- **Multimodal grounding:** `/tracker` tem agora 14 imagens (12 + 2 novas na PR #96, "Saúde do site"), todas com `ImageObject` gerado a partir de uma fonte única no código (`const SHOTS`) — `contentUrl` absoluto, dimensões, nome, legenda e `creditText`, confirmado no HTML renderizado per mensagem de commit. **Item do backlog fechado** — era o P2 mais citado nas duas execuções anteriores. As páginas mais ricas em dados citáveis (estudo de 2.205 respostas, página pilar) continuam com zero imagens — a ruptura do padrão "zero imagens sitewide" continua isolada ao `/tracker`.
- **Novo — preparação para agentes (Content-Signal, Agent Skills index, markdown negotiation):** ver secção 6 e finding 3. Motivado por um scan de terceiro (isitagentready.com) referenciado na mensagem de commit da PR #94, com pontuação inicial de 21/100 não previamente citada nesta auditoria — não verificado directamente nesta execução (não é uma fonte Tier 1/2 desta metodologia, e a pontuação em si não foi re-confirmada). Vale re-testar esse scan numa próxima execução para ter um número próprio, em vez de citar apenas o que a mensagem de commit reporta.
- **Teste multi-motor — quarta semana com o mesmo padrão estrutural, dado mais fino desta vez:**

  | Motor | Modelo por defeito (per `references/models.md`) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.5 Instant (Free/Go) | **Não** — 4ª semana |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free); nota nova — Claude Opus 5 adoptado em Search/Computer desde a semana de 24 jul (fonte secundária, ver `models.md`) | **Não** — idem |
  | Google AI Mode | Gemini 3.5 Flash (Flash-Lite a assumir routing parcial) | **Não** — idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Sim — modo knowledge e modo augmented, 31+21 prompts, 5 sub-agentes frescos** |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não** — idem |

  **Modo knowledge, 03 ago 2026 ~08:25-08:40 UTC** — 21 mandatórios + 10 rotativos (31 no total), 3 sub-agentes frescos (lotes de 11/10/10):
  - **0/31 mencionaram destaque.ai.** Quarta semana consecutiva com 0/N.
  - **0/31 alucinaram.** Nos prompts de recomendação nomeada (`GD1`-`GD8`, `LR1`, `LR2`, `V4`, `V5`, `LR3`), o modelo recusou explicitamente nomear um fornecedor específico, redirecionando para critérios de avaliação (Clutch, G2, LinkedIn, pedir casos verificáveis) em vez de inventar.
  - **Prompt branded rotativo desta semana** (`DC1`-variante, "como se compara a destaque.ai com a AISO Hub em consultoria de GEO?") — recusa explícita e correcta, tratando ambos os nomes como não-verificáveis a partir de memória de treino, sem inventar uma comparação. Mesmo padrão desejável das três semanas anteriores.
  - **Nomes reais usados só como categoria (ferramentas de monitorização), nunca como recomendação de fornecedor:** Profound, Peec AI, Otterly, Ahrefs Brand Radar, Semrush AI Toolkit.

  **Modo augmented (pesquisa web activa), 03 ago 2026 ~08:40-09:15 UTC** — 21 prompts mandatórios, 2 sub-agentes frescos (11+10):
  - **destaque.ai mencionada e citada com URL em 5/21**: `GD5`, `V2`, `V3`, `V4` (fraco), `V5` — a taxa mais alta das quatro execuções (face a 4/21 em 27 jul, 3/21 em 20 jul, N/D em 13 jul).
  - **Mas em nenhum dos 5 casos foi apresentada como a opção recomendada** — ver finding 2 para o detalhe por prompt. Em `V5`, três concorrentes (Studio.351, Infinidata, UniK SEO) foram nomeados e recomendados antes de destaque.ai aparecer como leitura de fundo.
  - **`LR1` ("quem faz auditorias de GEO em Lisboa?") testado pela primeira vez em modo augmented esta semana — destaque.ai ausente**, 7 concorrentes citados com URL: Studio.351, AISO Hub, 3HASH, AP Portugal, UniK SEO, BeFound, Infinidata.
  - **`LR2` (EN) — destaque.ai ausente**; resultados dominados por agências não-portuguesas (Victorious, 1Digital Agency) e AISO Hub/BeFound como os únicos hits genuinamente de Lisboa.
  - **`GD1`-`GD4`, `GD6`-`GD8`, `GP1`-`GP6` — destaque.ai ausente em todos.** Concorrentes citados com URL ao longo do lote: AP Portugal (recorrente em `GD1`/`GD3`/`GD5`/`GD6`/`GD7`), Infinidata, Marketing Gabriel, RankMaster, BrightAI, BigLearn, LusoAI, SmartLinks, Abia Digital, Digital Results, AISO Hub, Helder Mesquita (especialista individual), Directive Consulting/FINN Partners (internacionais, pouco relevantes para prompts EN sobre Portugal — observação de qualidade de pesquisa, não de posicionamento).
  - **Sentimento:** neutro em todos os casos com menção; nunca negativo. **0/21 alucinaram.**
  - **Protocolo de crise:** não accionado — 0 menções negativas ou alucinadas nos 52 pares prompt×motor testados esta semana (31 knowledge + 21 augmented).

  **Multimodal prompt test, ChatGPT, Perplexity, Google AI Mode, Bing Copilot:** não realizados esta semana — mesma limitação de acesso, 4ª semana.

---

## 8. Conteúdo e autoridade temática

**O hiato editorial passa de "vigiar" a real esta semana.** `sitemap.xml` confirma que a página de conteúdo datado mais recente continua a ser o post de 15 jul (blog) e o estudo de 13 jul — sem nenhuma publicação nova em ~19 dias à data desta auditoria. O histórico de deploys Vercel confirma que a actividade de 27-31 jul foi inteiramente técnica/produto (schema, imagens, Content-Signal, IndexNow), não editorial. O item de backlog aberto em 27 jul como "vigiar, não ainda urgente" ultrapassa agora o limiar de 2-3 semanas que a própria auditoria anterior definiu como gatilho de escalada — ver Horizonte 1.

Distribuição (`/feed.xml`) e estatísticas originais: não re-verificadas esta semana, sem indício de alteração.

---

## 9. Entidade e fundação de marca

**Não re-verificado esta semana** — fora da amostra mais estreita (ver nota de metodologia). Valores de 27 jul mantidos: `Organization.sameAs` (LinkedIn, Crunchbase, Clutch, Wikidata `Q140043087`), sem confirmação directa de conteúdo devido a bloqueio de rede geral do sandbox para domínios externos.

---

## 10. Autoridade e digital PR

**Não re-verificado esta semana.** Valor de 27 jul mantido (20/100, zero cobertura Tier-1 PT confirmada até à data). O item de backlog sobre inclusão em roundups de concorrentes (AISO Hub e outros) continua aberto, sem progresso de outreach conhecido.

---

## 11. Sinais sociais e comunidade

**Não re-verificado esta semana.** Valor de 27 jul mantido (35/100).

---

## 12. E-E-A-T e autoridade on-site

Confirmado de novo, por amostra do caso `/casos/saas-facturacao-b2b`: "anonimizado" continua presente apenas em metadata (title, meta description, `og:description`, `twitter:description`, `description` do JSON-LD), ausente do texto visível do artigo — mesma leitura de 27 jul, sem progresso nem regressão. `author` (`Organization`) confirmado nos 3 casos (novo, PR #93) — reforça ligeiramente o sinal de autoria declarada, ainda sem nome de pessoa nomeada por artigo. Os outros 2 casos não re-amostrados esta semana.

---

## 13. Medição e feedback loop

**Score 38/100 — pior semana registada nesta categoria desde que a auditoria passou a ter dado real (27 jul).**

`mcp__Vercel__get_runtime_errors` (7 dias) para `destaque-ai-tracker` (`prj_jruA9HNORHtP9trNbQw7BZIp0Jg0`) devolveu **12 grupos de erro** (vs. 1 há uma semana). Detalhe completo em finding 1. Resumo:

- **Integração DataForSEO a falhar com erro de campo inválido** (`Invalid Field: 'language_name'` / `'language_code'`) desde 31 jul 15h UTC, no motor `copilot_bing`, com fallback automático já implementado para SerpApi — mas a SerpApi ficou **sem quota** ("Your account has run out of searches") a partir de hoje 07:58 UTC, afectando `copilot`, `google_ai_mode` e `google_aio`, tanto em modo knowledge como augmented, com a última ocorrência 21 minutos antes desta auditoria.
- **Erro novo e isolado**: `BING_OAUTH_CLIENT_ID env is missing` (rota `/api/integrations/bing/connect`), 4 ocorrências, 31 jul, 1 utilizador.
- **Rate-limit da Mistral** — activo continuamente desde 23 jun, agora mais de 6 semanas sem resolução da causa raiz (a mitigação de sintoma da PR #171 continua em produção).
- **Bug `/competitors/[id]` da semana passada** (`S.services.join is not a function`) — não aparece na lista de erros dos últimos 7 dias. Aparenta estar corrigido; não se encontrou o commit específico que o resolveu, pelo que fica como "resolvido, não confirmado por commit" em vez de "confirmado corrigido".
- **`destaque-ai` (site principal):** zero erros de runtime nos últimos 7 dias — infraestrutura de marketing saudável, o problema está inteiramente no produto Tracker.

**Leitura honesta:** isto é pior do que a semana passada em dois sentidos — mais motores afectados (3 vs. 1) e a causa é externa e imediata (quota esgotada, não apenas rate-limit) em vez de um único fornecedor a impor um limite ao longo do tempo. Um cliente que peça hoje um relatório de Bing Copilot, Google AI Mode ou Google AI Overviews via Tracker recebe dados degradados. GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão.

---

## 14. Posicionamento estratégico e inteligência competitiva

Modo knowledge continua a não nomear nenhum concorrente real (0/31). Modo augmented reconfirma e reforça o panorama de três semanas: AISO Hub, Studio.351, Infinidata, 3HASH (par formal) e AP Portugal recorrem de forma estável em pesquisas independentes desta semana — nenhum é ruído de uma corrida. O item de backlog para classificar formalmente AISO Hub (e Studio.351/Infinidata/LPM) pelo teste de 4 perguntas de `competitor_filtering.md` continua aberto, agora há 3 semanas, com evidência acumulada suficiente para já não justificar mais adiamento — ver Horizonte 1. Nota lateral útil: `competitor_filtering.md` foi actualizado em 31 jul (fora desta auditoria, via PR #61 no repo) com uma regra nova — rank trackers internacionais tipo Keyword.com nunca contam como par, mesmo com funcionalidades de AI-visibility — motivado por um caso real de falso positivo no Grok. Não afecta directamente o conjunto de pares de destaque.ai, mas é relevante manter presente ao rever o backlog de classificação.

Share-of-voice: continua N/D como métrica formal própria (ver secção 13 — o Tracker que a calcularia está degradado esta semana). Protocolo de crise: não accionado.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Diagnosticar e corrigir a falha de quota SerpApi + o erro de campo DataForSEO no Tracker — 3 motores medidos actualmente degradados, incidente activo | MEASUREMENT | 2-4h (diagnóstico) + variável | Eduardo — descoberta nova, mais severa que o item da semana passada |
| Configurar `BING_OAUTH_CLIENT_ID` em falta no Tracker | MEASUREMENT | 30min-1h | Eduardo — descoberta nova, pequeno esforço |
| Consolidar a estrutura duplicada do repositório do skill (`skills/geo-seo-aeo-master/` vs. árvore paralela na raiz) — o `daily-agent/news-feed.md` está fragmentado entre dois ficheiros não sincronizados | PROCESS | 2-4h | Eduardo — risco real de dado perdido/contraditório em execuções futuras, não cosmético |
| Classificar formalmente AISO Hub (e Studio.351/Infinidata) pelo teste de 4 perguntas — 3ª semana em aberto, ausente de destaque.ai em `LR1` reforça a urgência | STRATEGIC | 2-4h | Eduardo |
| Passar `Content-Security-Policy` de Report-Only para enforced — 4ª semana sem progresso | TECH | 2h-1 dia | Eduardo |
| Ligar este Routine a pelo menos 1 dos 4 motores mandatórios em falta, ou substituir PSI (429 há 4 semanas) por Vercel Speed Insights/Web Analytics como proxy de CWV | GEO / TECH | 1 dia | Eduardo — dois itens estruturais, 4ª semana sem progresso em ambos |

### Horizonte 2 (semana 3-6) — optimização do existente

- Investigar e resolver a causa raiz do rate-limit da Mistral (agora 6+ semanas) — considerar upgrade de plano.
- Retomar cadência editorial (~19 dias sem conteúdo novo) — pelo menos 1 post ou estudo.
- Adicionar `ImageObject` a pelo menos 1-2 visualizações de dados no estudo mais recente e na página pilar `/consultoria-geo-portugal` (o `/tracker` já provou o padrão).
- Confirmar directamente a negociação de conteúdo em markdown (`.md`/`Accept: text/markdown`) e o índice de Agent Skills, introduzidos na PR #94 mas não testados nesta execução.
- Re-testar o scan isitagentready.com citado na mensagem de commit da PR #94 (pontuação inicial 21/100) para ter um número próprio confirmado.

### Horizonte 3 (semana 7-12) — reforço estratégico

- Iniciar pipeline de digital PR para cobertura Tier-1 PT.
- Direccionar conteúdo/SEO especificamente para `LR1`/`LR2` — ausente há 4 semanas consecutivas nos prompts de maior intenção comercial.
- Trabalhar a diferença entre "citado" e "recomendado" identificada esta semana — conteúdo que existe hoje (o post sobre escolher consultora de GEO) está a ser lido como fundo, não como pitch; considerar uma página de categoria mais assertiva.
- Considerar nomear pelo menos um caso de estudo real.

### Horizonte 4 (90+ dias)

- Conteúdo multimodal mais amplo com `ImageObject`/`VideoObject` fora do `/tracker`.
- Presença em conferências/thought leadership.
- Reavaliar Wikipedia se a notabilidade justificar.

---

## 16. Nota de encerramento

O score global ficou estável em 69/100, mas essa estabilidade esconde mais movimento do que o número sugere: a equipa fechou três itens reais do backlog numa só semana (x-default, `/en/` no llms.txt, `ImageObject` no `/tracker`) e abriu uma frente nova de preparação para agentes que ainda não tem peso formal no scorecard — ao mesmo tempo que o produto de medição próprio, o Visibility Tracker, atravessou a pior semana de estabilidade desde que esta auditoria começou a ter visibilidade real sobre ele, com três motores de medição degradados neste preciso momento por falta de quota de um fornecedor externo. Nenhuma das duas coisas cancela a outra — o site de marketing está tecnicamente mais forte do que há uma semana, e o produto que mede visibilidade para clientes pagantes está, hoje, a entregar menos do que promete. Esta execução corrige também um erro estrutural que as três anteriores não tinham detectado com este grau de certeza: a existência de duas árvores paralelas e não sincronizadas do próprio repositório do skill, uma das quais (a árvore da raiz) tem estado a receber as actualizações mais recentes do agente diário sem que as auditorias anteriores o soubessem. Corrigir isto foi tratado como prioridade de processo desta semana, exactamente pela mesma razão que a descoberta do Tracker via Vercel foi tratada como prioridade há duas semanas: a metodologia SINAL vale o que a auditoria consegue efectivamente ver, e esta semana havia mais para ver do que as três anteriores tinham encontrado.
