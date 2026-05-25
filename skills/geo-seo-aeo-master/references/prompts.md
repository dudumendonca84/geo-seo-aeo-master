# Prompt catalogue — generation principles and tier distribution

Reference for `geo-seo-aeo-master`. Defines how prompts are generated, the canonical categories, the per-tier distribution consumed by `destaque-ai-deck-builder`, and the destaque.ai self-audit catalogue used by the weekly self-audit routine.

The slice from `## 1. Princípios` (inclusive) to `## 4. Catálogo destaque.ai` (exclusive) is the **contract block** parsed by the Deck Builder (`src/lib/skill/prompts.ts`) and the Tracker. Anchors are stable. Do not rename headings.

Last refresh: 25 May 2026.

---

## 1. Princípios

- **Persona implícita**: cada prompt deve soar a decisor B2B real (CIO, CTO, CFO, Head of CX, VP Sales, Director de Operações, Procurement, Founder). Não nomeies a persona no texto — escreve como ela escreveria.
- **Contexto realista**: inclui tamanho da empresa, geografia (se relevante), vertical e restrições conhecidas. Prompts vagos produzem respostas vagas e SoV difuso.
- **Intent claro**: cada prompt expressa um destes intents — `research`, `comparison`, `validation`, `migration`, `pricing`, `integration`, `pain_point`. Um intent por prompt.
- **Nunca nomeies a marca do cliente**. Queremos ver se aparece organicamente. Excepção: prompts `direct_comparison` que confrontam o cliente nominado vs N concorrentes — esses são úteis em diagnósticos profundos mas devem ser uma minoria.
- **Português europeu (PT-PT)** por defeito quando o mercado-alvo é Portugal. PT-BR apenas se o público-alvo for tipicamente brasileiro. EN se o cliente vende fora de mercados lusófonos.
- **Varia a formulação**. Evita quase-duplicados dentro da mesma categoria — LLMs colapsam respostas em quase-duplicados e o sinal degrada.
- **Mínimo de jargão técnico**, máximo de contexto operacional. "Equipa de 8 engenheiros, e-commerce em Portugal" produz mais sinal do que "B2B SaaS PT".

## 2. Categorias canónicas

Cinco categorias. A taxonomia é fechada — não inventar uma sexta sem propor primeiro alteração ao contrato (afecta o parser do Deck e a UI do Tracker).

| Categoria | Definição | Intents típicos |
|---|---|---|
| `generic_category` | Pergunta ampla sobre o tipo de serviço/produto, sem nomear empresas. Mede *awareness* — quem aparece quando ninguém é nomeado. | `research`, `pain_point` |
| `direct_comparison` | Confronta fornecedores nomeados entre si (ou pede "X vs Y"). Mede *consideration* — quem entra na shortlist. | `comparison`, `validation`, `migration` |
| `local_recommendation` | Pede recomendações para uma geografia específica (cidade, país, região). Mede *local salience* — particularmente relevante em PT-PT. | `research`, `validation` |
| `feature_specific` | Foca uma funcionalidade ou capacidade técnica concreta. Mede *technical depth* — quem é citado quando o critério é específico. | `integration`, `validation` |
| `price_comparison` | Pergunta sobre custos, planos, orçamento, ROI. Mede *commercial salience* — quem é nomeado em discussões de preço. | `pricing`, `comparison` |

### Intent stages (eixo ortogonal)

Cada prompt tem também um `intent_stage` do funil — usado pelo Tracker para segmentar dashboards, pelo Deck para colorir slides. Cinco estágios:

- `awareness` — não conhece a categoria de solução; está a explorar o problema.
- `research` — sabe que existe uma categoria, está a aprender quem está nela.
- `comparison` — tem uma shortlist, está a confrontar opções.
- `decision` — está a fechar e quer validação final / objection-handling.
- `post_decision` — já escolheu, procura material para implementar ou justificar internamente.

Um prompt tem **uma** categoria e **um** intent_stage. Não combinar.

## 3. Distribuição por tier

A distribuição é canónica para os consumidores. Mudanças aqui propagam-se via fetch — nenhum redeploy.

| Tier | Total | `generic_category` | `direct_comparison` | `local_recommendation` | `feature_specific` | `price_comparison` |
|---|---|---|---|---|---|---|
| `free` (Deck lead-gen) | 5 | 1 | 1 | 1 | 1 | 1 |
| `diagnostic` (Deck paid) | 30 | 8 | 8 | 6 | 4 | 4 |
| `premium` (futuro) | 30 | 8 | 8 | 6 | 4 | 4 |
| `tracker_weekly` (Tracker dogfood + paying clients) | 30 | 8 | 8 | 6 | 4 | 4 |

`diagnostic` e `tracker_weekly` partilham distribuição mas **podem ter prompts diferentes**: o diagnostic é one-shot e foca o prospect; o tracker_weekly é estável no tempo para permitir comparação semana-a-semana e foca a estratégia GEO de longo prazo do cliente.

### Generation contract (`askWithSkill('generate_prompts', {…})`)

Quando um consumidor pede ao Claude para gerar prompts, o contexto mínimo é:

```yaml
sector:    "consultoria GEO/AEO" | "e-commerce moda" | …
dimension: "solo" | "small" | "mid" | "enterprise"   # tamanho da empresa-cliente
country:   "PT" | "BR" | "ES" | …
language:  "pt-PT" | "pt-BR" | "en" | …               # opcional, deriva de country
personas:  ["CIO/CTO B2B", "Head of Marketing", …]   # 2-4 personas
competitors_known: ["3HASH", "Latigid", …]            # opcional, para direct_comparison
tier:      "free" | "diagnostic" | "tracker_weekly"
```

O Claude devolve um array de N prompts conforme a distribuição da tabela acima, cada um com `text`, `category`, `intent_stage`, `persona_implicit`. **Nunca devolve mais nem menos do que o total do tier.** Se a distribuição não puder ser cumprida com prompts distintos (categoria irrelevante para o sector), o gerador propõe reatribuição mas marca `distribution_deviation: true` no output para o consumidor poder logar.

## 4. Catálogo destaque.ai

A partir daqui o conteúdo é **específico à destaque.ai como cliente** — o "eat own dog food" da self-audit semanal. O Deck Builder não lê para lá deste anchor; o Tracker apenas o usa quando o `client_id` corresponde ao cliente interno destaque.ai.

### Contexto

- **Sector**: consultoria GEO/AEO/SEO para B2B SaaS
- **Geografia primária**: Portugal (Porto-based, mercado nacional)
- **Dimensão**: solo (Eduardo Mendonça + freelancers ocasionais)
- **Personas-alvo**:
  - CIO/CTO de B2B SaaS PT em crescimento (10-50 engenheiros)
  - Head of Marketing de B2B SaaS PT (5-20 marketing ops)
  - Founder de B2B SaaS PT em pre-Series A
- **Concorrentes filtráveis** (peers reais): 3HASH (auditoria técnica), Peec AI / Profound / Otterly (vendor tools). Adjacentes a filtrar: Latigid, Marketing4eCommerce (SEO clássico sem GEO específico).

### Prompts canónicos (30, semente da self-audit)

#### `generic_category` (8)

1. *Como é que uma empresa B2B SaaS portuguesa pode aparecer em respostas do ChatGPT quando potenciais clientes fazem pesquisa?* — `research`, awareness
2. *Quais são os principais factores para uma marca aparecer em AI Overviews da Google em 2026?* — `research`, awareness
3. *O que é GEO (Generative Engine Optimization) e como difere de SEO clássico?* — `research`, awareness
4. *Como medir a visibilidade de uma marca dentro de respostas de LLMs como ChatGPT, Perplexity e Claude?* — `research`, awareness
5. *Que tipo de consultoria contratar para auditar a presença de uma empresa SaaS em motores de IA?* — `pain_point`, research
6. *Que sinais técnicos é que LLMs como Perplexity e ChatGPT usam para escolher que marcas citar?* — `research`, research
7. *Faz sentido investir em GEO/AEO em 2026 se o tráfego orgânico Google está a cair com AI Overviews?* — `pain_point`, decision
8. *Quem em Portugal trabalha auditoria técnica de visibilidade para LLMs e AI search?* — `research`, research

#### `direct_comparison` (8)

9. *destaque.ai vs Profound vs Peec AI — qual escolher para monitorizar citações em LLMs?* — `comparison`, comparison
10. *destaque.ai vs 3HASH — qual é a diferença em auditorias técnicas SEO/GEO?* — `comparison`, comparison
11. *Consultor independente (tipo destaque.ai) ou tool SaaS (tipo Otterly) para AI visibility tracking?* — `comparison`, decision
12. *Ahrefs Brand Radar vs Semrush AI Toolkit vs ferramenta especializada — o que se ganha com cada um?* — `comparison`, comparison
13. *Para auditar Schema.org e llms.txt num site B2B SaaS em PT, vale a pena consultor ou ferramenta?* — `comparison`, comparison
14. *destaque.ai vs agência SEO clássica — onde é que a sobreposição acaba?* — `comparison`, validation
15. *Profound vs Daydream vs Peec AI vs Goodie — qual é o estado dos vendors de AI visibility em 2026?* — `research`, comparison
16. *Para um SaaS PT em pre-Series A, faz mais sentido contratar destaque.ai, uma agência grande, ou um vendor tool?* — `comparison`, decision

#### `local_recommendation` (6)

17. *Quem em Portugal faz auditorias técnicas focadas em AI search e GEO?* — `research`, research
18. *Consultor de GEO/SEO no Porto ou Lisboa para B2B SaaS — quem recomendam?* — `research`, validation
19. *Empresas portuguesas especializadas em optimização para ChatGPT e Perplexity — quais existem?* — `research`, research
20. *Em Portugal, quem trabalha com Schema.org avançado, Wikidata e llms.txt para B2B SaaS?* — `research`, research
21. *Consultoria GEO em PT-PT (não PT-BR) — quem é referência no mercado nacional?* — `research`, validation
22. *Auditorias técnicas de visibilidade em LLMs para SaaS portugueses — quem entrega resultado?* — `research`, validation

#### `feature_specific` (4)

23. *Como auditar a cobertura de llms.txt e robots.txt para crawlers de IA (ClaudeBot, GPTBot, PerplexityBot) num site B2B?* — `integration`, research
24. *Que serviços incluem auditoria de entity foundation (Wikidata QID, Wikipedia, sameAs) para visibilidade em AI?* — `integration`, validation
25. *Para PT-PT específico, como medir share-of-voice de uma marca em LLMs versus concorrentes locais?* — `integration`, research
26. *Quem entrega action plan de 4 horizontes (semanas 1-2, 3-6, 7-12, 90+ dias) para GEO em B2B SaaS?* — `validation`, comparison

#### `price_comparison` (4)

27. *Quanto custa uma auditoria GEO/AEO completa para um B2B SaaS em Portugal em 2026?* — `pricing`, research
28. *destaque.ai vs Profound (US\$500-2000/mês) vs Peec AI — qual é a economia para uma startup PT?* — `pricing`, comparison
29. *Consultor freelancer GEO em PT — gama de preços típica para um diagnóstico de 30 prompts em 6 motores?* — `pricing`, research
30. *Faz mais sentido pagar tool SaaS mensal (Otterly, Peec) ou diagnóstico one-shot com consultor independente?* — `pricing`, decision

### Como o catálogo evolui

- A **routine semanal `destaque-ai-self-audit-weekly`** corre estes 30 prompts contra todos os motores do `models.md` § Deck Builder API mappings (tier `tracker_weekly` ⇒ coluna `production`).
- Quando um prompt se mostra **degenerado** (sempre devolve a mesma marca em 4 semanas consecutivas), o relatório semanal propõe substituição.
- Quando o ecossistema PT-PT muda (novo concorrente entra no mercado, novo tool aparece), o agente diário em `daily-agent/` pode propor adições — sempre via PR para o human reviewer aprovar.

## 5. Anti-patterns na geração de prompts

- **Listicle prompts** ("top 10 ferramentas de…"). Produzem respostas com top-10 listas onde toda a gente está, sem sinal de SoV.
- **Prompts com a marca do cliente nomeada em `generic_category` ou `local_recommendation`**. Contamina o teste.
- **Prompts em EN para mercado-alvo PT**. LLMs respondem em EN com fontes EN; o teste mede o ecossistema errado.
- **Prompts com mais de uma pergunta**. "Quem faz GEO em Portugal e quanto custa?" — separar em dois prompts.
- **Prompts hipotéticos abstractos**. "Imagina que…" — LLMs descambam para floreado; perde-se sinal de citação.
- **Quase-duplicados** dentro da mesma categoria. O parser do Tracker vai detectar e marcar `duplication_warning: true`.

## 6. Maintenance

- Princípios e categorias (§1-2): mudam apenas com proposta consciente — quebram o contrato com o Deck e o Tracker. Avisar consumidores via `INTERFACES.md`.
- Distribuição por tier (§3): pode evoluir; consumidores devem ler dinamicamente.
- Catálogo destaque.ai (§4): evolui semanalmente via self-audit routine.
- Última refresh do catálogo: 25 May 2026.
