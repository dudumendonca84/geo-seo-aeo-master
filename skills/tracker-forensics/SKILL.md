---
name: tracker-forensics
description: Análise forense dos dados do Visibility Tracker da destaque.ai — citações por motor, tipos de fonte, directórios, superfícies de sessão real, tráfego atribuído a IA. Usar quando alguém pedir para procurar padrões, correlações ou "coisas bizarras" nos dados de auditoria; quando quiser saber que tipo de fonte cada motor cita; quando for preciso decidir se um número aguenta ser publicado ou posto numa proposta; ou antes de transformar uma consulta pontual numa página recorrente do produto. Contém o mapa das tabelas, a taxonomia de fontes, consultas prontas, e as armadilhas que já produziram conclusões falsas.
---

# tracker-forensics

Método para tirar conclusões defensáveis da base de dados do Visibility
Tracker. Não é uma persona; é a disciplina que separa um padrão real de um
artefacto de medição — e a lista, com nomes e datas, dos artefactos em que
já caímos.

**Princípio único, do qual tudo o resto decorre:** um número que vai para
uma proposta é uma promessa. Antes de o escrever, tem de sobreviver às
quatro perguntas da secção *O crivo*. A maior parte não sobrevive, e é
melhor descobri-lo aqui do que numa reunião.

## Onde estão os dados

Supabase `finzjovasqhxtkntbods`, esquema `tracker`. Tudo filtrado por
`client_id`.

| O que | Tabela | Notas |
|---|---|---|
| Respostas dos motores | `audit_responses` | uma linha por (prompt × motor × modo). `raw_citations` é `jsonb`: lista de `{url, title, domain}` |
| A auditoria | `weekly_audits` | `client_id`, `week_start`, `status`. Liga-se por `weekly_audit_id` |
| Perguntas | `prompts` | `active`, `prompt_text` |
| Concorrentes | `competitors` | `bucket` — `peer` vs `adjacent_*`, decidido pela Routine |
| Sessão real (montras) | `ui_observations` | claude.ai, meta.ai, ChatGPT app, Rufus. Uma linha por item; sem item, linha só com a resposta |
| Fontes da sessão real | `ui_observation_sources` | `scope='answer'`. **Convenção: citadas têm `source_name` (título); apenas lidas têm-no a nulo** |
| Pesquisa Google | `gsc_daily`, `gsc_pages`, `gsc_queries` | cliques da PESQUISA, nunca de IA |
| Analytics | `ga4_daily`, `ga4_ai_daily` | `ga4_ai_daily.source` já classificado |

Extrair citações é sempre esta forma:

```sql
select r.engine,
       lower(regexp_replace(
         coalesce(c->>'domain', split_part(split_part(c->>'url','//',2),'/',1)),
         '^www\.', '')) as dom,
       c->>'url' as url
from tracker.audit_responses r
join tracker.weekly_audits a on a.id = r.weekly_audit_id
join tracker.clients cl on cl.id = a.client_id
cross join lateral jsonb_array_elements(coalesce(r.raw_citations,'[]'::jsonb)) c
where cl.name = '<cliente>'
```

## O crivo

Quatro perguntas. Um número que falhe uma delas não sai daqui.

**1. O denominador mexeu-se?** É a armadilha número um, e apanhou-nos a
25 Ago 2026: as citações próprias da destaque.ai passaram de 2 para 153 em
oito semanas e parecia crescimento. Não era — foram acrescentados motores e
prompts à auditoria pelo caminho. **Contagens absolutas nunca se comparam
entre semanas.** Usa-se quota: citações da marca a dividir pelas citações
todas daquela semana e daquele motor.

**2. Estou a comparar coisas que se tocam?** O GSC conta cliques da
pesquisa do Google. Uma citação no ChatGPT não passa por lá. Cruzar
"citações" com "cliques GSC" é comparar duas populações disjuntas e chamar
correlação ao resultado.

**3. Quantas linhas sustentam isto?** Um padrão com n<30 é uma anedota. E
verificar sempre em quantos CLIENTES e em quantas SEMANAS aparece: um
padrão que só existe num cliente é uma característica desse cliente.

**4. Nulo quer dizer o quê?** Em quase todas as colunas booleanas nossas,
nulo significa *não medido* e é indistinguível de *não havia*. As 221
linhas do carrossel anteriores a 25 Ago têm `sponsored` nulo — não servem
de linha de base para medir o arranque dos anúncios. Quando o extractor
OLHA para uma coisa, tem de gravar `false`, não deixar nulo.

## Taxonomia de fontes

A classificação canónica. Chaves em inglês para código; **o que o cliente
lê é a coluna da direita, e nunca a chave** — "UGC" é jargão e não aparece
em material client-facing.

| Chave | O que é | Client-facing (PT) |
|---|---|---|
| `video` | YouTube, Vimeo, TikTok | Vídeo |
| `forum_ugc` | Reddit, Quora, Stack Exchange, fóruns | Fóruns e comunidades |
| `social` | LinkedIn, X, Facebook, Instagram | Redes sociais |
| `encyclopedia` | Wikipedia, Wikidata | Enciclopédias |
| `reviews` | Trustpilot, G2, Capterra, Doctoralia (avaliação) | Sites de avaliação |
| `directory` | listas de estabelecimentos, marcação, redes de seguradora | Directórios |
| `media` | imprensa nacional e internacional | Imprensa |
| `gov_edu` | `.gov.pt`, SNS, ERS, universidades | Fontes oficiais |
| `retail` | Amazon, Worten, Fnac | Retalho |
| `brand_owned` | site do próprio ou de concorrente | Sites de marca |
| `engine_self` | `google.com`, `vertexaisearch` | (não é fonte — excluir) |

**`engine_self` é obrigatório.** O `google.com` aparece com 597 citações no
nosso corpus de saúde, todas da família Google: é o motor a citar-se a si
próprio. Contado como `brand_owned` inflaciona a categoria maior com uma
coisa que não é fonte nenhuma.

### Subtipos de directório

Descobertos a 25 Ago 2026 e úteis porque cada motor prefere um:

`booking` (Doctoralia) · `listing` (listas por cidade) · `waiting_times`
(tempodeespera.pt) · `insurer_network` (rede da seguradora) ·
`content_portal` · `vertical_community` (demaeparamae.pt).

## O que já foi medido — e vale como ponto de partida

Corpus de 25 Ago 2026: 44.288 citações, 8 motores; 19.989 num universo de
três clientes de saúde em Portugal. Confirmar antes de reutilizar; os
motores mudam.

- **Vídeo é território da família Google.** AI Overviews 7,2% das citações,
  AI Mode 5,1%, Gemini 4,7% — e **zero absoluto** no ChatGPT e no Claude,
  em 5.346 citações somadas.
- **ChatGPT e Claude citam sites de marca em 95%.** Os outros ficam nos
  84-89%. São motores de marca, não de terceiros.
- **O Copilot é o motor dos directórios.** Metade das citações de listas de
  estabelecimentos são dele. Quase ninguém o mede, e por isso não está
  reportado em lado nenhum.
- **A lista ganha à ficha.** No Doctoralia, `/clinicas` (a lista) tem 162
  citações; a ficha de um médico tem 9. A acção não é "cria ficha", é
  "aparece bem na página de categoria".
- **O Reddit em português vale 2,3% no Perplexity**, contra os ~47% dos
  estudos americanos. A categoria "comunidade" é 96% Reddit; os fóruns
  portugueses generalistas somam cinco citações em 44 mil. Comunidade
  vertical (maternidade) é a excepção: 189 citações.

## Armadilhas conhecidas

**Redireccionamentos de fundamentação.** O Gemini grava
`grounding-api-redirect` em vez do destino. São 360 citações em que o
caminho real se perde — sabemos o domínio, não a página. Qualquer análise
ao nível da PÁGINA tem de excluir ou resolver estes primeiro, senão
sub-representa o Gemini exactamente onde a análise interessa.

**Tráfego de IA é um piso, nunca o total.** Quem chega sem origem (app de
secretaria, apps de telemóvel, link copiado) conta como directo. As AI
Overviews chegam como `google / organic` e são invisíveis. Escrever sempre
"tráfego de IA identificado", nunca "tráfego que a IA traz".

**A API não é a aplicação.** A diferença entre as duas vias é real e está
medida na comparação pública (7 fontes contra 16, 24% de marcas
coincidentes). O que NÃO se cita mais é o nosso "a API do Claude não
pesquisa em 49% das respostas": a 25 Ago 2026 percebeu-se que essas linhas
não vinham da API — vinham da Routine, que em quatro semanas de dez não
gravou as fontes que tinha encontrado. Errado no valor e no sujeito.
Corrigido na origem pela migração 0079 do Tracker, que recusa uma resposta
augmented escrita à mão sem fontes e sem explicação. **Lição para o crivo:
antes de citar um número sobre o comportamento de um motor, confirmar QUEM
escreveu a linha** — a latência e os tokens dizem-no: a API preenche-os
sempre, quem escreve à mão deixa-os a zero. Nunca misturar
`audit_responses` (API) com `ui_observations` (aplicação) no mesmo total —
são vias diferentes, e a diferença entre elas é que é o achado.

**Citadas contra lidas.** Em `ui_observation_sources`, a única marca que as
distingue é o `source_name` estar preenchido. Não há coluna booleana; quem
escrever uma consulta sem saber isto conta tudo como citado.

## Camada preditiva

`predictions.md` é onde a análise deixa de descrever o passado e arrisca
sobre o futuro. É a parte que faz o sistema aprender, e a razão é simples:
uma descrição do passado não pode estar errada, e por isso também não
ensina nada. Uma previsão datada pode — e quando falha, obriga a mudar o
modelo.

O que faz isto funcionar não é o algoritmo. É o ciclo: **prever, datar,
pontuar, corrigir**. Ao fim de um trimestre o que fica não é uma opinião
sobre os motores; é uma taxa de acerto verificável, que ninguém no mercado
português tem.

Regra dura, para não confundirmos engenho com resultado: **toda a previsão
é comparada com a linha de base ingénua — "a próxima semana é igual a
esta"** — e um método só entra em produção depois de a bater durante
quatro semanas seguidas. A maior parte das ideias engenhosas perde para
ela.

E uma honestidade sobre o que não se faz: com oito a dez semanas de série
por cliente, treinar um modelo é decorar ruído e chamar-lhe inteligência.
Os métodos são deliberadamente simples até a série os merecer.

A hipótese mais valiosa por testar, e verificável já com os dados que
temos: **um motor antecipa outro?** Se uma mudança na família Google
aparece no Perplexity duas semanas depois, isso é um alarme com duas
semanas de vantagem — e é a diferença entre explicar depois e antecipar.

## Como se escreve o resultado

Registo Economist. Números com denominador e data. Sem emoji, sem
adjectivos a fazer o trabalho dos números. E, obrigatoriamente, a frase que
diz o que o número **não** prova — se não conseguires escrevê-la, ainda não
percebeste o número.

Achado que sobreviva ao crivo e se repita em duas semanas entra em
`references/source_intelligence.md` (escrito pela Routine do cérebro).
Achado de uma semana fica lá como observação datada, nunca como playbook.
