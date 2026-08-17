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
