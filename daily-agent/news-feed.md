---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-08-07

### 🔵 Anúncios oficiais
- **Ten advances in mathematics and theoretical computer science** — OpenAI ([openai.com/index/ten-advances-in-mathematics](https://openai.com/index/ten-advances-in-mathematics/)), 1 ago 2026. Uma versão interna do "Astra", o próximo modelo principal da OpenAI, resolveu 10 problemas matemáticos em aberto há pelo menos uma década (geometria de alta dimensão, teoria de códigos, criptografia de reticulados). Manuscrito de 249 páginas com certificados formais em Lean 4 publicado no GitHub — primeira vez que a OpenAI acompanha um anúncio de modelo com prova verificável por máquina.
- **5 new ways to explore the web with generative AI in Search** — Google ([blog.google/.../explore-web-generative-ai-search](https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/)), 6 mai 2026. AI Overviews/AI Mode passam a incluir "perspectives from discussions" (citações de Reddit, fóruns e blogs directamente na resposta), mais links embutidos inline no texto e sugestões de ângulos adicionais no fim das respostas.

### 📊 Estudos & dados
- **llms.txt shows no clear effect on AI citations, based on 300k domains** — SE Ranking, via [Search Engine Journal](https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/). De ~300.000 domínios analisados, apenas 10,13% publicam llms.txt; remover essa variável de um modelo XGBoost melhorou a precisão da previsão de citações — sem correlação mensurável com frequência de citação em LLMs.
- **LLMs.txt in 2026: The Full Guide** — [Limy.AI](https://limy.ai/blog/llms.txt-in-2026-the-full-guide). Auditoria de 90 dias sobre 500M+ visitas de bots de IA: apenas 408 pedidos foram directamente a `/llms.txt`. GPTBot, ClaudeBot, PerplexityBot e Google-Extended ignoram sistematicamente o ficheiro e rastreiam o HTML directamente.
- **AI Search Benchmark Report (Q1 2026)** — [Ahrefs](https://ahrefs.com/blog/ai-search-trends/). Amostra: 146M SERPs, 730 mil respostas de IA, 4M URLs citados em AI Overviews. AI Overviews reduzem cliques para o conteúdo mais bem posicionado em 58%; 28,3% das páginas mais citadas pelo ChatGPT não têm nenhuma visibilidade orgânica em keywords.

### ⚙️ Mudanças nas plataformas
- **Ranking volatility não confirmada** — Google Search, 1–6 ago 2026 ([SERoundtable](https://www.seroundtable.com/google-search-ranking-volatility-august-1-41811.html)). Ferramentas de tracking registaram um pico de instabilidade a partir de 1 de agosto, com publishers a reportar quebras de tráfego até 70%. O Search Status Dashboard da Google não regista qualquer incidente de ranking/indexação nesse período — sem confirmação oficial de core update.
- **Gemini — lacuna de medição de marca** — [Search Engine Land](https://searchengineland.com/measure-brand-visibility-gemini-484116), 3 ago 2026. Menções de marca dentro de respostas do Gemini não aparecem no Search Console nem no GA4; não existe ainda um relatório equivalente ao "Search Generative AI performance report" do Search Console para o Gemini standalone.

### 💡 Implicações para destaque.ai
- llms.txt continua sem valor demonstrado como sinal de citação (dois estudos independentes, ~300k domínios + 500M eventos de bot). Não recomendar como prioridade a clientes B2B SaaS PT; manter foco em entity/schema, conteúdo estruturado e presença nas fontes efectivamente citadas. Apenas awareness — sem mudança de pitch.
- O gap de medição no Gemini (sem GSC/GA4 equivalente) reforça a necessidade de ferramentas terceiras (Profound, Peec AI, Otterly) em qualquer proposta de auditoria GEO — vale nomear esta lacuna explicitamente ao apresentar a proposta de valor destes vendors.
- A aposta da OpenAI em prova formal/verificável (Astra) sinaliza que os próximos modelos de topo vão privilegiar respostas mais rigorosas e citáveis — reforça a tese de que conteúdo com dados, metodologia e fontes verificáveis (não listicles) ganha peso relativo nas citações em AI search. Sem mudança de pitch imediata; acompanhar.
