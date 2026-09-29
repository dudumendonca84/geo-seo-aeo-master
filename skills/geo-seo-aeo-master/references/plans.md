# Plans: what each tier of the Tracker actually gets

**Status:** entitlements, and a price column that is **empty on purpose**.

Prices live here from 24 Sep 2026 (founder, asked whether the public site
should carry them: *"preços sim"*), and the column ships blank because a
number in euros that nobody wrote is not a number this house invents. Fill a
cell and the public pricing page shows it within the hour, with no deploy and
no migration. Leave it blank and that tier reads "sob consulta", which is the
truth.

What used to block this was the unit cost, and most of it is now measured. The
Tracker's own records give **0.094 to 0.097 USD per question** across three
clients in the week of 7 Sep, with the per-engine split measured again on 12
Sep (chatgpt 48% of the bill, grok 20%, gemini 14%). The surfaces bill per
query at DataForSEO and SerpApi, in cents. What is still not measured is the
SerpApi monthly ceiling against a heavy month, and that bounds the volume a
tier can promise, not the price it can charge.

This file is the one place where a tier's entitlements live. The Tracker
reads it at runtime and writes the columns of `tracker.clients` from it; the
code holds no copy of the numbers. Changing what a tier gets is editing the
table below, not a deploy.

## 1. Entitlements per plan

One row per plan. `audience` says who buys it. `prompt_limit` is the number of
active questions the client may hold; `personas` is whether the persona frame
runs in turn 1; `grok` is whether that engine runs at all; `repeat_runs` is how
many times the priority questions are asked in the same week; `cadence` is how
often the audit runs; `inception` is whether the client gets the Inception
section, where the brand declares what it wants AI answers to say (value
propositions and per-question targets) and the product measures whether it
happened.

`inception` is the first entitlement here that is not about the size of the
measurement: it is a distinct piece of the product, sold from `pro` up
(founder, 18 Sep 2026: *"it can change a company"*, *"premium feature, but we
build it now"*). The Tracker writes it into the client's `modules` column, and
the operator switch in the backoffice stays for the exceptions.

`price_eur` is what the public pricing page shows, per month, excluding VAT.
An empty cell is not a missing value: it is "sob consulta" on the page, and
that is a legitimate state for a tier that is sold by conversation. Write the
number alone (`390`), never a currency sign or a range: the page formats it,
and the page is the only place that knows which language it is rendering in.

`public` says whether the public pricing page lists the tier. It was a
`.filter((p) => p.plano !== "starter")` inside the page until 27 Sep 2026,
which is a commercial rule written in TypeScript: the `starter` stopped
being sold by a business decision, not by a property of the code. Hiding or
showing a tier is now editing this cell. An absent column reads `yes`, and
the direction of that default is deliberate: a table that loses the column
shows everything, whereas the safer-looking default would empty the pricing
page the day this file is edited carelessly.

`trial` says whether the tier's card on the public page carries a free
trial label. It is on for the three brand tiers that have a price, and off
for the Enterprise and the three agency tiers: somebody who tries the
product on their own is a brand, and an agency negotiates.

**A free trial was a tier here for a few hours on 27 Sep 2026, and it is
not any more.** The founder had asked for one (*"cria um plan chamado Free
Trial"*), got a `free-trial` row that only an operator could apply, and
refused it twice: *"o 2 não pode ser assim, tem que ser direto"*, then
*"só coloca uma label free trial"*. So the trial stopped being a tier and
became a promise on the tiers that already exist. Whoever clicks still
goes through Stripe on the usual path; the label changes the offer, not
the purchase. A tier nobody sells and nobody applies is the `starter`
scar, described three paragraphs down, so the row went.

**The label promises something the product does not enforce, and that is
a deliberate, named cost.** There is no clock, no close and no warning:
the founder chose no automatic end on the same day, so whoever starts a
trial keeps running until a person decides. That is why the label carries
no number of days. Writing "14 days" with nothing counting them would be
the dishonest version; closing a trial is a human act, done by applying a
paid plan.

An absent `trial` column reads `no`, the opposite of `public`, and the
direction is the `inception` argument: promising a trial by accident is
worse than not promising one.

`copilot` is the second engine a plan switches, next to `grok`, and it
exists because that surface is bought per query. Microsoft Copilot runs only
through SerpApi, whose plan has a hard monthly ceiling; Grok runs on an API
we pay by the token. Selling Copilot on the cheapest tier spends a scarce
ceiling on the client who pays least, so `lite` does without it (founder, 24
Sep 2026: *"colocamos a partir do segundo plano"*, then *"agências têm que
ter, mas se facturamos, vamos pagar mais"*).

The arithmetic that produced that decision, so nobody re-derives it: measured
against August, the surface costs about **6.7 SerpApi queries per monitored
question per month** (896 queries across three clients holding 134 questions).
An agency multiplies that by its brands, so one Growth account is ~8 000
queries a month on its own. **The plan is raised when a client on one of
these tiers pays, and not before** (founder, 24 Sep 2026). Until then the
ceiling and not this table is what limits how many clients can hold the
surface, and that is a deliberate state rather than an open action: buying
headroom for a tier nobody has bought yet is spending against a sale that
has not happened.

| plan | audience | prompt_limit | personas | grok | repeat_runs | cadence | inception | copilot | price_eur | public | trial | agent |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| starter | brand | 25 | no | no | 1 | weekly | no | no | | no | no | no |
| lite | brand | 50 | no | no | 1 | weekly | no | no | 149 | yes | yes | no |
| pro | brand | 100 | yes | no | 1 | weekly | yes | no | 299 | yes | yes | no |
| business | brand | 200 | yes | yes | 2 | weekly | yes | yes | 599 | yes | yes | yes |
| enterprise | brand | 400 | yes | yes | 10 | weekly | yes | yes | | yes | no | yes |
| agency-starter | agency | 50 | no | no | 1 | weekly | yes | yes | 1190 | yes | no | yes |
| growth | agency | 100 | no | yes | 1 | weekly | yes | yes | 2490 | yes | no | yes |
| agency | agency | 100 | no | yes | 1 | weekly | yes | yes | 4490 | yes | no | yes |

**E o Agente sai do `pro` no mesmo dia** (*"e tiramos o agent também do
pro"*). Coluna `agent`, escrita no `modules` do cliente como o
`inception`, e pela mesma razão: é o segundo recurso que se esconde
porque se VENDE, e não porque não sirva àquela marca.

Fica do `business` para cima e nas três linhas de agência. O degrau
deixa de ser só volume, que é o argumento mais fácil de comparar com uma
ferramenta de 149 euros; perguntar em português aos próprios números não
tem comparação no mercado.

A coluna entra NO FIM da tabela e não ao lado do `inception`. As
opcionais são posicionais no parser (`COLUNAS_OPCIONAIS` em
`lib/skill/planos.ts`), e metê-la pelo meio deslocava o `price_eur`, o
`public` e o `trial` em silêncio.

**E o `pro` NÃO leva todos os motores (29 Set 2026).** Horas depois de
pedir *"o pro para 100 por 299 com tudo"*, o founder corrigiu-se:
*"vamos colocar menos motores no pro, pra justificar depois o aumento
pro business"*. O `grok` e o `copilot` voltam a `no`.

São exactamente as duas colunas que um plano liga e desliga, e o efeito
é medível em vez de retórico. Contadas as linhas por pergunta nas três
semanas até 29 Set, são **15** com tudo ligado (os quatro modelos com e
sem pesquisa, o DeepSeek e o Mistral pelo treino, a Perplexity, o
Copilot, as duas superfícies do Google e a Meta AI). Sem o Grok, que são
duas, e sem o Copilot, que é uma, o `pro` mede **12**.

O degrau para o `business` passa a ter três razões e não uma: o dobro
das perguntas, a segunda medição semanal das prioritárias, e os dois
motores. O que NÃO muda são as personas nem o Inception, que ficam no
`pro`: cortar a medição é um degrau, cortar o que faz o produto valer a
pena é outra coisa.

### A escada dobrou a 29 Set 2026, e o `pro` passou a ter tudo

Founder, ao olhar para esta tabela ao lado dos preços dos concorrentes:
*"vamos mudar o lite para 50 prompts, o pro para 100 por 299 com tudo"*.

A razão está medida e está em `destaque-ai-tracker/docs/precos-concorrentes-2026-09-02.md`.
A 100 prompts o mercado pede **149 EUR** (Semantika, portuguesa),
**$189** (Otterly) e **$245** (Peec, a 150). O `business` pedia **599 EUR**
pelos mesmos 100, ou seja **quatro vezes** o concorrente direto em
Portugal, e o `pro` dava 50 sem personas e sem Grok. A escada estava
desenhada contra um mercado que ainda não existia quando foi escrita.

**Ele pediu duas linhas e foram quatro, de propósito.** Mudar só o `lite`
e o `pro` deixava o `business` a vender 100 prompts por 599 ao lado de um
`pro` com os MESMOS 100 e tudo ligado por 299: um degrau que ninguém
compra, descoberto por um cliente à frente de uma proposta. Cada tecto
dobrou (50, 100, 200, 400) e a escada volta a ter sentido em cada degrau.

O que separa o `pro` do `business` deixou de ser o que está ligado e passa
a ser **quanto** se mede: o dobro das perguntas e as repetições semanais
das prioritárias, que é o que distingue variação normal de mudança real.

**O custo aguenta.** Medido em três clientes, 0,094 a 0,097 USD por
pergunta: 100 perguntas são cerca de **41 USD/mês** contra 299 EUR, e as
200 do `business` com duas repetições nas prioritárias ficam abaixo de
120 USD contra 599 EUR. O que NÃO está medido continua a ser o tecto
mensal da SerpApi, e é ele que limita o volume que um tier pode prometer.

**As três linhas de agência não se mexeram**, e ficam por rever: com o
`pro` a dar 100 prompts por 299, o `agency-starter` a dar 50 por 1190
precisa de outro argumento que não seja o volume. É uma negociação
separada e não se resolve de lado.

**Quem já está num plano não muda sozinho.** A tabela decide o que a
aplicação de um plano ESCREVE nas colunas do cliente; um cliente já
aplicado fica como está até alguém reaplicar. A página pública de preços,
essa, mostra os números novos dentro de uma hora.

**`starter` is not sold and is kept only so a client already on it keeps its
entitlements.** It exists because the agency tier in the 2026 catalogue is
also called Starter, and one name meaning two things in a table the code
indexes by name is how a client gets another tier's ceilings written to its
columns. The agency row is `agency-starter` here; the catalogue and the
public page still call it Starter, because a display name is not a key.

**`enterprise` has no price and no fixed ceiling**, and that is the honest
state rather than a gap: the catalogue sells it as *à medida*, its questions
come from a feed, and the 200 above is the floor the product enforces until
a discovery says otherwise. The page shows "sob consulta".

**What is in the catalogue and NOT in this table**, on purpose: how many
competitors a tier follows, how many markets, how many users, which
integrations, which reports, and the manual-run allowance. Those are sold and
described on the public page; they are not entitlements the Tracker writes
into `tracker.clients`, and putting them here would be a second place to get
them wrong. This table holds only what the code applies.

**The add-ons are deviations from this table, not rows in it.** A Lite that
bought the persona add-on has `personas` on and the plan still says `lite`:
the plan is the base, the operator writes the deviation, and the client's
columns are what the audit reads. Applying a plan a second time resets the
columns to the base, which is the point: a renegotiation is an apply.

**`no` on `grok` means the engine key goes into `engines_disabled`.** It does
not run, so it costs nothing and never enters the metrics, which is the
difference between `engines_disabled` and `engines_hidden`.

## 2. Who applies it

| Thing | Who | How |
|---|---|---|
| The table above | **Tracker code** | `src/lib/skill/planos.ts` parses it at runtime, cache 1 h, with a fallback snapshot of this file. `src/lib/plans/aplicar.ts` turns a row into the columns to write. |
| Which plan a client is on | Operator | `tracker.clients.plan`, written by `POST /api/admin/clients/[id]/plano`, which also writes the columns from the row. |
| Deviations (add-ons) | Operator | The client's own columns, edited after the plan is applied. |
| Prices | Nobody yet | Not in this repo and not in the product until the cost per query is measured. |

**Parse contract.** The Tracker reads the table under `## 1. Entitlements per
plan` by its header row (`| plan | audience | prompt_limit | personas | grok |
repeat_runs | cadence |`), at the start of a line. `yes`/`no` for the two
booleans, integers for the two numbers, and `weekly` / `biweekly` / `monthly`
for the cadence. A plan name that is not in this table is refused by the
write, which is what keeps a typo from creating a tier nobody sells.

The five columns after `cadence` are optional and read **in order**, as a
prefix: `inception`, `copilot`, `price_eur`, `public`, `trial`. A table may
carry none of them, or the first two, or all five, and it reads either way,
which is what lets this file and the Tracker be deployed in either order.
What it may not do is skip one: a column out of place is read as the next
one. An absent `inception`, `copilot` or `trial` reads `no` (promising by
accident is worse than not promising); an absent `price_eur` reads "sob
consulta"; an absent `public` reads `yes`.

**There is no CHECK constraint on `clients.plan`, deliberately.** A list of
valid values in the SQL and another in this file is the same rule written
twice, and the Tracker's CLAUDE.md has a scar from exactly that. This table is
the list; the write validates against it.
