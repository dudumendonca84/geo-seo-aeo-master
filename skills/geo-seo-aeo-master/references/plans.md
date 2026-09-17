# Plans: what each tier of the Tracker actually gets

**Status:** entitlements only. Prices are not here and are not published until
the three checks in the Tracker's task list are done (the per-query cost of
DataForSEO and SerpApi has never been measured, and a number in euros that
nobody measured is the thing this house does not write).

This file is the one place where a tier's entitlements live. The Tracker
reads it at runtime and writes the columns of `tracker.clients` from it; the
code holds no copy of the numbers. Changing what a tier gets is editing the
table below, not a deploy.

## 1. Entitlements per plan

One row per plan. `audience` says who buys it. `prompt_limit` is the number of
active questions the client may hold; `personas` is whether the persona frame
runs in turn 1; `grok` is whether that engine runs at all; `repeat_runs` is how
many times the priority questions are asked in the same week; `cadence` is how
often the audit runs.

| plan | audience | prompt_limit | personas | grok | repeat_runs | cadence |
|---|---|---|---|---|---|---|
| starter | brand | 25 | no | no | 1 | weekly |
| lite | brand | 25 | no | no | 1 | weekly |
| pro | brand | 50 | no | no | 1 | weekly |
| business | brand | 100 | yes | yes | 2 | weekly |
| enterprise | brand | 100 | yes | yes | 2 | weekly |
| growth | agency | 50 | no | yes | 1 | weekly |
| agency | agency | 100 | no | yes | 1 | weekly |

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
