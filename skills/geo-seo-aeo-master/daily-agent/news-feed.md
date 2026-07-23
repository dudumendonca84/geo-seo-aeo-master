---
title: Daily GEO/SEO/AEO news feed
maintained_by: daily-agent (anthropics/claude-code-action)
schedule: 07:00 UTC daily
editorial_voice: sober, primary-source-anchored, no hype
---

<!-- Mais recente em cima. Agente adiciona ## YYYY-MM-DD após este cabeçalho. -->
<!-- Truncar para últimos 60 dias quando passar de 60 entradas ## -->

## 2026-07-23

### 🔵 Anúncios oficiais
- **Google lança Gemini 3.6 Flash, 3.5 Flash-Lite e 3.5 Flash Cyber** — [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/) (21 jul 2026). O Gemini 3.5 Flash-Lite — o modelo mais rápido e económico da série 3.5 (350 tokens de output/seg, $0,30/1M input, $2,50/1M output) — está a ser encaminhado para queries da Google Search (confirmado pela Google: pesquisas são encaminhadas para o Flash-Lite consoante a pergunta, sobretudo em compreensão de intenção conversacional, pesquisa agentic e processamento de documentos), a par da app Gemini. O Gemini 3.6 Flash reduz o uso de tokens de output em 17% face ao 3.5 Flash (até 65% em alguns benchmarks).

### 📊 Estudos & dados
- **Semrush: topical authority ainda determina liderança de categoria em AI search** — [Search Engine Land](https://searchengineland.com/topical-authority-ai-search-482875) (22 jul 2026). Análise de 1.094 categorias nos EUA (5 prompts/categoria, snapshots mensais Jan–Jun 2026 no ChatGPT, 220k+ domínios, 50k+ marcas, 600k+ citações, 220k+ URLs) mostra que só 15,2% das categorias tinham um "dono" claro em Junho 2026, com 53,7% ainda em disputa aberta entre vários concorrentes; as categorias de maior volume são as menos consolidadas.

### ⚙️ Mudanças nas plataformas
- **Google Search — routing para Gemini 3.5 Flash-Lite** — ver anúncio acima; ainda não fica claro se substitui o Gemini 3.5 Flash como modelo primário do AI Overviews/AI Mode ou se é usado como camada adicional de routing por latência/tipo de query. Absorvido em `references/models.md` (secção Google + Deck Builder API mappings, `gemini` `cost_optimized`).

### 💡 Implicações para destaque.ai
- A maioria das categorias B2B ainda não tem "dono" claro em AI search (só 15,2% consolidadas, Semrush) — janela real para SaaS portugueses capturarem share of voice antes da consolidação; usar o dado como prova social em outreach. Absorvido em `references/benchmarks.md` §26.
- O routing da Google para um modelo mais leve (Flash-Lite) em parte das queries de pesquisa reforça a prioridade de conteúdo directamente extraível (respostas curtas, estruturadas, com dados) — awareness, sem mudança de metodologia de auditoria (o mecanismo de teste via Deck Builder já cobre troca de modelo).
- Sem mudança de pitch ou novo serviço hoje.

**Nota de integridade de dados**: verificadas as 7 fontes Tier 1 — único achado genuinamente novo e não-duplicado na janela 21-23 jul foi o lançamento Gemini 3.6 Flash/3.5 Flash-Lite/3.5 Flash Cyber (blog.google, 21 jul). Tier 2: Semrush/Search Engine Land (22 jul, incluído acima); descartados por serem repackaging de news antigas — SE Ranking/SEJ sobre llms.txt e adoção (dado de 16 jun 2026, já fora da janela de 24-48h) e a "Expert Advice" do AI Mode/AI Overviews (blog.google, 6 mai 2026 — já teria sido coberto por entradas anteriores a esta árvore, fora de janela). Candidato "actualização de algoritmo do fim-de-semana 18-19 jul" mantido descartado por falta de confirmação oficial (mesmo critério das entradas de 07-20 e 07-21). Tier 3/4 sem itens verificáveis. arXiv cs.IR/cs.CL: nenhum paper novo dentro da janela estrita (paper ICTIR'26 "Covering the Unseen" tem data de conferência 25 jul 2026, ainda sem release pública de dados/insight prático avaliável). Gap de 1 dia sem execução nesta árvore (22 jul) — coberto pela janela alargada desta entrada. Absorvido: Gemini 3.5 Flash-Lite em `references/models.md` (tabela Google + Deck Builder API mappings, `gemini` `cost_optimized` de `gemini-2.5-flash` para `gemini-3.5-flash-lite`); Semrush topical authority em `references/benchmarks.md` §26. Sem mudança metodológica sinalizada (SKILL.md § Methodology evolution — routing para Flash-Lite não altera o audit workflow, já coberto pelo mecanismo existente de fetch do Deck Builder antes de cada audit). Quinta-feira — sem weekly drafts. Nada a absorver por limiar de 60 (28 headers no news-feed após esta entrada). `node scripts/validate-skill-tables.mjs` corrido antes do commit. Sessão iniciada a partir de uma branch de trabalho fornecida que continha apenas a árvore raiz legada e desactualizada (`daily-agent/`, `references/`, etc. na raiz do repo, sem `daily-prompt.md` canónico) — detectado ao correr `git log origin/main` (mesmo erro recorrente já sinalizado em praticamente todas as entradas anteriores); corrigido antes de qualquer escrita, mudando para uma branch local a seguir `origin/main` e usando o caminho canónico `skills/geo-seo-aeo-master/`. Commit feito directamente em `main` por instrução explícita da rotina (sem PR).

## 2026-07-21

### ⚙️ Mudanças nas plataformas
- **Alemanha classifica as AI Overviews da Google e as respostas da Perplexity como "publisher", retirando-lhes o escudo de responsabilidade da UE** — [Tech Times](https://www.techtimes.com/articles/320790/20260716/germany-strips-ai-search-its-eu-liability-shield-worlds-first-media-ruling.htm), confirmado pela [The Decoder](https://the-decoder.com/germany-puts-googles-ai-overviews-and-perplexity-under-media-law-in-first-of-its-kind-ruling/) (achado de recuperação de gap — decisão do regulador de media alemão ZAK a 14 jul 2026, não capturada em tempo real por esta rotina). A ZAK decidiu que as AI Overviews da Google e as respostas da Perplexity funcionam como conteúdo editorial próprio, não como resultados neutros de pesquisa, retirando-lhes a isenção de responsabilidade de plataforma prevista no Digital Services Act — primeira decisão regulatória do género a nível mundial. Complementa uma decisão civil anterior do Tribunal Regional de Munique (28 mai 2026), que já tinha responsabilizado a Google por uma afirmação falsa gerada numa AI Overview sobre dois publishers.

### 📄 Research académico
- **AI advice suppresses people's willingness to say "I don't know", even when the advice is wrong and accuracy is incentivized** — Capraro, Marcoccia & Quattrociocchi, [arXiv:2607.13562](https://arxiv.org/abs/2607.13562) (submetido 15 jul 2026), cobertura em [The Register](https://www.theregister.com/ai-and-ml/2026/07/19/using-ai-makes-people-less-likely-to-admit-they-dont-know-something/5274567) (19 jul 2026). Em 5 experiências com 3.132 participantes (4 pré-registadas), o simples acesso a um conselho de IA errado fez cair a disposição de responder "não sei" de 44% para 3% e a precisão de 27% para 9%, enquanto a confiança subiu de 30% para 76%; incentivos monetários para precisão só recuperaram parcialmente o efeito (disposição a suspender juízo: 3%→8%; precisão: 9%→16%, ainda abaixo do baseline de 27%).

### 💡 Implicações para destaque.ai
- A decisão da ZAK é o primeiro sinal regulatório concreto (não apenas um caso pendente) de que respostas geradas por IA podem ser tratadas como conteúdo editorial do próprio motor, sujeito a lei de media — reforça o argumento "citação correta reduz risco legal/reputacional" ao propor GEO a clientes B2B em mercados regulados (fintech, saúde, legal). Absorvido em `references/frameworks.md` §9 (hallucinated negative associations), como precedente concreto a par do caso pendente *LTL LED v. Google* já documentado. Por agora awareness para Portugal — sem sinal de decisão equivalente a nível de UE ou nacional.
- O estudo Capraro et al. (confiança sobe de 30% para 76% mesmo quando a IA está errada) é o dado mais forte até agora sobre porque a confiança do utilizador numa resposta de IA não é um proxy fiável de exactidão — reforça a distinção metodológica já seguida (citação ≠ fidelidade, cf. CITETRACE §24) e o argumento de que "a IA disse" não implica verificação pelo utilizador. Absorvido em `references/benchmarks.md` §25. Sem mudança de pitch, apenas reforço de argumentário existente.
- Sem mudança de metodologia de auditoria sinalizada hoje.

**Nota de integridade de dados**: verificadas as 7 fontes Tier 1 (Google Search Central, blog.google, OpenAI, Anthropic, DeepMind, Bing, Perplexity) — sem anúncios genuinamente novos e não-duplicados na janela estrita de 24-48h (19-21 jul). Tier 2 (Ahrefs, Search Engine Land, Search Engine Journal, Profound, Otterly, Peec) sem achados de plataforma de IA não cobertos. Tier 3 (Aleyda Solis, Lily Ray, Glenn Gabe, Mike King) e Tier 4 (Hacker News, Reddit) sem itens substantivos verificáveis na janela. Dois candidatos fora do core GEO/AEO foram considerados e excluídos: a disputa Google/Apple vs. UE sobre acesso de assistentes de IA a Android/iOS ao abrigo do Digital Markets Act ([CNN](https://www.cnn.com/2026/07/19/tech/apple-google-ai-eu-regulations), 19 jul) — sobre acesso a nível de SO, não sobre mecânica de pesquisa/citação; e o processo de copyright de editoras (Hachette, Cengage, Elsevier) contra o treino do Gemini (TechCrunch, 14 jul) — sobre treino de modelo, não sobre AI Overviews/AEO. A alegação recorrente de um novo update de ranking do Google a 18-19 jul, sinalizada por trackers de terceiros, continua sem confirmação oficial e não é repetida aqui (já investigada e descartada em 07-20). arXiv cs.IR/cs.CL: um paper genuinamente novo e relevante (2607.13562, ver acima); "What Gets Cited" (SIGIR '26) permanece sem versão pública nova. Sessão iniciada a partir da branch de trabalho fornecida, que continha apenas a árvore raiz legada e desactualizada (`daily-agent/`, `references/`, `SKILL.md`, etc. na raiz do repo) — mesmo erro recorrente já sinalizado em praticamente todas as entradas anteriores (ver nota de 07-16 e 07-20 para o histórico completo); detectado e corrigido antes de qualquer escrita, mudando para `origin/main` e o caminho canónico `skills/geo-seo-aeo-master/`. `node scripts/validate-skill-tables.mjs` corrido antes do commit. Commit feito directamente em `main` por instrução explícita da rotina (sem PR).

## 2026-07-20

### 📄 Research académico
- **CITETRACE — Verified Misguidance: Measuring Structural Citation Failures in Search-Augmented LLMs** — Seo, Jeong, Kim, Jang, Lee, [arXiv:2605.28565](https://arxiv.org/abs/2605.28565) (submetido 27 mai 2026 — achado de recuperação de gap, não capturado por esta rotina até agora). Dataset CITETRACE: 11.200 queries reais de 28 comunidades, emparelhadas com 112.000 respostas de 10 modelos de 5 fornecedores, gerando 761.495 pares de citação avaliáveis num framework de 3 dimensões (alinhamento intenção-propósito, adequação da fonte, fidelidade resposta-fonte). Padrão sistemático identificado ("Verified Misguidance"): os modelos citam fontes reais e acessíveis mas falham numa ou mais dimensões — 30,6% das citações distorcem a fonte citada, 27,1% vêm de fontes de domínio inadequado, e ao nível da resposta até 90% dos utilizadores encontram pelo menos uma citação problemática.

### 💡 Implicações para destaque.ai
- O dado da CITETRACE (até 90% das respostas com pelo menos uma citação estruturalmente falha) é evidência quantitativa forte de que "estar citado" não implica ser representado com fidelidade — reforça a distinção metodológica já seguida pela destaque.ai entre presença de citação e qualidade da citação, sem exigir mudança de scorecard hoje. Absorvido em `references/benchmarks.md` §24.
- Sem anúncios oficiais, mudanças de plataforma ou estudos de mercado genuinamente novos e não-duplicados nas últimas 24-48h — dia de notícias muito leve (ver nota de integridade de dados).
- Sem mudança de pitch, novo serviço ou de metodologia de auditoria hoje.

**Nota de integridade de dados**: verificadas as 7 fontes Tier 1 (sem itens novos e não-duplicados face à entrada de 07-19), Tier 2 (Ahrefs, Search Engine Land, Search Engine Journal, Profound, Otterly, Peec, SE Ranking — sem achados de plataforma de IA não cobertos), Tier 3 (Aleyda Solis, Lily Ray, Glenn Gabe, Mike King — sem posições substantivas verificáveis na janela) e Tier 4 (Hacker News, Reddit — sem itens verificáveis). Uma alegação de volatilidade de ranking Google a 18 jul ("weekend fluctuations") foi investigada e descartada por ser explicitamente não-confirmada por qualquer tracker ou pela Google (critério de exclusão "mudanças algorítmicas confirmadas, não rumor"). Dois candidatos adicionais foram descartados por já estarem cobertos em entradas anteriores: "Gemini 3.5 Flash como modelo por defeito" (já coberto no I/O 2026, 19-20 mai) e "Connected Apps no AI Mode" (já coberto em 07-17). O único achado genuinamente novo para esta rotina é uma recuperação de gap académico (arXiv 2605.28565, submetido 27 mai, nunca antes capturado). Absorvido em `references/benchmarks.md` §24. Sem mudança metodológica sinalizada (SKILL.md § Audit workflow não afectado — o achado reforça a distinção já existente entre citação e fidelidade, não introduz uma dimensão auditável nova por site). Segunda-feira — sem weekly drafts. Nada a absorver por limiar de 60 (26 headers no news-feed após esta entrada). `node scripts/validate-skill-tables.mjs` corrido antes do commit. Sessão iniciada a partir de `origin/main` (a branch de trabalho fornecida só continha a árvore raiz legada desactualizada — mesmo padrão recorrente já sinalizado em praticamente todas as entradas anteriores; ver nota de 07-16 para o histórico completo). Commit feito directamente em `main` por instrução explícita da rotina (sem PR).

## 2026-07-19

### 🔵 Anúncios oficiais
- **Perplexity lança SPACE (Sandboxed Platform for Agentic Code Execution)** — [Perplexity Hub](https://www.perplexity.ai/hub/blog/secure-sandboxes-for-agents) (15 jul 2026), confirmado pela [SiliconANGLE](https://siliconangle.com/2026/07/15/perplexity-launches-secure-sandbox-make-ai-agents-secure-powerful/). Nova infraestrutura de execução para o agente Perplexity Computer: cada tarefa corre isolada numa microVM Firecracker (tecnologia open-source da AWS, arranque ~5ms), com pausa/retoma, "forking" de sessão e credenciais isoladas por sessão; construída em 10 semanas, processa agora 100% do tráfego de produção do Computer, com arranque 3-5x mais rápido do que a solução anterior.

### ⚙️ Mudanças nas plataformas
- **Google AI Overviews — carrossel "Top Stories" totalmente activo (mobile, EUA)** — [Search Engine Land](https://searchengineland.com/top-stories-roll-out-in-google-ai-overviews-482615), confirmado por porta-voz da Google (17 jul 2026); cobertura complementar na [Search Engine Roundtable](https://www.seroundtable.com/google-top-stories-ai-overviews-41583.html). O carrossel de notícias em destaque — já em teste desde maio — está agora totalmente disponível dentro do AI Overviews para pesquisas mobile nos EUA em tópicos noticiosos em desenvolvimento; combina resumos estáticos gerados por IA com reportagem dinâmica em tempo real de fontes como NYT e Yahoo, destacando as "Preferred Sources" da Google.

### 💡 Implicações para destaque.ai
- O SPACE da Perplexity é infraestrutura de execução (isolamento de sessão/credenciais para agentes), não muda mecânica de citação — awareness sobre a maturidade crescente dos agentes de research da Perplexity, sem impacto directo no pitch.
- O carrossel Top Stories reforça a tendência já registada (Connected Apps, 07-17) de a Google expandir o AI Overviews de resumo estático para camada editorial dinâmica dentro da própria SERP — mantém a pressão de atribuição/tráfego já discutida em entradas anteriores; ainda sem sinal de expansão à UE/PT. Awareness, sem mudança de pitch.
- Sem mudança de metodologia de auditoria necessária hoje.

**Nota de integridade de dados**: dia de notícias muito leve na janela estrita de 24-48h (18-19 jul) — verificadas as 7 fontes Tier 1, Tier 2 (Ahrefs, Search Engine Land, Search Engine Journal, Profound, Otterly, Peec, SE Ranking), Tier 3/4 e arXiv cs.IR/cs.CL, sem itens genuinamente novos datados de 18 ou 19 jul (o recap diário da Search Engine Roundtable para essas datas ainda não estava publicado à hora da pesquisa). Dois itens de gap foram recuperados e incluídos aqui: o carrossel Top Stories (confirmado 17 jul, não capturado na entrada de 07-17) e o SPACE da Perplexity (15 jul, infraestrutura distinta da actualização do Perplexity Computer já coberta em 07-15 — memória/troca de modelo vs. isolamento de execução). Sessão iniciada a partir de `origin/main` (a branch de trabalho fornecida só continha a árvore raiz legada desactualizada — mesmo padrão recorrente já sinalizado nas entradas anteriores). Domingo — sem weekly drafts. Commit feito directamente em `main` por instrução explícita da rotina (sem PR).

## 2026-07-18

### 🔵 Anúncios oficiais
- **Google (Nick Fox) quantifica pela primeira vez cliques gerados por AI features na Search** — [LinkedIn](https://www.linkedin.com/posts/nickthefox_ai-in-search-is-driving-more-queries-and-activity-7359002534067228672-u7fJ) e X (17 jul 2026), analisado pela [Search Engine Journal](https://www.searchenginejournal.com/google-puts-a-number-on-ai-search-clicks-without-the-data/582755/). Nick Fox (SVP Knowledge & Information, Google) declara que as AI features na Search enviam "biliões de cliques a websites por semana", ao lado da métrica diária já conhecida de Search no geral. A SEJ nota que é a primeira vez que a Google atribui um número a cliques especificamente das AI features, mas o número não vem acompanhado de metodologia, período ou definição de "clique" — ao contrário das métricas diárias habituais da Google, esta não tem a etiqueta de verificação que a empresa costuma aplicar.

### 📊 Estudos & dados
- **SE Ranking — anúncios de texto aparecem em quase 1 em cada 3 queries comerciais no AI Mode** — [seranking.com](https://seranking.com/blog/google-ai-mode-ads/) (~14 jul 2026), confirmado pela [Search Engine Land](https://searchengineland.com/google-ai-mode-ads-reach-queries-study-482475) (17 jul 2026). Dados recolhidos a 30 jun 2026 sobre 50.032 keywords comerciais nos EUA em 20 nichos (~2.500/nicho, excluindo carrosséis de produto): anúncios de texto em 29,45% das queries (14.733 de 50.032); 71,1% das respostas com anúncio mostram dois anúncios simultâneos; presença de anúncios sobe de 24,33% em keywords <$2 CPC para 53,56% em keywords ≥$10 CPC; Pets tem a taxa mais alta (72,38%), Healthcare a mais baixa (2,64%). SE Ranking nota que a taxa real pode ser superior, dado que os resultados do AI Mode variam entre sessões.

### 💡 Implicações para destaque.ai
- O estudo SE Ranking (anúncios em quase 1/3 das queries comerciais do AI Mode, escalando com CPC) é dado concreto e recente para reforçar que o AI Mode não é um canal "grátis": em categorias B2B de CPC alto, a citação orgânica está a competir com anúncios pagos dentro da própria resposta de IA — reforça (não substitui) o argumento já existente de vender presença dupla (GEO + SEO/PPC clássico), não GEO como substituto de paid. Absorvido em `references/benchmarks.md` §23.
- A declaração de Nick Fox é a primeira vez que a Google atribui um número (não verificável) a cliques vindos especificamente de AI features — útil como contexto quando um cliente cita a narrativa de "zero-click" pós-AI Overviews, mas deve ser apresentada com a mesma reserva que a SEJ aplica (sem metodologia, sem definição de "clique", sem tag de verificação); não substitui os dados já absorvidos (YouGov §21, Seer §13) sobre comportamento real de clique. Awareness, não absorvido em benchmarks.md por falta de dados verificáveis.
- Sem mudança de pitch, novo serviço ou de metodologia de auditoria hoje — ambos os itens reforçam argumentário já existente sobre a coexistência de citação e clique.

**Nota de integridade de dados**: verificadas as 7 fontes Tier 1 (sem itens adicionais não-duplicados face à entrada de 07-17), Tier 2 (Ahrefs, Search Engine Land, Search Engine Journal, Profound, Otterly, Peec — os três últimos só com actualizações de produto próprio, não notícia de plataforma de IA, não incluídas), Tier 3/4 (sem itens verificáveis nas últimas 24-72h) e arXiv cs.IR/cs.CL (sem paper novo genuinamente não coberto na janela; o próximo achado relevante, "What Gets Cited: Competitive GEO in AI Answer Engines", está associado ao SIGIR '26 de 20–24 jul, ainda sem versão pública nova). Uma alegação de "Google June core update, 30 jun–17 jul" surgida em pesquisa inicial foi investigada e descartada — cruzamento com Search Engine Land, Search Engine Roundtable e o Google Search Status Dashboard confirma que não existe tal update em 2026 (essas datas pertencem ao core update de **junho de 2025**); o único update de junho de 2026 confirmado é o June spam update (24–26 jun, já coberto em entrada anterior). Sessão iniciada correctamente a partir de `origin/main`.

## 2026-07-17

### 🔵 Anúncios oficiais
- **Google — Connected Apps chega ao AI Mode** — [blog.google](https://blog.google/products-and-platforms/products/search/connected-apps/) (16 jul 2026), confirmado por [Search Engine Journal](https://www.searchenginejournal.com/google-starts-rolling-out-connected-apps-in-ai-mode-search/582545/) e [9to5Google](https://9to5google.com/2026/07/16/google-ai-mode-youtube-music/). Utilizadores nos EUA (inglês) podem ligar contas de terceiros ao AI Mode — parceiros de lançamento Instacart (adicionar itens de uma lista de compras gerada ao carrinho), YouTube Music (guardar uma playlist curada) e Canva (obter templates); Google diz que mais integrações chegam nos próximos meses.

### 📊 Estudos & dados
- **DeltaV Digital — que tipo de página ganha citação varia por indústria** — [deltavdigital.com](https://www.deltavdigital.com/resources/reports/ai-citation-study/), primeira investigação original da agência sobre GEO. 21.075 respostas de motores de IA rastreadas via Peec AI entre 14 abr e 13 jul 2026, 25.337 citações analisadas em ChatGPT, Perplexity, Gemini e Google AI (Overviews + Mode) em 8 indústrias: listicles capturam 61% das citações em serviços de tecnologia B2B, homepages 55% numa marca de serviços locais, páginas de programa 53% no ensino superior; páginas de comparação ("X vs Y") são citadas cerca de 45% mais vezes por retrieval do que a média do dataset, apesar de raramente produzidas.

### ⚙️ Mudanças nas plataformas
- **OpenAI — GPT-5.6 (Sol) passa a modelo preferido no Microsoft 365 Copilot** — [openai.com](https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot/) (9 jul 2026), confirmado pela [Microsoft Tech Community](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-openai%e2%80%99s-gpt-5-6-in-microsoft-365-copilot/4533152). Substitui o GPT-5 em Word, Excel, PowerPoint, Chat e Cowork; disponibilidade pode variar por região/tenant. Sem indícios de que o Bing Copilot (o produto de pesquisa IA da Microsoft, distinto do M365 Copilot) tenha mudado de modelo.

### 📄 Research académico
- **"Optimizing Visibility in Generative Engines: A Critical Survey of Generative Engine Optimization (2023–2026)"** — [arXiv:2607.14035](https://arxiv.org/html/2607.14035v1) (jul 2026). Revisão de 45 estudos GEO/AEO: enquadra GEO como um pipeline estocástico e parcialmente observável (ativação de pesquisa, crawling/indexação, retrieval, reranking, citação, protagonismo, absorção factual, fidelidade, comportamento do utilizador), não uma tarefa única de ranking — os ganhos do paper fundador da GEO (Aggarwal et al.) são válidos no seu setting mas condicionados à fonte já estar presente num contexto fixo, não universais.

### 💡 Implicações para destaque.ai
- O estudo DeltaV (padrões de citação muito diferentes por vertical/tipo de página) é dado concreto contra aplicar o mesmo template de conteúdo GEO a todos os clientes — reforça (sem substituir) a recomendação já existente sobre conteúdo comparativo em `references/gap_action_mapping.md`. Absorvido em `references/benchmarks.md` §22, com caveat de estudo de agência via um único painel de tracking (Peec AI).
- O survey crítico (arXiv 2607.14035) confirma a visão de auditoria multi-etapa (crawl → retrieval → citação → fidelidade) já seguida pela destaque.ai e avisa contra vender otimização de página isolada como solução — reforço de metodologia existente, sem mudança necessária. Absorvido na tabela de papers em `references/benchmarks.md` §16.
- O Connected Apps é apenas awareness por agora (EUA/inglês) — mas confirma que o Google continua a expandir o AI Mode de resposta para execução de tarefas com integrações de terceiros; vigiar quando/se chega à UE/PT.
- Correção de gap em `references/models.md`: Microsoft 365 Copilot estava registado com GPT-5, desatualizado desde 9 jul — corrigido para GPT-5.6 Sol. Manutenção interna de precisão de dados, sem impacto de pitch.

**Nota de integridade de dados**: o item do Microsoft 365 Copilot (9 jul) tem 8 dias e não foi capturado em tempo real por esta rotina — gap identificado e corrigido nesta entrada, sem repetição de outros itens já cobertos entre 07-11 e 07-16.

## 2026-07-16

### 🔵 Anúncios oficiais
- **Perplexity torna open-source o benchmark WANDR para agentes de research** — [research.perplexity.ai](https://research.perplexity.ai/articles/wandr-benchmark-evaluating-research-agents-that-must-search-wide-and-deep) (14 jul 2026, licença Apache 2.0). 500 tarefas de research exigindo 170.495 registos de evidência verificados por fonte, avaliados por re-fetch das páginas citadas em vez de um gold-set estático; o sistema mais forte testado — o próprio "Search as Code" da Perplexity — obtém apenas 0,363 soft-F1 / 0,133 hard-F1, ou seja, crédito completo em cerca de 1 em cada 7 registos submetidos.

### 📊 Estudos & dados
- **YouGov — "Searching for answers: how AI is changing online discovery in 2026"** — [yougov.com](https://yougov.com/en-us/reports/55071-us-websearch-ai-report-2026), análise via [Search Engine Journal](https://www.searchenginejournal.com/only-28-of-americans-trust-ai-search-and-that-gap-is-your-seo-opening/581913/) (15 jul 2026). Em 2.000 adultos nos EUA, apenas 28% confiam na resposta de um assistente de IA vs. 70% num motor de pesquisa e 76% numa app de mapas; entre quem usa IA na pesquisa, 22% ainda clica numa fonte fornecida vs. 17% que fica apenas pela resposta da IA.

### 💡 Implicações para destaque.ai
- A confiança ainda baixa nas respostas de IA (28% nos EUA, YouGov) mantém o clique como comportamento residual mas real — reforça o argumento de que estar citado nas AI Overviews/Perplexity não substitui SEO clássico, é complementar; o pitch deve continuar a vender "presença dupla" (citação + clique), não só citação. Absorvido em `references/benchmarks.md` §21.
- O benchmark WANDR da Perplexity (grounding fraco, ~13% hard-F1 mesmo no próprio sistema da Perplexity) é dado técnico útil para gerir expectativas de clientes que questionam a variabilidade da taxa de citação — absorvido em `references/benchmarks.md` §20. Não muda oferta, mas reforça o argumento de tracking contínuo em vez de confiar numa única resposta.
- Sem mudança de pitch ou novo serviço hoje — ambos os itens são awareness/reforço de argumentário já existente.

## 2026-07-15

### 🔵 Anúncios oficiais
- **Google Images celebra 25 anos — Nano Banana chega às AI Overviews** — [Google Search Blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/) (14 jul 2026). Google integra o modelo de geração de imagens Nano Banana directamente nas AI Overviews: um prompt de texto na pesquisa gera uma imagem original na hora, em vez de apenas devolver imagens existentes. Rollout gradual em inglês, nas regiões que já têm geração de imagens no AI Mode, nas próximas semanas. Faz parte de um redesign mais amplo do Google Images (galeria estilo Pinterest para utilizadores autenticados nos EUA).

### 📊 Estudos & dados
- **62% das recomendações de marca em IA desaparecem após uma pergunta de follow-up** — Clovion, via [Search Engine Journal](https://www.searchenginejournal.com/62-of-ai-brand-recommendations-vanish-after-one-buyer-question-new-clovion-data/581469/) (~9 jul 2026). Em 69.120 conversas multi-turn com Claude, ChatGPT e Gemini em 36 categorias B2B software/fintech: repetir a mesma pergunta mantém ~90% da lista de marcas original, mas acrescentar um único detalhe realista de comprador (ex. "for a small team") reduz a sobreposição para ~28% — ou seja, 62% das marcas da primeira resposta desaparecem na segunda.

### ⚙️ Mudanças nas plataformas
- **Perplexity — Computer** (13 jul 2026) — Actualização do agente Computer: memória persistente entre sessões, respostas mais rápidas, troca de modelo a meio da tarefa, publicação de websites a partir de um único prompt e investigação de empresas privadas. https://www.perplexity.ai/changelog

### 💡 Implicações para destaque.ai
- O dado da Clovion (62% de churn de marcas citadas após um único follow-up) é o número mais concreto até à data para justificar, com evidência externa, que auditorias de visibilidade IA baseadas num único prompt por categoria são estruturalmente insuficientes — absorvido em `references/benchmarks.md` §19. Reforça a metodologia de tracking multi-prompt já usada pela destaque.ai; não exige novo serviço, mas é argumento de vendas forte para explicar a clientes porque "aparecer uma vez" não chega.
- A chegada do Nano Banana às AI Overviews é, por agora, apenas awareness — não altera mecânica de citação nem ranking, mas confirma que a Google continua a investir em manter o utilizador dentro da própria AI Overview (agora também com criação de imagem), o que reforça a pressão de atribuição/tráfego já discutida em entradas anteriores. Vale a pena monitorizar se este tipo de geração de conteúdo nativo começa a competir com resultados de imagem de marcas B2B.
- A expansão do Perplexity Computer (memória persistente, publicação de websites, investigação de empresas privadas) é awareness de produto agêntico, sem impacto directo conhecido em mecânica de pesquisa/citação — mantém-se na lista de plataformas a vigiar mas sem acção imediata para clientes.

## 2026-07-13

### ⚙️ Mudanças nas plataformas
- **Google Search — clarificação sobre tempo de reavaliação de canonicalização** (10 jul 2026) — Google actualizou a documentação de troubleshooting de canonicalização para especificar que, mesmo após corrigir problemas de conteúdo duplicado, uma página pode permanecer no cluster duplicado até duas semanas antes de ser reavaliada; a separação do cluster é mais rápida quando a diferença de conteúdo entre as páginas é clara e significativa. Reportado pela [Search Engine Land](https://searchengineland.com/google-clarifys-canonicalization-fixes-can-take-up-to-two-weeks-to-resolve-481998), confirmado de forma independente pela [Search Engine Journal](https://www.searchenginejournal.com/google-says-canonical-re-evaluation-can-take-up-to-two-weeks/582053/) e pela [Search Engine Roundtable](https://www.seroundtable.com/google-canonicalization-two-weeks-41664.html).

### 📄 Research académico
- **Evaluating Chunking Strategies for Retrieval-Augmented Generation on Academic Texts** — Kreileder, Reisinger, Fischer, [arXiv:2607.01852](https://arxiv.org/abs/2607.01852) (2 jul 2026). Em testes com o framework RAGAS sobre documentos longos e estruturados, chunking semântico baseado em clusters não superou o chunking fixo/recursivo mais simples — argumento contra sobre-engenharia de pipelines de indexação RAG usados por ferramentas de auditoria AEO.

### 💡 Implicações para destaque.ai
- A clarificação da Google sobre o prazo de reavaliação de canonicalização (até 2 semanas) é útil para gerir expectativas de clientes B2B SaaS PT após correcções técnicas — evita pedidos prematuros de reindexação e explica atrasos aparentes em auditorias de follow-up. Awareness operacional, sem mudança de pitch.
- O resultado do paper sobre chunking (simples supera complexo em RAG) é apenas nota técnica interna sobre a construção de pipelines de indexação — sem impacto directo no pitch a clientes.

**Nota de integridade de dados**: dia de notícias muito leve — verificadas todas as fontes Tier 1 (Google Search Central, blog.google, OpenAI, Anthropic, DeepMind, Bing, Perplexity), 5 fontes Tier 2 (Ahrefs, Search Engine Land, Search Engine Journal, Profound, Otterly, Peec), vozes Tier 3 (Aleyda Solis, Lily Ray, Glenn Gabe, Marie Haynes, Mike King, Rand Fishkin), comunidades Tier 4 (Hacker News, Reddit r/SEO, r/bigseo, r/MachineLearning) e arXiv cs.IR/cs.CL últimos 30 dias. Sem itens novos verificáveis em Tier 1, 3 ou 4 nas últimas 24-72h. Um estudo Clovion (SEJ, ~9 jul, 69.120 conversas multi-turn, 62% das recomendações de marca desaparecem após pergunta de follow-up) ficou fora da janela estrita de 72h e não foi incluído — candidato a verificar/incluir na próxima entrada se ainda não coberto.

## 2026-07-12

### 🔵 Anúncios oficiais
- **Search Central Live Deep Dive Europe 2026 confirmado para Barcelona** — [Google Search Central Blog](https://developers.google.com/search/blog/2026/07/search-central-live-deep-dive-europe-2026) (jul 2026). Google fechou a votação pública de cidade (aberta desde junho, entre Barcelona, Budapeste, Berlim, Frankfurt, Lisboa e Praga) e confirmou Barcelona, 30 set–2 out 2026, como primeira edição EMEA do formato "Deep Dive" (multi-dia, cobertura técnica aprofundada de tópicos de Search).

### ⚙️ Mudanças nas plataformas
- **OpenAI — ChatGPT retira group chats** — [OpenAI Help Center](https://help.openai.com/en/articles/12703475-group-chats-in-chatgpt), efectivo 9 jul 2026. Deixa de ser possível criar novos group chats, converter conversas em group chats, ou entrar por convite (web, iOS, Android); chats existentes ficam disponíveis em modo leitura. Mudança de produto/UX, sem impacto conhecido em mecânica de citação ou pesquisa.

### 💡 Implicações para destaque.ai
- Dia de notícias leve (domingo) — os dois itens são awareness pura, sem mudança de mecânica de citação, pitch ou metodologia de auditoria.
- A confirmação de Barcelona para o Deep Dive Europe é relevante para networking/presença de destaque.ai num evento técnico presencial da Google em território europeu próximo (Espanha) — vale considerar participação, sem urgência imediata.

**Nota de integridade de dados**: esta pesquisa começou por, mais uma vez, escrever a entrada no caminho errado (`daily-agent/news-feed.md` na raiz do repo, branch antiga `claude/compassionate-planck-mjh8my`) antes de ser detectado e corrigido ainda antes do commit — mesmo erro já registado nas entradas de 02, 03, 04, 08, 09 e 10 de julho. Todos os itens inicialmente encontrados nessa pesquisa (GPT-5.6, Search Console platform properties, estudo Previsible 92,4%, paper arXiv 2606.25787) já estavam cobertos nas entradas de 07-09/07-11 — não são repetidos aqui. Apenas dois itens sobreviveram como genuinamente novos: a confirmação de Barcelona e a retirada de group chats do ChatGPT. A árvore `daily-agent/` (e `references/`, `SKILL.md`, `competitor-monitor/`, `destaque-ai-self/`, `routines/`) na raiz do repo continua divergente e por remover/redirecionar — sexta recomendação consecutiva nesse sentido.

## 2026-07-11

### 🔵 Anúncios oficiais
- **OpenAI lança GPT-5.6 em disponibilidade geral (Sol/Terra/Luna)** — [openai.com/index/gpt-5-6](https://openai.com/index/gpt-5-6/) (9 jul 2026). Substitui o preview limitado de 26 junho (API/Codex apenas). Sol torna-se o default em ChatGPT Plus/Pro/Business/Enterprise (chat regular); o tier Free/Go mantém GPT-5.5 Instant como default — é a primeira vez que o ChatGPT tem defaults diferentes por tier em vez de um único modelo para todos. Terra e Luna (mais baratos, performance comparável a Sol/GPT-5.5) ficam disponíveis no novo "ChatGPT Work" e via API. Rollout gradual desde 9 jul, sem confirmação pública de conclusão a 100% até à data. IDs de API: `gpt-5.6-sol`, `gpt-5.6-terra`, `gpt-5.6-luna`.

### 💡 Implicações para destaque.ai
- Actualizado `references/models.md` (secção OpenAI + Deck Builder API mapping `chatgpt`.production → `gpt-5.6-sol`, `.cost_optimized` → `gpt-5.6-luna`, com nota de que o tier gratuito do ChatGPT continua em GPT-5.5 Instant). Apenas actualização técnica de infraestrutura de auditoria — sem mudança de mecânica de citação conhecida, sem impacto directo no pitch.
- O ChatGPT deixar de ter um modelo único para todos os tiers é awareness relevante para relatórios GEO técnicos: a partir de agora, "que modelo o ChatGPT usa" deixa de ter resposta única e passa a depender do plano do utilizador — vale a pena qualificar essa nuance quando um cliente pergunta "porque é que a IA responde de forma diferente para mim e para o meu concorrente".
- Sem mudança de metodologia de auditoria necessária hoje; o Deck Builder continua a testar via `production` (fidelidade ao tier pago), que é a escolha correta para auditorias diagnostic/premium pagas.

**Nota de integridade de dados**: GPT-Live (8 jul), a expansão do relatório de performance AI generativa do Search Console a mais países (EUA/Índia/Suíça) e o estudo SSRN sobre quebra de 39,8% em cliques com AI Overviews já estão cobertos nas entradas de 2026-07-09, 2026-07-04 e 2026-07-05 respectivamente — não repetidos aqui para evitar repackaging. A entrada de 2026-07-10 foi, mais uma vez, escrita por engano no caminho errado (`daily-agent/news-feed.md` na raiz, não `skills/geo-seo-aeo-master/daily-agent/`) — mesmo erro já sinalizado nas entradas de 02, 03, 04, 08 e 09 de julho. O único item genuinamente novo e ainda não absorvido nessa entrada mal colocada era o GPT-5.6 em preview (26 jun); a informação foi verificada de novo e absorvida correctamente aqui já como GA (9 jul), com detalhe adicional (defaults por tier, IDs de API) confirmado nesta pesquisa. A divergência entre as duas árvores persiste sem correcção estrutural — recomenda-se fortemente, numa próxima sessão com mandato para tal, remover ou redirecionar a cópia da raiz (`daily-agent/`, e as restantes pastas raiz `references/`, `SKILL.md`, `competitor-monitor/`, `destaque-ai-self/`, `routines/`, que também parecem duplicados legados face à estrutura canónica em `skills/geo-seo-aeo-master/` confirmada em `README.md`) para impedir que runs futuros continuem a escrever no caminho errado.

## 2026-07-09

### 🔵 Anúncios oficiais
- **OpenAI lança GPT-Live** — [openai.com](https://openai.com/index/introducing-gpt-live/) (8 jul 2026). Novos modelos de voz full-duplex (GPT-Live-1, GPT-Live-1 mini) substituem o Advanced Voice Mode no ChatGPT; a arquitetura ouve e fala em simultâneo em vez de turn-based. Para perguntas que exigem pesquisa web ou raciocínio mais profundo, o GPT-Live delega o pedido ao modelo frontier (GPT-5.5) em segundo plano e devolve a resposta na conversa — o motor de pesquisa/citação subjacente não muda.
- **Google Search Console lança "platform properties"** — [Google Search Central Blog](https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms) (7 jul 2026). Novo tipo de propriedade permite a criadores/marcas verificar contas Instagram, TikTok, X ou YouTube e ver dados de impressões, cliques e desempenho por publicação vindos do Google Search e Discover, mesmo sem site próprio; rollout gradual nas próximas semanas.

### 📊 Estudos & dados
- **ChatGPT domina 92% do tráfego de referência de LLMs** — Search Engine Land, estudo Previsible ([link](https://searchengineland.com/chatgpt-ai-referral-traffic-sessions-data-481630)). Análise de 6,77 milhões de sessões geradas por LLMs em 166 sites (nov/2024–mai/2026): o ChatGPT gera 92,4% do tráfego de referência rastreável de LLMs (crescimento de 12,8x em 19 meses), a Claude ultrapassou a Perplexity em março de 2026, e o Copilot caiu 96% face ao pico de agosto de 2025.

### 📄 Research académico
- **How Large Language Models Source Brand Reputation Across Languages and Markets** — Dmitrij Zatuchin, [arxiv.org/abs/2606.25787](https://arxiv.org/abs/2606.25787). Em 167.551 citações analisadas para 128 marcas, 85,7% apontam para sites de terceiros (não da própria marca) e 80% das citações concentram-se em apenas 18% dos domínios — a otimização GEO deve priorizar presença nesses domínios de terceiros de alta alavancagem, não apenas páginas próprias.

### 💡 Implicações para destaque.ai
- O domínio esmagador do ChatGPT no tráfego de referência LLM (92,4%) confirma que estratégias de GEO em Portugal devem continuar a priorizar visibilidade no ChatGPT antes de investir esforço equivalente noutras plataformas (Perplexity, Copilot) com tráfego residual e em queda.
- A concentração de citações em poucos domínios de terceiros (80% em apenas 18% dos domínios, per o paper académico) reforça a necessidade de mapear, para cada cliente, quais domínios-fonte pesam mais no seu setor/mercado — pode tornar-se serviço concreto de "auditoria de domínios-fonte", não apenas awareness.
- GPT-Live e a nova propriedade do Search Console são awareness por agora: nenhum muda mecânica de citação nem exige mudança de pitch imediata; a nova propriedade do Search Console é relevante para clientes B2B que publicam sobretudo em redes sociais sem tráfego orgânico forte no site próprio.

**Nota de integridade de dados**: os itens de Search Console platform properties, estudo ChatGPT 92% e paper arXiv 2606.25787 foram originalmente descobertos por um run anterior mas escritos no caminho errado (`daily-agent/news-feed.md` na raiz, sob a data 2026-07-08) em vez de `skills/geo-seo-aeo-master/daily-agent/` — recuperados aqui. O GPT-Live é o único item genuinamente novo desta pesquisa de hoje. A árvore `daily-agent/` na raiz continua divergente desta (`skills/geo-seo-aeo-master/`); recomenda-se consolidar/remover a cópia da raiz numa próxima sessão.

## 2026-07-07

### 📊 Estudos & dados
- **Self-Promotional Content Works — Until It Backfires** — [Ahrefs](https://ahrefs.com/blog/self-promotional-content-ai-seo-experiment/) (6 jul 2026). Experimento controlado fev-mai 2026 em ChatGPT/Gemini/Perplexity/Copilot: após lançar a conferência própria "Evolve", a Ahrefs passou a ser citada em 66,4% das respostas a "best SEO conferences 2026" mas apenas em 15,8% de "best marketing conferences 2026" — conteúdo auto-promocional só gera citação quando a marca já é uma resposta plausível para a categoria da query.

### ⚙️ Mudanças nas plataformas
- **Google — directiva "Content Signals" da Cloudflare confirmada sem efeito** — [Search Engine Roundtable](https://www.seroundtable.com/google-cloudflare-content-signals-41631.html) (6 jul 2026). John Mueller confirmou on-record que a nova extensão robots.txt da Cloudflare (categorias `search`/`ai-input`/`ai-train`) não tem "qualquer efeito" em nenhum crawler, incluindo os da própria Google; reconfirmou também que a Google não consome `llms.txt` nem `llms-author.txt`.

### 📄 Research académico
- **Generative Engine Optimization at Scale: Measuring Brand Visibility Across AI Search Engines** — Pratyush Kumar, [arxiv.org/abs/2606.20065](https://arxiv.org/abs/2606.20065) (18 jun 2026). 100K+ prompts / 100+ marcas (mar-mai 2026): marcas globais aparecem em 73% das respostas relevantes vs. 11% para marcas nicho; listicles "best-of" são o formato mais citado (~21% de todas as citações).
- **Covering the Unseen: Information Demand Coverage Optimization for RAG (GeoRAG)** — Zhang, Jia, Zhu, [arxiv.org/abs/2606.29328](https://arxiv.org/abs/2606.29328) (28 jun 2026). Retrieval top-k tradicional cobre bem uma faceta de queries multi-hop mas ignora outras; conteúdo que responde explicitamente a várias sub-perguntas de um tópico tem maior probabilidade de recuperação em queries complexas.
- **Per-Entity Bias Mapping for AI Visibility** — Zoltán Varga, [arxiv.org/abs/2606.21595](https://arxiv.org/abs/2606.21595) (19 jun 2026). Marcas médias — suficientemente conhecidas para o modelo "completar o padrão" mas sub-representadas nos dados de treino — têm taxa de menções fabricadas mais alta (52,7%) do que marcas muito conhecidas (37,9%).

### 💡 Implicações para destaque.ai
- A confirmação de Mueller sobre o Content Signals da Cloudflare — absorvida em `references/frameworks.md` §2 — reforça que não existe hoje mecanismo fiável de "opt-in/opt-out" de crawling de IA via robots.txt; não vender isto como solução a clientes, manter apenas como awareness.
- O estudo Ahrefs confirma que GEO não substitui autoridade de marca já construída: conteúdo auto-promocional só gera citação quando a marca já é candidata plausível na categoria — reforça o pitch de priorizar autoridade temática antes de conteúdo de produto.
- O paper sobre o "Brand Hallucination Paradox" é argumento concreto para upsell de dados estruturados: marcas B2B portuguesas de média dimensão beneficiam de schema.org e knowledge graphs consistentes para reduzir menções incorrectas geradas por IA — awareness por agora, avaliar como serviço para clientes médios com pouca presença estruturada online.

## 2026-07-06

### ⚙️ Mudanças nas plataformas
- **Google Search — AMP passa a apontar diretamente para a página do publisher** — [Search Engine Land](https://searchengineland.com/google-search-now-sends-searchers-directly-to-publisher-hosted-amp-pages-481431) (1 jul 2026). A Google deixou de encaminhar utilizadores para a versão em cache no AMP Viewer, levando-os agora diretamente à página AMP alojada pelo próprio site; um porta-voz confirmou que "AMP content will continue to rank just like any other webpage" e que mantém o suporte ao formato open-source AMPhtml — a mudança não afeta rankings, só simplifica analytics/tracking para publishers.

### 💡 Implicações para destaque.ai
- Mudança do AMP é irrelevante para a esmagadora maioria da carteira B2B SaaS em Portugal (adoção de AMP residual neste segmento) — apenas awareness, sem ação de cliente necessária.
- Sem anúncio Tier 1 novo, estudo com dados inédito ou mudança algorítmica de maior peso confirmada nas últimas 24-48h: os candidatos encontrados nesta pesquisa (estudo Semrush/Indig sobre reasoning mode do ChatGPT, tracking Originality.ai de llms.txt, revisão Agarwal/Sen sobre cliques em AI Overviews) já estão cobertos e absorvidos nas entradas de 2, 4 e 5 de julho — incluí-los de novo seria repackaging de news velhas.
- Sem mudança de pitch ou de metodologia necessária hoje.

## 2026-07-05

### 📊 Estudos & dados
- **Estudo de campo (SSRN) confirma quebra de cliques em AI Overviews, mas não encontra diferença de qualidade** — Saharsh Agarwal e Ananya Sen, via [Search Engine Journal](https://www.searchenginejournal.com/google-ai-overviews-study-finds-lost-clicks-werent-lower-quality/581298/). Experiência de campo com atribuição aleatorizada mede uma redução de 39,8% em cliques orgânicos quando AI Overviews aparecem no SERP; não encontra diferença mensurável em bounce rate, regresso à SERP ou tempo no site entre os cliques perdidos e os restantes — resultado que contraria a justificação pública da Google de que os cliques eliminados por AI Overviews seriam maioritariamente de baixa qualidade. Nota: working paper em SSRN, ainda sem peer review.

### 💡 Implicações para destaque.ai
- O estudo Agarwal/Sen reforça, com dado independente, o argumento já levantado pelo estudo Fractl/SEL de 29 jun (procura redistribuída, não perdida): a narrativa de "cliques perdidos = cliques de baixa qualidade" carece de suporte empírico. Útil para justificar a clientes a necessidade de tracking de citações IA como complemento — não substituto — ao tráfego orgânico clássico.
- Sem anúncio Tier 1 novo, mudança algorítmica confirmada, ou lançamento de modelo LLM nas últimas 24-48h (fim de semana nos EUA, período tipicamente parado após o feriado de 4 de julho). Awareness apenas; sem mudança de pitch ou metodologia necessária hoje.

## 2026-07-04

### 🔵 Anúncios oficiais
- **Anthropic restaura acesso a Claude Fable 5 e Mythos 5** — [anthropic.com/news](https://www.anthropic.com/news) (1 jul 2026). O Departamento de Comércio dos EUA removeu os controlos de exportação que tinham suspendido os dois modelos; ficaram disponíveis de novo na Claude Platform, Claude.ai, Claude Code e Claude Cowork globalmente, com crédito de até 50% do limite semanal de uso para Pro/Max/Team/Enterprise até 7 de julho.
- **Google Search Console — relatório de performance AI generativa expande cobertura** — [Google Search Central Blog](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). O relatório (lançado a 3 jun, isola impressões de AI Overviews, AI Mode e Discover AI) está a ser distribuído incrementalmente a mais sites e países (EUA, Índia, Suíça, entre outros), confirmado por John Mueller no Bluesky.

### 📊 Estudos & dados
- **What 1 million keywords reveal about AI's impact on search** — [Search Engine Land](https://searchengineland.com/what-1-million-keywords-reveal-about-ais-impact-on-search-481474) (2 jul 2026). Fractl/SEL analisaram 1.010.848 keywords de alto volume (10k+ pesquisas/mês, 379 marcas, 8 verticais): 29% da procura de alto volume está em declínio, com um volume quase equivalente a crescer noutras categorias — procura total redistribuída, não reduzida.
- **llms.txt: adoção sobe 8,8x mas 97% dos ficheiros nunca são pedidos por crawlers de IA** — estudo Originality.ai, atualização jun 2026, via [ppc.land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/). Tracking de 3M+ sites: instâncias de llms.txt subiram de 4.088 (jun 2025) para 36.120 (mai 2026); GPTBot, ClaudeBot, PerplexityBot e Google-Extended continuam a ignorar o ficheiro na larga maioria dos casos.

### ⚙️ Mudanças nas plataformas
- **Google Search Console — relatório de indexação de páginas corrigido**. Esteve bloqueado desde 11/12 de junho; dados atualizados a 29 de junho foram publicados a 3 de julho. [Search Engine Roundtable](https://www.seroundtable.com/google-page-indexing-report-fixed-and-updated-41626.html).
- **Google AI Overviews — renderização inesperada de markdown**. Lily Ray identificou snippets de citação a mostrar sintaxe de tabelas markdown em vez de texto renderizado; John Mueller (Google) classificou como "inesperado" e reconfirmou que não há tratamento especial de ranking para markdown ou llms.txt. [Search Engine Roundtable](https://www.seroundtable.com/google-ai-overview-markdown-files-41595.html) (2 jul 2026).

### 💡 Implicações para destaque.ai
- Fable 5/Mythos 5 restaurados — absorvido em `references/models.md` (secção Anthropic). Sem mudança de mecânica de citação conhecida; modelos não são default em nenhum produto de AI search, awareness apenas.
- O dado dos 97% de llms.txt ignorados por crawlers de IA (absorvido em `references/frameworks.md` §1) confirma que não é tática prioritária isolada — reforça o pitch de continuar a apostar em schema markup, entity signals e conteúdo estruturado como sinais que os crawlers efetivamente consomem.
- A redistribuição de procura (29% em declínio vs. crescimento equivalente noutras categorias) é argumento para reposicionar relatórios de clientes SaaS B2B: menos foco em "tráfego total", mais em tracking de categorias de query que estão a ganhar vs. perder.

## 2026-07-02

### 🔵 Anúncios oficiais

- **Anthropic lança Claude Sonnet 5** — [anthropic.com/news/claude-sonnet-5](https://www.anthropic.com/news/claude-sonnet-5). Disponível desde 30 junho em todos os planos Claude; torna-se o modelo por defeito em claude.ai Free e Pro (Max/Team/Enterprise mantêm Opus 4.8 como opção "most intelligent"). Contexto de 1M tokens (único, sem variante menor), 128k tokens de output máximo, novo tokenizer. Pricing introdutório $2/$10 por milhão de tokens input/output até 31 agosto 2026 (depois $3/$15) — posicionado como performance próxima do Opus 4.8 a custo bastante inferior. Relatório de segurança reporta taxas mais baixas de alucinação e sycophancy, e maior resistência a prompt injection em contexto agentic, vs. Sonnet 4.6. ID API: `claude-sonnet-5`.

### 📊 Estudos & dados

- **ChatGPT Thinking mode muda que marcas são citadas** — [Search Engine Land](https://searchengineland.com/chatgpt-thinking-mode-brands-sources-citations-481439), citando estudo da Semrush. Apenas 25,6% de sobreposição nos domínios citados entre o modo "Instant" e o modo "Thinking" do ChatGPT para o mesmo prompt; a taxa de citação sobe de 50% para 68% e o número de fontes por resposta quase duplica (2,6→4,5), com deslocação de UGC/Reddit para fontes governamentais e académicas.

- **Como o Deep Research do ChatGPT lê um site (análise de logs)** — [Peec AI](https://peec.ai/blog/how-chatgpt-deep-research-reads-your-site-what-the-logs-reveal). Amostra de ~1.240 registos de fontes mostra que o Deep Research lê muito mais páginas do que as que acaba por citar, segue links internos e lê alt text de imagens; tipicamente só os 2-3 primeiros resultados Bing por sub-query entram no conjunto lido — as contagens de citações subestimam a influência real. Nota: amostra pequena, metodologia informal, não peer-reviewed.

### ⚙️ Mudanças nas plataformas

- **Google AdSense — conteúdo gerado por Gemini em "ad intents"** — [support.google.com](https://support.google.com/adsense/answer/17116795). Desde 30 de junho de 2026, os diálogos de ad intents mostram automaticamente um explicador escrito pelo Gemini junto ao anúncio, sem opção de opt-out para o publisher.

- **Google AI Mode — resultados de receitas redesenhados** — [Search Engine Roundtable](https://www.seroundtable.com/recap-07-01-2026-41605.html). Anunciado por Robby Stein (Google) a 1 de julho de 2026; AI Mode passa a mostrar links de receitas mais destacados com nome do criador, rating e nº de ingredientes.

### 📄 Research académico

- **"Generative Engine Optimization at Scale: Measuring Brand Visibility Across AI Search Engines"** — Pratyush Kumar, [arxiv.org/abs/2606.20065](https://arxiv.org/abs/2606.20065). Análise de 100.000+ respostas a prompts em 100+ marcas (mar-mai 2026): ~78% das citações em motores de IA vão para sites corporativos próprios, YouTube é a principal fonte não-corporativa citada, e conteúdo tipo "best-of"/listicle representa ~21% dos formatos citados.

- **"Position: Generative Engine Optimization Creates Underexamined Risks, Governance Must Target Concentration, Disclosure, and Academic Blind Spots"** — Wen, Zhang, Yuan, Chen, Zhang, Guo, [arxiv.org/abs/2606.12439](https://arxiv.org/abs/2606.12439). Argumenta que o GEO cria riscos de concentração de influência (baixa contestabilidade nas respostas de LLMs) e de influência comercial não divulgada nas evidências citadas.

### 💡 Implicações para destaque.ai

- Claude Sonnet 5 é o novo modelo por defeito em claude.ai — actualizado `references/models.md` (secção Anthropic + Deck Builder mapping do engine `claude`, coluna `production`). Sem mudança de mecânica de citação conhecida por agora; apenas actualização técnica de infraestrutura de auditoria, sem impacto directo no pitch a clientes.
- O estudo Semrush/SEL confirma que otimizar só para "ser citado" no ChatGPT é insuficiente — o modo Thinking privilegia fontes institucionais e académicas, reforçando a tese de que autoridade e dados verificáveis pesam mais do que volume de conteúdo. Útil para responder a clientes que perguntam "porque é que o ChatGPT não me cita".
- O achado da Peec AI (Deep Research lê muito mais do que cita) sugere que métricas de "share of citation" reportadas a clientes podem subestimar a exposição real da marca — vale a pena acrescentar uma nota metodológica nos relatórios GEO, sem ainda mudar a metodologia (amostra pequena, não peer-reviewed).

## 2026-07-01

### 🔵 Anúncios oficiais

- **OpenAI — preview limitado de GPT-5.6 (Sol, Terra, Luna)** — [openai.com](https://openai.com/index/previewing-gpt-5-6-sol/). Anunciado 26 junho: Sol (flagship), Terra (performance comparável ao GPT-5.5 a metade do custo) e Luna (mais rápido/barato). Disponível apenas via API e Codex a parceiros de confiança — ainda não está no ChatGPT. Pricing por 1M tokens: Sol $5/$30 in/out, Terra $2.50/$15, Luna $1/$6. Introduz prompt caching mais previsível (cache breakpoints explícitos, vida mínima de cache de 30 min). GA prevista "nas próximas semanas".

- **Google — June 2026 spam update concluído** — [Google Search Status Dashboard](https://status.search.google.com/incidents/YUX1peHev5a4fkxLDiUQ). Rollout de 24–26 junho via SpamBrain; visa scaled content abuse, cloaking, sneaky redirects e scraped content (não visa link spam nem site reputation abuse). É o braço de aplicação da expansão da política de spam de 15 maio, que passou a classificar explicitamente a manipulação de respostas de IA generativa (AI Overviews/AI Mode) como spam.

### 📊 Estudos & dados

- **38% das citações em AI Overviews vêm agora do top-10 orgânico (era ~76%)** — [Ahrefs](https://ahrefs.com/blog/ai-overview-citations-top-10/). Análise de 863K keywords e 4M URLs de AI Overviews mostra que a sobreposição com o ranking clássico caiu de ~76% (julho 2025) para 38% — a posição orgânica é hoje um preditor bastante mais fraco da citação em IA do que há um ano.

- **YouTube lidera citações em Google AI Overviews com 20,9% de share** — [Ahrefs](https://ahrefs.com/blog/most-cited-domains-ai-overviews/). Ranking dos 50 domínios mais citados em AI Overviews, com base em mais de 3M queries US rastreadas em junho de 2026.

### ⚙️ Mudanças nas plataformas

- **Perplexity — Deep Research no Computer passa a correr em Claude Opus 4.6** — [perplexity.ai/changelog](https://www.perplexity.ai/changelog). Adiciona também command panel, forking de sessões e controlos enterprise (Computer Analytics API, limites de crédito personalizados).

### 💡 Implicações para destaque.ai

- A queda de ~76% para 38% na sobreposição entre top-10 orgânico e citações em AI Overviews confirma que otimizar apenas para ranking clássico já não garante presença nas respostas geradas — reforça o caso para tracking dedicado de citações IA nos relatórios de clientes B2B.
- O spam update de junho, ao ligar formalmente a manipulação de AI Overviews à penalização, valida o posicionamento de GEO "branco" (dados próprios, structured data, E-E-A-T) em vez de táticas agressivas de force-fit em listicles — bom argumento de venda contra abordagens de risco da concorrência.
- GPT-5.6 ainda em preview restrito (API/Codex, sem ChatGPT): sem impacto imediato em GEO/AEO, mas monitorizar — se Terra/Luna se tornarem default no ChatGPT Search, a economia de custo pode alterar o volume de queries com web search activo. Awareness por agora.

**Nota de execução**: esta é a primeira entrada em `skills/geo-seo-aeo-master/daily-agent/` desde 2026-06-05 (gap de ~26 dias). Cobertura de hoje limitada às últimas 24-72h conforme o mandato do prompt — não é um backfill retroactivo do período em falta.

## 2026-06-05

### 🔵 Anúncios oficiais

- **Microsoft lança Web IQ — grounding API para agentes IA** — [searchengineland.com](https://searchengineland.com/microsoft-releases-web-iq-powered-by-bing-but-designed-for-how-ai-agents-search-479194). Lançado a 2 de junho. Suite de APIs baseada no índice Bing, desenhada especificamente para agentes IA (não para utilizadores humanos): prioriza extracção de informação e velocidade de entrega em vez de ranking de resultados. Alimenta actualmente o Microsoft Copilot e o ChatGPT Search da OpenAI; expansão a outras plataformas anunciada. Primeiro produto Bing explicitamente posicionado como infraestrutura de retrieval agentic.

### 📊 Estudos & dados

- **GPTBot atinge 4,5% do tráfego desktop; Claudebot quase duplicou** — [searchengineland.com](https://searchengineland.com/seo-2026-higher-standards-ai-influence-web-catching-up-473540) (análise anual). GPTBot passou de 2,9% (2024) para 4,5% do tráfego desktop em 2025; Claudebot de 1,9% para 3,6%. Crescimento contínuo do volume de crawling IA sobre o stock de páginas indexadas — relevante para estimativa de exposição a citação.

- **5W AI Platform Citation Source Index 2026 — top 15 domínios capturam 68% das citações** — [prnewswire.com](https://www.prnewswire.com/news-releases/5w-releases-ai-platform-citation-source-index-2026-the-50-websites-that-now-decide-what-brands-are-visible-inside-chatgpt-claude-perplexity-gemini-and-google-ai-overviews-302759804.html) (680 M citações sintetizadas, 6 estudos Aug 2024–Apr 2026). Reddit é a fonte #1 em todos os motores (~40% de frequência de citação); Wikipedia domina ChatGPT (26–48% do citation share top-10); Perplexity favorece portais de research primária (NIH/PubMed, press B2B de nicho); Claude prefere jornalismo de referência (NYT, The Atlantic, The Economist). Concentração mais extrema do que o PageRank alguma vez produziu.

### ⚙️ Mudanças nas plataformas

- **Google Search Console AI Report — contexto regulatório CMA confirma expansão global pendente** — [searchengineland.com](https://searchengineland.com/google-search-console-ai-performance-reports-and-controls-to-block-your-content-in-ai-responses-479298). A Competition and Markets Authority (UK) confirmou a 3 de junho que o rollout UK-first dos relatórios e do toggle de opt-out resulta de exigências regulatórias sob o Digital Markets Competition Regime. Expansão global sem calendário definido; toggle efectivo a 17 de junho para os sites no rollout UK inicial.

### 💡 Implicações para destaque.ai

- O Web IQ da Microsoft confirma que o Bing é a camada de retrieval por trás de Copilot e ChatGPT Search — optimizar para Bing deixa de ser opcional para clientes B2B que querem visibilidade em múltiplos motores IA. Argumento directo: presença no Bing index é infraestrutura de citação cross-platform.
- A concentração de citações (68% em 15 domínios) e a preferência de Claude por jornalismo de referência indica que PR em publicações de autoridade (não apenas SEO técnico) tem ROI directo em AEO — oportunidade de serviço "media authority for AI citation" para clientes com orçamento de comunicação.
- O crescimento de GPTBot/Claudebot reforça a urgência de conteúdo bem estruturado e crawlável: bots IA estão a indexar activamente; a janela para construir autoridade antes da saturação do canal está a fechar.

## 2026-06-04

### 🔵 Anúncios oficiais

- **Google Search Console — Search Generative AI Performance Reports + opt-out toggle** — [developers.google.com/search/blog/2026/06/gen-ai-performance-reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) | [searchengineland.com](https://searchengineland.com/google-search-console-ai-performance-reports-and-controls-to-block-your-content-in-ai-responses-479298). Announced June 3: dedicated reports in Search Console exposing impressions within AI Overviews, AI Mode, and Discover AI features (metrics: impressions, pages, countries, devices, dates; click data not yet included). A new toggle lets site owners exclude their content from generative AI features — effective June 17; exclusion does not affect classic ranking signals. Initial rollout limited to a UK subset; global expansion timeline unconfirmed.

### 📄 Research académico

- **"What Gets Cited: Competitive GEO in AI Answer Engines"** — Vishwakarma et al., [arxiv.org/abs/2605.25517](https://arxiv.org/abs/2605.25517) (May 2026). 252,000 controlled trials across 6 LLMs; two-document RAG testbed with brand anonymisation and counterbalanced source order to isolate position bias. Topical relevance and list position are the strongest predictors of first-citation among 18 tested content factors.

### 💡 Implicações para destaque.ai

- O Search Console AI Report não inclui dados de cliques — visibilidade em AI Mode ainda não é mensurável em ROI directo para clientes; oportunidade de posicionamento da destaque.ai como quem audita "AI brand impressions" antes da generalização global do relatório (actualmente UK-only).
- O toggle de opt-out do AI Mode (efectivo 17 junho, UK-only por agora) é uma decisão estratégica nova: clientes SaaS B2B portugueses devem ser briefados sobre a escolha opt-in/opt-out antes da expansão global. **Potencial novo serviço de "AI visibility audit + opt-in strategy".**
- O paper 2605.25517 confirma empiricamente que relevância tópica e estrutura de lista dominam a citação em AI engines — reforça a metodologia existente da destaque.ai; apenas awareness necessária.

## 2026-06-03

### 🔵 Anúncios oficiais

- **Anthropic files IPO confidentially with SEC** — [Washington Post](https://www.washingtonpost.com/technology/2026/06/01/anthropic-maker-claude-files-with-sec-go-public-an-ipo/) | [CBS News](https://www.cbsnews.com/news/anthropic-ipo-confidential-filing-claude-ai/). Filed June 1. Valuation estimada em $965B; receita anualizada de $47B em subscrições Claude. Maior ronda privada em AI até à data ($65B Series H) precede a entrada em bolsa.

- **Perplexity Personal Computer expands to Windows** — [Bloomberg](https://www.bloomberg.com/news/articles/2026-06-02/perplexity-splits-ai-work-between-pcs-and-servers-to-ease-strain). Anunciado June 3: Personal Computer — agente orquestrador que dirige tarefas AI entre hardware local e nuvem — disponível em Windows com acesso a Word, Outlook e ficheiros locais. Anteriormente Mac-only.

- **OpenAI: GPT-4.5 retiring June 27; o3 retiring August 26** — [OpenAI Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) | [Releasebot](https://releasebot.io/updates/openai/chatgpt). GPT-4.5 remove-se de ChatGPT a 27 de junho (30-day sunset); o3 a 26 de agosto (90-day sunset). GPT-5.5 Instant é o novo padrão desde maio 2026; absorção em models.md.

### 📊 Estudos & dados

- **50 Most-Cited Websites in Perplexity (June 2026)** — [Ahrefs Brand Radar](https://ahrefs.com/blog/most-cited-domains-perplexity/). Análise de 3,1M queries US: YouTube lidera com 32,4% do citation share — concentração mais elevada em qualquer engine estudado pelo Ahrefs. Metodologia automática mensal via Agent A.

- **AirOps 2026 State of AI Search Report** — [AirOps Blog](https://www.airops.com/blog/aeo-answer-engine-optimization). 83% das citações AI provêm de páginas actualizadas nos últimos 12 meses; tráfego via citação AI converte 3–4× acima do orgânico clássico. HubSpot 2026 State of Marketing corrobora: 58% dos marketers confirmam taxas de conversão superiores em tráfego AI vs. orgânico.

### ⚙️ Mudanças nas plataformas

- **Perplexity — Search as Code (SaC)** — [research.perplexity.ai](https://research.perplexity.ai/articles/rethinking-search-as-code-generation). Nova arquitectura agentic: modelos constroem pipelines de retrieval como código executável em sandbox (via Agentic Search SDK com primitivas composable), substituindo pipelines estáticos. Publicado ~31 maio.

- **Google May 2026 Core Update — conclusão estimada hoje** — [Search Engine Land](https://searchengineland.com/google-may-2026-core-update-rolling-out-now-478430). Rollout iniciado 21 maio. Dados preliminares: pages com schema completo (Article + autor + datePublished) mantiveram ou melhoraram; agregadores sem valor original são maiores perdedores. Aguardar dados Search Console até 11 junho.

### 📄 Research académico

- **"Retrieval-Augmented Generation: A Comprehensive Survey of Architectures, Enhancements, and Robustness Frontiers"** — [arxiv:2506.00054](https://arxiv.org/abs/2506.00054). Publicado junho 2026. Estrutura e granularidade de chunks determinam directamente quais conteúdos são recuperados e citados por AI search engines — relevante para arquitectura de conteúdo GEO.

### 💡 Implicações para destaque.ai

- O Perplexity Personal Computer no Windows abre o mercado agentic ao ecossistema Microsoft 365. SaaS B2B deve garantir dados acessíveis via API estruturada — conteúdo em silos fechados fica invisível para agentes. Só awareness por agora; sem mudança de pitch.
- YouTube com 32,4% das citações em Perplexity (3,1M queries): vídeos explicativos de casos de uso B2B são agora um canal AEO material, não opcional. Considerar nova linha de serviço de "AEO multimodal" ou incluir no pitch como gap a endereçar.
- O IPO da Anthropic ($965B) reforça o argumento de runway longo do ecossistema AI search — resposta a clientes que invocam "incerteza do mercado AI" como razão para adiar investimento em GEO.

## 2026-06-02

### 🔵 Anúncios oficiais

- **Anthropic: deprecação de Claude Sonnet 4 e Opus 4 na API — deadline 15 junho** — [anthropic.com](https://www.anthropic.com/research/deprecation-updates-opus-3). Retirement agendado para 15 junho 2026; migração recomendada para `claude-sonnet-4-6` e `claude-opus-4-7`. Preços mantidos nos novos modelos equivalentes.

### ⚙️ Mudanças nas plataformas

- **Google AI Mode — citation link cards em teste** — Google testa novo formato de card de citação dentro de AI Overviews e AI Mode, com maior destaque visual às fontes citadas. [Search Engine Roundtable, 1 junho 2026](https://www.seroundtable.com/recap-06-01-2026-41426.html).

- **Google AI Mode — anúncios conversacionais e healthcare ads em teste** — Google testa formatos publicitários conversacionais e ads de saúde directamente integrados em respostas de AI Mode. [Search Engine Land](https://searchengineland.com/google-tests-new-conversational-ad-formats-in-ai-mode-and-search-478115).

### 💡 Implicações para destaque.ai

- **Deadline iminente (15 junho)** para clientes técnicos com automações baseadas em `claude-sonnet-4` ou `claude-opus-4`: alertar para migração para modelos 4.6/4.7 antes do retirement. Só awareness — sem impacto em serviços destaque.ai se já actualizados.
- **Citation link cards em AI Mode** sinalizam que o Google está a testar maior transparência de fontes: conteúdo com citações claras e autoridade verificável pode beneficiar quando o formato se generalizar. Monitorizar rollout.
- **Anúncios em AI Mode** confirmam monetização do canal como prioritária para o Google: clientes B2B em SaaS, saúde e financeiro devem antecipar maior competição paga — argumento para consolidar presença GEO orgânica antes que o CPM no canal suba.

## 2026-06-01

### 🔵 Anúncios oficiais

- **Anthropic separa uso programático em pool de créditos independente a partir de 15 junho** — [infoworld.com](https://www.infoworld.com/article/4171274/anthropic-puts-claude-agents-on-a-meter-across-its-subscriptions.html). A partir de 15 junho, Claude Code GitHub Actions, Agent SDK, `claude -p` e apps de terceiros (Zed, Conductor, OpenClaw) saem da pool de subscrição e passam a debitar numa pool separada de créditos Agent SDK: Pro $20/mês, Max 5× $100/mês, Max 20× $200/mês a preços API completos. Claude Code interativo em terminal e claude.ai permanecem inalterados.

### ⚙️ Mudanças nas plataformas

- **Google May 2026 Core Update — conclusão prevista 2-4 junho, primeiros dados** — [schemaninja.com](https://schemaninja.com/core-update-is-almost-complete/). Dados preliminares: páginas com schema completo (Article, FAQPage, autor nomeado, datePublished/dateModified) mantiveram ou melhoraram posições; portais de comparação, agregadores de informação e conteúdo sem schema são os maiores perdedores. Google não confirmou padrões verticais antes do encerramento oficial.

- **Perplexity Computer chega ao Microsoft 365** — [perplexity.ai/changelog](https://www.perplexity.ai/changelog). Disponível desde 29 maio em Word, Excel, PowerPoint, Outlook e Teams; fontes e contexto de pesquisa visíveis em threads Computer dentro das apps M365.

### 📄 Research académico

- **"Beyond Retrieval: Modeling Confidence Decay and Deterministic Agentic Platforms in GEO"** — [arxiv.org/abs/2604.03656](https://arxiv.org/abs/2604.03656). Identifica o "zero-click paradox": LLMs que absorvem conteúdo no treino deixam de citar fontes externas para esse conteúdo. Propõe modelação de confidence decay para medir quando conteúdo perde visibilidade em GE independentemente da sua qualidade.

- **"From Experience to Skill: Multi-Agent GEO via Reusable Strategy Learning"** — [arxiv.org/abs/2604.19516](https://arxiv.org/abs/2604.19516). Framework multi-agente que aprende estratégias de otimização de conteúdo reutilizáveis entre motores generativos distintos (ChatGPT, Gemini, Perplexity), reduzindo necessidade de reoptimização por plataforma.

### 💡 Implicações para destaque.ai

- **Anthropic billing split (15 junho) afecta automações de conteúdo GEO**: clientes e agências que usam Claude Code em pipelines Agent SDK vão registar aumento de custo real. Alertar clientes técnicos para rever workflows antes do dia 15; Claude Code interativo (não afectado) é alternativa sem custo adicional para tarefas ad-hoc.
- **May Core Update confirma schema como factor diferenciador imediato**: primeiros dados de winners/losers reforçam FAQPage + Article schema + author markup como implementação de maior impacto para clientes SaaS B2B — argumento técnico concreto para posicionar auditoria de structured data como serviço urgente.
- **Zero-click paradox** (2604.03656) é dado contra-intuitivo com valor de pitch: o modelo pode ter memorizado conteúdo de um cliente sem o citar em tempo real — invisibilidade que dashboards de ranking clássico não detectam. Reforça necessidade de monitorização de brand mentions em AI via fontes externas (citação ao vivo vs. parametric memory).

## 2026-05-31

### 🔵 Anúncios oficiais

- **CNN processa Perplexity por infracção de copyright em 17.000 conteúdos** — [cnn.com](https://www.cnn.com/2026/05/28/media/cnn-sues-perplexity-ai-copyright). Acção intentada a 28 de maio no SDNY: CNN alega que Perplexity raspou e redistribuiu 17.000 artigos, fotos e vídeos sem licença, usados como input em tempo real nos LLMs da empresa. Primeiro processo de uma rede televisiva contra motor de pesquisa IA; negociação prévia de 2025 falhou antes da queixa.

- **Google publica guia oficial: "AEO e GEO são ainda SEO"** — [searchenginejournal.com](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/). Novo documento de guidance afirma explicitamente que llms.txt, content chunking e schema específico para IA não são necessários para os sistemas Google; otimizar para AI search é otimizar para a experiência de pesquisa — sem tratamento diferenciado para conteúdo destinado a IA generativa.

### 📊 Estudos & dados

- **72% das marcas têm zero menções em respostas IA, mesmo com posição na página 1 do Google** — [superlines.io](https://www.superlines.io/articles/ai-search-statistics/) (dados março 2026). A mesma marca regista variação de 615× no volume de citações entre plataformas (ex. Grok vs Claude); 85% das menções de marca em IA provêm de páginas de terceiros, não de domínios próprios; 60% das citações em AI Overviews vêm de URLs fora do top 20 orgânico; páginas não actualizadas trimestralmente têm 3× mais probabilidade de perder citações.

### 💡 Implicações para destaque.ai

- O processo CNN vs Perplexity expõe a fragilidade do modelo de raspagem sem consentimento: marcas sem controlo das suas fontes de citação em IA ficam expostas a conteúdo extraído sem contexto. Oportunidade de posicionar destaque.ai em "narrative control" em AI search — só awareness por agora.
- A variação de 615× nas citações entre plataformas é o argumento mais forte para dashboard multi-motor: clientes SaaS B2B que apenas monitorizam Google AI têm uma visão incompleta da sua visibilidade real. Potencial diferenciador de serviço a desenvolver.
- O guia Google "GEO é SEO" simplifica o pitch para clientes conservadores: não exige nova terminologia, apenas boas práticas de conteúdo com legibilidade para IA — reduz resistência à adopção e facilita qualificação de leads.

## 2026-05-30

### 🔵 Anúncios oficiais

- **Anthropic — Claude Opus 4.8 lançado (28 maio)** — [anthropic.com](https://www.anthropic.com/news/claude-opus-4-8). Novas capacidades: dynamic workflows no Claude Code para problemas de grande escala, controlo de esforço por parte do utilizador, fast mode 3× mais barato que em Opus 4.7. Melhoria transversal em benchmarks relativamente a Opus 4.7.

- **Anthropic — Series H de $65 B, valuation $965 B (28 maio)** — [anthropic.com](https://www.anthropic.com/news/series-h). Round liderado por Altimeter Capital, Dragoneer, Greenoaks e Sequoia; run-rate de receita cruzou $47 B antes do fecho. Maior ronda de financiamento privado em AI até à data.

- **Google May 2026 Core Update — dia 9 de rollout (em curso)** — [searchengineland.com](https://searchengineland.com/google-may-2026-core-update-rolling-out-now-478430). Iniciado a 21 maio, conclusão estimada c. 4 junho. Volatilidade reportada em finance, SaaS e e-commerce; sem post de acompanhamento do Google.

### 💡 Implicações para destaque.ai

- A valuation de $965 B da Anthropic e receita de $47 B confirmam que o mercado AI enterprise está em aceleração — argumento adicional para clientes SaaS B2B que ainda hesitam em investir em GEO/AEO: os fornecedores de AI search têm runway longo.
- Claude Opus 4.8 com dynamic workflows reforça o papel de Claude Code em automação de tarefas complexas; destaque.ai pode explorar integração de workflows de produção de conteúdo GEO-optimizado directamente via Claude Code.

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
