---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-08-02

### 📊 Estudos & dados
- **AI Recognizes 96% Of Brands But Mentions Almost None** — Victorious Q2 2026 Quarterly Search Report, via Search Engine Journal (https://www.searchenginejournal.com/ai-brand-mention-study-victorious-spa/582765/). 175 brands testados em 8 plataformas de IA (ChatGPT, Claude, Gemini, Copilot, Perplexity, Google AI Overviews/AI Mode, Meta AI): 96% descritos com precisão quando perguntados directamente, mas 89% nunca apareceram em respostas a perguntas de research de categoria.
- **AI models favor familiar brands in search** — geoSurge study, via Search Engine Land (https://searchengineland.com/ai-models-favor-familiar-brands-search-study-484054). 66 prompts de compra correram 60x cada (29 mai–9 jun 2026) = 3.960 respostas, 13.281 pesquisas fan-out, 1.416 observações a nível de marca; marcas já "conhecidas" pelo modelo geraram 3,2x mais pesquisas de follow-up (55,7% vs 17,4%). Correlação, não causalidade comprovada.
- **Google's "Generative AI" Search Console Data Is A Trap For Marketers** — Search Engine Journal (https://www.searchenginejournal.com/googles-generative-ai-search-console-data-is-a-trap-for-marketers/584018/). Após ~8 semanas do relatório de IA generativa no GSC (lançado 3 jun 2026): mostra impressões sem cliques correspondentes, trata toda citação em AI Overviews como "posição 1" (distorcendo a posição média), e pode mascarar quebras reais de tráfego/receita orgânica.

### ⚙️ Mudanças nas plataformas
- **Google Search Console — platform properties** — rollout global de um tipo de propriedade que não exige posse de domínio, permitindo ver o desempenho de posts do Instagram, TikTok, X e YouTube na Pesquisa, Discover e Google News; acompanhado de novo guia de análise de conteúdo social/vídeo (grupos de queries, filtro de tendência 24h, comparação de formatos). Google Search Central Blog (https://developers.google.com/search/blog/2026/07/platform-properties-social-video-guide), 29 jul 2026.

### 📄 Research académico
- **Optimizing Visibility in Generative Engines: A Critical Survey of Generative Engine Optimization (2023–2026)** — arXiv (https://arxiv.org/abs/2607.14035), submetido 15 jul 2026. Survey crítico de 45 estudos: GEO é um pipeline estocástico e parcialmente observável (activação → crawling/indexação → retrieval → reranking → citação → proeminência → absorção factual → fidelidade → comportamento do utilizador), não uma tarefa de ranking única; relevância tópica e posição no contexto são as alavancas mais reprodutíveis, heurísticas genéricas transferem mal entre motores, e reescritas de conteúdo orientadas a citação podem prejudicar o retrieval.

### 💡 Implicações para destaque.ai
- O gap 96%/89% do estudo Victorious é validação externa forte da tese central: reconhecimento ≠ citação. Para clientes B2B SaaS portugueses — tipicamente menos "conhecidos" nos dados de treino do que as marcas americanas do estudo — este gap tende a ser ainda mais largo, reforçando o argumento para trabalho de fundação de entidade em vez de assumir que awareness de marca basta.
- O viés de familiaridade da geoSurge (3,2x mais pesquisas de follow-up para marcas conhecidas) é um vento contrário estrutural para clientes PT que competem com incumbentes de categoria mais conhecidos (frequentemente US/UK) nos dados de treino dos modelos — reforça peso a dar a fundação de entidade/marca e PR digital em planos de acção para clientes com baixo reconhecimento, já que isto não se resolve só com fixes técnicos.
- A crítica da SEJ aos dados de "IA generativa" do GSC (posição-1 inflacionada, impressões sem cliques) é directamente accionável para o loop de medição de clientes: reforça a orientação de não confiar apenas nos relatórios de IA do GSC, cruzando sempre com segmentação de canal IA no GA4 e uma ferramenta dedicada (Peec/Profound/Otterly). Awareness, sem mudança de pitch necessária.
