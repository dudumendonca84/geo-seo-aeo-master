# destaque.ai self-audit baseline

**Data da auditoria:** 13 julho 2026. **Execução:** primeira corrida do Routine `destaque-ai-self-audit-weekly` (baseline — sem semana anterior para comparar).
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

Este ambiente de execução (sessão remota, cron) tem acesso de rede restrito: `curl` directo e `WebFetch` genérico a `destaque.ai`, `google.com`, `chatgpt.com`, `perplexity.ai`, `claude.ai`, `bing.com` foram bloqueados pela política de rede do sandbox (confirmado: `curl` a `destaque.ai:443` devolveu rejeição de gateway; `WebFetch` a `destaque.ai` e mesmo a `google.com`/`example.com` devolveu 403 — bloqueio genérico do ambiente, não do site). Dado o projecto Vercel `destaque-ai` estar ligado a esta sessão, foi possível obter HTML e headers **reais e ao vivo** da produção via `mcp__Vercel__web_fetch_vercel_url` (fetch server-side através da própria Vercel, com bypass de partilha) para: homepage, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/estudo/visibilidade-ia-saas-portugal-2026`, `/blog/o-que-e-llms-txt-como-criar`. Isto é dado real de produção (`server: Vercel`, `x-vercel-cache`, ETags), não simulação.

**O que não foi possível verificar nesta execução, e porquê — sem inventar números:**
- **TTFB por curl de PT** (5 corridas) — rede do sandbox não permite `curl` de saída para `destaque.ai`. Não fabricado.
- **PageSpeed Insights (LCP/INP/CLS)** — `googleapis.com/pagespeedonline` devolveu **HTTP 429 (rate limited)** no momento do pedido (13 jul 2026, ~08:14 UTC). Não fabricado.
- **Teste multi-motor ao vivo (ChatGPT, Perplexity, Google AI Mode, Bing Copilot)** — este ambiente não tem sessão de browser autenticada nem integração de API a estes produtos de consumidor. **Gap operacional, não editorial** — ver Horizonte 1.
- **Claude — modo knowledge testado de facto** (ver secção 7): esta sessão *é* Claude Sonnet 5 (modelo default claude.ai desde 30 jun 2026, per `references/models.md`), pelo que foi possível correr um teste real — não simulado — em modo knowledge (sem web search) usando 4 sub-agentes Claude Sonnet 5 sem contexto prévio da tarefa, instruídos a não usar nenhuma ferramenta. Modo augmented (Claude com web search activo) não foi testado.
- **Wikidata Q140043087, LinkedIn company page, perfis Crunchbase/Clutch** — a pesquisa web (WebSearch) não devolveu snippets indexados para nenhum destes; não foi possível confirmar directamente se estão populados e correctos. Podem estar correctos e apenas pouco indexados (empresa fundada em 2025) — **não verificado**, não assumido como falha.
- **Google Knowledge Panel, GSC, GA4 canal IA, Bing Webmaster Tools AI Performance, ferramenta de monitorização** — exigem acesso a dashboards internos de destaque.ai, fora do alcance desta sessão.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar, está marcado **N/D** (não determinado) — não convertido em pontuação negativa nem positiva.

---

## 1. Sumário executivo

**Score global: 68/100 — Bom, com lacunas de verificação.** Nota: 2 das 12 categorias (Performance/CWV, parte de Medição) são N/D nesta execução — o número reflecte as 10 categorias com evidência directa; não é uma nota final definitiva sobre o site.

### Scorecard — 12 categorias

| # | Categoria | Score | Nota |
|---|---|---|---|
| 1 | SEO Técnico | 85/100 | Robots.txt e schema fortes; CSP só em Report-Only |
| 2 | Performance / CWV | N/D | PSI rate-limited; sem curl de saída |
| 3 | SEO On-Page | 90/100 | Title/meta/H1/H2 disciplinados |
| 4 | Schema / dados estruturados | 92/100 | Organization+Person+WebSite+WebPage+Service+FAQPage+BlogPosting+Dataset+BreadcrumbList confirmados |
| 5 | Optimização de imagens | 55/100 | Zero imagens no site — sem defeitos de alt, mas sem superfície multimodal |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 88/100 (prontidão técnica); teste de citação real N/D salvo Claude knowledge (0/4) | |
| 7 | Conteúdo & topical authority | 85/100 | 2 estudos próprios com estatísticas originais; 11 posts; cadência recente parada |
| 8 | Entidade / brand foundation | 78/100 | sameAs completo (LinkedIn/Crunchbase/Clutch/Wikidata) — profundidade não verificável |
| 9 | Autoridade & digital PR | 20/100 | Zero cobertura Tier-1 PT encontrada (expectável, empresa fundada 2025) |
| 10 | Sinais sociais & community | 35/100 | LinkedIn declarado; sem X, GitHub, Reddit/HN visíveis |
| 11 | E-E-A-T & on-site authority | 55/100 | Fundador nomeado com schema Person + sameAs; sem case studies públicos ainda |
| 12 | Medição & feedback loop | N/D | Sem acesso a GSC/GA4/BWT/Tracker desta sessão |

### Top 4 findings (cross-dimensional)

1. **A fundação técnica e de schema é mais madura do que a maioria dos clientes B2B SaaS PT que a destaque.ai audita.** `robots.txt` permite explicitamente 19 user-agents de IA (incluindo `Google-Extended`, `ClaudeBot`, `PerplexityBot`, `Applebot-Extended`, `MistralAI-User`, `cohere-ai`); `llms.txt` é substancial e curado (não um stub); schema cobre `Organization`, `Person`, `WebSite`, `WebPage` (com `speakable`), `Service`, `FAQPage`, `BlogPosting`, `Dataset` e `BreadcrumbList` consoante o template. Isto é praticar o que se vende.
2. **O gap não é técnico, é de prova externa.** Zero cobertura Tier-1 PT (Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo) encontrada via pesquisa; sinais sociais fracos fora do LinkedIn declarado; nenhum case study público. Expectável para uma empresa fundada em 2025 — mas é o eixo onde falta trabalho, não o eixo técnico.
3. **A auditoria desta semana não conseguiu correr o teste central da metodologia — visibilidade real multi-motor.** O ambiente de execução do Routine não tem acesso autenticado a ChatGPT, Perplexity, Google AI Mode nem Bing Copilot. O único ponto de dado real obtido foi Claude Sonnet 5 em modo knowledge (sem pesquisa web): **0 em 4** prompts mandatórios testados mencionaram destaque.ai — mas também **0 em 4** mencionaram qualquer concorrente nomeado; o modelo reconhece a lacuna de conhecimento e recusa inventar nomes. Isto é preocupação de cobertura de dados do próprio Routine, não uma inconsistência editorial.
4. **Existe uma incoerência pequena mas real entre o que o schema declara e o que o site entrega.** `Organization.areaServed` inclui Espanha e Europa, e `contactPoint.availableLanguage` inclui `en`, `es`, `pt-BR` — mas o site é monolingue PT-PT (sitemap sem qualquer `/en` ou `/es`, sem tags `hreflang`). Não é um erro técnico (não há inconsistência de hreflang porque não há páginas alternativas a apontar), mas é uma promessa de alcance que o conteúdo ainda não cobre.

### O que já está forte

O essencial da camada técnica e de dados estruturados está bem implementado: HTML server-renderizado (Next.js com `x-nextjs-prerender: 1`, confirmado sem depender de JS para o conteúdo principal), compressão Brotli em todas as respostas testadas, cabeçalhos de segurança presentes (HSTS 2 anos, `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`), `robots.txt` e `llms.txt` exemplares para a categoria, schema rico e consistente entre templates, autor nomeado com `Person` schema e `sameAs` a LinkedIn, e dois estudos próprios com estatísticas originais e schema `Dataset` — precisamente o tipo de activo que a literatura (Aggarwal et al., KDD 2024) identifica como o de maior efeito de citação. Isto não é um cliente a precisar de remediação de pânico; é uma base sólida à espera de prova externa e de um ciclo de medição completo.

---

## 2. Contexto de negócio

- **Identidade:** destaque.ai (nome legal `Tuasunt, Lda.`), consultoria de Generative Engine Optimization (GEO) sediada em Lisboa (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa), fundada em 2025. Fundador: Eduardo Mendonça.
- **Línguas servidas:** conteúdo publicado exclusivamente em PT-PT (`inLanguage: pt-PT` em todo o schema amostrado, `<html lang="pt-PT">`). Schema declara `availableLanguage` incluindo `en`, `es`, `pt-BR` e `areaServed` incluindo Espanha e Europa — sem conteúdo correspondente nessas línguas/mercados (ver finding 4).
- **Plataforma:** Next.js, alojado na Vercel (`server: Vercel`, projecto `destaque-ai`, domínios `destaque.ai` / `www.destaque.ai` / `destaque-ai.vercel.app`).
- **Portfólio de serviços** (extraído de `/llms.txt` e do schema `Service`/`FAQPage` da homepage):
  - Diagnóstico GEO (auditoria de 2 semanas, presença em ChatGPT/Claude/Gemini/Perplexity, benchmark vs concorrentes).
  - Avenças de acompanhamento — "Avença Visibilidade" e "Avença Autoridade" (Tracker semanal, schema, llms.txt, conteúdo, "território livre", autoridade externa).
  - Auditoria gratuita (30 min, 5 prompts críticos).
  - Produto próprio: **Visibility Tracker** (`/tracker`) — mede 7 motores (ChatGPT, Claude, Gemini, Perplexity, Grok, Mistral, DeepSeek) em modo knowledge e augmented, citation rate, share of voice, posição média.
  - Dez disciplinas em três camadas: SEO técnico on-site (schema, FAQ engineering, AI crawler optimization), autoridade off-site (Entity SEO, Digital PR, G2/Capterra/Product Hunt, Reddit, sinais locais), medição (tracking multi-motor).
- **Diferenciadores visíveis do site:** posicionamento explícito como "primeira consultoria de GEO em Portugal"; recusa deliberada de mostrar preços publicamente (FAQ própria: "Por que não mostram preços?"); serve tanto negócios digitais (SaaS) como negócios locais (clínicas, restauração, turismo) — duas verticais distintas sob a mesma metodologia.
- **Presença social declarada em `Organization.sameAs`:** LinkedIn (`linkedin.com/company/destaque-ai`), Crunchbase, Clutch, Wikidata (`Q140043087`). Ausente: X/Twitter, GitHub. Fundador (`Person`) declara `sameAs` a LinkedIn pessoal apenas.

---

## 3. Análise de plataforma

- **Hosting:** Vercel (confirmado por header `server: Vercel` e `x-vercel-id` em todas as respostas). Região de origem observada nos headers: `iad1` (Virgínia, EUA) — nota: isto identifica a região da função/origem associada à entrada de cache, não necessariamente o nó de edge mais próximo do visitante; a Vercel serve conteúdo cacheado a partir de PoPs globais via Anycast, pelo que este dado **não** implica por si só latência elevada para visitantes em Portugal. Sem medição TTFB directa, não é possível quantificar a latência real PT.
- **Build:** Next.js com pré-renderização confirmada (`x-nextjs-prerender: 1`, `x-nextjs-stale-time: 300`) — SSG/ISR, não CSR puro. O HTML devolvido no primeiro pedido já contém o conteúdo principal (título, H1, H2, schema, FAQ) sem depender de execução de JS — relevante directamente para a secção 7 (crawlers de IA não executam JS na generalidade).
- **O que a plataforma permite/não permite:** Vercel dá Brotli automático, edge caching, headers de segurança configuráveis via `next.config` — não há tecto de plataforma bloqueando nenhum dos achados desta auditoria (ao contrário de um cliente em Squarespace/Wix). Todos os itens do backlog (secção seguinte) são resolvíveis dentro da própria stack, sem CDN adicional nem migração.
- **Custo do plano actual:** não visível a partir de fora; não verificado nesta sessão.

---

## 4. Performance

**N/D nesta execução.** Não foi possível correr `curl` de saída (rede do sandbox bloqueou ligação directa a `destaque.ai:443`) nem obter resposta da API do PageSpeed Insights (`googleapis.com/pagespeedonline/v5/runPagespeed` devolveu HTTP 429 às ~08:14 UTC de 13 jul 2026).

**Sinais indirectos reais, a partir dos headers HTTP obtidos via Vercel** (não substituem TTFB nem CWV, mas são dados verificados, não estimativas):
- `content-encoding: br` presente em todas as respostas testadas (homepage, `/robots.txt`, `/llms.txt`, `/sitemap.xml`, página de estudo, post de blog) — compressão Brotli activa, não apenas gzip.
- `x-vercel-cache: HIT` ou `PRERENDER` consistentemente — servido de cache/edge, não recomputado por pedido.
- `cache-control: public, max-age=0, must-revalidate` na maioria das páginas HTML — revalidação a cada pedido (razoável para conteúdo que muda; `s-maxage=3600` no `llms.txt`).

**Recomendação para a próxima execução:** correr o teste a partir de um ambiente com saída de rede sem restrições (ou usar a própria conta Vercel — `mcp__Vercel__get_runtime_logs` / analytics — para números reais de latência e Web Vitals reportados pelo campo, que a Vercel agrega nativamente para projectos com Analytics activo).

---

## 5. SEO on-page

Amostra: homepage (`https://www.destaque.ai/`).

- **Title:** "destaque.ai: Visibilidade em IA, com método." — 43 caracteres, marca em primeiro lugar, proposta de valor clara.
- **Meta description:** "Primeira consultoria de Generative Engine Optimization (GEO) em Portugal. Opera a visibilidade de negócios digitais (SaaS, software, plataformas, e-commerce) e locais (clínicas, restauração, turismo, comércio, serviços de proximidade) em ChatGPT, Claude, Google AI Mode, Gemini e Perplexity. Também procurada como agência GEO em Portugal." — 331 caracteres (mais longa do que os ~155-160 tipicamente truncados em SERP clássico, mas isso é aceitável e comum em copy pensada para ser lida por LLMs, não só por snippet de SERP; nota a frase final "Também procurada como agência GEO em Portugal" — cobertura semântica deliberada de uma variante de intenção de pesquisa).
- **Heading hierarchy:** 1 H1 ("Aparece quando perguntam à IA pelo teu negócio."), 13 H2 — sem duplicações nem anomalias óbvias; estrutura de página de vendas em blocos temáticos (paradigma → problema → sistema → antes/depois → FAQ).
- **Cobertura de `alt`:** **0 tags `<img>` na homepage, na página de estudo e no post de blog amostrado** — não há imagens de todo (nem hero, nem ilustrações, nem screenshots do produto Tracker). Tecnicamente 0 imagens sem `alt` (100% "coberto" por ausência de universo), mas ver secção 6 e categoria 5 do scorecard — é uma lacuna de superfície multimodal, não um defeito de acessibilidade.
- **Higiene bilingue:** não aplicável — conteúdo consistentemente PT-PT, sem mistura detectada nas amostras lidas.

---

## 6. SEO technical

- **`sitemap.xml`:** único ficheiro (não é índice), 24 URLs, `lastmod` recente (12 jul 2026 para a maioria das páginas estruturais, datas específicas de publicação para os posts de blog e estudos). Sem variantes de idioma. Breakdown por template: 1 home, 1 tracker, 1 servico, 1 sobre, 1 blog (índice), 1 contacto, 3 legal (privacidade/cookies/termos), 1 ai-usage, 1 glossario, 1 estudo (índice) + 2 estudos individuais, 11 posts de blog.
- **`robots.txt`:** 701 bytes, `User-Agent: *` com `Allow: /`, e depois **19 user-agents de IA explicitamente listados, todos `Allow: /`**: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `anthropic-ai`, `ClaudeBot`, `Claude-Web`, `Claude-User`, `Claude-SearchBot`, `Google-Extended`, `PerplexityBot`, `Perplexity-User`, `CCBot`, `Applebot-Extended`, `Bytespider`, `DuckAssistBot`, `MistralAI-User`, `cohere-ai`, `Meta-ExternalAgent`. Cobertura mais completa do que a matriz mínima recomendada em `SKILL.md` §7 (que já inclui, e o site cobre, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `Bytespider`). `Sitemap:` declarado no ficheiro.
- **`hreflang`:** ausente — correctamente, dado que não há páginas alternativas de idioma (ver finding 4, secção 1). Não é uma falha de implementação; é ausência de necessidade dado o site ser monolingue.
- **JSON-LD schema — por template:**
  - Homepage: `Organization`, `Person` (fundador), `WebSite`, `WebPage` (com `speakable.cssSelector` para `.hero-v2 h1` e `.hero-v2__sub p`), `Service` (com `hasOfferCatalog`), `FAQPage` (10 perguntas).
  - Página de estudo (`/estudo/visibilidade-ia-saas-portugal-2026`): adiciona `ItemPage`, `Article`, **`Dataset`** e `BreadcrumbList`.
  - Post de blog (`/blog/o-que-e-llms-txt-como-criar`): `ItemPage`, `BlogPosting` (com `author` referenciando o fundador, `datePublished`/`dateModified` ambos 2026-05-01, `articleSection`), `FAQPage`, `BreadcrumbList`.
  - Não amostrado nesta execução (falha intermitente da ferramenta de fetch a criar link de partilha para `/servico` e para um segundo post de blog): schema de `/servico`, `/sobre`, `/glossario` — recomenda-se confirmar na próxima corrida.
  - Ausente em toda a amostra: `ImageObject`/`VideoObject` (consistente com zero imagens), `Review`/`AggregateRating` (sem testemunhos de cliente publicados ainda — expectável, empresa fundada em 2025).
- **Security headers** (idênticos em todas as respostas amostradas): `strict-transport-security: max-age=63072000` (2 anos, sem `includeSubDomains` nem `preload` — não confirmado se aplicável), `x-content-type-options: nosniff`, `x-frame-options: DENY`, `referrer-policy: strict-origin-when-cross-origin`, `permissions-policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`. **`content-security-policy-report-only`** presente com uma política razoável (`default-src 'self'; script-src 'self' 'unsafe-inline'; ...; frame-ancestors 'none'`) — mas em modo **Report-Only**, ou seja, **não está a bloquear nada**, apenas a reportar violações hipotéticas. Não há cabeçalho `Content-Security-Policy` enforced.
- **Compressão e cache:** Brotli (`content-encoding: br`) em todas as respostas; `etag` presente; `cache-control` com `must-revalidate` na maioria, `s-maxage=3600` no `llms.txt`.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`:** presente, substancial (não um stub) — descreve a empresa, contexto de indústria (Maio 2026), o produto Visibility Tracker, os 3 serviços, as 10 disciplinas, glossário, o estudo próprio, a página pilar de categoria, páginas institucionais, **11 posts de blog listados com título + resumo**, contactos, e uma declaração explícita de "Política de uso por IA" ("Este site permite indexação por crawlers de IA... Pedimos que citações respeitem a fonte e mantenham o link original"). Referencia `llms-full.txt` (não verificado nesta execução — recomenda-se confirmar que existe e está sincronizado).
- **URLs declaradas no `llms.txt` vs. `sitemap.xml`:** consistentes — todas as páginas estruturais e todos os 11 posts de blog em `llms.txt` correspondem a entradas em `sitemap.xml`; páginas legais (`/privacidade`, `/cookies`, `/termos`, `/ai-usage`) estão no sitemap mas correctamente omitidas do `llms.txt` (não são conteúdo relevante para um LLM curar).
- **Postura de robots para crawlers de IA:** ver secção 6 — permissiva e completa para todos os agentes relevantes (`OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `Claude-SearchBot`, `PerplexityBot`, `Perplexity-User`, `GPTBot`, `Google-Extended`, `Meta-ExternalAgent` todos confirmados `Allow: /`).
- **HTML server-renderizado:** confirmado — `x-nextjs-prerender: 1` e conteúdo completo (H1, H2, schema, texto de FAQ) presente no HTML devolvido no primeiro pedido, sem depender de hidratação JS. Crawlers de IA que não executam JS (a maioria) leem o conteúdo real, não uma shell vazia.
- **Multimodal grounding:** **ausente** — zero `<img>`, logo zero `ImageObject`/`VideoObject` em qualquer página amostrada. O `logo` da `Organization` aponta para um PNG (`/brand/wordmark-dark.png`) mas sem `ImageObject` schema dedicado. Dado que Gemini 3.5+ e GPT-5+ já citam imagens directamente em respostas (per `references/models.md`), esta é uma superfície de citação totalmente inexplorada — não um erro, uma ausência de activo.
- **Teste multi-motor (dois modos, knowledge vs. augmented) — o que foi e não foi possível fazer:**

  | Motor | Modelo por defeito (per `references/models.md`, 13 jul 2026) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.5 Instant (Free/Go) | **Não** — sem acesso de sessão/API neste ambiente |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não** — idem |
  | Google AI Mode | Gemini 3.5 Flash | **Não** — idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Sim, modo knowledge apenas** — ver abaixo |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não** — idem |

  **Claude Sonnet 5, modo knowledge (sem web search), 13 jul 2026 ~08:15-08:20 UTC** — 4 prompts mandatórios testados via sub-agentes Claude Sonnet 5 frescos (sem contexto prévio desta tarefa, instruídos a não usar nenhuma ferramenta):

  | ID | Prompt | destaque.ai mencionado? | Concorrente nomeado? |
  |---|---|---|---|
  | GD5 | "que empresa recomendam para consultoria de visibilidade em IA em Portugal?" | Não | Não — recusou nomear qualquer empresa, sinalizou risco de alucinação |
  | LR1 | "quem faz auditorias de GEO em Lisboa?" | Não | Não — idem |
  | GP1 | "o meu site não aparece no ChatGPT... como resolvo isto?" | Não | Não — resposta genérica accionável (robots.txt, schema, FAQ, menções de terceiros), sem nomear vendors |
  | V4 | "que consultor de GEO recomendam para uma fintech portuguesa?" | Não | Não — idem |

  **Leitura:** 0/4 citação, mas também 0/4 alucinação de concorrente — o modelo reconhece explicitamente (nas 4 respostas) que não tem "conhecimento treinado fiável" sobre players GEO em Portugal e recusa-se a inventar nomes. Consistente com a empresa ter sido fundada em 2025, provavelmente após o corte de treino relevante ou com presença ainda insuficiente em dados de treino. **Não é um sinal de alarme editorial** (não há menção negativa nem hallucinada a acionar o protocolo de crise de `SKILL.md` §14) — é ausência, não distorção. Modo augmented do Claude (com web search activo) não foi testado nesta execução.

  **ChatGPT, Perplexity, Google AI Mode e Bing Copilot: não testados nesta execução.** Gap operacional do Routine, não editorial — ver Horizonte 1 e nota no topo do documento.

---

## 8. Conteúdo e autoridade temática

- **Tópicos cobertos:** GEO vs SEO/AEO, llms.txt, schema.org para SaaS B2B, crawlers de IA, citation rate/share of voice, Google AI Mode/I-O 2026, "onde a IA aprende sobre a marca", critérios para decidir se GEO compensa. 11 posts de blog publicados entre 2026-04-15 e 2026-06-29 (per `sitemap.xml`), mais uma página pilar de categoria (`/consultoria-geo-portugal`) e dois estudos originais.
- **Estatísticas originais e dados próprios:** dois activos fortes.
  - `/estudo/visibilidade-ia-saas-portugal-2026` (31 mai 2026): auditoria de 45 empresas SaaS B2B portuguesas em 4 motores de IA — "96% sem política para crawlers de IA; 56% não é recomendada por nenhum dos quatro assistentes; só 29% surge em todos os quatro motores". Schema `Dataset` + `Article` + `BreadcrumbList`.
  - `/estudo/gap-google-ia` (06 jul 2026) — conteúdo não lido nesta execução (não amostrado); presente no sitemap com prioridade 0.9, a par dos outros activos de topo.
  Isto é exactamente o tipo de activo que Aggarwal et al. (KDD 2024) identificam como o maior lift de citação isolado (Statistics Addition, até +40,6% PAWC) — a destaque.ai está a aplicar a si própria a técnica que vende.
- **Cadência:** aproximadamente quinzenal entre abril e final de junho 2026 (10 publicações em ~10 semanas); **sem publicação nova desde 06 jul 2026** — um hiato de cerca de uma semana à data desta auditoria (13 jul 2026). Não é grave isoladamente, mas vale acompanhar se se prolongar.
- **Distribuição:** sem RSS/newsletter própria visível nas páginas amostradas; distribuição observada limitada ao próprio site e ao LinkedIn (não verificado em profundidade — ver secção 10).
- **Gap analysis vs. concorrentes:** não realizado nesta execução — exigiria acesso a resultados de motor por motor que não foi possível obter (ver secção 7).

---

## 9. Entidade e fundação de marca

- **Wikidata:** `Organization.sameAs` inclui `https://www.wikidata.org/wiki/Q140043087`. **Não verificado nesta execução** se o item existe e está populado (instance of, país, sede, fundador, data de fundação, sameAs) — a pesquisa web não devolveu snippets indexados para este QID. Recomenda-se confirmação manual directa na próxima execução (ou com acesso de rede irrestrito).
- **Wikipedia:** não avaliado — expectável que uma consultoria fundada em 2025 não cumpra critérios de notabilidade; não é uma lacuna a resolver agora.
- **Google Knowledge Panel:** não verificável sem renderização de uma pesquisa Google real (sem acesso de browser nesta sessão).
- **`Organization.sameAs` — profundidade:** LinkedIn (empresa), Crunchbase, Clutch, Wikidata. **Ausente:** X/Twitter, GitHub. A pesquisa web não devolveu conteúdo indexado para os perfis LinkedIn/Crunchbase/Clutch declarados — não foi possível confirmar se estão activos/populados ou se são apenas recentes e pouco indexados.
- **NAP:** consistente dentro do próprio schema — endereço único (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa), telefone único (+351 933 497 858), email único (contacto@destaque.ai) repetidos de forma idêntica em `Organization`, `llms.txt` e página de contacto declarada no sitemap. Não verificado contra directórios externos (Google Business, registos comerciais) nesta execução.
- **Presença local (Google Business Profile, Bing Places, Apple Maps, pai.pt):** não verificado. Nota: destaque.ai opera um modelo de consultoria remota B2B — presença local tem menor prioridade estratégica para a própria destaque.ai do que para os clientes locais que audita (clínicas, restauração), mas o endereço físico em Lisboa é usado como sinal de credibilidade local (relevante para prompts como LR1 "quem faz auditorias de GEO em Lisboa?") e beneficiaria de um Google Business Profile correspondente.
- **Desambiguação de marca:** "destaque.ai" e "Tuasunt, Lda." como nome legal — baixo risco de ambiguidade (nome de marca distintivo, não uma palavra genérica portuguesa comum a ponto de colidir).

---

## 10. Autoridade e digital PR

- **Cobertura Tier-1 PT:** pesquisa dirigida a Observador, ECO, Público, Expresso, Jornal de Negócios e Dinheiro Vivo não devolveu qualquer menção a "destaque.ai" ou "Eduardo Mendonça" associada a estas publicações. **Zero peças encontradas.** Expectável — empresa fundada em 2025, ainda sem histórico de imprensa a construir.
- **Cobertura de imprensa de indústria (Search Engine Land, SEJ, etc.):** não encontrada nesta pesquisa.
- **Conferências, podcasts, prémios:** não avaliado nesta execução.
- **Link graph / anchor text:** não avaliado — exigiria uma ferramenta de backlinks (Ahrefs/Semrush) à qual esta sessão não tem acesso.
- **Leitura:** esta é a categoria mais fraca do scorecard (20/100), e correctamente assim — é a que mais depende de tempo e histórico, não de trabalho técnico. Não se traduz em urgência inventada; traduz-se num horizonte de 7-12 semanas e 90+ dias (ver secção 15).

---

## 11. Sinais sociais e comunidade

- **LinkedIn:** página de empresa declarada (`linkedin.com/company/destaque-ai/`) e perfil pessoal do fundador (`linkedin.com/in/eduardo-mendonça84/`) presentes no schema. Actividade/conteúdo não verificável nesta execução (pesquisa web não devolveu snippets indexados).
- **GitHub:** ausente — coerente com o posicionamento (destaque.ai é consultoria/serviço, não uma ferramenta open-source ou developer-facing).
- **Reddit / Hacker News / Stack Overflow:** nenhuma presença encontrada na pesquisa realizada. Dado que o Reddit representa cerca de 47% das citações de topo do Perplexity (per `references/models.md` / benchmarks), esta é uma lacuna de canal com peso desproporcional face ao esforço que exigiria.
- **X (Twitter):** ausente de `sameAs` e não encontrado na pesquisa.

---

## 12. E-E-A-T e autoridade on-site

- **Autores nomeados:** o fundador, Eduardo Mendonça, tem schema `Person` dedicado (`@id: /#fundador`), com `jobTitle`, `description`, `knowsAbout` (GEO, SEO técnico, Local SEO, Google Business Profile optimization, AI Search Optimization, Schema.org) e `sameAs` a LinkedIn pessoal. Os posts de blog amostrados referenciam este `Person` como `author` via `BlogPosting.author`.
- **Bios com credenciais:** presente ao nível do schema (via `knowsAbout`); não avaliado se a página `/sobre` (não amostrada nesta execução) desenvolve isto com mais detalhe.
- **Case studies com resultados verificáveis:** nenhum encontrado nas páginas amostradas — coerente com uma empresa fundada há menos de um ano e sem preços publicados (o próprio FAQ da homepage assume um modelo de venda de alto contacto, pré-caso-de-estudo público).
- **Certificações, prémios:** não encontrados.
- **Leitura:** a fundação (autor nomeado, schema correcto, sameAs) está feita; falta a camada de prova social (casos, testemunhos, prémios) que naturalmente vem com o tempo.

---

## 13. Medição e feedback loop

**N/D nesta execução** — exigiria acesso às contas de Google Search Console, GA4, Bing Webmaster Tools e à instância própria do Visibility Tracker da destaque.ai, nenhuma acessível a partir desta sessão. Nota: foi confirmado (via `mcp__Supabase__list_projects`) que a base de dados Supabase ligada a esta sessão não inclui um projecto correspondente a `destaque-ai-tracker` — ou seja, os dados do Tracker (se existirem) não estão acessíveis a partir daqui. Se a destaque.ai quiser que execuções futuras deste Routine incluam dados reais do seu próprio Tracker (dogfooding), é preciso ligar explicitamente essa fonte de dados a este ambiente.

---

## 14. Posicionamento estratégico e inteligência competitiva

- **Conjunto de concorrentes nomeados:** não identificado nesta execução — nenhum concorrente foi nomeado nem pelo teste de Claude knowledge-mode (secção 7) nem pela pesquisa web dirigida.
- **Share-of-voice:** N/D (depende do Tracker/monitorização, secção 13).
- **Alinhamento pricing/pitch:** a destaque.ai opta deliberadamente por não publicar preços (FAQ própria) — coerente com um modelo de venda consultiva; isto é uma escolha estratégica documentada no site, não uma lacuna.
- **Estratégia "no-click":** o `llms.txt` e a estrutura de FAQ em várias páginas mostram intenção clara de optimizar para ser citado em resposta directa, não apenas clicado — alinhado com a própria metodologia que a empresa vende.
- **Protocolo de crise:** não accionado nesta execução — nenhuma menção negativa ou alucinada foi detectada (o teste de Claude knowledge-mode não produziu nem menções nem alucinações, positivas ou negativas).

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Passar `Content-Security-Policy` de Report-Only para enforced (a política já testada em report-only parece funcional — validar antes de activar) | TECH | 2h-1 dia | Eduardo |
| Confirmar manualmente que Wikidata Q140043087, LinkedIn, Crunchbase e Clutch estão populados e correctos | ENTITY | 30min-2h | Eduardo |
| Decidir: alargar `Organization.areaServed`/`availableLanguage` (Espanha/EN/ES/pt-BR) com conteúdo real, ou reduzir a declaração ao que o site cobre hoje (PT-PT/Portugal) | STRATEGIC | 2h (decisão) | Eduardo |
| Dar a este Routine acesso real a pelo menos um motor ao vivo (idealmente via API, não browser) para a próxima execução — hoje o teste central da metodologia (visibilidade multi-motor) não corre | GEO | 1 dia (infra) | Eduardo |

### Horizonte 2 (semana 3-6) — optimização do existente

- Retomar cadência de publicação (parada desde 06 jul 2026) — blog ou próximo estudo.
- Confirmar configuração de GSC, GA4 (canal IA) e BWT AI Performance — hoje não verificável de fora.
- Amostrar schema de `/servico`, `/sobre` e `/glossario` (não cobertos nesta execução por falha intermitente da ferramenta de fetch).
- Avaliar Google Business Profile para o endereço de Lisboa, dado o peso de prompts de recomendação local (ex.: LR1).

### Horizonte 3 (semana 7-12) — reforço estratégico

- Iniciar pipeline de digital PR para cobertura Tier-1 PT (Observador, ECO, Público, Expresso) — hoje em zero.
- Construir presença mínima em Reddit/HN — canal desproporcionadamente citado por Perplexity.
- Publicar primeiros case studies à medida que existam resultados de cliente verificáveis.

### Horizonte 4 (90+ dias)

- Considerar conteúdo multimodal (imagens/vídeo do produto Tracker, screenshots reais) com `ImageObject`/`VideoObject` — hoje zero superfície de citação de imagem.
- Presença em conferências/thought leadership.
- Reavaliar Wikipedia se a notabilidade justificar, à medida que a cobertura Tier-1 cresça.

---

## 16. Nota de encerramento

A base técnica, de schema e de conteúdo original da destaque.ai está, honestamente, mais avançada do que a de muitos dos clientes que audita — não há aqui remediação de pânico a vender. As duas lacunas reais são (a) prova externa (imprensa, social, casos) — que é função do tempo e não de trabalho técnico pendente, dado que a empresa tem menos de um ano — e (b) a incapacidade desta execução específica do Routine em correr o teste multi-motor que é o núcleo da metodologia SINAL, por limitação do ambiente de execução, não por decisão editorial. Nenhuma das 12 categorias justifica um score "Crítico"; a categoria mais fraca (Autoridade & digital PR, 20/100) é fraca por idade da empresa, não por negligência.
