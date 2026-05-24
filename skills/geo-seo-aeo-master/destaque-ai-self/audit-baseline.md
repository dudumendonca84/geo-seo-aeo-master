# destaque.ai self-audit baseline

> **Estado:** vazio. Será preenchido pela primeira execução do Routine `destaque-ai-self-audit-weekly` (Segundas 9:00 Lisboa).

## O que vai aqui

Auditoria holística ao destaque.ai (https://destaque.ai) seguindo o **método SINAL** (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs) definido em `../SKILL.md` § Methodology — SINAL. Método próprio, sintetizado de fontes top-tier (academic research, industry primary research, vendor primary docs, practical audit traditions). Cobre as 8 dimensões + scorecard de 12 categorias + 16-section audit workflow + plano de acção em 4 horizontes. Inclui:

1. **Sumário executivo** — Score global /100, scorecard de 12 categorias (SEO Técnico, Performance/CWV, SEO On-Page, Schema, Optimização de imagens, GEO técnica, Conteúdo & topical authority, Entidade & brand foundation, Autoridade & digital PR, Sinais sociais & community, E-E-A-T & on-site authority, Medição & feedback loop), top 3-4 findings ponderados **across all dimensions**.
2. **Contexto de negócio** — Identidade, oferta, diferenciadores visíveis do site, presença social declarada.
3. **Análise de plataforma** — Hosting, build (SSG/SSR/CSR), platform ceiling, custo estimado actual.
4. **Performance** — TTFB (mediana de 5 corridas curl de PT), HTML weight, compression, LCP/INP/CLS se disponíveis.
5. **SEO on-page** — Title, meta description, heading hierarchy, alt coverage, bilingual copy hygiene.
6. **SEO technical** — sitemap, robots.txt (matrix de crawlers IA), hreflang, JSON-LD schema, security headers, cache.
7. **AI / LLM visibility (GEO técnica)** — `llms.txt` + `llms-full.txt`, robots permission posture, server-rendered HTML, multimodal grounding, **manual prompt test multi-engine** (ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot mandatórios; Gemini app, Grok recomendados; DeepSeek, Meta AI, Mistral Le Chat, You.com condicionais — ver SKILL.md §7 para matriz completa e dados a registar por engine).
8. **Content strategy & topical authority** — topics owned, original statistics, content cadence, distribution channels, gap analysis vs competitors.
9. **Entity & brand foundation** — Wikidata QID, Knowledge Panel, `sameAs` depth, NAP consistency.
10. **Authority & digital PR** — Tier-1 PT media coverage, industry-publication mentions, link graph, branded anchor text.
11. **Social & community signals** — LinkedIn / GitHub / Reddit / HN / X presence.
12. **E-E-A-T & on-site authority** — named authors, credentials, case studies, certifications.
13. **Measurement & feedback loop** — GSC, GA4 AI channel, BWT AI Performance, monitoring tool, manual prompt audit schedule.
14. **Strategic positioning & competitive intel** — named competitor set, share-of-voice trend, "no-click" strategy, pipeline-stage mapping.
15. **Plano de acção em 4 horizontes** — Horizonte 1 (semana 1-2, critical quick-wins **across dimensions**), 2 (semana 3-6, optimização do existente), 3 (semana 7-12, reforço estratégico), 4 (90+ dias, posicionamento longo prazo).

## Manutenção

Este ficheiro é actualizado pela Routine semanal — Segundas 9:00. Cada update **substitui completamente** o conteúdo anterior (o histórico vive em `audit-history.md` para tracking de deltas).
