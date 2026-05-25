# Improvements backlog — destaque.ai

Prioridades P0–P3. Re-priorizado a cada auditoria SINAL semanal.
**Última actualização:** 25 maio 2026 (auditoria inaugural)

---

## DONE

*(vazio — primeira auditoria)*

---

## P0 — Bloqueador crítico (resolver antes de tudo o resto)

| ID | Item | Categoria | Descoberto | Esforço est. | Owner |
|---|---|---|---|---|---|
| P0-01 | Diagnosticar causa de 0 páginas indexadas no Google (verificar robots.txt, meta noindex, GSC crawl errors, soft-launch routing) | Técnica | 25 Mai 2026 | 2h | Eduardo |
| P0-02 | Submeter sitemap.xml no Google Search Console (criar GSC property se não existe) | Técnica | 25 Mai 2026 | 30min | Eduardo |
| P0-03 | Confirmar robots.txt permite explicitamente: Googlebot, OAI-SearchBot, PerplexityBot, Claude-SearchBot | GEO técnica | 25 Mai 2026 | 1h | Eduardo |

---

## P1 — Alta prioridade (semanas 1–2)

| ID | Item | Categoria | Descoberto | Esforço est. | Owner |
|---|---|---|---|---|---|
| P1-01 | Verificar/criar llms.txt com URLs matching sitemap (sem divergência como no caso Congruent) | GEO técnica | 25 Mai 2026 | 2h | Eduardo |
| P1-02 | Activar Bing Webmaster Tools + AI Performance dashboard | Medição | 25 Mai 2026 | 1h | Eduardo |
| P1-03 | Verificar e resolver security headers em falta (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, CSP) | Técnica | 25 Mai 2026 | 2h | Eduardo |
| P1-04 | Executar PageSpeed Insights e registar LCP/INP/CLS baseline | Performance | 25 Mai 2026 | 1h | Eduardo |
| P1-05 | Verificar se HTML é server-rendered (não CSR/SPA que requer JS para conteúdo) | GEO técnica | 25 Mai 2026 | 30min | Eduardo |
| P1-06 | Verificar JSON-LD: Organization com sameAs, Person (Eduardo Mendonça), Service | Schema | 25 Mai 2026 | 4h | Eduardo |
| P1-07 | Activar GA4 com segmentação canal AI referral (chatgpt.com, perplexity.ai, claude.ai, bing.com/copilot) | Medição | 25 Mai 2026 | 2h | Eduardo |

---

## P2 — Média prioridade (semanas 3–6)

| ID | Item | Categoria | Descoberto | Esforço est. | Owner |
|---|---|---|---|---|---|
| P2-01 | Criar Wikidata QID para destaque.ai (instance of, country, founder, official website, LinkedIn ID) | Entity | 25 Mai 2026 | 2h | Eduardo |
| P2-02 | Criar/optimizar LinkedIn Company Page + sameAs no JSON-LD Organization | Entity | 25 Mai 2026 | 3h | Eduardo |
| P2-03 | Escrever 2 artigos piloto com estatísticas originais + named-source quotes (Princeton GEO methods #1 e #2) | Conteúdo | 25 Mai 2026 | 16h | Eduardo |
| P2-04 | Verificar/corrigir hreflang (pt-PT, en-GB, x-default) se site bilíngue | Técnica | 25 Mai 2026 | 1h | Eduardo |
| P2-05 | Verificar cobertura de alt text em todas as imagens (meta: 100%) | On-page / Imagens | 25 Mai 2026 | 2h | Eduardo |
| P2-06 | Criar página de autor Eduardo Mendonça com credenciais + Person schema + sameAs LinkedIn | E-E-A-T | 25 Mai 2026 | 3h | Eduardo |
| P2-07 | FAQPage schema em páginas de serviço (10–15 Q/A por página) | Schema | 25 Mai 2026 | 4h | Eduardo |

---

## P3 — Longo prazo (7+ semanas)

| ID | Item | Categoria | Descoberto | Esforço est. | Owner |
|---|---|---|---|---|---|
| P3-01 | Media outreach: 1–2 artigos de categoria em Observador, ECO, ou JN | Authority & PR | 25 Mai 2026 | 20h+ | Eduardo |
| P3-02 | Criar Google Business Profile (se serviço local Lisboa) | Entity local | 25 Mai 2026 | 1h | Eduardo |
| P3-03 | Publicar 2 artigos/mês com dados originais + case studies reais | Conteúdo | 25 Mai 2026 | ongoing | Eduardo |
| P3-04 | Lançar estudo original PT-PT sobre AIO/GEO em Portugal (ex: análise 5k queries PT-PT) | Conteúdo / PR | 25 Mai 2026 | Muito alto | Eduardo |
| P3-05 | Monitorização semanal brand mentions LLMs via Profound ou Peec AI | Medição | 25 Mai 2026 | ongoing | Eduardo |
| P3-06 | Contribuição editorial em Wikipedia PT-PT (categoria SEO/GEO) | Entity | 25 Mai 2026 | 4h | Eduardo |
| P3-07 | Parcerias editorial com media PT-PT (coluna regular) | Authority | 25 Mai 2026 | Alto | Eduardo |
| P3-08 | Verificar presença em pai.pt e diretórios PT de referência | Entity local | 25 Mai 2026 | 1h | Eduardo |

---

## Itens N/M — verificar na próxima auditoria quando acesso directo disponível

Estes itens não foram avaliados por limitação de ambiente. Avaliar na próxima auditoria via browser real:

- TTFB mediana 5 corridas (meta: < 200ms)
- HTML weight on the wire (meta: < 50KB compressed)
- Content-Encoding: br (Brotli activo)
- Title tag length e keyword coverage
- Meta description length e qualidade
- Heading hierarchy (H1 único, sem skip)
- Cobertura de alt text (baseline %)
- Bilingual copy hygiene
- LCP / INP / CLS via PageSpeed Insights
- Server header (plataforma)
- Cache headers
- llms.txt existência e conteúdo
- robots.txt completo (ver checklist §6.2 em audit-baseline.md)
- sitemap.xml conteúdo (URL count, breakdown, hreflang)
- JSON-LD blocos completos
- E-E-A-T page-level (author page, case studies, certifications)
- Funil de conversão com AI attribution

---

*Protocolo de actualização: a cada auditoria SINAL, mover items resolvidos para DONE, actualizar estado, adicionar novos items descobertos.*
