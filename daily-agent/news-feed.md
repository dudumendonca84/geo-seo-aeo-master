---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-08-22

### 🔵 Anúncios oficiais
- **Google conclui o August 2026 Spam Update** — [Search Engine Journal](https://www.searchenginejournal.com/google-begins-rolling-out-the-august-2026-spam-update/586301/), confirmado no Search Status Dashboard da Google. Rollout global iniciado a 18 de agosto às 09:27 PT, concluído a 21 de agosto (~2 dias e 16h). Terceira spam update de 2026; sem novas políticas anunciadas — aplicam-se as políticas de spam já existentes.

### 📊 Estudos & dados
- **Citações da Reddit no ChatGPT Search caem 86,4% em quatro dias** — dados da Promptwatch via [Search Engine Land](https://searchengineland.com/reddit-chatgpt-search-citations-fall-report-485473). Quota média de citações da Reddit cai de 3,83% (18 jul–7 ago) para 0,52% (14–17 ago). Sem queda comparável nas AI Overviews da Google (2,5%→2,1%, declínio gradual). A Reddit bloqueou o domínio inteiro a crawlers de IA via robots.txt no mesmo período.
- **14.472 citações de IA em pesquisa local analisadas** — Steady Demand via [MarTech](https://martech.org/business-websites-dominate-geminis-local-ai-citations/). Em 1.487 queries locais / 50 áreas metro dos EUA: ~60% das citações da Gemini apontam para o site próprio do negócio; Gemini e ChatGPT só coincidem no mesmo domínio citado em 8% dos casos e na mesma empresa recomendada em 4,2%; repetir a mesma query na Gemini só devolve as mesmas fontes em ~40% das vezes.
- **Links só-em-JavaScript ficam invisíveis para a maioria dos crawlers de IA** — experiência controlada de 41 dias por Vinicius Stanula, [Search Engine Land](https://searchengineland.com/) (19 ago). Só a stack de crawling da Google (não o Googlebot de indexação) executou JS e seguiu os links injetados; GPTBot e Bingbot só os descobriram depois de os links passarem para HTML estático.

### ⚙️ Mudanças nas plataformas
- **ChatGPT Search — mudança no query fan-out** — segundo a Promptwatch (via Search Engine Land), a OpenAI alterou o comportamento de fan-out de queries a 8 de agosto de 2026, coincidindo com o início da queda de citações da Reddit.

### 📄 Research académico
- **"Optimizing Visibility in Generative Engines: A Critical Survey of GEO (2023–2026)"** — [arXiv:2607.14035](https://arxiv.org/abs/2607.14035). Revisão de 45 estudos (nov 2023–jul 2026) conclui que GEO não é uma tarefa de ranking única, mas um pipeline estocástico e parcialmente observável (ativação de pesquisa, crawling/indexação, retrieval, reranking, citação, absorção factual, comportamento do utilizador), com métricas e critérios de evidência ainda pouco padronizados entre estudos.

### 💡 Implicações para destaque.ai
- A dependência de uma única fonte de citação (ex.: Reddit no ChatGPT) é frágil — uma queda de 86% em 4 dias mostra que a citabilidade pode mudar de um dia para o outro por decisão de plataforma (fan-out) ou do próprio site (robots.txt). Reforça o argumento para diversificar presença (site próprio, imprensa, diretórios) em vez de depender de UGC de terceiros.
- Para clientes B2B SaaS locais/PT, a baixa sobreposição entre motores e a baixa repetibilidade de citações (dado Steady Demand) confirma que "aparecer uma vez" não garante visibilidade sustentada — reforça o caso para tracking contínuo (tipo Peec/Profound) em vez de auditorias pontuais.
- O achado sobre links só-em-JS é acionável de imediato: recomendar SSR/pre-render da navegação interna aos clientes, já que mesmo crawlers de IA "avançados" (GPTBot, Bingbot) não executam JS de forma fiável — item técnico concreto para checklists de auditoria GEO.
