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
