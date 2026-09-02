# AI ads — anúncios dentro de respostas e assistentes de IA

**Last refresh:** 1 Set 2026 — self-serve OpenAI Ads Manager abre para contas UE/PT (gatilho da secção Watch, ver linha 90). Refresh anterior: 24 Aug 2026, ChatGPT Ads passou de "lançamento agendado" a "live" em Portugal e nos restantes 30 mercados EEE+Suíça. Mantido pelo daily-agent: o watch "AI ads" em `daily-agent/daily-prompt.md` aponta para este ficheiro. Qualquer mudança de estado (abertura de canal, novo formato, chegada à UE/PT) actualiza a secção do motor E a linha da tabela-resumo, com data.

**O que este ficheiro é:** o par pago do GEO. O playbook orgânico por motor vive em `engine_playbooks.md`; este ficheiro cobre onde existe inventário pago, como se compra, e o que isso muda na leitura das respostas. Números de vendors (ROAS, eficácia) tratam-se como directional, regra de `benchmarks.md`.

---

## Tabela-resumo (1 Set 2026)

| Motor | Ads? | Canal de compra | Geografia |
|---|---|---|---|
| ChatGPT | Sim | OpenAI Ads Manager (self-serve) | Ads live desde 24 Ago 2026 em 31 mercados EEE+Suíça, incl. Portugal (Free e Go); **self-serve Ads Manager em beta para anunciantes elegíveis nesses mesmos mercados (incl. Portugal), Médio Oriente, Norte de África e Índia desde 1 Set 2026** — fecha o hiato de compra directa sem agência que persistia desde 24 Ago |
| Google AIO / AI Mode | Sim | Google Ads (PMax, AI Max for Search, Search broad match) — automático, sem opt-in | Superfícies vivas em toda a UE; ads em rollout a partir dos EUA |
| Microsoft Copilot | Sim | Microsoft Advertising (ads + Brand Agents) | EUA; expansão "2026" sem data UE |
| Grok (X) | Em beta | X Ads Manager | Sem data UE |
| Meta AI | Não (ainda) | n/a — Zuckerberg aponta construção do negócio de ads a ~1 ano | n/a |
| Perplexity | **Não — encerrou** | Programa de sponsored questions (Nov 2024) terminado em Fev 2026 | n/a |
| Claude | **Não — por princípio** | Compromisso ad-free público (4 Fev 2026) | n/a |
| DeepSeek / Mistral | Não | Sem programa conhecido | n/a |

**Implicação estrutural:** o mercado partiu-se em dois campos. Nos motores com ads, presença = orgânico + pago e a medição tem de distinguir os dois. Nos motores sem ads (Claude, Perplexity, DeepSeek, Mistral), o orgânico é o único caminho — o GEO não é substituível por media buying em metade dos motores medidos.

---

## Por motor

### ChatGPT (OpenAI)

- **Cronologia:** piloto convite-only nos EUA em Fev 2026 (compromisso mínimo $200k); self-serve **OpenAI Ads Manager** aberto a empresas nos EUA a 5 Mai 2026 (mínimo removido); "Advertise in ChatGPT" aberto a todos a 22 Jul 2026. Reino Unido: primeiro mercado europeu, 6 Jun 2026. EEA (inclui Portugal): email da OpenAI aos utilizadores Free/Go a 15 Ago 2026; anúncios foram ao ar a 24 Ago 2026 conforme calendário, em 31 mercados do EEE e Suíça — Free e Go apenas, Plus/Pro/Business/Enterprise/Education sem ads, não personalizados ao arranque (segmentação só por tópico da conversa, localização aproximada, tipo de dispositivo, hora e língua; histórico de chat e memórias explicitamente excluídos), bloco por baixo da resposta e identificado; personalização exige opt-in explícito, revogável a qualquer momento nas definições de privacidade; OpenAI Ireland Limited como data controller. **1 Set 2026: self-serve Ads Manager abre em beta para anunciantes elegíveis na Europa (mesmos 31 mercados, incl. Portugal), Médio Oriente, Norte de África e Índia** — anunciado a par do marco de $1 mil milhões de receita anualizada (run rate) em menos de 200 dias desde o lançamento; Índia com abertura faseada a 4 Set 2026 (mínimo diário ₹725, ~$8).
- **Mecânica de compra:** CPC (entrada reportada ~$3-5) e CPM (~$25-60, reportado), pixel de medição (OAIQ) + Conversions API. Targeting por contexto conversacional. Integrações: Dentsu, Omnicom, Publicis, WPP; Adobe, Criteo, Kargo, Pacvue, StackAdapt.
- **Estado UE anunciantes (1 Set 2026):** o hiato registado em 24-28 Ago está fechado — a compra directa por contas europeias/PT deixa de depender exclusivamente da equipa OpenAI Ads Solutions e de parceiros/agências certificadas; o self-serve via Ads Manager, prometido para "mais tarde este verão", abre em beta a 1 Set 2026 para "anunciantes elegíveis" nos mesmos 31 mercados do lançamento de ads (frase exacta da cobertura: "beta self-serve access to Ads Manager opens directly to eligible advertisers across those same markets"). Nenhuma fonte cruzada nomeia Portugal explicitamente fora da lista de 31 mercados — tratado como incluído por herança da lista de 24 Ago, não confirmado país a país. **Não confirmado nesta sessão:** critério exacto de elegibilidade da beta, e se uma conta PT sem histórico prévio consegue já criar campanha (ver procedimento de verificação de primeira mão abaixo).
- **Verificação de primeira mão (por fazer):** sem acesso a uma conta ChatGPT Free/Go nem a uma conta Ads Manager geolocalizada em Portugal nesta sessão (ambiente sandbox, sem browser autenticado) — nem o "primeiro anúncio visível" nem o "primeiro registo bem-sucedido de anunciante PT" estão confirmados em primeira mão. O estado acima assenta em confirmação da OpenAI (via imprensa, `WebFetch` a openai.com bloqueado pelo proxy desta sessão) e corroboração cruzada (CNBC, Forbes, Digiday, Storyboard18, aninews, bestmediainfo, techtimes — todos 31 Ago–1 Set 2026). Próxima sessão com acesso a um browser autenticado deve tentar o registo real no Ads Manager com país Portugal e registar onde/se bloqueia, per o procedimento de `daily-prompt.md` § "Verificação de primeira mão".
- **Histórico da divergência (28 Ago 2026):** entre 24 e 28 Ago as fontes discordavam — Index Lab dizia que só um grupo restrito de países (EUA, Canadá, Reino Unido, Austrália, Nova Zelândia, Japão, Coreia do Sul, Brasil, parcialmente México) tinha acesso directo, Portugal fora dessa lista. O anúncio de 1 Set torna a divergência obsoleta: a expansão a "Europa" citada nas fontes de 31 Ago-1 Set aplica-se aos 31 mercados já confirmados em 24 Ago, o que inclui Portugal.
- Fontes: openai.com/index/chatgpt-ads-expands-across-europe/ (19 Ago 2026) · openai.com/index/expanding-access-to-ai-with-chatgpt-ads/ (31 Ago 2026, ambos WebFetch bloqueado pelo proxy — verificado via WebSearch) · euronews.com/next/2026/08/21 · digiday.com (openais-chatgpt-ads-business-hits-1-billion-run-rate-as-europe-gets-self-serve-access, 31 Ago 2026) · cnbc.com/2026/08/31/open-ai-chatgpt-ads-revenue.html · forbes.com (gabrielalinzainescu, 31 Ago 2026) · storyboard18.com · aninews.in · bestmediainfo.com · techtimes.com (325091, 326128) · marketing4ecommerce.net.

### Google — AI Overviews e AI Mode

- **Não existe campanha separada nem opt-in/opt-out:** os ads dentro de AIO e AI Mode vêm automaticamente de campanhas Search, Shopping e Performance Max existentes (+ AI Max for Search e broad match). O ponto de acesso é a conta Google Ads normal.
- Formato de shopping ads no AI Mode introduzido a 11 Fev 2026 (EUA primeiro). GML Mai 2026 expandiu formatos.
- **A app Gemini standalone não tem anúncios** (a 14 Ago 2026); Google não descarta vir a ter.
- **Implicação de medição:** num mercado com ads activos, uma resposta de AIO/AI Mode pode conter blocos pagos — a auditoria distingue orgânico de patrocinado (os dados SERP marcam sponsored) e nunca conta um ad como citação orgânica.
- Fontes: browsermedia.agency (GML 2026) · leapbuzz.com (onde correm os ads do Gemini) · Search Engine Land (formato Fev 2026).

### Microsoft Copilot

- Ads no Copilot via **Microsoft Advertising**; lançamento a par do Copilot Checkout (Jan 2026). **Brand Agents**: agentes conversacionais da própria marca dentro do Copilot (Shopify, depois WooCommerce, Abr 2026).
- Número de vendor: "advertisers tripled ROAS; Copilot search ads 25% more effective" — Microsoft sobre si própria, tratar como directional.
- EUA primeiro; "expansão internacional em 2026" sem data para a UE.
- Fontes: about.ads.microsoft.com (Jan 2026).

### Grok (xAI / X)

- Musk anunciou ads dentro das respostas do Grok (pagar por presença nas "suggested solutions"); em beta via X Ads Manager, que também ganhou funcionalidades Grok-powered para anunciantes.
- Sem data UE.
- Fontes: searchengineland.com/x-ads-grok-ai-answers · socialmediatoday.com.

### Perplexity

- Foi o primeiro a testar (sponsored follow-up questions + vídeo, Nov 2024). **Encerrou o programa em Fev 2026** e passou a modelo subscription-only; executivo à FT: "ads fazem o utilizador começar a duvidar de tudo". Não descartaram regresso — tratar o estado como actual, não permanente.
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

1. **Dois campos.** Motores com inventário pago (ChatGPT, Google, Copilot, Grok) vs motores orgânico-only (Claude, Perplexity, DeepSeek, Mistral). Metade dos motores medidos nunca terá atalho pago — argumento directo para o valor do GEO orgânico.
2. **A porta prática na UE deixou de ser só o Google.** Ads nas superfícies de IA compram-se pelo Google Ads que já existe em PT; quem gere PMax já concorre ao AI Mode sem saber — dominar isto continua a ser o ponto de partida óbvio. Mas desde 1 Set 2026 o OpenAI Ads Manager também aceita, em beta, contas europeias directas: já não é preciso esperar por um parceiro certificado para testar o canal ChatGPT.
3. **Pago e orgânico na mesma medição.** A proposta de valor destaque.ai no pago não é "compramos media", é "compramos e MEDIMOS o que o anúncio acrescenta à presença orgânica, semana a semana" — capacidade que agências de media não têm.
4. **Contas com histórico entram primeiro.** Formatos novos abrem primeiro a contas estabelecidas e parceiros certificados: MCC Google + conta Microsoft Advertising criadas antes de haver inventário PT é posição na fila, custo zero.

---

## Watch (espelha daily-prompt.md)

Gatilhos que obrigam a actualizar este ficheiro no próprio dia: primeiro anúncio visível no ChatGPT em Portugal; abertura do OpenAI Ads Manager a contas UE; chegada de formatos de IA do Google Ads / Microsoft Advertising à UE; qualquer reversão (novo motor a adoptar ou abandonar ads); research independente sobre efeito de ads na composição das respostas orgânicas.
