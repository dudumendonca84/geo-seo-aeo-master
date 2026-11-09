# Como os motores leem um site no momento da resposta

Referência do `geo-seo-aeo-master`, escrita a partir de pesquisa feita a 8 Nov 2026. Responde a três perguntas que um cliente faz, e que a skill respondia de forma dispersa e em parte errada. De onde vem o texto que um assistente com pesquisa usa? Quanto tempo demora uma alteração no site a aparecer numa resposta? E o que provam os registos do servidor? A secção 8 lista o que esta pesquisa corrigiu em `frameworks.md`, `engine_playbooks.md` e `models.md`.

Cada afirmação leva uma de quatro marcas de prova:

- **[D] documentado**: o fornecedor di-lo por escrito, na documentação, no blogue oficial ou numa página de ajuda.
- **[M] medido**: experiência ou estudo de terceiros com método descrito, ou medição do destaque.ai sobre o próprio site.
- **[I] inferido**: dedução a partir de [D] e [M], que pode estar errada.
- **[?] desconhecido**: ninguém publicou, e nós não medimos.

---

## 1. A resposta curta

Um assistente com pesquisa quase nunca vai ao seu site no instante em que responde. Lê uma **cópia guardada**. Pode ser a do índice próprio do fornecedor (OpenAI, Perplexity, Google) ou a de um motor de pesquisa de terceiros (a Brave no Claude, o Bing no Copilot, resultados da Google no Grok e em parte do Perplexity). Essa cópia foi recolhida antes por um robô de indexação (`OAI-SearchBot`, `PerplexityBot`, `Googlebot`, `Bingbot`, o robô da Brave), partida em passagens e ordenada contra a pergunta no momento da resposta.

A visita ao vivo com o agente do utilizador (`ChatGPT-User`, `Claude-User`, `Perplexity-User`) existe, mas os fornecedores documentam-na para ações pedidas pela pessoa, como colar um endereço ou pôr um agente a navegar. Numa experiência com 20 sites entre março e abril de 2026, com consultas feitas sobretudo por API, nenhum destes três agentes alimentou uma resposta [M, Seiden et al., CCS 2026].

O que conta para aparecer é, portanto, estar no índice certo e ter lá a cópia atualizada. O que acelera uma mudança é fazer o robô de indexação voltar, e não esperar que o assistente "leia o site". No destaque.ai, o ChatGPT passou a usar o nome novo do produto 4,5 dias depois da mudança no site [M]. Foi 16 horas depois de acabar uma rajada de dois dias em que o `OAI-SearchBot` voltou a percorrer o site.

---

## 2. Motor a motor

### 2.1 Tabela resumo

| Superfície | De onde vem o texto no momento da resposta | Agente que aparece nos registos do site | O que se sabe sobre a releitura | Confiança |
|---|---|---|---|---|
| **ChatGPT com pesquisa** (aplicação) | Índice e cache próprios da OpenAI, alimentados pelo `OAI-SearchBot` [D: o robô existe para isto; M: canário]. Resultados de terceiros (Bing, Google por intermediários) servem sobretudo para descobrir e ordenar endereços [M, I] | `OAI-SearchBot`, e o `GPTBot` partilha a recolha se ambos estiverem permitidos [D]. `ChatGPT-User` só em ações do utilizador [D] | Sem mecanismo de submissão documentado. Rajadas de recolha observadas nos nossos registos. Uma regra de robots.txt demora "~24 horas" a valer [D] | Média-alta sobre a origem, baixa sobre o que provoca a releitura |
| **OpenAI API, ferramenta `web_search`** | Por omissão pode ir ao vivo; com `external_web_access: false` usa "só resultados em cache/indexados" [D]. Não diz qual é o índice nem que agente faz a visita ao vivo [?] | No canário (feito sobretudo por API), só valores servidos ao `OAI-SearchBot` [M] | Igual ao ChatGPT [I] | Média |
| **Claude com pesquisa** (claude.ai e API `web_search`) | Índice de terceiros. A Brave está na lista de subcontratantes da Anthropic desde 19 Mar 2025 [D, lido em fonte secundária]. No canário o conteúdo veio do robô da Brave e de nenhum agente da Anthropic [M]. Em 2026 entraram mais dois subcontratantes de pesquisa, TurboPuffer e Parallel Web Systems [D, secundária, não confirmado] | Robô da Brave (ASN 24940 no canário). A Brave diz que não anuncia agente próprio [D]; o canário viu `Bravebot/1.0` [M]. `Claude-SearchBot` e `Claude-User` quase ausentes [M] | Formulário de submissão da Brave para nova leitura [D]. A Brave não recolhe o que o `Googlebot` não pode recolher [D] | Média |
| **Claude, ferramenta `web_fetch`** | Visita a página pedida, com cache por omissão: "o conteúdo devolvido pode não refletir a versão mais recente" [D]. `use_cache: false` força leitura nova [D]. Não executa JavaScript [D]. Só lê endereços que já apareceram na conversa [D] | `Claude-User` [D]. Respeita o robots.txt (o erro `url_not_allowed` inclui-o) [D] | Cache gerida automaticamente, prazo não publicado [?] | Alta sobre o mecanismo |
| **Perplexity** | Índice próprio com mais de 200 mil milhões de endereços e "dezenas de milhares de operações de indexação por segundo" [D]. No canário, conteúdo do `PerplexityBot` e também do `Googlebot` [M] | `PerplexityBot` (indexação) [D]. `Perplexity-User` documentado para visitas pedidas pelo utilizador, e "geralmente ignora robots.txt" [D]; não observado no canário [M] | Um modelo de aprendizagem automática decide se e quando reindexar cada endereço [D]. Sem submissão documentada. Uma regra de robots.txt vale em até 24 horas [D] | Alta sobre a arquitetura |
| **Gemini** (aplicação e API com Grounding with Google Search) | "Conteúdo do índice da Pesquisa Google, entregue ao modelo no momento do pedido" [D]. A ferramenta `URL context` tenta primeiro "uma cache de índice interna" e só depois lê ao vivo [D] | `Googlebot` [D, M]. Leituras pedidas pelo utilizador usam agentes próprios (`Google-Agent`, `Google-GeminiNotebook`), que geralmente ignoram o robots.txt [D] | O ritmo do `Googlebot`: popularidade, desatualização, `lastmod` verificável [D] | Alta |
| **Google AI Overviews e AI Mode** | Índice da Google. O único requisito é a página estar indexada e ser elegível para snippet [D]. *Query fan-out* sobre várias sub-pesquisas [D] | `Googlebot`. Não há rastreador separado para IA [D] | Inspeção de URL no Search Console e sitemap com `lastmod` exato; "de alguns dias a algumas semanas" [D] | Alta |
| **Microsoft Copilot** | O Copilot gera uma consulta curta e envia-a ao serviço Bing, e usa o resultado para compor a resposta [D] | `Bingbot` [M, canário] | IndexNow e sitemap no Bing Webmaster Tools. O Bing lê um sitemap submetido "imediatamente" e volta "pelo menos uma vez por dia" [D] | Alta |
| **Grok** | Não documentado. A xAI diz só que pesquisa e navega "em tempo real" [D]. No canário, conteúdo do `Googlebot` (resultados da Google por intermediário) e de agentes de navegador genéricos, que continuaram a ser servidos com o site offline [M] | Nenhum agente declarado pela xAI [D: ausência]. Chrome e Safari genéricos [M] | [?] | Baixa |

### 2.2 Notas por motor

**ChatGPT.**

- A OpenAI separa três agentes [D, developers.openai.com/api/docs/bots]. O `OAI-SearchBot` serve "para mostrar sites nos resultados de pesquisa"; o `GPTBot` serve o treino; o `ChatGPT-User` serve "certas ações do utilizador", como visitar uma página quando a pessoa o pede. A mesma página diz que o `ChatGPT-User` "não é usado para recolha automática" nem "para determinar se o conteúdo pode aparecer na Pesquisa". Se o `OAI-SearchBot` e o `GPTBot` estiverem ambos permitidos, a OpenAI pode usar uma só recolha para os dois fins.
- O índice próprio existe e tem nome interno, "Labrador". Entre 21 Mai e 21 Jul 2026, um campo `result_source` nos eventos do servidor mostrou os valores `Labrador`, `Bright`, `Oxylabs` e `SERP` [M, Peec AI, 4 Set 2026, fonte única e vendedora]. Há experiências em produção como `prefer-index-over-serp-v3`, que em meados de agosto corria em 8% das conversas de compras. O mesmo texto cita o testemunho de Nick Turley (OpenAI) no processo antitrust, com o objetivo de responder a 80% das perguntas pelo índice próprio. O testemunho refere também problemas de qualidade com os parceiros de API de pesquisa.
- A OpenAI anunciou a 13 Fev 2026 o *Lockdown Mode*, em que a navegação fica "limitada a conteúdo em cache", sem pedidos de rede ao vivo [D]. A página da OpenAI recusa leitura automática, e o anúncio foi lido em fontes secundárias. É a própria OpenAI a confirmar que tem uma cache de páginas suficiente para responder.
- Em cerca de 7 mil milhões de linhas de registo, o volume de recolha do `OAI-SearchBot` cresceu cerca de 3,5 vezes depois do GPT-5 (Ago 2025) [M, Botify, 23 Abr 2026]. No mesmo estudo, o do `ChatGPT-User` caiu 28% entre Dez 2025 e Mar 2026. A leitura de que o índice substitui a visita ao vivo é hipótese dos autores [I].
- A OpenAI usa "fornecedores de pesquisa de terceiros" e nomeou o Bing como "um importante" [D, secundária, 2024]. Em Ago 2025 a The Information noticiou o uso de resultados da Google via SerpApi, sobretudo para atualidade [M, secundária]. No canário os sites estavam no Bing e o Copilot devolveu valores servidos ao `Bingbot`, mas o ChatGPT só devolveu valores servidos ao `OAI-SearchBot` [M]. A leitura mais provável é que o Bing e a Google decidem **que endereço** o ChatGPT considera, e que o **texto** que entra na resposta vem da cópia da OpenAI [I].
- O Microsoft Web IQ (2 Jun 2026) devolve "passagens e objetos de evidência estruturados" [D]. Nem o blogue da Microsoft nem a página do produto dizem que alimenta o ChatGPT [D: ausência]. A afirmação de que "o Web IQ alimenta o ChatGPT e o Copilot", que circulou na imprensa especializada, não tem fonte primária.

**Claude.**

- A Anthropic documenta o `ClaudeBot` (treino), o `Claude-User` (acesso quando um utilizador faz uma pergunta) e o `Claude-SearchBot` ("navega a web para melhorar a qualidade dos resultados de pesquisa"), mais o `Claude-Agent` para navegadores alojados. Os IP estão em `claude.com/crawling/bots.json` [D, support.claude.com].
- A documentação da ferramenta `web_search` não nomeia fornecedor. Cada resultado traz `url`, `title`, `page_age` e um `encrypted_content` opaco [D]. A versão `web_search_20260209` e as seguintes filtram os resultados por código antes de chegarem ao contexto (*dynamic filtering*) [D]. A seleção de passagens acontece, portanto, no momento da pergunta, sobre o que o fornecedor devolveu.
- No `web_fetch` há cache por omissão, `use_cache: false` para leitura nova, nenhum JavaScript, e os PDF são lidos [D].
- Nos registos do destaque.ai, de junho a novembro de 2026, houve 1 visita do `Claude-SearchBot`, 0 do `Claude-User` e 51 do `ClaudeBot`. No mesmo período medimos 126 respostas do Claude a citar o destaque.ai. A explicação compatível com o canário é que o Claude leu a cópia da Brave [I].

**Perplexity.** É a descrição mais completa publicada por um fornecedor [D, Perplexity Research, 25 Set 2025]. Um modelo prevê se cada endereço candidato precisa de ser indexado, e quando, e atualizar páginas antigas "compete" com indexar páginas novas. Os documentos são decompostos em "trechos autónomos, cada um recuperável e ordenado no momento da pergunta", e a recuperação lexical e a semântica correm em paralelo, juntas num conjunto híbrido. A ordenação faz-se por fases cada vez mais caras, e a última usa modelos *cross-encoder*. O `PerplexityBot` "cumpre os limites explícitos do robots.txt". O canário viu também conteúdo do `Googlebot` [M], o que bate com o processo do Reddit contra o Perplexity por recolha de resultados da Google (Out 2025, secundária).

**Gemini e Google.** É o caso com menos ambiguidade, com um índice (o da Pesquisa) e um rastreador (`Googlebot`). O `Google-Extended` decide só o treino e a fundamentação nas aplicações Gemini e na Vertex AI, e não a presença no AI Overviews nem no AI Mode [D, página atualizada a 30 Out 2026]. A Google descreve um sistema de *passage ranking* que identifica secções de uma página para avaliar a relevância [D]. A ferramenta `URL context` da API Gemini descreve exatamente o padrão "cache primeiro, ao vivo se faltar" [D], que é o desenho que se infere nos outros fornecedores.

**Copilot.** A Microsoft descreve o fluxo por escrito [D, learn.microsoft.com, 29 Out 2026]. O Copilot gera uma consulta de poucas palavras, envia-a ao serviço Bing com o IP do utilizador para localizar o resultado, e compõe a resposta com o que o Bing devolve. Não descreve visita nenhuma ao site.

**Grok.** A xAI não publica agente, IP nem fornecedor de pesquisa [D: ausência]. O canário observou 129 valores servidos a um agente Chrome genérico em 19 dos 20 sites, mais valores servidos ao `Googlebot`, e conteúdo ainda disponível uma semana depois de o site ficar offline [M]. A hipótese de trabalho é um índice ou resultados da Google por intermediário, mais visitas próprias não declaradas, com cache [I].

---

## 3. O caminho: descobrir, recolher, guardar, partir, recuperar, gerar

| Passo | O que acontece | Documentado | Inferido ou desconhecido |
|---|---|---|---|
| **1. Descobrir** | O robô fica a saber que o endereço existe, por ligações, sitemaps, IndexNow (Bing, Yandex, Naver, Seznam, Yep, Amazon), submissões manuais ou resultados de outros motores | Google: sitemap, ligações, inspeção de URL [D]. Bing: sitemap e IndexNow [D]. Brave: formulário e Web Discovery Project [D]. Perplexity: modelo que escolhe candidatos [D] | OpenAI: nada publicado sobre descoberta [?]. Usar o Bing ou outros resultados de pesquisa para descobrir é plausível [I] |
| **2. Recolher** | O robô de indexação pede a página e guarda o HTML | Google: a procura de recolha depende da popularidade e da desatualização ("os sistemas querem voltar a recolher com frequência suficiente para apanhar mudanças"); `changefreq` e `priority` são ignorados; `lastmod` é usado "se for consistente e verificavelmente exato" [D]. Bing: o `lastmod` é "sinal chave" para priorizar nova recolha [D] | Prioridades da OpenAI, da Anthropic e da xAI [?]. Execução de JavaScript pelo `OAI-SearchBot` e pela Brave [?]. O `web_fetch` da Anthropic não executa [D] |
| **3. Guardar** | A cópia fica no índice ou numa cache | OpenAI: existe cache servível sem rede (Lockdown Mode) [D]. Anthropic: `web_fetch` com cache [D]. Google: `URL context` com cache de índice [D] | Duração das caches [?]. No canário, 7 de 8 assistentes que usavam índices de terceiros continuaram a citar o conteúdo uma semana depois de o site ficar offline, e 12 de 18 continuaram depois de o robots.txt bloquear tudo [M] |
| **4. Partir e vetorizar** | A página é dividida em passagens, e cada passagem recebe representação lexical e vetorial | Perplexity: trechos autónomos ao indexar, lexical e semântico [D]. Google: *passage ranking* [D]. Microsoft Web IQ: recuperação ao nível da passagem [D] | OpenAI: BM25, reordenação e pesquisa vetorial aproximada aparecem em anúncios de emprego e eventos (Peec AI) [I]. Tamanho das passagens, modelos de vetores, e se a divisão é feita ao indexar ou ao perguntar, no ChatGPT e no Claude [?] |
| **5. Recuperar e ordenar** | A pergunta é partida em sub-pesquisas, cada uma devolve candidatos, e uma ou mais fases reordenam | Google: *query fan-out* [D]. Copilot: consulta gerada a partir da pergunta [D]. Perplexity: híbrido, várias fases [D]. Anthropic e OpenAI: o modelo decide quantas pesquisas faz, e o `find_in_page` (OpenAI) e o *dynamic filtering* (Anthropic) selecionam dentro do que foi devolvido, no momento da pergunta [D] | Como cada assistente pondera autoridade, frescura e coincidência literal [?] |
| **6. Gerar e citar** | O modelo escreve com as passagens no contexto e cita | Anthropic: `cited_text` até 150 caracteres por citação [D]. OpenAI: campo `sources` com todos os endereços consultados [D] | Porque é que um endereço consultado não é citado [?] |

A divisão em passagens acontece **duas vezes**. Primeiro nos índices, ao indexar, como o Perplexity documenta e a Google e a Microsoft descrevem. Depois outra vez no momento da pergunta, sobre o que foi devolvido, pela filtragem por código na Anthropic, pelo `find_in_page` na OpenAI e pela reordenação final em todos. A página inteira raramente chega ao modelo.

---

## 4. Quanto tempo demora uma alteração a aparecer, e como acelerar

### 4.1 Três condições, por esta ordem

Uma mudança no site só aparece numa resposta se acontecerem três coisas seguidas:

1. o robô de indexação daquele motor volta à página;
2. o índice substitui a cópia antiga, e as caches por cima dele expiram;
3. a resposta precisa do facto que mudou.

A terceira é a que costuma enganar. Entre 21 Set e 5 Out 2026, o Perplexity citou as páginas `/tracker` e `/sobre` do destaque.ai em 10 respostas sem nunca dizer "Periscopy", o nome novo do produto. Lidas uma a uma, as 10 falam da agência e não do produto. A ausência do nome novo não prova, sozinha, que o motor tinha a cópia antiga.

### 4.2 Evidência de latência

| Fonte | O que mediu | Resultado | Prova |
|---|---|---|---|
| Google, "Ask Google to recrawl" | Prazo de nova recolha | "De alguns dias a algumas semanas"; pedir várias vezes não acelera | [D] |
| OpenAI e Perplexity | Prazo para uma mudança no robots.txt valer | Cerca de 24 horas (OpenAI), até 24 horas (Perplexity) | [D] |
| Semrush, 81 páginas novas num blogue com autoridade 84, Set 2025 | Páginas citadas por dia | AI Mode: 36% no dia 1, 59% no dia 6, 26% no dia 30. ChatGPT: 10% no dia 1, 35% no dia 14, 42% no dia 30 | [M, um só site] |
| Seiden et al., 20 sites canário, Mar a Abr 2026 | Persistência depois de retirar o site | Conteúdo citado uma e duas semanas depois de offline ou bloqueado em 12 de 18 assistentes | [M, revisão por pares, CCS 2026] |
| destaque.ai, mudança de nome a 16 Set 2026 | Primeira resposta com o nome novo, em perguntas que não o contêm | ChatGPT (aplicação): 20 Set, 21:17 UTC. Gemini e Grok (API): 21 Set, primeira medição depois da mudança, portanto 5 dias ou menos. Claude (aplicação): 28 Set. Perplexity (API): 12 Out. Google AI Mode: 19 Out. Copilot (aplicação): 23 Out. AI Overviews: 2 Nov | [M] Só o ChatGPT, o Gemini e o Grok dão um limite útil. Nos outros, a data mistura a frequência das nossas medições com a necessidade de dizer o nome (4.1) |
| destaque.ai, registos do `OAI-SearchBot` | Visitas antes e depois da mudança | 1 por dia de 8 a 17 Set; 134 entre 18 Set 09:15 e 20 Set 05:09 UTC, em todo o site (só 10 em `/tracker`, `/en/tracker`, `/sobre` e `/en/about`); nova rajada a 24 e 25 Set (38 e 173) | [M] |

A rajada do `OAI-SearchBot` começou dois dias depois da mudança e acabou 16 horas antes da primeira resposta do ChatGPT com o nome novo. É coerente com a sequência recolha, reindexação em horas, resposta [I]. Não sabemos o que provocou a rajada. O site faz um pedido IndexNow com o sitemap inteiro a cada publicação em produção, houve publicações a 16, 17 e 18 Set, e a OpenAI não participa no IndexNow. Houve também muitas publicações sem rajada nenhuma, e a correlação dia a dia está por fazer (6.3).

### 4.3 Como acelerar, por motor

| Motor | O que existe | O que fazer |
|---|---|---|
| Google (AI Overviews, AI Mode, Gemini) | Inspeção de URL no Search Console (com quota), sitemap com `lastmod` exato, ligações internas, popularidade [D] | Pedir indexação das páginas alteradas. Manter o `lastmod` igual à última alteração significativa (conteúdo, dados estruturados, ligações), e nunca ao ano do rodapé |
| Bing e Copilot | IndexNow, sitemap no Bing Webmaster Tools, `lastmod` [D] | Enviar IndexNow a cada publicação (o destaque.ai fá-lo no fim de cada compilação) e submeter o sitemap no Bing Webmaster Tools |
| ChatGPT | Nenhum mecanismo de submissão documentado [D: ausência] | Permitir o `OAI-SearchBot` no robots.txt e na firewall, servir o HTML sem depender de JavaScript, e manter o sitemap e as ligações internas atualizados. O efeito do IndexNow e do Bing na releitura pela OpenAI está por provar [?] |
| Claude | Formulário de submissão da Brave [D]; a Brave segue as permissões do `Googlebot` [D] | Submeter as páginas alteradas no formulário da Brave e não bloquear o `Googlebot`, porque isso bloqueia também a Brave |
| Perplexity | Nada documentado; o calendário é decidido por um modelo [D] | Permitir o `PerplexityBot` e manter a página popular e bem ligada. Não há atalho específico |
| Grok | [?] | Estar bem no índice da Google é o único caminho com alguma prova [M, canário] |

Retirar um conteúdo demora mais do que pô-lo, porque as caches de terceiros o mantêm durante semanas (canário). Uma correção a um erro factual publicada no site não apaga a cópia antiga de imediato. O que encurta o prazo é pedir nova recolha nos motores que o permitem.

---

## 5. O que os registos do servidor dizem e o que não dizem

### 5.1 O que dizem

- Que um robô de indexação passou, que páginas recolheu e com que frequência. É o único sinal direto, do lado do site, de que a cópia de um motor pode estar atualizada.
- Que uma página nova foi descoberta, e quanto tempo depois da publicação.
- Que um agente de utilizador visitou uma página, porque a pessoa colou o endereço ou um agente navegou.

### 5.2 O que não dizem

- **Se o site foi citado.** As respostas vêm da cópia guardada, e uma citação não gera visita. No destaque.ai, de junho a novembro de 2026, os registos têm 3 804 visitas do `OAI-SearchBot`, 27 do `ChatGPT-User`, 0 do `Claude-User` e 0 do `Perplexity-User`. No mesmo período medimos 176 respostas do ChatGPT, 173 do Perplexity, 126 do Claude e 190 do Grok a citar o destaque.ai. Zero visitas de agentes de utilizador **não** quer dizer que os assistentes não leem o site.
- **Se um motor usou a cópia de um terceiro.** O Claude a ler via Brave e o Grok via Google não deixam rasto com o nome do assistente.
- **O que aconteceu dentro da cache da CDN**, se o registo só apanhar os pedidos que chegam à função. Ver 5.4.

### 5.3 Agentes falsificados, e como verificar

O nome no `User-Agent` escreve-o quem faz o pedido. Nos registos do destaque.ai, as 27 visitas "ChatGPT-User" são quase todas pedidos a `/.env`, `/.git/HEAD`, `/@fs/.../.aws/credentials` ou `/wp-config.php`, ou seja, varrimentos de vulnerabilidades com o nome do agente da OpenAI. O mesmo acontece com o "Googlebot" (19 visitas, a maioria a `/.env`, `/actuator/heapdump` e `/vercel.json`) e com o "Bingbot" (18, com `/gcp-credentials.json` e `/terraform.tfvars`).

Cada fornecedor publica uma forma de verificar [D]:

| Fornecedor | Lista ou método |
|---|---|
| OpenAI | `openai.com/searchbot.json`, `openai.com/chatgpt-user.json`, `openai.com/gptbot.json`, `openai.com/adsbot.json`. O ChatGPT agent assina os pedidos com HTTP Message Signatures (RFC 9421), `Signature-Agent: "https://chatgpt.com"`, com as chaves em `chatgpt.com/.well-known/http-message-signatures-directory` |
| Anthropic | `claude.com/crawling/bots.json`. Só cobre os robôs de recolha: o `Claude-User` verdadeiro foi visto a 9 Nov 2026 a partir de `160.79.106.0/24` (Google Cloud), fora da lista, portanto fora da lista não prova impostor neste agente |
| Perplexity | `perplexity.ai/perplexitybot.json`, `perplexity.ai/perplexity-user.json` |
| Google | DNS inverso para `googlebot.com` ou `google.com` e confirmação direta; listas `common-crawlers.json` (era `googlebot.json` até Nov 2026), `special-crawlers.json`, `user-triggered-fetchers.json`, `user-triggered-fetchers-google.json`, `user-triggered-agents.json` |
| Microsoft | DNS inverso para `search.msn.com`; ferramenta "Verify Bingbot" no Bing Webmaster Tools |
| Apple | `search.developer.apple.com/applebot.json` |
| Meta | Sem lista em JSON. A documentação (Meta Web Crawlers) manda verificar contra as rotas anunciadas pelo AS32934; o RIPEstat devolve-as em JSON (`stat.ripe.net/data/announced-prefixes/data.json?resource=AS32934`, 564 prefixos a 8 Nov 2026) |
| Amazon | DNS inverso: o nome do IP acaba em `crawl.amazonbot.amazon` e volta ao mesmo IP pelo DNS direto (developer.amazon.com/amazonbot) |
| Common Crawl | `index.commoncrawl.org/ccbot.json` |
| Brave | Sem agente próprio anunciado, segundo a Brave; o canário identificou-o pelo ASN 24940 |
| xAI, Mistral, DeepSeek, ByteDance | Nada publicado |

Três regras para quem implementa a verificação [M]: "não consegui verificar" (sem IP, lista em baixo, DNS sem resposta) nunca conta como falso; um IP privado, de loopback ou partilhado é o de um proxy e não o do robô, e fica por verificar; e quase todas as visitas de um fornecedor a darem falso não é uma vaga de impostores, é o IP errado (uma CDN à frente do site) ou a lista mudada.

Uma linha de registo só conta como visita de um fornecedor se o IP estiver na lista dele, ou passar o DNS inverso. Sem o IP guardado, a contagem por nome de agente é um teto e não uma medição.

### 5.4 Os limites de um registo por *log drain*

Um site alojado numa plataforma com CDN (Vercel, Netlify, Cloudflare) costuma ler os registos por um *log drain*. Ao rever o do destaque.ai (Vercel), a 8 Nov 2026, encontrámos três limites que valem para qualquer auditoria a registos e que limitam o que se pode afirmar com eles:

1. **Um coletor pode recusar em silêncio precisamente as visitas verdadeiras.** O `Googlebot` aparecia 19 vezes em quatro meses e meio, a maioria falsificadas, num site que o AI Overviews e o AI Mode citam. A hipótese inicial era a cache da CDN [I]; a causa medida foi outra [M]. O registo do destaque.ai não vinha do *log drain* mas de um aviso enviado pelo próprio site, e o recetor recusava (400) todo o aviso com o campo `referer` a `null`. Os robôs verdadeiros não mandam `Referer`; os varrimentos forjam-no. Resultado: só entravam os impostores, e quase nenhum robô verdadeiro. Corrigido a 8 Nov 2026. A regra que fica: antes de ler uma ausência no registo, mandar um pedido de teste com o agente de um robô e sem `Referer`, e ver se chega à base. A cache da CDN continua a ser um ponto cego possível num *log drain* (a Vercel separa as origens `static`, `lambda`, `edge` e marca `proxy.vercelCache`), por isso convém guardar a origem e o estado da cache.
2. **Sem o IP não há verificação.** Um coletor que grave caminho, método, estado, agente e referência e descarte o IP do cliente não consegue cruzar nada com as listas de 5.3. Convém guardar também a origem e o estado da cache, que respondem à pergunta do ponto 1.
3. **O agente pode vir como lista.** A Vercel documenta `proxy.userAgent` como lista (`["Mozilla/5.0..."]`). Um coletor que o trate como texto perde a linha ou cai para outros campos.

---

## 6. Protocolo de experiência canário

Adaptado de Seiden et al. (CCS 2026) para três perguntas nossas: que robô alimenta cada assistente, quanto tempo demora uma mudança, e o que a acelera. Corre só em sites próprios.

### 6.1 Montagem

1. **Páginas.** Seis páginas novas num subdomínio ou pasta do site, cada uma sobre uma entidade fictícia sem homónimos (verificado numa pesquisa antes de publicar), com três ou quatro factos verificáveis (cidade, ano, número, produto).
2. **Valores por visitante.** O servidor serve a cada visitante distinto (chave: agente, ASN e prefixo de IP) valores diferentes para cada facto, tirados de um espaço grande, com mais de 4 000 valores por facto. Regista-se pedido a pedido a hora, o IP, o ASN, o agente e os valores servidos. As páginas não podem ficar na cache partilhada da CDN (`Cache-Control: private, no-store`), senão dois robôs veem o mesmo valor.
3. **Descoberta igual para todos.** Ligações a partir de páginas já indexadas, entrada no sitemap com `lastmod`, Search Console, Bing Webmaster Tools e formulário da Brave. Sem IndexNow nesta fase.
4. **Espera de três semanas.**

### 6.2 Medição

1. **Perguntas.** Por entidade, duas perguntas fixas, uma que pede para pesquisar ("procure na internet informação sobre X, de Y") e uma de recordação. As mesmas perguntas, pela mesma ordem, todos os dias, durante 30 dias.
2. **Superfícies.** ChatGPT (aplicação e API, com e sem `external_web_access`), Claude (aplicação e API, com e sem `web_fetch`), Perplexity (aplicação e API), Gemini (aplicação e API), Google AI Mode e AI Overviews, Copilot e Grok. A aplicação e a API medem-se em separado, porque o canário original usou sobretudo API.
3. **Atribuição.** Um valor que aparece numa resposta identifica o visitante que o recebeu. Conta como prova quando aparecem dois ou mais valores do mesmo visitante, ou o mesmo valor em respostas de dias diferentes.

### 6.3 Fases, depois da linha de base

| Fase | Duração | O que muda | Pergunta que responde |
|---|---|---|---|
| A | 3 semanas | Nada | Que robô alimenta cada assistente |
| B | 4 semanas | Muda-se um facto nas seis páginas no dia D, com valores novos por visitante. Em três páginas, IndexNow, inspeção de URL no Search Console e formulário da Brave no dia D. Nas outras três, nada | Latência por motor, e se os aceleradores a encurtam |
| C | 2 semanas | Três páginas offline (410), três com `Disallow` para todos | Quanto tempo a cache mantém o conteúdo depois de retirado |

Por motor, medem-se quatro coisas: a hora da primeira recolha de cada robô depois de D, a primeira resposta com o valor novo, a percentagem diária de respostas com o valor antigo, e a diferença entre páginas com e sem aceleradores.

Há também uma correlação que se faz com o histórico, sem experiência nova. Cruzam-se as visitas diárias do `OAI-SearchBot` desde junho de 2026 com as datas de publicação em produção (cada uma faz um pedido IndexNow) e com as alterações de `lastmod`. Se as rajadas não seguirem as publicações, o IndexNow não é o gatilho para a OpenAI.

A condição prévia para tudo isto é resolver os três limites de 5.4, senão a experiência herda o mesmo ponto cego. Âmbito ético: só sites próprios, entidades fictícias declaradas como tal na página, e nenhuma tentativa de mexer nas respostas sobre marcas reais.

---

## 7. O que não se sabe

1. **O que faz o `OAI-SearchBot` voltar.** Nada publicado sobre sitemaps, `lastmod`, IndexNow ou o Bing como gatilhos. As nossas rajadas (18 a 20 Set, 24 e 25 Set, e 617 visitas a 6 Out) estão por explicar.
2. **Quanto tempo dura cada cache.** Nenhum fornecedor publica prazos, e a Anthropic diz só que a cache do `web_fetch` "pode mudar com o tempo".
3. **Que papel tem hoje o Bing no ChatGPT.** Nomeado em 2024, ausente das respostas no canário de 2026, presente na Deep Research segundo a Peec AI.
4. **O que o `Claude-SearchBot` alimenta.** Está documentado como indexação de pesquisa e quase ausente nos registos e no canário. Os subcontratantes novos (TurboPuffer, base de dados vetorial; Parallel Web Systems, API de pesquisa) sugerem um índice em construção [I].
5. **De onde vem a pesquisa do Grok.** Sem documentação. O canário sugere resultados da Google por intermediário e visitas com agentes de navegador genéricos.
6. **Se o JavaScript é executado** pelo `OAI-SearchBot`, pela Brave e pelo `PerplexityBot`. A regra prudente continua a ser o HTML completo servido pelo servidor.
7. **O tamanho das passagens e os modelos de vetores** em todos os motores, com o Perplexity como exceção parcial.
8. **Se a aplicação e a API leem o mesmo índice.** A OpenAI documenta uma opção de cache na API que a aplicação não expõe, e nada diz que a aplicação use o mesmo caminho.

---

## 8. O que esta pesquisa corrigiu nas outras referências (8 Nov 2026)

| Ficheiro | O que dizia | O que passou a dizer |
|---|---|---|
| `frameworks.md` §2, introdução | Bloquear os agentes em tempo real tira a marca do assistente | Quem tira a marca das respostas com pesquisa é o bloqueio do robô de **indexação** (`OAI-SearchBot`, `PerplexityBot`, `Googlebot`, `Bingbot`, e o `Googlebot` também para a Brave e, por ela, para o Claude) |
| `frameworks.md` §2, tabela da OpenAI | `ChatGPT-User`: "Removes site from real-time ChatGPT browsing" | Bloquear o `ChatGPT-User` afeta as ações pedidas pelo utilizador; a presença nas respostas com pesquisa depende do `OAI-SearchBot` (texto da OpenAI) |
| `frameworks.md` §2, Brave | (não existia) | A Brave não recolhe o que o `Googlebot` não pode recolher; bloquear o `Googlebot` tira a marca do Claude |
| `frameworks.md` §5 | ChatGPT Search: "Bing index + OpenAI crawl"; "Web IQ currently powers both Microsoft Copilot and OpenAI's ChatGPT Search" | Índice e cache próprios da OpenAI para o texto; terceiros para descobrir e ordenar, com peso por medir. A afirmação sobre o Web IQ não tem fonte primária |
| `engine_playbooks.md`, `chatgpt` (PT e EN) | "A pesquisa corre sobre o índice Bing"; "Bing (...) é o índice que a pesquisa do ChatGPT usa" | A cópia da OpenAI é a que entra na resposta; o Bing Webmaster Tools e o IndexNow continuam a valer para o Copilot e possivelmente para a descoberta no ChatGPT |
| `models.md`, OpenAI, Microsoft, Anthropic, Perplexity, xAI | Bing como índice do ChatGPT; agentes de utilizador como "real-time fetch" sem mais | A origem documentada e medida de cada motor, com remissão para este ficheiro |

---

## 9. De onde vêm os números do destaque.ai

Os números próprios deste ficheiro saem de duas fontes, lidas a 8 Nov 2026:

- **Os registos do servidor do site** (Vercel, *log drain*), contados por nome de agente entre junho e novembro de 2026. São tetos e não medições verificadas, pelos limites de 5.3 e 5.4.
- **As respostas medidas pelo Periscopy**, o produto de medição da destaque.ai, em modo com pesquisa. A primeira resposta com "Periscopy" conta só perguntas que não contêm a palavra. As respostas do Perplexity que citam `/tracker` ou `/sobre` sem o nome novo foram lidas uma a uma.

As datas das respostas recolhidas na aplicação de cada assistente são as da nossa recolha, e a recolha não é diária. Dão um teto à latência, e não o valor exato.

---

## 10. Fontes

Primárias, lidas diretamente a 8 Nov 2026 salvo indicação em contrário:

- OpenAI, *Overview of OpenAI Crawlers*: https://developers.openai.com/api/docs/bots
- OpenAI, *Web search* (Responses API, `external_web_access`, `sources`, `open_page`, `find_in_page`): https://developers.openai.com/api/docs/guides/tools-web-search
- OpenAI, *Introducing Lockdown Mode and Elevated Risk labels in ChatGPT*, 13 Fev 2026: https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/ (recusa leitura automática; conteúdo lido em The Decoder, 7 Jun 2026, https://the-decoder.com/chatgpts-new-lockdown-mode-lets-you-disable-web-access-and-more-to-protect-sensitive-data-from-prompt-injection/)
- OpenAI, *ChatGPT agent allowlisting* (HTTP Message Signatures): https://help.openai.com/en/articles/11845367-chatgpt-agent-allowlisting (recusa leitura automática; conteúdo lido em resultados de pesquisa)
- Anthropic, *Does Anthropic crawl data from the web*: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Anthropic, *Web search tool*: https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool
- Anthropic, *Web fetch tool* (cache, `use_cache`, sem JavaScript, robots.txt): https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool
- Anthropic, lista de subcontratantes: https://trust.anthropic.com/subprocessors (página dinâmica, não lida; entradas citadas por tofubofu.com, 29 Out 2026, https://tofubofu.com/blog/what-search-engine-does-claude-use, e pela TechCrunch, 21 Mar 2025, https://techcrunch.com/2025/03/21/anthropic-appears-to-be-using-brave-to-power-web-searches-for-its-claude-chatbot/)
- Perplexity, *Perplexity Crawlers*: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Perplexity Research, *Architecting and evaluating an AI-first Search API*, 25 Set 2025: https://www.perplexity.ai/hub/blog/architecting-and-evaluating-an-ai-first-search-api
- Perplexity, *Introducing the Perplexity Search API*, 25 Set 2025: https://www.perplexity.ai/hub/blog/introducing-the-perplexity-search-api
- Google, *Google's common crawlers* (`Google-Extended`, fundamentação no Gemini; atualizado a 30 Out 2026): https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- Google, *User-triggered fetchers*: https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers
- Google, *AI features and your website*: https://developers.google.com/search/docs/appearance/ai-features
- Google, *Guide to Google Search ranking systems* (passage ranking; atualizado a 10 Dez 2025): https://developers.google.com/search/docs/appearance/ranking-systems-guide
- Google, *Ask Google to recrawl your URLs* (atualizado a 10 Dez 2025): https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Google, *Build and submit a sitemap* (`lastmod`; atualizado a 8 Jul 2026): https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google, *Crawl budget management* (popularidade, desatualização; atualizado a 22 Jul 2026): https://developers.google.com/crawling/docs/crawl-budget
- Google, *URL context* (API Gemini, cache de índice e leitura ao vivo): https://aistudio.google.com/docs/url-context
- Microsoft, *Data, privacy, and security for web search in Microsoft Copilot*, 29 Out 2026: https://learn.microsoft.com/en-us/copilot/microsoft-365/manage-public-web-access
- Bing Webmaster Blog, *Keeping Content Discoverable with Sitemaps in AI Powered Search*, Fabrice Canel e Krishna Madhavan, 31 Jul 2025: https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search
- Bing Search Blog, *Announcing Microsoft Web IQ*, Knut Risvik, 2 Jun 2026: https://blogs.bing.com/search/June-2026/Announcing-Microsoft-Web-IQ ; página do produto: https://webiq.microsoft.ai/
- IndexNow, FAQ: https://www.indexnow.org/faq
- Brave, *Brave Search crawler*: https://search.brave.com/help/brave-search-crawler
- xAI, *Web search tool*: https://docs.x.ai/developers/tools/web-search
- Vercel, *Log Drains Reference* (atualizado a 11 Set 2026): https://vercel.com/docs/drains/reference/logs

Estudos e experiências:

- Seiden, Ren, Zhang, Kim, Liu, Wenger, *Identifying AI Web Scrapers Using Canary Tokens*, arXiv 2605.13706 v2, 3 Set 2026, CCS 2026: https://arxiv.org/abs/2605.13706 (PDF lido; 20 sites, 22 assistentes, consultas de março a abril de 2026, a maioria por API)
- Botify (Chris Long), *OpenAI Has Tripled Their Crawl of the Web*, 23 Abr 2026: https://www.botify.com/blog/openai-tripled-web-crawl
- Peec AI (Tomek Rudzki), *ChatGPT built its own search index*, 4 Set 2026: https://peec.ai/blog/chatgpt-built-its-own-search-index (fonte única, e a Peec AI vende uma ferramenta de visibilidade)
- Semrush (Tushar Pol), *How Fast Do AI Search Platforms Cite New Content*, 10 Dez 2025: https://www.semrush.com/blog/how-fast-do-ai-search-platforms-cite-new-content/
- Search Engine Land, *OpenAI using SerpApi to scrape Google results* (sobre a notícia da The Information, Ago 2025): https://searchengineland.com/openai-chatgpt-serpapi-google-search-results-461226 (secundária)
- Search Engine Journal, *Microsoft Web IQ Gives AI Agents Bing Grounding APIs*: https://www.searchenginejournal.com/microsoft-web-iq-gives-ai-agents-bing-grounding-apis/577736/

---

## 11. Manutenção

Este ficheiro muda quando um fornecedor publica como lê a web (um robô novo, um índice declarado, um prazo de cache), quando sai um estudo com método descrito sobre a origem do texto das respostas, ou quando a experiência canário de 6 der resultados. Cada mudança de substância regista-se no `methodology-changelog.md` e, se contradisser o que está em `frameworks.md`, `engine_playbooks.md` ou `models.md`, corrige-se lá no mesmo commit.

Última revisão: 8 Nov 2026 (criação).
