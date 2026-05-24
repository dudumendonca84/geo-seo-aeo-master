# destaque.ai self-audit baseline

> **Estado:** vazio. Será preenchido pela primeira execução do Routine `destaque-ai-self-audit-weekly` (Segundas 9:00 Lisboa).

## O que vai aqui

Auditoria técnica ao destaque.ai (https://destaque.ai) seguindo a **metodologia destaque.ai** definida em `../SKILL.md` § Methodology. A metodologia é própria, sintetizada a partir de fontes top-tier (academic research, industry primary research, vendor primary docs, practical audit traditions). Inclui:

1. **Sumário executivo** — Score global /100, scorecard por categoria (SEO Técnico, Conteúdo & E-E-A-T, SEO On-Page, Schema, Performance/CWV, Optimização de imagens, Preparação para IA/GEO), top 3-4 findings ponderados.
2. **Contexto de negócio** — Identidade, oferta, diferenciadores visíveis do site, presença social declarada.
3. **Análise de plataforma** — Hosting, build (SSG/SSR/CSR), platform ceiling, custo estimado actual.
4. **Performance** — TTFB (mediana de 5 corridas curl de PT), HTML weight, compression, LCP/INP/CLS se disponíveis.
5. **SEO on-page** — Title, meta description, heading hierarchy, alt coverage, bilingual copy hygiene.
6. **SEO technical** — sitemap, robots.txt (matrix de crawlers IA), hreflang, JSON-LD schema, security headers, cache.
7. **AI / LLM visibility (GEO)** — `llms.txt` + `llms-full.txt` presence, robots permission posture, server-rendered HTML, manual prompt test results (ChatGPT, Claude, Perplexity).
8. **Plano de acção em 4 horizontes** — Horizonte 1 (semana 1-2, critical quick-wins), 2 (semana 3-6, optimização do existente), 3 (semana 7-12, reforço estratégico), 4 (90+ dias, posicionamento longo prazo).

## Manutenção

Este ficheiro é actualizado pela Routine semanal — Segundas 9:00. Cada update **substitui completamente** o conteúdo anterior (o histórico vive em `audit-history.md` para tracking de deltas).
