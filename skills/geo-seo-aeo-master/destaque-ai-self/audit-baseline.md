# destaque.ai self-audit baseline

**Data da auditoria:** 9 novembro 2026, manhã (UTC). **Execução:** décima sexta corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (2 nov): nona execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** última entrada de 2 nov (7 dias, não acima do limiar de 7): **sem refresh**. O news-feed de 2 a 9 nov regista "sem novidades significativas" e "pesquisas por modelos e AI Mode só devolveram agregadores sem fonte primária"; sem mudança de default confirmada. Linhas inalteradas.
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/` (`Accept-Encoding: br`), headers, HTML, JSON-LD, `hreflang`, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml`, rotas-chave; `get_runtime_errors` (7 dias) em `destaque-ai` e `destaque-ai-tracker`; `list_deployments` (produção).
- **Teste multi-motor: 32 prompts + LR1, LR2 + 2 pesquisas (entidade, imprensa)** via três sub-agentes de `WebSearch` (10 GD+LR+E, 9 GP, 15 V+rotativos). Prompts fixos: GD1-8, GP1-9, V1-5 (22) mais LR1-2. Rotativos desta semana (diferentes da anterior): GE2, GE4, DC2, DC4, DC6, FS2, FS3, PC1, PC3, LR4. **É um proxy:** `WebSearch` é só dos EUA e devolve síntese e ligações; não são ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produtos (sem sessão de browser nem API; 17.ª semana). Modelos activos per `models.md`, não registados por prompt. Hora exacta por pesquisa não devolvida. Os sub-agentes não abriram as páginas; "na síntese" significa no texto devolvido.
- **Não verificável (não tentado de novo ou sem acesso):** PageSpeed Insights (LCP/INP/CLS: quota diária `429` nas últimas semanas; não re-tentado), Wikidata (última leitura de 26 out: sem item), Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4, BWT. As peças de `/imprensa` são declaração do próprio site. O header `date` das respostas em cache mostra 8 nov; usa-se 9 nov, a data da rotina.

---

## 1. Sumário executivo

**Score global: 73,8/100 (74 arredondado; +0,3 vs. 2 nov).** Só a Medição sobe (+4): Anthropic, Gemini e DeepSeek sem erros de saldo na janela de 7 dias; DataForSEO e SerpApi continuam a falhar.

Visibilidade em respostas de IA: **8 de 32 prompts (25%)** com destaque.ai na síntese (9/32 a 2 nov). Nos 22 prompts fixos: **8/22 (36%), igual a 2 nov** (V1 passa de "só ligação" a síntese; GD4 sai). GD3, GD5, GD6, GD7 e GD8 (5/8) contra 6/8; V1, V2, V5 (3/5). GP1-9: 0/9 (inalterado). LR1-2: 0/2. Rotativos: 0/10. Em GD3, GD5, GD6, GD7 destaque.ai é o 1.º nome; em GD8 o 2.º (após AISO Hub); em V5 o 1.º. **A fonte continua a ser Clutch e Sortlist, nunca o site próprio.** Duas semanas seguidas no mesmo patamar (8/22) reforçam que a subida de 26 out para 2 nov não foi só ruído do proxy, com a reserva de que o proxy não é um motor de produto.

No terreno: TTFB mediano 215 ms (corridas 443, 348, 215, 184, 181 ms; 353 ms a 2 nov), HTML 153.349 B (153.235), 25.207 B em Brotli (25.247), sitemap 136 URLs (135). Em produção: 5 deploys desde 2 nov (#228–#232), todos `READY`: página de Sobre com seis regras, relatório do prospect sob `/relatorio/…`, "Perguntas" no menu, página-marcador `/laboratorio/marcador-quorvintela` (termo inventado, "índice Quorvintela, 41,7", para medir que robô lê e em quantos dias um assistente a usa) e validação de IP dos robôs.

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 2 nov | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 89 | 0 | `content-encoding: br`; CSP só Report-Only (18.ª semana+); `/radar` fora do sitemap (4.ª semana) |
| 2 | Performance / CWV | 65 | 0 | TTFB mediana 215 ms; HTML 153.349 B; LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | 0 | 1×H1, 13×H2, 13×H3; `hrefLang` pt-PT/en/x-default; `/en/radar` 404 |
| 4 | Schema | 92 | 0 | 2 blocos JSON-LD (inalterados); 5 motores persistem em `Service` (8.ª semana) |
| 5 | Imagens | 76 | 0 | 14 `<img>`, 3 com `alt` descritivo |
| 6 | GEO técnica | 93 | 0 | `llms.txt` 38.023 B e `llms-full.txt` 62.491 B (iguais); sem `/radar` nem `/laboratorio` |
| 7 | Conteúdo & topical authority | 97 | 0 | 5 deploys; página-marcador é experimento de medição, não conteúdo para os gaps GP |
| 8 | Entidade | 79 | 0 | Menções só via Clutch/Sortlist; E1 sem resultado; Wikidata por verificar |
| 9 | Autoridade & PR | 52 | 0 | E2: 0 peças no proxy; `/imprensa` por verificar na origem |
| 10 | Social & community | 37 | 0 | não re-amostrado |
| 11 | E-E-A-T | 71 | 0 | sem alteração |
| 12 | Medição | 40 | +4 | Sem erro de saldo Anthropic (14 dias), Gemini e DeepSeek (11 dias); DataForSEO 187 erros, SerpApi sem pesquisas; integração msads com erros OAuth (5 nov) |

Soma 886; média 73,8.

### Top findings

1. **Medição: DataForSEO e SerpApi persistem (3.ª semana, P1).** `Internal SE Server Error` 187 ocorrências (10 utilizadores), última 9 nov 07:07 UTC; SerpApi `run out of searches` (`copilot` 30, última 3 nov); `google_aio` e `google_ai_mode` sem dados válidos. Mistral `503`/`429` 85; timeouts de 300 s 66; Claude timeouts de 180 s 8; Perplexity `429` 8; Grok `429` 1. **Anthropic, Gemini e DeepSeek sem erro de saldo na janela**: Anthropic fechado (DONE, evidência indirecta: lotes diários a chegar à API); Gemini e DeepSeek ficam como candidatos até uma segunda semana.
2. **Visibilidade estável em 8/22 fixos, assente em directórios.** Sem Clutch e Sortlist, 0/32. GD1 ("melhor agência de GEO em Portugal"), a pergunta de maior volume, não inclui destaque.ai (AppLabx, Claneo, Fullsix, Bluesoft). GD4 perdeu a menção.
3. **Sem menção negativa nem alucinada.** Única reserva: "operação recente" (GD3, fundada em 2025); GD5 e V2 repetem "afirma ter investigação própria"; GD8 repete o estudo de 45 empresas. **Protocolo de crise (SKILL.md §14) não accionado.** E1 ("destaque.ai Periscopy Lisboa") devolve eventos de Lisboa; confusão de entidade persiste.
4. **Imprensa na origem continua por verificar; o proxy não vê nenhuma (E2: 0).** Resultados do Observador, Público e Lusa são não relacionados.
5. **Lacunas PT-PT em GP1-9:** nenhum domínio `.pt`; domínio de `.com.br` (conversion.com.br em GP2, GP6, GP9) e `.com` em inglês; todos conselho genérico, sem dados de Portugal. É o espaço editorial mais claro por ocupar.
6. **Concorrência PT:** AISO Hub (Lisboa, 2024, Clutch 5,0 segundo a síntese) é o rival mais directo em GD8 e LR2; DevCommX (LR2, V1, LR4), Claneo, AppLabx, Bluesoft, Marketing Gabriel Agency. Preços de terceiros, não verificados: consultor individual US$500-1.000 por auditoria de GEO (PC1, GE2); agência espanhola 5.000-15.000 EUR por projecto; consultores de AI search US$150-400/h (PC3, fonte norte-americana). Ferramentas: Profound desde US$499/mês, Peec AI desde 89 EUR/mês, Otterly desde US$29/mês (DC6, comparativos de terceiros, divergentes).
7. **`/radar` fora do sitemap e do `llms.txt` (4.ª semana); `/en/radar` 404.** O sitemap ganhou `/laboratorio/marcador-quorvintela` (indexável, `robots: index, follow`, 1 bloco JSON-LD, 49.324 B), mas não o Radar.
8. **Rota `/relatorio` devolve 404** na raiz, como esperado: o relatório do prospect vive em `/relatorio/…`, por convite. Confirmar que é intencional. `/fr` 404 (o #229 corrigiu o 404 francês em contexto de relatório, não na raiz).

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (15.ª semana+). 19 user-agents no `robots.txt`, todos com `Content-Signal: search=yes, ai-input=yes, ai-train=yes`. 5 deploys em 5, `READY`. `hrefLang` presente. `/perguntas` passou ao menu. Experimento declarado (marcador Quorvintela) com desenho de medição explícito.

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa; fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Produto Periscopy, servidor MCP público em `tracker.destaque.ai/api/mcp`. Radar mensal em `/radar`, Estúdio, Engenharia de perguntas, `/perguntas`, sala de imprensa em `/imprensa` sob CC BY 4.0 (declarado).

## 3. Plataforma

Vercel; projectos relevantes: `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Desde 2 nov (#228 em 2 nov 13:56 UTC), 5 deploys de produção (#228–#232), todos `READY`; os mais recentes são o #232 e o #231 (8 nov, ~20:27 UTC): "Visitas de robôs: o site manda o IP…" e "Laboratório: página-marcador". Web Analytics da Vercel não re-testado.

## 4. Performance

TTFB (5 corridas `curl`, `Accept-Encoding: br`): 443, 348, 215, 184, 181 ms; **mediana 215 ms** (2 nov: 353 ms; as primeiras corridas incluem ligação via proxy do ambiente); `x-vercel-cache: HIT`. HTML 153.349 B descodificado; 25.207 B em Brotli; `x-nextjs-prerender: 1`: server-rendered. LCP/INP/CLS: **N/D**.

## 5. SEO on-page

Título "destaque.ai: software de visibilidade em IA". Meta description inalterada. 1×H1, 13×H2, 13×H3. `hrefLang` pt-PT, en, x-default. 14 imagens, 3 com `alt` não vazio. 200 em `/en`, `/radar`, `/imprensa`, `/casos`, `/sobre`, `/perguntas`, `/laboratorio/marcador-quorvintela`; 404 em `/en/radar`, `/estudio`, `/relatorio`, `/fr`.

## 6. SEO técnico

- `sitemap.xml`: **136 `<loc>`**; `lastmod` mais recente 2026-10-14 (inalterado). Sem `/radar`.
- `robots.txt`: 19 `User-Agent`, `Content-Signal` uniforme. Sinal partilhado de treino (IETF AIPREF): sem acção, rever em jan 2027.
- JSON-LD homepage (2 blocos): `Organization` (`sameAs`: LinkedIn, Crunchbase, Clutch; sem Wikidata), `Person` (LinkedIn, ORCID), `WebSite`, `WebPage`, `Service`, `FAQPage`, `SpeakableSpecification`, `ProgramMembership`, `OfferCatalog`, `Brand`, `Place`, `PostalAddress`, `ContactPoint`.
- Headers: HSTS (63072000), `x-frame-options: DENY`, `nosniff`, `referrer-policy`, `permissions-policy`; **CSP só `report-only`**. `Link` aponta `llms.txt` e `agent-skills/index.json`.

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` (38.023 B) e `llms-full.txt` (62.491 B): 200, iguais a 2 nov; sem `/radar` nem `/laboratorio`.

| Motor | Modelo default (`models.md`) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos); Luna (Free/Go); GPT-6 / 6.1 Sol por confirmar | Não (17.ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | Gemini 3.5 Flash (3.6/3.7 por confirmar) | Não |
| Claude | Sonnet 5 (Free/Pro); 5.5 lançados, não confirmados como default | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai na síntese | Nota |
|---|---|---|---|
| GD1-8 | 8 | **5** (GD3, 5, 6, 7, 8) | via Clutch/Sortlist; GD1, GD2, GD4 ausente |
| GP1-9 | 9 | **0** | `.com.br` e `.com` em inglês; 0 `.pt` |
| V1-5 | 5 | **3** (V1, V2, V5) | V3, V4 ruído |
| Rotativos (10) | 10 | 0 | GE2, GE4, DC2, DC4, DC6, FS2, FS3, PC1, PC3, LR4 |
| **Total** | **32** | **8 (25%)** | + LR1, LR2: 0/2; E1 0; E2 0 |

Fixos: 8/22 (36%), igual a 2 nov; 2 nov: 8/22; 26 out: 3/22. Em LR2 o proxy refere AISO Hub e DevCommX para Lisboa, não destaque.ai.

---

## 8. Conteúdo e autoridade temática

Novo desde 2 nov: Sobre com seis regras, relatório do prospect, "Perguntas" no menu, marcador Quorvintela. Nenhuma peça PT-PT para os gaps GP1-9, GE e PC. A página-marcador é útil para medir latência de absorção (quantos dias até um assistente a citar); os resultados só existirão com sessão real nos motores ou com os logs do Tracker (#232 valida IP dos robôs: 23 das 27 visitas "ChatGPT-User" eram varrimentos, per commit).

## 9. Entidade e marca

E1 sem resultado. `sameAs` com 3 entradas, sem Wikidata, Marketeer, Lusa. As descrições devolvidas ("consultoria de GEO sediada em Lisboa, B2B SaaS, fundada em 2025") coincidem com Clutch e Sortlist, não com "software" do site (item de convergência de 24 ago, aberto). GD4 e GD5 citam Marketeer/Buzzvel como fonte `.pt`, sem destaque.ai.

## 10. Autoridade e PR

`/imprensa` (declaração do site): peças da Lusa/Público, Observador, Cidade FM, M80, Smooth FM, O Antagonista. Nenhuma re-verificada na origem; E2 do proxy: 0. ECO, Expresso e Negócios sem peça.

## 11. Social e comunidade

Não re-amostrado. Estado de 5 out: LinkedIn 96 vs. 250 seguidores (contraditório); HN, X, Reddit: nada. A síntese de GD6 devolveu `skills.cat/skills/dudumendonca84/geo-seo-aeo-master` nos links: o repositório da skill é indexável como página.

## 12. E-E-A-T

Sem alteração. Falta peça "como avaliar uma agência GEO" com autor nomeado (GE2 e GE4 devolvem só blogs de terceiros).

## 13. Medição

`destaque-ai`: zero erros (7 dias). `destaque-ai-tracker`: 22 grupos (2 nov: 27).
- **DataForSEO / SerpApi (P1, 3.ª semana):** 187 + `copilot/serpapi` 30 + `google_aio` 30 abortos; última 9 nov 07:07 UTC.
- **Gemini, DeepSeek:** sem `402` na janela (últimas a 29 out). **Anthropic:** sem `credit balance` desde 26 out.
- Mistral 85 (`503`/`429`); timeouts 300 s: 66 (`/api/site/pages/scan`, `/api/brain/*`, `/api/cron/gsc-sync`, `/api/inngest`); Perplexity `429`: 8; Claude 180 s: 8; Grok `429`: 1.
- **Novo:** `/api/integrations/msads/callback` 5 nov, ~10 erros (`IdentityTypeMismatch`, `Invalid client data`, `1310`); parece teste de ligação.
- `/api/inngest`: 2 pedidos sem assinatura (6 nov, provável varrimento). Supabase Auth refresh token: 2, 2 nov.
- GSC, GA4, BWT AI Performance: sem acesso.

## 14. Posicionamento e concorrência

News-feed 2 a 9 nov: sem modelos novos nem mudança de preço de tabela; Anthropic sem posts desde 28 out; ChatGPT Ads: novas opções de lance (max bid/max CPC) desde 9 nov, mercados não especificados, Portugal por verificar de primeira mão (secundária); AI Mode com botões de reserva (EUA). Nenhum gatilho de watch disparado; sem urgência nova para destaque.ai. A acção pendente do news-feed (percorrer o Ads Manager do ChatGPT com conta real) é do fundador.

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço |
|---|---|---|
| Renovar SerpApi e abrir ticket DataForSEO (ou suspender `google_aio`, `google_ai_mode`, `copilot` e marcar "sem dados"); confirmar Gemini e DeepSeek mais uma semana | Medição | 1 h |
| Registar `/radar` (e decidir `/laboratorio`) no sitemap e no `llms.txt`; decidir `/en/radar` | Técnico | 1 h |
| Verificar nos sites dos meios as peças de `/imprensa` e registar data, autor e citação | Autoridade | 2 h |
| Pedir avaliações no Clutch e Sortlist (única fonte das menções) | Entidade | 1 h |
| Classificar Bluesoft, revaliQ, AppLabx, AISO Hub, DevCommX no peer set | Estratégia | 1 h |

**H2 (semana 3-6)**
- Pitch ao ECO, Expresso e Negócios com o Radar mensal.
- Publicar PT-PT com dados próprios e autor nomeado: GP1, GP2, GP5, GP7-9, preço de auditoria de GEO (PC1/PC3) e "como avaliar uma agência de GEO" (GE2/GE4).
- Convergir descrição do site e dos directórios; desambiguar GEO/AEO em `/outsourcing`.
- Verificação manual de Knowledge Panel, Bing Places, Google Business Profile.

**H3 (semana 7-12)**
- Item Wikidata, depois de verificadas as peças de imprensa.
- Ler os resultados do marcador Quorvintela (robôs, latência) e repetir os 22 prompts fixos, idealmente com sessão real nos cinco motores.
- Conteúdo para fintech, M&A e Porto (V4, V5, LR3, LR4).

**H4 (90+ dias)**
- Vercel Web Analytics; ligar GSC/GA4/BWT.
- Presença mínima em GitHub e Reddit/HN, se o custo editorial se justificar.
- CSP de Report-Only a enforced.

## 16. Nota de encerramento

O score sobe para 73,8/100 (+0,3), só por Medição. O dado mais útil é de estabilidade: 8/22 prompts fixos pela segunda semana, sempre via Clutch e Sortlist, e 0/9 nos prompts de problema, onde as respostas citam conteúdo brasileiro e em inglês sem dados portugueses. Esse é o espaço por ocupar. O proxy não é um motor de produto; a medição própria segue incompleta em DataForSEO e SerpApi.
