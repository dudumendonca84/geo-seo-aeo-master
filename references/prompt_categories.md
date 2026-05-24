# GEO Audit — Categorias de Prompts

Este ficheiro é a fonte de verdade para o gerador de prompts da auditoria GEO.
O gerador em `destaque-ai-deck-builder/src/lib/llm/prompts/generate-audit-prompts.ts`
faz fetch deste ficheiro verbatim e usa-o para briefar o Claude antes de gerar
prompts. Se o fetch falhar, o gerador cai em defaults hardcoded.

## Princípios

- **Persona implícita**: cada prompt deve soar a decisor B2B real (CIO, CTO,
  CFO, Head of CX, VP Sales, Director de Operações, Procurement). Não nomeies
  a persona no texto — escreve como ela escreveria.
- **Contexto realista**: inclui tamanho da empresa, geografia (se relevante),
  vertical, restrições conhecidas. Prompts vagos produzem respostas vagas.
- **Intent claro**: cada prompt expressa um destes intents — `research`,
  `comparison`, `validation`, `migration`, `pricing`, `integration`,
  `pain_point`.
- **Nunca nomeies a marca do cliente**: queremos ver se aparece organicamente.
- **Português europeu (PT-PT)** por defeito; PT-BR só se o público-alvo for
  tipicamente brasileiro.
- **Varia a formulação**: evita quase-duplicados na mesma categoria.

## Categorias

### 1. `generic_category`
Pergunta ampla sobre o tipo de serviço/produto, sem nomear empresas.
Captura "o que existe no mercado".

Intents típicos: `research`, `pain_point`.

Forma exemplo:
> "Quais são as principais soluções de [categoria] para empresas com
> [escala]? Quero perspectivar antes de iniciar um RFP."

### 2. `direct_comparison`
Confronta fornecedores/soluções nomeados entre si.

Intents típicos: `comparison`, `validation`, `migration`.

Forma exemplo:
> "Estou a comparar [vendor A], [vendor B] e [vendor C] para [caso de uso]
> numa operação de [escala]. Em que critérios cada um se destaca?"

### 3. `local_recommendation`
Pede recomendações para uma geografia específica.

Intents típicos: `research`, `validation`.

Forma exemplo:
> "Sou [persona] numa [vertical] em [cidade/país] e preciso de fornecedor de
> [categoria] com [requisito local: suporte PT, presença, GDPR, conformidade].
> Que opções recomendam?"

### 4. `feature_specific`
Foca uma funcionalidade ou capacidade concreta.

Intents típicos: `integration`, `validation`.

Forma exemplo:
> "Que plataformas de [categoria] têm a melhor integração nativa com
> [sistema relevante: Salesforce, SAP, M365, etc.] e oferecem
> [capacidade-chave] em 2026?"

### 5. `price_comparison`
Pergunta sobre custos, planos ou orçamento.

Intents típicos: `pricing`, `comparison`.

Forma exemplo:
> "Para [escala], qual é o range de preço por [unidade: agente, utilizador,
> transacção] das principais soluções de [categoria] e que componentes
> costumam ser add-ons cobrados à parte?"

## Distribuição por tier

| Tier         | Total | generic | direct_comp | local | feature | price |
|--------------|-------|---------|-------------|-------|---------|-------|
| `free`       | 5     | 1       | 1           | 1     | 1       | 1     |
| `diagnostic` | 30    | 8       | 8           | 6     | 4       | 4     |

## Evolução

Este ficheiro é actualizado pelo agente diário da skill quando detecta
padrões novos (novas categorias úteis, novos intents observados, novas
formulações de prompt). O deck builder faz fetch a cada execução, logo
mudanças aqui propagam automaticamente.

Se mudares o conjunto de categorias (adicionar/remover uma), coordena
com o repo `destaque-ai-deck-builder`: a constante `PROMPT_CATEGORIES`
em `src/lib/llm/prompts/generate-audit-prompts.ts` e a tabela de
distribuição em código têm de bater certo com este ficheiro.
