---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-08-04

### ⚙️ Mudanças nas plataformas
- **Google Search Console — fim do suporte a FAQ rich results na API** — a partir de agosto de 2026, a Search Console API deixa de devolver dados de FAQ rich results, três meses após o desaparecimento do FAQ search appearance nos resultados de pesquisa (7 de maio de 2026) e a remoção do relatório correspondente e do suporte no Rich Results Test (junho de 2026). O FAQPage markup pode continuar no código — não gera erro — mas deixou de produzir qualquer resultado visível no Google. ([Search Engine Land](https://searchengineland.com/google-to-no-longer-support-faq-rich-results-476957))

### 💡 Implicações para destaque.ai
- FAQ schema deixa de ser uma alavanca de AEO para o Google (SERP) — não vale a pena continuar a vender FAQPage markup como tática de rich results a clientes portugueses; é awareness, não requer novo serviço.
- ChatGPT, Perplexity e outros AI answer engines continuam a poder extrair conteúdo de blocos FAQ mesmo sem o schema formal — o valor do formato pergunta-resposta mantém-se para GEO, só a codificação schema.org perdeu utilidade específica no Google.
- Quem tem dashboards ou relatórios automatizados (BigQuery, Looker Studio) ligados à Search Console API para métricas de FAQ deve confirmar que essas queries não quebram silenciosamente este mês.
