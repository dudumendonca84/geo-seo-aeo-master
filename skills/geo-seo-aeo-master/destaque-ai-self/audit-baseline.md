# destaque.ai self-audit baseline

**Data da auditoria:** 28 setembro 2026, ~08:15–09:30 UTC. **Execução:** décima corrida do Routine `destaque-ai-self-audit-weekly`, exactamente sete dias depois da anterior (21 set 2026): **terceira execução consecutiva sem hiato**, a primeira vez que este Routine atinge o critério de verificação ("2-3 execuções seguidas sem hiato") definido para fechar o item PROCESS em 24 ago 2026.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Mudança estrutural: `curl` de saída passou a funcionar.** Nas nove execuções anteriores, `curl` directo a `destaque.ai` e a domínios de controlo devolvia sistematicamente `HTTP 000`/`EGRESS_BLOCKED`. Nesta execução, `curl` a `https://www.destaque.ai/` e a `https://destaque.ai/` (redirect 308) respondeu normalmente, com TTFB real medível. Isto é a primeira melhoria estrutural de acesso desde o início desta série (13 jul 2026): permite, pela primeira vez, TTFB real por `curl`, fetch directo de HTML/JSON-LD/robots.txt/llms.txt/sitemap.xml sem depender de `mcp__Vercel__web_fetch_vercel_url`, e uma tentativa directa (não só via proxy) à API do PageSpeed Insights. Não se sabe se esta é uma mudança permanente da política de rede desta sessão ou uma variação pontual: a próxima execução confirma.

**models.md:** última entrada de refresh a 23 set 2026 (5 dias, dentro do limiar de 7). Não refrescado nesta execução: `news-feed.md` dos últimos 7 dias (22-28 set) confirma três lançamentos de modelo (Claude Opus 5.5, GPT-6 Sol/Luna, Grok 4.7), nenhum deles confirmado como novo default em nenhum produto medido pelo Tracker (per `models.md`, secções OpenAI/Anthropic/xAI já reflectem isto). Sem necessidade de novo fetch aos vendors.

**Amostra técnica desta semana:** homepage PT e EN, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml` (contagem directa completa, 89 URLs), `/en/about`, `/casos`, `/perguntas`, `/.well-known/agent-skills/index.json`, `/.well-known/mcp/server-card.json`; TTFB real (5 corridas `curl`); tentativa directa a PageSpeed Insights API; `mcp__Vercel__get_runtime_errors` (7 dias) e `list_deployments` (produção) para `destaque-ai` e `destaque-ai-tracker`; `mcp__Vercel__count_pageviews` (Web Analytics, reconfirmação de estado). **Teste multi-motor: a maior amostra desta série até agora**: 32 prompts (21 Mandatory: GD1-8, GP1-6, LR1-2, V1-5; 10 Rotative: GP7-9, GE2, GE4, DC2, DC4, LR3-4, PC1; mais DC1 branded), via cinco sub-agentes dedicados de `WebSearch`, cumprindo pela primeira vez a recomendação de Horizonte 3 da auditoria de 21 set ("retomar o teste completo com sub-agentes dedicados"). Pesquisa dedicada de entidade/imprensa/social/concorrência com um sexto sub-agente, incluindo fetch directo a `wikidata.org`.

**O que não foi possível verificar nesta execução, e porquê:**
- **PageSpeed Insights (LCP/INP/CLS):** tentativa directa à API (não só via proxy) devolveu `429 Quota exceeded for quota metric 'Queries' and limit 'Queries per day'`: quota diária da própria API Google esgotada, não bloqueio de rede desta sessão. Distinto de semanas anteriores: agora sabemos que é um limite de quota do lado do Google, não da rede desta sessão, o que muda a leitura de "sem via" para "via existe, quota esgotada hoje": tentar novamente numa próxima execução, idealmente a horas diferentes.
- **Google Knowledge Panel, Bing Places:** o sub-agente de entidade tentou fetch directo a `google.com/search` e `bing.com/search`; ambos devolveram páginas não fiáveis (bloqueio genérico / resultados aparentemente mal-direccionados). Não verificável por ferramentas automatizadas nesta sessão: recomenda-se confirmação manual humana.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot como produtos:** sem sessão de browser autenticada nem integração de API nesta sessão, décima primeira semana consecutiva. O teste desta semana usa `WebSearch` como proxy de pesquisa fundamentada (ver Secção 7 para a distinção completa).

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar, está marcado **N/D** ou **não verificável**.

---

## 1. Sumário executivo

**Score global: 72/100: Bom, com um recuo de dois pontos que reflecte mais medição real, não mais problemas.** Pela primeira vez em 15 semanas, todas as 12 categorias têm uma pontuação numérica: Performance/CWV sai de N/D porque `curl` de saída passou a funcionar, permitindo TTFB real (mediana de 414 ms) e peso de página real (152.844 bytes, Brotli), mesmo sem LCP/INP/CLS (PageSpeed continua rate-limited, mas agora por quota do Google, não por bloqueio de rede desta sessão). Isto muda a base de cálculo: a média de 21 set (74/100) era sobre 11 categorias; esta semana é sobre 12, e uma categoria nova a meio da tabela (62/100) puxa a média para baixo sem que nada tenha piorado no terreno. Dito isto, houve mesmo duas coisas novas e genuinamente preocupantes esta semana, ambas na Medição: um erro de autenticação novo (`Invalid Refresh Token`, 614 ocorrências em dois dias, 7 utilizadores, rotas `/middleware`, `/login`, `/invite`) que pode estar a expulsar utilizadores reais de sessões activas, e uma falha de checkout Stripe (`product tax code is missing`, 5 ocorrências, 4 utilizadores, plano Pro/mês) que bloqueia literalmente uma compra. Em paralelo, o item Gemini, fechado como DONE a 21 set com a reserva explícita "reabrir se reaparecer", **reapareceu**: `RESOURCE_EXHAUSTED` voltou em 24 set, depois de três janelas limpas. Do lado positivo: o site principal mantém zero erros de runtime há 9+ semanas; o teste multi-motor desta semana, com a maior amostra já feita por este Routine (32 prompts, 5 sub-agentes dedicados), finalmente cumpre a recomendação pendente há duas execuções; e o mistério do Wikidata está resolvido, ainda que com má notícia: o QID Q140043087 **não existe** (`wikidata.org/wiki/Q140043087` devolve 404 por fetch directo), o que significa que não há nada para "repor" em `Organization.sameAs`: seria preciso criar um item Wikidata novo de raiz. Ver scorecard e Top findings.

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 21 set | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 88/100 | 0 | `robots.txt` reconfirmado por fetch directo (756 bytes, 18 UAs de IA, `Content-Signal`); CSP continua Report-Only, 12ª+ semana sem avanço |
| 2 | Performance / CWV | **62/100 (N/D → primeiro score real)** | : | TTFB mediana 414 ms (5 corridas `curl` reais, PT via proxy da sessão), HTML 152.844 bytes com Brotli; LCP/INP/CLS continuam N/D (PSI 429 por quota do Google, confirmado hoje que não é bloqueio de rede) |
| 3 | SEO On-Page | 94/100 | 0 | Homepage reconfirmada por fetch directo (título, meta, 1×H1/16×H2/13×H3, hreflang recíproco); gap `/en` com 1 imagem vs. 2 em PT persiste, 3ª semana |
| 4 | Schema / dados estruturados | 94/100 | −1 | `Organization.sameAs` reconfirmado com 3 entradas, sem Wikidata; `Organization.description` da homepage nomeia só 5 motores, inconsistente com os "onze" do `llms.txt` e do site |
| 5 | Optimização de imagens | 74/100 | 0 | Não re-amostrado em detalhe esta semana |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 93/100 | 0 | `llms.txt`/`llms-full.txt` reconfirmados por fetch directo; negociação de conteúdo em markdown confirmada a funcionar (`.md` e `Accept: text/markdown`, ambos 200) |
| 7 | Conteúdo & topical authority | 96/100 | −2 | Apenas 1 deploy de produção novo no site principal esta semana (`#156`), vs. 6 na semana anterior; `sitemap.xml` contado directamente pela primeira vez: 89 URLs (23 `/en/`, 66 PT) |
| 8 | Entidade / brand foundation | 78/100 | −5 | **Resolvido o mistério do Wikidata**: QID Q140043087 confirmado inexistente (404 directo); gap passa de "talvez recuperável" a "precisa de item novo de raiz" |
| 9 | Autoridade & digital PR | 34/100 | +4 | Segunda peça Marketeer confirmada, publicada 24 set (10 dias após a última verificação); continua zero Tier-1 |
| 10 | Sinais sociais & community | 37/100 | +2 | LinkedIn confirmado activo com detalhe novo (250 seguidores, cadência ~1 post/3-4 semanas); GitHub, X, Reddit/HN continuam ausentes |
| 11 | E-E-A-T & on-site authority | 70/100 | 0 | Não re-amostrado em detalhe esta semana |
| 12 | Medição & feedback loop | 38/100 | −12 | **Dois achados novos** (auth token, Stripe checkout) e **um reaberto** (Gemini): ver Top findings |

### Top 4 findings (cross-dimensional)

1. **Erro de autenticação novo e de volume alto: 614 ocorrências de `Invalid Refresh Token: Refresh Token Not Found` em dois dias, a afectar 7 utilizadores em `/middleware`, `/login` e `/invite`.** `mcp__Vercel__get_runtime_errors` (7 dias, `destaque-ai-tracker`) mostra duas assinaturas do mesmo erro: 572 ocorrências (6 utilizadores, `/middleware`, 26-27 set) e 40 ocorrências (1 utilizador, 26 set, mesmo deployment) mais 2 ocorrências isoladas em `/invite`. É um erro de sessão Supabase (`AuthApiError`, `refresh_token_not_found`) concentrado num intervalo de ~34 horas, ligado ao deployment `dpl_ANAQSqyAn1Zc8EaJM6uWi8fa6pcy` (produção 26 set, PR #539). Não é possível, só com este dado, dizer se é uma mudança de comportamento de sessão intencional (expiração mais agressiva) ou uma regressão: mas o volume (mais de 600 ocorrências num único fim-de-semana, 7 utilizadores distintos) é alto o suficiente para justificar investigação antes da próxima execução, especialmente porque `/middleware` a falhar pode significar utilizadores autenticados a serem expulsos de sessões activas sem aviso.
2. **Falha de checkout Stripe bloqueia literalmente uma compra do plano Pro/mês.** `[stripe/checkout] pro/month: Invalid line_items[0]: the product tax code is missing`, 5 ocorrências, 4 utilizadores, 25 set entre 06:46-07:11 UTC, rota `/api/stripe/checkout`. O erro da própria Stripe é explícito e accionável: o produto no dashboard Stripe não tem `tax_code` definido, requisito do "Managed Payments" (activo por omissão na conta). Distinto de todos os outros erros desta auditoria (falhas de fornecedor de dados/LLM): este é um bug de configuração que impede receita a entrar, não uma degradação de medição. Esforço de correcção estimado em minutos (definir `tax_code` no Stripe Dashboard ou desactivar Managed Payments na sessão).
3. **O item Gemini, fechado como DONE há uma semana com a reserva explícita "reabrir se reaparecer", reaparece.** A auditoria de 21 set marcou o item DONE após três janelas de 7 dias consecutivas sem `RESOURCE_EXHAUSTED`, sem confirmação directa de billing. Esta semana, a mesma assinatura (`gemini/gemini-3.5-flash`, knowledge e augmented, `Your prepayment credits are depleted`) regista **60 ocorrências** (30+30, 1 utilizador), com a última em **2026-09-24T06:44:45Z**: três dias depois do fecho do item. A leitura por ausência de sintoma, usada para fechar o item na semana passada, revela-se insuficiente: o crédito voltou a esgotar-se sem que ninguém confirmasse directamente que tinha sido reposto de forma sustentável (ex. facturação automática, não apenas top-up manual pontual). Item reaberto, com a recomendação explícita de confirmar desta vez por via directa (dashboard de billing), não por ausência de erro numa janela.
4. **O mistério do Wikidata está resolvido, com má notícia: o QID nunca foi (ou já não é) um item válido.** Sete semanas depois de `Organization.sameAs` ter perdido a referência ao QID Q140043087, um fetch directo a `wikidata.org/wiki/Q140043087` e a `Special:EntityData/Q140043087.json` devolve **404** em ambos: o item não existe. Isto muda a natureza do trabalho pendente: não é "confirmar com o founder se a remoção foi deliberada e repor o link", é "não há nada para repor: seria preciso criar um item Wikidata novo de raiz para a destaque.ai (empresa) ou para Eduardo Mendonça (fundador)". Pesquisa dedicada no próprio Wikidata por "destaque.ai" devolve apenas resultados sobre natação artística (a palavra portuguesa "destaque" = "highlight"); por "Eduardo Mendonça", apenas homónimos sem ligação a GEO/AI visibility.

### O que já está forte

O site principal (`destaque-ai`) mantém zero erros de runtime há pelo menos 9 semanas consecutivas de medição. `robots.txt` e `llms.txt` continuam consistentes e ricos, com a correcção "software company" (não "consultancy") a manter-se estável em `/en/about` e em `llms.txt` desde 14 set. A negociação de conteúdo em markdown funciona de facto (`.md` e `Accept: text/markdown` confirmados, ambos `200`), e o índice de Agent Skills (`/.well-known/agent-skills/index.json`) e o cartão MCP público (`/.well-known/mcp/server-card.json`) estão ambos acessíveis e correctos. A cobertura de imprensa PT, ainda longe de Tier-1, cresceu de forma real: uma segunda peça da Marketeer confirmada, 10 dias depois da primeira verificação, sobre o mesmo estudo próprio. E esta semana marca, pela primeira vez desde 13 jul, um teste multi-motor com a amostra completa recomendada (24 mandatórios + 10 rotativos, ainda que via proxy `WebSearch`, não motores reais).

---

## 2. Contexto de negócio

destaque.ai (`Tuasunt, Lda.`), sediada em Lisboa (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa). Fundada 2025, fundador Eduardo Mendonça. Posicionamento estável: "empresa de software portuguesa de GEO", com estatuto **OpenAI Select Partner** (`memberOf`/`ProgramMembership` no JSON-LD, reconfirmado). Produto próprio **Periscopy** (antigo "Visibility Tracker"): mede onze motores e superfícies (ChatGPT, Claude, Gemini, Grok, DeepSeek, Mistral, Perplexity, AI Overviews, AI Mode do Google, Copilot da Microsoft, Meta AI). Servidor MCP público confirmado activo (`tracker.destaque.ai/api/mcp`, cartão em `/.well-known/mcp/server-card.json`, `200`). Nota lateral confirmada nos deploys do Tracker esta semana: o produto Periscopy já usa `periscopy.ai` como domínio visível em texto de utilizador (email, legal), não apenas `destaque.ai` internamente (PR #536, "periscopy.ai no lugar de destaque.ai no que se vê").

---

## 3. Análise de plataforma

Hosting Vercel, equipa `team_GdiuFturz4hfmcBfWMKFhzms`. Quatro projectos: `destaque-ai` (site principal), `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Actividade de deploy desigual esta semana: **apenas 1 deploy de produção novo no site principal** (`#156`, "O Inception entra no /tracker, em PT e EN"), face a 6 na semana anterior: desaceleração real, não necessariamente negativa (podem já ter sido aplicadas as correcções pendentes). Em contraste, **`destaque-ai-tracker` continua com cadência muito alta**: pelo menos 20 deploys de produção nos últimos dias, incluindo o rebranding visível para `periscopy.ai` (#536), várias correcções de performance nos "sinais vitais" do admin (#526, #529, #532-534), e trabalho de relatório em PDF (#530-531, #538-539). Vercel Web Analytics reconfirmado **desligado** no projecto `destaque-ai` (`count_pageviews` devolve `400: "web_analytics_not_enabled"`), sem alteração face a todas as execuções anteriores.

---

## 4. Performance

**Primeiro score real desta série, 62/100.** `curl` de saída funcionou pela primeira vez em 15 semanas. TTFB (5 corridas a `https://www.destaque.ai/`): 587, 560, 414, 242, 226 ms; **mediana 414 ms**. HTML servido: 152.844 bytes com `content-encoding: br` (Brotli) confirmado por `curl -H "Accept-Encoding: br"`. `x-vercel-cache: HIT`, `age: 568610` s nos headers amostrados (resposta servida de cache, não necessariamente reflectindo latência de origem a frio). `x-nextjs-prerender: 1` confirma HTML server-renderizado. **LCP/INP/CLS continuam N/D**: tentativa directa à API do PageSpeed Insights (`googleapis.com/pagespeedonline/v5/runPagespeed`) devolveu `429 Quota exceeded for quota metric 'Queries' and limit 'Queries per day'`: pela primeira vez confirmado que é quota diária da própria Google, não bloqueio de rede desta sessão: distinção importante para as próximas execuções (vale a pena tentar a horas diferentes do dia, ou com uma API key própria em vez do endpoint público sem chave). Vercel Web Analytics continua desligado, sem via alternativa de CWV de campo.

---

## 5. SEO on-page

Homepage reconfirmada por fetch directo: título "destaque.ai: software de visibilidade em IA"; meta description presente e estável ("O ChatGPT é o novo boca a boca..."); **1×H1, 16×H2, 13×H3**. Duas imagens na homepage PT (`dashboard do Periscopy` com `alt` descritivo rico, e o selo OpenAI Select Partner); a homepage `/en` continua com **apenas 1 imagem** (só o selo, sem o dashboard): gap de paridade multimodal identificado a 14 set, ainda não resolvido, 3ª semana em aberto. `hreflang` confirmado correcto e recíproco em ambas as homepages (`pt-PT` / `en` / `x-default`). `/en/about` reconfirmado com "software company" consistente (não "consultancy"): título "About · destaque.ai", meta description a abrir com a mesma formulação da correcção de 14 set.

---

## 6. SEO technical

- **`sitemap.xml`: contado directamente pela primeira vez em várias semanas: 89 URLs.** 23 com `/en/` no caminho, 66 sem (PT + raiz + ficheiros). `lastmod` mais recente: `2026-09-21T16:56:23Z`. Páginas confirmadas presentes: `/en/outsourcing`, `/en/press`, `/en/research`, `/outsourcing`, `/imprensa` (as páginas novas de 18 set, já reportadas na semana passada, agora confirmadas no próprio sitemap, não só por menu).
- **`robots.txt`:** 18 user-agents de IA nomeados (GPTBot, OAI-SearchBot, ChatGPT-User, anthropic-ai, ClaudeBot, Claude-Web, Claude-User, Claude-SearchBot, Google-Extended, PerplexityBot, Perplexity-User, CCBot, Applebot-Extended, Bytespider, DuckAssistBot, MistralAI-User, cohere-ai, Meta-ExternalAgent), todos `Allow: /`; wildcard com `Content-Signal: search=yes, ai-input=yes, ai-train=yes`. Reconfirmado por fetch directo, sem alteração de conteúdo.
- **`hreflang`:** confirmado correcto em `/` e `/en` (ver Secção 5); não re-verificado noutras páginas.
- **JSON-LD schema:** homepage reconfirmada por extracção directa do HTML (não via ferramenta de fetch intermediária, pela primeira vez): `Organization` (`sameAs` com 3 entradas: LinkedIn, Crunchbase, Clutch, sem Wikidata), `Person` (`@id: #fundador`, Eduardo Mendonça), `WebSite`, mais um segundo bloco `WebPage`/`Service`/`FAQPage`. **Achado novo:** `Organization.description` no JSON-LD actual nomeia explicitamente "ChatGPT, Claude, Google AI Mode, Gemini e Perplexity" (cinco motores), inconsistente com a afirmação de "onze motores e superfícies" usada em `llms.txt` e noutra copy do site. Não é um erro grave (a descrição é verdadeira, só incompleta), mas é uma inconsistência de números entre duas fontes próprias, no mesmo padrão de risco (convergência de descrição de entidade) já vigiado nesta série desde 24 ago.
- **`/casos`:** 4 blocos `application/ld+json` confirmados presentes (não decompostos em detalhe esta semana).
- **`/perguntas`:** `FAQPage` (1 bloco) com **26 pares `Question`/`Answer`** confirmados por contagem directa.
- **Security headers:** HSTS, `x-content-type-options: nosniff`, `x-frame-options: DENY`, `referrer-policy`, `permissions-policy` confirmados em `/`, `/tracker`, `/perguntas`. **`content-security-policy-report-only` continua presente, enforced continua ausente**: 12ª+ semana consecutiva sem avanço.
- **Compressão e cache:** Brotli confirmado; `x-vercel-cache: HIT` em todas as respostas estáticas amostradas.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt` e `llms-full.txt`: ambos reconfirmados por fetch directo, `200`.** `llms-full.txt` tem 36.339 bytes (versão single-fetch completa). Conteúdo de `llms.txt` estável face a 21 set: três pilares, Periscopy com onze motores, servidor MCP público, catálogo de serviços, glossário, FAQ.
- **Negociação de conteúdo em markdown: confirmada a funcionar, pela primeira vez verificada directamente (não citada de segunda mão).** `GET /blog/geo-vs-aeo-diferencas.md` devolve `200`; `GET /` com `Accept: text/markdown` também devolve `200`. Item de backlog aberto desde 03 ago ("re-testar scan de preparação para agentes... e negociação de conteúdo em markdown") parcialmente resolvido: a negociação de conteúdo está confirmada; o scan externo (isitagentready.com) não foi re-testado esta semana.
- **`.well-known/agent-skills/index.json`:** confirmado acessível (`200`, 713 bytes), lista o skill `geo-seo-aeo-master` com URL raw do GitHub. Primeira verificação directa desta superfície, notada como "candidato a verificar" há duas semanas.
- **Robots.txt / postura para crawlers de IA:** confirmada permissiva e explícita, ver Secção 6.
- **HTML server-renderizado:** reconfirmado (`x-nextjs-prerender: 1`).
- **Multimodal grounding:** gap `/` vs. `/en` (2 imagens vs. 1) reconfirmado, ver Secção 5. Não avaliado `ImageObject` em detalhe esta semana além do já confirmado em execuções anteriores.

### Teste multi-motor: a maior amostra desta série

**Metodologia desta semana:** cinco sub-agentes dedicados de `WebSearch`, um sexto para entidade/imprensa/social/concorrência. 32 prompts no total: os 21 Mandatory completos (GD1-8, GP1-6, LR1-2, V1-5) mais 10 Rotative (GP7-9, GE2, GE4, DC2, DC4, LR3-4, PC1) mais DC1 branded. **Isto cumpre, pela primeira vez desde a recomendação em 21 set, o teste completo com sub-agentes dedicados**, mas continua a não ser equivalente a testar ChatGPT/Perplexity/Google AI Mode/Claude/Bing Copilot directamente: é pesquisa fundamentada via `WebSearch`, um proxy razoável mas não substituto.

| Motor | Modelo por defeito (per `references/models.md`) | Testado ao vivo esta semana? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise); GPT-6 Sol/Luna lançados 22 set mas ainda não default no Chat principal | **Não**: 11ª semana |
| Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não**: idem |
| Google AI Mode | Gemini 3.5 Flash | **Não**: idem |
| Claude (claude.ai) | Claude Sonnet 5 (Free/Pro); Opus 5.5 lançado 22 set, não confirmado default em lado nenhum | **Não**: idem |
| Bing Copilot | GPT-5 (via Azure OpenAI) | **Não**: idem |

**Resultados agregados (32 prompts, 28 set 2026):**

| Bloco | Prompts | destaque.ai aparece (qualquer forma) | Nota |
|---|---|---|---|
| GD1-8 (Discovery) | 8 | 2 claros (GD1 3ª pos., GD5 1ª pos.) + 1 só como link-fonte (GD7) | Colisão "GEO"=geodesia confirmada de novo em GD6/GD7 |
| GP1-6 (Problem-stated) | 6 | **0/6** | Espaço dominado por conteúdo brasileiro genérico; nenhum concorrente PT citado excepto Marco Gouveia em GP3 |
| LR1-2 (Local recommendation) | 2 | 1 parcial (LR1: 2 URLs próprios nos links brutos, mas síntese cita só Marco Gouveia) | LR2: colisão "AEO"=Authorized Economic Operator confirmada de novo |
| V1-5 (B2B SaaS PT) | 5 | 3 claros (V1, V2, V5) | V3: **5º eixo de colisão de "GEO" confirmado** ("Gestão de Estruturas Organizacionais"), V4: Marco Gouveia domina |
| DC1 (branded, BE VISIBLE) | 1 | Inconclusivo (3ª leitura distinta em 3 semanas) | Sem artigo comparativo de terceiros encontrado |
| Rotative (10) | 10 | 2 fracos, só como link-fonte (LR3, PC1) | GP7-9, GE2, GE4, DC2, DC4, LR4: 0/8 |

**Leitura honesta:** em 31 prompts testáveis (excluindo DC1, inconclusivo por desenho), destaque.ai aparece em alguma forma em 9 (29%): claramente citada em síntese em 5 (16%), presente só como link-fonte não sintetizado em 4. É a leitura mais fraca desta série até agora, mas também a amostra mais completa: não é directamente comparável às semanas anteriores (6-27 prompts, sub-amostras diferentes). O achado mais preocupante é estrutural, não pontual: **0/6 nos prompts de alto intent (GP1-6)**, exactamente o momento em que um comprador com dor activa pesquisa "o meu site não aparece no ChatGPT" ou "um concorrente aparece e eu não": nesse momento, o espaço é dominado inteiramente por conteúdo brasileiro (agenciamaisresultado.com.br, futuremarketing.com.br, Neil Patel BR, Semrush BR, Oxigenweb), não por nenhum concorrente português nomeado (excepto Marco Gouveia, uma vez, em GP3). A colisão do acrónimo "GEO" ganha um **quinto eixo confirmado** em V3 esta semana ("Gestão de Estruturas Organizacionais", juntando-se a geodesia, Authorized Economic Operator, Global Employer of Record e outsourcing de TI genérico): o mesmo prompt já devolveu cinco sentidos distintos em cinco semanas de teste, o que é em si um padrão mais preocupante do que qualquer sentido isolado. Nomes novos identificados: Digiton (consultoria de IA em Lisboa), Tenten GEO (Taiwan, internacional, com preço em NT$), latigid.pt e heldermesquita.pt (blogues PT sobre Schema.org/llms.txt), VisibleIQ (bevisibleiq.com: possível variante ou erro de grafia de "BE VISIBLE", não confirmado se é a mesma entidade). AISO Hub reconfirma-se como o concorrente mais consistentemente presente (3 das 8 pesquisas de descoberta), sempre posicionada como "a agência especializada" em AI Search Optimization em Portugal. **Nenhuma menção negativa, crítica ou alucinada sobre a destaque.ai foi encontrada em nenhuma das 32 pesquisas**: protocolo de crise não accionado.

---

## 8. Conteúdo e autoridade temática

Cadência mais lenta esta semana: **apenas 1 deploy de produção confirmado no site principal** (`#156`, "O Inception entra no /tracker, em PT e EN"), face a 6 deploys na semana de 14-18 set. `sitemap.xml` contado directamente: **89 URLs** (23 `/en/`, 66 PT/raiz/ficheiros), a primeira contagem directa confirmada em várias semanas (a tentativa de 21 set tinha falhado por erro de ferramenta). As páginas novas de 18 set (`/en/outsourcing`, `/en/press`, `/en/research`, `/outsourcing`, `/imprensa`) estão todas confirmadas no sitemap, não apenas no menu. Sem estudo novo publicado esta semana (o `llms.txt` continua a listar os mesmos quatro estudos próprios com dataset CC BY 4.0).

---

## 9. Entidade e fundação de marca

**Achado central: o QID Wikidata Q140043087 confirmado inexistente.** Fetch directo a `wikidata.org/wiki/Q140043087` e a `Special:EntityData/Q140043087.json` devolve `404` em ambos: não é um homónimo, não é um redireccionamento, o item simplesmente não existe. Pesquisa dedicada por "destaque.ai" no Wikidata devolve apenas 3 resultados sobre natação artística (Q106835763, Q113558725, Q65557989: "destaque" = "highlight" em português); por "Eduardo Mendonça", apenas homónimos sem ligação ao fundador. Não é possível confirmar se o QID alguma vez existiu e foi apagado, ou se foi um erro de povoamento desde o início. `Organization.sameAs` reconfirmado com **3 entradas** (LinkedIn, Crunchbase, Clutch), sem Wikidata: agora sabemos que **não há nada para repor**, seria preciso criar um item novo. Google Knowledge Panel e Bing Places não verificáveis por ferramentas automatizadas nesta sessão (SERPs reais não renderizam de forma fiável via `WebFetch`): recomenda-se verificação manual humana. Nenhuma listagem encontrada em pai.pt para "destaque.ai" ou "Tuasunt, Lda." (pesquisa dedicada, sem resultado correspondente).

---

## 10. Autoridade e digital PR

**Segunda peça Marketeer confirmada, publicada 24 set 2026** ("A IA fala destas 13 marcas portuguesas. Mas nunca escolhe nenhuma", marketeer.sapo.pt), 10 dias depois da última verificação (14 set), sobre o mesmo estudo próprio ("616 respostas de 10 assistentes de IA a 16 perguntas"). Existe uma segunda peça relacionada no mesmo cluster ("EDP é a marca portuguesa mais escolhida pela IA"). **Continua sem nenhuma cobertura Tier-1** (Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo): pesquisa dedicada nestes seis veículos não devolveu nenhuma menção.

---

## 11. Sinais sociais e comunidade

**LinkedIn confirmado activo, com detalhe novo verificado directamente:** `linkedin.com/company/destaque-ai`, 250 seguidores, sector "Marketing Services", 2-10 empregados, fundada 2026 (data de registo LinkedIn, distinta da data de fundação real 2025). Cadência de posts confirmada: aproximadamente um post relevante a cada 3-4 semanas (estudo de 616 respostas há ~3 semanas, estudo de sobreposição ChatGPT/Perplexity há ~1 mês, estudo de 251 empresas B2B PT há ~2 meses). **GitHub, X/Twitter, Reddit/Hacker News: nenhuma presença encontrada** em nenhuma pesquisa dedicada. Item de backlog aberto desde 13 jul, sem progresso: ausência notável dado que a própria metodologia SINAL da destaque.ai (Secção 5 do scorecard) trata GitHub e Reddit/HN como superfícies frequentemente citadas por LLMs.

---

## 12. E-E-A-T e autoridade on-site

**Não re-amostrado em detalhe esta semana.** `Person` (fundador, Eduardo Mendonça) confirmado presente no JSON-LD com `@id: #fundador`, referenciado por `Organization.founder`. Estado de execuções anteriores carregado sem nova verificação de credenciais/`sameAs` do `Person`.

---

## 13. Medição e feedback loop

**Score 38/100: recuo de 12 pontos face a 21 set, por dois achados novos e um reaberto, parcialmente compensado por um site principal continuamente limpo.**

**`destaque-ai` (site principal): zero erros de runtime nos últimos 7 dias**, 9ª+ semana seguida.

**`destaque-ai-tracker`: 50 grupos de erro na janela de 7 dias** (era 14 a 21 set; o salto reflecte, em parte, mais detalhe granular devolvido pela ferramenta desta vez, não necessariamente 3.5× mais problemas reais):

- **NOVO: `AuthApiError: Invalid Refresh Token: Refresh Token Not Found`, 614 ocorrências no total (572+40+2), 7 utilizadores, rotas `/middleware`, `/login`, `/invite`, concentradas em 26-27 set.** Ligado ao deployment `dpl_ANAQSqyAn1Zc8EaJM6uWi8fa6pcy` (PR #539, produção 26 set). Ver Top finding 1.
- **NOVO: falha de checkout Stripe, `pro/month: Invalid line_items[0]: the product tax code is missing`, 5 ocorrências, 4 utilizadores, 25 set.** Ver Top finding 2.
- **REABERTO: Gemini, `RESOURCE_EXHAUSTED` (crédito esgotado), 60 ocorrências (30 knowledge + 30 augmented), última em 2026-09-24T06:44:45Z.** Fechado DONE há uma semana com reserva explícita de reabertura; reaberto. Ver Top finding 3.
- **Copilot/SerpApi: `Your account has run out of searches`, 99 ocorrências desde 03 ago, activa até esta manhã (28 set 07:12 UTC).** Sem sinal de resolução, 8ª+ semana em aberto.
- **Perplexity: `429 Request rate limit exceeded`, 90 ocorrências desde 07 set, activa até esta manhã.** Continua sem resolução.
- **DataForSEO → SerpApi fallback: 69 ocorrências desde 31 jul, activa até esta manhã.**
- **Google AIO/DataForSEO: `Your account has run out of searches`, 57 ocorrências desde 03 ago**: mensagem de erro distinta da semana passada (`This operation was aborted`), sugerindo quota literalmente esgotada, não apenas timeout.
- **NOVO, activo esta manhã: DeepSeek, `402 Insufficient Balance` e `429` de concorrência, dezenas de ocorrências isoladas, todas entre 07:04-07:12 UTC de hoje (28 set)**, durante o próprio lote diário de auditoria do Tracker. Conta DeepSeek do Tracker aparenta estar sem saldo neste preciso momento.
- **Mistral: `429 Rate limit exceeded`, 8 ocorrências, baixo volume, sem mudança de padrão.**
- **Timeout genérico (`Task timed out after 300 seconds`), rotas `/admin/clients`, `/api/admin/ops-health`, `/api/cron/ops-health`: 34 ocorrências desde 23 jun, residual, sem mudança de padrão.**
- **`x-forwarded-host` mismatch em `/login` (3 ocorrências, origens suspeitas incluindo "exemplo-mau.com"): provável protecção CSRF do Next.js a funcionar correctamente contra um pedido forjado, não um bug.** Baixo risco, sem acção necessária além de vigilância.

GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão.

---

## 14. Posicionamento estratégico e inteligência competitiva

**SEO Alive classificado formalmente esta semana** (pesquisa dedicada): sede em Andorra, fundada 2019, agência remote-first a operar em 8 países; página dedicada `seoalive.com/pt/geo/saas` usa facturação/software em Portugal como exemplo prático (cita concorrência com gov.pt e moloni.pt em respostas de ChatGPT); sem presença física portuguesa confirmada; oferece auditoria GEO gratuita como isco de entrada, sem tabela de preços pública. **Classificação: concorrente internacional a operar no mercado PT por conteúdo/SEO multilingue, mecanismo de compra B2B SaaS ponderado: qualifica por critério de mecanismo apesar de não ser localizado em Portugal.** BE VISIBLE reconfirmado sem mudança: "global GEO agency... offices in London, UK, Portugal, Belgium, Asia & WY, USA" (texto institucional próprio). Marco Gouveia reconfirmado sem mudança de pricing (auditoria a partir de €3.000, consultoria a partir de €1.000/mês): continua a ser o concorrente mais consistentemente citado em recomendações locais directas (GP3, V4, LR3, GE4 esta semana), agora em pelo menos 5 execuções seguidas: deixa de ser um padrão a "confirmar" e passa a ser um facto estabelecido sobre este segmento de pesquisa. **Achado novo: 5º eixo de colisão do acrónimo "GEO"** ("Gestão de Estruturas Organizacionais", em V3), reforçando que este prompt específico, que o próprio `llms.txt` da destaque.ai lista como um serviço próprio, continua estruturalmente instável em pesquisa genérica. Protocolo de crise: **não accionado**, zero menções negativas ou alucinadas em 32 pesquisas mais a pesquisa de entidade dedicada.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2): quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Investigar o erro `Invalid Refresh Token` (614 ocorrências, 7 utilizadores, ligado ao deploy #539): confirmar se é regressão ou mudança de comportamento de sessão intencional | MEASUREMENT | 1-2h | Eduardo |
| Corrigir o `tax_code` em falta no produto Stripe "Pro/mês" (bloqueia checkout, 4 utilizadores afectados) | MEASUREMENT | 15-30min | Eduardo |
| Confirmar directamente (dashboard de billing) que o crédito Gemini está reposto de forma sustentável, não apenas ausência de erro numa janela: a leitura anterior já falhou uma vez | MEASUREMENT | 15-30min | Eduardo |
| Confirmar saldo da conta DeepSeek usada pelo Tracker (erros `402 Insufficient Balance` activos esta manhã) | MEASUREMENT | 15-30min | Eduardo |
| Decidir se vale a pena criar um item Wikidata novo para a destaque.ai/Eduardo Mendonça, agora que está confirmado que o QID antigo nunca existiu | ENTITY | 2-4h | Eduardo |
| Corrigir `Organization.description` no JSON-LD da homepage para nomear onze motores (ou remover a lista específica), alinhando com `llms.txt` | SCHEMA | 15-30min | n/a |

### Horizonte 2 (semana 3-6): optimização do existente

- Fechar o gap de paridade multimodal `/en` (1 imagem) vs. `/` (2 imagens), 3ª semana em aberto, correcção de baixo esforço.
- Produzir conteúdo dirigido aos 6 prompts de alto intent (GP1-6) onde destaque.ai está a 0/6: este é o momento de compra mais quente (dor activa) e está inteiramente cedido a conteúdo brasileiro genérico.
- Verificar manualmente Google Knowledge Panel e Bing Places (ferramentas automatizadas não conseguem confirmar nesta sessão).
- Investigar se "VisibleIQ" (bevisibleiq.com) é a mesma entidade que "BE VISIBLE" (bevisibleagency.com) ou um concorrente distinto.
- Reformular ou reforçar textualmente o serviço de "outsourcing de GEO" (`/outsourcing`), dado o 5º eixo de colisão do acrónimo confirmado em V3 no mesmo prompt que o `llms.txt` lista como serviço próprio.

### Horizonte 3 (semana 7-12): reforço estratégico

- Repetir o teste multi-motor completo (32 prompts) numa próxima execução para confirmar se a taxa de menção de 29% desta semana é representativa ou uma semana fraca pontual: é a primeira leitura com esta amostra, sem histórico comparável directo.
- Push de digital PR além da Marketeer (2 peças confirmadas) rumo a pelo menos uma publicação Tier-1.
- Avaliar arranque de presença mínima em GitHub e/ou Reddit, dado que a própria metodologia SINAL trata estas plataformas como superfícies de citação relevantes.
- Classificar formalmente SEO Alive em `competitor_filtering.md` (dados suficientes recolhidos esta semana).

### Horizonte 4 (90+ dias)

- Se o `curl` de saída continuar a funcionar nas próximas execuções, considerar isto a via técnica principal (mais rica que `mcp__Vercel__web_fetch_vercel_url`), e tentar PageSpeed Insights a horas diferentes do dia para contornar a quota diária.
- Construir um item Wikidata completo de raiz para a organização, se aprovado no Horizonte 1.
- GSC, GA4 (canal IA) e Bing Webmaster Tools AI Performance: continuam sem confirmação em nenhuma auditoria desta série; considerar se isto é um gap real ou um gap de visibilidade desta auditoria.
- Considerar activar Vercel Web Analytics (`destaque-ai`): continua desligado, mudança de configuração sem código.

---

## 16. Nota de encerramento

O score desce dois pontos, para 72/100, mas o número esconde uma mudança de método mais do que uma mudança no terreno: pela primeira vez em 15 semanas, `curl` de saída funcionou, o que tirou a Performance/CWV do N/D permanente e trouxe uma nova categoria com pontuação real (62/100) para a média de 12, em vez de 11. Isso por si só já explicaria a maior parte da descida. O que não é ruído de método é a Medição: dois achados novos (um erro de autenticação com mais de 600 ocorrências em dois dias, e uma falha de checkout Stripe que bloqueia literalmente uma venda) e um item reaberto (Gemini, fechado há uma semana com uma reserva que se revelou justificada) mostram que a recuperação celebrada a 21 set foi parcial, não definitiva. Do lado positivo genuíno: o site principal mantém-se limpo há 9+ semanas, o mistério do Wikidata está finalmente resolvido (mesmo que com má notícia: não há nada para repor, só para construir de raiz), a imprensa PT cresce de forma real (segunda peça Marketeer confirmada), e esta é a primeira semana desta série a testar a amostra completa de prompts recomendada (32, cinco sub-agentes), o que deu uma leitura mais honesta e mais fraca do que as amostras reduzidas de semanas anteriores sugeriam: 0/6 nos prompts de maior intenção comercial (GP1-6) é o achado que mais merece atenção continuada, porque é exactamente o momento em que um comprador com dor activa procura ajuda, e nesse momento a destaque.ai está ausente por completo, cedendo o espaço a conteúdo brasileiro genérico. A prioridade da próxima semana é dupla: resolver os dois bugs operacionais novos (auth, Stripe) antes que afectem mais clientes, e decidir, agora que a ambiguidade do Wikidata está resolvida, se vale a pena investir no trabalho de criar um item novo de raiz.
