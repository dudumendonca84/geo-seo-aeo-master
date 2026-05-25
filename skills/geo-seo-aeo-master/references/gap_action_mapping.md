# Gap → action mapping (SINAL)

> **Consumidores:**
> 1. **Deck Builder** (`src/lib/llm/synthesize-deck.ts`, futuro Step 12) — lê este ficheiro e mapeia findings do audit + SINAL scan para acções fundamentadas com mecanismo, esforço e impacto típico.
> 2. **Operador humano** — quick reference quando escreve manualmente um diagnóstico.
>
> **Raw URL para Deck Builder:**
> `https://raw.githubusercontent.com/dudumendonca84/geo-seo-aeo-master/main/skills/geo-seo-aeo-master/references/gap_action_mapping.md`

**Last refresh:** 25 May 2026 — primeira versão. Roadmap: alimentar com patterns reais dos engagements à medida que a destaque.ai acumula clientes (loop 3: `destaque-ai-ops/learnings/` → synthesis-weekly Routine → updates aqui).

---

## Como usar este ficheiro

Cada padrão tem:
- **Pattern.** Sinal observável no audit ou scan (citation rate distribution, finding type, etc.).
- **Hipóteses.** Causas prováveis ordenadas por prevalência observada (com `%` quando há base empírica; sem `%` quando é judgement de practitioner).
- **Acção.** O que fazer.
- **Esforço.** Tempo/effort estimado.
- **Impacto típico.** Lift esperado e prazo, com fonte sempre que disponível.
- **Fonte primária.** Quando a hipótese tem evidência pública, citada.

Princípio SINAL: **não inventar `+X% em Y semanas` sem fonte.** Se a relação é correlacional ou indirecta, declarar.

---

## DIMENSÃO 1 — Technical foundation

### Pattern: Gemini citation 0% mas outros motores >5%

#### Hipóteses
1. **`robots.txt` bloqueia `Google-Extended`** (suspeita ~40% dos casos)
2. **Schema.org Organization incompleto ou ausente** (~35% dos casos)
3. **Conteúdo client-side rendered sem HTML útil** (~15% dos casos)

#### Acção
Verifica robots.txt para `User-agent: Google-Extended`; adiciona `Organization` JSON-LD com `name`, `url`, `logo`, `sameAs` mínimo 3 entries; se SSR/SPA, configura prerender ou SSR para Googlebot.

#### Esforço
30 min - 4h (depende da plataforma).

#### Impacto típico
Sem dado público específico para Gemini lift. Schema enriquece entity recognition em todos os motores (Princeton GEO Aggarwal et al. — entity richness é uma das 9 categorias avaliadas).

---

### Pattern: `llms.txt` ausente

#### Hipóteses
1. Não publicado por desconhecimento.

#### Acção
Publicar `/llms.txt` no root seguindo spec (Answer.AI / llmstxt.org).

#### Esforço
20 min.

#### Impacto típico
**Near-zero em citation directa** (Otterly Nov 2025: AI bots consumem `/llms.txt` em <0.5% das requests). Publica para hygiene de docs, não promete inferência lift. Se vendor blog atribui +20% citation rate a llms.txt, **flag como vendor self-interest**.

#### Fonte
Otterly server-log study Nov 2025; Reboot Online; SE Ranking ~300k domains.

---

### Pattern: Performance Lighthouse <50, LCP >4s

#### Hipóteses
1. Imagens hero não optimizadas / sem dimensions.
2. JS render-blocking.
3. Sem CDN ou origin distante do target market.

#### Acção
Image optimization (next/image, WebP/AVIF), defer non-critical JS, Cloudflare CDN com edge em LIS.

#### Esforço
4-12h.

#### Impacto típico
LCP <2.5s é threshold Google "good". Improvement directo de Core Web Vitals + impacto indirecto em organic ranking. **Não há lift directo conhecido em citation rate** — performance é hygiene, não palanca primária GEO.

#### Fonte
Google Search Quality Rater Guidelines (Sept 2025 revisão).

---

## DIMENSÃO 2 — Content & topical authority

### Pattern: Sem original statistics publicadas

#### Hipóteses
1. Brand não tem dataset proprietary (early-stage).
2. Tem dados mas não publica (extracção lenta, dpto. legal cauteloso).

#### Acção
Publicar 1 original-data report/quarter. Não precisa ser massivo — survey de 50 prospects, análise de logs próprios, comparison study.

#### Esforço
2-4 semanas (1 quarter recorrente).

#### Impacto típico
**Adicionar estatísticas é a alavanca single mais forte** confirmada em controlled experiment (Aggarwal et al. KDD 2024). Lift médio +30-40% em Position-Adjusted Word Count nos top motores testados.

#### Fonte
Aggarwal et al., "GEO: Generative Engine Optimization", arXiv 2311.09735 (KDD 2024).

---

### Pattern: Sem comparative content ("X vs Y", "X alternatives")

#### Hipóteses
1. Brand evita falar de concorrentes por cultura.
2. Não tem editorial focus.

#### Acção
Publicar páginas comparison vs top 3 alternatives. Honest assessment, não pitch comercial. Inclui pricing, integration matrix, when-to-choose-which.

#### Esforço
3-5 dias por página.

#### Impacto típico
Páginas comparison ranqueiam bem em comparison-intent queries (LLM intent stage `comparison`/`decision`). Direct surface area para citation em queries de buyer education.

---

## DIMENSÃO 3 — Entity & brand foundation

### Pattern: Sem Wikidata QID

#### Hipóteses
1. Não criado.
2. Criado mas em estado "draft" / sem suficientes claims para survive deletion.

#### Acção
Criar QID na Wikidata.org. Mínimo: `instance of` (Q4830453 commercial organization), `country` (Q45 Portugal), `inception` (year), `official website`, `industry`. Cita fontes externas (LinkedIn, Crunchbase, imprensa).

#### Esforço
1-2h (criação + verificação por editores Wikidata).

#### Impacto típico
QID é referência canónica para Google Knowledge Panel e LLMs. Sem QID, identity disambiguation é frágil. **Impacto difícil de medir isoladamente** — é foundation, não alavanca.

#### Fonte
Wikidata:Notability/Organizations.

---

### Pattern: Sem artigo Wikipedia (PT e EN)

#### Hipóteses
1. Brand não atinge notability bar.
2. Atinge mas ninguém escreveu.
3. Tentou criar mas rejeitado (auto-promo / fontes insuficientes).

#### Acção
1. Avaliar notability (Wikipedia:Notability/Organizations). Bar PT: cobertura sustained em pelo menos 2 fontes independentes Tier-1.
2. Se passa: draft em PT-PT com tom neutro, cita Tier-1 PT media coverage, submete via Articles for Creation.
3. Não inflaciona — Wikipedia rejeita peacock language.

#### Esforço
5-15h (draft) + 1-6 meses (review + edits).

#### Impacto típico
Wikipedia é uma das fontes mais citadas por ChatGPT (~14% top citation share — Profound). Articles em PT-PT criam surface area específica para queries em Portugal.

#### Fonte
Profound 680M citation analysis.

---

### Pattern: `Organization.sameAs` vazio ou <3

#### Hipóteses
1. Schema implementado por dev sem brand context.

#### Acção
Adicionar URLs: LinkedIn company page, GitHub org (se aplicável), Crunchbase, X/Twitter, Wikidata, Producthunt, perfis dos fundadores no LinkedIn.

#### Esforço
30 min.

#### Impacto típico
`sameAs` corrobora entity identity para Google Knowledge Graph e LLMs. **Sem fonte pública que isole o impacto de sameAs** vs schema completeness em geral.

---

### Pattern: Sem perfil LinkedIn company ou GitHub org

#### Hipóteses
1. Stage muito early — fundadores postam pessoalmente.
2. Decisão consciente focar uma plataforma.

#### Acção
Criar perfis em LinkedIn e (se SaaS técnico) GitHub. Não exige posting cadence forte — basta presença reconhecível.

#### Esforço
1-2h criação inicial.

#### Impacto típico
Presença básica desbloqueia `sameAs` references e melhora entity disambiguation. Não move citation rate isoladamente.

---

## DIMENSÃO 4 — Authority & digital PR

### Pattern: 0 menções Tier-1 PT media em 12 meses

#### Hipóteses
1. No outreach program activo.
2. Outreach mal direccionado (PR generalista, não vertical-specific).
3. Brand não tem story angle interessante para journalists.

#### Acção
1. List 6 Tier-1 PT outlets: Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios.
2. Identificar 1-2 journalists por outlet que cobrem vertical do client.
3. Pitch baseado em data, story, ou opinion piece — nunca press release puro.
4. Cadência: 3-6 meses para primeiro hit; sustained coverage exige relacionamento de 12-18 meses.

#### Esforço
1-2 dias setup, depois 2-4h/semana sustained.

#### Impacto típico
**Branded anchor text correlaciona com AI Overview presence at r=0.527** (Ahrefs 75k brands) — outperforming domain rating. Tier-1 PT coverage gera branded anchors orgânicos.

#### Fonte
Ahrefs research: https://ahrefs.com/blog/llm-citations/

---

### Pattern: Sem podcast appearances do segmento

#### Hipóteses
1. Founder/team não considera podcasting estratégico.
2. Não sabe que podcasts existem no segmento.

#### Acção
1. List 10-15 podcasts B2B/SaaS PT (Pessoa Comum, Próxima Paragem, Bumba na Fofinha business eps, Mensageiros, etc.).
2. Drafta pitch específico por podcast — referencing episodes específicos.
3. Target: 2-3 appearances/quarter sustained.
4. Maximiza re-uso: clip vídeo, blog summary cross-link, LinkedIn post.

#### Esforço
3-5h pitch + 1.5h per appearance + 30min re-use content.

#### Impacto típico
Podcasts geram backlinks autoritativos + transcript indexável (alguns motores citam podcast transcripts). Building authority slow-but-compound. Sem fonte isolando podcast impact, mas Ahrefs branded-anchor research aplica.

---

### Pattern: Não está em "Top X agências Y" listicles

#### Hipóteses
1. Listicles dominados por agências established com SEO/PR pessoal forte.
2. Comparison content creators não conhecem o brand.

#### Acção
Outreach personalizado a curadores de listicles (Clutch, G2, Capterra para SaaS; bloggers de vertical). Oferecer dados, case study, ou interview para inclusion.

#### Esforço
2-3 semanas outreach + nurture.

#### Impacto típico
Top-X listicles têm presence forte em comparison-intent queries (LLM intent_stage `comparison`/`decision`). Single inclusion = surface area material.

---

## DIMENSÃO 5 — UX & engagement

### Pattern: Bounce >70%, time on site <30s

#### Hipóteses
1. Landing page não alinha com intent.
2. Performance lenta (LCP >4s).
3. Cookie consent invasivo.

#### Acção
A/B test landing hero copy; cookie consent compliance-minimal (banner discreto vs modal); fix LCP.

#### Esforço
2-4 semanas.

#### Impacto típico
UX metrics não são input directo a citation. Impactam conversion uma vez chegado ao site — relevant para ROI da campanha GEO, não para citation rate em si.

---

## DIMENSÃO 6 — Measurement & feedback

### Pattern: Sem GA4 AI channel tracking

#### Hipóteses
1. GA4 default channels não distinguem AI referrals.

#### Acção
Configurar channel group custom em GA4 que captura UTMs de AI (`utm_source` contendo `chatgpt.com`, `perplexity.ai`, etc.) + referrers conhecidos.

#### Esforço
1-2h.

#### Impacto típico
Não move citation rate. Crítico para attribution e ROI demonstration ao client.

---

### Pattern: Sem Bing Webmaster Tools AI Performance dashboard

#### Hipóteses
1. Site não verificado em BWT.

#### Acção
Verifica site em Bing Webmaster Tools. Acede ao AI Performance dashboard (public preview desde 9 Feb 2026). Telemetria real de Copilot citations + Bing AI grounding.

#### Esforço
30 min setup.

#### Impacto típico
Não move citation rate. Crítico para measurement honesty — Bing telemetry é a única first-party AI search data publicamente disponível em 2026.

#### Fonte
Microsoft Bing Webmaster Tools docs.

---

## DIMENSÃO 7 — Strategic positioning

### Pattern: Citation rate forte em awareness mas <5% em decision-stage queries

#### Hipóteses
1. Conteúdo top-of-funnel optimizado, bottom-of-funnel não.
2. Brand não publica BOFU content (case studies, ROI calculators, comparison vs alternatives).
3. Concorrentes têm BOFU coverage forte.

#### Acção
Auditar funnel coverage por intent_stage. Producir BOFU content: detailed case studies com nomes, métricas, screenshots; comparison vs alternatives; ROI calculator interactive.

#### Esforço
6-10 semanas para BOFU library mínima.

#### Impacto típico
Decision-stage queries têm conversion rate 10x awareness. Citation aqui é where ROI lives. Sem fonte isolando o lift de BOFU content em LLM citations — campo emergente.

---

### Pattern: Concorrente domina queries de comparison

#### Hipóteses
1. Concorrente publica páginas "X vs <brand>" e ranqueia.
2. Concorrente tem mais comparison content em geral.

#### Acção
Estratégia "defend & attack": publicar próprias páginas "brand vs <concorrente>" — honest, factual. LLMs citam ambas se ambas existem.

#### Esforço
1 semana por página comparison (incluindo research da concorrência).

#### Impacto típico
Comparison-intent queries são high-conversion. Sem fonte isolando o impacto.

---

## DIMENSÃO 8 — Operational excellence

### Pattern: Publicação cadence <1x/mês

#### Hipóteses
1. Sem editorial calendar.
2. Recursos limitados.
3. Foco em product, não em content.

#### Acção
Editorial calendar trimestral. Mínimo 2 publicações de qualidade/mês. Distribuição via LinkedIn, newsletter, podcast guesting.

#### Esforço
Setup 1-2 semanas; sustained 8-15h/semana.

#### Impacto típico
Cadência é foundation — sem ela, todas as outras alavancas perdem força. Não é palanca, é hygiene.

---

## Patterns transversais (cross-dimensional)

### Pattern: Citation rate <10% em todos os motores

Indica fragilidade em múltiplas dimensões simultaneamente. Não fazer "fix it all" — priorizar:
1. Entity (Wikidata QID + sameAs + Wikipedia se notability) — H1
2. Technical (Schema.org Organization + robots.txt + llms.txt) — H1
3. Authority (digital PR Tier-1 + 2-3 podcast appearances) — H2-H3
4. Content (original statistics + comparison content) — H2-H3

### Pattern: Citation rate alto mas position avg >4

Brand é citado mas em segundo plano consistente. Indica concorrente dominante. Estratégia: defender o que tens (não regredir) enquanto constrói edge em dimensão específica (ex: original research).

### Pattern: Citation rate disparado num motor, baixo nos outros

Comum em brand com presença forte numa community específica que esse motor sobre-pondera (ex: Reddit-heavy → Perplexity boost). Não generalizável — auditar fonte específica.

---

## Manutenção

Este ficheiro evolui via:
- **Loop 2 self-audit** — patterns observados no próprio destaque.ai audit semanal.
- **Loop 3 client learnings** — patterns anonimizados de `destaque-ai-ops/learnings/` (futuro, via synthesis-weekly Routine).
- **Daily-agent absorção** — novos studies/papers (ex: Aggarwal follow-ups, BrightEdge updates) podem adicionar patterns ou refinar impacto típico de existentes.

Cada update adiciona entry em `methodology-changelog.md` se mudar padrões existentes (não apenas adicionar novos).

---

Last refresh: 25 May 2026.
