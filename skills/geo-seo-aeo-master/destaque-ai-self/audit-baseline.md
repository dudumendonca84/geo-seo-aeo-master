# destaque.ai self-audit baseline

**Data da auditoria:** 27 julho 2026, ~08:10–09:50 UTC. **Execução:** terceira corrida do Routine `destaque-ai-self-audit-weekly` (semana 3 — comparável com a baseline de 20 julho 2026, ver `audit-history.md`).
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

Esta sessão começou a partir de uma branch de trabalho que continha apenas o histórico antigo do repositório (3 commits, sem `skills/geo-seo-aeo-master/`) — o mesmo padrão recorrente já sinalizado em quase todas as entradas do `daily-agent/news-feed.md`. Detectado antes de qualquer escrita; a branch local foi realinhada com `origin/main` (que já continha os ficheiros correctos, incluindo a auditoria de 20 jul) antes de prosseguir.

**Rede de saída continua restrita.** `curl` directo a `destaque.ai` (5 corridas) devolveu de novo `CONNECT tunnel failed, response 403` em todas as tentativas — terceira semana consecutiva. `WebFetch` genérico também devolve 403 para qualquer domínio externo (confirmado esta semana contra `destaque.ai`, `wikidata.org` e `aiso-hub.com` — não é um bloqueio específico do domínio destaque.ai, é uma política geral do sandbox). Os dados técnicos foram obtidos via `mcp__Vercel__web_fetch_vercel_url` (fetch real, server-side, através da própria Vercel) para 20 URLs — homepage, `robots.txt`, `sitemap.xml`, `llms.txt`, `feed.xml`, `/servico`, `/sobre`, `/glossario`, `/perguntas`, `/casos` + 3 casos, `/en/about`, `/en/studies`, `/consultoria-geo-portugal`, `/tracker`, o post de blog mais recente, o estudo mais recente. Dado real de produção, não simulação.

**Descoberta de ferramenta desta semana: `mcp__Vercel__list_projects`/`list_deployments`/`get_runtime_errors`/`get_runtime_logs` — nunca usadas em execuções anteriores.** As duas auditorias anteriores verificaram apenas Supabase para o produto Visibility Tracker próprio (`destaque-ai-tracker`) e concluíram "sem projecto acessível". Esta semana, ao verificar directamente os projectos Vercel da conta, confirma-se que **`destaque-ai-tracker` existe como projecto Vercel desde 5 jun 2026 e está em produção em `tracker.destaque.ai`** (login-gated), com uma rajada de 8 PRs (#164–#171) publicados nas últimas ~48h. Isto é uma **correcção ao processo de auditoria, não uma alegação de que o produto "foi lançado esta semana"** — o produto já existia; as duas auditorias anteriores não olharam para o sítio certo. Ver secção 13 para o detalhe, incluindo um bug real encontrado nos logs de produção.

**O que não foi possível verificar nesta execução, e porquê — sem inventar números:**
- **TTFB por curl de PT** (5 corridas) — bloqueado, 3ª semana consecutiva.
- **PageSpeed Insights (LCP/INP/CLS)** — `googleapis.com/pagespeedonline` devolveu de novo **HTTP 429** (quota diária excedida), ~08:15 UTC. 3ª semana consecutiva com a mesma assinatura de erro — deixa de ser plausível tratar isto como falha pontual (ver Horizonte 1).
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot** — continua sem sessão de browser autenticada nem integração de API. 3ª semana consecutiva sem progresso neste item específico.
- **Claude — modo knowledge e modo augmented, testados de facto.** Esta sessão corre em Claude Sonnet 5 (confirmado ainda o default claude.ai Free/Pro per `references/models.md`, refresh de 25 jul 2026, 2 dias — dentro da janela de 7 dias, **sem necessidade de refresh** desta semana). 7 sub-agentes frescos: 4 em modo knowledge (sem ferramentas) cobrindo os 21 prompts mandatórios + 10 rotativos (31 no total), 3 em modo augmented (`WebSearch` obrigatório) cobrindo os 21 mandatórios. Mesmo desvio de metodologia assumido na semana passada (lotes de 7 prompts por sub-agente, instrução explícita de tratar cada um como conversa nova) — mesma reserva sobre contaminação residual entre respostas do mesmo lote, não observada nas respostas obtidas.
- **Wikidata Q140043087, LinkedIn `company/destaque-ai`, Crunchbase, Clutch** — `WebSearch` e, pela primeira vez, `WebFetch` directo a `wikidata.org/wiki/Q140043087` foram ambos tentados; `WebFetch` devolveu 403 (confirma que é bloqueio de rede do sandbox para domínios externos em geral, não apenas falta de indexação do motor de busca, como se suspeitava nas duas semanas anteriores). Terceira semana sem confirmação directa.
- **Google Knowledge Panel, GSC, GA4 canal IA, Bing Webmaster Tools AI Performance** — continuam sem acesso a partir desta sessão. O Visibility Tracker próprio (secção 13) está confirmado a existir e a correr em produção, mas sem credenciais de login desta sessão para inspeccionar o painel por dentro — a evidência desta semana vem de logs de infraestrutura (Vercel), não do produto em si.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar, está marcado **N/D**.

---

## 1. Sumário executivo

**Score global: 69/100 — Bom, com lacunas de verificação que persistem.** Média de 11 categorias com evidência directa (1 de 12 — Performance/CWV — continua N/D, 3ª semana). **Δ −2 vs. 71/100 da baseline de 20 julho.** A queda não reflecte uma regressão do site — reflecte, sobretudo, que a categoria Medição deixou de estar excluída da média (N/D) e entrou com uma pontuação real e modesta (45/100); ver `audit-history.md` para o detalhe categoria a categoria e a explicação aritmética.

### Scorecard — 12 categorias

| # | Categoria | Score | Δ vs. 20 jul | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 86/100 | −1 | CSP continua só Report-Only (3ª semana); nova lacuna de `hreflang` na página pilar `/consultoria-geo-portugal` |
| 2 | Performance / CWV | N/D | — | PSI rate-limited (429) 3ª semana consecutiva; sem curl de saída |
| 3 | SEO On-Page | 93/100 | +1 | Novo feed RSS descoberto (`/feed.xml`, 20 itens reais); title/meta consistentes nas 9 páginas novas amostradas |
| 4 | Schema / dados estruturados | 95/100 | +1 | 5 tipos novos confirmados (`SoftwareApplication`, `HowTo`/`HowToStep`, `BlogPosting`, `Dataset`/`PropertyValue`, `DefinedTerm`); casos de estudo continuam só `Article` |
| 5 | Optimização de imagens | 65/100 | +10 | Primeira ruptura real do "zero imagens": `/tracker` ganhou 12 imagens com `alt` descritivo — mas sem `ImageObject` e isolado a uma página |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 87/100 | 0 | `llms.txt` continua sem referenciar `/en/` (2ª semana); teste multi-motor Claude estável em presença (4/21 augmented) mas padrão de prompts mudou |
| 7 | Conteúdo & topical authority | 88/100 | −3 | Zero publicações novas desde 17 jul — confirmado via histórico de deploys Vercel; hiato de ~10 dias a acompanhar |
| 8 | Entidade / brand foundation | 77/100 | 0 | Sem alteração; `WebFetch` directo a Wikidata também bloqueado esta semana (confirma bloqueio de rede, não de indexação) |
| 9 | Autoridade & digital PR | 20/100 | 0 | Zero cobertura Tier-1 PT, 3ª semana; novo dado: destaque.ai ausente do próprio listicle "melhores agências" de um concorrente (AISO Hub) |
| 10 | Sinais sociais & community | 35/100 | 0 | Sem dados novos — não reamostrado esta semana |
| 11 | E-E-A-T & on-site authority | 70/100 | +2 | Confirmado por leitura do corpo: os 3 casos são anonimizados (não nomeiam clientes reais), com métricas T0/T1 datadas mas só de fonte interna |
| 12 | Medição & feedback loop | 45/100 | N/D→45 | **Primeira pontuação real**: Visibility Tracker confirmado em produção (`tracker.destaque.ai`) via Vercel — mas com um bug activo e rate-limiting recorrente da Mistral desde 23 jun |

### Top 4 findings (cross-dimensional)

1. **A auditoria própria tinha um ponto cego de processo — e foi corrigido esta semana, não sem custo reputacional interno.** Duas execuções seguidas (13 e 20 jul) verificaram apenas o Supabase para o Visibility Tracker próprio e concluíram "sem projecto acessível", registando a categoria Medição como N/D. Esta semana, ao verificar os projectos Vercel da conta directamente — coisa que nunca tinha sido feita —, confirma-se que `destaque-ai-tracker` está em produção desde 5 de junho, com tráfego real, cron jobs semanais (`/api/cron/weekly-audit`), motor de auditoria multi-LLM (`/api/inngest`, chamadas a `mistral/mistral-large-latest` entre outros) e pelo menos um cliente real do sector da saúde com dossiês de concorrência activos. Os logs de erro de produção mostram, ao mesmo tempo, um bug real e não corrigido (`TypeError: S.services.join is not a function`, 7 ocorrências, 2 utilizadores, `/competitors/[id]`, 25 jul) e uma falha recorrente de rate-limit na API da Mistral que persiste desde 23 de junho até hoje — a última PR publicada (#171, 25 jul) introduziu precisamente um aviso de cobertura parcial no dashboard para este tipo de falha, o que confirma que a equipa já tinha identificado o problema internamente antes desta auditoria o descobrir de fora.
2. **O teste multi-motor mantém a taxa de presença global mas muda de forma.** Em modo augmented (Claude com pesquisa web activa), destaque.ai foi citada com URL em 4 dos 21 prompts mandatórios esta semana (`GD2`, `GD5`, `V1`, `V3`) — sem nenhuma menção sem citação (0, face a 1 na semana passada). Presença total quase idêntica (4/21 vs. "3 citados + 1 mencionado" = 4/21 na semana passada), mas a composição mudou: desapareceu das duas queries de nicho muito específico onde ganhava há uma semana (`GD5` continua, mas os dois prompts vertical B2B SaaS que ganhava — `V1`, `V2` — reduziram-se a só `V1`, e a fonte citada em `V1`/`V3` é sempre o mesmo post de blog, não um activo diferente por prompt). Continua ausente de ambos os prompts de descoberta "quem faz auditorias/consultoria" (`LR1`, `LR2`), que são exactamente os de maior intenção comercial. Em modo knowledge, 0 de 31 prompts (21 mandatórios + 10 rotativos) mencionou destaque.ai — e, pela terceira semana, 0 produziu alucinação ou menção negativa; o prompt branded rotativo desta semana (variante de `DC1`, "como se compara a destaque.ai com a 3HASH?") recebeu de novo uma recusa explícita e correcta em vez de uma comparação inventada.
3. **O panorama competitivo confirma-se, não se inventa de novo — e ganha um nome que passa claramente no teste de 4 perguntas.** Os nomes identificados há uma semana (Studio.351, Infinidata, AISO Hub, LPM, 3HASH, Latigid) reapareceram esta semana em pesquisas independentes, o que é evidência a favor de serem jogadores reais e estáveis, não ruído de uma corrida. **AISO Hub** destaca-se: aparece repetidamente em resultados relevantes, publica os seus próprios roundups "melhores agências de SEO/AI Search em Portugal/Lisboa" (nos quais destaque.ai não figura), e a sua descrição própria — "AISO Audit", "AISO Optimize", "AISO Monitor", arquitectura "entity-first", foco em B2B SaaS — passa nas quatro perguntas de `references/competitor_filtering.md` com margem folgada (mesmo comprador, mesmo JTBD, mesmo momento de decisão, substituibilidade alta). O item de backlog que pedia esta classificação está aberto há duas semanas sem execução — ver Horizonte 1.
4. **A lacuna de imagens quebrou pela primeira vez em três semanas — mas só onde é mais fácil, não onde é mais valioso.** `/tracker`, a página de marketing do produto próprio, ganhou 12 imagens reais com `alt` descritivo (screenshots do dashboard, mapa de perceção, dossiês de concorrente). É a primeira ruptura genuína do padrão "zero imagens sitewide" documentado nas duas auditorias anteriores. Mas nenhuma tem schema `ImageObject`, e as duas páginas que mais beneficiariam de visualização de dados para citação — o estudo de 2.205 respostas e a nova página pilar `/consultoria-geo-portugal` — continuam com zero imagens, confirmado de novo esta semana.

### O que já está forte

A base técnica e de schema continua a aprofundar-se em vez de estagnar: cinco tipos JSON-LD novos confirmados esta semana (`SoftwareApplication` no `/tracker`, `HowTo`/`HowToStep`/`BlogPosting` no post mais recente, `Dataset`/`PropertyValue` no estudo, `DefinedTerm`/`DefinedTermSet` no glossário), todos em HTML pré-renderizado, confirmados página a página. O robots.txt continua completo e permissivo para 18 crawlers de IA nomeados, byte-idêntico há três semanas — não há regressão, apenas estabilidade. A pergunta em aberto há duas semanas sobre os casos de estudo — "nomeiam clientes reais?" — tem agora uma resposta directa e honesta: não nomeiam, são explicitamente anonimizados, mas com metodologia declarada, métricas datadas e uma secção de limitações — um padrão de transparência que compensa parcialmente a ausência de prova nomeada. E o Visibility Tracker, cuja existência esta auditoria falhou em confirmar duas vezes, revela-se, ao ser finalmente encontrado, um produto genuinamente em produção com um cliente real e uma equipa a corrigir os seus próprios problemas de cobertura de medição antes de qualquer auditor externo os apontar.

---

## 2. Contexto de negócio

- **Identidade:** destaque.ai (nome legal `Tuasunt, Lda.`), consultoria de Generative Engine Optimization (GEO) sediada em Lisboa (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa), fundada em 2025. Fundador: Eduardo Mendonça. Sem alteração face à semana passada.
- **Línguas servidas:** inalterado — `/en/about`, `/en/studies` + 3 estudos traduzidos, `hreflang` correcto (`en`/`pt-PT`/`x-default`). A nova página pilar `/consultoria-geo-portugal` (ver secção 6) **não** ganhou par em inglês, apesar de ter prioridade 0.9 no sitemap — o mesmo nível dos estudos e do `/tracker`. `Organization.areaServed` continua a incluir Espanha e Europa; `contactPoint.availableLanguage` continua a incluir `es` e `pt-BR` sem conteúdo correspondente (item STRATEGIC em `improvements-backlog.md`, sem progresso novo esta semana).
- **Plataforma:** Next.js, alojado na Vercel (`server: Vercel`, projecto `destaque-ai`, `prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`). **Último deploy de produção confirmado: 17 jul 2026, 14:19:56 UTC** (`dpl_3bQ6wSRzDp3tmo58xjZL6kRUNmTT`) — o mesmo deploy já reflectido na auditoria da semana passada. Não houve nenhum deploy novo do site principal nos ~10 dias entre 17 e 27 de julho (ver secção 8, finding 4 no scorecard).
- **Portfólio de serviços:** inalterado — Auditoria gratuita GEO, Diagnóstico GEO, Avença Visibilidade GEO, Avença Autoridade GEO, confirmados via schema `Service`×4 em `/servico`.
- **Novidade real desta auditoria: `destaque-ai-tracker` confirmado como produto separado, em produção própria (`tracker.destaque.ai`, projecto Vercel `prj_jruA9HNORHtP9trNbQw7BZIp0Jg0`, criado 5 jun 2026).** Ver secção 13.
- **Presença social declarada em `Organization.sameAs`:** inalterada — LinkedIn (empresa), Crunchbase, Clutch, Wikidata (`Q140043087`). Ausente: X/Twitter, GitHub.

---

## 3. Análise de plataforma

Sem alterações materiais face à semana passada. Hosting Vercel (região de origem `iad1`), Next.js com pré-renderização confirmada em todas as 20 páginas amostradas esta semana (conteúdo completo presente no HTML inicial, entre ~2.000 e ~10.500 caracteres por página). `mcp__Vercel__get_runtime_errors` para o projecto `destaque-ai` (site principal) não encontrou nenhum erro nos últimos 7 dias — infraestrutura estável. `mcp__Vercel__get_runtime_logs` (24h) do site principal mostra tráfego real modesto: `/blog/escolher-consultora-geo-saas-b2b-portugal` (7 acessos), `/sitemap.xml` (3), `/robots.txt` (2), `/perguntas` (1), `/` (1), `/llms.txt` (1) — consistente com um site em fase inicial, provavelmente parte dele tráfego de bots/crawlers, não medido em detalhe nesta sessão.

**Nota nova:** o projecto Vercel separado `destaque-ai-tracker` (ver secção 13) **não** está "sem alterações" — teve 8 PRs publicados nas últimas 48h antes desta auditoria. É um produto activamente desenvolvido, distinto do site de marketing.

---

## 4. Performance

**N/D nesta execução, terceira semana consecutiva.** `curl` de saída bloqueado (`CONNECT tunnel failed, response 403`, confirmado 5/5 corridas). PageSpeed Insights devolveu de novo **HTTP 429** ("Quota exceeded for quota metric 'Queries' and limit 'Queries per day'"), ~08:15 UTC — terceira semana com a mesma assinatura de erro exacta.

**Sinais indirectos reais, a partir dos headers HTTP obtidos via Vercel** (20 páginas amostradas): `content-encoding: br` em todas; `x-vercel-cache: HIT` consistentemente; `cache-control: public, max-age=0, must-revalidate` no HTML, `s-maxage=3600` no `llms.txt`, `s-maxage=3600` também confirmado no `feed.xml`. Sem alteração face às duas semanas anteriores.

**Recomendação que já não é nova:** três semanas seguidas do mesmo par de falhas estruturais (PSI 429, curl bloqueado) deixa de ser um contratempo pontual e passa a ser uma lacuna de desenho deste Routine. A recomendação de ligar este Routine a `mcp__Vercel__get_runtime_logs`/Web Analytics de campo, feita há duas semanas, não teve progresso — repete-se em Horizonte 1 com prioridade subida.

---

## 5. SEO on-page

Amostra desta semana: homepage, `/servico`, `/sobre`, `/glossario`, `/perguntas`, `/casos` + 3 casos, `/en/about`, `/en/studies`, `/consultoria-geo-portugal`, `/tracker`, blog mais recente, estudo mais recente, `/feed.xml` — 17 páginas + 1 feed.

- **Title da homepage:** "destaque.ai: Visibilidade em IA, com método." — inalterado.
- **Meta description da homepage:** inalterada face à semana passada (167 caracteres, "O ChatGPT é o novo boca a boca...").
- **Descoberta nova: `<meta name="keywords">` presente na homepage** (tag legada, baixo impacto directo em GEO mas confirma disciplina de metadata) e **`<link rel="alternate" type="application/rss+xml" href="/feed.xml">`** — o feed RSS não estava documentado em nenhuma auditoria anterior. Fetch directo confirma HTTP 200, `content-type: application/rss+xml`, **20 itens reais** (título, link, guid, `pubDate`, categoria, descrição de 1–3 frases cada — não são stubs vazios), `lastBuildDate` alinhado com a publicação mais recente (15 jul). Sinal de descoberta adicional para agregadores e, potencialmente, para pipelines de RAG que consomem feeds.
- **Heading hierarchy — páginas novas amostradas:** `/perguntas` 1×H1/26 perguntas no índice (confirmadas 20 na extracção directa do HTML — ver nota de amostragem abaixo), `/consultoria-geo-portugal` 1×H1/9×H2, `/tracker` 1×H1/9×H2, `/casos` 1×H1/1×H2, os 3 casos de estudo 1×H1/11×H2 cada. Sem anomalias de estrutura.
- **Nota de amostragem:** `llms.txt` e a navegação declaram 26 perguntas em `/perguntas`; a extracção directa do HTML desta sessão encontrou 20 blocos H2 no fetch inicial. Pode ser paginação/carregamento incremental no cliente, ou um artefacto da extracção — não confirmado nenhum dos dois. Não tratado como gap de conteúdo sem confirmação adicional; recomenda-se reconfirmar na próxima execução com um fetch dedicado e scroll completo.
- **Cobertura de `alt`:** **quebra pela primeira vez o padrão "zero imagens sitewide".** `/tracker` tem 12 `<img>`, todas com `alt` descritivo e não genérico (ex.: "Dashboard do Visibility Tracker: alertas por ler, citation rate com tendência de oito semanas..."). Todas as outras 16 páginas amostradas, incluindo a nova página pilar e o estudo mais recente, continuam com **zero `<img>`** — ver categoria 5 do scorecard e finding 4.
- **Higiene bilingue:** sem alteração material. `/en/about` e `/en/studies` continuam prosa inglesa genuína. A nova `/consultoria-geo-portugal` é PT-PT puro, sem mistura, sem par EN.

---

## 6. SEO technical

- **`sitemap.xml`:** **43 URLs** (crescimento face às 40 da semana passada — a adição líquida mais visível é `/consultoria-geo-portugal`, prioridade 0.9, ainda que parte do crescimento possa reflectir simplesmente cobertura mais completa desta auditoria, não necessariamente todas páginas novas na última semana; ver secção 2 sobre o último deploy datar de 17 jul). `lastmod` mais recente continua 2026-07-17T14:20:24Z em todas as páginas estruturais — consistente com "sem deploy novo desde então".
- **`robots.txt`:** 701 bytes, **byte-idêntico** à semana passada (mesmo `etag`, `last-modified: Sat, 18 Jul 2026`). 18 user-agents de IA nomeados (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `anthropic-ai`, `ClaudeBot`, `Claude-Web`, `Claude-User`, `Claude-SearchBot`, `Google-Extended`, `PerplexityBot`, `Perplexity-User`, `CCBot`, `Applebot-Extended`, `Bytespider`, `DuckAssistBot`, `MistralAI-User`, `cohere-ai`, `Meta-ExternalAgent`) + wildcard, todos `Allow: /`. **Nota reforçada esta semana pelo news-feed** (Grossman et al., SIGIR '26, arXiv:2604.27790, absorvido em `daily-agent/news-feed.md` 2026-07-24): sites que bloqueiam `Google-Extended` têm probabilidade significativamente menor de serem recuperados por AI Overviews — destaque.ai permite-o, o que esta semana passa a ter evidência empírica directa a favor, não só teórica.
- **`hreflang`:** confirmado presente e correcto em `/en/about` e `/en/studies` (trio completo `en`/`pt-PT`/`x-default`). **Duas lacunas novas identificadas esta semana:** `/consultoria-geo-portugal` (prioridade 0.9, a segunda página mais prioritária do sitemap a seguir à homepage) não tem `hreflang` nem par EN; e o estudo `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026` tem o par `pt-PT`/`en` mas **falta `x-default`**, inconsistente com o padrão usado em `/en/about`/`/en/studies`.
- **JSON-LD schema — tipos novos confirmados esta semana:**
  - `/tracker`: `SoftwareApplication` (novo), além de `Service`, `FAQPage`, `WebPage` (speakable), `Organization`, `Person`, `WebSite`.
  - Post de blog mais recente (`como-auditar-visibilidade-marca-ia`): `HowTo`+`HowToStep` (novo) e `BlogPosting` (novo, tipos anteriores amostrados usavam nomenclatura diferente) além de `FAQPage`, `ItemPage`.
  - Estudo mais recente: `Dataset`+`PropertyValue` (novo) além de `Article`, `ItemPage`.
  - `/glossario`: `DefinedTerm`+`DefinedTermSet` confirmados (tipo já visto na semana passada, agora com o item singular `DefinedTerm` também confirmado explicitamente).
  - `/consultoria-geo-portugal`: `Article`+`FAQPage`+`Answer`/`Question`, `BreadcrumbList` — página pilar bem instrumentada em schema, apesar da lacuna de `hreflang`.
  - Casos de estudo (3): **inalterado** — `ItemPage`+`Article`+`BreadcrumbList`+`Thing`, continuam sem `Review`/`AggregateRating`/`CaseStudy` apesar de conterem, confirmado esta semana por leitura do corpo (ver secção 12), métricas T0/T1 datadas e estruturáveis.
  - Continua ausente em toda a amostra: `ImageObject`/`VideoObject` — mesmo nas 12 imagens novas do `/tracker` (ver secção 7).
- **Security headers:** inalterados em todas as páginas — HSTS, `x-content-type-options`, `x-frame-options`, `referrer-policy`, `permissions-policy` restritiva. **`content-security-policy-report-only` continua presente, enforced continua ausente** — mesmo item de backlog aberto há três semanas, sem progresso.
- **Compressão e cache:** Brotli em todas as respostas, incluindo `feed.xml` (novo neste inventário). Sem alteração.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`:** confirmado directamente esta semana — estrutura substancialmente mais rica do que a versão descrita há duas semanas: secções `Visibility Tracker`, `Serviços`, `O que cobrimos`, `Glossário`, `Perguntas frequentes` (26 âncoras), `Estudos` (3), `Casos` (3 + índice), `Categoria GEO em Portugal` (a nova página pilar, **incluída aqui apesar de não ter hreflang** — inconsistência interna entre o que o `llms.txt` promove e o que o `sitemap`/`hreflang` suporta), `Empresa`, `Blog` (17 posts), `Contacto`, `Política de uso por IA`. Declara explicitamente `llms-full.txt` como versão single-fetch completa (não amostrado em detalhe esta semana).
- **Gap que persiste, 2ª semana:** `/en/about` e `/en/studies*` continuam **não referenciadas** em `llms.txt`, que continua estruturado só em torno do conteúdo PT-PT (com a excepção pontual da própria menção ao `consultoria-geo-portugal`, que é PT-PT).
- **Postura de robots para crawlers de IA:** inalterada (ver secção 6) — 18 agentes nomeados, todos `Allow: /`.
- **HTML server-renderizado:** confirmado nas 20 páginas amostradas esta semana.
- **Multimodal grounding:** situação mudou de "ausente" para **"presente mas não estruturado"**. `/tracker` tem 12 imagens reais com `alt` descritivo — a primeira vez que qualquer imagem aparece no site em três auditorias — mas **nenhuma tem `ImageObject`** (`caption`, `description`, `contentUrl` absoluto, `creditText`). As duas páginas mais ricas em dados citáveis — o estudo de 2.205 respostas e a nova página pilar — continuam com zero imagens. `VideoObject`: não aplicável, sem vídeo no site.
- **Teste multi-motor — o que mudou de facto esta semana:**

  | Motor | Modelo por defeito (per `references/models.md`, refresh 25 jul 2026, 2 dias — dentro da janela) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.5 Instant (Free/Go) | **Não** — sem acesso de sessão/API, inalterado, 3ª semana |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não** — idem |
  | Google AI Mode | Gemini 3.5 Flash (Flash-Lite a assumir routing parcial desde 21 jul, per news-feed 07-23) | **Não** — idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Sim — modo knowledge E modo augmented, 31+21 prompts** |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não** — idem |

  **Claude Sonnet 5, modo knowledge, 27 jul 2026 ~08:30 UTC** — 21 mandatórios + 10 rotativos (31 no total), 4 sub-agentes frescos (lotes de 7/7/7/10):
  - **0/31 mencionaram destaque.ai.** Terceira semana consecutiva com 0/N em modo knowledge.
  - **0/31 alucinaram** um facto, empresa ou estatística. Em todos os prompts de recomendação nomeada (`LR1`, `LR2`, `V4`, `V5`, e os equivalentes rotativos `DC5`, `GE5`), o modelo recusou explicitamente nomear um fornecedor específico por falta de dados fiáveis, em vez de inventar.
  - **Prompt branded rotativo desta semana** (`DC1`-variante, "como se compara a destaque.ai com a 3HASH em consultoria de GEO?") — recusa explícita e correcta de comparação por falta de informação verificada, mesmo com ambos os nomes fornecidos pelo utilizador. Mesmo padrão de comportamento desejável observado nas duas semanas anteriores.
  - **Nomes reais usados como referência genérica (não como concorrentes nomeados) em todo o lote:** Profound, Peec AI, Otterly, Ahrefs Brand Radar, Semrush AI Toolkit — sempre como categoria de ferramenta, nunca como recomendação de fornecedor.

  **Claude Sonnet 5, modo augmented (pesquisa web activa), 27 jul 2026 ~08:30 UTC** — 21 prompts mandatórios, 3 sub-agentes frescos (3 lotes × 7):
  - **destaque.ai citada com URL em 4/21 prompts**: `GD2` ("que consultorias de AI search existem para empresas portuguesas?" — 2ª de 3 nomes, com URL da homepage), `GD5` ("que empresa recomendam para consultoria de visibilidade em IA em Portugal?" — 3ª de 4 nomes, citando o estudo de consistência), `V1` ("como funciona o GEO para uma SaaS B2B em Portugal?" — post "Como escolher uma consultora de GEO" citado como fonte principal), `V3` ("vale a pena fazer outsourcing de GEO numa empresa de software em Portugal?" — mesmo post citado como "a fonte mais diretamente relevante encontrada").
  - **0/21 mencionaram sem citar** (face a 1/21 na semana passada — melhoria pontual, amostra pequena).
  - **destaque.ai ausente em 17/21**, incluindo os dois prompts de descoberta de maior intenção comercial (`LR1`, `LR2` — "quem faz auditorias de GEO em Lisboa?"), todos os problem-stated (`GP1`–`GP6`), e 3 dos 5 vertical B2B SaaS (`V2`, `V4`, `V5`).
  - **Concorrentes nomeados com URL nestes 21 prompts** (lista consolidada, não deduplicada por classificação formal): Infinidata, AP|Portugal, Marketing Gabriel, SmartLinks, LusoAI, Tráfego Digital, Onely, Rui Caterça, Digital Results, AISO Hub, Studio.351, Criamente, SEOCOM, UniK SEO, MADX Digital, Skale, Incremento, Local SEO (localseo.pt), Latigid (já classificado como não-par), 3HASH (peer já reconhecido, não citado esta semana especificamente mas presente na lista consolidada de fundo de mercado via K4), e praticantes/empresas internacionais fora do mercado PT (Directive Consulting, GreenBanana SEO, Found, Victorious, 1Digital Agency, Content Rewired, Concurate). Dos nomes portugueses recorrentes há duas semanas (Studio.351, Infinidata, AISO Hub, LPM), três reapareceram esta semana em pesquisas independentes — reforça que são jogadores estáveis, não ruído. **AISO Hub continua o candidato mais forte a par formal** — ver finding 3 e Horizonte 1.
  - **Sentimento:** neutro a positivo em todos os casos com menção; nunca negativo. **Protocolo de crise não accionado** — sem menção negativa ou alucinada em nenhum dos 52 pares prompt×motor testados esta semana (31 knowledge + 21 augmented).

  **Multimodal prompt test:** não realizado esta semana — mesma limitação de acesso das duas semanas anteriores.

  **ChatGPT, Perplexity, Google AI Mode, Bing Copilot: não testados, 3ª semana consecutiva.**

---

## 8. Conteúdo e autoridade temática

- **Tópicos cobertos:** os já conhecidos, mais a confirmação directa esta semana de `/consultoria-geo-portugal` — uma página pilar de categoria ("Consultoria GEO em Portugal: o panorama em 2026") cobrindo 9 sub-tópicos incluindo "o vazio de evidência PT-PT" e "sinais que a IA premeia". Não é conteúdo novo publicado esta semana (o deploy que a colocou em produção é o de 17 jul, o mesmo já reflectido na auditoria anterior) — é conteúdo confirmado pela primeira vez por esta auditoria.
- **Cadência — sinal a acompanhar, não ainda um problema.** O histórico de deploys Vercel do projecto `destaque-ai` confirma que **não houve nenhum deploy de produção entre 17 e 27 de julho** — ~10 dias sem conteúdo novo, depois de um ciclo de publicação intenso (6 posts + 2 estudos entre 06–17 jul, já reportado na auditoria anterior). Dez dias é menos do que o hiato de uma semana sinalizado a 13 jul (que se resolveu em poucos dias) mas o suficiente para justificar vigilância — mesmo padrão de linguagem usado nas entradas do `daily-agent/news-feed.md` para sinais que ainda não justificam alarme.
- **Estatísticas originais e dados próprios:** inalterado — os 3 estudos continuam os mesmos activos (45 empresas/4 motores em maio; 251 empresas/18 sectores em 06 jul; 84 marcas/7 sectores/7 motores/2.205 respostas em 13 jul).
- **Distribuição:** **melhoria confirmada esta semana** — `/feed.xml` é um canal de distribuição real e funcional (20 itens, resumos genuínos), não documentado em nenhuma auditoria anterior. Ainda sem newsletter própria visível.
- **Gap analysis vs. concorrentes:** ainda não formalizado; o teste multi-motor desta semana voltou a produzir, como efeito colateral, uma lista de concorrentes mais confirmada (ver secção 7 e finding 3).

---

## 9. Entidade e fundação de marca

Sem alteração material. `Organization.sameAs` confirmado inalterado (LinkedIn, Crunchbase, Clutch, Wikidata `Q140043087`). **Esta semana, além do `WebSearch` (que continua sem devolver conteúdo indexado directo para estes 4 URLs), tentou-se pela primeira vez `WebFetch` directo a `wikidata.org/wiki/Q140043087` — bloqueado com HTTP 403, o mesmo erro que qualquer domínio externo devolve neste sandbox.** Isto resolve uma ambiguidade das duas semanas anteriores: não é (só) falta de indexação dos perfis pelo motor de busca — é uma restrição de rede de saída deste ambiente de execução, que afecta qualquer verificação directa de URL externo, não apenas Wikidata. NAP inalterado. Presença local (GBP, Bing Places, Apple Maps, pai.pt) continua não verificada.

---

## 10. Autoridade e digital PR

`WebSearch` dirigido a Observador, ECO, Público, Expresso, Jornal de Negócios e Dinheiro Vivo não devolveu, de novo, qualquer menção a "destaque.ai" ou "Eduardo Mendonça" — **zero peças confirmadas, terceira semana consecutiva.**

**Achado novo e concreto esta semana:** ao pesquisar directamente o roundup próprio de um concorrente (AISO Hub, "Best SEO & AI Search Optimization Agencies in Portugal/Lisboa", conteúdo editorial publicado por eles próprios), **destaque.ai não figura na lista** — nem 3HASH, de resto. A lista inclui UniK SEO, Local SEO (localseo.pt), DivSync Digital, Digiton.ai, BeFound, entre outras. Isto não é imprensa Tier-1, mas é uma oportunidade de PR/backlink concreta e de baixo esforço (contacto directo, pitch de inclusão) que a semana passada só tinha identificado de forma abstracta ("nenhum concorrente directo tem Tier-1 PT também"). Continua a não se traduzir em urgência inventada — é uma janela de mercado, não uma crise.

---

## 11. Sinais sociais e comunidade

Sem dados novos verificados nesta execução — não reamostrado por falta de sinal novo desde a semana passada, não por omissão. Mesmas lacunas: LinkedIn não indexado por pesquisa directa, sem GitHub por posicionamento, sem Reddit/HN/X confirmado.

---

## 12. E-E-A-T e autoridade on-site

**A pergunta em aberto há duas semanas tem agora resposta directa, obtida por leitura do corpo integral dos 3 casos (não só do schema):**

- **(a) A palavra "anonimizado" só aparece em metadata** — meta description, `og:description`, `twitter:description`, e no campo `description` do JSON-LD. **Não aparece em nenhum lado do texto visível** (H1, "Contexto", "Resultado", "Conclusão"). Um leitor que apenas leia o artigo renderizado não veria esta divulgação — só quem olha para o código-fonte ou para a pré-visualização em redes sociais.
- **(b) Nenhum dos 3 casos nomeia uma empresa real.** Todos descrevem perfis genéricos ("A empresa operava no mercado de software de facturação e gestão para PMEs...", "A clínica tinha informação relevante sobre tratamentos, profissionais e localizações..."). Sem nomes próprios, sem "cliente desde", sem logótipos.
- **(c) Todos têm métricas T0/T1 concretas e datadas.** Exemplo (caso SaaS de facturação): T0 (8 jan 2026) citação 7,3% / menção 21,8% / recomendação 10,5% / SoV 5,8% / 1 de 7 motores / posição média 5,6 → T1 (8 mai 2026) citação 29,6% / menção 48,2% / recomendação 33,9% / SoV 16,9% / 5 de 7 motores / posição média 2,8. Os outros dois casos seguem o mesmo padrão de estrutura e ordem de grandeza. A secção "Natureza da evidência" cita explicitamente **"Exports T0 e T1 do Visibility Tracker"** como base — ou seja, **prova de fonte interna (ferramenta própria), não verificação de terceiro**. Cada caso inclui também uma secção "Limitações" própria — um nível de honestidade metodológica acima da média do sector.

**Leitura honesta:** isto é um caso de estudo anonimizado, metodologicamente transparente, mas não é E-E-A-T de força máxima — falta o nome verificável que um comprador cético mais exigiria. É melhor do que "sem case studies" (a lacuna original, resolvida) e pior do que "casos nomeados com resultado auditado por terceiro" (o padrão ouro, ainda não alcançado). Score ajustado moderadamente para cima (+2), não como se a verificação tivesse confirmado prova forte.

Autor nomeado (fundador, `Person` schema com `sameAs`) inalterado. Certificações/prémios continuam não encontrados.

---

## 13. Medição e feedback loop

**Primeira pontuação real desta categoria em três execuções — 45/100.**

`mcp__Supabase__list_projects` continua a devolver apenas "Deck Builder Platform Project" — nenhuma mudança aí. Mas esta semana, pela primeira vez, verificaram-se os **projectos Vercel** da conta directamente (`mcp__Vercel__list_projects`), o que as duas auditorias anteriores nunca fizeram. Resultado:

- **`destaque-ai-tracker` existe como projecto Vercel desde 5 jun 2026**, com domínio de produção `tracker.destaque.ai` (mais `destaque-ai-tracker.vercel.app` e variantes), framework Next.js, deployment mais recente (`dpl_rjCC4VmMyx4f8girAP2HfTBAxJc1`) de 25 jul 2026 22:30 UTC, estado `READY`, target `production`.
- **Fetch directo a `tracker.destaque.ai/`** devolve uma página de login real ("Entrar — Visibility Tracker", email + password + magic link) — produto activo, não uma página placeholder.
- **Cadência de desenvolvimento muito activa**: 8 PRs (#164 a #171) publicados no repositório `destaque-ai-tracker` (privado) num intervalo de ~48h antes desta auditoria, cobrindo desde correcções de UI (mapa de perceção, filtros de concorrentes por `peer`) até funcionalidades novas (análise de fosso treino/web por motor, auditoria de domínios-fonte, edição de identidade de cliente). A PR mais recente (#171) introduz explicitamente um aviso de cobertura parcial quando uma auditoria perde chamadas por erro 429 de um fornecedor — **evidência de que a equipa já sabia do problema de rate-limiting abaixo antes desta auditoria o confirmar de fora.**
- **Cliente real confirmado indirectamente**: os logs de produção referem um cliente do sector da saúde/hospitalar (dossiês de concorrência, filtragem de seguradoras como `adjacent_vendor` vs. hospitais como `peer`) — não nomeado aqui por ser dado de terceiro, não da destaque.ai.
- **Bug activo, não corrigido à data desta auditoria**: `TypeError: S.services.join is not a function`, rota `/competitors/[id]`, 7 ocorrências, 2 utilizadores distintos, 25 jul 2026 17:00–17:16 UTC. Afecta uma página real vista por clientes.
- **Falha recorrente de fornecedor externo**: chamadas a `mistral/mistral-large-latest` (modo knowledge) devolvem HTTP 429 ("Rate limit exceeded") de forma repetida desde 23 jun 2026 até hoje, 27 jul — mais de um mês de degradação parcial e não totalmente resolvida da cobertura de medição num dos 7 motores testados pelo produto.
- **Sem erros de runtime no site principal `destaque-ai`** nos últimos 7 dias — a infraestrutura de marketing está saudável; os problemas encontrados são todos no produto Tracker.

**O que continua sem confirmação:** GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance — nenhum verificável a partir desta sessão, sem credenciais de acesso a esses painéis específicos. A pontuação de 45/100 reflecte medição real e operacional, com um cliente real e cadência de correcção própria activa, descontada por um bug em produção e uma falha de fornecedor com mais de um mês sem resolução total, e pela ausência continuada de confirmação directa da stack de analytics externa (GSC/GA4/BWT).

---

## 14. Posicionamento estratégico e inteligência competitiva

- **Conjunto de concorrentes nomeados:** modo knowledge continua a não nomear nenhum concorrente real (0/31). Modo augmented reconfirma, com pesquisas independentes desta semana, grande parte do panorama identificado há duas semanas (Studio.351, Infinidata, AISO Hub, Latigid, 3HASH), e acrescenta nomes novos (SmartLinks, LusoAI, Tráfego Digital, Onely, Rui Caterça, Digital Results, Criamente, SEOCOM, UniK SEO, MADX Digital, Skale, Incremento, Local SEO). O par formalmente reconhecido em `competitor_filtering.md` (3HASH) permanece a única classificação formal, apesar de **AISO Hub** ter agora evidência acumulada de duas semanas a passar claramente no teste de 4 perguntas — ver finding 3.
- **Share-of-voice:** continua N/D como métrica formal (depende do Tracker interno, que esta semana se confirmou existir mas sem acesso de login desta sessão). Ponto de referência qualitativo desta semana: 4/21 prompts mandatórios augmented citam destaque.ai com URL, 0/21 mencionam sem citar, 17/21 ausente — comparável à leitura da semana passada (3 citados + 1 mencionado = 4/21), mas com composição de prompts diferente.
- **Alinhamento pricing/pitch:** inalterado — sem preços publicados.
- **Estratégia "no-click":** inalterada.
- **Oportunidade nova de baixo esforço:** inclusão em roundups de concorrentes (AISO Hub) e, potencialmente, outros directórios/listicles do sector — ver secção 10.
- **Protocolo de crise:** **não accionado** — sem menção negativa ou alucinada em nenhum dos 52 pares prompt×motor testados esta semana, nem em nenhuma das duas semanas anteriores.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Corrigir o bug `TypeError: S.services.join is not a function` em `/competitors/[id]` no Tracker (produção, cliente real afectado) | MEASUREMENT | 1-2h | Eduardo — descoberta nova, prioridade alta por afectar cliente pagante |
| Classificar formalmente AISO Hub (e, se possível, Studio.351/Infinidata/LPM) pelo teste de 4 perguntas de `competitor_filtering.md` — 3ª semana com o item aberto | STRATEGIC | 2-4h | Eduardo — aberto há 2 semanas, evidência acumulada e reforçada esta semana |
| Passar `Content-Security-Policy` de Report-Only para enforced | TECH | 2h-1 dia | Eduardo — aberto há 3 semanas, sem progresso visível |
| Ligar este Routine a pelo menos 1 dos 4 motores em falta (ChatGPT, Perplexity, Google AI Mode, Bing Copilot), ou a Web Analytics de campo da Vercel como substituto parcial de PSI | GEO / TECH | 1 dia | Eduardo — aberto há 3 semanas; PSI 429 e curl bloqueado já não são falha pontual |
| Investigar a causa raiz do rate-limit recorrente da Mistral (`mistral/mistral-large-latest`) no motor de auditoria do Tracker — mais de um mês em curso | MEASUREMENT | 2-4h (diagnóstico) | Eduardo — descoberta nova |

### Horizonte 2 (semana 3-6) — optimização do existente

- Adicionar `hreflang` (ou justificar a ausência) e schema `ImageObject` para as 12 imagens de `/tracker`.
- Referenciar `/en/about` e `/en/studies*` em `llms.txt` — 2ª semana em aberto.
- Adicionar `x-default` ao par `hreflang` do estudo `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`.
- Adicionar pelo menos 1-2 imagens com `ImageObject` ao estudo de 2.205 respostas e à nova página pilar `/consultoria-geo-portugal`.
- Confirmar se o hiato de publicação desde 17 jul se prolonga; se sim, tratar como item accionável na próxima execução.
- Pitch de inclusão em roundups de concorrentes/directórios do sector (AISO Hub e outros).

### Horizonte 3 (semana 7-12) — reforço estratégico

- Decidir e executar: conteúdo real em `es`/`pt-BR`, ou reduzir a declaração de schema ao que o site cobre hoje.
- Iniciar pipeline de digital PR para cobertura Tier-1 PT.
- Construir presença mínima em Reddit/HN.
- Direccionar conteúdo/SEO especificamente para os padrões de pergunta genérica de maior intenção comercial (`LR1`/`LR2` — "quem faz auditorias/consultoria de GEO?") onde destaque.ai continua ausente há três semanas.
- Considerar nomear pelo menos um caso de estudo real, se e quando existir um cliente disposto — a força de E-E-A-T de um caso nomeado supera a de um anonimizado, por mais transparente que este seja.

### Horizonte 4 (90+ dias)

- Conteúdo multimodal mais amplo (imagens/vídeo do produto Tracker) com `ImageObject`/`VideoObject` — o `/tracker` já deu o primeiro passo real.
- Presença em conferências/thought leadership.
- Reavaliar Wikipedia se a notabilidade justificar.

---

## 16. Nota de encerramento

A terceira execução deste Routine corrige, de forma explícita, um erro de processo das duas anteriores — a categoria Medição não estava genuinamente N/D por o Tracker não existir, estava N/D porque a auditoria nunca tinha olhado para o sítio certo (Vercel, não só Supabase). Corrigir isso tem um custo aritmético honesto: o score global desce de 71 para 69, não porque o site piorou, mas porque uma categoria antes excluída da média entrou com uma pontuação real e modesta. É o tipo de descida que a metodologia SINAL trata como saudável, não como alarme — o objectivo é medir bem, não subir o número. Ao mesmo tempo, a auditoria confirma progressos genuínos e pequenos noutras frentes (primeiras imagens reais, schema mais rico, resposta honesta sobre a natureza dos casos de estudo) e um padrão que se repete há três semanas sem resolução — o teste multi-motor mandatório continua reduzido a um único motor, Performance/CWV continua inteiramente por medir, e o conjunto de concorrentes formal continua desactualizado face a duas semanas de evidência acumulada. Nenhuma categoria justifica "Crítico"; a mais fraca continua Autoridade & digital PR (20/100), por características do mercado, não por negligência específica — mas com uma oportunidade concreta e barata (inclusão em roundups de concorrentes) identificada esta semana e ainda não accionada.
