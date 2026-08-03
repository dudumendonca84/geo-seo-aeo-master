# SINAL methodology changelog

**SINAL** — *Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs.*

Audit trail of how SINAL has evolved. Evolution criteria are defined in `SKILL.md` § Methodology evolution.

Each entry: date, version, trigger, source, sections changed in `SKILL.md` or other files. Most recent first.

---

## 2026-08-03 — Filtragem de concorrentes: classificação por tipo antes do teste

O teste das quatro perguntas continua correcto mas era lento de aplicar e o cérebro re-derivava-o todas as semanas, com drift. Adicionadas três secções a `references/competitor_filtering.md`:

- **§2b Tipos que nunca são peers**, seja qual for o sector: fundações e institutos de investigação, redes só de diagnóstico ou laboratório, seguradoras, prestadores públicos, directórios e agregadores, media, e ferramentas de co-compra. Classificar por tipo primeiro, correr as quatro perguntas só no que sobra. Cada linha traz o erro real que teria evitado, incluindo a Fundação Champalimaud classificada como concorrente directo de uma rede hospitalar, onde um 4,8 de um centro de investigação fazia um 3,75 parecer derrota.
- **§2c Onde o conjunto de peers se usa e onde não**: peers-only em Share of Voice, pódio, confronto directo e reputação local; todos os buckets nas listagens e dossiers, com etiqueta. Errar aqui não dá erro, dá um número silenciosamente falso.
- **§2d As decisões ficam**: um bucket com `status = 'confirmed'` é decisão do operador e o cérebro não a re-deriva. Evidência nova que a contrarie regista-se nas notas da corrida, não se troca em silêncio.

Contrapartida no Tracker: `src/lib/competitors/scope.ts` passa a ser o sítio único que define o âmbito de cada superfície, depois de a regra estar aplicada em cinco ficheiros e ausente noutros vinte.

## 2026-08-03 — Engine playbooks: auto-alimentação ligada nos três loops

O `references/engine_playbooks.md` afirmava evoluir por três loops, mas só o daily-agent tinha gatilho escrito. Ligados os outros dois: o self-audit semanal actualiza um bloco `### <engine>` quando o prompt-test multi-engine contradiz uma alavanca listada (regra de confirmação: duas auditorias seguidas ou fonte primária do vendor, para uma semana atípica não derrubar conhecimento válido); a synthesis-weekly passa a ter os playbooks como destino para alavancas validadas em engagements reais (N≥3, anonimizadas). O parágrafo de manutenção do ficheiro passa a nomear a routine e o ponto exacto de cada loop.

Contrato 6 adicionado ao `scripts/validate-skill-tables.mjs` (verifica o header do bloco, as 11 keys de motor e blocos sem texto). Motivo: o Tracker consome este ficheiro sem fallback hardcoded, logo um header fora do formato faz a secção "Como aparecer aqui" desaparecer de todos os cartões em silêncio — e agora há três routines autónomas a escrever no ficheiro.

## 2026-08-02 — Share of Voice unificado (peers-only)

O rótulo "Share of Voice" cobria três fórmulas (todas as marcas no summary; só peers no deck; presença simples no dossier). Unificado na convenção peers-only fraccionária — ver §3 de `references/metrics.md`. O dossier de concorrente passa a rotular a sua métrica como "Presença". Efeito esperado: SoV do cartão principal sobe (denominador menor) no primeiro recompute após a mudança.

## 2026-05-29 — SINAL v1.7 — Taxonomia das 8 dimensões reconciliada (§116-130 canónica) + método exposto ao deck

**Trigger.** Ligação dos Slides 05/06/07 do deck à skill (método deixa de ser hardcoded) expôs um drift interno: duas listas de 8 dimensões coexistiam — a detalhada e citada em `SKILL.md` § Scope (§116-130) vs a taxonomia usada no resumo, no `destaque-ai-deck-builder/CLAUDE.md` e em `gap_action_mapping.md`.

**Decisão do founder.** A lista **canónica** é a detalhada §116-130:
1. Technical foundation · 2. Content & topical authority · 3. Entity & brand foundation · 4. Authority & digital PR · 5. **Social & community signals** · 6. **Authority signals on site (E-E-A-T)** · 7. Measurement & feedback · 8. Strategic positioning.

A taxonomia alternativa (5 = UX & engagement, 8 = Operational excellence) fica deprecada como partição top-level.

**Changes.**
- `SKILL.md` § Deck Builder method: secção parseável (glossário SEO/GEO/AEO, 8 dimensões §116-130, tabela SEO vs GEO) consumida pelo deck via fetch.
- `destaque-ai-deck-builder/CLAUDE.md` § Scope obrigatório alinhado à §116-130.
- `references/prompts.md` §3: tabela de distribuição passa a ser parseada pelo deck (não muda conteúdo).

**`gap_action_mapping.md` reconciliado** (decisão do founder "reconcilia e realoca"). DIMENSÃO 5 passou de "UX & engagement" para **Social & community signals**; nova DIMENSÃO 6 **Authority signals on site (E-E-A-T)**; Measurement → 7, Strategic positioning → 8. A cadência editorial (antiga DIMENSÃO 8 Operational excellence) foi movida para a DIMENSÃO 2 (Content, "editorial calendar discipline"); o pattern de UX/engagement passou a transversal (não-citação, ROI). Os patterns de Social e E-E-A-T foram redigidos a partir da prosa §116-130.

**SINAL v1.7.** A taxonomia canónica (§116-130) não mudou — o que mudou foi o alinhamento dos ficheiros derivados a ela. Mas o `gap_action_mapping.md` foi reestruturado e ganhou patterns novos (Social, E-E-A-T): mudança a padrões existentes, logo version bump conforme a regra de manutenção do próprio ficheiro.

---

## 2026-05-26 — Deck Builder API mappings — 2 model ID corrections (PR #4 reconciled)

**Trigger.** Triagem de PRs abertos. PR #4 (base 0d3bdac, antiga) sinalizou 3 fragilidades de model IDs; 2 ainda válidas vs estado actual de main, 1 obsoleta.

**Source.** Vendor docs (Anthropic, xAI) + reconciliação contra `models.md` actual.

**Changes (aplicadas fresh a main, não via merge do PR #4 para evitar regressão):**
- `claude` cost_optimized: `claude-haiku-4-5-20251001` → **`claude-haiku-4-5`** (alias durável, remove fragilidade date-stamp).
- `grok` production: `grok-4` → **`grok-4.3`** (grok-4 deprecated, retira 15 Ago 2026; grok-4.3 é o flagship cost-efficient actual).

**NÃO aplicada (obsoleta):**
- PR #4 propunha `deepseek` production `deepseek-v4` → `deepseek-v4-pro`. Rejeitada: main já moveu deliberadamente deepseek para `deepseek-v4-flash` (commit #13 — "pro é demasiado lento"). A decisão flash de main prevalece.

**PR #4 fechado** (não merged — base antiga regrediria deepseek + daily-prompt.md). Net-new válido aplicado aqui.

**Sem version bump SINAL.** Correcção de content em references/, não evolução de método. Versão permanece v1.6.

---

## 2026-05-25 — SINAL v1.6 — `gap_action_mapping.md` adicionado

**Trigger.** Deck Builder PR #5 do roadmap (Step 12 deck-by-AI) precisa de mapping concreto entre findings de audit/scan e acções fundamentadas. Founder direction explícita: deck deve cobrir 8 dimensões SINAL, não apenas technical.

**Source.** Internal product direction; SKILL.md § Methodology — SINAL § Scope (holistic).

**Changes:**
- New file `references/gap_action_mapping.md` — patterns por dimensão (8 dimensões SINAL × 1-3 patterns iniciais cada) mapeando observable signals para acção concreta com effort + impacto típico + fonte primária.
- Cobertura inicial:
  - Dim 1 (Technical): 3 patterns (Gemini 0%, llms.txt, performance)
  - Dim 2 (Content): 2 patterns (original stats, comparative)
  - Dim 3 (Entity): 4 patterns (Wikidata QID, Wikipedia, sameAs, LinkedIn/GitHub)
  - Dim 4 (Authority): 3 patterns (Tier-1 PT, podcasts, listicles)
  - Dim 5 (UX): 1 pattern (bounce)
  - Dim 6 (Measurement): 2 patterns (GA4 AI channel, BWT)
  - Dim 7 (Positioning): 2 patterns (BOFU coverage, comparison dominance)
  - Dim 8 (Operational): 1 pattern (cadence)
  - Cross-dimensional: 3 patterns

**Effect.** Step 12 do Deck Builder pode (futuro PR) consumir este ficheiro e gerar action plan fundamentado por horizonte. Each pattern inclui fonte primária quando há evidência pública (Aggarwal et al., Ahrefs, Profound, Otterly, etc.); declara honestamente quando não há.

**Maintenance.** Loop 2 (self-audit semanal) e Loop 3 (synthesis-weekly de `destaque-ai-ops/learnings/` — futuro) alimentam novos patterns à medida que destaque.ai acumula client engagements reais.

---

## 2026-05-23 — SINAL v1.4 — Prompt intelligence layer added

**Trigger.** Founder direction: skill deve evoluir também nos prompts — saber quais prompts canónicos o segmento usa, não só fixar uma query intuição-based no audit.

**Source.** Internal product direction.

**Changes:**
- New file `references/prompts.md` — prompt intelligence canonical landscape para o segmento destaque.ai (B2B SaaS PT). 7 tiers de prompts (Discovery, Comparison, Evaluation, Problem-stated, Pricing, Technical, Vertical SaaS PT). 30+ prompts seed com tier classification.
- `daily-agent/daily-prompt.md`:
  - Nova bullet de monitoring para prompt patterns research (Profound, Peec, Otterly publications; AnswerThePublic; Reddit r/SEO threads; sales call patterns)
  - Matriz de absorção expandida com row para "Novo prompt canónico do segmento ou shift em existente → prompts.md Tier apropriado"
- `routines/destaque-ai-self-audit-weekly.md` actualizado para usar prompts.md como test suite em vez de query hard-coded. Rotação Tier 2/3/5/6 (10 prompts/semana) + Tier 1/4/7 (mandatory cada semana).
- `SKILL.md` file index actualizado com prompts.md.
- `README.md` file tree actualizado.

**Effect.** O self-audit semanal passa a medir share-of-voice real do destaque.ai contra um conjunto representativo de prompts (não só uma intuição-based). Permite tracking longitudinal de SoV per prompt tier. Informa content strategy: cada prompt em prompts.md vira candidato a "resposta que destaque.ai deve owned".

---

## 2026-05-23 — SINAL v1.3 — Gaps fechados + acronym formalisation

**Trigger.** Founder direction: ensure methodology is best-in-class and most recent; name the model.

**Source.** Internal product direction; gap analysis vs Profound / BrightEdge / Kalicube / Ahrefs / 3HASH / Schema App methodologies.

**Changes:**

*Naming.* Methodology formally named **SINAL** — *Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs*. PT-PT acronym, semantic fit with "signal" (SEO/search vocabulary), sober and memorable. All references in `SKILL.md`, `README.md`, `destaque-ai-self/audit-baseline.md` updated.

*Gaps closed (audit-workflow additions as sub-bullets in existing sections):*
- §7 GEO técnica — added **multimodal grounding** (image/video schema, transcript discipline, multimodal prompt test). Relevant since Gemini 3.5 and GPT-5 ship image-citing behavior.
- §9 Entity and brand foundation — added **local presence** sub-section (Google Business Profile, Bing Places, Apple Maps, Páginas Amarelas / pai.pt for PT, OpenStreetMap, address-consistency hygiene). Critical for clients with on-site presence in Portugal.
- §13 Measurement — added **conversion attribution beyond rankings** (GA4 funnel from AI-channel to signup/demo/paid, cohort analysis vs organic; reference NetElixir holiday 2025 ~1.2× conversion rate caveat).
- §14 Strategic positioning — added **crisis-response protocol** for negative or hallucinated brand mentions in LLM outputs (document, classify as grounded vs hallucinated, escalation path, vendor feedback channels, canonical-statement publication on owned domain). Reference: Lidsky & Daves SSRN paper + *LTL LED v. Google* precedent.

*Tagline.* "Notabilidade em AI search. Método SINAL — destaque.ai."

---

## 2026-05-23 — SINAL v1.2 — Methodology evolution protocol formalised

**Trigger.** Founder direction: methodology itself must evolve with the field.

**Changes:**
- `SKILL.md` § Methodology evolution added with 7 triggers (academic evidence, vendor mechanic change, new model family, new measurable signal, new crawler family, metric obsolescence, scorecard rebalance).
- `methodology-changelog.md` created (this file) as audit trail.
- `daily-agent/daily-prompt.md` absorption matrix expanded with row for methodology-changing findings.

---

## 2026-05-23 — SINAL v1.1 — Holistic scope made explicit

**Trigger.** Founder feedback: methodology is not just technical; it is **everything that contributes to ranking #1 or being cited in AI search**.

**Changes:**
- New section `SKILL.md` § Scope of the methodology defining 8 dimensions: (1) Technical foundation; (2) Content strategy and topical authority; (3) Entity and brand foundation; (4) Authority and digital PR; (5) Social and community signals; (6) Authority on-site (E-E-A-T); (7) Measurement and feedback loop; (8) Strategic positioning and competitive intel.
- Scorecard expanded from 7 to 12 categories.
- Audit workflow expanded from 9 to 16 sections.

---

## 2026-05-23 — SINAL v1.0 — Codified

**Trigger.** Initial codification of the destaque.ai methodology as a synthesis of world-class sources (academic / industry primary / vendor primary docs / practical audit traditions) applied to B2B SaaS in Portugal with PT-PT contextual relevance.

**Source.** Initial repo construction, calibrated against:
- Aggarwal et al. KDD 2024 (arXiv 2311.09735)
- BrightEdge / Ahrefs / Profound / Semrush published research May 2024 – May 2026
- 3HASH technical audit format (in-house exemplar: congruent.pt audit 22 May 2026)
- Kalicube entity audit framework
- Google Search Quality Rater Guidelines Sept 2025 revision

**Sections defined:** `SKILL.md` § Methodology, § Audit workflow (8 sections), § Editorial voice, § Anti-patterns.

---

## Reserved for future entries

Methodology changes go above this line. Examples that would warrant a new entry:

- Schema scoring rebalanced after Ahrefs null-result extended studies.
- AIO query fan-out audit logic added (vs single-query rank check).
- New audit category if entity coverage becomes top-weighted predictor.
- Multimodal grounding (image citation) audit step.
- Bing Webmaster Tools AI Performance added as required measurement tool.
- New crawler family in robots.txt audit matrix.
- `llms.txt` weight increase if confirmed inference-path consumption appears.
