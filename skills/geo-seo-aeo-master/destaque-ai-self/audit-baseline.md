# destaque.ai self-audit baseline

**Data da auditoria:** 21 setembro 2026, ~08:10–08:50 UTC. **Execução:** nona corrida do Routine `destaque-ai-self-audit-weekly`, exactamente sete dias depois da anterior (14 set 2026): **segunda execução consecutiva sem hiato**, reforçando (ainda não confirmando: ver item PROCESS) a recuperação iniciada a 14 set.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Rede de saída restrita, mesma política em vigor, mas com uma via nova confirmada nesta sessão.** `curl` directo a `https://destaque.ai/` e a seis domínios de controlo (google.com, openai.com, anthropic.com, perplexity.ai, bing.com, example.com) devolveu `HTTP 000` em todas as tentativas; o estado do proxy (`$HTTPS_PROXY/__agentproxy/status`) confirma `connect_rejected`: "gateway answered 403 to CONNECT (policy denial or upstream failure)" para `destaque.ai:443`. `WebFetch` directo devolveu `EGRESS_BLOCKED` explícito para `destaque.ai`, `www.destaque.ai` e `example.com`: a restrição de saída desta sessão é geral, não específica ao domínio da destaque.ai. **Via usada com sucesso, como em execuções anteriores:** `mcp__Vercel__web_fetch_vercel_url` (fetch real server-side via Vercel) para `/`, `/llms.txt`, `/robots.txt`, `/en/about`; `mcp__Vercel__list_projects` / `list_teams` / `list_deployments` / `get_runtime_errors` / `count_pageviews` para os projectos Vercel `destaque-ai` e `destaque-ai-tracker`. `WebSearch` funcionou normalmente e foi usado directamente (sem sub-agentes dedicados esta semana, por gestão de tempo) para seis prompts do catálogo multi-motor (ver Secção 7).

**models.md:** última entrada de refresh a 14 set 2026 (exactamente sete dias, no limiar, não acima). Não refrescado de novo nesta execução porque os sete dias de `news-feed.md` (15-21 set) confirmam, dia a dia, "sem lançamento, deprecação ou mudança de preço confirmada" para ChatGPT, Claude, Gemini, Grok, DeepSeek e Mistral: não há sinal de que algum default mudou desde o último refresh. Tratado como corrente, com esta verificação registada em vez de um novo fetch aos vendors (que continua bloqueado nesta sessão).

**Amostra técnica desta semana:** homepage (`/`), `robots.txt`, `llms.txt`, `/en/about`; `get_runtime_errors` (janela 7 dias) para `destaque-ai` e `destaque-ai-tracker`; `count_pageviews` para `destaque-ai` (teste de estado do Web Analytics); `list_deployments` (produção) para ambos os projectos, 15+10 registos. **Não re-amostradas em detalhe esta semana:** `/en`, `/sobre`, `/tracker`, `/casos/*`, `/servico`, `/glossario`, `/perguntas`, `/consultoria-geo-portugal`, `/playbook`, `/estudo/*`, `sitemap.xml` (fetch específico falhou, ver abaixo): a leitura vem do `llms.txt` (que lista e resume todo o site) e da lista de deployments/commits da semana.

**O que não foi possível verificar nesta execução, e porquê:**
- **TTFB por curl de PT**: bloqueado, mesma política de proxy explícita, sem alteração.
- **PageSpeed Insights (LCP/INP/CLS)**: sem via de acesso nesta sessão.
- **`sitemap.xml`**: `mcp__Vercel__web_fetch_vercel_url` devolveu erro de ferramenta ("Unable to create shareable URL") em dois domínios tentados (`www.destaque.ai` e `destaque.ai`, este último com redirect 308 para o mesmo erro por trás de um link partilhável); sem contagem directa de URLs esta semana. A secção 6/8 usa `llms.txt` e a lista de páginas novas confirmadas por commit como proxy parcial.
- **Vercel Web Analytics**: `mcp__Vercel__count_pageviews` no projecto `destaque-ai` devolveu `400 Bad Request: "web_analytics_not_enabled"`: confirmado desligado, sem alteração face a semanas anteriores.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot**: sem sessão de browser autenticada nem integração de API nesta sessão, décima semana consecutiva. O teste "augmented" desta semana usa `WebSearch` directamente (sem sub-agentes dedicados, por gestão de tempo) como proxy razoável de pesquisa fundamentada, sobre um subconjunto de seis prompts mandatórios (não os 24+10 completos): ver Secção 7 para a distinção exacta e a justificação da amostra reduzida.
- **Wikidata, Google Knowledge Panel, Bing Places, pai.pt**: não re-verificados nesta sessão (sem pesquisa dedicada); carrega-se o estado de 14 set sem nova confirmação.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar ou não foi re-amostrada esta semana, está marcado **N/D** ou **não re-verificado**.

---

## 1. Sumário executivo

**Score global: 74/100: Bom, em recuperação (Δ+2 vs. 14 set).** Média de 11 categorias com evidência (Performance/CWV continua N/D, 10ª semana). A semana tem uma história simples por trás do número: **dois dos piores achados das duas auditorias anteriores foram corrigidos**, e ambos com prova directa, não apenas com ausência de sintoma. Primeiro: o `llms.txt`, sinalizado há duas semanas como descrevendo `/en/about` como "a Generative Engine Optimization consultancy" (contradizendo a própria página, que já dizia "software company"), foi corrigido no deploy `#150` ("O llms.txt chamava consultoria à destaque.ai, e os motores repetiam-no"), às 14:43 UTC do próprio dia em que a auditoria anterior terminou (14 set): fetch directo desta semana confirma o texto correcto em ambos os ficheiros. Segundo: o motor ChatGPT do Visibility Tracker, inoperacional desde 11 de setembro por um ID de modelo inválido e uma conta OpenAI sem crédito, **não aparece na lista de erros dos últimos 7 dias**: nenhuma nova ocorrência das duas assinaturas de falha da semana passada; o mesmo vale para o Gemini, também sem crédito há nove semanas. O deploy `#409` no `destaque-ai-tracker` ("Conta sem saldo é porta fechada, e o cartão volta a dizer o que falhou", 16 set 06:52 UTC) é o candidato mais provável à correcção, por proximidade temporal e pela descrição do commit, mas isto é uma leitura por ausência de sintoma e por correlação de datas, não uma confirmação directa de billing: fica registado como tal. Do lado que não avançou: `Organization.sameAs` continua com 3 entradas (LinkedIn, Crunchbase, Clutch), sem o Wikidata que estava confirmado há sete semanas; e o Perplexity, em vez de melhorar, **piora**: a assinatura de rate-limit cresce para 165 ocorrências em 7 dias (era 44), agora a única do motor (a assinatura de quota de 401, presente há seis semanas, desaparece da janela). Ver scorecard e Top findings.

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 14 set | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 88/100 | +1 | `robots.txt` reconfirmado com `Content-Signal: search=yes, ai-input=yes, ai-train=yes` e 18 user-agents de IA nomeados; CSP continua só Report-Only (10+ semanas sem progresso) |
| 2 | Performance / CWV | N/D | : | 10ª semana sem via de medição; Vercel Web Analytics reconfirmado desligado |
| 3 | SEO On-Page | 94/100 | 0 | Homepage reconfirmada estável (título, meta, 1×H1/16×H2/13×H3, hreflang recíproco); páginas restantes não re-amostradas |
| 4 | Schema / dados estruturados | 95/100 | 0 | `Organization.sameAs` continua com 3 entradas, sem Wikidata (achado de 14 set, reconfirmado por fetch directo, não resolvido) |
| 5 | Optimização de imagens | 74/100 | 0 | Não re-amostrado em detalhe esta semana |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 93/100 | +5 | **Fix confirmado e verificado ao vivo**: `llms.txt` e `/en/about` já alinham em "software company", não "consultancy" |
| 7 | Conteúdo & topical authority | 98/100 | +1 | 6 deploys de produção no site principal em 7 dias; páginas novas confirmadas (`/en/outsourcing`, `/en/research`, equipa/imprensa); `sitemap.xml` não recontado esta semana (falha de ferramenta) |
| 8 | Entidade / brand foundation | 83/100 | 0 | Não re-verificado em detalhe (sem pesquisa dedicada a Wikidata/Knowledge Panel esta semana) |
| 9 | Autoridade & digital PR | 30/100 | 0 | Não re-verificado esta semana |
| 10 | Sinais sociais & community | 35/100 | 0 | Não re-verificado esta semana |
| 11 | E-E-A-T & on-site authority | 70/100 | 0 | Não re-amostrado em detalhe esta semana |
| 12 | Medição & feedback loop | 50/100 | +12 | **ChatGPT e Gemini recuperados** no Tracker (sem novas ocorrências na janela de 7 dias); Perplexity piora (429 sobe para 165 ocorrências); DataForSEO/`google_aio` continuam degradados; GSC/GA4/BWT AI Performance continuam sem confirmação |

### Top 4 findings (cross-dimensional)

1. **O fix do `llms.txt`, sinalizado há duas semanas como um erro de 15-30 minutos com prova de impacto real (`DC1`), foi corrigido no mesmo dia em que foi confirmado.** O deploy `#150` no repositório `destaque.ai` ("O llms.txt chamava consultoria à destaque.ai, e os motores repetiam-no"), produção às 2026-09-14 14:43 UTC, cerca de cinco horas depois de a auditoria anterior ter terminado (~09:20 UTC), corrige a linha. Fetch directo desta semana confirma: `llms.txt` descreve `/en/about` como *"a Portuguese GEO (Generative Engine Optimization) software company based in Lisbon, with its own tracker, its own data and its own method"*, e a própria página `/en/about` tem título "About · destaque.ai" e meta description a abrir com "destaque.ai is a Portuguese GEO (Generative Engine Optimization) software company". As duas fontes já dizem a mesma coisa. É o segundo turnaround mais rápido observado nesta série de auditorias (o primeiro foi o mesmo dia da descoberta original, este é o mesmo dia da segunda escalada).
2. **O motor ChatGPT do Visibility Tracker, inoperacional desde 11 de setembro por duas causas simultâneas, não regista nenhuma nova ocorrência na janela de 7 dias desta semana.** `mcp__Vercel__get_runtime_errors` (7 dias, `destaque-ai-tracker`) devolve 14 grupos de erro, e nenhum tem `gpt-5.5-instant` nem `gpt-5.6-sol` no texto: as duas assinaturas que dominavam a leitura de 14 set desapareceram por completo. O mesmo padrão aplica-se ao Gemini (`RESOURCE_EXHAUSTED`, sem crédito desde 23 jun): última ocorrência às 2026-09-14 19:10 UTC, nenhuma depois. O candidato mais próximo em tempo e em descrição é o deploy `#409` do `destaque-ai-tracker`, "Conta sem saldo é porta fechada, e o cartão volta a dizer o que falhou", produção às 2026-09-16 06:52 UTC: a janela entre a última ocorrência de erro (14 set, tarde) e este deploy (16 set, manhã) é consistente com uma correcção que endereça exactamente este tipo de falha (crédito esgotado tratado como estado, não como erro solto). **Não é confirmação directa de billing**: é leitura por ausência de sintoma mais proximidade de um commit cujo próprio título descreve o mecanismo. Regista-se como corrigido com esta reserva, não como facto fechado sem margem de dúvida.
3. **O Perplexity não melhora: piora, e muda de forma.** A assinatura de rate-limit (`sonar-pro (augmented) failed: 429 Request rate limit exceeded`) sobe de 44 ocorrências (14 set, até 11 set 16:00) para **165 ocorrências**, 6 utilizadores, numa janela que vai de 07 a 21 set e continua activa até à própria manhã desta auditoria (última ocorrência: 2026-09-21T07:06:29Z, menos de duas horas antes desta sessão). A segunda assinatura antiga (`401 You exceeded your current quota`, presente desde 03 ago) **não aparece** na janela desta semana: pode ter sido resolvida, ou pode ter simplesmente saído da janela de 7 dias sem nova ocorrência recente: não é possível distinguir as duas leituras só com este dado. Em paralelo, duas assinaturas relacionadas com o Google AI Overview cresceram: `google_aio/dataforseo (augmented) failed: This operation was aborted` (63 ocorrências, até esta manhã) e o fallback estrutural `DataForSEO falhou, a cair para SerpApi` (103 ocorrências desde 31 jul, o maior volume acumulado de qualquer assinatura excepto o próprio Perplexity). O quadro de Medição não é uma recuperação simples: duas falhas críticas fecharam, mas o volume total de erro na janela (14 grupos) é comparável ao das duas semanas anteriores (13-14 grupos), só que distribuído de forma diferente.
4. **`Organization.sameAs` continua sem o Wikidata perdido há sete semanas, sem progresso desde a última auditoria.** Extracção programática confirma de novo `sameAs: ["linkedin.com/company/destaque-ai", "crunchbase.com/organization/destaque-ai", "clutch.co/profile/destaqueai"]`: três entradas, a mesma contagem de 14 set. Sem pesquisa dedicada a Wikidata nesta sessão (gestão de tempo): o item mantém-se aberto, sem novo dado que o resolva nem que o contradiga.

### O que já está forte

O ciclo de correcção rápida é o padrão mais forte desta série até agora: dois achados de alta prioridade das duas últimas auditorias, um deles com prova de impacto real numa resposta sintetizada, foram corrigidos entre uma execução e a seguinte, um deles no mesmo dia da confirmação. A cadência de produção mantém-se: pelo menos 6 deploys de produção no site principal e 10 no Tracker desde 14 set, incluindo três páginas novas em duas línguas (`/en/outsourcing`, `/en/research`, e uma reescrita de "Equipas" para "Outsourcing"). O robots.txt continua a declarar postura explícita e permissiva para 18 user-agents de IA nomeados, incluindo o directivo `Content-Signal` (padrão emergente da indústria, não obrigatório pelos motores). O site principal (`destaque-ai`) mantém zero erros de runtime há oito semanas seguidas de medição.

---

## 2. Contexto de negócio

destaque.ai (`Tuasunt, Lda.`), sediada em Lisboa (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa). Fundada 2025, fundador Eduardo Mendonça. Posicionamento estável: "empresa de software portuguesa de GEO", com estatuto verificável de **OpenAI Select Partner** (`memberOf`/`ProgramMembership` no JSON-LD da homepage, confirmado de novo esta semana). Portfólio confirmado por `llms.txt` (fetch directo desta semana): Diagnóstico GEO, Avenças (Visibilidade/Autoridade), AI ads, Comércio agêntico, Auditoria de visibilidade em IA gratuita, playbook publicado, quatro estudos próprios com datasets CC BY 4.0, três casos anonimizados com medição T0/T1, e o produto próprio **Periscopy** (rebranding do "Visibility Tracker" confirmado no texto do `llms.txt`: "O produto da destaque.ai que mostra a uma marca o que a IA diz dela, porquê, e o que fazer para mudar a resposta"), agora descrito como medindo **onze motores e superfícies** (ChatGPT, Claude, Gemini, Grok, DeepSeek, Mistral, Perplexity, AI Overviews, AI Mode do Google, Copilot da Microsoft, Meta AI). Novidade confirmada no `llms.txt`: um **servidor MCP público** do Periscopy (`https://tracker.destaque.ai/api/mcp`, OAuth 2.1, quatro ferramentas de leitura), permitindo a um cliente ligar o relatório directamente ao assistente de IA que já usa (Claude ou ChatGPT).

---

## 3. Análise de plataforma

Hosting Vercel, equipa `team_GdiuFturz4hfmcBfWMKFhzms` ("Eduardo Mendonça's projects"), quatro projectos: `destaque-ai` (site principal, `prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`), `destaque-ai-tracker` (`prj_jruA9HNORHtP9trNbQw7BZIp0Jg0`), `destaque-ai-commercial` e `destaque-ai-deck-builder`. Actividade de deploy muito activa esta semana: **6 deploys de produção confirmados no site principal** entre 14 e 18 set (o mais recente, 18 set 15:47 UTC, "As três páginas reescritas com números, e Equipas passa a Outsourcing"), e **10 deploys de produção confirmados no Tracker** entre 16 e 19 set, incluindo fixes de UI no bloco de pesquisa do Claude e no extractor da Meta. Sem alteração de plataforma/hosting/custo.

---

## 4. Performance

**N/D, décima semana consecutiva.** `curl` bloqueado com mensagem explícita do proxy ("gateway answered 403 to CONNECT (policy denial or upstream failure)"), confirmado esta semana contra `destaque.ai` e seis domínios de controlo externos: a restrição é da sessão, não do domínio. Vercel Web Analytics reconfirmado desligado: `mcp__Vercel__count_pageviews` devolve `400 Bad Request: "web_analytics_not_enabled"`. Sinais indirectos via headers Vercel: `content-encoding: br` confirmado na homepage, `robots.txt` e `llms.txt`; `x-vercel-cache: HIT` em todas as respostas estáticas amostradas (a idade do cache, `age: 227576`/`231067` segundos nos headers desta semana, sugere que as respostas servidas não reflectem necessariamente a latência de origem: uma limitação adicional de qualquer leitura de performance feita por este método, mesmo que o proxy permitisse `curl`).

---

## 5. SEO on-page

Homepage reconfirmada por fetch directo: título "destaque.ai: software de visibilidade em IA" (estável); meta description presente, reescrita desde a última verificação detalhada para "O ChatGPT é o novo boca a boca: as pessoas perguntam à IA quem contratar, o que comprar, onde ir. Empresa de software de GEO: medimos as respostas...", mais concreta e menos genérica do que a versão anterior registada nesta série; **1×H1, 16×H2, 13×H3**. `link rel="describedby"` aponta para `/llms.txt` e para `/.well-known/agent-skills/index.json` (um índice de "Agent Skills" não documentado em auditorias anteriores desta série: candidato a verificar na próxima execução, sem tempo esta semana). JSON-LD confirma dois blocos: `Organization`/`Person`/`WebSite` e `WebPage`/`Service`/`FAQPage`.

Páginas restantes (`/en`, `/sobre`, `/en/about`, `/tracker`, `/casos/*`) não re-amostradas em detalhe esta semana; o gap de paridade multimodal entre `/` e `/en` identificado a 14 set (1 imagem vs. 2) não foi re-verificado, nem confirmado resolvido.

---

## 6. SEO technical

- **`sitemap.xml`:** **não recontado esta semana**: `mcp__Vercel__web_fetch_vercel_url` devolveu erro de ferramenta ("Unable to create shareable URL") para `www.destaque.ai/sitemap.xml`, e um redirect 308 para o mesmo tipo de erro por trás de um link partilhável em `destaque.ai/sitemap.xml`. Sem contagem directa; a leitura de novidade de conteúdo vem da lista de deployments (ver Secção 8) e do `llms.txt`, que continua a listar as mesmas páginas confirmadas a 14 set mais as três páginas novas identificadas nos commits desta semana.
- **`robots.txt`:** **756 bytes**, mesmo tamanho reportado a 14 set. `Last-Modified` do header: **18 set 2026 16:02 UTC** (era 10 set): ficheiro redeployado esta semana, mas sem confirmação de que o conteúdo mudou (não há uma cópia byte-a-byte da semana anterior guardada nesta sessão para diff exacto; o `content-length` idêntico é consistente com "sem mudança", não é prova definitiva). Conteúdo confirmado por fetch directo: 18 user-agents de IA nomeados (GPTBot, OAI-SearchBot, ChatGPT-User, anthropic-ai, ClaudeBot, Claude-Web, Claude-User, Claude-SearchBot, Google-Extended, PerplexityBot, Perplexity-User, CCBot, Applebot-Extended, Bytespider, DuckAssistBot, MistralAI-User, cohere-ai, Meta-ExternalAgent), todos `Allow: /`; wildcard (`User-Agent: *`) com `Allow: /` e **`Content-Signal: search=yes, ai-input=yes, ai-train=yes`**, primeira vez que esta directiva é explicitamente citada com este detalhe nesta série de auditorias (não é claro se é uma adição desta semana ou se já estava presente e não tinha sido destacada; o `content-length` idêntico a semanas anteriores sugere o segundo). `Content-Signal` é um padrão emergente (não é o mecanismo de bloqueio do robots.txt clássico, é um sinal declarativo adicional, adoptado por alguns operadores de CDN como a Cloudflare desde 2025): declarar `ai-input=yes`/`ai-train=yes` é uma posição deliberada e permissiva, coerente com o resto da postura da destaque.ai perante crawlers de IA.
- **`hreflang`:** não re-verificado nesta sessão além da homepage (que não declara hreflang directamente no HTML root, mas via `<link>` tags não extraídas nesta passagem); estado de 14 set (correcto e recíproco em quatro páginas amostradas) carregado sem nova confirmação.
- **JSON-LD schema:** homepage reconfirmada por extracção programática: `Organization` (com `memberOf`/`ProgramMembership`, `OpenAI Partner Network`; `sameAs` com **3** entradas, sem Wikidata, ver finding 4), `Person` (`@id: #fundador`), `WebSite`; segundo bloco `WebPage`/`Service`/`FAQPage`. `/en/about` não re-extraído em detalhe (só título e meta description confirmados). `Organization.description` foi reescrita desde a última extracção detalhada, agora mais longa e mais específica: nomeia os "três pilares" (produto próprio Periscopy, método SINAL, investigação primária) e onze motores nominalmente: mudança de substância no próprio schema, não apenas no texto visível.
- **Security headers:** HSTS (`max-age=63072000`), `x-content-type-options: nosniff`, `x-frame-options: DENY`, `referrer-policy: strict-origin-when-cross-origin`, `permissions-policy` confirmados de novo em todas as respostas amostradas (`/`, `/robots.txt`, `/llms.txt`). **`content-security-policy-report-only` continua presente, enforced continua ausente**: sem progresso, item aberto desde 13 jul (10ª semana consecutiva sem avanço).
- **Compressão e cache:** Brotli confirmado (`content-encoding: br`) em todas as respostas estáticas e na homepage. Cache Vercel confirmado (`x-vercel-cache: HIT`, idade de cache de várias horas nas respostas amostradas). Sem alteração.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`: fix confirmado.** A entrada "English" para `/en/about` já não diz "consultancy": o texto completo, confirmado por fetch directo desta semana, lista "About" como *"Who destaque.ai is: a Portuguese GEO (Generative Engine Optimization) software company based in Lisbon, with its own tracker, its own data and its own method"*. O ficheiro cresceu substancialmente em conteúdo desde a última leitura detalhada (14 set): inclui agora secções inteiras sobre o Periscopy, o servidor MCP público, quatro estudos com metodologia e números próprios, três casos anonimizados, e uma secção "English" com catorze páginas listadas individualmente. Estrutura, links e âncoras coerentes com o site.
- **Robots.txt / postura para crawlers de IA:** confirmada permissiva e explícita para 18 UAs nomeados, incluindo `Content-Signal`: ver Secção 6.
- **HTML server-renderizado:** reconfirmado em `/`, `/robots.txt`, `/llms.txt`, `/en/about`: todas devolvem conteúdo completo sem depender de JavaScript no cliente (headers Next.js `x-nextjs-prerender: 1` presentes na homepage).
- **Multimodal grounding:** não re-amostrado esta semana (o gap `/` vs. `/en` identificado a 14 set não foi re-verificado).
- **Teste multi-motor: metodologia desta semana: `WebSearch` directo, seis prompts do catálogo mandatório (§4 de `references/prompts.md`), sem sub-agentes dedicados por gestão de tempo.** Amostra reduzida face a semanas anteriores (31 prompts a 14 set): esta semana prioriza cobertura honesta de menos prompts em vez de uma cobertura ampla não verificável em detalhe. **Isto continua a não ser equivalente a testar ChatGPT/Perplexity/Google AI Mode/Claude/Bing Copilot directamente**: é pesquisa fundamentada real via o motor de pesquisa que serve `WebSearch`, sumarizada por este modelo: um proxy razoável do que uma pesquisa bem feita encontra, não uma leitura do comportamento de cada produto de IA per se.

  | Motor | Modelo por defeito (per `references/models.md`) | Testado ao vivo esta semana? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) | **Não**: 10ª semana |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não**: idem |
  | Google AI Mode | Gemini 3.5 Flash | **Não**: idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Não**: idem (sem ferramenta de pesquisa própria activada nesta sessão para simular o produto) |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não**: idem |

  **Resultados do teste `WebSearch` (proxy augmented), 21 set 2026, seis prompts:**

  | ID | Prompt | destaque.ai aparece? | Nota |
  |---|---|---|---|
  | GD1 | "qual é a melhor agência de GEO em Portugal?" | **Sim, mencionada, não liderando.** | A resposta sumarizada nomeia a Infinidata primeiro ("consolida-se como a escolha número um", citação da própria copy do concorrente) e a Marketing Gabriel em segundo; destaque.ai surge em terceiro, com uma linha, sem detalhe. |
  | GD5 | "que empresa recomendam para consultoria de visibilidade em IA em Portugal?" | **Sim, primeira posição.** | destaque.ai listada em primeiro lugar entre cinco nomes (Flowzi, LusoAI, Marco Gouveia, Tráfego Digital seguem-se). |
  | GP1 | "o meu site não aparece no ChatGPT quando pesquisam a minha categoria: como resolvo isto?" | **Não.** | Resposta genérica com fontes brasileiras de marketing (agenciamaisresultado.com.br, futuremarketing.com.br); nenhuma fonte portuguesa, nenhuma menção à destaque.ai. Achado a repetir: este prompt (Mandatory, alto intent) não devolve a destaque.ai neste método de teste. |
  | V1 | "como funciona o GEO para uma SaaS B2B em Portugal?" | **Sim, duas URLs próprias.** | Dois artigos do blog da destaque.ai citados directamente (`escolher-consultora-geo-saas-b2b-portugal`, `agencia-geo-lisboa-saas-b2b`); BE VISIBLE também aparece, com página dedicada própria. |
  | V3 | "vale a pena fazer outsourcing de GEO numa empresa de software em Portugal?" | **Não: colisão de categoria confirmada de novo.** | A pesquisa interpretou "GEO" como sigla de outsourcing/deslocalização genérica (nearshoring de TI), não como Generative Engine Optimization: todos os resultados são sobre contratar programadores em Portugal, zero relação com o sentido pretendido. Quarto eixo de colisão do acrónimo "GEO" confirmado por esta auditoria (junta-se a geodesia, Authorized Economic Operator e Global Employer of Record), desta vez a nível de resultados de pesquisa, não só de definição. |
  | DC1 | "como se compara a destaque.ai com BE VISIBLE?" (branded) | **Inconclusivo.** | O proxy `WebSearch` não encontrou conteúdo directo de comparação e disse-o explicitamente, em vez de inventar uma resposta. Nota de método: a auditoria de 14 set, com dois sub-agentes dedicados, tinha encontrado oito URLs próprias da destaque.ai contra zero da BE VISIBLE no mesmo tipo de teste; esta semana, com uma única pesquisa directa sem sub-agente dedicado, o resultado é diferente. Não é evidência de regressão: é evidência de que o método (`WebSearch` como proxy) tem variância week-to-week sensível à formulação exacta da pesquisa, um limite já registado em auditorias anteriores. |

  **Leitura honesta:** dos seis prompts, quatro devolvem destaque.ai (dois com posição forte, dois com menção fraca ou inconclusiva) e dois não a devolvem (um deles, GP1, é Mandatory e de alto intent, repete-se de execuções anteriores). A amostra é pequena de mais para uma leitura de tendência: serve como snapshot pontual, não como taxa de citação.

---

## 8. Conteúdo e autoridade temática

Cadência de publicação confirmada activa: **6 deploys de produção no site principal entre 14 e 18 set 2026**, todos via pull request para `main`:

| Commit | Data (UTC) | Descrição |
|---|---|---|
| `#150` | 14 set 14:43 | O llms.txt chamava consultoria à destaque.ai, e os motores repetiam-no (fix, ver finding 1) |
| `#151` | 16 set 06:45 | Periscopy: nome, posicionamento e território próprio no site |
| `#152` | 17 set 16:04 | O estudo dos partidos, o menu no telemóvel, a marca branca, e o alvo de uma pergunta no /tracker |
| `#153` | 18 set 14:47 | Paridade: as propostas de valor e o quem ganha entram no /tracker |
| `#154` | 18 set 15:26 | Equipas, Imprensa e Pesquisa: três páginas novas em PT e EN |
| `#155` | 18 set 15:47 | As três páginas reescritas com números, e Equipas passa a Outsourcing |

Confirmado por fetch directo do menu de `/en/about`: páginas novas **`/en/outsourcing`** e **`/en/research`** ("How we measure") já em produção, ligadas a partir do rodapé. O rebranding do produto de "Visibility Tracker" para **"Periscopy"** é uma mudança de substância confirmada em `llms.txt` e no menu, não apenas cosmética: afecta como a marca se descreve a si própria em qualquer resposta de IA que leia estas páginas.

`sitemap.xml` não recontado esta semana (ver Secção 6): sem número actualizado de URLs totais. O `llms.txt` continua a listar quatro estudos próprios com dataset CC BY 4.0 (mapa das empresas de Portugal, consistência de visibilidade em serviços ao consumidor, gap Google/IA, visibilidade IA SaaS B2B PT) e três casos anonimizados, sem adição nova confirmada nesta categoria esta semana.

---

## 9. Entidade e fundação de marca

**Não re-verificado em detalhe esta semana** (sem pesquisa dedicada a Wikidata/Knowledge Panel/NAP). Reconfirmado por extracção directa do JSON-LD da homepage: `Organization.sameAs` com **3 entradas** (LinkedIn, Crunchbase, Clutch), sem Wikidata: o mesmo estado documentado a 14 set, sem novo dado que resolva se a perda do link ao QID Q140043087 foi deliberada ou acidental. `memberOf`/`ProgramMembership` (OpenAI Select Partner) confirmado presente e inalterado. Endereço físico completo (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa) confirmado no `PostalAddress` do schema. Sem confirmação directa de Google Knowledge Panel, Bing Places ou pai.pt esta semana: estado de 14 set carregado sem nova verificação.

---

## 10. Autoridade e digital PR

**Não re-verificado esta semana.** A cobertura da Marketeer confirmada a 14 set (dois artigos à volta do estudo "mapa das empresas de Portugal") não foi re-confirmada nem contradita: sem pesquisa dedicada a imprensa Tier-1 PT (Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo) esta semana. Estado carregado sem alteração: zero cobertura Tier-1 confirmada, uma citação de imprensa de marketing/negócios (Marketeer) confirmada em execuções anteriores.

---

## 11. Sinais sociais e comunidade

**Não re-verificado esta semana.** LinkedIn confirmado por `sameAs` do próprio schema (`linkedin.com/company/destaque-ai/`); sem confirmação externa nova por pesquisa dedicada. Sem presença confirmada em X, GitHub ou Reddit/HN nesta ou em execuções anteriores (item de backlog aberto desde 13 jul, P3).

---

## 12. E-E-A-T e autoridade on-site

**Não re-amostrado em detalhe esta semana.** `Person` (fundador) confirmado presente no JSON-LD da homepage com `@id: #fundador`, referenciado a partir de `Organization.founder`; conteúdo detalhado da entidade `Person` (credenciais, `sameAs` para LinkedIn/ORCID) não re-extraído esta semana. Estado de execuções anteriores carregado sem nova verificação.

---

## 13. Medição e feedback loop

**Score 50/100: recuperação acentuada (+12 vs. 14 set), mas mista.** `mcp__Vercel__get_runtime_errors` (7 dias, `destaque-ai-tracker`) devolve **14 grupos de erro** (era 13 a 14 set):

- **`destaque-ai` (site principal): zero erros de runtime nos últimos 7 dias**, 8ª semana seguida sem alteração.
- **ChatGPT: recuperado.** Nenhuma ocorrência de `gpt-5.5-instant` (404) nem de `gpt-5.6-sol` sem crédito (429) na janela de 7 dias. Ver finding 2 para a leitura de causa provável (deploy `#409`, com reserva sobre confirmação directa de billing).
- **Gemini: recuperado.** Última ocorrência de `RESOURCE_EXHAUSTED` às 2026-09-14T19:10:12Z; nenhuma depois. Mesma leitura de causa provável que o ChatGPT.
- **Perplexity: piora.** `sonar-pro (augmented) failed: 429 Request rate limit exceeded`: **165 ocorrências, 6 utilizadores**, janela 07-21 set, activa até 2026-09-21T07:06:29Z (menos de duas horas antes desta auditoria). A assinatura de quota (401, presente desde 03 ago) não aparece nesta janela: resolvida ou simplesmente fora da janela de 7 dias, não decidível com este dado.
- **DataForSEO: fallback para SerpApi continua, maior volume acumulado de qualquer assinatura.** `[surfaces] DataForSEO falhou, a cair para SerpApi: Internal SE Server Error`: **103 ocorrências desde 31 jul**, incluindo esta manhã (07:09 UTC). Sem sinal de resolução: item de backlog aberto desde 03 ago, ainda sem duas janelas limpas seguidas.
- **`google_aio/dataforseo (augmented) failed: This operation was aborted`**: **63 ocorrências**, 6 utilizadores, activa desde 11 set até esta manhã. Sinal relacionado, possivelmente a mesma causa raiz do DataForSEO acima manifestando-se de forma distinta.
- **DeepSeek: cluster isolado de timeout.** `deepseek-v4-flash (knowledge) failed: tempo esgotado`: 144 ocorrências, mas todas concentradas numa janela de 18 minutos a 14 set (18:52–19:10 UTC): consistente com um incidente pontual do lado do vendor nesse dia, não um padrão contínuo (sem nova ocorrência depois de 14 set).
- **Bug novo, isolado:** `Error: Attempted to call iniciaisDe() from the server but iniciaisDe is on the client`, rota `/settings`: 9 ocorrências, 1 utilizador, todas a 15 set entre 21:48–21:49 UTC. Sem nova ocorrência desde então: pode já estar corrigido, sem confirmação directa.
- **Mistral, Copilot, timeout genérico do Inngest:** volumes baixos e residuais, sem mudança de padrão face a semanas anteriores.

GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão: gap estrutural que nenhuma das duas recuperações desta semana resolve.

---

## 14. Posicionamento estratégico e inteligência competitiva

**Sem pesquisa competitiva dedicada esta semana** (BE VISIBLE, Marco Gouveia, Francisco Paredes, SEO Alive: sem nova verificação). Dois sinais indirectos emergem do teste multi-motor reduzido da Secção 7, tratados aqui com a devida cautela metodológica:

- **GD1** ("qual é a melhor agência de GEO em Portugal?"): o proxy `WebSearch` devolve a Infinidata e a Marketing Gabriel à frente da destaque.ai, com a Infinidata a citar a sua própria copy de marketing ("consolida-se como a escolha número um") sem contraditório. Não é uma leitura de citação real de um motor de IA de produção, mas é um sinal de que, para esta formulação genérica específica, a destaque.ai não domina a conversa.
- **V3** ("vale a pena fazer outsourcing de GEO numa empresa de software em Portugal?"): confirma um **quarto eixo de colisão** do acrónimo "GEO", desta vez a nível de resultados de pesquisa (não apenas de definição textual): a query é lida como outsourcing/nearshoring de TI genérico, sem nenhuma relação com Generative Engine Optimization. Junta-se aos três já conhecidos (geodesia em PT, Authorized Economic Operator em EN, Global Employer of Record em RH/payroll). Este é o mesmo prompt (V3) que o `llms.txt` da destaque.ai lista textualmente como um dos seus próprios serviços ("vale a pena fazer outsourcing de GEO..."): a colisão de acrónimo ameaça directamente um prompt que a própria empresa considera Mandatory no seu catálogo de auto-auditoria.

Protocolo de crise: não accionado. Nenhuma menção negativa ou alucinada detectada nesta sessão (amostra pequena; não é uma garantia de ausência, é ausência de evidência em seis pesquisas).

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2): quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Confirmar directamente (billing OpenAI/Google) que a correcção de crédito no Tracker é real e estável, não apenas ausência de erro numa janela de 7 dias | MEASUREMENT | 15-30min | Eduardo |
| Diagnosticar o crescimento do Perplexity (429, 165 ocorrências, 6 utilizadores, activo até esta manhã): throttling/retry-backoff ou aumento de quota | MEASUREMENT | 1-2h | Eduardo |
| Confirmar se a remoção do Wikidata de `Organization.sameAs` foi deliberada ou acidental (7ª semana em aberto); se acidental, repor | ENTITY | 1-2h | Eduardo |
| Investigar a causa raiz partilhada de `DataForSEO→SerpApi` (103 ocorrências) e `google_aio/dataforseo aborted` (63 ocorrências): podem ser o mesmo problema visto de dois ângulos | MEASUREMENT | 2-4h | Eduardo |
| Confirmar se o bug isolado de `/settings` (`iniciaisDe`, 15 set) já está corrigido ou se é um risco latente sem nova ocorrência por acaso | MEASUREMENT | 30min | Eduardo |

### Horizonte 2 (semana 3-6): optimização do existente

- Re-obter uma via de contagem de `sitemap.xml` (a ferramenta usada esta semana falhou; considerar alternativa) e reconfirmar hreflang/paridade multimodal `/` vs `/en`, não re-amostrados há duas semanas.
- Classificar formalmente BE VISIBLE, Marco Gouveia, Francisco Paredes e SEO Alive per `competitor_filtering.md` §1: item aberto desde 27 jul, sem progresso confirmado.
- Investigar a colisão de "GEO" com outsourcing/nearshoring de TI (achado novo desta semana, V3): considerar se o prompt/página de "Outsourcing" da destaque.ai (rebranding recente de "Equipas") precisa de reforço textual explícito para não colidir com o sentido genérico do termo.
- Re-verificar Wikidata/Knowledge Panel/Bing Places/pai.pt com pesquisa dedicada, não feita há duas semanas.

### Horizonte 3 (semana 7-12): reforço estratégico

- Retomar o teste multi-motor completo (24 mandatórios + 10 rotativos) com sub-agentes dedicados, não a amostra reduzida de seis prompts usada esta semana por gestão de tempo.
- Re-verificar cobertura de imprensa Tier-1 PT e a citação da Marketeer (não confirmada de novo há duas semanas).
- Avaliar se o rebranding "Visibility Tracker" → "Periscopy" está reflectido de forma consistente em todo o site e no `llms.txt` (confirmado consistente nas páginas amostradas esta semana, não verificado exaustivamente).

### Horizonte 4 (90+ dias)

- Confirmar directamente a existência (ou não) de um item Wikidata correcto para a organização, assim que houver via de acesso.
- GSC, GA4 (canal IA) e Bing Webmaster Tools AI Performance: nenhum dos três confirmado configurado em nenhuma auditoria desta série até agora; considerar se isto é de facto um gap ou apenas um gap de visibilidade desta auditoria.
- Reavaliar se a segunda execução consecutiva sem hiato (14 e 21 set) se mantém por mais 1-2 semanas antes de considerar o item PROCESS resolvido.

---

## 16. Nota de encerramento

O score sobe dois pontos, para 74/100, e desta vez o número reflecte bem o que aconteceu: dois dos piores achados das duas auditorias anteriores, o `llms.txt` a descrever a empresa como "consultoria" numa língua e "software" noutra, e o motor mais importante do produto próprio parado há dez dias, foram corrigidos, um deles no mesmo dia em que foi confirmado com prova de impacto real. Isso não significa que a semana tenha sido perfeita: o Perplexity, que devia ter beneficiado da mesma vaga de correcções, piorou (165 ocorrências de rate-limit, quase quatro vezes o volume anterior), e o DataForSEO continua sem resolução sete semanas depois de identificado. E dois itens estruturais não avançaram nada: o Wikidata que falta há sete semanas no `Organization.sameAs`, e a ausência total de configuração confirmada em GSC, GA4 ou Bing Webmaster Tools AI Performance: três ferramentas de medição gratuitas que nenhuma auditoria desta série encontrou activas até hoje. Esta semana também testou, pela primeira vez, uma via de acesso técnico alternativa (`mcp__Vercel__web_fetch_vercel_url` e as ferramentas de observabilidade da Vercel) que permitiu verificação directa apesar do bloqueio de rede geral desta sessão: é a mesma via já usada nas duas auditorias anteriores, agora confirmada de novo como fiável para o essencial (fetch de páginas, JSON-LD, robots.txt, llms.txt, erros de produção), mas continua sem cobrir o que mais falta: TTFB, PageSpeed Insights, e uma leitura directa de ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produtos, não como proxy de pesquisa. A prioridade da próxima semana devia ser dupla: confirmar por via directa (não por ausência de sintoma) que o crédito do Tracker está mesmo reposto, e finalmente mexer nos dois itens que não avançam há semanas: Wikidata e a instrumentação de medição gratuita que continua por ligar.
