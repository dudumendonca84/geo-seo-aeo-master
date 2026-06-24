---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-06-24

### 🔵 Anúncios oficiais

- **Anthropic — Claude Tag** — [anthropic.com](https://www.anthropic.com/news/introducing-claude-tag). Lançado a 23 Jun em beta para clientes Enterprise e Team: Claude integra-se como membro de canais Slack, constrói contexto a partir do histórico de mensagens e pode receber delegação de tarefas por qualquer membro do canal. Sem API extra — funciona directamente via menção @Claude.

- **Google Search Console — Generative AI Performance Reports** — [developers.google.com](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). Relatórios dedicados de impressões em AI Overviews e AI Mode, com cinco dimensões: impressões, páginas, países, dispositivos e datas (granularidade hourly/daily/weekly/monthly). Rollout inicial a subset de proprietários de sites no Reino Unido; expansão global sem data confirmada. Dados de cliques **não incluídos** na versão actual.

- **Google — Toggle de opt-out de funcionalidades generativas** — [blog.google](https://blog.google/products-and-platforms/products/search/new-controls-website-owners/). Toggle no Search Console permite excluir um site de AI Overviews, AI Mode e AI Overviews em Discover. Opt-out não é usado como sinal de ranking nas restantes pesquisas orgânicas.

- **Google I/O 2026 — Métricas de escala** — [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/). AI Mode ultrapassou **1 bilião de utilizadores mensais**; AI Overviews tem **2,5 biliões de utilizadores activos mensais**. Modelo base actualizado para Gemini 3.5 Flash; Personal Intelligence expandida a ~200 países sem subscrição.

### 📊 Estudos & dados

- **97% dos ficheiros llms.txt nunca receberam um pedido** — Ahrefs, [ahrefs.com/blog/llmstxt-study](https://ahrefs.com/blog/llmstxt-study/). Análise de 137.210 domínios (Ahrefs Web Analytics, Mai 2026): ~28% tinham um llms.txt válido (~38K domínios), mas apenas ~1.100 (3%) receberam qualquer tráfego de crawlers. Nenhum major AI lab confirmou publicamente honrar o ficheiro em produção. Benefício prático actual limita-se a agentes IDE (Cursor, Cline) e documentação para developers.

- **50 domínios mais citados pelo Perplexity (Jun 2026)** — Ahrefs, [ahrefs.com](https://ahrefs.com/blog/most-cited-domains-perplexity/). Análise de 3,1 milhões de queries nos EUA; rankings equivalentes publicados para Copilot e Grok no mesmo período.

### ⚙️ Mudanças nas plataformas

- **Perplexity — Deep Research com Labs advancements** — [perplexity.ai/changelog](https://www.perplexity.ai/changelog/what-we-shipped-june-13th). A 19 Jun: Deep Research integrado em Computer com command access, forking e analytics APIs com custom credit limits. A 13 Jun: Research incorpora melhorias do Labs (criação de imagens/gráficos, browsing, orquestração inteligente).

- **Cloudflare — Bots representam 57,5% do tráfego HTML** — meados de 2026. Automated requests ultrapassaram tráfego humano na web; dado contextualiza a pressão crescente sobre crawl budget e gestão de robots.txt em contexto de AI crawlers.

### 💡 Implicações para destaque.ai

- **Search Console Gen AI Reports + opt-out toggle** são argumento de vendas imediato para clientes B2B com publicações/blogs: pela primeira vez há dados mensuráveis de visibilidade em AI Mode. Incluir "auditoria de visibilidade em AI features" no onboarding; o opt-out deve ser enquadrado como decisão estratégica (publisher vs. captura zero-click), não como protecção automática.
- **llms.txt sem adopção de crawlers** (97% sem pedidos, 137K domínios): evitar vender implementação de llms.txt como diferenciador até há adoção confirmada pelos labs. Comunicação correcta: "pré-posicionamento técnico" — não "optimização imediata". Excepção: clientes developer-tools/SaaS ganham discoverability em IDE agents já agora.
- **Claude Tag em Slack**: sinal de que Anthropic está a competir no espaço de ferramentas enterprise (Teams, Slack) directamente; monitorizar adoção e casos de uso B2B para avaliar se é serviço complementar ou concorrente de ferramentas internas dos clientes.

## 2026-06-22

Sem novidades significativas hoje. Fontes Tier 1 verificadas; nenhum anúncio oficial, estudo com dados ou mudança de plataforma nas últimas 48h que não tenha sido coberto nas entradas anteriores.

## 2026-06-21

### 🔵 Anúncios oficiais

- **Anthropic: governo dos EUA suspende acesso global a Fable 5 e Mythos 5** — [anthropic.com/news/fable-mythos-access](https://www.anthropic.com/news/fable-mythos-access). Diretiva de export control forçou Anthropic a desativar ambos os modelos para todos os clientes não-americanos; Claude Fable 5 (lançado para uso geral) e Claude Mythos 5 (camada sem algumas salvaguardas, para ciber-defensores e infra crítica) ficaram indisponíveis. Impacto imediato em integrações B2B europeias com a API Anthropic.

- **Perplexity — Personal Computer: orquestrador híbrido local/cloud lançado** — [perplexity.ai/changelog/what-we-shipped-june-13th](https://www.perplexity.ai/changelog/what-we-shipped-june-13th). Perplexity lança Personal Computer, primeiro sistema de inferência híbrido local-servidor que decide automaticamente o que corre no dispositivo vs. em agentes cloud; acompanham Comet iOS, Computer for Enterprise e Computer no Slack. Posicionamento como camada de pesquisa embutida em fluxos de trabalho, não como motor autónomo.

### 📊 Estudos & dados

- **Zero-click searches atingem 68% nos EUA em 2026** — SparkToro/Similarweb via [searchengineland.com](https://searchengineland.com/google-zero-click-searches-2026-study-479717). 68,01% das pesquisas Google (EUA, jan–abr 2026) não geraram nenhum clique — contra 60,45% em 2024, um aumento de 7,56 p.p. em dois anos. AI Overviews presentes em >20% das pesquisas; quando surgem, CTR cai ~60%. Painel clickstream Similarweb, desktop + mobile web.

- **AI Overviews reduzem cliques orgânicos em média 34,5%** — [ahrefs.com](https://ahrefs.com/blog/ai-overviews-reduce-clicks/). Estudo Ahrefs sobre impacto de AIO: queda média de 34,5% nos cliques orgânicos quando AIO aparece; caso extremo (Daily Mail): CTR desktop caiu de 25,23% para 2,79% (−89%). Marcas citadas no AIO ganham 35% mais cliques orgânicos e 91% mais pagos face a marcas não citadas.

### ⚙️ Mudanças nas plataformas

- **Microsoft 365 Copilot — DLP para pesquisa web em rollout mundial em junho** — [microsoft.com](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes). Data Loss Prevention impede que dados sensíveis de prompts saiam para pesquisa web no Copilot Chat; respostas continuam ancoradas em fontes internas. Roll-out worldwide em junho para organizações com licenças M365 Copilot.

### 💡 Implicações para destaque.ai

- A suspensão do Fable 5 por diretiva americana afeta clientes europeus que usem a API Anthropic diretamente; a destaque.ai deve mapear exposição de clientes a esta dependência e identificar se Claude.ai como produto (vs. API) mantém acesso — diferenciador de serviço de consultoria: auditoria de dependências de plataforma AI.
- Os dados de zero-clicks (68%) e queda de CTR (−34,5% médio com AIO) consolidam o argumento comercial GEO: estar na resposta AI é mais valioso do que o rank #1 clássico; estes números são citáveis em propostas a SaaS B2B portugueses com fontes verificáveis (SparkToro + Ahrefs).
- O Perplexity Personal Computer como orquestrador local/cloud é o primeiro sinal de "AI search no dispositivo" — aware para acompanhar adoção enterprise; sem mudança de serviço imediata.

## 2026-06-20

### 🔵 Anúncios oficiais

- **Google Search Central Live Milan** — [developers.google.com/search/events](https://developers.google.com/search/events). Google realizou evento presencial em Milão na semana de 16-19 junho. Tópicos abordados: chunking de conteúdo para AI Mode, sinais site-wide, comportamento dos cliques provenientes de AI Overviews, conteúdo pago/paywall e AI content. Sem anúncios de mudanças algorítmicas.

- **Google SCL Deep Dive Europe 2026 — voto aberto para próxima localização** — [developers.google.com/search/blog/2026/06/scl-deep-dive-europe-2026](https://developers.google.com/search/blog/2026/06/scl-deep-dive-europe-2026). Google abriu votação pública para escolher a próxima cidade europeia para o Search Central Live Deep Dive 2026, seguimento do formato aprofundado inaugurado em 2025.

- **OpenAI — GPT-5.5 Instant lançado; GPT-5.2 descontinuado** — [openai.com/index/gpt-5-5-instant/](https://openai.com/index/gpt-5-5-instant/). A partir de 12 de junho de 2026, os modelos GPT-5.2 (Instant, Thinking, Pro) foram retirados do ChatGPT e substituídos automaticamente por GPT-5.5. Lançadas "Monitoring Tasks" — pesquisa web periódica com notificação apenas quando há algo relevante — para Plus, Pro, Business e Enterprise.

### 📊 Estudos & dados

- **"Citations ≠ Recommendations" — Search Engine Journal, 18 jun 2026** — [searchenginejournal.com](https://www.searchenginejournal.com/). Novos dados mostram 19.8% de overlap entre sites citados e sites recomendados nas AI responses do Google; estar citado num AI Overview não implica ser recomendado como solução preferencial — distinção crítica para estratégia GEO.

- **AI Search Visibility Benchmarks 2026 — B2B SaaS** — [data-mania.com/blog/ai-search-visibility-benchmarks-2026-citation-rates-share-of-voice-b2b-saas/](https://www.data-mania.com/blog/ai-search-visibility-benchmarks-2026-citation-rates-share-of-voice-b2b-saas/). Amostra de 50 empresas SaaS: 17% da descoberta de software B2B ocorre agora via AI-generated answers (vs. 4% em 2025); 51% dos compradores B2B iniciam pesquisa em chatbot AI; tráfego referenciado por AI converte a 14.2% vs. 2.8% do Google Organic.

- **AI Referral Platform Analysis — Superlines, jun 2026** — [superlines.io/articles/ai-search-statistics/](https://www.superlines.io/articles/ai-search-statistics/). Claude regista crescimento de 386% YoY em referral traffic — maior crescimento de qualquer plataforma monitorizada — mas representa apenas 1.4% do total; ChatGPT mantém 87.4% do tráfego AI-referenciado. 91% das citações ocorrem exclusivamente numa única plataforma, tornando estratégia multi-plataforma necessária.

### ⚙️ Mudanças nas plataformas

- **Bing — extensão "kill switch" para desactivar Copilot AI** — [windowscentral.com](https://www.windowscentral.com/microsoft/bing/microsofts-search-lead-unveils-a-bing-kill-switch-for-copilot-ai-answers). Microsoft lançou extensão para Chrome e Edge que permite desactivar respostas Copilot AI no Bing e reverter para resultados tradicionais; Copilot Chat passa a incluir answer cards ricos (meteorologia, bolsa) em respostas conversacionais.

### 📄 Research académico

- **A-RAG: Scaling Agentic RAG via Hierarchical Retrieval Interfaces** — [arxiv.org/abs/2602.03442](https://arxiv.org/abs/2602.03442) (fev. 2026). Framework que expõe ao modelo LLM três ferramentas de retrieval hierárquicas (keyword search, semantic search, chunk read); heading hierarchy clara e segmentação semântica do conteúdo melhora probabilidade de citação em pipelines agentic-RAG.

### 💡 Implicações para destaque.ai

- O salto de 4% → 17% de descoberta B2B via AI num único ano é o argumento quantitativo mais forte disponível para justificar investimento GEO/AEO junto de clientes portugueses; integrar no pitch deck com fonte citável (data-mania benchmark, 50 empresas SaaS).
- A distinção citation vs. recommendation (19.8% de divergência, SEJ 18 junho) valida a necessidade de optimização orientada a recommendation e não apenas a citation — possível novo tier de serviço a propor, diferenciador face a concorrentes que apenas medem presença em AI responses.
- O crescimento de 386% do Claude em referrals exige incluir Anthropic como plataforma-alvo explícita na estratégia AEO de clientes; actualmente subrepresentada nos frameworks face a ChatGPT e Perplexity.

## 2026-06-18

### 🔵 Anúncios oficiais

- **Meta lança AI Mode no Facebook Search** — [Search Engine Land](https://searchengineland.com/meta-ai-mode-facebook-search-480393), 16 Jun 2026. Respostas geradas por IA dentro do Facebook baseadas em conteúdo público de Groups, Reels e Meta apps; substitui lista tradicional de resultados. Não há API pública nem programa de publisher anunciado.

- **Google clarifica product rich results: variantes com URL própria elegíveis** — [Google Search Central](https://developers.google.com/search/updates), 17 Jun 2026. Documentação actualizada confirma explicitamente que páginas de variante de produto com URL distinta são elegíveis para product rich results — alinhamento formal com prática já observada.

- **Google alerta: spam policies aplicam-se a citações em AI Overviews e AI Mode** — [seroundtable.com](https://www.seroundtable.com/june-2026-google-webmaster-report-41446.htm), Jun 2026. Aviso formal de que comprar ou manipular citações em AI features constitui violação das políticas de spam, sujeita às mesmas consequências de ranking que manipulação em resultados orgânicos.

### 📊 Estudos & dados

- **Consumer trust in AI search: −28 p.p. em 12 meses** — [Search Engine Land](https://searchengineland.com/new-ai-search-data-visibility-trust-480089). Confiança do consumidor em respostas de AI search caiu de 82% para 54% entre 2025 e 2026; segmento cético cresceu 6× no mesmo período. Dado com metodologia e sample size não divulgados publicamente no resumo — tratar com cautela para citação directa.

### ⚙️ Mudanças nas plataformas

- **Perplexity expande para Microsoft Office (Word, Excel, PowerPoint, Outlook)** — [perplexity.ai](https://www.perplexity.ai/hub/blog), Jun 2026. Perplexity Computer integrado nativamente em apps Microsoft 365; posicionamento explícito como camada de produtividade empresarial embutida em ferramentas existentes, não como motor de pesquisa autónomo.

- **Google Search Console: nova secção de performance em AI Overviews e AI Mode** — [developers.google.com](https://developers.google.com/search/updates), Jun 2026. Rollout de secção dedicada que apresenta impressões e cliques em AI features de forma separada dos dados orgânicos clássicos; métricas distintas permitem comparação directa de visibilidade IA vs. orgânico.

### 💡 Implicações para destaque.ai

- **Compliance de earned citations — diferenciador imediato**: Google confirmou que manipular citações IA viola spam policies. A destaque.ai pode comunicar explicitamente metodologia de earned citations por conteúdo como garantia de compliance; mensagem de risco relevante para clientes que avaliam agências concorrentes com abordagens duvidosas. Só awareness — não requer mudança de serviço.
- **Nova secção AI Mode no Search Console como KPI de retenção**: dados separados de visibilidade em AI Overviews/AI Mode permitem demonstrar ROI GEO com métricas verificáveis pelo próprio cliente. Incorporar no dashboard mensal de clientes; muda o pitch de "SEO clássico" para "visibilidade em IA search" com evidência directa do Google.
- **Meta AI Mode como novo canal de descoberta B2B**: Facebook Groups é um canal de comunidade activo para decisores PME em Portugal. A ausência de API pública implica que o único caminho de visibilidade é conteúdo orgânico de qualidade partilhado em Groups — argumento adicional para estratégia de conteúdo orientada a comunidade. Awareness — sem acção imediata.

## 2026-06-17

### ⚙️ Mudanças nas plataformas

- **GSC AI opt-out toggle tornou-se efectivo hoje (17 junho)** — https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports. O controlo de exclusão de AI Overviews, AI Mode e funcionalidades generativas no Discover passou a ser respeitado pelo Google a partir de hoje; sites que o tenham activado deixam agora de aparecer em AI responses, sem impacto em rankings orgânicos.

### 📊 Estudos & dados

- **The State of AI Visibility in B2B SaaS: 2026 Benchmark Report** — DerivateX, https://derivatex.agency/report/ai-visibility-b2b-saas-2026/. 50 empresas B2B SaaS analisadas com 1.400 prompts de buyer-intent em ChatGPT, Perplexity, Claude e Gemini: AI Presence Score médio de 56,9/100, com 44% das empresas abaixo de 50; AI search representa já 17% da descoberta de marca para B2B SaaS, face a 4% em 2025. Claude é a plataforma mais selectiva (88% de mention rate vs. 100% no ChatGPT e Gemini).

### 💡 Implicações para destaque.ai

- O GSC opt-out agora activo cria urgência retroactiva: qualquer cliente que não tenha tomado decisão informada até ontem está agora excluído por omissão ou incluído sem política definida — momento para contacto de follow-up com clientes com conteúdo técnico diferenciado.
- O estudo DerivateX (44% invisíveis em AI search, crescimento de 4% → 17% de branded discovery via AI) é o argumento quantificado mais directo para pitch B2B SaaS em Portugal disponível publicamente — incluir no deck com citação da fonte e notar que o benchmark é EUA, contexto PT pode divergir.

## 2026-06-16

### 🔵 Anúncios oficiais

- **Google Information Agents: rollout efectivo para AI Mode / AI Ultra** — [9to5Google](https://9to5google.com/2026/06/12/google-information-agents/) / [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/). Em 12 de junho, Robby Stein (VP Product, Search) confirmou que os information agents passaram de anúncio (I/O, maio) para rollout efectivo em todos os idiomas e mercados do AI Mode para subscritores AI Ultra. O agente monitoriza blogs, notícias, finanças em tempo real e redes sociais 24/7 e envia actualizações com links; expansão a planos inferiores prevista para o verão.

- **Google confirma oficialmente: llms.txt não é usado pelo Search** — [Search Engine Land](https://searchengineland.com/google-llms-txt-chrome-lighthouse-478246). Em 15 de junho, John Mueller clarificou que os ficheiros llms.txt nos sites Google existem por razões internas de CMS e não são usados para descoberta ou ranking. Simultaneamente, o Chrome Lighthouse adicionou uma auditoria para llms.txt — para fins de UX/agents no lado do cliente, não para indexação.

- **Optimizely + Conductor lançam plataforma AEO enterprise** — [CMSWire](https://www.cmswire.com/digital-experience/optimizely-conductor-unveil-aeo-platform/). Em 10 de junho, Optimizely e Conductor anunciaram uma plataforma AEO integrada com Agent Visibility Analytics para enterprise marketers rastrearem visibilidade em motores de IA e actuarem sobre insights de content discovery com agentes pré-construídos.

### 📊 Estudos & dados

- **Gap de execução: 43% declaram AI optimization como prioridade, só 14% rastreiam** — [GoodFirms](https://www.goodfirms.co/resources/seo-statistics-ai-search-rankings-zero-click-trends). 43% das empresas nomearam AI optimization como estratégia core em 2026; apenas 14% utilizam ferramentas de rastreamento de visibilidade em LLMs/AI Overviews. YouTube mentions e branded web mentions são os factores com maior correlação com visibilidade em ChatGPT, AI Mode e AI Overviews.

### 📄 Research académico

- **RAG: A Comprehensive Survey of Architectures, Enhancements, and Robustness Frontiers** — vários autores, [arxiv 2506.00054](https://arxiv.org/abs/2506.00054). Taxonomia de arquitecturas RAG em quatro classes (retriever-centric, generator-centric, hybrid, robustness-oriented); relevante para avaliar como pipelines de GEO recuperam e citam conteúdo em motores de IA generativa.

### 💡 Implicações para destaque.ai

- A confirmação oficial de que llms.txt não tem impacto em Search fecha o debate: não faz sentido oferecer implementação de llms.txt como serviço pago. Retirar da lista de deliverables se presente. **Acção interna.**
- O gap 43% vs. 14% (prioridade declarada vs. rastreamento efectivo) é uma entrada comercial: diagnóstico de visibilidade em LLMs como serviço modular inicial, de baixo risco, antes de contrato de retainer. Clientes SaaS B2B com GSC AI reports activos têm os dados brutos mas não o framework de análise. **Requer novo serviço.**
- O lançamento AEO da Optimizely/Conductor valida o mercado enterprise; o timing de entrar em Portugal antes da adopção local ainda é favorável. **Só awareness.**

## 2026-06-15

### 🔵 Anúncios oficiais

- **Anthropic — Claude Fable 5 disponível temporariamente em planos Pro/Max/Team** — [anthropic.com/news/claude-fable-5-mythos-5](https://www.anthropic.com/news/claude-fable-5-mythos-5). A partir de hoje (15 junho) e até 22 junho, Fable 5 está incluído sem custo adicional nos planos Pro, Max, Team e Enterprise seat-based; a partir de 23 junho requer créditos de uso até que a capacidade seja reforçada. Disponível imediatamente na API e em planos enterprise de consumo.

- **Perplexity Research upgrade (13 junho)** — [perplexity.ai/changelog](https://www.perplexity.ai/changelog/what-we-shipped-june-13th). Research integra capacidades anteriormente exclusivas do Labs: criação de imagens e gráficos, browsing web em tempo real, display de media e orquestração mais inteligente do processo de pesquisa; permite pesquisa multimodal end-to-end numa única sessão.

### 📊 Estudos & dados

- **"The 5-layer framework for measuring GEO performance"** — Search Engine Land, [searchengineland.com](https://searchengineland.com/the-5-layer-framework-for-measuring-geo-performance-477742). Análise de 150.000 páginas indexadas em 10 websites (março 2026, cross-vertical B2B e B2C): conteúdo genérico/educacional tem desempenho baixo em citações LLM porque os modelos conseguem gerá-lo autonomamente; dados originais, research proprietário e insights diferenciados são os maiores factores preditivos de citação.

### ⚙️ Mudanças nas plataformas

- **GSC AI Features opt-out toggle activo em 48h (17 junho)** — [developers.google.com](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). O controlo de exclusão de AI Overviews, AI Mode e Discover no Search Console torna-se efectivo na próxima terça-feira; sites que activem o toggle deixam de aparecer em AI responses sem impacto em organic rankings. Janela de decisão fecha esta segunda-feira.

### 💡 Implicações para destaque.ai

- **Acção urgente — prazo GSC toggle (48h):** Contactar clientes activos antes de segunda-feira para confirmar que a decisão de opt-in/opt-out está tomada com dados. Para SaaS B2B em Portugal com conteúdo técnico diferenciado, o benchmark ConvertMate (4,4× conversão via AI Mode) sustenta manter presença em AI responses.
- **Dado de investigação accionável:** A evidência de que dados originais e research proprietário superam conteúdo genérico em citações LLM é argumento directo para clientes que questionam ROI de produção de conteúdo — incorporar nos materiais de pitch como case para GEO content strategy diferenciada do SEO clássico; não requer novo serviço, actualização de messaging.
- **Anthropic Fable 5 até 22 junho sem custo:** Janela de teste para equipas técnicas de clientes avaliarem capabilities para workflows de research e due diligence; awareness apenas.

## 2026-06-13

### 🔵 Anúncios oficiais

- **Anthropic apresenta S-1 confidencial à SEC** — Anthropic ([anthropic.com/news/confidential-draft-s1-sec](https://www.anthropic.com/news/confidential-draft-s1-sec)). A 1 de junho, Anthropic submeteu confidencialmente um registo S-1 à SEC para uma potencial IPO, avaliada em ~$965 mil milhões após Série H de $65 mil milhões. Número de acções, preço e calendário ainda não definidos; dependem de market conditions e revisão da SEC.

- **OpenAI submete draft S-1 à SEC** — CNBC ([cnbc.com/2026/06/09/perplexity-ipo-2028-as-anthropic-openai-prepare-listings.html](https://www.cnbc.com/2026/06/09/perplexity-ipo-2028-as-anthropic-openai-prepare-listings.html)). A 8 de junho, OpenAI confirmou submissão confidencial de S-1, avaliada em ~$852 mil milhões. Juntamente com Anthropic e SpaceX (listagem concluída a 12 de junho), representa o maior pipeline de IPO em AI da história.

### ⚙️ Mudanças nas plataformas

- **Google Search — volatilidade de ranking persiste pós May 2026 Core Update** — Search Engine Roundtable ([seroundtable.com/google-search-ranking-volatility-41466.html](https://www.seroundtable.com/google-search-ranking-volatility-41466.html)). Ferramentas de monitorização (Semrush Sensor, MozCast, SERPmetrics) mantêm leituras elevadas na semana de 6-12 junho, após conclusão do core update a 2 junho. Profissionais SEO descrevem 2026 como o ano mais volátil do Google, com oscilações de 30-40% de tráfego orgânico overnight e recuperação parcial na semana seguinte.

- **GSC AI blocking toggle: efectivo em 4 dias (17 junho)** — Google Search Central ([developers.google.com/search/blog/2026/06/gen-ai-performance-reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)). O controlo de opt-out de AI features (AI Overviews, AI Mode, Discover) passa a ser respeitado pelo Google a partir de 17 junho. Configurações realizadas antes desta data não têm impacto imediato. O toggle não afecta organic rankings.

### 💡 Implicações para destaque.ai

- **Acção imediata (prazo: 17 junho):** Clientes B2B com conteúdo técnico diferenciado não devem activar o opt-out — tráfego via AI Mode em queries transaccionais converte 4,4× mais que organic clássico (ConvertMate GEO Benchmark 2026). Contactar clientes activos antes de segunda-feira.
- **IPOs de Anthropic e OpenAI** consolidam a AI search como mercado permanente. Para decisores conservadores em Portugal, estes marcos financeiros removem a objecção de timing — incorporar como evidência de maturidade do sector em materiais comerciais; requer apenas actualização de awareness.
- **Volatilidade 2026 como argumento de serviço:** Oscilações de 30-40% de tráfego orgânico criam urgência genuína para auditoria GEO/SEO — adaptar messaging comercial para enquadrar a volatilidade como risco mensurável e GEO como cobertura, não como aposta em tendência futura.

## 2026-06-12

### 🔵 Anúncios oficiais

- **Google Search Console: Generative AI Performance Reports** — [developers.google.com/search/blog/2026/06/gen-ai-performance-reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). Lançado a 3 junho, em rollout para subset de sites (primeiro no UK): relatórios dedicados para impressions em AI Overviews e AI Mode, com dimensões por URL, país, dispositivo e data. Não há dados de clicks, CTR nem query breakdown. A Search Console inclui também um controlo para bloquear conteúdo de aparecer em AI responses.

- **Google I/O 2026 — Search: AI Mode, Information Agents e redesign da Search box** — [blog.google/products-and-platforms/products/search/search-io-2026/](https://blog.google/products-and-platforms/products/search/search-io-2026/). Gemini 3.5 Flash torna-se o modelo padrão no AI Mode para todos os utilizadores globalmente. AI Mode ultrapassa 1 bilião de utilizadores mensais, com queries a dobrar por trimestre. Personal Intelligence expande para ~200 países e 98 línguas sem subscrição. Information Agents (monitorização contínua de topics em background) em rollout este verão, primeiro para Google AI Pro/Ultra. Redesign da Search box anunciado como a maior mudança em 25 anos.

- **Google Search Central — Guidance oficial para GEO/AEO** — [developers.google.com/search/docs/fundamentals/ai-optimization-guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Google publicou orientações técnicas estabelecendo-se como fonte de referência para práticas de otimização para features generativas (AI Overviews, AI Mode). Inclui recomendações sobre estrutura de conteúdo e alerta para cautela com ferramentas e dados de terceiros não validados.

### 📊 Estudos & dados

- **The SEO-GEO gap: AI search traffic differs from organic traffic** — [searchengineland.com](https://searchengineland.com/seo-geo-gap-ai-search-traffic-organic-traffic-478731). Análise mostra que visibilidade em AI search e tráfego orgânico clássico não são correlacionados: sites bem posicionados em AI Mode e AI Overviews não são necessariamente os que lideram nos resultados orgânicos tradicionais.

- **Google AI Mode envia tráfego em 69% das queries transacionais** — [searchengineland.com](https://searchengineland.com/google-ai-mode-traffic-transactional-queries-data-465604). Dados de terceiros indicam que AI Mode gera cliques em quase 7 em cada 10 queries com intenção de compra ou conversão — indicador relevante para SaaS B2B.

### ⚙️ Mudanças nas plataformas

- **Google — May 2026 Core Update completo** — Rollout iniciado a 21 maio, concluído a 2 junho (12 dias). Classificado por profissionais como mais volátil que o March 2026 update; quase 80% dos resultados top-3 do march update tinham sido alterados. [searchengineland.com](https://searchengineland.com/google-may-2026-core-update-rollout-is-now-complete-479119)

- **Perplexity — Search as Code (SaC)** — Nova arquitectura que trata search como primitivos programáveis para harnesses de agentes, em substituição do modelo monolítico. Permite controlo granular sobre estratégias de retrieval por tarefa. [research.perplexity.ai](https://research.perplexity.ai/articles/rethinking-search-as-code-generation)

- **Anthropic Claude — Web search disponível globalmente em todos os planos** — Search integrado com execução automática de código para filtrar resultados e reduzir uso de contexto; redução reportada de 85% em token usage comparado com ingestão directa. [anthropic.com/news/web-search](https://www.anthropic.com/news/web-search)

### 📄 Research académico

- **SoK: Agentic Retrieval-Augmented Generation (RAG)** — Autores múltiplos, [arxiv.org/abs/2603.07379](https://arxiv.org/abs/2603.07379) (março 2026). Taxonomia de arquitecturas RAG agênticas: LLMs a coordenar raciocínio multi-etapa, gestão dinâmica de memória e retrieval iterativo — base técnica para como AI search engines processam e citam fontes.

- **Structured Linked Data as a Memory Layer for Agent-Orchestrated Retrieval** — [arxiv.org/pdf/2603.10700](https://arxiv.org/pdf/2603.10700). Propõe dados estruturados em linked data como camada de memória persistente para agentes de retrieval — implicação directa para como schema.org e dados estruturados afectam citações em AI search.

### 💡 Implicações para destaque.ai

- **Novo serviço: AI Visibility Measurement.** O lançamento dos GSC AI reports sem CTR cria uma lacuna de medição que ferramentas tradicionais de SEO não cobrem. Oportunidade de posicionar destaque.ai como parceiro para clientes B2B em Portugal que precisam de framework de métricas para AI Overviews e AI Mode (impressions, share of voice, citation rate).

- **Urgência no pitch GEO para SaaS B2B.** AI Mode a 1B utilizadores com 69% de tráfego transaccional documentado remove o argumento "ainda é cedo". Clientes em Portugal com dependência de lead gen via pesquisa orgânica devem ser abordados com dados concretos, não com previsões.

- **Alinhamento com terminologia Google.** A guidance oficial de GEO/AEO do Google Search Central é uma âncora de credibilidade para o pitch junto de decisores mais conservadores; recomenda-se rever materiais comerciais para usar a mesma nomenclatura e citar fontes primárias Google. Requer apenas actualização de awareness e materiais — não muda serviço.

## 2026-06-07

### 🔵 Anúncios oficiais

- **Google Search Console: AI Performance Reports + opt-out toggle** — [developers.google.com/search/blog/2026/06/gen-ai-performance-reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). Anunciado a 3 junho: novo relatório em GSC mostra impressões de URLs em AI Overviews e AI Mode por página, país, dispositivo e data — sem dados de cliques, CTR ou queries. Em paralelo, toggle de opt-out que exclui o site de todas as respostas IA do Search (AI Overviews, AI Mode, Discover), efetivo a 17 junho 2026. Rollout inicial no Reino Unido apenas, sob pressão regulatória britânica; expansão global a seguir.

- **Google May 2026 Core Update concluído** — [developers.google.com/search/updates](https://developers.google.com/search/updates) / [coalitiontechnologies.com/blog/may-2026-google-core-algorithm-update](https://coalitiontechnologies.com/blog/may-2026-google-core-algorithm-update). Segundo core update de 2026: início a 21 maio, conclusão a 2 junho (~12 dias). Nenhum novo ranking system introduzido; Google reiterou guidance de helpful, people-first content. Cadência de ~6 semanas entre updates, abaixo dos 3-4 meses habituais em anos anteriores.

### 📊 Estudos & dados

- **"AI Overviews reduzem tráfego ~15% nas páginas citadas"** — arXiv (2026), via [authoritytech.io/blog/google-ai-overviews-impact-seo-2026](https://authoritytech.io/blog/google-ai-overviews-impact-seo-2026). Design difference-in-differences em 161.382 pares artigo-idioma; efeito concentrado em queries informacionais. Contrariamente, sites *citados* registam +120% de cliques orgânicos por impressão vs. não citados no mesmo query (Seer Interactive 2026).

- **GEO Benchmark 2026** — ConvertMate, [convertmate.io/research/geo-benchmark-2026](https://www.convertmate.io/research/geo-benchmark-2026). 12.500+ queries em 8.000 domínios: 83% das citações em AI Overviews provêm de páginas fora do top 10 orgânico; sobreposição ChatGPT/Google apenas 6,82%.

- **llms.txt: 10,13% de adoção em ~300k domínios** — SEranking, [seranking.com/blog/llms-txt/](https://seranking.com/blog/llms-txt/). Nenhum fornecedor major (OpenAI, Google, Anthropic, Meta, Mistral) confirmou leitura ou ação sobre llms.txt em produção; adoção uniforme independente do volume de tráfego do site (9,88%–10,54%).

### ⚙️ Mudanças nas plataformas

- **Perplexity — Comet browser: lançamento global gratuito** — [opentools.ai/news/perplexity-personal-computer-windows-launch](https://opentools.ai/news/perplexity-personal-computer-windows-launch). Comet saiu de waitlist para disponibilidade global free; integração com Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams). Perplexity reporta 780M queries/mês e anuncia sistema de inferência híbrido local-cloud apresentado no Computex 2026.

- **Anthropic — Claude Managed Agents em public beta** — [releasebot.io/updates/anthropic/claude](https://releasebot.io/updates/anthropic/claude). Harness de agente autónomo gerido com sandboxing seguro, tools integradas e SSE streaming. Web search na API com retorno de dados enriquecidos (incluindo SEC filings). A 15 junho, Anthropic separará planos de subscrição Claude.

### 💡 Implicações para destaque.ai

- O **opt-out toggle do GSC** (efetivo 17 junho) exige decisão antes dessa data: para SaaS B2B com conteúdo técnico diferenciado, manter presença em AI Mode é defensável — tráfego referido por IA converte 42% melhor e gera 37% mais receita por visita (Seer Interactive). Opt-out faz sentido apenas para publishers dependentes de volume publicitário.
- Os **novos relatórios de impressões IA no GSC** são a primeira fonte oficial para quantificar visibilidade GEO/AEO — oportunidade de novo serviço de tracking e reporting para clientes portugueses: estabelecer baseline antes de 17 junho.
- O dado **83% das citações fora do top 10 orgânico** (ConvertMate) reforça o argumento de venda central da destaque.ai: rank clássico não garante visibilidade IA, justificando GEO como serviço autónomo com ROI mensurável — incluir nas decks de pitch B2B.

## 2026-06-06

### 🔵 Anúncios oficiais

- **Google Search Console — Search Generative AI Performance Reports** — [developers.google.com](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). Lançados a 3 de junho em rollout faseado: novos relatórios dedicados em Search Console para visibilidade em AI Overviews e AI Mode, com dados de impressões, páginas, países, dispositivos e granularidade diária/semanal/mensal. Primeira ferramenta oficial para medir presença GEO directamente no GSC.

- **Google I/O 2026 — Search Agents e redesign do Search Box** — [blog.google](https://blog.google/products-and-platforms/products/search/search-io-2026/). Maior redesign da caixa de pesquisa em 25 anos: input multimodal (texto, imagens, ficheiros, vídeos, tabs Chrome), sugestões AI além de autocomplete. Search Agents de informação (operam 24/7 em background) em rollout para Google AI Pro/Ultra no verão. AI Mode migra para Gemini 3.5 Flash como modelo padrão global.

### 📊 Estudos & dados

- **Update: AI Overviews Reduce Clicks by 58%** — Ahrefs, [ahrefs.com](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/). Reanálise a 300.000 keywords (dados dezembro 2025): presença de AI Overview correlaciona com −58% de CTR médio na página top, agravamento significativo face ao −34.5% reportado no estudo anterior. Estudo usa dados agregados do Search Console em keywords informacionais.

### ⚙️ Mudanças nas plataformas

- **Google — May 2026 Core Update concluída** — [searchengineland.com](https://searchengineland.com/google-may-2026-core-update-rollout-is-now-complete-479119). Rollout concluído a 2 de junho (11 dias e 21 horas, início 21 de maio); consultores SEO descrevem-na como "typical core update" com volatilidade superior a março 2026. Sem orientações específicas do Google além do guia de conteúdo útil.

- **llms.txt — adopção de 10% sem suporte confirmado dos LLMs** — [seranking.com](https://seranking.com/blog/llms-txt/). Análise a 300.000 domínios: 10.13% de adopção, concentrada em sites de médio/baixo tráfego. Nenhum dos grandes LLMs (OpenAI, Google, Anthropic, Meta, Mistral) confirmou leitura do ficheiro em sistemas de produção; logs de servidor mostram pedidos mínimos dos crawlers IA ao ficheiro.

### 💡 Implicações para destaque.ai

- Os novos relatórios de IA generativa no Search Console criam uma abertura de pitch concreta: clientes SaaS B2B em Portugal que ainda não têm visibilidade sobre presença em AI Overviews/AI Mode podem justificar uma auditoria GEO com dados do próprio GSC — requer atualização do onboarding para incluir este relatório.
- O dado dos −58% de CTR com AI Overviews (estudo Ahrefs, 300k keywords) é um argumento quantificado para o deck comercial: sites B2B com tráfego informacional expressivo estão a perder cliques mesmo mantendo rankings, o que torna GEO/AEO diferenciador mensurável.
- llms.txt não justifica serviço pago neste momento; manter como item de boas práticas de implementação sem posicionar como diferenciador de visibilidade.
