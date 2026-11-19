# O texto do capítulo 09 do relatório do prospect

Consumido pela task `proposal_writing` da Routine do cérebro do Periscopy
(`destaque-ai-tracker/routines/tracker-brain.md`). Vale para qualquer setor:
hospitais, retalho, banca, seguros, imobiliário, B2B SaaS, turismo. Nada aqui
é específico de um cliente.

O capítulo 09 é a proposta da destaque.ai no fim do relatório de um
prospect. Quase tudo nele é medido ou calculado pelo código. Três blocos
pedem juízo sobre a medição da marca, e são esses que se escrevem aqui: o
«Porque acontece», a frase de posicionamento e o «estacionamento coberto».
O desenho foi aprovado pelo founder a 14 de novembro de 2026
(`destaque-ai-tracker/docs/produto/CAPITULO-09-PROPOSTA.md`).

Quem escreve lê primeiro o guia da casa (`references/escrita.md`) e faz a
revisão do § 10 antes de devolver. Este ficheiro diz o que cada bloco é;
o guia diz como se escreve.

---

## 1. O que é cada bloco, e onde aparece

### 1.1 «Porque acontece» (página «Para decidir»)

É a linha do resumo que explica a causa do resultado. O diretor que só lê a
primeira página tem de sair dela a saber porque é que a IA escolhe outra
marca, e não só que a escolhe.

- **`numero`**: uma contagem medida, curta, na forma "X de Y" ("11 de 15",
  "11 of 15", "11 sur 15"). Até 24 caracteres. Os dois números vêm do
  contexto, tal como lá estão.
- **`nota`**: o que o número conta, numa expressão ("respostas sobre o
  preço citam a Clínica Exemplo", onde a Clínica Exemplo é o concorrente).
  Até 80 caracteres.
- **`texto`**: duas frases, no máximo três. A primeira diz a causa, com o
  sujeito certo (a fonte que a IA lê, a página que falta, o concorrente que
  publica o que a marca não publica). A segunda diz o que isso tem de
  concreto no site ou nas fontes da marca. Até 360 caracteres.

A causa sai do contexto: as `fontes` de cada pergunta, o `lugar_da_marca`
nelas, os `escolhidos_em_vez`, os `porques` dos motores e a `leitura` da
semana. Se o contexto não mostra uma causa com números, o bloco vai a
`null`. Uma causa plausível sem prova é o pior que se pode pôr na primeira
página de uma proposta.

### 1.2 A frase de posicionamento (anexo, cartão «Posicionamento»)

O cartão promete comparar como a marca se descreve com como a IA a
descreve. A frase é o exemplo dessa comparação na semana medida, e aparece
com o rótulo «Hoje».

- Uma ou duas frases, até 320 caracteres.
- **Como a marca se apresenta vem do `site`** do contexto: o título, a
  descrição e os subtítulos da página inicial dela. A `percecao` é o que a
  IA diz, e nunca serve para dizer como a marca se apresenta.
- **O que a IA repete vem da `percecao`**: os `tracos` (com a contagem) e
  os `silencios` (o que a IA não diz).
- Com as duas metades, a frase compara-as. Quando a IA já repete o
  posicionamento da marca, diz-se isso. Não se inventa uma distância para o
  cartão ter conflito.
- Sem `site` (o contexto diz porquê em `site_nao_lido`), a frase diz só o
  que a IA repete e o que deixa por dizer, sem afirmar como a marca se
  apresenta.
- Sem `percecao`, o bloco vai a `null`.

### 1.3 O estacionamento coberto (página «Como começar»)

O nome vem de uma frase do founder a 14 de novembro de 2026: *"colocamos o
dinheiro e esforço no lugar certo, lembro a questão do estacionamento
coberto do pingo doce"*. A ideia é esta. O que decide a resposta da IA é,
muitas vezes, um facto prático que o cliente pergunta e que uma página pode
dizer (um preço, um horário, um serviço, haver estacionamento coberto).
Nenhuma campanha muda essa resposta; muda-a a página que responde ao que se
pergunta. O bloco termina com o texto fixo "Nenhum destes pede mais
campanha. Pede uma página que responda ao que lhe perguntam."

O exemplo do Pingo Doce é a origem do nome e **não entra no texto de outra
marca**: os factos de um prospect nunca se usam no relatório de outro.

- **`frase`**: a ideia aplicada a esta marca, numa frase, até 220
  caracteres. Aparece como citação.
- **`texto`**: opcional, uma ou duas frases até 400 caracteres, quando a
  frase precisa de contexto. Na dúvida, `null`.
- **`exemplos`**: até três, nunca mais. O desenho pede três; um ou dois
  chegam quando são os únicos que a medição sustenta, e um exemplo sem base
  nunca entra para fazer número. Cada um liga-se a uma pergunta medida do
  relatório (`prompt_id`, só do contexto):
  - `titulo`: o assunto, curto, sem número ("O preço da primeira consulta").
    Até 70 caracteres.
  - `pergunta`: o que o cliente pergunta, nas palavras dele. Na língua das
    perguntas medidas (`lingua_das_perguntas` no contexto, que pode não ser
    a do cliente: uma marca com a interface em inglês pode medir perguntas
    em português do Brasil), é o texto da pergunta medida, encurtado se for
    preciso, sem mudar o sentido e com as mesmas palavras, também quando é
    português do Brasil («aplicativo», «equipe», «cadastro» ficam). Nas
    outras línguas, a tradução. Até 200 caracteres. O Tracker confere a
    versão na língua das perguntas medidas, e só essa: cada palavra que
    conta (quatro letras ou mais, tirando as de função como «qual», «mais»
    ou «melhor») está na pergunta medida, e as negações dessa língua
    («não», «sem»; «not», «no»; «ne», «pas») são as mesmas. Juntam-se o
    plural e a vogal final de género; as formas verbais não («implementam»
    não é «implementar»), por isso copia-se o verbo como está. Com as
    perguntas numa língua que o texto não tem (espanhol, alemão), confere-se
    só o `prompt_id`. A `pergunta` é uma citação: não passa pelo «você» nem
    pelas tabelas de `escrita.md` (§ 3, § 4 e § 6 dizem o mesmo).
  - `decide`: o que decide a resposta, em concreto: a fonte que a IA cita
    nessa pergunta, a página que falta no site da marca, o facto que um
    concorrente publica. Até 240 caracteres.
  - `funciona`: `true` só quando a medição mostra que a IA já escolhe a
    marca nessa pergunta (`escolhida` maior do que zero). É o exemplo que
    prova que o caminho funciona com esta marca.

A mistura que o desenho pede, quando a medição a sustenta: um exemplo sobre
o preço, um sobre o tratamento ou o serviço, e um que já funciona. Se a
medição não tem uma das três, escolhe-se outra pergunta com um facto
prático. Nunca se força a mistura com um exemplo sem base.

---

## 2. Os números

- **Só os do contexto.** Cada número escrito existe no contexto do pedido,
  tal como lá está. O Tracker confere-o e tira o campo que tiver um número
  que o contexto não tem (percentagens com um ponto de folga; números de um
  dígito não contam). Os números fixos do capítulo (o arranque de 90 dias,
  as 13 semanas, os horizontes do plano) vêm em `capitulo`, e podem
  dizer-se.
- **Contagens antes de percentagens**, e sempre com o denominador: "11 de
  15", e não "73%".
- **Percentagens arredondadas à unidade**, como o contexto as dá
  (`taxa_de_citacao`).
- **Sem somas nem diferenças** entre números do contexto. Um número
  derivado é um número que ninguém mediu, e a verificação recusa-o.
- **Milhares** com espaço em português e francês (1 240), com vírgula em
  inglês (1,240). Dois números seguidos nunca ficam separados só por um
  espaço ("das 120, 30 citam"): sem a vírgula, leem-se como um milhar.

---

## 3. As três línguas

O mesmo relatório abre em português, inglês e francês, pelo endereço
(`/relatorio/`, `/report/`, `/rapport/`). Por isso **cada texto vem em
`{pt, en, fr}`**, e um texto a que falte uma língua não entra.

- **Português de Portugal**, com o Acordo de 1990, a tratar o leitor por
  "você" (`escrita.md` § 7). O Tracker passa o português pelo "você" e pelo
  artigo certo da marca antes de o conferir, mas não corrige o resto. A
  exceção é a `pergunta` dos exemplos, que é citação: vai como foi medida,
  em português do Brasil quando a pergunta medida o é.
- **Inglês britânico** (`escrita.md` § 8).
- **Francês de França**, com o espaço inseparável antes de `?`, `!`, `:`
  e `;` e por dentro das aspas « ». O Tracker não o troca por um espaço
  normal.
- **Nomes de marcas, de motores e de domínios** ficam iguais nas três.
- **Sem travessões** em nenhuma língua, nem o longo nem o médio.
- As três versões dizem o mesmo. Não se acrescenta numa língua o que a
  outra não diz.

---

## 4. Proibido

- **Inventar um facto sobre a marca**: uma oferta, um preço, um serviço,
  uma página que o contexto não mostra. Se o exemplo precisa de saber se a
  marca publica o preço e o contexto não o diz, escolhe-se outro exemplo.
- **Prometer resultados** ("vai aparecer", "vai ser escolhida"). O
  capítulo 09 já diz como se mede e o que se propõe.
- **Usar factos de outro prospect ou cliente**, incluindo o exemplo do
  Pingo Doce que deu o nome ao bloco.
- **Nomear pessoas.** Papéis e marcas, sim.
- **Escrever para o prospect fazer o que só a destaque.ai faz.** O bloco
  mostra onde está o esforço certo; o plano já está no resto do capítulo.
- **Os tiques e as palavras do Brasil** das tabelas de `escrita.md`, em
  todos os campos menos a `pergunta` dos exemplos, que cita a pergunta
  medida. O Tracker mede-os e recusa o campo.

---

## 5. A forma do resultado

```json
{
  "porque_acontece": {
    "numero": { "pt": "11 de 15", "en": "11 of 15", "fr": "11 sur 15" },
    "nota": { "pt": "...", "en": "...", "fr": "..." },
    "texto": { "pt": "...", "en": "...", "fr": "..." }
  },
  "posicionamento": { "pt": "...", "en": "...", "fr": "..." },
  "estacionamento": {
    "frase": { "pt": "...", "en": "...", "fr": "..." },
    "texto": null,
    "exemplos": [
      {
        "prompt_id": "uuid de uma pergunta do contexto",
        "titulo": { "pt": "...", "en": "...", "fr": "..." },
        "pergunta": { "pt": "...", "en": "...", "fr": "..." },
        "decide": { "pt": "...", "en": "...", "fr": "..." },
        "funciona": false
      }
    ]
  }
}
```

Qualquer bloco pode ir a `null`. Um bloco que falta não aparece no
relatório.

---

## 6. O que o Tracker confere antes de gravar

A porta está em `destaque-ai-tracker/src/lib/reports/escrito-da-proposta.ts`
(`escritoDoCerebro`). Um campo que falha sai sozinho, com o motivo, e o
resto fica:

1. as três línguas presentes e não vazias;
2. o teto de caracteres de cada campo (§ 1);
3. nenhum travessão;
4. as tabelas de `escrita.md` (tiques, Brasil → Portugal, grafia anterior
   ao Acordo) e os limites que se medem (palavras por frase, dois-pontos
   por parágrafo, frases por parágrafo, exclamações), em todos os campos
   menos a `pergunta` dos exemplos, que é citação;
5. nenhum número fora do contexto;
6. nenhuma nota nossa (o que o sinal `nota_interna_no_cliente` acusa:
   nomes de tabelas, «founder», marcas de rascunho);
7. cada exemplo com `prompt_id` de uma pergunta do contexto, com a versão
   da `pergunta` na língua das perguntas medidas a bater com a pergunta
   medida (salvo perguntas numa língua que o texto não tem), sem repetir
   pergunta, no máximo três;
8. `funciona: true` só numa pergunta com `escolhida` maior do que zero.

O estacionamento sem frase ou sem nenhum exemplo aceite sai inteiro. Sem
nenhum bloco aceite, o pedido fecha em erro e nada se grava: o relatório
continua sem o texto desta semana (depois de um fecho novo, o texto antigo
fica escondido até chegar um texto aceite).

O texto grava-se com a auditoria do contexto (`weekly_audit_id`) e só
aparece no relatório montado dessa auditoria, com a semana fechada e escrito
depois do último fecho dela. O pedido só nasce com a semana fechada.
Pede-se texto novo numa semana nova, numa semana que reabre e volta a
fechar, e quando as linhas do arranque mudam; o pedido anterior fecha como
substituído, e um resultado entregue para ele é recusado.
