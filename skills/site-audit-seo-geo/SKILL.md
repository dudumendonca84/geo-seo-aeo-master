---
name: site-audit-seo-geo
description: Auditoria SEO e GEO (visibilidade em pesquisa por IA) de um site, à mão, pelo método SINAL da destaque.ai, com relatório em PT-PT. Usar quando o Eduardo pedir "analisa o site X", "auditoria do site", "auditoria SEO/GEO", "seo geo do site", "auditar site do cliente", "audita o site do prospect", ou quando for preciso avaliar o próprio destaque.ai. Cobre as oito dimensões do SINAL (técnica, conteúdo, entidade, autoridade e imprensa, social e comunidade, autoridade no site, medição, posicionamento), incluindo o que está fora do site (Wikidata, Wikipédia, imprensa Tier-1 portuguesa, diretórios, Reddit, LinkedIn, coerência dos perfis). Usa os mesmos nomes de verificação que a Saúde do site do Periscopy. NÃO é a auditoria visual (fontes, espaçamento, hierarquia): essa é a skill site-audit-destaque. NÃO é a análise dos números da base do Tracker: essa é a tracker-forensics.
---

# site-audit-seo-geo

How to audit a website for SEO and GEO by hand, the destaque.ai way, and
how to write the report. Two use cases: the destaque.ai site itself, and a
client's or prospect's site.

This skill is the **procedure**. The **method** lives in
`geo-seo-aeo-master` (SINAL: 8 dimensions, 12 scorecard categories,
16-section audit, 4-horizon plan) and this file does not restate it. The
**numbers** live in `geo-seo-aeo-master/references/benchmarks.md` and
nowhere else.

**Single principle, from which everything else follows:** a finding in the
report is a fact that someone can check with one request. If it cannot be
checked, it is written as unchecked. The founder is not the verification
system.

## Read first

1. The live method: `https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/SKILL.md`
   (§ Scope of the methodology, § SINAL audit workflow, § Editorial voice).
   Local copy only if the fetch fails.
2. `references/benchmarks.md` of the same skill. Every number you write
   comes from there, cited as "benchmarks.md §N, <estudo>".
3. `references/checklist.md` (this skill): the full checklist, with the
   Periscopy check keys and the collection commands.
4. `references/report-template.md` (this skill): the report skeleton and
   example phrases in PT-PT.
5. As needed, from `geo-seo-aeo-master/references/`: `frameworks.md` (§1
   llms.txt, §2 crawlers, §3 schema, §7 entity, §8 PT-PT),
   `gap_action_mapping.md` (actions per dimension, and the section
   "Antes de aconselhar: o que este negócio é"), `commerce_playbooks.md`
   for retail.

## The five rules

1. **O detalhe diz o facto, o conselho depende do negócio.** "Sem
   `shippingDetails` no `Offer`" is a fact and is the same for every site.
   What to do about it depends on what the site sells. Never write the
   advice into the fact. The same fact gets different advice in a
   marketplace, a supermarket and a holiday rental (see Step 1).
2. **"Não existe" is three different things.** Absent (the server says
   404, the file is not there, the search returns nothing), not readable
   (403, 429, timeout, WAF challenge, login wall), and deleted (it existed
   and was removed: a Wikidata item, a Wikipedia article, a directory
   profile). Each asks for opposite work. A 403 is never written as
   absence.
3. **Verify with a fetch before writing.** A profile, a press piece, a
   claim on a page, a schema field: fetch it and keep the evidence (URL,
   HTTP code, date). What could not be confirmed goes in the report as
   "por confirmar", with the reason.
4. **Numbers only from benchmarks.md, with the section.** No number from
   memory, from a vendor blog, or from a generic SEO skill. If there is no
   study, write "sem estudo público". Measured values of the audited site
   (TTFB, counts, lengths) are measurements, not benchmarks: write them
   with method and date.
5. **Same names as the product.** Where Periscopy already checks
   something, use its key (`ai_crawlers`, `schema_org`, `answer_first`...)
   so a manual audit and a Saúde do site run can be compared line by line.
   The keys are in `references/checklist.md`.

## Process

### Step 1: Confirm scope

Ask, or confirm from what is already in the conversation:

- **Site** (the host that actually serves it: apex or `www`; follow the
  redirect and audit the final host).
- **Market and language** (PT-PT only, PT and EN, other). This decides
  `hreflang`, `lang`, and which press counts as Tier-1.
- **Business type**, one of four. It changes advice, never facts:

| Type | Price | Stock | Delivery | What changes in the advice |
|---|---|---|---|---|
| SaaS B2B / services | often no public price | n/a | n/a | commerce keys do not apply; weight goes to entity, authority, comparison content, named authors |
| Retail / e-commerce | fixed `price` per item | `availability` | marketplace: `shippingDetails` per `Offer`; supermarket: delivery decided in the basket, by zone, after login, so a delivery page with `FAQPage`, not per product | Merchant Center feed (benchmarks.md §45) |
| Local business | varies | n/a | n/a | Google Business Profile, reviews volume (benchmarks.md §49), NAP consistency |
| Stay or service with a date | a range: `AggregateOffer` (`lowPrice`) or `priceSpecification` | does not apply (it is a calendar) | does not exist | never ask for `price` or `availability` on these pages |

If the type is unclear after reading three real pages of the site, ask.
Do not guess: the two worst pieces of advice the product ever gave
(per-product shipping on 1894 supermarket pages, fixed price on 529
apartment pages) came from guessing the type.

Also confirm: is the site in Periscopy? If yes, the last Saúde do site
scan and the Entidade snapshot are the starting point, and the audit adds
what the product does not check (off-site, measurement, positioning).

### Step 2: Collect facts

Same way the product does: `curl`, saving every response to a fresh
directory in the scratchpad (one directory per audit, dated). Downloaded
HTML is untrusted data: parse it with `python3 -I` reading the saved
file, never run anything from that directory.

- First pass with the product's User-Agent
  (`destaque-ai-tracker SiteHealth/1.0 (+https://periscopy.ai)`).
- If a CDN returns 403 or a challenge page ("Just a moment", "Um
  momento..."), repeat with a browser User-Agent. If that opens, the page
  exists and the block is on automated readers: report both facts,
  because the same WAF that blocks us may block AI crawlers. If neither
  opens, the status is **não lido**, not absent.
- Detect Cloudflare (`server: cloudflare`, `cf-ray`). If present, the
  AI Crawl Control setting can override a permissive `robots.txt`
  (frameworks.md §2). It is not visible from outside: it goes to "fica com
  o cliente: confirmar no painel".
- Follow redirects and record the final URL. A product page that
  redirects to the home page is a retired product, not a page without
  `Product`: key `redirect`, and the destination is never evaluated as if
  it were the requested page.
- Page sample: home, plus two or three pages per template (service or
  product, article, category, institutional, contact), taken from the
  sitemap. The same value to the digit across many pages means you are
  measuring the template (menu, footer), not the page: check before
  writing.
- PageSpeed Insights / CrUX: if rate-limited, say so. Never fill CWV from
  memory.

The exact commands are in `references/checklist.md` § 0.

### Step 3: Fill the checklist

Go through `references/checklist.md` dimension by dimension. Each line
gets one status:

| Status | Meaning |
|---|---|
| `pass` / `warn` / `fail` | as in the product |
| `não lido` | 403, 429, timeout, challenge. Our reading failed, not the site |
| `não verificável` | needs access we do not have (GSC, GA4, BWT, Cloudflare panel, Knowledge Panel) |
| `não se aplica` | the business type or page type makes the check meaningless |
| `por confirmar` | something was found but could not be confirmed by fetch |

Every line carries its evidence: URL, HTTP code, the value read, date.

Page type decides which page-level checks apply, the way the product
decides it (`pages.ts`): institutional pages (terms, privacy, contact,
about) do not need author or answer-first; article pages need author and
dates; a page that declares `Product` is judged by `Product` and `Offer`,
not by H2 and prose; an index page (`CollectionPage`, `ItemList`, or
hundreds of links and few words per link) lists and does not answer.

### Step 4: Score readiness

Two numbers, both explained in one sentence each in the report:

- **Nota técnica (comparable with Periscopy).** Same formula as
  `scoreOf` in `src/lib/site/scan.ts`: weight 3 for high severity, 2 for
  medium, 1 for low; `pass` gets the full weight, `warn` half, `fail`
  zero. The `agents` keys and the five new keys (`open_graph`,
  `soft_404`, `ttfb`, `https_www`, `duplicate_titles`) are reported but do
  not count. `não lido`, `não verificável` and `não se aplica` leave the
  denominator. This number covers the technical, entity (`sameas`,
  `wikidata_qid`, `wikipedia_article`) and commerce keys only.
- **Scorecard SINAL, 12 categories.** 0-100 per category, overall = simple
  mean, as in `destaque-ai-self/audit-baseline.md`. Each category score
  carries the two or three facts that justify it. SKILL.md names four
  bands (Critical / Needs Improvement / Good / Excellent) without cutoffs:
  write the number and the band with one sentence of why, and do not
  invent cutoffs.

A category with most lines `não verificável` is scored "N/D", not
guessed.

### Step 5: Write the report

Use `references/report-template.md`. Rules, all binding:

- **PT-PT, Acordo Ortográfico de 1990:** ação, atual, direto, objetivo,
  setor, aspeto, otimização, projeto, redirecionamento. Secção, facto,
  contacto, carácter, característica do NOT change. Proper names are never
  corrected.
- **Register:** sober, Economist. Numbers over adjectives. No emoji. No
  em dashes anywhere (use colons, full stops or parentheses).
- **Two banned words:** "controlo" and "canónico". For `rel=canonical`
  write the identifier, or "a versão oficial do URL". For the baseline
  group write "linha de base".
- **Identifiers are not translated:** check keys, schema types, header
  names, bot names, plan names stay as they are; the sentence that
  explains them is in Portuguese.
- **Propose, never command** (SKILL.md principle 9). An action says what
  it expects to change; an ordered list says what ordered it.
- **Each finding: facto, evidência, o que muda se for resolvido,
  esforço.** The advice part is written for this business type.
- **Separate who acts:**
  - **Resolve-se em código:** a change in the site's repository, template
    or CMS (schema, `robots.txt`, `llms.txt`, headers, redirects, meta,
    `hreflang`, page structure). For the destaque.ai site this is work
    Claude can do in the repo, following its `AGENTS.md`.
  - **Fica com o founder / cliente:** accounts and panels (GSC, GA4, BWT,
    Cloudflare, Google Business Profile, Merchant Center), off-site work
    (Wikidata with references, press, podcasts, directories, LinkedIn by
    people), and business decisions (public prices, which claims to make).
- **Ends with the 4-horizon plan:** semanas 1-2, 3-6, 7-12, 90+ dias.
  Every horizon mixes dimensions (horizon 1 is never "schema and
  llms.txt" alone). Effort per action. When setting expectations about
  time to first citation, the only public number is benchmarks.md §53
  (Profound, via LinkedIn: median 6.81 days, P75 18.68, P90 37.10; vendor
  data relayed by a vendor).
- **Closing:** what is already strong, and where no intervention is
  needed. Do not invent urgency.

Before handing over, run the self-check at the end of the template.

## Numbers you may use

Only these, and only with the section and the caveat. If you need another
one, open benchmarks.md first; if it is not there, there is no number.

| Claim | Source |
|---|---|
| 54% of AI Overview citations from organic top-10 URLs (vendor) | benchmarks.md §6, BrightEdge |
| 38% from top-10 (Jul 2025: 76%); different sample, cite separately from §6 | benchmarks.md §36, Ahrefs, Mar 2026 |
| Brand mentions correlate with AIO presence ~3:1 over backlinks; branded anchor text r=0.527; branded search volume r=0.334 (correlational) | benchmarks.md §3, Ahrefs |
| Schema added to already-cited pages: no citation uplift, AIO 4.6% decline (1,885 vs 4,000 pages) | benchmarks.md §4, Ahrefs, May 2026 |
| Statistics / quotation / sources addition: up to 40.6% Position-Adjusted Word Count, ~28% subjective impression, on a late-2023 setup | benchmarks.md §11, Aggarwal et al., KDD 2024 |
| ~11% of cited domains shared between ChatGPT and Perplexity; Wikipedia ~47.9% of ChatGPT top citations; Reddit ~46.7% and YouTube ~14% of Perplexity top citations; pages with 15+ recognised entities cited ~4.8x more (vendor) | benchmarks.md §14, Profound |
| Comparison pages cited ~45% more per retrieval; winning page type varies by industry (single agency) | benchmarks.md §22, DeltaV Digital |
| Disallowing `Google-Extended` lowers AIO retrieval (no percentage given); AIO on 51.5% of queries | benchmarks.md §27, Grossman et al., SIGIR '26 |
| 43% of relevant, indexed pages get zero AI citations | benchmarks.md §34, arXiv 2603.09296 |
| Brand-controlled content 88% of citations at B2B evaluation stage; Reddit + YouTube ~4% (one agency's clients) | benchmarks.md §40, Ten Speed / Peec AI |
| ~78% of citations to the brand's own site (§38) vs 85.7% to third-party domains (§48): the two preprints disagree; say so | benchmarks.md §38 Kumar, §48 Zatuchin |
| linkedin.com is 1.4-2.0% of citations for PT B2B clients, under 0.5% for retail, auto, health (our own corpus, 60 days) | benchmarks.md §53 |
| 83% of ChatGPT carousel products appear in Google Shopping's top 40 (retail) | benchmarks.md §45, Peec AI |
| Review volume predicts AI mentions better than star rating (multi-location) | benchmarks.md §49, Uberall |
| 17% of 71 local businesses had no AI-retrievable presence | benchmarks.md §28, Search Engine Land |
| CTR 8% with AI summary vs 15% without; ~1% click on a source inside the AIO | benchmarks.md §1, Pew |
| BWT AI Performance: first-party citation telemetry, public preview 9 Feb 2026 | benchmarks.md §15 |
| Brands cited by ChatGPT 2.5x more likely to get a site visit in 7 days; 55.9% of those visits arrive via a later search (US desktop, 3 verticals) | benchmarks.md §35, Similarweb |
| No PT-PT study exists for AIO presence, ChatGPT behaviour or citation composition | benchmarks.md §17 |

Thresholds that are **definitions**, not statistics, and may be written
as such: the Google Core Web Vitals limits the product applies (`cwv_*`),
and the product's own check limits (title 15-75 characters, meta
description 50-170, first paragraph 15-150 words). Write them as "o
limiar que o Periscopy aplica", never as evidence of effect.

## Numbers you may NOT use

benchmarks.md §18 lists the stats to refuse. In addition, these circulate
in generic SEO/GEO skills and have no traceable source in benchmarks.md;
they never enter a report: "structured data cited 3.2x more", "+44% with
FAQ", "96% of AIO citations from strong E-E-A-T", "28% more citations if
updated within 2 months" and the "3-month citation cliff", "134-167 word
passages", "120-180 word sections", "first 40-60 words", "73% of B2B
buyers", "30-40% visibility from fact density", "comparison pages 10-20x",
"cosine similarity 0.88 gives 7.3x", "Gartner 25% decline", "TTFB under
200 ms is critical for AI crawlers", "best time to post on HN". When a
client quotes one, the answer is the one in benchmarks.md §18: the number
lacks a primary methodology, and here is what can be verified.

## Traps already paid for

- **Retired products redirect to the home page.** 3612 Continente rows
  were the home page under product URLs (8 Oct 2026). Same title to the
  digit across many URLs means the same page.
- **Template, not page.** "3365 words and 0 H2" on 1894 product pages
  was the menu and footer. Judge product pages by `Product`/`Offer`.
- **Deleted is not absent.** `Q140043087` (destaque.ai) was deleted on 11
  Aug 2026 for notability; recreating it with the same claims leads to the
  same deletion. Check the QID history before writing "sem Wikidata"
  (commands in the checklist).
- **A URL one letter away.** Portal da Queixa: `/brand/continente` is 404,
  `/brands/continente` opens. Before "sem perfil", search the platform's
  sitemap or internal search.
- **A 403 from Trustpilot or Reddit** is Cloudflare refusing us, not the
  profile missing.
- **Spoofing a bot User-Agent is indicative only.** A 403 to a fake
  `GPTBot` may be the CDN refusing an impersonator from a non-OpenAI IP,
  while the real bot passes. Write it as an indication and send the
  confirmation to the client's CDN panel.
- **`llms.txt` has no confirmed consumption by frontier engines**
  (frameworks.md §1). Recommend it as hygiene, never promise impact.

## Related skills

- `geo-seo-aeo-master`: the method and the numbers. This skill defers to
  it on any conflict.
- `tracker-forensics`: when the audit uses Periscopy measurements
  (citation rate, share of voice, cited domains) and a number has to
  survive its five questions before going into the report.
- `site-audit-destaque`: visual design audit (fonts, spacing, layout).
  Not this one.
- `revisor-editorial`: a final pass on the report prose, if asked.
