# Commerce playbooks — como um produto aparece, superfície a superfície

Referência do `geo-seo-aeo-master`, para clientes que vendem produtos. O
irmão de `engine_playbooks.md`, mas ao nível do **produto** em vez da marca.

**A tese, e é o que distingue este ficheiro:** para a mesma pergunta de
compra, superfícies diferentes recomendam produtos diferentes, porque cada
uma escolhe por um mecanismo diferente. Não há uma resposta única a
espelhar. Há três trabalhos distintos, e um cliente pode estar bem num e
invisível nos outros dois.

---

## A prova que originou este ficheiro

Verificação de primeira mão, 20 Ago 2026, a partir de Portugal, em
português. Pergunta: *"Onde compro um aspirador vertical até 200 euros em
Portugal com entrega rápida?"*

| Superfície | O que devolveu |
|---|---|
| App ChatGPT, com pesquisa, carrossel | Rowenta Dual Force RH6756WO · Beltax BVC-1600 · Bosch BBHF220 |
| ChatGPT sem pesquisa, resposta de memória | Xiaomi G9/G10 · Cecotec Conga Rockstar · Hoover H-Free · Dreame V9/V10 · Rowenta X-Force 8.50/8.60 · Bosch Serie 2/4 Flexxo |
| Google Shopping, blocos patrocinados | Rowenta X-FORCE FLEX · FLAMA Pro Force 75 · Bosch BCS61113 · Bosch Serie 4 · Bosch BCS711XXL |

**Cuidado com a leitura, e este erro foi cometido na primeira análise.** A
segunda linha não é "a API" contra "a aplicação": é uma resposta **sem
pesquisa**, tirada da memória do modelo, contra uma resposta **com
pesquisa**. São vias diferentes do mesmo motor, e é esperado que devolvam
coisas diferentes. A memória dá as famílias que dominam o corpo editorial
da categoria; a pesquisa dá o que estava nas páginas abertas naquele
instante.

O que a prova estabelece, então:

1. Memória e pesquisa recomendam produtos diferentes na mesma categoria, o
   que já era a tese das duas vias, agora visível ao nível do produto.
2. Os blocos do Google Shopping não coincidem com nenhum dos dois em
   referência exacta, o que desaconselha usá-los como espelho de outra
   superfície.
3. O carrossel da app mudou entre duas corridas com minutos de intervalo,
   com outro retalhista citado.

**Limites, que têm de acompanhar qualquer uso disto:** uma pergunta, um
dia, uma categoria, um mercado. Sugere mecanismos. Não quantifica nada, e
não serve para afirmar percentagens de sobreposição, nossas ou de
terceiros.

**Por confirmar, e é o teste que falta:** repetir a resposta **com pesquisa
activa** e comparar o texto dela com o carrossel da mesma corrida. Se
nomearem os mesmos produtos, o carrossel é a apresentação visual de algo
legível por vias normais. Se nomearem outros, a lacuna de medição no
comércio é estrutural e tem de ser dita nas propostas.

---

## Superfície 1 — Texto dos modelos (os sete motores)

**Como decide.** Por duas vias, como qualquer motor. Pela memória, nomeia
famílias que aprendeu a associar à categoria: na verificação acima, e
respondendo **sem pesquisa**, deu `Xiaomi G9/G10` e `Hoover H-Free
100/200`, famílias e não referências, e nenhum preço. Pela pesquisa,
nomeia o que encontrar nas páginas que abrir. Os vencedores são as marcas que dominam o corpo editorial da
categoria: comparativos, listas de "melhores até X euros", análises,
fóruns.

**Faz:**

1. Publica ou conquista presença em conteúdo comparativo da categoria, com
   a referência de modelo escrita por extenso. É o formato que o modelo
   aprende.
2. Trabalha as fontes que a categoria produz: análises independentes,
   listas de recomendação, comunidades. É trabalho de relações, não de
   catálogo.
3. Garante consistência do nome do produto em todo o lado. Um modelo
   escrito de cinco maneiras diferentes divide a evidência por cinco.
4. Não esperes efeito de feed nesta superfície. Feed impecável não põe uma
   marca no texto de um modelo.

**Ritmo.** Meses pela via da memória, semanas pela via da pesquisa.

---

## Superfície 2 — Google Shopping (fichas gratuitas e patrocinadas)

**Como decide.** Dados de comerciante. É a superfície mais mecânica das
três e a mais directamente accionável.

**Faz:**

1. Feed completo: GTIN ou MPN, marca, preço, moeda, disponibilidade,
   custos de envio e política de devoluções. Um campo em falta é um motivo
   de exclusão, não uma penalização gradual.
2. Frescura a condizer com a rotação real de stock. Um feed diário numa
   loja que vende de hora a hora está a mentir metade do dia.
3. Avaliações com volume. Na verificação de 20 Ago 2026 os cartões
   mostravam contagens entre 12 e mais de 4 mil; o mesmo produto com 12
   avaliações e com 4 mil não compete em igualdade.
4. Inventário local quando há loja física. Os cartões traziam a localidade
   e a opção de levantamento, o que só existe com inventário local
   declarado.
5. Verifica **por onde entra a ficha**. Nos cartões observados uns diziam
   "De Google" e outros "De Kelkoo": parte do inventário chega através de
   serviços de comparação de preços, e nesses casos quem controla os dados
   é o intermediário. É uma alavanca que quase ninguém audita.

**Ritmo.** Dias. É a superfície onde uma correcção se vê mais depressa.

---

## Superfície 3 — Carrossel da aplicação do ChatGPT

**Como decide.** Pela evidência de 20 Ago 2026, monta-se a partir de
páginas web recuperadas pela pesquisa, e não de um catálogo de compras. O
assistente deixou o rasto: `utm_source=chatgpt.com` numa página de
**categoria filtrada por marca e por cor** de um retalhista português.

Consequência directa observada: nessa página, vinte produtos declarados
como `ItemList` com `ListItem`, e **nenhum `Product`**. Sem preço, marca ou
categoria ligados a cada item, o modelo teve de inferir o que pertencia a
quê, e apresentou um aspirador como ferro de passar.

**Faz:**

1. Estar listado nos retalhistas cujas páginas respondem às perguntas da
   categoria. Sem distribuição não há carrossel.
2. Exigir ao canal dados estruturados por item nas páginas de listagem:
   cada `ListItem` com um `Product` dentro, com `name`, `brand`,
   `category` e `offers`. É correcção de um dia para quem tem acesso ao
   template.
3. Ter uma página só daquele produto, que diga o que a coisa é antes de
   dizer o quanto é boa. Dá ao modelo uma fonte sem ambiguidade para
   preferir.
4. Contar com instabilidade. O carrossel mudou entre corridas próximas;
   uma verificação única não conclui nada.

**Ritmo.** Desconhecido. Não temos medição repetida suficiente para o
afirmar.

**Nota de medição.** Não existe API sancionada para esta superfície.
Medi-la de forma automática implica raspar a aplicação, o que viola os
termos da OpenAI e produz dados que partem sem aviso. A posição da casa é
medir as superfícies onde há acesso legítimo e tratar esta como
verificação pontual, dizendo-o no relatório em vez de a misturar com o
resto.

---

## Diagnóstico: em qual das três está mal

A pergunta do cliente é sempre *"como apareço mais vezes?"*. A resposta
útil começa por *"depende de onde"*.

| Sintoma | Superfície fraca | Trabalho |
|---|---|---|
| Não é nomeado no texto dos modelos, mas aparece no Shopping | 1 | conteúdo comparativo e autoridade |
| Nomeado nos modelos, ausente do Shopping | 2 | feed, avaliações, inventário local |
| Presente nos dois, ausente do carrossel | 3 | distribuição e dados estruturados nas listagens do canal |
| Aparece com descrição errada | 3 | páginas de listagem do retalhista sem `Product` por item |

Mandar um cliente fazer as três de uma vez é o erro caro. As três custam
dinheiro diferente e rendem em prazos diferentes.

---

## O que ainda não sabemos

Escrito de propósito, para não ser preenchido com suposição:

- Com que frequência as superfícies divergem, e se diverge mais nalgumas
  categorias.
- Se a sobreposição entre o carrossel e o orgânico do Google Shopping é
  alta ou baixa **em Portugal**. Há medições de terceiros a apontar para
  alta (Search Engine Land, Mar 2026); não as confirmámos e não as usamos
  como premissa.
- De onde vem exactamente a classificação por estrelas que o carrossel
  mostra, quando o fabricante e o retalhista publicam números diferentes.
- Se a correcção dos dados estruturados numa página de listagem muda o que
  o carrossel devolve, e em quanto tempo.

Protocolo para responder à segunda: vinte perguntas, quatro categorias,
carrossel da aplicação contra o orgânico do Shopping (nunca os
patrocinados), comparação por referência de modelo, repetido em três
semanas.
