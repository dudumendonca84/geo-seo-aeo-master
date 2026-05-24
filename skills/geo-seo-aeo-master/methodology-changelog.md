# SINAL methodology changelog

**SINAL** — *Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs.*

Audit trail of how SINAL has evolved. Evolution criteria are defined in `SKILL.md` § Methodology evolution.

Each entry: date, version, trigger, source, sections changed in `SKILL.md` or other files. Most recent first.

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
