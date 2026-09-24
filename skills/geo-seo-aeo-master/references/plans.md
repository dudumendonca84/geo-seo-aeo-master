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
queries a month on its own. The plan is being raised to match; until it is,
the ceiling and not this table is what limits how many clients can hold the
surface.

| plan | audience | prompt_limit | personas | grok | repeat_runs | cadence | inception | copilot | price_eur |
|---|---|---|---|---|---|---|---|---|---|
| starter | brand | 25 | no | no | 1 | weekly | no | no | |
| lite | brand | 25 | no | no | 1 | weekly | no | no | 149 |
| pro | brand | 50 | no | no | 1 | weekly | yes | yes | 299 |
| business | brand | 100 | yes | yes | 2 | weekly | yes | yes | 599 |
| enterprise | brand | 200 | yes | yes | 10 | weekly | yes | yes | |
| agency-starter | agency | 50 | no | no | 1 | weekly | yes | yes | 1190 |
| growth | agency | 100 | no | yes | 1 | weekly | yes | yes | 2490 |
| agency | agency | 100 | no | yes | 1 | weekly | yes | yes | 4490 |

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

**There is no CHECK constraint on `clients.plan`, deliberately.** A list of
valid values in the SQL and another in this file is the same rule written
twice, and the Tracker's CLAUDE.md has a scar from exactly that. This table is
the list; the write validates against it.
