# destaque.ai self-audit baseline

**Data da auditoria:** 07 setembro 2026, ~08:10–09:30 UTC. **Execução:** sétima corrida do Routine `destaque-ai-self-audit-weekly` — com um segundo hiato. A execução anterior é a de **24 agosto 2026** (`git log`, commit `e7ebf2c`); não existe nenhum commit `audit: 2026-08-31 destaque.ai SINAL self-audit`. É a segunda vez em quatro execuções que o Routine salta uma semana (a primeira foi 17 ago, sinalizada na auditoria de 24 ago como item PROCESS P1 com critério de verificação "as próximas 2-3 execuções ocorrem em semanas consecutivas sem hiato"). Esse critério falhou já na execução seguinte. O item sobe a P0 nesta auditoria — ver Secção 1 e 13. Todas as comparações "vs. semana anterior" neste documento são, na prática, **vs. há duas semanas**.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Rede de saída restrita, oitava semana com o mesmo padrão.** `curl` directo a `destaque.ai` (5 corridas) devolveu `HTTP 000`/`connect_rejected` em todas as tentativas — o proxy de rede desta sessão nega explicitamente a ligação por política da organização. `WebFetch` directo devolveu `EGRESS_BLOCKED` explícito para `www.destaque.ai`. Dados técnicos do site foram obtidos via `mcp__Vercel__web_fetch_vercel_url` (fetch real, server-side, via Vercel — produção genuína) e via `mcp__Vercel__list_projects`/`list_teams`/`list_deployments`/`get_runtime_errors`/`get_web_analytics` para os projectos Vercel relevantes (`destaque-ai`, `destaque-ai-tracker`). `WebSearch` funcionou normalmente e foi a via usada para o teste multi-motor em modo augmented (executado directamente por esta sessão, 27 pesquisas: 21 prompts mandatórios + 6 rotativos) e para as verificações pontuais de entidade/imprensa.

**models.md:** já tinha refresh de hoje mesmo (07 set 2026, ver cabeçalho do ficheiro) por absorção do daily-agent — não foi necessário refrescar de novo antes da auditoria. Nenhuma mudança de modelo default confirmada esta semana que afecte o mapeamento do Deck Builder.

**Amostra técnica desta semana:** homepage (`/`), `/en`, `/en/about`, `/sobre`, `robots.txt`, `sitemap.xml` (76 URLs, ver Secção 6), `llms.txt` (obtido ao segundo pedido — o primeiro devolveu de novo "Unable to create shareable URL", falha de ferramenta já registada em execuções anteriores, não do site), lista de deployments e `get_runtime_errors` (janela 7 dias) para `destaque-ai` e `destaque-ai-tracker`. **Não re-amostradas em detalhe esta semana:** `/tracker`, `/servico`, `/glossario`, `/perguntas`, `/agencia-geo`, `/playbook`, `/estudo/*`, `/casos/*` — a leitura vem do `llms.txt` (que lista e resume todo o site) e do `sitemap.xml`.

**O que não foi possível verificar nesta execução, e porquê:**
- **TTFB por curl de PT** — bloqueado, 8ª semana consecutiva (`HTTP 000`/`connect_rejected`, mensagem explícita de política de proxy).
- **PageSpeed Insights (LCP/INP/CLS)** — sem via de acesso nesta sessão.
- **Vercel Web Analytics** — `mcp__Vercel__get_web_analytics` no projecto `destaque-ai` devolveu `400 Bad Request — "web_analytics_not_enabled"`. Confirmado desligado, mesma leitura de 24 ago, agora com mensagem de erro mais explícita (`not_enabled` em vez de `404 Not Found`) — não é ambiguidade de formato de data, é a funcionalidade mesmo por activar.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot** — sem sessão de browser autenticada nem integração de API nesta sessão, 8ª semana sem via própria. O teste augmented desta semana foi feito directamente por esta sessão via `WebSearch` (não por sub-agentes distintos como em 24 ago) — ver Secção 7 para a metodologia exacta e a diferença que isso implica na leitura dos resultados.
- **Wikidata (item da organização), Knowledge Panel, Crunchbase, Clutch, GBP, Bing Places, Apple Maps, pai.pt, cobertura Tier-1 PT** — `WebFetch` a domínios externos continua bloqueado; verificação feita por `WebSearch` indirecta (ver Secções 9-11), não por acesso directo às páginas. Endereço físico completo da Tuasunt, Lda. confirmado por esta via pela primeira vez (ver Secção 9).

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar ou não foi re-amostrada esta semana, está marcado **N/D** ou **não re-verificado**.

---

## 1. Sumário executivo

**Score global: 73/100 — Bom, em melhoria marginal, com um problema de processo que agora pesa mais do que qualquer achado técnico.** Média de 11 categorias com evidência (Performance/CWV continua N/D, 8ª semana). **Δ vs. 24 ago: +1** — mas essa comparação cobre duas semanas, não uma, porque o Routine voltou a saltar uma execução (31 ago). O item de processo aberto há duas semanas com o critério de verificação "as próximas 2-3 execuções sem hiato" falhou logo na execução seguinte — sobe a **P0**. Do lado do produto, a semana (ou as duas semanas) trouxe uma auditoria genuína: um novo estudo publicado (616 respostas, 10 assistentes, dataset público), o estatuto de OpenAI Select Partner confirmado e schematizado (`ProgramMembership`), paridade bilingue fechada em duas páginas de serviço, e um sinal técnico ambíguo mas plausivelmente positivo (o Gemini do Tracker não voltou a falhar por crédito esgotado dentro da janela de 7 dias, pela primeira vez em nove semanas — não confirmado como resolvido). Do lado negativo: o `llms.txt` — o próprio ficheiro que existe para descrever a empresa a crawlers de IA — contém uma linha desactualizada que descreve a página `/en/about` como "a Generative Engine Optimization consultancy", contradizendo directamente o texto real dessa página (que já diz "software company"); o teste multi-motor mais recente confirma um concorrente novo com sobreposição quase total de ICP (BE VISIBLE, GEO/SEO para B2B SaaS PT de seed a Series B); e um erro novo de rate-limit no Mistral do Tracker (104 ocorrências, durante a própria auditoria) substitui os erros da semana passada sem que a fila de erros do Tracker tenha efectivamente encolhido. Ver scorecard e Top findings.

### Scorecard — 12 categorias

| # | Categoria | Score | Δ vs. 24 ago | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 87/100 | 0 | Robots.txt byte-idêntico (756 bytes, 18 UAs de IA nomeados); CSP continua só Report-Only, 9ª semana sem progresso |
| 2 | Performance / CWV | N/D | — | Sem via de medição nesta sessão; Vercel Web Analytics reconfirmado desligado (`web_analytics_not_enabled`) |
| 3 | SEO On-Page | 95/100 | +1 | Título/H1/meta description estáveis; hreflang confirmado correcto e recíproco (`pt-PT`/`en`/`x-default`) entre `/` e `/en`; paridade bilingue fechada em `/ai-ads` e `/comercio-agentico` (PT), que só tinham par EN há duas semanas |
| 4 | Schema / dados estruturados | 98/100 | +1 | Tipo novo confirmado: `ProgramMembership` (OpenAI Partner Network) no `Person` do fundador, presente em `/` e `/en` — inventário existente inalterado |
| 5 | Optimização de imagens | 75/100 | +1 | Segunda imagem na homepage/`/en` (selo "OpenAI Select Partner", `alt` correcto) além do dashboard do Tracker; ainda sem `ImageObject` confirmado fora do `/tracker` |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 91/100 | −3 | `llms.txt` confirmado a funcionar (2ª tentativa), rico e estruturado — mas com uma linha desactualizada que descreve `/en/about` como "consultancy", contradizendo a própria página; ver finding 2 |
| 7 | Conteúdo & topical authority | 96/100 | +1 | Estudo novo publicado — "Um mapa das empresas de Portugal" (616 respostas, 10 assistentes, 16 perguntas, dataset CC BY 4.0, 29 ago) — com edição EN paralela; zero deploys de produção ao site principal desde 1 set (6 dias quietos antes desta auditoria, sem indício de problema, mas digno de nota após a vaga intensa de agosto) |
| 8 | Entidade / brand foundation | 85/100 | +3 | OpenAI Select Partner confirmado com data (Agosto 2026) e schematizado; endereço físico completo da Tuasunt, Lda. confirmado pela primeira vez por pesquisa externa; contrapeso: a inconsistência do `llms.txt` (Secção 7 acima) mina directamente esta categoria, que é exactamente a que mede clareza de entidade |
| 9 | Autoridade & digital PR | 20/100 | 0 | Reconfirmado: zero cobertura Tier-1 PT encontrada em pesquisa dirigida (Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo) |
| 10 | Sinais sociais & community | 35/100 | 0 | Página LinkedIn da empresa confirmada a existir (`linkedin.com/company/destaque-ai`) via pesquisa; sem verificação de actividade/postagens |
| 11 | E-E-A-T & on-site authority | 70/100 | 0 | Não re-amostrado em detalhe esta semana |
| 12 | Medição & feedback loop | 50/100 | +2 | Assinatura de erro da DataForSEO mudou de falha bruta para fallback tratado para SerpApi (sinal de melhoria de engenharia); Gemini sem nova ocorrência na janela de 7 dias (não confirmado resolvido); Mistral com rate-limit novo (104 ocorrências, durante a própria auditoria); bug novo de serialização React em `/site` e `/prompts` (28 ocorrências, 1 utilizador, 3 set) |

### Top 4 findings (cross-dimensional)

1. **O Routine saltou uma segunda semana em quatro execuções — o critério de verificação definido há duas semanas falhou na execução seguinte, e isto sobe a P0.** A auditoria de 24 ago abriu um item PROCESS depois de descobrir que 17 ago tinha ficado sem registo, com o critério "as próximas 2-3 execuções ocorrem em semanas consecutivas sem hiato". Não há nenhum commit `audit: 2026-08-31 destaque.ai SINAL self-audit` — a próxima execução depois de 24 ago voltou a saltar. Para contexto: a rotina distinta `audit: source-intel` correu normalmente em 24 e 31 ago (`cc6590f`) e a rotina diária `daily:` correu todos os dias sem falha visível — isto não é uma falha geral de agendamento deste repositório, é específico a este Routine. Duas faltas em quatro semanas (50%) deixa de ser um incidente e passa a ser o padrão mais provável até prova em contrário. Toda a série de `audit-history.md` fica com comparabilidade degradada enquanto isto não for investigado e corrigido.
2. **O `llms.txt` — o ficheiro cuja função é descrever a empresa a crawlers de IA — contém uma descrição desactualizada que contradiz a própria página que resume.** A entrada em inglês para `/en/about` no `llms.txt` diz: *"Who destaque.ai is: a Generative Engine Optimization consultancy based in Lisbon, Portugal."* Mas a página `/en/about`, obtida por fetch directo nesta auditoria, abre com: *"destaque.ai is a Portuguese GEO (Generative Engine Optimization) software company: we measure and build brand presence in AI answers..."* — a mesma correcção de posicionamento ("software company", não "consultancy") que o founder fez à homepage a 24 ago já chegou à página `/en/about` real, mas **não chegou ao resumo dessa mesma página no `llms.txt`**. Isto é directamente relevante à métrica de convergência de descrição de entidade que este Routine introduziu há duas semanas: se um motor de IA lê o `llms.txt` (o ficheiro desenhado precisamente para ser lido em vez do HTML completo) em vez da página em si, está a ser alimentado com a categorização errada por uma fonte própria da destaque.ai, não por um atraso de terceiros. É uma correcção de uma linha, mecânica, sem ambiguidade sobre o que fazer.
3. **O teste multi-motor confirma um concorrente novo com sobreposição de ICP quase total, e a taxa de crédito na síntese sobe ligeiramente sem mudar a taxa de aparição.** 27 pesquisas via `WebSearch` (modo augmented, 21 prompts mandatórios + 6 rotativos, metodologia adiante). Nos 21 mandatórios: destaque.ai apareceu nos resultados brutos em **7/21 (33%, idêntico a 24 ago)**, mas foi efectivamente nomeada e creditada na síntese em **3/21 (14%, sobe de 2/21 há duas semanas)** — `GD5`, `LR1`, `V5`. O achado novo mais importante não é de posição, é de concorrência: **BE VISIBLE** (`bevisibleagency.com`) surge em `GD3` e `V1` com um posicionamento quase idêntico ao da destaque.ai — "consultoria de SEO e GEO para empresas B2B SaaS... transformando respostas de assistentes de IA em pipeline qualificado", trabalhando "equipas de B2B SaaS de seed a Series B" — o mesmo ICP declarado da destaque.ai (`SKILL.md` § ICP), nunca antes visto por este Routine. Um segundo consultor individual, **Francisco Paredes**, junta-se a Marco Gouveia como concorrente-pessoa em pesquisas de recomendação local (`LR3`). Marco Gouveia continua a vencer directamente em `LR1` e `LR3` com preço explícito ("a partir de 3.000€") — um padrão que se repete pela terceira semana com evidência. Achado técnico lateral: a pesquisa EN `LR2` ("who does AEO consulting in Lisbon?") devolveu exclusivamente empresas de "Authorized Economic Operator" (conformidade aduaneira) — uma colisão de termo em inglês distinta da já conhecida colisão de "GEO" com geodesia em português, nunca antes confirmada por este Routine. Zero alucinações, zero menções negativas nos 27 prompts — protocolo de crise não accionado.
4. **A operação continuou a produzir trabalho real nas duas semanas, incluindo uma correcção de estilo da casa que vale a pena registar: o selo "OpenAI Select Partner" foi deliberadamente despromovido do herói para o rodapé.** O histórico de deployments (`mcp__Vercel__list_deployments`) mostra, a 31 ago 08:56 UTC, o commit "Tirar o 'OpenAI Select Partner' do herói: fica no final, como o resto" — uma decisão consciente de não sobre-explorar uma parceria real como prova social em destaque, coerente com o registo editorial "sóbrio, sem hype" que esta própria auditoria pede à destaque.ai. O estatuto em si é confirmado por fonte primária do site (`llms.txt`: "É OpenAI Select Partner no OpenAI Partner Network (Agosto de 2026)") e schematizado (`ProgramMembership`). Paralelamente: um novo estudo público ("Um mapa das empresas de Portugal", 616 respostas, 10 assistentes, dataset CC BY 4.0) foi publicado com edição EN espelhada; o site adoptou o Acordo Ortográfico de 1990 de forma consistente (duas vagas de correcção, 31 ago); e o menu móvel, descrito num commit anterior como "uma parede de palavras", foi reduzido a cinco itens com submenu. Nenhum destes itens exigiu pedido desta auditoria — é trabalho proactivo genuíno. Contraponto honesto: não há nenhum deploy de produção ao site principal desde 01 set — seis dias sem actividade antes desta auditoria, depois da vaga mais intensa já vista por este Routine. Não é evidência de problema, é apenas o fim de um pico, mas fica registado para não confundir "nenhum deploy esta semana" com "pausa preocupante" numa leitura futura sem este contexto.

### O que já está forte

O SEO on-page e o schema continuam entre os pontos mais fortes de toda a auditoria (95 e 98/100), reforçados esta semana por um tipo de schema novo e genuíno (`ProgramMembership`) em vez de manutenção passiva. O robots.txt mantém-se completo e permissivo para 18 crawlers de IA nomeados, byte-idêntico há várias execuções. O site principal (`destaque-ai`) continua com zero erros de runtime nos últimos 7 dias. A cadência de conteúdo, depois da vaga de agosto, continua a produzir — um estudo público novo com dataset aberto, não apenas posts de blog. E a decisão de recolher o selo do parceiro OpenAI do primeiro ecrã é um sinal de disciplina editorial que esta auditoria normalmente tem de pedir, feito aqui sem ser pedido.

---

## 2. Contexto de negócio

destaque.ai (`Tuasunt, Lda.`), sediada em Lisboa — endereço confirmado pela primeira vez por pesquisa externa: Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa. Fundada 2025, fundador Eduardo Mendonça. Posicionamento estável desde 24 ago: "empresa de software portuguesa de GEO", reforçado esta semana com um estatuto de parceria verificável — **OpenAI Select Partner** no OpenAI Partner Network desde agosto de 2026 (per `llms.txt` e schema `ProgramMembership` no `Person` do fundador). O portfólio de serviços mantém-se: Diagnóstico GEO, Avenças, AI ads, Comércio agêntico, mais uma página nova confirmada no sitemap desta semana — **Auditoria de visibilidade em IA** (`/auditoria`, `/en/audit`), auditoria inicial gratuita sem compromisso, distinta da página pilar `/consultoria-geo-portugal` já existente. O Visibility Tracker mantém-se em 12 motores e superfícies. Novo estudo público: "Um mapa das empresas de Portugal 2026" — 16 perguntas, 616 respostas lidas uma a uma, 10 assistentes de IA, dataset CC BY 4.0.

---

## 3. Análise de plataforma

Hosting Vercel, projecto `destaque-ai` (`prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`). Actividade de deploy intensa entre 28 ago e 01 set (pelo menos 20 deployments no período coberto pela API), incluindo correcções de ortografia (Acordo Ortográfico de 1990), reorganização do menu (móvel e desktop), e a decisão de recolher o selo OpenAI do herói. **Zero deployments de produção confirmados desde 01 set 07:50 UTC** — seis dias quietos até ao momento desta auditoria, o primeiro intervalo sem actividade desde o início de uma vaga de publicação muito intensa em agosto. Sem alteração de plataforma/hosting/custo face a 24 ago.

---

## 4. Performance

**N/D, oitava semana consecutiva.** Sem via de acesso ao PageSpeed Insights nesta sessão. `curl` de saída bloqueado com mensagem explícita de política de proxy (`connect_rejected`, não apenas timeout). Vercel Web Analytics reconfirmado desligado no projecto `destaque-ai` — `400 Bad Request`, código `web_analytics_not_enabled` (mensagem mais explícita do que o `404` de execuções anteriores, mas a leitura é a mesma: a funcionalidade não está activada). Sinais indirectos via headers Vercel: `content-encoding: br` no `sitemap.xml` e no `llms.txt`; `x-vercel-cache: HIT` em respostas estáticas amostradas. Sem alteração face às semanas anteriores.

---

## 5. SEO on-page

Homepage confirmada por fetch directo: título estável, "destaque.ai: software de visibilidade em IA" (sem alteração desde a correcção de 24 ago — a versão indexada no motor de busca genérico usado nesta auditoria ainda devolveu o título antigo, "Visibilidade em IA, com método.", num resultado de `WebSearch` avulso; isto é normal desfasamento de cache de índice de terceiros, não uma regressão do site, confirmada pelo fetch directo ao HTML ao vivo). Meta description inalterada, presente em `<meta name="description">`, `og:description` e `twitter:description`. **1×H1, 16×H2** — sem alteração. **2 imagens** na homepage (era 1 há duas semanas): o dashboard do Tracker (`alt` descritivo, inalterado) e o novo selo "OpenAI Select Partner" (`alt="OpenAI Select Partner"`, `93×44`). `<link rel="canonical">` presente. **Hreflang confirmado correcto e recíproco**: `/` declara `pt-PT` (self), `en` (→`/en`) e `x-default` (→self); `/en` declara os mesmos três valores — confirmado por grep directo ao atributo `hrefLang` (case-sensitive no HTML renderizado, note-se para próximas execuções que usem grep case-insensitive).

`/en` — título "AI visibility measurement for brands outside Portugal · destaque.ai", meta description explícita sobre "brands outside Portugal... in your market and language" — copy claramente dirigida a um segmento internacional distinto do PT-PT nuclear, primeira vez que este Routine regista esta formulação exacta. **1×H1, 13×H2.**

`/en/about` e `/sobre` amostrados nesta execução por causa do finding 2 (Secção 1) — ver detalhe nas Secções 7 e 9.

Paridade bilingue: `/ai-ads` e `/comercio-agentico` (PT) confirmados no `sitemap.xml` desta semana — há duas semanas só existiam as versões `/en/ai-ads` e `/en/agentic-commerce`. Gap fechado.

---

## 6. SEO technical

- **`sitemap.xml`:** **76 URLs** (era 68 em 24 ago, +8). Novidades confirmadas: `/auditoria` e `/en/audit` (nova página de auditoria gratuita, distinta da página pilar `/consultoria-geo-portugal`), `/ai-ads` e `/comercio-agentico` (PT, fechando o gap de paridade — ver Secção 5), `/estudo/mapa-empresas-portugal-2026` e `/en/studies/mapping-portugals-companies-ai-answers-2026` (estudo novo). `lastmod` das páginas estruturais: 2026-09-01T07:51:43Z.
- **`robots.txt`:** **756 bytes**, `content-length` confirmado idêntico ao de 24 ago; 18 user-agents de IA nomeados, todos `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes` no bloco wildcard. `Last-Modified` do header: 02 set 2026 10:33 UTC — o ficheiro foi reescrito nessa data mas o conteúdo resultante é byte-idêntico (`content-length` igual), confirmando que foi um redeploy sem mudança de substância, não uma edição.
- **`hreflang`:** confirmado correcto e recíproco entre `/` e `/en` — ver Secção 5.
- **JSON-LD schema:** homepage confirmada com `Organization`, `Person` (fundador, agora com `memberOf`/`ProgramMembership` além de `sameAs`), `WebSite`, `WebPage`, `Service` (`OfferCatalog`), `FAQPage` (`Question`/`Answer`, 4 pares na amostra), `SpeakableSpecification`, `Audience`, `PostalAddress`, `ContactPoint`, `Country`, `Place`. **Tipo novo confirmado: `ProgramMembership`** — `programName: "OpenAI Partner Network"`, `membershipNumber: "OpenAI Select Partner"`, `hostingOrganization: Organization (OpenAI)`. `/en/about` acrescenta `BreadcrumbList` e `ListItem`; `/en` acrescenta mais pares `Question`/`Answer` (7 vs. 4 na homepage PT).
- **Security headers:** HSTS, `x-content-type-options`, `x-frame-options: DENY`, `referrer-policy`, `permissions-policy` confirmados nos headers de `sitemap.xml`, `robots.txt` e `llms.txt`. **`content-security-policy-report-only` continua presente, enforced continua ausente** — 9ª semana consecutiva sem progresso.
- **Compressão e cache:** Brotli confirmado em `sitemap.xml` e `llms.txt` (`content-encoding: br`). Sem alteração.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`: confirmado a funcionar, à segunda tentativa desta sessão** (a primeira devolveu "Unable to create shareable URL" — falha de ferramenta desta sessão já registada em execuções anteriores, não do site). Ficheiro rico: resumo da empresa, três pilares (Produto/Método/Investigação), lista completa de serviços incluindo `/auditoria` (novo), glossário, 26 FAQs linkadas, quatro estudos (incluindo o novo mapa de empresas), três casos, secção "English" completa e paralela, blog completo, política de uso por IA, negociação de conteúdo em markdown (`.md` ou `Accept: text/markdown`) e referência a `llms-full.txt`.
  - **Achado novo (finding 2, Secção 1): a entrada `/en/about` no `llms.txt` está desactualizada.** Diz "a Generative Engine Optimization consultancy based in Lisbon, Portugal"; a página real, obtida por fetch directo nesta auditoria, diz "a Portuguese GEO (Generative Engine Optimization) software company". A homepage PT e o `llms.txt` PT já usam consistentemente "empresa de software"; a inconsistência está isolada à linha EN do `llms.txt`.
- **Robots.txt / postura para crawlers de IA:** confirmado byte-idêntico — ver Secção 6.
- **HTML server-renderizado:** confirmado de novo — fetch de `/`, `/en`, `/en/about` e `/sobre` devolveu HTML completo com todo o JSON-LD embutido.
- **Multimodal grounding:** o novo selo "OpenAI Select Partner" tem `alt` descritivo mas é um logótipo de parceria, não conteúdo de produto — não muda a leitura de multimodal grounding sitewide. `ImageObject` continua não confirmado fora do `/tracker` (não re-amostrado esta semana).
- **Teste multi-motor — metodologia distinta desta semana: 27 pesquisas via `WebSearch` executadas directamente por esta sessão (não por sub-agentes dedicados como em 24 ago).** Isto aproxima-se de "modo augmented" no sentido em que usa pesquisa web real, mas **não é equivalente a testar ChatGPT/Perplexity/Google AI Mode/Bing Copilot directamente** — é uma pesquisa web genérica sumarizada por este modelo, não a resposta nativa de cada produto. Tratar como proxy razoável do que uma pesquisa bem fundamentada encontra, não como substituto do teste nos produtos reais.

  | Motor | Modelo por defeito (per `references/models.md`) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.5 Instant (Free/Go) | **Não** — 8ª semana |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não** — idem |
  | Google AI Mode | Gemini 3.5 Flash | **Não** — idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Parcial** — modo knowledge (esta sessão, sem ferramentas, ver abaixo) |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não** — idem |

  **Modo knowledge, 07 set 2026** — auto-avaliação directa desta sessão (Claude Sonnet 5, sem `WebSearch` nem qualquer outra ferramenta): **sem conhecimento de treino verificável sobre destaque.ai**, consistente com sete execuções anteriores de 0/N. O corte de conhecimento declarado desta sessão (janeiro de 2026) precede a maior parte do conteúdo publicado pela destaque.ai em 2026 — a ausência é esperada, não um sinal de fraqueza de marca.

  **Modo "augmented" (via `WebSearch`, executado directamente por esta sessão), 07 set 2026 ~08:20-09:00 UTC — 21 prompts mandatórios:**
  - **destaque.ai apareceu nos resultados brutos de pesquisa em 7/21 (33%, idêntico a 24 ago)** — `GD5`, `GD7`, `LR1`, `V1`, `V2`, `V4`, `LR3` (nota: `LR3` é rotativo, não mandatório; entra aqui só para registo, ver tabela abaixo para a contagem correcta).
  - **Corrigindo: dos 21 mandatórios, apareceu em `GD5`, `GD7`, `LR1`, `V1`, `V2`, `V4` (6/21) e foi efectivamente nomeada e creditada na síntese em `GD5`, `LR1`, `V5` (3/21, 14%, sobe de 2/21 há duas semanas).** `GD7`, `V1`, `V2`, `V4` — presente nos resultados brutos (via links próprios do site nos casos de `V1`/`V2`) mas não creditada na síntese — mesmo padrão "citado sem ser recomendado" de execuções anteriores.
  - **`GD1`, `GD2`, `GD3`, `GD4`, `GD6`, `GD8`, `GP1`-`GP6`, `LR2` — destaque.ai ausente por completo (14/21).**
  - **`GD6` — colisão de termo com geodesia/topografia reconfirmada pela 3ª auditoria seguida** (Sistopo, Geolayer, GEOSS, LABGEO, zero resultados de AI search optimization). **Achado novo: `LR2` ("who does AEO consulting in Lisbon?") devolveu exclusivamente empresas de "Authorized Economic Operator"** (conformidade aduaneira/logística) — primeira confirmação de colisão de termo "AEO" em inglês, distinta da colisão de "GEO" já conhecida.
  - **Concorrentes nomeados ao longo do lote:** Marco Gouveia (venceu directamente em `LR1`), **BE VISIBLE** (novo — `GD3` e `V1`, ICP quase idêntico ao da destaque.ai, ver finding 3), AISO Hub e Incremento (`GD8`), Infinidata (`GD1`), Luso AI e Tráfego Digital (`GD5`, junto com a própria destaque.ai), Arena Media (`GD4`, ads, não GEO).
  - **Sentimento:** neutro/positivo em todos os casos com menção; nunca negativo. **0/21 alucinaram.**
  - **Protocolo de crise:** não accionado.

  **6 prompts rotativos desta semana (`GE1`-`GE3`, `DC2`-`DC3`, `LR3`) — escolha deliberada de categorias pouco testadas nas últimas execuções (Evaluation e direct_comparison genérico):**
  - `GE1`, `GE2`, `GE3`, `DC2`, `DC3` — destaque.ai ausente; conteúdo dominado por fontes PT-BR genéricas.
  - **`LR3` ("que consultor de GEO recomendam para uma fintech em Lisboa?") — destaque.ai nomeada e creditada explicitamente**, incluindo o nome da própria metodologia SINAL na síntese ("destaque.ai... com metodologia SINAL para notabilidade em AI search"). Marco Gouveia continua citado primeiro, com preço. **Concorrente novo: Francisco Paredes**, consultor independente em SEO técnico + GEO.
  - **Total combinado (27 pesquisas): destaque.ai apareceu em 8/27 (30%), foi creditada em 4/27 (15%). Zero alucinações, zero menções negativas em toda a amostra.**

  **Multimodal prompt test, ChatGPT, Perplexity, Google AI Mode, Bing Copilot:** não realizado esta semana — mesma limitação de acesso, 8ª semana.

---

## 8. Conteúdo e autoridade temática

**Estudo novo publicado: "Um mapa das empresas de Portugal 2026"** — 16 perguntas pelo melhor de cada sector, 10 assistentes de IA, 616 respostas lidas uma a uma, em português e a partir de Portugal (`/estudo/mapa-empresas-portugal-2026`, com edição EN em `/en/studies/mapping-portugals-companies-ai-answers-2026`). Separa "nomeada" de "escolhida" — a conversão vai de 96% no supermercado a 20% nas marcas portuguesas, com 16 das 39 respostas sobre hospitais privados a não escolherem nenhum. Dataset público CC BY 4.0, agosto 2026. O founder deu nome formal a esta métrica esta semana — **"share of recommendation" (SoR)**, distinta de "share of voice": SoR mede quantas das *escolhas* da categoria são da marca, não quantas das *menções*. Isto é um refinamento metodológico genuíno, não apenas copy — a distinção já estava a ser medida desde 25 ago, o commit desta semana deu-lhe nome e visibilidade nas duas línguas.

Cadência de deploy ao site principal parou em 01 set (ver Secção 3) — sem novo conteúdo publicado nos últimos 6 dias antes desta auditoria, depois da vaga mais intensa já vista por este Routine. Não é um hiato no sentido dos itens escalados em julho/agosto (aqueles eram semanas sem qualquer publicação após períodos de inactividade prolongada); este é o fim natural de um pico de duas semanas. Vigiar se se converte num hiato genuíno na próxima execução.

---

## 9. Entidade e fundação de marca

**Achado novo, confirmado com fonte primária do site:** destaque.ai é **OpenAI Select Partner** no OpenAI Partner Network desde agosto de 2026 (`llms.txt`: "É OpenAI Select Partner no OpenAI Partner Network (Agosto de 2026)"; schema `ProgramMembership` no `Person` do fundador em `/` e `/en`). É um sinal de autoridade de terceiros verificável — não uma auto-declaração sem suporte — e a decisão de o recolher do herói para o rodapé (Secção 1, finding 4) é coerente com a disciplina editorial que esta auditoria normalmente recomenda.

**Achado novo:** o endereço físico completo da Tuasunt, Lda. foi confirmado por pesquisa externa pela primeira vez nesta série de auditorias — Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa, Portugal, junto com a confirmação de que `linkedin.com/company/destaque-ai` existe como página de empresa activa. Não é uma verificação vinda de dentro do site (já confirmada há semanas no schema), é a primeira vez que uma fonte externa reconcilia o mesmo endereço — reduz o risco de inconsistência NAP não detectada.

`/en/about`, obtida por fetch directo, confirma a correcção de posicionamento ("software company") já em produção nessa página — mas o `llms.txt` que a resume não reflecte essa correcção (Secção 7, finding 2). `/sobre` (PT) tem uma leitura mais matizada: a meta description usa "Operação especializada em Generative Engine Optimization" (não "empresa de software"), enquanto o corpo da página e o JSON-LD (`Organization.description`, `WebPage.description`) usam consistentemente "empresa de software". A meta description de `/sobre` não está tecnicamente errada, mas também não reforça a categorização que a homepage e o `llms.txt` PT já fixaram — um alvo menor para uma próxima passagem de consistência.

**O que continua bloqueado:** verificação directa de Wikidata (item da organização, não confirmado nem desmentido nesta sessão — a pesquisa por "Eduardo Mendonça Wikidata" devolveu pessoas homónimas não relacionadas, sem sinal sobre o item Q140043087 já registado em execuções anteriores), Crunchbase, Clutch, Google Business Profile, Bing Places, Apple Maps, pai.pt — `WebFetch` a domínios externos continua bloqueado.

---

## 10. Autoridade e digital PR

**Reconfirmado nesta execução, não apenas valor mantido de memória:** pesquisa dirigida por `WebSearch` a "destaque.ai" cruzado com Observador, ECO, Público, Expresso, Jornal de Negócios e Dinheiro Vivo não devolveu nenhuma menção — apenas páginas genéricas de secção económica desses veículos, sem relação com a destaque.ai. Score mantido em 20/100.

---

## 11. Sinais sociais e comunidade

Página de empresa no LinkedIn confirmada a existir (`linkedin.com/company/destaque-ai/`) via pesquisa — não verificada em detalhe (cadência de posts, engagement). Sem presença confirmada em X, GitHub ou Reddit/HN. Score mantido em 35/100 — o achado de LinkedIn é confirmação de existência, não uma melhoria de actividade medida.

---

## 12. E-E-A-T e autoridade on-site

**Não re-amostrado em detalhe esta semana.** O `ProgramMembership` novo (Secção 9) é um reforço indirecto de autoridade de terceiros mas não foi cruzado com uma revisão completa de autores/credenciais/casos. Valor mantido em 70/100.

---

## 13. Medição e feedback loop

**Score 50/100 — melhoria marginal (+2 vs. 24 ago), com uma composição de erros diferente, não uma fila mais curta.**

`mcp__Vercel__get_runtime_errors` (7 dias, `destaque-ai-tracker`) devolveu **7 grupos de erro**, mais do que os 4 de 24 ago, mas com composição distinta:

- **Mistral — rate-limit novo, 104 ocorrências, durante a própria auditoria.** `mistral/mistral-small-latest (knowledge) failed: Status 429`, janela 07:01–07:11 UTC de hoje, 9 utilizadores afectados. Não estava presente na lista de 24 ago — é um problema novo, não uma recorrência nomeada.
- **DataForSEO — assinatura de erro mudou, plausivelmente para melhor.** Já não aparece `Invalid Field: 'language_name'` (o erro de 54 ocorrências reportado há duas semanas). Em vez disso: `[surfaces] DataForSEO falhou, a cair para SerpApi: Internal SE Server Error` — 22 ocorrências desde 31 jul, incluindo hoje. A leitura mais provável é que o payload inválido foi corrigido e o que resta é uma falha do fornecedor com fallback funcional para SerpApi — um comportamento tratado, não um crash. Não confirmado por commit específico; a próxima execução deve verificar se `language_name` continua ausente antes de fechar o item.
- **Gemini — sem nova ocorrência dentro da janela de 7 dias consultada (31 ago–07 set), pela primeira vez em nove semanas.** `gemini/gemini-3.5-flash (augmented/knowledge) failed: RESOURCE_EXHAUSTED` — última ocorrência registada pela ferramenta: **31 ago 09:39 UTC**, antes do início desta janela de 7 dias. Isto não confirma resolução (o item de backlog de reposição de crédito continua TODO até se ver uma nova auditoria com a mesma leitura, ou confirmação directa de billing), mas é a primeira semana em que a auditoria não encontra uma ocorrência dentro da própria janela testada — registar como sinal a confirmar, não como vitória.
- **Bug novo, não de infraestrutura:** `Functions cannot be passed directly to Client Components` em `/site` e `/prompts`/`/prompts.rsc`, 28 ocorrências, 1 utilizador, 03 set 07:50–08:15 UTC. Erro de serialização React Server Components — uma função a ser passada como prop em vez de ser exposta com `"use server"`. É um bug de código, não de quota/crédito de fornecedor — candidato a correcção rápida, ver backlog.
- **`copilot/serpapi (augmented) failed: This operation was aborted`** — 1 ocorrência, sem mudança, resíduo de baixo volume já conhecido.
- **`destaque-ai` (site principal):** zero erros de runtime nos últimos 7 dias, mantendo o padrão de execuções anteriores.

GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão.

---

## 14. Posicionamento estratégico e inteligência competitiva

Modo knowledge continua sem nomear qualquer concorrente real (sem ferramentas, sem conhecimento de treino verificável). Modo "augmented" via `WebSearch` (Secção 7) traz o achado de concorrência mais importante desde que este Routine começou a testar: **BE VISIBLE**, uma agência com posicionamento quase idêntico ao da destaque.ai — GEO/SEO para B2B SaaS PT, ICP explicitamente descrito como "seed a Series B" — encontrada em duas pesquisas distintas (`GD3`, `V1`). Isto não é um concorrente adjacente a classificar com cautela; nas quatro perguntas de `competitor_filtering.md` §1, o mecanismo e o ICP descrito coincidem de perto com os da destaque.ai — candidato forte a `peer` directo, a confirmar formalmente. Junta-se a Marco Gouveia (venceu de novo em `LR1` e `LR3`, sempre com preço explícito) e a um segundo consultor individual novo, Francisco Paredes (`LR3`). A lista de candidatos a classificar formalmente por `competitor_filtering.md`, aberta desde 20 jul, continua a crescer sem que a classificação formal tenha sido feita — ver backlog.

**Métrica de convergência de descrição de entidade** (introduzida 24 ago): não foi possível re-testar directamente esta semana pela via original (sub-agentes com `WebSearch` dedicado a "o que é a destaque.ai"), mas a descoberta do finding 2 (Secção 7) é evidência directa e mais forte do que um teste de convergência: a fonte que alimentaria essa categorização errada foi identificada com precisão — não é um atraso de indexação de terceiros, é uma linha desactualizada num ficheiro da própria destaque.ai. Corrigir essa linha é a acção mais alavancada disponível para esta métrica.

Share of recommendation (SoR), a métrica nova nomeada esta semana (Secção 8), é directamente relevante a esta secção: é uma medida mais próxima de "quem é escolhido", não apenas "quem é mencionado" — o eixo que esta secção do audit já tenta capturar informalmente com a distinção "citada" vs. "creditada". Protocolo de crise: não accionado.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Corrigir a linha `/en/about` no `llms.txt` — de "consultancy" para "software company", alinhando com a página real | GEO/ENTITY | 15-30min | Eduardo — achado novo, correcção mecânica |
| Investigar por que a rotina semanal saltou 31 ago — 2ª falta em 4 execuções, critério de verificação da última auditoria já falhou; considerar mecanismo de alerta se a rotina não correr | PROCESS | 1-2h | Eduardo — sobe a P0 |
| Confirmar se o crédito do Gemini no Tracker foi reposto, ou se a ausência de erro é apenas falta de tráfego que o accionasse | MEASUREMENT | 30min | Eduardo |
| Corrigir o bug de serialização React em `/site` e `/prompts` (`Functions cannot be passed... use server`) | MEASUREMENT/TECH | 1-2h | Eduardo |
| Classificar formalmente BE VISIBLE pelo teste de 4 perguntas de `competitor_filtering.md` §1 — sobreposição de ICP mais próxima já vista por este Routine | STRATEGIC | 2-4h | Eduardo |
| Passar `Content-Security-Policy` de Report-Only para enforced — 9ª semana sem progresso | TECH | 2h-1 dia | Eduardo |

### Horizonte 2 (semana 3-6) — optimização do existente

- Confirmar se a assinatura de erro nova da DataForSEO (fallback para SerpApi) se mantém estável por 2-3 semanas antes de marcar o item antigo (`language_name`) como resolvido.
- Alinhar a meta description de `/sobre` ("Operação especializada") com "empresa de software", consistente com o resto do site.
- Classificar formalmente Francisco Paredes e reconfirmar Marco Gouveia pelo teste de `competitor_filtering.md` — 3ª auditoria seguida com evidência de vitória directa em pesquisas locais.
- Investigar a colisão de termo "AEO" com "Authorized Economic Operator" em inglês (achado novo) — avaliar se vale a pena reforçar "Generative Engine Optimization" por extenso em conteúdo EN dirigido a `/en/faq` e `/en/glossary`.

### Horizonte 3 (semana 7-12) — reforço estratégico

- Iniciar pipeline de digital PR para cobertura Tier-1 PT — zero cobertura confirmada, 8ª semana.
- Avaliar se o segmento "brands outside Portugal" que a nova copy de `/en` sugere é uma direcção estratégica deliberada ou apenas uma formulação de teste — se deliberada, considerar o que muda no scorecard (mercados-alvo, prompts de teste em inglês fora do contexto PT-PT).
- Monitorizar destaque.ia.br (achado de 24 ago, risco de confusão de marca em EN) — sem re-teste esta semana.

### Horizonte 4 (90+ dias)

- Conteúdo multimodal mais amplo com `ImageObject`/`VideoObject` fora do `/tracker`.
- Presença em conferências/thought leadership.
- Reavaliar Wikipedia se a notabilidade justificar; confirmar directamente o item Wikidata da organização assim que houver via de acesso externo.

---

## 16. Nota de encerramento

O score sobe marginalmente para 73/100, mas o número mais importante desta semana não está no scorecard: é a segunda falta de execução em quatro semanas do próprio Routine que produz este documento, exactamente o padrão que a auditoria anterior tinha avisado que precisava de não se repetir. Isso não invalida o trabalho de conteúdo e produto encontrado — um estudo novo com dataset aberto, um estatuto de parceria real e devidamente sóbrio na forma como foi apresentado, uma correcção de ortografia consistente em todo o site — mas coloca-o ao lado de um problema estrutural que, se persistir, torna toda a série histórica menos fiável do que parece. O achado técnico mais accionável da semana é pequeno em esforço e grande em relevância: a própria destaque.ai está, através do `llms.txt`, a alimentar motores de IA com uma categorização ("consultancy") que já corrigiu na página real há duas semanas — não é um problema de terceiros a apanhar o atraso, é uma linha por actualizar. E o teste multi-motor, mesmo com uma metodologia mais modesta esta semana, encontrou o concorrente com a sobreposição de posicionamento mais próxima já vista nesta série — motivo suficiente para tratar a classificação formal de concorrentes como trabalho, não como adiável.
