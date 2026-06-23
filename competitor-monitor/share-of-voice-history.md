---
title: Share of Voice — histórico cumulativo
maintained_by: competitor-monitor (Dimensão 3)
updated_via: rotina semanal `competitor-monitor-weekly` (append-only)
---

# Share of Voice — histórico cumulativo

Série temporal das aparições de cada concorrente nos 5 prompts fixos da rotina (Dimensão 1 de `competitor-monitor/monitor-prompt.md`), agregada por semana. Cada linha desta tabela é o snapshot semanal de aparições — ler em **tendência**, não em valor absoluto.

**Convenção:**
- N total de aparições por semana = 5 prompts × 4 motores augmented (chatgpt, claude, gemini, grok) = **20 respostas**
- Aparições = vezes em que o nome do player aparece em qualquer das 20 respostas
- Posição média = média da posição (1 = primeiro mencionado) considerando só respostas em que aparece
- Δ = diferença vs semana imediatamente anterior (mesma métrica)

## Tabela

| Semana | Player | Aparições (/20) | Posição média | Δ aparições | Notas |
|---|---|---|---|---|---|

*A primeira execução da rotina vai popular as primeiras linhas. Ler tendências a partir de ~4 semanas de dados.*

## Como ler

- **Subida sustentada de aparições** ao longo de 4-6 semanas = o concorrente está a ganhar peso editorial nos modelos. Investigar o que mudou (Dimensão 2 do report da semana correspondente).
- **Descida sustentada da posição média** (de 3.x para 1.x) = mesmo player, melhor recall — mais importante que aparições brutas.
- **Surto numa semana isolada** = ignorar. Pode ser variância do modelo, não signal.
- **Player novo a aparecer** = primeiro chequer se entrou em `known-competitors.md` esta semana via Dimensão 0. Se sim, é descoberta natural; se não, é alucinação ou nome ainda não tracked.

## Manutenção

Append-only. Cada execução semanal adiciona N linhas (uma por player com aparições > 0). Não editar histórico. Se um player muda de nome (rebrand), abrir nova linha com o nome novo e nota em `known-competitors.md`; manter o histórico do nome antigo para não partir a série.
