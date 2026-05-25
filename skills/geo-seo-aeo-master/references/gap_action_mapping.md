# Gap → action mapping

Reference for `geo-seo-aeo-master`. Catalogue of recurring gaps (what an audit or Tracker dashboard surfaces as a problem) mapped to candidate actions, ordered by SINAL dimension. Used by the audit workflow (`SKILL.md` § 8 Four-horizon action plan) and by the Tracker (`askWithSkill('generate_narrative', {…})` for the "Próximas acções" block).

The catalogue covers all 8 SINAL dimensions, not just technical SEO. The recurring failure mode being prevented: collapsing GEO work to "add schema, fix llms.txt" and ignoring entity, authority, content and operational work.

Each action has:
- **Gap pattern** — the observable signal that triggers it.
- **Action** — what to do, in 1-2 sentences.
- **Horizon** — H1 (weeks 1-2) / H2 (3-6) / H3 (7-12) / H4 (90+).
- **Effort** — XS / S / M / L (XS < 1d, S 1-3d, M 1-2w, L > 2w).
- **Owner type** — *client team* / *destaque.ai* / *third party*.
- **Evidence base** — which reference in this skill justifies the action.

Last refresh: 25 May 2026.

---

## Dimension 1 — Technical foundation

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| `llms.txt` and `llms-full.txt` absent | Publish `llms.txt` at the root with a curated index of canonical docs URLs. Do not promise inference influence — frame as docs hygiene. | H1 | S | client team | `frameworks.md` §1 |
| `robots.txt` missing modern AI crawlers (ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider) | Add explicit Allow/Disallow lines for the current crawler matrix. Decision per crawler — Allow OAI-SearchBot/Claude-SearchBot for visibility, decide GPTBot/CCBot separately based on training-data posture. | H1 | XS | client team | `frameworks.md` §2 |
| Schema.org coverage minimal (`Organization`, `WebSite` only) | Add `Product`/`Service`, `FAQPage`, `Article`/`HowTo` where templates support them. Do not promise +X% citations — Ahrefs May 2026 null result. Frame as table-stakes corroboration. | H1-H2 | M | client team | `frameworks.md` §3, `benchmarks.md` §4 |
| Content rendered client-side only (CSR), LLM crawlers see empty HTML | Migrate critical pages to SSG or SSR. If platform-locked (Framer free, etc.), put Cloudflare in front with HTML caching, or migrate. | H2 | L | client team / third party | `frameworks.md` §5 |
| TTFB > 800 ms from PT | CDN in front (Cloudflare PT-side); enable Brotli; optimise origin server location. | H1 | M | client team | `SKILL.md` §4 |
| Security headers missing (HSTS, X-Content-Type-Options, CSP, Referrer-Policy) | Add via CDN edge config or origin headers. Quick win, signals quality to E-E-A-T-aware retrievers. | H1 | XS | client team | `SKILL.md` §6 |
| `sitemap.xml` incomplete or unilingual when site is bilingual | Generate sitemap index with per-language children. Include `hreflang` annotations. | H1 | S | client team | `SKILL.md` §6 |
| AI Overview impressions cannot be measured | Pair GSC keyword impressions with a third-party AIO checker (Profound, SerpAPI). Annotate dashboards. Do not invent a "AIO impression rate" — GSC doesn't expose it. | H2 | S | destaque.ai | `metrics.md` §5 |

## Dimension 2 — Content & topical authority

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| No original statistics or data published | Commission or extract one primary data report per quarter. Original numbers get cited; opinion does not. | H2-H3 | L | client team + destaque.ai | `benchmarks.md` (general pattern — primary data over commentary) |
| No comparative content vs named competitors | Publish 2-3 honest comparison pages with clear differentiator framing. Risk: surface comparison to engines that respect comparisons (Perplexity, ChatGPT Search). | H2 | M | client team | `frameworks.md` §5 |
| No topic clusters — content is one-off | Build hub-and-spoke around 3-5 strategic topics. Each spoke ≤ 1500 words, hub ≥ 3000, internal linking dense. | H3 | L | client team | `metrics.md` §8 prompt coverage |
| Content publication cadence < 1/month | Establish a quarterly editorial calendar with 1 long-form + 2 short-form per month minimum. Cadence > one-off bursts. | H3-H4 | M ongoing | client team | `SKILL.md` §122 anti-pattern |
| Bilingual copy mixed within a single page (PT/EN unmarked) | Split per language with `hreflang`; eliminate mid-paragraph EN in PT pages. LLMs degrade on mixed-language pages. | H2 | M | client team | `SKILL.md` §5 |
| No FAQ content for buyer's top objections | Add `FAQPage` schema with 8-15 buyer questions; mirror the actual top objections from sales calls. | H1-H2 | S | client team | `frameworks.md` §3 |

## Dimension 3 — Entity & brand foundation

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| No Wikidata QID | Create QID with at least 3 sourced statements (founded, headquarters, official website). Wikidata is the most under-used entity lever. | H1-H2 | S | destaque.ai | `frameworks.md` §7 |
| QID exists but `sameAs` sparse | Add `sameAs` to LinkedIn, Crunchbase, GitHub, Wikipedia, ORCID (if relevant), industry registries. | H1 | XS | client team | `frameworks.md` §7 |
| `Organization` JSON-LD `sameAs` array missing or incomplete | Mirror Wikidata `sameAs` in the site's `Organization` JSON-LD. Same set, both directions. | H1 | XS | client team | `frameworks.md` §3 |
| No Wikipedia article | Draft an article with verifiable references (≥ 5 independent secondary sources). Submit via standard Wikipedia process. Multi-month timeline; not for H1. | H4 | L | client team + destaque.ai + third party | `frameworks.md` §7 |
| Founder / key people lack `Person` schema and `sameAs` | Add `Person` markup on About / Team pages with `sameAs` to LinkedIn, GitHub, ORCID. Entity-as-person matters for B2B. | H1-H2 | S | client team | `frameworks.md` §7 |
| NAP (name/address/phone) inconsistent across web presence | Run NAP audit (5-10 high-traffic directories), normalise. Knowledge Graph corroboration depends on this. | H2 | M | destaque.ai | `frameworks.md` §7 |
| Knowledge Panel does not appear for branded query | Long-game — accumulate sameAs depth, secondary references, Wikidata. No quick fix. | H3-H4 | L | client team + destaque.ai | `frameworks.md` §7 |

## Dimension 4 — Authority & digital PR

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| No Tier-1 PT media coverage (Observador, ECO, Público, Negócios) | Pitch 1 op-ed or comment per quarter on a data-backed angle. Tier-1 PT mentions are the strongest local-market authority signal LLMs surface. | H2-H4 | M each | client team + destaque.ai + third party | `frameworks.md` §8 PT-PT |
| No podcast appearances | Identify 5-10 PT B2B / tech podcasts relevant to ICP. Pitch with a specific data point. Listen Notes free tier for discovery. | H2-H3 | M sustained | client team + destaque.ai | `frameworks.md` §8 PT-PT |
| No conference speaking | Submit to 2-3 PT industry conferences per year. Speaker bios increase entity signals. | H3-H4 | M each | client team | `frameworks.md` §8 PT-PT |
| Branded anchor text concentration > 60% in inbound links | Diversify with topic-relevant anchors. Over-optimised brand anchors look manipulated. | H3 | M | destaque.ai + third party | `frameworks.md` §5 |
| No expert citations / mentions of founder or team | Place founder/team in 2-3 industry sources per quarter (interviews, panels, expert quotes). Individual citations compound. | H3-H4 | M sustained | client team | `frameworks.md` §7 |

## Dimension 5 — UX & engagement

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| LCP > 2.5s, INP > 200ms, or CLS > 0.1 (CWV failures) | Image optimisation, resource hints, defer non-critical JS, CDN. Standard CWV playbook. | H1-H2 | M | client team | `SKILL.md` §4 |
| Conversion funnel from "AI-attributed" sessions noticeably lower than other channels | Diagnose landing-page mismatch — AI-sourced traffic arrives with different intent than search-sourced. Tailor landing experience. | H2 | M | client team | `metrics.md` §6 |
| Bounce > 80% on key landing pages | Above-the-fold value statement; H1 matches buyer's mental model; visible social proof. | H1 | S | client team | n/a — UX fundamentals |

## Dimension 6 — Measurement & feedback

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| GA4 not configured for AI traffic channel | Add custom channel group "AI" with regex for chatgpt.com / perplexity.ai / copilot.microsoft.com / gemini.google.com / claude.ai / you.com. | H1 | XS | client team | `metrics.md` §6 |
| Bing Webmaster Tools not connected (no access to AI Performance dashboard) | Connect property; review AI Performance monthly. One of the few places AI clicks are visible by engine. | H1 | XS | client team | `metrics.md` §6 |
| GSC YoY analysis used uncritically | Annotate dashboards: GSC over-reported impressions 13 May 2025 → early Apr 2026. YoY crossing that window is contaminated. | H1 | XS | destaque.ai | `metrics.md` §5 |
| Tracker not yet deployed | Set up `destaque-ai-tracker` for the client; 30 prompts × 6 engines weekly, baseline + 4-week observation before action recommendations. | H1-H2 | M | destaque.ai | this skill |

## Dimension 7 — Strategic positioning

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| Client invisible in `generic_category` prompts (CR < 5%) | This is the awareness-stage gap. Tackle via Dimensions 2 (content), 3 (entity) and 4 (authority) in parallel — no single quick fix. | H2-H4 | L | client team + destaque.ai | `prompts.md` §2 |
| Client visible in `generic_category` but not in `direct_comparison` | Publish comparative content (Dim 2), strengthen entity (Dim 3). Comparison stage requires the buyer to remember the brand, which requires authority. | H2-H3 | M | client team | `prompts.md` §2 |
| Client wins `feature_specific` but loses `price_comparison` | Pricing transparency or pricing-page SEO is missing. Publish pricing logic (not necessarily numbers) and FAQ. | H2 | S | client team | `prompts.md` §2 |
| Heavy "no-click" exposure — brand mentioned, no traffic | Accept as awareness asset; measure share-of-voice, not just sessions. The funnel arrives later. | H3-H4 | ongoing | destaque.ai | `metrics.md` §1, §6 |

## Dimension 8 — Operational excellence

| Gap pattern | Action | Horizon | Effort | Owner | Evidence |
|---|---|---|---|---|---|
| Editorial calendar absent or improvised | Quarterly calendar; weekly stand-up; one named owner per piece. | H1 | S | client team | `SKILL.md` §122 anti-pattern |
| No defined process for handling LLM hallucinations about the brand | Establish monitoring (Tracker), monthly review of negative-sentiment responses, correction queue (request edits to Wikipedia / source-correcting blog posts where the misinformation originated). | H2 | M | destaque.ai + client team | `frameworks.md` §9 |
| Multiple agencies / freelancers without coordination | Single point of accountability for GEO/SEO across content, technical, authority. Coordination is the multiplier. | H2 | M | client team | n/a — operational fundamentals |
| No internal feedback loop from sales to content | Monthly review: which prompts in the Tracker reflect actual sales conversations? Update prompt set; brief content team on objections being asked. | H2 | S ongoing | client team | `prompts.md` §6 |

---

## Cross-cutting principles

### Action plans mix dimensions per horizon

H1 is not "fix all technical". H1 mixes a technical fix (e.g. `llms.txt`), an entity action (e.g. Wikidata QID), a measurement fix (e.g. GA4 AI channel), and a content commit (e.g. one FAQ page). Same for H2-H4. The horizon orders by *time-to-impact*, not by dimension.

### Effort labels are calibrated to a single B2B SaaS in PT

- XS: < 1 day. Configuration change, copy edit, header addition.
- S: 1-3 days. Schema implementation, GSC/GA4 setup, NAP normalisation.
- M: 1-2 weeks. Migration to SSR, original data report, comparative content suite.
- L: > 2 weeks. Wikipedia article, Wikidata expansion + sameAs flood, content cluster build-out, performance overhaul.

Recalibrate for larger orgs.

### Owner types matter for honesty

If destaque.ai is the owner, it is billable work. If client team is the owner, the action plan must include a hand-off note. If third party, the proposal must say so and not pretend destaque.ai delivers everything end-to-end.

### "Action" ≠ "recommendation"

Every row above is an *action* — verb-led, time-bounded, ownable. The audit workflow `SKILL.md` §8 forbids "recommendations" that are not actions ("considerar implementar schema" is not an action; "implementar Product schema em 3 templates: /produto, /caso-de-estudo, /como-funciona" is).

---

## 6. Maintenance

- The catalogue is additive. New gap patterns observed in client work or self-audit are appended, not replaced.
- When two patterns merge (the gap turns out to be the same root cause), consolidate via PR.
- Each row should reference an evidence file in this skill — if no evidence exists yet, the row should not exist yet either.

Last full refresh: 25 May 2026.
