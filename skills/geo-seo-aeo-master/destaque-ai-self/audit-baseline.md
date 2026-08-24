# destaque.ai self-audit baseline

**Data da auditoria:** 24 agosto 2026, ~08:10–09:15 UTC. **Execução:** sexta corrida do Routine `destaque-ai-self-audit-weekly` — mas com um hiato: a execução anterior é a de **10 agosto 2026** (`git log`, commit `20e3b6c`), não 17 agosto. Duas corridas de `audit: source-intel` (a rotina distinta do "cérebro" do Tracker) correram em 10 e 17 agosto, mas nenhum commit `audit: YYYY-MM-DD destaque.ai SINAL self-audit` existe entre 10 e 24 agosto — o Routine semanal saltou uma semana. Comparações "vs. semana anterior" neste documento são na prática **vs. há duas semanas**; ver Secção 16 e novo item de backlog PROCESS.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Rede de saída restrita, mesmo padrão de sete semanas.** `curl` directo a `destaque.ai` (5 corridas) devolveu `HTTP 000`/`Connection refused` em todas as tentativas. `WebFetch` directo devolveu `EGRESS_BLOCKED` explícito para `www.destaque.ai`. Dados técnicos do site foram obtidos via `mcp__Vercel__web_fetch_vercel_url` (fetch real, server-side, via Vercel — produção genuína, não curl anónimo nem crawler de terceiros) e via `mcp__Vercel__list_projects` / `list_deployments` / `get_runtime_errors` / `get_web_analytics` para os quatro projectos Vercel relevantes (`destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`). `WebSearch` funcionou normalmente e foi a via usada para o refresh de `models.md` e para o teste multi-motor em modo augmented (executado por três sub-agentes frescos desta sessão, cada um com o seu próprio `WebSearch`, 21 prompts mandatórios + o novo teste de descrição de entidade).

**Amostra técnica desta semana:** homepage (`/`, fetch completo do HTML renderizado, JSON-LD extraído programaticamente por `grep`/`python3` sobre o ficheiro guardado), `/en` (hreflang e title), `robots.txt`, `sitemap.xml` (68 URLs, ver Secção 6), `llms.txt` (**confirmado a funcionar esta semana**, ver Secção 7), histórico de deployments e `get_runtime_errors` (janela 7 dias) para os quatro projectos Vercel. **Não re-amostradas esta semana**: `/servico`, `/sobre`, `/glossario`, `/perguntas`, `/consultoria-geo-portugal`, `/agencia-geo`, `/playbook`, `/estudo/*`, `/casos/*` em detalhe de página — a leitura vem do `llms.txt` (que lista e resume todo o site) e do `sitemap.xml`, não de fetch individual de cada URL.

**O que não foi possível verificar nesta execução, e porquê:**
- **TTFB por curl de PT** — bloqueado, 7ª semana consecutiva (`HTTP 000`/connection refused).
- **PageSpeed Insights (LCP/INP/CLS)** — sem via de acesso nesta sessão (sem chave de API disponível como tool; não confundir com o `HTTP 429` de semanas anteriores, que era rate-limit de um pedido real — esta semana não foi possível sequer tentar o pedido pelas ferramentas disponíveis).
- **Vercel Web Analytics** — `mcp__Vercel__get_web_analytics` no projecto `destaque-ai` devolveu `404 Not Found — "Web Analytics not found"` com datas ISO correctas (`2026-08-17`/`2026-08-24`), confirmando de novo que a funcionalidade **continua desligada** no projecto — a recomendação de Horizonte 1 aberta desde 10 ago não foi accionada.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot** — continua sem sessão de browser autenticada nem integração de API nesta sessão. **7ª semana sem progresso.** Claude continua o único motor com teste directo real (conhecimento + pesquisa), mais um proxy honesto: os `raw_citations` reais dos 8 motores do próprio Visibility Tracker, medidos por um cliente activo do Tracker, ficam disponíveis via `references/source_intelligence.md` — não são o destaque.ai a ser medido, mas são evidência de como cada motor se comporta neste preciso nicho (consultoria de visibilidade em IA em Portugal), e foram usados nesta auditoria para a reconciliação do ponto 6b.
- **Wikidata, LinkedIn, Crunchbase, Clutch, GBP, Bing Places, Apple Maps, pai.pt, cobertura Tier-1 PT, sinais sociais** — não re-verificados esta semana (fora da amostra mais estreita); `WebFetch` a domínios externos continua bloqueado. Valores de 10 ago mantidos sem alteração assumida.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar ou não foi re-amostrada esta semana, está marcado **N/D** ou **não re-verificado**.

---

## 1. Sumário executivo

**Score global: 72/100 — Bom, em melhoria real.** Média de 11 categorias com evidência (Performance/CWV continua N/D, 7ª semana). **Δ vs. 10 ago: +3.** Depois de três execuções seguidas estáveis em 69, este é o primeiro movimento líquido positivo desde 27 julho — mas é um movimento com dois lados nítidos: o hiato editorial de três semanas consecutivas escaladas sem resposta foi resolvido com a maior vaga de publicação editorial vista por este Routine (11 posts novos, duas páginas-pilar novas), e o `llms.txt` finalmente confirmou funcionar depois de duas semanas marcado como "não verificável". Do lado negativo, o item P0 mais barato de resolver de toda a auditoria — crédito de API do Gemini no Tracker — continua por resolver **nove semanas depois** de detectado, e o teste multi-motor desta semana (o mais extenso já feito por este Routine, 21 prompts com pesquisa real via três sub-agentes) confirma que o problema de fundo do destaque.ai não é ausência de conteúdo — é conteúdo que aparece nos resultados de pesquisa dos motores e não recebe crédito na resposta sintetizada, um padrão que se repete em 5 dos 7 prompts onde o site aparece. Ver scorecard e Top findings.

### Scorecard — 12 categorias

| # | Categoria | Score | Δ vs. 10 ago | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 87/100 | 0 | Robots.txt byte-idêntico (18 UAs de IA); CSP continua só Report-Only, 8ª semana sem progresso |
| 2 | Performance / CWV | N/D | — | Sem via de medição nesta sessão; Vercel Web Analytics reconfirmado desligado |
| 3 | SEO On-Page | 94/100 | +1 | Título da homepage mudou hoje mesmo (ver finding 1); hreflang pt-PT/en/x-default confirmado correcto e recíproco entre `/` e `/en`; primeira imagem alguma vez vista na homepage (dashboard do Tracker, com `alt` descritivo) |
| 4 | Schema / dados estruturados | 97/100 | +1 | `Person` do fundador ganhou `sameAs` a ORCID, além do LinkedIn já confirmado; inventário de tipos inalterado |
| 5 | Optimização de imagens | 74/100 | +2 | Primeira imagem da homepage com `alt` descritivo; sitewide continua muito esparso fora do `/tracker` |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 94/100 | +3 | `llms.txt` **confirmado a funcionar** esta semana pela primeira vez em três execuções — ficheiro rico, estruturado, com secção EN própria e negociação de conteúdo em markdown documentada |
| 7 | Conteúdo & topical authority | 95/100 | +14 | Maior vaga de publicação editorial já vista por este Routine — 11 posts novos (mais recente: ontem, 23 ago) e duas páginas-pilar novas (`/agencia-geo`, `/playbook`); hiato de 26/28 dias resolvido por completo |
| 8 | Entidade / brand foundation | 82/100 | +3 | ORCID novo no `sameAs` do fundador; correcção proactiva do título/categoria da homepage feita **hoje mesmo** em resposta directa a um erro de categorização visto numa AI Overview da Google — mas o teste de descrição de entidade desta semana (novo, ver finding 1) mostra que a correcção ainda não convergiu nas respostas dos motores |
| 9 | Autoridade & digital PR | 20/100 | 0 | Não re-verificado esta semana |
| 10 | Sinais sociais & community | 35/100 | 0 | Não re-verificado esta semana |
| 11 | E-E-A-T & on-site authority | 70/100 | 0 | Não re-amostrado em detalhe esta semana |
| 12 | Medição & feedback loop | 48/100 | +13 | 4 grupos de erro no Tracker (vs. 17 há duas semanas); dois dos três motores com crédito esgotado recuperaram, mas o **Gemini continua esgotado ao fim de nove semanas** — o item mais barato de resolver de toda a auditoria, ainda por resolver; DataForSEO regrediu (o erro que parecia resolvido há três semanas voltou); novo sentinela de monitorização (`ops-health`) implementado hoje, ainda sem histórico para avaliar |

### Top 4 findings (cross-dimensional)

1. **A correcção mais reveladora da semana já estava a acontecer antes desta auditoria começar — e o teste multi-motor mostra, no mesmo dia, exactamente o problema que a motivou.** Às 07:58 UTC de hoje (antes desta auditoria arrancar às 08:10), o founder publicou uma correcção ao título por defeito do site: "Titulo do site: software de visibilidade em IA, nao 'com metodo'", com a mensagem de commit a explicar porquê — "A Visao geral por IA do Google descrevia-nos como 'consultoria sediada em Lisboa' (print do founder, 23 Ago). 'Com metodo' nao diz o que somos e a maquina preencheu o vazio com a categoria errada." O título passou de "destaque.ai: Visibilidade em IA, com método." para "destaque.ai: software de visibilidade em IA". Esta auditoria introduz esta semana, por directiva do routine file, um teste novo e permanente — perguntar a cada motor medido "o que é a destaque.ai" e comparar com a descrição-alvo ("empresa de software portuguesa de GEO... que mede e constrói a presença de marcas nas respostas dos motores de IA"). O resultado do primeiro dia deste teste, obtido horas depois da correcção ter sido publicada: em modo augmented (Claude com pesquisa real), tanto a query PT ("o que é a destaque.ai?") como a EN ("what is destaque.ai?") continuam a descrever a empresa como **"consultoria"**, não como empresa de software — a query PT usa a frase exacta "Destaque.ai é uma consultoria especialista em Generative Engine Optimization"; a query EN diz "destaque.ai is a Generative Engine Optimization consultancy based in Lisbon" e nem sequer menciona o Visibility Tracker. Isto não é uma falha da correcção — é o esperado no primeiro dia, antes de qualquer motor voltar a rastrear a página. Mas confirma, com dados reais do próprio dia, que o problema que o founder viu na AI Overview da Google não é um caso isolado: reaparece de forma consistente em pelo menos dois motores/modos diferentes. Fica como métrica nova a acompanhar semana a semana (ver Secção 14) — a primeira leitura de convergência é o ponto de partida, não uma falha.
2. **O padrão "aparece na pesquisa, desaparece na resposta" domina o teste multi-motor desta semana — 7 dos 21 prompts mandatórios trazem destaque.ai aos resultados brutos, mas só 2 sobrevivem à síntese como citação nomeada.** Teste mais extenso já feito por este Routine: 21 prompts mandatórios em modo augmented (Claude com pesquisa web real, três sub-agentes frescos, um por lote). destaque.ai apareceu nos resultados brutos de pesquisa em `GD1`, `GD5`, `GD7`, `LR1`, `V1`, `V2`, `V4` (7/21, 33%) — mas só foi efectivamente usada e nomeada na resposta sintetizada em `GD7` (claramente, como fonte de enquadramento do mercado) e `V4` (nomeada como segunda recomendação, atrás de um consultor individual). Nos outros cinco casos onde apareceu (`GD1`, `GD5`, `LR1`, `V1`, `V2`), o conteúdo do destaque.ai parece ter moldado a resposta — a tese ou a estrutura do argumento espelha de perto os artigos do site — mas a marca nunca é nomeada. `V1` ("como funciona o GEO para uma SaaS B2B em Portugal?") é o caso mais nítido: destaque.ai ocupa as posições #1 e #2 dos resultados brutos e a resposta ainda assim fica genérica, sem crédito. Nos 14 prompts restantes (`GD2`, `GD3`, `GD4`, `GD6`, `GD8`, `GP1`-`GP6`, `LR2`, `V3`, `V5`) destaque.ai está completamente ausente. Zero alucinações e zero menções negativas nos 21 prompts — protocolo de crise não accionado.
3. **Achado novo: um consultor individual (Marco Gouveia) ocupa o lugar que devia ser do destaque.ai em duas das perguntas de maior intenção comercial local, e uma marca com nome quase idêntico mas de outro país (destaque.ia.br) foi encontrada a competir pela mesma pergunta de identidade em inglês.** Em `LR1` ("quem faz auditorias de GEO em Lisboa?"), destaque.ai aparece nos resultados brutos (posição 5 de 8) mas a resposta nomeia apenas Marco Gouveia (`marcogouveia.pt/consultor-geo`), com preços explícitos ("auditorias a partir de 3.000€, consultoria contínua a partir de 1.000€/mês"). Em `V4` ("que consultor de GEO recomendam para uma fintech portuguesa?"), o mesmo Marco Gouveia é nomeado em primeiro lugar, com destaque.ai em segundo — a primeira vez que este Routine confirma um concorrente individual, não uma agência, a vencer destaque.ai numa recomendação directa. Separadamente, o teste de descrição de entidade em inglês ("what is destaque.ai?") trouxe aos resultados **destaque.ia.br**, uma empresa brasileira não relacionada com nome quase idêntico ("Destaque.ia — Rankeie no Google e seja citado pelo ChatGPT, sem trabalho manual") — um risco real de confusão de marca em pesquisas em inglês, não detectado em nenhuma das seis execuções anteriores deste Routine. Nenhum dos dois achados é uma menção negativa ou alucinada (protocolo de crise não accionado), mas ambos são novos e accionáveis.
4. **O item mais barato de resolver de toda a auditoria continua por resolver ao fim de nove semanas — mas a maior parte do resto da Medição melhorou genuinamente, e a equipa construiu hoje o sentinela que devia ter apanhado isto mais cedo.** `mcp__Vercel__get_runtime_errors` (7 dias) para `destaque-ai-tracker` devolveu apenas 4 grupos de erro (vs. 17 há duas semanas) — uma melhoria real: os créditos esgotados de Perplexity e OpenAI/ChatGPT, activos há duas semanas, não aparecem mais na janela de 7 dias. O Gemini, porém, continua exactamente onde estava: `RESOURCE_EXHAUSTED — Your prepayment credits are depleted`, com a ocorrência mais recente confirmada às 07:49 UTC de **hoje**, durante esta própria auditoria — activo desde 23 de junho, **nove semanas sem correcção**, apesar de ter sido sinalizado como o item mais barato de resolver (top-up de conta, 30min-1h) em pelo menos duas auditorias anteriores. Em paralelo, o erro de campo da DataForSEO (`Invalid Field: 'language_name'`) que a auditoria de 10 ago tinha registado como "parece resolvido" **regrediu**: 54 ocorrências entre 1 e 24 de agosto, a mais recente durante esta própria auditoria — a leitura de "resolvido" de há duas semanas estava errada, ou o problema voltou. O contraponto genuíno: a equipa mergeou hoje mesmo um cron diário de saúde operacional (`/api/cron/ops-health`, 12:00 UTC) que verifica auditorias em falta, backlog do cérebro, respostas mock e imprensa parada — exactamente o tipo de sentinela que teria apanhado a exaustão de crédito do Gemini muito antes da 9ª semana. Ainda sem histórico para avaliar se funciona.

### O que já está forte

Esta é a primeira semana em sete em que o lado positivo não precisa de nenhuma qualificação defensiva. O hiato editorial, escalado três vezes consecutivas sem resposta, foi resolvido com a maior vaga de publicação já vista por este Routine — 11 posts e duas páginas-pilar novas, o mais recente publicado ontem. O `llms.txt`, que passou duas execuções marcado como "não verificável" por uma falha de ferramenta desta sessão, confirmou-se esta semana como um ficheiro genuinamente bem construído: estruturado, com resumo por secção, secção inglesa própria, e negociação de conteúdo em markdown documentada (`Accept: text/markdown` e sufixo `.md`). O robots.txt mantém-se completo e permissivo para 18 crawlers de IA nomeados. O site principal (`destaque-ai`) continua com zero erros de runtime nos últimos 7 dias, sétima semana consecutiva. E a equipa reagiu no próprio dia a um problema de categorização visto numa AI Overview real — o tipo de vigilância activa que esta auditoria normalmente tem de recomendar, feita aqui sem ser pedida.

---

## 2. Contexto de negócio

destaque.ai (`Tuasunt, Lda.`), sediada em Lisboa, fundada 2025, fundador Eduardo Mendonça. **Mudança de posicionamento desta semana:** o título por omissão da homepage e do `/en` passou de uma formulação orientada a "método" para uma formulação orientada a categoria — "destaque.ai: software de visibilidade em IA" (PT) — decisão explícita do founder para que motores e IA classifiquem a empresa como empresa de software, não como consultoria (ver finding 1). O portfólio de serviços cresceu: além de Diagnóstico GEO e Avenças, o `llms.txt` desta semana lista explicitamente **AI ads** (gestão e medição de anúncios dentro de respostas de IA, com estado por motor e data) e **Comércio agêntico** (prontidão para agentes de compra) como serviços novos, ambos com páginas próprias em PT e EN. O Visibility Tracker mede agora **12 motores e superfícies** (chegou a 12 esta semana com a adição do Meta AI e do Rufus da Amazon, per mensagem de commit de hoje — "contam como sítios onde a decisão acontece, não como modelos").

Quatro projectos Vercel confirmados na conta (`destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`) — sem alteração de contagem. `destaque-ai-commercial` e `destaque-ai-deck-builder`: zero erros de runtime nos últimos 7 dias.

---

## 3. Análise de plataforma

Hosting Vercel, projecto `destaque-ai` (`prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`). Actividade de deploy muito intensa nesta janela: pelo menos 20 deployments do site principal nas últimas ~24h antes desta auditoria, incluindo o deploy de produção mais recente (título/categoria, ~07:58 UTC de hoje). `destaque-ai-tracker` (`prj_jruA9HNORHtP9trNbQw7BZIp0Jg0`): actividade equivalente, culminando no cron `ops-health` (deploy de produção mais recente, ~08:06 UTC de hoje). Sem alteração de plataforma/hosting/custo face a 10 ago.

---

## 4. Performance

**N/D, sétima semana consecutiva.** Sem via de acesso ao PageSpeed Insights nesta sessão. `curl` de saída continua bloqueado (`HTTP 000`). Vercel Web Analytics reconfirmado desligado no projecto `destaque-ai` (`404 Not Found`, com parâmetros de data correctos desta vez — não foi um erro de formato, é a funcionalidade mesmo desligada). Sinais indirectos via headers Vercel: `content-encoding: br` no `sitemap.xml`; `x-vercel-cache: HIT` nas respostas estáticas amostradas. Sem alteração face às semanas anteriores.

---

## 5. SEO on-page

Homepage confirmada por fetch directo e extracção programática do HTML: **título mudou hoje** para "destaque.ai: software de visibilidade em IA" (era "destaque.ai: Visibilidade em IA, com método."); meta description inalterada ("O ChatGPT é o novo boca a boca..."), presente em `<meta name="description">`, `og:description` e `twitter:description`; **1×H1, 16×H2** (era 12×H2 em 10 ago — crescimento provavelmente reflecte as novas secções de produto/serviço); **1 imagem** (`/tracker/dashboard.webp`, `alt="Dashboard do Visibility Tracker: alertas por ler, ..."`) — **a primeira imagem alguma vez confirmada na homepage** em sete execuções deste Routine; `<link rel="canonical">` presente; **hreflang confirmado correcto e recíproco**: homepage declara `pt-PT` (self) + `x-default` (self); `/en` declara `pt-PT` (→ homepage), `en` (self) e `x-default` (→ homepage) — os três valores correctos, contrariando uma leitura inicial errada desta sessão que, por um limite de contexto no `grep`, tinha cortado a tag `en` a meio (corrigido antes de reportar).

Páginas restantes não re-amostradas individualmente esta semana — a leitura vem do `llms.txt` (Secção 7) e do `sitemap.xml` (Secção 6).

---

## 6. SEO technical

- **`sitemap.xml`:** **68 URLs** (era 55 em 10 ago, +13). Novidades confirmadas: `/agencia-geo` e `/en/ai-ads`, `/en/agentic-commerce` (novas páginas de serviço), `/playbook` e `/playbook/produtos-em-ia` (novo conteúdo metodológico público), mais 11 posts novos de blog (ver Secção 8). Todas as páginas estruturais mostram `lastmod` de hoje (07:35 UTC, momento do último build); posts de blog mantêm datas de publicação próprias.
- **`robots.txt`:** **756 bytes**, conteúdo confirmado byte-idêntico ao de 10 ago: 18 user-agents de IA nomeados, todos `Allow: /`, bloco wildcard com `Content-Signal: search=yes, ai-input=yes, ai-train=yes`.
- **`hreflang`:** confirmado correcto e recíproco entre `/` e `/en` (ver Secção 5) — item de backlog fechado, ver `improvements-backlog.md`.
- **JSON-LD schema:** homepage confirmada com `Organization`, `Person` (fundador), `WebSite`, `WebPage`, `Service` (`OfferCatalog`, 5 itens), `FAQPage` (`Question`/`Answer`, 4 pares na amostra), `SpeakableSpecification`, `Audience`, `PostalAddress`, `ContactPoint`, `Country`, `Place` — inventário idêntico ao de 10 ago, com **um `sameAs` novo no `Person` do fundador: ORCID** (`https://orcid.org/0009-0001-7315-6837`), além do LinkedIn já confirmado.
- **Security headers:** HSTS, `x-content-type-options`, `x-frame-options: DENY`, `referrer-policy`, `permissions-policy` confirmados. **`content-security-policy-report-only` continua presente, enforced continua ausente** — 8ª semana consecutiva sem progresso.
- **Compressão e cache:** Brotli confirmado em `sitemap.xml`. Sem alteração.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`: confirmado a funcionar, pela primeira vez em três execuções.** Fetch bem-sucedido via `mcp__Vercel__web_fetch_vercel_url` (`HTTP 200`, `x-vercel-cache: PRERENDER`). Conteúdo rico: resumo da empresa, pilares (Produto/Método/Investigação), lista completa de serviços com descrição, glossário, 26 FAQs linkadas, 3 estudos, 3 casos, secção "English" completa e paralela, blog completo (26 posts listados), política de uso por IA, e uma linha de negociação de conteúdo em markdown ("Qualquer página em markdown: acrescenta `.md` ao URL... ou pede com o header `Accept: text/markdown`") e referência a `llms-full.txt` para o conteúdo completo em single-fetch. As duas semanas de falha anterior (`"Unable to create shareable URL"`) foram confirmadas como falha da ferramenta desta sessão, não do site — item de backlog fechado.
- **Robots.txt / postura para crawlers de IA:** confirmado byte-idêntico — ver Secção 6.
- **HTML server-renderizado:** confirmado de novo — fetch da homepage devolveu HTML completo com todo o JSON-LD embutido.
- **Multimodal grounding:** primeira imagem da homepage tem `alt` descritivo mas **não foi confirmado `ImageObject`** nesta amostra estreita (não fetchada a homepage com profundidade suficiente para o schema de imagem especificamente) — fica como item a confirmar na próxima execução, não assumido como ausente.
- **Teste multi-motor — o mais extenso já feito por este Routine: 21 prompts mandatórios em modo augmented via três sub-agentes frescos com `WebSearch`, mais o teste novo de descrição de entidade:**

  | Motor | Modelo por defeito (per `references/models.md`) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.6 Luna (Free/Go) | **Não** — 7ª semana |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não** — idem |
  | Google AI Mode | Gemini 3.5 Flash | **Não** — idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Sim — modo knowledge (esta sessão, sem ferramentas) e modo augmented (3 sub-agentes frescos com `WebSearch`), 31 + 21 prompts, mais teste de descrição de entidade** |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não** — idem |

  **Modo knowledge, 24 ago 2026 ~08:15 UTC** — 21 mandatórios + 10 rotativos (31 no total), respondidos directamente por esta sessão (Claude Sonnet 5) sem invocar `WebSearch` nem qualquer outra ferramenta:
  - **0/31 mencionaram destaque.ai.** Sétima semana consecutiva com 0/N — o padrão está agora bem estabelecido: este modelo, nesta sessão, não tem conhecimento de treino verificável sobre destaque.ai.
  - **0/31 alucinaram.** Recusa correcta e explícita em nomear um fornecedor específico de memória de treino nos prompts de recomendação nomeada, redireccionando para verificação (Clutch, G2, LinkedIn, pedir casos reais).
  - **Rotativa desta semana:** `FS1`-`FS3`, `FS6`-`FS7`, `PC1`, `PC3`, `GP7`-`GP9` (10 prompts) — nenhum nomeou destaque.ai nem qualquer concorrente PT específico de forma não solicitada.
  - **Branded (`DC1`, variante "destaque.ai vs. AISO Hub"):** recusa explícita e correcta — sem conhecimento verificável de nenhuma das duas entidades na memória de treino desta sessão para sustentar uma comparação.

  **Modo augmented (pesquisa web real via `WebSearch`, 3 sub-agentes frescos, um lote de 8/8/5 prompts), 24 ago 2026 ~08:20-08:45 UTC** — 21 prompts mandatórios:
  - **destaque.ai apareceu nos resultados brutos de pesquisa em 7/21** (`GD1`, `GD5`, `GD7`, `LR1`, `V1`, `V2`, `V4`) — **mas só foi efectivamente citada/nomeada na resposta sintetizada em 2/21** (`GD7`, `V4`). Ver finding 2 para o detalhe por prompt — este é o achado central da semana.
  - **`GD2`, `GD3`, `GD4`, `GD6`, `GD8`, `GP1`-`GP6`, `LR2`, `V3`, `V5` — destaque.ai ausente por completo** (14 de 21).
  - **`GD6` — colisão de termo com a indústria de geodesia reconfirmada, 2ª auditoria seguida** (a primeira foi 10 ago): resultados dominados por Sistopo, GEOÁREA, Geolayer, Geo21, GeoSurveys, zero resultados de AI search optimization. `V3` mostra uma variante distinta da mesma ambiguidade — o próprio motor de pesquisa assinalou explicitamente não saber se "GEO" significava Generative Engine Optimization ou "Geographic Expansion Outsourcing".
  - **Concorrentes nomeados ao longo do lote:** Marco Gouveia (consultor individual, ver finding 3, o achado de concorrência mais forte da semana), Luso AI (auto-descrita como líder nacional, `GD5`), Infinidata (auto-descrita como "escolha número um", `GD1`), AISO Hub (presença forte de listicles auto-publicados, `GD8`), Latigid (`GD7`), Maria Madeira (consultora individual, `LR2`, EN), Digital Results (`GD3`), Somos6Digital (`GD4`), UniK SEO (`V5`).
  - **Sentimento:** neutro/positivo em todos os casos com menção; nunca negativo. **0/21 alucinaram.**
  - **Protocolo de crise:** não accionado.

  **Teste novo — descrição de entidade ("o que é a destaque.ai"), primeira execução, série de convergência a começar hoje:**
  - **PT ("o que é a destaque.ai?"):** classifica como **consultoria**, não software ("Destaque.ai é uma consultoria especialista em Generative Engine Optimization, com base sólida em SEO técnico e local"). Menciona GEO explicitamente. Menciona a função do Tracker sem usar o nome do produto.
  - **EN ("what is destaque.ai?"):** classifica como **consultancy** ("a Generative Engine Optimization consultancy based in Lisbon"). Menciona GEO/AEO/LLMO explicitamente. **Não menciona o Visibility Tracker.** Traz aos resultados **destaque.ia.br**, empresa brasileira não relacionada com nome quase idêntico — risco de confusão de marca, ver finding 3.
  - **Leitura honesta:** o teste correu horas depois da correcção de título ter sido publicada — divergência esperada no dia 1, não uma falha da correcção. Ver finding 1 e Secção 14 para o plano de acompanhamento.

  **Multimodal prompt test, ChatGPT, Perplexity, Google AI Mode, Bing Copilot:** não realizados esta semana — mesma limitação de acesso, 7ª semana.

---

## 8. Conteúdo e autoridade temática

**O hiato editorial de três escaladas consecutivas está resolvido.** `sitemap.xml` e `llms.txt` confirmam **11 posts novos** desde 10 ago, o mais recente publicado **ontem, 23 ago** ("O funil mudou: a decisão de compra acontece dentro da resposta"): `ia-descreve-mal-o-teu-produto`, `como-anunciar-no-chatgpt`, `como-aparecer-no-copilot`, `como-aparecer-no-chatgpt`, `verificar-se-a-ia-le-o-seu-site` (todos 20 ago), `compra-agentica-lojas-portuguesas`, `quanto-custa-consultora-geo-portugal`, `primeiros-90-dias-consultora-geo` (18 ago), `agencia-geo-lisboa-saas-b2b`, `consultora-geo-vs-equipa-interna` (10 ago), e `funil-da-decisao-em-ia` (23 ago). Mais duas páginas-pilar novas: `/agencia-geo` (confronto directo software vs. agência, nascida de dados reais do Google Search Console citados na mensagem de commit) e `/playbook` + `/playbook/produtos-em-ia` (o método publicado, assinado por Eduardo Mendonça, com um caso de verificação em primeira mão datado de 20 ago). O pedido explícito desta auditoria, repetido três vezes desde 27 jul, foi atendido com folga — não com uma decisão de pausar, mas com conteúdo genuíno e substancial.

Distribuição (`/feed.xml`) e estatísticas originais: não re-verificadas esta semana, sem indício de regressão.

---

## 9. Entidade e fundação de marca

`Organization.sameAs` — LinkedIn, Crunchbase, Clutch, Wikidata (`Q140043087`) — confirmado inalterado. `Person` do fundador ganhou um `sameAs` novo: **ORCID** (`https://orcid.org/0009-0001-7315-6837`), além do LinkedIn já confirmado — um segundo identificador académico/profissional verificável, reforço directo de E-E-A-T. **Mudança de posicionamento com efeito directo nesta categoria:** o título por omissão do site (Secção 1, finding 1) foi corrigido hoje para afirmar "empresa de software" em vez de "com método" — uma correcção de entidade, não só de copy, mas o teste desta semana confirma que a convergência nas respostas dos motores ainda não aconteceu (ver Secção 14).

**O que continua bloqueado:** verificação externa dos perfis `sameAs` — `WebFetch` a domínios externos continua bloqueado nesta sessão. Google Business Profile, Bing Places, Apple Maps, pai.pt — não re-verificados esta semana.

---

## 10. Autoridade e digital PR

**Não re-verificado esta semana.** Valor de 10 ago mantido (20/100, zero cobertura Tier-1 PT confirmada até à data).

---

## 11. Sinais sociais e comunidade

**Não re-verificado esta semana.** Valor de 10 ago mantido (35/100).

---

## 12. E-E-A-T e autoridade on-site

**Não re-amostrado em detalhe esta semana.** O `sameAs` novo do fundador (ORCID, Secção 9) é reforço directo desta categoria mas não foi cruzado com uma revisão completa — fica registado para a próxima execução, valor mantido em 70/100.

---

## 13. Medição e feedback loop

**Score 48/100 — melhoria real (+13 vs. 10 ago), mas o item mais barato de resolver de toda a auditoria continua por resolver.**

`mcp__Vercel__get_runtime_errors` (7 dias) para `destaque-ai-tracker` devolveu **4 grupos de erro** (vs. 17 há duas semanas):

- **Gemini — crédito pré-pago esgotado, nona semana sem correcção.** `RESOURCE_EXHAUSTED — Your prepayment credits are depleted`, ocorrência mais recente confirmada **07:49 UTC de hoje**, durante esta própria auditoria. Activo desde 23 jun 2026. Continua a afectar `gemini/gemini-3.5-flash` em modo knowledge e augmented.
- **DataForSEO — regressão, não resolução.** `Invalid Field: 'language_name'` (o erro que a auditoria de 10 ago tinha registado como "não recorreu, parece resolvido"): 54 ocorrências entre 1 e 24 ago, a mais recente durante esta própria auditoria. A leitura de "resolvido" de há duas semanas não se confirmou. Mais um erro distinto e menor no mesmo integrador: `Internal SE Server Error`, 9 ocorrências desde 31 jul.
- **Perplexity e OpenAI/ChatGPT — sem ocorrência nova na janela de 7 dias.** Os erros de crédito esgotado (`401`/`429`) que dominavam a auditoria de 10 ago não aparecem na lista actual de 4 grupos — leitura mais provável é resolução real (top-up de conta), mas não confirmada por nenhum commit ou registo explícito.
- **`destaque-ai` (site principal), `destaque-ai-commercial`, `destaque-ai-deck-builder`:** zero erros de runtime nos últimos 7 dias em todos os três.

**Desenvolvimento novo, ainda sem histórico para avaliar:** um cron diário de saúde operacional (`/api/cron/ops-health`, 12:00 UTC) foi mergeado hoje — verifica auditorias em falta por cliente, backlog do cérebro com mais de 24h, respostas mock dentro de auditorias correntes, e imprensa parada há 48h; envia email via Resend só quando algo está vermelho. É exactamente o tipo de sentinela que devia ter apanhado a exaustão de crédito do Gemini muito antes da 9ª semana — mas foi construído hoje, não antes, e ainda não tem histórico de funcionamento para confirmar que vai cumprir essa promessa.

GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão.

---

## 14. Posicionamento estratégico e inteligência competitiva

Modo knowledge continua a não nomear nenhum concorrente real (0/31). Modo augmented, no teste mais extenso já feito por este Routine, confirma o padrão "citado sem ser recomendado" como o problema estrutural central (finding 2) e traz dois achados de concorrência novos: **Marco Gouveia**, um consultor individual que venceu destaque.ai em duas recomendações directas (`LR1`, `V4`) — a primeira vez que este Routine confirma um indivíduo, não uma agência, a ocupar esse lugar — e **destaque.ia.br**, uma empresa brasileira de nome quase idêntico encontrada a competir pela mesma pergunta de identidade em inglês (finding 3). O item de backlog de classificação formal de AISO Hub/UniK SEO permanece aberto, agora reforçado por Marco Gouveia, Luso AI, Infinidata e Latigid como candidatos adicionais ao teste de 4 perguntas de `competitor_filtering.md`.

**Métrica nova a partir de hoje: convergência da descrição de entidade por motor** (per directiva no ficheiro da rotina, `routines/destaque-ai-self-audit-weekly.md`). Ponto de partida (24 ago 2026): Claude augmented, PT e EN, classifica destaque.ai como "consultoria"/"consultancy", não como empresa de software; menciona GEO em ambos os modos; menciona o Tracker funcionalmente em PT, não o menciona em EN. A correcção de título publicada hoje de manhã ainda não tinha propagado às respostas dos motores no momento deste teste — esperado no dia 1. Acompanhar semana a semana; divergência persistente para além de 2-3 semanas passa a acção (ver Horizonte 1).

Share-of-voice: continua N/D como métrica formal própria — o Tracker que a calcularia melhorou esta semana (4 grupos de erro vs. 17) mas ainda tem o Gemini fora do ar. Protocolo de crise: não accionado.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Repor crédito/billing no Gemini (Google AI Studio) — 9 semanas em falta, o item mais barato de toda a auditoria, ainda por resolver | MEASUREMENT | 30min-1h | Eduardo — pedido pela 3ª vez |
| Diagnosticar a regressão do erro `language_name` na DataForSEO (a "resolução" de 10 ago não se confirmou) | MEASUREMENT | 2-4h | Eduardo |
| Investigar por que a rotina semanal saltou a semana de 17 ago (sem commit `audit:` entre 10 e 24 ago) — risco de recorrência | PROCESS | 1-2h | Eduardo |
| Activar Vercel Web Analytics no projecto `destaque-ai` (confirmado desligado, 3ª semana formal) OU aceitar a ausência e documentar uma alternativa deliberada | TECH | 30min-2h | Eduardo |
| Classificar formalmente Marco Gouveia, Luso AI, Infinidata, Latigid, AISO Hub e UniK SEO pelo teste de 4 perguntas de `competitor_filtering.md` — lista cresceu de 2 para 6 candidatos em 3 semanas | STRATEGIC | 3-5h | Eduardo |
| Passar `Content-Security-Policy` de Report-Only para enforced — 8ª semana sem progresso | TECH | 2h-1 dia | Eduardo |

### Horizonte 2 (semana 3-6) — optimização do existente

- Acompanhar a métrica nova de convergência de descrição de entidade (Secção 14) — se "consultoria" persistir para além de 2-3 semanas, investigar se é preciso mais do que o título (ex. `Organization.@type`, descrição do schema, texto do primeiro parágrafo visível).
- Investigar o padrão "citado sem ser recomendado" (finding 2) como item de conteúdo: os artigos que aparecem nos resultados brutos (`V1`, `V2`, `GD1`, `GD5`, `LR1`) podem precisar de estrutura de resposta mais directa/citável (per `engine_playbooks.md` § claude — "escreve páginas que expliquem o que a marca faz em linguagem directa, factual").
- Confirmar `ImageObject` na imagem nova da homepage e estender a mais visualizações.
- Avaliar se o novo cron `ops-health` teria apanhado a exaustão do Gemini mais cedo — revisitar após 2-3 semanas de histórico real.

### Horizonte 3 (semana 7-12) — reforço estratégico

- Iniciar pipeline de digital PR para cobertura Tier-1 PT.
- Direccionar conteúdo/SEO especificamente para `LR2` (EN) e `V3`/`V5` — ausentes há semanas consecutivas.
- Monitorizar destaque.ia.br — sem acção imediata (não é uma menção negativa nem alucinada), mas vigiar se a confusão de marca se agrava em pesquisas EN.
- Considerar conteúdo que trabalhe a desambiguação do termo "GEO" em português — achado confirmado pela 2ª auditoria seguida.

### Horizonte 4 (90+ dias)

- Conteúdo multimodal mais amplo com `ImageObject`/`VideoObject` fora do `/tracker`.
- Presença em conferências/thought leadership.
- Reavaliar Wikipedia se a notabilidade justificar.

---

## 16. Nota de encerramento

O score global sobe para 72/100, a primeira subida líquida em quatro execuções — mas o número por si só simplifica uma semana com uma correcção honesta a fazer primeiro: esta comparação é contra uma auditoria de há duas semanas, não de há uma, porque o Routine saltou 17 de agosto sem deixar registo do porquê (novo item PROCESS, Horizonte 1). Dentro desse intervalo mais largo, o movimento é real dos dois lados. O positivo: o hiato editorial que esta auditoria escalou três vezes seguidas foi resolvido com a maior vaga de conteúdo já vista, o `llms.txt` confirmou-se finalmente a funcionar, e a equipa reagiu no próprio dia a um erro de categorização visto numa AI Overview real — a mesma vigilância activa que esta auditoria normalmente tem de pedir, feita aqui sem ser pedida. O negativo, e mais instrutivo: o teste multi-motor mais extenso já feito por este Routine mostra que o problema central do destaque.ai não é falta de conteúdo indexável — é conteúdo que chega aos resultados de pesquisa e não sobrevive à síntese da resposta, um padrão em 5 de 7 aparições esta semana, com um consultor individual a vencer destaque.ai em duas recomendações directas. E o item mais barato de resolver de toda a auditoria — um top-up de conta no Gemini — continua por resolver ao fim de nove semanas, um lembrete de que a distância entre "sinalizado" e "corrigido" às vezes não é técnica.
