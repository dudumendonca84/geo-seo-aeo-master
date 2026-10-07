# Gap → action mapping (SINAL)

> **Consumidores:**
> 1. **Deck Builder** (`src/lib/llm/synthesize-deck.ts`, futuro Step 12): lê este ficheiro e mapeia findings do audit + SINAL scan para ações fundamentadas com mecanismo, esforço e impacto típico.
> 2. **Operador humano**: quick reference quando escreve manualmente um diagnóstico.
>
> **Raw URL para Deck Builder:**
> `https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/gap_action_mapping.md`

**Last refresh:** 29 May 2026: reconciliado para a taxonomia de SKILL.md § "Scope of the methodology: holistic" (DIMENSÃO 5 = Social & community signals, 6 = Authority signals on site / E-E-A-T; Measurement→7, Positioning→8; cadência editorial movida para DIMENSÃO 2; UX/engagement passa a pattern transversal). Roadmap: alimentar com patterns reais dos engagements à medida que a destaque.ai acumula clientes (loop 3: `destaque-ai-ops/learnings/` → synthesis-weekly Routine → updates aqui).

---

## Como usar este ficheiro

Cada padrão tem:
- **Pattern.** Sinal observável no audit ou scan (citation rate distribution, finding type, etc.).
- **Hipóteses.** Causas prováveis ordenadas por prevalência observada (com `%` quando há base empírica; sem `%` quando é judgement de practitioner).
- **Ação.** O que fazer.
- **Esforço.** Tempo/effort estimado.
- **Impacto típico.** Lift esperado e prazo, com fonte sempre que disponível.
- **Fonte primária.** Quando a hipótese tem evidência pública, citada.

Princípio SINAL: **não inventar `+X% em Y semanas` sem fonte.** Se a relação é correlacional ou indirecta, declarar.

## Regra de especificidade: nomear o sítio

**"Postar no Reddit" não é uma ação. "Responder no r/X, que alimentou 3 das 5 fontes do painel Y esta semana" é.** Toda a ação off-site (comunidade, PR, podcasts, YouTube, comparadores) nomeia o sítio exato, e o sítio vem dos dados, por esta ordem:

1. **Fontes medidas do próprio cliente.** O Tracker regista as fontes que alimentam cada resposta da categoria do cliente (grafo de fontes semanal, fontes dos painéis do carrossel, menções de comunidade recolhidas). O subreddit, o canal de YouTube, o comparador ou o fórum a recomendar é o que **já aparece a alimentar as respostas** onde o cliente devia estar: porque é aí que os motores comprovadamente vão buscar.
2. **Fontes medidas da categoria.** Se o cliente ainda não tem histórico, usar as fontes das respostas onde os concorrentes dele são citados, na mesma malha de perguntas.
3. **Benchmarks públicos** (Reddit ~47% das top citations da Perplexity, YouTube ~14%) só como fallback, sempre etiquetados como genéricos, e sempre com a nota de que a primeira semana de medição substitui o genérico pelo específico.

Formato da ação: sítio nomeado + evidência de porquê esse sítio (quantas respostas da malha ele alimentou, em que motores) + o que publicar lá. Ação off-site sem sítio nomeado é rascunho, não entra em narrativa nem em relatório.

---

## Regra de verificação: o endereço que serve, e o que já lá está

**Uma ação que manda fazer o que já está feito gasta o crédito do produto
inteiro.** É pior do que não dizer nada: quem conhece o sítio percebe em
dez segundos que ninguém foi ver, e passa a ler o resto com a mesma
desconfiança.

Nasce de um caso medido (D&S Smart Housing, 30 Set 2026). O produto
escreveu, com severidade alta:

> A homepage recusa a recolha com 403. Confirma com quem aloja o site por
> que motivo a homepage devolve 403 a pedidos fora do browser, e liberta
> os agentes de recolha dos motores (GPTBot, OAI-SearchBot, ClaudeBot,
> PerplexityBot, Google-Extended) no robots.txt e na firewall.

Verificado a seguir, três voltas e três agentes: o `www.dssmarthousing.com`
devolveu **200 com 61 125 bytes ao GPTBot, nove vezes em nove**, e o
`robots.txt` dele é `User-Agent: *` sem um único `Disallow`. Não havia
nada a libertar. O 403 era do domínio sem `www`, que é outro endereço e
não é onde o sítio vive.

### As quatro perguntas antes de escrever uma ação técnica

1. **Que endereço serve o sítio?** `exemplo.pt` e `www.exemplo.pt` são
   dois nomes distintos para quem vai lá buscar, e podem ter
   comportamentos opostos. Um 403, um 404 ou um 503 num deles não é uma
   afirmação sobre o outro. A ação nomeia o endereço medido, com o `www`
   escrito ou não escrito conforme o que foi testado.
2. **Isto já está feito?** Antes de mandar publicar `robots.txt`, sitemap,
   `llms.txt`, schema ou redirecionamento, ver se existe. "O scan não
   encontrou" é o que o scan viu, não é um facto sobre o sítio: pode ser
   o endereço errado, uma convenção diferente
   (`/sitemaps.xml` em vez de `/sitemap.xml`) ou uma recolha falhada.
3. **O facto e a causa são a mesma afirmação?** Quase nunca. "O site é
   citado em 5 de 124 respostas" é medição. "Porque a homepage recusa
   robôs" é uma dedução, e é a parte que decide o trabalho que o cliente
   vai fazer. Uma causa que não se verificou declara-se como hipótese, ou
   fica de fora.
4. **A fotografia em que me baseio é de quando?** Uma ação é escrita a
   partir de um contexto que foi montado num instante anterior. Se o scan
   entretanto correu outra vez, o número que está à frente é velho. Um
   scan cujo resultado contradiz outro do mesmo dia é motivo para não
   escrever a ação, não para escolher um deles.

### O caminho por onde se mede faz parte da medição

**Uma medição feita através de um proxy, de uma VPN ou de uma rede de
empresa não é uma medição do site: é uma medição dos dois.** E o erro que
isso produz não parece erro nenhum, parece um sintoma do outro lado.

Do mesmo caso, e é a parte cara. As primeiras leituras do apex saíram
assim:

| | pelo proxy da sessão | por ligação direta |
|---|---|---|
| `https://dssmarthousing.com` | 200, 403 e ligação recusada, sem padrão | **403 em 12 de 12** |
| `https://hosts.dssmarthousing.com` | falha no aperto de mão TLS | **503 em 7 de 7** |

Com o primeiro par escrevi "resposta errática, servidor partido". Com o
segundo, a verdade é outra e é pior: o endereço está morto de forma
determinística, para toda a gente, e isso é uma ação com prazo. O
"errático" era o proxy a entrar e a sair do caminho.

**A regra:** um número sobre o comportamento de um servidor mede-se pela
ligação mais curta que houver, e a via usada declara-se junto do número.
Quando só há uma via possível e ela é indireta, o resultado não diz
"o site faz X", diz "por esta via o site fez X".

**E o sinal de que a via está a mentir é a incoerência.** Resultados
diferentes para o mesmo pedido repetido, um erro de TLS num sítio com
certificado válido, ou um código que não faz sentido para o servidor em
causa. Nenhuma dessas coisas se reporta antes de ser repetida por outro
caminho. Um servidor a sério erra de forma aborrecida e repetida; a
variedade é quase sempre nossa.

**O caso que fecha o assunto:** provei que aquele proxy mentia num
endereço e continuei a citar, do endereço ao lado, números medidos por
ele. Depois de se apanhar a via a mentir uma vez, **todas as medições
feitas por ela voltam a zero**, e não só a que foi apanhada.

### O que é bloqueio a sério, e como se distingue

Bloqueio é o endereço que serve o sítio recusar **o agente de um motor**
enquanto serve um browser. Prova-se com o mesmo pedido em dois agentes,
repetido, e declara-se com os dois resultados lado a lado. Não são
bloqueio:

| Sintoma | O que é quase sempre |
|---|---|
| 403 no apex e 200 no `www` | redirecionamento em falta ou mal configurado |
| resposta errática (200, 403, timeout) sem relação com o agente | **primeiro, a via por onde se mediu**; depois de confirmada por ligação direta, servidor partido e não política |
| 503 com erro entre a rede de entrega e a origem | o sítio está em baixo, e é urgência e não GEO |
| 404 no `/sitemap.xml` com `/sitemaps.xml` a funcionar | convenção diferente, e o `robots.txt` diz qual é |
| `Disallow` só em `/admin`, `/cart`, `/checkout` | normal, e não afeta o que interessa |

E o inverso tem o mesmo peso: quando o acesso está bom e a marca não é
citada, **dizê-lo**. "O `robots.txt` está aberto e o GPTBot recebe a página
inteira: o que falta não é acesso, é conteúdo" vale mais do que a ação
que não se escreveu, porque fecha a porta ao primeiro palpite de toda a
gente e manda o esforço para onde ele rende.

## Onde dá para conseguir presença, e onde não dá

Lido pelo Tracker em runtime (`lib/skill/presenca.ts`), para o bloco
**"Meios que a IA cita muito · a tua marca não está lá"** e para as ações
off-site que a Routine escreve.

**Porquê aqui e não em código** (1 Out 2026, founder: *"a skill funciona
como um super cérebro, nada pode passar dessa forma, tem que validar tudo"*
e, a seguir, *"tudo tem que passar pela skill"*).

O bloco propôs, com severidade alta, **"Conseguir presença em
`developers.google.com`"**, porque esse domínio é citado em 45 respostas da
categoria e a marca nunca aparece ao lado. O facto está certo e a ação é
impossível: aquilo é a documentação da própria Google. E o caminho que a
produziu não toca na skill nem na Routine: é SQL, uma contagem de domínios
e uma concatenação de texto. **O cérebro nunca viu aquela frase.**

A `## Regra de especificidade` deste ficheiro já manda nomear o sítio exato
e tirá-lo dos dados. Faltava-lhe a metade seguinte, que é esta: **o sítio
nomeado tem de ser um sítio onde publicar seja possível.**

### A regra

Antes de uma ação dizer "consegue presença em X", X passa por quatro
perguntas, por esta ordem. A primeira que responda sim recusa o alvo.

| Pergunta | Se sim |
|---|---|
| É a casa do próprio fornecedor (documentação, suporte, página de produto)? | **primeira parte**, não há lá presença a conseguir |
| Serve outra coisa que não publicar (arquivo, validador, especificação, tradutor)? | **infraestrutura** |
| É a Wikipédia ou a Wikidata? | **tem dono na dimensão entity**, com regras próprias |
| É o sítio de um concorrente? | **concorrente** |

E a regra ao contrário, que é o ponto todo: **tudo o resto passa.** Uma
plataforma de reservas, um comparador, um guia de categoria, um fórum, um
meio de imprensa, o Medium, o Reddit, o GitHub. Este filtro é sobre ser
POSSÍVEL, não sobre valer a pena: se vale a pena é juízo, e é o dos
padrões deste ficheiro.

### Primeira parte

Uma entrada **sem ponto** é uma etiqueta e apanha o nome em qualquer
posição e qualquer país: `google` apanha `developers.google.com`,
`translate.google.com.br` e `blog.google`, e não apanha `notgoogle.com`
nem `googleblog.net`. Uma entrada **com ponto** é uma raiz e apanha os
subdomínios dela.

| entrada | porquê |
|---|---|
| google | docs, tradutor, scholar, search, blog |
| withgoogle | campanhas da Google |
| openai | developers, help, platform |
| anthropic | support |
| claude | support |
| microsoft | learn, support, partner, adoption, pulse, news |
| bing | o motor e o blog dele |
| perplexity | docs |
| salesforce | appexchange, careers |
| outsystems | documentação de produto |
| adobe.com | etiqueta comum de mais sozinha |
| zapier.com | idem |
| monday.com | idem |
| clickup.com | idem |

### Infraestrutura

| entrada | o que é |
|---|---|
| archive.org | arquivo |
| w3.org | norma |
| schema.org | especificação |
| schemavalidator.org | validador |
| llmstxt.org | especificação |
| translate.com | tradutor |
| scribd.com | depósito de ficheiros |
| doi.org | resolvedor de identificadores |

### Tem dono noutra dimensão

| entrada |
|---|
| wikipedia |
| wikidata |

Presença lá é possível e **não é um alvo de autoridade**: é trabalho da
dimensão entity, com notabilidade e referências próprias. Propô-la aqui
convida a criar um artigo sobre si próprio, que é a maneira mais rápida de
ser eliminado (ver o item apagado de 11 Ago 2026 na lição 10 do Tracker).

### O concorrente, que é o caso mais frequente e não se lista aqui

Medido a 1 Out 2026: **seis dos oito cartões de um cliente eram o site de
um concorrente direto.** A causa não é esta tabela, é a ficha: 86% dos
concorrentes desse cliente não tinham o domínio preenchido (385 de 446;
56% noutro, 267 de 477), e sem domínio o site do rival classifica como
editorial.

Por isso a recusa por concorrente **é mecânica e corre em código**, com a
regra que o `dominioDasCitacoes` já usa ao contrário: o nome compactado
dentro do rótulo do domínio, ou uma palavra forte do nome que SEJA o
rótulo (igualdade e não conter, senão "gabriel" casava com
`gabrielgarcia.pt`). Reconhecer um nome dentro de um domínio é computação,
como a partilha de voz; o que é juízo são as três tabelas acima.

## Antes de aconselhar: o que este negócio é, e o que já está no plano

Dois blocos que agora chegam em todos os pedidos de juízo
(`generate_opportunities` e `page_recommendations`), e que mudam o
conselho mais do que qualquer padrão deste ficheiro.

### 1. O que o negócio é

Chegam `audience_type`, `is_local`, `locations` e **`page_examples`**:
três endereços reais do site, com o título.

**Os exemplos valem mais do que o rótulo.** `b2c` não distingue um
supermercado de um gestor de alojamento local, e essa distinção decidiu
duas falhas medidas:

| Medido | O conselho que saiu | Porque estava errado |
|---|---|---|
| Continente, 1894 fichas de produto (23 Set 2026) | põe `shippingDetails` no `Offer` | num supermercado a entrega decide-se no cesto, por zona e com sessão iniciada. A condição é da loja e não do artigo |
| D&S, 529 fichas de apartamento (1 Out 2026) | falta `price` e `availability` | numa estadia o preço varia com a data e a disponibilidade é um calendário. Nenhum dos dois cabe num valor |

**A pergunta a fazer antes de escrever uma ação de comércio:** o que esta
página vende tem um preço fixo, um stock contável e um envio? Se faltar
um dos três, a ação é outra:

| O que a página vende | `price` | `availability` | envio |
|---|---|---|---|
| artigo enviado (marketplace) | valor | em stock ou não | `shippingDetails` no `Offer` |
| artigo de supermercado | valor | em stock ou não | **página de entregas com `FAQPage`**, não por artigo |
| estadia, reserva, serviço com data | `priceSpecification` ou `AggregateOffer` | **não se aplica** | **não existe** |
| serviço sem preço público | faixa indicativa, ou nada | não se aplica | não existe |

Em dúvida entre duas linhas, lê os `page_examples`. Se não bastarem,
**não se abre a ação**, que é a regra de sempre deste ficheiro.

### 1b. O detalhe de um check é um FACTO, e a ação é tua

Desde 1 Out 2026 o produto deixou de escrever o conselho dentro do
detalhe. O que chega em `page_recommendations` e na Saúde do site é o
que FALTA na página, verificado nela: "sem `shippingDetails` nem
`hasDeliveryMethod` no `Offer`", "sem atributo `lang` no `<html>`",
"sem `sameAs`".

Isso é deliberado e muda o teu trabalho: **o facto é mecânico e já vem
feito; escolher a ação é o que te cabe**, e é por isso que o pedido
passou a trazer o que o negócio é. O detalhe não diz, e não deve dizer,
"põe `shippingDetails`" nem "declara pt-PT": a primeira está errada num
supermercado e a segunda num cliente inglês.

Duas consequências práticas:

- **Não repitas o facto como se fosse a ação.** "Adicionar
  `shippingDetails`" não é um plano; é o mesmo check escrito outra vez.
  A ação diz onde a condição vive neste negócio e quem a escreve.
- **Um facto sem ação certa não vira ação.** Se os `page_examples` não
  chegarem para decidir, diz-se que não chega, pela regra de sempre
  deste ficheiro.

### 2. O que já está no plano

Chega `existing_plan`: os títulos das ações, a dimensão, o estado e desde
quando.

**Serve para não propor a mesma coisa por outras palavras**, e isso não é
teórico. Medido a 1 Out 2026, antes de este bloco existir: a Congruent
tinha o Wikidata proposto duas vezes (27 Ago e 28 Set) e o Clutch duas
vezes; a destaque.ai tinha o Wikidata, a prova do desconto, o "audit
técnico" e o "como avaliar uma agência" cada um duas vezes. Oito ações de
conteúdo com repetições lá dentro **lêem-se como lista genérica**, mesmo
quando cada uma é boa à parte.

### 2a. O nome do produto, no que o cliente lê

**O produto chama-se Periscopy** (rebranding de "Visibility Tracker",
confirmado pelo founder a 21 Set 2026). "Tracker" e "Visibility Tracker"
são nomes internos: aparecem neste ficheiro, no código e no schema, e
continuam lá. **Em texto que o cliente lê** (título, porquê, ação, peça
preparada, `why`), escreve-se **Periscopy**. A 1 Out, três ações da
destaque.ai mandavam "fechar com a oferta do Tracker", que é um produto
com um nome que já não existe para quem o compra.

### 2b. E REVALIDA-SE, uma por uma

Não chega não repetir. Uma ação aberta há cinco semanas pode já estar
feita sem ninguém a ter marcado, ou ter deixado de fazer sentido porque a
medição mudou. Mostrá-la como trabalho por fazer gasta o mesmo crédito
que um conselho errado.

Cada aberta chega com `id`, `source`, `evidence` (a medição que a
produziu), `revalidated` (quando foi revalidada pela última vez) e, desde
2 Out 2026, **o texto inteiro que o cliente lê**: `rationale` (o porquê),
`action`, `deliverable` (a peça preparada) e `last_note` (a nota da
revalidação anterior, ou o aviso de que a proposta de valor de onde a ação
nasceu foi apagada). **Lê o texto, não só o título.** Revalidar pelo
título deixou passar, a 1 Out, uma ação com "19 de 54" no título e "21
respostas" no porquê.

**Devolve um veredicto por cada uma**, no campo `revalidations`, ao lado
dos `items`. Não é opcional: desde 2 Out 2026 o servidor **recusa o
pedido inteiro** se faltar o veredicto de uma aberta sem `check_key`, e
devolve os ids em falta. Nesse dia a corrida criou uma ação nova e não
revalidou nenhuma das 16 abertas. Não ter nada a mudar é `keep`:

```json
{ "id": "<o id que veio>", "verdict": "keep|close|drop|rewrite",
  "why": "a frase que o cliente vai ler",
  "title": "...", "action": "...", "rationale": "...", "deliverable": "..." }
```

| Veredicto | Quando | O que escrever no `why` |
|---|---|---|
| `keep` | o facto que a gerou continua verdadeiro | o facto de hoje, com o número |
| `close` | a medição mostra que **está feito** | o que mudou e desde quando |
| `drop` | **não foi feito** e deixou de fazer sentido: duplica outra aberta, a razão desapareceu, ou o cliente desistiu do que a originou | porque sai, e se duplica, qual fica |
| `rewrite` | o trabalho continua a fazer sentido e o texto já não | o que mudou; manda **todos** os campos que mudam (`title`, `action`, `rationale`, `deliverable`) |

Oito regras duras:

- **O `why` é para o cliente ler**, e é o que explica uma ação que sai do
  plano sem ele lhe tocar. Um veredicto sem `why` é recusado pelo
  servidor: uma ação que desaparece sem explicação é um mistério.
- **`close` precisa de um facto, não de uma impressão.** "Já deve estar
  feito" não fecha nada. Sem facto, é `keep`.
- **`close` é só para o que foi FEITO.** Vai para a lista das Feitas do
  cliente e conta como trabalho entregue. Uma duplicada, ou uma ação cuja
  razão desapareceu, não foi feita por ninguém: é `drop`, e sai para as
  dispensadas. Na primeira passagem (1 Out 2026) duas duplicadas foram
  fechadas com `close` e apareceram nas Feitas da destaque.ai, que é o
  cliente a ler que fez trabalho que nunca fez.
- **Um número muda em todos os campos onde aparece.** Se a medição de
  hoje é outra, o `rewrite` leva o título, o porquê e a peça com o número
  novo. Reescrever só o título deixa o cliente com dois números no mesmo
  cartão, e um cartão com dois números diz-lhe que nenhum é de confiança.
- **Texto de uma campanha que já não existe é texto velho.** Se o
  `last_note` diz que a proposta de valor foi apagada, ou se o texto manda
  "fechar com a oferta", fala de um desconto, ou remete para "a ação 1"
  de uma campanha que não está no pedido: `rewrite` sem a campanha quando
  o trabalho continua a valer por si (um guia técnico continua útil sem
  desconto), `drop` quando a ação só existia por ela.
- **Duas abertas que respondem à mesma pergunta são uma.** Fica a mais
  completa (a que tem a peça preparada mais útil); a outra é `drop`, com o
  `why` a dizer qual fica.
- **As que trazem `check_key` já foram revalidadas em código** antes de
  este pedido existir: o scan corre, o check passa, a ação fecha-se
  sozinha. Se uma delas chega aqui, é porque o facto continua verdadeiro.
  Não a feches por teres outra opinião sobre o check.
- **O `id` é o que veio.** Um id que não esteja na lista é recusado.

### 2d. Antes de mandar publicar, vê o que o site já tem

Chega `site_pages`: as páginas que a Saúde do site leu no site do
cliente, com o caminho e o título (`total` diz quantas são, `omitted`
quantas ficaram de fora do tecto; as fichas de produto vão para o fim).

**Uma ação que manda publicar uma peça que já existe é um conselho
errado**, e o cliente vê-o na primeira leitura. A 2 Out 2026 o plano da
destaque.ai mandava publicar "o que esperar dos primeiros 90 dias com
uma consultora", "consultora contra equipa interna" e "como avaliar uma
agência", e o blogue tinha as três (`/blog/primeiros-90-dias-consultora-geo`,
`/blog/consultora-geo-vs-equipa-interna`,
`/blog/escolher-consultora-geo-saas-b2b-portugal`).

As regras:

- **Procura no `site_pages` antes de escrever "publicar".** Pelo
  assunto, não pela palavra exata: um título diferente pode responder à
  mesma pergunta.
- **Se existe, a ação é reforçar essa página, pelo endereço.** E o
  trabalho muda: a peça não falta, falta ser lida e citada. Lê a página
  antes de dizer o que lhe falta (a resposta direta no primeiro
  parágrafo, o nome da marca na frase que responde, a data, o autor, os
  dados próprios, as ligações a partir das páginas que os motores já
  leem). "Reforçar" sem dizer o quê é tão genérico como "publicar".
- **Na revalidação também.** Uma aberta que manda publicar o que o
  `site_pages` mostra publicado é `rewrite` para reforçar essa página,
  ou `drop` se a página já faz o que a ação pedia. Não é `close`: ninguém
  fez o trabalho por causa da ação.
- **`omitted` maior que zero** quer dizer que a lista não está inteira.
  Não encontrar uma página na lista, nesse caso, não prova que ela não
  existe: diz-se "não a encontrámos nas páginas lidas", não "não existe".

### 2c. E uma ação do SCAN declara de que check nasceu

Quando escreves uma ação com `source: "site_scan"`, acrescenta
`check_key` com a chave que veio no `open_gaps` do pedido (`llms_txt`,
`offer_shipping`, `schema_org`). É o que permite fechá-la sozinha no scan
seguinte, sem passar por aqui outra vez. Uma chave que não venha no
pedido é recusada, portanto não a inventes.

As regras:

- **Uma ação que já está no plano por fazer não se repete.** Nem com
  outro título, nem com outro ângulo. Se houver matéria nova sobre ela,
  isso é um comentário à ação que existe, não uma ação nova.
- **Uma que já foi feita também não.** Repetir trabalho que o cliente
  acabou de fazer gasta a mesma confiança que repetir o que não fez.
- **Uma ação nova que seja o passo seguinte de uma que existe diz-o no
  texto**, e nomeia a anterior. "Depois do item Wikidata estar criado,
  ligar o `sameAs`" é uma ação; "Completar o `sameAs`" solta, ao lado de
  "Criar o item Wikidata", é a mesma coisa partida em duas.
- **O plano tem um tamanho útil.** Acima de oito ações abertas por
  dimensão, ninguém as lê. Preferir aprofundar uma que existe a
  acrescentar a nona.

---

## Quem ganha: o jogo do adversário

Bloco `context.competitive` do `generate_opportunities` (6 Out 2026). O
resto do pacote mede a marca; este mede quem a vence. Sem ele o plano
conserta lacunas da marca e nunca diz como o concorrente ganha, que foi a
queixa do founder nesse dia: *"não vi nenhum pulo do gato"*.

Três listas, todas da semana mais recente e sem as perguntas branded:

- `perguntas_onde_outros_ganham`: por pergunta, quem foi escolhido, quantas
  vezes, e as páginas que o motor leu nas respostas em que escolheu um
  concorrente e não a marca (`paginas_que_sustentam`). Ordenadas pela
  pergunta onde a marca mais perde.
- `escolhidos_na_semana`: quem é escolhido mais vezes, no total.
- `leu_o_site_e_escolheu_outro`: respostas que leram uma página da marca e
  escolheram outro a seguir, com a página lida.

**Como se lê, e o que se faz:**

1. **As três primeiras perguntas pedem uma ação cada, OBRIGATORIAMENTE**
   (7 Out 2026): ou uma ação, ou a decisão explícita de não a disputar,
   com o porquê. O servidor recusa o plano sem isto (`disputas[]`). Uma
   ação que responde a uma pergunta perdida vale mais do que três que
   consertam um sinal geral.
1b. **A gravidade segue o que está em jogo.** Uma ação sobre uma pergunta
   onde os outros são escolhidos muitas vezes, e a marca nenhuma, é `high`;
   o número de respostas em jogo vai no `evidence`. Uma ação geral sem
   pergunta nem motor não passa de `medium` só por ser fácil.
2. **A página que sustenta diz o tipo de jogo.** Lê o endereço e o título:
   é uma página de serviço que afirma ("isto é o que fazemos"), a página de
   uma pessoa (`/consultor-geo/` com o nome dela), a de uma cidade
   (`/seo-porto/`), a de preço (`/quanto-custa-...`)? A ação nomeia a
   página do concorrente e o equivalente que a marca tem ou não tem
   (`site_pages`), e diz o que muda. Nunca se manda copiar texto.
3. **Quando os escolhidos são pessoas**, e a pergunta pede "um consultor",
   o jogo é de entidade-pessoa: a página da pessoa responsável, com o nome
   no título, `Person` com `sameAs`, e presença dela onde os motores leem.
   Se a marca não tem rosto público, isto é uma decisão do cliente e não
   uma ação: diz-se em `blocked_on`, com o número de respostas em jogo.
4. **Ler o site e escolher outro** quer dizer que a página da marca serviu
   de critério para recomendar a concorrência. Quase sempre é um guia
   neutro ("como escolher", "quanto custa") sem a regra de escolha da
   própria marca. A ação reescreve o fecho dessa página: para quem a marca
   é a opção certa e para quem não é. Nunca um superlativo que não se
   prova.
5. **Território que a marca não serve não se disputa.** Uma cidade onde
   não opera ou um segmento que não atende: diz-se que se deixa, e porquê.
6. **Amostra pequena é amostra pequena.** Menos de três escolhas numa
   pergunta não é padrão; menciona-se, não se constrói uma ação em cima.

---

## O que já funcionou: o efeito das ações feitas

Bloco `context.what_worked` do `generate_opportunities` (7 Out 2026). O
Tracker mede sozinho, em código, o número antes e quatro semanas depois de
cada ação feita: na pergunta que a ação declarou, no motor, ou, sem nada
declarado, na marca toda. É a parte da aprendizagem que vem do nosso
próprio trabalho, e não do que o mercado diz.

**Como se lê:**

1. **Uma classe com `pode_citar` (3 casos medidos e limpos) cita-se** na
   ação nova da mesma classe: "esta classe de ação moveu a citação X pp
   em N casos". Abaixo de 3, menciona-se como indício, nunca como prova.
2. **Uma classe que não mexe deixa de ser a primeira proposta.** Se três
   casos de uma classe ficaram iguais ou desceram, a próxima ação para o
   mesmo problema tenta outro caminho, e diz porquê.
3. **`outras_na_janela` acima de zero não dá crédito a ninguém.** O número
   mexeu, mas mexeram outras coisas na mesma janela. Diz-se assim.
4. **`amostra_pequena` não conta como evidência.** Menos de dez respostas
   numa das medições é ruído.
5. **O escopo `marca` é o mais fraco.** Uma ação sem pergunta nem motor
   mede-se na marca toda, onde tudo se mistura. Por isso, sempre que a
   ação mira uma pergunta, declara-se `prompt`; quando mira um motor,
   `engine`. Ações gerais continuam a existir, porque nem tudo mira uma
   pergunta (entidade, preço, imprensa); essas simplesmente medem-se pior.

---

## DIMENSÃO 1: Technical foundation

### Pattern: Gemini citation 0% mas outros motores >5%

#### Hipóteses
1. **`robots.txt` bloqueia `Google-Extended`** (suspeita ~40% dos casos)
2. **Schema.org Organization incompleto ou ausente** (~35% dos casos)
3. **Conteúdo client-side rendered sem HTML útil** (~15% dos casos)

#### Ação
Verifica robots.txt para `User-agent: Google-Extended`; adiciona `Organization` JSON-LD com `name`, `url`, `logo`, `sameAs` mínimo 3 entries; se SSR/SPA, configura prerender ou SSR para Googlebot.

#### Esforço
30 min - 4h (depende da plataforma).

#### Impacto típico
Sem dado público específico para Gemini lift. Schema enriquece entity recognition em todos os motores (Princeton GEO Aggarwal et al.: entity richness é uma das 9 categorias avaliadas).

---

### Pattern: `llms.txt` ausente

#### Hipóteses
1. Não publicado por desconhecimento.

#### Ação
Publicar `/llms.txt` no root seguindo spec (Answer.AI / llmstxt.org).

#### Esforço
20 min.

#### Impacto típico
**Near-zero em citation direta** (Otterly Nov 2025: AI bots consumem `/llms.txt` em <0.5% das requests). Publica para hygiene de docs, não promete inferência lift. Se vendor blog atribui +20% citation rate a llms.txt, **flag como vendor self-interest**.

#### Fonte
Otterly server-log study Nov 2025; Reboot Online; SE Ranking ~300k domains.

---

### Pattern: Performance Lighthouse <50, LCP >4s

#### Hipóteses
1. Imagens hero não optimizadas / sem dimensions.
2. JS render-blocking.
3. Sem CDN ou origin distante do target market.

#### Ação
Image optimization (next/image, WebP/AVIF), defer non-critical JS, Cloudflare CDN com edge em LIS.

#### Esforço
4-12h.

#### Impacto típico
LCP <2.5s é threshold Google "good". Improvement direto de Core Web Vitals + impacto indirecto em organic ranking. **Não há lift direto conhecido em citation rate**: performance é hygiene, não palanca primária GEO.

#### Fonte
Google Search Quality Rater Guidelines (Sept 2025 revisão).

---

### Pattern: Schema injectado via Google Tag Manager

#### Hipóteses
1. Agência anterior "implementou schema sem tocar no site" via GTM.

#### Ação
Diagnóstico imediato: o GTM injecta por JavaScript, e os crawlers de IA
(GPTBot, ClaudeBot, PerplexityBot) NÃO executam JS: verificado em
experiência própria (19 Ago 2026) e por experiência controlada externa
(Search Engine Land, Ago 2026). O Googlebot vê; a camada de IA não.
Consequência: schema via GTM é invisível para os motores que decidem
respostas. Correção: mover o JSON-LD para o HTML servido (template,
plugin, middleware): nunca "otimizar" a camada de IA por tag manager.
Argumento comercial honesto: conseguimos mostrar ao cliente, no site
dele, que o schema pago à agência anterior nunca foi lido pela IA.

#### Esforço
Diagnóstico: minutos (fetch sem JS). Correção: depende da plataforma.

#### Fonte
Experiência própria 19 Ago 2026; Search Engine Land (experiência de 41
dias, links só-em-JS invisíveis a GPTBot/Bingbot), Ago 2026.

---

## DIMENSÃO 2: Content & topical authority

### Pattern: Sem original statistics publicadas

#### Hipóteses
1. Brand não tem dataset proprietary (early-stage).
2. Tem dados mas não publica (extração lenta, dpto. legal cauteloso).

#### Ação
Publicar 1 original-data report/quarter. Não precisa ser massivo: survey de 50 prospects, análise de logs próprios, comparison study.

#### Esforço
2-4 semanas (1 quarter recorrente).

#### Impacto típico
**Adicionar estatísticas é a alavanca single mais forte** confirmada em controlled experiment (Aggarwal et al. KDD 2024). Lift médio +30-40% em Position-Adjusted Word Count nos top motores testados.

#### Fonte
Aggarwal et al., "GEO: Generative Engine Optimization", arXiv 2311.09735 (KDD 2024).

---

### Pattern: Sem comparative content ("X vs Y", "X alternatives")

#### Hipóteses
1. Brand evita falar de concorrentes por cultura.
2. Não tem editorial focus.

#### Ação
Publicar páginas comparison vs top 3 alternatives. Honest assessment, não pitch comercial. Inclui pricing, integration matrix, when-to-choose-which.

#### Esforço
3-5 dias por página.

#### Impacto típico
Páginas comparison ranqueiam bem em comparison-intent queries (LLM intent stage `comparison`/`decision`). Direct surface area para citation em queries de buyer education.

---

### Pattern: Publicação cadence <1x/mês

#### Hipóteses
1. Sem editorial calendar.
2. Recursos limitados.
3. Foco em product, não em content.

#### Ação
Editorial calendar trimestral. Mínimo 2 publicações de qualidade/mês. Distribuição via LinkedIn, newsletter, podcast guesting.

#### Esforço
Setup 1-2 semanas; sustained 8-15h/semana.

#### Impacto típico
Cadência editorial é foundation: sem ela, as outras alavancas de conteúdo perdem força. Não é palanca isolada, é hygiene. (A secção "Scope of the methodology" do SKILL.md inclui "editorial calendar discipline" nesta dimensão.)

---

### Pattern: O motor LÊ o site e não NOMEIA a marca na resposta

Pedido do founder a 21 Set 2026: *"quero que a skill me diga, ou para algum
cliente; esse tipo de coisa quero ter na skill"*. Estava a ser encontrado à
mão, cliente a cliente, por quem calhasse reparar. Um diagnóstico que depende
de alguém reparar não é um diagnóstico.

**É o gap mais barato de fechar de toda esta dimensão**, e o mais fácil de
não ver: a marca já ganhou o difícil, que é o motor ir à página dela. O que
falta é o nome sobreviver da página para o texto da resposta. Quem lê a
resposta fica com o conselho e sem saber de quem é.

#### Como se mede

Por motor, sobre as respostas mensuráveis da semana:

| | |
|---|---|
| **lidas** | respostas cujas fontes citadas incluem um domínio da marca |
| **nomeadas** | dessas, as que têm `cited = true` (a marca aparece no TEXTO) |
| **o gap** | lidas menos nomeadas, em percentagem das lidas |

Distinguir "lida" de "citada" é o que a coluna `cited` existe para fazer:
ler a presença do domínio nas fontes e concluir que a marca foi nomeada é
o erro que esta medição existe para não cometer.

#### Quando é que isto é um achado

- **Base mínima de 10 respostas lidas** naquele motor. Abaixo disso, dois
  casos mudam a percentagem em vinte pontos e o número não diz nada.
- **Acima de 52%**, que é a referência pública abaixo. Abaixo dela, a marca
  está dentro do normal do mercado e isto não é um achado: é como a coisa é.
- Se o motor não cita fontes nenhumas, **isto não se aplica**: o problema é
  outro e está na dimensão 1.

#### Hipóteses
1. A passagem citável da página não tem o nome da marca lá dentro. O motor
   resume a ideia e a atribuição cai.
2. A página fala na primeira pessoa ("nós", "a nossa metodologia") em vez de
   se nomear.
3. O nome está no cabeçalho, no rodapé e no logótipo, que é sítio nenhum
   para quem lê o HTML por passagens.

#### Ação
Reescrever as passagens de facto para conterem o nome: *"O método SINAL da
destaque.ai cobre oito dimensões"* em vez de *"o nosso método cobre oito
dimensões"*. Uma vez por secção, na frase que carrega o facto, e não no
texto todo, que passa a ler-se como um anúncio. Nas páginas que já são
citadas, começar por essas, que são as que o motor já vai buscar.

#### Esforço
1-2h por página-pilar. Não precisa de conteúdo novo, é reescrita.

#### Impacto típico
**52% das citações do Perplexity ligam à fonte sem nomear a marca no texto
da resposta** [Writesonic via Search Engine Land, Jul 2026]. É dado de
fornecedor, trate-se como direcional: dá a ordem de grandeza do normal, não
um alvo. Não há estudo público com o lift medido da reescrita, e enquanto
não houver isto é uma hipótese com um mecanismo claro, não uma promessa.

#### Exemplo medido
destaque.ai, semana de 21 Set 2026, Perplexity: **21 respostas leem o site,
6 nomeiam a marca, 15 não**. São 71% contra os 52% da referência, ou seja
pior do que o normal do mercado, num motor que já vai ao site em 21 de 54
respostas. O Perplexity é o caso óbvio porque corre sempre com pesquisa,
mas a medição é a mesma em qualquer motor com fontes.

---

## DIMENSÃO 3: Entity & brand foundation

### Pattern: Sem Wikidata QID

**Lê primeiro o campo `entity` do pedido** (desde 2 Out 2026). "Sem QID"
são duas situações que pedem trabalho oposto, e o `entity.wikidata.note`
diz qual é:

| O que o `note` diz | Ação |
|---|---|
| nada, ou que o item nunca existiu | a do padrão, abaixo |
| que o item **foi apagado** (traz o QID antigo) | **nunca "criar o item"**. Primeiro reunir duas a três referências públicas e independentes (imprensa, diretórios do setor, rankings que os motores citam); só depois recriar, com cada afirmação ligada a uma dessas referências. Recriar com a mesma checklist leva à mesma eliminação |

Foi o que aconteceu à destaque.ai: o `Q140043087` foi apagado a 11 Ago 2026
por notabilidade (zero referências, um único contribuidor), a verificação
de entidade sabia-o e escrevia-o, e o plano de 28 Set mandou criar o item
com a checklist que levou à eliminação, porque o aviso não chegava ao
pedido.

#### Hipóteses
1. Não criado.
2. Criado mas em estado "draft" / sem suficientes claims para survive deletion.
3. Criado e **apagado** por notabilidade (ver a tabela acima).

#### Ação
Criar QID na Wikidata.org (só no primeiro caso da tabela). Mínimo: `instance of` (Q4830453 commercial organization), `country` (Q45 Portugal), `inception` (year), `official website`, `industry`. Cita fontes externas (LinkedIn, Crunchbase, imprensa).

#### Esforço
1-2h (criação + verificação por editores Wikidata).

#### Impacto típico
QID é referência oficial para Google Knowledge Panel e LLMs. Sem QID, identity disambiguation é frágil. **Impacto difícil de medir isoladamente**: é foundation, não alavanca.

#### Fonte
Wikidata:Notability/Organizations.

---

### Pattern: Sem artigo Wikipedia (PT e EN)

#### Hipóteses
1. Brand não atinge notability bar.
2. Atinge mas ninguém escreveu.
3. Tentou criar mas rejeitado (auto-promo / fontes insuficientes).

#### Ação
1. Avaliar notability (Wikipedia:Notability/Organizations). Bar PT: cobertura sustained em pelo menos 2 fontes independentes Tier-1.
2. Se passa: draft em PT-PT com tom neutro, cita Tier-1 PT media coverage, submete via Articles for Creation.
3. Não inflaciona: Wikipedia rejeita peacock language.

#### Esforço
5-15h (draft) + 1-6 meses (review + edits).

#### Impacto típico
Wikipedia é uma das fontes mais citadas por ChatGPT (~14% top citation share: Profound). Articles em PT-PT criam surface area específica para queries em Portugal.

#### Fonte
Profound 680M citation analysis.

---

### Pattern: `Organization.sameAs` vazio ou <3

#### Hipóteses
1. Schema implementado por dev sem brand context.

#### Ação
Adicionar URLs: LinkedIn company page, GitHub org (se aplicável), Crunchbase, X/Twitter, Wikidata, Producthunt, perfis dos fundadores no LinkedIn.

#### Esforço
30 min.

#### Impacto típico
`sameAs` corrobora entity identity para Google Knowledge Graph e LLMs. **Sem fonte pública que isole o impacto de sameAs** vs schema completeness em geral.

---

### Pattern: Sem perfil LinkedIn company ou GitHub org

#### Hipóteses
1. Stage muito early: fundadores postam pessoalmente.
2. Decisão consciente focar uma plataforma.

#### Ação
Criar perfis em LinkedIn e (se SaaS técnico) GitHub. Não exige posting cadence forte: basta presença reconhecível.

#### Esforço
1-2h criação inicial.

#### Impacto típico
Presença básica desbloqueia `sameAs` references e melhora entity disambiguation. Não move citation rate isoladamente.

---

## DIMENSÃO 4: Authority & digital PR

### Pattern: 0 menções Tier-1 PT media em 12 meses

#### Hipóteses
1. No outreach program ativo.
2. Outreach mal direccionado (PR generalista, não vertical-specific).
3. Brand não tem story angle interessante para journalists.

#### Ação
1. List 6 Tier-1 PT outlets: Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios.
2. Identificar 1-2 journalists por outlet que cobrem vertical do client.
3. Pitch baseado em data, story, ou opinion piece: nunca press release puro.
4. Cadência: 3-6 meses para primeiro hit; sustained coverage exige relacionamento de 12-18 meses.

#### Esforço
1-2 dias setup, depois 2-4h/semana sustained.

#### Impacto típico
**Branded anchor text correlaciona com AI Overview presence at r=0.527** (Ahrefs 75k brands): outperforming domain rating. Tier-1 PT coverage gera branded anchors orgânicos.

#### Fonte
Ahrefs research: https://ahrefs.com/blog/llm-citations/

---

### Pattern: Sem podcast appearances do segmento

#### Hipóteses
1. Founder/team não considera podcasting estratégico.
2. Não sabe que podcasts existem no segmento.

#### Ação
1. List 10-15 podcasts B2B/SaaS PT (Pessoa Comum, Próxima Paragem, Bumba na Fofinha business eps, Mensageiros, etc.).
2. Drafta pitch específico por podcast: referencing episodes específicos.
3. Target: 2-3 appearances/quarter sustained.
4. Maximiza re-uso: clip vídeo, blog summary cross-link, LinkedIn post.

#### Esforço
3-5h pitch + 1.5h per appearance + 30min re-use content.

#### Impacto típico
Podcasts geram backlinks autoritativos + transcript indexável (alguns motores citam podcast transcripts). Building authority slow-but-compound. Sem fonte isolando podcast impact, mas Ahrefs branded-anchor research aplica.

---

### Pattern: Não está em "Top X agências Y" listicles

#### Hipóteses
1. Listicles dominados por agências established com SEO/PR pessoal forte.
2. Comparison content creators não conhecem o brand.

#### Ação
Outreach personalizado a curadores de listicles (Clutch, G2, Capterra para SaaS; bloggers de vertical). Oferecer dados, case study, ou interview para inclusion.

#### Esforço
2-3 semanas outreach + nurture.

#### Impacto típico
Top-X listicles têm presence forte em comparison-intent queries (LLM intent_stage `comparison`/`decision`). Single inclusion = surface area material.

---

## DIMENSÃO 5: Social & community signals

### Pattern: O LinkedIn é citado nesta categoria e a marca aparece lá pela PÁGINA, não pelas pessoas

#### Quando este pattern se aplica, e quando não

**Mede-se antes de se abrir.** O gatilho é `linkedin.com` ser uma fatia
mensurável das citações DESTE cliente, não a categoria em abstrato.
Medido a 1 Out 2026 sobre 60 dias: 2,0% das citações da Congruent e 1,4%
das da destaque.ai (B2B), contra 0,3% no retalho, 0,2% no automóvel e
0,0% nos três hospitais. Para quem está em baixo desta tabela, isto é
ruído e a dimensão 5 resolve-se noutro sítio.

É por isto que o pattern existe em vez de uma regra geral: a LinkedIn
publica que é o **domínio mais citado em perguntas profissionais**
(Profound, 2026, via `benchmarks.md` §53), e isso é verdade na população
dela e falso como prioridade num catálogo português de retalho. Citar a
manchete a um cliente sem a medição dele ao lado é o erro que a
`## Regra de verificação` deste ficheiro proíbe.

#### Hipóteses
1. Só a Company Page publica, e as pessoas não. É o caso comum.
2. Publica-se a cadência certa com o formato errado: posts soltos, sem peça longa que os sustente.
3. Há peças longas e não há ligação de duas vias entre o site e a Page.

#### Ação
**As pessoas antes da página, e é medido:** 75% das citações do LinkedIn
vêm de perfis individuais e 25% de Company Pages (Meltwater, 2026). Por
tipo de conta, 40% são membros estabelecidos (10 mil ou mais
seguidores), 35% são membros comuns com cadência regular, e 25% são
páginas. **O cargo pesa menos do que a especialidade demonstrada**: CEOs
são 8,2% do conteúdo citado e fundadores 7,5%, o que quer dizer que um
especialista sem título chega lá.

Nomear, como sempre: as duas ou três pessoas da casa que vão publicar, o
tema que cada uma assina, e a cadência. Não "ativar os colaboradores".

**Artigo primeiro, post a seguir.** Os artigos longos valem ~60% das
citações do LinkedIn e os posts ~40% (dado interno da LinkedIn,
direcional). O desenho que o documento propõe, e que é consistente com o
resto deste ficheiro, é uma peça longa por tema e dois ou três posts a
apontar-lhe.

**Ligação de duas vias** entre o site e a Company Page, para a entidade
ficar ligada (dimensão 3) em vez de serem dois objetos soltos.

#### Esforço
Uma peça longa por mês e dois posts por semana, por pessoa ativada.
Primeiro mês inteiro antes de haver número para ler.

#### Impacto típico
**Não prometer semanas.** O tempo da publicação à primeira citação tem
mediana de 6,81 dias, P75 de 18,68 e P90 de 37,10 (Profound, log de
agentes ChatGPT + Claude, ~900 páginas, Mar-Mai 2026). Trinta dias é o
chão para um veredicto, e um número achatado às três semanas é o
esperado e não um falhanço. Quando o motor cita LinkedIn tende a
preservar o fraseado original (similaridade semântica 0,57-0,60,
Semrush 2026), o que torna a peça mais previsível do que a média.

#### Fonte
`benchmarks.md` §53. **Material de vendedor** (a LinkedIn a recomendar o
LinkedIn) para os números internos; os de terceiros (Profound,
Meltwater, Semrush, Ahrefs) estão identificados um a um lá.

---

### Pattern: Ausente das comunidades que os motores sobre-citam (Reddit, HN, Stack Overflow)

#### Hipóteses
1. Sem estratégia de community presence.
2. Receio de participação não-promocional.
3. A vertical discute em plataformas que não foram identificadas.

#### Ação
Nomear os 2-3 subreddits / comunidades exatos (regra de especificidade acima): primeiro os que o grafo de fontes do Tracker mostra a alimentar as respostas da categoria do cliente, depois os que alimentam as respostas onde os concorrentes são citados; Hacker News, Stack Overflow, Discords e fóruns PT entram quando os dados os mostram. O mesmo para YouTube: o canal ou formato que os motores citam na categoria, não "fazer vídeos". Participação genuína: responder a perguntas, partilhar dados próprios, nunca spam. Para SaaS técnico, presença no GitHub com repos/docs públicos.

#### Esforço
2-4h/semana sustained.

#### Impacto típico
Reddit é ~47% das top citations da Perplexity; YouTube ~14%: estas plataformas são citadas diretamente pelos motores. Presença genuína cria surface area citável. Sem fonte a isolar o lift por marca individual; relação correlacional.

#### Fonte
Profound citation-share analysis; breakdowns de fontes da Perplexity.

---

### Pattern: LinkedIn sem autores nomeados / posts que não são re-citados

#### Hipóteses
1. Conteúdo publicado pela página corporativa, não por pessoas.
2. Sem cadência de autoria pessoal.

#### Ação
Estabelecer 1-2 autores nomeados (founder, head of X) com posts regulares de ângulo dados/opinião que outros re-partilham e citam. Ligar os perfis ao `Organization.sameAs` (ver DIMENSÃO 3).

#### Esforço
1-2h/semana por autor.

#### Impacto típico
Posts re-citados alimentam branded mentions e anchors orgânicos. Indirecto sobre citation: relacionado com o r=0.527 branded-anchor da Ahrefs (ver DIMENSÃO 4).

---

### Pattern: Sem org GitHub pública (SaaS técnico)

#### Hipóteses
1. Código fechado por opção comercial, sem repos auxiliares (SDKs, exemplos, integrações).
2. Org GitHub existe mas sem atividade visível há >12 meses.

#### Ação
Criar org GitHub com 1-2 repos públicos: SDK do produto, exemplos de integração, documentação técnica em markdown, ou um eval/benchmark próprio. README sóbrio, LICENSE clara, releases versionados. Ligar ao `Organization.sameAs` (DIMENSÃO 3).

#### Esforço
1-2 dias setup + 1-2h/semana de manutenção.

#### Impacto típico
GitHub é fonte direta em queries técnicas: o Code Interpreter do ChatGPT, Claude com web search e Perplexity dev resolvem nomes de bibliotecas e padrões através dele. Sem estudo a isolar lift por marca; relação correlacional com presença em queries "como integrar X" e "alternativas a Y SDK".

---

### Pattern: Plataformas citadas pelos motores onde a marca pode registar-se e não está

#### Hipóteses
1. A plataforma nunca foi identificada como fonte da categoria: só a auditoria a revela.
2. Presença tratada como canal de leads "não prioritário", quando na prática é um domínio que os motores leem para responder à categoria.
3. Perfil existe mas incompleto ou desatualizado, sem entidade consistente.

#### Ação
Para cada domínio citado pelos motores nas perguntas da categoria que seja uma **plataforma de registo legítimo**: marketplace de serviços (ex.: zaask.pt), diretório da categoria, plataforma de reviews, comunidade com perfis de empresa, mapas: e onde a marca não tem presença: criar ou reclamar o perfil com entidade consistente (mesmo nome, mesma descrição, NAP quando aplicável, link ao site) e ligar ao `Organization.sameAs` quando a plataforma dá URL pública de perfil (DIMENSÃO 3). Exclusões: domínios de concorrentes; imprensa (imprensa é outreach da DIMENSÃO 4, não registo); plataformas onde a presença exigiria afirmações falsas. O perfil é sempre verdadeiro e completo, nunca veículo de links: manipular citações de IA é spam ao abrigo da política da Google (Jun 2026).

#### Esforço
1-2h por plataforma, uma vez, mais manutenção ligeira.

#### Impacto típico
A marca passa a existir dentro de domínios que os motores já leem para a categoria: mais barato do que tentar substituí-los como fonte. Exemplo interno: zaask.pt citado 3× pelo Gemini na pergunta de preços da categoria GEO (auditoria destaque.ai, 27 Jul 2026). Correlacional; sem estudo público a isolar o lift por marca.

#### Fonte
Auditorias do Visibility Tracker (citações por domínio, fonte primária interna); consistente com os breakdowns de citation-share por plataforma (Profound, Perplexity).

---

### Pattern: Negócio local com rating Google < 4,0

Pedido do founder (23 Ago): "como revertemos o jogo para um restaurante
com 3,5?" É reversível, é mensurável, e é dos poucos serviços locais
com matemática à vista.

#### Hipóteses
1. Causa operacional real, visível nos temas das queixas (a vista de
   reputação já as destila): reviews são sintoma antes de serem número.
2. Volume baixo: os satisfeitos calados são maioria e ninguém lhes pede.
3. Negativas antigas a pesar num perfil parado (recência conta para
   modelos e para leitores).

#### Ação
1. **A matemática primeiro**: calcular e mostrar o número exato: "de
   3,5 com 80 reviews para 4,3 são ~N avaliações 5 estrelas; ao ritmo
   atual, X meses; com sistema, Y". Aritmética sobre dados já
   recolhidos; é o argumento de venda e a meta do plano.
2. **Causa antes do volume**: se os temas de queixa apontam operação
   (atendimento, tempo de espera), a correção operacional precede o
   pedido de reviews: dizê-lo ao cliente é obrigatório, mesmo que não
   seja o que quer ouvir. Encher um balde furado não é serviço.
3. **Sistema de pedido universal**: pedir avaliação a TODOS os clientes,
   sistematicamente (QR à mesa, SMS/email pós-visita com link direto).
   Peça pronta: o cartão/QR, o texto do SMS, o momento do pedido.
4. **Responder a 100% das reviews**, novas e antigas relevantes: pacote
   de respostas prontas por tema, no tom da casa (deliverable do
   Preparar).
5. Perfil vivo: fotos, horários, menu, posts: recência em tudo.

#### Linhas vermelhas (não negociáveis)
Nunca comprar reviews; nunca review gating (filtrar só satisfeitos para
o pedido viola as políticas do Google e arrisca o perfil); nunca
responder a atacar o cliente. Quem propuser atalhos destes não é
parceiro, é passivo.

#### Esforço
Setup 1-2 semanas; sistema contínuo. Reversão típica: meses, não
semanas: dizer o prazo real.

#### Impacto típico
Direto no que os motores locais leem (rating, volume, recência, taxa
de resposta alimentam Google Maps/AI Mode e as recomendações locais).
Sem estudo público que isole lift por marca; a prova é o antes/depois
do próprio cliente no registo causal.

---

## DIMENSÃO 6: Authority signals on site (E-E-A-T)

### Pattern: Conteúdo sem autores declarados (sem `Person` schema)

#### Hipóteses
1. Artigos publicados sem byline.
2. Bylines sem schema estruturado / sem `sameAs`.

#### Ação
Adicionar `Person` schema a cada autor com `name`, `jobTitle`, `sameAs` (LinkedIn, ORCID quando aplicável) e bio com credenciais e experiência nomeada (a perna "Experience" do E-E-A-T). Ligar cada artigo ao autor via `author`.

#### Esforço
2-4h setup + 10 min por artigo novo.

#### Impacto típico
As Search Quality Rater Guidelines (revisão Set 2025) avaliam E-E-A-T e passaram a incluir AI Overviews no workflow do rater. Sem lift direto isolado em citation: é sinal de qualidade, não palanca.

#### Fonte
Google Search Quality Rater Guidelines (Set 2025).

---

### Pattern: Autor declarado no schema ≠ autor visível na página

#### Hipóteses
1. `author` aponta para `Person` e a página assina com o nome da empresa (ou o inverso).
2. O byline diz "Equipa X" e o schema nomeia um indivíduo que não aparece em lado nenhum.
3. Migração de CMS deixou o schema a apontar para um autor que já não escreve lá.

#### Como detetar
Extrair o `author` do JSON-LD e procurar esse nome no HTML com os `<script>` removidos. Se o nome não estiver no corpo visível, o sinal contradiz-se a si próprio. Um comando chega:

```
curl -s URL | python3 -c "import sys,re; h=sys.stdin.read(); print('Nome' in re.sub(r'<script.*?</script>','',h,flags=re.S))"
```

#### Ação
Fazer coincidir os dois. O nome marcado tem de ser o nome impresso, e a assinatura visível deve ligar aos mesmos perfis que estão no `sameAs` do schema, para leitor e motor poderem confirmar a mesma coisa pelas mesmas vias. Quando o autor é mesmo a organização, usar `Organization` no `author` e assinar com a organização; misturar os dois é que não serve.

#### Esforço
1-2h se o byline for um componente partilhado, que é o caso normal. Corrige o site inteiro de uma vez.

#### Impacto típico
Sem lift isolado publicado. É higiene de coerência: a documentação do Google para `Article` pede explicitamente que o nome do autor no markup seja o mesmo que aparece na página, e um sinal que se contradiz vale menos do que sinal nenhum. Barato de corrigir, e frequente em sites que adicionaram schema por cima de um tema pré-existente.

#### Fonte
Google Search Central, structured data para `Article` (regra do author name coincidente).

---

### Pattern: Método proprietário sem autor nomeado

#### Hipóteses
1. A empresa vende uma metodologia com nome mas não diz quem a criou.
2. A página do método fala em "a nossa abordagem" sem uma única pessoa associada.
3. As credenciais existem (certificações, anos, publicações) mas vivem só no LinkedIn de alguém.

#### Ação
Atribuir o método a uma pessoa concreta, com `Person` schema e credenciais nomeadas, na própria página do método e não só no "Sobre". Um método com autor é uma entidade que um motor pode ligar a uma pessoa verificável noutras fontes; um método anónimo é uma afirmação de marketing. Quando houver, ligar a outputs públicos: papers com DOI, talks, dataset publicado.

#### Esforço
2-3h para a página do método; 30 min por credencial que precise de prova pública.

#### Impacto típico
Reforça a perna "Experience" do E-E-A-T, que é a mais difícil de simular e a que distingue consultoria de conteúdo genérico. Sem fonte a isolar lift; é sinal de qualidade acumulado, não palanca direta.

#### Nota de auditoria
Este pattern nasceu de uma auditoria à própria destaque.ai, em Agosto de 2026: o schema dos artigos declarava `author: Person` e as páginas assinavam "Por destaque.ai". Vale a pena correr o comando de deteção acima em qualquer cliente que tenha blog, porque a contradição é invisível a olho nu e frequente.

---

### Pattern: Sem case studies com resultados verificáveis

#### Hipóteses
1. Clientes não autorizam divulgação.
2. Resultados não medidos / não registados.

#### Ação
Publicar case studies com cliente nomeado (ou anonimizado com métricas reais): problema → intervenção → resultado quantificado, com citação verificável do cliente sempre que possível.

#### Esforço
3-5 dias por case study (inclui aprovação do cliente).

#### Impacto típico
Casos verificáveis suportam claims em decision-stage queries e a perna "Trust" do E-E-A-T. Surface area para citation em buyer-education. Campo emergente, sem fonte a isolar o lift.

---

### Pattern: Página "Sobre" / "Equipa" sem bios E-E-A-T compliant

#### Hipóteses
1. Fotos + nomes mas sem credenciais nem experiência declarada.
2. Bios em prosa sem schema (`Person` + `sameAs`): leitura humana funciona, knowledge-graph extraction não.

#### Ação
Reescrever bios com: credenciais nomeadas (universidade, certificações reconhecidas), anos de experiência específica no domínio, 2-3 outputs públicos (papers, talks, posts citados) e `Person` schema com `sameAs` para LinkedIn / ORCID / Google Scholar / X. Lidar com a perna "Experience" do E-E-A-T explicitamente.

#### Esforço
4-6h pela página inteira; 30 min por bio nova depois.

#### Impacto típico
About/Team é frequentemente das primeiras URLs visitadas por crawlers em audit de marca; sem signals E-E-A-T cria gap em decision-stage queries. Sem fonte a isolar lift por componente: é sinal de qualidade, não palanca direta.

---

## DIMENSÃO 7: Measurement & feedback

### Pattern: Sem GA4 AI channel tracking

#### Hipóteses
1. GA4 default channels não distinguem AI referrals.

#### Ação
Configurar channel group custom em GA4 que captura UTMs de AI (`utm_source` contendo `chatgpt.com`, `perplexity.ai`, etc.) + referrers conhecidos.

#### Esforço
1-2h.

#### Impacto típico
Não move citation rate. Crítico para attribution e ROI demonstration ao client.

---

### Pattern: Sem Bing Webmaster Tools AI Performance dashboard

#### Hipóteses
1. Site não verificado em BWT.

#### Ação
Verifica site em Bing Webmaster Tools. Acede ao AI Performance dashboard (public preview desde 9 Feb 2026). Telemetria real de Copilot citations + Bing AI grounding.

#### Esforço
30 min setup.

#### Impacto típico
Não move citation rate. Crítico para measurement honesty: Bing telemetry é a única first-party AI search data publicamente disponível em 2026.

#### Fonte
Microsoft Bing Webmaster Tools docs.

---

## DIMENSÃO 8: Strategic positioning

### Pattern: Citation rate forte em awareness mas <5% em decision-stage queries

#### Hipóteses
1. Conteúdo top-of-funnel optimizado, bottom-of-funnel não.
2. Brand não publica BOFU content (case studies, ROI calculators, comparison vs alternatives).
3. Concorrentes têm BOFU coverage forte.

#### Ação
Auditar funnel coverage por intent_stage. Producir BOFU content: detailed case studies com nomes, métricas, screenshots; comparison vs alternatives; ROI calculator interactive.

#### Esforço
6-10 semanas para BOFU library mínima.

#### Impacto típico
Decision-stage queries têm conversion rate 10x awareness. Citation aqui é where ROI lives. Sem fonte isolando o lift de BOFU content em LLM citations: campo emergente.

---

### Pattern: Concorrente domina queries de comparison

#### Hipóteses
1. Concorrente publica páginas "X vs <brand>" e ranqueia.
2. Concorrente tem mais comparison content em geral.

#### Ação
Estratégia "defend & attack": publicar próprias páginas "brand vs <concorrente>": honest, factual. LLMs citam ambas se ambas existem.

#### Esforço
1 semana por página comparison (incluindo research da concorrência).

#### Impacto típico
Comparison-intent queries são high-conversion. Sem fonte isolando o impacto.

---

### Pattern: Território livre: perguntas e ângulos sem dono nas respostas de IA

#### Como detetar (evidência da auditoria, não intuição)
1. **Perguntas sem dono**: prompts onde nenhuma marca é recomendada de forma
   consistente: a IA responde genericamente porque não tem candidato. As de
   fundo-de-funil (`decision`/`post_decision`) são as vitórias mais baratas.
2. **Ângulos por reclamar**: dos perfis e excertos dos concorrentes, mapear que
   atributos já têm dono ("prova social" = X, "preço" = Y) e quais ninguém
   reclama nas respostas ("especialista vertical", "medição contínua",
   "PT-PT nativo", "implementação, não só consultoria").
3. **Fontes sem dono**: domínios que os motores citam na categoria onde nenhum
   concorrente domina a co-ocorrência e o cliente está ausente.

#### Ação
Reclamar 1 ângulo livre de cada vez, na ordem: (1) publicar a página/conteúdo
citável que responde às perguntas sem dono desse ângulo (BOFU primeiro);
(2) plantar presença nas fontes sem dono que os motores já citam;
(3) alinhar o positioning statement do site e da entidade (schema, About) com
o ângulo reclamado. Regra: **flanquear, não atacar de frente**: nunca
escolher um ângulo já dominado por um peer forte.

#### Esforço
2-4 semanas por ângulo (conteúdo + 2-3 fontes).

#### Impacto típico
Perguntas sem dono não exigem destronar ninguém: o custo de entrada é o mais
baixo do catálogo. Sem estudo público a quantificar; evidência é a própria
auditoria semanal (antes/depois no prompt visado).

---

## A jornada de pesquisa: o que o motor faz ANTES de responder

Escrito a 7 Set 2026. Estes patterns leem-se sobre a jornada medida em
`export-pending` (campo `jornada`) e sobre as consultas internas por
pergunta. **A contagem está em código; o julgamento está aqui.** Nenhum
limiar abaixo é derivado dos dados: são escolhas, e por isso estão
escritas onde se podem discutir e mudar sem um deploy.

O que se mede, e o que cada coisa quer dizer:

| Campo | Pergunta a que responde |
|---|---|
| `procuradoPeloNome` / `respostasComPesquisa` | a marca está na lista de candidatos que o motor traz de casa? |
| `leuENaoCitou` | encontrou o site e passou-lhe à frente? |
| `repeticao.sobreposicaoMediana` | os motores vão pelo mesmo caminho, ou cada um pelo seu? |
| `termosEstranhos` | que vocabulário entrou nas pesquisas e não veio de nenhuma pergunta nossa? |

**Nada disto se lê quando `respostasComPesquisa` é baixo.** Abaixo de 20
respostas com consultas expostas, a semana não sustenta nenhum destes
patterns: diz-se que não há base e não se abre ação nenhuma. Só três
fornecedores expõem consultas (OpenAI, Google, xAI), portanto o
denominador é sempre uma fatia da semana.

### Pattern: o leque da pergunta, e as sub-perguntas sem dono

Uma pergunta do catálogo vira seis a nove pesquisas do motor, e cada uma
traz o seu lote de páginas. Quando o fornecedor faz o par entre a pesquisa
e as fontes dela (hoje ChatGPT e Grok), o campo `leque` de cada resposta
diz `sub_perguntas`, `encontrado_em`, e a lista `sem_ti` com quem está no
lugar da marca.

**É a ação mais concreta que esta metodologia produz, e por uma razão de
forma: o título da peça vem escrito.** "Não apareces em «que agência de
GEO recomendam»" é um diagnóstico. "Das nove pesquisas em que ele partiu
essa pergunta, não apareces em «GEO case study Portugal» nem em «agência
GEO preço», e nessas está a 3HASH e a UniK SEO" é um plano editorial com
sete títulos e a concorrência identificada por título.

**Dimensão: content (2).** Uma peça por sub-pergunta sem dono, começando
pelas que trouxeram mais páginas: são as que o motor levou mais a sério, e
onde estar de fora custa mais.

**Duas cautelas.**

- **Ser encontrado no leque não é ser citado.** São camadas: procurou
  (as consultas), encontrou (o leque), usou (a citação). Uma marca pode
  estar nas fontes de cinco sub-perguntas e não aparecer no texto de
  nenhuma, e aí o problema mudou outra vez de sítio: é prova, não
  cobertura.
- **`leque` ausente não é "não te encontrou".** O Gemini devolve as
  consultas e os pedaços em listas separadas e nunca diz qual veio de
  qual. Uma resposta sem `leque` fica de fora desta leitura.

### Pattern: nunca procurado pelo nome (`procuradoPeloNome` = 0)

O motor pesquisou dezenas de vezes e nunca escreveu o nome da marca. Não
está no conjunto de candidatos: não é uma questão de a página estar bem
ou mal, porque a página nunca chega a ser considerada.

**Dimensão: authority (4) e entity (3), nunca technical.** A ação é ser
nomeado onde o motor lê: imprensa Tier-1, listas e comparativos de
terceiros, comunidade. Um item Wikidata e um artigo Wikipédia atacam a
mesma falha por outro lado.

**Não propor trabalho on-page para esta falha.** É o erro clássico e é
caro: melhora uma página que ninguém vai buscar.

### Pattern: procurado pelo nome mas não citado

O contrário, e a ação é oposta. O motor foi verificar a marca e o que
encontrou não chegou. Aqui sim é conteúdo e prova: página que responda à
pergunta concreta, dados próprios, terceiros que confirmem o que a marca
diz de si.

Quando `leuENaoCitou` também é alto, isto está confirmado por duas vias:
ele procurou, encontrou, leu, e escolheu outra coisa. **É o achado mais
accionável que esta metodologia produz**, porque elimina indexação e
descoberta da lista de causas.

### Pattern: os motores não se repetem (`sobreposicaoMediana` < 0,25)

Cada motor vai por seu lado na mesma pergunta. Consequência dura para o
plano: **uma ação não serve todos**, e um plano escrito como se servisse
gasta esforço a metade.

Ação: priorizar por motor, com o bloco desse motor em
`engine_playbooks.md`, e dizer ao cliente que a subida vai ser desigual.

### Pattern: os motores repetem-se (`sobreposicaoMediana` > 0,6)

Convergem no mesmo vocabulário e nas mesmas fontes. Uma peça bem colocada
mexe em vários ao mesmo tempo, e o plano deve concentrar em vez de
espalhar. É também o cenário em que um domínio dominante vale mais: se
todos passam por lá, estar lá é a alavanca.

### Pattern: termo estranho que é o VOCABULÁRIO DO COMPRADOR na mesma categoria

**É o caso mais frequente dos cinco, e é o único que não é problema
nenhum.** Está escrito em quinto lugar e devia ser lido em primeiro: um
termo que a nossa pergunta não tinha é, por omissão, a palavra com que o
comprador pensa o assunto, e não um desvio.

Medido no Continente (1 Out 2026), 44 consultas distintas numa semana:
`ranking DECO`, `testes DECO marcas próprias`, `supermercados mais
baratos`, `marcas próprias Portugal`, `opções sem glúten`, `melhores
peixarias`, `cartões fidelização`, `entrega no mesmo dia`, `promoções
semanais`, `críticas ao Continente`, `pontos fortes e fracos`,
`sustentabilidade`, `metas ambientais`. **Zero são outra indústria.**

Cada um destes é o título de uma peça, e dois deles dizem onde ela tem de
ser lida: o motor vai ao `ranking DECO` e aos `testes DECO marcas
próprias` decidir qual é o melhor supermercado. Isso é uma ação com
nome e endereço, não um aviso.

**Dimensão: content (2), e nunca positioning.** Uma peça por termo, pela
ordem das consultas que trouxeram mais páginas. Quando o termo nomeia uma
fonte de terceiros (uma associação de consumidores, um comparador, um
ranking), a ação tem duas metades: estar lá, e publicar o dado próprio
equivalente.

**Como se distingue dos outros quatro, por ordem de teste:**

| Pergunta | Se sim |
|---|---|
| O termo nomeia uma fonte, um ranking ou uma instituição? | vocabulário do comprador, e a ação é estar lá |
| É o mesmo conceito da categoria noutra língua? | tradução (ver o padrão acima) |
| É um atributo, um preço, um formato ou uma ocasião da categoria? | vocabulário do comprador |
| Nomeia um país ou uma região que não é o nosso mercado? | outro mercado |
| Pertence a outra indústria onde o nome da categoria também existe? | outro sentido, e só aqui é posicionamento |

**A ordem não é decorativa.** O teste da colisão de nomes é o último
porque é o mais raro e o mais caro de errar: foi medido uma vez, numa
marca cujo nome colidia com geotecnia, e generalizá-lo fez o produto
chamar "saiu do assunto" a treze consultas de supermercado e mandar o
cliente corrigi-las com posicionamento. **Em dúvida entre o primeiro e o
último, é o primeiro.**

### Pattern: termo estranho que é OUTRO SENTIDO do mesmo nome

O nome da categoria colide com outro domínio de conhecimento. Medido na
destaque.ai: "quanto custa uma auditoria GEO" gerou `"auditoria
geotecnica" preco` e `quanto custa "auditoria de barragem"`.

**Dimensão: positioning (8), não technical.** A ação é colar o termo à
categoria certa em texto que o motor leia: uma página que defina o termo
sem ambiguidade, e presença em fontes onde o termo já aparece com o
sentido certo. Nenhuma quantidade de schema resolve uma desambiguação.

### Pattern: termo estranho que é a TRADUÇÃO do nosso vocabulário

Medido na mesma semana, e foi a surpresa: os termos estranhos mais
frequentes da destaque.ai não eram erros. Eram `engine` (63 consultas),
`generative` (62), `agency` (22), `consultancy`, `pricing`, `visibility`.
As perguntas estão em português e dizem "GEO"; o motor expande para
"Generative Engine Optimization" em inglês e pesquisa nessa língua.

**Isto não é um problema, é uma instrução.** A prova tem de existir na
língua em que ele procura. Uma marca portuguesa cujo site só diz "GEO"
em português está a competir por evidência inglesa que não produziu.

**Dimensão: content (2).** Ação: a página oficial da categoria carrega
os dois termos, o português e o inglês por extenso, e pelo menos uma peça
de prova (caso, dados, comparativo) existe em inglês.

**Cuidado ao ler:** uma tradução do nosso próprio vocabulário NÃO se
reporta como associação errada. Distinguem-se com uma pergunta: este
termo é o mesmo conceito noutra língua, ou é outro conceito? Em dúvida,
não se abre ação.

### Pattern: termo estranho que é um MERCADO que não é o nosso

`AI search optimization agency Portugal Brazil` numa pergunta portuguesa.
É por aí que entram concorrentes de outro país na medição, e explica um
nome que aparece do nada na lista de concorrentes.

**Dimensão: positioning (8).** Ação: no relatório, declarar que aquele
concorrente veio de outra geografia em vez de o apresentar como rival
direto. Os sinais de mercado no site (morada no `Organization`, moeda,
língua, casos locais, `hreflang`) entram como trabalho de fundo da
dimensão entity, **nunca como a correção deste sintoma**: ver o padrão
seguinte, que explica porquê.

### Pattern: a PERGUNTA não diz o mercado, e o motor escolhe outro

Escrito a 24 Set 2026 depois de a regra de cima ter sido esticada para
este caso e ter produzido um conselho que não se sustenta. O founder
apanhou-o numa frase: *"não é isso que vai mudar a resposta do prompt"*.

**O sintoma.** Uma pergunta em português que não nomeia o país ("o que
devo ter em conta ao escolher onde fazer as compras da semana?") e o
motor responde sobre outro mercado. No caso medido saíram supermercados
em Kapolei, no Havai, e em Reno, no Nevada, com morada e telefone.

**A ação ERRADA, e é a que sai por omissão:** mandar pôr `hreflang` e
morada no `Organization`. Esses são sinais NO SITE. Valem quando um motor
já está a olhar para o site, e não injetam um país numa pergunta que não
o tem: nesses casos o motor nem chega ao site, escolhe um mercado por
omissão e responde sobre ele. Uma marca que fizesse este trabalho todo
continuaria a ver a mesma resposta.

**Antes de escrever o achado, CONTAR.** É a parte que mais custou: no
Continente, a leitura apresentou "o motor responde sobre outro mercado"
como a explicação das 26 respostas que faltavam (60 menos 34), e as
respostas que falam mesmo de outro país eram **duas em 270**. O resto era
a marca não ser nomeada numa resposta genérica, que é outro achado e
muito menos dramático. A contagem é uma consulta: quantas respostas
nomeiam cadeias do outro mercado. Sem esse número, o achado é uma
história à volta de dois casos.

**Dimensão: positioning (8), e a ação é em três camadas, por esta ordem:**

1. **O desenho da pergunta, que é de quem mede e não do cliente.** Uma
   pergunta sem mercado mede outro mercado. Ou passa a dizê-lo, ou fica
   declarada como medição deliberada do caso sem âncora, que também é
   legítima: é o que um comprador escreve quando não pensa no assunto.
   Nunca se entrega ao cliente como defeito dele.
2. **A localização da recolha, quando a superfície é de pesquisa.** Um
   AIO ou um Copilot mal localizados produzem isto sem culpa nenhuma da
   marca, e isso é defeito de quem mede. Verifica-se pela distribuição:
   se for a localização, a superfície inteira vem do outro mercado; se
   vier uma resposta em vinte, é o motor naquela consulta.
3. **A camada de entidade, e só aqui.** O que faz "supermercado" em
   português resolver para cadeias portuguesas é a identidade reconhecida
   (Wikidata, Knowledge Panel, `sameAs`, cobertura local), não uma etiqueta
   no `<head>`. É trabalho de meses e não se promete como correção desta
   semana.

---

## Patterns transversais (cross-dimensional)

### Pattern: Citation rate <10% em todos os motores

Indica fragilidade em múltiplas dimensões simultaneamente. Não fazer "fix it all": priorizar:
1. Entity (Wikidata QID + sameAs + Wikipedia se notability): H1
2. Technical (Schema.org Organization + robots.txt + llms.txt): H1
3. Authority (digital PR Tier-1 + 2-3 podcast appearances): H2-H3
4. Content (original statistics + comparison content): H2-H3

### Pattern: Citation rate alto mas position avg >4

Brand é citado mas em segundo plano consistente. Indica concorrente dominante. Estratégia: defender o que tens (não regredir) enquanto constrói edge em dimensão específica (ex: original research).

### Pattern: Citation rate disparado num motor, baixo nos outros

Comum em brand com presença forte numa community específica que esse motor sobre-pondera (ex: Reddit-heavy → Perplexity boost). Não generalizável: auditar fonte específica.

### Pattern: Bounce >70%, time on site <30s (UX & engagement)

Não é dimensão GEO top-level: UX/engagement não é input direto a citation. Impacta a conversão depois de o utilizador chegar (ROI da campanha), não a citation rate em si. Hipóteses: landing page desalinhada com intent, LCP >4s, cookie consent invasivo. Ação: A/B test do hero, cookie consent compliance-minimal, fix LCP (ver DIMENSÃO 1). Relevante para o ROI da campanha GEO, reportar separado das métricas de citação.

## A campanha de uma proposta de valor

Consumido pela task `plan_value_prop` do Tracker (21 Set 2026). Uma
**proposta de valor** é uma frase que a marca QUER que a IA diga, declarada
uma vez e aplicada a várias perguntas: *"quando falarem de GEO, quero que
mencionem o meu desconto"*. A task pede o TRABALHO que faz isso acontecer.

O contexto que chega traz, para as perguntas que a proposta cobre: a
medição por motor, quem aparece no lugar da marca, **os domínios que cada
motor citou naquelas perguntas** e **o que ele foi procurar antes de
responder**. É daí que sai a especificidade, e não de conhecimento geral.

**E traz o plano que já existe** (`existing_plan`, desde 2 Out 2026), com
a mesma regra do plano semanal: **uma ação que já lá está não se repete**,
nem com outro título. Se a campanha precisa de uma peça que o plano já
tem (o guia de um tema, a página de uma pergunta), diz-se isso no `why`
da ação da campanha e não se cria outra. Sem isto, a campanha do desconto
da destaque.ai pôs o "audit técnico" e o "como avaliar uma agência" no
plano pela segunda vez.

### A regra que separa uma campanha de uma lista de boas intenções

**1. Sem prova pública, a primeira ação é criar a prova.** O contexto
declara-o (`Prova pública: NENHUMA`). Uma proposta sem uma página
verificável onde aquilo esteja escrito não é um problema de distribuição, é
um problema de inexistência. Nunca propor pedir a um motor que afirme o que
não está publicado em lado nenhum: isso não é GEO, é pedir ao modelo que
invente.

**2. Nomear o sítio, não a categoria.** Vale aqui a regra de
especificidade do topo deste ficheiro, com uma fonte a mais: os domínios
citados NAQUELAS perguntas. "Publicar um comparativo" é inútil; "publicar o
comparativo em X, porque é o domínio que o ChatGPT citou em 4 das 6
respostas desta pergunta" é uma ação.

**2b. Editar a página que os motores JÁ citam vem antes de publicar coisa
nova.** É a regra mais barata desta lista e a que se esquece primeiro,
porque publicar parece mais trabalho e portanto mais valor.

Uma peça nova começa em zero citações e tem de ganhar o direito a ser lida.
Uma página que já aparece nas fontes daquelas perguntas já o ganhou: o que
falta é a afirmação estar lá dentro. Acrescentar um parágrafo a uma página
citada é uma tarde; um artigo novo são semanas, e pode nunca ser lido.

Como se escolhe a página, e vem dos dados que chegam no contexto:

1. entre os domínios citados naquelas perguntas, o da própria marca;
2. dentro dele, a página com mais citações, e a empatar a que aparece em
   mais MOTORES (espalhamento vale mais do que volume: uma página citada
   quatro vezes por um motor só depende de um motor);
3. se o domínio da marca não aparece em nenhuma daquelas perguntas, esta
   regra não se aplica, e o caso é o da dimensão 1 ou o da 2 (o motor não
   chega ao site).

A ação nomeia a página, não "o site": *"acrescentar a oferta a
`/blog/escolher-consultora-x`, que é a página da marca com mais citações
nesta pergunta (16, em 4 motores)"*.

**E a ordem declara-se, não se deixa adivinhar.** Uma campanha sai como
lista, e quem a lê começa por cima. Duas coisas a fazer por isso:
`horizon` e `severity` põem a edição da página citada à frente dos artigos
novos; e uma ação que depende de outra (a prova pública antes de a afirmação
ir para a página, regra 1) leva no `blocked_on` a frase do que falta. Sem
isso o cliente escolhe pela ordem em que as linhas foram escritas, que não
é ordem nenhuma.

**3. Usar as palavras do comprador.** As consultas que vêm no contexto são
o que o motor escreveu, não o que a marca chama às coisas. A peça escreve-se
com elas, e a ação diz quais.

**4. Cobrir as dimensões que o caso pede, e não as oito por obrigação.**
Uma proposta sobre preço quase sempre toca Content (a página que o declara)
e Authority (quem a cita). Forçar uma ação de Entity para fazer número é
ruído.

**5. Cada ação diz o que muda na medição.** O `rationale` cita o número que
a produziu (a citação naquela pergunta, o domínio, o concorrente que está no
lugar). Sem isso, a semana seguinte não consegue dizer se serviu.

**6. Entre três e oito ações.** Menos não é campanha; mais é uma lista que
ninguém executa, e o plano da semana já existe ao lado.

### O que NÃO é uma ação de campanha

- pedir ao motor que diga a afirmação (ver a regra 1);
- repetir uma ação que o plano da semana já tem;
- "criar conteúdo sobre o tema", sem sítio, sem palavras e sem número;
- qualquer coisa que a marca não possa começar esta semana;
- **verificar, daqui a N semanas, se a afirmação passou a ser dita.** Isso
  é a medição, e ela corre sozinha no fecho de cada semana: a contagem de
  lidas e ditas por pergunta, e o carimbo do alvo quando a medição o
  confirma. Uma ação a pedir ao cliente que faça à mão o que a máquina já
  faz ocupa um lugar na campanha e desaparece quando alguém a marca como
  feita, sem nada ter acontecido.

## A proposta foi dita?

Consumido pelo juízo por resposta do Tracker (migração 0132, 21 Set 2026).
A campanha acima diz o que fazer; isto diz se serviu.

O critério está fixado **antes** de se ler a primeira resposta, e é
deliberado: o share of recommendation aprendeu-o à custa, quando um
critério escrito depois de olhar para os dados é um critério afinado ao
resultado que se queria.

### A afirmação está gravada nas palavras da MARCA

É esse o problema todo. A marca escreve *"DESCONTO VISIBILITY TRACKER"* e a
resposta diz *"a destaque.ai tem uma promoção no plano inicial"*. Procurar
a cadeia de caracteres não encontra nada e reporta zero por cento com o
produto a funcionar. Por isso isto é juízo e não comparação de texto.

### Conta

- **A afirmação dita por outras palavras.** A proposta diz "entregamos em
  24 horas" e a resposta diz "fazem entrega no dia seguinte": conta. O que
  se julga é a AFIRMAÇÃO, não a frase.
- **A afirmação dita com um número diferente mas equivalente.** "Desconto
  de 20%" e "um quinto mais barato" são a mesma coisa.
- **A afirmação dita de passagem**, numa lista ou numa frase subordinada.
  Não tem de ser o tema da resposta.

### Não conta

- **A marca aparecer ao lado do assunto.** A proposta é sobre descontos, a
  resposta nomeia a marca e fala de preços em geral: não é a afirmação.
- **A afirmação dita sobre OUTRA marca.** "A X tem desconto, a Y não" não é
  a proposta da Y dita.
- **O motor a sugerir que se pergunte**, ou a dizer que "pode haver"
  promoções. Uma possibilidade não é uma afirmação.
- **A afirmação contradita.** "Não tem desconto nenhum" é `said: false`, e
  não um sim com ressalva.

**Em dúvida, não conta.** É a mesma regra do juízo de escolha, e pela mesma
razão: inventar presença é pior do que falhar uma.

### A frase é obrigatória

Um `said: true` vai com a frase da resposta que o prova, recortada. Sem
ela a base recusa a linha, e a razão é que um número que ninguém pode
verificar não vai para o ecrã de um cliente.

A frase é da RESPOSTA, não a reescrita da proposta: quem abrir o ecrã daqui
a três meses tem de poder ler o que o motor escreveu.

---

## Manutenção

Este ficheiro evolui via:
- **Loop 2 self-audit**: patterns observados no próprio destaque.ai audit semanal.
- **Loop 3 client learnings**: patterns anonimizados de `destaque-ai-ops/learnings/` (futuro, via synthesis-weekly Routine).
- **Daily-agent absorção**: novos studies/papers (ex: Aggarwal follow-ups, BrightEdge updates) podem adicionar patterns ou refinar impacto típico de existentes.

Cada update adiciona entry em `methodology-changelog.md` se mudar padrões existentes (não apenas adicionar novos).

---

Last refresh: 21 Set 2026 (duas secções novas: a campanha de uma proposta de valor, consumida pela task `plan_value_prop`, e o critério do que conta como a proposta DITA, consumido pelo juízo por resposta). Anterior: 7 Set 2026 (a jornada de pesquisa).
