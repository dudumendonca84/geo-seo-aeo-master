# destaque.ai — Audit History

Registo datado de todas as execuções SINAL. Cada entry inclui: score global, score por categoria avaliável, delta vs semana anterior, items movidos para DONE, items novos.

---

## 2026-06-29 — Primeira baseline (audit #001)

| Métrica | Valor |
|---|---|
| Score global | 38 / 100 |
| Band | Needs Improvement |
| Delta vs semana anterior | N/A (primeira execução) |
| Categorias avaliadas | 7 de 12 (5 inacessíveis por restrição de egress proxy) |
| Items novos no backlog | 16 (ENT-001 a ENT-005, JSON-001, CTN-001, CTN-002, PR-001, TECH-001 a TECH-003, MEAS-001, MEAS-002, META-001, SOC-001, EAT-001, SCHEMA-001, SCHEMA-002) |
| Items movidos para DONE | 0 |

### Score por categoria (2026-06-29)

| Categoria | Score | Avaliável? |
|---|---|---|
| 1. Técnica | N/A | Não (egress proxy) |
| 2. Performance / CWV | N/A | Não (egress proxy) |
| 3. On-page | 6/10 | Parcial |
| 4. Schema JSON-LD | N/A | Não (egress proxy) |
| 5. Optimização de imagens | N/A | Não (egress proxy) |
| 6. GEO técnica | 2/10 | Parcial |
| 7. Conteúdo & topical authority | 7/10 | Sim |
| 8. Entity & brand foundation | 2/10 | Sim |
| 9. Authority & digital PR | 4/10 | Sim |
| 10. Sinais sociais | 1/10 | Sim |
| 11. E-E-A-T on-site | 3/10 | Parcial |
| 12. Medição | N/A | Não (acesso interno) |

### Condicionantes desta execução

- Egress proxy do ambiente de agente bloqueou `destaque.ai:443` (policy denial). TTFB, security headers, robots.txt, sitemap, llms.txt, schema, HTML render — todos inaccessíveis.
- Prompt-test multi-engine não executado (engines não acessíveis via proxy).
- Nenhuma auditoria anterior para comparação de delta.
- Dado web público disponível via WebSearch (Google snippets, diretórios, sites de terceiros que mencionam destaque.ai).

### Principais observações desta execução

1. Ausência de identidade de entidade verificável (Wikidata, LinkedIn, Knowledge Panel) — gap crítico para um negócio que vende GEO.
2. Autor/fundador não nomeado publicamente em pesquisas.
3. Activo editorial forte: dado das 45 B2B SaaS PT auditadas — necessita nota metodológica.
4. Nenhuma cobertura de media Tier-1 PT identificada.
5. Nenhum perfil social verificado.

### Acção requerida antes da próxima auditoria

- Reportar bloqueio de `destaque.ai:443` ao administrador da plataforma para adição à egress policy.
- Executar checklist técnico manual (robots.txt, sitemap, llms.txt, headers, CWV) a partir de ambiente com acesso irrestrito.
- Executar prompt-test manual nos 5 engines (ChatGPT, Perplexity, Google AI Mode, Claude web, Bing Copilot).

---

*Próxima entrada esperada: semana de 2026-07-06.*
