# Routine: `synthesis-weekly`

**Schedule:** Sextas-feiras às 10:00 (Europe/Lisbon)
**Repos:** Lê de `dudumendonca84/destaque-ai-ops` (camada `learnings/`); propõe PRs em `dudumendonca84/geo-seo-aeo-master` (branch novo)
**Output:** PR draft contra `main` da skill com updates a `references/{gap_action_mapping,prompts,benchmarks}.md` + log em `skills/.../destaque-ai-self/synthesis-log.md`

**Pré-requisito:** GitHub MCP scope tem de incluir **ambos** os repos. Sem scope, a routine para na primeira pass e reporta o erro — não tenta workaround.

---

## Princípio

Loop 3 do flywheel da skill (ver CLAUDE.md do `destaque-ai-deck-builder` § "A skill auto-alimenta-se"). Loop 1 (daily news) traz o estado da arte do mundo. Loop 2 (self-audit) mede onde a destaque.ai está. Loop 3 absorve **o que aprendemos com engagements reais** — sem isto, a skill nunca capitaliza patterns que emergem no trabalho de clientes.

Privacy: `destaque-ai-ops/learnings/` é a camada **anonimizada** já — `destaque-ai-ops/clients/[X]/` (identificáveis) nunca é tocada pela routine. Mesmo assim a pass 2 valida ausência de PII antes de cada update proposto.

A routine **propõe** via PR draft. Não auto-merge. Humano triage — diferente da `geo-seo-news-daily` que push directo porque news-feed.md é log incremental de baixo risco. Aqui mexemos em `references/` que o deck consome em runtime — drift estrutural propaga, por isso revisão humana é obrigatória.

---

## Prompt (copia tudo abaixo do `---`)

---

Hoje é {{TODAY}}. Vais correr o synthesis-weekly da skill destaque.ai: absorver patterns dos learnings anonimizados em `destaque-ai-ops` e propor PR draft com updates fundamentados aos ficheiros de referência da skill `geo-seo-aeo-master`.

## Pré-condição

Verifica que o GitHub MCP scope inclui:
- `dudumendonca84/destaque-ai-ops` (privado, leitura)
- `dudumendonca84/geo-seo-aeo-master` (público, leitura + write)

Se algum scope falhar, para imediatamente e reporta `MCP scope insuficiente — configurar ambos os repos antes de re-correr`. Não tentes workaround.

## Pass 1 — Leitura dos learnings

1. No `destaque-ai-ops`, lista todos os ficheiros em `learnings/` modificados desde a última execução desta routine. Para datar: procura o último commit em `geo-seo-aeo-master/main` com mensagem `synthesis: YYYY-MM-DD weekly absorption from learnings`. Se for a primeira execução, considera tudo em `learnings/` com mtime < 90 dias.

2. Para cada ficheiro, extrai:
   - **Patterns** que emergem (problema observado → acção proposta → resultado), com agregação mínima de **N≥3 engagements** para serem candidatos a publicação
   - **Datapoints** com sample size suficiente (ex: "5 audits B2B SaaS PT identificaram gap em LinkedIn author authority")
   - **Heurísticas validadas em produção** (ex: "Schema `Person` sem `sameAs` correlaciona com citation rate <5% em decision-stage queries")

3. Lê o estado actual de:
   - `skills/geo-seo-aeo-master/references/gap_action_mapping.md`
   - `skills/geo-seo-aeo-master/references/prompts.md` (§ 4 catálogo destaque.ai)
   - `skills/geo-seo-aeo-master/references/benchmarks.md`

   Para cada novo pattern, verifica se já existe um similar — **não duplicar**. Em vez disso refina o existente com novo evidence ou actualiza o "Impacto típico".

## Pass 2 — Anonymization check (CRÍTICO)

Para cada update proposto, garante:

- Nenhum nome de cliente, marca específica, ou pessoa identificável aparece
- Nenhum URL específico de site de cliente
- Nenhum valor monetário com 3+ algarismos significativos que individualize um deal
- N agregado (ex: "5+ engagements observaram X") em vez de "no audit de Y observámos…"
- Pattern formulado em termos de **observable signal → action**, não de "cliente W disse Z"

Se algum item falhar o check, **descarta** o update e regista em `skills/geo-seo-aeo-master/destaque-ai-self/synthesis-log.md` o que foi rejeitado e porquê. Não criar PR com PII — privacy é não-negociável (ver CLAUDE.md do deck-builder § "Privacy boundaries").

## Pass 3 — Apply updates

Para cada update validado, aplica no ficheiro destino conforme a tabela:

| Tipo | Destino | Formato |
|---|---|---|
| Novo pattern por dimensão | `gap_action_mapping.md` (DIMENSÃO N apropriada) | bloco `### Pattern: <título>` com `#### Hipóteses`, `#### Acção`, `#### Esforço`, `#### Impacto típico`, `#### Fonte` (opcional) |
| Refinamento de pattern existente | `gap_action_mapping.md` | edit in-place; adiciona `[YYYY-MM-DD updated]` no Impacto típico |
| Novo prompt canónico do segmento | `prompts.md` § 4 | linha no tier apropriado com `[YYYY-MM-DD added]` |
| Benchmark com sample-size publicável | `benchmarks.md` | entry numerada (§N) com source URL, ou nota "single-case observation, treat as directional" se N<5 |

Para `benchmarks.md`: sample-size mínimo é **N≥5** ou nota explícita de direccionalidade. Não inventar números — princípio SINAL "No fabricated benchmarks".

## Pass 4 — Validação de contratos parseáveis

Corre `node scripts/validate-skill-tables.mjs` a partir da raiz do `geo-seo-aeo-master`. Se exit code != 0, descreve o que falhou na resposta e **PARA** — não criar PR. Provavelmente um update partiu um header consumido pelo deck-builder (ver INTERFACES.md). Corrige o header e re-corre o validator antes de prosseguir.

## Pass 5 — PR + log

1. Cria branch `synthesis-weekly/{{TODAY}}` no `geo-seo-aeo-master` a partir de `main`. Se já existir do {{TODAY}} (re-run), faz force-push e edita o PR existente em vez de criar duplicado.
2. Commit dos updates com mensagem `synthesis: {{TODAY}} weekly absorption from learnings`.
3. Push e abre **PR DRAFT** contra `main`.
4. Corpo do PR:
   - Lista das absorções: `N patterns novos`, `M refinados`, `K prompts adicionados`, `L benchmarks novos`
   - Para cada um, breve descrição do signal observado (anonimizado) e ficheiro destino
   - Sem nome de cliente, sem dados identificáveis
5. Adiciona log em `skills/geo-seo-aeo-master/destaque-ai-self/synthesis-log.md`:
   ```
   ## {{TODAY}}
   - Ficheiros lidos em learnings/: N
   - Updates propostos: gap_action_mapping (X novos, Y refinados), prompts (Z adicionados), benchmarks (W adicionados)
   - Updates rejeitados (anonymization): N — descrição breve
   - PR: <link>
   ```

IMPORTANTE: PR **DRAFT**, não push directo a `main`. A routine propõe; o humano decide o que merge. Se zero updates passam o anonymization check, regista no log mas **não cria PR vazio** — silêncio é melhor que ruído.
