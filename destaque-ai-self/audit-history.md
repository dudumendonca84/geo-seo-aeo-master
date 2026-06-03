# destaque.ai — Audit History

Registo cronológico de auditorias SINAL. Entrada mais recente em cima.

Formato de cada entrada:
- Score global e por categoria
- Delta vs semana anterior (N/A na primeira auditoria)
- Items movidos para DONE
- Items novos adicionados
- Observações relevantes do período

---

## 2026-06-01 — Auditoria #1 (baseline)

**Score global: 49/100 — Needs Improvement**
(Primeira auditoria — sem delta disponível)

### Scores por categoria

| Categoria | Score | Delta |
|---|---|---|
| 1. Técnica | 72/100 | — (baseline) |
| 2. Performance / CWV | N/A | — |
| 3. On-page | 80/100 | — |
| 4. Schema / dados estruturados | 68/100 | — |
| 5. Optimização de imagens | 38/100 | — |
| 6. GEO técnica | 62/100 | — |
| 7. Conteúdo & topical authority | 65/100 | — |
| 8. Entity & brand foundation | 35/100 | — |
| 9. Authority & digital PR | 20/100 | — |
| 10. Sinais sociais | 25/100 | — |
| 11. E-E-A-T on-site | 25/100 | — |
| 12. Medição | 35/100 | — |

### Items concluídos (DONE)
Nenhum — primeira auditoria.

### Items novos adicionados ao backlog
BL-001 a BL-026 (26 items). Ver improvements-backlog.md.

### Observações do período

**Estado do site à data da auditoria:**
- 19 URLs no sitemap (últimas entradas: /blog/quando-geo-nao-compensa-criterios-saas em 2026-05-29, /estudo/visibilidade-ia-saas-portugal-2026 em 2026-05-31)
- 9 blog posts publicados desde Abril 2026
- Estudo original publicado 31 Mai 2026 — activo de PR não aproveitado ainda
- llms.txt: presente e bem estruturado
- Platform: Next.js Vercel, SSG/ISR, Brotli ✓

**Contexto de mercado (sem news-feed disponível):**
- Google I/O 2026 anunciou AI Mode a 1B+ utilizadores mensais, Gemini 3.5 Flash como default (19 Mai 2026)
- GPT-5.5 Instant tornou-se default do ChatGPT (5 Mai 2026)
- Competitor LusoAI mais visível em pesquisas web que destaque.ai para queries GEO Portugal
- models.md e prompts.md criados nesta sessão (ficheiros novos no repositório)

**Caveats desta auditoria:**
- TTFB não mensurável: Vercel Deployment Protection bloqueia curl directo
- PageSpeed Insights / CWV não acessíveis sem autenticação
- Prompt-test manual não executado: requer browser PT autenticado
- news-feed.md vazio: agente diário ainda não executou

**Próxima auditoria:** 2026-06-08
- Verificar se BL-001 a BL-006 (P0) foram iniciados
- Executar prompt-test manual (BL-011) e documentar em prompt-logs/
- Verificar se PR do estudo foi enviada a media Tier-1 PT (BL-006)
