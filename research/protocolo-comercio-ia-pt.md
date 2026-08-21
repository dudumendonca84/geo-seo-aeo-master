# Protocolo — Como a IA recomenda produtos em Portugal

**Estudo observacional pré-registado.** Versão 1, 20 de Agosto de 2026.
Autor: Eduardo Mendonça, destaque.ai. Instrumento: Visibility Tracker,
Camada C (observação de interface).

> **Pré-registo.** Este documento é publicado **antes da recolha**. As
> perguntas, as categorias, as métricas e o plano de análise abaixo ficam
> fechados a partir desta data. Alterações posteriores entram numa secção
> de emendas, com data e justificação, nunca por substituição silenciosa.
> É esta a diferença entre um estudo e uma peça de marketing.

---

## 1. A pergunta

Quando um comprador em Portugal pergunta a um assistente de IA que
produto comprar, **o que decide a resposta?** E, sobretudo:

1. A resposta é **estável**? Repetir a mesma pergunta dá os mesmos
   produtos?
2. Que **fontes** sustentam a recomendação, e quão concentradas estão?
3. Que **lojas** são nomeadas, e com que rotação?
4. O comportamento muda por **categoria**?

Ninguém publicou isto para o mercado português. As observações
preliminares (20 Ago 2026, ver `references/commerce_playbooks.md`) sugerem
instabilidade alta, mas são uma tarde de trabalho: sugerem hipóteses, não
provam nada. Este protocolo existe para as testar como deve ser.

## 2. Hipóteses (fechadas antes da recolha)

- **H1 — Instabilidade.** A sobreposição de produtos entre duas corridas
  da mesma pergunta é baixa (Jaccard mediano < 0,5).
- **H2 — Estabilidade de marca.** A sobreposição ao nível da **marca** é
  materialmente maior do que ao nível da **referência exacta**.
- **H3 — Concentração de fontes.** Um número pequeno de domínios sustenta
  a maioria das recomendações de uma categoria (top 5 > 50% das citações).
- **H4 — Rotação de loja.** Para o mesmo produto e preço, a loja nomeada
  varia entre corridas.
- **H5 — Efeito de categoria.** A instabilidade difere entre categorias, e
  é menor onde há normas de referência fortes (electrónica com modelo
  nomeado) do que onde não há (têxtil, casa).

Hipóteses que **não** testamos, por não termos instrumento honesto para
isso: causalidade (o que fazer para entrar), e efeito de anúncios.

## 3. Desenho

**Mercado.** Portugal, português europeu, IP residencial português.

**Superfície principal.** App ChatGPT em sessão anónima (sem conta: sem
memória nem personalização — verificado que o carrossel aparece assim).

**Superfícies de comparação.** Os motores e superfícies já medidos pelo
Tracker (7 modelos por API + AI Overviews + AI Mode + Copilot), corridos
com as mesmas perguntas na mesma janela temporal.

**Categorias (10).** Escolhidas por combinarem volume de compra real em
Portugal e variedade de estrutura de mercado:

| # | Categoria | Porquê |
|---|---|---|
| 1 | Pequenos electrodomésticos | referência de modelo forte, preço baixo |
| 2 | Portáteis | referência forte, preço médio-alto |
| 3 | Áudio pessoal | marcas globais, muitas análises |
| 4 | Aspiração e limpeza | marcas mistas, muito comparativo |
| 5 | Café e cápsulas | ecossistemas fechados, marcas PT (Delta) |
| 6 | Telemóveis | categoria mais coberta editorialmente |
| 7 | Desporto e corrida | recomendação subjectiva |
| 8 | Puericultura | decisão de risco, muita comunidade |
| 9 | Casa e têxtil | referência de modelo fraca |
| 10 | Bricolage e jardim | retalho especializado PT |

**Perguntas.** 15 por categoria = **150 perguntas**, fixadas antes da
recolha em `research/perguntas-v1.txt`. Distribuição por intenção, igual
em todas as categorias:

- 5 genéricas ("melhor X")
- 4 com restrição de preço ("melhor X até N euros")
- 3 comparativas ("X ou Y")
- 2 de atributo ("X para Z")
- 1 local ("onde comprar X em Portugal")

**Corridas.** 5 por pergunta, em dias diferentes, dentro de uma janela de
4 semanas, com hora aleatorizada dentro de 09:00-21:00 e ordem das
perguntas aleatorizada em cada corrida.

**Volume total.** 150 × 5 = **750 observações** na superfície principal.

## 4. O que se regista, por observação

Já implementado em `tracker.ui_observations` e
`tracker.ui_observation_sources`:

| Campo | Nota |
|---|---|
| produto (título tal como aparece) | sem normalizar na origem |
| preço | tal como mostrado, intervalos incluídos |
| avaliação e número de votos | "4,6 (3,2 mil)" desdobrado |
| loja nomeada | separada do "+ outros" |
| formato | cartão · tabela · texto |
| seleccionável / pré-seleccionado | a segunda eliminatória |
| posição | ordem de apresentação |
| fontes do painel de detalhe | nome, domínio, sentimento, resumo, citação |
| captura de ecrã e HTML | prova, guardada por observação |

## 5. Plano de análise (fechado)

1. **Instabilidade.** Jaccard entre pares de corridas da mesma pergunta,
   ao nível da referência e ao nível da marca. Reporta-se a mediana e o
   intervalo interquartil, por categoria. (H1, H2, H5)
2. **Concentração de produto.** Curva de frequência: quantas referências
   distintas cobrem 80% das aparições de uma categoria.
3. **Mapa de fontes.** Frequência por domínio, com quota acumulada do top
   5 e do top 10, por categoria. (H3)
4. **Rotação de loja.** Para cada par (produto, preço) observado ≥ 3
   vezes, número de lojas distintas nomeadas. (H4)
5. **Divergência entre superfícies.** Sobreposição entre a app e cada
   superfície de comparação, com a mesma pergunta na mesma semana.
6. **Pré-selecção.** Proporção de cartões que vêm pré-marcados, e se
   correlaciona com posição, preço ou número de avaliações.

Nada de testes de significância decorativos: com este desenho, o que se
reporta são distribuições e intervalos, não valores-p.

## 6. Honestidade e limites (a publicar com os resultados)

- Um mercado, uma língua, quatro semanas. Não se extrapola para outros
  países nem para o futuro.
- Observação de interface: a OpenAI pode mudar a apresentação a meio, e se
  mudar, diz-se em que data e o que mudou.
- Sem acesso ao mecanismo interno. Este estudo descreve **o que aparece**,
  não explica **porquê** aparece. Qualquer frase causal nos resultados é
  um erro a corrigir.
- Conflito de interesses declarado: a destaque.ai vende serviços de
  visibilidade em IA. É por isso que o protocolo é público antes dos dados,
  o instrumento é descrito, e as capturas ficam disponíveis.

## 7. Ética e limites de recolha

- Sessão anónima, sem contornar autenticação nem limites técnicos.
- **Sem infra anti-detecção**: nada de stealth, IPs rotativos ou
  user-agents falsos. Se aparecer verificação humana, a recolha pára e
  regista-se a data.
- Cadência baixa e distribuída: ~35 perguntas por dia no pico, com pausas.
  É observação de um produto público, não extracção em massa.
- Só se guarda o que é mostrado publicamente. Nenhum dado pessoal.

## 8. Publicação

- Protocolo (este ficheiro): público desde o início, com histórico no git.
- Dados agregados e scripts de análise: públicos no fim.
- Resultados: página no site com metodologia à vista, mais preprint.
- Emendas ao protocolo: secção própria, datadas, nunca por substituição.

## 9. Estado

| Fase | Estado |
|---|---|
| Protocolo v1 | escrito, 20 Ago 2026 |
| Lista das 150 perguntas | fixada, 20 Ago 2026 (`research/perguntas-v1.txt`) |
| Instrumento (Camada C) | funcional; leitura do painel de fontes por ligar |
| Recolha | arranca a 25 Ago 2026 (Emenda 1) |

## Emendas

### Emenda 1 — 21 Ago 2026 (antes de qualquer recolha)

**Âmbito reduzido à superfície principal.** O estudo passa a medir apenas
a app do ChatGPT em sessão anónima — o que um comprador vê, exactamente
como vê. As "superfícies de comparação" da secção 3 (os motores por API)
saem do desenho.

**Razão, declarada sem verniz:** custo. A perna por API custaria dezenas
de euros semanais que o orçamento actual não comporta. As 150 perguntas
ficam preparadas no instrumento e a comparação multi-motor fica como
extensão futura, se e quando houver financiamento — o que, a acontecer,
será também declarado aqui.

**Consequência nas hipóteses:** H1-H4 mantêm-se integralmente. H5 (efeito
de categoria) mantém-se. A comparação entre superfícies fica limitada ao
que a app oferece por si: com/sem pesquisa e formatos de apresentação.

**Medição adicionada: patrocínio.** Os anúncios do ChatGPT arrancam na
EEA a 24 de Agosto de 2026 — o dia 1 da recolha. Cada item passa a
registar se traz marca de patrocínio visível e o texto exacto dessa
marca. Hipótese adicional, registada antes dos dados:

- **H6 — Patrocínio.** Se conteúdo patrocinado entrar nas superfícies de
  compras durante a janela, é identificável por rotulagem visível, e a
  sua entrada altera a composição dos produtos apresentados face à
  linha de base das corridas anteriores.

Se nenhum patrocínio aparecer na janela, isso é resultado, não falha:
"quatro semanas após o arranque europeu, as superfícies de compras
observadas não mostravam conteúdo patrocinado em Portugal" é uma frase
com valor próprio.

**Arranque da recolha:** 25 de Agosto de 2026.
