# destaque.ai self-audit baseline

**Data da auditoria:** 16 novembro 2026, 08:09–08:20 UTC. **Execução:** décima sétima corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (9 nov): décima execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** entradas datadas de 13 nov (mapeamento API: `gemini` `production` = `gemini-4-hydrogen`) e 16 nov (absorção do daily-agent: DeepSeek web search, corte do Hydrogen em março de 2026). Menos de 7 dias: **sem refresh**. Mudança de default relevante desde a última auditoria, já registada pelo daily-agent: **Gemini 4 Hydrogen é o modelo por defeito do AI Mode desde 12 nov**, global e em português, e corre nas perguntas mais difíceis do AI Overviews ([blog.google](https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/)).
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/` (`Accept-Encoding: br`), headers, HTML, JSON-LD, `hreflang`, `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml` (148 URLs, cruzado com o `llms.txt`), 16 rotas; JSON-LD de 6 páginas novas; `list_deployments` (produção, desde 9 nov) e `get_runtime_errors` (7 dias) em `destaque-ai` e `destaque-ai-tracker`.
- **Origem das corridas:** o contentor desta rotina não está em Portugal. O header `x-vercel-id` mostra a edge `iad1` (EUA, leste), como nas semanas anteriores. O TTFB é comparável semana a semana, mas não é um TTFB "a partir de PT".
- **Teste multi-motor: 32 prompts + LR1, LR2 + 2 pesquisas (entidade, imprensa)**, via três sub-agentes de `WebSearch` (modo standard), entre 08:11 e 08:12 UTC. Fixos: GD1-8, GP1-9, V1-5 (22) mais LR1-2. Rotativos desta semana, todos diferentes dos de 9 nov: GE1, GE3, GE5, DC3, DC5, FS1, FS4, FS7, PC2, PC4. **É um proxy:** `WebSearch` corre a partir dos EUA e devolve síntese e ligações. Não é ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produto (sem sessão de browser nem API; 18.ª semana). Os modelos activos de cada motor (`models.md`) ficam registados abaixo, mas o proxy não os exercita. Os sub-agentes não abriram as páginas; "na síntese" quer dizer no texto devolvido.
- **Não verificável:** PageSpeed Insights (`429`, quota diária esgotada às 08:15 UTC); Wikidata para "destaque.ai" (API com limite de pedidos, `too many requests`; "Periscopy": 0 resultados); Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4 e BWT (sem acesso). O header `date` da homepage em cache marca 13 nov 18:26 UTC (`age` 1259 s); usa-se 16 nov, a data da rotina.
- **Janela contaminada:** o core update de novembro da Google está em curso desde 10 nov, até cerca de 24 nov. Qualquer variação no proxy desta semana tem duas causas sobrepostas (core update e troca de modelo no AI Mode). Não é atribuível ao trabalho no site.

---

## 1. Sumário executivo

**Score global: 74,2/100 (74 arredondado; +0,4 vs. 9 nov).** Sobem Schema (+2), E-E-A-T (+2), SEO Técnico, GEO técnica, Conteúdo e Entidade (+1 cada); a Medição desce (−4), porque Gemini e DeepSeek voltaram a falhar por falta de saldo e o fan-out da auditoria semanal do Tracker começou a falhar.

Visibilidade em respostas de IA: **7 de 32 prompts (22%)** com destaque.ai na síntese (8/32 a 9 nov). Nos 22 prompts fixos: **7/22 (32%) contra 8/22**. GD 4/8 (GD3, GD4, GD5, GD8; GD4 volta, GD6 e GD7 saem); V 3/5 (V2, V3, V5; V3 entra, V1 passa a só ligação); GP 0/9; LR 0/2; rotativos 0/10. Quando aparece, destaque.ai é o 1.º nome em GD3, GD4, GD5, V2, V3 e V5, e o 2.º em GD8 (atrás da AISO Hub). **A fonte continua a ser só Clutch e Sortlist: nenhuma página de destaque.ai apareceu como fonte ou ligação em 36 pesquisas.** A variação de 8 para 7 está dentro do ruído do proxy.

No terreno, a semana trouxe a maior vaga de mudanças no site desde agosto: **16 deploys de produção (#233–#248)**, com 4 builds em `ERROR` repetidos com sucesso. Destaques: reposicionamento como "Tech Marketing Agency", com a destaque.ai como agência e o Periscopy como software (#237, #238; decisão do fundador de 10 nov); título da homepage "Agência SEO e de visibilidade no ChatGPT · destaque.ai"; `/agencia-geo` passa a `301` para `/consultoria-geo-portugal`; páginas novas (`/geo-fintech-portugal`, `/porque-a-empresa-nao-aparece-no-google`, `/seo-local`, `/servico/seo-para-ia`, `/blog/relatorio-ai-performance-bing`); estudo novo `/estudo/black-friday-portugal-2026` (PT e EN) com `Dataset` e `DataDownload`. Sitemap: 136 → 148 URLs, `lastmod` 13 nov. As páginas novas têm 3 dias; a ausência delas no proxy não diz nada sobre a qualidade, só sobre o tempo.

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 9 nov | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 90 | +1 | Sitemap 148 URLs, `lastmod` 13 nov; `301` limpo de `/agencia-geo`; CSP só Report-Only; `/radar` fora do sitemap (5.ª semana) |
| 2 | Performance / CWV | 65 | 0 | TTFB mediana 395 ms (215 ms a 9 nov; duas corridas frias acima de 800 ms); HTML 159.294 B, 26.282 B em Brotli; LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | 0 | Título novo (55 caracteres) e descrição dentro dos limites; 1×H1, 14×H2, 15×H3; `alt` 3/14 sem mudança |
| 4 | Schema | 94 | +2 | Páginas novas com `Article`, `author` → `#fundador`, `BreadcrumbList`, `FAQPage`; estudo com `Dataset`/`DataDownload` |
| 5 | Imagens | 76 | 0 | 14 `<img>`, 3 com `alt` descritivo; os 11 vazios são ícones dos motores (decorativos) |
| 6 | GEO técnica | 94 | +1 | `llms.txt` 38.023 → 43.236 B, com a descrição nova; cobre 107 dos 110 URLs PT do sitemap; sem `/radar` |
| 7 | Conteúdo & topical authority | 98 | +1 | 5 páginas novas e 1 estudo com dados próprios; fintech (V4, LR3) e Bing AI Performance (FS3) passam a ter página |
| 8 | Entidade | 80 | +1 | Site e directórios convergem em "agência/consultoria"; menções continuam só via Clutch/Sortlist; E1 sem resultado; `llms.txt` diz "sedes em Lisboa e no Porto", JSON-LD só Lisboa |
| 9 | Autoridade & PR | 52 | 0 | E2: 0 peças no proxy; `/imprensa` por verificar na origem |
| 10 | Social & community | 37 | 0 | Não re-amostrado |
| 11 | E-E-A-T | 73 | +2 | Autor nomeado (`Person` do fundador, LinkedIn e ORCID) nas páginas novas |
| 12 | Medição | 36 | −4 | Gemini `402` regressa (10 nov); DeepSeek `429` por saldo (14 nov, ~30 grupos); DataForSEO 248 erros; fan-out da auditoria semanal falha (novo) |

Soma 890; média 74,2.

### Top findings

1. **Medição: os saldos voltaram a falhar e há uma falha nova no fan-out semanal (P1).** Gemini `gemini-3.5-flash` `402 prepayment credits are depleted`, 12+12 ocorrências, última 10 nov 17:30 UTC: o candidato a DONE de 9 nov cai. DeepSeek `deepseek-v4-flash` `429` "concurrency limit … based on your remaining balance. Please top up", cerca de 30 grupos, 14 nov 15:07 e 15:25 UTC: o outro candidato também cai. DataForSEO `Internal SE Server Error` 248 ocorrências (15 utilizadores), última hoje 07:15 UTC; `google_aio/dataforseo` abortado 52. **Novo:** `[weekly-audit] fan-out` em `/api/inngest`, 6 ocorrências de 11 a 16 nov, incluindo "9 de 9 lotes sem sucesso: Invalid body" e lotes sem resposta em 240 s. Mistral sem erros na janela (85 a 9 nov). Anthropic continua sem erro de saldo (DONE mantém-se); 19 timeouts de 180 s em `claude-sonnet-5` augmented.
2. **O Tracker ainda mede `gemini-3.5-flash`, que já não é o modelo do AI Mode.** O daily-agent fixou 16 nov (hoje) como prazo da decisão de mudar a linha `gemini` de `## Tracker buyer defaults` para `gemini-4-hydrogen`, com a série nova a começar depois do fim do core update (~24 nov). O corte de conhecimento passa de janeiro de 2025 para março de 2026. É decisão do fundador.
3. **Visibilidade estável em 7–8/22, sempre por directórios; o site próprio nunca é fonte.** GD1 ("melhor agência de GEO em Portugal") continua sem destaque.ai (AppLabx, Claneo, Fullsix, Bluesoft). GD6, GD7, LR1, LR2 e V4 perdem-se por desambiguação: o motor lê "GEO" como geografia ou geotecnia e "AEO" como Operador Económico Autorizado (alfândega). A página `/geo-fintech-portugal` não aparece em V4 três dias depois de publicada.
4. **Sem menção negativa nem alucinada.** Reservas factuais: "é recente" e "fundada em 2025" (GD3, via Clutch), "consultoria pequena e não há dados sobre o seu porte ou histórico" (V5). V2 repete "conduz investigação própria sobre visibilidade em IA no mercado português" (Sortlist). **Protocolo de crise (SKILL.md §14) não accionado.**
5. **Lacunas PT-PT em GP1-9 inalteradas:** 0 domínios `.pt` em 9 respostas; dominam `neilpatel.com/br`, `seo.com/pt`, `ranktracker.com/pt-br` e `conversion.com.br`; nenhum dado português. É o espaço editorial por ocupar há seis semanas. Nos preços (PC2), a fonte portuguesa é a Zaask (auditoria média 120 EUR, 28,9–30 EUR/h em Lisboa; números de terceiros, não verificados).
6. **NAP: Porto aparece no texto, não nos dados estruturados.** O `llms.txt` e o corpo da homepage dizem "sedes em Lisboa e no Porto"; o JSON-LD só declara `addressLocality: Lisboa` (2×). Se há escritório no Porto, falta o `Place`; se não há, o texto deve dizer outra coisa.
7. **`/radar` continua fora do sitemap e do `llms.txt` (5.ª semana); `/en/radar` 404.** O Radar pesa agora 1.072.517 B (1,07 MB) de HTML, sete vezes a homepage.

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (16.ª semana seguida). 19 user-agents no `robots.txt`, todos com `Content-Signal: search=yes, ai-input=yes, ai-train=yes`; sem `noarchive`/`nocache` nem `X-Robots-Tag`, por isso as novas preferências do Bing (honradas a partir de 1 fev 2027) não exigem mudança. Server-rendered (`x-nextjs-prerender: 1`). `llms.txt` quase em paridade com o sitemap PT (107/110). Autor nomeado com `Person` e ORCID nas páginas novas. Um estudo novo com dados descarregáveis. A descrição do site deixou de contradizer a dos directórios.

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa (o texto do site acrescenta Porto); fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Desde 10 nov apresenta-se como "Tech Marketing Agency portuguesa, de consultoria e software" (`llms.txt`): auditoria gratuita, medição semanal com o Periscopy em onze motores e superfícies, e execução das correcções. Radar mensal em `/radar`, `/perguntas`, sala de imprensa em `/imprensa` (CC BY 4.0, declarado), estudos em `/estudo/…`. `Organization.sameAs`: LinkedIn, Crunchbase, Clutch (sem Wikidata nem Sortlist).

## 3. Plataforma

Vercel (Next.js, `x-powered-by: Next.js`); projectos `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Desde 9 nov: 16 deploys de produção em `READY` (#233–#248) e 4 em `ERROR` (#236, #237, #243 e #247, todos repetidos com sucesso minutos depois). Páginas privadas para prospects em `prospects.destaque.ai` (`noindex`, #234–#236) e relatórios em `insights.destaque.ai` (#242). Toda a superfície auditada é resolúvel dentro da plataforma; nada exige Cloudflare nem migração.

## 4. Performance

TTFB (5 corridas `curl`, `Accept-Encoding: br`, 08:09 UTC): 1.102, 825, 255, 395, 169 ms; **mediana 395 ms** (215 ms a 9 nov). As duas primeiras incluem ligação fria através do proxy do ambiente; as três quentes ficam entre 169 e 395 ms. `x-vercel-cache: HIT`. HTML 159.294 B descodificado (+5.945 B), 26.282 B em Brotli. LCP/INP/CLS: **N/D** (PSI `429`). O peso do `/radar` (1,07 MB) é o risco de performance a acompanhar.

## 5. SEO on-page

Título "Agência SEO e de visibilidade no ChatGPT · destaque.ai" (era "destaque.ai: software de visibilidade em IA"). Meta description: "Pomos a sua empresa no Google e nas respostas do ChatGPT, do Gemini e do Perplexity. Somos uma agência com software próprio. Peça a auditoria gratuita." H1 "A sua empresa no Google e nas respostas da IA"; 14×H2, 15×H3. `hrefLang` pt-PT, en, x-default. 14 imagens, 3 com `alt` (os 11 vazios são ícones decorativos dos motores). 200 em `/en`, `/radar`, `/imprensa`, `/casos`, `/sobre`, `/perguntas`, `/playbook`, `/blog`, `/laboratorio/marcador-quorvintela`; `301` em `/agencia-geo` → `/consultoria-geo-portugal`; 404 em `/en/radar`, `/estudio`, `/relatorio` (raiz), `/fr`, `/setores`.

## 6. SEO técnico

- `sitemap.xml`: **148 `<loc>`** (136 a 9 nov); `lastmod` mais recente 2026-11-13. Sem `/radar`.
- `robots.txt`: 2.184 B, 19 `User-Agent`, `Disallow: /api/` e `Content-Signal` uniformes; `Sitemap` declarado. Bingbot coberto por `*`.
- JSON-LD homepage (2 blocos): `Organization`, `Person`, `WebSite`, `WebPage`, `Service`, `FAQPage`, `SpeakableSpecification`, `ProgramMembership`, `OfferCatalog`, `Brand`, `Place`, `PostalAddress`, `ContactPoint`, `Audience`, `City`, `Country`. Páginas novas com `Article` (autor `#fundador`), `BreadcrumbList`, `FAQPage`; estudo com `Dataset`, `DataDownload`, `ItemPage`; `/radar` com `Dataset`.
- Headers: HSTS (63072000), `x-frame-options: DENY`, `nosniff`, `referrer-policy`, `permissions-policy`; **CSP só `report-only`**. `Link` aponta `llms.txt` e `agent-skills/index.json`.

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` 43.236 B e `llms-full.txt` 64.940 B: 200. Dos 148 URLs do sitemap, 39 não estão no `llms.txt`: 36 versões `/en` e 3 PT (`/engenharia-de-perguntas`, `/laboratorio/marcador-quorvintela`, `/mapa-do-site`). `/radar` não está em nenhum dos dois.

| Motor | Modelo default (`models.md`, 16 nov) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos), Luna (Free/Go); GPT-6/6.1 Sol só em Work e Codex | Não (18.ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | **Gemini 4 Hydrogen** (desde 12 nov, global, PT incluído) | Não |
| Claude | Sonnet 5 (Free/Pro); Opus 5.5 e Sonnet 5.5 sem confirmação de default | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai na síntese | Nota |
|---|---|---|---|
| GD1-8 | 8 | **4** (GD3, GD4, GD5, GD8) | Clutch/Sortlist; GD6 e GD7 lidos como geografia ou sem consultora identificada |
| GP1-9 | 9 | **0** | 0 `.pt`; `.com.br` e `.com` em inglês |
| V1-5 | 5 | **3** (V2, V3, V5) | V1 só ligação (Clutch e Sortlist em 1.º e 2.º); V4 lido como geotecnia |
| Rotativos (10) | 10 | 0 | GE1, GE3, GE5, DC3, DC5, FS1, FS4, FS7, PC2, PC4 |
| **Total** | **32** | **7 (22%)** | + LR1, LR2: 0/2; E1 0; E2 0 |

Série dos fixos: 26 out 3/22; 2 nov 8/22; 9 nov 8/22; **16 nov 7/22**. Em DC5 ("como se comparam as agências de GEO em Lisboa?") a síntese usa um ranking de 18 empresas de SEO de Lisboa (webtonic.io) e nomeia Bluesoft, Bloco Digital, Gigantic, Fullsix e Webcomum; destaque.ai não entra.

---

## 8. Conteúdo e autoridade temática

Novo desde 9 nov: `/consultoria-geo-portugal` (absorve `/agencia-geo`), `/geo-fintech-portugal`, `/porque-a-empresa-nao-aparece-no-google`, `/seo-local`, `/servico/seo-para-ia`, `/servico/sites-ai-native`, `/blog/relatorio-ai-performance-bing`, o estudo da Black Friday (PT e EN, com dados descarregáveis), o estudo de SaaS B2B revisto com a destaque.ai como sujeito (#247) e a secção "Infraestrutura própria de medição" (#239). Três gaps antigos passam a ter página: fintech (V4, LR3), Bing AI Performance (FS3) e "o site não aparece no Google". Continuam sem peça PT-PT com dados próprios os gaps GP1-9 (ChatGPT, AI Overviews e tráfego, AI Mode, Perplexity, Schema.org, `llms.txt`) e GE1/GE5 (como avaliar uma agência). Cadência: 16 deploys numa semana, a mais alta registada por esta rotina.

## 9. Entidade e marca

E1 ("destaque.ai Periscopy Lisboa") sem resultado: o motor lê "destaque" como palavra comum e não conhece o Periscopy. Wikidata: sem item "Periscopy"; "destaque.ai" por verificar (API limitada). O item de convergência de 24 ago fecha por decisão: o site passou a dizer "agência", que é o que Clutch e Sortlist já diziam. `sameAs` com 3 entradas, sem Sortlist (a fonte de 4 das 7 menções desta semana) nem Wikidata. NAP: texto com Lisboa e Porto, JSON-LD só com Lisboa.

## 10. Autoridade e PR

`/imprensa` (declaração do site, 101.231 B): Lusa/Público, Observador, Cidade FM, M80, Smooth FM, O Antagonista. Nenhuma peça re-verificada na origem; E2 do proxy: 0 (devolve observador.pt e noticiasaominuto.com sem relação). ECO, Expresso e Negócios sem peça.

## 11. Social e comunidade

Não re-amostrado. Estado de 5 out: LinkedIn 96 vs. 250 seguidores (contraditório); HN, X, Reddit: nada.

## 12. E-E-A-T

As páginas novas apontam `author` para `#fundador` (`Person` com LinkedIn e ORCID). Falta ainda a peça "como avaliar uma agência de GEO" com autor nomeado: GE1 e GE5 devolvem só blogs de terceiros (seo.com, neilpatel.com, ranktracker.com).

## 13. Medição

`destaque-ai`: zero erros (7 dias). `destaque-ai-tracker`: 41 grupos (22 a 9 nov), a maioria do mesmo episódio de saldo da DeepSeek.
- **DataForSEO / SerpApi (P1, 4.ª semana):** DataForSEO 248 (15 utilizadores), `google_aio/dataforseo` abortado 52, `copilot/serpapi` abortado 4; última hoje 07:15 UTC.
- **Gemini `402`:** 12+12, última 10 nov 17:30 UTC. **DeepSeek `429` por saldo:** cerca de 30 grupos a 14 nov; mais 1 `terminated` hoje 07:03 UTC.
- **Novo: `[weekly-audit] fan-out`** (`/api/inngest`), 6 ocorrências de 11 a 16 nov: "9 de 9 lotes sem sucesso: Invalid body", "2 de 4 lotes", "1 de 8 lotes" sem resposta em 240 s.
- Timeouts de 300 s: 31 (`/api/admin/ops-health`, `/relatorio/[token]/pdf`, `/api/cron/ops-health`, `/api/audit/run-batch`, `/api/inngest`). Claude 180 s: 19. Perplexity `429`: 10. Mistral: 0 (85 a 9 nov).
- Isolados: `/api/brand-logo` (`AssertionError` do undici, 13 nov), `/api/inngest` sem assinatura (12 nov). `msads` e Supabase Auth ausentes da janela.
- GSC, GA4, BWT AI Performance: sem acesso. O relatório de IA generativa do GSC subestima impressões de 9 a 11 nov (bug da Google, news-feed 13 nov): excluir esses dias de qualquer leitura.

## 14. Posicionamento e concorrência

Concorrentes recorrentes no proxy: AISO Hub (GD5, GD8, LR2), DevCommX (GD5, GD8, LR2, V1, V3), Bluesoft (GD1, GD3, V3, V5, DC5), Claneo (GD1, GD7, V3, V5), The Digital Bloom e Diogo Cortez (GD3, GD8). Preços de terceiros, não verificados: DevCommX "a partir de 2.000 USD/mês" (V3), agência GEO 3.000–8.000 USD/mês (PC4, blog norte-americano), Zaask PT para SEO (PC2).

News-feed 10 a 16 nov, o que muda para a destaque.ai:
- **Gemini 4 Hydrogen no AI Mode (12 nov):** fan-out mais largo "across all the relevant subtopics". Favorece páginas de subtema concreto (fintech, SEO local, preço, integração), que é o que a destaque.ai publicou esta semana. Para o Tracker, decisão pendente (finding 2).
- **Core update de novembro (10 a ~24 nov):** não ler o efeito das páginas novas antes do fim do rollout.
- **Bing: preferências separadas de treino e de grounding (30 out; honradas a 1 fev 2027).** O site não usa `noarchive`/`nocache`; nada a mudar. A preferência temporária no BWT abre a 15 dez.
- **Search Central sobre CDN e robôs (11 nov):** sem impacto; a Vercel serve os robôs sem desafio (`robots.txt` 200).
- **ChatGPT Business Hub (beta EUA) e Wallet (EUA):** só awareness para Portugal.
Sem urgência nova inventada: nenhum gatilho de watch disparou para o mercado português.

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Repor saldo Gemini e DeepSeek e activar recarga automática; um só alerta de saldo para os cinco fornecedores | Medição | 1 h | Fundador |
| Diagnosticar o fan-out da auditoria semanal (`Invalid body`, 240 s) | Medição | 2 h | Fundador |
| Decidir a linha `gemini` do Tracker (`gemini-4-hydrogen`), conferir `max_output_tokens`, começar a série depois de ~24 nov | Medição | 1 h | Fundador |
| `/radar` no sitemap e no `llms.txt`; decidir `/en/radar` | Técnico | 1 h | Não precisa |
| Alinhar o NAP: `Place` do Porto no JSON-LD, ou retirar "Porto" do texto | Entidade | 30 min | Fundador |
| Acrescentar o perfil Sortlist ao `Organization.sameAs` | Entidade | 15 min | Não precisa |

**H2 (semana 3-6)**
- Peças PT-PT com dados próprios e autor nomeado para GP1, GP2, GP3 e GP5 (ChatGPT, AI Overviews e tráfego, AI Mode, concorrente citado), e "como avaliar uma agência de GEO" (GE1, GE5). Primeira linha com a definição "GEO (Generative Engine Optimization)", para desfazer a leitura geográfica.
- Verificar nos sites dos meios as peças de `/imprensa`; pitch ao ECO, Expresso e Negócios com o estudo da Black Friday e o Radar.
- Pedir avaliações no Clutch e no Sortlist.
- Re-testar V4, FS3 e GD1 depois de ~24 nov, quando as páginas novas tiverem duas semanas e o core update tiver terminado.

**H3 (semana 7-12)**
- Item Wikidata (destaque.ai e Periscopy), depois de verificadas as peças de imprensa.
- Ler os resultados do marcador Quorvintela (robôs e latência de absorção).
- Repetir os 22 prompts fixos com sessão real nos cinco motores obrigatórios.

**H4 (90+ dias)**
- Ligar GSC, GA4 (canal "AI") e BWT AI Performance à leitura semanal.
- Presença mínima em GitHub, Reddit e HN, se o custo editorial se justificar.
- CSP de Report-Only a enforced.
- Reduzir o peso do `/radar`.

## 16. Nota de encerramento

O score sobe para 74,2/100 (+0,4). O site fez numa semana o que estava no plano há várias: páginas de subtema, autor nomeado, um estudo com dados descarregáveis e uma descrição que já não contradiz a dos directórios. Ainda não há efeito medível. As páginas têm três dias e a Google está a meio de um core update e de uma troca de modelo no AI Mode. A visibilidade no proxy fica em 7/22, sempre por Clutch e Sortlist, e em 0/9 nos prompts de problema. A fragilidade principal está na medição própria: dois fornecedores voltaram a ficar sem saldo e o fan-out semanal começou a falhar. Das 12 categorias, só a Medição, a Autoridade e PR e a presença Social precisam de trabalho que o site sozinho não resolve; nas restantes, o que falta é tempo para indexar.
