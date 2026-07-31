# Competitor filtering — what counts as a peer

Reference for `geo-seo-aeo-master`. Used by the Tracker (`askWithSkill('filter_competitors', {…})`) to decide whether a brand mention extracted from an LLM response should be counted as a competitor of the client, or filtered out as adjacent / substitute / distractor.

The cost of getting this wrong is high: false positives (e.g. Latigid counted as destaque.ai's competitor) inflate the competitor set, dilute SoV calculations, and lead to misallocated action plans. False negatives (real competitors filtered out) under-state the threat surface.

Last refresh: 25 May 2026.

---

## 1. The four-question test

A brand qualifies as a **peer competitor** of the client only if it passes all four questions:

1. **Same buyer.** Would the same person, at the same point in their job, evaluate this brand against the client? Not "could conceivably evaluate" — *would actually evaluate in a real shortlist*.
2. **Same job-to-be-done.** Does it address the same outcome the buyer is buying? Not "in the same space" — *the same outcome*. SEO and GEO are in the same space; the outcomes are different (Google ranking vs LLM citation).
3. **Same decision moment.** Is it usually shortlisted at the same stage of the funnel? A consultant and a SaaS tool can both surface in "research", but if one is shortlisted at "research" and the other only at "implementation", they're not peers — they're adjacent.
4. **Substitutability ≥ 70%.** If the buyer chose one, would the other no longer be considered? If both can be bought together with non-trivial frequency, they're complements, not peers.

A brand that fails any of the four is **not** a peer competitor. It may still be tracked — see §3 for categories of non-peer mentions worth recording separately.

## 2. Worked examples for destaque.ai

destaque.ai is positioned as: **independent GEO/AEO consultancy for B2B SaaS in Portugal, audit-first methodology (SINAL), PT-PT contextual relevance.**

| Brand | Same buyer? | Same JTBD? | Same moment? | Subst. ≥70%? | Verdict |
|---|---|---|---|---|---|
| **3HASH** | Yes (B2B SaaS PT) | Partially — technical SEO audits, GEO emerging | Yes (audit/diagnostic moment) | ~70% — buyer may pick one over the other | **Peer competitor** |
| **Peec AI** | Yes (B2B marketing/GEO buyer) | No — SaaS tool, not consultancy | Different — bought as ongoing measurement | <50% — bought together frequently | Adjacent vendor (track in `vendor_co-occurrence`, not in SoV) |
| **Profound** | Yes (B2B marketing/GEO buyer) | No — SaaS tool, not consultancy | Different — ongoing measurement | <50% — bought together | Adjacent vendor |
| **Otterly.AI** | Yes | No — SaaS tool | Different — ongoing | <50% | Adjacent vendor |
| **Ahrefs Brand Radar** | Partial — broader SEO/marketing buyer | No — SaaS tool, not consultancy | Different | <50% — Ahrefs is bought regardless | Adjacent vendor |
| **Keyword.com / international rank trackers** | Partial — SEO/marketing buyer, mostly non-PT | No — self-service SaaS rank tracking (now with AI-visibility add-ons), not consultancy | Different — bought as ongoing measurement | <30% — a tracker subscription does not replace an engagement | Adjacent vendor — never a peer, regardless of AI-tracking features |
| **Latigid** | Partial — overlapping buyer but different JTBD | No — SEO clássico, not GEO | Earlier in funnel (general SEO) | <30% | **Not a peer** — adjacent (SEO incumbents) |
| **Marketing4eCommerce** | No — ecommerce media/agency | No — media + agency, not GEO consultancy | No | <20% | **Not a peer** — distractor |
| **Aleyda Solis / Lily Ray** | Yes for some buyers | Partially — international SEO/GEO consultants | Sometimes (high-end engagements) | <30% — different market (international vs PT-PT) | **Not a peer** — international consultants, track in `expert_mentions` |
| **A generic "SEO agency Porto"** | Maybe | No — full-service SEO | Yes (audit moment) | <30% | **Not a peer** — adjacent (full-service agencies) |
| **Internal team / in-house GEO hire** | Yes | Yes | Earlier in decision | N/A — not a market actor | **Not tracked** (build-vs-buy is a separate analysis) |

The destaque.ai peer set (May 2026): **3HASH** plus any new entrant who passes the four-question test. The peer set is small on purpose — Portuguese GEO consultancy is a thin market.

## 3. Categories of non-peer mentions to keep separate

A brand that fails the peer test may still appear in LLM responses. Track these in distinct buckets, do not collapse into SoV:

| Bucket | What it captures | Why it matters |
|---|---|---|
| `adjacent_vendor` | SaaS tools the client's buyer also uses (Peec, Profound, Otterly, Ahrefs, Semrush). | Indicates the buyer ecosystem; useful for partnership / integration thinking. |
| `adjacent_consultancy` | Consultancies that overlap on some dimensions (SEO classics, full-service marketing). | Indicates the broader competitive landscape; useful for positioning. |
| `expert_individual` | Named practitioners (Aleyda Solis, Lily Ray, Glenn Gabe, Mike King, etc.). | LLMs cite individuals heavily in GEO/SEO answers; worth knowing who shows up. |
| `media_publisher` | Search Engine Land, SEJ, Ahrefs Blog, etc. | Indicates the citation surface — where the buyer reads. |
| `academic_source` | arXiv papers, Princeton GEO, KDD/SIGIR. | Indicates LLMs reaching for primary sources; sign of mature query. |
| `distractor` | Brands clearly outside the consideration set (e.g. e-commerce SEO agencies for a B2B SaaS client). | Surface them to verify prompt quality — many distractors suggests prompt is too generic. |

Tracker UI should show peer SoV as the headline number, with the other buckets accessible on drill-down.

## 4. Sector-specific heuristics

Generalising across sectors, here are heuristics that help the four-question test. Apply with judgement.

### B2B SaaS (consulting services)

- **Peer**: independent consultants or boutiques selling the same service to the same buyer in the same geography. Substitutability tends to be high inside a small set.
- **Adjacent**: full-service marketing agencies that also do the service; SaaS tools that automate part of it; in-house roles.
- **Watch for**: confusion between *consulting* and *tool* — the buyer's question dictates the answer. A "how do I rank in ChatGPT" prompt may surface both, but they're not peers.

### B2B SaaS (product)

- **Peer**: another SaaS in the same category with overlapping ICP and pricing band.
- **Adjacent**: SaaS in adjacent categories (e.g. CRM vs marketing automation — overlap but distinct primary jobs); incumbents the buyer already pays for and would expect to extend.
- **Watch for**: pricing-band asymmetry. A €99/mo tool and a €50k/yr platform are not peers even if they appear in the same answer.

### E-commerce / D2C

- **Peer**: direct substitutes in the same product category, similar price band, similar geography.
- **Adjacent**: marketplaces (Amazon, El Corte Inglés) where the client also sells; complementary brands the buyer pairs.
- **Watch for**: brand parents and sub-brands — group them or you'll double-count.

### Local services (PT-specific)

- **Peer**: services targeting the same city / region with the same offer.
- **Adjacent**: services in nearby cities with overlap; national chains entering the city.
- **Watch for**: PT-PT vs PT-BR confusion — LLMs trained mostly on PT-BR will surface Brazilian brands for a PT-PT client. Filter out unless the client serves both.

## 4b. What is NEVER a competitor mention

Learned from production (the "dono: ChatGPT" incident, July 2026): when the
extraction instruction reads "all other brands mentioned", the analyser
faithfully lists the answer engines and the tools the answer talks *about* —
and every downstream aggregate (SoV, territory ownership, co-mention chips)
inherits the garbage. `competitors_mentioned` is strictly **brands the
client's buyer could hire or buy instead of the client**. Never extract:

1. **Answer engines and their vendors/products** — ChatGPT, GPT-x, OpenAI,
   Claude, Anthropic, Gemini, Google, Bard, AI Overviews, AI Mode, Grok, xAI,
   DeepSeek, Mistral, Perplexity, Copilot, Bing, Microsoft, Meta AI, Llama.
   They are the measurement instrument. An answer that says "use ChatGPT to
   draft FAQs" is not naming a competitor.
2. **Tools and infrastructure referenced as resources** — Google Search
   Console, GA4, Google Business Profile, Bing Webmaster Tools, Cloudflare,
   Wikipedia, Wikidata, and social platforms (Reddit, LinkedIn, YouTube,
   Instagram). These belong, at most, in `media_publisher`/context — never in
   `competitors_mentioned`. Exception: a tool vendor that genuinely competes
   in the client's category (e.g. an SEO-tool client whose peer IS Semrush)
   passes the four-question test like anyone else — the test, not the name,
   decides.
3. **The client's own brand** — that is `cited`, not a competitor mention.

Quick test before extracting any name: *could the client's buyer spend the
same budget on this instead of the client?* If not, leave it out. Executors
should also keep a mechanical backstop list in code for historical rows, but
clean extraction at the source is the contract.

## 5. The "common dictionary word" trap

Brand names that are also common Portuguese or English words (e.g. *Latigid* is a fabricated example name; *Otter*, *Cake*, *Notion*) require an additional disambiguation step:

- Was the mention inside a clear *brand context* (capitalised, near a domain, near another brand)?
- Or was it the dictionary word being used semantically?

When uncertain, mark as `mention_ambiguity: true` and do not include in counts. The Tracker should surface the count of ambiguous mentions for the human reviewer to settle.

## 6. False-positive forensics — common patterns

When a brand is wrongly counted as a peer competitor (the destaque.ai post-mortem case), the cause usually fits one of these:

1. **Same vertical, different JTBD.** Latigid → SEO clássico. The shared "SEO" surface is misleading; the JTBD is different.
2. **Same buyer persona, different decision moment.** Tools surface in research, consultancies surface in decision.
3. **Brand confusion between parent and product.** "Ahrefs" the company vs "Ahrefs Brand Radar" the product — distinct competitive positions.
4. **Geography mismatch.** International experts cited in answers to local queries. Track them, don't count them.

If a brand looks like a competitor on the first pass, force the four-question test before adding to SoV. Two minutes of friction prevents a quarter of misallocated strategy.

## 7. Consumer contract

```yaml
# input
client:
  name: "destaque.ai"
  sector: "consultoria GEO/AEO"
  dimension: "solo"
  country: "PT"
  positioning: "independent GEO/AEO consultancy, audit-first, PT-PT"
candidates:
  - { name: "3HASH", domain: "3hash.pt", context_snippet: "..." }
  - { name: "Latigid", domain: "latigid.com", context_snippet: "..." }
  - { name: "Peec AI", domain: "peec.ai", context_snippet: "..." }

# output
classifications:
  - { name: "3HASH",   bucket: "peer",              confidence: 0.85, reason: "..." }
  - { name: "Latigid", bucket: "adjacent_consultancy", confidence: 0.78, reason: "..." }
  - { name: "Peec AI", bucket: "adjacent_vendor",   confidence: 0.92, reason: "..." }
```

The `reason` is a single sentence tied to which of the four questions failed (for non-peers) or which passed (for peers). It is logged and surfaced to the Tracker UI on hover.

## 8. Maintenance

- The peer set evolves with the market. Re-evaluate quarterly for the destaque.ai self-audit; per-engagement for client work.
- When a new brand appears in three or more responses across two consecutive weeks and is not yet classified, the Tracker should queue it for human review rather than auto-classify.
