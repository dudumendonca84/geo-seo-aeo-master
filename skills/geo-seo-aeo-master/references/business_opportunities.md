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
   oportunidade muda pelo menos uma destas quatro coisas: o grupo a quem a
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
   `numeros`. Nos tipos `fraqueza_de_quem_serve` e `janela`, o número da
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
  quando há um grupo e procura medida por trás dela (tipo
  `procura_sem_dono`, abaixo).

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

**Real: as empresas estrangeiras em Lisboa** (`geografia_ou_lingua`, com
`procura_sem_dono`). O grupo tem nome e tamanho: 186 projetos de
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

**Metade: as fintechs novas** (`segmento_novo`). Especializar num setor
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

Cada cartão é de um tipo, e diz qual em `tipo`. Os tipos servem duas
coisas: obrigam a procurar em todos os sítios onde pode haver uma
oportunidade antes de fechar a lista, e dizem que prova cada uma precisa.
Os exemplos mostram a forma; os números vêm sempre do pedido e das fontes,
nunca daqui, e por isso estão entre parênteses retos.

| `tipo` | O que é | A prova mínima |
|---|---|---|
| `procura_sem_dono` | um grupo pergunta e ninguém o ganha | procura do grupo + perguntas medidas em que a IA não escolhe ninguém |
| `segmento_novo` | um grupo que a marca não serve hoje, com procura medida | procura do grupo + quem a IA escolhe para ele + o que a marca já tem |
| `geografia_ou_lingua` | uma região ou uma língua onde a marca pode servir e não aparece | procura local ou na língua + quem ganha lá |
| `novo_uso` | um uso novo do que a marca já vende | a voz do cliente com o uso dito + o produto que já o faz |
| `adjacente` | um serviço ou produto ao lado do que a marca vende | procura do serviço + os ativos que a marca já tem para ele |
| `fraqueza_de_quem_serve` | um concorrente ou um serviço público que falha a um grupo | a falha com número + a IA a escolher quem falha, ou ninguém |
| `janela` | uma mudança com data que abre procura agora | a data com fonte + a procura a subir |
| `canal` | um sítio onde o grupo compra e a marca não está | o volume do canal + quem lá ganha |
| `modelo_de_compra` | uma forma de pagar ou de comprar que o grupo procura e quase ninguém oferece | a voz do cliente a pedi-la + quem a oferece |
| `parceria` | uma organização que já reúne o grupo e lhe dá acesso | quantos membros tem o grupo + o que a marca leva que a organização quer |

#### `procura_sem_dono`: um grupo pergunta e ninguém o ganha

- **O que é:** um grupo faz uma pergunta de compra com volume, e a IA
  responde sem escolher ninguém, ou escolhe marcas que não servem bem o
  grupo.
- **A prova:** a procura dos termos do grupo (volume e tendência, quando o
  pedido traz `procura`), e as perguntas medidas sobre o mesmo tema, com a
  contagem (`medicao.sem_dono`, ou `perguntas_medidas` com
  `escolhidos_em_vez` vazio). A ligação às perguntas é obrigatória.
- **A barra:** um volume com fonte, uma pergunta medida do mesmo tema e uma
  página da marca que serve o grupo.
- **Exemplo:** uma clínica dentária do Porto. «Dentista para crianças no
  Porto» e variantes somam [N] pesquisas por mês; nas três perguntas
  medidas sobre o tema, a IA não escolhe nenhuma clínica em [n] de [m]
  respostas; a clínica tem odontopediatra com página própria. O grupo são
  os pais de crianças no Porto.
- **Não confundir com** uma pergunta sem dono sozinha, que é plano.

#### `segmento_novo`: um grupo que a marca não serve hoje

- **O que é:** um grupo com procura medida a que a marca não se dirige
  (nem no site, nem nas perguntas medidas), mas que o que ela vende já
  serve.
- **A prova:** a procura do grupo, a voz do cliente que o nomeia (o
  autocompletar, «As pessoas também perguntam», os fóruns, com a frase tal
  e qual), quem a IA escolhe para esse grupo, e a página da marca que
  prova que o produto lhe serve.
- **A barra:** o grupo aparece com nome na voz do cliente ou num número
  público, e a marca tem a oferta, mesmo que não fale para ele.
- **Exemplo:** uma seguradora que só fala para famílias. O autocompletar e
  «As pessoas também perguntam» trazem «seguro de saúde para trabalhadores
  independentes», com [N] pesquisas por mês e a subir [x]% em três meses;
  a IA escolhe [concorrente] em [n] de [m] respostas sobre independentes;
  o site da seguradora já tem um plano individual sem período de carência.
- **Uma faixa da população** (os jovens dos 16 aos 24 anos, os estudantes,
  uma profissão) entra aqui quando passa as sete portas, com as perguntas
  que esse grupo faz e o que a marca faz por ele (decisão de 12 Nov 2026,
  num supermercado: «pode ficar, mas tem que ter ações para isso»). Um
  número sobre uma faixa, sem ações para ela, sai.

#### `geografia_ou_lingua`: uma região ou uma língua onde a marca não aparece

- **O que é:** a marca pode servir uma região ou uma língua (tem lá uma
  unidade, entrega lá, atende nessa língua) e a IA não a nomeia quando se
  pergunta a partir de lá ou nessa língua. Uma abertura recente da própria
  marca (unidade nova, região nova) entra aqui: há uma população nova a
  servir e a IA ainda não sabe que a marca lá está.
- **A prova:** a procura local ou na língua, a população (INE, AIMA,
  Turismo de Portugal, com o ano), quem a IA escolhe nas perguntas dessa
  região ou língua, e a prova de que a marca lá está (a página da unidade,
  o atendimento declarado na língua, a notícia da abertura).
- **A barra:** a capacidade da marca nessa região ou língua está escrita no
  site ou numa notícia. Uma língua que a marca não fala não é oportunidade
  dela.
- **Exemplo:** um grupo hospitalar com unidade no Algarve. Pesquisas em
  inglês por «English speaking doctor Algarve» somam [N] por mês; o
  distrito tem [N] residentes estrangeiros ([fonte], [ano]); em inglês, a
  IA recomenda [concorrente]; o grupo declara atendimento em inglês na
  página da unidade, mas não tem nenhuma página em inglês.

#### `novo_uso`: um uso novo do que a marca já vende

- **O que é:** o produto ou serviço da marca resolve uma necessidade que o
  site não diz, e a voz do cliente mostra que um grupo procura essa
  necessidade.
- **A prova:** a voz do cliente com o uso dito (autocompletar, fóruns,
  «As pessoas também perguntam»), o volume dos termos, e a funcionalidade
  ou o produto que já o faz (página, ficha técnica, documentação).
- **A barra:** a marca já faz o uso hoje, sem nada novo a desenvolver.
- **Exemplo:** um software de faturação que só fala para lojas. Os fóruns e
  o autocompletar trazem «faturação para alojamento local», com [N]
  pesquisas por mês; o produto já emite séries por estabelecimento, e o
  site não o diz. O grupo são os proprietários de alojamento local.

#### `adjacente`: um serviço ou produto ao lado do que a marca vende

- **O que é:** uma oferta que a marca ainda não tem, mas que monta com o
  que já tem (a equipa, as instalações, os clientes, a certificação), e
  pela qual um grupo procura.
- **A prova:** a procura do serviço, quem a IA escolhe para ele, e os
  ativos da marca que o tornam possível, cada um com a página.
- **A barra:** os ativos estão no site. O cartão nunca diz que a marca já
  oferece o serviço: diz que o pode lançar, e a primeira ação do `fazer` é
  a decisão de o lançar.
- **Exemplo:** uma escola de línguas com cursos de inglês para adultos. A
  procura por «preparação IELTS Lisboa» soma [N] pesquisas por mês e sobe;
  a IA escolhe [concorrente] em [n] de [m] respostas; a escola já tem
  professores com certificação Cambridge e turmas ao fim da tarde.
- **Exemplo aprovado pelo founder (20 Nov 2026), a nova oferta:** a
  destaque.ai e o diagnóstico do tráfego perdido para a IA. O grupo são as
  empresas portuguesas cujo tráfego orgânico caiu desde que os resumos de
  IA e o Modo IA chegaram a Portugal. Em «AI Overview tirou tráfego o que
  fazer?» e «Tráfego orgânico caiu 50% culpa do AI?» a IA não nomeia a
  destaque.ai em nenhuma das 15 respostas e não recomenda ninguém (medição
  de 16 Nov 2026). O direito de ganhar está no que ela já tem: o Periscopy
  mede as respostas da IA e lê o Search Console da marca. O `fazer` é
  comercial: decidir o âmbito, o prazo e o preço do diagnóstico; publicar a
  página dessa oferta, escrita para quem perdeu tráfego; e contactar
  empresas com a queda medida. O tamanho do grupo tem de ser medido em
  Portugal (por exemplo, a procura por «tráfego orgânico caiu» e variantes,
  [N] por mês): o número da Pew é dos EUA e só entra como linha de apoio.

#### `fraqueza_de_quem_serve`: um concorrente ou um serviço público que falha

- **O que é:** quem serve hoje o grupo falha-lhe numa coisa medida (tempo
  de espera, queixas, preço, falta de stock, saída do mercado), e a marca
  faz essa coisa bem.
- **A prova:** a falha com número e fonte (o Portal da Transparência do
  SNS, o Portal da Queixa, as avaliações, um regulador, a imprensa), as
  queixas da comunidade quando o pedido as traz, e as perguntas medidas
  onde a IA escolhe quem falha, ou ninguém.
- **A barra:** a falha é de um grupo concreto, e a marca prova no site que
  não tem essa falha.
- **Exemplo:** um hospital privado. O tempo de espera do SNS para primeira
  consulta de [especialidade] na região passa o tempo máximo em [x]% dos
  casos ([fonte], [data]); quando se pergunta pela espera, a IA explica-a e
  não nomeia nenhuma alternativa; o hospital tem a especialidade na unidade
  da região, com marcação online.
- **Regra:** o `fazer` serve o grupo que o concorrente falha; nunca ataca o
  concorrente pelo nome.

#### `janela`: uma mudança com data que abre procura agora

- **O que é:** uma regra, um prazo, um apoio público, uma época ou uma onda
  de imprensa que cria procura num período, e que fecha.
- **A prova:** a data com fonte (Diário da República, regulador, imprensa),
  a procura a subir (tendência de três meses, quando o pedido traz
  `procura`, ou o Google Trends com endereço), e quem a IA escolhe nas
  perguntas sobre o tema.
- **A barra:** o cartão diz quando a janela fecha, ou quando a procura
  atinge o pico.
- **Exemplo:** uma empresa de software de faturação. Uma nova obrigação
  fiscal entra em vigor a [data] ([fonte]); as pesquisas pelo tema subiram
  [x]% em três meses; a IA responde com a lei e nomeia [concorrente A] e
  [concorrente B]; o produto da marca já cumpre a obrigação, e a página
  diz desde quando.
- **Exemplo aprovado pelo founder (20 Nov 2026), uma época:** a Black
  Friday num retalhista. Em 2026 é a 27 de novembro. A procura por «black
  friday [categoria]» multiplica-se por [x] nas semanas antes ([fonte],
  [ano anterior]); perguntada por onde há desconto em [categoria], a IA
  nomeia [concorrentes] em [n] de [m] respostas. O retalhista tem a
  campanha e a página dela. A janela fecha no próprio dia: o cartão diz até
  quando a página tem de estar publicada para a IA a poder ler, e depois
  da data o cartão não volta.
- **Exemplo aprovado pelo founder (20 Nov 2026), um apoio público:** os
  fundos do PRR para a digitalização das empresas. Um aviso de apoio à
  digitalização das PME, com prazo de candidatura a [data] ([aviso,
  endereço]), abre procura por fornecedores elegíveis. O grupo são as PME
  do setor da marca que se candidatam; a marca tem direito a ganhar quando
  o que vende é despesa elegível no aviso (diz-se a alínea). O PRR tem
  prazos de execução: confirma-se que o aviso está aberto no dia do pedido,
  e um aviso fechado não entra.

#### `canal`: um sítio onde o grupo compra e a marca não está

- **O que é:** um canal de compra que um grupo usa (contratação pública, um
  marketplace, um comparador, a rede convencionada de uma seguradora, uma
  plataforma de marcações) onde os concorrentes ganham e a marca está
  ausente ou mal colocada.
- **A prova:** o volume do canal (contratos e euros no BASE, número de
  médicos ou de lojas numa plataforma, quota de um comparador), quem lá
  ganha, e o que a marca precisa para entrar (certificação, convenção,
  ficha).
- **A barra:** é onde a compra se faz, e não só onde se lê. Uma plataforma
  de avaliações onde ninguém compra é plano; a IA em geral nunca é um
  canal, porque é verdade para todos.
- **Exemplo:** uma empresa de formação. Os contratos públicos de formação
  em [área] somaram [N] contratos e [valor] euros em [ano] (BASE), e três
  concorrentes ganham a maior parte; a empresa nunca concorreu, e já tem a
  certificação DGERT que esses procedimentos pedem.
- **Exemplo aprovado pelo founder (20 Nov 2026), revenda:** as agências de
  marketing digital que revendem o Periscopy em white label. O grupo são
  as agências em Portugal (quantas, com fonte: o INE pela atividade
  económica, ou a associação do setor), e o canal é a carteira de clientes
  delas. O direito de ganhar está na página de preços do Periscopy, que já
  tem o plano das agências com white label. Quem ganha hoje mede-se nas
  perguntas sobre ferramentas de visibilidade em IA para agências. O
  `fazer`: a lista das agências a contactar, a página para agências e a
  condição de revenda. Desmente-o, por exemplo, nenhuma de [N] agências
  contactadas pedir uma demonstração em 12 semanas.
- **Exemplo aprovado pelo founder (20 Nov 2026), contratação pública:** os
  concursos públicos de marketing digital para a destaque.ai. O volume
  conta-se no BASE (contratos e euros nos últimos 12 meses, pelos códigos
  CPV de serviços de marketing e de presença digital), com quem ganhou
  cada um. O `fazer`: os documentos que um procedimento pede (certidões,
  experiência anterior), a lista das entidades que contratam todos os
  anos, e o alerta dos procedimentos novos.

#### `modelo_de_compra`: uma forma de comprar que o grupo procura e quase ninguém oferece

- **O que é:** o grupo quer comprar de outra maneira (a prestações, por
  subscrição, em pacote, com orçamento online, com marcação no próprio
  dia), e poucos concorrentes o oferecem.
- **A prova:** a voz do cliente a pedi-lo («[serviço] a prestações»,
  «quanto custa [serviço] por mês»), o volume, e o que a IA responde quando
  se pergunta pelo preço ou pela forma de pagar.
- **A barra:** a marca já oferece esse modelo, ou tem o parceiro que o
  torna possível (a página diz qual).
- **Exemplo:** uma clínica de estética. «[Tratamento] a prestações» soma
  [N] pesquisas por mês; perguntada pelo preço, a IA dá intervalos e não
  nomeia nenhuma clínica com pagamento fracionado; a clínica tem o
  pagamento em prestações com um parceiro de crédito, numa página que a IA
  não cita.

#### `parceria`: uma organização que já reúne o grupo

- **O que é:** uma associação setorial, uma ordem profissional, uma câmara
  de comércio ou uma incubadora já fala com o grupo todos os dias, e aceita
  levar-lhe uma coisa que a marca tem e que a organização quer dar aos
  membros (um estudo, um desconto, uma formação).
- **A prova:** quantos membros tem a organização (com a fonte, quase
  sempre o site dela), que parte deles é o grupo do cartão, e o que a
  marca leva (a página do estudo, da oferta ou da formação).
- **A barra:** a organização é nomeada e o que a marca leva já existe ou
  sai de dados que ela já tem.
- **Exemplo aprovado pelo founder (20 Nov 2026):** uma associação setorial
  que leva aos associados um estudo da destaque.ai sobre o que a IA
  responde no setor deles. O grupo são as empresas associadas ([N], site
  da associação); o direito de ganhar são os estudos que a destaque.ai já
  publica com dados próprios. O `fazer`: o estudo do setor, a proposta à
  associação, e a oferta de diagnóstico para os associados que o lerem.
  Não confundir com mandar um estudo à imprensa, que é tática do plano: aqui
  o destinatário é um grupo de clientes e a ação é comercial.

### Quantas, e como se procura

Procura-se em todos os tipos antes de fechar a lista, e devolve-se só o que
passa as sete portas. Não há mínimo (decisão do founder, 20 Nov 2026): três
oportunidades que passam valem mais do que dez que um diretor descarta à
primeira leitura. O tecto
continua a ser 12.

Antes de fechar, cobrem-se sempre quatro ângulos, porque é onde os tipos
aparecem:

1. **O mercado:** procura que cresce, regras e prazos que mudam, falhas do
   serviço público (tipos `procura_sem_dono`, `janela`,
   `fraqueza_de_quem_serve`, `modelo_de_compra`).
2. **A própria marca:** o que ela abriu, comprou, lançou ou anunciou nos
   últimos 12 meses (unidade nova, região nova, serviço novo), e o que o
   site mostra que ela já sabe fazer (tipos `geografia_ou_lingua`,
   `novo_uso`, `adjacente`, `segmento_novo`). Procura na imprensa regional
   da zona.
3. **Os concorrentes:** aberturas, investimentos, resultados, queixas e
   saídas nos últimos 12 meses (imprensa económica, comunidade). Onde um
   concorrente investe, a procura existe; onde sai ou falha, fica espaço
   (tipos `fraqueza_de_quem_serve`, `canal`).
4. **Quem já reúne o grupo:** associações, ordens, câmaras de comércio,
   incubadoras e revendedores (tipos `parceria`, `canal`).

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
nomeadas. É do tipo `procura_sem_dono`.

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
  "tipo": "segmento_novo",
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

- `tipo`: um dos dez da tabela da secção 1. Um cartão que não cabe em
  nenhum é quase sempre uma tese de mercado ou trabalho do plano.
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
`generate_opportunities` do mesmo cliente recebe-a
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
2. **A tendência**: a crescer pesa mais; uma `janela` que fecha em breve
   sobe.
3. **O direito de ganhar**: a marca já tem tudo o que é preciso pesa mais
   do que a marca que tem de lançar uma oferta (`adjacente`).
4. **Quem ganha hoje**: ninguém pesa mais do que um líder fraco, e um líder
   fraco mais do que um líder forte.

## 5. Proibido

- **Inventar um número**, arredondar para impressionar ou juntar números de
  fontes diferentes como se fossem um só. Se não há número, a oportunidade
  não entra.
- Um número em `numeros` sem fonte, sem data ou sem endereço.
- Apresentar dados de outro país como se fossem do mercado do prospect sem
  o dizer («amostra dos EUA», «dados de fornecedor de SEO, indicativos»).
- **Dizer que a marca oferece o que não oferece.** Um cartão `adjacente`
  diz que a marca pode lançar o serviço, com os ativos que já tem; nunca
  que já o tem. Um cartão de outro tipo que depende de uma oferta que não
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
