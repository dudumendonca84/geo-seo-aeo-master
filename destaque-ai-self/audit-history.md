# Audit history — destaque.ai SINAL

Registo datado de cada auditoria semanal. Mais recente em cima.

---

## 2026-05-25 — Auditoria inaugural (W21)

**Score global:** 18 / 100 (Crítico)
**Delta vs semana anterior:** n/a (baseline)
**Auditor:** Claude Sonnet 4.6 (claude-code-action)
**Duração:** ~45 min

### Scores por categoria

| Categoria | Score | Delta |
|---|---|---|
| 1. Técnica | 4 / 12 | baseline |
| 2. Performance / CWV | N/M | baseline |
| 3. On-page | N/M | baseline |
| 4. Schema (JSON-LD) | N/M | baseline |
| 5. Optimização de imagens | N/M | baseline |
| 6. GEO técnica | 2 / 12 | baseline |
| 7. Conteúdo & topical authority | 1 / 10 | baseline |
| 8. Entity & brand foundation | 1 / 12 | baseline |
| 9. Authority & digital PR | 1 / 10 | baseline |
| 10. Sinais sociais | 1 / 8 | baseline |
| 11. E-E-A-T on-site | N/M | baseline |
| 12. Medição | N/M | baseline |

### Items movidos para DONE

Nenhum (auditoria inaugural).

### Items novos adicionados ao backlog

- P0-01: 0 páginas indexadas Google (desbloqueador crítico)
- P0-02: Submeter sitemap.xml no GSC
- P0-03: Confirmar robots.txt postura AI crawlers
- P1-01 a P1-07: (ver backlog)
- P2-01 a P2-07: (ver backlog)
- P3-01 a P3-08: (ver backlog)

### Achados principais

1. **Zero indexação Google** — `site:destaque.ai` = 0 resultados (25 Mai 2026). Desbloqueador crítico.
2. **Zero presença em AI engines** — nenhum engine (ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot) menciona ou cita destaque.ai nos prompts Tier 1/4/7 testados.
3. **Sem entidade verificável** — Wikidata, Knowledge Panel, LinkedIn Company Page ausentes.
4. **Sem cobertura de media** — zero menções em imprensa PT-PT de referência.
5. **Infra técnica positiva** — domínio resolve, TLS 1.3, HTTP/2. Ponto de partida sólido.

### Limitação de ambiente

Todas as medições directas (TTFB, HTML, headers, robots.txt, sitemap, schema, llms.txt) não foram obtidas por bloqueio do egress proxy da plataforma de execução (`x-deny-reason: host_not_allowed`). Scores N/M reflectem esta limitação, não ausência de implementação.

### Próxima auditoria

**Data:** 1 junho 2026
**Foco:** verificar H1.1–H1.6 concluídos; primeiro número de páginas indexadas no GSC; primeira entrada no BWT AI Performance; re-teste prompt suite completo.

---

<!-- Próximas entradas acima desta linha -->
