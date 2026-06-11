---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-06-11

### 🔵 Anúncios oficiais

- **Google Search Console: Generative AI Performance Reports** — [developers.google.com](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) (June 3, 2026). Novos relatórios dedicados no Search Console mostram impressões do site em AI Overviews, AI Mode e Discover AI features, com granularidade horária a mensal e filtros por página, país e device. Inclui toggle de opt-out que remove o site das respostas de IA sem afectar os resultados de pesquisa clássicos. Rollout gradual iniciado no Reino Unido, a expandir globalmente.

- **Google I/O 2026: AI Mode atinge 1B utilizadores mensais e lança Information Agents** — [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/). AI Mode ultrapassa 1 mil milhão de utilizadores mensais um ano após lançamento, com queries a duplicar cada trimestre. Gemini 3.5 Flash torna-se o modelo padrão global. Personal Intelligence expande para ~200 países e 98 idiomas sem subscrição. "Information Agents" — agentes que monitorizam a web 24/7 e enviam sínteses — anunciados para AI Pro/Ultra subscribers no verão 2026. AI Overviews chega a 2,5B utilizadores mensais activos.

- **Google publica guia oficial de GEO em Search Central** — [searchenginejournal.com](https://www.searchenginejournal.com/googles-new-guidance-claims-authority-over-seo-tools-and-aeo-geo/578162/) | [digitalapplied.com](https://www.digitalapplied.com/blog/google-official-seo-docs-generative-ai-optimization-june-2026). A 15 de maio, Google publicou "Optimizing your website for generative AI features on Google Search" na Search Central, e a 5 de junho adicionou AEO/GEO como categoria explícita na sua página de ferramentas e serviços SEO de terceiros — reconhecimento oficial que "optimizar para AI search é ainda SEO".

### 📊 Estudos & dados

- **AI search cresce 42,8% YoY, gap com Google Search estreita** — [surmado.com](https://www.surmado.com/blog/answer-engine-optimization-aeo-geo-guide). Q1 2025→Q1 2026: visitas AI search passaram de 15,6B para 27,4B (+42,8%); Google Search cresceu apenas 2,4% no mesmo período. O rácio Google/AI-search desceu de 4,9:1 para 3,5:1. Visitantes via AI search têm valor 4,4× superior ao visitante orgânico médio (chegam após síntese comparativa).

- **llms.txt: 10,1% de adopção, crawlers IA ignoram o ficheiro** — [aeo.press](https://www.aeo.press/ai/the-state-of-llms-txt-in-2026) | [wix.com/studio](https://www.wix.com/studio/ai-search-lab/llms-txt-myths). Estudo SE Ranking (300 K domínios): taxa de adopção de 10,13%. Em 500M de visitas de bots IA num período de 90 dias, apenas 408 foram directamente a `/llms.txt` — GPTBot, ClaudeBot, PerplexityBot ignoram o ficheiro e rastreiam HTML directamente. Excepção: IDEs de desenvolvimento (Cursor, Claude Code, GitHub Copilot) lêem `/llms.txt` de forma consistente.

### ⚙️ Mudanças nas plataformas

- **Google May 2026 Core Update — concluído, dados analisáveis a partir de hoje** — [searchenginejournal.com](https://www.searchenginejournal.com/googles-may-core-update-complete-after-volatile-rollout/577704/). Rollout de 21 mai a 2 jun (11 dias 21 horas). Glenn Gabe reportou impacto "across verticals and countries", mais pesado que o update de março. Penalizou ecossistemas de conteúdo de baixo valor, agregadores e content farms; beneficiou sites com expertise original e profundidade de nicho. Junho 11 é a data mínima recomendada para comparar dados de Search Console com baseline pré-update.

- **ChatGPT: novo sistema de memória e web search em Codex** — [releasebot.io](https://releasebot.io/updates/openai/chatgpt). Novo sistema de memória escalável com resumo revisto pelo utilizador (Plus/Pro, EUA). Codex passa a ter web search standalone em code mode, incluindo a partir de chamadas JavaScript aninhadas.

- **Claude Managed Agents em public beta** — [releasebot.io](https://releasebot.io/updates/anthropic/claude). Agentes com agendamento cron, variáveis de ambiente em vault, integrações com browser e CLI — automação recorrente com acesso autenticado a serviços externos.

### 📄 Research académico

- **"Retrieval-Augmented Generation: A Comprehensive Survey of Architectures, Enhancements, and Robustness Frontiers"** — arxiv [2506.00054](https://arxiv.org/abs/2506.00054) (junho 2026). Taxonomia de arquitecturas RAG: retriever-centric, generator-centric, híbrida e orientada a robustez — a última categoria mostra que qualidade e frescura das fontes indexadas são determinantes para a frequência de citação por sistemas AI.

### 💡 Implicações para destaque.ai

- **Novo KPI de negócio disponível hoje:** os relatórios de AI Search Console permitem mostrar a clientes SaaS B2B a sua visibilidade em AI Overviews e AI Mode com dados verificáveis. Oportunidade de diferenciação de pitch: "medimos a sua presença na AI search, não apenas rankings clássicos" — requer novo serviço de reporting ou extensão do relatório mensal existente.
- **May Core Update — janela de auditoria abre agora:** hoje é a data mínima para análise de impacto. Recomendar auditoria urgente a clientes com quedas de tráfego desde 21 de maio; focar em conteúdo com expertise original vs. agregado. Potencial novo serviço de diagnóstico e recovery.
- **llms.txt: apenas awareness para contextos de documentação técnica B2B** (portais de devs, help centers) — não promover como táctica GEO/AEO genérica. O valor real está em IDE agents (Cursor, Claude Code), relevante para clientes com produtos developer-facing.
