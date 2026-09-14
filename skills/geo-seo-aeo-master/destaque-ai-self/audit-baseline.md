# destaque.ai self-audit baseline

**Data da auditoria:** 14 setembro 2026, ~08:00–09:20 UTC. **Execução:** oitava corrida do Routine `destaque-ai-self-audit-weekly`, exactamente sete dias depois da anterior (07 set 2026, commit `de7afb9`/`aecc164`): a primeira execução consecutiva sem hiato desde que o item de processo foi escalado a P0 na auditoria de 07 set. Um clone raso deste repositório (`git log`, 72 commits, início 28 ago 2026) não permite verificar directamente os commits de execuções anteriores a essa data; a narrativa de hiatos de 17 e 31 agosto vem do texto já registado por sessões anteriores nestes mesmos ficheiros, não é re-derivada aqui.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia desta execução (ler antes do resto)

**Rede de saída restrita, mesma política em vigor.** `curl` directo a `https://www.destaque.ai/` devolveu `HTTP 000` em 5/5 corridas; o estado do proxy desta sessão (`$HTTPS_PROXY/__agentproxy/status`) confirma explicitamente `connect_rejected`: "gateway answered 403 to CONNECT (policy denial or upstream failure)": para `www.destaque.ai:443`, repetido em cada tentativa. `WebFetch` directo devolveu `EGRESS_BLOCKED` explícito para o mesmo domínio. **Via usada com sucesso, como nas últimas execuções:** `mcp__Vercel__web_fetch_vercel_url` (fetch real server-side via Vercel) para `/`, `/en`, `/en/about`, `/sobre`, `/tracker`, `/agencia-geo` (falhou, "Unable to create shareable URL", falha de ferramenta já conhecida, não do site), `/casos/saas-facturacao-b2b`, `robots.txt`, `sitemap.xml`, `llms.txt`; e `mcp__Vercel__list_projects` / `list_teams` / `list_deployments` / `get_runtime_errors` / `get_web_analytics` para os projectos Vercel `destaque-ai` e `destaque-ai-tracker`. `WebSearch` funcionou normalmente e foi delegado a **dois sub-agentes dedicados** (regresso ao método de 24 ago, depois de uma semana em modo directo): um correu as 31 pesquisas do teste multi-motor (secção 7), outro cobriu Wikidata/Knowledge Panel/imprensa/social/local/reclassificação de concorrentes (secções 9-11, 14).

**models.md:** cabeçalho confirma refresh de hoje mesmo (14 set 2026, absorção do daily-agent sobre a migração do DeepSeek), dentro da janela de 7 dias por larga margem. Nenhuma mudança de modelo default que afecte o mapeamento usado por esta auditoria.

**Amostra técnica desta semana:** homepage (`/`), `/en`, `/en/about`, `/sobre`, `/tracker`, `/casos/saas-facturacao-b2b`, `robots.txt`, `sitemap.xml` (82 URLs), `llms.txt`; deployments e `get_runtime_errors` (janela 7 dias) para `destaque-ai` e `destaque-ai-tracker`; `get_web_analytics` para `destaque-ai`. **Não re-amostradas em detalhe esta semana:** `/servico`, `/glossario`, `/perguntas`, `/consultoria-geo-portugal`, `/playbook`, `/estudo/*`, `/en/*` restantes, `/casos/clinica-dentaria-multilocal`, `/casos/energia-solar-residencial`: a leitura vem do `llms.txt` (que lista e resume todo o site) e do `sitemap.xml`.

**O que não foi possível verificar nesta execução, e porquê:**
- **TTFB por curl de PT**: bloqueado, mesma política de proxy explícita (`connect_rejected`, 403 à ligação `CONNECT`), sem alteração face a semanas anteriores.
- **PageSpeed Insights (LCP/INP/CLS)**: sem via de acesso nesta sessão.
- **Vercel Web Analytics**: `mcp__Vercel__get_web_analytics` no projecto `destaque-ai` devolveu, após corrigir o formato de data (`since`/`until` como datas ISO, não `"7d"`), `400 Bad Request: "web_analytics_not_enabled"`: confirmado desligado pela via mais explícita já obtida nesta série.
- **Teste multi-motor ao vivo em ChatGPT, Perplexity, Google AI Mode, Bing Copilot**: sem sessão de browser autenticada nem integração de API nesta sessão. O teste "augmented" desta semana usa `WebSearch` como proxy razoável de pesquisa fundamentada: não é equivalente a testar os produtos reais; ver Secção 7 para a distinção exacta.
- **Wikidata (item da organização)**: pesquisa dirigida a "Eduardo Mendonça destaque.ai Wikidata" e ao QID Q140043087 citado em execuções anteriores não encontrou nenhum item ligado à destaque.ai ou a este Eduardo Mendonça especificamente: apenas homónimos sem relação. Não é possível confirmar se o item alguma vez existiu para esta entidade.
- **Google Knowledge Panel, Bing Places, pai.pt**: sem confirmação directa; ver Secção 9.

Onde a evidência é real e verificada, está citada com URL/header/data. Onde não foi possível verificar ou não foi re-amostrada esta semana, está marcado **N/D** ou **não re-verificado**.

---

## 1. Sumário executivo

**Score global: 72/100: Bom, com um recuo marginal (Δ−1 vs. 07 set) que esconde um movimento bem maior nos dois sentidos.** Média de 11 categorias com evidência (Performance/CWV continua N/D, 9ª semana). O lado que pesa mais esta semana é operacional, não de conteúdo: o **Visibility Tracker: o produto que a destaque.ai vende: tem o motor ChatGPT completamente inoperacional desde 11 de setembro, por duas causas independentes em simultâneo**: um ID de modelo que já não existe (`gpt-5.5-instant`, erro 404, "does not exist or you do not have access to it") e o modelo de produção (`gpt-5.6-sol`) sem créditos OpenAI (429, "no credits remaining"). O Perplexity soma uma segunda avaria distinta (limite de taxa e quota excedida, assinaturas diferentes). Do lado positivo: a auditoria confirma, pela primeira vez em nove semanas de tentativas, uma citação de imprensa portuguesa real e verificável: a Marketeer construiu pelo menos dois artigos à volta do estudo próprio da destaque.ai ("mapa das empresas de Portugal"): e o teste multi-motor mostra, num teste directo destaque.ai vs. BE VISIBLE, que o site da destaque.ai domina de forma esmagadora a pesquisa (8 URLs próprios devolvidos, zero do concorrente). Do lado negativo mecânico: a correcção de uma linha no `llms.txt` (a mesma "consultancy" identificada há sete dias, esforço de 15-30 minutos) continua por aplicar uma semana depois: e esta auditoria confirma agora, pela primeira vez, que essa linha está a alimentar activamente uma resposta sintetizada errada ("destaque.ai is a Generative Engine Optimization consultancy"); e o `Organization.sameAs` da homepage perdeu a ligação ao Wikidata que estava confirmada há cinco semanas (de 4 para 3 entradas), sem que se saiba se foi remoção deliberada ou perda acidental. Ver scorecard e Top findings.

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 07 set | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 87/100 | 0 | Robots.txt byte-idêntico (756 bytes, 18 UAs de IA), mas redeployado (Last-Modified 10 set, era 02 set); CSP continua só Report-Only |
| 2 | Performance / CWV | N/D | : | Sem via de medição nesta sessão; Vercel Web Analytics reconfirmado desligado (`web_analytics_not_enabled`) |
| 3 | SEO On-Page | 94/100 | −1 | Título/meta/hreflang estáveis e reciprocamente correctos em `/`, `/en`, `/sobre`, `/en/about`; achado novo: `/en` tem só 1 imagem (selo OpenAI), perdeu o dashboard do Tracker que a homepage PT mantém (2 imagens) |
| 4 | Schema / dados estruturados | 95/100 | −3 | `Organization.sameAs` perdeu a entrada Wikidata (de 4 para 3: LinkedIn, Crunchbase, Clutch); tipo novo confirmado em `/tracker`: `SoftwareApplication` (não listado em inventários anteriores) |
| 5 | Otimização de imagens | 74/100 | −1 | `/tracker` reconfirmado com 14 `ImageObject`; `/en` com menos cobertura multimodal do que `/` |
| 6 | GEO técnica (llms.txt, robots IA, server-render) | 88/100 | −3 | A correcção "consultancy"→"software company" no `llms.txt`, flagged há 7 dias como fix de 15-30min, continua por aplicar: e confirma-se esta semana a alimentar uma resposta sintetizada errada (ver finding 2) |
| 7 | Conteúdo & topical authority | 97/100 | +1 | `sitemap.xml` cresce de 76 para 82 URLs (+6): confirma-se `/playbook/produtos-em-ia` e `/en/ai-consultancy-lisbon`; cadência de deploy activa (última produção 10 set) |
| 8 | Entidade / brand foundation | 83/100 | −2 | Ver finding 3 (Wikidata); superfície de confusão de marca alargada: dois novos "Destaque IA" brasileiros/portugueses encontrados além do já conhecido destaque.ia.br |
| 9 | Autoridade & digital PR | 30/100 | +10 | Primeira citação de imprensa PT confirmada em nove semanas de tentativas: Marketeer, dois artigos, ver finding 4. Tier-1 (Observador/ECO/Público/Expresso/JN/DV) continua em zero |
| 10 | Sinais sociais & community | 35/100 | 0 | LinkedIn confirmado por fonte própria do site, mas não localizado directamente por pesquisa externa esta semana (mais fraco do que "confirmado" de execuções anteriores) |
| 11 | E-E-A-T & on-site authority | 70/100 | 0 | Não re-amostrado em detalhe esta semana |
| 12 | Medição & feedback loop | 38/100 | −12 | ChatGPT inoperacional no Tracker por duas causas simultâneas (ver finding 1); Perplexity com duas assinaturas de falha distintas; Gemini sem nova ocorrência por 2ª janela consecutiva (reforça, não confirma) |

### Top 4 findings (cross-dimensional)

1. **O motor ChatGPT do Visibility Tracker: o produto que a destaque.ai vende: está inoperacional desde 11 de setembro, por duas falhas independentes ao mesmo tempo.** `mcp__Vercel__get_runtime_errors` (7 dias, `destaque-ai-tracker`) mostra: (a) `chatgpt/gpt-5.5-instant (knowledge)` e `(augmented)` a falhar com `404 The model gpt-5.5-instant does not exist or you do not have access to it`: 50+50 ocorrências, 7 utilizadores, janela 11 set 14:17–14:28 UTC; (b) `chatgpt/gpt-5.6-sol (knowledge)` e `(augmented)`: o modelo de produção, per `models.md`: a falhar com `429 You have no credits remaining. Add credits to continue using the API at platform.openai.com`: 13+10 ocorrências, 2 utilizadores, mesma janela. São dois problemas de natureza diferente (um ID de modelo inválido, provavelmente retirado ou nunca correcto; uma conta OpenAI sem crédito) que se sobrepõem no tempo: nenhum cliente do Tracker está a receber leitura real do ChatGPT desde essa data. Em paralelo, o Perplexity tem **duas** assinaturas de falha distintas: `429 Request rate limit exceeded` (44 ocorrências, 7 utilizadores, até 11 set 16:00 UTC) e, separadamente, `401 You exceeded your current quota` (6 ocorrências, 1 utilizador, desde 03 ago). O Gemini, pela primeira vez, não aparece de todo na lista de 13 grupos de erro desta semana: 2ª janela consecutiva sem ocorrência de `RESOURCE_EXHAUSTED` (a primeira foi 07 set): reforça mas não confirma a leitura de que o crédito foi reposto. O site principal (`destaque-ai`) continua com zero erros de runtime nos últimos 7 dias.
2. **A correcção de uma linha no `llms.txt`, sinalizada há exactamente sete dias como um fix de 15-30 minutos e prioridade P0, continua por aplicar: e esta auditoria confirma agora que está a alimentar uma resposta sintetizada errada.** Fetch directo confirma que `llms.txt` ainda descreve `/en/about` como "a Generative Engine Optimization consultancy based in Lisbon, Portugal", contradizendo a própria página (`/en/about`, também obtida por fetch directo: "a Portuguese GEO (Generative Engine Optimization) software company"). A lista de deployments de produção entre 07 e 14 set (visível via `mcp__Vercel__list_deployments`, pelo menos 20 registos, 4 em produção) não inclui nenhum commit que toque `llms.txt` ou a meta description de `/sobre` (também sinalizada, prioridade P3, também por corrigir). O achado novo desta semana: o teste multi-motor (Secção 7, prompt `DC1`, "como se compara a destaque.ai com BE VISIBLE?") devolveu uma síntese que descreve destaque.ai textualmente como *"a Generative Engine Optimization consultancy"*: a mesma categorização errada, agora confirmada a aparecer numa resposta gerada por pesquisa real, não apenas hipoteticamente num ficheiro que "podia" ser lido por um motor. Não é uma falha de capacidade: a equipa fez cerca de dez commits de produção nesta mesma janela (menu, ortografia, blocos novos de conteúdo) sem que esta correcção mecânica entrasse em nenhum deles.
3. **`Organization.sameAs` perdeu a ligação ao Wikidata que estava confirmada há cinco semanas, e a pesquisa desta semana não encontra nenhum item Wikidata ligado à destaque.ai ou a Eduardo Mendonça.** Extracção programática do JSON-LD da homepage mostra `sameAs: [LinkedIn, Crunchbase, Clutch]`: três entradas, não quatro. A auditoria de 10 ago tinha confirmado directamente (também por extracção programática) quatro entradas, incluindo um URL do Wikidata associado ao QID Q140043087. Esse QID não aparece em nenhuma página amostrada esta semana (`/`, `/en`, `/en/about`, `/sobre`), e uma pesquisa dedicada a "Eduardo Mendonça destaque.ai Wikidata" e ao próprio QID não encontra nenhum item Wikidata ligado a esta empresa ou a este fundador: apenas homónimos sem relação (um músico brasileiro, um investigador). As duas leituras possíveis são igualmente plausíveis com a evidência disponível: (a) o link foi removido deliberadamente depois de alguém descobrir que o QID nunca correspondeu de facto a esta entidade: uma correcção honesta; ou (b) foi uma perda acidental durante uma das mudanças de schema desta ou de semanas recentes (`ProgramMembership`, paridade bilingue). Não é possível decidir entre as duas só pelo schema; fica registado como pergunta directa a fazer, não como facto resolvido.
4. **Primeira citação de imprensa portuguesa verificável em nove semanas de tentativas: a Marketeer construiu pelo menos dois artigos à volta de um estudo próprio da destaque.ai.** `marketeer.sapo.pt/as-marcas-portuguesas-que-a-ia-nomeia-e-as-que-realmente-recomenda/` ("EDP é a marca portuguesa mais escolhida pela IA. Veja o ranking") cita explicitamente o estudo "mapa das empresas de Portugal" (616 respostas, 10 assistentes, 16 perguntas) e reproduz a distinção "nomeada" vs. "escolhida" que é a métrica própria da destaque.ai (share of recommendation). Um segundo artigo relacionado, `marketeer.sapo.pt/perguntamos-a-uma-ia-que-marcas-portuguesas-recomenda/`, cobre o mesmo tema. A data exacta ("3 de setembro", citada num commit do site na semana passada) não foi confirmada de forma independente nesta auditoria: o texto do artigo só situa o estudo subjacente como "feito no final de agosto". A Marketeer não é uma das seis publicações Tier-1 desta metodologia (Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo, que continuam em zero cobertura confirmada): é uma publicação de marketing/negócios, mas é a primeira vez que uma fonte terceira e verificável (não o próprio site, não um commit interno) constrói conteúdo à volta de dados originais da destaque.ai. É prova de conceito de que a estratégia de investigação própria (estudos, datasets CC BY 4.0) começa a gerar o tipo de cobertura que a distingue de uma consultoria sem dados próprios.

### O que já está forte

O conteúdo continua a ser o eixo mais forte: o `sitemap.xml` cresce de 76 para 82 URLs numa semana, com pelo menos dez commits de produção visíveis entre 07 e 14 de setembro, e o teste multi-motor confirma que, numa pesquisa branded directa (destaque.ai vs. BE VISIBLE), o site da destaque.ai domina por completo: oito URLs próprios devolvidos contra zero do concorrente nomeado. O SEO on-page e o schema continuam entre os pontos mais robustos da auditoria (94 e 95/100 apesar dos recuos desta semana), com hreflang correcto e recíproco confirmado em quatro páginas amostradas. O site principal (`destaque-ai`) mantém zero erros de runtime há sete semanas seguidas de medição. E a Marketeer é a primeira prova externa, não auto-relatada, de que os estudos próprios geram cobertura real: exactamente o mecanismo que a estratégia de conteúdo apostava em construir.

---

## 2. Contexto de negócio

destaque.ai (`Tuasunt, Lda.`), sediada em Lisboa (Rua Luís de Freitas Branco, n.º 42 D, 1600-491 Lisboa: endereço partilhado com outras empresas não relacionadas no mesmo edifício, per pesquisa externa desta semana, consistente com um escritório multi-inquilino, não um sinal de problema). Fundada 2025, fundador Eduardo Mendonça. Posicionamento estável: "empresa de software portuguesa de GEO", com estatuto verificável de **OpenAI Select Partner** (OpenAI Partner Network, agosto de 2026). Portfólio: Diagnóstico GEO, Avenças (Visibilidade/Autoridade), AI ads, Comércio agêntico, Auditoria de visibilidade em IA gratuita (`/auditoria`), playbook publicado (incluindo uma nova secção, `/playbook/produtos-em-ia`, confirmada esta semana). Visibility Tracker: onze motores e superfícies por semana: mas ver finding 1: o motor ChatGPT está, de facto, inoperacional desde 11 de setembro.

---

## 3. Análise de plataforma

Hosting Vercel, projecto `destaque-ai` (`prj_LTbJCH7saLNtmkSNw3k9Mt1XuvrY`, equipa `team_GdiuFturz4hfmcBfWMKFhzms`). Actividade de deploy activa: pelo menos 20 deployments visíveis entre 01 e 10 de setembro (a API não devolveu mais do que uma página nesta consulta), incluindo 4 em produção: o mais recente a 10 set 19:29 UTC ("Seis números do site que não aguentavam ser verificados"), precedido por commits sobre MCP público, guias por motor, e o bloco "share of recommendation" no `/tracker`. Sem deploy de produção confirmado entre 10 e 14 set (4 dias quietos até esta auditoria): não é um hiato preocupante dado o volume da semana anterior. Sem alteração de plataforma/hosting/custo.

---

## 4. Performance

**N/D, nona semana consecutiva.** `curl` bloqueado com mensagem explícita do proxy ("gateway answered 403 to CONNECT (policy denial or upstream failure)"). Vercel Web Analytics reconfirmado desligado: `400 Bad Request`, `web_analytics_not_enabled`, desta vez depois de corrigir o formato de data do pedido (elimina a ambiguidade "seria o formato de data" das execuções anteriores: é mesmo a funcionalidade por activar). Sinais indirectos via headers Vercel: `content-encoding: br` confirmado em `sitemap.xml`, `llms.txt` e na homepage; `x-vercel-cache: HIT` em todas as respostas estáticas amostradas.

---

## 5. SEO on-page

Homepage: título estável "destaque.ai: software de visibilidade em IA"; meta description presente e alinhada ("Empresa de software de GEO..."); `<link rel="canonical">` presente; **1×H1, 16×H2**; **2 imagens** (dashboard do Tracker + selo "OpenAI Select Partner", ambos com `alt` descritivo). Hreflang confirmado correcto e recíproco: `/` declara `pt-PT` (self) / `en` (→`/en`) / `x-default` (→self); `/en` declara o mesmo conjunto.

`/en`: título "AI visibility measurement for brands outside Portugal · destaque.ai", **1×H1, 13×H2**, mas **apenas 1 imagem** (o selo OpenAI): achado novo: perdeu, ou nunca teve, o dashboard do Tracker que a versão PT mostra. É um gap de paridade multimodal entre as duas línguas, pequeno mas mensurável.

`/sobre` e `/en/about`: hreflang confirmado correcto e recíproco entre as duas (`pt-PT`↔`/sobre`, `en`↔`/en/about`, `x-default`→`/sobre`). `/en/about` confirma directamente no corpo e na meta description a correcção de posicionamento ("a Portuguese GEO... software company"). `/sobre` mantém a meta description antiga ("Operação especializada em Generative Engine Optimization") sinalizada há sete dias: **não corrigida**, ver Secção 6/backlog.

Paridade bilingue de páginas de serviço: sem regressão confirmada face à semana passada (não re-amostrada em detalhe).

---

## 6. SEO technical

- **`sitemap.xml`:** **82 URLs** (era 76 em 07 set, +6). Confirmado por fetch directo e contagem programática. Novidades identificáveis via `llms.txt` (que data explicitamente as adições): `/playbook/produtos-em-ia` ("Verificação de primeira mão, 20 Ago 2026", entrada agora incluída no sitemap) e `/en/ai-consultancy-lisbon` ("For international teams looking for GEO consultancy in Portugal"). O diff exacto das 6 URLs novas não é totalmente reconstruível sem a lista bruta da semana passada; as duas identificadas têm alta confiança por estarem descritas com data no próprio `llms.txt`. `lastmod` das páginas estruturais: 2026-09-10/11.
- **`robots.txt`:** **756 bytes**, byte-idêntico ao de 07 set (mesmo `content-length`, mesma lista de 18 user-agents de IA nomeados, todos `Allow: /`, `Content-Signal: search=yes, ai-input=yes, ai-train=yes`). `Last-Modified` do header: **10 set 2026 20:25 UTC** (era 02 set): o ficheiro foi reescrito nesse redeploy mas o conteúdo é byte-idêntico: confirma-se de novo que é um redeploy sem mudança de substância.
- **`hreflang`:** confirmado correcto e recíproco em quatro páginas amostradas (`/`↔`/en`, `/sobre`↔`/en/about`): ver Secção 5.
- **JSON-LD schema:** homepage confirma `Organization` (com `memberOf`/`ProgramMembership`, `OpenAI Partner Network`/`OpenAI Select Partner`; `sameAs` com **3** entradas: ver finding 3), `Person` (fundador, `sameAs` LinkedIn + ORCID), `WebSite`, `WebPage`, `Service`, `FAQPage`. `/en/about` acrescenta `AboutPage`, `BreadcrumbList`. `/tracker` confirma **14× `ImageObject`** (reconfirmado, sem alteração de contagem) e um tipo **não listado em inventários anteriores desta série: `SoftwareApplication`**: pode ser adição nova ou apenas a primeira vez que esta auditoria o regista; a marcar como tal, não como facto de "nova adição desta semana" com certeza. `/casos/saas-facturacao-b2b` confirma `Article` com `author` (Organization) mas continua **sem** `Review`/`AggregateRating`: item de backlog aberto desde 20 jul, sem progresso novo.
- **Security headers:** HSTS (`max-age=63072000`), `x-content-type-options`, `x-frame-options: DENY`, `referrer-policy`, `permissions-policy` confirmados em todas as respostas amostradas. **`content-security-policy-report-only` continua presente, enforced continua ausente**: sem progresso, semana adicional.
- **Compressão e cache:** Brotli confirmado (`content-encoding: br`) em todas as respostas estáticas e na homepage. Sem alteração.

---

## 7. AI / LLM visibility (GEO técnica)

- **`llms.txt`: confirmado a funcionar, ficheiro rico e estruturado, inalterado na sua falha conhecida.** A entrada "English" para `/en/about` continua a dizer *"Who destaque.ai is: a Generative Engine Optimization consultancy based in Lisbon, Portugal"*: sete dias depois de identificado como fix de 15-30 minutos. Ver finding 2 para a evidência nova (a linha está a alimentar uma resposta sintetizada real, prompt `DC1`).
- **Robots.txt / postura para crawlers de IA:** byte-idêntico: ver Secção 6.
- **HTML server-renderizado:** confirmado de novo em `/`, `/en`, `/en/about`, `/sobre`, `/tracker`, `/casos/saas-facturacao-b2b`: todas devolvem HTML completo com JSON-LD embutido.
- **Multimodal grounding:** `/tracker` reconfirmado com 14 `ImageObject`; `/en` tem cobertura de imagem inferior à homepage PT (1 vs. 2, ver Secção 5): o gap multimodal entre línguas é um achado novo, pequeno.
- **Teste multi-motor: metodologia desta semana: dois sub-agentes dedicados com `WebSearch`** (regresso ao método de 24 ago). Continua a não ser equivalente a testar ChatGPT/Perplexity/Google AI Mode/Bing Copilot directamente: é pesquisa fundamentada real, sumarizada por este modelo, tratada como proxy razoável do que uma pesquisa bem feita encontra.

  | Motor | Modelo por defeito (per `references/models.md`) | Testado? |
  |---|---|---|
  | ChatGPT | GPT-5.6 Sol (Plus/Pro/Business/Enterprise) / GPT-5.5 Instant (Free/Go) | **Não**: 9ª semana. Nota: o Tracker próprio está a falhar a chamar exactamente estes dois IDs esta semana (finding 1) |
  | Perplexity | Sonar Pro (Pro) / Sonar (Free) | **Não**: idem |
  | Google AI Mode | Gemini 3.5 Flash | **Não**: idem |
  | Claude (claude.ai) | Claude Sonnet 5 | **Parcial**: modo knowledge (esta sessão, sem ferramentas) |
  | Bing Copilot | GPT-5 (via Azure OpenAI) | **Não**: idem |

  **Modo knowledge, 14 set 2026**: auto-avaliação directa desta sessão (sem `WebSearch` nem qualquer outra ferramenta): sem conhecimento de treino verificável sobre destaque.ai, consistente com todas as execuções anteriores. O corte de conhecimento declarado (janeiro de 2026) precede a maior parte do conteúdo publicado pela destaque.ai em 2026.

  **Modo "augmented" (via `WebSearch`, dois sub-agentes dedicados), 14 set 2026: 21 prompts mandatórios + 10 rotativos = 31 pesquisas.**

  Mandatórios (21): destaque.ai apareceu nos resultados brutos em **6/21 (29%)**: `GD1`, `GD5`, `GD7`, `V1`, `V2`, `V4`. Foi efectivamente creditada na síntese em **1/21 (5%)**: apenas `GD5` ("destaque.ai: Vendem um plano legível, executável, e comparável contra resultado..."). `GD1`, `GD7`, `V1`, `V2`, `V4`: presente nos resultados brutos mas não creditada, mesmo padrão "citada sem ser recomendada" de execuções anteriores. `GD2`, `GD3`, `GD4`, `GD6`, `GD8`, `GP1`-`GP6`, `LR1`, `LR2`, `V3`, `V5`: ausente por completo (14/21).

  Rotativos (10, categorias Comparison/Evaluation/Pricing/Technical, escolhidos para não repetir as das últimas duas semanas): destaque.ai apareceu em **1/10 (10%)**: `DC1`: a única pesquisa branded do lote ("como se compara a destaque.ai com BE VISIBLE?"), com resultado assimétrico e notável: **8 URLs próprios da destaque.ai devolvidos, zero do concorrente nomeado**, e credenciada na síntese (embora com a categorização errada "consultancy", ver finding 2). Os restantes 9 rotativos (`DC4`, `GE2`, `GE5`, `PC2`, `PC4`, `FS3`, `FS4`, `FS7`, `LR4`) não devolveram destaque.ai: dominados por conteúdo genérico PT-BR ou internacional sem relevância local.

  **Total combinado (31 pesquisas): destaque.ai apareceu em 7/31 (23%), foi creditada em 2/31 (6%).** Face a 07 set (8/27, 30% / 4/27, 15%), a taxa de crédito desce: mas o sub-agente que correu o teste sinaliza explicitamente que dois dos prompts que tinham dado crédito há sete dias (`LR1`, `V5`) perderam também qualquer sinal de concorrência local (nem sequer Marco Gouveia apareceu em `LR1` esta semana, ao contrário de três execuções seguidas), o que aponta para instabilidade da pesquisa semana-a-semana sob este método proxy, não necessariamente uma regressão real de posicionamento. **Não tratar a descida como tendência confirmada com um único ponto de dados adicional.**

  **Três colisões de acrónimo "GEO" agora confirmadas, cada uma um motivo genuíno de ausência em pesquisas genéricas:** geodesia/topografia em português (`GD6`, 4ª semana consecutiva), "Authorized Economic Operator" (conformidade aduaneira) em inglês (`LR2`, 2ª confirmação), e **nova esta semana**: "Global Employer of Record" (outsourcing de RH/payroll) em `V3`: terceiro eixo de colisão do mesmo acrónimo, distinto dos dois já conhecidos.

  **Zero alucinações inventadas, zero menções negativas em 31 pesquisas.** Uma imprecisão real e reportável, não uma alucinação (a frase existe literalmente no `llms.txt` da própria destaque.ai): a síntese de `DC1` chama a destaque.ai de "Generative Engine Optimization consultancy": ver finding 2. **Protocolo de crise: não accionado** (não há menção negativa nem categoria hallucination-inventada, apenas uma categorização desactualizada com fonte própria identificável).

  **Multimodal prompt test:** não realizado esta semana, mesma limitação de acesso.

---

## 8. Conteúdo e autoridade temática

Cadência de deploy activa: pelo menos dez commits de produção/preview visíveis entre 07 e 10 de setembro (per `mcp__Vercel__list_deployments`), incluindo blocos novos no `/tracker` sobre "share of recommendation", personas sintéticas, e um recorte da cobertura da Marketeer entrando em código (ver finding 4): sinal de que a equipa já estava a par da cobertura de imprensa antes desta auditoria a confirmar externamente. `sitemap.xml` cresce de 76 para 82 URLs (Secção 6). Sem deploy de produção confirmado nos últimos 4 dias antes desta auditoria (10-14 set): não é um hiato no sentido dos itens escalados em julho/agosto, é uma pausa curta depois de uma semana activa.

---

## 9. Entidade e fundação de marca

**Finding 3 (Secção 1): `Organization.sameAs` perdeu a entrada Wikidata.** Ver acima para o detalhe completo. A pesquisa dedicada desta semana a "Eduardo Mendonça destaque.ai Wikidata" e ao QID Q140043087 não encontrou nenhum item correspondente: apenas homónimos sem relação (um músico brasileiro com item Wikidata próprio, um investigador). Não é possível confirmar, nesta ou em execuções anteriores, que esse QID alguma vez representou de facto esta entidade.

**Google Knowledge Panel:** sem indicação de que renderiza para o nome da marca: pesquisas por "destaque.ai" e "destaque ai empresa" devolvem apenas páginas do próprio site e artigos genéricos explicativos sobre o que é um Knowledge Panel, não um sinal de que exista um.

**LinkedIn:** a existência da página (`linkedin.com/company/destaque-ai`) continua confirmada: mas esta semana só por fonte própria do site (`/contacto`), não por localização directa da página em pesquisa externa, o que é uma confirmação mais fraca do que a obtida em execuções anteriores. Sem dado sobre seguidores, cadência de posts ou engagement.

**Local presence:** o endereço físico (Rua Luís de Freitas Branco, n.º 42 D, Lisboa) confirma-se num edifício com outras empresas não relacionadas registadas (achado novo, neutro: consistente com um escritório partilhado/multi-inquilino comum em Lisboa, não um sinal de problema). Sem Google Business Profile, Bing Places ou listagem em pai.pt encontrados especificamente para a destaque.ai/Tuasunt: categoria de prioridade baixa dado o modelo B2B remoto, per critério já estabelecido.

**Superfície de confusão de marca alargada.** Além do já conhecido `destaque.ia.br` (confirmado ainda activo, posicionamento agora explicitamente automatizado: "sem trabalho manual", 8-20+ páginas/mês, reescrita automática se não estiver top-20 ao fim de 3 semanas), a pesquisa desta semana encontra **dois nomes adicionais** no mesmo espaço semântico: "Destaque IA: Soluções Inteligentes" (`destaqueia.com.br`) e uma página do Facebook "Destaque. IA | Porto". Não há evidência de menção negativa ou confusão real já ocorrida: é um risco de superfície que continua a crescer, não um incidente.

---

## 10. Autoridade e digital PR

**Finding 4 (Secção 1): primeira citação de imprensa portuguesa confirmada em nove semanas de tentativas: Marketeer, dois artigos, à volta do estudo próprio "mapa das empresas de Portugal".** Ver acima para o detalhe e a ressalva sobre a data exacta não confirmada de forma independente. Tier-1 (Observador, ECO, Público, Expresso, Jornal de Negócios, Dinheiro Vivo): pesquisa dirigida por `WebSearch` cruzando "destaque.ai"/"Eduardo Mendonça GEO" com cada um destes seis nomes não devolveu nenhuma menção: score sobe (30/100, +10) por causa da Marketeer, mas fica claro que Tier-1 proper continua em zero.

---

## 11. Sinais sociais e comunidade

LinkedIn: existência confirmada por fonte própria (ver Secção 9), não por pesquisa externa directa esta semana. Sem presença confirmada em X, GitHub ou Reddit/HN. Score mantido em 35/100.

---

## 12. E-E-A-T e autoridade on-site

**Não re-amostrado em detalhe esta semana.** O `Person` do fundador continua confirmado com `sameAs` a LinkedIn pessoal e ORCID (`orcid.org/0009-0001-7315-6837`), reconfirmado por extracção directa do JSON-LD da homepage nesta execução. Valor mantido em 70/100.

---

## 13. Medição e feedback loop

**Score 38/100: recuo acentuado (−12 vs. 07 set).** `mcp__Vercel__get_runtime_errors` (7 dias, `destaque-ai-tracker`) devolveu **13 grupos de erro**, quase o dobro dos 7 de 07 set:

- **`destaque-ai` (site principal): zero erros de runtime nos últimos 7 dias**, sem alteração.
- **ChatGPT: duas falhas simultâneas e independentes desde 11 set, ver finding 1.** `gpt-5.5-instant` com ID de modelo inexistente (404, 100 ocorrências combinadas) e `gpt-5.6-sol` (produção) sem créditos OpenAI (429, 23 ocorrências combinadas).
- **Perplexity: duas assinaturas distintas.** `sonar-pro (augmented) 429 Request rate limit exceeded` (44 ocorrências, 7 utilizadores, até 11 set) e `sonar-pro (augmented) 401 You exceeded your current quota` (6 ocorrências, 1 utilizador, desde 03 ago: assinatura mais antiga, distinta do rate-limit).
- **DataForSEO: fallback para SerpApi continua, volume a crescer.** `[surfaces] DataForSEO falhou, a cair para SerpApi: Internal SE Server Error`: 35 ocorrências desde 31 jul (era 22 em 07 set), incluindo esta semana. Continua sem a assinatura antiga (`Invalid Field: 'language_name'`), mas o volume cumulativo cresce: não atinge ainda o critério de "duas janelas limpas seguidas" para fechar o item.
- **Gemini: 2ª janela consecutiva sem nenhuma ocorrência de `RESOURCE_EXHAUSTED`.** Reforça, não confirma, a hipótese de crédito reposto: falta confirmação directa de billing ou uma terceira janela limpa.
- **Grok: erros de timeout novos.** `grok-4.3 (knowledge)` e `(augmented)` a falhar com "tempo esgotado... sem resposta em 180s": 3+2 ocorrências, 11 set. Baixo volume, primeira vez visto por esta auditoria.
- **`google_aio/dataforseo (augmented) failed: This operation was aborted`**: 16 ocorrências, 6 utilizadores.
- **Bug novo, isolado:** `Error: unsupported number: -1.9064433873226668e+21`, rota `/api/opportunities/export`, 1 ocorrência, 11 set: candidato a bug de serialização numérica, baixo volume.
- **`Vercel Runtime Timeout Error: Task timed out after 300 seconds`**: 1 ocorrência, resíduo de baixo volume.

GSC, GA4 (canal IA), Bing Webmaster Tools AI Performance continuam sem confirmação directa a partir desta sessão.

---

## 14. Posicionamento estratégico e inteligência competitiva

**Reclassificação: BE VISIBLE já não se descreve como agência portuguesa pura.** Confirma-se esta semana que `bevisibleagency.com` se posiciona agora como "global GEO agency" com escritórios em **Londres, Ostende (Bélgica), Lisboa e Cebu (Filipinas)**: sede efectivamente em Londres, não em Portugal. O ICP declarado (B2B/AI/Tech/SaaS, "early-stage startups to scaling B2B SaaS") mantém-se quase idêntico ao da destaque.ai, mas a base geográfica muda o enquadramento: é um concorrente internacional com presença em Lisboa, não um par português puro. Achado adicional relevante: no teste `DC1` desta semana (pesquisa branded directa "destaque.ai vs. BE VISIBLE"), o BE VISIBLE **não devolveu nenhum resultado próprio**, enquanto a destaque.ai devolveu oito URLs: evidência de que, apesar da sobreposição de posicionamento, o footprint de conteúdo indexado da destaque.ai é hoje muito mais forte para pesquisas que os nomeiam a ambos.

**Marco Gouveia:** pricing reconfirmado e mais preciso: **auditoria de GEO a partir de €3.000, consultoria contínua a partir de €1.000/mês** (era só "a partir de 3.000€" em execuções anteriores). Continua a vencer/empatar em pesquisas de recomendação local em execuções passadas, mas esta semana `LR1` não devolveu nem Marco Gouveia nem destaque.ai: instabilidade de pesquisa, não uma leitura de que ele deixou de aparecer (ver Secção 7).

**Francisco Paredes: correcção de geografia.** Confirmado sediado no **Porto**, não em Lisboa como o contexto da auditoria anterior sugeria: página dedicada `/consultor-geo/`, histórico com Sport Zone, Continente Online (MC), actualmente Nestlé.

**Concorrente novo: SEO Alive**, encontrado em `V5` ("que agência de SEO/GEO recomendam para uma SaaS portuguesa com horizonte de M&A?"), com posicionamento explícito de GEO para SaaS ("otimizam a marca para que apareça e seja citada no ChatGPT, Gemini, Perplexity, Copilot"). Não classificado formalmente.

**O panorama competitivo continua a encher-se rapidamente.** Além dos já conhecidos, esta semana surgem mais cinco nomes nunca antes vistos por este Routine, encontrados em pesquisas de research dedicada, não no teste de prompts: AWISEE (agência internacional, fundada em Estocolmo, com página dedicada "B2B SEO Agency Portugal" e escritório reclamado em Lisboa), SmartLinks, DivSync Digital, Digiton.ai, BeFound. Nenhum classificado formalmente. O item de backlog aberto desde 27 jul sobre um "peer set desatualizado" continua a crescer sem que a classificação formal (`competitor_filtering.md` §1) tenha avançado: já não é sustentável tratar isto como um item a "confirmar na próxima execução": é trabalho represado.

Protocolo de crise: não accionado.

---

## 15. Plano de acção em 4 horizontes

### Horizonte 1 (semana 1-2): quick-wins críticos

| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| **Resolver o motor ChatGPT do Tracker: corrigir o ID de modelo inválido (`gpt-5.5-instant`) e repor crédito OpenAI para `gpt-5.6-sol`** | MEASUREMENT | 1-2h (diagnóstico ID) + 30min (billing) | Eduardo: P0, o produto está a falhar para clientes reais desde 11 set |
| Corrigir a linha `/en/about` no `llms.txt`: 2ª semana em aberto do mesmo fix de 15-30min, agora confirmado a alimentar uma resposta sintetizada errada | GEO/ENTITY | 15-30min | Eduardo: P0, sem desculpa de capacidade dada a cadência de commits da semana |
| Confirmar se a remoção do Wikidata de `Organization.sameAs` foi deliberada (QID nunca correspondeu) ou acidental; se acidental, repor; se deliberada, procurar/criar o item correcto | ENTITY | 1-2h | Eduardo |
| Diagnosticar as duas assinaturas de falha do Perplexity no Tracker (rate-limit + quota) | MEASUREMENT | 1-2h | Eduardo |
| Alinhar a meta description de `/sobre` ("Operação especializada") com "empresa de software": 2ª semana em aberto | CONTENT | 15-30min | Eduardo |
| Adicionar o dashboard do Tracker (ou equivalente) à homepage `/en`, hoje só com o selo OpenAI | CONTENT/GEO | 30min-1h | Eduardo |

### Horizonte 2 (semana 3-6): optimização do existente

- Classificar formalmente BE VISIBLE (agora reclassificado como agência internacional, não par português puro), Marco Gouveia, Francisco Paredes e SEO Alive per `competitor_filtering.md` §1: item aberto desde 27 jul, a lista de nomes por classificar já não é sustentável sem acção.
- Confirmar por uma terceira janela limpa (ou por billing directo) se o crédito do Gemini foi de facto reposto.
- Investigar o bug de serialização numérica em `/api/opportunities/export` (baixo volume, mas fácil de isolar).
- Investigar a nova colisão de "GEO" com "Global Employer of Record" em inglês: terceiro eixo de colisão do mesmo acrónimo.

### Horizonte 3 (semana 7-12): reforço estratégico

- Aproveitar a cobertura da Marketeer como prova de conceito: identificar 2-3 publicações adicionais (marketing/negócios, não necessariamente Tier-1 generalista) para pitch directo com os estudos já publicados como gancho.
- Confirmar a data exacta da publicação da Marketeer de forma independente (a citada "3 de setembro" vem de um commit interno, não do artigo).
- Monitorizar a superfície de confusão de marca alargada (destaque.ia.br, destaqueia.com.br, Facebook "Destaque. IA | Porto") sem escalar sem evidência de confusão real.

### Horizonte 4 (90+ dias)

- Confirmar directamente a existência (ou não) de um item Wikidata correcto para a organização, assim que houver via de acesso.
- Conteúdo multimodal mais amplo com `ImageObject`/`VideoObject` fora do `/tracker`.
- Reavaliar se a segunda execução consecutiva sem hiato (esta semana, após 07 set) se mantém por mais 1-2 semanas antes de considerar o item PROCESS resolvido.

---

## 16. Nota de encerramento

O score desce um ponto, para 72/100, mas o número esconde mais do que revela esta semana. O problema mais sério não está no site público, está no produto: o Visibility Tracker: a coisa que a destaque.ai vende: tem o seu motor mais importante, o ChatGPT, completamente parado desde 11 de setembro, por duas causas que não têm nada a ver uma com a outra (um ID de modelo que já não existe, e uma conta sem crédito). Isto não é um achado de auditoria de conteúdo, é uma falha operacional a decorrer agora, no produto vivo. Ao mesmo tempo, dois fixes triviais sinalizados há sete dias: uma linha no `llms.txt`, uma frase na meta description de `/sobre`: continuam por aplicar, apesar de uma semana com cerca de dez commits de produção; e esta auditoria consegue agora mostrar, não apenas argumentar, que a linha por corrigir está a ser lida e repetida por uma síntese de pesquisa real. Do lado positivo, a Marketeer deu à destaque.ai a primeira prova externa e verificável de que o investimento em estudos próprios gera cobertura de imprensa real, não apenas dados internos: depois de nove semanas seguidas de zero. E um teste directo contra o concorrente mais próximo (BE VISIBLE, agora reclassificado como agência internacional, não par português) mostra a destaque.ai a dominar por completo o próprio nome na pesquisa. A ordem de prioridade para a próxima semana devia ser exactamente a ordem inversa da facilidade de resolução: primeiro o Tracker (P0, afecta clientes reais agora), depois os dois fixes de minutos que já deviam estar feitos, só depois o resto.
