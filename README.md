# geo-seo-aeo-master

## 📦 Quick upload (Claude.ai sem Cowork)

**Click aqui para baixar o zip pronto a upload:**

👉 https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fdudumendonca84%2Fgeo-seo-aeo-master%2Ftree%2Fmain%2Fskills%2Fgeo-seo-aeo-master

Depois: Claude → Customize → Habilidades → "⋮" no `geo-seo-aeo-master` → **Eliminar** → **+** → **Fazer upload** → escolhe o zip baixado.

Re-faz isto sempre que quiseres puxar news frescas (Routine actualiza o git diariamente às 8:00 Lisboa).

---

Canonical **plugin marketplace** for **destaque.ai** — single source of truth for GEO (Generative Engine Optimization), AEO (Answer Engine Optimization) and classical SEO, focused on B2B SaaS in Portugal.

## What it is

A Claude Code plugin marketplace containing one plugin (`geo-seo-aeo-master`) that exposes a skill calibrated to produce destaque.ai-house technical audits — benchmarked against multiple quality references (3HASH audit format, Princeton GEO methodology, BrightEdge/Ahrefs/Profound research methodology, Kalicube entity audit framework). Synthesises across them; not constrained to any single source.

```
.claude-plugin/
  marketplace.json             Plugin marketplace manifest
  plugin.json                  Plugin manifest
README.md                      This file
skills/
  geo-seo-aeo-master/
    SKILL.md                   Identity, principles, audit workflow
    references/
      frameworks.md            llms.txt, AI crawler matrix, Schema.org for AI,
                               E-E-A-T, RAG mechanics by engine, Princeton GEO,
                               entity-based optimization, PT-PT, adversarial
      tools.md                 Profound · Peec AI · Otterly · Goodie · Daydream
                               Surfer · Ahrefs Brand Radar · Semrush AI Toolkit
      metrics.md               Citation rate, SoV, AI-attributed traffic, PAWC;
                               GSC/GA4/Bing Webmaster Tools current state
      benchmarks.md            Public studies with hard numbers (Pew, Ahrefs,
                               BrightEdge, Semrush, Similarweb, NetElixir,
                               Aggarwal et al., Seer); flagged stats NOT to cite
      models.md                LLM models tracker per vendor (OpenAI, Anthropic,
                               Google, Microsoft, Perplexity, Meta, xAI, DeepSeek,
                               Mistral) + vendor behavior changes
    daily-agent/
      daily-prompt.md          Instructions for the daily research agent
      news-feed.md             Auto-updated by Claude Code Web Routine, 08:00 Lisboa
      execution-log.md         Run log
      drafts/                  Weekly drafts (Fridays only)
    destaque-ai-self/
      audit-baseline.md        Current technical audit of destaque.ai (destaque.ai
                               house format, auto-updated weekly Mondays 09:00 Lisboa)
      improvements-backlog.md  Prioritized list of improvements, with status,
                               effort, origin (audit / news / external request)
      audit-history.md         Deltas per weekly execution
```

## Editorial bar

The skill is calibrated against multiple quality benchmarks:

- **3HASH audit format** (Eduardo's auditing brand, FortuneWeek — Unipessoal Lda) — concrete example of category scoring + 4-horizon action plan.
- **Princeton GEO methodology** (Aggarwal et al., KDD 2024) — academic standard for evaluating content against generative engines.
- **BrightEdge / Ahrefs / Profound research methodology** — sample-size + measurement + caveat reporting.
- **Kalicube entity-based audit framework** — Wikidata / Knowledge Panel / sameAs as entity baseline.

The skill synthesises across these; **3HASH is benchmarking, not the sole source of truth**. Sober, primary-source-anchored, numbers over adjectives, no hype, honest about uncertainty. See `skills/geo-seo-aeo-master/SKILL.md` for the full audit format and editorial voice.

Anti-patterns explicitly prohibited:
- Citing vendor blogs as if they were studies.
- Claiming "schema X gives +Y% citations" without naming the controlled study.
- Treating `llms.txt` as a citation lever (Google does not consume it; near-zero bot pickup in 2025 log studies).
- Confusing "mention" with "citation".
- Top-10 listicle energy.

## Install

### Claude Desktop / Claude Code

```shell
/plugin marketplace add dudumendonca84/geo-seo-aeo-master
/plugin install geo-seo-aeo-master@destaque-ai
```

After install, restart Claude or run `/reload-plugins`. The skill is then available — Claude auto-loads `SKILL.md` and pulls references on demand.

**Auto-sync.** Third-party marketplaces have auto-update **disabled by default**. Enable in `/plugin` → **Marketplaces** → select `destaque-ai` → **Enable auto-update**. With auto-update on, every Claude Code start refreshes the marketplace and applies updates.

### Claude.ai (web) — fallback as Skill

The web UI does not support marketplace install. To use the skill in Claude.ai:

1. Download just the skill subfolder (Claude.ai requires `SKILL.md` at zip root, not nested):
   👉 https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fdudumendonca84%2Fgeo-seo-aeo-master%2Ftree%2Fmain%2Fskills%2Fgeo-seo-aeo-master
2. Claude.ai → **Customize** → **Habilidades** → **+** → **Fazer upload de uma habilidade**
3. Upload the zip from step 1. The full repo zip will be rejected because `SKILL.md` is nested inside `skills/geo-seo-aeo-master/`.

Confirmed working as of May 2026. Note: Claude.ai web does not auto-sync uploaded skills. Re-upload weekly (or whenever you want fresh news) to pick up daily-agent updates from the git repo.

## Daily research agent — Claude Code Web Routine

A **Claude Code Web Routine** named `geo-seo-news-daily` runs every day at **08:00 Lisboa** on Anthropic's infrastructure. It:

1. Reads `skills/geo-seo-aeo-master/daily-agent/daily-prompt.md` from this repo.
2. Researches news from the last 24-48h on AI search and SEO (Tier 1 primary sources: Google Search Blog, OpenAI, Anthropic, DeepMind, Bing, Perplexity).
3. Filters for announcements + studies with hard data + confirmed algorithmic changes + academic papers; rejects opinion, listicles, hype, prediction posts.
4. Prepends a dated entry to `skills/geo-seo-aeo-master/daily-agent/news-feed.md`.
5. Logs the run in `skills/geo-seo-aeo-master/daily-agent/execution-log.md`.
6. **Only on Fridays:** generates three drafts in `skills/geo-seo-aeo-master/daily-agent/drafts/YYYY-MM-DD-weekly.md` — LinkedIn (~200 words), blog (~1500 words), Twitter thread (~10 tweets).
7. Commits and pushes the changes directly to `main`. The next time Claude Code starts (with auto-update on), the marketplace pulls the new news entry into installed skill.

### Routine setup

In Claude Code Web → Routines → New routine:

- **Name:** `geo-seo-news-daily`
- **Schedule:** Daily at 08:00 (Europe/Lisbon)
- **Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
- **Prompt:**
  ```
  Lê o ficheiro skills/geo-seo-aeo-master/daily-agent/daily-prompt.md deste repo e segue todas as instruções nele descritas. Substitui {{TODAY}} pela data de hoje (YYYY-MM-DD, timezone Europe/Lisbon). No fim, commit + push directo a main com mensagem "daily: YYYY-MM-DD news update".
  ```

## Use in conversations

Examples that should trigger correct skill use:

- "How do I rank in Google AI Overviews?" → loads `frameworks.md` (RAG mechanics) + `benchmarks.md` (BrightEdge top-10 finding).
- "Which AI visibility tool should I buy for a Portuguese B2B SaaS?" → loads `tools.md`.
- "Audit destaque.ai's website" → uses the audit workflow in `SKILL.md`.
- "What changed in AI search this week?" → loads `daily-agent/news-feed.md`.

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

- `skills/geo-seo-aeo-master/daily-agent/news-feed.md` updates daily (automatic, via Routine).
- `references/` files updated on substantive change to the field — see "Maintenance" section at the bottom of each file. Last full refresh: 23 May 2026.

## License

MIT for the structure and prompts in this repo. The references synthesise public material — every non-trivial claim cites its source. Vendor data flagged as such.

---

*Built by Eduardo Mendonça (destaque.ai) with Claude Code, May 2026.*
