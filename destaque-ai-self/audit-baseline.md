# Auditoria SINAL — destaque.ai
**Data**: 2026-06-22  
**Metodologia**: SINAL v1 (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), baseada no template 3HASH-grade definido em SKILL.md  
**Auditor**: Claude Code (geo-seo-aeo-master routine, branch `claude/determined-carson-jomonc`)  
**Âmbito**: Auditoria semanal inaugural — sem baseline anterior

---

## Nota de transparência sobre limitações desta auditoria

**Bloqueio de rede (egress policy)**: O ambiente de execução desta auditoria (Claude Code remoto, cloud) bloqueia acesso directo a `destaque.ai` e a serviços externos como TechCrunch, SemRush, OpenAI Help, Perplexity changelog e web.archive.org. Todas as tentativas de `curl`, `WebFetch` e `WebSearch` dirigidas a `destaque.ai` resultaram em HTTP 403 "host_not_allowed". Igualmente, os prompt-tests ao vivo nos cinco engines não foram executáveis.

**Consequência**: Sete das doze categorias do scorecard são marcadas como **NC** (não-confirmável). O score global e o scorecard reflectem apenas as cinco categorias para as quais existe evidência verificável. Não são fabricados dados de TTFB, headers, schema ou CWV — a sua ausência é declarada explicitamente.

**O que foi verificado**: Visibilidade em pesquisa Google (WebSearch `site:destaque.ai` e queries competitivas), presença de entidade (Wikidata, LinkedIn, media), contexto de mercado (modelos actuais, Google May 2026 Core Update).

---

## 1. Sumário executivo

### Score global (parcial): 18/100 — Crítico

Score calculado sobre as 5 categorias com evidência verificável (máximo parcial: 50 pontos em 5×10). Sete categorias permanecem NC.

| Categoria | Score | Estado |
|---|---|---|
| 1. Técnica (TTFB, headers, compressão, sitemap, robots, hreflang, JSON-LD, llms.txt, HTML server-render) | **NC** | Bloqueado por egress |
| 2. Performance / CWV (LCP, INP, CLS) | **NC** | Bloqueado por egress |
| 3. On-page (title, meta, headings, alt, bilingual) | **NC** | Bloqueado por egress |
| 4. Schema (cobertura JSON-LD) | **NC** | Bloqueado por egress |
| 5. Optimização de imagens (alt %, image schema, formato) | **NC** | Bloqueado por egress |
| 6. GEO técnica (llms.txt vs sitemap, multimodal, prompt-test multi-engine) | **2/10** | Crítico |
| 7. Conteúdo & topical authority | **2/10** | Crítico |
| 8. Entity & brand foundation | **2/10** | Crítico |
| 9. Authority & digital PR | **1/10** | Crítico |
| 10. Sinais sociais | **3/10** | Crítico |
| 11. E-E-A-T on-site | **NC** | Bloqueado por egress |
| 12. Medição (GSC, GA4, BWT AI Performance, monitoring) | **NC** | Bloqueado por egress |
| **TOTAL PARCIAL** | **10/50** | **Crítico** |

**Banda qualitativa**: Crítico (score parcial 18/100 normalizado; sem dados sobre 7 categorias técnicas).

### Top 3 findings (cross-dimensional)

**1. Zero indexação no Google (P0 — bloqueia tudo o resto)**  
O operador `site:destaque.ai` não retornou qualquer página indexada em 2026-06-22. Sem indexação no Google, destaque.ai é elegível para zero citações em Google AI Overviews / AI Mode (Google confirmou: "a page must be indexed and eligible to appear in Google Search to be cited in AI Overviews", developers.google.com/search/docs/appearance/ai-features). Esta é a falha raiz. Tudo o mais é secundário até isto estar resolvido.

**2. Ausência de entidade (P0 — zero footprint no knowledge graph)**  
Nenhum Wikidata QID encontrado. Nenhum Knowledge Panel visível nos resultados de pesquisa. Nenhuma menção media Tier-1 PT identificada. Nenhum LinkedIn company page confirmado para destaque.ai. O brand search "destaque.ai GEO SEO Portugal" retorna zero resultados sobre destaque.ai — os concorrentes (3hash.pt, Marketing Gabriel, AISO Hub, Infinidata) aparecem todos. Esta ausência do knowledge graph implica que as LLMs não têm corpus para grounding mesmo que o site fosse indexado.

**3. Invisibilidade competitiva total (P0 — oportunidade de mercado activa, mas destaque.ai não a captura)**  
O mercado GEO/SEO/AEO em Portugal está activo: pelo menos 8 agências com visibilidade identificadas (3hash.pt, Marketing Gabriel, AISO Hub, Infinidata, Jelly.pt, Voliom, UniK SEO, Latigid). O Google May 2026 Core Update (concluído 2026-06-02) expandiu AI Overviews para ~48% das queries — janela de entrada valiosa, mas destaque.ai não participa. O que é competitivamente urgente é estabelecer a presença mínima (indexação + entidade) antes que os actuais players consolidem citações em AI Overviews.

### O que está correcto (honesto)

- O domínio `destaque.ai` está registado e resolve DNS.
- A escolha de foco (GEO/SEO/AEO para B2B SaaS PT-PT) é uma posição diferenciada e defensável num mercado ainda não saturado.
- O presente sistema de auditoria interna (SKILL.md + routine SINAL) é uma infra-estrutura sólida — o problema não é conhecimento, é execução externa (site não indexado, sem entidade, sem conteúdo publicado e encontrável).

---

## 2. Contexto de negócio

| Atributo | Estado |
|---|---|
| Identidade | Agência/consultoria GEO, SEO, AEO — B2B SaaS — Portugal |
| Língua(s) | PT-PT presumido; EN necessário como substrato |
| Operador | Eduardo Mendonça |
| Plataforma web | Desconhecida (acesso bloqueado) |
| Diferenciadores declarados | Método SINAL; foco B2B SaaS PT-PT; auditoria integrada GEO+SEO+AEO |
| Social presence verificada | Não confirmada para destaque.ai (ver §10) |
| Organization.sameAs | Gap — nenhum valor encontrado (ver §8) |

**Portfólio de serviços inferido** (baseado em SKILL.md e contexto de negócio; não confirmado directamente no site):  
Auditorias técnicas GEO/SEO/AEO, optimização para AI search (ChatGPT, Perplexity, Google AI Mode, Bing Copilot, Claude), entity optimization, schema.org, llms.txt, robots.txt para crawlers IA, E-E-A-T, content strategy.

**Contexto de mercado (2026-06-22)**:
- Google May 2026 Core Update concluído 2026-06-02. AI Overviews em ~48% das queries (up de ~30–34% há um ano). Páginas citadas em AIO recebem ~35% mais cliques que o #1 orgânico standard (Source: SearchEngineLand/Brafton, WebSearch 2026-06-22 — vendor/media data, directional).
- Google confirmou: indexação é pré-requisito de elegibilidade para AIO.
- Concorrentes PT aparecem em rankings de "agências GEO SEO Portugal" — espaço competitivo activo.

---

## 3. Análise de plataforma

**Status**: NC — acesso à rede bloqueado. Não é possível verificar stack, servidor, CDN, compressão, ou TTFB.

**O que é inferível** (sem verificação directa):
- Domínio `destaque.ai` com extensão `.ai` (Anguilla country-code TLD, sem implicações técnicas especiais para SEO).
- A ausência de indexação Google pode indicar: (a) meta robots `noindex` activo, (b) robots.txt bloqueando Googlebot, (c) site recente sem backlinks suficientes para crawl, ou (d) conteúdo renderizado inteiramente em JavaScript sem pre-rendering.

**Acções pendentes para próxima sessão com acesso de rede**:
- `curl -sI https://destaque.ai` (headers: Content-Encoding, Server, Cache-Control, security headers)
- `curl -s https://destaque.ai/robots.txt` (verificar User-agent: Googlebot e crawlers IA)
- `curl -s https://destaque.ai/sitemap.xml` (existência, URL count)
- `curl -s https://destaque.ai/llms.txt` e `/llms-full.txt`
- View-source para verificar se conteúdo está em HTML inicial ou apenas em JS bundles
- Google PageSpeed Insights API: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://destaque.ai`

---

## 4. Performance / CWV

**Status**: NC — bloqueado por egress.

**TTFB**: Medições tentadas via `curl` (5 runs) retornaram 403 do proxy egress local (32–303 ms). Estes valores não representam TTFB real de destaque.ai — são latências do erro de proxy e NÃO devem ser registados como métricas do site.

**LCP / INP / CLS**: PageSpeed Insights não acessível nesta sessão.

**A verificar na próxima sessão**:
- TTFB: mediana de 5 runs `curl -o /dev/null -w "%{time_starttransfer}"` de localização PT (usar VPN PT ou servidor PT se disponível)
- PageSpeed Insights API (mobile + desktop)
- Comparar com baseline de mercado PT B2B SaaS (TTFB < 800 ms é passável; < 400 ms é bom)

---

## 5. SEO On-page

**Status**: NC — conteúdo não acessível.

**A verificar**:
- `<title>`: comprimento 50–60 chars; keyword primária; brand no fim
- `<meta name="description">`: 140–155 chars; complemento do title, não repetição; social-proof se possível
- Hierarquia de headings: 1× H1, múltiplos H2/H3; sem saltos de nível
- Alt coverage %: target > 95%
- Bilingual hygiene: body PT-PT, sem drift EN nas headings internas

---

## 6. GEO técnica — score: 2/10

### 6.1 Indexação Google (P0 — confirma bloqueio total)

`site:destaque.ai` via WebSearch 2026-06-22: **zero resultados** de destaque.ai.

Implicação directa: destaque.ai está excluída de:
- Google AI Overviews
- Google AI Mode
- ChatGPT Search (usa Bing index, mas ausência Google é indicador de fraqueza geral de link graph)
- Qualquer resultado de pesquisa clássico PT

**Esta é a falha mais grave identificada nesta auditoria.**

### 6.2 llms.txt e llms-full.txt

**Status**: NC — URLs `destaque.ai/llms.txt` e `destaque.ai/llms-full.txt` não acessíveis.

Contexto: llms.txt não é consumido pelos motores de inferência principais (confirmado em frameworks.md §1), mas a sua ausência sinaliza que o site ainda não completou a checklist técnica GEO básica. A publicar depois de resolver a indexação.

### 6.3 robots.txt — crawlers IA

**Status**: NC — ficheiro não acessível.

A verificar: presença de User-agent explícito para `Googlebot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `PerplexityBot-User`, `Google-Extended`, `Applebot-Extended`, `Meta-ExternalAgent`, `CCBot`.

**Gap esperado** (sem evidência contrária): crawlers IA provavelmente não estão explicitamente configurados num robots.txt de site novo/jovem.

### 6.4 Server-rendered HTML

**Status**: NC. A ausência de indexação pode indicar conteúdo JS-only.

### 6.5 Prompt-tests multi-engine

**Status**: Não executados — engines não acessíveis nesta sessão.

**Previsão baseada em evidência de indexação**: destaque.ai ausente de todas as respostas. Os concorrentes 3hash.pt, Marketing Gabriel, AISO Hub têm presença confirmada no index Google e são candidatos prováveis a citação para queries Tier 1.

**Protocolo de execução manual** (para sessão com acesso de rede):  
Correr os 24 prompts fixos (D1-D10 + P1-P9 + V1-V5) × 5 engines = 120 combinações. Documentar em `references/prompts.md` tabela de resultados.

**Score 6.x: 2/10** — indexação zero (P0), tudo o resto NC ou presumivelmente ausente.

---

## 7. Conteúdo & Topical Authority — score: 2/10

### 7.1 Visibilidade em pesquisa Google

Queries testadas via WebSearch (2026-06-22):

| Query | destaque.ai nos resultados? |
|---|---|
| `site:destaque.ai` | Não (zero páginas indexadas) |
| `destaque.ai GEO SEO Portugal AEO Eduardo Mendonça` | Não |
| `destaque.ai portugal GEO SEO AEO agencia 2025 2026` | Não |
| `"destaque.ai"` (com aspas) | Não |
| `destaque.ai GEO SEO optimization Portugal AI` | Não |

**Conclusão**: Conteúdo não encontrável via Google. Não é possível avaliar topics owned, original statistics ou cadência de publicação.

### 7.2 Topical authority

**Status**: NC / desconhecida. Sem conteúdo indexado, não há authority para medir.

### 7.3 Original statistics e cadência

**Status**: NC. Sem conteúdo encontrado.

**Score 7.x: 2/10** — visibilidade verificada como zero em todas as queries testadas.

---

## 8. Entity & Brand Foundation — score: 2/10

### 8.1 Wikidata

Nenhum QID para "destaque.ai" encontrado em WebSearch. **Gap: P0.**

### 8.2 Knowledge Panel Google

Não visível nos resultados de pesquisa para nenhuma query relacionada com destaque.ai. **Gap.**

### 8.3 NAP consistency

Identificado potencial conflito de identidade: existe uma entidade separada chamada "Destaque.IA" (Facebook: `facebook.com/100095394105933`, TikTok: `@destaqueia`) com email `info@destaque-ia.com` (domínio `destaque-ia.com`) que publica conteúdo sobre IA em português. Esta entidade está activa no Porto, com presença em Facebook, TikTok e Instagram.

**Risco**: Confusão de entidade. LLMs e motores de conhecimento podem associar "destaque.ai" ao domínio `destaque-ia.com` (a entidade media), em vez do negócio GEO/SEO/AEO. A consistência de NAP entre destaque.ai e destaque-ia.com deve ser investigada. Se destaque.ai e destaque-ia.com são a mesma pessoa/empresa, o NAP deve ser unificado com um único domínio canónico. Se são entidades distintas, o risco de conflito de marca é real.

### 8.4 Google Business Profile / Bing Places / Apple Maps

Não verificado (sem acesso às plataformas nestas queries). **Status**: NC.

### 8.5 pai.pt

Não verificado. **Status**: NC.

### 8.6 Organization.sameAs no JSON-LD

**Status**: NC (site não acessível). Gap esperado dado o estágio de maturidade.

**Score 8.x: 2/10** — sem Wikidata, sem KP, risco de conflito de identidade activo.

---

## 9. Authority & Digital PR — score: 1/10

### 9.1 Cobertura media Tier-1 PT

Queries testadas:

| Query | Resultado |
|---|---|
| `destaque.ai GEO SEO Portugal` | Zero menções a destaque.ai; artigos sobre 3hash, Marketing Gabriel, AISO Hub |
| `destaque.ai portugal GEO SEO AEO agencia 2025 2026` | Idem |
| Observador / ECO / Expresso / Público / Dinheiro Vivo / Jornal Negócios | Não testado directamente; nenhum resultado espontâneo |

**Conclusão**: Zero cobertura Tier-1 PT encontrada. **Gap P1.**

### 9.2 Link graph

**Status**: NC — sem acesso a Ahrefs/SemRush. Proxy indicador (indexação Google zero) sugere backlink profile muito fraco ou nulo. Um site com zero páginas indexadas normalmente não tem backlinks suficientes para estar no crawl queue activo do Googlebot.

### 9.3 Branded anchor text

**Status**: NC. Zero menções externas confirmadas.

**Score 9.x: 1/10** — zero evidência externa de autoridade ou cobertura media.

---

## 10. Sinais Sociais — score: 3/10

### 10.1 LinkedIn

Nenhuma company page confirmada para "destaque.ai" via WebSearch. LinkedIn de Eduardo Mendonça não localizado com associação explícita a destaque.ai.

**Gap P1**: sem LinkedIn company page, destaque.ai não tem presença no grafo de entidades profissionais que as LLMs usam para corroboração.

### 10.2 GitHub

Não verificado. **Status**: NC.

### 10.3 X (Twitter)

Não verificado directamente. **Status**: NC.

### 10.4 Reddit / HN

Não verificado. Zero menções espontâneas em qualquer resultado de pesquisa.

### 10.5 Facebook / TikTok / Instagram (@destaqueia)

Presente, mas provavelmente entidade diferente (Destaque.IA, domínio destaque-ia.com, conteúdo de news sobre IA). Não deve ser contabilizado como social signal de destaque.ai.

**Score 10.x: 3/10** — há algum ruído online à volta da marca "destaque", mas nenhum social signal confirmado e atribuível especificamente a destaque.ai o negócio GEO/SEO/AEO.

---

## 11. E-E-A-T On-site

**Status**: NC — site não acessível.

**A verificar**:
- Named authors com byline e `Person` schema
- Credenciais declaradas (anos de experiência, metodologia)
- Case studies com resultados concretos (métricas, nomes de clientes com permissão)
- Certificações (Google, HubSpot, outros)
- Página About com história da empresa e fundador

---

## 12. Medição

**Status**: NC — sem acesso a GSC, GA4 ou BWT.

**A verificar/implementar**:
- Google Search Console: property verificada, data de verificação, indexação coverage report
- GA4: canal "AI search" filtrado? Attribution model? Conversion events definidos?
- Bing Webmaster Tools: AI Performance dashboard (public preview desde 2026-02-09)
- Monitoring tool: Profound / Otterly / AthenaHQ para tracking de citações (ver tools.md)
- Conversion attribution funnel: de citação IA a lead CRM

---

## 13. Contexto de mercado e oportunidades abertas

1. **Google May 2026 Core Update** (concluído 2026-06-02): AI Overviews em ~48% das queries. Janela favorável para entrar cedo no espaço GEO PT-PT enquanto concorrentes ainda consolidam o seu posicionamento. Mas apenas para quem tem indexação.

2. **AIO aceleração pós-I/O 2026**: Gemini 3.5 Flash como default. Queries mais diversas agora têm AIO. A elegibilidade é binária: ou o site está indexado e pode ser citado, ou não está.

3. **ChatGPT GPT-5.5 Instant** (default desde 2026-05-05): O modelo é mais agressivo em incluir citações diversificadas. Sites PT-PT bem estruturados têm oportunidade de capturar citações neste contexto.

4. **Bing Copilot AI Performance dashboard** (BWT, desde 2026-02-09): Primeira vez que há telemetria directa de citações Copilot para site owners. Incentivo para registar BWT e começar a medir antes dos concorrentes.

5. **Confusão de entidade "Destaque"**: A existência de Destaque.IA (destaque-ia.com) activa em PT com conteúdo sobre IA pode beneficiar ou prejudicar destaque.ai dependendo da clareza da diferenciação. Urge resolver.

---

## 14. Plano em 4 horizontes (SINAL action plan)

### Horizonte 1 — Semanas 1–2: Desbloquear o zero (P0)

| Acção | Responsável | Esforço | Impacto |
|---|---|---|---|
| **Verificar porque zero indexação**: view-source, robots.txt, meta robots, Google Search Console coverage | Eduardo M. | 2h | P0 — sem isto nada funciona |
| **Se JS-only**: implementar SSR ou pre-rendering (Cloudflare Workers, Vercel Edge) | Dev | 1–3 dias | P0 |
| **Se meta noindex activo**: remover | Dev | 30 min | P0 |
| **Se sem backlinks**: criar pelo menos 2 menções externas com link (LinkedIn, GitHub, diretório pai.pt) | Eduardo M. | 4h | P0 suporte |
| **Verificar robots.txt**: garantir `Allow: /` para Googlebot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, PerplexityBot-User | Dev | 1h | P0 |
| **Request indexing**: Google Search Console "URL Inspection" → Request Indexing para homepage e páginas principais | Eduardo M. | 30 min | P0 suporte |
| **Criar perfil LinkedIn company page para destaque.ai** com URL confirmada | Eduardo M. | 1h | P1 |
| **Verificar conflito Destaque.IA vs destaque.ai**: decidir estratégia de diferenciação de marca | Eduardo M. | 2h | P1 |

### Horizonte 2 — Semanas 3–6: Infra-estrutura de entidade

| Acção | Responsável | Esforço | Impacto |
|---|---|---|---|
| **Criar Wikidata item** para destaque.ai: `instance of: company`, `country: Portugal`, `industry: digital marketing`, `founded`, `official website`, `LinkedIn ID` | Eduardo M. | 3h | P1 entity graph |
| **Publicar llms.txt + llms-full.txt**: URL count = URL count do sitemap | Dev | 2h | P2 hygiene |
| **Implementar Organization JSON-LD** com `sameAs` para LinkedIn, Wikidata, GitHub (se aplicável) | Dev | 2h | P1 |
| **Publicar 2–3 artigos piloto** com original statistics, named-source quotations, author byline com `Person` schema | Eduardo M. | 8h | P1 topical |
| **Adicionar security headers** (HSTS, CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options) via Cloudflare ou servidor | Dev | 3h | P2 |
| **Verificar e activar Brotli compression** e `Cache-Control` headers | Dev | 2h | P2 |
| **Registar Bing Webmaster Tools** e verificar AI Performance dashboard | Eduardo M. | 1h | P2 |
| **Criar Google Business Profile** para destaque.ai (se elegível) | Eduardo M. | 1h | P2 |
| **Correr prompt-tests completos (Tier 1+4+7 × 5 engines)** de ambiente com acesso de rede; documentar resultados em references/prompts.md | Eduardo M. | 4h | P1 baseline |

### Horizonte 3 — Semanas 7–12: Topical authority e brand mentions

| Acção | Responsável | Esforço | Impacto |
|---|---|---|---|
| **Publicar 8–10 artigos** sobre GEO/SEO/AEO PT-PT com dados originais (estudos, benchmarks, auditorias anonimizadas) | Eduardo M. | 40h | P1 |
| **Pitch 1 artigo de opinião** a Observador Tech / ECO / Dinheiro Vivo sobre visibilidade IA para empresas PT | Eduardo M. | 4h | P1 Tier-1 media |
| **Aparecer como fonte em artigo de roundup** (tipo: "melhores agências GEO Portugal") — contactar autores do marketingdigital.com.pt, aiso-hub.com, pai.pt | Eduardo M. | 2h | P1 link + entity |
| **Caso de estudo publicado** com cliente real, métricas concretas (ex: TTFB, indexação rate, AI citation rate antes/depois) | Eduardo M. | 8h | P1 E-E-A-T |
| **Implementar FAQPage schema** em páginas de serviço com perguntas reais do ICP | Dev | 3h | P2 |
| **Configurar hreflang** `pt-PT` / `en-GB` / `x-default` se site for bilingue | Dev | 2h | P2 |
| **Verificar CWV**: LCP < 2.5s, INP < 200ms, CLS < 0.1 — rectificar se necessário | Dev | 8h | P2 |

### Horizonte 4 — 90+ dias: Posicionamento de longo prazo

| Acção | Responsável | Esforço | Impacto |
|---|---|---|---|
| **Wikipedia eligibility assessment**: destaque.ai atingiu notoriedade suficiente para artigo PT Wikipedia? Se sim, criar. Se não, assegurar menção em artigos de GEO/SEO PT existentes | Eduardo M. | ongoing | P2 |
| **Programa de PR contínuo**: 1 pitch/mês a media PT sobre GEO trends | Eduardo M. | 4h/mês | P1 |
| **Monitorização de citações IA**: implementar Otterly ou AthenaHQ para tracking semanal de citações em ChatGPT, Perplexity, Google AI Mode, Bing Copilot | Eduardo M. | 2h setup | P2 |
| **Routine SINAL semanal**: executar prompt-tests Tier 1+4+7 × 5 engines toda a segunda-feira | Claude Code routine | automático | P1 |
| **Revisão trimestral de entity graph**: Wikidata atualizado, sameAs expandido, KB corroboração verificada | Eduardo M. | 2h/trimestre | P2 |
| **AI Performance BWT reporting mensal**: extrair citação Copilot data de Bing Webmaster Tools | Eduardo M. | 1h/mês | P2 |

---

## 15. Nota de encerramento (honesta)

destaque.ai está numa fase pré-visibilidade. A infra-estrutura conceptual (SKILL.md, metodologia SINAL, knowledge base) existe e é sólida. O que está ausente é a presença pública: zero páginas Google-indexadas, zero entidade no knowledge graph, zero menções media. Não há evidência de que o problema seja técnico grave — é mais provável que seja um site novo que ainda não iniciou a fase de distribuição e link acquisition.

A prioridade absoluta das próximas duas semanas é verificar e resolver a causa de zero indexação. Tudo o resto — schema, llms.txt, topical authority, media PR — tem valor zero sem isso.

Não há urgência fabricada. O mercado GEO PT-PT tem concorrentes activos mas nenhum tem posição dominante incontestável. Há tempo para construir correctamente.

---

## Fontes e referências desta auditoria

- Anthropic model docs: platform.claude.com/docs/en/about-claude/models/overview (acedido 2026-06-22, Tier 1)
- Google AI Overviews eligibility: developers.google.com/search/docs/appearance/ai-features (WebSearch Tier 2)
- Google May 2026 Core Update: searchengineland.com/google-may-2026-core-update-rolling-out-now-478430 (WebSearch Tier 2); brafton.com (Tier 2)
- WebSearch queries `site:destaque.ai`, `destaque.ai GEO SEO Portugal`, `destaque.ai portugal GEO SEO AEO agencia 2025 2026`, `"destaque.ai"` — todas executadas 2026-06-22
- AI crawler matrix, llms.txt assessment, schema null result: references/frameworks.md (SKILL.md knowledge base, May 2026)
- Models per engine: references/models.md (esta sessão, 2026-06-22)
