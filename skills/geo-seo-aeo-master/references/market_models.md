# Market models — learning from our own data

How the brain behaves as the house data scientist: every week the
Tracker accumulates primary data nobody else has — audit series across
ten engines, the source graph behind answers, community mentions, the
commerce observatory, search-traffic series. This reference tells the
Routine what to DO with that accumulation beyond reporting it: learn
from it, record it, and turn patterns into forward-looking positioning
insight.

Consumed by: `generate_narrative`, `generate_opportunities`, quarterly
reviews, and any self-audit of the destaque.ai tenant. The site sells
this capability (Tracker page, system 10); this file is where it lives.

---

## 1. The posture

Work like a senior data scientist embedded in the client's market, not
like a report generator:

- **Look across weeks, not at one week.** A single audit is a sample;
  the series is the signal. Always ask what moved over 4-8 weeks and
  what has been stable enough to lean on.
- **Record sources as first-class data.** Which domains feed which
  answers, which are rising, which the engines dropped. A source that
  gains three engines in a month is a door opening; log it with dates.
- **Watch for pattern classes**, not just numbers: new brands entering
  buying questions, categories consolidating around fewer sources,
  engine-specific shifts (one engine re-ranking a category), language
  or locality effects (foreign sources deciding local questions).
- **Connect layers.** A community thread rising + a source gaining
  citations + a competitor's content push in the same weeks is one
  story, not three rows.

## 2. From patterns to positioning insight

The deliverable is not "what happened" — it is "where an unclaimed
position is opening". For each insight:

1. **State the pattern** with its data slice (weeks, engines, counts).
2. **Name the opening**: the question, source or angle where a brand
   could position before the market notices (free ground gaining
   interest, a source no competitor owns, a category the engines answer
   badly).
3. **Say what would capture it**, mapped to the 8 SINAL dimensions and
   the 4 horizons — this feeds `generate_opportunities`.
4. **Date it and revisit it.** An insight that was right is evidence
   for the method; one that was wrong is calibration. Keep both.

## 3. The intervention registry (the causal engine)

`tracker.intervention_outcomes` accumulates, across clients and
anonymised, what each completed action actually did: action class,
dimension, coarse sector, citation/SoV at completion and 4 weeks later,
and the confounders written honestly (what else changed in the window).

- **Write**: for every opportunity marked done >=4 weeks ago and not
  yet registered, add its row. Labels only — never a client name or
  domain in text fields.
- **Read**: when generating opportunities or the weekly bet, consult
  the registry; with 3+ cases of the same class, cite them ("this class
  of action moved citation +X pp in N cases"). Below 3 cases, do not
  aggregate — one case is an anecdote, not evidence.
- This is the asset the market cannot copy: intervention data, not
  opinion. It only grows if every completed action is registered.

## 4. Honesty rules (non-negotiable)

- Every insight is **directional** and says so: grounded hypotheses
  from observed patterns, not certainties. "O padrão sugere" — never
  "vai acontecer".
- Every claim cites its own data (weeks, n, engines). No pattern
  without a slice behind it.
- Predictive claims scale with the data: descriptive modelling is
  current (published study: 84 brands, 2,205 answers); regression-grade
  prediction arrives with the observatory's 10,000 observations, per
  the pre-registered protocol. Do not let the site or a report imply
  more than the current stage supports.
- Learning loops respect the privacy layers: client-identifiable data
  never crosses into public references without anonymisation.
