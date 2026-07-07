---
title: Execution log — competitor-monitor
maintained_by: competitor-monitor (rotina semanal)
---

# Execution log — competitor-monitor

Uma linha por execução semanal: data, dimensões cobertas, candidatos descobertos, anomalias. Não substitui o report — é metadata operacional.

## Formato

```
## YYYY-MM-DD HH:MM (Europe/Lisbon)
- Dimensões: D0✓ D1✓ D2✓ D3✓ D4✓ (ou X✗ com motivo)
- Candidatos D0: [N] → adicionados [M] a known-competitors.md
- SoV history: linha adicionada para [N] players com aparições
- Anomalias: [descrição ou "nenhuma"]
- Engines (Dimensão 1): chatgpt ✓ · claude ✓ · gemini ✓ · grok ✗ (motivo)
- Report: competitor-monitor/reports/YYYY-MM-DD.md
```

## Entries

## 2026-06-23 (Europe/Lisbon)
- Dimensões: D0✓ D1✓ D2✓ D3✓ D4✓
- Candidatos D0: 3 analisados → 2 adicionados a known-competitors.md (AISO Hub, Infinidata); 1 rejeitado (Organic301 — base Brasil)
- SoV history: 6 linhas adicionadas (3HASH, Marketing Gabriel, AISO Hub, Latigid, Infinidata, destaque.ai)
- Anomalias: (1) ChatGPT, Gemini, Grok não verificados — sessão autónoma sem acesso interactivo às interfaces; SoV apenas /5 (Claude). (2) "Marketing Gabriel" em known-competitors.md usa URL marketinggabriel.com mas pesquisas apontam para gabrielcunha.com/agencia-geo/ — verificar na próxima execução se são o mesmo operador ou entidades distintas.
- Engines (Dimensão 1): chatgpt ✗ (sem acesso) · claude ✓ (web search) · gemini ✗ (sem acesso) · grok ✗ (sem acesso)
- Report: competitor-monitor/reports/2026-06-23.md

## 2026-06-23 — correcção pós-execução (sessão manual)
- Tarefa 1 (buckets): adicionada coluna `Bucket` a known-competitors.md; classificadas as 9 entradas pelo teste das 4 perguntas. **AISO Hub reclassificada `peer`** (passa as 4 perguntas: B2B SaaS, audit-first AISO, mesmo momento, substituível ≥70% — peer mais sério desde o 3HASH). Infinidata confirmada `adjacent_consultancy` (full-service, falha substitutability). Regra gravada: nenhuma marca entra em SoV sem bucket.
- Tarefa 2 (cobertura): linhas 2026-06-23 de share-of-voice-history.md marcadas `coverage: 1/5 (só Claude)`; convenção mudada de denominador fixo /20 para denominador real /N. Decisão: série Claude-only rotulada — semanas parciais ficam na série mas marcadas, não excluídas.
- Tarefa 4 (anomalia Marketing Gabriel): **RESOLVIDA.** Operador = Gabriel Cunha; "Marketing Gabriel" é a marca; URL canónico do serviço GEO = https://www.gabrielcunha.com/agencia-geo/ (lançou GEO/AEO Fev 2026, 3 níveis, base 16 anos SEO). known-competitors.md corrigida de marketinggabriel.com para o URL verificado.
- monitor-prompt.md: Dimensão 1 passa a declarar honestamente a limitação de runtime (só Claude augmented na sessão autónoma); D2/D4 realçadas como o coração do benchmarking. Sem gate duro, sem mudar push directo a main (decisões do founder mantidas). Motores corrigidos para os 4 reais do ecossistema (chatgpt/claude/gemini/grok); Perplexity/Google AI Mode/Bing Copilot não fazem parte do SET deste sistema.
- Anomalias residuais: nenhuma. SEOLabs e LusoAI (sugeridos externamente) **não** entram — não há entidade PT verificável; ficam em fila de human-review (§8 competitor_filtering.md) até aparecerem em ≥3 respostas/2 semanas.

## 2026-06-30 (Europe/Lisbon)
- Dimensões: D0✓ D1✓ D2✓ D3✓ D4✓
- Candidatos D0: 9 avaliados → 7 adicionados a known-competitors.md (SmartLinks, LUSO AI, Helder Mesquita, Websystems, Bluesoft, UniK SEO, Jelly); 2 em observação sem adição (Abia Digital — blog vs serviço inconclusivo; Marco Gouveia — sinal ainda débil); múltiplos rejeitados (base BR ou SaaS internacionais). LUSO AI: previamente retida por "sem entidade PT verificável" (log 2026-06-23); URL GEO verificado esta semana — adicionada como adjacent_vendor.
- SoV history: 13 linhas adicionadas (Latigid 3/5, 3HASH 2/5, Marketing Gabriel 1/5, AP|Portugal 1/5, Infinidata 1/5, Studio.351 1/5, AISO Hub 1/5, LPM Comunicação 1/5, SmartLinks 1/5, LUSO AI 1/5, Bluesoft 1/5, Websystems 1/5, destaque.ai 0/5)
- Anomalias: (1) ChatGPT, Gemini, Grok não verificados — sessão autónoma sem acesso; SoV apenas /5 (Claude). (2) Expansão expressiva: mercado passou de 9 para 16 concorrentes rastreados; 7 novos entrantes confirmados numa semana — sinal de aceleração do sector GEO PT. (3) SmartLinks em posição #1 na query "consultoria AI search AEO Portugal" na primeira semana de tracking — vigiar bucket (peer vs adjacent) nas próximas 2 semanas. (4) Flutuações notadas em 3HASH (-2) e AISO Hub (-2) vs semana anterior; com denominador /5 e 1 motor, flutuações de ±2 são ruído — não reagir sem 4+ semanas de série.
- Engines (Dimensão 1): chatgpt ✗ (sem acesso) · claude ✓ (web search) · gemini ✗ (sem acesso) · grok ✗ (sem acesso)
- Report: competitor-monitor/reports/2026-06-30.md

## 2026-07-07 (Europe/Lisbon)
- Dimensões: D0✓ D1✓ D2✓ D3✓ D4✓
- Candidatos D0: 6 avaliados → 2 adicionados a known-competitors.md (SEOLabs, Somos6Digital); SEOLabs foi previamente rejeitada em 2026-06-23 por "sem entidade PT verificável" — reclassificada esta semana com serviço GEO/AEO/LLM confirmado no site próprio (não erro anterior, mudança de estado). 2 em observação sem adição (Local SEO Portugal — evidência de GEO pago pouco explícita; Orbis — incerto se é operação PT dedicada ou rede internacional localizada). 1 sinal não verificado a vigiar (Prosperidade Conteúdos, surgiu no Prompt 1 de D1, pos 3 — entra em fila de human-review conforme `competitor_filtering.md` §8). Múltiplos rejeitados (base BR, directórios, sem serviço GEO dedicado).
- SoV history: 12 linhas adicionadas (3HASH 2/5, destaque.ai 1/5, LUSO AI 1/5, Latigid 1/5, AP|Portugal 1/5, Infinidata 1/5, Marketing Gabriel 1/5, SmartLinks 1/5, AISO Hub 1/5, Studio.351 0/5, LPM Comunicação 0/5, Bluesoft 0/5, Websystems 0/5)
- Anomalias: (1) ChatGPT, Gemini, Grok não verificados — sessão autónoma sem acesso; SoV apenas /5 (Claude). (2) **destaque.ai apareceu pela primeira vez em SoV** (1/5, pos 1, prompt 5) — 3.ª semana consecutiva sem concorrência PT nesse prompt específico. (3) Bluesoft lançou ferramenta gratuita "BlueMentions" + case study Jaba Recordati (+80% citações IA) — movimento de produto mais relevante da rotina até à data, mas sem correspondência em aparições no top-3 dos 5 prompts fixos desta semana; divergência entre cobertura de imprensa e recall directo, a vigiar. (4) Mercado passou de 16 para 18 concorrentes rastreados.
- Engines (Dimensão 1): chatgpt ✗ (sem acesso) · claude ✓ (web search) · gemini ✗ (sem acesso) · grok ✗ (sem acesso)
- Report: competitor-monitor/reports/2026-07-07.md
