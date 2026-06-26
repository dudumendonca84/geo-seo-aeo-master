# gap_action_mapping.md

> **Quem consome isto:** o `destaque-ai-tracker` (task `generate_opportunities`) e o workflow de auditoria (Horizonte 4 — plano de acção). Mapeia um *sinal/gap* observado para uma *acção concreta*, com defaults de severidade, horizonte e esforço.
>
> **Regra dura (do founder, baked na SKILL.md):** o método cobre **8 dimensões**, não só técnico. Qualquer plano gerado a partir deste ficheiro tem de poder tocar todas as 8 — e cada horizonte mistura dimensões. Tratar GEO como "tornar o site técnicamente perfeito" e ignorar entidade/autoridade/conteúdo é o erro recorrente que este ficheiro existe para impedir.

## Vocabulário (alinhado com o executor)

O Tracker valida cada acção contra estes conjuntos (`scripts/brain/apply-jobs.mts`). Itens fora destes valores são descartados silenciosamente — usar exactamente estes tokens.

| Campo | Valores |
|---|---|
| `dimension` | `technical` · `content` · `entity` · `authority` · `social` · `authority_on_site` · `measurement` · `positioning` |
| `severity` | `high` · `medium` · `low` |
| `horizon` | `h1_2` (semana 1-2) · `h3_6` (semana 3-6) · `h7_12` (semana 7-12) · `h90` (90+ dias) |
| `source` | `audit` (respostas dos motores) · `site_scan` (On-Page) · `competitor` (conjunto de concorrentes) |
| `effort` | `low` · `medium` · `high` |

Cada acção surfaced é objecto `{ dimension, title, rationale, action, source, severity, horizon, effort }`.

## Como ler a severidade vs. o horizonte

São eixos independentes:

- **Severidade** = quão grande é o gap (impacto × quão exposto está).
- **Horizonte** = quando começa, em função de dependências e tempo até efeito.

Um gap de severidade alta pode viver em `h7_12` se demorar a produzir efeito (ex: cobertura Tier-1). Um gap de severidade baixa pode viver em `h1_2` se for um quick-win (ex: `hreflang`). **Não colapsar os dois eixos.**

## Princípios que se aplicam a cada acção

Herdados da `SKILL.md` (§ Non-negotiable principles):

1. Registo Economist, sóbrio. Sem "game-changer", "revolutionary", "10x", "unlock", "leverage".
2. Números com unidade e data. Uma acção sem medida associada é uma opinião.
3. PT-PT no `title`/`rationale`/`action`. EN só para identificadores técnicos (`hreflang`, `Schema.org/Person`, `User-agent: GPTBot`), nomes de ferramentas, títulos de papers.
4. Honesto sobre incerteza. "Vendor data, treat as directional." quando a evidência é fraca.
5. Sem benchmarks fabricados. Se não há estudo público em `benchmarks.md`, não inventar o número.
6. **Entidade é o substrato, não a táctica.** Wikidata/sameAs/autores nomeados antes de "prompting de IA".
7. SEO é o substrato; GEO é a extensão. 54% das citações de AI Overviews vêm do top-10 orgânico (BrightEdge) — não desprezar o clássico.

---

## 1. Technical foundation (`technical`)

Schema.org, `llms.txt`, `robots.txt` para AI crawlers, CWV/performance, HTML server-rendered. É o substrato — necessário, mas raramente o que falta quando o site já pontua alto no scan.

| Sinal / gap | Acção (`action`) | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Sem `hreflang` num site PT/EN | Declarar `hreflang` pt-PT, en e `x-default` em todas as páginas bilingues; validar reciprocidade. | low | h1_2 | low | site_scan |
| AI crawlers não declarados no `robots.txt` | Permitir/avaliar explicitamente `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended`; documentar a postura. | medium | h1_2 | low | site_scan |
| JSON-LD em falta nos templates-chave | Injectar os tipos `Schema.org` em falta (`Organization`, `Person`, `Article`, `FAQPage` conforme o template). **Sem prometer uplift de citação** — Ahrefs (Mai 2026) não encontrou uplift e viu −4,6% AIO. Schema é higiene, não alavanca mágica. | medium | h3_6 | medium | site_scan |
| HTML não server-rendered | Garantir SSR/SSG nas páginas que importam — os motores leem HTML sem executar JS. | high | h3_6 | high | site_scan |

> **Anti-claim:** `llms.txt` — publicar por higiene de docs, **não** como alavanca de citação. Google (Illyes/Mueller) não o usa; estudos de logs 2025 mostram consumo quase nulo por AI bots.

## 2. Content & topical authority (`content`)

Estatística original publicada, conteúdo comparativo, clusters temáticos, cadência. É o que os motores citam como **fonte primária**.

| Sinal / gap | Acção | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Citação baixa + sem dados próprios publicados | Produzir um relatório de dados original (PT-PT) com método e números datados; publicar com `Schema.org/Dataset` ou `Article`. | high | h3_6 | high | audit |
| Sem conteúdo comparativo para queries de decisão | Construir comparativos honestos (sem denegrir), ancorados em dados, para as queries de comparação que a auditoria mostra. | medium | h7_12 | high | audit |
| Cobertura temática rasa | Clusters temáticos com cadência regular; cobrir o espaço que os peers já ocupam e o que ninguém cobre. | medium | h7_12 | medium | competitor |

## 3. Entity & brand foundation (`entity`)

Wikidata QID, artigo Wikipedia, Knowledge Panel, profundidade de `sameAs`, consistência de NAP. **A maior alavanca quando a citação está perto de zero** — os motores corroboram a marca como entidade antes de a citar.

| Sinal / gap | Acção | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Tem QID mas sem artigo Wikipedia | Redigir stub neutro e referenciado (PT-PT + EN) com fontes secundárias independentes; ligar ao QID. Respeitar *notability* — citar cobertura de terceiros, não auto-promoção. | high | h1_2 | medium | site_scan |
| `sameAs` raso / NAP inconsistente | Alinhar nome/morada/contacto em todos os perfis; expandir `Organization.sameAs` para todos os perfis oficiais. | medium | h3_6 | low | audit |
| Sem Knowledge Panel | Após QID + artigo + `sameAs` coerentes, reivindicar e enriquecer o Knowledge Panel; monitorizar consistência dos atributos. | medium | h90 | medium | audit |

## 4. Authority & digital PR (`authority`)

Cobertura em media Tier-1 PT (Observador, ECO, Público), podcasts, conference speaking, anchor text de marca. Autoridade externa que os motores corroboram.

| Sinal / gap | Acção | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Sem cobertura em media Tier-1 PT | Pitch a ~10 jornalistas Tier-1 PT, usando o relatório de dados como gancho noticioso; medir cobertura conquistada. | high | h7_12 | high | competitor |
| Ausente de podcasts do sector | Identificar 10 podcasts PT/EN de marketing/tech; pitch com ângulo de dados; meta de 3 aparições. | medium | h7_12 | medium | competitor |
| Sem presença em palco | Submeter propostas a 3-5 conferências PT/EU para os próximos 6-12 meses. | low | h90 | medium | competitor |

## 5. Social & community signals (`social`)

LinkedIn, GitHub, Reddit, Hacker News, X — plataformas que os motores citam.

| Sinal / gap | Acção | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Ausente de Reddit/LinkedIn | Activar perfil LinkedIn com publicação regular; participar genuinamente em r/SEO e comunidades PT relevantes. Sem spam. Reddit pesa forte nas citações Perplexity — *vendor data, treat as directional*. | medium | h1_2 | low | competitor |
| Sem prova social técnica (GitHub/HN) | Quando há produto/dados, publicar de forma útil em GitHub/Hacker News; deixar a comunidade gerar menções. | low | h3_6 | medium | competitor |

## 6. Authority signals on site (`authority_on_site`)

Autores declarados com `Person` schema + `sameAs`, credenciais nomeadas (E-E-A-T "Experience"), casos com resultados verificáveis.

| Sinal / gap | Acção | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Conteúdo sem autoria declarada | Atribuir artigos a autores reais com `Person` schema, `sameAs` (LinkedIn/ORCID) e bio com credenciais verificáveis. | medium | h3_6 | medium | site_scan |
| Casos sem resultados verificáveis | Publicar casos com números e datas (E-E-A-T "Experience"), não testemunhos genéricos. | medium | h7_12 | medium | site_scan |

## 7. Measurement & feedback (`measurement`)

GSC, GA4 canal IA, Bing Webmaster Tools AI Performance. Não se gere o que não se mede.

| Sinal / gap | Acção | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Sem baseline de tráfego IA | Configurar canal de referência IA no GA4 (regex dos referrers ChatGPT/Perplexity/Gemini); activar Bing WMT AI Performance; ligar GSC. | medium | h1_2 | low | audit |
| Sem série temporal de citação | Estabelecer o baseline de citation rate/SoV e acompanhar semana-a-semana — sem série, o progresso não é defensável. | medium | h3_6 | low | audit |

> **Anti-claim:** GSC sobre-reportou impressões entre Mai 2025 e Abr 2026 — não comparar YoY através dessa janela sem nota.

## 8. Strategic positioning (`positioning`)

Tendência de share-of-voice, estratégia no-click, mapeamento por fase de pipeline.

| Sinal / gap | Acção | `severity` | `horizon` | `effort` | `source` |
|---|---|---|---|---|---|
| Sem páginas que definam a categoria | Criar páginas pilar PT-PT que respondam às queries de categoria; mapear contra o que os peers cobrem. | medium | h3_6 | medium | competitor |
| Sem leitura de tendência vs peers | Acompanhar SoV vs o peer set (ex: 3HASH, Studio.351); rever trimestralmente e reajustar prioridades. | medium | h90 | medium | competitor |
| Visibilidade não mapeada à jornada | Mapear presença por fase (TOFU/MOFU/BOFU) e atacar onde a conversão depende mais de ser citado. | medium | h7_12 | medium | audit |

---

## Regra de composição do plano (4 horizontes)

Cada horizonte **mistura dimensões** — não é um horizonte técnico seguido de um horizonte de conteúdo:

- **H1 (semana 1-2):** quick-wins de várias dimensões (ex: `hreflang` *technical* + criar artigo Wikipedia *entity* + baseline GA4 *measurement* + activar LinkedIn *social*).
- **H2 (semana 3-6):** optimização do existente (relatório de dados *content* + autores `Person` *authority_on_site* + `sameAs` *entity*).
- **H3 (semana 7-12):** reforço estratégico (media Tier-1 *authority* + comparativos *content* + jornada *positioning*).
- **H4 (90+ dias):** posicionamento de longo prazo (tendência de SoV *positioning* + speaking *authority* + Knowledge Panel *entity*).

Se um plano gerado cair maioritariamente numa só dimensão (tipicamente `technical`), está errado — está a estreitar o produto a "scan técnico tipo 3HASH" e a contradizer o método.

---

**Última actualização:** 26 Jun 2026 (criação inicial — 8 dimensões, 2-4 patterns cada, alinhado com o contrato `apply-jobs` do Tracker).
