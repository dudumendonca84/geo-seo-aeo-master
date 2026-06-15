# destaque.ai — Audit History

Registo cronológico de auditorias SINAL semanais. Mais recente em cima. Cada entrada inclui score global, scores por categoria, delta vs semana anterior, items movidos para DONE, novos items.

---

## 2026-06-15 — Auditoria #1 (baseline inaugural)

**Score global:** 14 / 100 (apenas subset de 5 categorias verificáveis; 7 categorias bloqueadas por restrição de egress de rede)  
**Delta vs semana anterior:** N/A (primeira auditoria)  
**Auditor:** Claude Fable 5 / claude-sonnet-4-6 (ambiente remoto)

### Scores por categoria

| Categoria | Score | vs anterior |
|---|---|---|
| C1 — Técnica | N/V | — |
| C2 — Performance / CWV | N/V | — |
| C3 — On-page | N/V | — |
| C4 — Schema | N/V | — |
| C5 — Optimização de imagens | N/V | — |
| C6 — GEO técnica | 2 / 10 | — |
| C7 — Conteúdo & topical authority | 1 / 10 | — |
| C8 — Entity & brand foundation | 1 / 10 | — |
| C9 — Authority & digital PR | 1 / 10 | — |
| C10 — Sinais sociais | 2 / 10 | — |
| C11 — E-E-A-T on-site | N/V | — |
| C12 — Medição | N/V | — |

### Items movidos para DONE esta semana
*Nenhum — auditoria inaugural.*

### Novos items adicionados ao backlog
- P0-001: Verificar e corrigir indexação do site
- P0-002: Adicionar destaque.ai ao allowlist de egress do ambiente de auditoria
- P1-001: Configurar Google Search Console
- P1-002: Criar LinkedIn company page para destaque.ai
- P1-003: Verificar robots.txt — matrix de crawlers IA
- P1-004: Submeter sitemap.xml no GSC e verificar estrutura
- P2-001: Criar item Wikidata para destaque.ai
- P2-002: Implementar JSON-LD Organization + sameAs
- P2-003: Publicar 4-6 artigos âncora com dados PT originais
- P2-004: Configurar GA4 custom channel group "AI"
- P2-005: Activar Bing Webmaster Tools AI Performance
- P2-006: Implementar llms.txt alinhado com sitemap
- P3-001: Primeira menção em media Tier-1 PT
- P3-002: Publicar case study público com dados reais
- P3-003: Resolver ambiguidade de naming com domínios brasileiros
- P3-004: Atingir primeira citação verificada num engine LLM

### Achados principais desta semana
1. **Zero indexação detectada** — site ausente nos resultados de busca para todas as queries testadas (10 queries, 2+ engines).
2. **Zero entity presence** — sem Wikidata QID, sem LinkedIn company page, sem corroboração externa.
3. **Zero citações LLM** — destaque.ai não aparece em nenhum dos 10 prompt-tests (proxy via WebSearch; metodologia com caveats).
4. **Restrição de egress bloqueou 7/12 categorias** — limitação do ambiente, não do site.
5. **Concorrentes dominantes em PT:** 3HASH (4 aparições), Infinidata (3), AISO Hub (2) nas queries de categoria testadas.

### Modelos confirmados neste ciclo
- ChatGPT: GPT-5.5 Instant (default desde 5 Mai 2026)
- Perplexity: Best mode / auto
- Google AI Mode: Gemini 3.5 Flash (default desde 19 Mai 2026)
- Claude: Fable 5 (default desde 9 Jun 2026)
- Bing Copilot: GPT-5 (GPT-5.5 em rollout)

### Notas de contexto de mercado
- A semana não teve entradas no `daily-agent/news-feed.md` (feed ainda sem execuções registadas). Contexto de mercado extraído das fontes Tier-1 via WebSearch.
- Google I/O 2026 (Mai 2026): Gemini 3.5 Flash como default universal; AI Mode >1B utilizadores mensais; query fan-out agora público.
- OpenAI (Mai 2026): GPT-5.5 Instant como default ChatGPT — novo modelo mais acessível substitui GPT-4o.
- Anthropic (Jun 2026): Fable 5 lançado 9 Jun 2026 — modelo mais capaz em produção geral.

---

*Próxima auditoria: 2026-06-22. Prioridade: restaurar egress, completar C1-C5, C11-C12.*
