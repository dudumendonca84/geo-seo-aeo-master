# Benchmarks — May 2026

Public studies with hard numbers and verifiable sources. Each entry: source / URL / date / sample / finding / caveat. Vendor-published data is flagged. **No fabricated statistics.** Where a number is widely circulated but the original methodology is missing, it is flagged in §11 ("stats not to cite").

---

## 1. Pew Research — click behaviour with AI Overviews

- **URL.** https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
- **Date.** 22 July 2025.
- **Sample.** Browsing data from 900 US adults; 68,879 Google searches in March 2025.
- **Findings.**
  - Click rate on a traditional result = **8%** when an AI summary present vs **15%** without (~47% relative drop).
  - Click rate on a source **inside** the AI Overview = **1%**.
  - **58%** of users encountered at least one AIO-triggering query in March 2025.
  - 26% ended their session after seeing an AI summary vs 16% without.
- **Caveat.** US-only, single-month panel, browsing telemetry (not server-side). Google publicly disputed the methodology ([PPC.land coverage](https://ppc.land/google-disputes-pew-study-showing-ai-overviews-reduce-clicks-by-half/)).

## 2. Ahrefs — AI Overviews CTR impact

- **URL.** https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/
- **Date.** Updated Feb 2026 (original March 2025 at [ahrefs.com/blog/ai-overviews-reduce-clicks](https://ahrefs.com/blog/ai-overviews-reduce-clicks/)).
- **Sample.** 300,000 keywords (150k with AIO, 150k informational without); GSC aggregated CTR.
- **Finding.** Top-ranking page CTR is **58% lower** when an AIO is present (Feb 2026 update). The earlier March 2025 version reported **34.5%** — the methodology is similar; the gap reflects deeper AIO penetration.
- **Caveat.** GSC's May 2025 – April 2026 impression over-reporting affects the denominator. Ahrefs has not republished post-correction.

## 3. Ahrefs — brand mention vs backlink correlation

- **URL.** https://ahrefs.com/blog/llm-citations/
- **Date.** 2025.
- **Sample.** ~75,000 brands.
- **Finding.** Brand mentions correlate with AI Overview presence ~**3:1** over backlinks. Branded anchor text: **r = 0.527**. Branded search volume: **r = 0.334**. Both above domain rating.
- **Caveat.** Correlational. Ahrefs' products benefit commercially from "branded signal matters" narrative — read as directional.

## 4. Ahrefs — schema null result (May 2026)

- **URL.** https://ahrefs.com/blog/schema-ai-citations/
- **Date.** Published May 2026.
- **Sample.** 1,885 pages with newly-added schema vs 4,000 controls. Aug 2025 – Mar 2026.
- **Finding.** No meaningful citation uplift; **AI Overviews showed a small but statistically significant 4.6% decline** for schema-added pages.
- **Caveat.** Test pages were already heavily cited. Schema may still matter for cold-start pages and for Bing/Copilot (per Microsoft's own statements). Do not over-generalise to "schema doesn't work" — see `frameworks.md` §3 for the nuance.

## 5. BrightEdge — AI Overview presence by vertical

- **URL.** https://www.brightedge.com/resources/weekly-ai-search-insights/ai-overviews-one-year-presence-size-citing (see also [ALM Corp coverage](https://almcorp.com/blog/google-ai-overviews-surge-9-industries/)).
- **Date.** Tracking mid-2025 to early 2026.
- **Sample.** BrightEdge Generative Parser proprietary tracking across "millions of queries" (exact n not disclosed).
- **Findings.**
  - AIO presence grew from ~30% to ~50% of queries over 12 months (+58% YoY).
  - Education: 18% → 83%.
  - **B2B Tech: 36% → 82%.**
  - Restaurants: 10% → 78%.
  - Healthcare: 72% → 88%.
- **Caveat.** BrightEdge query universe biased toward client industries; "presence" is binary, not weighted by query volume. Vendor data.

## 6. BrightEdge — citation source composition

- **URL.** https://www.brightedge.com/resources/weekly-ai-search-insights/rank-overlap-after-16-months-of-aio
- **Date.** Late 2025.
- **Finding.** **54%** of AI Overview citations come from URLs ranking in organic top-10 for the same query.
- **Caveat.** Vendor data, methodology summary only. Specific keyword set not published.
- **Use.** The single most important number in this file for client conversations. Classic SEO still feeds AIO. GEO is an *extension* of SEO, not a substitute.

## 7. Semrush — ChatGPT clickstream traffic

- **URL.** https://www.semrush.com/blog/chatgpt-search-insights/ (release: https://www.semrush.com/news/379285-new-semrush-study-reveals-chatgpt-search-trends-insights-from-80-million-clickstream-records/)
- **Date.** Updated Feb 2026 (covering Oct 2024 – Feb 2026).
- **Sample.** ~1 billion lines of US clickstream from a ~200M-user panel; 80M clickstream records in the original release.
- **Findings.**
  - ChatGPT referral traffic **+206% YoY** (Jan 2025 → Jan 2026).
  - **>30%** of ChatGPT referral traffic goes to just 10 domains.
  - **21.6%** of ChatGPT referral traffic goes to google.com.
  - ChatGPT enables web search on **34.5%** of queries (Feb 2026) vs 46% in late 2024.
- **Caveat.** US-only panel, clickstream under-counts mobile and signed-out users.

## 8. Similarweb — AI referral volumes (top 1000 sites)

- **URL.** https://techcrunch.com/2025/07/25/ai-referrals-to-top-websites-were-up-357-year-over-year-in-june-reaching-1-13b/ — Similarweb industry data
- **Date.** June 2025 data, published July 2025.
- **Finding.** AI platforms generated **1.13 billion** referral visits to the top 1,000 websites in June 2025, **+357% YoY**.
- **Context.** Google search referred ~191 billion in the same period — AI ≈ **0.6% of Google's volume**.
- **Caveat.** "Top 1,000 sites" is a long-tail blind spot. Volumes extrapolated from Similarweb's panel.

## 9. Similarweb — AI chatbot market share

- **URL.** https://www.similarweb.com/ (snapshot data, secondary coverage [Vertu](https://vertu.com/lifestyle/ai-chatbot-market-share-2026-chatgpt-drops-to-68-as-google-gemini-surges-to-18-2)).
- **Date.** 16 January 2026 snapshot.
- **Findings.**
  - ChatGPT global traffic share **64.6%**, down from **86.6%** a year earlier.
  - Gemini **22%**, up from 5.3%.
- **Caveat.** Traffic share ≠ active-user share. In-app usage not captured.

## 10. NetElixir — generative AI ecommerce traffic

- **URL.** https://www.netelixir.com/post/beyond-the-hype-the-real-roi-of-generative-ai-in-the-future-of-search ([Digital Commerce 360 coverage](https://www.digitalcommerce360.com/2026/01/13/generative-ai-online-holiday-shopping-traffic-2025/))
- **Date.** Holiday 2025 data, published Jan 2026.
- **Sample.** NetElixir's mid-market retail client portfolio (exact n not publicly disclosed).
- **Findings.**
  - AI-platform sessions **+796% YoY** (2024 → 2025).
  - AI-platform conversions **+6,432% YoY**.
  - AI-referred visitors convert ~**1.2× higher** than organic search.
  - Nov-Dec 2025 AI referrals **+693% YoY**.
- **Caveat.** Vendor data from a small client base; off a very low 2024 baseline, so percentages are dramatic but absolute volumes remain small relative to organic.

## 11. Aggarwal et al. — Princeton GEO paper (academic foundation)

- **URL.** https://arxiv.org/abs/2311.09735 — KDD 2024: https://dl.acm.org/doi/10.1145/3637528.3671900
- **Date.** First posted Nov 2023; KDD 2024; v3 revisions through 2024.
- **Sample.** GEO-bench, 10,000 queries across 8 domains.
- **Findings.** Best methods (Statistics Addition, Quotation Addition, Cite Sources) lifted **Position-Adjusted Word Count** by up to **40.6%** and **Subjective Impression** by **~28%** over baseline. Keyword Stuffing was neutral-to-negative.
- **Caveat.** Tested against late-2023 generative engine setup (including Bing Chat). The absolute lifts likely no longer reproduce on current systems; relative ordering of techniques is more durable.

See `frameworks.md` §6 for the full 9-method ranking and follow-up papers.

## 12. Pew Research — ChatGPT adoption

- **URL.** https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/
- **Date.** 25 June 2025.
- **Findings.**
  - **34%** of US adults have ever used ChatGPT (≈2× the 2023 figure).
  - **58%** of US adults under 30.
  - Work use among employed adults: **28%** (up 20 points).
- **Caveat.** US-only; "ever used" is a low bar.

## 13. Seer Interactive — AIO CTR recovery study

- **URL.** https://searchengineland.com/google-ai-overviews-ctr-recovery-study-475566 (original: [Seer Interactive](https://www.seerinteractive.com/insights/how-ai-overviews-are-impacting-ctr-5-initial-takeaways))
- **Date.** Jan 2025 – Feb 2026.
- **Sample.** 53 brands, 5.47M queries, 2.43B impressions.
- **Findings.**
  - Brand-cited AIO CTR: 2.52% (Sep 2025) → 1.21% (Oct) → 1.3% (Dec) → 2.4% (Feb 2026 recovery).
  - Brands cited in AIO earned **~35% more organic clicks** and **~91% more paid clicks** vs uncited.
  - Being cited inside AIO: **+120% clicks per impression** vs same SERP uncited.
- **Caveat.** Seer is an agency selling related services. This is the strongest publicly available longitudinal dataset on AIO CTR effects but not third-party-audited.

## 14. Profound — citation patterns (680M citations)

- **URL.** https://www.tryprofound.com/blog/ai-platform-citation-patterns
- **Date.** Covers Aug 2024 – Oct 2025.
- **Sample.** 680 million LLM citations across ChatGPT, Perplexity, Google AI Overviews, Copilot, Gemini, Claude.
- **Findings.**
  - ChatGPT: ~7.9 citations/answer.
  - Perplexity: ~21.9 citations/answer.
  - Wikipedia ~47.9% of top citations on ChatGPT.
  - Reddit ~46.7% of top citations on Perplexity; ~14% YouTube.
  - **Only ~11% of cited domains appear in both ChatGPT and Perplexity** — cross-engine portability is poor.
  - Pages mentioning 15+ recognised entities are cited ~**4.8×** more often.
- **Caveat.** Vendor data. Profound benefits commercially from "AI visibility is measurable and complex" narrative.

## 15. Bing Webmaster Tools — AI Performance dashboard

- **URL.** https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- **Date launched.** 9 February 2026 (public preview).
- **What it exposes.**
  - Citation counts across Copilot and Bing AI summaries.
  - Cited-pages breakdown.
  - Grounding queries (Bing's reformulated query before retrieval).
  - Data back to ~Nov 2025.
- **Critical gap.** Shows citations, not clicks. Cannot directly measure traffic outcome from Copilot citations.
- **Value.** **Only first-party AI citation telemetry from a major engine, anywhere, as of May 2026.** Enable on every client account.

## 16. Newer GEO arXiv papers (2025-2026)

| Paper | Finding |
|---|---|
| [arXiv 2509.08919](https://arxiv.org/abs/2509.08919) — Chen, Wang et al., "Generative Engine Optimization: How to Dominate AI Search" (Sept 2025) | Systematic bias **toward earned media over brand-owned sources** in AI Search systems. |
| [arXiv 2604.25707](https://arxiv.org/html/2604.25707v2) — "From Citation Selection to Citation Absorption" | High-influence pages contain dense, structured "evidence containers" reusable across multiple answer segments. Distinguishes *being cited* from *being absorbed into the generated text*. |
| [arXiv 2510.11560](https://arxiv.org/html/2510.11560v1) — "Characterizing Web Search in The Age of Generative AI" | Organic Google results stable (~10 links/query); generative rankings fluctuate significantly across model and index updates. |
| [arXiv 2507.05301](https://arxiv.org/html/2507.05301v1) — "News Source Citing Patterns in AI Search Systems" | Comparative citation behavior across ChatGPT, Copilot, Perplexity, Google AI for news sources. |
| [arXiv 2602.06718](https://arxiv.org/abs/2602.06718) — "GhostCite" | Quantifies citation hallucination rates across 13 SOTA LLMs. |
| [arXiv 2607.14035](https://arxiv.org/html/2607.14035v1) — "Optimizing Visibility in Generative Engines: A Critical Survey of GEO (2023–2026)" (Jul 2026) | Reviews 45 studies; frames GEO as a multi-stage, partially-observable pipeline (activation, crawl/index, retrieval, rerank, citation, prominence, factual absorption, fidelity, user behaviour) rather than a single ranking task — the foundational GEO paper's gains are conditional on the source already being present in a fixed context, not universal. |

---

## B2B SaaS GEO — honest inventory of case studies

Public, controlled case studies are **scarce**. What exists is mostly vendor-published.

- **HubSpot.** Semrush's AI Visibility Index places HubSpot third in Business & Professional Services at **15.4% SoV**, behind Google (23.2%) and Zoho (16.7%) ([MarTech](https://martech.org/b2b-saas-leader-hubspot-wins-ai-visibility/)). Methodology disclosed; HubSpot did not commission. Observational, not a controlled intervention study.

- **Grow and Convert — survey software client.** Documents a "Topic-Based GEO" approach reaching "100+ high-buying-intent topics" surfaced in AI search ([source](https://www.growandconvert.com/ai/b2b-saas-ai-visibility-case-study/)). **No before/after metrics**, no third-party verification. Vendor self-publishing — conflict of interest.

- **Seer Interactive (above, §13).** The strongest publicly available dataset on AIO CTR effects. Seer is an agency selling related services.

### Conclusion to give clients

As of May 2026 there is **no canonical, third-party-audited B2B SaaS GEO case study with before/after metrics on revenue or pipeline**. State this plainly. Anyone presenting "guaranteed +X% pipeline from GEO" is selling marketing fiction, not evidence.

---

## 17. Portugal / PT-PT — documented evidence gap

There is no publicly available study with hard numbers for:
- AIO presence rates on PT-PT queries.
- ChatGPT Search behavior on Portuguese-language prompts.
- Citation source composition for PT-PT B2B verticals.
- Portuguese consumer behavior in AI Overviews vs classic SERP.

The closest proxies are Peec AI's published material (positioned as the European multilingual platform), Brazilian-Portuguese (PT-BR) academic benchmarks ([arXiv 2603.12872](https://arxiv.org/pdf/2603.12872)), and the multilingual quality-asymmetry paper ([arXiv 2506.03051](https://arxiv.org/pdf/2506.03051)).

**This is a research gap, not an unknown unknown.** Note it explicitly when quoting US-English benchmarks to Portuguese clients.

---

## 18. Stats commonly cited but NOT independently verified — DO NOT USE

These appear in vendor blogs and listicles without primary methodology. Do not cite them in client deliverables.

| Stat | Where it appears | Why to refuse |
|---|---|---|
| "AI Overviews market is US$365.4M in 2026 with 42.9% CAGR" | Multiple GEO listicles (e.g. [omnibound.ai](https://www.omnibound.ai/blog/generative-engine-optimization-statistics)) | No primary methodology, no sample, no commissioning body |
| "AI-referred visitors convert at 14.2% vs Google's 2.8%" | Secondary blogs (e.g. [aperitifagency](https://aperitifagency.com.au/blog/how-to-track-ai-referral-traffic-in-ga4/)) | Original measurement source unclear; ratio implausibly high without context |
| "BrightEdge: Google Search usage up 49% one year into AI Overviews" | [BrightEdge press release](https://www.brightedge.com/news/press-releases/one-year-google-ai-overviews-brightedge-data-reveals-google-search-usage) | PR release exists, methodology behind figure undisclosed — vendor claim |
| "FAQ schema gives 28-40% more citations" | Many "AEO 101" posts | No controlled study — extrapolated from Aggarwal et al. without disclosure |
| "ChatGPT will overtake Google in 2026" | Listicles | Counterfactual; Similarweb shows Google referring ~191B/mo vs AI's ~1.13B (~170× more) |

When confronted with such a stat by a client, the response is: *"That number circulates widely but lacks a primary methodology. Here is what we can verify instead: [cite §5, §7, §13 above]."*

---

## 19. Clovion — AI brand recommendation churn after a follow-up question

- **URL.** https://www.searchenginejournal.com/62-of-ai-brand-recommendations-vanish-after-one-buyer-question-new-clovion-data/581469/
- **Date.** Published ~9 Jul 2026.
- **Sample.** 69,120 multi-turn conversations across Claude, ChatGPT and Gemini, 36 B2B software/fintech categories. Opening question (e.g. "best CRM tools?") followed by one realistic buyer follow-up.
- **Findings.**
  - Repeating the exact same question keeps ~90% of the original brand list intact.
  - Adding one ordinary buyer detail ("for a small team") keeps only ~28% — **62% of the brands from the first answer are gone by the second answer**.
  - "For a large enterprise" produces near-identical churn (~72% either way) vs ~10% for a verbatim repeat.
- **Caveat.** Vendor-run study (Clovion sells AI visibility tracking); methodology not independently peer-reviewed. Directionally consistent with the general finding that single-prompt AI visibility snapshots are unstable (cf. §16 chunking/retrieval variance literature).
- **Use.** Concrete number to justify tracking methodology built around realistic follow-up questions, not single-prompt snapshots — relevant to how destaque.ai should design AI-visibility audits for B2B SaaS clients.

---

## 20. Perplexity WANDR — research-agent grounding benchmark

- **URL.** https://research.perplexity.ai/articles/wandr-benchmark-evaluating-research-agents-that-must-search-wide-and-deep
- **Date.** Published 14 Jul 2026. Open-sourced under Apache 2.0.
- **Sample.** 500 research tasks requiring 170,495 source-verified evidence records; graded by re-fetching each cited page rather than against a static gold set.
- **Findings.** The strongest system tested — Perplexity's own "Search as Code" agent (announced ~31 May 2026, see news-feed entry) — scores only **0.363 soft-F1 / 0.133 hard-F1**: full credit on roughly 1 in 7 submitted evidence records.
- **Caveat.** Vendor-published (Perplexity benchmarking its own product), but notable for disclosing a weak result about itself rather than a favourable one; not independently peer-reviewed.
- **Use.** Concrete, source-disclosed number for how far current agentic research/grounding still is from reliable evidence-backed synthesis — useful to temper client expectations about "AI citation accuracy" and to reinforce continuous multi-run tracking over single-snapshot audits.

---

## 21. YouGov — trust gap between AI assistants and search engines

- **URL.** https://yougov.com/en-us/reports/55071-us-websearch-ai-report-2026 ("Searching for answers: how AI is changing online discovery in 2026"); SEO framing via [Search Engine Journal](https://www.searchenginejournal.com/only-28-of-americans-trust-ai-search-and-that-gap-is-your-seo-opening/581913/) (15 Jul 2026).
- **Date.** US fieldwork ~8 Jul 2026; part of a 19-market study with per-market cuts staggered through July 2026 (UK/India/Australia not yet reviewed here).
- **Sample.** n=2,000 US adults.
- **Findings.**
  - Only **28%** trust an AI assistant's answer, vs **70%** for a search engine and **76%** for a maps app.
  - Among respondents who do use AI in search, **22%** still click through to a supplied link vs **17%** who stop at the AI answer.
- **Caveat.** US cut only; do not extrapolate the exact percentages to PT/EU markets without the corresponding country cut.
- **Use.** Concrete trust-gap number showing the click-through behaviour has not disappeared even where AI answers are trusted less — supports selling "citation + click" presence rather than citation alone.

---

## 22. DeltaV Digital — citation patterns by page type and industry

- **URL.** https://www.deltavdigital.com/resources/reports/ai-citation-study/
- **Date.** Data window 14 Apr–13 Jul 2026; DeltaV's first original GEO research release.
- **Sample.** 21,075 AI engine responses tracked via Peec AI, yielding 25,337 citations across ChatGPT, Perplexity, Gemini and Google AI (Overviews + Mode), spanning 8 industries.
- **Findings.**
  - The page type that wins citations varies sharply by industry: listicles capture **61%** of citations for a B2B technology-services vertical, homepages **55%** for a local-services brand, program pages **53%** in higher education.
  - Comparison pages ("X vs Y") are cited **~45% more often per retrieval** than the dataset average, despite being rarely produced.
- **Caveat.** Single agency's client portfolio via a single tracking tool (Peec AI) — not independently replicated, industry categories are the agency's own client mix, not a representative sample.
- **Use.** Concrete, per-vertical evidence against applying one generic GEO content template to every client — corroborates the existing comparison-content recommendation in `gap_action_mapping.md` (Dimensão 2) rather than changing it.

---

## 23. SE Ranking — Google AI Mode ad presence by commercial intent

- **URL.** https://seranking.com/blog/google-ai-mode-ads/; secondary coverage via [Search Engine Land](https://searchengineland.com/google-ai-mode-ads-reach-queries-study-482475) (17 Jul 2026).
- **Date.** Data collected 30 Jun 2026; published ~14 Jul 2026.
- **Sample.** 50,032 US commercial keywords across 20 niches (~2,500 keywords/niche); text ads only (product carousels excluded).
- **Findings.**
  - Text ads appeared on **29.45%** of commercial queries (14,733 of 50,032).
  - **71.1%** of ad-triggering responses showed two ads simultaneously; 28.9% showed one.
  - Ad presence scales with CPC: **24.33%** on sub-$2 keywords rising to **53.56%** at $10+.
  - Highest-ad vertical: Pets (**72.38%**); lowest: Healthcare (**2.64%**).
- **Caveat.** Single-vendor study (SE Ranking), US-only, single snapshot day (30 Jun) — SE Ranking itself notes AI Mode results vary across sessions, so the true rate may be higher.
- **Use.** Concrete, recent evidence that Google is monetizing AI Mode aggressively in high-CPC commercial categories — reinforces selling "citation + paid" presence to B2B SaaS clients rather than treating GEO/AI Mode visibility as a free replacement for paid search.

---

## 24. CITETRACE (Seo, Jeong, Kim, Jang, Lee) — structural citation failures in search-augmented LLMs

- **URL.** https://arxiv.org/abs/2605.28565
- **Date.** Submitted 27 May 2026 (arXiv 2605.28565) — gap recovery, not captured by this routine until 20 Jul 2026.
- **Sample.** CITETRACE dataset: 11,200 real-world queries from 28 communities, paired with 112,000 responses from 10 models across 5 providers, yielding 761,495 evaluable citation pairs. Three-dimension scoring framework: intent-purpose alignment, source suitability, answer-source fidelity.
- **Findings.** Systematic pattern named "Verified Misguidance" (VM): models cite real, accessible sources yet fail along one or more dimensions, producing a fidelity-suitability trade-off (faithful models select inappropriate sources and vice versa). **30.6%** of citations distort their source; **27.1%** originate from domain-inappropriate sources; at the response level, up to **90%** of users encounter at least one such citation.
- **Caveat.** Pre-print, authors' own 3-dimension scoring methodology, no independent replication found yet.
- **Use.** Strong quantitative evidence that citation presence ≠ citation fidelity — reinforces (does not replace) the existing distinction between "being cited" and "being represented accurately" already built into destaque.ai's audit approach. Does not introduce a new auditable per-site dimension; no scorecard change triggered.

---

## 25. Capraro, Marcoccia & Quattrociocchi — AI advice suppresses willingness to say "I don't know"

- **URL.** https://arxiv.org/abs/2607.13562
- **Date.** Submitted 15 Jul 2026 (arXiv 2607.13562); covered by [The Register](https://www.theregister.com/ai-and-ml/2026/07/19/using-ai-makes-people-less-likely-to-admit-they-dont-know-something/5274567), 19 Jul 2026.
- **Sample.** 5 experiments, 3,132 participants (4 preregistered, 1 direct replication); questions engineered so AI advice given was wrong (e.g. film trivia), isolating AI *use* from AI *accuracy*.
- **Findings.** Mere access to AI advice — whether actively requested or just displayed — collapsed willingness to say "I don't know" from **44% to 3%**, dropped accuracy from **27% to 9%**, and raised confidence from **30% to 76%**. Monetary incentives for accuracy only partially recovered the effect (suspension of judgment: 3% → 8%; accuracy: 9% → 16%, still below the 27% baseline).
- **Caveat.** Lab experiment on trivia questions (film details); authors argue findings generalise across domains, but no field replication yet in a commercial AI-search context.
- **Use.** Reinforces (does not replace) the trust-vs-behaviour gap already logged in §21 (YouGov, 28% trust AI search) — confidence in an AI answer rises sharply even when the answer is wrong, so "the AI said so" is not a reliable proxy for the user having verified anything. Useful to explain to clients why citation ≠ persuasion-with-scrutiny; no scorecard or pitch change triggered.

---

## 26. Semrush — topical authority and category ownership in AI search

- **URL.** https://searchengineland.com/topical-authority-ai-search-482875
- **Date.** Published 22 Jul 2026 (Search Engine Land, reporting Semrush data).
- **Sample.** 1,094 US categories, 5 prompts per category, monthly snapshots Jan–Jun 2026 in ChatGPT; 220k+ domains, 50k+ brands, 600k+ citations, 220k+ URLs tracked.
- **Findings.** Only **15.2%** of categories had a clear "owner" brand by Jun 2026; **53.7%** remained open fields with several contenders for the top spot. The largest-volume categories are the *least* likely to have a settled owner.
- **Caveat.** Vendor study (Semrush); ChatGPT-only, US-only categories — no confirmation the same consolidation pattern holds in Perplexity, AI Overviews, or PT-PT categories.
- **Use.** Quantifies the "open field" opportunity for B2B categories not yet consolidated in AI search — supports the destaque.ai first-mover pitch for clients entering categories before a competitor locks in citation dominance. No scorecard change triggered.

---

## 27. Grossman et al. — How Generative AI Disrupts Search: An Empirical Study of Google Search, Gemini, and AI Overviews

- **URL.** https://arxiv.org/abs/2604.27790
- **Date.** Submitted Apr 2026 (arXiv 2604.27790) — gap recovery, not captured by this routine until formal publication at SIGIR '26 (Melbourne, 20–24 Jul 2026).
- **Sample.** Public benchmark of 11,500 real user queries (adapted/extended from prior query collections for broader localised-intent and syntactic-form coverage); paired retrieval from Google Search (SERP), Google AI Overviews, and Gemini. Dataset and scripts public on [GitHub](https://github.com/rag24/AIO).
- **Findings.** AI Overviews are generated for **51.5%** of representative real-user queries — but generation rate swings from **17.4%** (Amazon Retail-style queries) to **94.6%** (ELI5 queries). Each engine returns a similar *number* of sources per answer (Gemini 9.68, AIO 9.24, classic SERP 8.75), but the *overlap* between which sources each engine returns is low — attributed to differing retrieval methodology, not differing volume. Classic Google Search is significantly more likely to surface institutional/government/education domains; generative engines (AIO, Gemini) are significantly more likely to surface Google-owned content. **Actionable finding**: sites that disallow `Google-Extended` are significantly less likely to be retrieved by AI Overviews, despite the content being otherwise accessible. For debate/controversial queries, 33.4% of AIO summaries open with a direct affirmative or negative stance.
- **Caveat.** Preprint dates to Apr 2026 (only reached this routine via its SIGIR '26 formal publication in Jul 2026); single research group's crawl methodology; US/English query set, no confirmed PT-PT replication.
- **Use.** First empirical evidence tying a specific robots.txt directive (`Google-Extended`) to AIO retrieval odds — upgrades the existing `frameworks.md` §2 recommendation (allow answer-engine crawlers, decide deliberately on training crawlers) from best-practice reasoning to measured effect, specifically for Google. Reinforces (does not change) the audit weight already given to robots.txt in the audit workflow (§7).

---

## Deck Builder core stats

> **Cross-repo contract.** Consumido por `destaque-ai-deck-builder` (`src/lib/skill/benchmarks.ts` → `loadCoreBenchmarks`) pelos slides do deck público: o Slide 03 usa os 3 primeiros como headline; os Slides 05 (`aio_top10_share`) e 10b (`b2b_ai_answer`) procuram a linha por `key`. Mesma lógica do `## Deck Builder API mappings` em `models.md`: tabela parseável, fonte única. Princípio SINAL — nenhuma estatística sem fonte. Actualizar uma linha aqui propaga ao deck em ≤1h (cache TTL do loader), sem deploy. As `caption` são client-facing → PT-PT. Se a tabela faltar ou tiver menos de 3 linhas válidas, o deck-builder cai para o fallback hardcoded. Adicionar uma linha aqui é seguro; mudar o cabeçalho da tabela parte o parser — ver INTERFACES.md.

| key | value | caption | source | url | date |
|---|---|---|---|---|---|
| `b2b_ai_answer` | 82% | das pesquisas em tech B2B já acionam uma resposta de IA | BrightEdge, 2026 (36% → 82% em 12 meses) | https://www.brightedge.com/resources/weekly-ai-search-insights/ai-overviews-one-year-presence-size-citing | 2026-02-01 |
| `aio_click_share` | ~1% | dos utilizadores clica numa fonte dentro de uma AI Overview | Pew Research, Jul 2025 (CTR 8% vs 15%) | https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/ | 2025-07-22 |
| `cited_brand_clicks` | 35% | mais cliques orgânicos para marcas citadas em respostas de IA | Seer Interactive, 2026 (2,43 mil milhões de impressões) | https://www.seerinteractive.com/insights | 2026-01-01 |
| `aio_top10_share` | 54% | das citações em AI Overviews vêm de URLs no top-10 orgânico | BrightEdge, 2025 (rank overlap, 16 meses) | https://www.brightedge.com/resources/weekly-ai-search-insights/rank-overlap-after-16-months-of-aio | 2025-11-01 |

Cada linha cruza com a secção detalhada acima: `b2b_ai_answer` → §5 (BrightEdge presence), `aio_click_share` → §1 (Pew click behaviour), `cited_brand_clicks` → §13 (Seer CTR recovery), `aio_top10_share` → §6 (BrightEdge citation source composition). Não adicionar stats da §18 (não verificados).

---

## Maintenance

Public benchmark studies are released monthly. The `daily-agent/news-feed.md` carries the running record. Update this file when:
- A new study with >50k sample published by Pew, Ahrefs, BrightEdge, Semrush, Similarweb, or peer-reviewed academic source.
- A previously-cited number is materially revised or retracted.
- A new first-party telemetry feature ships from a major engine (Bing AI Performance was the last one, Feb 2026).

Last refresh: 24 Jul 2026.
