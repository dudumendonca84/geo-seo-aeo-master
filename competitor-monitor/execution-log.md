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
