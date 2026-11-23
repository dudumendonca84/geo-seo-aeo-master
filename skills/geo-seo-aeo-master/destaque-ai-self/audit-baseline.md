# destaque.ai self-audit baseline

**Data da auditoria:** 23 novembro 2026, 08:10–08:25 UTC. **Execução:** décima oitava corrida do Routine `destaque-ai-self-audit-weekly`, sete dias depois da anterior (16 nov): décima primeira execução consecutiva sem hiato.
**Método:** SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs), 8 dimensões / 12 categorias / 16 secções, per `../SKILL.md` § Methodology: SINAL.

## Nota de metodologia (ler antes do resto)

- **models.md:** última entrada a 20 nov (absorção do Gemini 4 Neon; antes, 18 nov, GPT-6.2). Menos de 7 dias: **sem refresh**. Nenhum default dos cinco motores obrigatórios mudou desde 16 nov. O GPT-6.2 Sol (17 nov) está no ChatGPT Work e no Codex, não no Chat normal; o Gemini 4 Neon (18 nov) não é o default do AI Mode nem do AI Overviews. Na secção `## Tracker buyer defaults`, a linha `gemini` passou a `gemini-4-hydrogen` a 17 nov.
- **Medido directamente:** 5 corridas `curl` a `https://www.destaque.ai/` (`Accept-Encoding: br`), headers, HTML, JSON-LD, `hreflang` (incluindo a volta a partir de `/en`), `robots.txt`, `llms.txt`, `llms-full.txt`, `index.md`, `sitemap.xml` (165 URLs, cruzado com o `llms.txt`), 24 rotas, peso do JavaScript da homepage; `/imprensa` e três peças abertas na origem (Marketeer ×2, Rádio Comercial); `list_deployments` (produção, desde 16 nov) e `get_runtime_errors` (7 dias) em `destaque-ai` e `destaque-ai-tracker`.
- **Origem das corridas:** o contentor desta rotina não está em Portugal. O header `x-vercel-id` mostra a edge `iad1` (EUA, leste), como nas semanas anteriores. O TTFB é comparável semana a semana, não é um TTFB "a partir de PT".
- **Teste multi-motor: 32 prompts + LR1, LR2 + 2 pesquisas (entidade, imprensa)**, via três sub-agentes de `WebSearch` (modo standard), entre 08:10:55 e 08:11:34 UTC. Fixos: GD1-8, GP1-9, V1-5 (22) mais LR1-2. Rotativos desta semana, todos diferentes dos de 16 nov: GE2, GE4, GE6, DC2, DC4, DC6, FS2, FS3, PC1, PC3. **É um proxy:** `WebSearch` corre a partir dos EUA e devolve síntese e ligações. Não é ChatGPT, Perplexity, Google AI Mode, Claude ou Bing Copilot como produto (sem sessão de browser nem API; 19.ª semana). Os modelos activos de cada motor ficam registados abaixo, mas o proxy não os exercita. Os sub-agentes não abriram as páginas; "na síntese" quer dizer no texto devolvido.
- **Não verificável:** PageSpeed Insights (`429`, quota diária esgotada às 08:13 UTC); Wikidata (API com limite de pedidos, `too many requests`, 3.ª semana); Knowledge Panel, Bing Places, Google Business Profile, pai.pt, GSC, GA4 e BWT (sem acesso). O header `date` da homepage em cache marca 23 nov 00:47 UTC (`age` 3371 s).
- **Janela contaminada:** o core update de novembro da Google está no 13.º dia e fecha por volta de 24 nov. A variação desta semana no proxy não é atribuível ao trabalho no site.

---

## 1. Sumário executivo

**Score global: 74,7/100 (75 arredondado; +0,5 vs. 16 nov). Banda: Good.** Sobem SEO Técnico, Schema e GEO técnica (+1 cada), Autoridade e PR (+1) e Medição (+2); as restantes ficam iguais.

Visibilidade em respostas de IA: **8 de 32 prompts (25%)** com destaque.ai na síntese (7/32 a 16 nov). Nos 22 prompts fixos: **8/22 (36%) contra 7/22**. GD 6/8 (GD1, GD3, GD5, GD6, GD7, GD8); V 2/5 (V1, V5; V2 e V3 saem); GP 0/9; LR 0/2; rotativos 0/10. **GD1 ("qual é a melhor agência de GEO em Portugal?") inclui a destaque.ai pela primeira vez**, em 3.º lugar, atrás da AppLabx e da Bluesoft. É 1.º nome em GD3, GD5, GD7, GD8, V1 e V5. **A fonte continua a ser só Clutch e Sortlist: nenhuma página de destaque.ai apareceu como fonte ou ligação em 36 pesquisas.** A variação de 7 para 8 está dentro do ruído do proxy.

No site, 12 deploys de produção em `READY` (#249–#260, 19 a 22 nov) e 2 em `ERROR` repetidos com sucesso. Fecha-se um item de cinco semanas: o Radar entrou no sitemap (17 URLs) e no `llms.txt` (#249, #257). Também: `FAQPage` só com perguntas visíveis na página (#257), `og:image:alt` e `lastmod` em todo o sitemap (#253), fontes servidas pelo próprio site (#254), menu "Por cidade" com "Agência SEO em Lisboa" e "no Porto" (#256), blog inglês com slugs ingleses e `308` dos antigos (#259), "doze motores" em vez de onze (#260), e uma versão Markdown da homepage anunciada no header `Link` (`/index.md`). Sitemap: 148 → 165 URLs, `lastmod` 19 nov.

### Scorecard: 12 categorias

| # | Categoria | Score | Δ vs. 16 nov | Nota |
|---|---|---|---|---|
| 1 | SEO Técnico | 91 | +1 | Sitemap 165 URLs com `lastmod` em todas; Radar dentro; `/radar/setor` 307; `/en/radar` 404; CSP só Report-Only |
| 2 | Performance / CWV | 65 | 0 | TTFB mediana 551 ms (395 ms a 16 nov); HTML 170.090 B, 27.978 B em Brotli; JS 774.663 B em 12 ficheiros + 63.362 B embutido; LCP/INP/CLS N/D |
| 3 | SEO On-Page | 95 | 0 | Título 54 caracteres, descrição 151; 1×H1, 14×H2, 15×H3; `og:image:alt` e `twitter:image:alt` novos; `alt` 3/15 |
| 4 | Schema | 95 | +1 | `FAQPage` alinhado com o texto visível (#257); JSON-LD de caminho no Radar (#249); `ImageObject` na homepage |
| 5 | Imagens | 76 | 0 | 15 `<img>`, 3 com `alt` descritivo (os vazios são ícones dos motores); logótipo em WebP (#253) |
| 6 | GEO técnica | 95 | +1 | `llms.txt` 46.753 B com o Radar; cobre todas as páginas PT do sitemap menos 3; `/index.md` anunciado em `Link` |
| 7 | Conteúdo & topical authority | 98 | 0 | Semana de manutenção, sem páginas de tema novas; lacunas GP1-9 e FS3/PC inalteradas |
| 8 | Entidade | 80 | 0 | Directórios dizem "consultora de GEO", o site diz "agência"; E1 e E2 sem resultado; NAP Lisboa/Porto por resolver |
| 9 | Autoridade & PR | 53 | +1 | 3 peças verificadas na origem (Marketeer 2 set e 24 set; Rádio Comercial); Tier-1 de negócios ainda 0 |
| 10 | Social & community | 37 | 0 | Não re-amostrado |
| 11 | E-E-A-T | 73 | 0 | Sem peça nova com autor nomeado esta semana |
| 12 | Medição | 38 | +2 | Tracker 41 → 7 grupos de erro; fan-out semanal e DeepSeek sem erros; Gemini `402` agora no Hydrogen (42) |

Soma 896; média 74,7.

### Top findings

1. **O Tracker passou a medir o Gemini 4 Hydrogen e a conta Gemini ficou sem saldo na primeira semana (P0 de custo baixo).** A troca da linha `gemini` aconteceu a 17 nov (item de 16 nov para DONE). A 20 nov, 10:27–10:34 UTC: `gemini/gemini-4-hydrogen (knowledge) failed: 402 … prepayment credits are depleted`, 42 ocorrências, 3 utilizadores. A série nova do AI Mode, que devia começar limpa depois do core update, começa com um buraco. É o 7.º regresso desta assinatura desde junho; a recarga automática continua por ligar. Do lado bom: DeepSeek e o fan-out da auditoria semanal sem erros na janela; DataForSEO desce de 248 para 46 ocorrências (última 20 nov 11:19 UTC); timeouts de 300 s 24; Mistral, Perplexity e Claude sem erros.
2. **Os directórios descrevem uma empresa que o site deixou de ser.** As 8 menções dizem "consultora de GEO sediada em Lisboa, focada em empresas B2B SaaS", às vezes com "fundada em 2025" e "empresa recente" (GD3). Nenhuma diz SEO, agência ou Periscopy. Como Clutch e Sortlist são a única fonte, o posicionamento de 10 nov ("Agência SEO e de visibilidade no ChatGPT", "Tech Marketing Agency") não chega ao comprador. Reescrever os dois perfis custa uma hora (item novo, P1).
3. **Visibilidade estável em 7–8/22, sempre por directórios; o site próprio nunca é fonte.** Ganho: GD1 pela primeira vez (3.º). Perdas: V2 e V3. Continua a desambiguação: LR1 devolve auditoria financeira e uma "GEOCLIMA LDA"; LR2 lê "AEO" como Operador Económico Autorizado; V4 (fintech) não encontra nenhum consultor de GEO, nem a página `/geo-fintech-portugal`, dez dias depois de publicada. FS3 não cita `/blog/relatorio-ai-performance-bing`; a síntese nota que todas as fontes estavam em inglês.
4. **Sem menção negativa nem alucinada.** Os números atribuídos à destaque.ai em GD8 ("251 B2B companies across 18 sectors", "45 B2B software companies") batem com o `llms.txt` (barómetro e estudo SaaS B2B). Reservas factuais: "empresa recente" (GD3) e, em GD6, a destaque.ai arrumada também entre "profissionais independentes". **Protocolo de crise (SKILL.md §14) não accionado.**
5. **Lacunas PT-PT nos prompts de problema e de preço inalteradas:** 2 domínios `.pt` em 9 respostas GP (marketeer.sapo.pt em GP9), 0 em 10 rotativos. Dominam seo.com, ahrefs.com, neilpatel.com e `.com.br`; GP3 e GP6 vêm em português do Brasil. PC1 mistura auditoria de GEO com auditoria fiscal e PDFs do gov.br; PC3 não encontra preço de consultoria de AI search. Preços de terceiros, não verificados: auditoria GEO 500–1.000 USD (alejandrorioja.com), "US$ 9.500 por uma auditoria completa" (GE2, sem fonte).
6. **NAP: Porto no texto e no menu, não na morada.** "Porto" aparece 12 vezes no HTML da homepage e o menu tem agora "Agência SEO no Porto" (#256); o JSON-LD declara `addressLocality: Lisboa` e o Porto só como `City` em `areaServed`.
7. **O `/radar` está no sitemap, mas pesa 1,31 MB de HTML** (1.309.400 B, +22% numa semana, oito vezes a homepage), e `/en/radar` continua 404.

### O que já está forte

Site principal sem erros de runtime na janela de 7 dias (17.ª semana seguida). 19 user-agents no `robots.txt`, todos com `Content-Signal: search=yes, ai-input=yes, ai-train=yes`; os robôs que o daily-agent documentou esta semana (`Meta-WebIndexer`, `Amzn-SearchBot`) não estão nomeados, mas o bloco `*` deixa-os passar. Server-rendered (`x-nextjs-prerender: 1`). `llms.txt` em paridade quase total com o sitemap PT (faltam 3 páginas utilitárias), agora com o Radar. Versão Markdown da homepage anunciada. `hreflang` recíproco entre `/` e `/en`. As menções que existem são positivas e, quando têm números, correctos.

---

## 2. Contexto de negócio

destaque.ai (Tuasunt, Lda.), Lisboa (o texto do site acrescenta Porto); fundada 2025; fundador Eduardo Mendonça; OpenAI Select Partner (JSON-LD). Apresenta-se como "Tech Marketing Agency portuguesa, de consultoria e software" (`llms.txt`): auditoria gratuita, medição semanal com o Periscopy em **doze** motores e superfícies (eram onze até #260, 22 nov), e execução das correcções. Radar mensal em `/radar` (15 setores), `/perguntas`, `/imprensa`, estudos em `/estudo/…`. `Organization.sameAs`: LinkedIn, Crunchbase, Clutch (sem Wikidata nem Sortlist). `Person` do fundador com LinkedIn, ORCID e página de autor no periscopy.ai.

## 3. Plataforma

Vercel (Next.js); projectos `destaque-ai`, `destaque-ai-tracker`, `destaque-ai-commercial`, `destaque-ai-deck-builder`. Desde 16 nov: 12 deploys de produção em `READY` (#249–#260) e 2 em `ERROR` (#251 e #253, 19 nov, repetidos com sucesso no mesmo commit; 6 em 34 em duas semanas). As fontes deixaram de vir do Google Fonts (#254), o que tira uma dependência externa ao build e ao carregamento. Toda a superfície auditada é resolúvel dentro da plataforma; nada exige Cloudflare nem migração.

## 4. Performance

TTFB (5 corridas `curl`, `Accept-Encoding: br`, 08:10 UTC): 647, 733, 346, 240, 551 ms; **mediana 551 ms** (395 ms a 16 nov, 215 ms a 9 nov). `x-vercel-cache: HIT` em todas; a variação vem sobretudo do proxy do ambiente e da edge `iad1`, não da origem. HTML 170.090 B descodificado (+10.796 B), 27.978 B em Brotli (`content-encoding: br`). JavaScript da homepage, lido: 774.663 B sem compressão em 12 ficheiros de script externos, mais 63.362 B embutidos; o #253 anuncia "menos JavaScript em todas as páginas", sem medição anterior comparável nesta rotina. LCP/INP/CLS: **N/D** (PSI `429`). O `/radar` (1,31 MB) é o risco de performance a acompanhar.

## 5. SEO on-page

Título "Agência SEO e de visibilidade no ChatGPT · destaque.ai" (54 caracteres). Meta description de 151 caracteres, sem mudança. H1 "A sua empresa no Google e nas respostas da IA"; 14×H2, 15×H3. `og:image:alt` e `twitter:image:alt` presentes ("destaque.ai | Tech Marketing Agency. Trabalhamos onde a IA decide."). `hrefLang` pt-PT, en, x-default, com volta a partir de `/en`. 15 imagens, 3 com `alt`. 200 em `/en`, `/radar`, `/radar/metodologia`, `/imprensa`, `/casos`, `/sobre`, `/perguntas`, `/playbook`, `/playbook/produtos-em-ia`, `/blog`, `/servico`, `/seo-local`, `/geo-fintech-portugal`, `/mapa-do-site`; `301` em `/agencia-geo`; `307` em `/radar/setor` → `/radar`; 404 em `/en/radar`, `/estudio`, `/setores`, `/fr`.

## 6. SEO técnico

- `sitemap.xml`: **165 `<loc>`** (148 a 16 nov), 68 em `/en`, 17 do Radar; `lastmod` em todas, mais recente 2026-11-19.
- `robots.txt`: 2.184 B, 19 `User-Agent`, `Disallow: /api/` e `Content-Signal` uniformes; `Sitemap` declarado. Bingbot, `Meta-WebIndexer` e `Amzn-SearchBot` cobertos por `*`.
- JSON-LD homepage (2 blocos): `Organization`, `Person`, `WebSite`, `WebPage`, `Service`, `FAQPage`/`Question`/`Answer`, `SpeakableSpecification`, `ProgramMembership`, `OfferCatalog`, `Brand`, `Place`, `PostalAddress`, `ContactPoint`, `Audience`, `City`, `Country`, `ImageObject`.
- Headers: HSTS (63072000), `x-frame-options: DENY`, `nosniff`, `referrer-policy`, `permissions-policy`; **CSP só `report-only`** (19.ª semana). `Link` aponta `llms.txt`, `agent-skills/index.json` e, novo, `/index.md` (`text/markdown`, 14.871 B).

## 7. AI / LLM visibility (GEO técnica)

`llms.txt` 46.753 B (+3.517) e `llms-full.txt` 65.135 B: 200, abrem com título `#`. Das páginas PT do sitemap, 3 não estão no `llms.txt`: `/laboratorio/marcador-quorvintela`, `/mapa-do-site`, `/servico`. As 68 `/en` também não (decisão de manter o `llms.txt` em PT).

| Motor | Modelo default (`models.md`, 20 nov) | Testado ao vivo? |
|---|---|---|
| ChatGPT | GPT-5.6 Sol (pagos); Free/Go medido como `gpt-5.6-luna` no Tracker; GPT-6.2 Sol só em Work e Codex | Não (19.ª semana) |
| Perplexity | Sonar Pro / Sonar | Não |
| Google AI Mode | Gemini 4 Hydrogen (desde 12 nov) | Não |
| Claude | Sonnet 5 (Free/Pro) | Não |
| Bing Copilot | GPT-5 via Azure OpenAI | Não |

| Bloco | Prompts | destaque.ai na síntese | Nota |
|---|---|---|---|
| GD1-8 | 8 | **6** (GD1, GD3, GD5, GD6, GD7, GD8) | Clutch/Sortlist; GD2 lido como consultoria de IA em geral (KPMG, PwC, Deloitte); GD4 sem destaque.ai (3.ª semana) |
| GP1-9 | 9 | **0** | 2 `.pt` (Marketeer); `.com.br` e `.com` em inglês |
| V1-5 | 5 | **2** (V1, V5) | V2 e V3 saem; V4 sem nenhum consultor de GEO |
| Rotativos (10) | 10 | 0 | GE2, GE4, GE6, DC2, DC4, DC6, FS2, FS3, PC1, PC3; 0 `.pt` |
| **Total** | **32** | **8 (25%)** | + LR1, LR2: 0/2; E1 0; E2 0 |

Série dos fixos: 26 out 3/22; 2 nov 8/22; 9 nov 8/22; 16 nov 7/22; **23 nov 8/22**. Posição quando aparece: 1.º em GD3, GD5, GD7, GD8, V1, V5; 2.º em GD6; 3.º em GD1.

---

## 8. Conteúdo e autoridade temática

Semana de manutenção: sem páginas de tema novas; actualizações em `/sobre`, `/radar/metodologia`, `/playbook/produtos-em-ia`, termos e privacidade (`lastmod` 19 nov), e o Radar com 15 páginas de setor indexáveis. As páginas de 13 nov (fintech, SEO local, Bing AI Performance) ainda não aparecem em nenhuma resposta do proxy. Continuam sem peça PT-PT com dados próprios os gaps GP1-9, GE2/GE4 (o que esperar de uma auditoria de GEO e que perguntas fazer; a síntese de GE4 diz que encontrou poucas fontes e escreveu perguntas suas), PC1/PC3 (preço) e FS3 em português. Oportunidade nova do news-feed: anúncios nos AI Overviews do Bing disponíveis em Portugal desde 19 nov, sem fonte PT-PT (item novo, P2).

## 9. Entidade e marca

E1 ("destaque.ai Periscopy Lisboa"): 0 de 19 resultados mencionam qualquer dos nomes. E2 ("destaque.ai notícias imprensa"): o motor lê "destaque" como "Destaques" do Google Notícias no Brasil. Wikidata não verificável (limite de pedidos). `sameAs` com 3 entradas, sem Sortlist (fonte de 6 das 8 menções desta semana) nem Wikidata. A descrição dos directórios ("consultora de GEO") ficou para trás do site ("agência SEO e de IA"): finding 2. NAP: finding 6.

## 10. Autoridade e PR

Verificado na origem esta semana: Marketeer, "Estas são as marcas portuguesas que a IA realmente recomenda" (2 set 2026) e "A IA fala destas 13 marcas portuguesas mas nunca escolhe nenhuma" (24 set 2026), ambas a nomear a destaque.ai; Rádio Comercial, peça sobre os modelos de IA e as eleições no Brasil (nomeia a destaque.ai 4 vezes). `/imprensa` lista ainda Lusa, Público, Observador (programa Mundo IA), M80, Smooth FM, DNoticias, SAPO e O Antagonista, por abrir. A Marketeer foi o único domínio `.pt` em GP9, V1 e V2, mas a citar a Buzzvel/Semantika, não a destaque.ai. ECO, Expresso e Negócios sem peça.

## 11. Social e comunidade

Não re-amostrado. Estado de 5 out: LinkedIn 96 vs. 250 seguidores (contraditório); HN, X, Reddit: nada.

## 12. E-E-A-T

Sem mudança. As páginas de 13 nov apontam `author` para `#fundador` (`Person` com LinkedIn, ORCID e página de autor no periscopy.ai). Falta a peça "o que esperar de uma auditoria de GEO" com autor nomeado: GE2 e GE4 devolvem Cyberclick, Ranktracker, Fiverr e seo.com.

## 13. Medição

`destaque-ai`: zero erros (7 dias). `destaque-ai-tracker`: **7 grupos** (41 a 16 nov).
- **Gemini `402` no Hydrogen:** 42 ocorrências, 3 utilizadores, 20 nov 10:27–10:34 UTC (finding 1).
- **DataForSEO:** `Internal SE Server Error` 46 (4 utilizadores), última 20 nov 11:19 UTC; `google_aio/dataforseo` 3 (SerpApi sem `page_token`; abortado).
- Timeouts de 300 s: 24 (`/api/cron/ops-health`, `/api/audit/run-batch`, `/api/inngest`, `/api/public/radar`), última 20 nov 10:38 UTC.
- Isolados: `AuthApiError refresh_token_not_found` 4 e `fetch failed` 1 em `/api/ingest/ui-observation` (21 nov).
- **Ausentes da janela:** fan-out da auditoria semanal (6 a 16 nov), DeepSeek (≈30 grupos a 16 nov), Mistral, Perplexity, timeouts do Claude (19 a 16 nov), Supabase Auth `429`, Stripe.
- GSC, GA4, BWT AI Performance: sem acesso. O news-feed de 21 nov recomenda ler o core update a partir de 25 nov com a dimensão `brandedClassification` da Search Analytics API; aplica-se também à destaque.ai, se o GSC estiver ligado.

## 14. Posicionamento e concorrência

Concorrentes recorrentes no proxy: AppLabx (GD1, GD6, GD7, com listicle próprio), Claneo (GD1, GD6, GD7, V5), Bluesoft (GD1, GD8, V5), Marketing Gabriel (GD1, GD6, GD7), AISO Hub (GD8, LR2), DevCommX (V1, LR2), Buzzvel/Semantika (GD4, GD5, V1, V2), Diogo Cortez (GD3, V5). Novos esta semana: MeetGEO (V1), GAM SEO (V5, São Paulo com escritório em Portugal; vem provavelmente de band.com.br, não verificado), Minuttia (GD4). GD2 trouxe consultoras generalistas (KPMG, PwC, Deloitte, Accenture), porque o motor leu "AI search" como consultoria de IA.

News-feed 17 a 23 nov, o que muda para a destaque.ai:
- **Anúncios nos AI Overviews do Bing em todos os mercados excepto a China (19 nov):** o primeiro formato de anúncio em resposta de IA declarado em Portugal. Oportunidade editorial e comercial; item novo P2.
- **Meta-WebIndexer e Amzn-SearchBot documentados (23 nov):** o `robots.txt` da destaque.ai deixa-os passar pelo `*`; nada a mudar no site, só o check novo nas auditorias de clientes.
- **Perplexity Context API (17 nov):** confirma que a Perplexity descarta boilerplate antes de escolher excertos. Nas páginas da destaque.ai, as respostas às perguntas-chave estão no corpo; o `FAQPage` foi alinhado com o texto visível (#257).
- **Search Analytics API com `brandedClassification` (16 nov):** a pesquisa de marca é o rasto mensurável de uma menção sem link; útil para a própria destaque.ai quando o GSC estiver ligado.
- **GPT-6.2 e Gemini 4 Neon:** sem troca de default; nada a fazer.
- **Core update de novembro:** fecha por volta de 24 nov; ler efeitos a partir de 25 nov.
Sem urgência nova inventada: o único gatilho de watch disparado (anúncios no Bing) é oportunidade, não ameaça.

## 15. Plano em 4 horizontes

**H1 (semana 1-2)**
| Acção | Categoria | Esforço | Aprovação |
|---|---|---|---|
| Repor saldo Gemini e ligar recarga automática no AI Studio; um só alerta de saldo para os fornecedores de LLM | Medição | 1 h | Fundador |
| Reescrever as descrições Clutch e Sortlist (PT e EN) com a frase do `llms.txt`; pedir 2-3 avaliações | Entidade | 1 h | Fundador |
| Acrescentar o perfil Sortlist ao `Organization.sameAs` | Entidade | 15 min | Não precisa |
| Alinhar o NAP: `PostalAddress` do Porto no JSON-LD, ou trocar "sedes" por outra palavra | Entidade | 30 min | Fundador |
| Confirmar um anúncio numa resposta de IA do Bing em pt-PT (capturas datadas) | Conteúdo | 1 h | Não precisa |

**H2 (semana 3-6)**
- Peças PT-PT com dados próprios e autor nomeado para GP1, GP3 e GP5, para "o que esperar de uma auditoria de GEO" (GE2, GE4), para preço (PC1, PC3) e para os anúncios nos AI Overviews do Bing. Primeira linha com a definição "GEO (Generative Engine Optimization)".
- Abrir na origem as restantes peças de `/imprensa`; pitch ao ECO, Expresso e Negócios com o estudo da Black Friday e o Radar.
- Re-testar V4, FS3 e GD4 a partir de 25 nov, já fora do core update.
- Decidir `/en/radar` e cortar o HTML do `/radar` abaixo de 500 KB.

**H3 (semana 7-12)**
- Item Wikidata (destaque.ai e Periscopy), apoiado nas peças verificadas.
- Ler os resultados do marcador Quorvintela (robôs e latência de absorção).
- Repetir os 22 prompts fixos com sessão real nos cinco motores obrigatórios.

**H4 (90+ dias)**
- Ligar GSC (com `brandedClassification`), GA4 (canal "AI") e BWT AI Performance à leitura semanal.
- Presença mínima em GitHub, Reddit e HN, se o custo editorial se justificar.
- CSP de Report-Only a enforced.

## 16. Nota de encerramento

O score sobe para 74,7/100 (+0,5). Foi uma semana de arrumação técnica bem feita: o Radar entrou no sitemap e no `llms.txt` depois de cinco semanas, o `FAQPage` passou a dizer só o que a página diz, e há uma versão Markdown anunciada. A visibilidade no proxy fica em 8/22, com GD1 pela primeira vez. Continua a vir toda de dois directórios que descrevem a empresa de antes de 10 nov. Os prompts de problema ficam em 0/9. Os dois trabalhos com mais retorno por hora estão fora do código: a descrição dos perfis Clutch e Sortlist, e o saldo do Gemini, que deixou a nova série do AI Mode a começar com um buraco. Das 12 categorias, Medição, Autoridade e PR e Social precisam de trabalho que o site sozinho não resolve. Nas técnicas, o que falta é pequeno.
