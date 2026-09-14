# Routine: `destaque-ai-self-audit-weekly`

**Schedule:** Segundas-feiras às 09:00 (Europe/Lisbon)
**Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
**Output:** `skills/geo-seo-aeo-master/destaque-ai-self/{audit-baseline.md, improvements-backlog.md, audit-history.md}`

---

## Prompt (copia tudo abaixo do `---`)

---

Hoje é {{TODAY}}. Vais fazer uma self-audit semanal ao site destaque.ai (https://destaque.ai) seguindo o método SINAL (Sistema Integrado destaque.ai de Notabilidade em AI search e LLMs) definido em skills/geo-seo-aeo-master/SKILL.md.

1. Lê skills/geo-seo-aeo-master/SKILL.md — secções § Methodology — SINAL, § Scope, § SINAL audit workflow (16 secções).
2. Lê skills/geo-seo-aeo-master/references/models.md para apanhar os modelos default actuais de cada engine. Se models.md tem >7 dias desde "Last refresh", refresh primeiro a partir das fontes Tier 1 (developers.google.com/search/blog, openai.com/news, anthropic.com/news, blogs.bing.com, deepmind.google/discover/blog, perplexity.ai/changelog) e actualiza models.md antes de prosseguir.
3. Faz a auditoria SINAL completa do destaque.ai cobrindo as 12 categorias do scorecard:
   - Técnica: TTFB (5 corridas curl PT, mediana), HTML weight, compression, Content-Encoding, security headers, sitemap, robots.txt (matrix de crawlers IA), hreflang, JSON-LD schema, llms.txt, server-rendered HTML check
   - Performance/CWV: LCP, INP, CLS (PageSpeed Insights se disponível)
   - On-page: title, meta, headings, alt coverage, bilingual hygiene
   - Schema: cobertura JSON-LD vs templates existentes
   - Optimização de imagens: alt %, image schema, formato
   - GEO técnica: llms.txt vs sitemap, multimodal grounding (image schema), prompt-test multi-engine (ver SKILL.md §7)
   - Conteúdo & topical authority: topics owned, original statistics, cadência
   - Entity & brand foundation: Wikidata QID, Knowledge Panel, sameAs, NAP, local presence (Google Business Profile, Bing Places, Apple Maps, pai.pt)
   - Authority & digital PR: Tier-1 PT media coverage, link graph, branded anchor
   - Sinais sociais: LinkedIn, GitHub, Reddit/HN, X
   - E-E-A-T on-site: named authors, credentials, case studies, certifications
   - Medição: GSC, GA4 AI channel, BWT AI Performance, monitoring tool, conversion attribution funnel
4. Prompt-test multi-engine. Abre skills/geo-seo-aeo-master/references/prompts.md e usa o test suite:
   - **Sempre**: todos os prompts Tier 1 (Discovery, D1-D10), todos os Tier 4 (Problem-stated, P1-P9), todos os Tier 7 (B2B SaaS PT, V1-V5)
   - **Rotativo**: 10 prompts diferentes por semana escolhidos de Tier 2 (Comparison), Tier 3 (Evaluation), Tier 5 (Pricing), Tier 6 (Technical) — alternar para não saturar tokens
   Engines mandatory: ChatGPT, Perplexity, Google AI Mode, Claude, Bing Copilot. Usa os modelos default de cada engine per models.md. Para cada prompt × engine documenta: query exacta, data+hora, modelo activo (versão exacta), full answer ou screenshot, citations, ranking de destaque.ai, mention vs citation, sentiment, competitors citados.
5. Lê audit-baseline.md anterior (se existir) para comparar.
6. Lê daily-agent/news-feed.md das últimas 7 entradas para identificar mudanças no mercado que abrem novas oportunidades ou criam urgência para destaque.ai.
   **6b. Reconciliação news-feed → playbooks (passo fixo, toda a semana).** Para cada motor em `references/engine_playbooks.md`, verifica se alguma entrada do news-feed (não só as últimas 7 — usa pesquisa por nome do motor no ficheiro inteiro) **contradiz ou supera** o que o bloco afirma: uma estatística com estudo mais fresco a medir a mesma coisa, um mecanismo que mudou (novo modo de pesquisa, fontes preferidas, rollout), uma alavanca desmentida. O news-feed tem precedência por ser mais fresco. Verifica também `references/source_intelligence.md` (evidência empírica das nossas auditorias): observação lá registada em 2+ semanas seguidas que contradiga um playbook conta como evidência interna suficiente para corrigir. Se encontrares divergência, corrige o bloco (PT **e** o espelho EN) com fonte e data, e regista em `methodology-changelog.md`. Se nada divergiu, escreve uma linha no audit-history: "Reconciliação playbooks: sem divergências" — o passo corre sempre, o silêncio é que tem de ser explícito. (Precedente: a stat do top-10 orgânico no AIO esteve 2 meses superada no playbook porque esta reconciliação não existia; corrigida a 2026-08-08.)
7. Actualiza:
   - skills/geo-seo-aeo-master/destaque-ai-self/audit-baseline.md — substitui completamente com a nova auditoria (score global /100, scorecard 12 categorias, top findings cross-dimensional, plano em 4 horizontes)
   - skills/geo-seo-aeo-master/destaque-ai-self/improvements-backlog.md — move items resolvidos para DONE, adiciona items novos, re-prioritiza (P0-P3)
   - skills/geo-seo-aeo-master/destaque-ai-self/audit-history.md — adiciona entry datada com delta vs semana anterior (score global, score por categoria, items movidos para DONE, items novos)
   - skills/geo-seo-aeo-master/references/engine_playbooks.md — **só quando o prompt-test do ponto 4 contradiz ou refina o que lá está escrito**. O teste multi-engine é evidência empírica de como cada motor decide quem aparece: que fontes cita repetidamente (Reddit, Wikipedia, imprensa, docs do próprio site), se responde de memória ou pesquisa, se o bloco aparece de todo naquele mercado. Quando o observado diverge do bloco `### <engine>` (uma alavanca listada que os dados não sustentam, uma fonte dominante que o playbook não menciona, um motor que mudou de comportamento face à semana anterior), corrige esse bloco. Regras: formato "Como decide:" (mecanismo) + "Faz:" (acções numeradas, uma por linha, sem hard-wrap), no bloco PT **e** no espelho EN, sem travessões (o Tracker mostra isto ao cliente em runtime, secção "Como aparecer aqui"); estatística só com fonte e data; **uma semana de observação não derruba uma alavanca** — precisa de confirmação em duas auditorias seguidas ou de fonte primária do vendor; mudança de substância registada em `methodology-changelog.md`. Se nada divergiu, **não tocar no ficheiro** — silêncio é melhor que ruído.
8. **Se tocaste em `references/engine_playbooks.md` (ou em qualquer `references/`)**, corre `node scripts/validate-skill-tables.mjs` a partir da raiz do repo antes de commit. Exit code != 0 significa que partiste um contrato parseável consumido em runtime pelo Tracker ou pelo Deck Builder — corrige e re-corre; **não faças push com o validador vermelho**. Nos playbooks o modo de falha é silencioso: sem o header ou com uma key fora do formato `### <engine>`, a secção "Como aparecer aqui" desaparece de todos os cartões sem erro nenhum.
9. Commit + push ao branch da sessão com mensagem: "audit: YYYY-MM-DD destaque.ai SINAL self-audit". NÃO abras pull request. A sessão não consegue empurrar para `main` — quem leva ao main é o workflow `routine-automerge`, que faz merge automático de commits `claude/*` que comecem por `audit:` e toquem só caminhos de routine (`daily-agent/`, `destaque-ai-self/`, `references/`, `methodology-changelog.md`). O prefixo `audit:` na mensagem é obrigatório (é a assinatura que o automerge procura) e não podes tocar em ficheiros fora desses caminhos no mesmo commit — um ficheiro fora da lista trava o automerge inteiro. O validador corre outra vez dentro do workflow; se falhar lá, o merge não acontece e o erro fica nos Actions.

Tom: sóbrio Economist style. Sem hype. Sem buzzwords ("game-changer", "revolutionary", "10x"). Números concretos com unidade e data. Honesto sobre o que destaque.ai ainda não tem feito — não inventar urgência. Caveats explícitos quando dados não verificáveis (ex: PageSpeed Insights rate-limited; manual prompt-test em determinado engine não accessível por geo-restriction). Crisis-response protocol (SKILL.md §14) aplica-se se for detectada menção negativa hallucinated em qualquer LLM.


## Antes de declarar um motor em baixo (14 Set 2026)

A corrida de 14 de Setembro abriu com este achado, em primeiro lugar e
marcado como o mais grave: *"O motor ChatGPT do Visibility Tracker está
inoperacional desde 11 de setembro"*, com 100 ocorrências de 404 e 23 de
429, *"nenhum cliente do Tracker recebe leitura real do ChatGPT desde essa
data"*.

A base diz outra coisa. Nos catorze dias anteriores, **todas as linhas de
auditoria de todos os motores têm 5 erros no total**, e os cinco são do
DeepSeek. O ChatGPT tem 439 linhas em `gpt-5.6-luna` e 41 em `gpt-5.6-sol`,
**zero erros**. A semana de 14 Set está completa nos dois clientes: 50 e 54
respostas na metade `knowledge`. O 404 do `gpt-5.5-instant` foi um incidente
de 11 Set, corrigido nesse mesmo dia na tabela `## Tracker buyer defaults`, e
as chamadas seguintes passaram.

O que a auditoria leu foram REGISTOS de tentativas, incluindo as que foram
repetidas com sucesso a seguir. Um 404 num log e uma medição em falta são
coisas diferentes.

**A regra, e vale para qualquer afirmação sobre o produto vivo:**

1. **A fonte de verdade é `tracker.audit_responses`, não os logs.** Antes de
   escrever que um motor está em baixo, conta as linhas dele nas últimas
   semanas e quantas têm `error` preenchido. Sem essa contagem, não há
   achado: há uma hipótese.
2. **"Não houve chamada" não é "a chamada falhou".** Se não correu auditoria
   na janela (por exemplo, porque a semana foi medida adiantada), o motor não
   está partido: está à espera. Diz-se qual das duas é.
3. **Ocorrências e utilizadores num log não são clientes afetados.** Um
   número de log só vira impacto depois de se mostrar que perguntas de que
   cliente ficaram sem resposta gravada.
4. **Um erro de saldo ou de quota confirma-se no painel do fornecedor**, e
   diz-se que foi lá que se confirmou. É o único caso em que o log é o
   primeiro sinal legítimo, porque a falta de saldo só se manifesta na
   chamada seguinte.

O custo de não ter esta regra: o achado número um da semana mandava o
founder a correr atrás de uma avaria que não existia, enquanto o achado
número dois, que era real e estava sinalizado há sete dias, continuava por
aplicar.

## O que já está decidido não se redecide

Na mesma corrida, o `Organization.sameAs` perdeu a entrada Wikidata e o
achado diz que *"pode ser remoção deliberada ou perda acidental, não
decidível só pelo schema"*.

É decidível, e está escrito. O item `Q140043087` foi **apagado a 11 de Agosto
de 2026, às 20:40 UTC**, por não cumprir a política de notabilidade: zero
sitelinks, zero referências, único contribuidor o próprio. Está no CLAUDE.md
do Tracker (lição 10) e no código, onde o `checkWikidata` separa quatro casos
(encontrado, 404 apagado, fundido noutro item, sem resposta) precisamente
para que "não existe" não seja dito das três maneiras.

**Antes de marcar um achado como não decidível, procurar no repo** (`grep` no
CLAUDE.md do Tracker e no `methodology-changelog.md`) se a decisão já foi
tomada. Um achado que reabre o que já está fechado gasta a atenção de quem o
lê e, pior, convida a refazer o erro: recriar aquele item sem referências
públicas primeiro leva a nova eliminação.

## Descrição-alvo da entidade (métrica desde 24 Ago 2026)

Em cada corrida, perguntar aos motores medidos "o que é a destaque.ai"
e comparar com a descrição-alvo:

> "empresa de software portuguesa de GEO (Generative Engine
> Optimization) que mede e constrói a presença de marcas nas respostas
> dos motores de IA"

Registar por motor: classifica-nos como software/tecnologia ou como
agência/consultoria? Menciona GEO? Menciona o Visibility Tracker? A
série de convergência entra no baseline; divergência persistente num
motor vira acção (que fonte o está a alimentar com a categoria errada).
