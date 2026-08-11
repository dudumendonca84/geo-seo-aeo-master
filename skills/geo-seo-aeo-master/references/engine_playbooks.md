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
  ranking orgânico, schema, fontes que o motor prefere citar.
  Semanas a propagar. (llms.txt saiu da lista: dois estudos independentes
  não encontram efeito nas citações e os crawlers de IA rastreiam o HTML
  directamente — SE Ranking ~300k domínios e Limy.AI 500M+ visitas de bots,
  Ago 2026.)

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

**Marcadores de aplicabilidade.** Um item do "Faz:" pode terminar com um
marcador `{{skip:<condição>}}` que o consumidor avalia contra o contexto do
cliente e usa para ESCONDER o item quando a condição se verifica. O marcador
nunca aparece ao cliente (o consumidor remove-o sempre do texto). Condições
definidas: `en-site` — esconder quando o site/locale do cliente já é inglês
(um "publica versão EN" a um cliente EN é ruído); `bwt-connected` — esconder
quando o cliente já tem o Bing Webmaster Tools ligado no Tracker (recomendar
ligar o que já está ligado é o achado que destrói a confiança — o consumidor
avalia com os dados de integração que já tem). Condição desconhecida =
mostrar o item na mesma, sem o marcador (fail-open). A regra vive aqui na
skill; o código só avalia.

Cada alteração de substância regista-se no `methodology-changelog.md`.
Estatísticas só com fonte — sem estudo, dizê-lo. Qualquer routine que edite
este ficheiro corre `node scripts/validate-skill-tables.mjs` antes de commit:
o Tracker não tem fallback para este conteúdo, e um header fora do formato
`### <engine_key>` faz a secção desaparecer dos cartões em silêncio.

## Deck Builder/Tracker playbooks

### chatgpt

Como decide: mistura memória de treino com pesquisa web, e só liga a pesquisa numa fracção das perguntas (~34,5% das queries, Semrush clickstream, Fev 2026). A pesquisa corre sobre o índice Bing e lê tipicamente só os 2 a 3 primeiros resultados por sub-pergunta (Search Engine Land, Jun 2026; Peec AI, Jul 2026, amostra pequena). O ranking orgânico não é pré-requisito: 28,3% das páginas mais citadas não têm visibilidade orgânica nenhuma (Ahrefs, Q1 2026).

Faz:
1. Responde no site às perguntas comparativas da categoria, uma pergunta por secção. Abre a via da pesquisa em semanas.
2. Garante indexação saudável no Bing (Bing Webmaster Tools, IndexNow): é o índice que a pesquisa do ChatGPT usa. {{skip:bwt-connected}}
3. Publica documentação e dados verificáveis de nível institucional: em modo de raciocínio o ChatGPT desloca citações de UGC para fontes institucionais, com só 25,6% de sobreposição de domínios entre modos (Semrush via Search Engine Land, Jul 2026).
4. Procura presença em fontes duráveis: imprensa, listas "melhores de", Wikipedia quando elegível. Alimenta a memória de treino, em meses.
5. Mantém uma versão EN actualizada das páginas-pilar: aumenta a presença nas respostas, mas uma página EN desactualizada desempenha pior do que não ter nenhuma (Search Engine Land, Ago 2026). {{skip:en-site}}
6. Usa o mesmo nome e a mesma descrição da marca em todas as fontes.

### claude

Como decide: sobretudo memória de treino no modo base; com pesquisa activa prefere fontes institucionais e documentação clara. Cita jornalismo de referência com mais frequência do que os outros motores (5W Citation Source Index, Jun 2026; direccional).

Faz:
1. Mantém a entidade consistente: sameAs no schema, descrições estáveis em todas as plataformas.
2. Escreve páginas que expliquem o que a marca faz em linguagem directa, factual, sem promessas infladas.
3. Publica conteúdo técnico citável: documentação, dados, comparações verificáveis.
4. Procura cobertura em imprensa de referência: é o perfil de fonte que este motor mais cita.

### gemini

Como decide: liga ao ecossistema Google; o que o Google indexa e entende bem alimenta o Gemini, e os motores generativos da Google favorecem conteúdo da própria Google (Grossman et al., SIGIR 2026).

Faz:
1. Cuida do SEO clássico: top-10 orgânico nas perguntas comparativas é o bilhete de entrada.
2. Completa o schema.org do site e mantém a ficha Google (Business Profile) actualizada por localização.
3. Cria presença no YouTube: é o domínio mais citado nas respostas de IA da Google (20,9% das citações do AI Overviews, Ahrefs, Jun 2026).
4. Declara autoria: autores com nome e credenciais nas páginas-chave.
5. Mede a visibilidade aqui com ferramentas terceiras: as menções de marca nas respostas do Gemini não aparecem no Search Console nem no GA4 (Search Engine Land, Ago 2026).

### grok

Como decide: puxa do índice web e dá peso invulgar a conversas no X e a sinais recentes.

Faz:
1. Mantém presença activa e citável no X, com reacção rápida aos temas da categoria.
2. Garante que o site valida o que afirmas nas redes: cada afirmação com página correspondente.
3. Publica com frequência: o recente pesa mais aqui do que nos outros motores.

### deepseek

Como decide: memória de treino com forte peso de fontes em inglês; cobertura pt-PT mais fina.

Faz:
1. Publica versão EN das páginas-chave da marca e mantém-na actualizada: uma página EN desactualizada desempenha pior do que não ter nenhuma, porque os modelos a tratam como canónica (Search Engine Land, Ago 2026). {{skip:en-site}}
2. Entra em directórios e listas internacionais da categoria.
3. Usa um nome de marca sem ambiguidade linguística nas fontes EN.

### mistral

Como decide: memória de treino com boa cobertura europeia. A API não expõe pesquisa de primeira parte (Jun 2026), por isso o que se mede aqui é só a memória; o produto de consumo pode pesquisar.

Faz:
1. Trabalha as alavancas de memória: entidade consistente, imprensa durável, presença em fontes europeias da categoria.
2. Mantém conteúdo comparativo e ranking orgânico: vale para o produto de consumo e para os restantes motores augmented.

### llama

Como decide: corre só em memória de treino; nenhum fornecedor que aloja o Llama expõe pesquisa de primeira parte. Move-se em meses, ao ritmo dos ciclos de treino.

Faz:
1. Trabalha a entidade: Wikidata, Wikipédia quando elegível, descrições consistentes em todas as plataformas.
2. Procura menções em fontes abertas que entram nos conjuntos de treino.

Nota: este motor é o modelo Llama, não o assistente Meta AI do WhatsApp. O assistente traz sistema e recolha próprios e não é medível por API hoje.

### perplexity

Como decide: pesquisa sempre a web viva e cita fontes explícitas. O YouTube lidera as citações (32,4%, Ahrefs, Jun 2026), as comunidades pesam muito (Reddit ~47% em alguns estudos de categoria; direccional) e os portais de research primária e a imprensa especializada pesam mais do que nos outros motores (5W, Jun 2026).

Faz:
1. Está presente, e faz-te mencionar, em comunidades relevantes: Reddit e fóruns da categoria.
2. Publica vídeo no YouTube e dados originais que mereçam citação.
3. Escreve o nome da marca dentro da passagem citável: 52% das citações do Perplexity ligam à fonte sem nomear a marca no texto da resposta (Writesonic via Search Engine Land, Jul 2026).
4. Garante páginas rápidas e legíveis por bots, com PerplexityBot autorizado no robots.txt.

### google_aio

Como decide: é o bloco de resposta de IA no topo do Google. O top-10 orgânico explica 38% das citações (Ahrefs, Mar 2026; era 76% em Jul 2025): o rank ajuda, mas a estrutura citável da página pesa cada vez mais. Desde Mai 2026 inclui citações de discussões (Reddit, fóruns, blogs) directamente na resposta. Nas perguntas locais e de urgência tende a mostrar o pacote local (mapa) em vez do bloco.

Faz:
1. Abre cada página-chave com um parágrafo-resposta directo, citável isolado.
2. Mantém o SEO clássico saudável, o schema completo e as fichas Google por localização, para as perguntas locais.
3. Permite o Google-Extended no robots.txt: sites que o bloqueiam são significativamente menos recuperados pelo AI Overviews (Grossman et al., SIGIR 2026).
4. Está presente em comunidades da categoria: o bloco passou a citar discussões (Google, Mai 2026).
5. Não dependas de listicles auto-promocionais: em 69% dos casos o AIO cita a marca sem a recomendar (Lily Ray, Jun 2026), e manipular citações de IA é spam ao abrigo da política da Google desde Jun 2026.

### google_ai_mode

Como decide: é o modo conversacional de pesquisa do Google; responde a quase todas as perguntas e cita ao nível da passagem. Em 80% das citações a resposta está na primeira frase do trecho extraído, e a passagem citada mediana tem ~117 palavras (Pillarbase, 15,7M citações, Jul 2026). Nas perguntas comerciais aparecem anúncios dentro da resposta (29% dos casos; mais de metade nas keywords de CPC alto; SE Ranking, Jun 2026).

Faz:
1. Tudo o que vale para o Google AI Overviews.
2. Abre cada secção com a resposta na primeira frase e mantém passagens autocontidas de cerca de 120 palavras.
3. Conta com anúncios dentro da resposta nas perguntas comerciais: a citação orgânica não substitui presença paga.

### copilot

Como decide: é o chat da Microsoft; pesquisa via índice Bing.

Faz:
1. Garante indexação saudável no Bing: Bing Webmaster Tools activo e IndexNow ligado. {{skip:bwt-connected}}
2. Publica conteúdo comparativo claro, com autoridade declarada no site.
3. Liga o "AI Performance" do Bing Webmaster Tools e usa o Citation Share e o Compare para medir o efeito de cada mudança de conteúdo ou schema na taxa de citação (Jun 2026). É a única telemetria first-party de citações de IA. {{skip:bwt-connected}}
4. Mantém versão EN actualizada das páginas-pilar: o efeito na presença em respostas de IA é visível também no Copilot (Search Engine Land, Ago 2026). {{skip:en-site}}

### copilot_bing

O bloco Copilot dentro da página de resultados do Bing, o análogo Microsoft do AIO. **Medição suspensa; não voltar a ligar sem confirmação do fornecedor.**

Confirmado pela DataForSEO por email a 5 Ago 2026: a Bing começou há meses a baralhar os resultados contra scrapers, o Copilot incluído, e o problema afecta todos os recolhedores da Bing, não só um. A recomendação deles é expressa: não criar novas tarefas Bing até confirmarem que está resolvido. Não é limitação de um fornecedor, é a Microsoft a defender-se, e trocar de fornecedor não resolve.

O que se observa quando corre à mesma: pedidos pagos que devolvem sempre a ausência do bloco. Não conta como medição (o sentinela `[sem ` exclui-a das métricas), mas gasta consulta a cada pergunta e a cada semana.

Faz: o mesmo do copilot. Quando a medição voltar, a presença aqui herda o trabalho já feito no índice Bing; não há nada a fazer de diferente entretanto.

## Deck Builder/Tracker playbooks (EN)

Espelho inglês do bloco acima, para clientes cujo `locale` é `en`. Mesmas
chaves, mesma ordem, mesma substância — o que muda é a língua, não o método.
Quando uma alavanca mudar em cima, muda aqui também: duas versões que
divergem são pior do que uma só.

### chatgpt

How it decides: mixes training memory with web search, and only turns search on for a fraction of questions (~34.5% of queries, Semrush clickstream, Feb 2026). Search runs on the Bing index and typically reads only the top 2 to 3 results per sub-query (Search Engine Land, Jun 2026; Peec AI, Jul 2026, small sample). Organic ranking is not a prerequisite: 28.3% of its most-cited pages have no organic keyword visibility (Ahrefs, Q1 2026).

Do:
1. Answer the category's comparison questions on your site, one question per section. Opens the search route in weeks.
2. Keep Bing indexing healthy (Bing Webmaster Tools, IndexNow): it is the index ChatGPT search uses. {{skip:bwt-connected}}
3. Publish verifiable, institution-grade documentation and data: in reasoning mode ChatGPT shifts citations from UGC to institutional sources, with only 25.6% domain overlap between modes (Semrush via Search Engine Land, Jul 2026).
4. Earn presence in durable sources: press, "best of" lists, Wikipedia where eligible. Feeds training memory, in months.
5. Keep an up-to-date EN version of pillar pages: it raises presence in answers, but a stale EN page performs worse than none (Search Engine Land, Aug 2026). {{skip:en-site}}
6. Use the same brand name and description across every source.

### claude

How it decides: mostly training memory in base mode; with search on it prefers institutional sources and clear documentation. It cites reference journalism more often than the other engines (5W Citation Source Index, Jun 2026; directional).

Do:
1. Keep the entity consistent: sameAs in schema, stable descriptions across platforms.
2. Write pages that explain what the brand does in plain, factual language, without inflated promises.
3. Publish quotable technical content: documentation, data, verifiable comparisons.
4. Earn coverage in reference journalism: it is the source profile this engine cites most.

### gemini

How it decides: wired into the Google ecosystem; what Google indexes and understands well feeds Gemini, and Google's generative engines favor Google-owned content (Grossman et al., SIGIR 2026).

Do:
1. Look after classical SEO: an organic top 10 on comparison questions is the ticket in.
2. Complete the site's schema.org and keep the Google Business Profile current per location.
3. Build a YouTube presence: it is the most-cited domain in Google's AI answers (20.9% of AI Overviews citations, Ahrefs, Jun 2026).
4. Declare authorship: named authors with credentials on key pages.
5. Measure visibility here with third-party tools: brand mentions inside Gemini answers show up in neither Search Console nor GA4 (Search Engine Land, Aug 2026).

### grok

How it decides: pulls from the web index and gives unusual weight to conversation on X and to recent signals.

Do:
1. Keep an active, quotable presence on X, reacting quickly to category topics.
2. Make the site back up what you claim on social: every claim with a matching page.
3. Publish often: recency counts for more here than on other engines.

### deepseek

How it decides: training memory weighted heavily toward English-language sources.

Do:
1. Publish an English version of the brand's key pages and keep it current: a stale EN page performs worse than none, because models treat it as canonical (Search Engine Land, Aug 2026). {{skip:en-site}}
2. Enter international directories and category lists.
3. Use a brand name without linguistic ambiguity in English sources.

### mistral

How it decides: training memory with good European coverage. The API exposes no first-party search (Jun 2026), so what is measured here is memory only; the consumer product can search.

Do:
1. Work the memory levers: a consistent entity, durable press, presence in European sources for the category.
2. Keep comparative content and organic ranking healthy: it counts for the consumer product and for the other augmented engines.

### llama

How it decides: runs on training memory alone; no provider hosting Llama exposes first-party search. It moves in months, at the pace of training cycles.

Do:
1. Work the entity: Wikidata, Wikipedia where eligible, consistent descriptions across platforms.
2. Earn mentions in open sources that feed training sets.

Note: this engine is the Llama model, not the Meta AI assistant it powers in WhatsApp. The assistant brings its own system, retrieval and guardrails, and no API measures it today.

### perplexity

How it decides: always searches the live web and cites explicit sources. YouTube leads its citations (32.4%, Ahrefs, Jun 2026), communities weigh heavily (Reddit ~47% in some category studies; directional) and primary-research portals and trade press weigh more than on other engines (5W, Jun 2026).

Do:
1. Be present, and get mentioned, in relevant communities: Reddit and category forums.
2. Publish YouTube video and original data worth citing.
3. Put the brand name inside the citable passage: 52% of Perplexity citations link to the source without naming the brand in the answer text (Writesonic via Search Engine Land, Jul 2026).
4. Keep pages fast and readable by bots, with PerplexityBot allowed in robots.txt.

### google_aio

How it decides: the AI answer block at the top of Google. The organic top 10 accounts for 38% of citations (Ahrefs, Mar 2026; was 76% in Jul 2025): rank helps, but the page's citable structure weighs ever more. Since May 2026 it includes discussion citations (Reddit, forums, blogs) directly in the answer. On local and urgent questions it tends to show the local pack (the map) instead of the block.

Do:
1. Open each key page with a direct answer paragraph that can be quoted on its own.
2. Keep classical SEO healthy, schema complete and Google listings current per location, for the local questions.
3. Allow Google-Extended in robots.txt: sites that block it are significantly less likely to be retrieved by AI Overviews (Grossman et al., SIGIR 2026).
4. Be present in category communities: the block now cites discussions (Google, May 2026).
5. Do not lean on self-promotional listicles: in 69% of cases the AIO cites the brand without recommending it (Lily Ray, Jun 2026), and manipulating AI citations is spam under Google policy since Jun 2026.

### google_ai_mode

How it decides: Google's conversational search mode; it answers almost every question and cites at passage level. In 80% of citations the answer sits in the first sentence of the extracted passage, and the median cited passage runs ~117 words (Pillarbase, 15.7M citations, Jul 2026). On commercial questions ads appear inside the answer (29% of cases; over half on high-CPC keywords; SE Ranking, Jun 2026).

Do:
1. Everything that applies to Google AI Overviews.
2. Open each section with the answer in the first sentence and keep self-contained passages of about 120 words.
3. Expect ads inside the answer on commercial questions: organic citation does not replace paid presence.

### copilot

How it decides: Microsoft's chat; searches through the Bing index.

Do:
1. Keep Bing indexing healthy: Bing Webmaster Tools connected and IndexNow on. {{skip:bwt-connected}}
2. Publish clear comparative content, with declared authority on the site.
3. Connect Bing Webmaster Tools "AI Performance" and use Citation Share and Compare to measure the citation-rate effect of each content or schema change (Jun 2026). It is the only first-party telemetry of AI citations. {{skip:bwt-connected}}
4. Keep an up-to-date EN version of pillar pages: the effect on AI-answer presence is evident in Copilot too (Search Engine Land, Aug 2026). {{skip:en-site}}

### copilot_bing

The Copilot block inside Bing's results page, Microsoft's counterpart to the AIO. **Measurement suspended; do not switch it back on without provider confirmation.**

Confirmed by DataForSEO over email on 5 Aug 2026: Bing began scrambling results against scrapers some months ago, Copilot included, and the problem affects every Bing collector rather than one vendor. Their recommendation is explicit: set no new Bing tasks until they confirm it is resolved. This is Microsoft defending itself, so switching provider does not help.

What is observed if it runs anyway: paid requests that always return the block as absent. It does not count as measurement (the `[sem ` sentinel keeps it out of the metrics), but it spends a query per question, per week.

Do: the same as copilot. When measurement returns, presence here inherits the work already done on the Bing index; there is nothing different to do in the meantime.
