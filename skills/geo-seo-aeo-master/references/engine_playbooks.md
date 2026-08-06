# Engine playbooks — como aparecer em cada motor

Referência do `geo-seo-aeo-master`. Um bloco por motor/superfície: como o
motor decide quem aparece e que alavancas do SINAL puxar. Consumido em
runtime pelo Visibility Tracker (secção "Como aparecer aqui" nos cartões dos
Motores) — ver contrato em `INTERFACES.md`.

**Princípio das duas vias.** Cada motor responde por uma de duas vias, ou
pela mistura das duas:

- **Memória (knowledge)** — o que o modelo aprendeu no treino. Alavancas de
  longo prazo: entidade (Wikidata, Wikipedia, Knowledge Panel), imprensa
  durável, dados originais citados por terceiros. Meses a propagar.
- **Pesquisa (augmented)** — o que o motor encontra na web no momento.
  Alavancas de ciclo curto: conteúdo comparativo que responde à pergunta,
  ranking orgânico, schema, llms.txt, fontes que o motor prefere citar.
  Semanas a propagar.

Evidência interna (auditoria destaque.ai, semana 2026-07-27): marca nova sem
entidade externa = 0/324 citações em memória e 20/270 em pesquisa — o 2º
lugar da categoria veio inteiro da via da pesquisa. Uma marca estabelecida
do sector da saúde mede forte nas duas vias. A via onde a marca já ganha
diz que alavanca puxar a seguir.

**Manutenção (auto-alimentação).** Este ficheiro evolui pelos três loops da
skill, cada um com o seu gatilho escrito na respectiva routine:

- **daily-agent** (diário) — absorve mudanças de mecanismo anunciadas pelos
  vendors (novos modos de pesquisa, mudanças de fontes preferidas, rollouts
  por mercado) directamente nos blocos abaixo.
  Ver `daily-agent/daily-prompt.md`, ponto "Mudanças no funcionamento dos vendors".
- **self-audit semanal** (segundas) — o prompt-test multi-engine ao próprio
  destaque.ai é evidência empírica: quando o observado contradiz uma alavanca
  listada, corrige-a. Uma semana não derruba uma alavanca — precisa de duas
  auditorias seguidas ou de fonte primária do vendor.
  Ver `routines/destaque-ai-self-audit-weekly.md`, ponto 7.
- **synthesis-weekly** (sextas) — alavancas validadas em engagements reais,
  anonimizadas e com N≥3, entram no bloco do motor onde funcionaram.
  Ver `routines/synthesis-weekly.md`, Pass 3.

Cada alteração de substância regista-se no `methodology-changelog.md`.
Estatísticas só com fonte — sem estudo, dizê-lo. Qualquer routine que edite
este ficheiro corre `node scripts/validate-skill-tables.mjs` antes de commit:
o Tracker não tem fallback para este conteúdo, e um header fora do formato
`### <engine_key>` faz a secção desaparecer dos cartões em silêncio.

## Deck Builder/Tracker playbooks

### chatgpt

Mistura memória de treino com pesquisa web — e só liga a pesquisa numa
fracção das perguntas (~34,5% das queries, Semrush clickstream, Fev 2026).
Alavancas: presença em fontes duráveis que entram no treino (imprensa,
listas "melhores de", Wikipedia quando elegível); conteúdo no site que
responda directamente às perguntas comparativas da categoria, para a via da
pesquisa; consistência de nome e descrição da marca em todas as fontes.

### claude

Sobretudo memória de treino no modo base; com pesquisa activa, prefere
fontes institucionais e documentação clara. Alavancas: entidade consistente
(sameAs, descrições estáveis), conteúdo técnico e factual sem promessas
infladas, páginas que expliquem o que a marca faz em linguagem directa.

### gemini

Liga ao ecossistema Google: o que o Google indexa e entende bem alimenta o
Gemini. Alavancas: SEO clássico saudável (top-10 orgânico), schema.org
completo, ficha Google (Business Profile) actualizada por localização,
conteúdo em pt-PT com autoridade declarada (autores com credenciais).

### grok

Puxa do índice web e dá peso invulgar a conversas no X e a sinais recentes.
Alavancas: presença activa e citável no X, reacção rápida a temas da
categoria, conteúdo no site que valide o que se afirma nas redes.

### deepseek

Memória de treino com forte peso de fontes em inglês; cobertura pt-PT mais
fina. Alavancas: versão EN das páginas-chave da marca, presença em
directórios e listas internacionais da categoria, nome de marca sem
ambiguidade linguística.

### mistral

Memória de treino com boa cobertura europeia; com pesquisa, comporta-se
como os restantes motores augmented. Alavancas: as mesmas da via da
pesquisa (conteúdo comparativo + ranking) e presença em fontes europeias da
categoria.

### llama

Corre só em memória de treino: nenhum dos fornecedores que alojam o Llama
expõe pesquisa de primeira parte. O que conta aqui é o que o modelo
absorveu, portanto as alavancas são as da entidade: presença no Wikidata e
na Wikipédia, descrições consistentes em todas as plataformas, e menções em
fontes abertas que entram nos conjuntos de treino. Move-se em meses, ao
ritmo dos ciclos de treino.

Nota para quem mostra isto a um cliente: este motor é o modelo Llama, não
o assistente Meta AI que ele usa no WhatsApp. O assistente traz sistema,
recolha e guardas próprias, e não é medível por API nenhuma hoje.

### perplexity

Pesquisa sempre a web viva e cita fontes explícitas — dá peso invulgar a
comunidades (Reddit é ~47% das citações em alguns estudos de categoria;
tratar como direccional). Alavancas: estar presente e ser mencionado em
comunidades relevantes (Reddit, fóruns da categoria), conteúdo com dados
originais que mereça citação, páginas rápidas e legíveis por bots
(PerplexityBot no robots.txt).

### google_aio

O bloco de resposta de IA no topo do Google. ~54% das citações vêm do top-10
orgânico (BrightEdge) — o SEO clássico é o bilhete de entrada. Nas perguntas
locais e de urgência, o Google tende a mostrar o pacote local (mapa) em vez
do bloco: aí a batalha é a ficha Google de cada localização, não o AIO.
Alavancas: ranking orgânico nas perguntas comparativas, parágrafos-resposta
directos no topo das páginas, schema, fichas Google completas por unidade.

### google_ai_mode

O modo conversacional de pesquisa do Google — responde a praticamente todas
as perguntas e cita fontes ao nível da passagem. Alavancas: as do google_aio
mais profundidade: cada página deve responder a uma pergunta completa por
secção, com dados e comparações explícitas que o motor possa citar
isoladamente.

### copilot

O chat da Microsoft; pesquisa via índice Bing. Alavancas: estar bem indexado
no Bing (Bing Webmaster Tools activo, IndexNow), conteúdo comparativo claro,
autoridade declarada no site. O Bing Webmaster Tools "AI Performance" é a
única telemetria first-party de citações de IA — ligar sempre.

### copilot_bing

O bloco Copilot dentro da página de resultados do Bing (análogo Microsoft do
AIO). **Medição suspensa — não voltar a ligar sem confirmação do fornecedor.**

Confirmado pela DataForSEO por email a 5 Ago 2026: a Bing começou há meses a
baralhar os resultados contra scrapers, o Copilot incluído, e o problema
afecta todos os recolhedores da Bing, não só um. A recomendação deles é
expressa — não criar novas tarefas Bing até confirmarem que está resolvido.
Não é limitação de um fornecedor, é a Microsoft a defender-se, e trocar de
fornecedor não resolve.

O que se observa quando corre à mesma: pedidos pagos que devolvem sempre a
ausência do bloco. Não conta como medição (o sentinela `[sem ` exclui-a das
métricas), mas gasta consulta a cada pergunta e a cada semana.

Alavancas: as mesmas do copilot; quando a medição voltar, a presença aqui
herda o trabalho já feito no índice Bing — não há nada a fazer de diferente
entretanto.

## Deck Builder/Tracker playbooks (EN)

Espelho inglês do bloco acima, para clientes cujo `locale` é `en`. Mesmas
chaves, mesma ordem, mesma substância — o que muda é a língua, não o método.
Quando uma alavanca mudar em cima, muda aqui também: duas versões que
divergem são pior do que uma só.

### chatgpt

Mixes training memory with web search, and only turns search on for a
fraction of questions (~34.5% of queries, Semrush clickstream, Feb 2026).
Levers: presence in durable sources that feed training (press, "best of"
lists, Wikipedia where eligible); on-site content that answers the
category's comparison questions directly, for the search route; consistent
brand name and description across every source.

### claude

Mostly training memory in base mode; with search on, it prefers
institutional sources and clear documentation. Levers: a consistent entity
(sameAs, stable descriptions), technical and factual content without
inflated promises, pages that explain what the brand does in plain language.

### gemini

Wired into the Google ecosystem: what Google indexes and understands well
feeds Gemini. Levers: healthy classical SEO (organic top 10), complete
schema.org, an up-to-date Google Business Profile per location, content with
declared authority (named authors with credentials).

### grok

Pulls from the web index and gives unusual weight to conversation on X and
to recent signals. Levers: an active and quotable presence on X, quick
reaction to category topics, on-site content that backs up what is claimed
on social.

### deepseek

Training memory weighted heavily toward English-language sources. Levers:
an English version of the brand's key pages, presence in international
directories and category lists, a brand name without linguistic ambiguity.

### mistral

Training memory with good European coverage; with search on, it behaves like
the other augmented engines. Levers: the same as the search route
(comparative content plus ranking) and presence in European sources for the
category.

### llama

Runs on training memory alone: none of the providers hosting Llama expose
first-party search. What counts here is what the model absorbed, so the
levers are the entity ones: presence on Wikidata and Wikipedia, consistent
descriptions across platforms, and mentions in open sources that feed
training sets. It moves in months, at the pace of training cycles.

A note for anyone showing this to a client: this engine is the Llama model,
not the Meta AI assistant it powers in WhatsApp. The assistant brings its own
system, retrieval and guardrails, and no API measures it today.

### perplexity

Always searches the live web and cites explicit sources, with unusual weight
on communities (Reddit is ~47% of citations in some category studies; treat
as directional). Levers: being present and mentioned in relevant communities
(Reddit, category forums), content with original data worth citing, pages
that are fast and readable by bots (PerplexityBot in robots.txt).

### google_aio

The AI answer block at the top of Google. About 54% of citations come from
the organic top 10 (BrightEdge), so classical SEO is the ticket in. On local
and urgent questions Google tends to show the local pack (the map) instead of
the block: there the battle is each location's Google listing, not the AIO.
Levers: organic ranking on comparison questions, direct answer paragraphs at
the top of pages, schema, complete Google listings per location.

### google_ai_mode

Google's conversational search mode. It answers almost every question and
cites sources at passage level. Levers: everything from google_aio plus
depth: each page should answer one complete question per section, with data
and explicit comparisons the engine can quote on their own.

### copilot

Microsoft's chat, searching through the Bing index. Levers: being well
indexed in Bing (Bing Webmaster Tools connected, IndexNow), clear
comparative content, declared authority on the site. Bing Webmaster Tools
"AI Performance" is the only first-party telemetry of AI citations, and is
always worth connecting.

### copilot_bing

The Copilot block inside Bing's results page, Microsoft's counterpart to the
AIO. **Measurement suspended — do not switch it back on without provider
confirmation.**

Confirmed by DataForSEO over email on 5 Aug 2026: Bing began scrambling
results against scrapers some months ago, Copilot included, and the problem
affects every Bing collector rather than one vendor. Their recommendation is
explicit: set no new Bing tasks until they confirm it is resolved. This is
Microsoft defending itself, so switching provider does not help.

What is observed if it runs anyway: paid requests that always return the
block as absent. It does not count as measurement (the `[sem ` sentinel keeps
it out of the metrics), but it spends a query per question, per week.

Levers: the same as copilot; when measurement returns, presence here inherits
the work already done on the Bing index — there is nothing different to do in
the meantime.
