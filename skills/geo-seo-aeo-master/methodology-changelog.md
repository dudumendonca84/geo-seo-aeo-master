# destaque.ai methodology changelog

Audit trail of how the destaque.ai methodology has evolved. Methodology evolution criteria are defined in `SKILL.md` § Methodology evolution.

Each entry: date, trigger, source URL, sections changed in `SKILL.md` or other files. Most recent first.

---

## 2026-05-23 — Methodology v1.1 — holistic scope made explicit

**Trigger.** Founder feedback: methodology is not just technical; it is **everything that contributes to ranking #1 or being cited in AI search**.

**Source.** Internal product direction.

**Changes:**
- New section `SKILL.md` § Scope of the methodology — holistic, not just technical — explicitly defining 8 dimensions: (1) Technical foundation; (2) Content strategy and topical authority; (3) Entity and brand foundation; (4) Authority and digital PR; (5) Social and community signals; (6) Authority on-site (E-E-A-T); (7) Measurement and feedback loop; (8) Strategic positioning and competitive intel.
- Scorecard expanded from 7 to 12 categories to cover non-technical dimensions.
- Audit workflow expanded from 9 to 16 sections — added §8 Content strategy and topical authority, §9 Entity and brand foundation, §10 Authority and digital PR, §11 Social and community signals, §12 E-E-A-T and on-site authority, §13 Measurement and feedback loop, §14 Strategic positioning and competitive intel.
- destaque-ai-self/audit-baseline.md updated to reflect new 12-category scorecard and 15-section workflow.

---

## 2026-05-23 — Methodology v1.0 codified

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
