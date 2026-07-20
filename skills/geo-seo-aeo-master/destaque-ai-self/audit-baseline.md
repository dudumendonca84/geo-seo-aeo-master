# destaque.ai self-audit baseline

**Data da auditoria:** 20 julho 2026, ~08:10-09:30 UTC. **Execução:** segunda corrida do Routine `destaque-ai-self-audit-weekly` (semana 2 — comparável com a baseline de 13 julho 2026, ver `audit-history.md`).
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

O acesso de rede continua restrito neste ambiente de execução: `curl` directo e `WebFetch` genérico a `destaque.ai` foram bloqueados novamente esta semana (confirmado via `curl -sS https://www.destaque.ai/` → `CONNECT tunnel failed, response 403`; log do proxy confirma `gateway answered 403 to CONNECT (policy denial or upstream failure)`). Os dados técnicos foram obtidos via `mcp__Vercel__web_fetch_vercel_url` (fetch real, server-side, através da própria Vercel) para 15 URLs: homepage, `robots.txt`, `sitemap.xml`, `llms.txt`, `/servico`, `/sobre`, `/glossario`, `/casos` e as 3 páginas de caso, `/en/about`, `/en/studies`, o novo estudo `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026` e o post de blog mais recente. Isto é dado real de produção, não simulação.

**Diferença notável face à semana passada — `WebSearch` devolveu resultados indexados reais.** Ao contrário de 13 julho (quando nenhuma pesquisa devolveu snippets indexados para o próprio domínio nem para os perfis `sameAs`), esta semana `WebSearch` encontrou páginas próprias da destaque.ai bem indexadas (estudos, blog, `/casos`) e — pela primeira vez — um panorama concreto de concorrência portuguesa em GEO/AEO. Isto permitiu testar a destaque.ai em **modo augmented** (Claude com pesquisa web activa) além do modo knowledge, e mapear pela primeira vez quem aparece em resultados reais quando se pergunta por consultoria de GEO em Portugal. Não foi possível confirmar se esta melhoria reflecte indexação genuinamente mais profunda do domínio ou apenas variância do motor de pesquisa entre sessões — tratar como um ponto de dados, não uma tendência confirmada.

**O que não foi possível verificar nesta execução, e porquê — sem inventar números:**
- **TTFB por curl de PT** (5 corridas) — rede do sandbox continua a bloquear `curl` de saída para `destaque.ai`. Não fabricado.
- **PageSpeed Insights (LCP/INP/CLS)** — `googleapis.com/pagespeedonline` devolveu novamente **HTTP 429 (quota diária excedida)** no momento do pedido (20 jul 2026, ~08:15 UTC). Mesma falha estrutural da semana passada — não fabricado.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot** — este ambiente continua sem sessão de browser autenticada nem integração de API a estes produtos de consumidor. **Gap operacional que persiste pela segunda semana consecutiva** — ver Horizonte 1 e nota de continuidade abaixo.
- **Claude — modo knowledge e, pela primeira vez, modo augmented testados de facto.** Esta sessão é Claude Sonnet 5 (modelo default claude.ai desde 30 jun 2026, confirmado ainda válido per `references/models.md`, refresh de 17 jul 2026, 3 dias — dentro da janela de 7 dias, sem necessidade de refresh adicional). Foram usados 7 sub-agentes Claude Sonnet 5 frescos sem contexto prévio: 3 em modo knowledge (sem ferramentas) cobrindo os 21 prompts mandatórios, 3 em modo augmented (com `WebSearch` obrigatório) cobrindo os mesmos 21, e 1 em modo knowledge cobrindo os 10 prompts rotativos da semana. **Desvio de metodologia assumido**: em vez de 1 sub-agente por prompt (como na semana passada, praticável só para 4 prompts), agruparam-se 7 prompts independentes por chamada de sub-agente, com instrução explícita de tratar cada pergunta como uma conversa nova e não tentar ser "consistente" entre respostas. Isto reduziu o número de chamadas de 31 para 7, mas introduz um risco residual de contaminação entre respostas dentro do mesmo lote que o isolamento total da semana passada não tinha — não observado nas respostas obtidas (nenhum padrão de nomes repetidos de forma suspeita entre prompts do mesmo lote), mas sinalizado por rigor.
- **Wikidata Q140043087, LinkedIn `company/destaque-ai`, Crunchbase, Clutch** — `WebSearch` dirigido a cada uma destas URLs continua a não devolver snippets indexados. Mesma lacuna da semana passada, não resolvida, não assumida como falha do perfil em si (pode ser sub-indexação do motor de pesquisa para páginas de plataformas de terceiros).
- **Google Knowledge Panel, GSC, GA4 canal IA, Bing Webmaster Tools AI Performance, Visibility Tracker próprio** — confirmado novamente via `mcp__Supabase__list_projects` que o único projecto Supabase acessível a esta sessão é "Deck Builder Platform Project"; continua sem existir um projecto `destaque-ai-tracker` ligado a este ambiente. Sem alteração face à semana passada.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar, está marcado **N/D** — não convertido em pontuação negativa nem positiva.

---

## 1. Sumário executivo

**Score global: 71/100 — Bom, com lacunas de verificação que persistem.** Calculado como média das 10 categorias com evidência directa (2 de 12 — Performance/CWV e parte de Medição — continuam N/D). +3 pontos vs. 68/100 da baseline de 13 julho — ver `audit-history.md` para o detalhe categoria a categoria.

### Scorecard — 12 categorias

| # | Categoria | Score | Δ vs. 13 jul | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 87/100 | +2 | `hreflang` correctamente implementado onde já existe conteúdo EN; CSP continua só em Report-Only |
| 2 | Performance / CWV | N/D | — | PSI rate-limited (429) segunda semana consecutiva; sem curl de saída |
| 3 | SEO On-Page | 92/100 | +2 | Meta description da homepage reescrita (331→167 caracteres, mais alinhada a SERP clássico) |
| 4 | Schema / dados estruturados | 94/100 | +2 | 7 novos tipos confirmados: `DefinedTermSet`, `CollectionPage`, `ItemList`, `ItemPage`, `Article`, `AboutPage`, `HowTo` |
| 5 | Optimização de imagens | 55/100 | 0 | Zero imagens continua, mesmo em 3 casos de estudo novos e num estudo com 2.205 respostas — gap estagnado |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 87/100 | −1 | `llms.txt` ainda não referencia as novas páginas `/en/`; mas teste real expandiu de 4 para 62 pares prompt×modo |
| 7 | Conteúdo & topical authority | 91/100 | +6 | Hiato de publicação da semana passada resolveu-se: 6 posts novos, 2 estudos novos com dados originais |
| 8 | Entidade / brand foundation | 77/100 | −1 | `sameAs` inalterado, continua não verificável externamente; sem progresso visível |
| 9 | Autoridade & digital PR | 20/100 | 0 | Zero cobertura Tier-1 PT confirmada de novo; nota: maioria dos concorrentes PT recém-identificados também não mostra imprensa Tier-1 |
| 10 | Sinais sociais & community | 35/100 | 0 | Sem dados novos — LinkedIn continua não indexado, sem X/GitHub/Reddit |
| 11 | E-E-A-T & on-site authority | 68/100 | +13 | 3 casos de estudo publicados (`/casos`) — resolve a lacuna específica da semana passada, com caveat de schema |
| 12 | Medição & feedback loop | N/D | — | Confirmado de novo: sem projecto `destaque-ai-tracker` acessível a esta sessão |

### Top 4 findings (cross-dimensional)

1. **O teste multi-motor, agora executado a sério pela primeira vez, mostra um padrão claro: a destaque.ai é citada quando a pergunta é específica, ausente quando a pergunta é genérica.** Em modo augmented (Claude com pesquisa web), a destaque.ai foi citada com URL em 3 dos 21 prompts mandatórios — todos prompts de nicho específico ("que empresa recomendam para consultoria de visibilidade em IA em Portugal?", ambos os prompts vertical B2B SaaS) — e apareceu como link não integrado num quarto. Nos restantes 17, incluindo todos os prompts de descoberta genérica tipo "qual é a melhor agência de GEO em Portugal?", não apareceu — e nesses lugares apareceram sistematicamente **Studio.351, Infinidata, AISO Hub, LPM, Marketing Gabriel, AP | Portugal e o já conhecido 3HASH**, este último activamente a publicar conteúdo GEO/AEO próprio esta semana (citado em duas respostas distintas). Em modo knowledge (sem pesquisa), 0 dos 31 prompts testados (21 mandatórios + 10 rotativos) mencionou a destaque.ai — e, tal como na semana passada, 0 produziu uma alucinação ou menção negativa a qualquer marca. Isto substitui a lacuna "não foi possível testar" da semana passada por um achado real e accionável: o problema não é (só) técnico, é **cobertura desigual no género de pergunta mais genérico e mais competido do funil**.
2. **O panorama competitivo em Portugal ampliou-se visivelmente numa semana — sem que a destaque.ai tenha, aparentemente, mudado nada na sua própria classificação de concorrentes.** `references/competitor_filtering.md` reconhece formalmente apenas 3HASH como par (`peer competitor`); esta auditoria encontrou, só nesta corrida, pelo menos 4 outros nomes portugueses (Studio.351, AISO Hub, Infinidata, LPM) a publicar páginas de serviço dedicadas a GEO/AEO e a aparecer em resultados de pesquisa reais para as mesmas queries de descoberta que a destaque.ai visa. Nenhum destes foi ainda passado pelo teste das quatro perguntas de `competitor_filtering.md` — recomenda-se fazê-lo antes da próxima execução, para não deixar o conjunto de pares desactualizado num mercado que está claramente a preencher-se.
3. **A lacuna de conteúdo apontada há uma semana resolveu-se por completo — e resolveu-se rápido.** O hiato de publicação desde 6 julho, sinalizado como "vale a pena acompanhar se se prolongar", não se prolongou: 6 posts de blog novos e 2 estudos originais novos (incluindo um com 84 marcas × 7 sectores × 7 motores × 2.205 respostas) foram publicados na semana seguinte. Ao mesmo tempo, os 3 primeiros casos de estudo do site (`/casos`) foram publicados, resolvendo directamente a lacuna de E-E-A-T "sem case studies públicos" da auditoria anterior. É a maior melhoria semana-a-semana do scorecard (categoria 11, +13 pontos), com uma reserva: os casos usam schema `Article`, não `Review`/`AggregateRating`, e esta auditoria não confirmou de forma independente se nomeiam clientes reais com resultados verificáveis — ver secção 12.
4. **A optimização de imagens é agora a lacuna mais evidente do scorecard, precisamente porque é a única que não se moveu apesar de tudo o resto se ter movido.** Mesmo com 3 casos de estudo novos e um estudo quantitativo denso (2.205 respostas, o tipo de conteúdo que normalmente pede um gráfico), o site continua com **zero imagens em todo o domínio** — confirmado de novo nas 13 páginas amostradas. Isto já não é apenas "ausência de activo"; é uma prioridade que ficou de fora de dois ciclos de publicação consecutivos apesar da oportunidade óbvia.

### O que já está forte

A base técnica e de schema, já sólida há uma semana, ficou mais rica: sete tipos JSON-LD novos confirmados (`DefinedTermSet` no glossário, `CollectionPage` e `ItemList` no `/servico`, `ItemPage`+`Article` nos casos e no novo estudo, `AboutPage` no `/sobre` e `/en/about`, `HowTo` no post mais recente), todos servidos em HTML pré-renderizado e confirmados directamente, página a página, não inferidos. A cadência editorial voltou com força a seguir ao hiato assinalado a semana passada, e os primeiros três casos de estudo do site — a lacuna de prova social mais citada na auditoria anterior — já estão publicados. E, pela primeira vez, há dado real (não hipotético) de que o conteúdo da destaque.ai é encontrado e citado por um motor de IA com pesquisa activa quando a pergunta é suficientemente específica — a tese central do negócio (conteúdo estruturado e citável ganha citação) tem agora uma primeira confirmação empírica própria, ainda que pequena (3 de 21 prompts) e limitada a um único motor.

---

## 2. Contexto de negócio

- **Identidade:** destaque.ai (nome legal `Tuasunt, Lda.`), consultoria de Generative Engine Optimization (GEO) sediada em Lisboa (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa), fundada em 2025. Fundador: Eduardo Mendonça. Sem alteração face à semana passada.
- **Línguas servidas:** o site deixou de ser estritamente monolingue esta semana — `/en/about` e `/en/studies` (com 3 estudos traduzidos) estão publicados, ambos com `hreflang` correctamente implementado (`en` / `pt-PT` / `x-default`). Isto é ainda uma camada fina: 2 páginas + 3 estudos traduzidos, não paridade de site. `Organization.areaServed` continua a incluir Espanha e Europa, e `contactPoint.availableLanguage` continua a incluir `es` e `pt-BR` — línguas/mercados sem qualquer conteúdo correspondente ainda (ver finding 4, secção 1, e item STRATEGIC em `improvements-backlog.md`, agora em progresso, não resolvido).
- **Plataforma:** Next.js, alojado na Vercel (`server: Vercel`, projecto `destaque-ai`). Sem alteração.
- **Portfólio de serviços** (extraído de `/servico`, confirmado esta semana com schema completo): Auditoria gratuita GEO, Diagnóstico GEO, Avença Visibilidade GEO, Avença Autoridade GEO — quatro serviços nomeados via `Service` em `@graph`, cada um com `FAQPage` associado. Produto próprio Visibility Tracker (`/tracker`) mantém-se, não verificável em detalhe nesta sessão (sem acesso à sua base de dados — ver secção 13).
- **Novidade da semana: `/casos`.** Três casos de estudo publicados — SaaS de facturação B2B, clínica dentária multilocal, energia solar residencial — cobrindo tanto o eixo B2B SaaS como o eixo de negócio local que a destaque.ai também serve. Conteúdo textual extenso (6.700-7.400 caracteres cada), mas não verificado nesta sessão se nomeia clientes reais e resultados auditáveis, ou se é composto de forma anonimizada/ilustrativa — distinção que importa para a força do sinal de E-E-A-T (ver secção 12).
- **Presença social declarada em `Organization.sameAs`:** inalterada — LinkedIn (empresa), Crunchbase, Clutch, Wikidata (`Q140043087`). Ausente: X/Twitter, GitHub.

---

## 3. Análise de plataforma

Sem alterações materiais face à semana passada. Hosting Vercel (`server: Vercel`, região de origem `iad1`), Next.js com pré-renderização confirmada em todas as 13 páginas amostradas esta semana (`x-nextjs-prerender: 1` onde aplicável, conteúdo completo presente no HTML inicial em todos os casos — verificado por extracção de texto visível, entre ~2.200 e ~10.400 caracteres por página). Nenhum tecto de plataforma a bloquear qualquer achado desta auditoria. `mcp__Vercel__get_runtime_errors` não encontrou nenhum erro de produção nos últimos 7 dias. `mcp__Vercel__get_runtime_logs` (últimas 24h, agrupado por caminho) mostra tráfego real modesto e distribuído: `/tracker` (8), `/servico` (6), `/casos` (6), `/sobre` (6), picos pequenos noutras 20 páginas — consistente com um site em fase inicial, não um sinal de alarme.

---

## 4. Performance

**N/D nesta execução, segunda semana consecutiva.** `curl` de saída continua bloqueado pela política de rede do sandbox (confirmado: `CONNECT tunnel failed, response 403` a `www.destaque.ai:443` e `destaque.ai:443`, log do proxy mostra rejeição por política, não falha do destino). `googleapis.com/pagespeedonline/v5/runPagespeed` devolveu de novo **HTTP 429** ("Quota exceeded for quota metric 'Queries' and limit 'Queries per day'") às ~08:15 UTC de 20 jul 2026 — mesma assinatura de erro da semana passada, sugerindo que a quota diária partilhada deste ambiente está estruturalmente insuficiente para este passo do audit, não um azar pontual.

**Sinais indirectos reais, a partir dos headers HTTP obtidos via Vercel:** `content-encoding: br` em todas as 13 respostas amostradas; `x-vercel-cache: HIT` ou `PRERENDER` consistentemente; `cache-control: public, max-age=0, must-revalidate` nas páginas HTML, `s-maxage=3600` no `llms.txt`. Sem alteração face à semana passada.

**Recomendação recorrente:** dado que este é o segundo bloqueio consecutivo de PSI e de `curl`, vale a pena parar de tratar isto como falha pontual e ligar a este Routine acesso a `mcp__Vercel__get_runtime_logs`/analytics de campo (Web Vitals reportados por utilizadores reais), que não depende de saída de rede nem da quota do PSI.

---

## 5. SEO on-page

Amostra: homepage, `/servico`, `/sobre`, `/glossario`, `/casos` (+3 casos), `/en/about`, `/en/studies`, estudo novo, post de blog mais recente — 13 páginas no total.

- **Title da homepage:** "destaque.ai: Visibilidade em IA, com método." — inalterado face à semana passada.
- **Meta description da homepage — mudou.** Semana passada: 331 caracteres ("Primeira consultoria de Generative Engine Optimization..."). Esta semana: **"O ChatGPT é o novo boca a boca: as pessoas perguntam à IA quem contratar, o que comprar, onde ir. Construímos a tua presença nas respostas. Software e negócios locais."** — 167 caracteres, mais próximo do limite clássico de SERP (~155-160), tom mais directo. Não é possível confirmar se foi uma decisão editorial deliberada em resposta a esta auditoria ou uma iteração independente — a auditoria regista o facto, não a causa.
- **Heading hierarchy:** homepage mantém 1 H1 / 13 H2. Páginas novas amostradas têm hierarquia limpa: `/servico` 1×H1/5×H2, `/sobre` 1×H1/4×H2, `/glossario` 1×H1/13×H2, casos de estudo 1×H1/11×H2 cada, estudo novo 1×H1/11×H2, post de blog 1×H1/8×H2. Sem anomalias.
- **Cobertura de `alt`:** continua **0 `<img>` em todas as 13 páginas amostradas**, incluindo as 3 páginas de caso e o estudo novo — o único elemento gráfico encontrado em qualquer página é um `<svg>` inline (ícone flutuante do WhatsApp), repetido em todas. Ver categoria 5 do scorecard e finding 4.
- **Higiene bilingue:** agora aplicável a duas páginas + 3 estudos. `/en/about` e `/en/studies` confirmados como prosa inglesa genuína, escrita para o público, não uma tradução automática de aparência estranha nem um stub — mas o `llms.txt` ainda não referencia nenhuma destas páginas (ver secção 7). Nas páginas PT-PT sem equivalente EN (`/servico`, `/sobre`, `/glossario`, `/casos`, posts de blog), correctamente sem tags `hreflang` — não é uma falha, é ausência de necessidade.

---

## 6. SEO technical

- **`sitemap.xml`:** cresceu de 24 para **40 URLs** na última semana. `lastmod` mais recente 2026-07-17T14:20:24Z (páginas estruturais) e datas específicas de publicação nos posts/estudos. Novidades no breakdown: secção `/casos` (índice + 3), secção `/en/` (`/en/about`, `/en/studies` + 3 estudos traduzidos), página `/perguntas` (não amostrada em detalhe nesta execução — ver nota de gap abaixo), 2 estudos novos (`/estudo/gap-google-ia`, 06 jul; `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`, 13 jul), e 6 posts de blog novos (15, 14, 13, 11, 09 jul, mais os já existentes). Continua a não ser um ficheiro índice — 40 URLs não o justifica ainda.
- **`robots.txt`:** 701 bytes, inalterado byte a byte face à semana passada (mesmo `etag` de conteúdo, `last-modified: Sat, 18 Jul 2026`). **Correcção de contagem**: a auditoria de 13 julho registou "19 user-agents de IA"; a contagem directa desta semana (e, revendo o texto capturado então, também da semana passada) dá **18** agentes nomeados (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `anthropic-ai`, `ClaudeBot`, `Claude-Web`, `Claude-User`, `Claude-SearchBot`, `Google-Extended`, `PerplexityBot`, `Perplexity-User`, `CCBot`, `Applebot-Extended`, `Bytespider`, `DuckAssistBot`, `MistralAI-User`, `cohere-ai`, `Meta-ExternalAgent`) mais o wildcard `User-Agent: *`. Correcção de auditoria, não mudança de site — regista-se por rigor. Todos `Allow: /`, `Sitemap:` declarado.
- **`hreflang`:** presente e correcto em 3 dos 13 URLs amostrados esta semana (`/en/about`, `/en/studies`, e o novo estudo em PT com par EN) — ver secção 5. Ausente correctamente nas restantes 10, que não têm equivalente noutra língua.
- **JSON-LD schema — por template, actualizado:**
  - Bloco global (presente em todas as páginas): `Organization`, `Person` (fundador), `WebSite`.
  - Homepage: acrescenta `WebPage` (com `speakable`), `Service`, `FAQPage` (confirmado inalterado).
  - `/servico`: `CollectionPage`, `FAQPage`, `Service` ×4 (Auditoria gratuita GEO, Diagnóstico GEO, Avença Visibilidade GEO, Avença Autoridade GEO) via `@graph`, `ItemList`, `BreadcrumbList` — **novo, não amostrado na semana passada por falha de ferramenta**.
  - `/sobre`: `AboutPage`, `BreadcrumbList` — **novo**.
  - `/glossario`: `WebPage`, `DefinedTermSet`, `BreadcrumbList` — **novo tipo, não visto antes na auditoria**.
  - `/casos` (índice): `CollectionPage`, `BreadcrumbList` — **novo template**.
  - 3 páginas de caso individuais: `ItemPage`, `Article`, `BreadcrumbList` cada — **novo template**; nenhuma usa `Review`/`AggregateRating` ou um tipo de "case study" com resultado estruturado (ver secção 12).
  - `/en/about`: `AboutPage`, `BreadcrumbList` (espelha `/sobre`).
  - `/en/studies`: apenas `BreadcrumbList` adicional ao bloco global — sem `CollectionPage`/`ItemList` a tipar a listagem, ao contrário do padrão usado em `/servico`.
  - Estudo novo (`/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`): `ItemPage`, `Article`, `Dataset`, `BreadcrumbList` — mesmo padrão do estudo já conhecido da semana passada.
  - Post de blog mais recente: `ItemPage`, `BlogPosting`, `HowTo`, `FAQPage`, `BreadcrumbList` — **`HowTo` é tipo novo**, não presente nos posts amostrados anteriormente.
  - Continua ausente em toda a amostra: `ImageObject`/`VideoObject` (consistente com zero imagens).
- **Security headers:** inalterados face à semana passada em todas as páginas — HSTS (`max-age=63072000`, sem `includeSubDomains`/`preload`), `x-content-type-options: nosniff`, `x-frame-options: DENY`, `referrer-policy: strict-origin-when-cross-origin`, `permissions-policy` restritiva. **`content-security-policy-report-only` continua presente, `content-security-policy` enforced continua ausente** — mesmo item de backlog aberto há duas semanas.
- **Compressão e cache:** Brotli em todas as respostas, `etag` presente, `s-maxage=3600` no `llms.txt`. Sem alteração.

**Gap de amostragem desta execução:** `/perguntas` (nova no sitemap) não foi amostrada em detalhe — falha de criação de link partilhável na primeira tentativa não foi reforçada por retry dedicado a esta página específica. Recomenda-se confirmar na próxima execução.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`:** actualizado e mais substancial — passou de 11 para **17 posts de blog listados**, ganhou secções `Estudos` (agora 3, incluindo o novo de 13 jul) e **`Casos`** (nova secção, 3 casos listados, inexistente há uma semana). Mantém a declaração explícita de política de uso por IA. **Gap novo**: as páginas `/en/about` e `/en/studies*` — reais, publicadas, com `hreflang` correcto — **não estão referenciadas em `llms.txt`**, que continua estruturado apenas em torno do conteúdo PT-PT. Um LLM que dependa de `llms.txt` para descobrir o site (hipótese fraca, per `SKILL.md` anti-patterns, mas não nula) não saberia que existe uma secção em inglês.
- **URLs declaradas no `llms.txt` vs. `sitemap.xml`:** consistentes para o conteúdo PT-PT; a secção `/en/` é a única divergência (existe no sitemap, não no `llms.txt`).
- **Postura de robots para crawlers de IA:** inalterada, permissiva e completa (ver secção 6) — 18 agentes nomeados, todos `Allow: /`.
- **HTML server-renderizado:** confirmado nas 13 páginas amostradas esta semana, incluindo os 3 casos de estudo e o novo estudo — texto completo presente no HTML inicial, sem depender de hidratação JS.
- **Multimodal grounding:** **continua ausente**, agora com um caveat mais forte — o novo estudo (`/estudo/consistencia-visibilidade-ia-servicos-portugal-2026`, 84 marcas, 2.205 respostas) é exactamente o tipo de conteúdo denso em dados onde um gráfico teria valor de citação directo, e mesmo assim tem zero `ImageObject`. Ver finding 4 e categoria 5.
- **Teste multi-motor — o que mudou de facto esta semana:**

  | Motor | Modelo por defeito (per `references/models.md`, refresh 17 jul 2026) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.5 Instant (Free/Go) | **Não** — sem acesso de sessão/API, inalterado |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não** — idem |
  | Google AI Mode | Gemini 3.5 Flash | **Não** — idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Sim — modo knowledge E modo augmented, 31 prompts** |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não** — idem |

  **Claude Sonnet 5, modo knowledge (sem pesquisa web), 20 jul 2026 ~08:20-09:10 UTC** — 21 prompts mandatórios + 10 rotativos (31 no total), 7 sub-agentes frescos:
  - **0/31 mencionaram destaque.ai.**
  - **0/31 nomearam um concorrente real** para os prompts não-branded (as poucas menções que ocorreram foram a categorias de ferramenta genéricas — Profound, Peec AI, Otterly, Ahrefs Brand Radar, Semrush AI Toolkit — nunca a uma consultoria concorrente nomeada).
  - **0/31 produziram alucinação** — em todos os casos onde o modelo não tinha informação fiável, disse-o explicitamente em vez de inventar um nome. Padrão idêntico ao confirmado na semana passada, agora numa amostra 8× maior.
  - O único prompt branded testado esta semana (`DC1`, rotativo, "como se compara a destaque.ai com outras consultorias de GEO em Portugal?") recebeu uma recusa explícita e correcta de comparação por falta de informação verificada — nem positiva nem negativa, o comportamento desejável.

  **Claude Sonnet 5, modo augmented (pesquisa web activa, obrigatória por instrução), 20 jul 2026 ~08:20-09:10 UTC** — 21 prompts mandatórios, 6 sub-agentes frescos (3 lotes × 7):
  - **destaque.ai citada com URL em 3/21 prompts**: `GD5` ("que empresa recomendam para consultoria de visibilidade em IA em Portugal?" — citação proeminente, primeiro exemplo nomeado, com URL de um estudo e de um post), `V1` ("como funciona o GEO para uma SaaS B2B em Portugal?" — post próprio citado como fonte principal), `V2` ("como melhoro a visibilidade em IA de uma startup Series A em Portugal?" — estudo próprio citado nas 2 primeiras posições orgânicas).
  - **destaque.ai apareceu como link não sintetizado em 1/21** (`GD2` — o post próprio surgiu na lista de fontes da pesquisa mas não foi incorporado na resposta narrada ao utilizador).
  - **destaque.ai ausente em 17/21**, incluindo todos os prompts de descoberta genérica (`GD1`, `GD3`, `GD4`, `GD6`, `GD7`, `GD8`), todos os problem-stated (`GP1`-`GP6`) e 3 dos 5 vertical B2B SaaS (`LR1`, `LR2`, `V3`, `V4`, `V5`).
  - **Concorrentes nomeados com URL nestes 21 prompts** (lista consolidada, não deduplicada por classificação formal): Studio.351, Infinidata, AISO Hub, LPM, Marketing Gabriel, AP | Portugal, UniK SEO, VOLIOM, BigLearn, Basicamente Digital, Otimizador.AI, OUTMarketing, Rankfender, Distinct Agency, Amplitude, LusoAI, 3HASH (citado em 2 prompts distintos, com posts próprios de "Como Aparecer no ChatGPT" e "GEO e AEO"), Latigid (já classificado como não-par em `competitor_filtering.md`), e praticantes individuais (Helder Mesquita, Ricardo Sanfer/Vendemkt, Marco Gouveia, Rui Caterça). Nenhum destes nomes foi ainda passado pelo teste formal de 4 perguntas — ver finding 2 e `improvements-backlog.md`.
  - **Sentimento:** neutro a positivo em todos os casos onde a destaque.ai foi mencionada; nunca negativo. **Protocolo de crise (`SKILL.md` §14) não accionado** — sem menção negativa nem alucinada em nenhum dos 52 pares prompt×modo testados esta semana (31 knowledge + 21 augmented).

  **Multimodal prompt test:** não realizado esta semana — depende de engines com upload de imagem (Gemini, GPT-5 multimodal), nenhum acessível nesta sessão.

  **ChatGPT, Perplexity, Google AI Mode e Bing Copilot: não testados, segunda semana consecutiva.** Ver Horizonte 1 e `improvements-backlog.md`.

---

## 8. Conteúdo e autoridade temática

- **Tópicos cobertos:** os já conhecidos (GEO vs SEO/AEO, llms.txt, schema.org, crawlers de IA, citation rate/SoV) mais 6 tópicos novos publicados desde 06 jul: como auditar visibilidade de marca em IA (15 jul), GEO vs AEO — diferenças (14 jul), llms.txt vs robots.txt (11 jul), o que é entity authority (09 jul), como escolher uma consultora de GEO para SaaS B2B em Portugal (13 jul — **este post apareceu directamente como fonte citada em modo augmented para 2 dos 21 prompts testados, ver secção 7**), mais o estudo `gap-google-ia` (06 jul).
- **Estatísticas originais e dados próprios:** de dois para **três** activos fortes. Novo: `/estudo/consistencia-visibilidade-ia-servicos-portugal-2026` (13 jul) — 84 marcas, 7 sectores, **7 motores de IA**, 2.205 respostas — headline: "55% das marcas aparecem em, no máximo, um assistente de IA". Isto é uma amostra maior e com mais motores do que o estudo de maio (45 empresas, 4 motores). Confirma-se aplicação continuada do princípio Aggarwal et al. (Statistics Addition como maior lift de citação isolado) — e há agora prova directa (secção 7, `V1`/`V2`) de que pelo menos um desses activos está a ser encontrado e citado.
- **Cadência:** **resolvida.** 6 posts + 2 estudos publicados entre 06 e 17 julho — o hiato assinalado na auditoria anterior não se prolongou além de 3 dias úteis a partir da data dessa auditoria.
- **Distribuição:** sem alteração — ainda sem RSS/newsletter própria visível, distribuição não verificada em profundidade.
- **Gap analysis vs. concorrentes:** ainda não realizado formalmente, mas esta auditoria já produziu, como efeito colateral do teste multi-motor, uma primeira lista real de concorrentes e dos prompts onde ganham — ver secção 7 e finding 2. Recomenda-se ao Tracker formalizar isto.

---

## 9. Entidade e fundação de marca

Sem alteração material face à semana passada. `Organization.sameAs` confirmado inalterado nesta execução (mesmos 4 URLs: LinkedIn, Crunchbase, Clutch, Wikidata `Q140043087`); `WebSearch` dirigido a cada um continua sem devolver conteúdo indexado, pela segunda semana — não verificado, não assumido como falha. `knowsAbout` do `Organization` está mais extenso do que capturado na semana passada (26 termos, incluindo "Local SEO", "Google Business Profile optimization", "LocalBusiness schema" — sinal de intenção de cobrir a vertical local, ainda sem `/casos` ou conteúdo dedicado a NAP/GBP verificado). NAP inalterado. Presença local (GBP, Bing Places, Apple Maps, pai.pt) continua não verificada.

---

## 10. Autoridade e digital PR

`WebSearch` dirigido a Observador, ECO, Público, Expresso, Jornal de Negócios e Dinheiro Vivo não devolveu, de novo, qualquer menção a "destaque.ai" ou "Eduardo Mendonça". **Zero peças confirmadas, segunda semana consecutiva.** Nota nova desta semana: ao mapear o panorama competitivo em modo augmented (secção 7), nenhuma das fontes citadas para os concorrentes portugueses identificados era, também, imprensa Tier-1 PT — eram sobretudo páginas de serviço das próprias agências e listicles de terceiros (ex. `marketingdigital.com.pt`, `seoptimizers.pt`). Isto não resolve a lacuna da destaque.ai, mas sugere que a ausência de cobertura Tier-1 é uma característica do mercado GEO/AEO português nesta fase (2026), não uma desvantagem específica da destaque.ai face aos pares directos. Continua a não se traduzir em urgência inventada.

---

## 11. Sinais sociais e comunidade

Sem dados novos verificados nesta execução — mesmas lacunas da semana passada (LinkedIn não indexado, sem GitHub por posicionamento, sem Reddit/HN/X encontrado). Não amostrado de novo por falta de sinal novo, não por omissão.

---

## 12. E-E-A-T e autoridade on-site

**Mudança mais significativa da semana.** Os 3 casos de estudo publicados (`/casos/saas-facturacao-b2b`, `/casos/clinica-dentaria-multilocal`, `/casos/energia-solar-residencial`) resolvem directamente a lacuna "sem case studies públicos" da auditoria de 13 julho. Cada um tem 1 H1, 11 H2, texto extenso (6.700-7.400 caracteres), schema `ItemPage`+`Article`+`BreadcrumbList`.

**Caveat honesto, não capturado na primeira passagem desta semana:** os casos usam schema `Article` genérico, não `Review`/`AggregateRating` nem um tipo estruturado de resultado mensurável (ex. métricas antes/depois marcadas como dados, não só texto corrido). Esta auditoria **não confirmou de forma independente** se os 3 casos nomeiam clientes reais, verificáveis, com resultados auditáveis — distinção central para a força do sinal de E-E-A-T (um "caso" anonimizado ou ilustrativo vale menos do que um caso nomeado e verificável). Recomenda-se confirmação directa na próxima execução (ler o corpo dos 3 casos, não só o schema) antes de considerar esta categoria totalmente resolvida.

Autor nomeado (fundador, `Person` schema com `sameAs`) inalterado. Certificações/prémios continuam não encontrados.

---

## 13. Medição e feedback loop

**N/D nesta execução, confirmado de novo.** `mcp__Supabase__list_projects` devolveu apenas "Deck Builder Platform Project" (`eu-north-1`, criado 21 mai 2026) — nenhum projecto `destaque-ai-tracker` acessível a esta sessão, idêntico ao confirmado há uma semana. Sem acesso a GSC, GA4, Bing Webmaster Tools AI Performance. O item de backlog correspondente (MEASUREMENT) permanece TODO sem progresso visível há duas semanas.

---

## 14. Posicionamento estratégico e inteligência competitiva

- **Conjunto de concorrentes nomeados:** esta é a secção com a mudança mais substancial da semana. Modo knowledge continua a não nomear nenhum concorrente real (0/31, ver secção 7). Modo augmented, pela primeira vez, produziu uma lista real e extensa — ver secção 7 para o detalhe completo por prompt. O par formalmente reconhecido em `competitor_filtering.md` (3HASH) reapareceu activamente, com dois posts próprios sobre GEO/AEO citados em respostas distintas — sinal de que o concorrente de referência está a investir em conteúdo na mesma categoria. Pelo menos 4 nomes novos (Studio.351, AISO Hub, Infinidata, LPM) aparecem com posicionamento explícito de GEO/AEO e ainda não foram classificados formalmente.
- **Share-of-voice:** continua N/D (depende do Tracker, secção 13) — mas os dados desta semana dão, pela primeira vez, uma base qualitativa: em 21 prompts de descoberta/vertical testados em modo augmented, destaque.ai apareceu citada em 3, mencionada sem síntese em 1, ausente em 17. Não é uma métrica formal de SoV, mas é um primeiro ponto de referência real.
- **Alinhamento pricing/pitch:** inalterado — a destaque.ai continua a não publicar preços.
- **Estratégia "no-click":** inalterada, `llms.txt` e estrutura FAQ mantêm-se alinhados com a estratégia.
- **Protocolo de crise:** **não accionado** — nenhuma menção negativa ou alucinada em nenhum dos 52 pares prompt×modo testados esta semana (31 knowledge + 21 augmented), nem nos 4 prompts testados a semana passada.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Passar `Content-Security-Policy` de Report-Only para enforced | TECH | 2h-1 dia | Eduardo — item aberto há 2 semanas, sem progresso visível |
| Classificar os concorrentes novos identificados esta semana (Studio.351, AISO Hub, Infinidata, LPM) pelo teste de 4 perguntas de `competitor_filtering.md` e actualizar o conjunto de pares | STRATEGIC | 2-4h | Eduardo |
| Confirmar manualmente (fora desta sessão) se Wikidata Q140043087, LinkedIn, Crunchbase e Clutch estão populados e correctos — 2ª semana sem confirmação | ENTITY | 30min-2h | Eduardo |
| Ligar este Routine a pelo menos 1 dos 4 motores em falta (ChatGPT, Perplexity, Google AI Mode, Bing Copilot) — via API onde exista, ou ligar a base de dados do Visibility Tracker próprio | GEO | 1 dia (infra) | Eduardo — item aberto há 2 semanas, sem progresso visível |

### Horizonte 2 (semana 3-6) — optimização do existente

- Referenciar `/en/about` e `/en/studies*` em `llms.txt`.
- Confirmar directamente (leitura do corpo, não só schema) se os 3 casos de estudo nomeiam clientes reais e resultados verificáveis; adicionar schema `Review`/`AggregateRating` ou equivalente se aplicável.
- Adicionar pelo menos 1-2 imagens com `ImageObject` schema ao estudo mais recente (84 marcas, 2.205 respostas) — candidato óbvio para o primeiro activo multimodal do site.
- Amostrar `/perguntas` (não coberto nesta execução).
- Confirmar configuração de GSC, GA4 (canal IA) e BWT AI Performance.

### Horizonte 3 (semana 7-12) — reforço estratégico

- Decidir e executar: construir conteúdo real em `es`/`pt-BR`, ou reduzir a declaração `Organization.areaServed`/`availableLanguage` ao que o site cobre hoje — item em progresso parcial (EN arrancou), ainda sem decisão sobre ES/pt-BR.
- Iniciar pipeline de digital PR para cobertura Tier-1 PT — hoje em zero, e aparentemente também em zero para os concorrentes directos identificados esta semana (janela de oportunidade, não apenas lacuna).
- Construir presença mínima em Reddit/HN.
- Direccionar conteúdo/SEO especificamente para os padrões de pergunta genérica ("melhor agência GEO Portugal", "quem são os especialistas GEO Portugal") onde a destaque.ai perde hoje face a concorrentes menos especializados.

### Horizonte 4 (90+ dias)

- Conteúdo multimodal mais amplo (imagens/vídeo do produto Tracker) com `ImageObject`/`VideoObject`.
- Presença em conferências/thought leadership.
- Reavaliar Wikipedia se a notabilidade justificar.

---

## 16. Nota de encerramento

A segunda execução deste Routine confirma o essencial da leitura da semana passada — a base técnica e de schema da destaque.ai continua mais avançada do que a maioria dos clientes que audita — e acrescenta um dado que a primeira execução não conseguiu obter: evidência real, ainda que limitada a um motor, de que essa base está a converter-se em citação real quando a pergunta é específica, e não quando é genérica. As duas lacunas identificadas há uma semana como estruturais (prova externa e incapacidade de testar o núcleo da metodologia) evoluíram de forma diferente: a prova externa avançou de forma concreta (casos de estudo publicados, cadência retomada), a capacidade de teste multi-motor avançou só parcialmente (Claude ficou muito mais robusto; os outros 4 motores mandatórios continuam a zero, agora há duas semanas seguidas). Nenhuma categoria justifica "Crítico"; a mais fraca continua a ser Autoridade & digital PR (20/100), por idade da empresa e por características do próprio mercado, não por negligência.
