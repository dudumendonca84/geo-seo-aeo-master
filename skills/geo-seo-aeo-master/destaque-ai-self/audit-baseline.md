# destaque.ai self-audit baseline

**Data da auditoria:** 12 outubro 2026, ~08:15–08:50 UTC. **Execução:** décima segunda corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (5 out): quinta execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** última entrada de refresh a 8 out 2026 (4 dias, abaixo do limiar de 7). Sem refresh adicional.
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/` (com `Accept-Encoding: br`), headers, HTML, JSON-LD, `hreflang`, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, rotas-chave, `/.well-known/*`; `get_runtime_errors` (7 dias) nos projectos `destaque-ai` e `destaque-ai-tracker`, `list_deployments` (produção) na Vercel.
- **Teste multi-motor: 32 prompts + 1 pesquisa de entidade** via quatro sub-agentes de `WebSearch` (8 GD, 9 GP, 5 V, 10 rotativos: GE2, GE4, DC2, DC4, DC6, FS2, FS3, FS6, PC1, PC3). Os rotativos diferem dos da semana passada, como previsto. **É um proxy:** `WebSearch` é só dos EUA e devolve síntese + ligações; não são ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produtos (sem sessão de browser nem API nesta execução, 13ª semana). Modelos activos por motor per `models.md`; não registados por prompt, porque o proxy não os expõe. Hora de cada pesquisa: janela 08:20–08:40 UTC de 12 out.
- **Não verificável:** PageSpeed Insights (LCP/INP/CLS): `429` de quota diária da Google, de novo. Wikidata via API não re-testado (a pesquisa de entidade não devolveu nada). Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4, BWT: sem acesso. Contagens de erros do Tracker são por grupo, com `first`/`last` que ultrapassam a janela de 7 dias: não são contagens da semana.

---

## 1. Sumário executivo

**Score global: 72,5/100 (73 arredondado; 0 vs. 5 out).** Plataforma e conteúdo estáveis ou ligeiramente melhores; a medição piorou porque o esgotamento de crédito Anthropic no Tracker, o P0 de 5 out, **repetiu-se hoje** (07:02–07:11 UTC). A visibilidade em respostas de IA não mudou: destaque.ai aparece em **3 de 32 prompts (9%)**, e em todos os três é o perfil Sortlist, nunca o site próprio. Na síntese de texto: 2 de 32 (6%), em GD5 e GD8. É a mesma leitura da semana passada (3/34), com amostras comparáveis apenas nos 22 prompts fixos (GD, GP, V): 3/22 agora, 3/22 antes.

No terreno: TTFB mediano de 257 ms (era 276), HTML de 109.688 B (19.941 B em Brotli, `content-encoding: br` confirmado por header pela primeira vez), sitemap de 132 URLs (era 128). Em produção, 14 deploys desde 29 set; os de 8–9 out acrescentam o estudo do futebol português (372 respostas, 11 assistentes), a página "Sites AI Native" e retiram do ar, a pedido do fundador, o artigo "O orçamento segue o clique" (#191, 404 em PT e EN).

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 5 out | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 89 | +1 | `content-encoding: br` confirmado; CSP continua só Report-Only (14ª+ semana) |
| 2 | Performance / CWV | 67 | +1 | TTFB mediana 257 ms; HTML 109.688 B; LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | 0 | 1×H1, 9×H2, 11×H3; `hreflang` pt-PT/en/x-default recíproco em `/` e `/en` |
| 4 | Schema | 92 | −1 | `Organization.description` ainda lista 5 motores (4ª semana) |
| 5 | Imagens | 76 | 0 | 14 `<img>`, 3 com `alt` descritivo, 11 decorativas `alt=""` |
| 6 | GEO técnica | 93 | 0 | `llms.txt` 34.806 B, `llms-full.txt` 37.451 B, agent-skills e MCP card 200; secção "Industry Context (Maio 2026)" por actualizar |
| 7 | Conteúdo & topical authority | 97 | 0 | estudo do futebol, "Sites AI Native"; um artigo retirado a pedido; sitemap 132 URLs |
| 8 | Entidade | 78 | 0 | pesquisa de entidade: nada sobre destaque.ai; "Periscopy" lido como "Periscope" |
| 9 | Autoridade & PR | 34 | 0 | sem peça nova encontrada; zero Tier-1 PT |
| 10 | Social & community | 37 | 0 | não re-amostrado |
| 11 | E-E-A-T | 70 | 0 | não re-amostrado |
| 12 | Medição | 42 | −2 | crédito Anthropic esgotado de novo (12 out); Perplexity 429 activo; auth sem ocorrências na janela |

Média simples: 72,5.

### Top findings

1. **Crédito Anthropic esgotado no Tracker pela segunda semana (P0).** `claude-sonnet-5` devolve 400 "credit balance is too low" em todo o lote de 07:02–07:11 UTC de hoje, a 5 out igualmente. O motor Claude do Periscopy fica sem medição nos lotes diários. A acção de 5 out (repor e activar recarga) ou não foi feita ou não chegou. Notificação enviada.
2. **Visibilidade: 3/32 (9%), todos via Sortlist.** GD5, GD8 (síntese, `sortlist.co.uk/agency/destaque-ai`) e V2 (link; a síntese diz que a marca "afirma ter investigação própria […] mas não apresentou resultados nesta pesquisa"). 0/9 em GP1-9, 0/10 rotativos, 0/1 pesquisa de entidade.
3. **A entidade não é reconhecida.** "destaque.ai Periscopy Lisboa" devolve: "The search didn't turn up anything about destaque.ai or 'Periscopy Lisboa'". Os resultados são Periscope (X) e Periscope (Capterra). Sem Wikipedia/Wikidata, Knowledge Panel nem imprensa PT datada.
4. **Colisão do acrónimo "GEO" persiste.** GD1 e GD7 lidos como informação geográfica/geoespacial; V3 como "employer of record"; V4 como GEOINT/geotecnia. Alucinação sobre o acrónimo, não sobre a marca.
5. **Concorrência PT repetida:** DevCommX (GD3, GD6, GD8, V1-V3), BE VISIBLE (GD4, V5, "a partir de €2.000", fonte não verificada), AISO Hub (GD8), Claneo (GD6, V5). Fontes dominantes nas perguntas GP: llmpulse.ai, seocrawl.ai, ranktracker.com, conversion.com.br (7 de 9 resultados em GP9).
6. **Oportunidade de formato.** FS2 e FS3 não devolveram a documentação oficial (Anthropic, Bing), mas directórios e blogs; GE4 e GP7-9 não têm fonte PT-PT com dados próprios. São nichos onde um texto com autor nomeado e dados é o formato que falta.

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (11ª+ semana). Auth `refresh_token_not_found`, `tax_code` do Stripe, Gemini e DeepSeek sem ocorrências no Tracker nesta janela (ausência não é prova: confirmar na origem). Nenhuma menção negativa nem alucinada sobre destaque.ai em 32 prompts nem na pesquisa de entidade: **protocolo de crise (SKILL.md §14) não accionado.**

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa; fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Produto Periscopy (onze motores e superfícies), servidor MCP público em `tracker.destaque.ai/api/mcp`.

## 3. Plataforma

Vercel; projectos relevantes: `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Site principal: 14 deploys de produção desde 29 set, todos READY na amostra (último #191, 9 out: artigo "O orçamento segue o clique" fora do ar por `ARTIGOS_FORA_DO_AR`, sai de listas, sitemap, feed e `llms.txt`). Deploys de 8–9 out: estudo do futebol (#184–#190, incluindo versão EN e dataset), "Sites AI Native" (#181), fotografia em estudos e casos (#180), imagem em todos os artigos (#179). Web Analytics da Vercel não re-testado.

## 4. Performance

TTFB (5 corridas `curl`, `https://www.destaque.ai/`, `Accept-Encoding: br`): 591, 538, 237, 257, 187 ms; **mediana 257 ms** (5 out: 276 ms). `x-vercel-cache: HIT`, `age: 255199` s: resposta de cache. HTML: 109.688 B descodificado; 19.941 B em Brotli (−82%); `content-encoding: br` presente. `x-nextjs-prerender: 1`: HTML server-renderizado. LCP/INP/CLS: **N/D** (PSI `429`, quota diária).

## 5. SEO on-page

Título "destaque.ai: software de visibilidade em IA"; meta description presente. 1×H1, 9×H2, 11×H3. `hreflang` em `<link rel="alternate">`: pt-PT, en, x-default, igual em `/` e `/en`. 14 imagens na homepage, 3 com `alt` não vazio. 200 em `/en`, `/casos`, `/perguntas`, `/imprensa`, `/outsourcing`, `/mapa-do-site`.

## 6. SEO técnico

- `sitemap.xml`: **132 `<loc>`** (63 com `/en`, 70 `blog`); `lastmod` mais recente 2026-10-09T09:23Z. Sem `xhtml:link` no sitemap (o `hreflang` vive só no HTML).
- `robots.txt`: 19 linhas `User-Agent` (18 de IA + `*`), todas `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes`. Matriz: GPTBot, OAI-SearchBot, ChatGPT-User, anthropic-ai, ClaudeBot, Claude-Web, Claude-User, Claude-SearchBot, Google-Extended, PerplexityBot, Perplexity-User, CCBot, Applebot-Extended, Bytespider, DuckAssistBot, MistralAI-User, cohere-ai, Meta-ExternalAgent: todos permitidos.
- JSON-LD homepage: `Organization` (`sameAs`: LinkedIn, Crunchbase, Clutch; sem Wikidata), `Person`, `WebSite`, `WebPage`, `Service`, `FAQPage`. `Organization.description` nomeia 5 motores (ChatGPT, Claude, Google AI Mode, Gemini, Perplexity) vs. "onze" no resto do site.
- Headers: HSTS (max-age 63072000), nosniff, `x-frame-options: DENY`, referrer-policy, permissions-policy; **CSP só `report-only`**. Header `Link` aponta `llms.txt` e `agent-skills/index.json`.

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` (34.806 B; 33.210 B a 5 out) e `llms-full.txt` (37.451 B): 200. `/.well-known/agent-skills/index.json` (713 B) e `/.well-known/mcp/server-card.json` (1.846 B): 200. A secção "Industry Context (Maio 2026)" de `llms.txt` continua sem datas posteriores a Maio.

### Teste multi-motor (proxy `WebSearch`, 12 out 2026)

| Motor | Modelo default (`models.md`) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos); GPT-5.6 Luna (Free/Go); GPT-6.1 Sol não default | Não (13ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | Gemini 3.5 Flash | Não |
| Claude | Sonnet 5 (Free/Pro); Sonnet 5.5, Opus 5.5 e Haiku 5.5 lançados, não confirmados como default | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai | Nota |
|---|---|---|---|
| GD1-8 | 8 | 2 em síntese (GD5, GD8), ambos Sortlist | GD1, GD7 lidos como geografia; GD5 com ressalva: "perfil sem avaliações" |
| GP1-9 | 9 | **0** | llmpulse.ai, seocrawl.ai, ranktracker.com, conversion.com.br dominam |
| V1-5 | 5 | 1 só como link (V2, Sortlist) | V3 ambíguo ("employer of record"); V4 lido como GEOINT |
| Rotativos (10) | 10 | 0 | GE4: resultados irrelevantes (Glassdoor, Indeed); FS2/FS3: sem documentação oficial |
| **Total** | **32** | **3 (9%); 2 em síntese (6%)** | + pesquisa de entidade: 0 |

Concorrentes por frequência: DevCommX (7 prompts), BE VISIBLE, Claneo, AISO Hub, Codedesign. Preços observados (terceiros, não verificados): BE VISIBLE "a partir de €2.000"; auditoria de GEO US$500–1.000 (consultor independente) ou ~US$1.200–1.300 (Tenten); consultoria de IA em geral US$150–300/h; um exemplo espanhol de €4.000–7.000 + €300–600/mês (Upliora). Não usar como referência de mercado.

---

## 8. Conteúdo e autoridade temática

Estudo do futebol português: 10 perguntas, 11 assistentes, 372 respostas lidas (PT e EN), com dataset. Página "Sites AI Native" (PT/EN). Fotografia em estudos e casos. Sitemap +4 URLs vs. 5 out. O artigo "O orçamento segue o clique" foi retirado a 9 out a pedido do fundador, sem prazo de regresso; a decisão é editorial e fica fora do score. Lacunas face ao prompt-test: nada em PT-PT com dados próprios e autor nomeado para GP7-9; nada para fintech ou M&A (V4, V5); nenhuma peça "como avaliar uma agência GEO" (GE4); desambiguação "AEO vs GEO" (DC2/DC4).

## 9. Entidade e marca

Pesquisa "destaque.ai Periscopy Lisboa": sem resultado; "Periscopy" confundido com "Periscope". Wikidata: item por criar (não re-testado). `sameAs` com 3 entradas. Sortlist `sortlist.co.uk/agency/destaque-ai` existe e é a única pegada em respostas de IA. Crunchbase, Clutch, Google Business Profile, Bing Places, pai.pt: não verificados.

## 10. Autoridade e PR

Marketeer, 6 set 2026, continua a única peça Tier-2 conhecida (não re-lida). A pesquisa de entidade não encontrou imprensa PT sobre destaque.ai. ECO, Observador, Público, Expresso, Negócios: nada.

## 11. Social e comunidade

Não re-amostrado. Estado de 5 out: LinkedIn 96 vs. 250 seguidores (leituras contraditórias, verificação manual pendente); GitHub repo indexado; HN, X, Reddit: nada.

## 12. E-E-A-T

Não re-amostrado. Recorrente: sem página "como avaliar uma agência GEO" com autor nomeado.

## 13. Medição

`destaque-ai`: zero erros de runtime (7 dias). `destaque-ai-tracker`: 50 grupos de erro.
- **P0 repetido:** Anthropic `credit balance is too low`, ~35 grupos, 07:02–07:11 UTC de 12 out.
- Perplexity `429` em `sonar-pro`: 82 ocorrências desde 7 set, activo hoje; um `402` de crédito insuficiente a 9 out (novo). `claude-sonnet-5` (augmented) timeout de 180 s a 9 out.
- Mistral `429`: 15, activo hoje.
- DataForSEO → SerpApi: 180 (12 utilizadores), activo hoje; `google_aio/dataforseo` aborted 57; Copilot/SerpApi "sem texto" 20, aborted 7.
- Timeout 300 s em `/api/inngest`: 3. Assinatura Inngest ausente/inválida: 2 (5 e 8 out; provavelmente pedidos externos).
- Ausentes na janela: auth `refresh_token_not_found`, Gemini `RESOURCE_EXHAUSTED`, DeepSeek `402`, Stripe `tax_code` (por confirmar na origem).
- GSC, GA4, BWT AI Performance: sem acesso desta sessão. O relatório de desempenho do Search Console teve atraso >64 h a 11 out (SE Roundtable, secundária): qualquer leitura de GSC deve contar com isso.

## 14. Posicionamento e concorrência

News-feed 6–12 out: **Claude Haiku 5.5** (7 Out) e **Mistral Large 4** (preview 6 Out, alias `mistral-large-latest` por confirmar) sem mudança de default em motores de AI search; September 2026 Spam Update concluído a 8 Out (24 Set a 8 Out); Google UGC Fresh Data Program (8 Out); Usage Policy da Anthropic (em vigor a 12 Nov, sem efeito em crawling); Merchant Center com limite de actualizações frequentes. Nenhum gatilho de watch disparado. Urgência de mercado: nenhuma que mude o plano; a única urgência é interna (crédito do Tracker). Acção possível: conferir o ID devolvido por `mistral-large-latest` na próxima passagem.

Concorrência: DevCommX é o nome mais repetido (7 prompts), seguido de BE VISIBLE, Claneo e AISO Hub. Conteúdo brasileiro continua a dominar os resultados PT.

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço |
|---|---|---|
| Repor crédito Anthropic, activar recarga automática e alerta de saldo nos três fornecedores | Medição | 30 min |
| Verificar crédito/limites Perplexity (`402` de 9 out, `429` contínuos) | Medição | 30 min |
| Corrigir `Organization.description` (onze motores) | Schema | 15 min |
| Mudar o Tracker para `deepseek-flash` se ainda não feito; conferir ID de `mistral-large-latest` | Medição | 30 min |
| Verificar manualmente seguidores LinkedIn | Social | 15 min |

**H2 (semana 3-6)**
- Completar o perfil Sortlist (sem avaliações); reclamar Clutch e Semrush Agencies.
- Publicar PT-PT com dados próprios e autor nomeado: GP7 (Schema.org), GP8 (llms.txt), GP9 (queda de tráfego), DC3/DC4 (AEO vs GEO com acrónimo expandido no título).
- Desambiguar "GEO" (Generative Engine Optimization) na primeira linha de `/outsourcing` e das páginas de serviço; usar "Periscopy" com contexto ("software de visibilidade em IA") nas descrições.
- Verificação manual de Knowledge Panel, Bing Places, Google Business Profile.

**H3 (semana 7-12)**
- Item Wikidata de raiz, se a notabilidade documentada chegar (Marketeer, estudo do futebol).
- Pelo menos uma peça Tier-1 PT; pitch com o estudo do futebol (372 respostas) ou o de 616 respostas.
- Repetir os 22 prompts fixos na mesma composição; idealmente com sessão real nos cinco motores.
- Conteúdo para fintech e M&A (V4, V5).

**H4 (90+ dias)**
- Activar Vercel Web Analytics; ligar GSC/GA4/BWT à auditoria.
- Presença mínima em GitHub (org) e Reddit/HN, se o custo editorial se justificar.
- Passar a CSP de Report-Only a enforced.

## 16. Nota de encerramento

O score fica em 72,5/100, sem variação material. O que mudou é operacional: o crédito Anthropic voltou a esgotar-se uma semana depois de ter sido assinalado, e por isso o Tracker continua sem medir o Claude de forma fiável. A visibilidade em respostas de IA permanece onde estava: três prompts em 32, sempre pelo Sortlist. Limites do proxy: pesquisa só dos EUA, síntese da própria ferramenta, uma pesquisa por pergunta, sem sessão nos cinco motores; a leitura é direccional. Não há menções negativas nem alucinadas sobre a marca; as confusões observadas são sobre o acrónimo "GEO" e sobre o nome "Periscopy".
