# destaque.ai self-audit baseline

**Data da auditoria:** 2 novembro 2026, manhã (UTC). **Execução:** décima quinta corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (26 out): oitava execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** a última entrada era de 19 out (14 dias, acima do limiar de 7). Refresh tentado com 3 pesquisas `WebSearch`; as fontes Tier 1 não foram lidas directamente e os resultados são secundários e em parte contraditórios, pelo que **nenhuma linha mudou** (entrada datada de 2 nov acrescentada). O news-feed de 27 out a 2 nov regista "sem modelos novos nem mudanças de preço de tabela".
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/` (`Accept-Encoding: br`), headers, HTML, JSON-LD, `hreflang`, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, rotas-chave, `/imprensa`, `/radar`; `get_runtime_errors` (7 dias) nos projectos `destaque-ai` e `destaque-ai-tracker`; `list_deployments` (produção) na Vercel.
- **Teste multi-motor: 32 prompts + 2 prompts obrigatórios adicionais (LR1, LR2) + 2 pesquisas (entidade, imprensa)** via quatro sub-agentes de `WebSearch` (8 GD, 9 GP, 5 V, 10 rotativos: GE1, GE5, DC3, DC5, LR3, FS1, FS4, FS7, PC2, PC4; diferem dos da semana passada). **É um proxy:** `WebSearch` é só dos EUA e devolve síntese e ligações; não são ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produtos (sem sessão de browser nem API nesta execução, 16.ª semana). Modelos activos por motor per `models.md`; não registados por prompt (o proxy não os expõe). A hora exacta por pesquisa não é devolvida. Os sub-agentes não abriram as páginas citadas; "na síntese" significa no texto devolvido.
- **Não verificável:** PageSpeed Insights (LCP/INP/CLS): `429` de quota diária da Google, de novo. Wikidata: a API devolveu `429` (limite de pedidos), pelo que a ausência de item **não foi re-confirmada** (última leitura, 26 out: lista vazia). Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4, BWT: sem acesso. As peças de `/imprensa` são declaração do próprio site; não foram abertas nos sites dos jornais. O header `date` das respostas em cache mostra 30 out; usa-se 2 nov, a data da rotina.

---

## 1. Sumário executivo

**Score global: 73,5/100 (74 arredondado; +0,8 vs. 26 out).** Duas categorias sobem: Autoridade & PR (+6, sala de imprensa passa a listar Observador, Cidade FM, M80 e Smooth FM, per commit #220 e página em produção) e Medição (+2, o erro de crédito Anthropic não aparece na janela de 7 dias). Entidade +1.

Visibilidade em respostas de IA: **9 de 32 prompts (28%) com destaque.ai na síntese**, contra 3 de 32 (9%) a 26 out. Nos 22 prompts fixos: 8/22 (36%), mais V1 só como ligação (Clutch); era 3/22 em 26, 19, 12 e 5 out. A subida concentra-se em GD3 a GD8 (6/8, era 2/8) e muda de origem: **o perfil Clutch (`clutch.co/profile/destaqueai`) passa a ser a fonte principal** (GD3-7, V1, V5, LR3), a par do Sortlist (GD5, GD8, V2). O site próprio continua a nunca ser a fonte. **Caveat:** uma variação de 3 para 9 no mesmo proxy, sem alteração conhecida de conteúdo, pode ser em parte ruído do motor de pesquisa; só duas semanas consecutivas a confirmam. 0/9 em GP1-9 (inalterado), 0/2 em LR1-LR2, 0/9 nos restantes rotativos.

No terreno: TTFB mediano de 353 ms (241 ms a 26 out; corridas 1.089, 503, 353, 216, 161 ms: as duas primeiras incluem estabelecimento de ligação via proxy do ambiente; as quentes ficam em 161-216 ms), HTML de 153.235 B (153.412), 25.247 B em Brotli (25.235), sitemap de 135 URLs (igual). Em produção: 8 deploys desde 26 out (#220–#227), todos `READY`: Radar mensal e PDF, `/relatorio` para prospects, ajustes de layout e imprensa (#220).

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 26 out | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 89 | 0 | `content-encoding: br`; CSP continua só Report-Only (17.ª semana+); `/radar` fora do sitemap (3.ª semana) |
| 2 | Performance / CWV | 65 | 0 | TTFB mediana 353 ms (ligação fria incluída); HTML 153.235 B; LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | 0 | 1×H1, 13×H2, 13×H3; `hrefLang` pt-PT/en/x-default; `/en/radar` 404 |
| 4 | Schema | 92 | 0 | 2 blocos JSON-LD; 5 motores persistem em `Service` (7.ª semana) |
| 5 | Imagens | 76 | 0 | 14 `<img>`, 3 com `alt` descritivo |
| 6 | GEO técnica | 93 | 0 | `llms.txt` 38.023 B e `llms-full.txt` 62.491 B (iguais); sem `/radar` |
| 7 | Conteúdo & topical authority | 97 | 0 | 8 deploys, quase todos Radar e layout; sem peça PT-PT nova para os gaps de GP |
| 8 | Entidade | 79 | +1 | Clutch passa a surgir em respostas; Wikidata não re-confirmado (429) |
| 9 | Autoridade & PR | 52 | +6 | `/imprensa` com Observador e três rádios (declarado); não verificado na origem |
| 10 | Social & community | 37 | 0 | não re-amostrado |
| 11 | E-E-A-T | 71 | 0 | sem alteração |
| 12 | Medição | 36 | +2 | Anthropic sem erro de saldo na janela; Gemini e DeepSeek até 29 out; SerpApi/DataForSEO persistem a 2 nov |

Média simples: 73,5.

### Top findings

1. **Medição: três dos quatro fornecedores continuam a falhar (P0/P1).** Janela 26 out–2 nov: DataForSEO `Internal SE Server Error` 172 ocorrências com fallback SerpApi "run out of searches" (`google_aio` 139, `google_ai_mode` 30, última a 2 nov 07:07 UTC); Gemini `402 RESOURCE_EXHAUSTED` 25+25, última a 29 out; DeepSeek `402 Insufficient Balance` (17 grupos, 29 out); Mistral `429` 71 (2 nov). **Anthropic `credit balance is too low` não aparece na janela** (última leitura 26 out 07:14 UTC, imediatamente antes do início da janela); ausência não é prova de recarga. Claude: 7 timeouts de 180 s; Perplexity `429`: 7.
2. **Visibilidade em respostas de IA sobe para 9/32 (28%), via Clutch.** Em GD3, GD4, GD6 e GD7 destaque.ai é o 1.º nome listado; em GD5 o único dos três; em GD8 o 2.º de 3 sediados em Portugal (após AISO Hub); em V5 o 1.º de 5. Em GD1 ("melhor agência de GEO em Portugal"), a pergunta de maior volume, **não aparece** (domina AppLabx, um listicle próprio). Dependência de directórios: sem Clutch e Sortlist, 0/32.
3. **Sem menção negativa nem alucinada.** Reservas factuais e correctas: "fundada em 2025, por isso tem pouco historial" (GD3), "estrutura pequena" (V5), "o perfil ainda não tem avaliações" (26 out). GD5 e V2 repetem "afirma ter investigação própria"; GD8 repete "45 empresas B2B de software" (estudo de maio). **Protocolo de crise (SKILL.md §14) não accionado.** Confusões de entidade persistem: E1 ("destaque.ai Periscopy Lisboa") devolve Web Summit e a app Periscope; 0 resultados sobre destaque.ai.
4. **Imprensa na origem continua por verificar; o proxy não vê nenhuma.** E2 devolve apenas Sortlist; 0 peças de Lusa, Público, Marketeer, Observador, SAPO sobre destaque.ai. O item de 26 out (verificar as peças nos sites dos meios) segue aberto, agora com mais quatro peças a verificar.
5. **Concorrência PT:** Bluesoft é o nome mais frequente (GD1, 3, 4, 5, 6, 7, V5), seguido de DevCommX (GD3, 4, 6, 7, V1-3), revaliQ (GD3, 5, 6, LR3), AppLabx (GD1, 6, 7), Claneo, Marketing Gabriel Agency; AISO Hub em GD8 e LR2 (única agência dada como sediada em Lisboa em LR2). Preços de terceiros, não verificados: Zaask 80–1.500 EUR por consultoria de SEO (única fonte `.pt` com tabela); DevCommX GEO "desde USD 2.000/mês" (V3, via síntese); revaliQ USD 100–149/h (Clutch).
6. **Lacunas de formato.** "Não encontrei" em LR1 (resultados dominados por auditoria financeira), LR2 (AEO ambíguo com "Authorized Economic Operator"), V3, V4, DC5, PC4 (sem preço específico de GEO). GP1-9: conteúdo brasileiro e em inglês (conversion.com.br, seocrawl.ai, ranktracker.com/pt-br, llmpulse.ai); nenhuma fonte `.pt` com dados próprios.
7. **`/radar` fora do sitemap e do `llms.txt`; `/en/radar` 404** (3.ª semana). A página `/radar` responde 200 com 466.320 B e 2 blocos JSON-LD, mas o `sitemap.xml` não a lista e o `llms.txt` não a refere, apesar de 8 deploys em sete dias.

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (14.ª semana+). 19 user-agents no `robots.txt`, todos `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes`. Deploys: 8 em 8, `READY`. `hrefLang` presente. E-E-A-T de `/imprensa` (licença CC BY 4.0, forma de citação, limitações dos estudos).

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa; fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Produto Periscopy (onze motores e superfícies), servidor MCP público em `tracker.destaque.ai/api/mcp`. Radar em `/radar` (agora mensal), Estúdio, Engenharia de perguntas (`/engenharia-de-perguntas`, `/en/prompt-engineering`), sala de imprensa em `/imprensa` sob CC BY 4.0 (declarado).

## 3. Plataforma

Vercel; projectos relevantes: `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Site principal: 30 deploys de produção listados (20 out a 30 out), 29 `READY`, 1 `ERROR` (#201, de semana anterior, recuperado); desde 26 out, 8 deploys (#220–#227), todos `READY`. O actual é o #227 (30 out, "Radar de outubro: PDF no site e link com registo de quem abre"). Web Analytics da Vercel não re-testado.

## 4. Performance

TTFB (5 corridas `curl`, `https://www.destaque.ai/`, `Accept-Encoding: br`): 1.089, 503, 353, 216, 161 ms; **mediana 353 ms** (26 out: 241 ms). A subida da mediana reflecte as primeiras corridas (ligação e túnel do proxy do ambiente); `x-vercel-cache: HIT`. HTML: 153.235 B descodificado; 25.247 B em Brotli (−84%); `content-encoding: br`. `x-nextjs-prerender: 1`: HTML server-renderizado. LCP/INP/CLS: **N/D** (PSI `429`, quota diária).

## 5. SEO on-page

Título "destaque.ai: software de visibilidade em IA". Meta description inalterada ("O ChatGPT é o novo boca a boca..."). 1×H1, 13×H2, 13×H3. `hrefLang` pt-PT, en, x-default (em `<link rel="alternate">`). 14 imagens, 3 com `alt` não vazio. 200 em `/en`, `/radar`, `/imprensa`, `/casos`, `/sobre`; 404 em `/en/radar` e `/estudio`.

## 6. SEO técnico

- `sitemap.xml`: **135 `<loc>`**; `lastmod` mais recente 2026-10-14 (inalterado). Sem `/radar`; `imprensa` 1 entrada.
- `robots.txt`: 19 linhas `User-Agent`, todas `Allow: /`, `Content-Signal` como acima; matriz inalterada. News-feed de 2 nov: Google, Bing, OpenAI e Anthropic anunciaram a intenção de suportar um sinal partilhado de preferência de treino no `robots.txt` (Google para início de 2027; secundária, rascunho IETF). Sem acção agora.
- JSON-LD homepage (2 blocos): `Organization` (`sameAs`: LinkedIn, Crunchbase, Clutch; sem Wikidata), `Person` (`sameAs`: LinkedIn, ORCID), `WebSite`, `WebPage`, `Service`, `FAQPage`, `SpeakableSpecification`, `ProgramMembership`, `OfferCatalog`, `Brand`, `Place`, `PostalAddress`, `ContactPoint`.
- Headers: HSTS (max-age 63072000), `x-frame-options: DENY`, `x-content-type-options: nosniff`, `referrer-policy`, `permissions-policy`; **CSP só `report-only`**. Header `Link` aponta `llms.txt` e `agent-skills/index.json`.

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` (38.023 B) e `llms-full.txt` (62.491 B): 200, iguais a 26 out. `llms.txt` não refere `/radar`.

### Refresh de models.md

Tentado (14 dias), sem alteração de linhas; ver nota de metodologia.

### Teste multi-motor (proxy `WebSearch`, 2 nov 2026)

| Motor | Modelo default (`models.md`) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos); GPT-5.6 Luna (Free/Go); GPT-6 / GPT-6.1 Sol como default por confirmar | Não (16.ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | Gemini 3.5 Flash (3.6/3.7 Flash por confirmar) | Não |
| Claude | Sonnet 5 (Free/Pro); Sonnet 5.5, Opus 5.5 e Haiku 5.5 lançados, não confirmados como default | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai na síntese | Nota |
|---|---|---|---|
| GD1-8 | 8 | **6** (GD3-8) | GD3-7 via Clutch; GD5, GD8 também Sortlist; GD1, GD2 ausente |
| GP1-9 | 9 | **0** | conteúdo `.com.br` e em inglês |
| V1-5 | 5 | 2 (V2 Sortlist, V5 Clutch) + V1 só ligação | V3, V4 "não encontrei" |
| Rotativos (10) | 10 | 1 (LR3, 2.º de 2) | GE1, GE5, DC3, DC5, FS1, FS4, FS7, PC2, PC4: 0 |
| **Total** | **32** | **9 (28%)** | + LR1, LR2: 0/2; entidade 0; imprensa 0 |

Modelos por motor não registados por prompt. Preços observados: ver finding 5 (terceiros, não verificados).

---

## 8. Conteúdo e autoridade temática

Novo desde 26 out: Radar mensal (a página mostra o mês, média das semanas), PDF do relatório no site com registo de quem abre, `/relatorio` para prospects, ajustes de layout, quatro peças de imprensa. Cadência: 8 deploys; produto e desenho, nenhuma peça editorial PT-PT para os gaps do prompt-test. Lacunas persistentes: GP2-9 (sem fonte `.pt` com dados próprios), preço de auditoria de GEO (PC2, PC4: só terceiros), V3/V4/DC5, fintech e Porto.

## 9. Entidade e marca

E1 "destaque.ai Periscopy Lisboa": sem resultado (Web Summit, Periscope/Capterra). Wikidata: API `429`, não re-confirmado. `sameAs` com 3 entradas, sem Wikidata, Marketeer ou Lusa. As descrições devolvidas pelas respostas ("consultoria de GEO sediada em Lisboa, focada em B2B SaaS, fundada em 2025") coincidem com os perfis Clutch e Sortlist, não com a formulação "software" do site: o item de convergência de entidade (24 ago) continua aberto. Crunchbase, Google Business Profile, Bing Places, pai.pt: não verificados.

## 10. Autoridade e PR

`/imprensa` lista as peças da semana passada mais quatro acrescentadas no deploy #220: Observador, Cidade FM, M80 e Smooth FM (declaração do site; não abertas na origem). Observador é a primeira peça de um dos quatro títulos Tier-1 de economia/tecnologia (Observador, ECO, Expresso, Negócios) na lista; ECO, Expresso e Negócios continuam sem peça. A pesquisa E2 não devolve nenhuma delas (0/1), pelo que a indexação por este proxy continua nula, com 10 dias de idade as mais antigas.

## 11. Social e comunidade

Não re-amostrado. Estado de 5 out: LinkedIn 96 vs. 250 seguidores (leituras contraditórias); HN, X, Reddit: nada.

## 12. E-E-A-T

Sem alteração: `/imprensa` com factos da firma, CC BY 4.0, forma de atribuição e limitações. Continua sem peça "como avaliar uma agência GEO" com autor nomeado (GE1, GE5 devolvem só conselho genérico).

## 13. Medição

`destaque-ai`: zero erros de runtime (7 dias). `destaque-ai-tracker`: 27 grupos de erro (26 out: 50).
- **DataForSEO / SerpApi (P1, 2.ª semana):** `Internal SE Server Error` 172; `google_aio` 139 e `google_ai_mode` 30 sem fallback; `copilot/serpapi` 10; última 2 nov 07:07 UTC.
- **Gemini** `gemini-3.5-flash` `402`: 25 (knowledge) + 25 (augmented), última 29 out 13:43 UTC (desde 23 jun).
- **DeepSeek** `402 Insufficient Balance`: 17 grupos, 29 out 13:43 UTC.
- **Anthropic:** sem `credit balance is too low` na janela; 7 timeouts de 180 s em `claude-sonnet-5` (augmented). Perplexity `429`: 7.
- Mistral `429`: 71 (2 nov). Timeout 300 s em `/api/inngest`: 2. Supabase Auth `over_request_rate_limit` (429) em `/middleware`: 6, 2 nov 00:32 UTC (novo; isolado). Stripe webhook: ausente nesta janela.
- GSC, GA4, BWT AI Performance: sem acesso.

## 14. Posicionamento e concorrência

News-feed 27 out–2 nov: nenhum modelo novo nem mudança de preço de tabela Tier 1; acordo Anthropic–GSA (40% de desconto, sector público, sem efeito em PT); Agent Skills doado à Agentic AI Foundation (22 out); Anthropic pediu S-1 à SEC (26 out); sinal partilhado de preferência de treino no `robots.txt` (30 out, intenção, início de 2027); Ads Manager do ChatGPT em Portugal por verificar de primeira mão (fontes secundárias divergem; a "creative enhancements" por defeito vale desde 30 out). Nenhum gatilho de watch disparado; sem urgência nova para destaque.ai.

Concorrência: ver finding 5. Bluesoft, ausente do peer set nas semanas anteriores, é agora o nome mais frequente em GD; vale classificar (item novo no backlog).

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço |
|---|---|---|
| Renovar SerpApi e DataForSEO (ou desligar `google_aio`, `google_ai_mode`, `copilot` até renovar); repor Gemini e DeepSeek; confirmar saldo Anthropic e alertas de saldo nos quatro | Medição | 1 h |
| Registar `/radar` no sitemap e no `llms.txt`; decidir `/en/radar` | Técnico | 1 h |
| Verificar nos sites dos meios as peças de `/imprensa` (Lusa, Público, Observador e rádios) e registar data, autor e citação | Autoridade | 2 h |
| Pedir avaliações no Clutch e no Sortlist: são hoje a única fonte das menções | Entidade | 1 h |
| Classificar Bluesoft, revaliQ e AppLabx no peer set | Estratégia | 1 h |

**H2 (semana 3-6)**
- Pitch ao ECO, Expresso e Negócios com o Radar mensal; Observador já listado.
- Publicar PT-PT com dados próprios e autor nomeado: GP2, GP7, GP8, GP9, preço de auditoria de GEO (PC2/PC4) e "como avaliar uma agência de GEO" (GE1/GE5).
- Fazer a descrição do site e dos directórios convergir ("software" vs "consultoria"); desambiguar "GEO"/"AEO" na primeira linha de `/outsourcing`.
- Verificação manual de Knowledge Panel, Bing Places, Google Business Profile.

**H3 (semana 7-12)**
- Item Wikidata, depois de verificadas as peças de imprensa.
- Confirmar se a subida a 9/32 se mantém (repetir os 22 prompts fixos; idealmente com sessão real nos cinco motores).
- Conteúdo para fintech, M&A e Porto (V4, V5, LR3, LR4).

**H4 (90+ dias)**
- Activar Vercel Web Analytics; ligar GSC/GA4/BWT.
- Presença mínima em GitHub e Reddit/HN se o custo editorial se justificar.
- CSP de Report-Only a enforced.

## 16. Nota de encerramento

O score sobe para 73,5/100 (+0,8), sobretudo por imprensa declarada e por uma melhoria na medição que ainda não é prova de recarga. O dado mais relevante é a visibilidade: 9 em 32 prompts (era 3), com destaque.ai em primeiro em cinco deles. Convém lê-lo com cautela: o proxy não é um motor de produto, a subida não tem causa identificada no site e assenta em duas páginas de directório (Clutch, Sortlist). Os prompts de problema (GP1-9) e a pergunta genérica GD1 continuam sem destaque.ai. A medição própria segue incompleta em DataForSEO, SerpApi, Gemini, DeepSeek e Mistral.
