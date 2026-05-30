---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-05-29

### 🔵 Anúncios oficiais

- **Google I/O 2026: AI Mode ultrapassa 1 mil milhões de utilizadores mensais** — [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/). Em 19 de maio, Google anunciou que AI Mode atingiu 1B utilizadores/mês num ano de existência; AI Overviews chega a 2,5B mensais; Gemini 3.5 Flash torna-se modelo padrão global no AI Mode; novo Search box multimodal (maior redesign em 25 anos) aceita texto, imagens, ficheiros, vídeos e Chrome tabs como input combinado; Information Agents (monitorização contínua de tópicos em background) lançam para subscritores AI Pro/Ultra no verão 2026.

- **Google May 2026 Core Update em rollout** — [Search Engine Land](https://searchengineland.com/google-may-2026-core-update-rolling-out-now-478430). Segundo core update do ano iniciou a 21 de maio; duração estimada 2 semanas; Google descreve-o como "update regular para melhor surfaçar conteúdo relevante e satisfatório"; timing coincide com I/O, dificultando isolamento de causas de variações de ranking.

### 📊 Estudos & dados

- **AI Overviews reduzem CTR em 58% para conteúdo top-ranking** — [Ahrefs via Marketing LTB](https://marketingltb.com/blog/statistics/generative-engine-optimization-statistics/). Queda de CTR de 58% onde AI Overviews aparecem (era 34,5% em 2025); amostra de 300k+ domínios.

- **40–60% das fontes citadas em AI search renovam-se mês a mês** — [Conductor State of AEO/GEO 2026](https://www.conductor.com/academy/state-of-aeo-geo-report/). Google AI Mode e ChatGPT apresentam 40–60% de renovação de fontes mensalmente, tornando a visibilidade em AI search estruturalmente menos estável que rankings orgânicos.

- **llms.txt: 10% de adoção em 300k domínios, AI crawlers ignoram o ficheiro** — [aeoengine.ai](https://aeoengine.ai/blog/llms-txt-zero-usage-ai-bots-ignore). 500M+ visitas de AI bots em 90 dias revelaram apenas 408 pedidos diretos a /llms.txt; GPTBot, ClaudeBot e PerplexityBot crawlam HTML diretamente e ignoram o ficheiro.

### ⚙️ Mudanças nas plataformas

- **Google Search — Search box multimodal** — Lançado a 19 de maio em todos os países com AI Mode disponível; aceita input combinado de texto, imagens, ficheiros, vídeos e Chrome tabs; sugestões AI vão além do autocomplete clássico. [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/)

- **Perplexity — Computer para Mac (todos) + finance_search na Agent API** — Computer disponível para todos no Mac desde 11 de maio; finance_search tool adicionada ao Agent API com dados financeiros estruturados (quotes, financials, earnings, analyst estimates) para empresas públicas. [perplexity.ai/changelog](https://www.perplexity.ai/changelog)

### 📄 Research académico

- **"Why Retrieval-Augmented Generation Fails: A Graph Perspective"** — Arxiv, submetido 13 maio 2026. [arxiv.org/abs/2605.14192](https://arxiv.org/abs/2605.14192). Usa circuit tracing para modelar como evidência recuperada influencia geração de respostas em transformers — insight prático: a estrutura e autoridade semântica do documento afetam se é incorporado ou descartado pelo modelo.

### 💡 Implicações para destaque.ai

- Google I/O 2026 confirma transição estrutural para AI search agents como padrão de consumo: clientes B2B sem estratégia GEO estão expostos a quebras de tráfego progressivas — argumento de urgência concreto no pitch comercial. Requer atualização do deck com dados de 1B utilizadores AI Mode.
- A instabilidade de citação (40–60% de renovação mensal) é o argumento mais forte para serviço de monitorização contínua de brand mentions em AI — posicionar como "citability monitoring" recorrente, não projeto pontual.
- llms.txt reposicionar como "preparação B2A (Business-to-Agent)" e não como SEO: dado que crawlers AI ignoram o ficheiro, o valor real é para agentes IDE (Cursor, Claude Code) e MCP servers — narrativa diferenciadora para prospects técnicos. Só awareness, sem mudança de pitch principal.

## 2026-05-26

### 🔵 Anúncios oficiais

- **Google I/O 2026: AI Mode with Gemini 3.5 Flash & Information Agents** — [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/). Google upgrades AI Mode globally to Gemini 3.5 Flash (default model for all users); announces Information Agents — background topic monitors that push summarised updates — launching summer 2026 for AI Pro/Ultra subscribers; Generative UI in Search (custom dashboards/trackers, on-the-fly custom layouts) coming free to all users this summer. AI Mode now reports 1 billion monthly users; queries are 3× longer than traditional searches; follow-up queries +40% monthly in US.

- **Google May 2026 Core Update** — [Search Engine Journal](https://www.searchenginejournal.com/seo-pulse-google-launches-core-update-amid-i-o-ai-search-overhaul/575676/). Rollout started May 21, 2026; expected to complete ~June 4. Second core update of 2026, arriving 43 days after the March update — the tightest back-to-back cadence since the Penguin era. Early volatility reported in finance, healthcare, e-commerce, and SaaS.

- **OpenAI GPT-5.5 Instant — new ChatGPT default** — [TechCrunch](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/). Launched May 5 as the new default for all ChatGPT users. Web search accuracy: responses with web search enabled are 45% less likely to contain a factual error vs GPT-4o.

- **Anthropic web search tool v20260209** — [Anthropic API docs](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/web-search-tool). New tool version adds dynamic filtering: Claude can write and execute code to post-process search results before loading them into context, discarding irrelevant hits. Available on Claude Opus 4.7, Opus 4.6, and Sonnet 4.6.

### 📊 Estudos & dados

- **llms.txt crawler engagement: 0.1% of AI bot traffic** — OtterlyAI study via [aeo.press](https://www.aeo.press/ai/the-state-of-llms-txt-in-2026). 90-day monitoring of 62,100 AI bot visits; only 84 requests targeted llms.txt directly. 8 of 9 sites saw no measurable change in traffic after implementation.

- **AI Mode usage: 1B monthly users, queries 3× longer** — [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/). Volume doubles every quarter since launch; 31.3% of the US population projected to use generative AI search in 2026 (eMarketer).

### ⚙️ Mudanças nas plataformas

- **Perplexity — Deep Research on Opus 4.6 + structured outputs** — [beginnersinai.org](https://beginnersinai.org/whats-new-perplexity-2026/). Deep Research upgraded to Opus 4.6; can now generate presentations, spreadsheets, dashboards, and websites as direct outputs. Personal Computer for Mac extended to all users.

### 📄 Research académico

- **A-RAG: Scaling Agentic Retrieval-Augmented Generation via Hierarchical Retrieval Interfaces** — Feb 2026, [arxiv.org/abs/2602.03442](https://arxiv.org/abs/2602.03442). Introduces a three-tool retrieval stack (keyword search, semantic search, chunk read) enabling agents to retrieve at multiple granularities. Practical implication: content structured for both keyword and semantic retrieval increases citation probability in agentic AI search pipelines.

### 💡 Implicações para destaque.ai

- O Google I/O confirma que o volume em AI Mode duplica por trimestre e supera 1B de utilizadores mensais: a visibilidade em AI search já não é tendência futura mas canal presente. Recomenda-se novo módulo de serviço: "AI Mode Readiness Assessment" para clientes SaaS B2B.
- O May 2026 Core Update com cadência 43 dias eleva urgência de monitorização contínua — clientes portugueses em SaaS, finance e e-commerce estão entre os sectores com maior volatilidade reportada; acção imediata de diagnóstico de ranking.
- O estudo llms.txt (0.1% crawl, 8/9 sem impacto mensurável) contraria o hype: destaque.ai deve posicionar llms.txt como sinal complementar de baixo custo, não como solução primária de visibilidade em AI search.

## 2026-05-25

### 🔵 Anúncios oficiais

- **Google I/O 2026: AI Mode atinge 1 bilião de utilizadores mensais** — [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/) (19-20 Mai). Gemini 3.5 Flash torna-se o modelo-padrão global do AI Mode; novo design da Search box ("maior atualização em 25 anos"); Information Agents (pesquisa contínua em background 24/7) em beta para Google AI Pro & Ultra este verão; Personal Intelligence expandido a 200 países e 98 línguas sem subscrição.

- **Google May 2026 Core Update em rollout** — [searchengineland.com](https://searchengineland.com/google-may-2026-core-update-rolling-out-now-478430). Segundo core update de 2026, iniciado a 21 de Maio, conclusão prevista c. 4 de Junho. Ranking systems actualizados com modelos de qualidade baseados em Gemini; enfoque em conteúdo original e "people-first"; penalização de conteúdo automatizado e saturado de anúncios.

- **KPMG — aliança global com Anthropic** — [anthropic.com](https://www.anthropic.com/news/anthropic-kpmg) (19 Mai). Claude integrado no Digital Gateway da KPMG; acesso a 276.000+ colaboradores globais; inclui Claude Code e automação de workflows de negócio.

- **Perplexity Personal Computer disponível em Mac para todos os utilizadores** — [perplexity.ai](https://www.perplexity.ai/changelog/personal-computer-for-all-users-on-mac) (11 Mai). Conecta ficheiros locais, apps e browser Comet ao Computer; anteriormente limitado a subscribers pagos.

### 📊 Estudos & dados

- **GEO Benchmark 2026** — ConvertMate, 12.500+ queries, 8.000 domínios — [convertmate.io](https://www.convertmate.io/research/geo-benchmark-2026). 83% das citações em AI Overviews vêm de páginas fora do top 10 orgânico; apenas 6,82% dos resultados do ChatGPT coincidem com o top 10 do Google; páginas acima de 20.000 caracteres recebem 4,3× mais citações AI; tráfego de AI search converte 4,4× melhor que orgânico tradicional.

### ⚙️ Mudanças nas plataformas

- **Google Search — llms.txt: sinais contraditórios** — [searchenginejournal.com](https://www.searchenginejournal.com/seo-pulse-google-launches-core-update-amid-i-o-ai-search-overhaul/575676/). Equipa de Search afirma que llms.txt não é necessário para AI Search; Lighthouse 13.3 passou a auditar llms.txt por padrão e sinaliza erros em sites sem o ficheiro. Nenhuma grande empresa de IA confirmou publicamente leitura activa de llms.txt em produção.

### 📄 Research académico

- **"Why Retrieval-Augmented Generation Fails: A Graph Perspective"** — arXiv 2605.14192 — [arxiv.org](https://arxiv.org/abs/2605.14192). Usa circuit tracing para mapear o fluxo de informação através de camadas transformer durante decoding; identifica pontos estruturais onde RAG falha na atribuição correcta de fontes — relevante para perceber por que conteúdo bem estruturado é citado com mais fidelidade.

### 💡 Implicações para destaque.ai

- **AI Mode a 1B utilizadores confirma AI search como mainstream em Portugal**: clientes B2B já pesquisam via AI; o argumento de venda muda de "prepare-se para o futuro" para "já está a perder visibilidade agora". Urgência de pitch aumenta.
- **GEO Benchmark (83% citações fora do top 10) é o dado de maior impacto para proposta de valor**: demonstra que ranking clássico e visibilidade em AI são desacoplados — argumento central para vender GEO como serviço complementar ao SEO existente, não substituto.
- **Information Agents do Google exigem revisão de estratégia de conteúdo**: agentes que correm em background precisam de encontrar conteúdo estruturado, actualizado e específico; SaaS B2B com glossários técnicos, casos de estudo com dados e FAQs estruturadas ficam em vantagem. Avaliar se destaque.ai deve incluir auditoria de "agent-readiness" no serviço.
