# Metrics and measurement — May 2026

Reference for `geo-seo-aeo-master`. Definitions, formulas, measurement methods and **honest caveats** for the metrics that actually matter in GEO/AEO/SEO work. Methodology disputes are noted in line — different tools measure these metrics differently and the absolute numbers are not directly comparable across vendors.

---

## 1. Citation rate / share of citations

**Definition.** Percentage of LLM responses, for a defined prompt set, that include a citation (clickable source link or footnote) pointing to the target domain. Distinct from "mention" — a citation requires an explicit source reference.

**Measurement.** Run a fixed prompt set against target engines (ChatGPT, Perplexity, Google AIO/AI Mode, Copilot, Gemini, Claude) on a recurring schedule; parse response objects for citation arrays; compute `cited_responses / total_responses`. Tools: Profound, Peec AI, Otterly, Ahrefs Brand Radar, Semrush AI Toolkit.

**Caveats.**
- Engines surface citations inconsistently. ChatGPT enables web search on only **~34.5%** of queries (Semrush clickstream, Feb 2026, [link](https://www.semrush.com/blog/chatgpt-search-insights/)). A brand can be referenced via training-data recall with no citation at all.
- Methodology variations: per-response vs. per-citation-slot, deduplication of domain vs. URL, whether internal "thinking" citations count.
- Citation density varies by engine (ChatGPT ~7.9 cit/answer vs Perplexity ~21.9, Profound). Citation **rate** is not citation **count**.

---

## 2. Brand mention rate

**Definition.** Percentage of responses where the brand name (or a defined alias list) appears in the answer text, regardless of whether the source is cited.

**Measurement.** Regex / NER pass on the response body, normalised for case and aliases. Profound, Peec, Otterly and Ahrefs Brand Radar all distinguish "mentioned" from "cited".

**Caveats.**
- Ambiguous brand names (common dictionary words) inflate counts.
- Ahrefs' ~75,000-brand analysis found brand mentions correlate with AI Overview presence ~3× more strongly than backlinks ([Ahrefs](https://ahrefs.com/blog/llm-citations/)). Correlational. Ahrefs benefits commercially from "branded signal matters" narrative — read as directional.

---

## 3. Share of Voice (SoV) in LLMs

**Definition.** Brand mentions (or citations) as a share of the total competitor set's mentions across a defined prompt universe.

**Formula.**
```
SoV = brand_mentions / Σ(brand_mentions + competitor_mentions)
```
across the prompt set. Some tools weight by response position (à la Princeton's PAWC, see §10).

**Caveats.**
- **Highly sensitive to prompt-list choice.** Two tools with different default prompts produce different SoV for the same brand.
- Profound publishes pre-defined per-industry prompt sets; Peec and Otterly require user-defined prompts.
- For a Portuguese B2B SaaS context the competitor list must cover both Portuguese-named and English-named entities for the same product category, since LLMs often default to English-language sources.

---

## 4. Position 0 / featured snippet rate

**Definition.** Share of queries where the brand wins the classic featured snippet box (still tracked in Search Console as position 1.0 in the "Web" search type).

**Relevance in 2026.** Diminished but not dead. AI Overviews now appear on ~50% of queries (BrightEdge, [link](https://www.brightedge.com/resources/weekly-ai-search-insights/ai-overviews-one-year-presence-size-citing)); the remaining ~50% still resolve to classic SERP where featured snippets matter. Snippet eligibility also correlates with AIO citation, since AIO pulls 54% of citations from organic top-10 (BrightEdge, [link](https://www.brightedge.com/resources/weekly-ai-search-insights/rank-overlap-after-16-months-of-aio)).

**Caveat.** Google does not separate snippet impressions from regular position-1 impressions in GSC.

---

## 5. AI Overview impression rate (Google)

**Definition.** Share of impressions in Search Console attributable to the brand appearing as a cited source inside an AI Overview / AI Mode response.

**Measurement (May 2026).** GSC does **not** allow filtering by AI Overview / AI Mode. AIO and AI Mode clicks/impressions are folded into the "Web" search type aggregate ([Search Engine Land](https://searchengineland.com/google-ai-mode-traffic-data-search-console-457076)). The only practical proxy: compare impression deltas pre/post AIO rollout per keyword (noisy).

December 2025: GSC added natural-language report configuration ([Google blog](https://developers.google.com/search/blog/2025/12/ai-powered-configuration)). UI improvement, no new metric.

**Known data quality issue.** Google disclosed in a changelog (3 April 2026) that GSC over-reported impressions from **13 May 2025** through early April 2026. Any YoY analysis crossing that window is contaminated. Annotate dashboards.

**Practical workaround.** Pair GSC keyword-level impressions with a third-party AIO presence checker (Profound, SerpAPI) to derive an indicative AIO impression share.

---

## 6. AI-attributed traffic

**Definition.** Sessions originating from an LLM interface — chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com, claude.ai, you.com.

**Measurement (GA4).** Captures these as referral traffic when the Referer header survives. As of June 2025, ChatGPT began appending `utm_source=chatgpt.com` to citation links ([MarTech](https://martech.org/how-ga4-records-traffic-from-perplexity-comet-and-chatgpt-atlas/)).

**Recommended GA4 setup.** Custom channel group "AI" with regex:
```
^(chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|you\.com|atlas\.openai\.com)
```

**Significant attribution loss (all under-counts):**
1. Copy-paste of URLs from chat → direct traffic.
2. Mobile app referrals strip Referer.
3. ChatGPT Atlas and some agentic browsers mask origin.
4. UTM tagging in ChatGPT only began June 2025 and only on cited links.
5. Edge's Copilot sidebar navigates without producing a conventional Referer (handled inside browser chrome).

**Net effect.** GA4 AI-referral counts are a **lower bound**. Expect 30-60% under-reporting relative to true AI-driven visits (no rigorous public measurement of the gap; this is order-of-magnitude vendor consensus, treat with appropriate scepticism).

---

## 7. Sentiment in LLM responses

**Definition.** Polarity (positive / neutral / negative) of statements about the brand inside LLM outputs.

**Measurement.** A secondary LLM ("judge") scores response excerpts surrounding the brand mention. Profound, Peec and Otterly expose sentiment fields; methodologies are proprietary and not independently audited.

**Caveats.**
- Sentiment classifiers disagree across vendors; small wording differences flip labels.
- No public inter-rater reliability data exists.
- Treat as directional, not absolute. Useful for catching negative drift; not useful as a precise KPI.

---

## 8. Prompt coverage

**Definition.** Of a defined set of category-relevant prompts (informational, comparative, transactional), the share where the brand appears at least once.

**Formula.** `coverage = prompts_with_brand / total_prompts_in_set`

**Caveat.** Most meaningful when the prompt set is exhaustive and audited. Profound's "Prompt Volumes" feature attempts to weight prompts by actual search demand; other tools weight equally, which over-represents long-tail prompts that no real user issues.

---

## 9. Competitor share

**Definition.** Direct comparative SoV between target brand and a user-defined competitor set.

**Measurement.** Same pipeline as SoV (§3); difference is denominator restricted to a known competitor list rather than "all mentions".

**Caveat.** Excluding "unknown" mentions hides long-tail entrants. For PT-PT B2B SaaS, the competitor list must include both Portuguese and English variants.

---

## 10. Princeton GEO metrics (foundational)

Aggarwal et al., KDD 2024 ([arXiv 2311.09735](https://arxiv.org/abs/2311.09735)) introduced two metrics now widely cited:

- **Position-Adjusted Word Count (PAWC).** Weights citation contribution by an exponentially decaying function of position in the LLM response. Conceptually: "how much of the answer text is your source actually responsible for, with earlier appearances mattering more."
- **Subjective Impression.** LLM-judged composite of relevance, influence, uniqueness.

**Headline results (against late-2023 Bing-Chat emulation, on GEO-bench 10,000 queries):**
- Best methods (Statistics Addition, Quotation Addition, Cite Sources) improved PAWC by **up to ~40.6%** and Subjective Impression by **~28%**.
- The absolute lifts likely do not reproduce on 2025-2026 engines; the relative ordering is more durable ([Sandbox SEO replication](https://sandboxseo.com/generative-engine-optimization-experiment/)).

**Use in client work.** PAWC is not exposed by any vendor tool, but the underlying intuition (first mentions matter more, attribution density matters) maps onto how Profound/Peec rank "share of voice" with position weighting. When citing the 40% number, always pair it with the 2023 caveat.

---

## 11. Knowledge graph presence

**Definition.** Presence of structured entity data in: Google Knowledge Graph (Knowledge Panel), Wikidata (Q-identifier), Wikipedia article.

**Measurable signals.**
1. Wikidata QID exists and is populated.
2. Wikipedia article exists in target language(s).
3. Google returns a Knowledge Panel for `[brand]` queries.
4. `schema.org/Organization` JSON-LD validated via Rich Results Test.
5. `Organization.sameAs` populated with LinkedIn, GitHub, X, Crunchbase URLs.

**Caveat.** No public causal study links Knowledge Graph presence to LLM citation rate. Ahrefs' 75k-brand correlation work shows branded search volume (r=0.334) and branded anchor text (r=0.527) outperform domain rating as predictors. Knowledge graph is plausibly an instance of the same "entity strength" latent factor — directionally supported, not causally proven.

---

## Measurement tools — current state (May 2026)

### Google Search Console

- Performance report (Web) **aggregates** AIO and AI Mode impressions/clicks into standard totals. No filter for AIO/AI Mode.
- Dec 2025: added "AI-powered configuration" — natural-language report setup. UI improvement only.
- Data quality issue: over-reported impressions 13 May 2025 → early April 2026.
- Practical use: still essential for keyword-level impression and CTR baselines; complement with vendor AIO checkers.

### GA4

- Default Channel Group still treats LLM domains as **Referral** — no native "AI" channel.
- Recommended custom channel group ("AI" with regex covering LLM domains).
- Attribution is systematically incomplete; treat as a lower bound.

### Bing Webmaster Tools — AI Performance

Public preview launched **9 February 2026** ([Bing blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)).

Exposes:
- Citation counts across Copilot and Bing AI summaries.
- Cited-pages breakdown.
- **Grounding queries** — Bing's reformulated query before retrieval (rare first-party signal of how the engine internally rewrites user queries).

Data goes back ~3 months (to Nov 2025).

**Critical gap.** Shows citations, not clicks. Cannot measure traffic outcome from Copilot citations directly. **This is currently the only first-party AI citation telemetry from a major engine.** Recommend enabling for every client.

### Browser referrer behavior

- Chromium browsers ship `strict-origin-when-cross-origin` as default Referrer-Policy since Chrome 85 (2020); incognito mode does **not** change this — referrer info (origin only) is still sent on cross-site navigations.
- Many LLM interfaces use `noreferrer` link rels or open in new windows that strip Referer entirely. This is the dominant attribution loss, not browser mode.

### Vendor visibility platforms

See `references/tools.md` for full vendor comparison. For measurement specifically: Peec / Otterly / Profound / Ahrefs Brand Radar / Semrush AI Toolkit all produce some flavour of citation rate + SoV + brand mention. Choose one and stick with it for trend analysis; do not switch mid-quarter and compare absolute numbers.

---

## What to actually instrument in a client engagement

A working measurement stack for a B2B SaaS PT-PT engagement:

1. **GSC** for organic Google keyword/impression baseline and YoY (with the May 2025–Apr 2026 over-reporting caveat annotated).
2. **GA4 with custom AI channel group** for lower-bound AI-attributed traffic.
3. **Bing Webmaster Tools AI Performance** for first-party Copilot citation telemetry.
4. **One monitoring tool** (Peec AI recommended for EU/PT context) for citation rate, SoV, brand mention rate across major engines.
5. **Monthly manual prompt audit** — fixed list of 20-50 category-defining prompts run against ChatGPT, Claude, Perplexity, Google AI Mode by hand. Document who appears, ranking, sentiment. This catches things vendor tools miss.
6. **Wikidata + Knowledge Panel monitoring** — quarterly check that the brand's Wikidata item is populated and Google Knowledge Panel renders.

---

## Honest summary of uncertainty

1. The "57% click reduction", "58% click reduction" and "46.7% click reduction" figures describe similar phenomena measured differently. They are **not interchangeable**. Name the source and date when citing.
2. All current AI-referral traffic measurements are **lower bounds** due to Referer-header loss.
3. No major engine (Google, OpenAI, Anthropic, Perplexity) publishes server-side citation data. Bing is the exception, since 9 Feb 2026.
4. All vendor "visibility" platforms infer citation share from sampled prompting — selection bias toward whatever prompts the tool's defaults include.
5. **PT-PT-specific evidence is thin.** Most public benchmarks are US-English. Peec AI is currently the most credible vendor for non-English tracking; expect to triangulate.
6. The "click era is over" narrative is partly true (AIO collapses CTR where it appears) and partly hype (the remaining ~50% of Google queries still trigger no AIO per BrightEdge). For B2B Tech specifically, AIO presence is ~82% — the impact is upper-bound for destaque.ai's likely vertical.

Last refresh: 23 May 2026.
