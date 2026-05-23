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
  news-feed.md                 Auto-updated by Claude Code Web Routine, 08:00 Lisboa
  execution-log.md             Run log
  drafts/                      Weekly drafts (Fridays only)
```

## Editorial bar

The skill is calibrated to produce work of the calibre of the **3HASH technical audit** (Eduardo's other brand, FortuneWeek — Unipessoal Lda). Sober, primary-source-anchored, numbers over adjectives, no hype, honest about uncertainty. See `SKILL.md` for the full audit template and editorial voice.

Anti-patterns explicitly prohibited:
- Citing vendor blogs as if they were studies.
- Claiming "schema X gives +Y% citations" without naming the controlled study.
- Treating `llms.txt` as a citation lever (Google does not consume it; near-zero bot pickup in 2025 log studies).
- Confusing "mention" with "citation".
- Top-10 listicle energy.

## Daily research agent — Claude Code Web Routine

A **Claude Code Web Routine** named `geo-seo-news-daily` runs every day at **08:00 Lisboa** on Anthropic's infrastructure. It:

1. Reads `daily-agent/daily-prompt.md` from this repo.
2. Researches news from the last 24-48h on AI search and SEO (Tier 1 primary sources: Google Search Blog, OpenAI, Anthropic, DeepMind, Bing, Perplexity).
3. Filters for announcements + studies with hard data + confirmed algorithmic changes + academic papers; rejects opinion, listicles, hype, prediction posts.
4. Prepends a dated entry to `daily-agent/news-feed.md`.
5. Logs the run in `daily-agent/execution-log.md`.
6. **Only on Fridays:** generates three drafts in `daily-agent/drafts/YYYY-MM-DD-weekly.md` — LinkedIn (~200 words), blog (~1500 words), Twitter thread (~10 tweets).
7. Commits and pushes the changes directly to `main`.

### Routine setup

In Claude Code Web → Routines → New routine:

- **Name:** `geo-seo-news-daily`
- **Schedule:** Daily at 08:00 (Europe/Lisbon)
- **Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
- **Prompt:**
  ```
  Lê o ficheiro daily-agent/daily-prompt.md deste repo e segue todas as instruções nele descritas. Substitui {{TODAY}} pela data de hoje (YYYY-MM-DD, timezone Europe/Lisbon). No fim, commit + push directo a main com mensagem "daily: YYYY-MM-DD news update".
  ```

### Why Routines instead of GitHub Actions

The original plan was a GitHub Action calling `anthropics/claude-code-action@v1`. The action was abandoned because:

- It does not accept `push` as a trigger event (only `schedule`, `workflow_dispatch`, PR/issue/comment events).
- OAuth token setup requires Claude Code CLI locally, an awkward dependency for Desktop-only users.
- The action's OIDC + workflow validation flow is brittle for new repos.

Claude Code Web Routines run on Anthropic's infrastructure with auth and repo access already configured — no GitHub secrets, no OIDC, no CLI dependency. The user's existing routines (`changelog-daily`, `audit-onepagers-daily`, etc.) use the same mechanism.

## Install in Claude Desktop

1. Claude Desktop → **Customize** → **Skills**
2. **+ Personal plugins**
3. Paste this repo URL: `https://github.com/dudumendonca84/geo-seo-aeo-master`
4. **Sync**

The skill appears as `geo-seo-aeo-master`. Claude loads `SKILL.md` automatically and pulls references on demand.

**Re-sync to pull updates** (Claude Desktop does not auto-refresh Personal Plugins, [#52967](https://github.com/anthropics/claude-code/issues/52967)):
- Weekly re-sync is enough for the `references/` (they only change on substantive field updates).
- For real-time news, paste the raw URL into the conversation:
  `https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/daily-agent/news-feed.md`

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

## Why this exists

Tools like Profound, Peec AI, Otterly, Ahrefs Brand Radar and Semrush AI Toolkit measure AI visibility. **None of them produce the integrated technical audit** that combines TTFB measurement, HTTP compression analysis, Schema coverage gap analysis against actual templates, robots.txt AI-crawler matrix, llms.txt URL coverage, platform-ceiling analysis (Framer, Webflow, Squarespace), and a 4-horizon action plan with effort estimates.

That synthesis is the destaque.ai role. This skill encodes the knowledge that makes it possible.

## Cost

- Claude Code Web Routine: included in Claude Max subscription (15 free remote executions per day; daily-news uses 1).
- GitHub public repo hosting: €0.
- **Total: €0 / month.**

## Roadmap

- [ ] Deck Builder integration (consume `references/` via raw fetch).
- [ ] Optional Resend digest (weekly summary email, Fridays).
- [ ] Internal metric: track citations of destaque.ai itself across LLMs (eat own dog food).
- [ ] PT-PT-specific benchmark study (the documented evidence gap in `benchmarks.md` §17).

## Maintenance

- `daily-agent/news-feed.md` updates daily (automatic, via Routine).
- `references/` files updated on substantive change to the field — see "Maintenance" section at the bottom of each file. Last full refresh: 23 May 2026.

## License

MIT for the structure and prompts in this repo. The references synthesise public material — every non-trivial claim cites its source. Vendor data flagged as such.

---

*Built by Eduardo Mendonça (destaque.ai) with Claude Code, May 2026.*
