# destaque.ai self-audit baseline

**Data da auditoria:** 26 outubro 2026, manhã (UTC). **Execução:** décima quarta corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (19 out): sétima execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** última entrada de refresh a 19 out 2026 (tentativa, sem alteração de linhas): exactamente 7 dias, não acima do limiar de 7. Refresh não repetido. O news-feed de 20 a 26 out regista "sem modelos novos nem mudanças de preço" em Tier 1 (topo de anthropic.com/news a 22 out, sem modelos). Itens secundários por confirmar de 19 out (GPT-6 como default do ChatGPT; Gemini 3.6 Flash no AI Mode; Sonar API) continuam por confirmar.
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/` (`Accept-Encoding: br`), headers, HTML, JSON-LD, `hreflang`, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, rotas-chave, `/imprensa`; `get_runtime_errors` (7 dias) nos projectos `destaque-ai` e `destaque-ai-tracker`; `list_deployments` (produção) na Vercel.
- **Teste multi-motor: 32 prompts + 2 pesquisas (entidade, imprensa)** via quatro sub-agentes de `WebSearch` (8 GD, 9 GP, 5 V, 10 rotativos: GE2, GE4, DC2, DC6, LR4, FS2, FS3, FS5, PC1, PC3; diferem dos da semana passada). **É um proxy:** `WebSearch` é só dos EUA e devolve síntese + ligações; não são ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produtos (sem sessão de browser nem API nesta execução, 15ª semana). Modelos activos por motor per `models.md`; não registados por prompt (o proxy não os expõe). A hora exacta por pesquisa não é devolvida; todas correram na mesma ronda de 26 out.
- **Não verificável:** PageSpeed Insights (LCP/INP/CLS): `429` de quota diária da Google, de novo. Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4, BWT: sem acesso. Wikidata: `wbsearchentities` para "destaque.ai" devolve lista vazia (sem item). As peças de imprensa listadas em `/imprensa` são **declaração do próprio site**; não foram abertas nos sites dos jornais nesta execução (ver § 10). O relógio do container apresenta 25 out no header `date`; usa-se 26 out, a data da rotina.

---

## 1. Sumário executivo

**Score global: 72,8/100 (73 arredondado; +0,5 vs. 19 out).** A melhoria vem de uma categoria: Autoridade & PR, onde a sala de imprensa do site passa a listar nove peças, quatro delas distribuição da Lusa (Público, Diário de Notícias da Madeira, SAPO, Rádio Comercial) entre 22 e 23 out, e uma do O Antagonista (24 out). A medição piorou: seis de onze motores do Tracker falharam parcial ou totalmente no lote de 26 out (07:00–07:48 UTC).

Visibilidade em respostas de IA inalterada: destaque.ai aparece em **3 de 32 prompts (9%)**, em GD5, GD8 e V2, sempre pelo perfil Sortlist e nunca pelo site próprio. Nos 22 prompts fixos: 3/22, como em 19, 12 e 5 out. 0/9 em GP1-9, 0/10 rotativos, 0/1 pesquisa de entidade. A pesquisa pelas peças da Lusa não devolveu nenhuma que cite destaque.ai: as peças de 22-24 out ainda não são visíveis a este proxy (cinco dias de idade; pode ser atraso de indexação, não é conclusão).

No terreno: TTFB mediano de 241 ms (257 ms a 19 out), HTML de 153.412 B (era 124.812 B, +23%), 25.235 B em Brotli (era 22.613 B), sitemap de 135 URLs (era 133). Em produção: 19 deploys desde 19 out (#203–#219), todos `READY`, nenhum `ERROR`. Entraram o tracker demo na home (#203), o Mapa das empresas na home, o Radar com PDF e metodologia (#204–#209), a Engenharia de perguntas em PT e EN (#211–#214), as peças de imprensa (#215–#218) e ajustes mobile (#219).

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 19 out | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 89 | 0 | `content-encoding: br`; CSP continua só Report-Only (16ª+ semana); `/radar` ainda fora do sitemap |
| 2 | Performance / CWV | 65 | −1 | TTFB mediana 241 ms; HTML +23% (153.412 B); LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | 0 | 1×H1, 13×H2, 13×H3; `hreflang` pt-PT/en/x-default; `/en/radar` 404 |
| 4 | Schema | 92 | 0 | Descrições com 5 motores persistem em `Service`/`Organization` (6ª semana) |
| 5 | Imagens | 76 | 0 | 14 `<img>`, 3 com `alt` descritivo |
| 6 | GEO técnica | 93 | 0 | `llms.txt` 38.023 B (igual a 19 out); sem `/radar` nem as peças novas |
| 7 | Conteúdo & topical authority | 97 | 0 | Engenharia de perguntas PT/EN, Radar, Imprensa; 135 URLs |
| 8 | Entidade | 78 | 0 | Wikidata sem item; Sortlist continua a única pegada em respostas de IA |
| 9 | Autoridade & PR | 46 | +12 | 9 peças listadas em `/imprensa`, 5 em 22-24 out; não verificado fora do site |
| 10 | Social & community | 37 | 0 | não re-amostrado |
| 11 | E-E-A-T | 71 | +1 | `/imprensa` com factos da firma, licença CC BY 4.0 e forma de citação |
| 12 | Medição | 34 | −6 | Anthropic, Gemini, DeepSeek sem saldo; DataForSEO e SerpApi sem pesquisas |

Média simples: 72,75.

### Top findings

1. **Medição degradada em quatro fornecedores ao mesmo tempo (P0).** Lote de 26 out: Anthropic `credit balance is too low` (07:03–07:14 UTC, dezenas de grupos), Gemini `RESOURCE_EXHAUSTED` (178 ocorrências na janela, desde 23 jun), DeepSeek `402 Insufficient Balance` e `429` de concorrência por saldo, e SerpApi "run out of searches" com DataForSEO em erro (`google_aio` 92, `google_ai_mode` 48, `copilot/serpapi` 10). Em prática, Claude, Gemini, DeepSeek, AI Overviews, AI Mode e Copilot ficam sem leitura fiável; Mistral `429` (64) agrava. Notificação enviada.
2. **Primeira cobertura de imprensa PT de agência.** Segundo `/imprensa`: Lusa em português (22 out) republicada por Rádio Comercial, SAPO e Diário de Notícias da Madeira; Lusa em inglês (22 out); Público Brasil (22 out, ouve Eduardo Mendonça); O Antagonista (24 out); e três da Marketeer (2, 6 e 24 set). Não substitui Observador, ECO, Expresso ou Negócios, que continuam sem peça conhecida. A lista é do próprio site e não foi verificada na origem.
3. **Visibilidade em respostas de IA: 3/32 (9%), todos via Sortlist.** GD5 (1.º, único recomendado; "o perfil ainda não tem avaliações"), GD8 (2.º de 5, após AISO Hub), V2 (único nome de agência, secção de contexto português). Periscopy: 0 menções. O site próprio nunca é a fonte.
4. **Sem menção negativa nem alucinada.** Confusões apenas de acrónimo e nome: GEO lido como geografia/geoespacial (GD6, V4), "GEA" (GD1), "Periscopy" lido como Periscope (entidade). **Protocolo de crise (SKILL.md §14) não accionado.**
5. **Concorrência PT:** DevCommX (GD3, GD7, GD8, V1, V2), AISO Hub (GD8), Team Lewis (GD4), Claneo e BE VISIBLE (V5), Codedesign (GD3, GD8, LR4); directórios (agencies.semrush.com, clutch.co) dominam LR4 e V5. Conteúdo brasileiro domina GP1-9; nenhuma fonte `.pt` com dados próprios nos nove.
6. **Lacunas de formato.** "Não encontrei" em GD1, GD3, GD4, GD6, GD7, V1, V3, V4, V5, LR4 e PC3. Sem fonte PT-PT com dados próprios para GP2-9, FS2, FS3, FS5.
7. **`/radar` fora do sitemap e do `llms.txt`; `/en/radar` 404.** Sem alteração desde 19 out, apesar de o Radar ter recebido sete deploys. As peças de imprensa e a Engenharia de perguntas estão no sitemap (`imprensa` 1 entrada; engenharia de perguntas 2); o `llms.txt` contém o termo "imprensa" (3 ocorrências) mas não `/radar`.

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (13ª+ semana). Auth `refresh_token_not_found`: 8 ocorrências (20 a 5 out; 614 a 28 set), última a 23 out. 19 user-agents no `robots.txt`, todos `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes`. `Organization.description` já refere "onze motores e superfícies" (ver § 6 para a ressalva).

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa; fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Produto Periscopy (onze motores e superfícies), servidor MCP público em `tracker.destaque.ai/api/mcp`. Radar semanal em `/radar`, Estúdio, Engenharia de perguntas (`/engenharia-de-perguntas`, `/en/prompt-engineering`), sala de imprensa em `/imprensa` com sete estudos publicados sob CC BY 4.0 (declarado).

## 3. Plataforma

Vercel; projectos relevantes: `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Site principal: 30 deploys de produção listados (14 out a 25 out), 28 `READY`, 2 `ERROR` (#196 e #201, ambos de semanas anteriores e recuperados); desde 19 out, 19 deploys, todos `READY`. O actual é o #219 (25 out, "Mobile: rede Perguntas entram, tabelas, texto longo e barra do futebol"). Web Analytics da Vercel não re-testado.

## 4. Performance

TTFB (5 corridas `curl`, `https://www.destaque.ai/`, `Accept-Encoding: br`): 757, 658, 241, 212, 213 ms; **mediana 241 ms** (19 out: 257 ms). As duas primeiras corridas incluem estabelecimento de ligação e túnel do proxy do ambiente; `x-vercel-cache: HIT`, `age: 6` s. HTML: 153.412 B descodificado; 25.235 B em Brotli (−84%); `content-encoding: br`. `x-nextjs-prerender: 1`: HTML server-renderizado. LCP/INP/CLS: **N/D** (PSI `429`, quota diária). O crescimento do HTML (+28.600 B em sete dias) vem do novo conteúdo da home; sem medição de CWV não se sabe se afecta o LCP.

## 5. SEO on-page

Título "destaque.ai: software de visibilidade em IA". Meta description: "O ChatGPT é o novo boca a boca. Medimos o que os motores de IA respondem sobre a sua marca e entregamos o trabalho feito para ser a resposta." 1×H1, 13×H2, 13×H3. `hreflang` pt-PT, en, x-default. 14 imagens na homepage, 3 com `alt` não vazio. 200 em `/en`, `/casos`, `/perguntas`, `/imprensa`, `/outsourcing`, `/mapa-do-site`, `/radar`, `/tracker`, `/sobre`, `/en/about`, `/engenharia-de-perguntas`, `/en/prompt-engineering`, `/favicon.ico`; 404 em `/en/radar` e `/estudio`.

## 6. SEO técnico

- `sitemap.xml`: **135 `<loc>`** (65 com `/en`); `lastmod` mais recente 2026-10-14 (as páginas novas de 20-25 out não alteraram o `lastmod` máximo). Sem `/radar`.
- `robots.txt`: 19 linhas `User-Agent` (18 de IA + `*`), todas `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes`. Matriz inalterada: GPTBot, OAI-SearchBot, ChatGPT-User, anthropic-ai, ClaudeBot, Claude-Web, Claude-User, Claude-SearchBot, Google-Extended, PerplexityBot, Perplexity-User, CCBot, Applebot-Extended, Bytespider, DuckAssistBot, MistralAI-User, cohere-ai, Meta-ExternalAgent. Nota do news-feed de 22 out: o robots.txt controla acesso, não uso de conteúdo já recolhido (Google, secundária); `Content-Signal` é a declaração de preferência, não garantia.
- JSON-LD homepage (2 blocos): `Organization` (3 ocorrências; `sameAs`: LinkedIn, Crunchbase, Clutch; sem Wikidata), `Person` (`sameAs`: LinkedIn, ORCID), `WebSite`, `WebPage`, `Service`, `FAQPage` (5 perguntas), `SpeakableSpecification`, `ProgramMembership`, `OfferCatalog` (5). Uma `Organization.description` já diz "Periscopy, onze motores e superfícies"; outras descrições (`Service`, meta de oferta) continuam a listar "ChatGPT, Claude, Google AI Mode, Gemini e Perplexity" como lista de cinco. Não é falso; o item de 28 set fica aberto, com âmbito mais estreito.
- Headers: HSTS (max-age 63072000), `x-frame-options: DENY`, `x-content-type-options: nosniff`, `referrer-policy`, `permissions-policy`; **CSP só `report-only`**. Header `Link` aponta `llms.txt` e `agent-skills/index.json`.

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` (38.023 B, igual a 19 out) e `llms-full.txt` (62.491 B, igual): 200. `/.well-known/agent-skills/index.json` e `/.well-known/mcp/server-card.json`: 200. `llms.txt` não refere `/radar`.

### Refresh de models.md

Não repetido (7 dias exactos desde 19 out). Ver nota de metodologia.

### Teste multi-motor (proxy `WebSearch`, 26 out 2026)

| Motor | Modelo default (`models.md`) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos); GPT-5.6 Luna (Free/Go); GPT-6.1 Sol não default | Não (15ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | Gemini 3.5 Flash (Gemini 4 Argon opt-in Pro/Ultra, por confirmar) | Não |
| Claude | Sonnet 5 (Free/Pro); Sonnet 5.5, Opus 5.5 e Haiku 5.5 lançados, não confirmados como default | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai | Nota |
|---|---|---|---|
| GD1-8 | 8 | 2 em síntese (GD5, GD8), ambos Sortlist | GD6 "GEO" lido como geografia; GD1 ruído "GEA" |
| GP1-9 | 9 | **0** | conversion.com.br, ranktracker.com, neilpatel.com/br dominam |
| V1-5 | 5 | 1 em síntese (V2, Sortlist) | V4 fora de tema ("GEOINT"); V5 critérios de M&A acrescentados pelo modelo |
| Rotativos (10) | 10 | 0 | PC3 "não encontrei"; PC1 cora.com.br (auditoria fiscal) |
| **Total** | **32** | **3 (9%), todos em síntese** | + entidade 0, + imprensa 0 |

Concorrentes por frequência: DevCommX, Codedesign, Claneo, BE VISIBLE, AISO Hub, Team Lewis. Preços observados (terceiros, não verificados, não usar como referência de mercado): auditoria GEO USD 500–1.000 (consultor individual, alejandrorioja.com); SEO de menos de USD 500 a mais de USD 20.000 (eesel.ai); consultoria de IA geral USD 150–500/h; ferramentas: Profound USD 99–399/mês, Peec 95–495, Otterly desde 29 (fontes de terceiros). A síntese do PC1 diz que não há tabela pública fiável.

---

## 8. Conteúdo e autoridade temática

Novo desde 19 out: Engenharia de perguntas (`/engenharia-de-perguntas` e `/en/prompt-engineering`, com o mapa de seis sectores), Radar com "partilha de voz", PDF do relatório e pedido por sector, Mapa das empresas na home, sala de imprensa com nove peças. Sitemap +2 URLs. Cadência: 19 deploys em sete dias, quase todos produto e desenho. Lacunas face ao prompt-test: nada em PT-PT com dados próprios e autor nomeado para GP2-9, FS2, FS3, FS5; nada para fintech, M&A ou Porto (V4, V5, LR4); nenhuma peça sobre "o que esperar de uma auditoria de GEO" (GE2) nem "que perguntas fazer a um consultor" (GE4), onde só aparecem blogs de consultores; preço de GEO (PC1, PC3).

## 9. Entidade e marca

Pesquisa "destaque.ai Periscopy Lisboa": sem resultado (Web Summit, Periscope/Capterra). Wikidata `wbsearchentities`: lista vazia. `sameAs` com 3 entradas, sem Wikidata, Marketeer ou Lusa. Sortlist `sortlist.co.uk/agency/destaque-ai` é a única pegada em respostas de IA; a descrição citada (dois estudos, 251 empresas B2B em 18 sectores, 45 de software) mantém-se. Crunchbase, Clutch, Google Business Profile, Bing Places, pai.pt: não verificados.

## 10. Autoridade e PR

`/imprensa` lista nove peças, "sem seleção nem recortes reescritos": O Antagonista 24 out; Diário de Notícias da Madeira, SAPO e Lusa (inglês) 22-23 out; Público (22 out, ouve Eduardo Mendonça); Rádio Comercial 22 out; Marketeer 2, 6 e 24 set. Cinco concentram-se no mesmo estudo (eleição presidencial brasileira), quatro delas derivadas de uma só peça da Lusa; é uma história, não cinco independentes. A pesquisa "destaque.ai estudo eleição Brasil IA Lusa" não devolveu nenhuma delas (0/1). Observador, ECO, Expresso, Negócios: nada conhecido. As peças não foram abertas nos sites dos meios; as datas e autoria vêm do site.

## 11. Social e comunidade

Não re-amostrado. Estado de 5 out: LinkedIn 96 vs. 250 seguidores (leituras contraditórias, verificação manual pendente); HN, X, Reddit: nada.

## 12. E-E-A-T

`/imprensa` publica factos da firma (Tuasunt, Lda., morada, contacto de imprensa), licença CC BY 4.0 e forma de atribuição, e declara a base e as limitações dos estudos (por exemplo, o barómetro dos 41% corrido num só motor e marcado como direccional). É o bloco mais explícito de E-E-A-T do site. Continua sem peça "como avaliar uma agência GEO" com autor nomeado.

## 13. Medição

`destaque-ai`: zero erros de runtime (7 dias). `destaque-ai-tracker`: 50 grupos de erro.
- **P0, 4ª semana com registo:** Anthropic `credit balance is too low`, lote de 26 out, 07:03–07:14 UTC, `/api/audit/run-batch`, `claude-sonnet-5` em modo knowledge e augmented.
- **Gemini** `gemini-3.5-flash`: `402 / RESOURCE_EXHAUSTED: prepayment credits are depleted`, 178 (knowledge) + 20 (augmented) ocorrências, de 23 jun a 26 out 07:14 UTC; 8 utilizadores.
- **DeepSeek** `deepseek-v4-flash`: `402 Insufficient Balance` e `429` de concorrência "com base no saldo restante", todos a 26 out (novo nesta janela).
- **DataForSEO / SerpApi:** `google_aio` 92 e `google_ai_mode` 48 (hoje), "Internal SE Server Error" com fallback SerpApi 146, e SerpApi "Your account has run out of searches" (inclui `copilot/serpapi` 10). Os dois fornecedores falham ao mesmo tempo, sem fallback.
- Mistral `mistral-large-latest` 429: 64, activo a 26 out.
- Timeout 300 s em `/api/inngest` e `/api/brain/jobs`: 28 (20 utilizadores).
- Stripe `webhook`: assinatura recusada, 1 ocorrência (23 out); isolada, rever se repetir.
- Auth `refresh_token_not_found`: 8 (2 utilizadores, 20-23 out).
- Ausentes na janela: Perplexity `402`/`429`, Stripe `tax_code` (confirmar na origem).
- GSC, GA4, BWT AI Performance: sem acesso. Nota do news-feed de 23 out: ChatGPT = 0,62% das sessões do Google orgânico em 100 sites (Marie Haynes, secundária); somar referral e directo ao ler GA4.

## 14. Posicionamento e concorrência

News-feed 20–26 out: nenhum modelo novo nem mudança de preço Tier 1; ChatGPT Ads com "creative enhancements" activos por defeito a 30 out (OpenAI a anunciantes; secundária); Google testa anúncios no AI Mode com Personal Intelligence e botão "Source preferences" nas citações; cartões de citação do AI Overviews com resumos gerados por IA (teste, 23 out); etiqueta "AI Overviews" em falta em alguns resultados desktop; volatilidade de ranking a 20-21 e 24 out sem update confirmado; Google actualizou o doc "Control what you share with Google Search". Nenhum gatilho de watch disparado. Urgência de mercado: nenhuma que mude o plano. Para o pitch, o dado de 23 out (volume pequeno, conversão alta) sustenta enquadrar GEO como qualidade de lead e marca, não volume. A urgência real é interna: os fornecedores do Tracker.

Concorrência: DevCommX e Codedesign são os nomes mais constantes em Lisboa; Team Lewis surge como "opção mais clara para PT" em GD4; BE VISIBLE e Claneo em V5; directórios dominam LR4. Concorrentes de ferramenta (Profound, Peec, Otterly, Waikay) escrevem as comparações de DC6.

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço |
|---|---|---|
| Repor crédito Anthropic, Gemini e DeepSeek; recarga automática e alerta de saldo nos três | Medição | 1 h |
| Renovar SerpApi e DataForSEO (ou desligar `google_aio`, `google_ai_mode`, `copilot` até renovar) | Medição | 30 min |
| Registar `/radar` no sitemap e no `llms.txt`; decidir `/en/radar` | Técnico | 1 h |
| Passar a lista do `Service`/oferta de "cinco motores" para "onze motores e superfícies" | Schema | 15 min |
| Verificar nos sites dos meios as nove peças de `/imprensa` e acrescentar a Lusa e o Público ao `sameAs`/`citation` onde fizer sentido | Autoridade | 1 h |

**H2 (semana 3-6)**
- Pitch às redacções PT de economia e tecnologia (Observador, ECO, Expresso, Negócios) com o Mapa das empresas e o Radar: a Lusa abre a porta, mas todas as peças vêm do estudo do Brasil.
- Publicar PT-PT com dados próprios e autor nomeado: GP7 (Schema.org), GP8 (llms.txt), GP9 (queda de tráfego), GP2 (AI Overviews e CTR), GE2/GE4 (o que esperar e o que perguntar a um consultor de GEO), PC1 (preço de auditoria).
- Desambiguar "GEO" e "auditoria de visibilidade em IA" na primeira linha de `/outsourcing` e das páginas de serviço; "Periscopy" com contexto nas descrições.
- Completar o perfil Sortlist (sem avaliações); reclamar Clutch e Semrush Agencies (dominam LR4 e V5).
- Verificação manual de Knowledge Panel, Bing Places, Google Business Profile.

**H3 (semana 7-12)**
- Item Wikidata de raiz: a notabilidade documentada (Lusa, Público, Marketeer, estudos) já pode sustentar um pedido, depois de verificada.
- Pelo menos uma peça Tier-1 PT de economia ou tecnologia.
- Repetir os 22 prompts fixos na mesma composição; idealmente com sessão real nos cinco motores.
- Conteúdo para fintech, M&A e Porto (V4, V5, LR4).

**H4 (90+ dias)**
- Activar Vercel Web Analytics; ligar GSC/GA4/BWT à auditoria.
- Presença mínima em GitHub (org) e Reddit/HN, se o custo editorial se justificar.
- Passar a CSP de Report-Only a enforced.

## 16. Nota de encerramento

O score sobe para 72,8/100 (+0,5), por causa de uma categoria: a imprensa. Convém não ler mais do que isso. As peças são uma história (a eleição no Brasil) com quatro cópias da Lusa; ainda não foram verificadas fora do site; e as respostas de IA não mudaram (3 prompts em 32, sempre pelo Sortlist). A medição, ao contrário, está pior do que em qualquer semana desta série: quatro fornecedores de modelos ou de dados sem saldo ou sem pesquisas, e seis motores com leitura incompleta no lote de 26 out. Limites do proxy: pesquisa só dos EUA, síntese da própria ferramenta, uma pesquisa por pergunta, sem sessão nos cinco motores, sem hora por pesquisa; a leitura é direccional. Não há menções negativas nem alucinadas sobre a marca; as confusões observadas são sobre o acrónimo "GEO" e o nome "Periscopy".
