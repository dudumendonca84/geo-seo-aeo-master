# Improvements Backlog — destaque.ai
**Última actualização**: 2026-06-22 (auditoria inaugural SINAL)  
**Sistema**: P0 = bloqueia tudo o resto | P1 = alto impacto, executável esta sprint | P2 = importante, backlog próximo | P3 = melhoria futura | DONE = concluído

---

## P0 — Crítico: resolver antes de qualquer outra coisa

| ID | Item | Categoria | Fonte | Adicionado | Status |
|---|---|---|---|---|---|
| P0-001 | Diagnosticar e resolver causa de zero indexação Google (`site:destaque.ai` retorna 0 resultados). Verificar: meta robots noindex, robots.txt bloqueio Googlebot, conteúdo JS-only sem pre-rendering, ausência de backlinks no crawl queue. | GEO técnica / Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P0-002 | Se conteúdo é JS-only: implementar SSR ou pre-rendering (Cloudflare Workers, Vercel Edge, Next.js SSR). LLMs e Googlebot não executam JavaScript. | Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P0-003 | Se meta `<meta name="robots" content="noindex">` activo: remover imediatamente. | Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P0-004 | Verificar robots.txt: garantir `Allow: /` para Googlebot. Sem Googlebot não há índice, sem índice não há AIO. | Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P0-005 | Após resolver indexação: submeter sitemap e URLs principais via Google Search Console "Request Indexing". | Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |

---

## P1 — Alto impacto

| ID | Item | Categoria | Fonte | Adicionado | Status |
|---|---|---|---|---|---|
| P1-001 | Criar Wikidata item para destaque.ai: `instance of: company`, `country: Portugal`, `industry: digital marketing`, `founded`, `official website`, `LinkedIn ID`, `founder`. | Entity & brand | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-002 | Criar LinkedIn company page para destaque.ai com URL canónica, descrição, serviços. | Entity & brand / Sinais sociais | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-003 | Investigar e resolver conflito de entidade entre `destaque.ai` e `destaque-ia.com` (Destaque.IA — entidade media AI Porto). Risco de confusão em knowledge graph das LLMs. Se entidades distintas: assegurar diferenciação clara no NAP e nome. | Entity & brand | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-004 | Implementar Organization JSON-LD no homepage com `sameAs` para LinkedIn, Wikidata (após criação), GitHub (se aplicável). | Schema | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-005 | Publicar 2–3 artigos pilares com: original statistics (números com unidade e data), named-source quotations, author byline `Person` schema, `datePublished`, `dateModified`. | Conteúdo & topical authority | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-006 | Pitch 1 artigo de opinião a media PT Tier-1 (Observador Tech / ECO / Dinheiro Vivo) sobre GEO e visibilidade IA para empresas PT. Objectivo: backlink + entity corroboration. | Authority & digital PR | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-007 | Registar Bing Webmaster Tools e verificar AI Performance dashboard (live desde 2026-02-09). | Medição | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-008 | Executar prompt-tests completos (Tier 1+4+7 × 5 engines) de ambiente com acesso de rede; documentar resultados em references/prompts.md. | GEO técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-009 | Verificar se Google Search Console property está verificada e operacional para destaque.ai. | Medição | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P1-010 | Contactar autores de roundups "melhores agências GEO Portugal" (marketingdigital.com.pt, aiso-hub.com, pai.pt) para inclusão de destaque.ai. | Authority & digital PR | Audit 2026-06-22 | 2026-06-22 | ABERTO |

---

## P2 — Backlog próximo (executar após P0+P1)

| ID | Item | Categoria | Fonte | Adicionado | Status |
|---|---|---|---|---|---|
| P2-001 | Configurar robots.txt completo para crawlers IA: `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`, `Meta-ExternalAgent`, `CCBot`. | Técnica / GEO técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-002 | Publicar `/llms.txt` com URL count = URL count do sitemap. Publicar `/llms-full.txt` com conteúdo de cada URL. | GEO técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-003 | Implementar security headers: HSTS, X-Content-Type-Options, Content-Security-Policy, X-Frame-Options, Referrer-Policy, Permissions-Policy. Via Cloudflare se plataforma não suporta nativamente. | Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-004 | Activar Brotli compression e verificar `Content-Encoding: br` no response header. | Performance | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-005 | Verificar CWV: LCP < 2.5s, INP < 200ms, CLS < 0.1 (PageSpeed Insights API). Rectificar se fora de threshold. | Performance / CWV | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-006 | Verificar e implementar sitemap.xml com todas as URLs. Submeter a Google Search Console e Bing Webmaster Tools. | Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-007 | Implementar FAQPage schema em páginas de serviço com perguntas reais do ICP B2B SaaS PT-PT. | Schema | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-008 | Configurar hreflang correctamente: `pt-PT`, `en-GB`, `x-default` (se bilingue). Verificar body-text language drift. | Técnica | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-009 | Auditoria completa de alt attributes: target > 95% coverage. Implementar `ImageObject` schema para imagens relevantes. | Optimização imagens | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-010 | Criar Google Business Profile para destaque.ai se elegível. | Entity & brand | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-011 | Publicar caso de estudo com cliente real: métricas concretas (TTFB, indexação rate, AI citation rate antes/depois). | E-E-A-T / Conteúdo | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-012 | Configurar GA4: canal "AI search" filtrado (source contains "chatgpt.com", "perplexity.ai", "copilot.microsoft.com"), conversion events, attribution model. | Medição | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-013 | Implementar monitoring tool de citações IA: Otterly ou AthenaHQ (ver references/tools.md). Setup semanal. | Medição | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P2-014 | Verificar registos pai.pt e outros diretórios PT relevantes para NAP consistency. | Entity & brand | Audit 2026-06-22 | 2026-06-22 | ABERTO |

---

## P3 — Melhoria futura

| ID | Item | Categoria | Fonte | Adicionado | Status |
|---|---|---|---|---|---|
| P3-001 | Avaliar elegibilidade Wikipedia PT: artigo próprio ou menção em artigos existentes sobre GEO/SEO Portugal. | Entity & brand | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P3-002 | Publicar presença em Reddit PT (r/Portugal, r/empreendedorismo) e LinkedIn com conteúdo original. | Sinais sociais | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P3-003 | Expandir `sameAs` com Crunchbase, Bloomberg/Pitchbook se listado. | Entity & brand | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P3-004 | Publicar versão EN das páginas principais de serviço (substrato para LLMs que raciocinam em inglês internamente). | Conteúdo / GEO | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P3-005 | Criar `WebSite` JSON-LD com `potentialAction: SearchAction` (sitelinks search box). | Schema | Audit 2026-06-22 | 2026-06-22 | ABERTO |
| P3-006 | Avaliar migração CDN (Cloudflare) se plataforma actual não suportar headers, compressão ou edge caching adequados. | Técnica / Platform | Audit 2026-06-22 | 2026-06-22 | ABERTO |

---

## DONE — Concluído

| ID | Item | Data de conclusão | Evidência |
|---|---|---|---|
| — | (sem items concluídos — auditoria inaugural) | — | — |

---

## Meta / Infra-estrutura auditoria

| ID | Item | Status |
|---|---|---|
| META-001 | Criar references/models.md | ✅ Feito 2026-06-22 |
| META-002 | Criar references/prompts.md com test suite Tier 1–7 | ✅ Feito 2026-06-22 |
| META-003 | Criar destaque-ai-self/audit-baseline.md | ✅ Feito 2026-06-22 |
| META-004 | Criar destaque-ai-self/improvements-backlog.md | ✅ Feito 2026-06-22 |
| META-005 | Criar destaque-ai-self/audit-history.md | ✅ Feito 2026-06-22 |
| META-006 | Executar prompt-tests de ambiente com acesso de rede (Horizonte 1) | PENDENTE |
| META-007 | Desbloquear acesso egress a destaque.ai para próxima sessão de auditoria | PENDENTE |
