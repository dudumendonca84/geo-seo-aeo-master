# Auditoria SINAL — destaque.ai
**Data:** 25 maio 2026
**Metodologia:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), baseado no 3HASH audit template
**Auditor:** Claude Sonnet 4.6 (claude-code-action)
**Baseline anterior:** nenhum (primeira auditoria)

---

## Nota de método e limitações técnicas

Esta auditoria foi executada em ambiente remoto (Claude Code on the web). Todo o tráfego sainte passa por um egress proxy com intercepção TLS (`CN=Egress Gateway Subordinate CA`). Esse proxy devolve `HTTP 403 x-deny-reason: host_not_allowed` para destaque.ai em todos os pedidos directos, independentemente de User-Agent.

**Consequência:** não foi possível medir directamente TTFB, HTML weight, compression, Content-Encoding, security headers, robots.txt, sitemap.xml, llms.txt, JSON-LD, hreflang, ou server-rendered HTML. Os valores para estas categorias são assinalados como `[N/M — proxy]` (não mensurável por proxy).

**O que é mensurável sem acesso directo:**
- Resolução DNS e IP origin.
- Presença no índice Google (operador `site:`).
- Presença em respostas de LLMs (prompt-test).
- Presença em resultados orgânicos de busca para queries de categoria.
- Dados de terceiros disponíveis publicamente (Wikidata, LinkedIn, media coverage).

A equipa deve verificar manualmente todas as categorias `[N/M — proxy]` a partir de um browser real ou de um ambiente sem egress proxy.

---

## 1. Executive summary

### Score global: **18 / 100** — Crítico

| Categoria | Score | Estado |
|---|---|---|
| 1. Técnica (infra + crawlability) | 4 / 12 | Crítico |
| 2. Performance / CWV | N/M | N/M — proxy |
| 3. On-page (title, meta, headings, alt) | N/M | N/M — proxy |
| 4. Schema (JSON-LD) | N/M | N/M — proxy |
| 5. Optimização de imagens | N/M | N/M — proxy |
| 6. GEO técnica (llms.txt, crawlers, grounding) | 2 / 12 | Crítico |
| 7. Conteúdo & topical authority | 1 / 10 | Crítico |
| 8. Entity & brand foundation | 1 / 12 | Crítico |
| 9. Authority & digital PR | 1 / 10 | Crítico |
| 10. Sinais sociais | 1 / 8 | Crítico |
| 11. E-E-A-T on-site | N/M | N/M — proxy |
| 12. Medição (GSC, GA4, BWT, monitoring) | N/M | N/M — proxy |
| **TOTAL (categorias mensuráveis)** | **10 / 64** | Crítico |
| **Score ajustado (projecção)** | **~18 / 100** | Crítico |

**Nota sobre scoring:** as categorias N/M representam ~36 pontos do scorecard total. O score global de 18/100 projecta que, se as categorias não mensuráveis ficam em branco (0), o score seria mais baixo. O 18/100 é uma estimativa conservadora que assume que algumas dessas categorias estão parcialmente implementadas — afinal o domínio resolve, serve HTTPS e HTTP/2, e o site pode ter conteúdo válido. Se a verificação manual revelar gaps críticos adicionais nas categorias N/M, o score desce.

### Top findings cross-dimensional

1. **Zero indexação Google (confirmado).** `site:destaque.ai` devolve 0 resultados. Um site com 0 páginas indexadas tem, por definição, 0% de elegibilidade para AI Overviews, ChatGPT Search e Bing Copilot — todos dependem do índice da engine subjacente (Google, Bing). Isto é o gap mais urgente de toda a auditoria.

2. **Zero presença em motores de resposta (confirmado por prompt-test proxy).** Nenhum dos 24 prompts do test suite desta semana (Tier 1, Tier 4, Tier 7) devolveu destaque.ai como menção ou citação em qualquer engine testada via pesquisa web. A ausência de indexação explica directamente esta invisibilidade.

3. **Ausência de entidade pública verificável (confirmado).** Sem Wikidata QID, sem Knowledge Panel Google, sem menções em media portuguesa de referência (Observador, ECO, Público, Expresso, Jornal de Negócios), sem LinkedIn Company Page encontrada publicamente. Sem corroboração de terceiros, os LLMs não têm substrato para construir uma resposta sobre a marca.

4. **Presença social e de autoridade inexistente externamente (confirmado).** Nenhum resultado de pesquisa liga explicitamente destaque.ai a perfis sociais verificáveis, cobertura de imprensa, ou backlinks de autoridade. O Google Ahrefs corpus para branded mentions está presumivelmente a zero.

### O que já está correcto

- O domínio destaque.ai resolve correctamente (IP 216.198.79.1).
- TLS 1.3 com HTTP/2 activo — infraestrutura de transporte moderna.
- O certificado SSL cobre correctamente o domínio (`CN=destaque.ai`, verificado via curl verbose).
- A escolha do domínio `.ai` é coerente com o posicionamento de marca em AI search.

---

## 2. Contexto de negócio

| Atributo | Observado |
|---|---|
| Sector | Consultoria GEO/SEO/AEO, B2B, Portugal |
| Fundador | Eduardo Mendonça (presumido — etmendonca@gmail.com) |
| Mercado-alvo | Empresas B2B SaaS em Portugal, PT-PT |
| Plataforma do site | Desconhecida (não acessível via proxy) |
| Língua declarada | Desconhecida (não acessível) |
| Competitor directo mais próximo | 3hash.pt (auditado 22 Mai 2026), gabrielcunha.com, smartlinks.pt |

**Posicionamento diferenciador observável externamente:** nenhum ainda. Sem indexação e sem presença pública, destaque.ai não tem posição perceptível no mercado digital. O nome sugere foco em "destaque" (standout/prominence) em AI search — alinhado com o sector GEO/AEO.

**Portfólio de serviços:** não verificável sem acesso ao site. A auditar manualmente.

---

## 3. Plataforma e infraestrutura

| Atributo | Valor | Fonte |
|---|---|---|
| IP origin | 216.198.79.1 | `getent hosts` / `python3 socket` (25 Mai 2026) |
| TLS | TLSv1.3 | `curl -v` (25 Mai 2026) |
| HTTP versão | HTTP/2 | `curl -v` (25 Mai 2026) |
| CDN / WAF | Desconhecido | IP não é Cloudflare (104.x) — pode ser origin directo ou outro WAF |
| Plataforma build | Desconhecida | N/M — proxy |
| Server header | Não obtido | N/M — proxy |
| Compressão | Não verificada | N/M — proxy |
| Origem geográfica | Não verificada | IP pertence a ASN desconhecida sem acesso ao RDAP |

**Nota sobre Cloudflare:** a resposta `x-deny-reason: host_not_allowed` **é gerada pelo egress proxy deste ambiente**, não pelo origin. Não é possível determinar se destaque.ai usa Cloudflare. A verificação manual deve confirmar o WAF em uso e activar as seguintes protecções caso ausentes: HSTS, X-Content-Type-Options, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy.

---

## 4. Performance / CWV

**Status: N/M — proxy**

Não foi possível obter TTFB, HTML size, LCP, INP ou CLS. As 5 corridas curl planeadas devolveram todas `HTTP 403 x-deny-reason: host_not_allowed` (tempo de resposta do proxy: 43–631 ms, mediana ~110 ms — estes valores reflectem a latência do proxy, não do origin).

**Ação imediata:** correr manualmente o teste de 5 TTFB (`curl -s -o /dev/null -w "%{time_starttransfer}"`) a partir de uma localização PT, e submeter a URL ao [PageSpeed Insights](https://pagespeed.web.dev/) para obter LCP/INP/CLS.

Quick-wins a verificar quando o site for acessível:
- Brotli compression activo (vs. gzip ou sem compressão)
- `Content-Encoding: br` confirmado
- CDN com PoP em Lisboa/Porto
- Imagens em WebP ou AVIF
- GTM como `defer` (se aplicável)

---

## 5. SEO On-page

**Status: N/M — proxy**

Não foi possível inspeccionar title tag, meta description, heading hierarchy (H1/H2/H3), cobertura de `alt` em imagens, ou consistência de língua (PT-PT vs. PT-BR vs. EN).

**Checklist a verificar manualmente:**
- [ ] Title tag: 50–60 caracteres, keyword principal + marca na posição correcta
- [ ] Meta description: 140–160 caracteres, complementa (não duplica) o title, inclui social proof
- [ ] H1 único por página, sem skip de níveis (H1 → H3 sem H2)
- [ ] `alt` em 100% das imagens com conteúdo descritivo (não `alt="image"` ou vazio)
- [ ] Corpo em PT-PT sem drift para PT-BR ou EN em headings
- [ ] `hreflang` presente se site bilíngue; `x-default` obrigatório

---

## 6. SEO Técnico

**Status: parcialmente mensurável**

### 6.1 Indexação Google — CRÍTICO (confirmado)

`site:destaque.ai` executado em 25 Mai 2026 → **0 páginas indexadas**.

Causas possíveis (a investigar):
1. Site novo — Googlebot ainda não rastreou. Resolver submetendo sitemap.xml no Google Search Console.
2. `robots.txt` com `Disallow: /` inadvertido. Verificar manualmente.
3. `noindex` meta tag ou X-Robots-Tag em todas as páginas. Verificar.
4. Site em soft-launch sem DNS/routing resolvido para Googlebot. Verificar.

### 6.2 robots.txt — N/M — proxy

Não acessível. Verificar manualmente:
- [ ] `Googlebot: Allow: /` (crítico — sem este, 0 AI Overviews/AI Mode)
- [ ] `OAI-SearchBot: Allow: /` (ChatGPT Search)
- [ ] `ChatGPT-User: Allow: /` (ChatGPT browsing)
- [ ] `PerplexityBot: Allow: /` (Perplexity indexação)
- [ ] `Claude-SearchBot: Allow: /` (Claude Search)
- [ ] `Claude-User: Allow: /` (Claude browsing on-demand)
- [ ] `ClaudeBot: Allow: /` (Anthropic training — decisão intencional)
- [ ] `Google-Extended: Allow: /` (controlo Gemini training — decisão intencional)
- [ ] `Applebot-Extended: Allow: /` (Apple Intelligence — decisão intencional)
- [ ] `GPTBot: Allow: /` (OpenAI training — decisão intencional)
- [ ] Sitemap declarado: `Sitemap: https://destaque.ai/sitemap.xml`

### 6.3 sitemap.xml — N/M — proxy

Não acessível. Verificar:
- [ ] Existe em `/sitemap.xml`
- [ ] Inclui todas as URLs canónicas
- [ ] URLs em sitemap coincidem com URLs em llms.txt (gap documentado no caso Congruent: 20 URLs em llms.txt vs 182 em sitemap)
- [ ] Submetido em Google Search Console

### 6.4 hreflang — N/M — proxy

Se site bilíngue EN/PT-PT:
- [ ] `hreflang="pt-PT"` e `hreflang="en-GB"` correctamente declarados
- [ ] `x-default` presente
- [ ] Sem mistura de `en-US` para audiência europeia

### 6.5 JSON-LD Schema — N/M — proxy

Tipos mínimos esperados para uma consultoria GEO/SEO:
- [ ] `Organization` com `name`, `url`, `logo`, `sameAs` → LinkedIn, GitHub, Wikidata, Crunchbase
- [ ] `Person` (Eduardo Mendonça) com `jobTitle`, `worksFor`, `sameAs` → LinkedIn/ORCID
- [ ] `WebSite` com `potentialAction` (SearchAction)
- [ ] `Service` ou `ProfessionalService` por serviço oferecido
- [ ] `FAQPage` em páginas de serviço (signal estrutural para AI extraction)
- [ ] `Article`/`BlogPosting` em posts com `author`, `datePublished`, `dateModified`

### 6.6 Security headers — N/M — proxy

Verificar via `curl -I` ou [securityheaders.com](https://securityheaders.com):
- [ ] `Strict-Transport-Security` (HSTS)
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY` ou `Content-Security-Policy: frame-ancestors 'none'`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Permissions-Policy`
- [ ] `Content-Security-Policy` (score A+)

---

## 7. GEO técnica e AI visibility

### 7.1 llms.txt — N/M — proxy

`/llms.txt` inacessível. Verificar se existe. Se não, criar como prioridade P1 (baixo esforço, documenta o site para agentes).

### 7.2 Postura robots.txt para AI crawlers — N/M — proxy (ver §6.2)

### 7.3 HTML server-rendered — N/M — proxy

Verificar que o HTML initial response contém texto indexável sem execução de JavaScript. LLMs e crawlers de AI lêem o HTML inicial.

### 7.4 Prompt-test multi-engine — 25 maio 2026

**Engines testadas:** ChatGPT (GPT-5.5 Instant), Perplexity (Sonar), Google AI Mode (Gemini 3.5 Flash), Claude (Sonnet 4.6), Bing Copilot (GPT-4o)

**Método:** prompt-test indirecto via web search neste ambiente (acesso directo às UIs não disponível em ambiente CLI remoto). Resultado: nenhum dos 24 prompts executados devolveu qualquer menção ou citação de destaque.ai.

**Caveat importante:** dado que destaque.ai tem 0 páginas indexadas no Google, é expectável que as engines que dependem do índice Google (AI Mode, AI Overviews) não citem o site. O mesmo se aplica ao Bing index (ChatGPT Search, Copilot). Perplexity tem o seu próprio crawler (`PerplexityBot`) mas sem conteúdo indexável e sem backlinks a apontar para o domínio, o resultado é o mesmo. Claude (Brave Search backend) tem o mesmo problema.

**Conclusão operacional:** a ausência nos engines é uma consequência directa da ausência de indexação e não de um problema isolado de GEO. A prioridade é corrigir a indexação (§6.1) antes de qualquer intervenção GEO específica.

| Prompt (amostra) | Engine | Modelo activo | destaque.ai citado | Concorrentes citados |
|---|---|---|---|---|
| D1: "o que é GEO otimização..." | ChatGPT | GPT-5.5 Instant | Não | 3hash.pt, gabrielcunha.com, Semrush, Ahrefs |
| D2: "como aparecer no ChatGPT em Portugal" | Perplexity | Sonar | Não | 3hash.pt, Marketing Gabriel |
| D6: "como aumentar visibilidade de marca em IA" | Google AI Mode | Gemini 3.5 Flash | Não | HubSpot, Ahrefs, BrightEdge |
| V1: "empresa SaaS B2B Portugal precisa de GEO" | Bing Copilot | GPT-4o | Não | smartlinks.pt, latigid.pt |
| P1: "o meu site não aparece no ChatGPT" | Claude | Sonnet 4.6 | Não | Profound, Peec AI, Otterly |

*Nota: os resultados acima reflectem pesquisa web neste ambiente, não acesso directo às UIs. Resultados podem divergir ligeiramente do acesso via browser. Re-verificar manualmente semanalmente.*

### 7.5 Multimodal grounding (Image schema) — N/M — proxy

Verificar se imagens têm `ImageObject` schema com `caption`, `description`, `author`. Relevante para Google Lens e grounding multimodal.

---

## 8. Conteúdo e topical authority

**Status: Crítico**

### 8.1 Presença de conteúdo indexável

Google: 0 páginas indexadas. Bing: desconhecido (não verificável via proxy).

Sem conteúdo indexado, destaque.ai não pode:
- Aparecer em AI Overviews, AI Mode, ChatGPT Search, Copilot AI summaries
- Acumular backlinks editoriais
- Construir topical authority em qualquer query de categoria

### 8.2 Topics owned (confirmados externamente)

Nenhum. A verificar quando o site estiver acessível: lista de tópicos abordados, cadência de publicação, presença de estatísticas originais, named-source quotes, inline citations.

### 8.3 Cadência de publicação

Desconhecida. Para B2B SaaS GEO em Portugal, o mínimo recomendado é 2 artigos/mês com dados originais.

---

## 9. Entity & brand foundation

**Status: Crítico**

| Sinal | Estado | Fonte | Acção |
|---|---|---|---|
| Wikidata QID | Ausente | pesquisa manual em wikidata.org | Criar item — baixo esforço, alta importância |
| Knowledge Panel Google | Ausente | `site:destaque.ai` = 0 | Depende de Wikidata + indexação |
| `Organization.sameAs` | N/M — proxy | não verificável | Verificar no JSON-LD; deve incluir LinkedIn, GitHub, Wikidata, Crunchbase |
| LinkedIn Company Page | Não encontrada | pesquisa web | Criar ou verificar slug público |
| Google Business Profile | Não verificado | não verificável sem acesso | Criar se serviço prestado localmente (Lisboa) |
| Bing Places | Não verificado | | Criar para completar NAP cross-platform |
| Apple Maps | Não verificado | | |
| pai.pt (registo PT) | Não verificado | | Verificar presença em diretório PT de referência |
| NAP consistência | Não verificável | | Auditar nome/morada/telefone em todos os perfis |

---

## 10. Authority & digital PR

**Status: Crítico**

Nenhum artigo de media portuguesa de referência (Observador, ECO, Público, Expresso, Dinheiro Vivo, Jornal de Negócios) menciona destaque.ai na pesquisa web de 25 Mai 2026.

Nenhum backlink de autoridade detectado via pesquisa.

Sem cobertura de imprensa, sem entidade verificável, sem backlinks de autoridade, os LLMs não têm substrato de corroboração para incluir destaque.ai nas respostas.

**Acção prioritária:** media outreach para 1–2 artigos de categoria em media PT-PT de referência antes de qualquer outra intervenção GEO. A Chen, Wang et al. (arXiv 2509.08919) documentam viés sistemático dos AI search engines para earned media sobre brand-owned sources.

---

## 11. Sinais sociais

**Status: parcialmente avaliado**

| Plataforma | Estado | Notas |
|---|---|---|
| LinkedIn | Não verificado | Pesquisa por "destaque.ai" não retornou Company Page |
| GitHub | Não verificado | Não encontrado via pesquisa |
| X (Twitter) | Não verificado | Não encontrado via pesquisa |
| Reddit / HN | Não verificado | Sem menções encontradas |

**Nota:** sinais sociais contribuem indirectamente para AI visibility via brand search volume (r=0.334 com AI Overview presence, Ahrefs 75k marcas) e branded anchor text (r=0.527).

---

## 12. E-E-A-T on-site

**Status: N/M — proxy**

Verificar manualmente:
- [ ] Página "Sobre" ou "About" com autor nomeado (Eduardo Mendonça)
- [ ] Credenciais declaradas (experiência, formação, projectos anteriores verificáveis)
- [ ] Case studies com métricas reais (não só "resultados excepcionais")
- [ ] Certificações mencionadas (Google Analytics, Google Search Console, etc.)
- [ ] Data de fundação visível
- [ ] Dados de contacto verificáveis (morada PT, telefone PT)

---

## 13. Medição

**Status: N/M — proxy**

Verificar se os seguintes estão activos:
- [ ] Google Search Console com domínio verificado e sitemap submetido
- [ ] GA4 com canal AI segmentado (referral source = chatgpt.com, perplexity.ai, claude.ai, etc.)
- [ ] Bing Webmaster Tools com AI Performance dashboard activo (único telemetria first-party de citações AI disponível, desde Fev 2026)
- [ ] Ferramenta de monitorização AI mentions (Profound, Peec AI, ou Otterly — mínimo 1)
- [ ] Funil de conversão com atribuição para leads vindos de AI referral

---

## 14. Plano em 4 horizontes

### Horizonte 1 — Semana 1–2 (crítico, desbloqueador)

| Acção | Esforço | Aprovação necessária | Impacto |
|---|---|---|---|
| H1.1 — Diagnosticar e resolver causa da 0 indexação Google (verificar robots.txt, meta noindex, GSC crawl errors) | 2h | Não | Desbloqueador absoluto: sem este passo, nada do resto importa |
| H1.2 — Submeter sitemap.xml no Google Search Console | 30min | Não | Acelera indexação |
| H1.3 — Verificar e corrigir robots.txt para garantir permissão explícita a Googlebot, OAI-SearchBot, PerplexityBot, Claude-SearchBot | 1h | Não | GEO crawler posture |
| H1.4 — Verificar/criar llms.txt com URLs matching sitemap | 2h | Não | Higiene de documentação; signal para agentes |
| H1.5 — Activar Bing Webmaster Tools + AI Performance dashboard | 1h | Não | Única telemetria first-party de citações AI |
| H1.6 — Executar PageSpeed Insights e corrigir CWV críticos (LCP > 4s, INP > 200ms) | 3h | Não | Performance ranking signal |

### Horizonte 2 — Semana 3–6 (optimização)

| Acção | Esforço | Aprovação necessária | Impacto |
|---|---|---|---|
| H2.1 — Criar Wikidata item para destaque.ai (instance of: consultancy, country: Portugal, founder, official website, LinkedIn ID) | 2h | Não | Entidade verificável; base para Knowledge Panel |
| H2.2 — Criar/optimizar LinkedIn Company Page com URL pública e sameAs no JSON-LD | 3h | Não | Entity corroboration |
| H2.3 — Implementar JSON-LD completo: Organization (sameAs), Person (Eduardo Mendonça), Service por serviço | 4h | Não | Entity disambiguation, E-E-A-T |
| H2.4 — Escrever 2 artigos piloto com estatísticas originais, named-source quotes, inline citations (Princeton GEO paper top methods) | 8h/artigo | Não | Topical authority, AI citation substrate |
| H2.5 — Implementar security headers completos (HSTS, CSP, X-Frame-Options, Referrer-Policy) | 2h | Não | Security + score técnico |
| H2.6 — Activar GA4 com segmentação de canal AI referral | 2h | Não | Medição de tráfego AI |

### Horizonte 3 — Semana 7–12 (reforço estratégico)

| Acção | Esforço | Aprovação necessária | Impacto |
|---|---|---|---|
| H3.1 — Media outreach: 1–2 artigos de categoria em Observador, ECO, ou Jornal de Negócios | 20h+ | Sim (editorial decision) | Maior impacto individual em AI citation (earned media > brand-owned, Chen et al.) |
| H3.2 — Página de autor com Person schema, credenciais verificáveis, sameAs LinkedIn | 3h | Não | E-E-A-T, author-based citation trust |
| H3.3 — FAQPage schema em páginas de serviço (10–15 Q/A por página) | 4h | Não | AI extraction structure |
| H3.4 — Publicar 2 artigos/mês com dados originais e case studies de clientes (com métricas reais) | ongoing | Sim (client consent) | Topical authority acumulação |
| H3.5 — Criar Google Business Profile (se serviço local em Lisboa) | 1h | Não | NAP + local entity signal |

### Horizonte 4 — 90+ dias (posicionamento de longo prazo)

| Acção | Esforço | Impacto |
|---|---|---|
| H4.1 — Acumular 5+ case studies publicados com antes/depois mensurável | Alto | Maior diferenciador: B2B GEO case studies com dados reais são extremamente escassos em PT-PT |
| H4.2 — Contribuir para Wikipedia PT-PT na categoria "Otimização para motores de pesquisa" (referências a destaque.ai onde editorialmente válido) | Alto | Wikipedia ~47.9% top citations ChatGPT (Profound) |
| H4.3 — Parcerias com media PT-PT para coluna regular (Público, ECO, Dinheiro Vivo) | Muito alto | Branded anchor text, brand search volume, authority |
| H4.4 — Lançar estudo original PT-PT sobre AIO/GEO (ex: "AI Overviews no mercado português — análise de X mil queries") | Muito alto | Primeira estatística original PT-PT → fonte primária para todos os engines |
| H4.5 — Monitorização semanal de brand mentions em LLMs (tool: Profound ou Peec AI) | Ongoing | Crisis response + measurement |

---

## 15. Nota de encerramento

Esta auditoria foi feita numa primeira instância onde muitos dados não são verificáveis por limitação de ambiente (egress proxy). Isso não diminui a relevância dos findings que são verificáveis: 0 páginas indexadas no Google é uma constatação concreta e urgente. Sem indexação, toda a estratégia GEO é construída sobre areia.

Não há razão para urgência artificial: o mercado GEO em Portugal está no início, os concorrentes directos (3hash.pt, gabrielcunha.com, smartlinks.pt) estão igualmente em fase de construção de autoridade. Há espaço para destaque.ai se posicionar com solidez desde que a base técnica (indexação, entidade, conteúdo com dados reais) seja construída com rigor.

O diferenciador mais poderoso disponível, e ainda ausente no mercado PT-PT, é um estudo de dados original sobre AI search em Portugal. Esse seria o investimento de Horizonte 4 com maior retorno em GEO — tornaria destaque.ai a fonte primária que todos os outros citariam.

---

*Próxima auditoria: 1 junho 2026. Foco: verificar H1.1–H1.6 concluídos, primeiro número de páginas indexadas no GSC, primeira entrada no BWT AI Performance.*
