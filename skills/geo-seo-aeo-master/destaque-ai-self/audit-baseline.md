# destaque.ai self-audit baseline

**Data da auditoria:** 5 outubro 2026, ~08:15–09:00 UTC. **Execução:** décima primeira corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (28 set): quarta execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** última entrada de refresh a 5 out 2026 (hoje, pelo daily-agent). Sem refresh adicional.
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/`, headers, HTML, JSON-LD, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, rotas-chave, `/.well-known/*`; `get_runtime_errors` (7 dias) e `list_deployments` na Vercel.
- **Teste multi-motor: 34 prompts** via cinco sub-agentes de `WebSearch` (8 GD, 9 GP, 5 V, 2 LR, 10 rotativos: GE1, GE3, GE5, DC3, DC5, PC2, PC4, FS1, FS4, FS7). **É um proxy:** `WebSearch` é só dos EUA e devolve síntese + ligações; não são ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produtos (sem sessão de browser nem API nesta execução, 12ª semana). Modelos activos por motor per `models.md`; não registados por prompt, porque o proxy não os expõe.
- **Não verificável:** PageSpeed Insights (LCP/INP/CLS): `429` de quota diária da Google, de novo. Wikidata via API: `429` (rate limit Wikimedia); o sub-agente fez pesquisa própria sem resultados. Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4, BWT: sem acesso. Sortlist: fetch `403`. `Content-Encoding` não apareceu nos headers amostrados (ver Secção 4).

---

## 1. Sumário executivo

**Score global: 73/100 (+1 vs. 28 set).** O site público melhorou e o produto também recuperou de parte dos erros, mas a visibilidade medida em respostas de IA é fraca: destaque.ai aparece em **3 de 34 prompts (9%)**, e nos três é o perfil Sortlist que aparece, não o site próprio. A leitura de 28 set era 29% sobre 31 prompts com outra composição; não é comparação directa (outro proxy de pesquisa, outros rotativos, variância alta), mas aponta no mesmo sentido: o ganho de visibilidade ainda não chegou.

No terreno: homepage redesenhada (11 deploys de produção em 5 dias, #168–#178, um com falha de build, #169, seguido de correcção), TTFB mediano de 276 ms, sitemap de 128 URLs (era 89), paridade de imagens PT/EN restabelecida. No Tracker, Stripe, Gemini e DeepSeek deixaram de aparecer na janela de 7 dias (por confirmar na origem), mas surgiu um esgotamento de crédito Anthropic (>30 erros, 07:01–07:10 UTC de hoje).

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 28 set | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 88 | 0 | sitemap 128 URLs; CSP continua só Report-Only (13ª+ semana) |
| 2 | Performance / CWV | 66 | +4 | TTFB mediana 276 ms (era 414); HTML 109.467 B (era 152.844); LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | +1 | paridade de imagens PT/EN; 1×H1, 9×H2, 11×H3 |
| 4 | Schema | 93 | −1 | `Organization.description` ainda lista 5 motores (3ª semana) |
| 5 | Imagens | 76 | +2 | 14 `<img>` em PT e EN; 3 com `alt` descritivo, 11 decorativas com `alt=""` |
| 6 | GEO técnica | 93 | 0 | `llms.txt` 33.210 B, `llms-full.txt` 37.276 B, markdown `Accept` 200, agent-skills e MCP card 200 |
| 7 | Conteúdo & topical authority | 97 | +1 | 2 artigos EN novos (#174), `/mapa-do-site`, páginas longas reestruturadas |
| 8 | Entidade | 78 | 0 | Wikidata: nada encontrado; Sortlist existe; Knowledge Panel não verificável |
| 9 | Autoridade & PR | 34 | 0 | sem peça nova; Marketeer (6 set, confirmada por fetch) continua o único veículo; zero Tier-1 |
| 10 | Social & community | 37 | 0 | LinkedIn: 96 vs. 250 seguidores (leituras contraditórias); GitHub repo indexado; HN 0 hits; X/Reddit nada |
| 11 | E-E-A-T | 70 | 0 | não re-amostrado |
| 12 | Medição | 44 | +6 | auth 20 ocorrências (era 614); Stripe/Gemini/DeepSeek ausentes; novo: Anthropic sem crédito |

Média simples: 72,6, arredondada para 73.

### Top findings

1. **Visibilidade: 3/34 prompts (9%), todos via Sortlist.** GD5 e GD8 citam o perfil Sortlist em síntese (1.º lugar, descrição exacta); V2 só como ligação. 0/9 nos prompts problem-stated (GP1-9), 0/10 nos rotativos. O site próprio não é fonte em nenhum resultado.
2. **Crédito Anthropic esgotado no Tracker (P0):** `claude-sonnet-5` falha com 400 em todo o lote de 07:01–07:10 UTC de hoje.
3. **Colisão do acrónimo "GEO"/"AEO" persiste.** GD6/GD7: geografia, geotecnia, consultoria geoespacial; LR1: auditoria pública e Group on Earth Observations, com GEO expandido erradamente em "Geographic Entity Optimization"; LR2: só Authorized Economic Operator (alfândega). Hallucination sobre o acrónimo, não sobre a marca.
4. **Conteúdo dos resultados em PT é maioritariamente brasileiro** (Conversion, SEOcrawl, Ranktracker pt-br, Neil Patel BR, tecnoblog). Concorrentes PT presentes: DevCommX (V1-V3, GD3, GD8), AISO Hub (GD8), BE VISIBLE (DC5, "desde €2.000"). Marco Gouveia não apareceu em nenhuma das 34 pesquisas esta semana (apareceu em 5 execuções seguidas antes), mas a sua página `/geo/` foi actualizada a 2 out.
5. **Erro de auth reduzido, não resolvido:** 20 ocorrências, 2 utilizadores, última 1 out.

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (10ª+ semana). Entidade descrita correctamente por motores de pesquisa (Lisboa, Periscopy, 11 motores, SINAL, fundador). Nenhuma menção negativa ou alucinada sobre destaque.ai em 34 pesquisas nem na pesquisa de entidade: **protocolo de crise (SKILL.md §14) não accionado.** Nota: a análise de síntese dos motores ainda cita "dois estudos" (251 e 45 empresas) quando existe um terceiro (84 marcas, 2.205 respostas): lag, não erro.

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa; fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Produto Periscopy (onze motores e superfícies), servidor MCP público em `tracker.destaque.ai/api/mcp`. A pesquisa não encontrou menções à razão social "Tuasunt" (esperado; sem registo público ligado).

## 3. Plataforma

Vercel; projectos relevantes: `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Site principal: 11 deploys de produção entre 2 e 5 out (#168–#178); um em ERROR (#169, `dpl_E87gRW…`) seguido de deploys READY. Mudanças visíveis: redesign a partir do "Site.dc.html" (páginas legais, glossário, outsourcing, imprensa, datasets), `/mapa-do-site` e `/en/site-map` (#175), diagrama "A arquitectura" (#173), artigos EN (#174). Web Analytics da Vercel não re-testado.

## 4. Performance

TTFB (5 corridas `curl`, `https://www.destaque.ai/`, via proxy da sessão): 746, 444, 255, 276, 214 ms; **mediana 276 ms**. `x-vercel-cache: HIT`, `age: 87113` s: resposta de cache, não latência de origem a frio. HTML descodificado: 109.467 B (28 set: 152.844 B; −28%, coerente com a reestruturação da homepage). Pedido com `Accept-Encoding: br` transferiu 19.901 B, mas o header `content-encoding` não figurou na amostra de headers: compressão provável, não confirmada por header. LCP/INP/CLS: **N/D** (PSI `429` quota diária). `x-nextjs-prerender: 1`: HTML server-renderizado.

## 5. SEO on-page

Título "destaque.ai: software de visibilidade em IA"; meta description presente. 1×H1, 9×H2, 11×H3 (28 set: 16×H2, 13×H3): a homepage ficou mais curta. `/en`: 14 imagens, igual a PT (antes 1 vs. 2). `hreflang` não re-extraído nesta execução (28 set: recíproco). 200 confirmado em `/en/about`, `/casos`, `/perguntas`, `/imprensa`, `/en/press`, `/outsourcing`, `/mapa-do-site`.

## 6. SEO técnico

- `sitemap.xml`: **128 `<loc>`** (61 com `/en`, 70 `blog`); `lastmod` mais recente 2026-10-04T08:01Z.
- `robots.txt`: 19 linhas `User-Agent` (18 de IA + `*`), `Content-Signal: search=yes, ai-input=yes, ai-train=yes`.
- JSON-LD homepage: `Organization` (`sameAs`: LinkedIn, Crunchbase, Clutch; sem Wikidata), `Person`, `WebSite`, `WebPage`, `Service`, `FAQPage`. `Organization.description` nomeia 5 motores (ChatGPT, Claude, Google AI Mode, Gemini, Perplexity) vs. "onze" no resto do site.
- Headers: HSTS (max-age 63072000), nosniff, `x-frame-options: DENY`, referrer-policy, permissions-policy; **CSP só `report-only`**. Header `Link` aponta `llms.txt` e `agent-skills/index.json` (`rel=describedby`).

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` (33.210 B) e `llms-full.txt` (37.276 B): 200. Markdown por `Accept: text/markdown`: 200. `/.well-known/agent-skills/index.json` (713 B) e `/.well-known/mcp/server-card.json` (1.846 B): 200. A secção "Industry Context (Maio 2026)" em `llms.txt` está desactualizada em relação a Out 2026 (menciona Gemini 3.5 Flash como default do AI Mode, ainda correcto per `models.md`, mas sem datas posteriores a Maio).

### Teste multi-motor (proxy `WebSearch`, 5 out 2026)

| Motor | Modelo default (`models.md`) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos); GPT-6.1 Sol lançado 29 set, não default | Não (12ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | Gemini 3.5 Flash | Não |
| Claude | Sonnet 5 (Free/Pro); Sonnet 5.5 e Opus 5.5 lançados, não confirmados como default | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai | Nota |
|---|---|---|---|
| GD1-8 | 8 | 2 em síntese (GD5, GD8), ambos por Sortlist | GD6, GD7: colisão total, zero resultados de IA |
| GP1-9 | 9 | **0** | Fontes dominantes: conversion.com.br, seocrawl.ai, ranktracker pt-br, tecnoblog |
| V1-5 | 5 | 1 só como ligação (V2, Sortlist) | V3 lido como outsourcing de desenvolvimento; V4 como consultoria fintech/jurídica |
| LR1-2 | 2 | 0 | LR1: auditoria pública, GEO = "Geographic Entity Optimization"; LR2: só AEO alfandegário |
| Rotativos (10) | 10 | 0 | GE3 lido como governação de IA; DC3 misturado com AEO alfandegário |
| **Total** | **34** | **3 (9%); 2 em síntese (6%)** | |

Preços observados nas respostas (citações de terceiros, não verificadas): Zaask ~€260 médio por trabalho de SEO em Portugal (~€27,7/h); BE VISIBLE "desde €2.000"; retainers de "AI SEO" US$1.500–10.000/mês. Estatísticas citadas nas sínteses (32% de crawl de IA ignora robots.txt; "3,2× mais citações" em fan-out) sem fonte verificável: não usar.

---

## 8. Conteúdo e autoridade temática

Cadência alta: dois artigos de 2 out com versão EN (#174), 128 URLs no sitemap (+39 vs. 89), 61 em `/en`. `llms.txt` continua a listar quatro estudos próprios; a pesquisa de entidade encontrou também `/estudo/gap-google-ia` e `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`. Lacunas face ao prompt-test: nada em PT-PT que responda a GP7-9 (Schema.org, llms.txt, queda de tráfego) com dados próprios e autor nomeado; nada para fintech ou M&A (V4, V5); definições "AEO vs GEO" com desambiguação (DC3, LR2).

## 9. Entidade e marca

Wikidata: pesquisa por "destaque.ai" devolve só itens de natação artística; "Periscopy destaque" sem resultados; item para a empresa continua por criar (QID antigo Q140043087 inexistente desde 28 set). `sameAs` com 3 entradas. Sortlist `sortlist.com/agency/destaque-ai` existe (conteúdo não lido, 403). Crunchbase, Clutch, Google Business Profile, Bing Places, pai.pt: não verificados.

## 10. Autoridade e PR

Marketeer, "EDP é a marca portuguesa mais escolhida pela IA" (6 set 2026, lido por fetch), cita o estudo de 616 respostas, 10 assistentes, 16 perguntas; descreve-o correctamente. Segunda peça ("A IA fala destas 13 marcas portuguesas…") não datada nesta execução (28 set indicava 24 set). Nenhuma peça nova desde então. ECO, Observador, Público, Expresso, Negócios, Dinheiro Vivo, Executive Digest, Meios & Publicidade: nada.

## 11. Social e comunidade

LinkedIn: 96 seguidores (esta leitura) vs. 250 (28 set): uma das duas está errada; verificação manual. Último post há cerca de um mês (Share of Voice vs. Share of Recommendation). GitHub: repositório `dudumendonca84/geo-seo-aeo-master` indexado (PRs #125, #128). HN: 0 resultados. X, Reddit: nada encontrado (não equivale a inexistência).

## 12. E-E-A-T

Não re-amostrado. Nota das pesquisas: respostas aos prompts de avaliação de agências (GE1, GE5) são dominadas por critérios genéricos; destaque.ai não tem ainda página "como avaliar uma agência GEO" com autor nomeado, que seria o formato citável.

## 13. Medição

`destaque-ai`: zero erros de runtime (7 dias). `destaque-ai-tracker`: 50 grupos de erro.
- **NOVO, P0:** Anthropic `credit balance is too low`, >30 grupos, 07:01–07:10 UTC de 5 out.
- Auth `refresh_token_not_found`: 20 ocorrências, 2 utilizadores, `/middleware`, 26 set–1 out.
- Perplexity `429`: 107 ocorrências desde 7 set, activo hoje. Mistral `429`: 53 desde 23 jun, activo hoje.
- DataForSEO → SerpApi fallback: 69 desde 31 jul, activo hoje. `google_aio/dataforseo` aborted: 19; sem créditos: 12 (última 30 set). Copilot/SerpApi: sem créditos 20 (última 30 set), "sem texto" 13, aborted 6.
- Timeout 300 s em `/api/inngest`: 2.
- Ausentes na janela: Gemini `RESOURCE_EXHAUSTED`, DeepSeek `402`, Stripe `tax_code` (por confirmar na origem).
- GSC, GA4, BWT AI Performance: sem acesso desta sessão.

## 14. Posicionamento e concorrência

News-feed 28 set–5 out: sem modelo novo que mude defaults; **September 2026 Spam Update** em rollout até ~8 out (não aplicável a conteúdo próprio sem escala gerada, mas rever GSC depois); guia de conteúdo de IA da Google actualizado a 1 out ("verificar manualmente e rever todo o conteúdo gerado por IA"): coerente com o método editorial; Google testa sitelinks de anúncios em AI Mode; Bing testa "Recommended by"; Search Console ganhou relatório multimodal (detalhe por confirmar); `deepseek-v4-flash` retirado. Urgência: apenas a manutenção do Tracker (alias DeepSeek, prazo 9 out). Sem urgência de mercado que justifique mudança de plano.

Concorrência esta semana: DevCommX (páginas Lisboa/Porto, presente em 5 pesquisas), AISO Hub (listicles próprios), BE VISIBLE (desde €2.000), indexlab.ai (artigo PT "Visibilidade em IA em Portugal"), Awisee (SEO PT). Marco Gouveia: página `/geo/` actualizada 2 out; SEO Conference Portugal 2026.

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço |
|---|---|---|
| Repor crédito Anthropic e activar recarga automática (alertas de saldo para os três fornecedores) | Medição | 30 min |
| Confirmar no Stripe `tax_code` do Pro/mês; confirmar saldos DeepSeek/Gemini na origem | Medição | 30 min |
| Tracker: chamar `deepseek-flash` (prazo 9 out) | Medição | 30 min |
| Investigar `refresh_token_not_found` residual | Medição | 1-2 h |
| Corrigir `Organization.description` (onze motores) | Schema | 15 min |
| Verificar manualmente número de seguidores LinkedIn | Social | 15 min |

**H2 (semana 3-6)**
- Rever e enriquecer o perfil Sortlist; reclamar Clutch e Semrush Agencies (única via actual para citação).
- Publicar conteúdo PT-PT com dados próprios e autor nomeado para GP7 (Schema.org), GP8 (llms.txt), GP9 (diagnóstico de queda de tráfego) e DC3 (AEO vs GEO, com expansão do acrónimo no título).
- Rever copy de `/outsourcing` e serviços para desambiguar "GEO" (Generative Engine Optimization) já na primeira linha.
- Verificação manual de Knowledge Panel, Bing Places, Google Business Profile.

**H3 (semana 7-12)**
- Item Wikidata de raiz (requer notabilidade documentada; avaliar se as peças Marketeer chegam).
- Pelo menos uma peça Tier-1 PT; pitch com o estudo de 616 respostas.
- Repetir os 34 prompts na mesma composição para ter série comparável; idealmente com sessão real nos cinco motores.
- Conteúdo para fintech e M&A (V4, V5).

**H4 (90+ dias)**
- Activar Vercel Web Analytics; ligar GSC/GA4/BWT à auditoria.
- Presença mínima em GitHub (org) e Reddit/HN, se o custo editorial se justificar.
- Passar a CSP de Report-Only a enforced.

## 16. Nota de encerramento

O score sobe um ponto, para 73/100, por melhorias de plataforma e conteúdo e por menos erros no Tracker. O dado mais relevante é de outro tipo: em 34 perguntas, destaque.ai aparece em três, sempre por um perfil de directório e nunca pelo site. O proxy tem limites (pesquisa só dos EUA, síntese própria da ferramenta, amostra rotativa diferente da de 28 set) e a leitura deve ser direccional. Não há menções negativas nem alucinadas sobre a marca; as alucinações observadas são sobre o acrónimo. A prioridade imediata é operacional (crédito Anthropic); a estratégica é tornar o site próprio, e não só o Sortlist, uma fonte citável.
