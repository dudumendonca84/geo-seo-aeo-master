# Report template: auditoria SEO/GEO

Skeleton for the report produced by `site-audit-seo-geo`. It follows the
16 sections of the SINAL audit (`geo-seo-aeo-master/SKILL.md` § SINAL
audit workflow), grouped so the reader meets the decision first and the
evidence after. Sections with nothing to say are written in one line
("Nada a assinalar: ..."), not removed, so the reader knows they were
checked.

Everything below the line is the client-facing text, in PT-PT under the
Acordo Ortográfico de 1990. Angle brackets are placeholders. Example
phrases show the register; replace them with the audit's facts. The
example figures (276 ms, 20 vs 182 URLs, 1.840 palavras) are
illustrations of form, not facts about any site.

---

# Auditoria SEO e GEO: <domínio>

**Data:** <dia mês ano>. **Âmbito:** <domínio que serve o site>, <n>
páginas lidas em <n> modelos de página, mais presença fora do site.
**Mercado e língua:** <PT-PT / PT e EN>. **Tipo de negócio:** <SaaS B2B /
retalho / negócio local / alojamento ou serviço com data>.
**Método:** SINAL, oito dimensões. **Recolha:** `curl` a partir de
<local>, User-Agent do Periscopy e, onde houve recusa, de browser.

## O que não conseguimos ler

Lista curta e no início, porque muda a leitura de tudo o resto.

- `trustpilot.com/review/<domínio>`: 403 da Cloudflare em duas tentativas.
  Não conseguimos ler; não quer dizer que o perfil não exista.
- Core Web Vitals: a API do CrUX recusou por quota (429). Sem valores
  nesta auditoria.
- Google Search Console, GA4, Bing Webmaster Tools, painel da Cloudflare:
  sem acesso. Ficam como "não verificável" e passam para a lista do
  cliente.

## 1. Resumo

**Nota técnica: <n>/100**, calculada como a Saúde do site do Periscopy
(pesos 3, 2 e 1 por gravidade; os padrões emergentes e as cinco
verificações novas não contam). **Scorecard SINAL: <n>/100**, média
simples das 12 categorias, banda <Crítico / A melhorar / Bom / Excelente>
porque <uma frase>.

| # | Categoria | Nota | Factos que a sustentam |
|---|---|---|---|
| 1 | SEO técnico | | |
| 2 | Performance / CWV | | |
| 3 | SEO on-page | | |
| 4 | Dados estruturados | | |
| 5 | Imagens | | |
| 6 | GEO técnica (robots, llms.txt, HTML servido) | | |
| 7 | Conteúdo e autoridade temática | | |
| 8 | Entidade (Wikidata, Wikipédia, sameAs, NAP) | | |
| 9 | Autoridade e imprensa | | |
| 10 | Social e comunidade | | |
| 11 | E-E-A-T no site | | |
| 12 | Medição | N/D se sem acesso | |

**Os quatro achados que mais pesam**, de dimensões diferentes:

1. <facto medido, com número>. Exemplo: "A Cloudflare responde 403 a
   pedidos com User-Agent de GPTBot e 200 ao mesmo endereço com
   User-Agent de browser. É uma indicação, não uma prova: a confirmação
   está no painel AI Crawl Control."
2. <entidade>. Exemplo: "O item Wikidata Q<n> foi apagado a <data> por
   notabilidade (registo de eliminação da Wikidata). Recriá-lo com as
   mesmas afirmações leva à mesma eliminação."
3. <conteúdo ou posicionamento>.
4. <autoridade ou social>.

**O que já está forte.** <Um parágrafo. Exemplo: "O HTML servido tem o
texto todo (1.840 palavras na página inicial, sem depender de
JavaScript), o `robots.txt` não bloqueia nenhum crawler de IA da lista e
o `Organization` traz morada, logótipo e quatro perfis em `sameAs`.">

## 2. Contexto do negócio

Identidade, setor, línguas servidas, plataforma. Portefólio tal como o
site o descreve (e o `llms.txt`, se existir). Perfis declarados em
`Organization.sameAs`, ou a falta deles.

## 3. Plataforma

Alojamento, CDN, construção (SSG, SSR ou só no browser). O que a
plataforma permite e o que exige uma CDN à frente ou migração. Repartição
honesta: quantos achados se resolvem dentro da plataforma.

## 4. Fundação técnica

Uma tabela por nível, com a chave do Periscopy em cada linha.

| Verificação | Chave | Estado | Evidência |
|---|---|---|---|
| Página inicial acessível | `reachable` | pass | 200 em `https://www.<domínio>/`, <data> |
| Crawlers de IA autorizados | `ai_crawlers` | warn | `robots.txt` bloqueia `Google-Extended` em `/` |
| Soft 404 | `soft_404` | fail | `/nao-existe-<n>` responde 200 com "Página não encontrada" |
| TTFB | `ttfb` | medição | mediana de 5 corridas a partir de Lisboa: 276 ms |

Frases-modelo (o detalhe é o facto; o conselho vem na secção do plano):

- "Sem `shippingDetails` nem `hasDeliveryMethod` no `Offer` em 48 das 50
  fichas amostradas."
- "`llms.txt` presente com 20 endereços; o sitemap tem 182."
- "Bloquear o `Google-Extended` tem um custo medido na recuperação pelas
  AI Overviews (benchmarks.md §27, Grossman et al., SIGIR '26). O estudo
  não dá uma percentagem, e é norte-americano."
- Para `rel=canonical`: "a versão oficial do URL", nunca outra palavra.

Páginas: a tabela das verificações por página agrupa por modelo de
página, e diz quais não se aplicam e porquê ("as fichas de produto
respondem pelo `Product` e pelo `Offer`; as verificações de prosa não se
aplicam").

## 5. Conteúdo e autoridade temática

Temas cobertos e por cobrir, dados próprios publicados, conteúdo
comparativo, cadência. Exemplo: "Não há nenhuma página de comparação. Num
estudo de uma agência, as páginas 'X vs Y' foram citadas cerca de 45% mais
por recuperação do que a média (benchmarks.md §22, DeltaV Digital, dados
de um só portefólio de clientes)."

## 6. Entidade

Wikidata (encontrado, ausente, fundido, apagado, não lido), Wikipédia,
painel de conhecimento, coerência do nome, morada, telefone e descrição
entre o site e os perfis. Cada perfil com URL e data de leitura.

## 7. Autoridade e imprensa

Peças em imprensa Tier-1 portuguesa nos últimos 12 meses, cada uma com
URL, data e confirmação por leitura. Listas "top X", podcasts,
conferências. Se zero: "Zero peças confirmadas em Observador, ECO,
Público, Expresso, Dinheiro Vivo e Jornal de Negócios entre <data> e
<data>."

## 8. Social e comunidade

LinkedIn (página e pessoas), Reddit, Hacker News, GitHub, YouTube,
diretórios e plataformas de avaliação. Peso declarado com o número:
"No nosso corpus, o linkedin.com vale 1,4% a 2,0% das citações para
clientes B2B portugueses (benchmarks.md §53). É um investimento real, mas
de segunda linha."

## 9. E-E-A-T no site

Autores com nome e `Person`, casos com resultados verificáveis, página
de equipa, afirmações do site confirmadas ou por confirmar.

## 10. Medição

GSC, GA4 com canal de IA, Bing Webmaster Tools AI Performance,
monitorização de citações. Sem acesso, diz-se assim, e cada linha passa
para a lista do cliente.

## 11. Posicionamento

Quem é citado na categoria, em que etapa da decisão a marca aparece, que
território está livre. Se há medição do Periscopy, os números vêm de lá e
passam pelo crivo da `tracker-forensics`. Nota obrigatória quando se cita
um estudo norte-americano: "Não existe estudo público equivalente para
PT-PT (benchmarks.md §17)."

## 12. Quem faz o quê

**Resolve-se em código** (repositório, modelo de página ou CMS):

| Ação | Chave | O que se espera que mude | Esforço |
|---|---|---|---|
| Responder 404 a endereços inexistentes | `soft_404` | os endereços falsos deixam de ser lidos como páginas | 1 h |

**Fica com o founder / cliente** (contas, fora do site, decisões):

| Ação | Porque não é código | O que se espera que mude | Esforço |
|---|---|---|---|
| Confirmar o AI Crawl Control na Cloudflare | só visível no painel | saber se o `robots.txt` está a ser respeitado | 15 min |
| Reunir três referências públicas antes de recriar o item Wikidata | é trabalho fora do site e precisa de terceiros | um item que resiste à revisão de notabilidade | semanas |

## 13. Plano em quatro horizontes

Ordenado pelo que a medição sugere primeiro. É uma proposta: a marca
decide o que publica, em que ordem, e se publica. Cada horizonte mistura
dimensões.

**Semanas 1-2.** Exemplo: corrigir o soft 404 e o `Google-Extended`
(técnica); confirmar o AI Crawl Control (técnica, cliente); completar o
`Organization.sameAs` com os perfis que existem (entidade); reclamar o
perfil na plataforma <x>, que os motores já citam na categoria (social).

**Semanas 3-6.** Exemplo: página de comparação com tabela em HTML
(conteúdo); autores com `Person` e `sameAs` nos artigos (E-E-A-T); GA4 com
canal de IA e BWT AI Performance ligados (medição).

**Semanas 7-12.** Exemplo: um estudo com dados próprios (conteúdo);
contacto com três jornalistas de imprensa Tier-1 com esse estudo
(autoridade); publicação regular no LinkedIn pelos fundadores (social).

**90+ dias.** Exemplo: item Wikidata com referências (entidade);
conferências e podcasts do setor (autoridade); revisão da partilha de voz
nas perguntas de decisão (posicionamento).

Sobre prazos: o único número público é a mediana de 6,81 dias entre a
publicação e a primeira citação, com 37,10 dias no percentil 90
(benchmarks.md §53, Profound, citado num guia do LinkedIn: dados de
fornecedor). Trinta dias é o mínimo para um veredicto, não o momento de
declarar que não resultou.

## 14. Nota final

Onde não é preciso intervir, diz-se. Exemplo: "Das 12 categorias, três
pedem trabalho; as outras nove estão bem e não há razão para lhes mexer
agora."

---

## Self-check before handing over

Run each line against the finished text:

- [ ] Every number is a measurement of this site (with method and date)
      or comes from benchmarks.md with its section. No number from
      memory, no number from the "may NOT use" list in SKILL.md.
- [ ] Every "não existe" was checked against "não conseguimos ler" and
      "foi apagado".
- [ ] Every profile, press piece and site claim was fetched; the rest is
      marked "por confirmar".
- [ ] Every Periscopy key is spelled as in the code.
- [ ] Advice matches the business type (no per-product shipping for a
      supermarket, no fixed price or stock for a stay).
- [ ] No em dash (search for the character) and neither of the two banned
      words ("controlo", "canónico").
- [ ] AO90: no "acção", "actual", "directo", "objectivo", "sector" (in
      Portuguese prose), "aspecto", "optimização", "correcção",
      "redireccionamento". Proper names untouched.
- [ ] No imperative toward the client: actions say what they are
      expected to change.
- [ ] "Resolve-se em código" and "Fica com o founder / cliente" are
      separate, and the plan has four horizons, each mixing dimensions.
- [ ] US benchmarks carry the PT-PT evidence-gap note (benchmarks.md §17).
