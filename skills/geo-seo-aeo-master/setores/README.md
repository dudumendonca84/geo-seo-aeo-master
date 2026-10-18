# A memória de cada setor

Um ficheiro por setor de cliente (`<id>.md`). É o que um consultor sénior
desse setor sabe de cor, escrito, com data no que envelhece. Pedido do
founder a 18 Out 2026: *"o agente tem que ter essa compreensão do segmento
dele"*, e o escritor do Estúdio também.

## Duas metades, e só uma vive aqui

| Metade | Onde vive | Quem escreve | Cadência |
|---|---|---|---|
| **O que o setor está a fazer** (tendências, preços, lançamentos, regulação, campanhas, sazonalidade) | aqui, neste ficheiro | o agente semanal (`setores-prompt.md`) | domingo à noite |
| **O que a IA faz neste setor** (fontes que os motores citam, consultas que fazem, quem lidera) | no Tracker, calculado das respostas dos clientes desse setor | código (`destaque-ai-tracker/src/lib/setores/`) | a cada leitura |

A metade medida não se escreve aqui porque é aritmética sobre a base, e
uma conta copiada para prosa envelhece no dia seguinte sem nada a dizê-lo.

## Quem lê

- **O agente do painel** do cliente (`destaque-ai-tracker/src/lib/agent/`):
  entra no pacote de factos quando o cliente é deste setor.
- **O Estúdio** (o escritor de textos do Tracker): lê antes de escrever
  qualquer peça para um cliente deste setor. As regras do escritor estão em
  `references/estudio.md`.
- Quem escreve estudos e artigos do site sobre o setor.

## Formato (o Tracker lê por secções)

Cada ficheiro tem estas secções, por esta ordem, com estes títulos
exatos no início de linha:

```
# Setor: <Nome>
## O que se sabe do setor
## Tendências
## Calendário
## Fontes a vigiar
```

- **O que se sabe do setor**: factos duráveis (estrutura do mercado,
  quem são os grandes, como o comprador decide, vocabulário próprio). Cada
  linha com a origem.
- **Tendências**: entradas datadas, a mais recente em cima, no formato
  `- **AAAA-MM-DD** · <o que aconteceu> ([fonte](url))`. Mais de 90 dias
  sai: o que continuar verdade sobe para "O que se sabe", o resto apaga-se.
- **Calendário**: o que se repete todos os anos (campanhas, prazos
  regulatórios, picos de procura).
- **Fontes a vigiar**: reguladores, associações e media do setor que o
  agente semanal tem de ler.

## Regras de escrita

As da casa: português de Portugal com o Acordo de 1990, sem travessões,
sem as palavras "controlo" e "canónico", números só com fonte, e "não
encontrámos" quando não se encontrou. Uma tendência sem ligação para a
fonte primária não entra.

## Os setores

Só os setores dos clientes ativos (founder, 18 Out 2026: os setores do
Radar e dos estudos não entram). Quando um cliente novo é ativado num
setor que não está aqui, cria-se o ficheiro dele com as quatro secções e
as fontes a vigiar, e a corrida seguinte do agente semanal preenche-o.

| id | Setor | Clientes |
|---|---|---|
| `geo` | Agências e ferramentas de GEO | destaque.ai (a fonte das tendências é o `daily-agent/news-feed.md`) |
| `formacao-it` | Formação e certificação em IT | Congruent |
| `outsourcing-it` | Outsourcing e serviços de IT | Congruent |
| `software-rh` | Software de RH e gestão para consultoras | goCrew |

Um cliente pode estar em mais de um setor (a Congruent está em dois). A
ligação vive no Tracker (`clients.sectors`), não aqui.
