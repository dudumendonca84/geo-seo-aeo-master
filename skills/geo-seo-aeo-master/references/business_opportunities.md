# Oportunidades de negócio (capítulo 07 do relatório do prospect)

Consumido pela task `business_opportunities` da Routine do cérebro do
Periscopy (`destaque-ai-tracker/routines/tracker-brain.md`). Vale para
qualquer setor: hospitais, retalho, banca, seguros, imobiliário, B2B SaaS,
turismo. Nada aqui é específico de um cliente.

## 1. O que é uma oportunidade de negócio

Uma mudança no mercado do prospect que lhe pode trazer mais clientes e que
se mede com números públicos: procura que cresce, um segmento mal servido,
um concorrente que falha, uma regra que muda, um comportamento novo do
consumidor. Não é uma recomendação técnica de visibilidade (essa vive no
plano de ações) nem uma opinião sobre a marca.

Passa no teste quem responde às três perguntas:

1. **Quantos?** Há um número público que mede o tamanho (pessoas, euros,
   episódios, % de crescimento).
2. **Porquê esta marca?** A oportunidade encaixa no que o prospect já vende
   ou onde já está (especialidade, região, produto, público).
3. **O que fazer?** Há uma ação concreta, de marketing, conteúdo ou presença,
   que o prospect pode começar já.

O que falha uma das três fica de fora. Seis boas valem mais do que doze
fracas, mas quando há material, procura entre 8 e 12: uma lista curta por
falta de procura deixa de fora o que o prospect mais precisa de ouvir.

### Num refazer, parte da lista anterior

Quando o pedido traz `anteriores` (as oportunidades da execução anterior),
não se recomeça do zero. Reabre cada fonte: a oportunidade que continua
válida fica, com o número atualizado se mudou; a que caiu ou deixou de ser
verdade sai ou troca de fonte. Depois acrescentam-se as novas, até 12, e
reordena-se tudo pelo impacto. Devolve-se sempre a lista inteira.

### Antes de fechar a lista, cobre sempre estes três ângulos

1. **O mercado:** procura que cresce, falhas do serviço público ou do líder,
   regras que mudam, comportamento novo (os da tabela abaixo).
2. **A própria marca:** o que ela abriu, comprou, lançou ou anunciou nos
   últimos 12 meses (unidade nova, região nova, serviço novo). Uma abertura
   recente é quase sempre uma oportunidade: há uma população nova a servir e
   a IA ainda não sabe que a marca lá está. Procura na imprensa regional da
   zona.
3. **Os concorrentes:** aberturas, investimentos, resultados e saídas dos
   concorrentes do pedido nos últimos 12 meses (imprensa económica). Onde um
   concorrente investe, a procura existe; onde sai ou falha, fica espaço.

Um destes ângulos sem nenhuma oportunidade só é aceitável se a pesquisa não
encontrou nada com número e fonte; diz-se isso no `porque` de outra
oportunidade, nunca se inventa.

## 2. Onde procurar, por tipo de fonte

Prefere sempre a fonte primária; aceita a notícia que a cita quando a
primária não abre, e diz-o na `fonte` («ERS, via DN»).

| Tipo | Exemplos (Portugal) | Para quê |
|---|---|---|
| Estatística oficial | INE, Pordata, Eurostat, Banco de Portugal, Portal da Transparência do SNS | população, consumo, digital, envelhecimento, nascimentos |
| Reguladores | ERS (saúde), ASF (seguros), ANACOM (comunicações), ERSE (energia), CMVM, Banco de Portugal, Turismo de Portugal | tempos de espera, mercado segurado, reclamações, licenças |
| Associações do setor | APHP (hospitais privados), APS (seguradores), APED (distribuição), AHRESP, APAVT, ACEPI (economia digital) | volume, investimento, atividade do setor |
| Imprensa económica | ECO, Expresso, Jornal de Negócios, Dinheiro Vivo, Observador, Público, imprensa regional na região do prospect | aberturas, investimentos e resultados de concorrentes |
| Tendências de pesquisa | Google Trends (Portugal), volumes de pesquisa do próprio Periscopy | procura a subir ou a descer por termo |
| Estudos com amostra declarada | relatórios de mercado com metodologia, inquéritos com N e data | comportamento do consumidor, uso de IA |

Para outros mercados, os equivalentes locais (o instituto de estatística, o
regulador e a associação do setor do país).

O que se aproveita da medição do próprio relatório (perguntas sem dono, onde
o líder é fraco, factos errados) entra pela `ligacao`, não como número de
mercado.

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
  "tema": "Acesso ao SNS",
  "titulo": "Uma frase de negócio, com o número dentro quando cabe",
  "numero": "86,4%",
  "nota": "o que o número é, numa linha",
  "porque": "porque é oportunidade para ESTA marca, em duas frases",
  "numeros": [
    { "texto": "o facto com o número", "fonte": "Quem publicou (via quem, se for o caso)",
      "url": "https://endereco-que-abre", "data": "11 mai 2026" }
  ],
  "fazer": ["ação concreta", "outra ação concreta"],
  "ia": "como aparecer na resposta da IA quando alguém pergunta sobre isto",
  "ligacao": "um pedaço do texto de uma pergunta medida, ou null"
}
```

- `numero` e `nota` são o que aparece grande no cartão: o número que mede o
  tamanho da oportunidade, tal como está na fonte.
- `numeros`: dois a quatro, cada um com fonte, data e endereço que se abre.
  **Um número sem endereço é recusado pelo código.**
- `fazer`: duas ou três ações, cada uma começada por verbo e possível de
  começar este mês.
- `ia`: uma frase sobre o que a resposta da IA precisa de encontrar (o
  número com data, o autor com nome, a página que responde à pergunta
  inteira, a ficha completa) e, quando faz sentido, que perguntas medir no
  Periscopy.
- `ligacao`: só quando a ligação é real. É um pedaço curto do texto de uma
  pergunta que vem em `medicao.sem_dono` ou nas frentes do `lider` (por
  exemplo «atendimento em inglês»). O código casa-o e mostra o número
  medido. Se não há pergunta que lhe corresponda, `null`.

## 4. Ordem

Pelo impacto provável: pessoas afetadas, tendência (a crescer pesa mais) e
encaixe no que o prospect já oferece. A ordem é juízo; os números não.

## 5. Proibido

- **Inventar um número**, arredondar para impressionar ou juntar números de
  fontes diferentes como se fossem um só. Se não há número público, a
  oportunidade não entra.
- Um número sem fonte, sem data ou sem endereço.
- Apresentar dados de outro país como se fossem do mercado do prospect sem
  o dizer («amostra dos EUA», «dados de fornecedor de SEO, indicativos»).
- Uma oportunidade que depende de uma oferta que não se confirmou que o
  prospect tem (diz-se na `nota` do job e fica de fora).
- Ligar à medição por semelhança vaga: a `ligacao` é para a mesma pergunta.
- Escrever para o prospect fazer o que só nós fazemos: o `fazer` é dele; o
  que a destaque.ai faz já está no resto do relatório.

## 6. Escrita

A do guia da casa (`references/escrita.md`): português de Portugal com o
Acordo de 1990, "você", sem travessões, números antes de adjetivos, frases
curtas. A língua é a do cliente (`lingua` no contexto); quando o relatório
se lê em várias, cada texto pode vir em `{pt, en, fr}`.
