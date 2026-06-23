---
title: Share of Voice — histórico cumulativo
maintained_by: competitor-monitor (Dimensão 3)
updated_via: rotina semanal `competitor-monitor-weekly` (append-only)
---

# Share of Voice — histórico cumulativo

Série temporal das aparições de cada concorrente nos 5 prompts fixos da rotina (Dimensão 1 de `competitor-monitor/monitor-prompt.md`), agregada por semana. Cada linha desta tabela é o snapshot semanal de aparições — ler em **tendência**, não em valor absoluto.

**Convenção:**
- Denominador **pleno** = 5 prompts × 4 motores augmented (chatgpt, claude, gemini, grok) = **20 respostas**. Mas a sessão autónoma da rotina hoje só tem o Claude (ver limitação de runtime em `monitor-prompt.md` §Dimensão 1), por isso o denominador **real** de cada semana é o nº de respostas efectivamente corridas.
- **`coverage`** = motores cobertos / motores mandatory desta semana. `1/5`* hoje (só Claude); sobe quando o ambiente der mais motores. (*Os 4 augmented são chatgpt/claude/gemini/grok; o "5" inclui o slot do tracker multi-motor como alvo de cobertura plena.)
- Aparições = vezes em que o nome do player aparece nas respostas **realmente corridas** (registar `/N real`, ex: `4/5`, não `4/20`).
- Posição média = média da posição (1 = primeiro mencionado) considerando só respostas em que aparece.
- Δ = diferença vs semana anterior **de cobertura comparável** (não comparar uma semana `1/5` com uma `5/5` — denominadores diferentes partem a série).
- **Semanas de cobertura parcial ficam na série, rotuladas** (decisão: série Claude-only rotulada). Ler com cautela, não excluir — a tendência consolida-se à medida que a cobertura estabiliza.

## Tabela

| Semana | Player | Aparições (/N real) | Posição média | Δ aparições | Coverage | Notas |
|---|---|---|---|---|---|---|
| 2026-06-23 | 3HASH | 4/5 | 1.0 | — | 1/5 (só Claude) | Cobertura parcial; ChatGPT/Gemini/Grok não verificados na sessão autónoma |
| 2026-06-23 | AISO Hub | 3/5 | 2.3 | — | 1/5 (só Claude) | Novo entrante D0; cobertura parcial |
| 2026-06-23 | Marketing Gabriel | 3/5 | 2.0 | — | 1/5 (só Claude) | Cobertura parcial |
| 2026-06-23 | Latigid | 2/5 | 2.0 | — | 1/5 (só Claude) | Cobertura parcial |
| 2026-06-23 | Infinidata | 1/5 | 4.0 | — | 1/5 (só Claude) | Novo entrante D0; cobertura parcial |
| 2026-06-23 | destaque.ai | 0/5 | n/a | — | 1/5 (só Claude) | Cobertura parcial; ausência num só motor não é conclusiva |

*A primeira execução da rotina vai popular as primeiras linhas. Ler tendências a partir de ~4 semanas de dados.*

## Como ler

- **Subida sustentada de aparições** ao longo de 4-6 semanas = o concorrente está a ganhar peso editorial nos modelos. Investigar o que mudou (Dimensão 2 do report da semana correspondente).
- **Descida sustentada da posição média** (de 3.x para 1.x) = mesmo player, melhor recall — mais importante que aparições brutas.
- **Surto numa semana isolada** = ignorar. Pode ser variância do modelo, não signal.
- **Player novo a aparecer** = primeiro chequer se entrou em `known-competitors.md` esta semana via Dimensão 0. Se sim, é descoberta natural; se não, é alucinação ou nome ainda não tracked.
- **Coverage parcial (`1/5`)** = um único motor (Claude). Útil como sinal direccional, **não** como medida definitiva de SoV — a ausência ou presença num só motor não é conclusiva. Comparar tendência só entre semanas de cobertura semelhante; uma mudança de denominador anota-se no `execution-log.md` como quebra de série.

## Manutenção

Append-only. Cada execução semanal adiciona N linhas (uma por player com aparições > 0). Não editar histórico. Se um player muda de nome (rebrand), abrir nova linha com o nome novo e nota em `known-competitors.md`; manter o histórico do nome antigo para não partir a série.
