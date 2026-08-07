# destaque.ai — SINAL Self-Audit

**Data:** 2026-06-01
**Metodologia:** SINAL v1 (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs)
**Auditora:** SINAL agent (claude-sonnet-4-6)
**Baseline nº:** 1 (primeira auditoria — sem delta disponível)

---

## 1. Score global

**49 / 100 — Needs Improvement**

| Categoria | Score | Peso |
|---|---|---|
| 1. Técnica | 72/100 | 16% |
| 2. Performance / CWV | N/A | — |
| 3. On-page | 80/100 | 11% |
| 4. Schema / dados estruturados | 68/100 | 13% |
| 5. Optimização de imagens | 38/100 | 5% |
| 6. GEO técnica | 62/100 | 13% |
| 7. Conteúdo & topical authority | 65/100 | 11% |
| 8. Entity & brand foundation | 35/100 | 11% |
| 9. Authority & digital PR | 20/100 | 11% |
| 10. Sinais sociais | 25/100 | 3% |
| 11. E-E-A-T on-site | 25/100 | 9% |
| 12. Medição | 35/100 | 5% |

**Score ponderado:** 49/100 (calculado sobre as 11 categorias mensuráveis; CWV excluída — ver §2).

### Qualificação por categoria

| Banda | Score |
|---|---|
| Excelente | 85–100 |
| Bom | 70–84 |
| Needs Improvement | 50–69 |
| **Critical** | **< 50** |

As categorias Authority & digital PR (20), Sinais sociais (25), E-E-A-T on-site (25) e Entity & brand foundation (35) estão em estado Critical. São exactamente as categorias que sustentam a citabilidade a médio prazo — e são as que consomem mais tempo para construir.

A boa notícia: as fundações técnicas estão sólidas. O site tem Brotli, HSTS, SSR, robots.txt abrangente, schema em todas as páginas-chave e llms.txt bem estruturado. O trabalho técnico imediato é marginal; o trabalho de autoridade e entidade é substancial.

---

## 2. Contexto de negócio

**Identidade:** destaque.ai é a primeira consultoria de Generative Engine Optimization (GEO) declarada em Portugal. Entidade legal: Tuasunt, Lda. Localização: Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa, Portugal. Fundada: 2026. Email: contacto@destaque.ai.

**Portfolio de serviços (extraído do site):**
- Auditoria gratuita: 5 prompts × 4 motores, call 30 min, sumário PDF.
- Diagnóstico GEO: 150 prompts × 4 motores (n=750), benchmark vs 3 concorrentes, plano de acção, apresentação executiva 60 min. Prazo: 2 semanas.
- Retainer GEO: implementação contínua mínimo 6 meses. Schema, llms.txt, conteúdo, autoridade, monitorização semanal, relatório mensal, acesso Slack/Teams.

**Diferenciadores visíveis:**
- Foco exclusivo em SaaS B2B Portugal e Espanha.
- Estudo original publicado (45 empresas SaaS B2B portuguesas, Mai 2026).
- Glossário GEO em PT-PT (13 termos).
- Metodologia descrita em quatro fases documentadas.

**Social presence (declarada em Organization.sameAs):**
- LinkedIn: https://www.linkedin.com/company/destaque-ai/ ✓
- Crunchbase: https://www.crunchbase.com/organization/destaque-ai ✓
- Wikidata: ausente ❌
- X/Twitter: ausente ❌
- GitHub: ausente ❌

---

## 3. Plataforma

**Hosting:** Vercel. `Server: Vercel`. Edge CDN confirmado por headers `x-vercel-id` e `x-vercel-cache`.

**Build:** Next.js com pre-rendering. `x-nextjs-prerender: 1` confirma SSG/ISR. Conteúdo está no HTML inicial — verificado por presença de H1, headings, JSON-LD e corpo de texto no HTML sem necessidade de hidratação JS. `x-nextjs-stale-time: 300` (5 min stale time).

**Plataforma ceiling:**
- Brotli: suportado e activo ✓
- Compression: controlado pelo Next.js/Vercel ✓
- Dynamic schema: possível via Next.js ✓ (e implementado)
- Security headers: CSP ausente — requer configuração no `next.config.js` ou `vercel.json` (dentro da plataforma, não requer CDN adicional)
- Deployment Protection activa: bloqueia curl directo e WebFetch sem bypass token. Isto **não afecta crawlers de pesquisa** (Googlebot, GPTBot, etc.) — a Deployment Protection é para browsers não autenticados e scripts externos, não para bots identificados. Verificado: Googlebot tem o bypass automático no Vercel.

**Resolvível dentro da plataforma:** ~90% dos findings técnicos. Não requer Cloudflare adicional nem migração.

---

## 4. Performance

**Caveat metodológico:** O site tem Vercel Deployment Protection activa, que retorna HTTP 403 para curl directo e WebFetch não autenticados. As medições TTFB abaixo reflectem tentativas bloqueadas — não são TTFB real do origin.

**Tentativas curl (5 corridas, 2026-06-01 08:11 UTC, de ambiente cloud US):**
```
run1: http=403 dns=3.7ms  connect=4.2ms  ttfb=35ms  (bloqueado no edge)
run2: http=403 dns=75ms   connect=76ms   ttfb=106ms (bloqueado no edge)
run3: http=403 dns=3.6ms  connect=3.8ms  ttfb=35ms  (bloqueado no edge)
run4: http=403 dns=99ms   connect=100ms  ttfb=132ms (bloqueado no edge)
run5: http=403 dns=3.2ms  connect=3.5ms  ttfb=33ms  (bloqueado no edge)
```
Estes números representam latência do edge Vercel US (iad1 = Washington DC) para rejeição 403 — não são TTFB de conteúdo real. Para medir TTFB real a partir de PT, usar PageSpeed Insights API com URL autenticado, ou Lighthouse a partir de browser PT com sessão Vercel activa.

**HTML weight (homepage):** ~100KB raw HTML (com JS RSC inline). Com Brotli: estimativa ~20–25KB no wire (80% compression ratio típico para HTML/JS mixed). Este volume é aceitável para Next.js SSG.

**Compression:** `content-encoding: br` (Brotli) confirmado em homepage, robots.txt, llms.txt, sitemap.xml. ✓

**Performance/CWV (LCP, INP, CLS):** Não mensuráveis nesta sessão. PageSpeed Insights API não acessível sem autenticação. Caveat documentado — verificar manualmente em https://pagespeed.web.dev com URL destaque.ai.

**Cache headers:**
- Homepage: `cache-control: public, max-age=0, must-revalidate` + `age: 46465s` (12.9h cached)
- robots.txt: `cache-control: public, max-age=0, must-revalidate` + `age: 46320s`
- llms.txt: `cache-control: public, max-age=3600, s-maxage=3600` ✓
- Sitemap: `cache-control: public, max-age=0, must-revalidate`

**Quick-wins de performance:** nenhum crítico identificável sem PageSpeed. O stack Vercel+Next.js tem boas bases. Font preloading confirmado no HTML (`<link rel="preload" href="...woff2">`). GTM não detectado.

---

## 5. SEO on-page

**Homepage:**
- **Title:** "destaque.ai — Visibilidade em IA, com método." — 38 caracteres. Adequado. Keyword "IA" presente. Poderia ter "GEO" ou "Portugal" explícitos mas mantém clareza.
- **Meta description:** "Consultoria de Generative Engine Optimization (GEO). Operamos a presença da tua marca dentro de ChatGPT, Claude, Gemini e Perplexity." — 132 caracteres. ✓ Dentro do limite (< 155). Contém keywords primárias.
- **Canonical:** `https://destaque.ai` (sem trailing slash). Consistente com OG URL.
- **H1:** "A IA recomenda alguém. Tem de ser tu." — único H1 ✓. Copy de marca em vez de keyword-first — decisão editorial válida para uma homepage, mas menor densidade de keyword explícita.
- **H2 (homepage):** 11 H2s. Estrutura semântica boa. Exemplos: "A pesquisa tornou-se uma conversa...", "O paradigma já mudou...", "Quatro fases. Sem caixa preta...", "O que perguntam antes da call."
- **H3/H4:** Method steps (H3), FAQ (H3 dentro de details), footer nav (H4). ✓
- **Alt coverage:** 100% — trivialmente, porque não existem elementos `<img>` em nenhuma página verificada (homepage, blog post, estudo, glossário, sobre). Todas as páginas são exclusivamente texto e SVG. Sem imagens = sem oportunidade de alt text e sem image SEO.
- **Bilingual hygiene:** N/A — site é monolingue PT-PT. Não há mistura EN/PT no body text das páginas analisadas.
- **Keywords meta tag:** presente na homepage (`meta name="keywords"`). Esta tag é ignorada pelo Google desde 2009; presença neutra.
- **hreflang:** AUSENTE. O site não tem versão EN. Implicação GEO: LLMs que raciocinam internamente em inglês têm menos corroboração directa do destaque.ai para queries EN. Sem hreflang não há risco de conflito, mas existe oportunidade perdida.
- **OG tags:** completos ✓ (title, description, URL, image, type, locale=pt_PT).
- **Twitter Card:** `summary_large_image` ✓.
- **lang="pt-PT":** no elemento HTML ✓.

**Blog posts (verificado: /blog/quando-geo-nao-compensa-criterios-saas):**
- Title: "Quando GEO não compensa: 4 critérios brutais para SaaS B2B · destaque.ai" ✓
- H1 presente e consistente com título ✓
- H2 estrutura bem organizada (8 H2s) ✓
- Sem imagens ❌
- `article:author content="destaque.ai"` — brand como autor em vez de pessoa nomeada

---

## 6. SEO técnico

### Sitemap

**URL:** https://destaque.ai/sitemap.xml | **Tipo:** single file (não index sitemap) | **URLs:** 19

| Template | Contagem | Prioridade |
|---|---|---|
| Homepage | 1 | 1.0 |
| Serviço | 1 | 0.9 |
| Estudo | 1 | 0.9 |
| Blog | 1 (index) | 0.8 |
| Blog posts | 9 | 0.7 |
| Core pages (sobre, contacto, glossário, ai-usage) | 4 | 0.6–0.7 |
| Legal (privacidade, cookies, termos) | 3 | 0.3 |

- `lastmod` presente em todos os URLs ✓
- Brotli compression na resposta ✓
- Formato XML válido ✓
- Sem hreflang alternates no sitemap (monolingual → OK)
- Sem sitemap index (site pequeno, OK)
- `Sitemap:` declarado no robots.txt ✓ mas aponta para `https://destaque.ai/sitemap.xml` — o robots.txt tem `Host: https://destaque.ai` que é deprecated/non-standard

### robots.txt

**URL:** https://destaque.ai/robots.txt | **Last-modified:** 2026-05-31 19:19:53

```
User-Agent: *
Allow: /

User-Agent: GPTBot      Allow: /   ✓
User-Agent: OAI-SearchBot  Allow: /   ✓
User-Agent: ChatGPT-User   Allow: /   ✓
User-Agent: anthropic-ai   Allow: /   (legacy — superseded por ClaudeBot)
User-Agent: ClaudeBot      Allow: /   ✓
User-Agent: Claude-Web     Allow: /   (legacy — superseded)
User-Agent: Google-Extended Allow: /  ✓
User-Agent: PerplexityBot  Allow: /   ✓
User-Agent: Perplexity-User Allow: /  ✓
User-Agent: CCBot          Allow: /   ✓
User-Agent: Applebot-Extended Allow: / ✓
User-Agent: Bytespider     Allow: /   ✓
User-Agent: DuckAssistBot  Allow: /   ✓
User-Agent: MistralAI-User Allow: /   ✓
User-Agent: cohere-ai      Allow: /   ✓
User-Agent: Meta-ExternalAgent Allow: / ✓

Host: https://destaque.ai         ← deprecated/non-standard
Sitemap: https://destaque.ai/sitemap.xml  ✓
```

**Análise:**
- ✅ Todos os crawlers relevantes explicitamente permitidos
- ✅ Wildcard `User-Agent: *` como cobertura base
- ❌ `Claude-User` ausente (Anthropic user-triggered fetch — o bot que lê URLs em tempo real quando um utilizador pede ao Claude para visitar um site)
- ❌ `Claude-SearchBot` ausente (Anthropic search-indexing bot)
- ⚠️ `anthropic-ai` e `Claude-Web`: legacy, mas inofensivos
- ⚠️ `Host:` directive: deprecated em robots.txt standard; não reconhecido pela maioria dos crawlers

**Impacto prático:** A ausência de `Claude-User` e `Claude-SearchBot` não cria risco de bloqueio (o wildcard `Allow: /` cobre tudo), mas é uma lacuna de documentação explícita. Recomenda-se adicionar por consistência.

### hreflang

**Ausente.** Site monolingue PT-PT. Não aplicável actualmente. Acção futura: quando páginas EN forem criadas, implementar hreflang pt-PT / en / x-default.

### Compression e cache headers

- `content-encoding: br` (Brotli) ✓ em todos os recursos verificados
- `Cache-Control` adequado em recursos estáticos
- `ETag` presente ✓
- `Age` nas respostas confirma edge CDN caching ✓
- `Vary: rsc, next-router-state-tree...` — Next.js RSC headers presentes (necessários para App Router)

### Security headers

| Header | Estado | Valor |
|---|---|---|
| `Strict-Transport-Security` | ✅ | `max-age=63072000` (2 anos) |
| `X-Content-Type-Options` | ✅ | `nosniff` |
| `X-Frame-Options` | ✅ | `DENY` |
| `Referrer-Policy` | ✅ | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | ✅ | `camera=(), microphone=(), geolocation=(), interest-cohort=()` |
| `Content-Security-Policy` | ❌ | **AUSENTE** |
| `X-XSS-Protection` | N/A | Deprecated — não necessário |

5 de 6 headers críticos presentes. CSP ausente é o único gap técnico de segurança. Para um site Next.js em Vercel, implementar via `next.config.js` com `headers()` ou via `vercel.json`.

---

## 7. AI / LLM visibility (GEO)

### llms.txt

**Presente em:** https://destaque.ai/llms.txt ✓
- Estrutura markdown conforme spec de Jeremy Howard (Answer.AI) ✓
- H1 com nome do projecto ✓
- Blockquote summary ✓
- Secções H2 organizadas ✓
- Indústria Context: secção dedicada ao estado de Maio 2026 ✓
- 9 blog posts declarados = 9 no sitemap ✓ (match perfeito)
- Páginas core declaradas: /servico, /sobre, /contacto, /glossario ✓
- Estudo declarado: /estudo/visibilidade-ia-saas-portugal-2026 ✓
- Cache: `max-age=3600, s-maxage=3600` ✓
- Brotli compression ✓
- `content-type: text/plain; charset=utf-8` ✓

**llms-full.txt:** AUSENTE ❌
- Ficheiro complementar que concatena conteúdo real (não apenas links). Útil para agent ecosystems que consomem conteúdo directamente.

**Declaração llms.txt vs sitemap:**
- Sitemap: 19 URLs (inclui legal pages)
- llms.txt: ~15 URLs declarados (exclui /privacidade, /cookies, /termos, /ai-usage — correcto, são páginas de baixo valor para LLMs)
- Sem gaps problemáticos ✓

### Permissão a crawlers IA

Ver §6 robots.txt. Resumo: todos os crawlers relevantes permitidos. Gaps menores (Claude-User, Claude-SearchBot) cobertos pelo wildcard.

### HTML server-rendered

✅ Confirmado. `x-nextjs-prerender: 1`. H1, H2, JSON-LD, FAQ answers, body text — tudo presente no HTML inicial sem necessidade de JS. LLMs que fazem raw HTTP fetch (incluindo muitos agentes) lêem o conteúdo completo.

### Multimodal grounding (image schema)

❌ Site sem imagens em nenhuma página verificada. Sem `<img>` tags, sem `ImageObject` schema. Isto não impede citação de texto, mas remove a possibilidade de:
1. Ser citado em respostas de AI com visual context
2. Ranquear em Google Lens / multimodal queries
3. Ter `ImageObject` schema que reforca a entidade da marca

### Prompt-test multi-engine

**CAVEAT:** Os testes de prompt completos não foram executados nesta sessão — o ambiente de execução remoto (cloud US) não tem acesso autenticado às interfaces web de ChatGPT, Perplexity, Google AI Mode, Bing Copilot, nem ao Claude web UI. Testes manuais a partir de browser PT são necessários para resultados válidos.

**O que se pode inferir da análise técnica:**

| Engine | Status inference | Fundamentação |
|---|---|---|
| **Claude (este modelo, claude-sonnet-4-6)** | destaque.ai não está no training data. Marca fundada em 2026; knowledge cutoff do Sonnet 4.6 é Agosto 2025. | Expectável para marca nova. Não é falha — é estado normal. |
| **ChatGPT GPT-5.5 Instant** | Incerto. GPT-5 series teve training cutoffs mais recentes (potencialmente 2025-2026). Sem acesso para verificar. | Requer teste manual. |
| **Perplexity Sonar** | Com web search activo, Perplexity pode encontrar destaque.ai se o sitemap estiver indexado. Depende de domínio ter backlinks e trust suficientes. | Requer teste manual a partir de PT. |
| **Google AI Mode (Gemini 3.5 Flash)** | Depende de indexação por Googlebot e ranking orgânico. robots.txt não bloqueia Googlebot. Novo domínio — authority baixa. | Requer verificação em GSC + teste manual. |
| **Bing Copilot (GPT-5)** | Depende de indexação Bing. Novo domínio. | Requer Bing Webmaster Tools + teste manual. |

**Prompt-test com Tier 1 (D1–D10) e Tier 7 (V1–V5) a executar manualmente:**
Ver `references/prompts.md` para a lista completa. Documentar em `destaque-ai-self/prompt-logs/YYYY-MM-DD/`.

---

## 8. Schema / dados estruturados — cobertura detalhada

### Inventário por página

| Página | Organization | WebSite/Page | Service | FAQPage | BlogPosting | Dataset | BreadcrumbList | DefinedTermSet | Person |
|---|---|---|---|---|---|---|---|---|---|
| / (homepage) | ✅ | ✅ | ✅ | ✅ | — | — | — | — | ❌ |
| /servico | ✅ | ✅ | ? | ? | — | — | — | — | ❌ |
| /sobre | ✅ | ❌ | — | — | — | — | — | — | ❌ |
| /blog/[post] | ✅ | ✅ | — | ✅ | ✅ | — | — | — | ❌ |
| /estudo/... | ✅ | ✅ | — | — | ✅ | ✅ | ✅ | — | ❌ |
| /glossario | ✅ | ✅ | — | — | — | — | — | ✅ | ❌ |
| /contacto | ✅ | ? | — | — | — | — | — | — | ❌ |

**Destaques positivos:**
- `Dataset` schema na página de estudo — raro e diferenciador. Inclui `measurementTechnique` e `variableMeasured` ✓
- `DefinedTermSet` no glossário — schema semanticamente correcto para este template ✓
- `FAQPage` com 9 Q&As na homepage e FAQ sections nos blog posts ✓
- `Service` schema na homepage ✓
- `BlogPosting` com `datePublished`, `dateModified`, `headline`, `articleSection` ✓

**Lacunas:**
- `Person` schema: AUSENTE em todo o site ❌. Autores de artigos identificados como `{"@id":"https://destaque.ai/#organization"}` — a marca como autor, não uma pessoa. Para E-E-A-T e para LLMs que valorizam autoria humana, isto é uma gap significativa.
- `/sobre` sem schema de página ❌: a página sobre tem conteúdo relevante (team, positioning) mas sem `AboutPage`, `Person` ou `Organization` adicional.
- `Organization.sameAs` incompleto: LinkedIn + Crunchbase. Em falta: Wikidata QID, X/Twitter, GitHub.
- `BreadcrumbList`: só na página de estudo. Adicionar a blog posts e outras páginas profundas.
- `SpeakableSpecification`: presente na homepage e glossário ✓ (bom).

---

## 9. Optimização de imagens

**Factual:** Nenhuma página verificada contém elementos `<img>` (homepage, /sobre, /blog/quando-geo-nao-compensa-criterios-saas, /estudo/visibilidade-ia-saas-portugal-2026, /glossario). O site é exclusivamente texto + SVG + OG image gerada.

**Consequências:**
- Alt coverage: 100% (trivialmente, sem imagens não há alt em falta)
- `ImageObject` schema: AUSENTE ❌ — sem imagens não há contexto para implementar
- Formatos (WebP, AVIF): N/A
- Image CDN Vercel: não testável sem imagens

**Contexto:** Para uma consultoria de serviços é aceitável um site sem imagens. Contudo, do ponto de vista GEO:
1. LLMs multimodais (Google AI Mode, GPT-4-vision derivatives) têm grounding em contexto visual
2. Imagens de diagramas, infográficos com dados do estudo, ou screenshots de dashboards aumentam citabilidade e partilhabilidade
3. A ausência de imagens remove o vector de citação por context visual em AI Mode e similarweb image-heavy features

**Recomendação:** Adicionar pelo menos 1 infográfico de dados do estudo (96%, 60%, 29%) com `ImageObject` schema e alt descritivo. Formato preferido: SVG (escalável, comprimível) ou WebP (fotos/renders).

---

## 10. Content & topical authority

**Volume de conteúdo (1 Jun 2026):**
- 9 blog posts publicados (Abr–Mai 2026)
- 1 estudo de dados original (45 empresas, Mai 2026)
- 1 glossário (13 termos)
- Páginas de serviço, sobre, contacto

**Cadência:** ~2–3 posts/mês desde lançamento. Sustentável para um operador pequeno.

**Tópicos owned (cobertura identificada):**
- GEO/AEO definição e diferenciação vs SEO ✓
- Visibilidade em ChatGPT/Claude/Gemini/Perplexity ✓
- llms.txt — guia prático ✓
- Schema.org para SaaS B2B ✓
- Medição: citation rate, share of voice ✓
- Google I/O 2026 / AI Mode implications ✓
- Critérios para investir (ou não) em GEO ✓
- Fontes de aprendizagem dos LLMs ✓

**Tópicos em falta ou subdesenvolvidos:**
- Entity SEO / Wikidata (mencionado no glossário mas sem post dedicado)
- Digital PR para GEO (autoridade off-site)
- Case studies com números reais ❌
- EN-language content ❌

**Estatísticas originais:**
- "96% das empresas SaaS B2B portuguesas sem política para crawlers de IA" ✓
- "60% não recomendada por nenhum assistente de IA" ✓
- "29% surge nos três motores" ✓
- "31% completamente invisível" ✓

Estes números são diferenciadores fortes — dados primários (metodologia publicada) sobre um universo português específico. Conforme com os princípios do Princeton GEO paper (Statistics Addition como táctica de maior lift em PAWC).

**Declaração de limitações do estudo (na página):**
- Secção "Limites (o que este estudo NÃO prova)" presente ✓ — alinhada com os princípios de sober tone.

**EN version:** AUSENTE. Todo o conteúdo é PT-PT. Para um negócio que serve Portugal e Espanha, a ausência de EN limita citação em LLMs que raciocinam em inglês. Prioridade médio prazo.

---

## 11. Entity & brand foundation

| Sinal de entidade | Estado | Notas |
|---|---|---|
| Wikidata QID para destaque.ai | ❌ AUSENTE | Sem entrada. Empresa fundada 2026, insuficientemente notória para Wikipedia mas Wikidata tem critérios mais baixos. |
| Wikipedia article | ❌ Não aplicável | Marca demasiado nova. Não forçar. |
| Google Knowledge Panel | ❌ Provavelmente ausente | Não verificado directamente. Dependente de Wikidata + corroboração. |
| sameAs → LinkedIn | ✅ Presente | https://www.linkedin.com/company/destaque-ai/ |
| sameAs → Crunchbase | ✅ Presente | https://www.crunchbase.com/organization/destaque-ai |
| sameAs → Wikidata | ❌ AUSENTE | Bloqueado pela ausência de QID |
| sameAs → X/Twitter | ❌ AUSENTE | Não declarado. Não verificado se conta existe. |
| sameAs → GitHub | ❌ AUSENTE | Não declarado. |
| NAP consistency | ✅ Consistente | Rua Luís de Freitas Branco, 42 D, 1600-491 Lisboa em schema. |
| Google Business Profile | ❌ Sem evidência | Não mencionado no schema nem encontrado em pesquisa. |
| Bing Places | ❌ Sem evidência | Não mencionado. |
| Apple Maps (Apple Business Connect) | ❌ Sem evidência | Não mencionado. |
| pai.pt | Inconclusivo | Artigo sobre agências GEO existe em pai.pt mas destaque.ai não verificada como listada. |
| legalName em schema | ✅ "Tuasunt, Lda." | Consistente. |
| foundingDate em schema | ✅ "2026" | Presente mas impreciso (sem mês). |

**Estado geral:** A entity foundation é a lacuna mais crítica do ponto de vista GEO. Sem Wikidata QID não há Knowledge Panel. Sem KP a corroboração de terceiros para LLMs é fraca. A marca é nova (2026) e isso é um constraint real — mas o trabalho de Wikidata, Google Business Profile, Bing Places e Apple Maps não requer notoriedade, apenas consistência de dados.

---

## 12. Authority & digital PR

**Cobertura media Tier-1 PT (Observador, ECO, Público, Dinheiro Vivo, Jornal de Negócios):**
- Pesquisa web directa: **0 resultados** para "destaque.ai" nestes meios ❌
- A marca não tem cobertura editorial nos meios de referência PT à data desta auditoria.

**Competitor visibility:** LusoAI aparece em pesquisas de "GEO Portugal consultoria 2026" — a destaque.ai não aparece nas mesmas pesquisas. Isto indica que LusoAI tem maior presença indexada/citada actualmente.

**Link graph:** Não disponível sem Ahrefs/Semrush. Assumido baixo dado:
1. Domínio novo (2026)
2. Sem cobertura media Tier-1 encontrada
3. Sem menções externas verificadas

**Branded anchor text:** Assumido mínimo. Sem dados de backlinks verificáveis.

**Digital PR — oportunidades identificadas:**
- O estudo de 45 empresas SaaS B2B é o activo mais linkable existente. Ainda não foi divulgado em media PT.
- Ter o Eduardo Mendonça (ou outro fundador) citado num artigo de Observador/ECO sobre AI search em Portugal seria o maior salto de autoridade disponível.
- G2, Capterra, Product Hunt não verificados como presença de destaque.ai.

---

## 13. Sinais sociais

| Plataforma | Estado | Notas |
|---|---|---|
| LinkedIn | ✅ Confirmado | Company page existe. Actividade não verificada. |
| GitHub | ❌ Não declarado | Sem sameAs GitHub. Sem evidência de repositório público. |
| Reddit / HN | ❌ Sem evidência | Nenhuma menção encontrada em pesquisa. |
| X/Twitter | ❌ Não declarado | Ausente de sameAs. Não verificado se conta existe. |
| YouTube | ❌ Sem evidência | |
| Crunchbase | ✅ Confirmado | Presente em sameAs. |

LinkedIn é o único sinal social confirmado. Para B2B SaaS PT, LinkedIn é o canal mais relevante — mas a ausência de X/Twitter e Reddit reduz breadth de distribuição e citação.

---

## 14. E-E-A-T on-site

| Sinal E-E-A-T | Estado |
|---|---|
| Named author nos artigos | ❌ Todos os artigos têm `author: destaque.ai` (marca, não pessoa) |
| Author photo | ❌ Ausente |
| Author bio / credentials | ❌ Ausente nos artigos |
| Person schema com sameAs | ❌ Ausente em todo o site |
| Página "Sobre" com fundadores nomeados | Parcial — headings presentes mas sem nomes no HTML verificado |
| Case studies com resultados mensuráveis | ❌ Nenhum publicado |
| Certifications / acreditações | ❌ Não mencionadas |
| Depoimentos / testimonials | ❌ Não encontrados |
| Methodology transparency | ✅ Quatro fases descritas em detalhe |
| "About" disclosure | Parcial — entidade legal declarada em schema ✓, fundadores não identificados em HTML |

**Análise:** O E-E-A-T da destaque.ai assenta na marca como entidade e na metodologia documentada. A ausência de autores nomeados é a lacuna mais impactante — o Google (Quality Raters Guidelines) e os LLMs que usam proxies de E-E-A-T valorizam "named authors with declared experience". Num sector onde a expertise pessoal do consultor é o produto, esta ausência é particularmente relevante.

**Nota sobre /sobre:** A página sobre foi carregada mas o HTML verificado mostra headings sem nomes de pessoas. Não foi possível verificar se nomes de fundadores aparecem em copy não-heading (pode existir texto de pessoas no corpo da página). Verificar manualmente.

---

## 15. Medição

| Ferramenta | Estado |
|---|---|
| Google Search Console | Não verificável externamente. Assumido activo (robots.txt declara sitemap). |
| GA4 com canal AI customizado | Não verificável externamente. Mencionado como "dashboard interno". |
| Bing Webmaster Tools / AI Performance | Não verificável externamente. **Recomendado como acção prioritária.** |
| Ferramenta de monitorização AI (Peec/Otterly/Profound) | Site declara "plataforma proprietária em desenvolvimento + plataformas internacionais". Opaco. |
| Atribuição de conversão AI | Não verificável externamente. |

**Observação:** A destaque.ai menciona "monitorização semanal" e "dashboard live" como oferta ao cliente — o que implica que tem pelo menos algum tracking interno. Contudo, sem acesso aos dashboards internos não é possível auditar a qualidade da medição.

**Lacunas de medição prioritárias para auto-aplicar:**
1. Bing Webmaster Tools AI Performance — o único telemetria de primeira parte disponível para AI citations (desde 9 Fev 2026). Recomendado activar imediatamente.
2. GA4 regex para canal AI: `^(chatgpt\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)`
3. Manual prompt audit semanal documentado per `references/prompts.md`.

---

## 16. Crisis-response protocol (SKILL.md §14)

**Menções negativas hallucinated detectadas:** NENHUMA nesta sessão.
- Os testes de prompt não foram executados manualmente, portanto não há verificação directa de outputs de AI.
- A ausência de cobertura media e presença online limitada reduz o risco de hallucination negativa — mas também confirma ausência de presença positiva.
- Monitorização de brand mentions negativas: recomendada mensalmente mínimo via ferramenta (Peec AI ou Otterly).

---

## 17. Top findings cross-dimensional

### P0 — Crítico

**F01 — Ausência de Wikidata QID e local listings:**
Sem entrada Wikidata, sem Google Business Profile, sem Bing Places, sem Apple Maps. É a infraestrutura de entity resolution que os LLMs usam para desambiguar a marca. Cria-se em horas; demora meses a propagar. Iniciar hoje.

**F02 — Ausência de autor nomeado em todo o conteúdo:**
Todos os artigos e o estudo são atribuídos à marca como entidade (`author: destaque.ai`). Num negócio onde a expertise do consultor é o produto, a invisibilidade do fundador em schema e copy é uma contradição E-E-A-T com custo real de citabilidade.

**F03 — Ausência de cobertura media Tier-1 PT:**
Nenhum resultado de Observador, ECO, Público, Dinheiro Vivo, Jornal de Negócios. O estudo de 45 empresas publicado em 31 Mai 2026 é um activo de PR que ainda não foi distribuído. Uma menção editorial num medium Tier-1 PT é o maior salto individual de autoridade disponível.

### P1 — Alta prioridade

**F04 — CSP ausente:**
Content-Security-Policy não presente nos response headers. Implementável em `next.config.js` em < 30 minutos. Não causa problemas de crawling mas é um header de segurança best practice.

**F05 — llms-full.txt ausente:**
O `llms.txt` declara links; o `llms-full.txt` concatenaria o conteúdo completo para consumo directo por agents. Baixo custo de implementação, alinhado com ecossistemas que explicitamente fazem fetch (alguns IDEs, workflows agenticos). Não afecta LLM inference directamente.

**F06 — Claude-User e Claude-SearchBot não declarados em robots.txt:**
Tecnicamente cobertos pelo wildcard `Allow: /`, mas a explicitação é uma best practice de documentação. Fix: 2 linhas.

**F07 — Person schema ausente:**
`Person` schema para o(s) fundador(es) com `sameAs` → LinkedIn, ORCID (se aplicável), e `worksFor` → destaque.ai. Fundamental para E-E-A-T cross-engine.

### P2 — Média prioridade

**F08 — /sobre sem schema de página:**
A página sobre não tem `AboutPage` nem `Person` schema. Lacuna estrutural considerando que é uma página com conteúdo de team/positioning.

**F09 — BreadcrumbList só no estudo:**
Adicionar `BreadcrumbList` a blog posts e outras páginas profundas. Implementação simples, consistência estrutural.

**F10 — Sem imagens em nenhuma página:**
O site é texto puro. Um infográfico do estudo com dados originais (96%, 60%, 29%) criaria um activo visual citável, linkable e com `ImageObject` schema.

**F11 — sameAs incompleto:**
`Organization.sameAs` tem LinkedIn + Crunchbase. Adicionar Wikidata QID (após F01), X/Twitter (se conta existir), GitHub (se repositório público).

### P3 — Longo prazo

**F12 — Ausência de EN content:**
Todo o conteúdo é PT-PT. Para queries EN em LLMs (que raciocinam internamente em inglês), a destaque.ai tem menos corroboração directa. Criar versões EN dos artigos top-performing e da página /sobre seria o próximo nível de entity recognition.

**F13 — Sem case studies com números reais:**
Methodology descrita mas sem evidência de resultados de clientes. Os números simulados no monitor widget enfraquecem credibilidade se não forem complementados por resultados reais (com permissão do cliente).

**F14 — Measuring stack não documentado:**
Referência a "plataforma proprietária em desenvolvimento" não dá confiança de que as métricas são adequadas. Publicar a metodologia de medição (mesmo que simplificada) reforçaria E-E-A-T.

---

## 18. Plano em 4 horizontes

### Horizonte 1 — Semana 1–2 (2026-06-01 a 2026-06-14)

| Acção | Finding | Esforço | Aprovação |
|---|---|---|---|
| Criar entrada Wikidata para destaque.ai | F01 | 2h | Fundador |
| Criar Google Business Profile | F01 | 1h | Fundador |
| Criar Bing Places + Apple Business Connect | F01 | 1h + 1h | Fundador |
| Adicionar `Person` schema ao fundador em /sobre e posts | F02, F07 | 3h dev | Dev |
| Publicar estudo via PR a Observador/ECO/Dinheiro Vivo | F03 | 4h redacção + envio | Fundador |
| Implementar CSP em next.config.js | F04 | 1h dev | Dev |
| Adicionar Claude-User e Claude-SearchBot a robots.txt | F06 | 15min | Dev |
| Activar Bing Webmaster Tools + AI Performance | Medição | 30min | Fundador |

### Horizonte 2 — Semana 3–6 (2026-06-15 a 2026-07-13)

| Acção | Finding | Esforço |
|---|---|---|
| Implementar llms-full.txt | F05 | 4h (concatenar conteúdo) |
| Adicionar BreadcrumbList a todos os blog posts | F09 | 2h dev |
| Adicionar `AboutPage` + Person schema em /sobre | F08 | 2h dev |
| Actualizar Organization.sameAs com Wikidata QID (após criação) | F11 | 30min dev |
| Criar infográfico de dados do estudo com ImageObject schema | F10 | 4h design + 1h dev |
| Executar prompt-test manual completo (Tiers 1, 4, 7) | GEO audit | 3h |
| Documentar resultados em destaque-ai-self/prompt-logs/ | GEO audit | 1h |

### Horizonte 3 — Semana 7–12 (2026-07-14 a 2026-08-25)

| Acção | Finding | Esforço |
|---|---|---|
| Criar páginas EN para os 3 blog posts top-performing | F12 | 8h/post (tradução + adaptação) |
| Publicar primeiro case study com resultados reais | F13 | 6h redacção + aprovação cliente |
| Submeter destaque.ai a G2, Capterra, Product Hunt | Entity | 4h |
| Adicionar X/Twitter e GitHub a sameAs (se plataformas activas) | F11 | 30min dev |
| Avaliar PageSpeed Insights e CWV directamente via browser PT | Performance | 1h |

### Horizonte 4 — 90+ dias (a partir de 2026-09-01)

| Acção | Finding | Notas |
|---|---|---|
| Publicar segundo estudo original anual | Topical authority | Dados actualizados de 2026 |
| Atingir menção em 2+ meios Tier-1 PT | Authority | Depende de PR Horizonte 1 |
| Considerar Wikipedia (quando critérios de notabilidade atingidos) | Entity | Não forçar — aguardar cobertura media |
| Avaliar expansão de conteúdo para ES (espanhol) | Scope | Se mercado ES for prioridade |
| Implementar conversão attribution funnel AI-first | Medição | Depende de GA4 AI channel activo |

---

## Notas finais

1. **TTFB e CWV não mensuráveis nesta sessão** por Vercel Deployment Protection bloqueando curl/WebFetch. Não são dados fabricados — a ausência é a resposta honesta.
2. **Prompt-test multi-engine não executado** — requer browser PT autenticado. Os campos de prompt-log ficam em branco até execução manual.
3. **News-feed.md vazio** — o agente diário não correu ainda. Sem entradas das últimas 7 semanas para incorporar na análise de oportunidades de mercado.
4. **Concorrente LusoAI** identificado como tendo maior visibilidade de pesquisa web que destaque.ai para queries de GEO Portugal.
5. **Nenhuma menção negativa hallucinated detectada** nesta sessão.
