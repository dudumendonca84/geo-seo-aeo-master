# Source intelligence — o que os motores citam, medido por nós

Referência do `geo-seo-aeo-master`. Evidência empírica semanal, extraída das
auditorias reais do Visibility Tracker: que tipos de fonte cada motor cita,
como isso varia por categoria de pergunta, e o que se mantém estável semana
a semana. É o complemento medido dos `engine_playbooks.md` — os playbooks
dizem o método; este ficheiro diz o que as NOSSAS medições mostram.

**Quem escreve:** a Routine do cérebro do Tracker, uma vez por semana,
depois de processar as auditorias (spec na secção C de
`routines/tracker-brain.md` do repo destaque-ai-tracker). Entra no main via
`routine-automerge` (commit `audit: source-intel YYYY-MM-DD`).

**Regras:**

- Entrada nova no TOPO, datada. Números com denominadores.
- **Privacidade:** este ficheiro é público. Nunca nomear clientes nem
  números de citação de um cliente. Domínios de terceiros citados pelos
  motores são observação dos motores e podem ficar; o domínio de um cliente
  escreve-se "site próprio do cliente". Agregar por tipo de fonte quando a
  categoria sozinha identificasse o cliente.
- **Promoção a playbook:** padrão estável em 2+ semanas seguidas pode ser
  proposto como edição ao bloco do motor em `engine_playbooks.md` (regra
  das duas auditorias), com registo no `methodology-changelog.md` e
  `validate-skill-tables.mjs` verde. Uma semana só fica aqui como
  observação datada.
- A reconciliação semanal do self-audit (ponto 6b) lê também este ficheiro:
  observação daqui que contradiga um playbook conta como evidência interna.
- Truncar para as últimas 12 semanas; antes de truncar, confirmar que o
  durável foi promovido ou registado.

## Semanas

<!-- A Routine acrescenta aqui: ## YYYY-MM-DD, um bloco por motor com
     tipos de fonte dominantes, mudanças vs semana anterior, e
     confirmações/contradições dos playbooks. -->

## 2026-08-24

Terceira auditoria semanal medida neste ficheiro no mesmo universo das duas
anteriores: sector de consultoria de visibilidade em IA/SEO em Portugal, uma
única auditoria activa. Base: 756 respostas, 754 mensuráveis (sem erro, sem
mock, com `cited` preenchido e sem prefixo sentinela), contra 754 também na
semana passada. Em modo de pesquisa (augmented), os oito motores/superfícies
devolveram citações em 405 das 432 respostas augmented possíveis (54
perguntas por motor), num total de 3 760 citações brutas. Deepseek e mistral
continuam a correr só em modo de memória (knowledge), sem nenhuma linha
augmented.

O conjunto de motores é idêntico ao da semana passada: 10 motores gravados,
8 superfícies augmented, `copilot_bing` ausente nas duas semanas por estar em
pausa. A comparação 2026-08-17 contra 2026-08-24 é, por isso, uma comparação
como-por-como; nenhuma aparição ou desaparecimento de domínio abaixo se
explica por mudança do conjunto medido.

Esta entrada traz ainda, no fim, uma leitura retrospectiva de duas semanas
anteriores (2026-07-27 e 2026-08-03) que nunca tinham sido escritas aqui e
que são as primeiras com vários clientes em simultâneo. Ficam em secção
própria e agregadas, sem domínios nem sectores, por regra de privacidade.

### chatgpt

51 respostas com citações (de 54), 246 citações, 74 domínios únicos (30,1% de
taxa de domínios únicos, a mais concentrada dos oito). Por tipo: 65,9% sites
de agência/consultoria de nicho, 26,8% documentação oficial/institucional,
2,4% investigação primária (arxiv.org), 2,0% registos oficiais, 1,6%
UGC/social, 1,2% auto-referência de motor de busca, 0% imprensa de martech.

Terceira semana seguida a confirmar e a reforçar o bloco do motor. O mesmo
domínio de documentação oficial da Google concentra agora 19,1% de todas as
citações do motor (47 das 246), depois de 17,9% (38 de 212) e 15,4%. Três
leituras, subida monótona de quase quatro pontos percentuais. A taxa de
domínios únicos desce pela terceira vez seguida, 39,8%, 37,3%, 30,1%. A
direcção é inequívoca neste nicho: o ChatGPT reutiliza cada vez menos
domínios e apoia-se cada vez mais no mesmo punhado de documentação de
fornecedor.

Pela regra das duas auditorias, este padrão (concentração crescente num
domínio de documentação oficial, taxa de domínios únicos a descer) tem agora
três semanas consecutivas e está pronto para ser proposto como edição ao
bloco do motor. Não é proposto nesta entrada por decisão de âmbito do commit,
ver "Prontos para promoção" no fim.

### claude

Segunda leitura real deste motor. 42 respostas com citações (de 54), 82
citações, 26 domínios únicos. A dispersão colapsa face à semana passada:
31,7% de taxa de domínios únicos contra 69,9%, e o volume de citações cai
para metade (82 contra 163). De motor terceiro mais disperso dos oito passou
a segundo mais concentrado.

Por tipo: 96,3% sites de agência/consultoria de nicho, 2,4% imprensa de
martech, 1,2% investigação primária, 0% documentação oficial/institucional,
0% UGC, 0% vídeo, 0% directórios.

Confirma-se, em segunda leitura, a contradição registada na entrada anterior.
O bloco do motor descreve o Claude, em modo de pesquisa, a preferir fontes
institucionais e documentação clara e a citar jornalismo de referência mais
do que os outros motores. Nas duas semanas medidas o peso institucional é o
mais baixo dos oito motores (1,2% e agora 0,0%) e a imprensa citada não é
jornalismo de referência. Duas auditorias consecutivas, mesma direcção: a
regra das duas auditorias está cumprida para este ponto.

Nota de instrumentação, importante para quem reler estes números: o adaptador
do Claude grava os objectos de `raw_citations` sem o campo `domain` em 981 das
1 105 citações das semanas multi-cliente, ao contrário dos outros sete
motores, que o gravam sempre. Os números do Claude nesta entrada foram
calculados extraindo o anfitrião do campo `url`. Uma leitura que use só o
campo `domain` perde cerca de nove em cada dez citações deste motor e conclui
o contrário. Fica registado como lacuna de recolha do Tracker, não como
achado sobre o motor.

### gemini

52 respostas com citações (de 54), 748 citações, 450 domínios únicos (60,2%
únicos). Por tipo: 84,2% sites de agência/consultoria de nicho, 4,7% vídeo
(youtube.com), 3,1% imprensa de martech, 2,7% directórios de reviews, 2,5%
UGC/social, 2,1% auto-referência de motor de busca, 0,3% documentação
oficial, 0,3% investigação primária, 0,1% registos oficiais.

O bloco do motor regista o YouTube como fonte de peso. Continua presente e
continua a ser o domínio isolado mais citado a seguir aos de agência, mas
desce pela terceira semana seguida: 9,1%, 7,0%, 4,7% das citações do motor,
o que em valor absoluto são 68, 51 e 35 citações. Três leituras, descida
monótona, quase a metade do ponto de partida. Confirma a direcção do
playbook (YouTube presente e relevante) e desmente-lhe a magnitude neste
nicho, com uma tendência clara e não um ruído.

Comparado com 2026-08-17 (50 respostas com citações, 731 citações, 402
domínios únicos, 55,0% únicos): volume quase idêntico, dispersão a subir
cinco pontos percentuais.

### google_aio

51 respostas com citações (de 52 mensuráveis; 2 das 54 devolveram o sentinela
`NO_AIO_TEXT`, o que é dado e não falha), 401 citações, 231 domínios únicos
(57,6% únicos). Por tipo: 79,8% sites de agência/consultoria de nicho, 11,7%
vídeo, 4,7% UGC/social (Reddit e LinkedIn), 1,5% imprensa de martech, 1,5%
documentação oficial, 0,5% directórios, 0,2% auto-referência.

O ponto do playbook sobre citar discussões directamente na resposta continua
verdadeiro mas enfraquece: UGC a 8,3%, 8,2% e agora 4,7% nas três leituras.
Duas semanas de estabilidade seguidas de uma queda de metade. Uma queda
isolada não desfaz duas confirmações; fica como observação a vigiar, não
como contradição.

Comparado com 2026-08-17 (440 citações, 229 domínios únicos, 52,0% únicos):
volume desce 9%, número de domínios únicos praticamente igual (231 contra
229), logo a dispersão sobe.

### google_ai_mode

47 respostas com citações (de 54), 434 citações, 246 domínios únicos (56,7%
únicos). Por tipo: 76,5% sites de agência/consultoria de nicho, 13,4% vídeo,
5,1% UGC/social, 2,1% imprensa de martech, 1,2% documentação oficial, 0,9%
auto-referência, 0,5% directórios, 0,5% investigação primária.

É o motor que mais recua esta semana em volume: 434 citações contra 606, uma
queda de 28%, e 246 domínios únicos contra 370, uma queda de 34%. O número de
respostas com citações desce de 53 para 47 em 54. O peso de vídeo faz o
caminho inverso do Gemini e sobe de 9,6% para 13,4%, com o mesmo número
absoluto de citações de YouTube nas duas semanas (58 e 58): a subida
percentual é efeito do denominador a encolher, não de mais vídeo citado. Vale
a pena separar as duas coisas antes de ler isto como mudança de preferência.

UGC fica praticamente igual pela terceira semana: 5,1%, 5,1%, 5,1%. É a
métrica mais estável de todo o ficheiro.

Continua sem forma de medir aqui o comprimento médio da passagem citada
(~117 palavras no benchmark do playbook): não é campo do `raw_citations`.

### grok

54 respostas com citações (de 54), 296 citações, 203 domínios únicos (68,6%
únicos). Por tipo: 90,5% sites de agência/consultoria de nicho, 3,4% imprensa
de martech, 2,0% documentação oficial, 1,7% directórios de reviews, 1,4%
UGC/social, 0,7% investigação primária, 0,3% auto-referência, 0% vídeo.

**Zero citações de x.com ou twitter.com pela terceira semana consecutiva**,
tanto no conjunto completo como nos domínios mais citados, em 761 citações
somadas das três semanas. O bloco do motor descreve peso invulgar dado a
conversas no X. Em nenhuma das três auditorias medidas isso aparece nas
citações de pesquisa deste nicho. A regra das duas auditorias foi cumprida na
entrada anterior; esta é a terceira confirmação.

Comparado com 2026-08-17 (232 citações, 164 domínios únicos, 70,7% únicos):
volume sobe 28%, dispersão praticamente igual.

### copilot

54 respostas com citações (de 54), 529 citações, 382 domínios únicos (72,2%
únicos, o mais disperso dos oito pela terceira semana seguida). Por tipo:
95,5% sites de agência/consultoria de nicho, 1,1% UGC/social (LinkedIn), 0,9%
imprensa de martech, 0,8% directórios de reviews, 0,6% vídeo, 0,6% registos
oficiais, 0,4% documentação oficial, 0,2% auto-referência.

Curiosidade que vale registar: 529 citações esta semana e 529 na semana
passada, número exactamente igual. Com 376 e 382 domínios únicos, e uma
composição por tipo que varia menos de dois pontos percentuais em todas as
categorias, é o motor mais previsível dos oito.

A presença de LinkedIn como fonte secundária, observação registada como nova
em 2026-08-10 e mantida em 2026-08-17, aparece pela terceira semana seguida:
13, 9 e agora 6 citações. Presença consistente, magnitude a descer. A regra
das duas auditorias está cumprida quanto à existência do padrão. Fica pronto
para proposta de edição ao bloco do motor, com a ressalva de que a magnitude
não é estável e deve ser descrita como fonte secundária recorrente, não como
peso relevante.

### perplexity

54 respostas com citações (de 54), 1 024 citações, 574 domínios únicos (56,1%
únicos). Por tipo: 90,2% sites de agência/consultoria de nicho, 3,6%
UGC/social (Reddit e LinkedIn), 2,5% documentação oficial, 2,0% imprensa de
martech, 0,8% vídeo, 0,6% directórios de reviews, 0,1% registos oficiais,
0,1% auto-referência, 0,1% investigação primária.

Comparado com 2026-08-17 (1 022 citações, 577 domínios únicos, 56,5%
únicos): 1 024 contra 1 022 citações e 574 contra 577 domínios únicos. A par
do Copilot, o motor mais estável do ficheiro.

Terceira semana a contrariar a magnitude dos benchmarks do bloco do motor,
que registam o YouTube a 32,4% e o Reddit a "cerca de 47% nalguns estudos de
categoria". Medimos vídeo a 5,6%, 1,0% e agora 0,8%, e UGC a 4,8%, 5,0% e
agora 3,6%. Três leituras, todas uma ordem de grandeza abaixo. A leitura
mantém-se: não é contradição do motor, é sinal de que a magnitude do
benchmark depende do nicho da pergunta, e que num nicho B2B em português com
pouca comunidade activa o Perplexity dispersa-se por sites de agência.

### Padrões por categoria de pergunta

Recalculados para as duas semanas com o mesmo classificador, para serem
comparáveis entre si.

As perguntas sobre uma funcionalidade específica continuam a ser a categoria
com mais peso de documentação oficial, 8,1% das citações da categoria esta
semana contra 8,2% na anterior, quando as outras quatro categorias ficam
entre 0,4% e 3,1%. É o padrão mais reprodutível do ficheiro: três semanas a
apontar no mesmo sentido, com pouca variação de magnitude. Perguntas de "como
funciona X" puxam para fontes institucionais; perguntas de preço e de
recomendação local não.

O peso conjunto de vídeo e UGC continua mais alto na comparação directa
(11,1%, era 13,8%) e mais baixo na recomendação local (3,2%, era 3,9%). A
ordem das cinco categorias nesta métrica é a mesma nas duas semanas. A
funcionalidade específica sobe de 7,9% para 9,2% e mantém-se, como na semana
passada, mais perto da comparação de preço (4,9%) do que da comparação
directa: confirma-se que o emparelhamento entre funcionalidade específica e
comparação directa observado em 2026-08-10 não se repete.

### Domínios estáveis e domínios rotativos

Primeira leitura desta métrica no ficheiro. Para cada motor, que fracção dos
domínios citados esta semana já tinha sido citada na semana anterior, e que
fracção do volume de citações desta semana vem desses domínios repetidos.

| motor | domínios únicos | repetidos | % domínios repetidos | % volume de repetidos |
|---|---|---|---|---|
| claude | 26 | 13 | 50,0% | 79,3% |
| copilot | 382 | 273 | 71,5% | 78,1% |
| perplexity | 574 | 373 | 65,0% | 77,9% |
| google_ai_mode | 246 | 133 | 54,1% | 71,0% |
| chatgpt | 74 | 32 | 43,2% | 70,7% |
| gemini | 450 | 243 | 54,0% | 69,9% |
| google_aio | 231 | 97 | 42,0% | 64,3% |
| grok | 203 | 67 | 33,0% | 47,0% |

Duas leituras que valem mais do que a média:

O Grok é o motor que mais roda de fontes. Só um terço dos domínios que cita
esta semana tinha sido citado na semana passada, e menos de metade do seu
volume de citações vem de domínios repetidos. Todos os outros sete estão
acima de 64% de volume repetido. Para quem trabalha visibilidade, isto
significa que uma posição ganha no Grok é a menos durável das oito.

O Copilot e o Perplexity, os dois motores mais dispersos em domínios únicos,
são simultaneamente dos mais estáveis em volume repetido (78,1% e 77,9%).
Dispersão alta e rotação baixa não são a mesma coisa: estes dois motores
citam muitos domínios, mas citam repetidamente os mesmos muitos domínios. Ler
"muitas fontes" como "fontes instáveis" seria erro.

### Leitura retrospectiva: 2026-07-27 e 2026-08-03, universo multi-cliente

Estas duas semanas nunca tinham sido escritas aqui. São as primeiras com
várias auditorias em simultâneo e, ao contrário das entradas acima, cobrem
sectores diferentes do de consultoria em IA/SEO. Por regra de privacidade
deste ficheiro, e porque a categoria de pergunta sozinha identificaria os
clientes, aqui só vão tipos de fonte e mecanismos: sem domínios, sem
sectores, sem números por cliente. Base: 2 124 respostas mensuráveis em
2026-07-27 e 2 578 em 2026-08-03. A comparação foi restringida aos quatro
clientes presentes nas duas semanas, para que a diferença não seja apenas
composição da amostra.

Cuidado de leitura: nestas duas semanas o `copilot_bing` ainda era recolhido,
mas devolveu o sentinela `NO_BING_COPILOT_TEXT` em 100% das respostas nas
duas (105 e 30). Nunca produziu uma citação medível, por isso não entra em
nenhum número acima nem abaixo, e a sua saída posterior do conjunto não
representa perda de evidência.

O que este universo mostra e o outro não mostrava:

**O peso dos directórios e agregadores é uma propriedade do sector, não do
motor.** No Copilot, os directórios valem 14,3% das citações nas duas semanas
deste universo, contra 0,8% a 2,8% nas três semanas do universo de
consultoria. O mesmo motor, a mesma metodologia, dez vezes mais peso de
directórios. Onde existem agregadores de comparação maduros, o Copilot
apoia-se neles de forma estável; onde não existem, cai para sites de empresa.
Isto qualifica o bloco do motor: a instrução prática não é "optimizar para
directórios", é "verificar primeiro se o sector tem directórios que o índice
do Bing reconheça".

**A auto-referência do Google AIO cresce e é o maior movimento das duas
semanas.** Citações alojadas em propriedades do próprio Google passam de
13,6% para 22,4% do total do motor, quase nove pontos percentuais em uma
semana. No universo de consultoria a mesma métrica ficou entre 0,2% e 3,4%.
Vale acompanhar: se se confirmar, é um mecanismo com consequência directa
para atribuição de tráfego.

**O Grok volta a ser o mais rotativo, noutro sector.** Nestas duas semanas,
68,7% do volume de citações do Grok vem de domínios repetidos, o valor mais
baixo dos sete motores medidos (Copilot 94,6%, Google AI Mode 90,6%, ChatGPT
83,7%, Perplexity 78,5%, Google AIO 78,1%, Gemini 76,8%). O mesmo achado
apareceu no universo de consultoria, com magnitudes diferentes e a mesma
ordem no fim da tabela. Dois universos independentes, mesma direcção: é a
evidência mais transferível desta entrada.

**Respostas que citam a marca apoiam-se noutro tipo de fonte.** Agregando os
oito motores em 2026-08-03: nas respostas em que a marca auditada é citada, a
imprensa vale 4,7% das citações e os directórios 4,6%; nas respostas em que
não é citada, a imprensa vale 1,3% e os directórios 3,1%, e a documentação
oficial sobe de 2,7% para 4,6%. Dito de outra forma, a presença de imprensa e
de directórios na resposta acompanha a presença da marca, e a presença de
documentação institucional acompanha a sua ausência. É correlação numa
semana, não causalidade, e a direcção da seta não está estabelecida: pode ser
que citar directórios traga a marca, ou que perguntas que já chamam a marca
sejam as que chamam directórios. Fica como hipótese a testar com um segundo
par de semanas multi-cliente.

**O Claude nestas semanas.** Em 2026-07-27 nenhuma das 159 respostas
augmented trouxe citações, e em 2026-08-03 trouxeram-nas todas as 189. Uma
transição binária, uniforme nos quatro clientes, é assinatura de ferramenta
ligada ou desligada na recolha, não de mudança de comportamento do motor.
Regista-se como facto de instrumentação e não se lê como achado.

### Domínio próprio do cliente

Apareceu nas citações de pesquisa dos oito motores medidos, nas duas semanas,
tal como na semana passada. Mais vezes no Perplexity, seguido do Gemini;
presença mais discreta no Google AI Mode e no Grok. Face à semana anterior
sobe no Perplexity, no Claude, no ChatGPT e no Google AIO, e desce no Gemini
e no Grok. Sem números específicos, por regra de privacidade deste ficheiro.

### Estabilidade

Oito motores com pelo menos duas leituras, sete com três. Os mais estáveis
semana a semana em volume, dispersão e composição são o Copilot (529 citações
nas duas semanas, exactamente) e o Perplexity (1 024 contra 1 022). O menos
estável é o Claude, que perde metade do volume e mais de metade da dispersão,
seguido do Google AI Mode, que perde 28% do volume.

Três tendências monótonas ao longo das três semanas, e são as leituras mais
sólidas desta entrada: a concentração crescente do ChatGPT num único domínio
de documentação de fornecedor (15,4%, 17,9%, 19,1%), a descida do peso de
vídeo no Gemini (9,1%, 7,0%, 4,7%) e a ausência total de citações do X no
Grok (zero em três semanas, em 761 citações).

### Prontos para promoção, não promovidos nesta entrada

Três padrões cumprem a regra das duas auditorias e estão prontos para
proposta de edição aos blocos de motor em `engine_playbooks.md`:

1. **grok**, ausência de citações do X em pesquisa (3 semanas, 761 citações,
   zero ocorrências). Já assinalado como pronto na entrada de 2026-08-17.
2. **claude**, peso institucional mais baixo dos oito motores e ausência de
   jornalismo de referência, contra o que o bloco descreve (2 semanas).
3. **copilot**, LinkedIn como fonte secundária recorrente (3 semanas),
   a descrever pela existência e não pela magnitude.

Não são propostos nesta entrada porque o commit desta execução foi limitado a
este ficheiro. Ficam registados aqui para que a próxima execução, ou uma
intervenção humana, os leve a `engine_playbooks.md` com o respectivo registo
em `methodology-changelog.md`.

Um quarto candidato, a concentração crescente do ChatGPT num domínio de
documentação de fornecedor, tem três leituras monótonas mas mede um único
domínio num único nicho. Fica como observação datada até haver leitura
equivalente noutro sector.

## 2026-08-17

Segunda auditoria semanal medida neste ficheiro, mesmo universo da semana
anterior: sector de consultoria de visibilidade em IA/SEO em Portugal, uma
única auditoria activa. Base: 756 respostas, todas sem erro e com `cited`
preenchido (a semana passada eram 755 sem erro e 752 com `cited`). Em modo
de pesquisa (augmented), os oito motores/superfícies devolveram citações em
418 das 432 respostas augmented possíveis (54 perguntas por motor), num
total de 3 935 citações brutas. Deepseek e mistral continuam a correr só em
modo de memória (knowledge), sem nenhuma linha augmented, consistente com
os blocos desses dois motores em `engine_playbooks.md`.

Mudança relevante face à semana passada: as 54 respostas augmented do
Claude foram desta vez geradas com pesquisa instrumentada real (WebSearch),
não por síntese na Routine. É por isso a primeira leitura de facto do
Claude neste ficheiro; a entrada anterior ficou registada como falha de
medição, não como achado sobre o motor.

### chatgpt

51 respostas com citações (de 54), 212 citações, 79 domínios únicos (37,3%
de taxa de domínios únicos). Por tipo: 64,6% sites de agência/consultoria
de nicho, 30,2% documentação oficial/institucional, 3,8% investigação
primária (arxiv.org), 0,5% UGC, 0,5% directórios de reviews, 0,5% imprensa
de martech.

Confirma o bloco do motor: um único domínio de documentação oficial da
Google concentra 17,9% de todas as citações (38 das 212), mais concentrado
do que a semana passada (15,4%). A preferência por fontes institucionais
mantém-se e reforça-se.

Comparado com 2026-08-10 (54 respostas, 201 citações, 80 domínios únicos,
39,8% únicos): número de citações sobe ligeiramente, taxa de domínios
únicos desce dois pontos percentuais, e o peso institucional sobe de 28,4%
para 30,2%. Direcção estável, concentração a aumentar.

### claude

Primeira leitura real deste motor neste ficheiro; sem base de comparação de
estabilidade (é a semana 1 de dados reais). 51 respostas com citações (de
54), 163 citações, 114 domínios únicos (69,9% de taxa de domínios únicos, a
terceira mais dispersa dos oito, depois do Copilot e do Grok, à frente do
Google AI Mode).

Por tipo: 93,9% sites de agência/consultoria de nicho, 3,1% imprensa de
martech, 1,2% investigação primária, 1,2% documentação oficial/
institucional, 0,6% directórios de reviews.

O bloco do motor descreve o Claude, em modo de pesquisa, a preferir fontes
institucionais e documentação clara, e a citar jornalismo de referência mais
do que os outros motores. Esta primeira leitura contradiz essa descrição: o
peso institucional (1,2%) é dos mais baixos dos oito motores medidos esta
semana, só acima do Copilot (0,8%), e a imprensa não se distingue como
jornalismo de referência. Regra das duas auditorias: uma semana não chega
para mexer no bloco, ainda por cima sendo a primeira semana de dados reais;
fica registado para confirmar ou contradizer na próxima entrada.

### gemini

50 respostas com citações (de 54), 731 citações, 402 domínios únicos (55,0%
únicos). Por tipo: 80,7% sites de agência/consultoria de nicho, 7,0% vídeo
(youtube.com), 4,7% UGC/social, 3,3% documentação oficial, 2,5% imprensa de
martech, 1,6% directórios de reviews, 0,3% investigação primária.

Confirma o bloco do motor: o YouTube continua o domínio isolado mais citado
a seguir aos de agência, embora a magnitude desça de 9,1% para 7,0%.

Comparado com 2026-08-10 (54 respostas, 751 citações, 419 domínios únicos,
55,8% únicos): volume e dispersão quase idênticos, o motor mais estável dos
oito nesta métrica. O peso de vídeo desce dois pontos percentuais; UGC sobe
de 2,5% para 4,7%.

### google_aio

51 respostas com citações (de 54), 440 citações, 229 domínios únicos (52,0%
únicos). Por tipo: 70,5% sites de agência/consultoria de nicho, 13,4%
vídeo, 8,2% UGC/social (Reddit e LinkedIn), 5,0% documentação oficial, 1,8%
imprensa de martech, 0,9% directórios de reviews, 0,2% investigação
primária.

Confirma outra vez o ponto do playbook sobre citar discussões directamente
na resposta: UGC praticamente empatado com a semana passada, 8,2% contra
8,3%.

Comparado com 2026-08-10 (54 respostas, 423 citações, 228 domínios únicos,
53,9% únicos): dispersão de domínios praticamente igual, 229 contra 228
domínios únicos. Vídeo sobe de 12,1% para 13,4%; peso institucional sobe de
1,2% para 5,0%.

### google_ai_mode

53 respostas com citações (de 54), 606 citações, 370 domínios únicos (61,1%
únicos). Por tipo: 79,0% sites de agência/consultoria de nicho, 9,6% vídeo,
5,1% UGC/social, 3,3% imprensa de martech, 2,3% documentação oficial, 0,7%
directórios de reviews.

Continua sem forma de medir aqui o comprimento médio da passagem citada
(~117 palavras no benchmark do playbook): não é campo do `raw_citations`,
fica como extensão possível de leitura para uma próxima entrada.

Comparado com 2026-08-10 (54 respostas, 573 citações, 336 domínios únicos,
58,6% únicos): dispersão sobe (58,6% para 61,1%), vídeo desce de 12,6% para
9,6%. UGC fica praticamente igual, 5,1% nas duas semanas.

### grok

54 respostas com citações, 232 citações, 164 domínios únicos (70,7%
únicos). Por tipo: 86,2% sites de agência/consultoria de nicho, 4,3%
imprensa de martech, 3,0% documentação oficial, 2,6% directórios de
reviews, 2,2% UGC/social, 1,3% investigação primária, 0,4% vídeo. Zero
citações de x.com ou twitter.com, outra vez, tanto no conjunto completo
como nos domínios mais citados.

Segunda semana seguida sem nenhuma citação do X. Pela regra das duas
auditorias, esta é a confirmação que faltava: o bloco do motor descreve
peso invulgar dado a conversas no X, e em nenhuma das duas auditorias
medidas isso aparece nas citações de pesquisa deste nicho. Fica pronto para
avaliação como proposta de edição ao bloco do motor, fora do âmbito deste
ficheiro; regista-se aqui como a evidência que sustenta essa proposta.

Comparado com 2026-08-10 (54 respostas, 233 citações, 163 domínios únicos,
70,0% únicos): o motor mais estável desta semana em volume e dispersão,
virtualmente sem variação.

### copilot

54 respostas com citações (de 54), 529 citações, 376 domínios únicos (71,1%
únicos, o mais disperso dos oito). Por tipo: 93,4% sites de
agência/consultoria de nicho, 2,8% directórios de reviews, 1,7% UGC/social
(LinkedIn), 0,8% documentação oficial, 0,8% imprensa de martech, 0,6%
vídeo.

Confirma a base do bloco do motor. A presença de LinkedIn como fonte
secundária, observação nova na semana passada, mantém-se: 1,7% esta semana,
2,5% na anterior, ordem de grandeza semelhante nas duas leituras.

Comparado com 2026-08-10 (53 respostas, 522 citações, 369 domínios únicos,
70,7% únicos): quase sem variação em volume, dispersão ou composição.

### perplexity

54 respostas com citações, 1 022 citações, 577 domínios únicos (56,5%
únicos). Por tipo: 88,0% sites de agência/consultoria de nicho, 4,8%
UGC/social (Reddit e LinkedIn), 2,8% directórios de reviews, 2,6%
documentação oficial, 1,0% vídeo, 0,6% imprensa de martech, 0,2%
investigação primária.

O bloco do motor regista o YouTube a 32,4% e o Reddit a "cerca de 47%
nalguns estudos de categoria". Aqui, outra vez, muito abaixo de ambos, e o
vídeo desce ainda mais esta semana (1,0%, contra 5,6% na anterior). Reforça
a leitura da semana passada: neste nicho de consultoria B2B em GEO/IA, em
português, o Perplexity dispersa-se por sites de agência em vez de
concentrar em YouTube e Reddit; não é contradição do motor, é sinal de que
a magnitude do benchmark depende do nicho da pergunta.

Comparado com 2026-08-10 (54 respostas, 1 041 citações, 589 domínios
únicos, 56,6% únicos): volume e dispersão praticamente idênticos. UGC
estável, 4,8% nas duas semanas, exactamente. Vídeo é o que mais mexe, 5,6%
para 1,0%.

### Padrões por categoria de pergunta

As perguntas de preço e as de recomendação local continuam a citar
sobretudo sites de agência/consultoria de nicho, 85,6% e 87,0% das citações
da categoria respectivamente (eram 90,1% e 93,0% na semana passada: ainda a
combinação mais concentrada, mas menos do que antes). As perguntas sobre
uma funcionalidade específica continuam a categoria com mais peso de
documentação oficial, 13,2% das citações da categoria, acima dos 8,2% da
semana passada e mais de cinco vezes a média das outras quatro categorias
(2,4%, quase igual à média de 2,4% da semana passada): confirma-se com mais
força a leitura de que perguntas de "como funciona X" puxam mais para
fontes institucionais do que perguntas de preço ou de recomendação.

O peso conjunto de vídeo e UGC nas perguntas de comparação directa
mantém-se elevado, 15,4% (era 16,2%); mas nas perguntas de funcionalidade
específica caiu a metade, 8,0% esta semana contra 16,0% na anterior, ficando
agora mais perto da comparação de preço (6,5%, era 7,4%) do que da
comparação directa. A recomendação local continua a categoria com menor
peso de vídeo e UGC, 3,9% (era 4,4%). A segunda metade do padrão da semana
passada, funcionalidade específica a par da comparação directa em vídeo e
UGC, não se repete; fica como observação a confirmar, não como leitura
assente.

### Domínio próprio do cliente

Apareceu nas citações de pesquisa de todos os oito motores medidos esta
semana, incluindo o Claude pela primeira vez (a semana passada era falha de
medição para esse motor). Mais vezes no Gemini e no Perplexity, seguidos do
Copilot; presença mais discreta no Google AI Mode. Na semana passada não
tinha aparecido no Gemini, no Google AIO, no Google AI Mode nem no ChatGPT;
esta semana aparece nos oito. Sem números específicos, por regra de
privacidade deste ficheiro.

### Estabilidade

Sete dos oito motores já têm duas leituras para comparar; o Claude é o
único ainda na primeira. Em volume de citações, domínios únicos e
composição por tipo, o Grok, o Copilot, o Gemini e o Perplexity são os mais
estáveis semana a semana, com variações de um ponto percentual ou menos na
maioria das métricas de dispersão. O ChatGPT e o Google AIO concentram-se
um pouco mais em fontes institucionais do que na semana anterior. O Google
AI Mode e o Perplexity são os que mais perdem peso de vídeo. A leitura mais
robusta desta segunda semana é a confirmação, pela regra das duas
auditorias, de que o Grok não cita o X nas respostas de pesquisa deste
nicho, apesar do bloco do motor descrever peso invulgar dado a esse sinal.

## 2026-08-10

Primeira entrada deste ficheiro. A evidência desta semana vem de uma
auditoria semanal única (os restantes clientes desta base estavam
inactivos), num sector de consultoria de visibilidade em IA/SEO em
Portugal. Os números abaixo descrevem esse universo; generalizar a outros
sectores precisa de mais semanas e mais clientes. Sem semana anterior para
comparar, não há leitura de estabilidade ainda: fica como referência para a
próxima entrada.

Base: 756 respostas na auditoria, 755 sem erro, 752 com `cited` preenchido.
Em modo de pesquisa (augmented), 7 motores/superfícies devolveram citações
em 377 respostas (54 perguntas por motor, 53 no copilot), num total de
3 744 citações brutas. Deepseek e mistral só correram em modo de memória
(knowledge) esta semana, sem nenhuma linha augmented, consistente com os
blocos desses dois motores em `engine_playbooks.md`.

### chatgpt

54 respostas, 201 citações, 80 domínios únicos (39,8% de taxa de domínios
únicos, a mais concentrada dos motores medidos: um único domínio de
documentação oficial da Google respondeu sozinho por 15,4% de todas as
citações do motor). Por tipo: 66,2% sites de agência/consultoria de nicho,
28,4% documentação oficial/institucional (Google Developers, OpenAI Help,
Bing, Google Support), 3,5% investigação primária (arxiv.org), 1,0% UGC,
1,0% directórios de reviews.

Confirma o bloco do motor: preferência por fontes institucionais em modo de
pesquisa, e uma reutilização concentrada de poucos domínios, coerente com
"lê só os 2 a 3 primeiros resultados por sub-pergunta".

### claude

Falha de medição, não achado sobre o motor. As 54 respostas augmented desta
semana têm `raw_citations` vazio em todas. A via augmented do Claude nesta
auditoria foi gerada por síntese na Routine, na subscrição Max (ver
`routines/tracker-brain.md`, secção A.2b), e não por uma chamada de
pesquisa instrumentada, por isso não há URLs para medir. Sem evidência de
selecção de fontes do Claude esta semana; a lacuna é da pipeline, não do
motor.

### gemini

54 respostas, 751 citações, 419 domínios únicos (55,8% únicos). Por tipo:
83,4% sites de agência/consultoria de nicho, 9,1% vídeo (youtube.com), 2,5%
UGC/social, 2,4% documentação oficial, 2,4% imprensa de martech.

O bloco do motor regista o YouTube a 20,9% das citações do AI Overviews
(Ahrefs). Aqui, no Gemini enquanto assistente e não no bloco AIO, medimos
9,1%: mais baixo, mas o benchmark citado é de outro produto e não
necessariamente da mesma categoria de pergunta. Confirma a direcção, YouTube
presente e relevante, não confirma a magnitude.

### google_aio

54 respostas, 423 citações, 228 domínios únicos (53,9% únicos). Por tipo:
76,6% sites de agência/consultoria de nicho, 12,1% vídeo, 8,3% UGC/social
(Reddit e LinkedIn juntos), 1,7% imprensa de martech, 1,2% documentação
oficial.

Confirma o ponto do playbook sobre citar discussões directamente na
resposta: Reddit e LinkedIn somam 8,3% das citações deste motor, mais peso
do que no Gemini assistente e no ChatGPT.

### google_ai_mode

54 respostas, 573 citações, 336 domínios únicos (58,6% únicos). Por tipo:
81,3% sites de agência/consultoria de nicho, 12,6% vídeo, 5,1% UGC/social,
0,9% imprensa de martech, 0,2% documentação oficial.

Sem forma de medir aqui o comprimento médio da passagem citada, cerca de 117
palavras no benchmark do playbook: exigiria analisar o texto de cada
resposta, não só o `raw_citations`. Fica como extensão possível de leitura
para a próxima entrada.

### grok

54 respostas, 233 citações, 163 domínios únicos (70,0% únicos, o segundo
motor mais disperso). Por tipo: 88,8% sites de agência/consultoria de
nicho, 3,4% documentação oficial, 3,4% imprensa de martech, 2,1%
UGC/social, 1,7% directórios de reviews. Zero citações de x.com ou
twitter.com, tanto no conjunto completo como nos domínios mais citados.

Contradiz, nesta leitura, a ênfase do bloco do motor em sinais do X:
esperava-se alguma presença e não houve nenhuma. Uma semana não chega para
mexer no playbook, a regra das duas auditorias pede confirmação; fica
registado para verificar na próxima entrada.

### copilot

53 respostas, 522 citações, 369 domínios únicos (70,7% únicos, o motor mais
disperso). Por tipo: 94,1% sites de agência/consultoria de nicho, 2,5%
UGC/social (quase todo LinkedIn), 1,0% directórios de reviews, 1,0%
documentação oficial, 0,8% vídeo, 0,8% imprensa de martech.

Confirma a base do bloco do motor, índice Bing e conteúdo comparativo.
Observação nova, ainda fora do playbook: presença recorrente de LinkedIn
como fonte secundária. Vale acompanhar mais semanas antes de propor uma
edição ao bloco.

### perplexity

54 respostas, 1 041 citações, 589 domínios únicos (56,6% únicos). Por tipo:
86,3% sites de agência/consultoria de nicho, 5,6% vídeo, 4,8% UGC/social
(Reddit e LinkedIn), 2,1% documentação oficial, 1,0% imprensa de martech.

O bloco do motor regista o YouTube a 32,4% e o Reddit a "cerca de 47% nalguns
estudos de categoria" (direccional). Aqui medimos bem abaixo de ambos: vídeo
a 5,6%, UGC a 4,8%. Leitura mais provável: os benchmarks citados no playbook
são genéricos, e neste nicho específico, consultoria B2B em GEO/IA, com
pouca comunidade activa em português sobre o tema, o Perplexity dispersa-se
por dezenas de sites de agência em vez de concentrar em YouTube e Reddit.
Não é uma contradição do motor, é sinal de que a magnitude do benchmark
depende do nicho da pergunta.

### Padrões por categoria de pergunta

As perguntas de preço e as de recomendação local citam quase só sites de
agência/consultoria de nicho, 90,1% e 93,0% das citações da categoria
respectivamente, com quase nenhuma documentação oficial nem vídeo. As
perguntas sobre uma funcionalidade específica são a categoria com mais peso
de documentação oficial, 8,2% das citações da categoria, mais do triplo da
média das outras quatro categorias (2,4%): perguntas de "como funciona X"
puxam mais para fontes institucionais do que perguntas de preço ou de
recomendação. As perguntas de comparação directa e as de funcionalidade
específica são as duas categorias com maior peso conjunto de vídeo e UGC,
16,2% e 16,0% das citações respectivamente, bem acima da recomendação local
(4,4%) e da comparação de preço (7,4%).

### Domínio próprio do cliente

Apareceu nas citações de pesquisa de vários motores esta semana, mais vezes
no Perplexity, também no Copilot e no Grok; não apareceu nas citações do
Gemini, do Google AIO, do Google AI Mode nem do ChatGPT. Sem números
específicos, por regra de privacidade deste ficheiro.

### Estabilidade

Primeira entrada: sem semana anterior para comparar domínios estáveis
contra rotativos. A próxima entrada já pode fazer essa comparação.
