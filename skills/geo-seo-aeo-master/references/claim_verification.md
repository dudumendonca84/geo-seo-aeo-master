# Claim verification — comparing what the AI says against the brand's truth

Reference for the Tracker task `verify_claims` (Clipping IA, fidelity
layer). Consumed at runtime.

**Why this exists.** Visibility answers "does the brand appear?". Fidelity
answers the question an executive actually loses sleep over: *is the AI
describing us correctly?* A model that recommends the brand with the wrong
price, an invented feature, or a product the company discontinued is
selling the brand badly to every buyer who asks.

---

## 1. The source of truth

Two inputs, in order of authority:

1. **`brand_facts`** — statements the client entered and owns: reference
   prices, positioning claims, operating facts (locations, hours, markets
   served), named credentials.
2. **The product catalogue** (Merchant Center, when connected) — titles,
   availability, and approval state of real products.

**The hard rule: no fact, no finding.** If the AI states something the
truth file does not cover, that is *not* a divergence. It is an unverified
claim, and the honest output is silence plus, at most, a note that the
truth file could be extended. Never assert the AI is wrong because the
brand never said what is right.

---

## 2. What counts as a material divergence

Report only what would change a buyer's decision or misrepresent the
company.

| Severity | Report when | Example |
|---|---|---|
| `high` | Wrong price, invented capability, product presented as available when discontinued, wrong operating fact (closed, not serving a market), attribution of a competitor's exclusive claim | "custa cerca de 49 €/mês" when the truth file says 89 € |
| `medium` | Materially outdated but not misleading, imprecise scope ("only for enterprise" when the brand serves SMB too), wrong category placement | Described as an agency when the brand sells software |
| `low` | Cosmetic drift: outdated tagline, old brand name still used, minor rounding | Old company name alongside the current one |

### Not divergences

- **Wording differences.** "Fast setup" vs "setup in under a day" is a
  paraphrase, not an error, unless the truth file gives a number the AI
  contradicts.
- **Reasonable summarisation.** Omitting a feature is not a false claim.
- **Model hedging.** "I believe", "as of my knowledge", "check the site"
  is honest behaviour, not a finding.
- **Opinion.** "Probably not the best for beginners" is a judgement. Track
  it as sentiment in the weekly narrative, never as a fact check.
- **Anything sourced from the client's own outdated public page.** Then
  the finding is against the page, and the action is to fix the page —
  say so in the note.

---

## 3. Output contract

Per divergence: `fact_key` (the truth-file entry relied on), `claimed`
(what the model said, quoted tightly), `expected` (what the truth file
says), `severity`, `engine`, `response_id`, and an optional `note` naming
the likely cause and the fix.

Cause is what makes this actionable. The three that recur:

1. **Stale index** — the engine read an old page of the brand's. Fix: the
   page, then request re-crawl (Bing Webmaster / IndexNow are fastest).
2. **Third-party source wrong** — a directory, review site or article
   carries the wrong figure and the engine trusts it. Fix: correct at
   source, which is a PR action, not a technical one.
3. **Memory, not search** — the answer came from training with no live
   read. Fix: only entity and durable-authority work moves this, on the
   months horizon. Say so; do not promise a quick correction.

---

## 4. Tone in the client-facing output

Same register as everything else: numbers, no alarm. "O ChatGPT indicou
89 €/mês; o preço em vigor é 129 €/mês desde Março" — not "erro grave na
descrição da marca". One line of consequence, one line of action, the
horizon on which the fix lands. When the cause is the brand's own
outdated page, say that plainly; the client fixes it in an afternoon and
the correction propagates within weeks.
