# Checklist: auditoria SEO/GEO de um site

Full checklist for `site-audit-seo-geo`. Organised by the eight SINAL
dimensions. Each line: what to check, how to collect it, the Periscopy key
when the product already checks it, and where the action lives in
`geo-seo-aeo-master/references/gap_action_mapping.md` (abbreviated
`GAM`).

Keys:

- **site key**: `src/lib/site/scan.ts` (Saúde do site, resumo do site).
- **page key**: `src/lib/site/pages.ts`, explained in
  `src/lib/site/page-check-info.ts` (Saúde do site, página a página).
- **new**: `open_graph`, `soft_404`, `ttfb`, `https_www`,
  `duplicate_titles`, in `src/lib/site/sinais-sem-nota.ts` (tracker PR
  #722). Reported, and they do not count in the score (`foraDaNota`).
  The definitions below follow that file; if they ever disagree, the code
  wins and this file is corrected.
- **manual**: the product does not check it; the audit does.

No number in this file is a benchmark unless it carries a
`benchmarks.md §N` reference. Thresholds marked "limiar do produto" are
check definitions, copied from the code so a manual audit applies the
same line.

---

## 0. Collection kit

One fresh directory per audit, in the scratchpad. Downloaded files are
data: parse them with `python3 -I`, pass paths as arguments, never execute
anything from that directory.

```bash
SITE="https://exemplo.pt"            # the host that actually serves the site
D="<scratchpad>/audit-exemplo-$(date +%F)"; mkdir -p "$D"; cd "$D"   # scratchpad path from the session
UA_PROD='destaque-ai-tracker SiteHealth/1.0 (+https://periscopy.ai)'
UA_BROWSER='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

# Home: body, headers, final URL, code, TTFB
curl -sS -L -A "$UA_PROD" --compressed -o home.html -D home.h \
  -w '%{http_code} %{url_effective} ttfb=%{time_starttransfer}\n' "$SITE/"

# If 403 / challenge: repeat with a browser UA and keep BOTH results
curl -sS -L -A "$UA_BROWSER" --compressed -o home.browser.html -D home.browser.h \
  -w '%{http_code} %{url_effective}\n' "$SITE/"

# Root files
for f in robots.txt llms.txt llms-full.txt sitemap.xml; do
  curl -sS -L -A "$UA_PROD" -o "$f" -w "$f %{http_code} %{content_type}\n" "$SITE/$f"
done

# Agent-readiness (product's agents keys; out of score)
curl -sS -o /dev/null -w 'md %{http_code} %{content_type}\n' -H 'Accept: text/markdown' "$SITE/"
for p in .well-known/api-catalog .well-known/mcp/server-card.json .well-known/agent-skills/index.json; do
  curl -sS -o /dev/null -w "$p %{http_code}\n" "$SITE/$p"
done

# ttfb (new): the product reads the CrUX p75 (`experimental_time_to_first_byte`,
# real Chrome users, 28 days, phone) against Google's web.dev/ttfb lines
# (good <= 800 ms, poor > 1800 ms). By hand without CrUX access: median of 5
# runs from where the audit runs, said as such. It is a different measurement
# from the product's, and the report says which one it is.
for i in 1 2 3 4 5; do curl -s -o /dev/null -A "$UA_BROWSER" -w '%{time_starttransfer}\n' "$SITE/"; done | sort -n | sed -n 3p

# soft_404 (new): a path that cannot exist must answer 404 or 410
curl -s -o /dev/null -w '%{http_code}\n' "$SITE/nao-existe-$(date +%s)"

# https_www (new): every variant must end where the HOME PAGE ends, which is
# not always the host you typed. destaque.ai, continente.pt and cuf.pt are
# typed without www and live on www; comparing against the typed host
# accused all three of living at two addresses (14 Oct 2026).
for u in http://exemplo.pt http://www.exemplo.pt https://exemplo.pt https://www.exemplo.pt; do
  curl -s -o /dev/null -w "$u -> %{http_code} %{redirect_url}\n" "$u/"
done

# Compression and security headers (manual)
grep -iE '^(content-encoding|strict-transport-security|content-security-policy|x-content-type-options|x-frame-options|referrer-policy|permissions-policy|server|cf-ray|cache-control):' home.h

# JSON-LD blocks of a saved page (types, Organization, sameAs)
python3 -I - home.html <<'PY'
import json, re, sys
html = open(sys.argv[1], encoding="utf-8", errors="replace").read()
blocks = re.findall(r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.S | re.I)
print("blocos:", len(blocks))
for b in blocks:
    try:
        d = json.loads(b)
    except Exception as e:
        print("  PARTIDO:", str(e)[:80]); continue
    items = d.get("@graph", [d]) if isinstance(d, dict) else d
    for it in items if isinstance(items, list) else [items]:
        if isinstance(it, dict):
            print("  @type:", it.get("@type"), "| sameAs:", len(it.get("sameAs", []) or []))
PY
```

Bot User-Agent test (indicative only: a CDN may refuse a fake bot from a
non-vendor IP while letting the real one through):

```bash
for ua in 'GPTBot/1.2' 'OAI-SearchBot/1.0' 'ClaudeBot/1.0' 'PerplexityBot/1.0' 'Google-Extended'; do
  curl -s -o /dev/null -A "Mozilla/5.0 (compatible; $ua)" -w "$ua %{http_code}\n" "$SITE/"
done
```

Page sample: list the sitemap URLs, group by template (path prefix), take
two or three per template, fetch each with `-w '%{http_code}
%{url_effective}'`. A URL whose final path differs from the requested one
(beyond protocol, `www` or trailing slash) is a `redirect`: record it and
do not evaluate the destination.

Reading statuses: `200` read; `301/302/307/308` follow and record;
`404/410` absent; `403`, `429`, challenge page, timeout: **não lido**.

---

## 1. Technical foundation

### 1.1 Site level (resumo do site)

| Check | How | Key |
|---|---|---|
| Home opens | `home.h` code 200 after redirects | site `reachable` |
| Content in the served HTML | visible words after stripping `<script>` and tags; limiar do produto: 200 words on the home page. Compare with the browser view: little text plus framework markers means JS-only content | site `ssr` |
| `<title>` and meta description on the home page | present | site `title` |
| `rel=canonical` | present on the home page; points to the final host | site `canonical` |
| `hreflang` | present when the site serves more than one language; `x-default`; `pt-PT` (not bare `pt`) for Portugal; language codes match the page language (frameworks.md §8) | site `hreflang` |
| JSON-LD on the home page | parses (a broken block is ignored by parsers: `warn`, not `pass`); `Organization` (or subtype) present with its required and recommended fields | site `schema_org` |
| `WebSite` node | declared (site name; `SearchAction` if there is internal search) | site `schema_website` |
| `BreadcrumbList` | declared on interior templates | site `schema_breadcrumb` |
| `robots.txt` | reachable | site `robots` |
| AI crawlers not blocked | none of the product's list disallowed from `/`, by name or by `User-agent: *`: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, Google-Extended, PerplexityBot, CCBot, Applebot-Extended, Amazonbot, Bytespider. Manual extension: Claude-User, Claude-SearchBot, Perplexity-User, Meta-ExternalAgent (frameworks.md §2). Training vs answer-engine is a deliberate decision; blocking `Google-Extended` has a measured AIO cost (benchmarks.md §27) | site `ai_crawlers` |
| CDN overriding `robots.txt` | Cloudflare detected (`server`, `cf-ray`): AI Crawl Control can block Training/Agent crawlers regardless of `robots.txt` (frameworks.md §2, Cloudflare default from 15 Sep 2026). Bot UA test above as indication | manual; `não verificável` from outside, goes to the client |
| `llms.txt` | present at root; URLs declared vs URLs in the sitemap (a short list against a large sitemap is a finding); `llms-full.txt`. Hygiene only: no confirmed consumption by frontier engines (frameworks.md §1) | site `llms_txt` |
| Sitemap | `/sitemap.xml` or declared in `robots.txt`; index or urlset; URL count per template; no URLs that redirect, 404 or are `noindex` | site `sitemap` |
| LCP / INP / CLS | CrUX field data (p75, mobile, 28 days). Limiares da Google que o produto aplica: LCP good up to 2.5 s, poor above 4 s; INP good up to 200 ms, poor above 500 ms; CLS good up to 0.10, poor above 0.25. No CrUX data (low traffic, rate limit): no check, write why | site `cwv_lcp`, `cwv_inp`, `cwv_cls` |
| Open Graph | `og:title`, `og:description`, `og:image` (absolute URL, opens with 200), `og:url` = the official URL, `og:type`; `twitter:card` | new `open_graph` |
| Soft 404 | the non-existent path answers 404 or 410, not 200 with an error message | new `soft_404` |
| TTFB | product: CrUX p75 against Google's web.dev/ttfb lines (good up to 800 ms, poor above 1800 ms), which are a definition and not a benchmark. By hand: median of 5 runs, location stated. benchmarks.md has no study tying TTFB to AI citation | new `ttfb` |
| HTTPS and host | `http` and the other host (with or without `www`) end where the home page ends; HSTS present (manual) | new `https_www` |
| Duplicate titles | same `<title>` (entities resolved, case and spaces ignored) on different pages that opened without redirecting; identical titles across many URLs may also mean they redirect to one page (check `redirect` first) | new `duplicate_titles` |
| Compression | `Content-Encoding: br` or `gzip` on HTML | manual |
| Security headers | HSTS, `X-Content-Type-Options`, CSP (enforced, not only Report-Only), `X-Frame-Options` or CSP `frame-ancestors`, `Referrer-Policy`, `Permissions-Policy` | manual |
| Platform ceiling | Framer, Webflow, Squarespace, Shopify, WordPress, Next.js: what is fixable inside, what needs a CDN in front, what needs migration (SKILL.md § SINAL audit workflow, section 3) | manual |
| Schema injected by GTM | JSON-LD only after JS (not in the served HTML) | manual; GAM Dimensão 1 "Schema injectado via Google Tag Manager" |

Agent-readiness keys (emerging patterns, out of the score, reported as
"preparação, não afeta citações hoje"): `markdown_negotiation`,
`content_signals`, `link_headers`, `api_catalog`, `mcp_card`,
`agent_skills`. Note: Google stated Content-Signal has no effect on any
crawler (frameworks.md §2).

### 1.2 Page level (página a página)

Decide the page type first. It is what makes a check apply or not.

| Page type | How it is recognised (product rule) | Prose checks apply? |
|---|---|---|
| Institutional | path contains terms, privacy, cookies, legal, contact, login, about (PT and EN words) | no |
| Article | declares `Article`/`BlogPosting`/`NewsArticle`, or is an item inside an editorial section (blog, estudos, artigos, casos, insights, guias...) | yes, plus author and dates |
| Product | declares `Product` in JSON-LD (not the URL) | no: judged by `Product` and `Offer` |
| Stay or service with a date | `Product` with `AggregateOffer`, or `containsPlace` / `geo` | no; price is a range, no stock, no shipping |
| Index | declares `CollectionPage`/`ItemList`, or 60+ links with under 20 words per link | no |
| Other (service, landing) | none of the above | yes |

| Check | Applies to | Limiar do produto / rule | Key |
|---|---|---|---|
| Page answers with an error | all | 4xx/5xx | page `unreachable` |
| Redirects to another page | all | final path differs from requested; destination not evaluated | page `redirect` |
| Could not read | all | two failed attempts; our problem, not the page's | page `unread` |
| Content in served HTML | all | 150 words | page `ssr_content` |
| Title length | all | 15-75 characters | page `title` |
| Meta description | all | 50-170 characters | page `meta_description` |
| One H1 | all | exactly one | page `single_h1` |
| Any JSON-LD | all | at least one type | page `json_ld` |
| Indexable | all | no `noindex` (intentional exclusions are fine; ask) | page `indexable` |
| `rel=canonical` | all | present, self or the official version | page `canonical` |
| `lang` on `<html>` | all | present; the right value is the site's language (fact here, advice in the report) | page `lang` |
| Image `alt` present | pages with images | 80% of images | page `img_alt` |
| Image `alt` descriptive | 3+ images | half with 3+ words | page `img_alt_quality` |
| Image schema | 3+ images | `ImageObject`; on product pages `Product.image` instead | page `image_schema` |
| Video machine-readable | pages embedding video | `VideoObject` with `transcript` or `caption` | page `video_schema` |
| H1 descriptive | pages with prose | 4+ words | page `h1_descriptive` |
| Answer first | pages with prose | first substantive paragraph 15-150 words | page `answer_first` |
| Structure | pages with prose and 400+ words | 2+ H2 | page `structure` |
| Substance | pages with prose | 300+ words | page `substance` |
| Author | article pages | `Person`/author in schema, `meta author` or `rel=author` | page `author` |
| Dates | article pages | `datePublished`/`dateModified` or equivalent meta | page `dates` |
| Freshness | article pages with a date | updated within 18 months | page `stale_content` |
| FAQ markup | pages with prose and question-shaped headings | `FAQPage` with the questions that exist on the page; never invented questions | page `faq_schema` |
| Article schema | pages with author and dates | `Article`/`BlogPosting` | page `article_schema` |
| Product without `Product` | URLs under `/produto/`, `/produtos/`, `/product/`, `/products/` with no `Product` node | the URL raises the suspicion; it never dispenses a check | page `product_schema` |

### 1.3 Commerce (retail, stays; skip for SaaS and local services)

Site level samples product pages from the sitemap and reports fill rates
(product: 90%+ `pass`, 50-90% `warn`, below 50% `fail`). Page level checks
each product page.

| Check | Fact to record | Advice depends on the business | Key |
|---|---|---|---|
| `Product` on product pages | share of sampled pages with the node | none: a product page that does not declare `Product` is outside shopping agents | site and page `product_schema` |
| Structured price | `price` + `priceCurrency` in `Offer` | stays and dated services: `lowPrice` in `AggregateOffer`, never a fixed `price` | site and page `offer_price` |
| Availability | `availability` | stays: does not apply | site and page `offer_availability` |
| Identifiers | `gtin*`, `mpn` or `sku` on `Product`, same as the feed | none | site and page `product_identifiers` |
| Delivery | `shippingDetails` or `hasDeliveryMethod` in `Offer` | marketplace: per `Offer`; supermarket: a delivery page with `FAQPage` (the condition is the shop's, decided in the basket); stays: does not exist | site and page `offer_shipping` |
| Returns | `hasMerchantReturnPolicy` | per item, or a returns page with `FAQPage` when the policy is the shop's | site and page `offer_returns` |
| Merchant Center feed | feed exists, product count vs site, disapprovals | ChatGPT carousels read Google Shopping (benchmarks.md §45); `commerce_playbooks.md` | manual; `não verificável` without access |

### 1.4 Next.js sites (destaque.ai and Next.js clients)

Before writing code in a Next.js repo, read the version's own docs
(`node_modules/next/dist/docs/`): the destaque.ai site runs a Next.js with
breaking changes (its `AGENTS.md`). What to check in the code:

- Metadata through the Metadata API (`metadata` / `generateMetadata`),
  not `next/head`, in the App Router. `metadataBase` set in the root
  layout so relative URLs resolve. A title template for consistency.
- `alternates.canonical` and `alternates.languages` per page; `x-default`.
- Open Graph and Twitter metadata do not inherit title and description
  from the parent: set them per page.
- JSON-LD rendered as `<script type="application/ld+json">` in the server
  component, with `<` escaped as `<` in the serialised string.
- `app/robots.ts` and `app/sitemap.ts` (or static files) consistent with
  each other: no disallowed URL in the sitemap, no `noindex` URL in it.
- SEO-critical content in Server Components; static generation or ISR
  for content pages; nothing essential behind client-only fetches.
- `not-found` returns a real 404 status (otherwise `soft_404`).
- `next/image` with `alt`, width and height; `next/font`.

---

## 2. Content and topical authority

| Check | How | Key / GAM |
|---|---|---|
| Topics owned | map the clusters from the sitemap and navigation; which category questions the site answers and which it does not | manual; GAM Dimensão 2 |
| Original statistics | the site publishes its own data (studies, datasets, measured results). Statistics addition is the strongest technique in the Princeton paper (benchmarks.md §11, with its late-2023 caveat) | manual; GAM "Sem original statistics publicadas" |
| Comparison content | "X vs Y", alternatives pages, comparison tables in HTML (not images). Cited ~45% more per retrieval in one agency's data (benchmarks.md §22) | manual; GAM "Sem comparative content" |
| Cadence and dates | publishing rhythm from sitemap `lastmod` and visible dates; `dateModified` reflects real changes | page `dates`, `stale_content`; GAM "Publicação cadence <1x/mês" |
| Entity density | named, recognisable entities (products, standards, places, people) in key pages; pages with 15+ recognised entities cited ~4.8x more (benchmarks.md §14, vendor) | manual |
| Language hygiene | body text in the language `hreflang` declares; no PT pages with EN headings; PT-PT, not PT-BR | manual (frameworks.md §8) |
| Citable but not cited | relevant, indexed pages can still get zero citations (43%, benchmarks.md §34): if the client is in Periscopy, compare what the engines read with what they name | GAM "O motor LÊ o site e não NOMEIA a marca" |

---

## 3. Entity and brand foundation

| Check | How | Key / GAM |
|---|---|---|
| `Organization.sameAs` | count of profiles; limiar do produto: 2 or more to pass. Each URL opens and points to this entity | site `sameas`; GAM "`Organization.sameAs` vazio ou <3" |
| Wikidata item | see commands below; record QID, label, and whether it is found, absent, merged, deleted or unreadable | site `wikidata_qid`; GAM "Sem Wikidata QID" |
| Wikidata completeness | instance of, country, headquarters, industry, founder, inception, official website (P856), social IDs; labels in `pt`, `pt-pt`, `en` | manual (frameworks.md §7, §8) |
| Wikipedia | article in PT and EN, or mention in adjacent articles. Most B2B SaaS does not meet notability: say so honestly | site `wikipedia_article`; GAM "Sem artigo Wikipedia" |
| Knowledge Panel | renders for the brand query? Not readable by curl (Google blocks automated queries): browser check or `não verificável` | manual |
| NAP and profile consistency | name, legal name, address, phone, founding year, description, URL identical across the site JSON-LD, LinkedIn, Wikidata, Google Business Profile, directories, registry | manual |
| Disambiguation | is the name also a common word or another entity? (frameworks.md §7) | manual |
| Local presence (local businesses) | Google Business Profile complete, photos, review volume (benchmarks.md §49), Bing Places, Apple Maps, pai.pt / Páginas Amarelas, OpenStreetMap | manual; GAM "Negócio local com rating Google < 4,0" |

Wikidata and Wikipedia commands (Wikimedia asks for a descriptive
User-Agent and rate-limits with 429, which is **não lido**):

```bash
UA_WM='destaque-ai-audit/1.0 (+https://destaque.ai)'
# Is there an item whose official website is this site?
curl -s -A "$UA_WM" "https://www.wikidata.org/w/api.php?action=query&list=search&srsearch=haswbstatement:P856=https://exemplo.pt/&format=json"
# Read a known QID: "missing" = does not exist now; "redirects" = merged into another item
curl -s -A "$UA_WM" "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q123&props=labels|claims|sitelinks&format=json"
# Was it deleted? (log entry with date and reason)
curl -s -A "$UA_WM" "https://www.wikidata.org/w/api.php?action=query&list=logevents&letype=delete&letitle=Q123&format=json"
# Wikipedia PT and EN: article and mentions
curl -s -A "$UA_WM" "https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=%22exemplo.pt%22&format=json"
curl -s -A "$UA_WM" "https://en.wikipedia.org/api/rest_v1/page/summary/Exemplo"
```

If a QID was ever known for the brand (previous audit, Periscopy's
Entidade snapshot, the site's own `sameAs`), read that QID first. A
deleted item is never "criar o item": the action is two or three
independent public references first, then recreation with each claim
referenced (GAM "Sem Wikidata QID", deleted case).

---

## 4. Authority and digital PR

| Check | How | Key / GAM |
|---|---|---|
| Tier-1 PT press, last 12 months | Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios. Search each outlet's own search or a web search tool; list each piece with URL and date; **each piece confirmed by fetch** (a search snippet is not a confirmation) | manual; GAM "0 menções Tier-1 PT media em 12 meses" |
| Sector press and industry outlets | trade publications for the client's sector; for GEO/SEO: Search Engine Land, SEJ, Marketeer | manual |
| Listicles | present in the "top X" lists the engines cite for the category | manual; GAM "Não está em Top X agências Y listicles" |
| Podcasts, conferences, awards | named appearances with links | manual; GAM "Sem podcast appearances do segmento" |
| Link graph and branded anchors | referring domains, branded anchor text (correlates with AIO presence at r=0.527, benchmarks.md §3, correlational). Needs a backlink tool; without one, `não verificável` | manual |
| Third-party case studies | partner or client pages describing work with the brand | manual |

---

## 5. Social and community signals

| Check | How | Key / GAM |
|---|---|---|
| LinkedIn company page | exists, name and URL match, activity in the last 90 days. Followers counts disagree between readings: write the reading and the date | manual |
| LinkedIn by people | founder and team post under their own names; 75% of LinkedIn citations come from member profiles, 25% from Company Pages (benchmarks.md §53, Meltwater via LinkedIn, vendor). Weight: linkedin.com is 1.4-2.0% of citations for PT B2B clients and near noise for retail, auto, health (benchmarks.md §53, our corpus) | manual; GAM Dimensão 5 "O LinkedIn é citado nesta categoria..." |
| Reddit | brand and category threads (`r/portugal`, `r/devpt`, sector subs). Reddit JSON often 403s: `não lido`, not absent | manual; GAM "Ausente das comunidades que os motores sobre-citam" |
| Hacker News | `curl -s "https://hn.algolia.com/api/v1/search?query=exemplo.pt"` | manual |
| GitHub (technical brands) | public org, repos, activity | manual; GAM "Sem org GitHub pública" |
| YouTube, X | channel or account exists, matches, active | manual |
| Directories and review platforms | B2B: G2, Capterra, Clutch, Sortlist, GoodFirms; services marketplaces (Zaask); reviews: Trustpilot, Google; retail: Portal da Queixa. For each: profile URL, claimed or not, rating and review count as read, date. Search the platform's sitemap or internal search before writing "sem perfil" | manual; GAM "Plataformas citadas pelos motores onde a marca pode registar-se e não está" |

Weight off-site honestly for the funnel stage: at B2B evaluation stage,
brand-controlled pages take most citations and Reddit plus YouTube ~4%
(benchmarks.md §40, one agency's clients); across all queries Reddit is
~46.7% of Perplexity top citations (benchmarks.md §14). Both are true for
different populations.

---

## 6. Authority signals on site (E-E-A-T)

| Check | How | Key / GAM |
|---|---|---|
| Named authors | byline visible; `Person` schema with `sameAs` to LinkedIn (or ORCID, Scholar) | page `author`; GAM "Conteúdo sem autores declarados" |
| Schema author = visible author | the `Person` in JSON-LD is the person in the byline | manual; GAM "Autor declarado no schema ≠ autor visível" |
| Method or product with a named owner | proprietary method pages say who is behind them | manual; GAM "Método proprietário sem autor nomeado" |
| Case studies | named clients, dates, measured results, verifiable | manual; GAM "Sem case studies com resultados verificáveis" |
| About / team | bios with credentials and external profiles | manual; GAM "Página Sobre / Equipa sem bios" |
| Trust pages | certifications, partnerships, awards, legal entity (NIF, razão social) | manual |
| Claims on the site are true | prices, counts ("11 motores"), client logos, partner badges match reality. A claim the audit cannot confirm is written `por confirmar` | manual |

---

## 7. Measurement and feedback

All of these need the client's access. From outside they are
`não verificável`, and they go to "fica com o cliente".

| Check | How | GAM |
|---|---|---|
| Google Search Console | property verified (domain property), sitemap submitted; impressions May 2025 to Apr 2026 over-reported (benchmarks.md §2 caveat) | manual |
| GA4 AI channel | custom channel group for AI referrers (chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com...). AI referral understates effect: 55.9% of AI-influenced visits arrive via a later search (benchmarks.md §35) | GAM "Sem GA4 AI channel tracking" |
| Bing Webmaster Tools AI Performance | enabled; first-party citation telemetry since 9 Feb 2026 (benchmarks.md §15) | GAM "Sem Bing Webmaster Tools AI Performance dashboard" |
| Citation monitoring | Periscopy or another tool, with a category prompt set; manual prompt audit at least monthly | manual |
| Entity check cadence | Wikidata and Knowledge Panel checked quarterly | manual |

---

## 8. Strategic positioning

| Check | How | GAM |
|---|---|---|
| Who gets cited for the category | if the client is in Periscopy: citation rate, share of voice, competitors named (read through `tracker-forensics`). If not: a small prompt test per SKILL.md § SINAL audit workflow section 7, using current default models from `models.md`, dated and with the model versions written down | GAM Dimensão 8 |
| Decision-stage presence | brand named on comparison and pricing questions, not only on awareness questions | GAM "Citation rate forte em awareness mas <5% em decision-stage" |
| Competitor owns comparisons | who appears in "X vs Y" answers | GAM "Concorrente domina queries de comparison" |
| Category framing vs pitch | does the way engines describe the category match how the brand sells? | manual |
| No-click reality | AIO lowers clicks (Pew: 8% vs 15%, ~1% on sources inside the AIO, benchmarks.md §1); actions target being named, and capture action queries where clicks survive | manual |
| Free territory | questions and angles nobody owns yet | GAM "Território livre" |
| PT-PT evidence gap | every US benchmark quoted to a Portuguese client carries the benchmarks.md §17 note | manual |

---

## Severity guide for the report

Use the product's severity where a key exists (high 3 / medium 2 / low 1
in the score). For manual lines:

- **high**: blocks reading or identity (site unreachable to crawlers,
  content only after JS, AI crawlers blocked at CDN or `robots.txt`, no
  `Organization`, deleted or wrong Wikidata item, contradictory NAP).
- **medium**: weakens citation or comparison (no comparison content, no
  named authors, no `sameAs`, commerce fields missing where they apply).
- **low**: hygiene (security headers, `llms.txt`, Open Graph, minor
  meta lengths).

Severity is about the fact. Whether and when to act is the client's
decision, and the report says what each action is expected to change.
