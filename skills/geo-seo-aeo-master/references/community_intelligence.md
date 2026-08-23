# Community intelligence — which forums matter, and how to read them

Reference for the Tracker tasks `discover_communities` and
`analyze_community`, and for the Clipping IA deliverable. Consumed at
runtime; the Tracker holds no editorial criteria of its own.

**Why this exists.** Community platforms are among the most-cited sources
in generative answers (dimension 5 of SINAL). A thread that ranks well in
a category shapes what buyers are told for months. Measuring a brand here
is measuring the raw material of answers — not vanity social listening.

---

## 1. Sources are per brand, never a fixed list

The single most common failure is running the same forum list for every
client. Which communities matter is a function of what the brand sells,
who decides the purchase, and where that decision gets discussed.

Propose sources by asking, in order:

1. **Where does the buyer of THIS product argue about it?** A payroll SaaS
   is discussed by HR managers, not on Hacker News. A running shoe is
   discussed by runners. Name the room, not the platform.
2. **Which decision does the brand lose most often?** If candidates are
   the scarce resource, employer-brand sources (Glassdoor, Indeed reviews,
   Blind in tech) matter more than product forums. If churn is the
   problem, review platforms outrank discussion forums.
3. **What does the engine actually cite for this category?** Cross-check
   against the `cited sources` already measured for the client. A platform
   the engines never cite is at best context, never a priority.
4. **Is there a national or language-specific room?** For PT-PT brands,
   r/portugal, r/devpt, Fórum Autohoje, ZWAME, and sector Facebook groups
   (not collectable, but worth naming as a blind spot) often carry more
   weight than the English-language equivalent.

### Source families and when each earns a place

| Family | Propose when | Examples |
|---|---|---|
| **General discussion** | Almost always; the category is debated somewhere | r/portugal, r/devpt, category subreddits |
| **Employer brand** | Hiring is a stated constraint, or the brand is people-heavy (agency, consultancy, retail chains) | Glassdoor, Indeed reviews, Blind |
| **Consumer reviews** | B2C or SMB self-serve, where purchase follows a review read | Trustpilot, Google reviews, Livro de Reclamações coverage |
| **Software peer review** | B2B SaaS with a comparison-heavy sale | G2, Capterra, TrustRadius |
| **Technical community** | Developer-facing product, API, open source | Hacker News, Stack Overflow, GitHub discussions |
| **Sector forums** | Established vertical with a long-lived forum | ZWAME (tech PT), Autohoje (auto PT), industry associations |
| **Video and long-form** | Category where demos or reviews drive decision | YouTube comment threads, podcast episode pages |
| **Social 360** | Always — standing set since 22 Aug 2026 (founder directive) | YouTube, LinkedIn, Instagram, TikTok, X (x.com + twitter.com) as `site` sources |

### The observed-source rule (standing, 23 Aug 2026)

**If a model is seen using a source, that source enters monitoring.** No
debate about whether it "counts" as a community, no waiting for the next
quarterly review. The engines decide what matters; our job is to notice
and follow.

This closes the loop between two things the Tracker already collects.
The observatory reads, per answer, the domains an assistant consulted and
the ones it cited, with the page URL. Any domain appearing there that is
not already a monitored source is a **candidate**, and the standing rule
is to adopt it rather than to justify it.

Adopt on sight when the domain carries third-party opinion about the
category: a forum, a review site, a local directory, a trade title, a
community blog. These are the ones that move an answer and that nobody
thinks to watch.

Three that do not enter as community sources: the client's own domain
(already covered as owned property), pure aggregators with no editorial
or user content, and sources outside the client's market that got pulled
in by language overlap. That last one is itself a finding worth reporting,
not a source worth tracking. Observed on 23 Aug 2026: a question about
private hospitals in Porto had the assistant reading six Brazilian
health-sector domains. The lesson for the client is that the Portuguese
sources are too thin to fill the answer, so the model reached across the
language. The action is to publish where the gap is, not to monitor
Brazilian trade press.

Record every adoption with the answer that triggered it. A source with a
provenance line ("entered after being cited for *melhor maternidade
privada em Lisboa*, 23 Aug") survives scrutiny; a source on a list
nobody can explain gets deleted at the first cleanup.

### Social 360 (standing set)

Every client gets the five social networks as `site` sources — YouTube,
LinkedIn, Instagram, TikTok, X — collected via Google-index `site:` search
with the exact-quoted brand and confirmed-competitor terms (~$0.002/query
via DataForSEO; ~50 queries/client/week, cost negligible). What it answers:
who talks about the brand and its competitors on the networks, what they
say, and which of those pages the engines then cite.

Honesty of the method: coverage is **what Google indexes**, not the full
firehose — Instagram and TikTok are partially indexed, X variably.
That is declared in the rationale, never hidden. Upgrade path when volume
justifies it: YouTube Data API (free quota) first; paid native APIs (X)
only with the recurring cost shown to the founder before production.
The 360 set still lands inactive for new clients until a human confirms —
except where the founder has already ordered it on (destaque.ai, 22 Aug).

**Do not propose** platforms whose terms forbid programmatic reading and
which have no public search surface, and never propose a workaround for
one. If a room matters but cannot be collected, name it in the rationale
as a known blind spot — honest gaps beat silent ones.

### Output contract (`discover_communities`)

Return items with `kind` in `reddit_search | subreddit | hackernews | site`,
`identifier` (search term, subreddit name without `r/`, or domain),
`label` (human name), and `rationale` — one sentence saying why this
source matters **for this brand**, not for brands in general. Everything
lands inactive; a human confirms before collection touches it.

Six to twelve sources is the useful range. More than that dilutes the
weekly read and multiplies collection cost without adding signal.

---

## 2. Reading a mention (`analyze_community`)

For each mention, decide three things.

### Relevance

- `brand` — the brand or its product is the subject, or is named in a
  comparison. Includes misidentification ("isn't that the one that…").
- `competitor` — a competitor is the subject and the brand is absent. This
  is the share-of-voice signal: where the category is discussed without us.
- `category` — the buying question is being discussed with no named brand.
  This is free ground, and the highest-value opportunity class.
- `irrelevant` — name collision, off-topic, spam, or a thread where the
  match was incidental. Be strict: a false positive costs more credibility
  than a missed thread.

### Common-word brand names

Some brand names are ordinary words — "destaque" is a Portuguese noun,
and tool names like "Surfer" collide with entire hobbies. Two rules,
learned the hard way:

1. **Collection searches the full brand as an exact quoted phrase**
   ("destaque.ai", never "destaque"). If a brand's only usable handle is
   a common word, prefer scoped rooms (specific subreddits, site:
   searches) over platform-wide search, and say so in the source's
   rationale.
2. **In analysis, collisions are `irrelevant`, aggressively.** A mention
   of the word without the brand — surf threads for "Surfer", "em
   destaque" as ordinary prose — is noise, and one week of noise costs
   more credibility than a month of missed threads. When in doubt
   whether the text means the brand, it does not.

### Sentiment

Judge the sentiment **towards the brand**, not the general mood of the
thread. A furious thread about the category in which the brand is praised
is positive. Neutral is the correct answer more often than not; reserve
negative for actual criticism, not for mere absence of enthusiasm.

### Summary

One sentence, in the client's language, that a busy executive can read
without opening the link. State what was said and by whom in role terms
("a user comparing three tools said…"), never quote at length, never
paraphrase into praise the thread does not contain.

### Weighting: what deserves the weekly read

Rank by consequence, not by recency:

1. Threads the engines **cited** in this week's answers (the Tracker marks
   these). A cited thread is a source, not a conversation.
2. Threads with sustained discussion (comments, not upvotes) in a room the
   buyer reads.
3. Negative or factually wrong claims about the brand, at any volume — one
   wrong claim in a well-ranked thread outlives a hundred neutral posts.
4. Category threads with no brand named — free ground.

Ignore volume for its own sake. Ten mentions in a dead subreddit are worth
less than one in the thread the engine cites.

---

## 2b. Insights operacionais — a voz do cliente como produto

Pedido do founder (23 Ago): do mapeamento de fóruns, reviews e redes,
extrair também o que os clientes dizem DE CONCRETO sobre a operação da
marca — "o tempo de espera da CUF Braga é grande", "o café tinha pouca
variedade", "o peixe não estava fresco" — e devolvê-lo como
oportunidades de melhoria operacional, com a citação como evidência.

**A justificação estratégica, que vai no relatório:** o que os clientes
escrevem hoje em reviews e fóruns é o que os motores respondem amanhã —
estas plataformas são a matéria-prima das recomendações futuras.
Optimizar a marca para a IA É optimizar o todo; a queixa operacional de
hoje é a resposta negativa do modelo no próximo ciclo.

**Regras de extracção (em `analyze_community`):**
- Só entra o específico e accionável (tempo de espera, frescura,
  variedade, atendimento X); desabafos vagos não são insight.
- Recorrência antes de tendência: 2+ menções independentes = padrão;
  1 menção = observação isolada, rotulada como tal, nunca apresentada
  como tendência.
- Cada insight leva a citação (com fonte e data) e, quando possível, a
  localização ("Braga", "loja do Colombo") — é o detalhe que o torna
  executável.
- Formato de saída: "os clientes dizem X [evidência]; a melhoria
  operacional é Y; o efeito esperado na IA é Z (as reviews futuras
  alimentam as respostas futuras)".
- Fronteira honesta: nós reportamos e priorizamos; a operação é do
  cliente. Não fingimos consultoria de operações — entregamos o que o
  mercado está a dizer, destilado e datado.

## 2c. Reddit: a porta da API fechou (24 Ago 2026)

A Responsible Builder Policy do Reddit exige **aprovação explícita**
antes de qualquer acesso à API, por formulário manual; projectos
pequenos são frequentemente recusados e o uso comercial precisa de
acordo escrito. Registar contas ou pedidos repetidos para o mesmo caso
de uso é proibido: **não se volta a tentar**. O pedido da destaque.ai
foi recusado e a conta não consegue criar apps.

Consequência prática (nenhuma perda de capacidade):
1. **Índice Google** (`site:reddit.com "marca"` via DataForSEO) — rico e
   fresco, porque a Google tem acordo pago com o Reddit.
2. **Threads que os motores citam** nas respostas medidas — a via mais
   valiosa: dá o subreddit exacto que decide a categoria do cliente.
3. **JSON público**, dentro da leitura pública não comercial.

Leitura de mercado, útil em reunião: a porta fechou para TODOS. Quem
vende "monitorização de Reddit" em 2026 ou paga contrato comercial, ou
está a raspar. Dizê-lo é honestidade e diferenciação ao mesmo tempo.

## 3. What never to do with this data

- **No astroturfing, ever.** The output of this analysis is a decision
  about where to participate genuinely, what to fix, or what to publish —
  never a script for posting under false identity. Communities detect it,
  engines learn from the backlash, and the client carries the damage.
- **No private data.** Only what is publicly readable. No login-walled
  content, no scraping around access controls, no personal identification
  of pseudonymous users.
- **No quoting individuals to clients by name.** Refer to roles and
  positions, link to the public thread, and let the client read it.
- **Absence is data.** A category discussed for months with the brand
  never mentioned is a finding, and should be reported as one.
