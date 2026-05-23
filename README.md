# geo-seo-aeo-master

Canonical skill for **destaque.ai** — the single source of truth for GEO (Generative Engine Optimization), AEO (Answer Engine Optimization) and classical SEO, focused on B2B SaaS in Portugal.

## What it is

Five reference documents plus a self-updating news feed, designed to make any operator (human or Claude agent) capable of producing a 3HASH-grade technical audit.

```
SKILL.md                       Identity, principles, audit workflow
README.md                      This file
references/
  frameworks.md                llms.txt, AI crawler matrix, Schema.org for AI,
                               E-E-A-T, RAG mechanics by engine, Princeton GEO,
                               entity-based optimization, PT-PT, adversarial
  tools.md                     Profound · Peec AI · Otterly · Goodie · Daydream
                               Surfer · Ahrefs Brand Radar · Semrush AI Toolkit
  metrics.md                   Citation rate, SoV, AI-attributed traffic,
                               PAWC; GSC/GA4/Bing Webmaster Tools current state
  benchmarks.md                Public studies with hard numbers (Pew, Ahrefs,
                               BrightEdge, Semrush, Similarweb, NetElixir,
                               Aggarwal et al., Seer); flagged stats NOT to cite
daily-agent/
  daily-prompt.md              Instructions for the daily research agent
  news-feed.md                 Auto-updated 07:00 UTC daily
  execution-log.md             Run log
  drafts/                      Weekly drafts (Fridays only)
.github/workflows/
  daily-news.yml               Cron + workflow_dispatch
```

## Editorial bar

The skill is calibrated to produce work of the calibre of the **3HASH technical audit** (Eduardo's other brand, FortuneWeek — Unipessoal Lda). Sober, primary-source-anchored, numbers over adjectives, no hype, honest about uncertainty. See `SKILL.md` for the full audit template and editorial voice.

Anti-patterns explicitly prohibited:
- Citing vendor blogs as if they were studies.
- Claiming "schema X gives +Y% citations" without naming the controlled study.
- Treating `llms.txt` as a citation lever (Google does not consume it; near-zero bot pickup in 2025 log studies).
- Confusing "mention" with "citation".
- Top-10 listicle energy.

## Daily research agent

A GitHub Action runs `anthropics/claude-code-action@v1` every day at **07:00 UTC** (08:00 Lisboa in summer, 07:00 Lisboa in winter).

What it does:
1. Researches news from the last 24-48h on AI search and SEO (Tier 1 primary sources: Google Search Blog, OpenAI, Anthropic, DeepMind, Bing, Perplexity).
2. Filters for announcements + studies with hard data + confirmed algorithmic changes + academic papers; rejects opinion, listicles, hype, prediction posts.
3. Prepends a dated entry to `daily-agent/news-feed.md`.
4. Logs the run in `daily-agent/execution-log.md`.
5. **Only on Fridays:** generates three drafts in `daily-agent/drafts/YYYY-MM-DD-weekly.md` — LinkedIn (~200 words), blog (~1500 words), Twitter thread (~10 tweets).
6. Commits and pushes the changes.

Manual trigger: `Actions → Daily GEO/SEO/AEO news → Run workflow`.

## Setup (one-time)

### 1. `CLAUDE_CODE_OAUTH_TOKEN`

In your local Claude Code terminal:

```bash
/install-github-app
```

Select this repo (`dudumendonca84/geo-seo-aeo-master`). The command creates the `CLAUDE_CODE_OAUTH_TOKEN` secret in the repo, tied to your Claude Max subscription. Cost: €0 — the action consumes your subscription quota, not API credits.

### 2. Verify the workflow

`Actions → Daily GEO/SEO/AEO news → Run workflow` — manual dispatch.

Confirm the run goes green and that `daily-agent/news-feed.md` has a new dated entry.

## Install in Claude Desktop

1. Claude Desktop → **Customize** → **Skills**
2. **+ Personal plugins**
3. Paste this repo URL: `https://github.com/dudumendonca84/geo-seo-aeo-master`
4. **Sync**

The skill appears as `geo-seo-aeo-master`. Claude loads `SKILL.md` automatically and pulls references on demand. Re-sync whenever you want to pull updates (or periodically — the daily agent updates `news-feed.md` every morning).

## Use in claude.ai conversations

Reference the skill by name, or paste the relevant section URL. Examples that should trigger correct skill use:

- "How do I rank in Google AI Overviews?" → loads `frameworks.md` (RAG mechanics) + `benchmarks.md` (BrightEdge top-10 finding).
- "Which AI visibility tool should I buy for a Portuguese B2B SaaS?" → loads `tools.md`.
- "Audit destaque.ai's website" → uses the audit workflow in `SKILL.md`.
- "What changed in AI search this week?" → loads `daily-agent/news-feed.md`.

## Consumption by other systems

- **Claude Desktop.** Via Personal Plugins → Sync (above).
- **claude.ai conversations.** Manual reference or skill load.
- **Deck Builder** (planned). Will fetch `references/*.md` directly via raw GitHub URLs. The flat markdown structure is designed to be parsed without extra tooling.
- **CI / agent scripts** (planned). Can clone the repo and read references as plain markdown.

## Why this exists

Tools like Profound, Peec AI, Otterly, Ahrefs Brand Radar and Semrush AI Toolkit measure AI visibility. **None of them produce the integrated technical audit** that combines TTFB measurement, HTTP compression analysis, Schema coverage gap analysis against actual templates, robots.txt AI-crawler matrix, llms.txt URL coverage, platform-ceiling analysis (Framer, Webflow, Squarespace), and a 4-horizon action plan with effort estimates.

That synthesis is the destaque.ai role. This skill encodes the knowledge that makes it possible.

## Cost

- GitHub Actions on a public repo: €0.
- Claude Code Action via Claude Max OAuth: €0 (uses subscription, not API credits).
- **Total: €0 / month.**

## Roadmap

- [ ] Deck Builder integration (consume `references/` via raw fetch).
- [ ] Optional Resend digest (weekly summary email, Fridays).
- [ ] Internal metric: track citations of destaque.ai itself across LLMs (eat own dog food).
- [ ] PT-PT-specific benchmark study (the documented evidence gap in `benchmarks.md` §17).

## Maintenance

- `daily-agent/news-feed.md` updates daily (automatic).
- `references/` files updated on substantive change to the field — see "Maintenance" section at the bottom of each file. Last full refresh: 23 May 2026.

## License

MIT for the structure and prompts in this repo. The references synthesise public material — every non-trivial claim cites its source. Vendor data flagged as such.

---

*Built by Eduardo Mendonça (destaque.ai) with Claude Code, May 2026.*
