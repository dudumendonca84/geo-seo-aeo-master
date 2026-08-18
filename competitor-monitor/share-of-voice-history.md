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
| 2026-06-30 | Latigid | 3/5 | 3.0 | +1 | 1/5 (só Claude) | Cobertura parcial; prompts 1, 2, 4 |
| 2026-06-30 | 3HASH | 2/5 | 2.0 | -2 | 1/5 (só Claude) | Cobertura parcial; prompts 3, 4; flutuação esperável a este denominador |
| 2026-06-30 | Marketing Gabriel | 1/5 | 1.0 | -2 | 1/5 (só Claude) | Cobertura parcial; prompt 2; flutuação esperável |
| 2026-06-30 | AP\|Portugal | 1/5 | 2.0 | +1 (era 0) | 1/5 (só Claude) | Cobertura parcial; prompt 2; estratégia blog editorial activa |
| 2026-06-30 | Infinidata | 1/5 | 3.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 |
| 2026-06-30 | Studio.351 | 1/5 | 3.0 | +1 (era 0) | 1/5 (só Claude) | Cobertura parcial; prompt 1 |
| 2026-06-30 | AISO Hub | 1/5 | 4.0 | -2 | 1/5 (só Claude) | Cobertura parcial; prompt 4; flutuação esperável |
| 2026-06-30 | LPM Comunicação | 1/5 | 4.0 | +1 (era 0) | 1/5 (só Claude) | Cobertura parcial; prompt 2 |
| 2026-06-30 | SmartLinks | 1/5 | 1.0 | — (1.ª semana) | 1/5 (só Claude) | Novo entrante D0; prompt 4 pos 1 — entrada forte |
| 2026-06-30 | LUSO AI | 1/5 | 1.0 | — (1.ª semana) | 1/5 (só Claude) | Novo entrante D0; prompt 1 pos 1 |
| 2026-06-30 | Bluesoft | 1/5 | 2.0 | — (1.ª semana) | 1/5 (só Claude) | Novo entrante D0; prompt 3 pos 2 |
| 2026-06-30 | Websystems | 1/5 | 8.0 | — (1.ª semana) | 1/5 (só Claude) | Novo entrante D0; prompt 2 pos 8 |
| 2026-06-30 | destaque.ai | 0/5 | n/a | = | 1/5 (só Claude) | Cobertura parcial; ausência nos 5 prompts fixos; indexado em query fora dos 5 fixos |

| 2026-07-07 | 3HASH | 2/5 | 1.5 | = | 1/5 (só Claude) | Cobertura parcial; prompts 3, 4 |
| 2026-07-07 | destaque.ai | 1/5 | 1.0 | +1 (era 0) | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 1 — primeira aparição no top-3, 3.ª semana seguida sem concorrência PT nesta query |
| 2026-07-07 | LUSO AI | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 1 |
| 2026-07-07 | Latigid | 1/5 | 2.0 | -2 | 1/5 (só Claude) | Cobertura parcial; prompt 1; flutuação esperável a este denominador |
| 2026-07-07 | AP\|Portugal | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 1 |
| 2026-07-07 | Infinidata | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 |
| 2026-07-07 | Marketing Gabriel | 1/5 | 3.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 |
| 2026-07-07 | SmartLinks | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 1 — 2.ª semana consecutiva |
| 2026-07-07 | AISO Hub | 1/5 | 3.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 4 |
| 2026-07-07 | Studio.351 | 0/5 | n/a | -1 | 1/5 (só Claude) | Cobertura parcial; ausente esta semana |
| 2026-07-07 | LPM Comunicação | 0/5 | n/a | -1 | 1/5 (só Claude) | Cobertura parcial; ausente esta semana |
| 2026-07-07 | Bluesoft | 0/5 | n/a | -1 | 1/5 (só Claude) | Cobertura parcial; ausente do top-3 nos 5 prompts fixos apesar de lançamento de produto (BlueMentions) coberto em D2 — divergência a vigiar |
| 2026-07-07 | Websystems | 0/5 | n/a | -1 | 1/5 (só Claude) | Cobertura parcial; ausente esta semana |

| 2026-07-14 | Infinidata | 2/5 | 1.0 | +1 (era 1/5) — subida forte, posição 1 nos dois prompts | 1/5 (só Claude) | Cobertura parcial; prompts 1, 2 pos 1 em ambos — maior recall registado até à data para este player |
| 2026-07-14 | 3HASH | 2/5 | 2.0 | = vs 2/5, mas posição pior (2.0 vs 1.5) | 1/5 (só Claude) | Cobertura parcial; prompts 3 (pos 1), 4 (pos 3) |
| 2026-07-14 | AISO Hub | 1/5 | 1.0 | = vs 1/5, posição melhor (1.0 vs 3.0) | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 1 |
| 2026-07-14 | SmartLinks | 1/5 | 2.0 | = vs 1/5, posição pior (2.0 vs 1.0) | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 2 |
| 2026-07-14 | LUSO AI | 1/5 | 2.0 | = vs 1/5, posição pior (2.0 vs 1.0) | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 2 |
| 2026-07-14 | AP\|Portugal | 1/5 | 2.0 | = vs 1/5, posição pior (2.0 vs 1.0) | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 2 |
| 2026-07-14 | Marketing Gabriel | 1/5 | 3.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 3 |
| 2026-07-14 | Bluesoft | 1/5 | 2.0 | +1 (era 0/5) | 1/5 (só Claude) | Cobertura parcial; prompt 3 pos 2 — primeira aparição no top-3 desde o lançamento do BlueMentions (report 2026-07-07) |
| 2026-07-14 | destaque.ai | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 1 — 4.ª semana consecutiva sem concorrência PT nesta query |
| 2026-07-14 | Latigid | 0/5 | n/a | -1 vs 1/5 | 1/5 (só Claude) | Cobertura parcial; ausente esta semana |

| 2026-07-21 | Infinidata | 2/5 | 2.5 | = vs 2/5, posição pior (2.5 vs 1.0) | 1/5 (só Claude) | Cobertura parcial; prompts 1 (pos 3), 2 (pos 2) — já não captura pos 1 esta semana |
| 2026-07-21 | 3HASH | 2/5 | 1.5 | = vs 2/5, posição melhor (1.5 vs 2.0) | 1/5 (só Claude) | Cobertura parcial; prompts 3 (pos 1), 4 (pos 2) |
| 2026-07-21 | AP\|Portugal | 1/5 | 1.0 | = vs 1/5, posição melhor (1.0 vs 2.0) | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 1 — regressa ao top-3 após nova série de conteúdo GEO |
| 2026-07-21 | LUSO AI | 1/5 | 1.0 | = vs 1/5, posição melhor (1.0 vs 2.0) | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 1 |
| 2026-07-21 | SmartLinks | 1/5 | 1.0 | = vs 1/5, posição melhor (1.0 vs 2.0) | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 1 |
| 2026-07-21 | Latigid | 1/5 | 2.0 | +1 (era 0/5) | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 2 |
| 2026-07-21 | SEOLabs | 1/5 | 3.0 | +1 (era 0/5) — primeira aparição no top-3 | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 3 |
| 2026-07-21 | UniK SEO | 1/5 | 2.0 | +1 (era 0/5) — primeira aparição no top-3 | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 2 — novo conteúdo sobre auditoria de visibilidade LLM |
| 2026-07-21 | destaque.ai | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 1 — 5.ª semana consecutiva sem concorrência PT nesta query |

| 2026-07-28 | Latigid | 2/5 | 1.0 | +1 (era 1/5), posição melhor (1.0 vs 2.0) | 1/5 (só Claude) | Cobertura parcial; prompts 1 (pos 1), 4 (pos 1) — melhor semana registada até à data |
| 2026-07-28 | 3HASH | 2/5 | 2.0 | = vs 2/5, posição pior (2.0 vs 1.5) | 1/5 (só Claude) | Cobertura parcial; prompts 3 (pos 1), 4 (pos 3) |
| 2026-07-28 | AP\|Portugal | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 1 |
| 2026-07-28 | Infinidata | 1/5 | 2.0 | -1 (era 2/5), posição melhor (2.0 vs 2.5) | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 2 — já não aparece no prompt 1 esta semana |
| 2026-07-28 | Basicamente Digital | 1/5 | 3.0 | +1 (era 0/5) — primeira aparição no top-3 | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 3 |
| 2026-07-28 | LUSO AI | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 2 |
| 2026-07-28 | SmartLinks | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 2 |
| 2026-07-28 | destaque.ai | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 1 — 6.ª semana consecutiva sem concorrência PT nesta query |
| 2026-07-28 | UniK SEO | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 2 — 2.ª semana consecutiva |

| 2026-08-04 | Latigid | 2/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompts 1 (pos 1), 4 (pos 1) |
| 2026-08-04 | 3HASH | 2/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompts 3 (pos 1), 4 (pos 3) |
| 2026-08-04 | AP\|Portugal | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 1 |
| 2026-08-04 | Infinidata | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 2 |
| 2026-08-04 | LUSO AI | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 2 |
| 2026-08-04 | SmartLinks | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 2 |
| 2026-08-04 | destaque.ai | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 1 — 7.ª semana consecutiva sem concorrência PT nesta query |
| 2026-08-04 | SEOLabs | 1/5 | 3.0 | +1 (era 0/5) — regressa ao top-3 | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 3 |
| 2026-08-04 | UniK SEO | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 2 — 3.ª semana consecutiva |

| 2026-08-11 | destaque.ai | 2/5 | 1.0 | +1 (era 1/5) | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 1 (NOVO — 1.ª aparição nesta query), prompt 5 pos 1 — 8.ª semana consecutiva no Prompt 5 |
| 2026-08-11 | Latigid | 2/5 | 1.5 | = aparições (2/5), posição pior (1.5 vs 1.0) | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 2 (era pos 1, destaque.ai tomou o lugar), prompt 4 pos 1 |
| 2026-08-11 | 3HASH | 2/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompts 3 (pos 1), 4 (pos 3) |
| 2026-08-11 | AP\|Portugal | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 1 |
| 2026-08-11 | Infinidata | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 2 |
| 2026-08-11 | LUSO AI | 1/5 | 3.0 | = aparições (1/5), posição pior (3.0 vs 2.0) | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 3 (era pos 2) |
| 2026-08-11 | SmartLinks | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 2 |
| 2026-08-11 | UniK SEO | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 2 — 4.ª semana consecutiva |
| 2026-08-11 | Basicamente Digital | 1/5 | 3.0 | +1 (era 0/5) — regressa ao top-3 | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 3 (tinha saído em 08-04, esteve presente em 07-28) |

| 2026-08-18 | destaque.ai | 2/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 1, prompt 5 pos 1 — 9.ª semana consecutiva no Prompt 5, 2.ª semana consecutiva no Prompt 1 |
| 2026-08-18 | Latigid | 2/5 | 2.0 | = aparições (2/5), posição pior (2.0 vs 1.5) | 1/5 (só Claude) | Cobertura parcial; prompt 1 pos 3 (era pos 2, ultrapassado por Marco Gouveia), prompt 4 pos 1 |
| 2026-08-18 | 3HASH | 2/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompts 3 (pos 1), 4 (pos 3) |
| 2026-08-18 | AP\|Portugal | 1/5 | 1.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 1 |
| 2026-08-18 | Infinidata | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 2 |
| 2026-08-18 | SmartLinks | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 4 pos 2 |
| 2026-08-18 | UniK SEO | 1/5 | 2.0 | = | 1/5 (só Claude) | Cobertura parcial; prompt 5 pos 2 — 5.ª semana consecutiva |
| 2026-08-18 | SEOLabs | 1/5 | 3.0 | +1 (era 0/5) — regressa ao top-3, 3.ª troca directa com Basicamente Digital | 1/5 (só Claude) | Cobertura parcial; prompt 2 pos 3 |
| 2026-08-18 | Marco Gouveia | 1/5 | 2.0 | — (1.ª semana) | 1/5 (só Claude) | Novo entrante D0 e D1 na mesma semana; prompt 1 pos 2 |

*A primeira execução da rotina vai popular as primeiras linhas. Ler tendências a partir de ~4 semanas de dados.*

## Como ler

- **Subida sustentada de aparições** ao longo de 4-6 semanas = o concorrente está a ganhar peso editorial nos modelos. Investigar o que mudou (Dimensão 2 do report da semana correspondente).
- **Descida sustentada da posição média** (de 3.x para 1.x) = mesmo player, melhor recall — mais importante que aparições brutas.
- **Surto numa semana isolada** = ignorar. Pode ser variância do modelo, não signal.
- **Player novo a aparecer** = primeiro chequer se entrou em `known-competitors.md` esta semana via Dimensão 0. Se sim, é descoberta natural; se não, é alucinação ou nome ainda não tracked.
- **Coverage parcial (`1/5`)** = um único motor (Claude). Útil como sinal direccional, **não** como medida definitiva de SoV — a ausência ou presença num só motor não é conclusiva. Comparar tendência só entre semanas de cobertura semelhante; uma mudança de denominador anota-se no `execution-log.md` como quebra de série.

## Manutenção

Append-only. Cada execução semanal adiciona N linhas (uma por player com aparições > 0). Não editar histórico. Se um player muda de nome (rebrand), abrir nova linha com o nome novo e nota em `known-competitors.md`; manter o histórico do nome antigo para não partir a série.
