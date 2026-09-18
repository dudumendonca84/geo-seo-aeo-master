# Training cutoffs: what each model knows without searching, and how to get in

Asked for by the founder on 18 Sep 2026: *"precisamos também ter uma espécie
de dicionário, mas não é bem [um dicionário], é informação sobre os cortes
dos modos treinos e como evoluir neles (sempre atualizado nas routines que
temos de GEO)"*.

`search_modes.md` explains **why** the audit measures `knowledge` and
`augmented` separately. This file holds the fact that makes the `knowledge`
half readable: **the date the model's training corpus closes**.

Without it, a brand reading "0% in training memory" has no way to tell two
opposite situations apart:

- the corpus closed **before the brand's proof existed**, in which case there
  is nothing to fix on that half this quarter, and the work belongs entirely
  to the `augmented` half; or
- the corpus closed **well after** it, in which case the model had the chance
  to learn the brand and did not, which is an entity and authority problem.

The first calls for patience and publishing; the second calls for Wikidata, a
Wikipedia article, tier-1 press and durable third-party sources. Telling a
client the wrong one wastes a quarter.

---

## 1. Tracker training cutoffs

**Read at runtime by `destaque-ai-tracker`** (`src/lib/skill/cortes.ts`). One
row per model the Tracker calls, matching `models.md § Tracker buyer
defaults`.

**A blank `cutoff` is a fact, not a gap to fill with a guess.** The house rule
against fabricated numbers applies here with force: a cutoff date is the kind
of claim a client repeats to their board. Where a vendor has not published
one, or where the published date has not been verified against a primary
source since the model shipped, the cell stays `unknown` and the product says
"por confirmar" rather than printing a date nobody checked.

`confirmed` is the date WE last verified the row against the vendor's own
documentation, not the date the vendor published. A row confirmed six months
ago on a model that shipped since is stale and should read `unknown` again.

| Model | Cutoff | Confirmed | Source | Note |
|---|---|---|---|---|
| `gpt-5.6-luna` | unknown | | | OpenAI model page; check the model card, not the blog post |
| `claude-sonnet-5` | unknown | | | Anthropic model overview; the "training data cutoff" row of the model comparison table |
| `gemini-3.5-flash` | unknown | | | Google AI model page; note that AI Overviews routing may not run the same snapshot |
| `grok-4.3` | unknown | | | xAI model card |
| `deepseek-v4-flash` | unknown | | | DeepSeek API docs |
| `sonar-pro` | n/a | 2026-09-18 | search_modes.md | Perplexity is augmented-only: it searches on every answer, so a training cutoff does not describe what a buyer meets |
| `mistral-large-latest` | unknown | | | Mistral model docs |

## 2. How the daily agent keeps this fresh

The daily agent already reads vendor primary docs (TIER 1). When a run finds
a cutoff published or changed for any model in the table above:

1. write the date in ISO (`YYYY-MM-DD`, or `YYYY-MM` when the vendor only
   gives a month);
2. put the run's date in `confirmed` and the exact page in `source`;
3. when a vendor ships a NEW model that `models.md § Tracker buyer defaults`
   starts calling, add its row with `unknown` rather than carrying the
   previous model's date across. A new snapshot is a new corpus.

Do **not** infer a cutoff from a model's behaviour ("it did not know X, so it
closed before X"). That is the inference this house refuses: a model can fail
to name a brand for a dozen reasons that are not the corpus date, and the
whole point of this file is to separate those.

## 3. How to evolve in the training half

The `augmented` half moves in days and is worked through
`gap_action_mapping.md` and `engine_playbooks.md`. The `knowledge` half moves
in months, and only through sources that a future crawl will treat as
durable. What earns a place in a corpus is not what earns a citation this
week:

| Works for training | Why |
|---|---|
| Wikidata item and, when the bar is met, a Wikipedia article | Structured, widely mirrored, and re-crawled by everyone |
| Tier-1 press with the brand named in the body | Licensed and syndicated; survives the site being redesigned |
| Original data the category quotes back | Other people's pages carry the brand's name into the corpus |
| Consistent naming and description across every profile | A brand spelled three ways is three weak entities instead of one |
| Documentation and reference pages that outlive campaigns | Crawled repeatedly over years, not once |

| Does not work for training | Why |
|---|---|
| llms.txt, robots.txt tuning, schema | They govern retrieval and citation, which is the other half |
| Publishing this week and measuring next week | The corpus closed before it; nothing will change until the next snapshot |
| Paid placement and ads | Not in the crawl |

**The honest sentence to a client whose cutoff predates their proof:** the
training half will not move this quarter, and that is not a failure of the
work. It is the reason the audit measures two halves instead of one.
