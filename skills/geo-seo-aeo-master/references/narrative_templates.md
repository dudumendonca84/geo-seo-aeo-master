# Narrative templates — editorial structure for Tracker outputs

Reference for `geo-seo-aeo-master`. Used by the Tracker (`askWithSkill('generate_narrative', {…})`) to produce the prose blocks the client actually reads: weekly "Top 3 changes", weekly "Next actions", monthly digest, and quarterly review. Used by the Deck Builder for proposal copy that summarises baseline findings.

These are not boilerplate. They are *structural skeletons* — the data fills them. The editorial voice is enforced via the principles in `SKILL.md` §115 (Economist register, no hype). The templates here are about *what to say in what order*, not phrasing.

Last refresh: 25 May 2026.

---

## 1. Weekly "Top 3 changes" (Tracker dashboard banner + email)

**When**: every Monday after the weekly audit completes.
**Length**: 3 items, 2-3 sentences each. Max ~120 words total.
**Anchor input**: the alert list filtered to `critical` and `notable` severities (`alert_thresholds.md`), ranked by severity then by absolute impact.

### Structure per item

```
[Direction marker] [Metric] [Magnitude] — [Where it happened]
[Implication or context]. [Source / drill-down pointer].
```

- **Direction marker** is a single word/phrase: *Subida*, *Descida*, *Entrada*, *Saída*, *Nova*. No emoji.
- **Metric** is named in canonical form (`citation rate`, `share of voice`, `posição média`).
- **Magnitude** uses both pp and % where useful, with the previous and current value.
- **Where it happened**: engine + category + intent_stage if relevant, otherwise just engine.
- **Implication or context**: one sentence anchoring the change to a candidate root cause from `gap_action_mapping.md`. No speculation beyond what the data supports.
- **Source pointer**: a deep-link to the prompt or engine drill-down. Plain text, not "click here".

### Worked example

> **Descida**: share of voice de 29% para 24% (Δ −5 pp) na categoria *direct_comparison*, motor Perplexity.
> Coincide com a entrada de **3HASH** no top-3 desta categoria (primeira vez em 8 semanas). Detalhe em `/competitors`.
>
> **Subida**: citation rate global de 22% para 28% (Δ +6 pp, +27% rel), liderada por motor ChatGPT.
> Atribuível à indexação do estudo PT-PT publicado em 14/05. Detalhe em `/engines/chatgpt`.
>
> **Entrada**: nova marca *Acme.pt* aparece em 4 prompts de *local_recommendation* (não tinha aparecido nas 4 semanas anteriores).
> Aguarda classificação peer / adjacente. Detalhe em `/competitors`.

### Anti-patterns specific to this block

- Speculating about *causes* the data cannot support ("provavelmente porque o concorrente publicou X").
- Generic encouragement ("continue o bom trabalho"). Not the voice.
- Recommending action *inside* this block — actions live in the next block.
- Showing 3 items when fewer than 3 changes are notable. If only 2 critical changes happened, the third item must be marked `informational` or omitted with the note "Sem terceira mudança notável esta semana." Padding erodes trust.

## 2. Weekly "Próximas acções" (next 1-2 weeks)

**When**: same email / banner as Top 3 changes.
**Length**: 3 actions max, 1-2 sentences each.
**Anchor input**: `gap_action_mapping.md` filtered to gaps active *this week*, ordered by (horizon = H1) > (severity tied to a critical alert) > (effort, smaller first), and capped at 3 to avoid overwhelming the client.

### Structure per action

```
[Action verb + object] — [Owner] · [Effort] · [Horizon]
[One sentence on why this is the action now]. [Evidence reference].
```

- **Action verb + object**: imperative, concrete. *"Adicionar `llms.txt`"*, *"Publicar comparação destaque.ai vs 3HASH"*. Not *"considerar"*, not *"avaliar a possibilidade de"*.
- **Owner**: *destaque.ai* / *equipa do cliente* / *parceiro terceiro*.
- **Effort**: XS / S / M / L per `gap_action_mapping.md` §6.
- **Horizon**: H1 / H2 / H3 / H4.
- **Why now**: a single sentence linking the action to a specific gap the Tracker is showing. No theory unconnected to this week's data.
- **Evidence**: `gap_action_mapping.md §X` or the metric drill-down URL.

### Worked example

> **Adicionar `llms.txt` e `llms-full.txt`** — equipa do cliente · S · H1
> Coberto em `gap_action_mapping.md §1`. Robots.txt já permite ClaudeBot e GPTBot; falta o ficheiro de índice. Não promete subida de citação — frame de docs hygiene.
>
> **Publicar página comparativa destaque.ai vs 3HASH** — destaque.ai · M · H2
> A descida em *direct_comparison* desta semana é o gatilho directo. Ver `gap_action_mapping.md §2`.
>
> **Criar QID no Wikidata** — destaque.ai · S · H1
> Pré-requisito para Knowledge Panel a médio prazo; não tem ainda. Ver `gap_action_mapping.md §3`.

### Anti-patterns

- Listing 8 actions. The cap of 3 is intentional — clients act on what's prioritised, not on what's catalogued.
- Repeating actions from the previous week without explicit acknowledgement ("ainda pendente da semana anterior").
- Generic actions detached from this week's specific data ("publicar mais conteúdo").

## 3. Monthly digest

**When**: first Monday of each month.
**Length**: ~600 words, ~3-4 sections.
**Audience**: the client's executive sponsor (CIO, Head of Marketing, founder) — *not* the operational owner of each action.

### Structure

```
## Resumo do mês de {{month_name}}

[3-sentence executive summary: where the brand stands relative to where it was 4 weeks ago.]

## Onde estamos

[2 paragraphs. Aggregate metrics (CR, SoV, position) with values for week 1 and week 4.
Comparison to baseline if there is one (e.g. proposta inicial). Engine breakdown one line each.]

## O que mudou

[2-3 paragraphs. The 3-5 most material changes during the month — pull from weekly Top 3 archives.
Don't repeat the weekly format; synthesise into narrative. Each material change ties to a Dimension.]

## Acções concluídas neste mês

[Bulleted list. Items the client team or destaque.ai marked completed in the audit history.
Empty list is acceptable — say "Nenhuma acção H1 concluída este mês" and flag for the next call.]

## Próximas 4 semanas

[3-4 actions, horizon mix. This is a recapping of weekly Próximas acções, but consolidated
to the executive level — no "this Tuesday", more "in the next 4 weeks".]

## Anexo metodológico

[Two sentences. "Auditoria semanal com 30 prompts × 7 motores LLM (X total chamadas).
Métricas calculadas conforme `metrics.md` da skill canónica. Dados crus disponíveis em /history."]
```

### Voice for this block

The executive sponsor is reading on a phone between meetings. Cut every adjective that earns no information. *"Subida significativa"* → *"+6 pp"*. *"Tendência preocupante"* → *"em descida há 4 semanas"*. The data carries the meaning.

## 4. Quarterly review

**When**: every 13 weeks, replaces the monthly digest of that week.
**Length**: ~1500 words, structured as a mini-audit retrospective.
**Audience**: executive sponsor + the operational owner together.

### Structure

```
## Q{{n}} — {{period_label}}

### 1. Movimento agregado
[Citation rate, SoV, position trajectory over 13 weeks. Three charts (CR / SoV / position).
One paragraph framing the quarter — was it growth, defence, plateau, recovery?]

### 2. Concorrentes
[Who moved up, who moved down. Use the peer set from `competitor_filtering.md`, not the
adjacent buckets. Two paragraphs.]

### 3. Por dimensão SINAL
[8 mini-sections, 1-2 sentences each. What happened in each of the 8 dimensions, or
"nada material" with what that means. The 8-dimension scan is the structural rigour
that distinguishes a quarterly from a monthly.]

### 4. Acções concluídas e em curso
[Inventory. Acknowledge what shipped, what slipped, what blocked.]

### 5. Hipóteses para o próximo trimestre
[2-3 hypotheses, framed as testable. "Se publicarmos a página comparativa em H1, esperamos
movimento em direct_comparison até semana 6 do trimestre." Hypotheses, not promises.]

### 6. Anexo
[Methodology note (same as monthly). Plus a single paragraph on any methodology change
in the quarter — e.g. "Em semana 7 mudou o modelo default do motor Google de
gemini-3.5-flash para gemini-3.5-flash-2 conforme `models.md`. Comparações
intra-trimestre marcadas em /history."]
```

### Voice for this block

This is the only template that allows *strategic framing*. The weekly and monthly are descriptive; the quarterly synthesises. But synthesis still anchors to evidence — no "we believe", instead "the data shows X, which is consistent with Y, suggesting Z to test next".

## 5. Proposal copy (Deck Builder)

**When**: triggered when a proposal is drafted; not weekly.
**Length**: varies by slide; structural skeleton below.
**Audience**: prospect / decision-maker who has not yet engaged destaque.ai.

### Diagnostic findings block

```
## Estado actual em {{audit_date}}

Citation rate global: {{cr_value}} ({{cr_band}}).
Share of voice contra peer set: {{sov_value}} (posição {{rank}}/{{peer_count_plus_one}}).
Sentiment dominante: {{sentiment_label}}.

Maior fragilidade observada: {{weakest_dimension}}.
Maior força observada: {{strongest_dimension}}.

[2-3 sentences contextualising — link to one observation from gap_action_mapping.md.]
```

### Action plan block

Same structure as the audit workflow `SKILL.md` §8 four-horizon plan. Each horizon is a section with 3-5 actions pulled from `gap_action_mapping.md`. Each action keeps its (verb + object, owner, effort) shape.

### Closing block

```
[1 paragraph honest commercial posture per SKILL.md §9.
If the site does not need intervention, say so. Do not invent urgency.]
```

## 6. Cross-template editorial rules

These apply to every block above:

1. **No emoji.** None. Severity tags carry urgency.
2. **No marketing adjectives.** *Excellent*, *revolutionary*, *game-changer*, *next-level*, *unlock*, *leverage*, *the future is here*. Banned.
3. **Numbers with units and dates.** *"TTFB 173-225 ms (mediana de 5 corridas, Maio 2026)"* not *"rápido"*.
4. **Citations for any non-trivial claim.** Inline link or footnote.
5. **PT-PT for client-facing prose**; EN preserved for technical identifiers, tool names, paper titles.
6. **Honest about uncertainty.** *"Vendor data, treat as directional"*, *"PT-PT-specific evidence is thin"*.
7. **No invented statistics.** If a number doesn't have a source in `benchmarks.md`, omit it.
8. **No speculation about competitor strategy.** Describe their movements; do not narrate their intent.
9. **Action plans always include the horizon and effort.** Even in the proposal block.
10. **Each block has a deliberate length.** Going long signals padding, not depth.

## 7. Variables available to the generator

The orchestrator passes a context object to `askWithSkill('generate_narrative', {…})` with:

```yaml
client: { name, domain, sector, country, language, peer_set }
period: { type: weekly|monthly|quarterly|proposal, week_start, week_end }
metrics:
  current:  { cr, sov, position, sentiment_mix, by_engine, by_category }
  previous: { cr, sov, position, ... }
  baseline: { cr, sov, position, ... }   # week 1 of engagement, if applicable
alerts: [ ... ]            # from generate_alerts
top_movers:
  brands_up: [ ... ]
  brands_down: [ ... ]
  prompts_drifted: [ ... ]
recent_actions:
  completed_this_period: [ ... ]
  in_flight: [ ... ]
candidate_actions: [ ... ] # filtered from gap_action_mapping.md by current state
```

The template skeleton above is filled deterministically where data is structured (numbers, engines, IDs) and stylistically by Claude where prose is required (the *implication* and *why now* sentences). The orchestrator's job is to keep the structure rigid and let only the connective prose vary.

## 8. Maintenance

These templates evolve with feedback from real client work. The first two months of destaque.ai self-audit will be the calibration period; templates may tighten after.

Last refresh: 25 May 2026.
