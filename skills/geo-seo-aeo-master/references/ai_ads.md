# AI ads: anúncios dentro de respostas e assistentes de IA

**Last refresh:** 8 Set 2026: o prazo original (8 Set) chega sem resolução. Dois dados novos, ambos a reforçar sem confirmar a leitura "ainda fechado": (1) o briefing.pt sobre a Cosmo5 (parceira designada da OpenAI para a fase alfa em PT/ES) diz explicitamente que a própria Cosmo5 está ainda só "a preparar" uma primeira activação doméstica: ou seja, nem o parceiro oficial da OpenAI em Portugal tinha, à data do artigo, uma campanha PT concluída; (2) uma segunda marca PT nomeada, Robbialac, lançou campanha no ChatGPT via a agência Social Animals: de novo por agência, não self-serve, o segundo caso PT confirmado (depois da Continente) e o segundo sem tocar no registo direto. Continua sem existir, de nenhum dos dois lados, um único caso em primeira mão de uma conta PT a chegar ao ecrã de criação de campanha em ads.openai.com ou a ser bloqueada nele: nem via Cosmo5 (parceiro oficial), nem via nenhum anunciante independente. `WebFetch` continua bloqueado a help.openai.com, leak.pt, adclickgroup.com e briefing.pt nesta sessão, achado via `WebSearch` cross-corroborado. Ver alerta no news-feed: a rotina esgotou, pela terceira sessão consecutiva, o que consegue apurar sozinha. Refresh anterior: 7 Set 2026: no próprio dia anterior ao prazo, a página de elegibilidade da própria OpenAI (help.openai.com/en/articles/20001245) aparentou ter mudado o estado de Portugal para "Available" a 2 Set 2026, segundo dois rastreadores independentes (soku.ai, Unite.AI) que reportam 52 países agora ativos: mas a imprensa portuguesa dedicada não reflectia a mudança. Refresh anterior: 6 Set 2026: contradição continua por resolver, agora a 2 dias do prazo de 8 Set; leak.pt corrigido para a data real de publicação (26 Ago 2026, não "início Set" como registado no refresh anterior) e nomeia a Cosmo5 como parceira designada para a fase de acesso restrito em PT; sem browser autenticado nesta sessão (WebFetch bloqueado a help.openai.com, ads.openai.com, leak.pt, adclickgroup.com), a verificação de primeira mão continua por fazer. Refresh anterior: 5 Set 2026: primeira campanha PT confirmada no ChatGPT (Continente, via agência, não self-serve: ver secção ChatGPT); reforça, sem confirmar, a leitura de que o self-serve continua fechado a anunciantes PT. Refresh anterior a esse: 4 Set 2026, contradição nova entre fontes sobre o estado real do self-serve Ads Manager em Portugal. Refresh anterior a esse: 1 Set 2026, self-serve OpenAI Ads Manager abre para contas UE/PT (gatilho da secção Watch, ver linha 90); refresh anterior a esse: 24 Aug 2026, ChatGPT Ads passou de "lançamento agendado" a "live" em Portugal e nos restantes 30 mercados EEE+Suíça. Mantido pelo daily-agent: o watch "AI ads" em `daily-agent/daily-prompt.md` aponta para este ficheiro. Qualquer mudança de estado (abertura de canal, novo formato, chegada à UE/PT) atualiza a secção do motor E a linha da tabela-resumo, com data.

**O que este ficheiro é:** o par pago do GEO. O playbook orgânico por motor vive em `engine_playbooks.md`; este ficheiro cobre onde existe inventário pago, como se compra, e o que isso muda na leitura das respostas. Números de vendors (ROAS, eficácia) tratam-se como directional, regra de `benchmarks.md`.

---

## Tabela-resumo (8 Set 2026)

| Motor | Ads? | Canal de compra | Geografia |
|---|---|---|---|
| ChatGPT | Sim | OpenAI Ads Manager (self-serve: **estado disputado para PT, ver nota**); duas marcas PT confirmadas (Continente, 4 Set; Robbialac, ~1-6 Set) compraram via agência, nenhuma por self-serve; até o parceiro oficial da OpenAI em PT (Cosmo5) está só "a preparar" a sua primeira activação | Ads live desde 24 Ago 2026 em 31 mercados EEE+Suíça, incl. Portugal (Free e Go); self-serve Ads Manager **reportado** em beta desde 1 Set, com a página de elegibilidade da OpenAI a aparentar ter mudado Portugal para "Available" a 2 Set (soku.ai, Unite.AI, 52 países): mas fontes portuguesas dedicadas não atualizadas desde então continuam a descrever acesso só via agência/Cosmo5; sem confirmação de primeira mão de nenhum dos dois lados, prazo original de verificação era 8 Set (hoje), passou sem resolução, ver secção ChatGPT |
| Google AIO / AI Mode | Sim | Google Ads (PMax, AI Max for Search, Search broad match): automático, sem opt-in | Superfícies vivas em toda a UE; ads em rollout a partir dos EUA |
| Microsoft Copilot | Sim | Microsoft Advertising (ads + Brand Agents) | EUA; expansão "2026" sem data UE |
| Grok (X) | Em beta | X Ads Manager | Sem data UE |
| Meta AI | Não (ainda) | n/a: Zuckerberg aponta construção do negócio de ads a ~1 ano | n/a |
| Perplexity | **Não: encerrou** | Programa de sponsored questions (Nov 2024) terminado em Fev 2026 | n/a |
| Claude | **Não: por princípio** | Compromisso ad-free público (4 Fev 2026) | n/a |
| DeepSeek / Mistral | Não | Sem programa conhecido | n/a |

**Implicação estrutural:** o mercado partiu-se em dois campos. Nos motores com ads, presença = orgânico + pago e a medição tem de distinguir os dois. Nos motores sem ads (Claude, Perplexity, DeepSeek, Mistral), o orgânico é o único caminho: o GEO não é substituível por media buying em metade dos motores medidos.

---

## Por motor

### ChatGPT (OpenAI)

- **Cronologia:** piloto convite-only nos EUA em Fev 2026 (compromisso mínimo $200k); self-serve **OpenAI Ads Manager** aberto a empresas nos EUA a 5 Mai 2026 (mínimo removido); "Advertise in ChatGPT" aberto a todos a 22 Jul 2026. Reino Unido: primeiro mercado europeu, 6 Jun 2026. EEA (inclui Portugal): email da OpenAI aos utilizadores Free/Go a 15 Ago 2026; anúncios foram ao ar a 24 Ago 2026 conforme calendário, em 31 mercados do EEE e Suíça: Free e Go apenas, Plus/Pro/Business/Enterprise/Education sem ads, não personalizados ao arranque (segmentação só por tópico da conversa, localização aproximada, tipo de dispositivo, hora e língua; histórico de chat e memórias explicitamente excluídos), bloco por baixo da resposta e identificado; personalização exige opt-in explícito, revogável a qualquer momento nas definições de privacidade; OpenAI Ireland Limited como data controller. **1 Set 2026: self-serve Ads Manager abre em beta para anunciantes elegíveis na Europa (mesmos 31 mercados, incl. Portugal), Médio Oriente, Norte de África e Índia**: anunciado a par do marco de $1 mil milhões de receita anualizada (run rate) em menos de 200 dias desde o lançamento; Índia com abertura faseada a 4 Set 2026 (mínimo diário ₹725, ~$8).
- **Mecânica de compra:** CPC (entrada reportada ~$3-5) e CPM (~$25-60, reportado), pixel de medição (OAIQ) + Conversions API. Targeting por contexto conversacional. Integrações: Dentsu, Omnicom, Publicis, WPP; Adobe, Criteo, Kargo, Pacvue, StackAdapt.
- **Estado UE anunciantes: DISPUTADO, prazo original chega hoje sem resolução (atualizado 8 Set 2026):** a leitura de 1 Set (hiato fechado, self-serve aberto para os 31 mercados incl. Portugal) continua a coexistir, sem se resolver, com a leitura das fontes portuguesas dedicadas ("ainda fechado, só por agência/Cosmo5"). Dois dados novos hoje reforçam, sem confirmar, o lado "ainda fechado": (1) o briefing.pt sobre a Cosmo5: o parceiro oficial designado pela OpenAI para a fase de acesso alfa em Portugal e Espanha: diz que a própria Cosmo5 está ainda só "a preparar" uma primeira activação doméstica; se o parceiro que a OpenAI escolheu para testar o mercado português ainda não completou uma campanha, isso pesa contra a leitura de que o self-serve já está a funcionar livremente aqui, mesmo que a página de elegibilidade diga "Available"; (2) uma segunda marca PT nomeada: Robbialac, via a agência Social Animals: lançou campanha no ChatGPT, de novo por via de agência, não por registo direto. **Continua sem existir, de nenhum dos dois lados, um único caso em primeira mão de uma conta PT a chegar ao ecrã de criação de campanha em ads.openai.com, ou a ser bloqueada nele**: nem via Cosmo5, nem via nenhum anunciante independente, nem confirmação direta da própria página help.openai.com/en/articles/20001245 (`WebFetch` continua bloqueado).
- **Verificação de primeira mão: o prazo original (8 Set 2026) chega hoje sem se fechar:** sem acesso a uma conta ChatGPT Free/Go nem a uma conta Ads Manager geolocalizada em Portugal nesta sessão (ambiente sandbox, sem browser autenticado), a rotina confirma pela terceira sessão consecutiva que não tem via própria para este teste. A ação que resta é humana: alguém com acesso a browser normal tenta o registo real em ads.openai.com com país Portugal e regista onde/se bloqueia, per o procedimento de `daily-prompt.md` § "Verificação de primeira mão". Sem essa tentativa, mais dias de research indirecta não vão mudar o quadro: ver alerta ao founder no topo do news-feed, que recomenda ao founder decidir entre tentar o registo ele próprio ou aceitar a leitura mais plausível (self-serve aberto desde 2 Set) sem confirmação de primeira mão.
- **Histórico da divergência (28 Ago 2026, obsoleta):** entre 24 e 28 Ago as fontes discordavam sobre a lista de países com acesso direto (Index Lab dizia que só um grupo restrito, sem Portugal). O anúncio de 1 Set tinha tornado essa divergência obsoleta: mas a nova contradição de 4 Set é diferente: já não é sobre que países estão na lista, é sobre se a lista de 1 Set corresponde ao que uma conta PT encontra na prática.
- Fontes: openai.com/index/chatgpt-ads-expands-across-europe/ (19 Ago 2026) · openai.com/index/expanding-access-to-ai-with-chatgpt-ads/ (31 Ago 2026, ambos WebFetch bloqueado pelo proxy: verificado via WebSearch) · euronews.com/next/2026/08/21 · digiday.com (openais-chatgpt-ads-business-hits-1-billion-run-rate-as-europe-gets-self-serve-access, 31 Ago 2026) · cnbc.com/2026/08/31/open-ai-chatgpt-ads-revenue.html · forbes.com (gabrielalinzainescu, 31 Ago 2026) · storyboard18.com · aninews.in · bestmediainfo.com · techtimes.com (325091, 326128) · marketing4ecommerce.net · leak.pt/anuncios-no-chatgpt-portugal/ (início Set 2026, via snippet) · adclickgroup.com/insights/noticias/chatgpt-ads-europa/ (via snippet) · soku.ai/blog/chatgpt-ads-europe-expansion-31-countries (via snippet) · eco.sapo.pt/2026/09/04/continente-aposta-em-publicidade-no-chatgpt/ (4 Set 2026, via snippet, corroborado por TugaTech, netthings.pt, executivedigest.sapo.pt) · openai.com/index/expanding-access-to-ai-with-chatgpt-ads (31 Ago 2026, via snippet) · soku.ai (título "ChatGPT Ads Self-Service Just Opened in 52 Countries", 2 Set 2026, via snippet) · Unite.AI ("OpenAI Expands ChatGPT Ads Self-Service Access to India and Europe", via snippet) · help.openai.com/en/articles/20001245-ads-manager-availability (estado "Available" reportado por via secundária, não acedido diretamente, `WebFetch` bloqueado) · briefing.pt ("Cosmo5 integra a primeira fase europeia do ChatGPT Ads e prepara ativação em Portugal", via snippet, `WebFetch` bloqueado) · briefing.pt/socialanimals.pt sobre a Robbialac (via snippet, corroborado por Marketeer).

### Google: AI Overviews e AI Mode

- **Não existe campanha separada nem opt-in/opt-out:** os ads dentro de AIO e AI Mode vêm automaticamente de campanhas Search, Shopping e Performance Max existentes (+ AI Max for Search e broad match). O ponto de acesso é a conta Google Ads normal.
- Formato de shopping ads no AI Mode introduzido a 11 Fev 2026 (EUA primeiro). GML Mai 2026 expandiu formatos.
- **A app Gemini standalone não tem anúncios** (a 14 Ago 2026); Google não descarta vir a ter.
- **Implicação de medição:** num mercado com ads ativos, uma resposta de AIO/AI Mode pode conter blocos pagos: a auditoria distingue orgânico de patrocinado (os dados SERP marcam sponsored) e nunca conta um ad como citação orgânica.
- Fontes: browsermedia.agency (GML 2026) · leapbuzz.com (onde correm os ads do Gemini) · Search Engine Land (formato Fev 2026).

### Microsoft Copilot

- Ads no Copilot via **Microsoft Advertising**; lançamento a par do Copilot Checkout (Jan 2026). **Brand Agents**: agentes conversacionais da própria marca dentro do Copilot (Shopify, depois WooCommerce, Abr 2026).
- Número de vendor: "advertisers tripled ROAS; Copilot search ads 25% more effective": Microsoft sobre si própria, tratar como directional.
- EUA primeiro; "expansão internacional em 2026" sem data para a UE.
- Fontes: about.ads.microsoft.com (Jan 2026).

### Grok (xAI / X)

- Musk anunciou ads dentro das respostas do Grok (pagar por presença nas "suggested solutions"); em beta via X Ads Manager, que também ganhou funcionalidades Grok-powered para anunciantes.
- Sem data UE.
- Fontes: searchengineland.com/x-ads-grok-ai-answers · socialmediatoday.com.

### Perplexity

- Foi o primeiro a testar (sponsored follow-up questions + vídeo, Nov 2024). **Encerrou o programa em Fev 2026** e passou a modelo subscription-only; executivo à FT: "ads fazem o utilizador começar a duvidar de tudo". Não descartaram regresso: tratar o estado como atual, não permanente.
- Fontes: searchengineland.com/perplexity-stops-testing-advertising.

### Claude (Anthropic)

- **Ad-free por compromisso público:** essay "Claude is a space to think" (4 Fev 2026): "There are many good places for advertising. A conversation with Claude is not one of them." Reforçado com anúncio no Super Bowl contra a decisão da OpenAI. Modelo de negócio: subscrições + enterprise + API.
- **Implicação:** no Claude, visibilidade é 100% orgânica, sempre. É o motor onde o método GEO tem o monopólio do resultado.
- Fontes: theregister.com (4 Fev 2026) · cnbc.com (11 Fev 2026).

### Meta AI

- Sem produto de ads comprável. Zuckerberg (earnings calls 2026): oportunidade grande, mas ~1 ano de scaling antes de construir o negócio de ads; testes de planos pagos do Meta AI desde Mai 2026.

### DeepSeek / Mistral

- Sem programa de anúncios conhecido. Orgânico apenas.

---

## Leituras estratégicas (para propostas e narrativa)

1. **Dois campos.** Motores com inventário pago (ChatGPT, Google, Copilot, Grok) vs motores orgânico-only (Claude, Perplexity, DeepSeek, Mistral). Metade dos motores medidos nunca terá atalho pago: argumento direto para o valor do GEO orgânico.
2. **A porta prática na UE deixou de ser só o Google.** Ads nas superfícies de IA compram-se pelo Google Ads que já existe em PT; quem gere PMax já concorre ao AI Mode sem saber: dominar isto continua a ser o ponto de partida óbvio. Mas desde 1 Set 2026 o OpenAI Ads Manager também aceita, em beta, contas europeias diretas: já não é preciso esperar por um parceiro certificado para testar o canal ChatGPT.
3. **Pago e orgânico na mesma medição.** A proposta de valor destaque.ai no pago não é "compramos media", é "compramos e MEDIMOS o que o anúncio acrescenta à presença orgânica, semana a semana": capacidade que agências de media não têm.
4. **Contas com histórico entram primeiro.** Formatos novos abrem primeiro a contas estabelecidas e parceiros certificados: MCC Google + conta Microsoft Advertising criadas antes de haver inventário PT é posição na fila, custo zero.
5. **Pago não compra orgânico.** Estudo SE Ranking (50.032 keywords comerciais, 20 nichos, Google AI Mode EUA, dados de 30 Jun 2026): ads aparecem em 29,45% das queries comerciais, mas só 11,53% dos domínios anunciantes também aparecem como fonte citada no AI Mode para a mesma keyword, e só 2,32% dos URLs anunciados também rankeiam organicamente: pago e orgânico são, na prática, quase independentes um do outro no AI Mode. Reforça diretamente o ponto 3: um cliente que compra ads no AI Mode não deve esperar subida de citação orgânica como efeito colateral. [fonte: `references/benchmarks.md` §43]

---

## Watch (espelha daily-prompt.md)

Gatilhos que obrigam a atualizar este ficheiro no próprio dia: primeiro anúncio visível no ChatGPT em Portugal; abertura do OpenAI Ads Manager a contas UE; chegada de formatos de IA do Google Ads / Microsoft Advertising à UE; qualquer reversão (novo motor a adotar ou abandonar ads); research independente sobre efeito de ads na composição das respostas orgânicas.
