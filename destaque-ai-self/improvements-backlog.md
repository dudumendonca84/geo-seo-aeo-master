---
title: destaque.ai — improvements backlog
last_updated: 2026-06-08
---

# destaque.ai — Backlog de melhorias

Prioridades: **P0** = bloqueador crítico / esta semana | **P1** = importante / próximas 6 semanas | **P2** = melhoria relevante / Q3 2026 | **P3** = longo prazo / 90+ dias

---

## P0 — Bloqueador crítico

- [ ] **[P0-01]** Verificar `robots.txt` — confirmar que Googlebot **não** está bloqueado (causa mais provável para zero indexação)  
  _Adicionado: 2026-06-08 | Verificável em: browser / curl fora do sandbox_

- [ ] **[P0-02]** Conectar Google Search Console e submeter sitemap.xml  
  _Adicionado: 2026-06-08 | Owner: Eduardo_

- [ ] **[P0-03]** Confirmar SSR activo — o HTML inicial deve conter o conteúdo visível sem JS  
  _Adicionado: 2026-06-08 | Verificar: View Source no browser, comparar com curl_

- [ ] **[P0-04]** Criar item Wikidata para destaque.ai — preencher: instance_of, country, headquarters, industry, founder, inception_date, official_website, LinkedIn_ID  
  _Adicionado: 2026-06-08 | Owner: Eduardo | Esforço: 3h_

- [ ] **[P0-05]** Activar GitHub Actions workflow para `daily-agent` — `daily-agent/news-feed.md` está vazio, agente nunca correu  
  _Adicionado: 2026-06-08 | Owner: DevOps_

- [ ] **[P0-06]** Executar prompt-test completo Tier 1 (D1–D10) + Tier 4 (P1–P9) + Tier 7 (V1–V5) em todos os 5 engines  
  _Adicionado: 2026-06-08 | Owner: Eduardo | Documentar em: `destaque-ai-self/prompt-test-results/2026-06-08.md`_

---

## P1 — Importante

- [ ] **[P1-01]** Verificar e completar `robots.txt` — adicionar explicitamente: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`, `Claude-SearchBot`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended`  
  _Adicionado: 2026-06-08_

- [ ] **[P1-02]** Conectar Bing Webmaster Tools, submeter sitemap, activar AI Performance dashboard  
  _Adicionado: 2026-06-08 | Referência: blogs.bing.com, 9 Feb 2026_

- [ ] **[P1-03]** Criar LinkedIn company page para destaque.ai  
  _Adicionado: 2026-06-08_

- [ ] **[P1-04]** Publicar `llms.txt` e `llms-full.txt` na raiz do site — declarar todos os URLs do sitemap  
  _Adicionado: 2026-06-08 | Referência: llmstxt.org_

- [ ] **[P1-05]** Implementar `Organization` JSON-LD com `sameAs` para LinkedIn, Wikidata, GitHub, Crunchbase  
  _Adicionado: 2026-06-08_

- [ ] **[P1-06]** Criar `Person` JSON-LD para Eduardo Mendonça com `sameAs` para LinkedIn  
  _Adicionado: 2026-06-08_

- [ ] **[P1-07]** Verificar e completar security headers: HSTS, X-Content-Type-Options, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy  
  _Adicionado: 2026-06-08 | Verificar via: securityheaders.com (fora do sandbox)_

- [ ] **[P1-08]** Verificar hreflang: `pt-PT`, `en-GB`, `x-default` declarados correctamente  
  _Adicionado: 2026-06-08_

- [ ] **[P1-09]** Publicar 3 artigos com estatísticas originais sobre GEO/AEO em Portugal  
  _Adicionado: 2026-06-08 | Principal alavanca de citação (Aggarwal et al. 2023)_

- [ ] **[P1-10]** Configurar GA4 com canal AI — utm_source para ChatGPT, Perplexity, Claude, Copilot  
  _Adicionado: 2026-06-08_

- [ ] **[P1-11]** Seleccionar ferramenta de monitorização GEO (Peec AI ou Otterly) e activar tracking da destaque.ai  
  _Adicionado: 2026-06-08_

- [ ] **[P1-12]** Publicar em pai.pt  
  _Adicionado: 2026-06-08_

---

## P2 — Melhoria relevante (Q3 2026)

- [ ] **[P2-01]** Outreach para Observador Económico, ECO, Jornal de Negócios — artigo de opinião ou entrevista sobre GEO  
  _Adicionado: 2026-06-08_

- [ ] **[P2-02]** Implementar `FAQPage` e `HowTo` schema nas páginas de serviço  
  _Adicionado: 2026-06-08_

- [ ] **[P2-03]** Criar versões EN das páginas principais (bilinguismo PT/EN é o substrato para citação em LLMs ingleses)  
  _Adicionado: 2026-06-08_

- [ ] **[P2-04]** Publicar survey ou análise com dados originais sobre GEO em Portugal  
  _Adicionado: 2026-06-08_

- [ ] **[P2-05]** Verificar e optimizar alt text das imagens (cobertura alvo: 100%)  
  _Adicionado: 2026-06-08_

- [ ] **[P2-06]** Verificar compression (Brotli activo), cache headers, formatos de imagem (WebP/AVIF)  
  _Adicionado: 2026-06-08_

- [ ] **[P2-07]** Crunchbase profile para destaque.ai  
  _Adicionado: 2026-06-08_

- [ ] **[P2-08]** Verificar Google Business Profile (Google Maps) — criar se não existir  
  _Adicionado: 2026-06-08_

- [ ] **[P2-09]** Verificar Bing Places — criar se não existir  
  _Adicionado: 2026-06-08_

---

## P3 — Longo prazo (90+ dias)

- [ ] **[P3-01]** Case study publicado com métricas reais de cliente (conversão, tráfego AI, citações)  
  _Adicionado: 2026-06-08_

- [ ] **[P3-02]** Acumular cobertura media PT suficiente para avaliar elegibilidade Wikipedia  
  _Adicionado: 2026-06-08_

- [ ] **[P3-03]** Programa de certificação verificável para Eduardo Mendonça (ex: Google, Semrush, HubSpot)  
  _Adicionado: 2026-06-08_

- [ ] **[P3-04]** Estratégia de link building — earned media e parcerias PT tech ecosystem  
  _Adicionado: 2026-06-08_

---

## DONE

_Nenhum item concluído ainda (primeira auditoria)._
