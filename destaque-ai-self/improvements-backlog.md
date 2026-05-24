# destaque.ai — SINAL improvements backlog

Última actualização: 2026-05-24
Gerado por: audit-baseline.md (2026-05-24, primeira auditoria)

Prioridades: **P0** = bloqueador / acção imediata | **P1** = esta semana | **P2** = próximas 4 semanas | **P3** = 90 dias

---

## DONE

*(Sem items movidos para DONE nesta primeira auditoria — baseline inaugural)*

---

## P0 — Acção imediata (semanas 1-2)

| ID | Item | Categoria | Detalhe | Effort |
|---|---|---|---|---|
| P0-01 | Auditoria directa com acesso HTTP | Processo | Executar próxima sessão num ambiente sem restrição de egresso para destaque.ai. Todas as medições marcadas NV neste baseline ficam por confirmar. | 2 h |
| P0-02 | Criar `llms.txt` | GEO técnica | Ficheiro na raiz. Estrutura: H1 "destaque.ai", blockquote de descrição, secções por tipo de página (serviços, blog, sobre). Publicar também `llms-full.txt`. | 1 h dev |
| P0-03 | JSON-LD mínimo viável | Schema | `Organization` (nome, url, sameAs), `WebSite` (SearchAction), `Person` (Eduardo Mendonça, jobTitle, worksFor, sameAs → LinkedIn). Implementar no `<head>` global via Framer custom code. | 2 h dev |
| P0-04 | `Organization.sameAs` | Entity | Adicionar ao JSON-LD: LinkedIn company page, GitHub (dudumendonca84), Wikidata URI (quando criado), Crunchbase (se aplicável). | 30 min |
| P0-05 | Criar Wikidata item | Entity | Campos mínimos: instance of = organization/company, country = Portugal, industry = marketing services, official website, inception date, founder. | 1 h |
| P0-06 | Completar `robots.txt` | GEO técnica | Verificar presença e adicionar os 13 crawlers IA listados na auditoria §4.5. Especial atenção: ClaudeBot, Claude-User, Claude-SearchBot, OAI-SearchBot, Applebot-Extended. | 30 min |
| P0-07 | Activar daily-news GitHub Action | Processo | `daily-agent/news-feed.md` está vazio. O GitHub Action `daily-news.yml` não está a correr. Verificar configuração e activar. | 30 min |
| P0-08 | Security headers via Cloudflare | SEO Técnica | Adicionar em frente ao Framer: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy` (modo report-only inicial). | 3 h dev |
| P0-09 | Verificar GSC + GA4 | Medição | Confirmar Search Console verificada e sitemap submetido. Confirmar GA4 configurado. Se não, configurar. | 1 h |

---

## P1 — Esta semana a próximas 2 semanas

| ID | Item | Categoria | Detalhe | Effort |
|---|---|---|---|---|
| P1-01 | Prompt-test manual 24 prompts | GEO técnica | Correr D1–D10, P1–P9, V1–V5 contra ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot. Documentar resultados. | 4 h |
| P1-02 | GA4 custom AI channel group | Medição | Regex para chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com (ver references/metrics.md §6). | 30 min |
| P1-03 | Bing Webmaster Tools + AI Performance | Medição | Criar conta, verificar domínio, submeter sitemap, activar AI Performance dashboard. | 1 h |
| P1-04 | Verificar alt tags | On-page | 100% das imagens de conteúdo devem ter alt text descritivo. Alt="" para decorativas. | 1-2 h |
| P1-05 | Verificar heading hierarchy | On-page | H1 único por página, H2 para secções, H3 para subsecções. Heading text não pode estar em `<span>` ou CSS-only. | 1 h |

---

## P2 — Próximas 4 semanas

| ID | Item | Categoria | Detalhe | Effort |
|---|---|---|---|---|
| P2-01 | Publicar 3 artigos com estatísticas originais | Conteúdo | Estrutura: resposta atómica de 40–80 palavras, citação de fonte primária, dado numérico original. Topics: GEO para PT-PT B2B SaaS, robots.txt IA matrix, entity optimization. | 6 h/artigo |
| P2-02 | Schema BlogPosting em artigos | Schema | `author` (Person com schema), `datePublished`, `dateModified`, `publisher` (Organization). Implementar em todos os artigos. | 2 h dev |
| P2-03 | `llms-full.txt` | GEO técnica | Concatenar conteúdo completo das páginas principais (homepage, serviços, sobre, blog). | 2 h |
| P2-04 | FAQPage schema nas páginas de serviços | Schema | Se as páginas de serviços têm perguntas frequentes, adicionar markup `FAQPage` + `Question` + `Answer`. | 2 h dev |
| P2-05 | Google Business Profile | Entity | Criar perfil se consultora tem presença local/consultoria presencial. Consistência NAP (Name, Address, Phone). | 1 h |
| P2-06 | Peec AI setup | Medição | Activar Peec AI (€89/mo) com os 24 prompts do SINAL test suite. 5 engines: ChatGPT, Perplexity, Google AIO, Copilot + Claude como add-on. | 2 h setup |

---

## P3 — 90+ dias

| ID | Item | Categoria | Detalhe | Effort |
|---|---|---|---|---|
| P3-01 | Benchmark PT-PT original | Conteúdo | "Estado da visibilidade em IA das 100 maiores empresas SaaS portuguesas" — dados originais, fonte primária própria. Maior alavanca de topical authority + link bait. | 20-30 h |
| P3-02 | Cobertura media Tier-1 PT | Authority | Outreach para Observador, ECO, Dinheiro Vivo, Jornal de Negócios. Ângulo: dados originais do benchmark (P3-01). | 4 h+ PR |
| P3-03 | Hreflang PT-PT + EN-GB | SEO Técnica | Adicionar versão EN da homepage e página Sobre. `hreflang="pt-PT"`, `hreflang="en-GB"`, `hreflang="x-default"`. | 4 h conteúdo + 1 h dev |
| P3-04 | Cluster de topical authority | Conteúdo | 20+ artigos em tópicos core. Cadência: 2/mês mínimo. | Ongoing |
| P3-05 | Knowledge Panel monitoring | Entity | Verificar trimestralmente se Knowledge Panel aparece para "destaque.ai" e "Eduardo Mendonça" no Google. Ajustar Wikidata/sameAs conforme. | 30 min/trimestre |

---

## Items em observação (sem prioridade definida)

| ID | Item | Notas |
|---|---|---|
| OBS-01 | Apple Maps | Relevante se audiência EN/EU crescer. Não prioritário em fase inicial. |
| OBS-02 | pai.pt / Transparência Portugal | Listing de empresas; valor de sinalização de legitimidade baixo mas presente. |
| OBS-03 | Reddit / HN participation | Participação autêntica em r/SEO, r/Portugal, HN — não spam. Maturidade de marca necessária. |
| OBS-04 | YouTube | Canal próprio com conteúdo técnico. Recurso significativo; depende de recursos de produção. |
| OBS-05 | ClaimReview schema | Relevante se destaque.ai publicar fact-checks sobre claims de GEO inflacionados. Baixa prioridade em fase inicial. |
