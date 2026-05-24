# destaque.ai — SINAL audit history

Formato: entrada por data, mais recente no topo. Regista delta vs semana anterior, itens movidos para DONE, itens novos adicionados ao backlog.

---

## 2026-05-24 — Auditoria inaugural (primeira baseline)

**Score global:** 28 / 100 (±12) — banda **Crítico / Necessita melhoria**
**Delta vs semana anterior:** n/a — primeira auditoria

### Score por categoria

| Categoria | Score | Notas |
|---|---|---|
| 1. SEO Técnica | ~6/15 | Parcialmente inferido — plataforma Framer; HTTP/2 + TLS 1.3 confirmados; restante NV |
| 2. Performance / CWV | ~6/10 | Estimado com base em benchmarks Framer; PageSpeed API rate-limited |
| 3. On-page | NV | Acesso HTTP bloqueado |
| 4. Schema | ~2/10 | Estimado baixo — gap típico em sites Framer novos |
| 5. Imagens | ~3/5 | Estimado — Framer auto-optimiza; alt coverage NV |
| 6. GEO técnica | ~2/10 | llms.txt, robots matrix, prompt-test: todos NV |
| 7. Conteúdo | NV | Acesso HTTP bloqueado |
| 8. Entity & brand | ~2/10 | Estimado baixo — Wikidata, Knowledge Panel provavelmente ausentes |
| 9. Authority / PR | NV | Acesso a ferramentas de link graph bloqueado |
| 10. Sinais sociais | ~3/5 | GitHub confirmado; LinkedIn estimado activo; resto NV |
| 11. E-E-A-T | NV | Acesso HTTP bloqueado |
| 12. Medição | NV | Acesso a GSC/GA4/BWT bloqueado |

### Contexto desta sessão

- Ambiente de execução com egresso restrito: destaque.ai retornou 403 (`x-deny-reason: host_not_allowed`) em todas as tentativas de acesso directo, incluindo curl, WebFetch e Wayback Machine CDX. A API PageSpeed Insights devolveu 429 (quota diária esgotada no projecto GCP do sandbox).
- Todo o acesso a serviços externos (ChatGPT, Perplexity, Google AI Mode, Claude web, Bing Copilot) estava bloqueado — prompt-test não executado.
- IP 216.198.79.1 confirmado via `getent hosts destaque.ai` → inferência de plataforma Framer.
- TLSv1.3 + HTTP/2 confirmados via handshake curl verbose.
- news-feed.md sem entradas: sem eventos de mercado recentes a processar.

### Ficheiros criados nesta sessão (inaugural)

- `references/models.md` — criado (modelos por engine; verificação primária pendente)
- `references/prompts.md` — criado (suite de 62 prompts, 7 tiers)
- `destaque-ai-self/audit-baseline.md` — criado (score + scorecard 12 categorias + plano 4 horizontes)
- `destaque-ai-self/improvements-backlog.md` — criado (P0: 9 items, P1: 5 items, P2: 6 items, P3: 5 items)
- `destaque-ai-self/audit-history.md` — este ficheiro

### Items movidos para DONE nesta semana

Nenhum — baseline inaugural.

### Items novos adicionados ao backlog

P0: P0-01 a P0-09 (9 items)
P1: P1-01 a P1-05 (5 items)
P2: P2-01 a P2-06 (6 items)
P3: P3-01 a P3-05 (5 items)
Observação: OBS-01 a OBS-05 (5 items)

### Próxima auditoria — pré-condições

1. Executar em ambiente com acesso HTTP irrestrito a destaque.ai.
2. Usar API key própria do PageSpeed Insights (evitar 429 na quota partilhada).
3. Correr os 24 prompts mandatórios manualmente (D1–D10, P1–P9, V1–V5) contra os 5 engines antes da sessão para ter resultados prontos a documentar.
4. Verificar modelos activos per `references/models.md` contra fontes Tier-1 antes de iniciar.
5. Verificar se P0-02 a P0-09 foram implementados; mover para DONE conforme.

---

*Próxima entrada: 2026-05-31 (auditoria semanal seguinte)*
