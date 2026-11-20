# Oportunidades de negócio (capítulo 07 do relatório do prospect e ecrã do cliente)

Consumido pela task `business_opportunities` da Routine do cérebro do
Periscopy (`destaque-ai-tracker/routines/tracker-brain.md`). Vale para
qualquer setor: hospitais, retalho, banca, seguros, imobiliário, B2B SaaS,
turismo. Nada aqui é específico de um cliente.

Há dois destinos, e o pedido diz qual em `destino`: `relatorio` (o
capítulo 07 do relatório de um prospect, escrito uma vez) e `cliente` (o
ecrã «Oportunidades de negócio» de um cliente do Periscopy, atualizado
todas as semanas). As secções 1 a 6 valem para os dois; a secção 7 junta o
que muda no destino `cliente`. Um pedido sem `destino` é `relatorio`.

**Revisto a 20 Nov 2026, a pedido do founder.** O ecrã da destaque.ai
mostrava «Quem compra serviços B2B já pergunta primeiro à IA», com
avaliações no Clutch e páginas novas como ações. É uma tese verdadeira para
todo o mercado e trabalho do plano, não uma oportunidade de negócio. O
founder pediu uma definição mais funda: *"não só isso, mas também segmento
não explorado, etc, tem que ser mais profundo"*. Esta versão define os
tipos de oportunidade, as sete portas por onde cada cartão tem de passar e
o que nunca entra.

## 1. O que é uma oportunidade de negócio

Uma oportunidade de negócio é **um grupo de clientes, com procura medida,
que esta marca pode ganhar e ainda não ganha**. Ainda não ganha porque não
o serve, porque ninguém o serve bem, ou porque uma mudança (uma data, uma
regra, um canal, um concorrente que falha) o abriu agora. Tem sempre três
partes, e sem uma delas não há cartão: quem (o grupo), quanto (a procura,
com o número e a fonte) e porquê esta marca (o que ela já tem que a torna
credível para esse grupo).

O plano de ações e as oportunidades de negócio fazem trabalhos diferentes.
O plano põe a marca nas respostas da IA onde ela já compete. A oportunidade
diz onde a marca devia competir a seguir, e para quem. A IA entra na
oportunidade como o sítio onde esse grupo pergunta e decide, nunca como o
assunto do cartão.

**O erro de origem, e o que esta revisão corrige.** Os sete cartões da
destaque.ai de 16 Nov 2026 nasceram todos da mesma maneira: uma pergunta
medida onde a marca não aparece, vestida com uma estatística de mercado.
Partir das perguntas onde a marca está ausente é análise de lacunas, e a
análise de lacunas é o plano. Uma oportunidade de negócio muda a quem, o
quê, onde ou quando a marca vende (porta 1). Se só muda se a marca aparece
numa pergunta que já disputa, é uma ação do plano. A medição entra numa
oportunidade como prova de que o grupo existe e de quem o ganha hoje,
nunca como ponto de partida.

Dois testes separam uma oportunidade de uma tese de mercado, e fazem-se a
cada cartão antes das portas:

- **O teste da troca de nome.** Troca-se a marca pelo nome de um
  concorrente qualquer. Se o cartão continua verdadeiro palavra por
  palavra, é uma tese sobre o mercado e não uma oportunidade desta marca.
  «Quem compra serviços B2B já pergunta primeiro à IA» passa com qualquer
  agência no lugar da destaque.ai, e por isso sai.
- **O teste sem IA.** Tira-se a IA do cartão. Se o que sobra continua a
  ser uma razão de negócio (há um grupo, há procura, a marca pode servi-lo),
  é uma oportunidade. Se não sobra nada, era uma ação de visibilidade.

### As sete portas: quatro que fecham, três que se dizem sempre

As portas 1, 2, 3 e 5 fecham: uma oportunidade que falhe uma delas fica de
fora, mesmo que a lista fique curta. As portas 4, 6 e 7 dizem-se sempre,
mas aceitam «não medido ainda», desde que se diga o que o mediria
(«quem ganha: não medido ainda; mede-o uma pergunta sobre [tema] em
inglês»). Um cliente com poucas perguntas medidas ou sem procura no pedido
continua a ter oportunidades; o que não pode é ter um cartão sem grupo,
sem procura, sem mudança ou sem direito a ganhar.

1. **Muda a quem, o quê, onde ou quando a marca vende** (fecha). A
   oportunidade muda pelo menos uma destas quatro coisas, e «onde» inclui
   o canal e a ferramenta por onde o grupo compra: o grupo a quem a
   marca vende, o que ela vende (um uso, um serviço, um modelo de compra),
   onde ou em que língua vende, ou quando (uma janela com data). Aparecer
   ou não aparecer numa pergunta que a marca já disputa não muda nenhuma
   delas: é análise de lacunas, e vive no plano.
2. **Nomeia o grupo de clientes** (fecha). Quem compra, dito de forma que a
   marca o possa reconhecer ao balcão ou numa chamada de vendas: «pais de
   crianças até aos 12 anos no Porto», «trabalhadores independentes sem
   seguro de saúde», «residentes estrangeiros no Algarve». «Os
   consumidores», «as empresas» ou «quem pesquisa online» não são um
   grupo. O grupo está no `titulo` e no `titulo_curto`.
3. **Mede a procura desse grupo, com a fonte** (fecha). Pelo menos um
   número sobre o grupo, e não sobre o setor inteiro, com a fonte e a data:
   dos nossos dados quando o pedido os traz (a lista está na secção 2), ou
   público, com endereço que se abre. A `nota` diz o que ele é e de onde
   vem («pesquisas por mês no Google por "dentista para crianças" e
   variantes, média de 12 meses, nov 2026»). Os números públicos vão em
   `numeros`. Nas famílias `concorrencia` e `tempo`, o número da
   falha ou da data (as denúncias ao regulador, o prazo do aviso) conta
   como prova da procura quando há pelo menos uma pergunta medida sobre o
   tema: a medição de 20 Nov 2026 mostrou que exigir aí um volume de
   pesquisa deixava cair cartões bons em clientes cujo pedido ainda não
   traz `procura`.
4. **Diz quem ganha hoje** (diz-se sempre). Quem a IA escolhe nas
   perguntas medidas sobre este grupo (com a contagem do pedido), e quem o
   serve no mercado quando se sabe. «Ninguém» é uma resposta válida, e é
   muitas vezes a melhor oportunidade. Sem pergunta medida sobre o grupo,
   escreve-se «não medido ainda» e a pergunta que o mediria, e essa
   pergunta é uma das ações. É a primeira frase do `porque`.
5. **Diz porque é que esta marca tem direito a ganhar** (fecha). O que a
   marca já tem e que está no site dela: a especialidade, a unidade na
   região, o produto, a língua de atendimento, a certificação, o preço.
   Cita-se a página. Uma marca sem nada no site que a ligue ao grupo não
   tem direito a ganhar, por maior que seja a procura. É a segunda frase do
   `porque`.
6. **Diz o tamanho** (diz-se sempre). O `numero` é a medida de tamanho
   (pessoas, pesquisas por mês, euros, contratos), e a ordem da lista
   segue a secção 4. Quando o número da porta 3 mede a procura mas não o
   tamanho do grupo, diz-se «tamanho não medido ainda» e a fonte que o
   daria. Um número de contexto (a percentagem de portugueses que usa IA)
   nunca é medida de tamanho de nenhum grupo.
7. **Diz o que a desmentia** (diz-se sempre). Uma observação concreta que,
   se acontecer, mostra que a oportunidade não existe ou não é desta
   marca, e que nós ou a marca podemos fazer em até 12 semanas. «Se a
   procura por "seguro para independentes" cair para metade em três meses,
   era a época do IRS e não um grupo.» «Se as marcações de crianças não
   subirem nas 8 semanas a seguir à página, a procura não era para uma
   clínica privada.» Vai no campo `refutacao` (secção 3).

### O que nunca é uma oportunidade de negócio

- **Uma tese verdadeira para todo o mercado.** «Quem compra serviços B2B já
  pergunta primeiro à IA» (ecrã da destaque.ai, 20 Nov 2026), «o comércio
  eletrónico cresce todos os anos», «os portugueses confiam nas avaliações
  online». Falham o teste da troca de nome.
- **Um técnico que só melhora a leitura do site.** Schema, `llms.txt`,
  velocidade, meta descriptions: é plano. É negócio quando dá ao grupo uma
  coisa nova para usar ou comprar (simulador, API, fluxo de marcação, feed
  que abre uma montra nova), família `produto_tecnico` ou `canal`.
- **Trabalho de visibilidade sem grupo novo.** Pedir avaliações no Clutch
  ou no Google, criar páginas de comparação, acrescentar schema, publicar
  um `llms.txt`, criar a ficha no Wikidata, «aparecer nas respostas sobre
  agências». É o plano (`gap_action_mapping.md`, task
  `generate_opportunities`), e falha o teste sem IA. Um cartão em que todas
  as ações do `fazer` são de visibilidade é um cartão do plano.
- **Uma estatística sem grupo de clientes.** «67% dos portugueses já usaram
  IA generativa», sozinho, não diz a quem vender nem o quê.
- **Uma oportunidade sem dados medidos.** A notícia de que um concorrente
  abriu uma loja, sem procura medida por trás; um «deve haver procura»;
  dados de outro país apresentados como do mercado da marca.
- **Defesa.** A marca já é a escolhida na maior parte das respostas sobre
  esse grupo. Manter o lugar é trabalho do plano, não uma oportunidade nova.
- **Procura sem direito a ganhar.** Há procura e ninguém a serve, mas o
  site não mostra nada que a marca tenha para ela (um hospital sem
  pediatria e a procura de urgência pediátrica).
- **Uma pergunta sem dono, sozinha.** Uma pergunta medida em que a IA não
  escolhe ninguém já está no relatório e no plano. Só vira oportunidade
  quando há um grupo e procura medida por trás dela (a procura sem dono, na
  família `mercado`, abaixo).

### Os sete cartões da destaque.ai, lidos com estas regras

O ecrã da destaque.ai tinha sete cartões a 16 Nov 2026 (três aceites,
quatro novos). Ficam aqui como exemplos resolvidos, porque mostram os
erros todos de uma vez. As contagens são as que os cartões escreveram.
Veredictos: **real** (passa as portas), **metade** (o grupo é real, mas
falta prova ou as ações são do plano), **plano** (não muda nada do que a
marca vende) e **recusa** (não há oportunidade).

| Cartão | Veredicto | Porquê |
|---|---|---|
| «Empresas estrangeiras em Lisboa procuram consultoria em inglês» | real | muda onde e em que língua; ninguém ganha |
| «Quem perde cliques para o resumo de IA procura quem resolva» | metade | grupo e dor reais; ações de conteúdo |
| «Fintechs novas procuram quem as ponha nas respostas da IA» | metade | vertical válido; o grupo não tem tamanho |
| «Startups jovens querem aparecer quando o comprador pergunta à IA» | plano | é o mercado de sempre da marca |
| «As empresas que começam a usar IA perguntam como contratar ajuda» | recusa | grupo vago, intenção errada, sem direito a ganhar |
| «Os estudos próprios chegam à imprensa que a IA lê» | plano | é uma tática, não um grupo de clientes |
| «Quem compra serviços B2B já pergunta primeiro à IA» | plano | tese de mercado; a estatística é de outro grupo e global |

**Real: as empresas estrangeiras em Lisboa** (`mercado`: uma língua
e uma procura sem dono). O grupo tem nome e tamanho: 186 projetos de
investimento estrangeiro em 2025, 44% deles centros de serviços (AICEP).
Muda a língua e o grupo a quem a marca vende. Em «Who does AEO consulting
in Lisbon?» a IA nomeia a destaque.ai em 4 de 14 respostas e não recomenda
ninguém. O que o cartão fazia mal foi a segunda ação, um guia em inglês,
que é conteúdo genérico. As ações certas são comerciais: a oferta em
inglês para os centros de serviços que se instalam (âmbito, prazo, quem
fala com eles), a página dessa oferta em inglês, e a prospeção aos
projetos que a AICEP anuncia. Faltava-lhe ainda a `refutacao` (porta 7):
por exemplo, se em 12 semanas nenhum centro de serviços contactado aceitar
uma conversa, o grupo existe mas não compra isto.

**Metade: quem perde cliques para o resumo de IA.** O grupo é real
(empresas cujo tráfego orgânico caiu com os resumos de IA) e a dor também:
em «AI Overview tirou tráfego o que fazer?» e «Tráfego orgânico caiu 50%
culpa do AI?» a IA não nomeia a destaque.ai em nenhuma das 15 respostas e
não recomenda ninguém. Falham duas coisas. O número é dos EUA (Pew) e não
mede quantas empresas portuguesas perderam tráfego. E as três ações são de
conteúdo e de SEO, incluindo rever títulos no Search Console, que nada tem
a ver com o grupo. A versão real é um serviço empacotado para este grupo
(um diagnóstico do tráfego perdido para a IA, com âmbito, prazo e preço)
e a prospeção às empresas que perderam tráfego, com o tamanho do grupo
medido em Portugal.

**Metade: as fintechs novas** (`mercado`). Especializar num setor
vertical pode ser uma oportunidade real. A IA recomenda a destaque.ai em 3
de 15 respostas sobre consultores de GEO para fintechs em Lisboa, tantas
como um consultor independente. Mas o número do cartão (1,1 mil milhões de
euros captados) é investimento e não diz quantas fintechs existem nem
quantas compram este serviço. A porta 6 aceita «não medido ainda», mas
então diz-se, com a fonte que o daria (o número de fintechs do próprio
relatório do setor), em vez de pôr no lugar um número que mede outra
coisa. E as ações eram ligações internas e uma secção nova numa página,
que são plano. A versão real diz quantas fintechs há em Portugal, o que a
oferta para fintechs tem que a genérica não tem, e a quem se faz a
prospeção.

**Plano: as startups jovens.** As 5 091 startups ativas existem, mas o
SaaS B2B português já é o mercado principal da destaque.ai. O cartão não
muda a quem, o quê, onde nem quando a marca vende (porta 1); muda só se
ela aparece em três perguntas que já disputa. As três ações (artigo,
proposta à Startup Portugal, tradução de um artigo) são do plano.

**Recusa: as empresas que começam a usar IA.** «11,5% das empresas
portuguesas usam IA» não nomeia um grupo que compre visibilidade em IA:
quem começa a usar IA procura quem a implemente, e a destaque.ai não vende
implementação. Falham as portas 2 e 5.

**Plano: os estudos próprios na imprensa.** Seis meios publicaram a peça
da Lusa sobre um estudo da destaque.ai. É uma tática de relações com a
imprensa que serve qualquer grupo, e não um grupo de clientes (porta 2).
Vai para o plano, onde já existe como autoridade e PR digital.

**Plano: quem compra serviços B2B.** «51% dos compradores de software B2B
começam a pesquisa num assistente de IA» falha o teste da troca de nome.
E a estatística nem é do grupo: a G2 mediu compradores de software, numa
amostra global, e não compradores de serviços em Portugal. As ações
(avaliações na Clutch e na Sortlist, duas páginas novas) são plano.

### Os tipos de oportunidade

Founder, 20 Nov 2026: *"não só canal, tudo"* e *"não seja simplista, seja
amplo"*. Uma oportunidade de negócio pode ser qualquer movimento de negócio
que os dados sustentem, técnico incluído. As famílias abaixo organizam esse
espaço e dizem que prova cada uma pede; os exemplos dentro delas são
ilustrativos, não uma lista fechada. O que não cabe em nenhuma entra como
`outro`. Todas passam as quatro portas que fecham.

Cada cartão diz a família em `tipo`. Os números dos exemplos vêm sempre do
pedido e das fontes, nunca daqui, e por isso estão entre parênteses retos.
Os exemplos com cliente ficam anónimos; os da destaque.ai são da nossa
marca.

**Uma lista é uma mistura.** Quando os dados sustentam várias famílias, a
lista mistura-as: um grupo novo, uma oferta, um canal, uma ferramenta, uma
data. Sete cartões de «um grupo pergunta e ninguém o ganha» são a mesma
oportunidade contada sete vezes, e deixam por ver as outras famílias.

| `tipo` | A família | O que cabe aqui |
|---|---|---|
| `mercado` | a quem a marca vende | segmento novo, geografia, língua, perfil de comprador, público institucional, procura sem dono |
| `oferta` | o que a marca vende | produto ou serviço novo, adjacente, pacote, versão de entrada ou premium, modelo de compra, garantia ou condição que ninguém dá |
| `canal` | por onde o grupo compra | marketplace, retalho, revenda e white label, parceiros comerciais, contratação pública, afiliados, agentes de IA |
| `produto_tecnico` | o que a marca constrói para o grupo usar | simulador, calculadora, API pública, dataset aberto, integração, fluxo de marcação, aplicação, catálogo estruturado que abre uma montra nova |
| `concorrencia` | o que os concorrentes fazem ou deixam de fazer | fraqueza de quem atende hoje, movimento de um concorrente a igualar, espaço abandonado |
| `tempo` | quando | lei ou regulação, prazo, programa de financiamento, sazonalidade, evento, tendência a subir |
| `parcerias` | com quem | associações setoriais, co-marketing, estudos conjuntos, integrações com plataformas do setor |
| `reputacao` | a confiança que vende | padrão de queixas que vira oferta ou garantia, certificação ou selo, prova pública que falta |
| `dados_e_conteudo` | dados com valor comercial | estudo próprio, índice ou barómetro que a imprensa e a IA citam e que abre conversas comerciais |
| `outro` | qualquer outro movimento de negócio | o que os dados sustentam e não cabe acima |

#### `mercado`: a quem a marca vende

- **O que cabe:** um segmento que a marca não serve hoje; uma região ou
  uma língua onde pode servir e não aparece (uma abertura recente da
  própria marca entra aqui); um perfil de comprador diferente (PME em vez
  de grande empresa, particulares em vez de empresas, ou o contrário); o
  público institucional (escolas, autarquias, hospitais públicos); e a
  procura sem dono, um grupo que pergunta e que ninguém ganha.
- **A prova:** a procura do grupo, a voz do cliente que o nomeia (o
  autocompletar, «As pessoas também perguntam», os fóruns, com a frase tal
  e qual), quem a IA escolhe para ele, e a página da marca que prova que
  pode servi-lo. Uma língua que a marca não fala, ou uma região onde não
  está, não é oportunidade dela.
- **Exemplos:**
  - B2B, da destaque.ai: as empresas estrangeiras que se instalam em
    Lisboa, que perguntam em inglês e a quem a IA não recomenda ninguém
    (ver os sete cartões acima).
  - Saúde: os beneficiários de um subsistema de saúde numa cidade onde o
    grupo tem duas clínicas convencionadas e a IA recomenda outras; ou os
    residentes estrangeiros de uma região, em inglês, com o atendimento na
    língua declarado no site.
  - Retalho: quem vive sozinho ou estuda fora, num supermercado. Uma faixa
    da população entra quando passa as portas, com as perguntas que esse
    grupo faz e o que a marca faz por ele (decisão de 12 Nov 2026: «pode
    ficar, mas tem que ter ações para isso»).
  - Qualquer setor: uma seguradora que só fala para famílias e os
    trabalhadores independentes ([N] pesquisas por mês, a subir), com um
    plano individual que já serve.
  - Procura sem dono: «dentista para crianças no Porto» e variantes somam
    [N] pesquisas por mês, a IA não escolhe nenhuma clínica em [n] de [m]
    respostas, e a clínica tem odontopediatra com página própria.
- **Não confundir com** uma pergunta sem dono sozinha, que é plano.

#### `oferta`: o que a marca vende

- **O que cabe:** um produto ou serviço novo; um adjacente, montado com o
  que a marca já tem; um pacote; uma versão de entrada ou premium; um
  modelo de compra (assinatura, a prestações, por uso, orçamento online,
  marcação no próprio dia); uma garantia ou condição que o grupo pede e
  ninguém dá.
- **A prova:** a procura do serviço ou da condição, quem a IA escolhe para
  ele, e os ativos da marca que o tornam possível, cada um com a página.
- **A barra:** o cartão nunca diz que a marca já oferece o que não
  oferece; diz que o pode lançar, com o que já tem, e a primeira ação do
  `fazer` é a decisão de o lançar.
- **Exemplos:**
  - B2B, da destaque.ai (aprovado pelo founder, 20 Nov 2026): o diagnóstico
    do tráfego perdido para a IA, para as empresas cujo tráfego orgânico
    caiu desde que os resumos de IA chegaram a Portugal. Em «AI Overview
    tirou tráfego o que fazer?» e «Tráfego orgânico caiu 50% culpa do AI?»
    a IA não nomeia a destaque.ai em nenhuma das 15 respostas e não
    recomenda ninguém (16 Nov 2026). O direito de ganhar está no Periscopy,
    que mede as respostas e lê o Search Console. O `fazer`: âmbito, prazo e
    preço do diagnóstico; a página da oferta; a prospeção às empresas com a
    queda medida. O tamanho do grupo mede-se em Portugal; o número da Pew é
    dos EUA e fica como apoio.
  - Saúde: implantes a prestações para quem adiou o tratamento por
    dinheiro, numa rede que já tem o financiamento com um parceiro.
  - Retalho: uma versão de entrada (o cabaz semanal fechado) para quem
    compara preços e não encontra nenhum supermercado na resposta da IA.
  - Qualquer setor: uma escola de línguas com professores certificados e a
    procura por «preparação IELTS Lisboa» a subir; uma clínica de estética
    com pagamento fracionado que a IA não cita quando se pergunta o preço.

#### `canal`: por onde o grupo compra

- **O que cabe:** marketplaces, retalho, revenda e white label, parceiros
  comerciais, a rede convencionada de uma seguradora, contratação pública,
  afiliados, plataformas de marcação, e os agentes de IA (abaixo).
- **A prova:** o volume do canal (contratos e euros no BASE, número de
  lojas ou de profissionais numa plataforma, quota de um comparador), quem
  lá ganha, e o que a marca precisa para entrar (certificação, convenção,
  ficha, integração).
- **A barra:** é onde a compra se faz, e não só onde se lê. Uma plataforma
  de avaliações onde ninguém compra é plano; a IA em geral nunca é um
  canal, porque é verdade para todos.
- **Exemplos:**
  - B2B, da destaque.ai (aprovado pelo founder): as agências de marketing
    digital que revendem o Periscopy em white label. Quantas agências há em
    Portugal (com fonte), o plano das agências já na página de preços, a
    lista a contactar e a condição de revenda. Desmente-o nenhuma de [N]
    agências contactadas pedir uma demonstração em 12 semanas.
  - B2B, da destaque.ai (aprovado pelo founder): os concursos públicos de
    marketing digital. O volume conta-se no BASE (contratos e euros nos
    últimos 12 meses, pelos códigos CPV de serviços de marketing), com quem
    ganhou cada um; o `fazer` são os documentos que um procedimento pede, a
    lista das entidades que contratam todos os anos e o alerta dos novos.
  - Qualquer setor: uma empresa de formação que nunca concorreu aos
    contratos públicos de formação na sua área e já tem a certificação que
    esses procedimentos pedem.
  - Saúde: entrar na rede convencionada de uma seguradora cujos segurados
    perguntam por prestadores na região.

**Agentes de IA, um canal com regras próprias.** Um assistente que marca a
consulta, enche o carrinho ou compra pelo cliente é um canal de compra:
servidores MCP, aplicações no ChatGPT, conectores do Gemini e do Claude,
feeds de produtos para as compras dentro dos assistentes, checkout feito
pelo agente.

- **A prova:** o lançamento de um concorrente com fonte pública e data, ou
  a documentação oficial da plataforma a dizer que o suporta (e que está
  aberto no mercado da marca); mais a procura no setor, dos nossos dados:
  perguntas em que se pede ao assistente que faça a tarefa («marca-me uma
  consulta de dermatologia», «encomenda as compras da semana»).
- **O direito de ganhar:** a marca tem o sistema para expor (marcação
  online, catálogo com preço e stock, API).
- **O `fazer`:** decisões de produto (construir o servidor MCP, publicar o
  feed, registar a aplicação), nunca conteúdo.
- **Exemplo, retalho:** um supermercado e o concorrente direto. Verificado
  a 20 Nov 2026: não se encontrou nenhum lançamento oficial de um servidor
  MCP pelo concorrente, mas existem dois servidores MCP não oficiais, de
  código aberto, para o site dele (pesquisam produtos, comparam preço por
  quilo e enchem o carrinho, sem pagar). É sinal de procura, não um
  lançamento do concorrente: o cartão diz isso, e só fala em «o
  concorrente lançou» com fonte pública e data. Verificar sempre no dia do
  pedido.
- **Exemplo, saúde:** um grupo hospitalar com marcação online por
  especialidade, e perguntas medidas em que se pede ao assistente que
  marque a consulta: um servidor MCP de marcação, com o que expõe
  (especialidades, unidades, vagas) e o que não expõe (dados clínicos).
- **O feed de produtos da OpenAI** ainda não tem a especificação confirmada
  por nós nem data de abertura em Portugal
  (`destaque-ai-tracker/docs/feed-produtos-openai.md`). Um cartão sobre ele
  diz isso e começa pela confirmação.

#### `produto_tecnico`: o que a marca constrói para o grupo usar

- **O que cabe:** uma ferramenta, simulador ou calculadora que o grupo
  pesquisa; uma API pública; um dataset aberto; uma integração com o
  software que o grupo já usa; um fluxo de marcação ou de compra que um
  agente consegue completar; uma aplicação; dados estruturados de catálogo
  que abrem uma montra nova (um comparador, as compras dentro dos
  assistentes).
- **A prova:** a procura da ferramenta (o volume de «simulador crédito
  habitação», «calculadora de IRS», «calculadora de portes»), quem a IA
  aponta hoje quando se pede essa ferramenta, e o que a marca já tem para a
  construir (os dados, o motor de preços, o sistema de marcação).
- **A barra:** dá ao grupo uma coisa nova para usar ou comprar. Schema,
  `llms.txt`, velocidade ou SEO técnico genérico só melhoram a leitura do
  site pelos motores, e são plano.
- **Exemplos:**
  - Banca e seguros: um simulador de crédito habitação ou de prémio, com a
    procura medida e a IA a apontar o simulador de um concorrente.
  - Saúde: a marcação online por especialidade completável sem telefone,
    que um agente consegue usar.
  - Retalho: a lista de compras partilhável com o preço do cabaz, ou o
    catálogo com preço, stock e identificadores publicado para uma montra
    de compras nova.
  - B2B: uma calculadora do retorno do serviço, ou uma API pública com os
    dados que os clientes já pedem por email.

#### `concorrencia`: o que os concorrentes fazem ou deixam de fazer

- **O que cabe:** a fraqueza de quem atende hoje (queixas, falhas, preço,
  tempo de espera, falta de stock); o movimento de um concorrente que a
  marca tem de igualar ou ultrapassar; o espaço que um concorrente
  abandonou (uma loja fechada, um segmento deixado, uma saída do mercado).
- **A prova:** a falha ou o movimento com número, fonte e data (o Portal
  da Transparência do SNS, o Portal da Queixa, as avaliações, um regulador,
  a imprensa, o anúncio do concorrente), as queixas da comunidade quando o
  pedido as traz, e as perguntas medidas onde a IA escolhe quem falha, ou
  ninguém.
- **A barra:** o `fazer` serve o grupo; nunca ataca o concorrente pelo
  nome.
- **Exemplos:**
  - Saúde: o tempo de espera do serviço público para uma especialidade na
    região passa o máximo em [x]% dos casos ([fonte], [data]), a IA explica
    a espera e não nomeia alternativa, e o hospital tem a especialidade na
    unidade da região.
  - Retalho: o concorrente expõe o catálogo aos assistentes e a marca não
    (só com fonte pública e data; ver os agentes de IA, acima).
  - B2B: um concorrente que deixou de servir PME, com a notícia e a data, e
    a marca com uma oferta para elas.

#### `tempo`: quando

- **O que cabe:** uma lei ou regulação, um prazo, um programa de
  financiamento (PRR, Portugal 2030), uma época (Black Friday, regresso às
  aulas, IRS), um evento (uma feira, um congresso do setor), uma tendência
  a subir na imprensa ou no Google.
- **A prova:** a data com fonte (Diário da República, regulador, o aviso,
  a imprensa), a procura a subir (tendência de três meses, quando o pedido
  traz `procura`, ou o Google Trends com endereço), e quem a IA escolhe nas
  perguntas sobre o tema.
- **A barra:** o cartão diz quando a janela fecha, ou quando a procura
  atinge o pico; depois da data, não volta.
- **Exemplos:**
  - Retalho (aprovado pelo founder): a Black Friday, a 27 de novembro em
    2026. A procura por «black friday [categoria]» multiplica-se por [x]
    nas semanas antes, a IA nomeia [concorrentes] quando se pergunta onde
    há desconto, e o cartão diz até quando a página da campanha tem de
    estar publicada para a IA a poder ler.
  - Qualquer setor (aprovado pelo founder): um aviso de apoio à
    digitalização das PME (PRR, Portugal 2030), com o prazo de candidatura
    e a alínea que torna elegível o que a marca vende. Só entra com o aviso
    aberto no dia do pedido.
  - Software: uma nova obrigação fiscal com data de entrada em vigor, que
    o produto já cumpre.
  - Contabilidade e finanças pessoais: a época do IRS, de abril a junho.

#### `parcerias`: com quem

- **O que cabe:** uma associação setorial, uma ordem profissional, uma
  câmara de comércio ou uma incubadora que já fala com o grupo;
  co-marketing com uma marca complementar; um estudo conjunto; uma
  integração com uma plataforma do setor (o software de gestão das
  clínicas, o ERP das PME).
- **A prova:** quantos membros ou clientes tem o parceiro (com fonte, quase
  sempre o site dele), que parte deles é o grupo, e o que a marca leva que
  o parceiro quer dar aos seus.
- **Exemplos:**
  - B2B, da destaque.ai (aprovado pelo founder): uma associação setorial
    que leva aos associados um estudo sobre o que a IA responde no setor
    deles, com a oferta de diagnóstico para quem o ler. Não confundir com
    mandar um estudo à imprensa, que é tática do plano: aqui o destinatário
    é um grupo de clientes e a ação é comercial.
  - Saúde: uma seguradora ou uma empresa de benefícios que oferece a rede
    da marca aos seus segurados ou colaboradores.
  - Retalho: co-marketing com uma marca de entregas ou de refeições que
    serve o mesmo grupo.

#### `reputacao`: a confiança que vende

- **O que cabe:** um padrão de queixas que vira oferta ou garantia; uma
  certificação ou selo que o grupo valoriza; uma prova pública que falta
  para vender a um segmento (casos com nome, resultados auditados).
- **A prova:** o padrão com número e fonte (as queixas da comunidade, o
  Portal da Queixa, as avaliações), a pergunta medida em que a IA o repete,
  e o que a marca já tem para o resolver.
- **A barra:** responder a avaliações e pedir avaliações é plano. Isto é
  quando a confiança muda o que se vende ou a quem.
- **Exemplos:**
  - Saúde: queixas repetidas sobre faturação passam a orçamento fechado
    antes do ato, como condição da oferta.
  - B2B: a certificação de segurança da informação que a banca exige a um
    fornecedor, quando a marca já cumpre os requisitos.
  - Retalho: a garantia de frescura ou de devolução que as queixas pedem e
    nenhum concorrente dá.

#### `dados_e_conteudo`: dados com valor comercial

- **O que cabe:** um estudo, índice ou barómetro próprio, recorrente, que a
  imprensa e a IA citam e que abre conversas comerciais (uma lista de
  empresas a contactar, uma parceria, um convite para falar ao setor).
- **A prova:** o grupo a quem os dados servem, a procura do tema, e o que a
  marca já tem para os produzir (dados próprios, método publicado).
- **A barra:** um artigo para aparecer nas respostas é plano. Isto é um
  produto de dados com uso comercial: quem o lê é o grupo a quem a marca
  vende, e o `fazer` diz como o estudo vira conversas.
- **Exemplos:**
  - B2B, da destaque.ai: um barómetro trimestral do que a IA responde num
    setor, enviado às empresas desse setor com o diagnóstico de cada uma.
  - Saúde: um índice anual de tempos de espera por especialidade, que a
    imprensa cita e que leva a marcações.
  - Retalho: o preço do cabaz semanal, publicado com método, que
    comparadores e imprensa citam.

#### `outro`: qualquer outro movimento de negócio

- **O que cabe:** o que os dados sustentam e não cabe nas famílias acima.
- **A barra:** as quatro portas que fecham, como as outras, e uma frase a
  mais no `porque` a dizer que movimento de negócio é e porque não é
  trabalho do plano.

### Quantas, e como se procura

Procura-se em todos os tipos antes de fechar a lista, e devolve-se só o que
passa as sete portas. Não há mínimo (decisão do founder, 20 Nov 2026): três
oportunidades que passam valem mais do que dez que um diretor descarta à
primeira leitura. O tecto
continua a ser 12.

Antes de fechar, passa-se por todas as famílias da tabela, e por estes
quatro ângulos, que é onde elas aparecem:

1. **O mercado:** procura que cresce, regras e prazos que mudam, falhas do
   serviço público (`mercado`, `tempo`, `concorrencia`).
2. **A própria marca:** o que ela abriu, comprou, lançou ou anunciou nos
   últimos 12 meses (unidade nova, região nova, serviço novo), e o que o
   site e os sistemas mostram que ela já sabe fazer (`mercado`, `oferta`,
   `produto_tecnico`, `reputacao`, `dados_e_conteudo`). Procura na imprensa
   regional da zona.
3. **Os concorrentes:** aberturas, lançamentos, investimentos, resultados,
   queixas e saídas nos últimos 12 meses (imprensa económica, comunidade).
   Onde um concorrente investe, a procura existe; onde sai ou falha, fica
   espaço (`concorrencia`, `canal`).
4. **Quem já reúne ou serve o grupo:** associações, ordens, câmaras de
   comércio, incubadoras, revendedores, plataformas e assistentes de IA
   (`parcerias`, `canal`).

Um destes ângulos sem nenhuma oportunidade só é aceitável se a pesquisa não
encontrou nada que passasse as portas; diz-se isso no `porque` de outra
oportunidade, nunca se inventa.

### O uso de IA no setor não é um cartão

Até 20 Nov 2026, a primeira oportunidade era sempre «a IA no caminho do
cliente»: quanta gente do setor já começa a pesquisa numa IA (decisão de 11
Nov 2026). Falha o teste da troca de nome e as portas 1 e 2, e é exatamente o
cartão que o founder recusou. **Deixa de ser uma oportunidade** (decisão do
founder, 20 Nov 2026).

O número continua a ser útil, como contexto. O pedido traz-o em
`ia_no_setor`, e o relatório mostra-o fora da lista das oportunidades.
Dentro de um cartão, só entra como uma linha de `numeros` quando é sobre o
grupo do cartão (quantos [grupo] já usam IA para escolher [serviço]), e
nunca como o `numero` do cartão.

### Em saúde: quem pergunta à IA por uma doença está a caminho de uma consulta

Founder, 15 Nov 2026, sobre o relatório de um grupo hospitalar: *"em
oportunidade vamos colocar converter pessoas que perguntam ao LLM sobre
doenças pra irem à [marca]"*. No setor da saúde procura-se sempre esta
oportunidade, e ela entra quando passa as sete portas, com as doenças
nomeadas. É da família `mercado` (uma procura sem dono).

- **O grupo:** quem procura informação sobre [doenças ou sintomas
  nomeados] na região da marca, e não «quem pergunta à IA por saúde».
- **O número:** a procura dos temas de saúde das perguntas medidas, quando
  o pedido a traz, e o uso de IA para perguntas de saúde (`ia_no_setor` ou
  um estudo com país e ano) como linha de apoio. Sem procura para as
  doenças nomeadas, o cartão não entra.
- **Quem ganha hoje:** nas perguntas medidas sobre essas doenças (a
  contagem de cada uma), se a IA explica o tema e não nomeia ninguém, ou se
  nomeia outra marca para ser vista.
- **O direito de ganhar:** a especialidade e a unidade da marca que tratam
  essas doenças, com a página.
- **O `fazer`:** por doença com procura, uma página da marca que responda à
  pergunta que as pessoas fazem e diga onde e com que especialidade a
  marca a trata, com o caminho para a marcação; e os sites de saúde que a
  IA lê nessas respostas, onde a marca deve aparecer. Todo o conteúdo
  clínico passa pela aprovação da direção clínica da marca antes de
  publicar.
- **Proibido aqui:** prometer diagnóstico, cura ou resultado clínico,
  escrever conselho médico em nome da marca, ou usar o medo como argumento.
  O cartão fala do caminho até à consulta, nunca do tratamento.

### Num refazer, parte da lista anterior

Quando o pedido traz `anteriores` (as oportunidades da execução anterior),
não se recomeça do zero. Reabre cada fonte e passa cada uma pelas sete
portas: a que continua válida fica, com o número atualizado se mudou; a que
caiu, deixou de ser verdade ou não passa as portas sai. Depois
acrescentam-se as novas, até 12, e reordena-se tudo pela secção 4.
Devolve-se sempre a lista inteira.

## 2. Onde procurar, por tipo de fonte

### Os nossos dados (a porta 3 pede pelo menos um)

| Dado | Onde vem no pedido | Para quê |
|---|---|---|
| Perguntas medidas | `medicao.perguntas_medidas` (respostas, citada, escolhida, `escolhidos_em_vez`), `medicao.sem_dono`, `medicao.lider` | quem a IA escolhe para o grupo, ou que não escolhe ninguém |
| Concorrentes medidos | `concorrentes` (nome, domínio, respostas) | quem ganha hoje |
| Unidades | `unidades` (total e as de pior avaliação) | geografia, falhas de serviço da própria marca |
| Procura nos motores de busca | `procura` (termo, volume mensal, tendência de três meses), quando o pedido a traz | o tamanho do grupo e se está a crescer |
| A voz do cliente | `voz_do_cliente` (autocompletar, «As pessoas também perguntam», conversas em fóruns), quando o pedido a traz | o grupo e o uso nas palavras de quem compra |
| A comunidade | `comunidade` (menções em fóruns e avaliações, com sentimento), quando o pedido a traz | queixas sobre quem serve hoje |
| O que a marca vende | `negocio` (público, local, páginas do último scan), quando o pedido o traz; senão, o site da marca lido na hora | o direito de ganhar |

Um número dos nossos dados não tem endereço público. Vai no `numero` com a
`nota` a dizer a fonte e a data, ou no `porque` com a contagem do pedido, e
nunca em `numeros`, onde o código recusa um número sem endereço.

### As fontes públicas

Prefere sempre a fonte primária; aceita a notícia que a cita quando a
primária não abre, e diz-o na `fonte` («ERS, via DN»).

| Tipo | Exemplos (Portugal) | Para quê |
|---|---|---|
| Estatística oficial | INE, Pordata, Eurostat, Banco de Portugal, Portal da Transparência do SNS | população, consumo, digital, envelhecimento, nascimentos |
| Reguladores | ERS (saúde), ASF (seguros), ANACOM (comunicações), ERSE (energia), CMVM, Banco de Portugal, Turismo de Portugal | tempos de espera, mercado segurado, reclamações, licenças |
| Associações do setor | APHP (hospitais privados), APS (seguradores), APED (distribuição), AHRESP, APAVT, ACEPI (economia digital) | volume, investimento, atividade do setor |
| Contratação pública e legislação | BASE (contratos públicos), Diário da República | canais de compra, prazos e regras novas |
| Imprensa económica | ECO, Expresso, Jornal de Negócios, Dinheiro Vivo, Observador, Público, imprensa regional na região do prospect | aberturas, investimentos e resultados de concorrentes |
| Queixas e avaliações | Portal da Queixa, Trustpilot, fichas do Google | falhas de quem serve hoje |
| Tendências de pesquisa | Google Trends (Portugal) | procura a subir ou a descer por termo |
| Estudos com amostra declarada | relatórios de mercado com metodologia, inquéritos com N e data | comportamento do consumidor, uso de IA |

Para outros mercados, os equivalentes locais (o instituto de estatística, o
regulador e a associação do setor do país).

**Sempre que o pedido traz medição sobre o tema da oportunidade, usa-a.** Se
há uma pergunta do mesmo tema em `medicao.sem_dono` ou nas frentes do
`lider`, a `ligacao` é obrigatória. Se o tema aparece na medição de outra
forma (por exemplo, uma especialidade onde a marca é citada e quase nunca
escolhida, ou um facto errado sobre ela), o `porque` diz o número medido, com
a mesma contagem que vem no pedido. Uma oportunidade sobre um tema que o
relatório mede, sem dizer o que a medição mostra, está incompleta.

## 3. A forma de cada oportunidade

```json
{
  "tipo": "mercado",
  "tema": "Trabalhadores independentes",
  "titulo": "Uma frase de negócio que nomeia o grupo, com o número dentro quando cabe",
  "numero": "[N]/mês",
  "nota": "o que o número é e de onde vem, numa linha",
  "porque": "quem ganha hoje este grupo (ou ninguém). Porque é que esta marca tem direito a ganhá-lo, com a página.",
  "numeros": [
    { "texto": "o facto com o número", "fonte": "Quem publicou (via quem, se for o caso)",
      "url": "https://endereco-que-abre", "data": "11 mai 2026" }
  ],
  "fazer": ["a decisão de negócio", "a ação que leva a decisão à resposta da IA"],
  "ia": "como aparecer na resposta da IA quando este grupo pergunta sobre isto",
  "refutacao": "o que, se acontecer em até 12 semanas, mostra que a oportunidade não existe",
  "ligacao": "um pedaço do texto de uma pergunta medida, ou null"
}
```

- `tipo`: a família, uma das chaves da tabela da secção 1. `outro` quando
  nenhuma serve, com a frase a mais no `porque`. Um cartão que só cabe em
  `outro` por não mudar nada do que a marca vende é plano, não `outro`.
- `titulo` e `titulo_curto` nomeiam o grupo de clientes (porta 2).
- `numero` e `nota` são o que aparece grande no cartão: a medida do tamanho
  do grupo (porta 6), tal como está na fonte.
- `porque`: duas frases, por esta ordem. A primeira diz quem ganha hoje o
  grupo, ou que ninguém o ganha, com a contagem do pedido (porta 4). A
  segunda diz porque é que esta marca tem direito a ganhá-lo, com o que o
  site dela mostra (porta 5). Uma terceira só quando a proposta de valor
  ligada ainda não está publicada (secção 7).
- `numeros`: dois a quatro, cada um com fonte, data e endereço que se abre.
  **Um número sem endereço é recusado pelo código.**
- `fazer`: duas ou três ações, cada uma começada por verbo e possível de
  começar este mês. **As ações são comerciais**: a oferta para este grupo
  (o serviço empacotado, com âmbito e prazo), a página dessa oferta escrita
  para o grupo e na língua dele, a prospeção direta a quem pertence ao
  grupo, o preço ou o modelo de compra, a parceria que dá acesso ao grupo.
  A visibilidade (os sites que a IA lê, a ficha, o schema) entra só como
  apoio, no máximo uma ação, e só para o grupo do cartão; o resto sai no
  plano quando o cliente aceitar (`gap_action_mapping.md` § "De uma
  oportunidade de negócio a ações"). Um artigo de blogue, um título no
  Search Console ou uma ligação interna não são ações de uma oportunidade.
- `ia`: uma frase sobre o que a resposta da IA precisa de encontrar (o
  número com data, o autor com nome, a página que responde à pergunta
  inteira, a ficha completa). É conselho e só conselho: não vende o
  Periscopy nem a destaque.ai (a oferta está no fim do relatório, e um
  conselho que acaba em venda deixa de ser lido como conselho).
- `refutacao`: uma frase com a observação que desmentia a oportunidade
  (porta 7), que nós ou a marca podemos fazer em até 12 semanas, com o
  número ou o facto a observar.
- `ligacao`: só quando a ligação é real. É um pedaço curto do texto de uma
  pergunta que vem em `medicao.sem_dono` ou nas frentes do `lider` (por
  exemplo «atendimento em inglês»). O código casa-o e mostra o número
  medido. Se não há pergunta que lhe corresponda, `null`.

O `tipo` e a `refutacao` são campos novos (20 Nov 2026) e opcionais para o
código: até o Tracker os ler, ficam gravados no relatório do prospect e não
aparecem no ecrã do cliente. A porta 7 vale na mesma: a `refutacao` vai
sempre, nem que seja «não medido ainda» com o que o mediria.

### O que não é oportunidade vai para o plano: `para_o_plano`

Founder, 20 Nov 2026: *"garanta que está no plano, não pode sumir,
precisamos de coisas assim no plano"*. Os cartões da destaque.ai
classificados como plano (as startups, os estudos na imprensa, os
compradores B2B) tinham boa prova e boas ações; só estavam no ecrã errado.
Por isso, o que esta task recusa como plano não se deita fora: devolve-se,
ao lado de `items`, numa lista `para_o_plano`, e o próximo
`generate_opportunities` do mesmo cliente recebe-a e diz o destino de
cada entrada: `acao`, `coberta` (com `accao`, o id da ação aberta) ou
`descartada` (com `motivo`)
(`gap_action_mapping.md` § "O que chega das oportunidades de negócio").

```json
"para_o_plano": [
  { "de_oportunidade": "o id de uma anterior que sai do ecrã, ou null",
    "titulo": "o que o cartão dizia, numa frase",
    "porque_plano": "a porta que falha (por exemplo, não muda a quem a marca vende)",
    "perguntas": ["prompt_id"],
    "medicao": "«pergunta» com a contagem do pedido (x de N) e quem ganha",
    "numeros": [ { "texto": "...", "fonte": "...", "url": "https://...", "data": "..." } ],
    "acoes": ["uma ação com o ativo exato (página, órgão, perfil)"] }
]
```

Vai para aqui o que tem prova e ações concretas e falha só por não ser
oportunidade de negócio (porta 1 ou porta 2, ou é uma tática). Uma tese de
mercado sem medição da marca não vai: não há ação de plano que saia dela.
A língua é a do cliente; não precisa das três, porque quem a lê é o
cérebro.

### Antes de devolver, relê cada cartão contra estas nove perguntas

As oito primeiras nasceram do relatório do Hospital da Luz de 11 Nov 2026,
onde os onze cartões tinham estes erros e o founder os apanhou a ler. A
nona nasceu do ecrã da destaque.ai de 20 Nov 2026.

1. **O título diz o que a fonte diz?** Com as palavras dela. «Ponderam
   recorrer à IA em vez de consultar um médico» não é «admitem perguntar à
   IA antes de ir ao médico»: um verbo ou uma preposição trocados mudam o
   facto, e quem abre a fonte vê a diferença. O mesmo para o mês, a
   população («dos 16 aos 74 anos») e o universo («nas consultas
   realizadas», que não é «nos doentes em espera»).
2. **O título e o `porque` dizem a mesma coisa?** Se o `porque` diz que a
   IA não escolhe ninguém, o título não pode dizer que ela já escolhe. Lê-se
   o título sozinho e depois o `porque`: se um desmente o outro, o título
   está errado.
3. **Cada contagem da medição é a do pedido, com o denominador e na mesma
   pergunta?** «Citado em 13 de 15 respostas», nunca «até 15 vezes em 15».
   «Ninguém é escolhido» só quando nenhuma resposta escolhe ninguém; se uma
   escolhe outra marca, diz-se qual («uma só resposta escolhe alguém, a
   Affidea»). Um facto errado da IA sobre a marca diz em que motor e em
   que pergunta aparece.
4. **O tema está na medição e o cartão não o diz?** Procura nas perguntas
   medidas todas, e não só em `sem_dono`: se há uma pergunta do mesmo tema
   onde a marca é citada e um concorrente é escolhido, esse é o número do
   `porque`, e é quase sempre o mais forte do cartão. Escrever «o tema não
   aparece esta semana» exige ter procurado.
5. **Uma ação repete a de outro cartão?** Cada ação vive num cartão só, o
   do tema a que pertence. A página do parto em inglês é do cartão do
   parto, não do dos estrangeiros.
6. **Cada número tem uma ação que lhe responde?** Lê-se cada linha de
   `numeros` e procura-se, no `fazer`, a ação que trata dela. Um número
   sobre um público (os jovens, os estudantes) pede uma ação para esse
   público; um número sem ação que lhe responda sai do cartão (12 Nov 2026,
   um supermercado com o uso de IA pelos jovens e nenhuma ação para eles).
7. **Um diretor da empresa entende cada frase à primeira?** Sem palavras
   nossas: nunca «citado», «escolhido», «sem dono», «fonte» ou «medição»
   soltos. Diz-se o que a IA faz: «a IA nomeia a marca mas recomenda
   um concorrente», «a IA não recomenda nenhum supermercado», «os sites que a
   IA lê para responder». Uma ação diz o que fazer, onde e para quê, sem
   pedir ao leitor que saiba como medimos.
8. **Cada ação sai dos números deste cartão?** Lê-se o número e logo a
   seguir a ação: se a ação serviria em qualquer outro cartão, ou não
   responde ao que o número mostra, está errada (12 Nov 2026: um cartão com
   o uso de IA em Portugal e, como ação, «escolher as cinco perguntas…» e
   «rever cada trimestre», que não saem dali). A ação escolhe já, no
   cartão, e nomeia: que perguntas medidas, que página, que site terceiro.
   Nunca «escolher as perguntas» nem «acompanhar»: isso é o trabalho de
   quem escreve o cartão, não do leitor.
9. **O cartão passa as sete portas e os dois testes?** Troca-se o nome da
   marca pelo de um concorrente: se o cartão continua verdadeiro, sai.
   Tira-se a IA: se não sobra uma razão de negócio, sai. As quatro que
   fecham: muda a quem, o quê, onde ou quando a marca vende; o grupo tem
   nome; a procura tem número e fonte; o direito de ganhar tem página. As
   três que se dizem sempre (quem ganha hoje, o tamanho, a `refutacao`)
   estão escritas, com o número ou com «não medido ainda» e o que o
   mediria. Por fim, as ações: se tirar a única ação comercial
   deixa o cartão igual a uma ação do plano, o cartão é do plano.

Os números escrevem-se como no guia da casa: espaço nos milhares
(1 666 823), vírgula decimal (70,6%).

## 4. Ordem

A ordem é juízo; os números não. Ordena-se por estes critérios, por esta
ordem de peso:

1. **O tamanho do grupo** (o `numero`: pessoas, pesquisas por mês, euros,
   contratos).
2. **A tendência**: a crescer pesa mais; um cartão de `tempo` que fecha em breve
   sobe.
3. **O direito de ganhar**: a marca já tem tudo o que é preciso pesa mais
   do que a marca que tem de lançar uma oferta nova (`oferta`).
4. **Quem ganha hoje**: ninguém pesa mais do que um líder fraco, e um líder
   fraco mais do que um líder forte.

## 5. Proibido

- **Inventar um número**, arredondar para impressionar ou juntar números de
  fontes diferentes como se fossem um só. Se não há número, a oportunidade
  não entra.
- Um número em `numeros` sem fonte, sem data ou sem endereço.
- Apresentar dados de outro país como se fossem do mercado do prospect sem
  o dizer («amostra dos EUA», «dados de fornecedor de SEO, indicativos»).
- **Dizer que a marca oferece o que não oferece.** Um cartão de
  `oferta` nova diz que a marca pode lançar o serviço, com os ativos que já
  tem; nunca que já o tem. Um cartão de outra família que depende de uma oferta que não
  se confirmou no site fica de fora (diz-se na `nota` do job).
- Uma tese de mercado, uma estatística sem grupo ou um cartão só de
  visibilidade (ver «O que nunca é uma oportunidade de negócio»).
- Ligar à medição por semelhança vaga: a `ligacao` é para a mesma pergunta.
- Atacar um concorrente pelo nome no `fazer`.
- Escrever para o prospect fazer o que só nós fazemos: o `fazer` é dele; o
  que a destaque.ai faz já está no resto do relatório.

## 6. Escrita

A do guia da casa (`references/escrita.md`): português de Portugal com o
Acordo de 1990, "você", sem travessões, números antes de adjetivos, frases
curtas. A língua é a do cliente (`lingua` no contexto); quando o relatório
se lê em várias, cada texto pode vir em `{pt, en, fr}`.

## 7. Destino `cliente`: o ecrã «Oportunidades de negócio»

Pedido do founder a 11 Nov 2026: o que se fazia à mão para os prospects
passa a ser feito pelo Periscopy para cada cliente, todas as semanas, a
cruzar com a medição e com as propostas de valor, e a virar ações no
«Plano». Especificação: `destaque-ai-tracker/docs/produto/OPORTUNIDADES-DE-NEGOCIO.md`.

### O que o pedido traz a mais

- `medicao.perguntas_medidas[]`, `medicao.sem_dono[]` e as frentes de
  `medicao.lider` trazem `prompt_id` em cada pergunta.
- `propostas_de_valor[]`: as propostas de valor que a marca declarou no
  Inception, cada uma com `id`, `titulo`, `afirmacao`, `prova` (o endereço
  onde está publicada, ou `null`) e `perguntas` (os `prompt_id` que cobre).
  Até doze; `propostas_fora` conta as que ficaram de fora.
- `anteriores[]`: as oportunidades que o cliente já tem, cada uma com `id`,
  `estado` (`new`, `accepted`, `dismissed`, `expired`), `motivo` (quando foi
  descartada) e `cartao` (o que foi escrito).

### O que se devolve a mais, em cada item

```json
{
  "id": "o id de uma anterior, quando é a mesma oportunidade; sem ele é nova",
  "perguntas": ["prompt_id", "prompt_id"],
  "proposta_de_valor": "o id de uma proposta do pedido, ou null",
  "titulo_curto": {"pt": "…", "en": "…", "fr": "…"},
  "legenda": {"pt": "…", "en": "…", "fr": "…"}
}
```

- **`perguntas`**: os `prompt_id` das perguntas medidas que a oportunidade
  toca, tirados só do pedido. Substitui a `ligacao` por texto: a pergunta
  reescreve-se, o identificador não. Vale a mesma regra da `ligacao`: a
  mesma pergunta, nunca semelhança vaga. Sem pergunta que lhe corresponda,
  lista vazia (o ecrã sugere medir uma pergunta nova).
- **`proposta_de_valor`**: o `id` da proposta que esta oportunidade serve,
  quando serve uma de verdade (a afirmação é o que a oportunidade pede que a
  IA diga). Quando nenhuma serve, `null`, e o ecrã oferece criar uma a
  partir da oportunidade.
- **`titulo_curto`**: o título de uma linha da lista, até 70 caracteres
  (o servidor aceita até 80 e, acima disso, deita fora o campo e corta o
  longo com reticências). Diz a oportunidade em palavras de quem compra,
  com o grupo de clientes e sem números: o número já está ao lado, na
  mesma linha. Não repete o `titulo` encurtado; o `titulo` continua a ir,
  e lê-se no detalhe. Ex.: "Quem compara o cabaz pergunta à IA onde fica
  mais barato", com o `titulo` "O cabaz de 63 bens essenciais da DECO custa
  256,73 euros, mais 14,91 euros do que no início do ano, e quem pede um
  simulador de preços não recebe nenhum supermercado na resposta da IA".
- **`legenda`**: o que o `numero` mede, em duas linhas no máximo, até 60
  caracteres (o servidor aceita até 70). Começa onde o número acaba
  ("27,6% contra 22,3%" → "Continente contra Pingo Doce, 1.º semestre de
  2026"). A `nota` continua a existir, para o relatório.
- **Três línguas sempre.** Cada texto vem em `{pt, en, fr}`, incluindo o
  `titulo_curto`, a `legenda` e a `refutacao`: o ecrã lê-se nas três. Uma
  cadeia simples só no destino `relatorio`.

### A lista é a mesma de uma semana para a outra

O cliente decide sobre cada cartão (aceita ou descarta), e uma lista que se
reescreve todas as semanas apaga essas decisões. Por isso:

1. **Uma anterior que continua válida volta com o seu `id`**, com o número
   atualizado se mudou (reabre a fonte, como no refazer da secção 1).
2. **Uma descartada nunca volta**, nem com outro título nem por outras
   palavras. O `motivo` diz porquê, e vale para oportunidades parecidas.
3. **Uma aceite que continua válida volta com o seu `id`.** Uma que deixou
   de ser verdade não se devolve: o Periscopy mostra-a como aceite "por
   confirmar" e o cliente decide.
4. **O tecto de 12 conta as novas e as `new` mantidas.** As aceites
   devolvidas não ocupam lugar.
5. Evitar duplicados com outro texto é trabalho teu: o código só compara
   por `id`.
6. **Uma anterior que não passa as sete portas não volta** (20 Nov 2026).
   Vale para as que nasceram antes desta revisão: uma `new` que não volta
   caduca, e uma aceite que não volta fica "por confirmar". É assim que
   cartões como «Quem compra serviços B2B já pergunta primeiro à IA» saem
   do ecrã sem ninguém os apagar à mão. Quando sai por ser plano, vai em
   `para_o_plano` com o seu `id` em `de_oportunidade`, e a prova e as ações
   passam para o plano.

### Proposta de valor que ainda não está publicada

Quando a oportunidade serve uma proposta com `prova: null`, o `porque` diz,
numa frase simples, que aquilo ainda não está escrito em lado nenhum que a
IA leia. O trabalho de a publicar sai no plano, quando o cliente aceitar
(`gap_action_mapping.md` § "De uma oportunidade de negócio a ações").
