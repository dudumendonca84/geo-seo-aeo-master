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
skill: o daily-agent absorve mudanças de mecanismo por motor (novos modos de
pesquisa, mudanças de fontes preferidas, rollouts por mercado) directamente
nos blocos abaixo; o self-audit semanal e a synthesis-weekly (learnings de
engagements) corrigem alavancas que os dados reais contradigam. Cada
alteração de substância regista-se no `methodology-changelog.md`. Estatísticas
só com fonte — sem estudo, dizê-lo.

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
AIO). A recolha automática desta superfície está instável do lado dos
fornecedores de dados (a Microsoft endureceu contra scraping, Ago 2026) —
medição suspensa até estabilizar. Alavancas: as mesmas do copilot; quando a
medição voltar, a presença aqui herda o trabalho feito no índice Bing.
