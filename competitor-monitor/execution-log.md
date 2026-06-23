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
