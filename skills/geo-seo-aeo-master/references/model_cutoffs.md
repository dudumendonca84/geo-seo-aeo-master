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

**A `confirmed` date on an `unknown` row means we looked and the vendor does
not publish one** (28 Sep 2026). That is worth recording: without it, every
run re-reads the same four pages to reach the same nothing, and nobody can
tell "not checked" from "checked, not published". The `note` says where we
looked. Three of the seven rows are in that state today, and one of them
(`grok-4.3`) is the sharp case: xAI publishes a cutoff for `grok-4.7` and
none for 4.3, and carrying 4.7's date across is exactly the inference rule 3
below forbids.

| Model | Cutoff | Confirmed | Source | Note |
|---|---|---|---|---|
| `gpt-5.6-luna` | 2026-02-16 | 2026-10-05 | developers.openai.com/api/docs/models/gpt-5.6-luna | The model page states it verbatim: "Feb 16, 2026 knowledge cutoff" |
| `claude-sonnet-5` | 2026-01 | 2026-09-25 | platform.claude.com/docs/en/about-claude/models/overview | Training data cutoff row of the model comparison table, read directly |
| `claude-sonnet-5-5` | 2026-06 | 2026-10-05 | platform.claude.com/docs/en/models/sonnet-5-5/overview | Reliable and training data cutoff both "Jun 2026" on the model page. Not a model the Tracker calls yet (buyer default is `claude-sonnet-5`): a snapshot novo é um corpus novo |
| `gpt-6.1-sol` | 2026-04-30 | 2026-09-30 | developers.openai.com/api/docs/models/gpt-6.1-sol | Model page states "April 30, 2026" directly. Not a model the Tracker calls yet (buyer default is `gpt-5.6-sol`): a snapshot novo é um corpus novo |
| `gemini-3.5-flash` | 2025-01 | 2026-09-28 | storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf | **Inherited through Google's own chain of model cards, not published for this model.** The 3.5 Flash card says "For more information about the training dataset for Gemini 3.5 Flash, see the Gemini 3 Flash model card"; that card says "Gemini 3 Flash is based on Gemini 3 Pro"; the 3 Pro card states "The knowledge cutoff date for Gemini 3 Pro was January 2025." Neither the API docs nor the 3.5 Flash card state one directly. Re-read when Google publishes a 3.5 Flash card of its own. AI Overviews routing may not run the same snapshot |
| `grok-4.3` | unknown | 2026-10-05 | docs.x.ai/docs/models | Checked and NOT published. The page lists a cutoff for grok-4.7 only ("The knowledge cut-off date of Grok 4.7 is May 2026") and states none for 4.3. Do not carry 4.7's date across |
| `deepseek-v4-flash` | unknown | 2026-10-05 | api-docs.deepseek.com; huggingface.co/deepseek-ai/DeepSeek-V4-Flash | Checked and NOT published, in the API docs or the model card. ID retired 10 Sep 2026 and served by V4.1-Flash (`deepseek-flash`, see next row). The card gives corpus SIZE ("more than 32T tokens") and no date |
| `deepseek-flash` | unknown | 2026-10-05 | api-docs.deepseek.com/quick_start/pricing | DeepSeek-V4.1-Flash, the ID the Tracker now calls (models.md mapping, 14 Sep 2026). No cutoff on the pricing or models page. A snapshot novo é um corpus novo: do not carry the V4-Flash row across |
| `sonar-pro` | n/a | 2026-09-18 | search_modes.md | Perplexity is augmented-only: it searches on every answer, so a training cutoff does not describe what a buyer meets |
| `mistral-large-latest` | unknown | 2026-10-05 | docs.mistral.ai/getting-started/models/models_overview/ | Checked and NOT published. The overview lists models and versions with no cutoff column |

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
