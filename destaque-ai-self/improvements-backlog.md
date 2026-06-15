# destaque.ai — Improvements Backlog

Backlog de melhorias SINAL. Prioridades: P0 (crítico / bloqueia tudo), P1 (esta semana), P2 (próximo mês), P3 (90+ dias). Atualizar após cada auditoria semanal: mover itens resolvidos para DONE, adicionar novos itens, re-priorizar.

Última actualização: 2026-06-15 (audit SINAL semana #1)

---

## P0 — Crítico (bloqueia progresso em tudo o resto)

### [P0-001] Verificar e corrigir indexação do site
**Problema:** Nenhuma página de destaque.ai aparece nos resultados de busca (Google, Bing). Site potencialmente em modo staging, com robots.txt bloqueante, ou sem sitemap submetido.  
**Acção:** (1) Pesquisar `site:destaque.ai` no Google e Bing manualmente. (2) Verificar `destaque.ai/robots.txt` — confirmar que não tem `Disallow: /`. (3) Verificar se o site não está em modo password/draft na plataforma. (4) Submeter `sitemap.xml` no Google Search Console.  
**Esforço:** 30-60 min  
**Impacto:** Desbloquia todas as categorias GEO (sem indexação não há citação em nenhum engine)

### [P0-002] Adicionar destaque.ai ao allowlist de egress do ambiente de auditoria
**Problema:** O ambiente Claude Code on the Web não tem destaque.ai no allowlist de rede — impede verificação técnica em 8/12 categorias SINAL.  
**Acção:** Editar as network egress settings do ambiente remoto para incluir destaque.ai.  
**Esforço:** 5 min  
**Impacto:** Desbloqueia C1, C2, C3, C4, C5, C11, C12 nas próximas auditorias

---

## P1 — Esta semana

### [P1-001] Configurar Google Search Console
**Problema:** Não verificável externamente se GSC está configurado e a propriedade verificada.  
**Acção:** Verificar que a propriedade `destaque.ai` está verificada no GSC, que o sitemap está submetido, e que não há erros de rastreamento.  
**Esforço:** 15-30 min

### [P1-002] Criar LinkedIn company page para destaque.ai
**Problema:** Nenhuma LinkedIn company page encontrada nas pesquisas. Ausência prejudica entity resolution nos LLMs e credibilidade B2B.  
**Acção:** Criar página LinkedIn "destaque.ai" com descrição em PT-PT e EN, URL canónica, e ligação ao website.  
**Esforço:** 30 min

### [P1-003] Verificar robots.txt — matrix de crawlers IA
**Problema:** Postura do robots.txt desconhecida. Possível ausência de permissões explícitas para crawlers IA relevantes.  
**Acção:** Rever `destaque.ai/robots.txt`. Garantir Allow explícito para: `Googlebot`, `OAI-SearchBot`, `ChatGPT-User`, `Claude-User`, `Claude-SearchBot`, `PerplexityBot`. Decidir deliberadamente sobre: `GPTBot`, `ClaudeBot`, `Google-Extended`, `Meta-ExternalAgent`, `CCBot`, `Bytespider`.  
**Esforço:** 30-60 min (incluindo deploy)

### [P1-004] Submeter sitemap.xml no GSC e verificar estrutura
**Problema:** Sem sitemap verificado, rastreamento pode ser incompleto.  
**Acção:** Confirmar que `destaque.ai/sitemap.xml` existe, está bem formado, inclui todas as páginas publicadas, e está submetido no GSC.  
**Esforço:** 15-30 min

---

## P2 — Próximo mês (semana 3-6)

### [P2-001] Criar item Wikidata para destaque.ai
**Problema:** Nenhum QID Wikidata encontrado. Sem âncora no knowledge graph, LLMs não reconhecem a entidade.  
**Acção:** Criar item Wikidata com `instance of: company`, `country: Portugal`, `industry: digital marketing / generative engine optimization`, `official website`, `founded`, `founder: Eduardo Mendonça`.  
**Nota:** Verificar critérios de notabilidade Wikidata antes de criar — item sem fontes terciárias verificáveis pode ser marcado para eliminação.  
**Esforço:** 2h

### [P2-002] Implementar JSON-LD Organization + sameAs
**Problema:** JSON-LD não verificado. Ausência de `Organization.sameAs` é o gap mais comum em B2B PT.  
**Acção:** Implementar na homepage: `Organization` com `name`, `url`, `logo`, `sameAs` (LinkedIn, GitHub, Wikidata), `contactPoint`, `address`.  
**Esforço:** 2-4h Dev

### [P2-003] Publicar 4-6 artigos âncora com dados PT originais
**Problema:** Zero conteúdo indexado — sem substrato para citação IA.  
**Acção:** Publicar artigos com estrutura Q-A explícita, estatísticas originais (estudos próprios ou dados verificáveis), e named-source quotations. Exemplos: "GEO em Portugal: o que sabemos em 2026 (dados)", "Como funciona a citação em ChatGPT para empresas PT", "llms.txt: o que a evidência diz (não diz)".  
**Esforço:** 3-5 dias de escrita + revisão

### [P2-004] Configurar GA4 custom channel group "AI"
**Problema:** Sem canal "AI" configurado no GA4, tráfego de LLMs aparece como Referral genérico.  
**Acção:** Criar custom channel group com regex: `^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|you\.com|atlas\.openai\.com)`.  
**Esforço:** 45 min

### [P2-005] Activar Bing Webmaster Tools AI Performance
**Problema:** Único dashboard first-party de citações IA (lançado 9 Fev 2026). Não verificado se está activo.  
**Acção:** Verificar propriedade BWT para destaque.ai, activar AI Performance dashboard.  
**Esforço:** 20 min

### [P2-006] Implementar llms.txt alinhado com sitemap
**Problema:** llms.txt não verificado. Publicar como sinal de higiene técnica (não como lever de citação — evidência de consumo near-zero por bots IA em 2025-26).  
**Acção:** Criar `/llms.txt` com H1 = nome do projecto, blockquote de resumo, secções com URLs dos conteúdos principais. Alinhar URLs com o sitemap — divergência é pior que ausência.  
**Esforço:** 1-2h

---

## P3 — 90+ dias

### [P3-001] Primeira menção em media Tier-1 PT
**Problema:** Zero cobertura em Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios.  
**Acção:** Desenvolver narrativa jornalística (dado original, perspectiva distinta, ângulo noticiável). Contactar jornalistas de tecnologia/negócios. Um artigo com citação de Eduardo Mendonça como expert é o objectivo mínimo.  
**Esforço:** 1-3 meses

### [P3-002] Publicar case study público com dados reais de cliente
**Problema:** Sem E-E-A-T demonstrável (zero casos verificáveis).  
**Acção:** Obter permissão de um cliente para publicar resultados (tráfego orgânico antes/depois, citações LLM antes/depois). Publicar com metodologia explícita.  
**Esforço:** 1-2 meses

### [P3-003] Resolver ambiguidade de naming com domínios brasileiros
**Problema:** @destaqueia (TikTok, Facebook), destaque.ia.br, destaqueia.com.br confundem entity resolution.  
**Acção:** Monitorar se os LLMs confundem as entidades. Se sim, reforçar declaração de entidade (Wikidata, About page, press releases) com localização PT explícita.  
**Esforço:** Monitorização contínua; acção apenas se problem for detectado

### [P3-004] Atingir primeira citação verificada num engine LLM
**Meta:** destaque.ai mencionado em pelo menos 1 engine (ChatGPT, Perplexity, Google AI Mode, Claude, Copilot) para pelo menos 1 query de categoria GEO/SEO PT.  
**Desbloqueado por:** P0-001, P1-003, P2-001, P2-002, P2-003  
**Horizonte:** 3-6 meses pós-lançamento

---

## DONE

*Nenhum item concluído neste ciclo (auditoria inaugural).*

---

## Como usar este backlog

- **Cada segunda-feira:** revisar P0 e P1. Mover itens completos para DONE com data.  
- **Cada auditoria semanal:** o agente SINAL re-prioriza e adiciona novos itens com base nos findings.  
- **Critério de conclusão:** Um item é DONE quando a evidência de conclusão for verificável na auditoria seguinte (e.g., indexação confirmada via `site:` query, LinkedIn page URL confirmado, etc.).
