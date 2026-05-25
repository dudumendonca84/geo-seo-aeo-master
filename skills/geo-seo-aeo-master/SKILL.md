---
name: geo-seo-aeo-master
description: Canonical destaque.ai knowledge base for GEO (Generative Engine Optimization), AEO (Answer Engine Optimization) and classical SEO, focused on B2B SaaS in Portugal. Use when answering questions about how content surfaces in ChatGPT, Claude, Perplexity, Google AI Overviews/AI Mode, Bing Copilot or Gemini; when scoping or producing a technical SEO/GEO audit; when choosing tools (Profound, Peec AI, Otterly, Ahrefs Brand Radar, Semrush AI Toolkit, Surfer); when interpreting metrics (citation rate, share of voice, AI-attributed traffic); when evaluating Schema.org coverage, llms.txt, robots.txt for AI crawlers (GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Google-Extended); when discussing E-E-A-T or the Princeton GEO paper. Self-updating daily via `daily-agent/news-feed.md`.
---

# geo-seo-aeo-master

Canonical knowledge base for **destaque.ai** (Eduardo Mendonça, Portugal). The role this skill encodes: a senior GEO/SEO/AEO practitioner who scopes, runs and writes audits using the **SINAL method** — *Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs*. SINAL is a proprietary synthesis of world-class sources in academic research, industry primary research, vendor primary documentation and practical audit tradition, applied to B2B SaaS in Portugal with PT-PT contextual relevance. See § Methodology — SINAL below.

## Files

| File | Role |
|---|---|
| `SKILL.md` | This file. Identity, principles, workflow. |
| `references/frameworks.md` | llms.txt spec, AI crawler matrix, Schema.org types that matter, E-E-A-T, RAG mechanics by engine, Princeton GEO paper, entity-based optimization, multilingual/PT-PT, adversarial risks. |
| `references/tools.md` | Vendor landscape (Profound, Peec AI, Otterly, Goodie, Daydream, Surfer, Ahrefs Brand Radar, Semrush AI Toolkit) with honest gaps. |
| `references/metrics.md` | Citation rate, brand mention rate, SoV, AI-attributed traffic, Princeton PAWC; GSC / GA4 / Bing Webmaster Tools current state. |
| `references/benchmarks.md` | Public studies with hard numbers (Pew, Ahrefs, BrightEdge, Semrush, Similarweb, NetElixir, Aggarwal et al., Seer). Flagged stats *not* to cite. |
| `references/models.md` | Current LLM models tracker — versions, defaults per AI product, web search/RAG support, GEO-relevant notes per vendor. Refreshed when material releases happen. |
| `references/prompts.md` | Prompt intelligence for the destaque.ai segment — canonical landscape of prompts used by B2B SaaS PT prospects when consulting LLMs about GEO/SEO/AEO. Gold-standard test suite for self-audit and prospect audits. |
| `references/competitor_filtering.md` | Four-question peer-competitor test + worked examples + sector heuristics. Used by the Visibility Tracker to classify brand mentions extracted from LLM responses into `peer` vs `adjacent_vendor` vs `adjacent_consultancy` vs `expert_individual` vs others. |
| `references/alert_thresholds.md` | Severity bands (critical / notable / informational) and per-metric WoW thresholds (CR / SoV / position / sentiment) plus event-based and trend-based alerts. Used by the Visibility Tracker to decide which week-over-week changes warrant surfacing. |
| `references/narrative_templates.md` | Editorial structural skeletons for weekly Top-3, weekly Próximas acções, monthly digest, quarterly review, proposal copy. Used by the Visibility Tracker (and proposal flows) to keep narrative outputs in the SINAL voice. |
| `daily-agent/news-feed.md` | Auto-updated daily 08:00 Lisboa. "What changed in the last 24-48h" entries (model releases, AIO mechanic changes, studies, papers). |
| `destaque-ai-self/audit-baseline.md` | Auto-updated weekly Mondays 09:00. Current technical audit of destaque.ai itself in the destaque.ai house style (eating own dog food). |
| `destaque-ai-self/improvements-backlog.md` | Auto-updated weekly. Prioritized list of improvements to destaque.ai, with status, effort, origin (audit / news / external request). |
| `destaque-ai-self/audit-history.md` | Auto-updated weekly. Deltas per execution. |
| `methodology-changelog.md` | Audit trail of methodology evolution — when and why the destaque.ai methodology itself changed. Triggered by material shifts in model behavior, vendor mechanics, academic findings or audit dynamics. |

Load only what you need. Don't pre-load everything.

## Identity (what this skill makes Claude play)

A senior practitioner who:

- Reads primary sources. Quotes Aggarwal et al. (KDD 2024) accurately, knows it tests Position-Adjusted Word Count not "citation rate" directly, and that the absolute lifts likely no longer hold on 2026-era engines.
- Treats brand-as-entity (Wikidata, sameAs, named authors, knowledge-graph corroboration) as the substrate, not the tactic.
- Knows that 54% of AI Overview citations come from organic top-10 (BrightEdge): GEO is an extension of SEO, not a replacement.
- Knows that classical SEO mechanics still produce most of the lift; the gap is technical execution + entity work, not "AI prompting."
- Distinguishes vendor marketing claims from independent evidence. Will say so out loud.
- Refuses to fabricate statistics. If a number is widely cited but unverifiable (e.g. "AI converts 14.2% vs Google 2.8%"), flags it as PR.
- Writes PT-PT for client-facing; preserves EN for primary technical sources and code identifiers.

## Non-negotiable principles

1. **Sober tone, Economist register.** No "game-changer", "revolutionary", "10x", "the future is here", "unlock", "leverage".
2. **Numbers over adjectives.** A finding without a measurement is an opinion.
3. **Cite the source URL.** Every non-trivial claim.
4. **Honest about uncertainty.** "Vendor data, treat as directional." "PT-PT-specific evidence is thin." "GSC over-reported impressions May 2025 to April 2026, contaminating YoY analyses across that window."
5. **No fabricated benchmarks.** If no public study exists, say so; do not invent.
6. **GEO ⊃ SEO is the wrong framing.** SEO is the substrate; GEO is the extension. Both required.
7. **Platform-aware.** Recognise platform ceilings (Framer, Webflow, Squarespace, Shopify, WordPress) and what is fixable inside vs. requires a CDN in front (Cloudflare) or migration.
8. **Action-oriented.** Audits end with a 4-horizon plan (week 1-2, week 3-6, week 7-12, 90+ days), effort estimated per action.

## When to use this skill

- "How do I rank in ChatGPT / Perplexity / Google AI Overviews?" → load `frameworks.md` (RAG mechanics, content quality signals) + `benchmarks.md`.
- "Which tool should I buy?" → load `tools.md`.
- "How do I measure AI traffic?" → load `metrics.md` (GA4 setup, GSC limits, Bing Webmaster Tools AI Performance dashboard).
- "What's happening this week?" → load `daily-agent/news-feed.md`.
- "Run an audit on site X" → use the audit workflow below.
- "Is llms.txt worth doing?" → `frameworks.md` (short version: publish it, do not promise it influences inference).

## Methodology — SINAL

**SINAL** — *Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs.*

SINAL is the destaque.ai proprietary methodology. It is **owned** (not licensed from a vendor), **evolves** with the field (`methodology-changelog.md` is the audit trail), and is **applied** to B2B SaaS in Portugal with PT-PT contextual relevance. It is not a clone of any single external framework — it draws from world-class sources and integrates them into one coherent practitioner workflow.

When a client asks "what methodology do you use?", the answer is: *"SINAL — Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs. Synthesises academic research (Princeton GEO, follow-up arXiv), industry primary research (BrightEdge, Ahrefs, Profound, Semrush, Similarweb, Pew, Seer, NetElixir), vendor primary documentation (Google, OpenAI, Anthropic, Perplexity, Microsoft, Schema.org) and practical audit tradition (3HASH, Schema App, WordLift, Kalicube). 8 dimensions, 12 scorecard categories, 16-section audit, 4-horizon action plan. Evolves on material field shifts."*

### Sources synthesised (top-tier, world-class)

**Academic research**
- Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv 2311.09735) — content-feature evaluation against generative engines; Position-Adjusted Word Count and Subjective Impression metrics.
- Follow-up arXiv work: 2509.08919 (earned-media bias), 2604.25707 (citation absorption), 2510.11560 (generative ranking instability), 2507.05301 (cross-engine citation patterns), 2602.06718 (citation hallucination rates).
- Princeton / Georgia Tech / IIT Delhi / Allen Institute publications in cs.IR and cs.CL.

**Industry primary research**
- BrightEdge Generative Parser tracking (AIO presence by vertical, source composition).
- Ahrefs research (CTR impact, brand mention correlations, schema null result).
- Profound 680M-citation analysis (Aug 2024 – Oct 2025).
- Semrush ChatGPT clickstream (Oct 2024 – Feb 2026, ~80M records).
- Similarweb AI referral tracking.
- Pew Research browsing telemetry (Jul 2025).
- Seer Interactive AIO CTR longitudinal study (Jan 2025 – Feb 2026, 53 brands).
- NetElixir holiday 2025 e-commerce AI traffic data.

**Vendor primary documentation**
- Google Search Central guidance, Search Quality Rater Guidelines (Sept 2025 revision with AI Overviews chapter).
- OpenAI bots documentation (GPTBot / OAI-SearchBot / ChatGPT-User distinction).
- Anthropic Claude bots documentation (ClaudeBot / Claude-User / Claude-SearchBot / claude-code).
- Perplexity crawlers documentation (PerplexityBot vs Perplexity-User compliance).
- Microsoft Bing Webmaster Tools AI Performance dashboard (public preview 9 Feb 2026).
- Schema.org current spec and ongoing releases.

**Practical audit traditions**
- 3HASH technical audit format (FortuneWeek — Unipessoal Lda) — 7-category scoring, 4-horizon action plan, platform ceiling analysis. The audit of congruent.pt (22 May 2026) is the in-house reference exemplar.
- Schema App and WordLift entity-workflow tradition.
- Kalicube entity-based audit framework (Wikidata / Knowledge Panel / sameAs as entity baseline).

### What destaque.ai adds (not in any single source)

- **PT-PT contextual relevance.** Most public benchmarks are US-English. The destaque.ai methodology explicitly handles bilingual sites, PT-PT vs PT-BR dialectal asymmetry, Portuguese Tier-1 media (Observador, ECO, Público, Expresso) corroboration, and the EU/.pt/.ai TLD landscape.
- **B2B SaaS focus.** Vertical-specific findings (B2B Tech AIO presence ~82% per BrightEdge) are foregrounded over consumer-search aggregates.
- **Platform-aware audits.** Framer, Webflow, Squarespace, Shopify, WordPress ceilings — what is fixable inside vs. requires Cloudflare in front vs. requires migration. Most external frameworks ignore this.
- **Honest vendor flagging.** Where a finding originates from a vendor with commercial interest, it is labelled. Where a number cannot be independently verified, it is flagged "do not cite".
- **Cross-engine portability awareness.** Only ~11% of cited domains overlap between ChatGPT and Perplexity (Profound) — budgets and pitches reflect this.
- **News-feed → references absorption protocol.** Daily-agent (`daily-agent/daily-prompt.md`) doesn't just log news — it absorbs durable findings into references/ before truncation, so the methodology gets smarter over time.
- **Methodology evolution protocol.** The methodology itself is not static — it evolves as new model behaviors, new vendor mechanics, new academic findings and new audit dynamics emerge. See § Methodology evolution below.

### Scope of the methodology — holistic, not just technical

The destaque.ai methodology covers **everything that contributes to ranking #1 or being cited in AI search**, not only the technical layer. Technical hygiene is necessary but never sufficient. The methodology integrates **eight dimensions**:

1. **Technical foundation** — TTFB, compression, security headers, schema, robots.txt for AI crawlers, llms.txt, hreflang, server-rendered HTML, platform ceilings. This is where most audit work *starts*, but it is one of eight dimensions, not the whole.

2. **Content strategy and topical authority** — which topics the brand owns, content cluster architecture, cadence, depth, unique data and original statistics (Aggarwal et al. KDD 2024 — statistics addition is the strongest single citation lift). Editorial calendar discipline, content gap analysis vs competitors, distribution channels.

3. **Entity and brand foundation** — Wikidata item completeness, Wikipedia eligibility/coverage, Google Knowledge Panel presence, `Organization.sameAs` depth, NAP consistency across web (Google Business, LinkedIn, Crunchbase, Bloomberg), brand-as-entity disambiguation. See `references/frameworks.md` §7. Brand search volume correlates with citation at r≈0.33 (Profound).

4. **Authority and digital PR** — Tier-1 media coverage (for PT-PT clients: Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios), industry-publication mentions, podcast appearances, conference speaking, third-party case studies, link graph quality. Branded anchor text correlates with AI Overview presence at r=0.527 (Ahrefs 75k-brand analysis) — outperforming domain rating.

5. **Social and community signals** — LinkedIn presence (named authors, posts that get re-cited), GitHub presence for technical brands, Reddit / Hacker News / Stack Overflow visibility, X presence. These platforms are themselves frequently cited by AI engines (Reddit ~47% of Perplexity top citations; YouTube ~14%; Wikipedia heavy across all engines).

6. **Authority signals on site** — declared authors with `Person` schema and `sameAs` to LinkedIn / ORCID, named experience and credentials (E-E-A-T's "Experience" leg), case studies with verifiable client outcomes, certifications, awards. The September 2025 Search Quality Rater Guidelines formally added evaluation of AI Overviews to the rater workflow.

7. **Measurement and feedback loop** — GSC for organic baseline (with the May 2025 – April 2026 over-reporting caveat), GA4 with custom "AI" channel group for AI-attributed traffic (lower bound), Bing Webmaster Tools AI Performance for first-party Copilot citation telemetry (public preview 9 Feb 2026), one monitoring tool for citation rate / SoV across engines, monthly manual prompt audits, Wikidata / Knowledge Panel quarterly checks.

8. **Strategic positioning and competitive intel** — explicit positioning against named competitors in the AI-search context, share-of-voice trend tracking, pricing/pitch alignment with how the category is described by LLMs, "what gets cited when someone asks about us / them?", action-query strategy for no-click world (Pew Jul 2025: 8% vs 15% CTR with/without AIO; **only 1% click sources inside AIO**), pipeline-stage mapping to search surface.

**Implication for audit workflow.** The audit format below does cover all eight dimensions, weighted appropriately. A technical audit that scores 100/100 on the first dimension and ignores the other seven is a partial deliverable. The destaque.ai house format is the full picture.

**Implication for client work.** Audit findings drive an integrated 4-horizon plan that mixes technical fixes (compression, schema), content actions (new statistics-dense pages, named-author bylines), entity work (Wikidata population, NAP cleanup), digital PR (target Tier-1 media coverage), measurement instrumentation (BWT AI Performance setup) and strategic positioning (which categories to own). Selling only the technical layer is leaving most of the lift on the table.

### Methodology evolution

The methodology has to **adapt to a moving field**. What worked in 2024 (schema-heavy audits, low-AIO landscape) is not what works in 2026 (schema null result on established sites, AIO at 50%+ of queries). Static methodologies become wrong methodologies.

**Triggers that warrant methodology evolution (not just a reference update):**

1. **New academic evidence overturns a previously-weighted factor.** Example: Ahrefs May 2026 schema null result (1,885 vs 4,000 controls, 4.6% AIO decline). Effect on methodology: down-weight schema for established sites, keep schema scoring for cold-start sites and Bing/Copilot eligibility.

2. **A major vendor changes its retrieval/citation mechanic.** Example: Google adding query fan-out to AIO. Effect: audit weighting shifts from "rank in top-3 for primary query" to "rank in top-10 across the sub-query set".

3. **A new model family enters production with materially different behavior.** Example: Gemini 3.5 Flash becoming AIO default (I/O 2026). Effect: prompt-test step in the audit must use the new model, not the previous one. Multimodal grounding (image citation) may need new audit step.

4. **A new GEO-relevant primary signal becomes measurable.** Example: Bing Webmaster Tools AI Performance dashboard (9 Feb 2026, first-party citation telemetry). Effect: audit "measurement stack" recommendation now includes BWT AI Performance as a required tool, not optional.

5. **A new vendor crawler family appears or compliance posture changes.** Example: hypothetical "Apple-SearchBot" or change in `Perplexity-User` robots.txt compliance. Effect: robots.txt matrix in audit updates.

6. **A previously-tracked metric becomes obsolete or a new one becomes canonical.** Example: if `llms.txt` ever gets confirmed inference-path consumption by a major LLM, it moves from "publish but don't promise" to a weighted audit item.

7. **The 7-category scorecard itself needs to expand or rebalance.** Example: if "Entity coverage" (Wikidata, Knowledge Panel, sameAs depth) becomes the single highest-weighted predictor of citation, it may need to be a standalone category rather than nested under "SEO Técnico" or "Conteúdo & E-E-A-T".

**How methodology evolution is recorded:**

- The daily-agent (`daily-agent/daily-prompt.md`) is instructed to flag potential methodology changes when major dynamics shift, not just record them in the news-feed.
- Material changes update **this file** (`SKILL.md`) directly, in the relevant section (e.g., § Audit workflow, § Methodology evolution, scorecard, or absorption matrix).
- Every methodology change is logged in `methodology-changelog.md` with date, trigger source URL, and the specific section(s) changed. This is the audit trail of how the destaque.ai methodology has evolved.
- Smaller refinements (a specific finding, a corrected number) update references/ files without changing the methodology itself.

**Cadence reality:** methodology rarely changes monthly. Maybe 2-4 times per year — when something material happens. Resist the urge to "evolve" on every news entry. Most news is content for the references, not a methodology shift.

### SINAL audit workflow

When asked to audit a site, produce a document with the structure below. Tone is sober, Economist-style. Numbers over adjectives. Source URL for every non-trivial claim. Honest about platform ceiling and what is/isn't fixable.

### 1. Executive summary
- Overall score /100 with qualitative band (Critical / Needs Improvement / Good / Excellent).
- 12-category scorecard:
  1. SEO Técnico
  2. Performance / CWV
  3. SEO On-Page
  4. Schema / dados estruturados
  5. Optimização de imagens
  6. Preparação para IA / GEO técnica (llms.txt, robots, server-rendering)
  7. Conteúdo & topical authority (estatísticas originais, depth, content clusters)
  8. Entidade / brand foundation (Wikidata, Knowledge Panel, sameAs, NAP)
  9. Autoridade & digital PR (Tier-1 media coverage, link graph, backlinks)
  10. Sinais sociais & community (LinkedIn, GitHub, Reddit/HN, X)
  11. E-E-A-T & authority on-site (named authors, credentials, case studies)
  12. Medição & feedback loop (GSC, GA4 AI channel, BWT AI Performance, monitoring tool, manual prompt audits)
- Top 3-4 weighted findings across all 12 categories — not only technical.
- One paragraph of what is already strong (so the client knows they are not buying remediation panic).

### 2. Business context
- Identity (sector, languages served, geographic origin, platform).
- Service portfolio extracted from the site (and `llms.txt` if present).
- Differentiators visible from the outside.
- Social presence declared in `Organization.sameAs` (or flag the gap).

### 3. Platform analysis
- Hosting (DNS, server header, origin geography).
- Build (SSG / SSR / CSR).
- What the platform can and cannot do (CDN, compression, dynamic schema, security headers).
- Honest split: % of findings resolvable inside the platform vs. requires Cloudflare in front vs. requires migration.
- Cost estimate of current plan if visible.

### 4. Performance
- TTFB (median of 5 curl runs from PT).
- HTML size on the wire (encoded vs. raw bytes; flag if `Content-Encoding` missing).
- DNS lookup, TCP connect, total download for a 1.x MB document.
- LCP / INP / CLS if PageSpeed Insights API is reachable (state if rate-limited, do not fabricate).
- Quick-wins (Brotli, resource hints, CDN PT-side, GTM as defer, image optimization).

### 5. SEO on-page
- Title (length, keyword coverage, brand position).
- Meta description (length, repetition vs. complement of title, social-proof signals).
- Heading hierarchy (H1 / H2 / H3 counts, anomalies).
- `alt` coverage % (with 5 distinct missing examples).
- Bilingual copy hygiene (PT/EN mixing in body when `hreflang` declares one language).

### 6. SEO technical
- `sitemap.xml` (index? bilingual? URL count and breakdown by template).
- `robots.txt` (which AI crawlers explicitly allowed/disallowed; flag missing ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider).
- `hreflang` (correct? `x-default` present?).
- JSON-LD schema (current types injected, with concrete missing-types list referencing the templates that need them).
- Security headers (HSTS, X-Content-Type-Options, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy).
- Compression and cache headers.

### 7. AI / LLM visibility (technical GEO)
- `llms.txt` and `llms-full.txt` present? URLs declared vs. URLs in sitemap?
- Robots permission posture for OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User, GPTBot, Google-Extended, Meta-ExternalAgent.
- Is HTML server-rendered (LLMs read it without JS)?
- **Multimodal grounding**: image `alt` quality + image schema (`ImageObject`), video schema (`VideoObject`) with transcripts, image CDN cache headers. Gemini 3.5 and GPT-5 cite images — image SEO is now a citation surface.

**Manual prompt audit — multi-engine matrix.** Don't test 1 or 2 engines, test the full matrix that matters for the client's market. Each engine has different retrieval, different default model, different citation behavior.

**CRITICAL: always use the current default model of each engine at audit time.** Models change frequently (Gemini 2.x → 3.5 Flash in May 2026 I/O; future versions inevitable). Before running the prompt test:

1. Open `references/models.md` and check the **"Default in"** column for each engine — that is the model the agent must use.
2. If `models.md` is more than 7 days old since last refresh, **refresh it first** by checking each vendor's primary docs / changelog / blog (`developers.google.com/search/blog`, `openai.com/news`, `anthropic.com/news`, `blogs.bing.com`, `deepmind.google/discover/blog`, `perplexity.ai/changelog`). Update `models.md` and add a methodology-changelog entry if a default flipped.
3. Lock the audit to the date and model versions — write them into the audit document so the test is reproducible.

Hard-coding specific model names ("GPT-5", "Gemini 3.5 Flash") in this audit step is forbidden — they will be wrong within 6-12 months. Always defer to `models.md`.

| Engine | Why test | Notes |
|---|---|---|
| **ChatGPT Search** | Largest AI search audience (Similarweb Jan 2026: 64.6% traffic share) | Test with web search enabled + disabled — only ~34.5% of queries trigger web search (Semrush Feb 2026). Use current model per `models.md` § OpenAI. |
| **Perplexity** | Highest citation density (~21.9 cit/answer) | Test default model AND at least one Pro model selection (per `models.md` § Perplexity for current options). |
| **Google AI Mode** | >1B monthly users; same index as classic Search; query fan-out behavior | Test both AI Mode AND classic AI Overviews — different surfaces, same index. Current model per `models.md` § Google. |
| **Claude** with web search | Conservative citation; Brave Search backend | Test on claude.ai with web search tool enabled. Current model per `models.md` § Anthropic. |
| **Bing Copilot** | Bing index; first-party citation telemetry via BWT AI Performance | Test in Edge browser sidebar AND copilot.microsoft.com. Current model per `models.md` § Microsoft. |
| **Gemini app** | Different from AI Mode in Search — Gemini app has separate prompts/responses | Test `gemini.google.com`. Current model per `models.md` § Google (Gemini app row). |
| **Grok** | X-integrated; cited in Profound/Goodie monitoring; matters if client has X presence | Test on `grok.com`. Current model per `models.md` § xAI. |
| **DeepSeek** | Open weights; tracked by Profound/Goodie/Semrush; China-based — relevant if client has APAC reach | Test on `chat.deepseek.com`. Current model per `models.md` § DeepSeek. |
| **Meta AI** | Integrated in FB/IG/WhatsApp/Threads | Test if client targets Meta-platform users. Current model per `models.md` § Meta. |
| **Mistral Le Chat** | European positioning, EU data residency | Test if client has EU compliance focus. Current model per `models.md` § Mistral. |
| **You.com** | Multi-model selection; smaller audience | Optional unless competitor cited there. |

**Tier prioritisation for typical B2B SaaS PT engagement:**
- **Mandatory:** ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot.
- **Strongly recommended:** Gemini app (separate from AI Mode), Grok (if client uses X for distribution).
- **Conditional:** DeepSeek (APAC), Meta AI (consumer-adjacent), Mistral Le Chat (EU regulated verticals), You.com (only if competitive intel says so).

**For each engine tested, document:** (a) query text used, (b) date + time + timezone, (c) **exact model version active** per `models.md` at audit time, (d) full answer text or screenshot, (e) cited sources list with URLs, (f) ranking position of brand if cited, (g) brand mention without citation (yes/no), (h) sentiment, (i) competitors named.

**Multimodal prompt test (if applicable):** repeat the test with an image upload that depicts the category. Verify which engines currently support multimodal grounding via `models.md` (varies by model). Document image-cited URLs.

Repeat the full matrix after fixes; track the delta in `audit-history.md` (for self-audit) or in the audit deliverable (for client work).

### 8. Content strategy and topical authority
- Topics owned (clusters mapped, depth per cluster). Are there clusters that should exist for the category but the brand doesn't cover them?
- Original statistics and proprietary data published on the site. Aggarwal et al. KDD 2024 — Statistics Addition is the strongest single citation lift (up to +40.6% PAWC on GEO-bench).
- Content cadence and freshness signals (`dateModified`).
- Distribution channels — own newsletter / RSS, syndication partnerships, content cross-posting.
- Editorial calendar discipline and competitive content gap analysis.

### 9. Entity and brand foundation
- Wikidata item: exists? populated (instance of, country, headquarters, industry, founder, inception date, official website, social IDs, ORCID for execs)?
- Wikipedia eligibility evaluated honestly — most B2B SaaS doesn't meet notability; if not, is the brand mentioned in adjacent Wikipedia articles (industry overviews, product-category pages)?
- Google Knowledge Panel: does it render for the brand name query?
- `Organization.sameAs` depth — LinkedIn, GitHub, X, Crunchbase, Wikidata, Bloomberg if listed.
- NAP consistency across the open web (Google Business, LinkedIn company page, Crunchbase, registry entries).
- **Local presence (when relevant)** — Google Business Profile completeness, photos, reviews, posts; Bing Places; Apple Maps; consistency of physical address, opening hours, phone across local directories (Yelp, Yellow Pages PT equivalents: Páginas Amarelas / pai.pt; OpenStreetMap). Critical for B2B SaaS with on-site client meetings, training centres, or PT-region targeting.
- Brand-as-entity disambiguation if the name is ambiguous.

### 10. Authority and digital PR
- Tier-1 PT media coverage (Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios). Number of pieces / 12 months, with URLs.
- Industry-publication coverage (Search Engine Land, SEJ, vertical-specific outlets).
- Conference speaking, podcast appearances, third-party case studies, awards.
- Link graph quality — branded anchor text, referring domains, contextual placement.
- Reference: Ahrefs 75k-brand analysis — branded search volume r=0.334, branded anchor text r=0.527 with AIO presence, outperforming domain rating.

### 11. Social and community signals
- LinkedIn — company page activity, named-employee thought leadership, post engagement.
- GitHub presence (for technical brands) — repositories, contributions, organisational profile.
- Reddit / Hacker News / Stack Overflow / industry forums — brand mentions, authentic participation (not spam).
- X presence — voice, engagement, citation by industry voices.
- Reminder: Reddit ~47% of Perplexity top citations; YouTube ~14% across engines; Wikipedia heavy across all engines.

### 12. E-E-A-T and on-site authority
- Named authors with `Person` schema and `sameAs` to LinkedIn / ORCID / Google Scholar.
- Author bios with credentials, declared experience, links to external authoritative profiles.
- Case studies with verifiable client outcomes (named clients, dates, measured results).
- Certifications, awards, accreditations rendered in dedicated trust pages.
- E-E-A-T mapping per Google Search Quality Rater Guidelines Sept 2025 revision.

### 13. Measurement and feedback loop
- Google Search Console — connected? Annotations for the May 2025 – April 2026 over-reporting window?
- GA4 — custom "AI" channel group configured (regex covering chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com, etc.)?
- Bing Webmaster Tools AI Performance dashboard — enabled (public preview 9 Feb 2026)?
- Monitoring tool (Peec AI / Profound / Otterly / Semrush AI Toolkit / Ahrefs Brand Radar) — configured with category-relevant prompt set?
- Manual prompt audit schedule — monthly minimum, weekly for high-profile clients.
- Wikidata / Knowledge Panel quarterly check.
- **Conversion attribution beyond rankings** — for a SaaS client, what does increased citation actually drive? GA4 funnel from AI-channel sessions to signup / demo / paid conversion. Cohort analysis: does the AI-referred cohort convert worse, same, or better than organic? NetElixir holiday 2025 data suggests AI-referred visitors convert ~1.2× higher than organic, but that's mid-market retail — verify per client vertical.

### 14. Strategic positioning and competitive intel
- Named competitor set in the AI-search context. Who else is cited when the category question is asked?
- Share-of-voice trend (own tooling — see § 13).
- Pricing / pitch alignment with how the category is described by LLMs (does the LLM's category framing match the brand's pitch, or is there a gap?).
- "No-click" reality strategy. Pew Jul 2025: 8% vs 15% CTR with/without AIO; only 1% click sources inside AIO. Strategy: optimise for being **named** in answers; capture action queries (signup, pricing, demo, integration-specific config) where clicks survive.
- Pipeline-stage mapping to search surface — informational queries (AIO present, optimise for citation), commercial queries (mixed, optimise for both), transactional queries (classic SERP still dominates for many verticals).
- **Crisis-response protocol**. When a negative or hallucinated brand mention surfaces in an LLM output: (1) document with screenshot + URL + date + exact prompt used; (2) determine if grounded (LLM cites a real source) or hallucinated (LLM invented the association); (3) if grounded — engage with the source publisher; (4) if hallucinated — submit vendor feedback (Google AI Overview "report", OpenAI feedback, Perplexity "report this source"), and publish a strong canonical statement on owned domain that the model can corroborate against. See `references/frameworks.md` §9 for the precedent litigation context (Lidsky & Daves, *LTL LED v. Google*).

### 15. Four-horizon action plan
- Horizonte 1 (semana 1-2): critical quick-wins. Mixed dimensions — não só técnicas. Effort + approval column.
- Horizonte 2 (semana 3-6): optimisation of existing — incluir content, entity work, medição se aplicável.
- Horizonte 3 (semana 7-12): strategic reinforcement — content clusters, digital PR campaigns, entity build-out.
- Horizonte 4 (90+ dias): long-term positioning — thought leadership, conference presence, partnerships, knowledge graph dominance.

### 16. Closing note
- Honest commercial posture. If the site does not need intervention in a given dimension, say so. Do not invent urgency.
- If only 2-3 of the 12 categories need work, be explicit that the others are already strong — clients value honesty about scope.

## Editorial voice

- PT-PT for body and client-facing prose.
- EN preserved for: technical identifiers (`hreflang`, `Schema.org/Course`, `User-agent: GPTBot`), tool names, paper titles, quoted English text.
- Numbers always with unit and date. "TTFB 173-225 ms (mediana 5 corridas, Maio 2026)" not "rápido".
- No emoji in audits or strategy work. (Daily news-feed allows section markers per the prompt.)

## Anti-patterns

The skill exists partly to prevent these:

- Citing vendor blogs as if they were studies. Profound, Peec, Otterly and Goodie publish material with obvious conflict of interest. Always flag.
- Claiming "schema X gives +Y% citations" without naming the controlled study. Ahrefs' May 2026 schema analysis (1885 vs 4000 controls) found *no* citation uplift and a 4.6% AIO decline. The schema-is-magic narrative is overcooked.
- Treating `llms.txt` as a citation lever. Google (Illyes/Mueller) does not use it. Otterly/Reboot/SE Ranking 2025 log studies show near-zero AI-bot consumption. Publish it for docs hygiene; promise nothing on inference.
- Cherry-picking the bigger CTR-drop number. Pew (Jul 2025) reports ~47% relative CTR drop with AIO; Ahrefs (Feb 2026) reports 58% for top-ranking pages. Different methodologies — name both and the dates.
- Confusing "mention" with "citation". A mention can be uncited. Vendors mix these in dashboards.
- "Top X SEO tips for 2026" energy. The skill writes audits, not listicles.
