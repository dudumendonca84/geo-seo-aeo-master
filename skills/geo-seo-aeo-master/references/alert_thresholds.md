# Alert thresholds — what warrants surfacing

Reference for `geo-seo-aeo-master`. Used by the Tracker (`askWithSkill('generate_alerts', {…})`) to decide which week-over-week changes deserve an alert row in `tracker_alerts`, an email digest entry, or a banner on the dashboard.

The cost of getting this wrong is alert fatigue. Five "minor change" alerts a week and the client stops reading the email. The bar for an alert is **a change a senior practitioner would call out unprompted in a Monday meeting**.

Last refresh: 25 May 2026.

---

## 1. Severity bands

Three bands. The band drives the channel (banner vs email vs digest-only) and the visual prominence.

| Severity | Definition | Channel |
|---|---|---|
| `critical` | A change that, if unaddressed for two weeks, materially harms the client's GEO position. Demands action this week. | Banner + email immediately + digest |
| `notable` | A change worth knowing about and discussing on the next call. Not necessarily actionable this week. | Email + digest |
| `informational` | A movement that fits the pattern but doesn't itself demand action. Useful for trendlines. | Digest only |

Below `informational` is **noise** — do not create an alert.

## 2. Metric thresholds (per-prompt and aggregate)

All thresholds are **week-over-week** (WoW) unless stated otherwise. *pp = percentage points* (absolute); *rel = relative* (% of previous value).

### Citation rate (CR)

| Direction | Critical | Notable | Informational |
|---|---|---|---|
| Decrease | Δ ≤ −7 pp **or** ≤ −25% rel | Δ ≤ −4 pp **or** ≤ −15% rel | Δ ≤ −2 pp **or** ≤ −10% rel |
| Increase | Δ ≥ +7 pp **and** ≥ +25% rel | Δ ≥ +4 pp **and** ≥ +15% rel | Δ ≥ +2 pp **and** ≥ +10% rel |

Use the **stricter** of pp and rel for `critical` and `notable` (both conditions); the **looser** for `informational` (either). This avoids flagging a move from 1% to 1.4% as critical (large rel, trivial pp).

### Share of Voice (SoV)

| Direction | Critical | Notable | Informational |
|---|---|---|---|
| Decrease | Δ ≤ −5 pp | Δ ≤ −3 pp | Δ ≤ −1.5 pp |
| Increase | Δ ≥ +5 pp | Δ ≥ +3 pp | Δ ≥ +1.5 pp |

SoV moves are inherently more meaningful than CR moves — they reflect *relative* position. Lower thresholds.

### Average position (lower is better)

| Direction | Critical | Notable | Informational |
|---|---|---|---|
| Worsens | Δ ≥ +1.5 ranks | Δ ≥ +1.0 rank | Δ ≥ +0.5 rank |
| Improves | Δ ≤ −1.5 ranks | Δ ≤ −1.0 rank | Δ ≤ −0.5 rank |

### Sentiment

Sentiment is a categorical (positive/neutral/negative). Threshold is on the **share** of negative responses.

| Condition | Severity |
|---|---|
| Negative share rises by ≥ 10 pp WoW, or absolute negative share crosses 20% in a single week | `critical` |
| Negative share rises by ≥ 5 pp WoW | `notable` |
| Any change in sentiment mix not matching the above | `informational` only if also paired with a CR or SoV move |

A single negative response in 180 (1 prompt × 1 engine on a 30×6 audit) is **not** an alert. It is a log entry.

## 3. Event-based alerts (no threshold, always notable+ if true)

These fire on the boolean event itself, not on a metric delta.

| Event | Default severity |
|---|---|
| **New competitor enters the top-5 SoV** for the first time in 8 weeks | `notable` |
| **New competitor enters the top-3 SoV** for the first time ever | `critical` |
| **Client drops out of the top-5 SoV** when it was in the top-5 last week | `critical` |
| **Client drops out of the top-3 SoV** | `critical` |
| **Client falls below SoV ≥ 5% on a prompt where it was ≥ 15% last week** | `critical` |
| **A prompt's response set becomes degenerate** (the same 1–2 brands in 100% of responses) | `notable` — propose prompt rotation |
| **An engine returns refusals or rate-limit errors on ≥ 25% of prompts** | `notable` for ops, not for the client view |
| **A new peer-classified brand appears for the first time** (after `competitor_filtering` clears it) | `notable` |
| **An ambiguous mention spike** (≥ 10% of total mentions flagged ambiguous) | `informational` for the client; surface to ops |
| **`models.md` indicates a default model changed** since the last audit | `informational` — annotate that this week's comparison is not fully comparable |

## 4. Cumulative / trend-based alerts

Some changes only matter when sustained. These check the last *N* weeks, not just the WoW delta.

| Condition | Severity |
|---|---|
| CR declines by ≥ 2 pp for 3 consecutive weeks | `critical` (sustained slide) |
| SoV declines by ≥ 1 pp for 4 consecutive weeks | `notable` (slow erosion) |
| Average position worsens by ≥ 0.3 rank for 4 consecutive weeks | `notable` |
| Same competitor gains ≥ 1 pp SoV for 3 consecutive weeks | `notable` (rising threat) |

Single-week noise often reverts. Sustained trends rarely do.

## 5. Per-engine vs aggregate

Each metric is computed both **per engine** and **aggregated across engines** (mean over engines, weighted equally unless the client opts into engine-share weights). Alerts can fire on either dimension, with severity adjusted:

- An aggregate `critical` is always surfaced.
- A per-engine `critical` is surfaced as `notable` at the dashboard level (engine-level changes are often noisier).
- An aggregate `notable` and a per-engine `critical` on the same metric, same week, escalate to `critical` (the per-engine move is symptomatic and worth flagging).

## 6. Time-bounded suppression (avoid double-counting)

Once an alert fires for a metric, suppress alerts of equal or lower severity on the **same metric** for the next 2 weeks unless the metric crosses a higher band. Otherwise a slow slide generates one alert per week and clients tune out.

Exception: event-based alerts (§3) are not suppressed — those fire each time the event occurs.

## 7. Tone and copy

Alert bodies follow the editorial voice of the skill — sober, primary-source-anchored, no hype. Templates:

- **Critical**, decrease: *"Citation rate caiu de X% para Y% (Δ −Z pp) na semana de DD/MM. Maior contribuição: motor M, categoria C. Detalhe e proposta de acção no relatório semanal."*
- **Critical**, new competitor in top-3: *"Marca B entra no top-3 SoV pela primeira vez (S%). Categoria mais afectada: C. Análise no relatório semanal."*
- **Notable**, sustained slide: *"SoV em descida há 4 semanas (Δ acumulado −X pp). Trajectória ainda não crítica, mas merece tema na próxima call."*

No emoji. No exclamation marks. No "urgent action required" boilerplate. The severity tag carries the urgency.

## 8. Override mechanism

Clients can adjust thresholds via `tracker_clients.alert_thresholds_override` (JSONB). The override is **multiplicative** on the defaults above — e.g. `{ "cr_decrease_critical_pp": 1.5 }` means CR critical fires at ≥ 10.5 pp instead of 7 pp. The override applies only to that client. The defaults stay canonical here.

For internal use (destaque.ai self-audit), no override — eat your own dog food at full sensitivity.

## 9. What is deliberately not an alert

To keep the bar high:

- A new vendor SaaS appearing once. Vendors blink in and out of LLM responses.
- A single prompt swinging by 50% in one direction. Prompt-level noise is high; aggregate matters.
- A new academic paper being cited. Useful intelligence for the daily-agent feed; not a client-facing alert.
- A new geography or language appearing in a response. Useful signal for prompt review; not an alert.
- An engine that was offline last week and is back. Annotate, don't alert.

## 10. Maintenance

Thresholds are calibrated to ~30 prompts × 6 engines × 1 week. If the prompt count or engine count changes materially, recalibrate — variance at 10 prompts × 3 engines is much higher than at 30 × 6, and the same pp thresholds would fire too often.

Last calibration check: 25 May 2026, using destaque.ai self-audit baseline data.
