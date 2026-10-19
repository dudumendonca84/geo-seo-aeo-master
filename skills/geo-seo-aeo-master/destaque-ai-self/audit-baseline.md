# destaque.ai self-audit baseline

**Data da auditoria:** 19 outubro 2026, manhã (UTC). **Execução:** décima terceira corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (12 out): sexta execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** última entrada de refresh a 8 out 2026 (11 dias, acima do limiar de 7). Tentou-se refresh por `WebSearch` a 19 out; as fontes Tier 1 não são acessíveis a partir desta execução e os resultados são secundários e contraditórios (ver § 7). Nenhuma linha de `models.md` alterada; entrada "tentativa, sem confirmação" acrescentada.
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/` (`Accept-Encoding: br`), headers, HTML, JSON-LD, `hreflang`, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, rotas-chave, `/.well-known/*`; `get_runtime_errors` (7 dias) nos projectos `destaque-ai` e `destaque-ai-tracker`; `list_deployments` (produção) na Vercel.
- **Teste multi-motor: 32 prompts + 1 pesquisa de entidade** via quatro sub-agentes de `WebSearch` (8 GD, 9 GP, 5 V, 10 rotativos: GE1, GE3, DC3, DC5, LR3, FS1, FS4, FS7, PC2, PC4). Os rotativos diferem dos da semana passada. **É um proxy:** `WebSearch` é só dos EUA e devolve síntese + ligações; não são ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produtos (sem sessão de browser nem API nesta execução, 14ª semana). Modelos activos por motor per `models.md`; não registados por prompt (o proxy não os expõe). A hora exacta por pesquisa não é devolvida pela ferramenta: todas correram na mesma ronda de 19 out.
- **Não verificável:** PageSpeed Insights (LCP/INP/CLS): `429` de quota diária da Google, de novo. Wikidata: `wbsearchentities` para "destaque.ai" devolve lista vazia (sem item). Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4, BWT: sem acesso. As contagens de erros do Tracker são por grupo, com `first`/`last` que ultrapassam a janela de 7 dias.

---

## 1. Sumário executivo

**Score global: 72,3/100 (72 arredondado; −0,3 vs. 12 out).** Plataforma estável; a medição voltou a piorar. O esgotamento de crédito Anthropic no Tracker, P0 desde 5 out, **repetiu-se pela terceira vez** (19 out, 07:00–07:11 UTC; antes, 16 out 10:58 UTC) e o Claude continua sem medição fiável. A visibilidade em respostas de IA não mudou: destaque.ai aparece em **3 de 32 prompts (9%)**, todos na síntese (GD5, GD8, V2) e sempre via perfil Sortlist, nunca o site próprio. Nos 22 prompts fixos: 3/22, como em 12 out e 5 out. 0/9 em GP1-9, 0/10 rotativos, 0/1 pesquisa de entidade.

No terreno: TTFB mediano de 257 ms (igual a 12 out), HTML de 124.812 B (era 109.688 B, +14%), 22.613 B em Brotli (era 19.941 B), sitemap de 133 URLs (era 132). Em produção: 20 deploys listados desde 9 out, 2 em `ERROR` (#196 e #201), ambos seguidos de rebuild `READY` (o #202, de 18 out, é o actual). Entre 12 e 19 out entraram o Radar destaque.ai × Periscopy em `/radar` (#196–#199), o Estúdio do Periscopy (#200–#201), a correcção técnica da auditoria SEO/GEO de 14 out (#194), `favicon.ico` na raiz (#192) e o guia de escrita da skill (#202).

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 12 out | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 89 | 0 | `content-encoding: br`; CSP continua só Report-Only (15ª+ semana); `/radar` fora do sitemap |
| 2 | Performance / CWV | 66 | −1 | TTFB mediana 257 ms; HTML +14% (124.812 B); LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | 0 | 1×H1, 10×H2, 11×H3; `hreflang` pt-PT/en/x-default; `/en/radar` 404 |
| 4 | Schema | 92 | 0 | `Organization.description` ainda lista 5 motores (5ª semana) |
| 5 | Imagens | 76 | 0 | 14 `<img>`, 3 com `alt` descritivo |
| 6 | GEO técnica | 93 | 0 | `llms.txt` 38.023 B, `llms-full.txt` 62.491 B; sem `/radar` no `llms.txt` |
| 7 | Conteúdo & topical authority | 97 | 0 | Radar e Estúdio lançados; 133 URLs no sitemap |
| 8 | Entidade | 78 | 0 | Wikidata sem item; Sortlist descreve agora "dois estudos, 251 empresas B2B" |
| 9 | Autoridade & PR | 34 | 0 | não re-amostrado; zero Tier-1 PT conhecido |
| 10 | Social & community | 37 | 0 | não re-amostrado |
| 11 | E-E-A-T | 70 | 0 | não re-amostrado |
| 12 | Medição | 40 | −2 | Anthropic 3ª repetição; DataForSEO "run out of searches" activo |

Média simples: 72,25.

### Top findings

1. **Crédito Anthropic esgotado no Tracker pela terceira vez (P0).** Lotes de 16 out (10:58 UTC) e 19 out (07:00–07:11 UTC, ~35 grupos `claude-sonnet-5 (knowledge)`, 400 "credit balance is too low"). Três avisos em três semanas sem efeito visível. Notificação enviada.
2. **DataForSEO sem créditos.** "Your account has run out of searches": `google_aio` 29, `google_ai_mode` 19, `copilot/serpapi` 16 ocorrências (activo a 19 out 07:11 UTC), mais 177 falhas "Internal SE Server Error" com fallback para SerpApi. Os motores Google AI Overviews, AI Mode e Copilot ficam parcialmente sem dado nos lotes diários.
3. **Visibilidade: 3/32 (9%), todos via Sortlist.** GD5 (1.º, "não tem avaliações, não confirmo a qualidade"), GD8 (2.º de 4, após AISO Hub; descrição: dois estudos, 251 empresas B2B em 18 sectores, 45 empresas de software B2B), V2 (2.ª, após BE VISIBLE). O site próprio nunca é a fonte.
4. **Sem menção negativa nem alucinada.** Confusão apenas de acrónimo e nome: "GEA" (agências de viagens) em GD1, GEO como geoespacial em GD7 e LR3, "auditoria de IA" lida como compliance em GE3, "Periscopy" lido como "Periscope" na pesquisa de entidade. **Protocolo de crise (SKILL.md §14) não accionado.**
5. **Concorrência PT:** DevCommX (GD3, GD6, V1, V3, DC5), BE VISIBLE (V2, V5, DC5, "a partir de €2.000", fonte: página da própria), AISO Hub (GD8), Claneo (GD6), PIPECODES (GD4, "única agência portuguesa"). Conteúdo brasileiro domina GP1-9.
6. **Lacunas de formato.** DC5 e LR3 (recomendação em Lisboa/fintech) e PC4 (preço de GEO para SaaS) devolvem "não encontrei". Nenhuma fonte PT-PT com dados próprios para GP2, GP3, GP5, GP7-9, FS4, FS7; o único estudo com dados próprios sobre recomendações de IA a agências é espanhol (Marketing Directo).
7. **`/radar` fora do sitemap e do `llms.txt`.** A página responde 200 e tem canonical, mas nenhuma URL com "radar" consta do sitemap (133 `<loc>`) e `llms.txt` não a refere. `/en/radar` responde 404. Se o Radar for para ser descoberto por crawlers, falta registá-lo.

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (12ª+ semana). Auth `refresh_token_not_found`, `tax_code` do Stripe, Gemini e DeepSeek sem ocorrências no Tracker nesta janela (ausência não é prova: confirmar na origem). 19 user-agents no `robots.txt`, todos `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes`.

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa; fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Produto Periscopy (onze motores e superfícies), servidor MCP público em `tracker.destaque.ai/api/mcp`. Novo desde 12 out: Radar semanal em `/radar` (números lidos do Periscopy), Estúdio (o agente escreve sobre sector ou tema livre).

## 3. Plataforma

Vercel; projectos relevantes: `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Site principal, deploys de produção (20 listados, 9 out a 18 out): 18 `READY`, 2 `ERROR` (#196 a 16 out e #201 a 18 out; o #196 voltou a `READY` com o mesmo commit, o #201 foi substituído pelo #202). Web Analytics da Vercel não re-testado.

## 4. Performance

TTFB (5 corridas `curl`, `https://www.destaque.ai/`, `Accept-Encoding: br`): 575, 497, 257, 245, 243 ms; **mediana 257 ms** (12 out: 257 ms). `x-vercel-cache: HIT`, `age: 84922` s. HTML: 124.812 B descodificado; 22.613 B em Brotli (−82%); `content-encoding: br`. `x-nextjs-prerender: 1`: HTML server-renderizado. LCP/INP/CLS: **N/D** (PSI `429`, quota diária).

## 5. SEO on-page

Título "destaque.ai: software de visibilidade em IA". 1×H1, 10×H2, 11×H3. `hreflang` pt-PT, en, x-default. 14 imagens na homepage, 3 com `alt` não vazio. 200 em `/en`, `/casos`, `/perguntas`, `/imprensa`, `/outsourcing`, `/mapa-do-site`, `/radar`, `/favicon.ico`; 404 em `/en/radar`.

## 6. SEO técnico

- `sitemap.xml`: **133 `<loc>`** (63 com `/en`); `lastmod` mais recente 2026-10-14. Sem `/radar`.
- `robots.txt`: 19 linhas `User-Agent` (18 de IA + `*`), todas `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes`. Matriz inalterada: GPTBot, OAI-SearchBot, ChatGPT-User, anthropic-ai, ClaudeBot, Claude-Web, Claude-User, Claude-SearchBot, Google-Extended, PerplexityBot, Perplexity-User, CCBot, Applebot-Extended, Bytespider, DuckAssistBot, MistralAI-User, cohere-ai, Meta-ExternalAgent.
- JSON-LD homepage: `Organization` (3 ocorrências; `sameAs`: LinkedIn, Crunchbase, Clutch; sem Wikidata), `Person` (`sameAs`: LinkedIn, ORCID), `WebSite`, `WebPage`, `Service`, `FAQPage`, `SpeakableSpecification`, `ProgramMembership`. `Organization.description` nomeia 5 motores (ChatGPT, Claude, Google AI Mode, Gemini, Perplexity) e "onze motores e superfícies" no mesmo texto.
- Headers: HSTS (max-age 63072000), `x-frame-options: DENY`; **CSP só `report-only`**. Header `Link` aponta `llms.txt` e `agent-skills/index.json`.

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` (38.023 B; 34.806 B a 12 out) e `llms-full.txt` (62.491 B; 37.451 B): 200. `/.well-known/agent-skills/index.json` (713 B) e `/.well-known/mcp/server-card.json` (1.846 B): 200. `llms.txt` não refere `/radar`.

### Refresh de models.md (tentativa, 19 out)

Quatro `WebSearch` (OpenAI, Google, Anthropic, Perplexity). Resultado: nenhum anúncio oficial confirmado após os já registados. Itens secundários, não incorporados: andrew.ooo diz que o GPT-6 passou a default do ChatGPT a 7 out (contradiz o registo de `models.md` e a fonte não é oficial); findskill.ai diz Gemini 3.6 Flash default do AI Mode desde julho (fonte única); Perplexity terá retirado a Sonar chat-completions API a 27 set (TrueFoundry, secundária). Verificar nas fontes Tier 1 numa execução com acesso.

### Teste multi-motor (proxy `WebSearch`, 19 out 2026)

| Motor | Modelo default (`models.md`) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos); GPT-5.6 Luna (Free/Go); GPT-6.1 Sol não default | Não (14ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | Gemini 3.5 Flash (Gemini 4 Argon opt-in Pro/Ultra, por confirmar) | Não |
| Claude | Sonnet 5 (Free/Pro); Sonnet 5.5, Opus 5.5 e Haiku 5.5 lançados, não confirmados como default | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai | Nota |
|---|---|---|---|
| GD1-8 | 8 | 2 em síntese (GD5, GD8), ambos Sortlist | GD1 ruído "GEA"; GD7 "GEO" lido como geoespacial |
| GP1-9 | 9 | **0** | conversion.com.br, tecnoblog.net, neilpatel.com/br, ranktracker.com dominam |
| V1-5 | 5 | 1 em síntese (V2, Sortlist) | V3 fora de tema (outsourcing de software); V4 sem resposta |
| Rotativos (10) | 10 | 0 | DC5 e LR3: "não encontrei"; GE3 lido como compliance de IA |
| **Total** | **32** | **3 (9%), todos em síntese** | + pesquisa de entidade: 0 |

Concorrentes por frequência: DevCommX, BE VISIBLE, Claneo, AISO Hub, Codedesign, PIPECODES. Preços observados (terceiros, não verificados, não usar como referência de mercado): BE VISIBLE "a partir de €2.000"; Zaask (marketplace PT) €80–600 por serviço de SEO, média ~€260; estimativa de SEO/GEO terceirizado US$1.500–10.000/mês (fonte secundária).

---

## 8. Conteúdo e autoridade temática

Novo desde 12 out: Radar destaque.ai × Periscopy (`/radar`, edição semanal e página por sector, PT), Estúdio (Periscopy escreve sobre sector ou tema livre), estudo da eleição presidencial brasileira (#193). Sitemap +1 URL. Cadência: 20 deploys em 10 dias, a maior parte produto. Lacunas face ao prompt-test: nada em PT-PT com dados próprios e autor nomeado para GP2, GP3, GP5, GP7-9, FS4, FS7; nada para fintech ou M&A (V4, V5, LR3); nenhuma peça "como avaliar uma agência GEO" (GE1); desambiguação AEO/GEO e "auditoria de visibilidade em IA" vs. auditoria de compliance (GE3, DC3); preço de GEO para SaaS (PC4).

## 9. Entidade e marca

Pesquisa "destaque.ai Periscopy Lisboa": sem resultado; resultados Periscope e ruído. Wikidata `wbsearchentities`: lista vazia. `sameAs` com 3 entradas. Sortlist `sortlist.co.uk/agency/destaque-ai` é a única pegada em respostas de IA; a descrição que a síntese cita (dois estudos, 251 empresas B2B em 18 sectores, 45 de software) mostra que o perfil está actualizado. Crunchbase, Clutch, Google Business Profile, Bing Places, pai.pt: não verificados.

## 10. Autoridade e PR

Marketeer, 6 set 2026, continua a única peça Tier-2 conhecida (não re-lida). Nenhuma imprensa PT sobre destaque.ai encontrada nas pesquisas. ECO, Observador, Público, Expresso, Negócios: nada.

## 11. Social e comunidade

Não re-amostrado. Estado de 5 out: LinkedIn 96 vs. 250 seguidores (leituras contraditórias, verificação manual pendente); HN, X, Reddit: nada.

## 12. E-E-A-T

Não re-amostrado. Recorrente: sem página "como avaliar uma agência GEO" com autor nomeado.

## 13. Medição

`destaque-ai`: zero erros de runtime (7 dias). `destaque-ai-tracker`: 50 grupos de erro.
- **P0, 3ª repetição:** Anthropic `credit balance is too low`, ~35 grupos, 19 out 07:00–07:11 UTC (e 16 out 10:58 UTC), `/api/audit/run-batch`.
- **DataForSEO:** "Your account has run out of searches": `google_aio` 29, `google_ai_mode` 19 (activos a 19 out); "Internal SE Server Error" → SerpApi 177 (10 utilizadores); `google_aio` aborted 49. `copilot/serpapi`: sem texto 17, aborted 17, sem pesquisas 16.
- Mistral `mistral-large-latest` 429: 16, activo a 19 out. O ID efectivo da alias (Large 4?) não é observável desta execução.
- Timeout 300 s em `/api/inngest`: 3.
- Ausentes na janela: Perplexity `402`/`429` (visíveis a 12 out, fora do top-50 agora), auth `refresh_token_not_found`, Gemini `RESOURCE_EXHAUSTED`, DeepSeek `402`, Stripe `tax_code` (confirmar na origem).
- GSC, GA4, BWT AI Performance: sem acesso. Nota do news-feed de 15 out: tráfego ChatGPT pode cair para "direto" no GA4 (GPT-6 sem UTM/referrer, Adobe, secundária); somar os dois canais ao ler GA4.

## 14. Posicionamento e concorrência

News-feed 13–19 out: nenhum modelo novo nem mudança de preço Tier 1; Gemini 4 Argon opt-in no AI Mode para Pro/Ultra (13 out, secundária); Bing Webmaster Tools com Topics Portfolio no AI Performance (sem API); Google AI Mode/AIO com novo desenho de links, sem dados de cliques (15 out); GPT-6 sem UTM/referrer (14 out); volatilidade de ranking sem update confirmado (16 out); Haiku 4.5 saiu de serviço a 15 out. Nenhum gatilho de watch disparado. Urgência de mercado: nenhuma que mude o plano; a única urgência é interna (créditos do Tracker).

Concorrência: DevCommX e BE VISIBLE dominam as recomendações em Lisboa; PIPECODES (Évora, via Semrush Agencies) aparece como "única agência portuguesa" em GD4; o único estudo com dados próprios sobre recomendações de IA a agências é espanhol.

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço |
|---|---|---|
| Repor crédito Anthropic, activar recarga automática e alerta de saldo nos fornecedores do Tracker | Medição | 30 min |
| Renovar créditos DataForSEO (ou desligar o motor até renovar) e verificar quota SerpApi | Medição | 30 min |
| Corrigir `Organization.description` (onze motores) | Schema | 15 min |
| Registar `/radar` no sitemap e no `llms.txt`; decidir se existe `/en/radar` | Técnico | 1 h |
| Conferir ID devolvido por `mistral-large-latest` | Medição | 15 min |

**H2 (semana 3-6)**
- Publicar PT-PT com dados próprios e autor nomeado: GP7 (Schema.org), GP8 (llms.txt), GP9 (queda de tráfego), GP2 (AI Overviews e CTR), GE1/GE4 (como avaliar uma agência de GEO), PC4 (preço de GEO para SaaS).
- Desambiguar "GEO" (Generative Engine Optimization) e "auditoria de visibilidade em IA" na primeira linha de `/outsourcing` e das páginas de serviço; "Periscopy" com contexto nas descrições.
- Completar o perfil Sortlist (sem avaliações); reclamar Clutch e Semrush Agencies (PIPECODES aparece via Semrush).
- Verificação manual de Knowledge Panel, Bing Places, Google Business Profile.

**H3 (semana 7-12)**
- Item Wikidata de raiz, se a notabilidade documentada chegar (Marketeer, estudos, Radar).
- Pelo menos uma peça Tier-1 PT; pitch com o Radar ou os estudos.
- Repetir os 22 prompts fixos na mesma composição; idealmente com sessão real nos cinco motores.
- Conteúdo para fintech e M&A (V4, V5, LR3).

**H4 (90+ dias)**
- Activar Vercel Web Analytics; ligar GSC/GA4/BWT à auditoria.
- Presença mínima em GitHub (org) e Reddit/HN, se o custo editorial se justificar.
- Passar a CSP de Report-Only a enforced.

## 16. Nota de encerramento

O score fica em 72,3/100, sem variação material (−0,3). O que mudou é operacional: o crédito Anthropic esgotou-se pela terceira vez em três semanas e o DataForSEO está sem pesquisas, pelo que o Tracker mede de forma incompleta o Claude e os motores Google/Copilot. A visibilidade em respostas de IA permanece onde estava: três prompts em 32, sempre pelo Sortlist. Limites do proxy: pesquisa só dos EUA, síntese da própria ferramenta, uma pesquisa por pergunta, sem sessão nos cinco motores, sem hora por pesquisa; a leitura é direccional. Não há menções negativas nem alucinadas sobre a marca; as confusões observadas são sobre o acrónimo "GEO" e o nome "Periscopy".
