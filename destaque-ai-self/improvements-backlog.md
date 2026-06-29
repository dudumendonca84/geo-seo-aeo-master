# destaque.ai — Improvements Backlog

Metodologia: SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs)
Última actualização: 2026-06-29
Formato: P0 = crítico / P1 = alta prioridade / P2 = médio prazo / P3 = baixa prioridade / DONE = resolvido

---

## P0 — Crítico (bloqueador de entity-graph e E-E-A-T)

### ENT-001 — Criar LinkedIn company page para destaque.ai
- **Categoria**: Entity & brand foundation, Sinais sociais
- **Evidência**: Nenhum perfil LinkedIn associado a destaque.ai identificado em pesquisa. "Destaque Consultoria" existente no LinkedIn é uma empresa brasileira — risco de disambiguation activo.
- **Impacto**: Sem LinkedIn, nenhum LLM consegue resolver a entidade com confiança. `Organization.sameAs` fica incompleto. Knowledge Panel impossível.
- **Acção**: Criar `linkedin.com/company/destaque-ai` (ou slug disponível). Preencher: nome, descrição, website, localização Lisboa, sector Consultoria/Marketing/Tecnologia, logo.
- **Esforço**: 1 hora
- **Criado em**: 2026-06-29
- **Responsável**: Eduardo Mendonça

### ENT-002 — Criar Wikidata item para destaque.ai
- **Categoria**: Entity & brand foundation
- **Evidência**: Nenhum QID identificado em pesquisa.
- **Impacto**: Substrato do knowledge graph para todas as engines. Pre-requisito para Knowledge Panel Google.
- **Acção**: Criar item com: instance of = empresa de consultoria (Q2668072), country = Portugal (Q45), headquarters = Lisboa (Q597), official website = https://destaque.ai, inception date, founder, LinkedIn ID (após ENT-001).
- **Esforço**: 3 horas
- **Dependência**: ENT-001
- **Criado em**: 2026-06-29

### ENT-003 — Publicar nome do fundador/consultor principal no site
- **Categoria**: E-E-A-T on-site, Entity
- **Evidência**: Nenhuma pesquisa retornou um autor nomeado associado a artigos ou à empresa.
- **Impacto**: E-E-A-T mínimo. LLMs citam autores nomeados mais frequentemente (Aggarwal et al.; Profound).
- **Acção**: Adicionar byline em todos os artigos de blog. Criar página "Sobre" com bio, experiência, foto. Adicionar `Person` JSON-LD com `sameAs` → LinkedIn.
- **Esforço**: 2 horas
- **Criado em**: 2026-06-29

### ENT-004 — Verificar e publicar llms.txt com paridade ao sitemap
- **Categoria**: GEO técnica, Técnica
- **Evidência**: `/llms.txt` retornou 403 via proxy (status real desconhecido). Não verificável remotamente.
- **Impacto**: Inconsistência operacional — destaque.ai recomenda `llms.txt` a clientes. Um `llms.txt` ausente ou com menos URLs que o sitemap é pior do que nada (sinaliza descuido).
- **Acção**: Verificar se `llms.txt` existe. Se não, criar com H1 = "destaque.ai", blockquote de descrição, secções por tipo de página (Homepage, Serviços, Blog, About), todas as URLs do sitemap declaradas.
- **Esforço**: 2 horas
- **Criado em**: 2026-06-29

### JSON-001 — Adicionar Organization.sameAs ao JSON-LD da homepage
- **Categoria**: Schema, Entity
- **Evidência**: Nenhum sameAs rastreável publicamente.
- **Acção**: Após criar LinkedIn (ENT-001) e Wikidata (ENT-002), adicionar `sameAs` com array de URLs: LinkedIn, Wikidata (https://www.wikidata.org/wiki/QXXXXX), X (quando criado).
- **Esforço**: 30 minutos
- **Dependência**: ENT-001, ENT-002
- **Criado em**: 2026-06-29

---

## P1 — Alta prioridade (impacto directo em visibilidade GEO)

### CTN-001 — Publicar nota metodológica do estudo das 45 empresas
- **Categoria**: Conteúdo & topical authority, E-E-A-T
- **Evidência**: O dado "96% sem política para AI crawlers; 31% completamente invisíveis" é o activo editorial mais forte do site mas não tem metodologia declarada publicamente identificável.
- **Impacto**: Aumenta citabilidade em media PT e em LLMs. Distingue destaque.ai de consultores que fazem claims sem dados.
- **Acção**: Publicar artigo ou secção dedicada com: período de análise, critérios de selecção das 45 empresas, engines testadas, prompt set usado, definição de "invisível".
- **Esforço**: 4 horas
- **Criado em**: 2026-06-29

### PR-001 — Press outreach para Observador/ECO com dado das 45 empresas
- **Categoria**: Authority & digital PR, Entity
- **Evidência**: Nenhuma cobertura Tier-1 PT media identificada.
- **Impacto**: Uma citação no Observador ou ECO é o maior alavancador de entity-strength e backlinks de autoridade disponível para destaque.ai.
- **Acção**: Redigir press release de 400 palavras com o dado das 45 empresas + quote do fundador + link para metodologia (após CTN-001). Enviar para jornalistas de tecnologia do Observador, ECO, Dinheiro Vivo.
- **Esforço**: 4 horas (redacção) + follow-up
- **Dependência**: CTN-001, ENT-003
- **Criado em**: 2026-06-29

### TECH-001 — Verificar robots.txt para AI crawlers 2026
- **Categoria**: SEO Técnico, GEO técnica
- **Evidência**: Não verificável via proxy. Estatística própria de destaque.ai diz 96% das B2B SaaS PT não têm política — verificar que o próprio site não está nessa percentagem.
- **Acção**: `curl https://destaque.ai/robots.txt` e confirmar: `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended` declarados; `GPTBot` com decisão deliberada (allow ou disallow com justificação).
- **Esforço**: 1 hora
- **Criado em**: 2026-06-29

### MEAS-001 — Activar Bing Webmaster Tools AI Performance
- **Categoria**: Medição
- **Evidência**: BWT AI Performance disponível desde 9 Fev 2026 — primeiro telemetria first-party de citações AI. Não verificável se activo.
- **Acção**: Login em BWT, verificar se o domínio está verificado, activar AI Performance dashboard.
- **Esforço**: 30 minutos
- **Criado em**: 2026-06-29

### META-001 — Expandir meta description da homepage
- **Categoria**: On-page
- **Evidência**: Meta description actual é "destaque.ai — Visibilidade em IA, com método." (46 chars). Google exibe até ~160 chars.
- **Acção**: Reescrever para 130-150 chars com keyword principal (GEO consultoria Portugal B2B SaaS), diferenciador (método auditável, resultados mensuráveis) e CTA implícito.
- **Esforço**: 15 minutos
- **Criado em**: 2026-06-29

---

## P2 — Médio prazo (reforço gradual)

### SOC-001 — Criar e activar conta X/Twitter para destaque.ai
- **Categoria**: Sinais sociais
- **Evidência**: Nenhuma conta X identificada.
- **Impacto**: Indexação Bing (que alimenta ChatGPT Search). Sinais de entidade para LLMs.
- **Esforço**: 1 hora (criação) + ongoing (1-2 posts/semana)
- **Criado em**: 2026-06-29

### EAT-001 — Criar página de caso de estudo com métricas antes/depois
- **Categoria**: E-E-A-T on-site
- **Evidência**: Nenhum caso de estudo com dados identificado.
- **Acção**: Documentar 1 cliente (com autorização) com: baseline de invisibilidade nos 4 motores → acções implementadas → resultado medido (citation rate, mentions, AI-attributed traffic).
- **Esforço**: 8 horas
- **Criado em**: 2026-06-29

### TECH-002 — Verificar e corrigir security headers
- **Categoria**: SEO Técnico
- **Acção**: `curl -I https://destaque.ai/` e verificar: HSTS (`Strict-Transport-Security: max-age=31536000`), `X-Content-Type-Options: nosniff`, CSP (Content-Security-Policy), `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- **Esforço**: 2 horas (incluindo correcção se falharem)
- **Criado em**: 2026-06-29

### TECH-003 — Confirmar HTML server-rendered
- **Categoria**: GEO técnica
- **Acção**: `curl -s https://destaque.ai/ | grep -c '<h'` — se retornar 0 ou estrutura vazia, o site depende de JS para render e LLMs não conseguem ler o conteúdo.
- **Esforço**: 30 minutos
- **Criado em**: 2026-06-29

### SCHEMA-001 — Adicionar Person JSON-LD ao fundador
- **Categoria**: Schema, E-E-A-T
- **Acção**: Após ENT-003, adicionar `Person` schema com: `name`, `jobTitle: "Consultor GEO"`, `worksFor: {Organization: destaque.ai}`, `sameAs: [linkedin_url]`.
- **Esforço**: 1 hora
- **Dependência**: ENT-001, ENT-003
- **Criado em**: 2026-06-29

### SCHEMA-002 — Adicionar Service JSON-LD às páginas de serviços
- **Categoria**: Schema
- **Acção**: Adicionar `Service` schema em cada página de serviço com: `name`, `description`, `provider` (destaque.ai), `areaServed: PT`, `serviceType: "Generative Engine Optimization"`.
- **Esforço**: 2 horas
- **Criado em**: 2026-06-29

---

## P3 — Baixa prioridade / longo prazo

### ENT-005 — Avaliar elegibilidade Wikipedia
- **Categoria**: Entity
- **Nota**: Não forçar antes de ter 3+ fontes Tier-1 PT independentes. Dependência: PR-001 + 2 cobertura adicional.
- **Criado em**: 2026-06-29

### MEAS-002 — Subscrever ferramenta de monitoring AI (Peec AI)
- **Categoria**: Medição
- **Nota**: €89/mês (plano mensal). Recomendado para contexto EU/PT. Adicionar engines Claude e Gemini como add-ons (+€20-30 cada).
- **Criado em**: 2026-06-29

### CTN-002 — Publicar relatório sectorial anual (2ª edição do estudo das 45 empresas)
- **Categoria**: Conteúdo & topical authority
- **Nota**: Expandir para 80-100 empresas. Incluir YoY comparativo. Enviar a media PT como relatório de referência.
- **Prazo estimado**: Q1 2027
- **Criado em**: 2026-06-29

---

## DONE — Resolvido

*(Vazio — primeira baseline. Items serão movidos aqui em auditorias subsequentes com data e evidência de resolução.)*

---

*Backlog gerado por auditoria SINAL 2026-06-29. Próxima auditoria: semana de 2026-07-06.*
