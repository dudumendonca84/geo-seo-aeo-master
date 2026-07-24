# Frameworks, standards and mechanics — May 2026

Reference for `geo-seo-aeo-master`. Every non-trivial claim cites a primary source. Where evidence is contested or thin, this is stated. Field is moving fast — see `daily-agent/news-feed.md` for updates after the maintenance date of this file.

---

## 1. `llms.txt`

### Origin and spec

Jeremy Howard (Answer.AI) proposed `/llms.txt` on 3 September 2024 ([Answer.AI](https://www.answer.ai/posts/2024-09-03-llmstxt.html), [llmstxt.org](https://llmstxt.org/)). A markdown file at the **site root** (`/llms.txt`, not `/.well-known/`) that gives LLMs a curated map of a site's content.

Required structure:
- H1 with project name.
- Optional blockquote summary.
- Optional H2 sections, each with a markdown list of `[Title](URL): description`.
- Optional `## Optional` section for content that can be skipped under tight context budgets.

Companion file `llms-full.txt` concatenates actual content (not just links). Used by Cloudflare, Vercel, Anthropic for their developer docs ([Cloudflare](https://developers.cloudflare.com/llms.txt), [Anthropic](https://docs.anthropic.com/llms.txt), [Vercel](https://vercel.com/docs/llms-full.txt)).

### Adoption status (Jul 2026)

**Publishers.** Cloudflare, Vercel, Anthropic, Mintlify and hundreds of dev-tool / SaaS docs sites publish `llms.txt` and/or `llms-full.txt`. Cloudflare reports agents pointed at their `llms.txt`-served docs use ~31% fewer tokens and reach correct answers ~66% faster than against unrefined sites ([Cloudflare](https://blog.cloudflare.com/agent-readiness/)). Originality.ai's year-long tracking study (3M+ sites monitored, updated Jun 2026) found `llms.txt` instances grew **8.8x**, from 4,088 (Jun 2025) to 36,120 (May 2026); including the companion `llms-full.txt`/`ai.txt` formats, 38,980 sites had adopted at least one variant ([Originality.ai via ppc.land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/)).

**Consumers.** No major LLM provider has publicly confirmed using `llms.txt` for inference or training.
- **Google.** Gary Illyes (Search Central Live, Jul 2025) and John Mueller publicly stated Google does not support `llms.txt` and has no plans to ([Search Engine Land](https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422), [Search Engine Roundtable](https://www.seroundtable.com/google-does-not-endorse-llms-txt-40789.html)). Mueller compared it to the deprecated `keywords` meta tag; reconfirmed 2 Jul 2026 after Lily Ray flagged unrelated markdown-rendering artifacts in AI Overviews citation snippets ([Search Engine Roundtable](https://www.seroundtable.com/google-ai-overview-markdown-files-41595.html)).
- **OpenAI / Anthropic.** Anthropic publishes the file but has not stated Claude or ClaudeBot consume it. OpenAI has not announced support.
- **Server-log studies.** Otterly, Reboot Online and SE Ranking (~300k domains, Nov 2025) find AI crawlers requesting `/llms.txt` at near-zero rates with no measurable lift in AI citation ([Otterly](https://otterly.ai/blog/the-llms-txt-experiment/), [aeoengine summary](https://aeoengine.ai/blog/llms-txt-zero-usage-ai-bots-ignore)). Originality.ai's Jun 2026 update corroborates this at larger scale: despite the adoption growth, **97% of `llms.txt` files logged zero requests from AI crawlers** (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended all overwhelmingly crawl HTML directly instead).

### Honest assessment

A community-maintained convention with growing publisher adoption but **no confirmed consumption by frontier LLMs in inference paths**. Useful as documentation hygiene and for agent-tool ecosystems that explicitly fetch it (some IDE agents). Not a substitute for structured data, server-rendered HTML, and classical SEO for visibility in ChatGPT Search, Perplexity, Google AI Overviews or Copilot.

Practical posture for destaque.ai clients: **publish it, do not promise inference impact.** A complete `llms.txt` plus `llms-full.txt` is a low-cost signal of technical hygiene that pays off if any inference-path consumption materialises. Make sure the URL count matches the sitemap — a `llms.txt` declaring 20 URLs while the sitemap holds 182 is worse than nothing (in-house audit of congruent.pt, 22 May 2026).

---

## 2. AI crawlers — `robots.txt` matrix (May 2026)

Each vendor distinguishes **training crawls** (asynchronous, bulk, blockable without removing the brand from the answer engine) from **real-time user-triggered fetches** (synchronous, tied to a user query; blocking these removes the brand from the answer engine).

### OpenAI ([platform.openai.com/docs/bots](https://platform.openai.com/docs/bots))

| User-agent | Purpose | Block effect |
|---|---|---|
| `GPTBot` | Training corpus collection | Excludes content from future foundation-model training |
| `OAI-SearchBot` | Indexing for ChatGPT Search | Removes from ChatGPT Search citation pool |
| `ChatGPT-User` | User-triggered fetch (browse / Custom GPT) | Removes site from real-time ChatGPT browsing |

Common B2B pattern: allow `OAI-SearchBot` + `ChatGPT-User`, decide separately on `GPTBot`.

### Anthropic ([docs.anthropic.com](https://docs.anthropic.com); see [Search Engine Land](https://searchengineland.com/anthropic-claude-bots-470171))

| User-agent | Purpose |
|---|---|
| `ClaudeBot` | Training-data collection |
| `Claude-User` | User-triggered fetch (Claude reads a URL on demand) |
| `Claude-SearchBot` | Indexing to power Claude search results |
| `claude-code` | Claude Code CLI / SDK web-fetch tool (developer-driven) |

Legacy `anthropic-ai` and `Claude-Web` appear in older guides but have been superseded. All four current agents honour `robots.txt`.

### Google ([developers.google.com/crawling/docs/crawlers-fetchers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers))

| Token | Type | Purpose |
|---|---|---|
| `Googlebot` | Crawler | Drives Search **and** AI Overviews + AI Mode (same index) |
| `Google-Extended` | **Control token, not crawler** | Opts out of using Googlebot-crawled content for Gemini training / grounding, without affecting Search ranking or AI Overview eligibility |
| `GoogleOther` | Crawler | Generic R&D fetches, blockable separately |

Critical implication: there is no separate AI-Overviews crawler. **Blocking `Googlebot` removes a site from AI Overviews entirely.**

### Perplexity ([docs.perplexity.ai](https://docs.perplexity.ai/docs/resources/perplexity-crawlers))

| User-agent | Purpose | robots.txt compliance |
|---|---|---|
| `PerplexityBot` | Indexing crawler | Yes |
| `Perplexity-User` | Real-time user-triggered fetch | Perplexity docs state this agent **does not follow robots.txt** because it is tied to a live user action |

Cloudflare published a report (4 Aug 2025) alleging Perplexity used undeclared/rotating crawlers to bypass no-crawl directives ([Cloudflare](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/)). Perplexity disputed the framing. Compliance posture is contested.

### Other AI crawlers

| User-agent | Operator | Purpose | Notes |
|---|---|---|---|
| `Meta-ExternalAgent` | Meta | Training (Llama, Meta AI across FB/IG/WA/Threads) | |
| `FacebookBot` | Meta | Historically link previews; per Meta docs also training | |
| `Bytespider` | ByteDance | Training for TikTok / ByteDance AI products | History of ignoring `robots.txt` in past reports; current posture uncertain |
| `Applebot-Extended` | Apple | Control token: opt-out of Apple Intelligence training | Apple's equivalent of Google-Extended |
| `CCBot` | Common Crawl | Open crawl whose corpus feeds many third-party training pipelines (GPT-3 ancestry, LLaMA, etc.) | Blocking CCBot is the closest one-line opt-out of "the open web training pool" |
| `cohere-ai` | Cohere | Training |
| `Diffbot` | Diffbot | Knowledge-graph crawl |

### Cloudflare "Content Signals" robots.txt extension — no effect confirmed (Jul 2026)

Cloudflare's "Content Signals" policy extends `robots.txt` with three declarable preferences (`search`, `ai-input`, `ai-train`) letting site owners state intent for how crawled content may be used. John Mueller (Google) confirmed on-record, 6 Jul 2026, that the directive has "no effect whatsoever" on any crawler — including Google's own — and that Google does not consume it, nor `llms.txt` / `llms-author.txt`, for crawling or ranking decisions ([Search Engine Roundtable](https://www.seroundtable.com/google-cloudflare-content-signals-41631.html)). Same posture as §1: an unenforced declaration of intent, not a technical control.

### Practical pattern for B2B SaaS

Allow **real-time / answer-engine** bots:
```
User-agent: Googlebot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-User
User-agent: Claude-SearchBot
User-agent: PerplexityBot
User-agent: Perplexity-User
Allow: /
```

Decide deliberately on **training** crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `Meta-ExternalAgent`, `Bytespider`, `CCBot`). The training/answer distinction is the GEO-relevant decision. A B2B SaaS that wants discovery should normally allow both; a publisher that wants payment for training data should block training while allowing answer-engine real-time agents.

The Congruent case (in-house audit, 22 May 2026) is illustrative: explicit `Allow: /` for `GPTBot`, `Claude-Web`, `anthropic-ai`, `PerplexityBot`, but missing the modern `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot` and `Bytespider` — leaving silent gaps.

**Empirical confirmation for `Google-Extended` (SIGIR '26, Jul 2026).** Grossman et al., "How Generative AI Disrupts Search" ([arXiv:2604.27790](https://arxiv.org/abs/2604.27790), formally published at SIGIR '26, Melbourne, 20–24 Jul 2026; see `benchmarks.md` §27), find that sites disallowing `Google-Extended` are significantly less likely to be retrieved by Google AI Overviews, even when the content is otherwise crawlable and accessible. This is the first controlled empirical evidence — not just vendor guidance — that the training/answer-engine distinction above has a measurable, engine-specific effect for Google: blocking `Google-Extended` is not a neutral "opt out of training only" choice, it carries a real AIO-visibility cost.

---

## 3. Schema.org and structured data for AI

JSON-LD remains the format recommended by Google and the one major AI engines (Bing/Copilot, Perplexity, ChatGPT Search) parse most reliably as of 2026 ([schema.org](https://schema.org), [Google structured-data docs](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)). Microdata and RDFa are still valid but JSON-LD is the practical default.

### Types that matter most

| Type | Why it matters | Common gaps in B2B sites |
|---|---|---|
| `Article` / `NewsArticle` / `BlogPosting` | Author, `datePublished`, `dateModified`, `publisher`. Freshness signal for ChatGPT Search and Perplexity. | Missing `Person` author with credentials |
| `FAQPage` | Atomic Q-A pairs map cleanly onto generative answer extraction. Google deprecated FAQ rich results in classic SERPs (Aug 2023), but markup is still parsed as a structural signal by AI engines. | Used decoratively without real questions |
| `HowTo` | Step structure aligns with procedural answers. | Step images missing |
| `Product` / `Offer` / `AggregateRating` | Pricing, features, review signals for entity-resolution. | `Offer.priceCurrency` missing, ratings inflated |
| `Course` / `CourseInstance` / `educationalCredentialAwarded` | Required for Google Courses rich results and for LLMs to extract modality / certification. | Entire catalogues without `Course` (Congruent: 169 cursos sem schema) |
| `JobPosting` | Required for Google Jobs and for LLMs to surface vacancies. | `validThrough`, `hiringOrganization.sameAs` missing |
| `Event` | Date, location, recurrence. | `eventStatus` and `eventAttendanceMode` post-pandemic |
| `Organization` + `sameAs` | Entity disambiguation; `sameAs` links to Wikidata, LinkedIn, Crunchbase, GitHub feed knowledge-graph linking. | `sameAs` empty — the single most common B2B gap. Without `sameAs` no Knowledge Panel. |
| `WebSite` + `potentialAction` (SearchAction) | Sitelinks search box rich result. | `potentialAction` missing |
| `Person` | `jobTitle`, `worksFor`, `sameAs` → supports E-E-A-T author signals. | No author pages at all |
| `BreadcrumbList` | Site structure signal. | Missing in templated pages |
| `ClaimReview` / `Claim` | Fact-check markup; high-trust signal for verification queries. | Only used by news orgs |

### The Ahrefs schema null result (May 2026)

Ahrefs' May 2026 study compared 1,885 pages with newly-added schema against 4,000 controls (Aug 2025 – Mar 2026) ([Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)). Result: no meaningful citation uplift; AI Overviews showed a small but statistically significant 4.6% **decline** for schema-added pages.

Caveats: test pages were already heavily cited. Schema may still matter for:
- Cold-start pages without established citation history.
- Bing / Copilot (Microsoft's Fabrice Canel, Mar 2025, publicly stated schema helps Copilot understand content).
- Rich-result-eligible queries on Google (Courses, Jobs, Events, Products) where rich results are an organic-CTR lever independent of AI Overviews.

The strong-form claim "schema gives +X% citations" is unsupported. The weak-form claim "schema reduces ambiguity for retrieval and rich-results eligibility" remains correct.

---

## 4. E-E-A-T (May 2026)

Source: Google Search Quality Rater Guidelines, latest version 11 September 2025 ([raterhub PDF](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf), [overview](https://services.google.com/fh/files/misc/hsw-sqrg.pdf)).

Framework remains Experience, Expertise, Authoritativeness, Trustworthiness, with **Trust** as central ("the most important member of the E-E-A-T family"). Sept 2025 revision:

- Renamed YMYL category "Society" → "Government, Civics & Society".
- Added an explicit chapter on how raters should evaluate AI Overviews (the rated unit can now be an AI-synthesised answer, not just a page). First time AI-generated SERP features are formally part of the rater workflow.
- Tightened guidance on scaled content abuse, expired-domain abuse and site-reputation abuse — all now explicitly cover AI-generated mass content.

### Relevance to GEO

E-E-A-T is not directly a ranking signal — it is a rubric raters use to evaluate quality, which informs Google's quality-signal training data. Because Google AI Overviews and AI Mode draw from the same Search index and quality signals as classical Search, E-E-A-T pressures (named authors, declared experience, verifiable credentials, transparent publishing entity, accurate citations) propagate into which pages are *eligible* to be cited in AI Overviews.

For Perplexity, ChatGPT Search and Copilot, "E-E-A-T" is not their stated rubric, but they all use overlapping proxies: domain authority, citation graph, freshness, named authorship and entity recognition. Treat E-E-A-T as a useful umbrella concept that maps approximately onto how every major answer engine ranks source trustworthiness.

---

## 5. Retrieval and citation mechanics by engine

All five systems below use a variant of **retrieve → rank → generate → cite**. Differences are in retrieval backend, citation density, and how aggressively the model is allowed to synthesise without attribution.

| Engine | Retrieval backend | Citation density | Notable bias |
|---|---|---|---|
| **ChatGPT Search** | Bing index + OpenAI crawl | ~7.9 cit/answer (Profound, 118k answers) | Wikipedia ~47.9% of top citations; Reddit prominent. Web search enabled on only ~34.5% of queries (Semrush clickstream, Feb 2026, [link](https://www.semrush.com/blog/chatgpt-search-insights/)) |
| **Perplexity** | Own crawl (`PerplexityBot`) + real-time (`Perplexity-User`) + index partners | ~21.9 cit/answer | Reddit ~46.7% of top citations; ~14% YouTube; G2/review platforms |
| **Google AI Overviews / AI Mode** | Google index | Median cited page ~14 months old (recency not strongly predictive) | YouTube now most-cited domain; **query fan-out** — a single AIO is decomposed into sub-queries, so pages outside top-3 of any one query can still cite |
| **Claude (web search)** | Brave Search | Lower citation count; conservative — claims sourced when uncertain, others left uncited | API requires citations to be shown to end users when surfacing search results ([Anthropic web-search docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)) |
| **Bing Copilot** | Bing index | Format similar to ChatGPT Search | First-party citation telemetry now exposed via Bing Webmaster Tools "AI Performance" dashboard (public preview 9 Feb 2026, [Bing blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)) |
| **Gemini (Gemini Advanced + AI Mode)** | Google index, Gemini reasoning | Verbose; cites less densely than Perplexity | Strong YouTube/Reddit pull |

### Cross-engine domain overlap is low

Only **~11%** of cited domains appear in both ChatGPT and Perplexity (Profound, 680M citations Aug 2024 – Oct 2025, [link](https://www.tryprofound.com/blog/ai-platform-citation-patterns)). Optimising for one engine does not transfer cleanly to another. Budget accordingly.

### Content patterns that get cited (cross-engine consensus)

From Aggarwal et al. plus vendor follow-ups (Profound, Ahrefs, Semrush, Qwairy):

1. **Strong organic ranking on the underlying index** — Bing for ChatGPT/Copilot; Google for AIO/AI Mode. BrightEdge: **54%** of AIO citations come from URLs ranking in organic top-10 for the same query ([BrightEdge](https://www.brightedge.com/resources/weekly-ai-search-insights/rank-overlap-after-16-months-of-aio)).
2. **Original statistics** — replace qualitative claims with numbers. Largest single intervention in Aggarwal et al.
3. **Named-source quotations** — direct quotes attributed to recognized authorities.
4. **Dense entity coverage** — pages mentioning 15+ recognized entities are cited ~4.8× more often (Profound; vendor data, directional).
5. **Clear question-answer structure** — matching headings, atomic answer blocks of ~40-80 words.
6. **Recent `dateModified`** — directionally helpful but **not** a primary lever (median cited age ~14 months).
7. **Declared author with credentials, recognised publishing entity.**
8. **Server-rendered HTML** — content must be in the initial HTML, not hydrated by JavaScript.

What does **not** predict citation strongly (vendor and academic studies):
- Domain Rating / Authority (Ahrefs).
- Reading-grade level (Ahrefs).
- Page-load speed (Ahrefs) — though it predicts ranking, which predicts citation indirectly.
- Schema markup added retroactively to heavily-cited pages (Ahrefs May 2026).
- Keyword stuffing (Aggarwal: neutral-to-negative).

---

## 6. The Princeton GEO paper

Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande, **"GEO: Generative Engine Optimization"** — arXiv [2311.09735](https://arxiv.org/abs/2311.09735), KDD 2024 ([ACM](https://dl.acm.org/doi/10.1145/3637528.3671900)).

Introduces **GEO-bench** (10,000 queries across 8 domains) and tests 9 content-modification tactics against a Bing-Chat-emulating engine. Two metrics:

- **Position-Adjusted Word Count (PAWC).** How much of the generated answer is attributable to the source, weighted by an exponentially decaying function of position.
- **Subjective Impression.** LLM-judged composite of relevance, influence and uniqueness.

### The 9 methods, ranked

| Rank | Method | Effect on PAWC |
|---|---|---|
| 1 | **Statistics Addition** — replace qualitative claims with numbers | up to **+40.6%** |
| 2 | **Quotation Addition** — direct quotes from named sources | ~**+28%** |
| 3 | **Cite Sources** — inline citations | meaningful positive |
| 4 | **Fluency Optimization** — cleaner prose | meaningful positive |
| 5 | **Authoritative Tone** — assertive, confident | meaningful positive |
| 6 | Easy-to-Understand (simplified language) | smaller positive |
| 7 | Unique Words (lexical variety) | smaller positive |
| 8 | Technical Terms (domain jargon) | smaller positive |
| 9 | **Keyword Stuffing** | neutral-to-negative |

### Acknowledged limitations

- Single benchmark, English-only, snapshot of late-2023 generative engines (including Bing Chat which has since been superseded).
- No longitudinal stability claims.
- Sandbox SEO's 2024 replication argued the **absolute lifts likely no longer reproduce on 2025-2026 systems**, though the **relative ordering of techniques appears durable** ([Sandbox SEO](https://sandboxseo.com/generative-engine-optimization-experiment/)).

### What to say to clients

"Statistics, named-source quotations and inline citations are the most evidence-backed content interventions for AI search visibility. The Princeton headline numbers (~+40% PAWC) are from the original 2023 benchmark and should not be quoted as expected 2026 lifts — but the *direction* (numbers and named sources beat adjectives) is robust across all follow-up work."

### Follow-up papers (2025-2026)

- **Chen, Wang et al.** "Generative Engine Optimization: How to Dominate AI Search", arXiv [2509.08919](https://arxiv.org/abs/2509.08919), Sept 2025. Large-scale controlled experiments across verticals, languages, paraphrases. **Finds a systematic bias toward earned media over brand-owned sources.**
- **"From Citation Selection to Citation Absorption"** — arXiv [2604.25707](https://arxiv.org/html/2604.25707v2). Distinguishes *being cited* from *being absorbed into the generated text*; high-influence pages contain dense, structured "evidence containers" reusable across multiple answer segments.
- **"Characterizing Web Search in The Age of Generative AI"** — arXiv [2510.11560](https://arxiv.org/html/2510.11560v1). Organic Google results stable (~10 links/query); generative rankings fluctuate significantly across model/index updates.
- **"News Source Citing Patterns in AI Search Systems"** — arXiv [2507.05301](https://arxiv.org/html/2507.05301v1). Comparative study across ChatGPT, Copilot, Perplexity, Google AI.
- **"GhostCite"** — arXiv [2602.06718](https://arxiv.org/abs/2602.06718). Quantifies citation hallucination rates across 13 SOTA LLMs.

Continue monitoring arXiv `cs.IR` and `cs.CL` — the field publishes actively.

---

## 7. Entity-based optimization

LLMs do not "read" pages the way Googlebot ranks them. Retrieval-augmented systems ground generation in entity-anchored knowledge: structured data, Wikidata items, knowledge-graph nodes, consistently corroborated mentions across the open web.

- **Wikidata / Wikipedia as corroboration layer.** Kalicube treats Wikidata as the primary third-party corroboration source within its "Understandability" phase. Knowledge Panels and Google's grounded answers can appear days after a Wikipedia article or weeks after a well-built Wikidata item ([Kalicube](https://kalicube.com/learning-spaces/faq-list/seo-glossary/knowledge-sources-in-entity-seo-what-you-need-to-know/)).
- **Topical authority outranks domain authority.** In Profound's analysis, topical authority correlates with AI citation at r≈0.41 vs r≈0.18 for domain authority ([Digital Bloom — Profound report](https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/)). Vendor data, directional.
- **Brand search volume correlates with citation at r≈0.33** ([Profound](https://thedigitalbloom.com/learn/2025-ai-citation-llm-visibility-report/)). Effectively "digital PR for LLMs."
- **Branded anchor text** at r=0.527 and **branded search volume** at r=0.334 outperform domain rating as predictors of AIO presence in Ahrefs' analysis of ~75,000 brands ([Ahrefs](https://ahrefs.com/blog/llm-citations/)).

### Practitioner workflow

1. Claim the **Wikidata item** for the brand. Populate `instance of`, `country`, `headquarters`, `industry`, `founder`, `inception date`, `official website`, `LinkedIn ID`, `GitHub username`, `ORCID` for executives where applicable.
2. Resolve **Wikipedia eligibility** honestly. Most B2B SaaS brands do not meet Wikipedia notability; do not force it. Instead, ensure the brand is mentioned on existing Wikipedia articles where appropriate (industry overview pages, product-category articles) with citations to third-party sources.
3. Add `Organization.sameAs` linking to LinkedIn, GitHub, X, Crunchbase, Wikidata, Bloomberg / Pitchbook if listed.
4. Standardise NAP (name, address, phone) across the site and on every third-party profile (LinkedIn, Google Business, Crunchbase). Inconsistency confuses entity-resolution.
5. Author bylines with `Person` schema and `sameAs` to LinkedIn / ORCID / Google Scholar.

Brand-as-entity work is slow, low-glamour and largely uncoupled from short-term traffic. It is the durable substrate.

---

## 8. Multilingual / Portuguese GEO

Public evidence for PT-PT specifically is **thin**. What is known:

- **LLMs reason in English internally.** Multilingual models route through English-aligned representations even for non-English inputs ([arXiv 2502.15603](https://arxiv.org/pdf/2502.15603)). Entity recognition is stronger when the entity has English Wikidata/Wikipedia coverage.
- **Portuguese benchmarks are Brazilian-skewed.** Open Portuguese LLM Leaderboard's nine benchmarks are PT-BR ([arXiv 2603.12872](https://arxiv.org/pdf/2603.12872)). PT-PT dialectal performance is weaker on most models; expect citation quirks (PT-BR sources cited for PT-PT queries).
- **Factual quality varies by language.** "Facts Do Care About Your Language" ([arXiv 2506.03051](https://arxiv.org/pdf/2506.03051)) shows asymmetric answer quality across languages — lower-resource languages get more hallucinations and weaker grounding.

### Strategy for PT-PT B2B SaaS

1. Bilingual EN/PT-PT versions of canonical entity pages. EN is *not* optional — it is the substrate.
2. Wikidata item with both Portuguese variants and English labels (`pt`, `pt-pt`, `pt-br`, `en` labels).
3. Court PT-language coverage on high-authority sources (Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios) — corroboration breadth in-language is what moves the entity graph for PT-PT queries.
4. Use `hreflang` rigorously. `pt-PT`, `en-GB` (not `en-US` for EU clients), `x-default`. Audit for body-text language drift (PT page with EN headings is a common gap; Congruent had this).
5. Acknowledge to clients that this is a documented evidence gap, not a known-known.

---

## 9. Adversarial risks and brand safety in LLM outputs

### Indirect prompt injection

OWASP LLM01:2025 lists prompt injection as the #1 LLM vulnerability; indirect injection through ingested web content is the dominant variant for retrieval-augmented systems ([OWASP](https://genai.owasp.org/llmrisk/llm01-prompt-injection/); [Palo Alto Unit 42, Dec 2025](https://unit42.paloaltonetworks.com/ai-agent-prompt-injection/)).

Defensive practice for content owners:
- Audit your pages for accidental adversarial patterns (lengthy "ignore previous instructions" copy in error states, hidden text in CSS).
- Do not let user-generated content propagate unsanitised into pages indexed by AI crawlers.
- Offensive use (planting injection on competitor pages, "SEO poisoning") is a legal and ethical line not to cross.

### Hallucinated negative associations

Lidsky & Daves, **"Inevitable Errors: Defamation by Hallucination in AI Reasoning Models"** (Journal of Free Speech Law, 2025) — [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5362314). The pending *LTL LED v. Google* case alleges an AI Overview falsely associated the plaintiff with a state-AG lawsuit.

**Germany, first concrete rulings (2026).** Unlike the still-pending US case above, Germany has produced actual decisions. The Munich Regional Court ruled (28 May 2026) that Google is directly liable for a false claim an AI Overview generated about two Munich-based publishers, treating the AI Overview as Google's own speech rather than a neutral aggregation of third-party results. Germany's media regulator (ZAK) followed on 14 Jul 2026, ruling that Google's AI Overviews and Perplexity's answers operate as publisher content — not neutral conduits — stripping them of the EU Digital Services Act's standard platform liability exemption; the first such media-law ruling worldwide ([Tech Times](https://www.techtimes.com/articles/320790/20260716/germany-strips-ai-search-its-eu-liability-shield-worlds-first-media-ruling.htm); [The Decoder](https://the-decoder.com/germany-puts-googles-ai-overviews-and-perplexity-under-media-law-in-first-of-its-kind-ruling/)). No equivalent ruling in Portugal/EU-wide yet — treat as an early signal for regulated-industry clients (fintech, health, legal), not as settled EU law.

Practical mitigation:
1. Monitor brand mentions in LLM outputs at regular intervals (monthly minimum; weekly for high-profile clients).
2. Submit corrections via vendor feedback channels (Google AI Overview "report" affordance; OpenAI feedback; Perplexity "report this source").
3. Maintain authoritative, easily-retrievable canonical statements (About page, Wikidata, press releases) the model can corroborate against.

### Hallucinated citations of the brand

The model may attribute a claim to the brand that the brand never made. Monitoring tooling (Profound, Otterly, AthenaHQ, Kalicube) is immature; treat as observation, not measurement.

---

## 10. Maintenance

This file is updated on substantive change to the field, not on a schedule. The `daily-agent/news-feed.md` carries the running record of changes — consult both when answering "what's new?" questions. When the news-feed accumulates a material shift (e.g. a new crawler family from a major vendor, a Google announcement on AIO mechanics, a peer-reviewed paper that overturns Aggarwal), this file is updated in a single commit with the source citation.

Maintained for: destaque.ai. Last refresh: 23 May 2026.
