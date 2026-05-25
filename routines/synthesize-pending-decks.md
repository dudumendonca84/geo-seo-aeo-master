# Routine: `synthesize-pending-decks`

**Schedule:** A cada hora (cron `0 * * * *`)
**Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
**Outputs:** Escreve `proposals.deck_blocks` em Supabase do projecto `destaque-ai-deck-builder`. Não commita ficheiros neste repo.

## Propósito

Sintetiza decks-audit personalizados para propostas marcadas com `deck_synthesis_pending = true` na DB do deck-builder. Usa o método SINAL inteiro (esta skill) como cérebro. Corre na subscription **Claude Code Max** do operador — **zero custo de API Anthropic**.

## Env vars necessários (configura na criação da Routine)

| Var | Valor |
|---|---|
| `SUPABASE_URL` | URL do projecto Supabase do deck-builder |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-only, lê/escreve todas as tabelas) |

## Prompt (copia tudo abaixo do `---`)

---

Hoje é {{TODAY}}. Operas o método **SINAL** (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs) para sintetizar decks-audit personalizados para prospects da destaque.ai. Esta tarefa corre em background, **não há intervenção humana até ao output final na DB**.

## 1. Lê o cérebro SINAL (esta skill, este repo)

Lê os ficheiros canónicos antes de processar qualquer proposta:

- `skills/geo-seo-aeo-master/SKILL.md` — identidade, princípios, 8 dimensões, audit workflow
- `skills/geo-seo-aeo-master/references/metrics.md` — definições canónicas (citation rate vs mention, SoV, PAWC)
- `skills/geo-seo-aeo-master/references/benchmarks.md` — números defensáveis com fonte (não inventar)
- `skills/geo-seo-aeo-master/references/gap_action_mapping.md` — patterns por dimensão com effort/impact/source
- `skills/geo-seo-aeo-master/references/frameworks.md` — RAG mechanics, schema, llms.txt, crawler matrix
- `skills/geo-seo-aeo-master/daily-agent/news-feed.md` — estado da arte últimos 24-48h

Estes são a tua base de conhecimento. **Tom sober, Economist register, PT-PT body, numbers over adjectives, no fabricated benchmarks**, conforme principles em SKILL.md.

## 2. Query pending proposals

Faz GET ao Supabase REST API para buscar propostas pendentes:

```bash
curl -s -X GET \
  "$SUPABASE_URL/rest/v1/proposals?deck_synthesis_pending=eq.true&audit_status=eq.completed&select=id,prospect_id,custom_prompts,audit_results,audit_tier" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY"
```

Se a resposta for `[]`, encerra a routine — não há nada a fazer. Loga "no pending synthesis" e termina.

## 3. Para cada pending — synthesize

Para cada proposta retornada, faz o seguinte ciclo:

### 3a. Fetch dados completos

```bash
# Prospect
curl -s "$SUPABASE_URL/rest/v1/prospects?id=eq.{PROSPECT_ID}&select=*" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY"

# Audit runs (1 row por prompt × motor)
curl -s "$SUPABASE_URL/rest/v1/audit_runs?proposal_id=eq.{PROPOSAL_ID}&select=*" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY"

# SINAL scan (1 row max por proposta)
curl -s "$SUPABASE_URL/rest/v1/sinal_scans?proposal_id=eq.{PROPOSAL_ID}&select=*" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY"
```

### 3b. Analisa context-aware (não template)

Lê os findings reais do SINAL scan + amostras das respostas dos motores (audit_runs). **Cada recomendação tua tem de ancorar num finding ou observação concreta dos dados** — não inventes acções genéricas.

Exemplos do que verificar antes de recomendar:

- Se SINAL scan tem `entity.wikidata.present` → não recomendes criar QID; sugere enriquecer
- Se `schema.organization.sameAs.ok` com 5+ entradas → não recomendes adicionar sameAs
- Se prospect já aparece em 80%+ das respostas de algum motor → não é "low visibility" nesse motor, é position que importa
- Se top_competitors está vazio → reflecte que o segmento tem pouca concorrência citada (oportunidade), não que a marca domina
- Lê `gap_action_mapping.md` e aplica os patterns que efectivamente se aplicam aos findings reais

### 3c. Constrói SynthesizedDeck (JSON)

Schema (estrito):

```json
{
  "executive_reading": "4-6 parágrafos sober, PT-PT. Inclui 2-3 números concretos dos dados (citation_rate específico, SINAL score, top finding). Não é elogio nem alarme — é observação editorial.",
  "critical_findings": [
    {
      "title": "curto",
      "why": "2-3 frases com mecanismo + fonte se há",
      "dimension": "technical|content|entity|authority|ux|measurement|positioning|operational",
      "anchor": "finding scan id OU observação audit (ex.: 'Gemini em 0/30 prompts')"
    }
  ],
  "action_plan": {
    "h1": [ { "title": "...", "why": "3-5 frases com mecanismo+origem+source", "effort": "30 min" | "4-8h" | "2 dias", "impact": "+8-15% CR em 3-4 semanas (Aggarwal KDD 2024)" | "Foundation, sem dado isolado", "dimension": "...", "anchor": "...", "source": "URL ou estudo (opcional)" } ],
    "h2": [...],
    "h3": [...],
    "ongoing": [...]
  },
  "projection_6m": {
    "citation_rate_baseline": 0.07,
    "citation_rate_target": 0.32,
    "methodology_note": "Projecção sigmoidal baseada em padrões observados. Não é garantia. Target conservador (max 0.45 OU baseline + 0.25, o menor)."
  },
  "faq": [
    { "q": "Pergunta provável", "a": "Resposta curta e honesta" }
  ]
}
```

Output expectations:
- `executive_reading`: 4-6 parágrafos, ~400-700 palavras
- `critical_findings`: 5-8 entradas, cross-dimensional
- `action_plan`: 3-6 acções por horizonte (12-24 total). **Acções concretas** — não "melhorar schema" mas "adicionar JSON-LD Organization com sameAs: [LinkedIn, Crunchbase, Wikidata]". Cada `why` tem 3-5 frases.
- `faq`: 5-7 perguntas (preço, prazo, ownership, riscos, comparação com agências SEO, garantias)
- **Distribuição de dimensões reflecte a realidade do prospect** — não force PR Tier-1 se já tem coverage; não force Wikipedia se já existe

### 3d. Escreve em Supabase + limpa flag

```bash
curl -s -X PATCH \
  "$SUPABASE_URL/rest/v1/proposals?id=eq.{PROPOSAL_ID}" \
  -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=minimal" \
  -d '{
    "deck_blocks": <JSON object>,
    "deck_synthesized_at": "<ISO now>",
    "deck_synthesized_source": "claude",
    "deck_synthesis_pending": false
  }'
```

### 3e. Loga resultado

Cada proposta processada: regista no `execution-log.md` da skill (ou stdout):
- `proposal_id`
- número de findings críticos no output
- número total de acções no plan
- duração da síntese

## 4. Encerra

Quando todas as pending foram processadas, encerra. Não modifiques ficheiros desta skill durante esta execução — só Supabase REST + log.

## Princípios não negociáveis (reforço)

1. **Tom sober** — Economist register. Nunca "game-changer", "10x", "revolutionary", "leverage", "unlock".
2. **PT-PT body**. EN preservado para identifiers (gpt-5, Schema.org, sameAs, hreflang).
3. **Numbers over adjectives**. Cita fonte quando há.
4. **No fabricated benchmarks**. Se um pattern em `gap_action_mapping.md` cita "+8-15% (Aggarwal KDD 2024)", inclui. Se não há fonte isolada, declara "sem dado isolado, é foundation".
5. **Context-aware** — recomendações ancoradas em findings/observações reais. Não force template.
6. **Cobertura cross-dimensional** — preferencialmente as 8 dimensões, mas só quando há motivação real nos findings.
7. **Audit-grade, não brochure** — analítico, sober, evidence-heavy. Não pitch comercial.

## Erros

Se uma proposta falha (HTTP error, JSON parse, etc.), loga e continua para a próxima. Não pare a routine inteira. Marca a falhada para investigação manual:

```bash
curl -s -X PATCH "$SUPABASE_URL/rest/v1/proposals?id=eq.{PROPOSAL_ID}" \
  -H "..." -d '{"deck_synthesized_source": "fallback", "deck_synthesis_pending": false}'
```

(Setting source = fallback sinaliza ao admin no UI que a síntese precisa de re-trigger.)
