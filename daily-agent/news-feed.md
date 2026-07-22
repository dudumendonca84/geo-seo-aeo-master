---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-07-22

### 🔵 Anúncios oficiais
- **Search Console passa a mostrar desempenho de conteúdo social e vídeo** — [Google Search Central Blog](https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms), 7 jul 2026. Nova "platform property" no Search Console permite ligar contas de Instagram, TikTok, X e YouTube e ver cliques/impressões desse conteúdo nos resultados do Google Search e Discover.
- **Perplexity abre o benchmark WANDR** — [Perplexity Research](https://research.perplexity.ai/articles/wandr-benchmark-evaluating-research-agents-that-must-search-wide-and-deep) e [GitHub](https://github.com/perplexityai/wandr) (Apache 2.0), 14 jul 2026. 500 tarefas de research exigindo 170.495 registos com fonte verificável; a avaliação re-consulta cada página citada e confirma a alegação em vez de comparar com uma resposta-padrão fixa.

### ⚙️ Mudanças nas plataformas
- **Google — opt-out de AI Overviews / AI Mode no Search Console** — cobertura [ppc.land](https://ppc.land/google-gives-site-owners-a-toggle-to-exit-ai-overviews-and-ai-mode/), formalizado em jul 2026 após teste desde 3 jun 2026. Toggle a nível de domínio em Settings → "Search generative AI" remove o site das AI Overviews, AI Mode e do Discover generativo em 1-2 dias; não afeta treino de modelos nem ranking nos resultados clássicos. Controlo por página só está previsto para 2027.

### 📄 Research académico
- **Covering the Unseen: Information Demand Coverage Optimization for Retrieval-Augmented Generation** — Zhang, Jia & Zhu, [arXiv:2606.29328](https://arxiv.org/abs/2606.29328), aceite para ICTIR'26 (25 jul 2026). Propõe o GeoRAG: em vez de tratar a seleção de contexto como ranking por um único vetor de embedding, decompõe a query em sub-perguntas e otimiza a cobertura via distância de Sinkhorn-Wasserstein — relevante para respostas geradas a partir de queries multi-hop mal servidas por RAG convencional.

### 💡 Implicações para destaque.ai
- O opt-out de AI Overviews é uma decisão binária por domínio: para clientes B2B SaaS que dependem de visibilidade em IA, ativá-lo raramente faz sentido — mas vale confirmar em auditorias que nenhum cliente o ligou sem saber (ex. via agência ou CMS mal configurado).
- O WANDR da Perplexity confirma uma tendência de avaliação: qualidade de resposta de IA está a ser medida por verificação de evidência por fonte, não por match textual — reforça a prioridade de manter dados, citações e afirmações verificáveis no conteúdo de clientes.
- O paper GeoRAG mostra, do lado académico, que motores generativos falham em queries multi-hop quando o conteúdo cobre só uma dimensão do tema — sustenta recomendar estrutura por sub-pergunta explícita (H2/H3 por sub-tópico) em vez de apenas responder à pergunta principal.
