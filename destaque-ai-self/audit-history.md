# Audit History — destaque.ai SINAL
**Método**: Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs  
**Formato de entrada**: data, score global, delta vs semana anterior, scores por categoria, items DONE, items novos, notas

---

## 2026-06-22 — Auditoria inaugural

**Score global (parcial)**: 18/100 — Crítico  
**Delta vs semana anterior**: N/A (primeira auditoria)  
**Baseline anterior**: Não existia

### Scores por categoria

| Categoria | Score | NC? |
|---|---|---|
| 1. Técnica | NC | Bloqueio de egress nesta sessão |
| 2. Performance / CWV | NC | Bloqueio de egress |
| 3. On-page | NC | Bloqueio de egress |
| 4. Schema | NC | Bloqueio de egress |
| 5. Optimização imagens | NC | Bloqueio de egress |
| 6. GEO técnica | 2/10 | Parcial |
| 7. Conteúdo & topical authority | 2/10 | Parcial |
| 8. Entity & brand foundation | 2/10 | Parcial |
| 9. Authority & digital PR | 1/10 | — |
| 10. Sinais sociais | 3/10 | Parcial |
| 11. E-E-A-T on-site | NC | Bloqueio de egress |
| 12. Medição | NC | Bloqueio de egress |
| **Total parcial** | **10/50** | 7 NC |

### Items movidos para DONE nesta sessão
- Nenhum (auditoria inaugural)

### Items novos adicionados ao backlog
- P0: 5 items (P0-001 a P0-005) — todos relacionados com zero indexação Google
- P1: 10 items (P1-001 a P1-010) — entidade, conteúdo, medição, PR
- P2: 14 items (P2-001 a P2-014) — técnica, schema, performance, monitoring
- P3: 6 items (P3-001 a P3-006) — melhorias futuras
- META: 7 items de infra-estrutura de auditoria

**Total de items em backlog**: 35 acções + 7 meta

### Notas desta sessão

1. **Bloqueio de rede (egress policy)**: O ambiente Claude Code cloud bloqueou todo o acesso directo a `destaque.ai` (HTTP 403 "host_not_allowed"). Isto impediu a verificação de 7 das 12 categorias do scorecard e a execução de prompt-tests ao vivo. As 7 categorias NC tornam o score global indicativo, não definitivo. A próxima sessão deve ser executada de ambiente com acesso desbloqueado a destaque.ai.

2. **Finding crítico confirmado**: Zero páginas de destaque.ai indexadas no Google. `site:destaque.ai` — zero resultados. Este é o único finding que pode ser afirmado com certeza, e é o mais importante.

3. **Risco de identidade**: Detectada entidade "Destaque.IA" (domínio `destaque-ia.com`, email `info@destaque-ia.com`, Facebook/TikTok/Instagram @destaqueia) activa no Porto com conteúdo sobre IA. Potencial confusão de entidade com `destaque.ai`. A investigar.

4. **Contexto de mercado**: Google May 2026 Core Update concluído 2026-06-02; AI Overviews em ~48% das queries. Janela favorável para entrar cedo no espaço GEO PT-PT — mas apenas para quem tem indexação.

5. **Ficheiros criados nesta sessão**:
   - `references/models.md` — modelos default por engine, Junho 2026
   - `references/prompts.md` — test suite SINAL Tier 1–7 (D, C, E, P, PR, T, V)
   - `destaque-ai-self/audit-baseline.md` — auditoria completa 2026-06-22
   - `destaque-ai-self/improvements-backlog.md` — backlog P0–P3
   - `destaque-ai-self/audit-history.md` — este ficheiro

### Próxima auditoria — target: 2026-06-29

**Prioridade de verificação**:
1. Confirmar se P0-001 a P0-005 foram resolvidos (indexação Google)
2. Executar prompt-tests Tier 1+4+7 × 5 engines de ambiente com acesso de rede
3. Executar curl completo (TTFB, headers, robots.txt, sitemap, llms.txt) — desbloquear egress primeiro
4. Verificar Google Search Console coverage report
5. Confirmar criação de Wikidata item (P1-001) e LinkedIn company page (P1-002)

---
