---
title: destaque.ai — histórico de auditorias SINAL
format: entrada mais recente em cima
---

# Histórico de auditorias SINAL — destaque.ai

---

## 2026-06-08 — Primeira auditoria (baseline)

**Score global:** 14/100 (Critical)  
**Delta vs semana anterior:** N/A (primeira auditoria)  
**Auditor:** Claude Sonnet 4.6 (automated SINAL)

### Scores por categoria

| Categoria | Score | Delta |
|---|---|---|
| SEO Técnica | 8/15 | — |
| Performance / CWV | NV | — |
| On-page | NV | — |
| Schema / Dados estruturados | NV | — |
| Optimização de imagens | NV | — |
| GEO técnica | 1/10 | — |
| Conteúdo & topical authority | 2/15 | — |
| Entity & brand foundation | 2/15 | — |
| Authority & digital PR | 1/10 | — |
| Sinais sociais | 1/5 | — |
| E-E-A-T on-site | NV | — |
| Medição & atribuição | NV | — |

**NV = não verificável** do ambiente de execução (Anthropic cloud sandbox bloqueia destaque.ai na política de rede de egress). Score calculado sobre categorias verificáveis: 15/70 ≈ 14/100.

### Items movidos para DONE
Nenhum (primeira auditoria).

### Items novos adicionados ao backlog
- P0-01 a P0-06 (6 items P0)
- P1-01 a P1-12 (12 items P1)
- P2-01 a P2-09 (9 items P2)
- P3-01 a P3-04 (4 items P3)
- Total: 31 items

### Contexto de mercado (news-feed.md)
`daily-agent/news-feed.md` estava completamente vazio — nenhuma entrada. O GitHub Actions workflow para o agente diário não tinha corrido. Sem contexto de mercado disponível para esta auditoria.

### Principais findings
1. `site:destaque.ai` = 0 resultados indexados no Google — bloqueador estrutural para toda a estratégia GEO.
2. Sem item Wikidata, sem Knowledge Panel, sem LinkedIn company page indexado.
3. Ausência em todos os engines testados via WebSearch proxy (4 queries de categoria PT-PT).
4. Ambiente de execução bloqueou acesso directo ao site — 6 categorias marcadas NV; reverificar com acesso browser.
5. TLS (TLSv1.3) e HTTP/2 confirmados activos — base técnica de transporte adequada.

### Constrangimentos desta auditoria
- Proxy Anthropic egress bloqueou destaque.ai (HTTP 403 `host_not_allowed`).
- PageSpeed Insights API: HTTP 429.
- web.archive.org: inacessível do sandbox.
- DNS (dig/nslookup): não disponível no container.
- Prompt-test manual não executável: engines AI não acessíveis do sandbox.

### Próxima auditoria
Alvo: 2026-06-15. Executar fora do sandbox Anthropic para resolver as categorias NV.
Prompt-test rotativo Tier 2/3/5/6: C1, C2, E1, PR1, T1, T2 (6 prompts rotativos), mais todos os Tier 1, 4, 7.
