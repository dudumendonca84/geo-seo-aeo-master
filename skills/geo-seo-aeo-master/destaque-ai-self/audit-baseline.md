# destaque.ai self-audit baseline

**Data da auditoria:** 10 agosto 2026, ~08:10–08:45 UTC. **Execução:** quinta corrida do Routine `destaque-ai-self-audit-weekly` (semana 5 — comparável com a baseline de 03 agosto 2026, ver `audit-history.md`).
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology — SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Rede de saída restrita, mesmo padrão de cinco semanas.** `curl` directo a `destaque.ai` (5 corridas) devolveu `HTTP 000` (falha de ligação). `WebFetch` genérico devolveu `EGRESS_BLOCKED` explícito (não 403 desta vez — o proxy da sessão nomeia o bloqueio) para `destaque.ai`, `www.wikidata.org` e (confirmado indirectamente via o daily-agent de hoje) `developers.google.com`, `openai.com`, `anthropic.com`, `blogs.bing.com`, `perplexity.ai`, `searchengineland.com`, `ahrefs.com`. Dados técnicos do site foram obtidos via `mcp__Vercel__web_fetch_vercel_url` (fetch real, server-side, através da própria Vercel — não é curl anónimo nem um crawler de terceiros, mas é produção genuína) e via `mcp__Vercel__get_project` / `list_deployments` / `get_runtime_errors` / `get_web_analytics` para os quatro projectos Vercel da conta relevantes (`destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`). `WebSearch` funcionou normalmente e foi a via usada para o teste multi-motor em modo augmented, para o refresh de `models.md` e para a tentativa de verificação do Wikidata (falhou — ver Secção 9).

**Estrutura do repositório: confirmada consistente com a semana passada, fóssil da raiz continua presente e intocado.** A branch de trabalho fornecida partia, mais uma vez, de um ponto antigo de `main` (3 commits, sem `skills/`) — o mesmo padrão reportado nas cinco execuções anteriores deste Routine e em praticamente todas as entradas do `daily-agent` desde início de Julho. Esta sessão corrigiu isto correndo `git fetch origin main` e recriando a branch de trabalho a partir de `origin/main` antes de qualquer leitura ou escrita, como as duas execuções anteriores já faziam. A árvore duplicada na raiz do repositório (`destaque-ai-self/`, datada de 01 jun 2026, um único commit) continua exactamente como estava — não foi tocada, e não deveria ser: está fora do âmbito desta auditoria e o item de consolidação já existe no backlog (`PROCESS`, aberto há 1 semana). Não foi encontrado nenhum ficheiro `news-feed.md` duplicado desta vez — o `daily-agent` de hoje confirma que a migração feita em 2026-08-06 se manteve estável.

**Amostra técnica desta semana:** homepage (`/`, fetch completo do HTML renderizado, JSON-LD extraído programaticamente), `robots.txt`, `sitemap.xml` (55 URLs, ver Secção 6), tentativa de `llms.txt` (falhou — ver abaixo), PageSpeed Insights (falhou — ver Secção 4), Vercel Web Analytics (falhou — ver Secção 4), histórico de deployments dos quatro projectos Vercel relevantes, e `get_runtime_errors` (janela 7 dias) para `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. **Não re-amostradas esta semana** (fora do âmbito desta amostra, valores da semana passada mantidos sem assumir mudança): `/servico`, `/sobre`, `/glossario`, `/perguntas`, `/consultoria-geo-portugal`, `/estudo/*`, `/casos/*`, `/en/*`.

**O que não foi possível verificar nesta execução, e porquê:**
- **TTFB por curl de PT** — bloqueado, 5ª semana consecutiva (`HTTP 000`).
- **PageSpeed Insights (LCP/INP/CLS)** — `HTTP 429` de novo, confirmado ~08:18 UTC nesta própria execução. **5ª semana consecutiva com a mesma assinatura de erro exacta.**
- **Alternativa proposta na semana passada (Vercel Web Analytics como proxy de CWV) — testada e confirmada indisponível.** `mcp__Vercel__get_web_analytics` no projecto `destaque-ai` devolveu `404 Not Found — "Web Analytics not found"`: a funcionalidade não está activada no projecto. A recomendação de Horizonte 1 da semana passada não foi accionada; isto deixa de ser "ainda não verificámos" e passa a "confirmámos que a via alternativa também não existe hoje".
- **`llms.txt` — falha distinta do padrão habitual, não verificado.** `mcp__Vercel__web_fetch_vercel_url` devolveu `"Unable to create shareable URL for .../llms.txt"` em duas tentativas (domínio apex e `www`), enquanto o mesmo pedido para `robots.txt`, `sitemap.xml` e `/` funcionou normalmente nos mesmos minutos. Isto é diferente do bloqueio de rede genérico (`EGRESS_BLOCKED`) que afecta todo o resto — sugere um problema específico dessa rota (erro no servidor, resposta vazia, ou um comportamento do ficheiro em si) em vez de uma limitação do ambiente. Não foi possível confirmar qual. Ver item novo no backlog.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot** — continua sem sessão de browser autenticada nem integração de API. **5ª semana consecutiva sem progresso.** O Visibility Tracker (que testaria estes motores para clientes) tem, neste preciso momento, três dos seus próprios motores de medição a falhar por falta de crédito de API — ver Secção 13.
- **Wikidata, LinkedIn, Crunchbase, Clutch, cobertura Tier-1 PT, sinais sociais** — não re-verificados esta semana (fora do âmbito da amostra mais estreita); `WebFetch` a `www.wikidata.org` falhou com `EGRESS_BLOCKED` explícito. Valores de 03 ago mantidos sem alteração assumida.
- **`references/models.md` — refresh tentado, sem mudança de modelo por defeito confirmada.** `WebSearch` (3 pesquisas dirigidas: OpenAI/ChatGPT, Google/Gemini AI Mode, Anthropic/Claude) não encontrou nenhum lançamento de modelo novo desde o refresh de 03 ago. O único anúncio relevante — GPT-5.6 Luna a tornar-se modelo por defeito para utilizadores Free/Go a partir de 10 ago, com chats de texto ilimitados — é uma mudança de **quota/produto**, não de **modelo por defeito**: GPT-5.6 Luna já estava registado como o modelo Free/Go em `models.md` desde o refresh de 03 ago (então "GPT-5.6 Sol/Luna"). O `daily-agent` de hoje já tinha chegado à mesma conclusão de forma independente (entrada 2026-08-10, "fora do âmbito... sem efeito directo em mecânica de citação"). Nenhuma linha de `models.md` foi alterada.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar ou não foi re-amostrada esta semana, está marcado **N/D** ou **não re-verificado**.

---

## 1. Sumário executivo

**Score global: 69/100 — Bom, com lacunas de verificação que persistem.** Média de 11 categorias com evidência (Performance/CWV continua N/D, 5ª semana). **Δ vs. 03 ago: 0.** Terceira semana seguida com o score global estável em 69 — mas, tal como nas duas semanas anteriores, a estabilidade do número esconde mais movimento real do que sugere: uma escalada nova e significativa em Medição (créditos de API esgotados em três motores, um há mais de sete semanas) é compensada por reconfirmação de sinais de entidade e por reforço no Schema, enquanto o hiato de conteúdo editorial continua a agravar-se sem que ninguém o tenha travado ou explicado. Ver scorecard.

### Scorecard — 12 categorias

| # | Categoria | Score | Δ vs. 03 ago | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 87/100 | 0 | Robots.txt e headers de segurança confirmados byte-idênticos; CSP continua só Report-Only, 5ª semana |
| 2 | Performance / CWV | N/D | — | PSI rate-limited (429) 5ª semana consecutiva; Vercel Web Analytics confirmado **não activado** no projecto (novo dado esta semana) |
| 3 | SEO On-Page | 93/100 | 0 | Não re-amostrado em largura; homepage confirmada estável (título, meta, 1×H1/12×H2, 0 imagens) |
| 4 | Schema / dados estruturados | 96/100 | 0 | Homepage confirmada com `Person` (fundador, `sameAs` LinkedIn) além de `Organization`/`WebSite`/`Service`/`FAQPage`/`OfferCatalog` — inventário mais rico do que documentado nas execuções anteriores; `FAQPage` da homepage é agora markup inerte para o Google (ver nota) |
| 5 | Optimização de imagens | 72/100 | 0 | Não re-amostrado; homepage confirma 0 imagens (inalterado) |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 91/100 | 0 | Robots.txt inalterado (18 UAs de IA, Content-Signal); `llms.txt` não verificável esta semana (ver nota de metodologia) — score mantido por ausência de evidência de regressão, não por confirmação |
| 7 | Conteúdo & topical authority | 81/100 | −4 | Hiato editorial agora em **26 dias** (post) / **28 dias** (estudo) desde 15/13 jul — ultrapassa de novo o limiar que a própria auditoria já tinha escalado há 1 semana, sem decisão explícita registada nem novo conteúdo |
| 8 | Entidade / brand foundation | 79/100 | +2 | `Organization.sameAs` (LinkedIn, Crunchbase, Clutch, Wikidata) reconfirmado directamente no JSON-LD; **novo nesta auditoria**: `Person` do fundador (Eduardo Mendonça) com `sameAs` a LinkedIn, `jobTitle` e `knowsAbout` — sinal de entidade mais forte do que os scorecards anteriores registavam. Verificação externa dos 4 perfis continua bloqueada por rede |
| 9 | Autoridade & digital PR | 20/100 | 0 | Não re-verificado esta semana |
| 10 | Sinais sociais & community | 35/100 | 0 | Não re-verificado esta semana |
| 11 | E-E-A-T & on-site authority | 70/100 | 0 | Não re-verificado em detalhe; `Person` do fundador na homepage (ver Entidade) é sinal de E-E-A-T adicional não previamente contabilizado explicitamente nesta categoria |
| 12 | Medição & feedback loop | 35/100 | −3 | Pior semana desde que a auditoria tem dado real do Tracker: 17 grupos de erro (vs. 12 há uma semana); o incidente agudo de quota SerpApi de 03 ago parece resolvido, mas foi substituído por um problema mais estrutural — créditos de API esgotados em Gemini (7+ semanas), Perplexity e OpenAI. Compensado parcialmente por uma vaga real de correcções de segurança em produção (ver finding 1) |

### Top 4 findings (cross-dimensional)

1. **O Visibility Tracker tem, esta semana, uma crise de crédito de API em vez de uma crise de quota — mais crónica, mas também mais barata de resolver do que parece.** `mcp__Vercel__get_runtime_errors` (7 dias) para `destaque-ai-tracker` devolveu 17 grupos de erro (vs. 12 há uma semana). O padrão muda de natureza: o incidente agudo da semana passada (quota SerpApi esgotada, erro de campo DataForSEO) não voltou a ocorrer com a mesma assinatura desde 03 ago — mas surgiram ou confirmaram-se três falhas de crédito de fornecedor de IA, todas de resolução simples (top-up de conta), nenhuma resolvida: **Gemini** (`RESOURCE_EXHAUSTED — Your prepayment credits are depleted`, 30 ocorrências, **activo desde 23 jun, ainda a ocorrer a 05 ago — mais de sete semanas sem correcção**), **Perplexity** (`401 — exceeded your current quota`, 42 ocorrências, 03-05 ago) e **ChatGPT/OpenAI** (`429 — no credits remaining`, 21 ocorrências, 03 ago). Em paralelo, **DataForSEO continua instável por causas próprias** (`Internal SE Server Error`, 18 ocorrências, a mais recente às 07:54 UTC de hoje — durante esta própria auditoria) e um `TypeError` isolado novo na rota `/entity` (4 ocorrências, 07 ago, 1 utilizador). Em contraste directo com esta negligência de billing, o repositório do Tracker teve esta semana a vaga de correcções mais substancial em segurança até agora observada por este Routine: quatro PRs (#299-#302) corrigiram uma falha P0 real — o papel `viewer` não estava filtrado nas policies de escrita da base de dados, permitindo apagar dados de cliente via PostgREST directo com a chave publicável, contornando toda a lógica da aplicação — mais bugs de impersonação de operador em 12 rotas OAuth (GSC/GA4/Bing) e validação em falta no `apply-analysis`. A leitura honesta: a equipa está a investir esforço de engenharia real e de qualidade no Tracker esta semana, mas está a gastá-lo em segurança e correcção de dados, não em manter as contas de fornecedor de API com crédito — um problema que não precisa de código, só de um cartão de crédito, e que está a degradar a promessa central do produto (medir 7-10 motores) há semanas.
2. **O teste multi-motor confirma, com prompts diferentes dos das quatro semanas anteriores, o mesmo padrão: destaque.ai aparece raramente, e quando aparece raramente é a recomendação.** Modo augmented (Claude com pesquisa web activa, 21 prompts mandatórios, 2 sub-agentes frescos): destaque.ai mencionada em 3/21 (`GD5`, `V1`, `V2`) — mas só `V1` ("como funciona o GEO para uma SaaS B2B em Portugal?") é uma citação genuína, usada substantivamente na resposta sintetizada, com o próprio post da destaque.ai em 1º lugar dos resultados e sentimento positivo. `GD5` trouxe uma página da destaque.ai para os resultados brutos de pesquisa, mas a resposta sintetizada não a incluiu na sua lista de recomendações (Tráfego Digital, LusoAI, KPMG Portugal e CGI Portugal apareceram em vez disso) — o mesmo padrão de "citado nos dados, ausente da recomendação" já documentado nas últimas duas execuções. `V2` trouxe dois URLs próprios da destaque.ai, mas em posições 4-5 de 6, atrás de um agregador de terceiros. Nos 9 prompts de descoberta genérica (`GD1`-`GD4`, `GD6`-`GD8`, `LR1`, `LR2`) e nos 3 prompts vertical mais directos ao ICP (`V3`-`V5`), destaque.ai está **ausente por completo**, com dois concorrentes a reclamar liderança de categoria de forma explícita: **AISO Hub** ("Portugal's first agency fully dedicated to AI search optimization", em `GD2`) e **UniK SEO** ("Agência de SEO e GEO Líder em Portugal", exactamente no prompt `V5` — o mais alinhado ao ICP de SaaS PT com horizonte de M&A). Modo knowledge (esta sessão, Claude Sonnet 5, sem ferramentas — 21 mandatórios + 10 rotativos, resposta directa): **0/31 mencionaram destaque.ai, 0/31 alucinaram** — quinta semana consecutiva com o mesmo resultado, incluindo recusa correcta e explícita em nomear um fornecedor específico nos prompts de recomendação nomeada, e no prompt branded rotativo desta semana (comparação hipotética destaque.ai vs. AISO Hub) uma recusa a inventar uma comparação entre duas entidades sem conhecimento verificável de nenhuma delas. Protocolo de crise: não accionado — 0 menções negativas ou alucinadas em 52 pares prompt×motor testados esta semana.
3. **Achado novo: o termo "GEO" colide com a indústria de geodesia/topografia em português e em inglês, e isso apaga destaque.ai de pesquisas onde devia aparecer.** Em três dos prompts de descoberta mais genéricos (`GD1` "melhor agência de GEO em Portugal", `GD6` "especialistas em GEO em Portugal", `GD7`, a versão inglesa), os resultados de pesquisa foram dominados inteiramente por empresas de geodesia/topografia/levantamento de terreno (Sistopo, Geolayer, Geo21, GeoSurveys, GEOÁREA, GeoPoint, GeoNatural) — zero resultados relacionados com optimização para motores de IA em qualquer um dos três. O mesmo padrão de desambiguação errada afectou parcialmente `V3` ("outsourcing de GEO") e `V4` ("consultor de GEO para fintech"), onde "GEO" foi lido como IT-outsourcing genérico e como uma consultora de risco geoespacial chamada Geoglobal, respectivamente — nenhum resultado sobre Generative Engine Optimization em qualquer um dos dois. Isto não é um problema de posicionamento competitivo (não há concorrente a "ganhar" estas queries — ninguém do sector aparece) — é um problema de desambiguação de termo que a própria destaque.ai, apesar de ser a marca mais bem posicionada nas queries onde "GEO" foi correctamente entendido (`V1`), ainda não é forte o suficiente para corrigir. Achado que não constava em nenhuma das quatro execuções anteriores deste Routine com este grau de clareza — candidato a nota permanente em `engine_playbooks.md` se se confirmar numa segunda semana (regra das duas auditorias).
4. **O hiato de conteúdo editorial, identificado há duas semanas e escalado há uma semana, continua sem resposta — nem novo conteúdo, nem uma decisão explícita de o não fazer.** `sitemap.xml` (55 URLs, até 12 a mais do que os 43 registados em 03 ago — ver Secção 6 para a leitura honesta desta diferença) confirma que o post mais recente continua datado de 15 jul e o estudo mais recente de 13 jul: **26 e 28 dias**, respectivamente, sem publicação nova. O histórico de deployments do site principal mostra seis PRs (#108-#113) entre 06-07 ago, todos de produto/copy/arquitectura da homepage (formulário de pedido de auditoria no `/tracker`, secção de auditoria com endereço próprio, correcção de um monitor que mostrava 7 motores quando o site vende 10, reescrita de copy para "ninguém pergunta a uma IA pelo nome de uma marca", prova a subir ao topo da home inglesa, redesenho de arquitectura visual) — trabalho genuíno e visível, mas de novo inteiramente fora do domínio editorial. O próprio item do backlog, aberto em 27 jul e escalado em 03 ago, pedia explicitamente que, se a prioridade da equipa continuasse a ser produto por decisão consciente, essa decisão fosse registada em vez de deixar o item subir de prioridade em silêncio — isso não aconteceu. Esta auditoria escala o item de novo (ver Horizonte 1).

### O que já está forte

A vaga de correcções de segurança no Tracker esta semana (#299-#302) é trabalho de qualidade real, feito antes de ser pedido por esta auditoria: a falha de policies que permitia a um `viewer` apagar dados de cliente via PostgREST directo é do tipo de bug que só aparece numa revisão de arquitectura séria, não numa auditoria externa de GEO — e foi encontrada e corrigida pela própria equipa. O site principal (`destaque-ai`) continua com **zero erros de runtime** nos últimos 7 dias, quinta semana consecutiva. O robots.txt mantém-se completo e permissivo para 18 crawlers de IA nomeados, com Content-Signal explícito. A homepage confirma esta semana um inventário de schema mais rico do que o documentado até agora — incluindo `Person` do fundador com `sameAs` a LinkedIn, um sinal de E-E-A-T/entidade que nenhuma das quatro auditorias anteriores tinha registado explicitamente. E, pela quinta semana seguida, zero alucinações e zero menções negativas em qualquer motor testado — o protocolo de crise continua sem qualquer accionamento desde que este Routine existe.

---

## 2. Contexto de negócio

Sem alteração face a 03 ago: destaque.ai (`Tuasunt, Lda.`), consultoria GEO sediada em Lisboa, fundada 2025, fundador Eduardo Mendonça. Portfólio de serviços inalterado (Auditoria gratuita, Diagnóstico GEO, Avença Visibilidade, Avença Autoridade). Homepage confirma directamente esta semana `Person.jobTitle: "Fundador"` e `knowsAbout: ["Generative Engine Optimization", "SEO técnico", "Local SEO", "Google Business Profile optimization", "AI Search Optimization", "Schema.org"]` para Eduardo Mendonça — a descrição de posicionamento mais explícita encontrada até agora no próprio schema do site.

Quatro projectos Vercel confirmados na conta (`destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`) — sem alteração de contagem face a 03 ago (`destaque-ai-commercial`, o produto interno de prospecção, já tinha sido identificado nessa execução; `destaque-ai-deck-builder` não tinha sido nomeado explicitamente antes, mas é consistente com as referências a "Deck Builder" já presentes em `SKILL.md`/`prompts.md`). `destaque-ai-commercial` e `destaque-ai-deck-builder`: zero erros de runtime nos últimos 7 dias.

---

## 3. Análise de plataforma

Hosting Vercel, projecto `destaque-ai` (`prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`), Next.js, `nodeVersion: 24.x`. Último deploy de produção: **07 ago 2026, ~15:24 UTC** (PR #113, "A arquitectura passa a parecer um sistema"), parte de uma sequência de seis PRs (#108-#113) mergeados entre 06-07 ago. Sem deploy desde então — 3 dias de silêncio à data desta auditoria, dentro de margem normal. Zero erros de runtime no projecto principal nos últimos 7 dias.

`destaque-ai-tracker` (`prj_jruA9HNORHtP9trNbQw7BZIp0Jg0`): actividade de deploy intensa esta semana — pelo menos 18 deployments entre 08-09 ago, culminando numa vaga de correcções de segurança e arquitectura (#298-#302, ver finding 1). Deployment de produção mais recente confirmado: 08 ago ~22:21 UTC (PR #301). Um deployment mais recente (09 ago ~13:04 UTC, PR #302) existe mas não estava confirmado como promovido a produção no momento desta auditoria — não verificado se já está ao vivo.

Sem alteração de plataforma/hosting/custo face a 03 ago.

---

## 4. Performance

**N/D, quinta semana consecutiva — e a via alternativa também falhou.** PageSpeed Insights devolveu `HTTP 429` (confirmado ~08:18 UTC nesta execução), mesma assinatura das quatro semanas anteriores. `curl` de saída continua bloqueado (`HTTP 000`). **Novo esta semana:** a alternativa recomendada em Horizonte 1 de 03 ago — usar Vercel Web Analytics como proxy de CWV — foi efectivamente testada (`mcp__Vercel__get_web_analytics`, projecto `destaque-ai`) e devolveu `404 Not Found — "Web Analytics not found"`: a funcionalidade não está sequer activada no projecto. Isto muda a leitura de "ainda não temos dado de performance" para "temos duas vias possíveis e nenhuma das duas está a funcionar, uma por rate-limit externo, a outra por não ter sido ligada".

Sinais indirectos via headers Vercel (páginas amostradas esta semana): `content-encoding: br` em `sitemap.xml`; `x-vercel-cache: HIT` em todas as respostas estáticas amostradas. Sem alteração face às semanas anteriores.

---

## 5. SEO on-page

**Não re-amostrado em largura esta semana** (ver nota de metodologia). Homepage confirmada por fetch directo e extracção programática do HTML: título "destaque.ai: Visibilidade em IA, com método." inalterado; meta description ("O ChatGPT é o novo boca a boca...") inalterada, presente em `<meta name="description">`, `og:description` e `twitter:description`, consistente entre os três; **1×H1, 12×H2** (era 11×H2 em 03 ago — variação pequena, provavelmente reflecte as seis PRs de redesenho de homepage desta semana, não verificado em detalhe se é adição líquida de secção ou reestruturação); **zero `<img>`** (inalterado); `<link rel="canonical" href="https://www.destaque.ai"/>` presente; **sem tags `hreflang`** na homepage (inalterado — sem par EN dedicado).

Páginas restantes (`/servico`, `/sobre`, `/glossario`, `/perguntas`, `/consultoria-geo-portugal`, `/estudo/*`, `/casos/*`, `/en/*`) não re-amostradas esta semana. Score mantido em 93/100 por ausência de evidência de regressão, não por confirmação positiva de estabilidade em todas as páginas.

---

## 6. SEO technical

- **`sitemap.xml`:** **55 URLs**, até 12 a mais do que os 43 registados em 03 ago. **Leitura honesta desta diferença:** todas as páginas estruturais (home, secções, cada post de blog, cada estudo, cada caso) têm `lastmod` próprio; os que correspondem a conteúdo datado (posts, estudos, casos) mantêm datas de publicação genuínas e antigas (de 15 abr a 15 jul 2026 para posts, sem nenhuma data nova), enquanto páginas estruturais sem data própria (home, secções, `/casos`, listagens) mostram todas o mesmo `lastmod` de 07 ago — o momento do último deploy. Isto sugere fortemente que o aumento de 43→55 é o sitemap a passar a listar posts e páginas que já existiam mas não estavam anteriormente incluídos (uma correcção técnica), não uma sessão de publicação nova — mas esta auditoria não confirmou directamente qual das duas coisas aconteceu, e fica como item a esclarecer na próxima execução em vez de assumido.
- **`robots.txt`:** **756 bytes**, `etag` novo, `last-modified: Fri, 07 Aug 2026 19:41:49 GMT` (reflectindo o deploy de 07 ago) — **conteúdo confirmado byte-idêntico** ao de 03 ago: 18 user-agents de IA nomeados, todos `Allow: /`, bloco wildcard com `Content-Signal: search=yes, ai-input=yes, ai-train=yes`.
- **`hreflang`:** não re-amostrado esta semana fora da homepage (sem tags, como esperado — ver Secção 5).
- **JSON-LD schema:** homepage confirmada com `Organization`, `Person` (fundador), `WebSite`, `WebPage`, `Service` (com `OfferCatalog`, 5 itens), `FAQPage` (`Question`/`Answer`, 4 pares na amostra), `SpeakableSpecification`, `Audience`, `PostalAddress`, `ContactPoint`, `Country`, `Place` — inventário mais completo do que os scorecards anteriores documentavam explicitamente para a homepage. **Nota nova, de baixo risco:** o Google deixou de suportar rich results de `FAQPage` desde 7 mai 2026 (confirmado no `news-feed.md` de 04 ago 2026, via Search Engine Land) — o markup não gera erro e continua a poder ser lido por LLMs directamente no HTML, mas deixou de produzir qualquer resultado visível na SERP clássica do Google. Não é uma acção urgente; é awareness para não recomendar `FAQPage` como alavanca de rich results ao rever conteúdo comercial.
- **Security headers:** confirmadas via headers de resposta do `robots.txt` — HSTS, `x-content-type-options`, `x-frame-options: DENY`, `referrer-policy`, `permissions-policy`. **`content-security-policy-report-only` continua presente, enforced continua ausente** — 5ª semana consecutiva sem progresso.
- **Compressão e cache:** Brotli confirmado em `sitemap.xml` (`content-encoding: br`). Sem alteração.
- **Negociação de conteúdo em markdown (PR #94, semana passada):** continua não testada directamente — ver item de backlog já aberto.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`:** **não verificável esta semana** — ver nota de metodologia. Duas tentativas de fetch via Vercel falharam com uma mensagem distinta do bloqueio de rede genérico (`"Unable to create shareable URL"`), enquanto `robots.txt` e `sitemap.xml` no mesmo domínio, nos mesmos minutos, funcionaram normalmente. Score da categoria mantido por ausência de evidência de regressão real (não é o mesmo que confirmação), mas fica sinalizado como prioridade de verificação directa na próxima execução — se o padrão se repetir, deixa de ser explicável como transitório.
- **Robots.txt / postura para crawlers de IA:** confirmado byte-idêntico — ver Secção 6.
- **HTML server-renderizado:** confirmado de novo — o fetch da homepage devolveu HTML completo com todo o JSON-LD embutido, sem necessidade de execução de JavaScript.
- **Multimodal grounding:** não re-amostrado esta semana (`/tracker` não foi visitado); homepage confirma 0 imagens, inalterado.
- **Teste multi-motor — quinta semana com o mesmo padrão estrutural, prompts diferentes das quatro semanas anteriores:**

  | Motor | Modelo por defeito (per `references/models.md`) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.6 Luna (Free/Go, desde 10 ago — mudança de produto, não de modelo já não registado) | **Não** — 5ª semana |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free); Claude Opus 5 em Search/Computer desde a semana de 24 jul (fonte secundária) | **Não** — idem |
  | Google AI Mode | Gemini 3.5 Flash | **Não** — idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Sim — modo knowledge (sem ferramentas, resposta directa da sessão) e modo augmented (2 sub-agentes frescos com `WebSearch`), 31+21 prompts** |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não** — idem |

  **Modo knowledge, 10 ago 2026 ~08:30 UTC** — 21 mandatórios + 10 rotativos (31 no total), respondidos directamente por esta sessão (Claude Sonnet 5) sem invocar `WebSearch` nem qualquer outra ferramenta — a definição operacional de "modo knowledge" para este motor:
  - **0/31 mencionaram destaque.ai.** Quinta semana consecutiva com 0/N.
  - **0/31 alucinaram.** Nos prompts de recomendação nomeada (`GD1`-`GD8`, `LR1`, `LR2`, `V4`, `V5`), a resposta correcta é recusar nomear um fornecedor específico de memória de treino e redireccionar para critérios de avaliação verificáveis (Clutch, G2, LinkedIn, pedir casos reais) — sem inventar um nome.
  - **Prompt branded rotativo desta semana** ("como se compara a destaque.ai com a UniK SEO em consultoria de GEO?") — recusa explícita e correcta: nenhuma das duas entidades tem presença fiável na memória de treino deste modelo para sustentar uma comparação, e inventar uma seria o erro que este teste existe para detectar. Mesmo padrão desejável das quatro semanas anteriores.
  - Rotativa desta semana: `GE1`-`GE6`, `PC1`-`PC2`, `FS4`-`FS5` (10 prompts) — nenhum nomeou destaque.ai nem qualquer concorrente PT específico de forma não solicitada.

  **Modo augmented (pesquisa web activa via `WebSearch`, 2 sub-agentes frescos), 10 ago 2026 ~08:35-08:50 UTC** — 21 prompts mandatórios:
  - **destaque.ai mencionada em 3/21** (`GD5`, `V1`, `V2`) — **citação genuína e usada na resposta em apenas 1/21** (`V1`, 1º lugar dos resultados, sentimento positivo). Ver finding 2 para o detalhe por prompt.
  - **`GD1`, `GD2`, `GD3`, `GD4`, `GD6`, `GD7`, `GD8`, `LR1`, `LR2`, `V3`, `V4`, `V5` — destaque.ai ausente** (12 de 21). Concorrentes citados com URL ao longo do lote: **AISO Hub** (recorrente, posicionamento explícito de líder de categoria em `GD2`), **UniK SEO** (posicionamento explícito de líder em `V5`), Studio.351 (`LR1`), Infinidata, Marketing Gabriel, Tráfego Digital, LusoAI, KPMG Portugal, CGI Portugal, DerivateX, Xomer.ai, ClaritySearch AI, Pelora Marketing (agências internacionais, `GP5`), 15element.ai, Geostack (conteúdo BR/ES).
  - **`GD1`, `GD6`, `GD7` — colisão de termo com a indústria de geodesia/topografia** (ver finding 3, achado novo desta semana) — nenhum resultado relacionado com optimização para motores de IA em nenhum dos três.
  - **Sentimento:** neutro/positivo em todos os casos com menção; nunca negativo. **0/21 alucinaram** — as duas menções de destaque.ai que apareceram (`GD5`, `V1`, `V2`) eram URLs reais e correctamente atribuídos ao próprio conteúdo da destaque.ai, não afirmações geradas sobre a empresa.
  - **Protocolo de crise:** não accionado — 0 menções negativas ou alucinadas nos 52 pares prompt×motor testados esta semana (31 knowledge + 21 augmented).

  **Multimodal prompt test, ChatGPT, Perplexity, Google AI Mode, Bing Copilot:** não realizados esta semana — mesma limitação de acesso, 5ª semana.

---

## 8. Conteúdo e autoridade temática

**O hiato editorial agrava-se, sem decisão nem conteúdo novo.** `sitemap.xml` confirma que a página de conteúdo datado mais recente continua a ser o post de 15 jul (blog) e o estudo de 13 jul — **26 e 28 dias**, respectivamente, à data desta auditoria. O histórico de deployments confirma que a actividade de 06-07 ago (seis PRs) foi inteiramente de produto/copy/arquitectura da homepage, não editorial — ver finding 4. O item de backlog aberto em 27 jul e já escalado de P3 para P2 em 03 ago pedia explicitamente um de dois desfechos: conteúdo novo, ou uma decisão consciente registada de deprioritizar o editorial. Nenhum dos dois aconteceu.

Distribuição (`/feed.xml`) e estatísticas originais: não re-verificadas esta semana, sem indício de alteração.

---

## 9. Entidade e fundação de marca

**Reconfirmado directamente no JSON-LD da homepage, com um sinal novo.** `Organization.sameAs` — LinkedIn (`linkedin.com/company/destaque-ai`), Crunchbase, Clutch, Wikidata (`Q140043087`) — confirmado presente e inalterado. **Novo nesta auditoria:** `Person` do fundador (`@id: .../#fundador`), `name: "Eduardo Mendonça"`, `jobTitle: "Fundador"`, `sameAs: ["linkedin.com/in/eduardo-mendonça84"]`, `knowsAbout` com seis áreas de especialização declaradas — um sinal de entidade/E-E-A-T que os quatro scorecards anteriores não registavam explicitamente para a homepage (pode já existir há mais tempo; esta é a primeira vez que este Routine o confirma directamente por extracção do JSON-LD em vez de amostra pontual).

**O que continua bloqueado:** verificação externa dos 4 URLs de `sameAs` — `WebFetch` a `www.wikidata.org` falhou com `EGRESS_BLOCKED` explícito nesta execução (mesmo padrão de bloqueio geral do sandbox, não específico do Wikidata). LinkedIn/Crunchbase/Clutch não tentados (mesmo bloqueio esperado). Google Business Profile, Bing Places, Apple Maps, pai.pt — não re-verificados esta semana.

---

## 10. Autoridade e digital PR

**Não re-verificado esta semana.** Valor de 03 ago mantido (20/100, zero cobertura Tier-1 PT confirmada até à data).

---

## 11. Sinais sociais e comunidade

**Não re-verificado esta semana.** Valor de 03 ago mantido (35/100).

---

## 12. E-E-A-T e autoridade on-site

**Não re-amostrado em detalhe** (casos de estudo não revisitados esta semana). Reforço indirecto confirmado via Secção 9: `Person` do fundador na homepage, com `jobTitle`, `description` de especialização e `sameAs` a LinkedIn, é um sinal de E-E-A-T (a perna "Experience"/"Expertise" das Search Quality Rater Guidelines) que esta categoria não estava a contabilizar explicitamente. Não sobe o score isoladamente esta semana por não ter sido cruzado com uma revisão completa da categoria — fica registado para a próxima execução.

---

## 13. Medição e feedback loop

**Score 35/100 — pior semana registada nesta categoria desde que a auditoria passou a ter dado real do Tracker (27 jul).**

`mcp__Vercel__get_runtime_errors` (7 dias) para `destaque-ai-tracker` devolveu **17 grupos de erro** (vs. 12 há uma semana). Detalhe completo em finding 1. Resumo:

- **Créditos de API esgotados em três motores de IA** — Gemini (`RESOURCE_EXHAUSTED`, activo desde 23 jun, última ocorrência confirmada 05 ago — **mais de sete semanas**), Perplexity (`401`, 42 ocorrências, 03-05 ago), ChatGPT/OpenAI (`429`, 21 ocorrências, 03 ago). Nenhum resolvido à data desta auditoria.
- **DataForSEO — instabilidade de servidor própria, não resolvida:** `Internal SE Server Error`, 18 ocorrências, a mais recente às 07:54 UTC de **hoje**, durante esta própria auditoria.
- **Incidente agudo da semana passada (quota SerpApi + erro de campo `language_name`/`language_code`) — sem nova ocorrência com a mesma assinatura desde 03 ago.** Parece resolvido (quota reposta ou corrigida), mas surgiu um erro novo e distinto no mesmo integrador (`copilot/serpapi failed: Copilot sem texto na resposta SerpApi`, 1 ocorrência, hoje) — não confirmado se é o mesmo problema subjacente com sintoma diferente ou algo novo.
- **`BING_OAUTH_CLIENT_ID` em falta (item aberto em 03 ago)** — sem ocorrência nova na janela de 7 dias desta auditoria, mas a janela não cobre a data original (31 jul); não confirmável como resolvido ou simplesmente fora da janela.
- **Erro novo isolado:** `TypeError: Cannot read properties of undefined (reading 'length')`, rotas `/entity` e `/entity.rsc`, 4 ocorrências, 1 utilizador, 07 ago.
- **Mistral rate-limit** — não confirmado nesta janela de 7 dias (a assinatura de erro específica de semanas anteriores não apareceu na lista actual; não verificado se foi resolvido ou se a janela simplesmente não a capturou).
- **`destaque-ai` (site principal), `destaque-ai-commercial`, `destaque-ai-deck-builder`:** zero erros de runtime nos últimos 7 dias em todos os três.

**Contraponto real, não uma desculpa:** quatro PRs de segurança e correcção de dados (#299-#302) foram mergeados esta semana no Tracker — ver finding 1 para o detalhe. É trabalho de engenharia genuíno e de qualidade, mas não move esta métrica: um cliente que peça hoje um relatório do Tracker para Gemini, Perplexity ou ChatGPT continua a receber dados parciais ou nenhuns, por uma causa que não precisa de mais código.

GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão.

---

## 14. Posicionamento estratégico e inteligência competitiva

Modo knowledge continua a não nomear nenhum concorrente real (0/31). Modo augmented reconfirma, com prompts diferentes dos usados nas quatro semanas anteriores, o mesmo panorama: **AISO Hub** e **UniK SEO** reclamam liderança de categoria de forma explícita em prompts distintos (`GD2`, `V5`), reforçando o item de backlog de classificação formal — agora aberto há 5 semanas, com evidência acumulada em cada uma delas. Achado novo desta semana (finding 3): colisão de termo "GEO" com a indústria de geodesia em três prompts genéricos — um risco de descoberta distinto de competição directa, porque não há ninguém do sector a "ganhar" essas queries, apenas ninguém a aparecer.

Share-of-voice: continua N/D como métrica formal própria (o Tracker que a calcularia está degradado esta semana por falta de crédito, não por falta de código — ver Secção 13). Protocolo de crise: não accionado.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2) — quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Repor crédito/billing em Gemini (7+ semanas em falta), Perplexity e OpenAI no Tracker — degrada 3 dos 7-10 motores medidos, custa um top-up, não código | MEASUREMENT | 30min-1h (billing) | Eduardo — o item mais barato de resolver de toda esta auditoria, e o que está a durar mais tempo |
| Diagnosticar a instabilidade contínua da DataForSEO (`Internal SE Server Error`, activa hoje) | MEASUREMENT | 2-4h | Eduardo |
| Publicar pelo menos 1 post ou estudo novo, ou registar explicitamente a decisão de pausar o editorial — 26/28 dias, 2ª escalada consecutiva sem resposta | CONTENT | variável | Eduardo — pedido repetido pela 3ª vez |
| Classificar formalmente AISO Hub e UniK SEO pelo teste de 4 perguntas de `competitor_filtering.md` — ambos reclamam liderança de categoria explicitamente, 5ª semana em aberto | STRATEGIC | 2-4h | Eduardo |
| Passar `Content-Security-Policy` de Report-Only para enforced — 5ª semana sem progresso | TECH | 2h-1 dia | Eduardo |
| Activar Vercel Web Analytics no projecto `destaque-ai` (confirmado desligado) OU aceitar o rate-limit da PSI e agendar os pedidos com menor frequência para não os desperdiçar | TECH | 30min-2h | Eduardo — a via alternativa da semana passada afinal também precisa de ser ligada, não é automática |
| Confirmar directamente `llms.txt` (falha de fetch distinta do bloqueio de rede geral, não explicada) | GEO | 15-30min | Eduardo — verificação rápida, mas se recorrer passa a P1 |

### Horizonte 2 (semana 3-6) — optimização do existente

- Investigar por que motivo o repositório continua a ser fornecido a partir de uma branch desactualizada a cada execução — item PROCESS ainda não resolvido, 2ª semana em aberto.
- Confirmar directamente a negociação de conteúdo em markdown (PR #94) e re-testar o scan isitagentready.com citado na semana de 03 ago.
- Estender `ImageObject` a pelo menos 1-2 visualizações no estudo mais recente e na página pilar.
- Adicionar schema de resultado verificável (`Claim`/`Dataset`) aos 3 casos de estudo.

### Horizonte 3 (semana 7-12) — reforço estratégico

- Iniciar pipeline de digital PR para cobertura Tier-1 PT.
- Direccionar conteúdo/SEO especificamente para `LR1`/`LR2` — ausente há 5 semanas consecutivas nos prompts de maior intenção comercial local.
- Considerar conteúdo que trabalhe explicitamente a desambiguação do termo "GEO" em português (achado novo desta semana) — uma página ou secção que responda directamente a "GEO" como conceito de marketing, não só o uso implícito actual.
- Considerar nomear pelo menos um caso de estudo real (a divulgação de "anonimizado" continua só em metadata).

### Horizonte 4 (90+ dias)

- Conteúdo multimodal mais amplo com `ImageObject`/`VideoObject` fora do `/tracker`.
- Presença em conferências/thought leadership.
- Reavaliar Wikipedia se a notabilidade justificar.

---

## 16. Nota de encerramento

O score global mantém-se em 69/100 pela terceira semana seguida — mas, tal como nas duas anteriores, isto não é estagnação, é compensação. Esta semana, o lado positivo é genuíno e novo: a homepage revela um inventário de schema de entidade mais rico do que os scorecards anteriores captavam (o `Person` do fundador, com `sameAs` a LinkedIn e áreas de especialização declaradas), e o Tracker recebeu uma vaga de correcções de segurança de qualidade real, feita proactivamente pela equipa, não em resposta a esta auditoria. O lado negativo também é genuíno: o hiato editorial, identificado há duas semanas e escalado há uma, entra na sua terceira semana sem resposta de nenhum tipo — nem conteúdo, nem decisão registada — e o Tracker, apesar dos ganhos de segurança, está a falhar em três dos motores que promete medir por uma razão trivial de resolver (créditos de API por repor) que já dura, no caso do Gemini, mais de sete semanas. O achado novo desta semana — a colisão do termo "GEO" com a indústria de geodesia em português — não muda nenhuma pontuação por si só, mas é um lembrete de que "aparecer nas respostas de IA" depende, antes de mais, de o motor perceber a pergunta correctamente, e isso ainda não está garantido para destaque.ai nas queries mais genéricas da sua própria categoria.
