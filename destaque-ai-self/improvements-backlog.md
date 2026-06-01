# destaque.ai — Improvements Backlog

Última actualização: 2026-06-01

Prioridades: **P0** = bloqueante/crítico | **P1** = alta | **P2** = média | **P3** = longo prazo
Estado: **OPEN** | **IN PROGRESS** | **DONE**

---

## P0 — Crítico

| ID | Item | Finding | Esforço | Estado | Notas |
|---|---|---|---|---|---|
| BL-001 | Criar entrada Wikidata para destaque.ai (Tuasunt, Lda.) | F01 entity | 2h | OPEN | Campos mínimos: name, instance of: company, country: PT, headquarters: Lisboa, inception: 2026, official website, LinkedIn ID. Depois adicionar QID ao Organization.sameAs. |
| BL-002 | Criar Google Business Profile | F01 entity | 1h | OPEN | NAP deve ser consistente com schema: Rua Luís de Freitas Branco n.º 42 D, 1600-491 Lisboa. |
| BL-003 | Criar Bing Places for Business | F01 entity | 1h | OPEN | Importar de Google Business após criação. |
| BL-004 | Criar Apple Business Connect | F01 entity | 1h | OPEN | Apple Maps listing — relevante para citação em Apple Intelligence. |
| BL-005 | Adicionar Person schema ao(s) fundador(es) | F02, F07 E-E-A-T | 3h dev | OPEN | Schema: `Person` com `name`, `jobTitle`, `worksFor` → #organization, `sameAs` → LinkedIn. Injectar no /sobre e como `author` nos artigos. |
| BL-006 | Lançar PR do estudo a media Tier-1 PT | F03 authority | 4h redacção | OPEN | Targets: ECO.pt, Observador, Dinheiro Vivo, Jornal de Negócios. Ângulo: "96% do SaaS B2B português sem política para IA — dados primários". |

---

## P1 — Alta prioridade

| ID | Item | Finding | Esforço | Estado | Notas |
|---|---|---|---|---|---|
| BL-007 | Implementar Content-Security-Policy | F04 técnica | 1h dev | OPEN | Via next.config.js headers(). Começar com policy permissiva (report-only mode) para evitar quebras. |
| BL-008 | Criar llms-full.txt | F05 GEO | 4h | OPEN | Concatenar conteúdo de homepage, /servico, /sobre, /glossario, e os 9 blog posts. Servir como `text/plain`. |
| BL-009 | Adicionar Claude-User e Claude-SearchBot a robots.txt | F06 técnica | 15min dev | OPEN | Não há impacto funcional (wildcard cobre), mas alinha com robots.txt matrix recomendada em frameworks.md. |
| BL-010 | Adicionar Person schema ao /sobre | F07, F08 | 2h dev | OPEN | Dependente de BL-005. Também adicionar `AboutPage` type à página. |
| BL-011 | Executar prompt-test manual completo (Tiers 1, 4, 7) | GEO audit | 3h | OPEN | Browser PT autenticado. Documentar em destaque-ai-self/prompt-logs/2026-06-01/. |
| BL-012 | Activar Bing Webmaster Tools + AI Performance dashboard | Medição | 30min | OPEN | https://www.bing.com/webmasters — único telemetria de primeira parte de AI citations disponível. |
| BL-013 | Verificar GA4 com canal AI customizado | Medição | 30min dev | OPEN | Regex: `^(chatgpt\.com\|perplexity\.ai\|claude\.ai\|gemini\.google\.com\|copilot\.microsoft\.com)`. |

---

## P2 — Média prioridade

| ID | Item | Finding | Esforço | Estado | Notas |
|---|---|---|---|---|---|
| BL-014 | Adicionar BreadcrumbList a todos os blog posts | F09 schema | 2h dev | OPEN | Schema: início → blog → post. Implementar no template. |
| BL-015 | Criar infográfico de dados do estudo | F10 imagens | 4h design + 1h dev | OPEN | Visualização dos 4 dados principais (96%, 60%, 29%, 31%). Formato SVG preferido. Adicionar `ImageObject` schema e alt descritivo. |
| BL-016 | Actualizar Organization.sameAs com Wikidata QID | F11 entity | 30min dev | OPEN | Bloqueado por BL-001 (criar Wikidata primeiro). |
| BL-017 | Verificar e declarar X/Twitter em sameAs | F11 entity | 30min | OPEN | Verificar se conta X existe para destaque.ai. Se sim, adicionar ao sameAs. |
| BL-018 | Verificar PageSpeed Insights / CWV | Performance | 1h | OPEN | Requere browser PT com sessão Vercel activa. URL: https://pagespeed.web.dev/. |
| BL-019 | Remover `Host:` directive do robots.txt | Técnica | 5min dev | OPEN | Directive deprecated. Não causa dano mas é noise. |
| BL-020 | Verificar presença em pai.pt agências GEO | Authority | 1h | OPEN | Artigo "Recomendações de Agências Digitais GEO" existe em pai.pt — verificar se destaque.ai está ou pode ser adicionada. |
| BL-021 | Submeter destaque.ai a G2 ou Capterra | Authority | 2h | OPEN | Directórios que Perplexity cita frequentemente (~14–46% das respostas segundo Profound). |

---

## P3 — Longo prazo

| ID | Item | Finding | Esforço | Estado | Notas |
|---|---|---|---|---|---|
| BL-022 | Criar versões EN dos 3 blog posts top-performing | F12 GEO | 8h/post | OPEN | Priorizar os artigos com mais tráfego (verificar via GSC). |
| BL-023 | Publicar primeiro case study com resultados reais | F13 E-E-A-T | 6h + aprovação | OPEN | Aguarda cliente com resultados mensuráveis e permissão de divulgação. |
| BL-024 | Documentar methodology de medição publicamente | F14 E-E-A-T | 3h redacção | OPEN | Reforça credibilidade. Alinhado com "Transparency radical" declarado no /sobre. |
| BL-025 | Criar página EN /en ou subdomínio | F12 GEO | Sprint | OPEN | Dependente de estratégia de mercado ES/EN. Não prioritário sem validação de demand. |
| BL-026 | Avaliar expansão ES (espanhol) | Scope | Sprint | OPEN | Depende de pipeline ES activo. |

---

## DONE

*(Nenhum item concluído — primeira auditoria)*

---

## Regras de gestão

- Items resolvidos movem para secção DONE com data de resolução.
- Novos items adicionados com ID sequencial (BL-NNN).
- Reordenação de prioridade P0/P1/P2/P3 a cada auditoria semanal.
- Referência cruzada com audit-history.md para tracking de delta semanal.
