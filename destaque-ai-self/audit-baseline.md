# destaque.ai self-audit baseline

**Data da auditoria:** 17 agosto 2026, ~08:20–09:45 UTC. **Execução:** quinta corrida conhecida do Routine `destaque-ai-self-audit-weekly`. Comparável, com reservas explícitas abaixo, com a execução de 03 agosto 2026 (ver `audit-history.md`) — não existe registo de uma execução em 10 agosto 2026 em nenhum dos ficheiros lidos por esta sessão; ver nota de metodologia.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Achado de processo mais importante desta sessão: o repositório GitHub para onde esta sessão tem acesso de escrita real nunca recebeu, em todo o seu histórico `git`, o conteúdo que semanas de auditorias anteriores dizem ter "commitado e enviado para `main`".** Esta sessão correu `git log`, `git ls-tree` e comparou as árvores de `main` e da branch de trabalho contra o conteúdo lido de um directório de skill local (`/root/.claude/skills/synced/geo-seo-aeo-master/`, usado pela ferramenta de skills para carregar `SKILL.md` e `references/`). O directório local tem `destaque-ai-self/audit-baseline.md` datado de 03 agosto, `references/models.md`, `references/prompts.md`, `methodology-changelog.md` e seis ficheiros de referência adicionais (`alert_thresholds.md`, `competitor_filtering.md`, `engine_playbooks.md`, `gap_action_mapping.md`, `narrative_templates.md`, `search_modes.md`). O repositório `dudumendonca84/geo-seo-aeo-master` no GitHub — três commits ao todo, o mais recente "docs: clarify token setup" — **nunca teve nenhum destes ficheiros**: sem `destaque-ai-self/`, sem `models.md`, sem `prompts.md`, sem `methodology-changelog.md`. O próprio `daily-agent/news-feed.md` deste repositório está vazio (só cabeçalho, zero entradas datadas), enquanto a cópia local tem 71 entradas até 07 agosto. Isto confirma, com um grau de certeza que as notas de metodologia anteriores (03 ago, e o próprio `news-feed.md` local em várias entradas de agosto) descreviam como suspeita recorrente mas não verificada desta forma: **semanas de "commit + push para main" não chegaram a este remoto**. Ou foram escritas para um caminho/repositório diferente, ou o passo de push falhou silenciosamente em sessões anteriores, ou existe uma segunda cópia do skill nalgum outro remoto fora do âmbito desta sessão (o acesso GitHub desta sessão está explicitamente limitado a `dudumendonca84/geo-seo-aeo-master`, pelo que não é possível verificar essa hipótese a partir daqui). Não é possível determinar a partir desta sessão qual das explicações é a correcta — fica registado como o item P0 do backlog, com a acção concreta de a próxima sessão confirmar, no arranque, se o conteúdo desta execução chegou de facto a `main` antes de assumir continuidade.

**Decisão desta execução:** tratar o directório local (mais completo, com histórico coerente semana-a-semana) como a fonte de comparação de contexto — é o que existe de mais próximo de um registo contínuo — mas escrever o resultado desta auditoria apenas no repositório GitHub acessível a esta sessão, que é o único destino cuja persistência é verificável de fora do ambiente de execução actual. Este ficheiro, `improvements-backlog.md` e `audit-history.md` são escritos de raiz nesse repositório nesta execução; ficheiros de referência em falta (`models.md`, `prompts.md`) são copiados tal como lidos, sem alteração de conteúdo além do refresh de `models.md` descrito abaixo. Os seis ficheiros de referência adicionais listados acima (`alert_thresholds.md`, `competitor_filtering.md`, `engine_playbooks.md`, `gap_action_mapping.md`, `narrative_templates.md`, `search_modes.md`) e `methodology-changelog.md` **não** foram trazidos nesta execução — está fora do âmbito desta auditoria semanal e fica como acção dedicada de consolidação (ver Horizonte 1).

**Gap de calendário não explicado.** A última entrada de `audit-history.md` (cópia local) é 03 agosto 2026. Não existe entrada para 10 agosto em nenhuma das duas árvores. `daily-agent/news-feed.md` (cópia local) também pára em 07 agosto — 10 dias antes desta execução. Esta sessão não tem forma de determinar se a rotina semanal simplesmente não correu em 10 agosto, se correu e o resultado se perdeu pela mesma razão do achado acima, ou outra causa. Registado como facto observado, sem especulação sobre a causa.

**Rede de saída continua restrita, mesmo padrão de semanas anteriores.** `curl` directo a `destaque.ai` falhou (`CONNECT tunnel failed`, HTTP 403 do proxy). `WebFetch` genérico devolveu `EGRESS_BLOCKED` para `destaque.ai`, `openai.com`, `help.openai.com` — um tipo de erro explícito e diferente do HTTP 403 de semanas anteriores, mas com o mesmo efeito prático: sem acesso directo. Dados técnicos do site foram obtidos via `mcp__Vercel__web_fetch_vercel_url` (fetch real, server-side, através da própria Vercel — usa os domínios `.vercel.app`, que funcionam, em vez do domínio próprio `www.destaque.ai`, que devolveu "Unable to create shareable URL" para `robots.txt`/`llms.txt` especificamente, embora `sitemap.xml` no domínio próprio tenha funcionado — inconsistência não investigada). `mcp__Vercel__get_project`/`list_deployments`/`get_runtime_errors` usados para os três projectos Vercel relevantes. `WebSearch` funcionou normalmente e foi a via usada para o teste multi-motor (ver secção 7) e para o refresh de `models.md`. PageSpeed Insights: HTTP 429, mesma assinatura de erro de pelo menos quatro execuções anteriores.

**Amostra técnica desta execução:** `/` (homepage), `robots.txt`, `sitemap.xml`, `llms.txt`, `/consultoria-geo-portugal` (página pilar, não re-amostrada há várias semanas). Não amostrados directamente: `/tracker`, `/servico`, `/sobre`, `/glossario`, `/perguntas`, `/en/*`, os 3 casos de estudo, os 3 estudos. Valores de 03 agosto mantidos para o que não foi re-amostrado, marcado como tal.

**O que não foi possível verificar nesta execução, e porquê:**
- **TTFB por curl de PT** — bloqueado (rede de saída geral do sandbox).
- **PageSpeed Insights (LCP/INP/CLS)** — HTTP 429. Pelo menos a quinta semana com a mesma falha (13/20/27 jul, 03 ago, 17 ago — com o hiato de 10 ago por confirmar).
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot** — sem sessão de browser autenticada nem integração de API, sem progresso desde pelo menos 13 jul. Esta execução usou a ferramenta `WebSearch` (Claude com pesquisa web real) como proxy parcial — **não é equivalente a nenhum dos cinco motores mandatórios**, é um sinal direccional de um motor só, com um mecanismo de grounding diferente de qualquer um dos cinco. Ver secção 7 para o detalhe e a advertência de comparabilidade com semanas anteriores.
- **Wikidata, LinkedIn, Crunchbase, sinais sociais** — não re-verificados; `WebSearch` não devolveu conteúdo indexado directo do item Wikidata Q140043087 (nem confirma nem refuta o conteúdo declarado).
- **`references/models.md`** — refresh tentado; uma mudança de modelo por defeito absorvida com reserva (ver ficheiro e secção 7). Fontes primárias continuam inacessíveis (`EGRESS_BLOCKED`).
- **`/tracker` — persistência do `ImageObject`** — não re-amostrado esta semana; não assumir mudança nem confirmação.

Onde a evidência é real e verificada nesta execução, está citada com URL/header/data. Onde não foi possível verificar ou não foi re-amostrada, está marcado **N/D** ou **não re-verificado**.

---

## 1. Sumário executivo

**Score global: 72/100 — Bom, com lacunas de verificação que persistem.** Média de 11 categorias com evidência (Performance/CWV continua N/D). **Δ vs. 03 agosto: +3, com reserva de comparabilidade** — o intervalo entre execuções é maior que o habitual (gap de calendário não explicado, ver nota de metodologia) e o teste multi-motor desta semana usa uma amostra mais pequena e uma ferramenta diferente da usada em 03 agosto; o delta é direccionalmente informativo, não uma leitura semana-a-semana limpa.

### Scorecard — 12 categorias

| # | Categoria | Score | Δ vs. 03 ago | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 87/100 | 0 | robots.txt, CSP e cabeçalhos de segurança reconfirmados sem alteração |
| 2 | Performance / CWV | N/D | — | PSI 429 de novo |
| 3 | SEO On-Page | 93/100 | 0 | Homepage e página pilar reconfirmadas estáveis |
| 4 | Schema / dados estruturados | 96/100 | 0 | `Person` reconfirmado presente na homepage e na página pilar; sem alteração de pontuação por amostra parcial |
| 5 | Optimização de imagens | 72/100 | 0 | `/tracker` não re-amostrado; homepage e pilar continuam com zero imagens |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 92/100 | +1 | Nova página `/ai-usage` (política de uso por IA) indexada em `llms.txt` e no sitemap |
| 7 | Conteúdo & topical authority | 90/100 | +5 | Hiato editorial de ~19-25 dias resolvido: 2 posts novos (10 ago) + página `/auditoria` nova |
| 8 | Entidade / brand foundation | 77/100 | 0 | Não re-verificado esta semana |
| 9 | Autoridade & digital PR | 20/100 | 0 | Zero cobertura Tier-1 PT **reconfirmada** esta semana via pesquisa directa (não apenas valor transportado) |
| 10 | Sinais sociais & community | 35/100 | 0 | Não re-verificado esta semana |
| 11 | E-E-A-T & on-site authority | 72/100 | +2 | `Person` schema confirmado em 2 templates; conteúdo dos campos (nome, `sameAs`) não inspeccionado |
| 12 | Medição & feedback loop | 58/100 | +20 | O sintoma mais grave de 03 ago (quota SerpApi esgotada) não reaparece nos erros dos últimos 7 dias; a causa-raiz (erro de campo DataForSEO) continua activa, sem correcção confirmada |

### Top 4 findings (cross-dimensional)

1. **O único destino de escrita real desta rotina nunca recebeu, em todo o histórico `git`, o conteúdo que semanas de auditorias anteriores relatam ter enviado para `main`.** Ver nota de metodologia para o detalhe completo. Isto significa que qualquer cliente, colega ou sessão futura que consulte `dudumendonca84/geo-seo-aeo-master` no GitHub — em vez do directório de skill sincronizado localmente — encontra um repositório com três commits e nenhum histórico de auditoria, nenhum `models.md`, nenhum `prompts.md`. O trabalho real (semanas de auditorias, catálogo de prompts, tracker de modelos) existe, mas a sua persistência fora do ambiente de execução actual não estava, até esta sessão confirmar o oposto, garantida. Esta execução escreve directamente no repositório GitHub acessível, precisamente para testar e corrigir esta lacuna — mas não pode confirmar que sessões anteriores tinham a mesma via de escrita disponível, nem explicar porque a não usaram com sucesso.
2. **A cadência editorial, sinalizada há duas execuções como a caminho de se tornar um problema real, inverteu-se — e o site ganhou uma peça nova de funil, não só conteúdo.** `sitemap.xml` confirma dois posts novos publicados a 10 agosto ("Agência de GEO em Lisboa para SaaS B2B: como decidir" e "Contratar uma consultora de GEO ou desenvolver a capacidade internamente?") e uma página nova, `/auditoria`, com prioridade 1.0 no sitemap — igual à homepage — dedicada à auditoria gratuita de visibilidade em IA, referenciada em detalhe em `llms.txt` ("Auditoria de visibilidade em IA... corre-se à mão, não é instantânea. Mercados: Portugal, Brasil, Reino Unido, Estados Unidos, Espanha, França, Alemanha"). Também nova: `/ai-usage`, uma página de política de uso por crawlers de IA, referenciada como "a página que interessa a quem está a ler este ficheiro" no próprio `llms.txt`. As três adições juntas leem-se como uma decisão deliberada de reforçar o topo do funil (conteúdo + página de conversão dedicada) depois de um período de trabalho quase inteiramente técnico/produto — o oposto do padrão observado nas duas execuções anteriores.
3. **Teste multi-motor desta semana (amostra parcial, ferramenta diferente de semanas anteriores — ver advertência): 0 de 8 prompts mandatórios testados devolveram destaque.ai na resposta sintetizada, mas o conteúdo de destaque.ai apareceu no índice de resultados brutos de pesquisa em 2 desses 8 sem ser citado na síntese.** Em `GD5` ("que empresa recomendam para consultoria de visibilidade em IA em Portugal?"), o estudo de destaque.ai apareceu como 2º link nos resultados brutos; a resposta sintetizada recomendou LusoAI, Tráfego Digital e BI4ALL, sem nomear destaque.ai. Em `V1` ("como funciona o GEO para uma SaaS B2B em Portugal?"), o post de blog de destaque.ai apareceu como **1º link** nos resultados brutos; a síntese usou o conteúdo para explicar o conceito sem atribuir a fonte por nome. Isto é uma variante mais precisa do padrão "citado, não recomendado" documentado em 03 agosto — desta vez "indexado, nem sequer citado na síntese". Adicionalmente, `LR1` ("quem faz auditorias de GEO em Lisboa?") e `LR2` ("who does AEO consulting in Lisbon?") — os dois prompts de maior intenção comercial testados — devolveram resultados dominados por **colisão de acrónimo**: "GEO" interpretado como Geologia/Geotecnia, "AEO" interpretado como Authorised Economic Operator (termo aduaneiro) ou uma empresa homónima no Reino Unido. Se este padrão se confirmar nos motores mandatórios reais (não apenas nesta ferramenta proxy), é um problema estrutural de descoberta que nenhuma optimização de conteúdo resolve sozinha — candidato a investigação dedicada, não a item de backlog cosmético. Ver secção 7 para o detalhe completo e a lista alargada de concorrentes novos observados esta semana (Marketing Gabriel, LusoAI, Tráfego Digital, BI4ALL, SEO Labs, Marco Gouveia, Taptwice Media).
4. **O produto Tracker (`destaque-ai-tracker`) teve, esta semana, um volume de desenvolvimento muito superior ao habitual — pelo menos 20 deployments desde 11 agosto, construindo um sistema novo de resolução de fichas locais (`resolve_place`) — enquanto o incidente de medição mais grave de 03 agosto (quota SerpApi esgotada) não reaparece nos erros dos últimos 7 dias.** `mcp__Vercel__get_runtime_errors` devolve apenas 2 grupos de erro (vs. 12 há duas semanas), ambos do mesmo erro de campo DataForSEO (`Invalid Field: 'language_name'`) já conhecido, agora com 54 ocorrências acumuladas desde 1 de agosto — **a última ocorrência é desta manhã, 17 agosto 08:09 UTC**, confirmando que o bug continua activo, apenas com o fallback automático para SerpApi a absorver o impacto sem gerar o sintoma de quota esgotada visto há duas semanas. Não há confirmação por commit de que a causa-raiz foi corrigida — está marcada "sintoma não reproduzido", não "resolvido". O site principal (`destaque-ai`) e o produto de prospecção (`destaque-ai-commercial`) continuam com zero erros de runtime nos últimos 7 dias.

### O que já está forte

A infraestrutura de produção continua saudável onde importa mais: zero erros de runtime em `destaque-ai` (site principal) nos últimos 7 dias, deploy de produção mais recente a 15 agosto sem incidente. O robots.txt mantém-se completo e permissivo para 18 crawlers de IA nomeados, byte-idêntico ao confirmado há duas semanas. O `llms.txt` é, por leitura directa nesta execução, um documento denso e bem estruturado — descreve o Tracker, os três estudos publicados, os 26 FAQ, os três casos de estudo e a nova auditoria gratuita com clareza que um motor de IA consegue processar sem ambiguidade. E a reversão do hiato editorial, combinada com a página `/auditoria` nova, é a primeira evidência desta série de auditorias de um investimento deliberado em topo de funil depois de várias semanas de foco quase exclusivamente técnico.

---

## 2. Contexto de negócio

Sem alteração face a 03 ago: destaque.ai (`Tuasunt, Lda.`), consultoria GEO sediada em Lisboa, fundada 2025, fundador Eduardo Mendonça. Portfólio de serviços confirmado por leitura directa do `llms.txt` nesta execução: Diagnóstico GEO, Avenças de acompanhamento (Visibilidade/Autoridade), e a **Auditoria de visibilidade em IA gratuita** (`/auditoria`), agora com página dedicada e cobertura de mercado declarada (Portugal, Brasil, Reino Unido, Estados Unidos, Espanha, França, Alemanha) — mais ampla do que o âmbito PT-PT habitualmente reportado nesta auditoria; vale confirmar se isto reflecte intenção real de expansão ou é herança de um template de schema não ajustado (ver item ENTITY/STRATEGIC pré-existente sobre `areaServed`).

---

## 3. Análise de plataforma

Hosting Vercel, projecto `destaque-ai` (`prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`), Next.js, `nodeVersion: 24.x`. Último deploy de produção confirmado: **15 agosto 2026, 19:55:39 UTC** (`dpl_J94LjcLY1MzCZpZxUcBVgZmsctaC`), commit de UI ("Selector PT/EN: pílula interior em vez de bloco colado à cápsula"). Zero erros de runtime no projecto principal nos últimos 7 dias.

Confirmados os três projectos relacionados na mesma conta Vercel (`team_GdiuFturz4hfmcBfWMKFhzms`): `destaque-ai` (site), `destaque-ai-tracker` (produto, domínio `tracker.destaque.ai`, actividade de desenvolvimento intensa esta semana — ver secção 13) e `destaque-ai-commercial` (ferramenta interna de prospecção, zero erros de runtime nos últimos 7 dias, sem alteração de estado face a 03 ago).

---

## 4. Performance

**N/D, de novo.** PageSpeed Insights devolveu HTTP 429. `curl` de saída bloqueado (`EGRESS_BLOCKED`/`CONNECT tunnel failed`). Este é, pelo menos, o quinto insucesso consecutivo com a mesma assinatura de erro ao longo de cinco execuções conhecidas (13/20/27 jul, 03 ago, 17 ago) — a recomendação de abandonar PSI como fonte de dados desta auditoria e substituir por Vercel Speed Insights/Web Analytics ou pela CrUX API pública, já feita em execuções anteriores, é reforçada com maior urgência: não há razão para esperar um resultado diferente numa sexta tentativa sem mudar de fonte.

Sinais indirectos via cabeçalhos Vercel (páginas amostradas esta semana): `content-encoding: br` em todas, `x-vercel-cache: HIT` na maioria (uma resposta `PRERENDER` em `llms.txt`). Sem alteração face a semanas anteriores.

---

## 5. SEO on-page

**Homepage** (confirmada por fetch directo nesta execução): título "destaque.ai: Visibilidade em IA, com método." (inalterado); meta description "O ChatGPT é o novo boca a boca: as pessoas perguntam à IA quem contratar, o que comprar, onde ir. Construímos a tua presença nas respostas. Software e marcas locais." (confirmada por leitura directa, texto exacto não comparado byte-a-byte com semanas anteriores porque não fora citado verbatim antes); `og:description` idêntica; `canonical` correcto (`https://www.destaque.ai`); 1×H1 ("Perguntam à IA pelo que precisam. A tua marca é a resposta, ou não é."), 12×H2 (era 11 em 03 ago — +1, consistente com adições de conteúdo pequenas); **zero `<img>`** (inalterado); sem `hreflang` (a homepage não tem par EN dedicado, mesma leitura de sempre).

**Página pilar `/consultoria-geo-portugal`** (re-amostrada pela primeira vez desde 27 jul): título "Consultoria GEO em Portugal: o panorama em 2026 · destaque.ai", meta description confirmada estável, `canonical` correcto, **zero `<img>`** (inalterado), sem `hreflang` (decisão explícita já documentada em execuções anteriores, não uma lacuna).

Score mantido em 93/100.

---

## 6. SEO technical

- **`sitemap.xml`:** **47 URLs**, up de 43 em 03 ago. Novidades: `/auditoria` (prioridade 1.0, empatada com a homepage), `/ai-usage` (prioridade 0.4), dois posts de blog novos datados 10 ago 2026. `lastmod` das páginas estruturais em `2026-08-15T03:12:56.238Z`, consistente com o deploy de 15 ago.
- **`robots.txt`:** 756 bytes, **byte-idêntico em conteúdo** ao confirmado em 03 ago — 18 user-agents de IA nomeados (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `anthropic-ai`, `ClaudeBot`, `Claude-Web`, `Claude-User`, `Claude-SearchBot`, `Google-Extended`, `PerplexityBot`, `Perplexity-User`, `CCBot`, `Applebot-Extended`, `Bytespider`, `DuckAssistBot`, `MistralAI-User`, `cohere-ai`, `Meta-ExternalAgent`), todos `Allow: /`; linha `Content-Signal: search=yes, ai-input=yes, ai-train=yes` presente e inalterada. `last-modified` avançou para 15 ago (era 31 jul) apesar do conteúdo ser idêntico — provável regeneração do ficheiro estático no build sem alteração de conteúdo, não investigado em detalhe.
- **JSON-LD schema:** homepage confirma 2 blocos, tipos `Organization`, `Person`, `WebSite`, `WebPage`, `Service`, `FAQPage`. Página pilar confirma tipos `Organization`, `Person`, `WebSite`, `Article`, `FAQPage`, `BreadcrumbList`. **`Person` presente em ambas as páginas amostradas** — não inspeccionado em detalhe se declara nome, credenciais e `sameAs` reais, ou é um tipo com campos mínimos; fica como item de verificação (ver Horizonte 1).
- **Security headers:** HSTS, `x-content-type-options`, `x-frame-options`, `referrer-policy`, `permissions-policy` confirmados presentes e inalterados nas respostas amostradas. **`content-security-policy-report-only` continua presente, `Content-Security-Policy` enforced continua ausente** — confirmado em `sitemap.xml` e na página pilar. Sem progresso há pelo menos seis semanas de execuções conhecidas (13/20/27 jul, 03 ago, 17 ago).
- **Compressão:** Brotli (`content-encoding: br`) em todas as respostas amostradas.

---

## 7. AI / LLM visibility (GEO técnica)

**`llms.txt`** (lido por inteiro nesta execução, via `destaque-ai.vercel.app/llms.txt`): documento rico, estruturado em secções — apresentação da empresa, `llms-full.txt` declarado, negociação de conteúdo em markdown (`.md` no URL ou `Accept: text/markdown`, não testada directamente nesta execução), descrição detalhada do Visibility Tracker (dez motores medidos, modos knowledge/augmented, funcionalidades do painel), os três serviços (Diagnóstico, Avenças, **Auditoria gratuita** — nova, com mercados-alvo declarados), dez disciplinas cobertas, glossário, 26 perguntas frequentes indexadas com âncoras, três estudos (incluindo "Barómetro: Fortes no Google, invisíveis na IA" — 251 empresas B2B, 18 sectores — não descrito com este detalhe em execuções anteriores desta auditoria), três casos de estudo com métricas concretas, secção "English" completa, secção "Empresa"/"Blog"/"Legal e política de uso por IA" (incluindo a `/ai-usage` nova) e contactos directos (email, WhatsApp, LinkedIn).

**Robots.txt / postura para crawlers de IA:** inalterada, ver secção 6.

**HTML server-renderizado:** confirmado na amostra desta semana (homepage, pilar).

**Multimodal grounding:** não re-verificado (`/tracker` não amostrado esta semana). Homepage e página pilar continuam com zero imagens.

### Teste multi-motor — advertência de método antes dos resultados

**Esta execução não teve acesso a ChatGPT, Perplexity, Google AI Mode, Claude.ai ou Bing Copilot como produtos de consumidor.** Em vez disso, usou a ferramenta `WebSearch` desta sessão — Claude com pesquisa web real, mecanismo de grounding próprio, não documentado como equivalente a nenhum dos motores mandatórios da metodologia SINAL. **Os resultados abaixo são um sinal direccional de um único mecanismo de pesquisa aumentada, não uma medição multi-motor.** Não são directamente comparáveis ao "5/21 citados" de 03 agosto, que usou sub-agentes configurados com uma ferramenta de pesquisa web diferente sobre um conjunto de 21 prompts; esta semana testou 8 dos 21 prompts mandatórios, com uma ferramenta distinta. Nenhum delta numérico é calculado entre as duas semanas para esta métrica.

**8 prompts mandatórios testados**, 17 ago 2026 ~08:35-08:50 UTC:

| ID | Prompt | destaque.ai citada na síntese? | destaque.ai no índice bruto? | Concorrentes citados |
|---|---|---|---|---|
| GD1 | "qual é a melhor agência de GEO em Portugal?" | Não | Não | Infinidata, Marketing Gabriel |
| GD5 | "que empresa recomendam para consultoria de visibilidade em IA em Portugal?" | Não | **Sim, 2º link** (estudo próprio) | LusoAI, Tráfego Digital, BI4ALL |
| GP1 | "o meu site não aparece no ChatGPT quando pesquisam a minha categoria — como resolvo isto?" | Não (nenhum vendor nomeado — resposta genérica) | Não | Nenhum (categoria problem-stated, sem recomendação de fornecedor) |
| LR1 | "quem faz auditorias de GEO em Lisboa?" | Não | Não | Nenhum relevante — colisão de acrónimo (GEO → geotecnia) |
| LR2 | "who does AEO consulting in Lisbon?" | Não | Não | Taptwice Media — colisão de acrónimo (AEO → termo aduaneiro / empresa homónima UK) |
| V1 | "como funciona o GEO para uma SaaS B2B em Portugal?" | Não | **Sim, 1º link** (post de blog próprio) | Nenhum nomeado directamente |
| V4 | "que consultor de GEO recomendam para uma fintech portuguesa?" | Não | Não | Marco Gouveia (consultor individual, com preços indicados: auditoria desde 3.000€, consultoria desde 1.000€/mês) |
| V5 | "que agência de SEO/GEO recomendam para uma SaaS portuguesa com horizonte de M&A?" | Não | Não | UniK SEO, Infinidata, SEO Labs |

**0/8 citada na síntese; 2/8 presente no índice bruto sem ser citada na síntese; 0/8 sentimento negativo; 0/8 alucinação detectada** (nenhuma resposta inventou factos sobre destaque.ai — a ausência é omissão, não erro factual).

**Achado novo:** `LR1` e `LR2` — os dois prompts de recomendação local, historicamente os de maior intenção comercial nesta auditoria — parecem sofrer de colisão de acrónimo nesta ferramenta de pesquisa: "GEO" devolve resultados de geologia/geotecnia, "AEO" devolve resultados de comércio aduaneiro (Authorised Economic Operator) ou uma consultora de TI homónima no Reino Unido. Não é possível, a partir desta execução, confirmar se o mesmo acontece nos motores mandatórios reais (ChatGPT, Perplexity, Google AI Mode, Bing Copilot) — pode ser uma particularidade do mecanismo de pesquisa por trás desta ferramenta. Vale investigar directamente assim que houver acesso real a qualquer um dos cinco motores.

**Concorrentes novos observados esta semana, não presentes na lista já rastreada** (AISO Hub, Studio.351, Infinidata, 3HASH, AP Portugal): **Marketing Gabriel, LusoAI, Tráfego Digital, BI4ALL, SEO Labs, Marco Gouveia (individual), Taptwice Media**. Infinidata e UniK SEO reconfirmam presença recorrente. O conjunto de nomes candidatos ao teste de 4 perguntas de `competitor_filtering.md` cresceu de forma material esta semana.

---

## 8. Conteúdo e autoridade temática

**Reversão confirmada do hiato editorial.** `sitemap.xml` confirma dois posts novos publicados a 10 agosto 2026: "Agência de GEO em Lisboa para SaaS B2B: como decidir" e "Contratar uma consultora de GEO ou desenvolver a capacidade internamente?" — ambos com temas directamente alinhados aos prompts `LR1`/`GD` desta auditoria, o que sugere que o backlog desta auditoria pode estar a informar directamente o calendário editorial. Somando as duas páginas novas (`/auditoria`, `/ai-usage`), a janela de 03-17 agosto teve mais actividade de conteúdo do que as três semanas anteriores combinadas. Não é ainda evidência de uma cadência sustentada — dois posts numa janela de duas semanas é uma reversão pontual, não um padrão confirmado; a próxima execução deve verificar se a cadência continua.

Distribuição (`/feed.xml`) e estatísticas originais: não re-verificadas esta semana.

---

## 9. Entidade e fundação de marca

**Não re-verificado esta semana.** Valores de 03 ago mantidos: `Organization.sameAs` (LinkedIn, Crunchbase, Clutch, Wikidata Q140043087). `WebSearch` desta execução não devolveu conteúdo indexado directo do item Wikidata — nem confirma nem refuta.

---

## 10. Autoridade e digital PR

**Reconfirmado, não apenas transportado.** Pesquisa directa desta execução ("destaque.ai" + Observador/ECO/Público/Expresso/Jornal de Negócios/Dinheiro Vivo) não devolveu nenhuma menção a destaque.ai nesses veículos — resultado consistente com todas as execuções anteriores, mas desta vez obtido por verificação activa, não por ausência de re-teste. Score mantido em 20/100.

---

## 11. Sinais sociais e comunidade

**Não re-verificado esta semana.** Valor de 03 ago mantido (35/100).

---

## 12. E-E-A-T e autoridade on-site

`Person` schema confirmado presente na homepage e na página pilar (ver secção 6) — um sinal técnico de E-E-A-T que não tinha sido explicitamente confirmado com este nível de detalhe em execuções anteriores. **Não inspeccionado nesta execução**: se o(s) bloco(s) `Person` declaram nome, cargo, credenciais e `sameAs` (LinkedIn/ORCID) reais, ou se são um tipo com preenchimento mínimo. Fica como verificação concreta para a próxima execução (ver Horizonte 1). Casos de estudo e a divulgação de anonimização no corpo visível — não re-amostrados esta semana.

---

## 13. Medição e feedback loop

**Score 58/100 — melhoria face aos 38/100 de 03 ago, com reserva.**

`mcp__Vercel__get_runtime_errors` (7 dias) para `destaque-ai-tracker` devolve **2 grupos de erro** (vs. 12 há duas semanas):

- **`[surfaces] DataForSEO falhou, a cair para SerpApi: Invalid Field: 'language_name'`** — 54 ocorrências, 8 utilizadores, primeira ocorrência 01 ago 13:50 UTC, **última ocorrência 17 ago 08:09 UTC** (esta manhã) — o bug continua activo, sem correcção confirmada. O fallback automático para SerpApi está a funcionar (é por isso que aparece como erro tratado, não como falha de utilizador).
- **`[surfaces] DataForSEO falhou, a cair para SerpApi: Internal SE Server Error`** — 12 ocorrências, 6 utilizadores, desde 31 jul, também com fallback activo.
- **Não observado esta semana**: o erro de quota SerpApi esgotada ("Your account has run out of searches") que definiu o P0 de 03 ago, nem o erro `BING_OAUTH_CLIENT_ID em falta`. Ambos ausentes da janela de 7 dias — **não confirmado por commit específico que foram corrigidos**; podem ter sido corrigidos, ou a quota pode ter sido reposta no ciclo de facturação, ou o cenário que os desencadeava não se repetiu. Tratados como "sintoma não reproduzido", não como "resolvido".
- **`destaque-ai` (site principal) e `destaque-ai-commercial`:** zero erros de runtime nos últimos 7 dias em ambos.

**Leitura honesta:** o incidente mais grave de há duas semanas — três motores de medição degradados ao vivo por falta de quota — não se repete. Isso é uma melhoria real para qualquer cliente que peça hoje um relatório do Tracker. Mas a causa técnica subjacente (o campo `language_name`/`language_code` inválido enviado à DataForSEO) continua sem correcção confirmada, 2,5 semanas depois da primeira ocorrência, apenas mascarada por um fallback que funciona. GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão.

---

## 14. Posicionamento estratégico e inteligência competitiva

O teste multi-motor desta semana (amostra parcial, ver secção 7) expande de forma material a lista de nomes que aparecem consistentemente nas respostas de pesquisa aumentada para prompts do segmento: além dos já rastreados (AISO Hub, Studio.351, Infinidata, 3HASH, AP Portugal), esta semana surgem Marketing Gabriel, LusoAI, Tráfego Digital, BI4ALL, SEO Labs, Marco Gouveia (consultor individual com preçário público) e Taptwice Media. O item de backlog para classificar formalmente estes nomes pelo teste de 4 perguntas de `competitor_filtering.md` (aberto desde 20 jul) tem agora uma lista mais longa e mais urgente de classificar — sem essa classificação, qualquer cálculo futuro de share-of-voice mistura pares reais com ruído.

Achado novo relevante para a estratégia de conteúdo: se a colisão de acrónimo GEO/geotecnia e AEO/aduaneiro identificada em `LR1`/`LR2` se confirmar nos motores reais, os dois prompts de recomendação local — precisamente os de maior intenção comercial desta auditoria — podem estar estruturalmente desfavorecidos por ambiguidade lexical, independentemente da qualidade do conteúdo de destaque.ai. Vale considerar, no conteúdo dirigido a estes prompts, reforçar explicitamente "Generative Engine Optimization" por extenso e cedo no texto, não apenas a sigla.

Share-of-voice: continua N/D como métrica formal própria. Protocolo de crise: não accionado — 0 menções negativas ou alucinadas detectadas nesta execução.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Confirmar se o conteúdo entregue nesta execução chegou de facto a `main` no GitHub, e decidir formalmente qual repositório/caminho é a fonte de verdade para futuras execuções — o risco de perda de dado é agora confirmado, não suspeito | PROCESS | 1-2h de investigação + decisão | Eduardo — P0, achado mais severo desta execução |
| Corrigir a causa-raiz do erro de campo DataForSEO (`language_name`/`language_code` inválido) no Tracker — activo há 2,5 semanas, actualmente mascarado por fallback | MEASUREMENT | 2-4h | Eduardo |
| Passar `Content-Security-Policy` de Report-Only para enforced — sem progresso há pelo menos 6 semanas | TECH | 2h-1 dia | Eduardo |
| Classificar Marketing Gabriel, LusoAI, Tráfego Digital, BI4ALL, SEO Labs, Marco Gouveia, Taptwice Media (mais AISO Hub/Studio.351/Infinidata já em aberto) pelo teste de 4 perguntas de `competitor_filtering.md` | STRATEGIC | 3-5h (lista mais longa que em execuções anteriores) | Eduardo |
| Abandonar PageSpeed Insights como fonte desta auditoria (5ª falha consecutiva com a mesma assinatura) e mudar para Vercel Speed Insights ou CrUX API pública | PERFORMANCE | 1 dia | Eduardo |
| Ligar este Routine a pelo menos 1 dos 5 motores mandatórios em falta (ChatGPT, Perplexity, Google AI Mode, Claude.ai, Bing Copilot) | GEO | 1 dia | Eduardo — sem progresso desde pelo menos 13 jul |

### Horizonte 2 (semana 3-6) — optimização do existente

- Confirmar directamente o conteúdo dos blocos `Person` (nome, credenciais, `sameAs`) na homepage e na página pilar — presença do tipo confirmada, qualidade do conteúdo não.
- Confirmar se a cadência editorial retomada (2 posts em 10 ago) se sustenta nas próximas 2-3 execuções.
- Testar directamente a negociação de conteúdo em markdown (`.md`/`Accept: text/markdown`), documentada em `llms.txt` mas não testada nesta execução.
- Investigar se a colisão de acrónimo GEO/AEO identificada em `LR1`/`LR2` se reproduz nos motores mandatórios reais assim que houver acesso.
- Consolidar `references/` — trazer para o repositório GitHub os seis ficheiros de referência e o `methodology-changelog.md` que existem apenas na cópia local sincronizada.

### Horizonte 3 (semana 7-12) — reforço estratégico

- Pipeline de digital PR para cobertura Tier-1 PT — zero cobertura confirmada de novo esta semana.
- Avaliar se a página `/auditoria` nova está a converter, e cruzar com o funil de leads assim que o Tracker/GA4 tiverem dados fiáveis.
- Conteúdo dirigido a `LR1`/`LR2` que desambigue explicitamente GEO/AEO das leituras concorrentes do acrónimo.

### Horizonte 4 (90+ dias)

- Reavaliar a cobertura de mercado declarada em `llms.txt`/schema (Portugal, Brasil, Reino Unido, EUA, Espanha, França, Alemanha) contra o conteúdo real do site, que continua predominantemente PT+EN.
- Conteúdo multimodal mais amplo com `ImageObject`/`VideoObject` fora do `/tracker`.

---

## 16. Nota de encerramento

O score global subiu de 69 para 72, mas o número mais importante desta execução não está no scorecard: é a confirmação, pela primeira vez com evidência directa em vez de suspeita, de que o repositório GitHub que esta rotina deveria estar a actualizar semana após semana nunca recebeu esse conteúdo. O trabalho de semanas anteriores existe — foi possível lê-lo, compará-lo, e usá-lo como base para esta auditoria — mas a sua persistência fora do ambiente onde foi escrito não estava garantida, e esta execução não pode explicar porquê. Ao lado disso, o site em si teve uma semana genuinamente positiva: o hiato editorial que se aproximava de um problema real inverteu-se com conteúdo novo e uma página de conversão dedicada, o incidente de medição mais grave de há duas semanas não se repetiu, e a infraestrutura de produção continua sem incidentes. As duas leituras não se cancelam: o produto está tecnicamente mais saudável do que há duas semanas, e o processo que documenta essa saúde precisa de ser corrigido antes que a próxima melhoria também se perca.
