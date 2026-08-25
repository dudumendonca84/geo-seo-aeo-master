# Livro de previsões

Onde a análise deixa de descrever o passado e passa a arriscar sobre o
futuro — e, sobretudo, onde se guarda o registo de quando errou.

**Porque existe.** Uma análise que só descreve o que já aconteceu não pode
estar errada, e por isso também não aprende nada. Uma previsão datada pode
estar errada, e é isso que a torna útil: quando falha, obriga a mudar o
modelo. Ao fim de um trimestre, o que temos não é uma opinião — é uma
taxa de acerto, com data, que ninguém no mercado português tem.

**O que isto não é.** Não é aprendizagem automática. Com oito a dez semanas
de série por cliente, treinar um modelo seria decorar ruído e chamar-lhe
inteligência. Os métodos aqui são deliberadamente simples e o critério de
promoção é duro: um método só passa a ser usado depois de bater a linha de
base ingénua durante quatro semanas seguidas.

## A linha de base ingénua

Toda a previsão é comparada com esta, e a maior parte das ideias
engenhosas perde para ela:

> **A próxima semana é igual a esta.**

É o adversário a bater. Um método que não a supera não entra em produção,
por mais elegante que seja o raciocínio por trás.

## Como se escreve uma previsão

Quatro campos obrigatórios. Sem qualquer um deles, não é previsão — é
comentário.

| Campo | Regra |
|---|---|
| **Afirmação** | Um número, um limiar, uma data. "A quota de citação da marca no Gemini fica abaixo de 12% na semana de 31 Ago." |
| **Confiança** | Alta / média / baixa, declarada antes de saber o resultado. |
| **Como se refuta** | O que teria de acontecer para estar errada. Se não conseguires escrever isto, a afirmação é vaga demais. |
| **Base** | O que a sustenta: que dados, que denominador, quantas semanas. |

## Como se pontua

Na semana seguinte, cada previsão fica **certa**, **errada** ou
**anulada** — esta última só quando o universo mudou por razão externa (um
motor que deixou de responder, uma recolha que falhou). Anular por a
previsão ter sido desconfortável é falsear o registo, e o registo é o
único activo que isto produz.

Uma previsão errada obriga a escrever **porquê** em uma frase. É essa
frase, e não o acerto, que faz o sistema aprender.

## Métodos, por ordem de maturidade

**1. Persistência.** A linha de base. Sempre calculada, mesmo quando não é
a previsão escolhida — sem ela não há com que comparar.

**2. Tendência com banda.** Declive das últimas 4-6 semanas mais o desvio
típico. Serve para dizer "continua a descer" com um intervalo, não para
dar um número exacto. Exige série normalizada em quota, nunca em contagem
(ver o crivo no `SKILL.md`).

**3. Mudança de regime.** Uma quebra abrupta e sustentada de duas semanas
não é ruído: é um motor que mudou de comportamento, um concorrente que
publicou, ou uma alteração nossa. Detectar isto vale mais do que prever o
próximo ponto, porque é o que permite **antecipar em vez de explicar
depois**.

**4. Transferência entre motores.** A hipótese que ainda não foi testada e
que vale mais do que todas as anteriores: **um motor antecipa outro?** Se
uma mudança na família Google aparece no Perplexity duas semanas depois,
isso é um sinal de alarme com duas semanas de vantagem. É verificável com
os dados que já temos e ninguém o publicou.

## Regras de higiene

- Nunca prever sobre uma série cujo denominador mudou. Ver o crivo.
- Nunca prever para um cliente com menos de 6 semanas de dados.
- Uma previsão por semana e por assunto. Quinze previsões vagas geram uma
  taxa de acerto sem significado.
- Previsão que sobreviva três meses de acerto pode virar regra em
  `references/engine_playbooks.md`, com registo no
  `methodology-changelog.md`.

## Registo

Entrada nova no topo, datada. Formato: a previsão numa semana, a pontuação
na semana seguinte por baixo dela.

<!-- A Routine acrescenta aqui: ## YYYY-MM-DD, previsões da semana e
     pontuação das da semana anterior. -->

## 2026-08-25 · abertura

Ainda sem previsões pontuáveis: a série só passou a ser comparável hoje,
com o âmbito de cada auditoria gravado ao lado dela (migração 0077 do
Tracker). Antes disso as contagens semanais tinham denominadores
diferentes e qualquer previsão sobre elas seria sobre um artefacto.

Três candidatas para a primeira semana, escritas agora para não serem
inventadas depois do facto:

1. **O vídeo mantém-se em zero no ChatGPT e no Claude.** Confiança alta.
   Refuta-se com uma única citação de YouTube em qualquer um dos dois.
   Base: 5.346 citações, zero ocorrências.
2. **O Copilot mantém mais de 40% das citações de directórios de
   listagem.** Confiança média. Refuta-se se cair abaixo de 40% numa
   semana com pelo menos 50 citações da categoria. Base: 228 de 453.
3. **A quota do Reddit em português fica abaixo de 5% em todos os
   motores.** Confiança alta. Refuta-se com qualquer motor acima de 5%.
   Base: 2,3% no Perplexity, o mais alto de todos.

Pontuação a 1 de Setembro.

### Primeiro teste da difusão entre motores

A hipótese "um motor antecipa outro" foi testada hoje ao nível dos
DOMÍNIOS (milhares de observações, não doze pontos semanais): para cada
domínio citado por dois motores, qual deles o citou primeiro.

**A primeira tentativa produziu um resultado falso e vale a pena guardar
porquê.** Com todos os motores no mesmo saco, o Claude parecia anteceder o
Google AI Mode em 23,5 dias — sinal enorme. Era artefacto: as superfícies
Google e o Copilot só entraram na auditoria a 3 de Agosto, portanto
nenhum domínio pode ter neles primeira aparição anterior a essa data.
Comparar motores com janelas de observação diferentes fabrica difusão onde
não há nenhuma. Regra que fica: **só se comparam motores que estiveram a
ser observados ao mesmo tempo.**

Restringindo aos quatro com janela comum desde 1 de Junho (chatgpt,
claude, gemini, grok), sobra pouco — e o pouco que sobra é isto:

| Par | Domínios | A primeiro | B primeiro | A lidera |
|---|---|---|---|---|
| chatgpt → claude | 160 | 68 | 39 | **63,6%** |
| grok → gemini | 629 | 222 | 175 | 55,9% |
| gemini → chatgpt | 255 | 86 | 66 | 56,6% |
| claude ↔ gemini | 392 | 173 | 161 | 51,8% |
| claude ↔ grok | 375 | 145 | 136 | 51,6% |

**Um sinal sobrevive: o ChatGPT antecede o Claude**, cerca de dois para um
nos pares em que houve diferença (68 contra 39, n=107 discordantes). Os
restantes pares estão em cima de 50% e não dizem nada.

Explicação alternativa que ainda não foi excluída, e que é preciso excluir
antes de isto valer como regra: o Claude pesquisa menos vezes, e o que
cita pode ser simplesmente um subconjunto mais lento por construção, não
por seguir ninguém.

**Previsão pontuável (para 1 de Setembro):** o ChatGPT mantém-se acima de
55% na liderança sobre o Claude, com pelo menos 60 pares discordantes.
Confiança média. Refuta-se abaixo de 55% ou com amostra insuficiente.
Base: 63,6% em 107 pares, janela comum de 12 semanas, um só cliente com
série longa.
