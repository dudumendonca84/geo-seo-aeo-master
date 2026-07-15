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

Last refresh: 15 Jul 2026.
