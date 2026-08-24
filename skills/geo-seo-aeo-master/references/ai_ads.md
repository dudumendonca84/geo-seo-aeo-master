# AI ads — anúncios dentro de respostas e assistentes de IA

**Last refresh:** 24 Aug 2026 — ChatGPT Ads passou de "lançamento agendado" a "live" em Portugal e nos restantes 30 mercados EEE+Suíça, conforme calendário já registado a 19 Aug. Mantido pelo daily-agent: o watch "AI ads" em `daily-agent/daily-prompt.md` aponta para este ficheiro. Qualquer mudança de estado (abertura de canal, novo formato, chegada à UE/PT) actualiza a secção do motor E a linha da tabela-resumo, com data.

**O que este ficheiro é:** o par pago do GEO. O playbook orgânico por motor vive em `engine_playbooks.md`; este ficheiro cobre onde existe inventário pago, como se compra, e o que isso muda na leitura das respostas. Números de vendors (ROAS, eficácia) tratam-se como directional, regra de `benchmarks.md`.

---

## Tabela-resumo (24 Aug 2026)

| Motor | Ads? | Canal de compra | Geografia |
|---|---|---|---|
| ChatGPT | Sim | OpenAI Ads Manager (self-serve, só EUA) | EUA self-serve; **live desde 24 Ago 2026 em 31 mercados EEE+Suíça, incl. Portugal** (Free e Go); compra por anunciantes UE/PT ainda fechada — acesso inicial só via equipa OpenAI Ads Solutions e parceiros |
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

- **Cronologia:** piloto convite-only nos EUA em Fev 2026 (compromisso mínimo $200k); self-serve **OpenAI Ads Manager** aberto a empresas nos EUA a 5 Mai 2026 (mínimo removido); "Advertise in ChatGPT" aberto a todos a 22 Jul 2026. Reino Unido: primeiro mercado europeu, 6 Jun 2026. **EEA (inclui Portugal): email da OpenAI aos utilizadores Free/Go a 15 Ago 2026; anúncios foram ao ar a 24 Ago 2026 conforme calendário, em 31 mercados do EEE e Suíça — Free e Go apenas, Plus/Pro/Business/Enterprise/Education sem ads, não personalizados ao arranque (segmentação só por tópico da conversa, localização aproximada, tipo de dispositivo, hora e língua; histórico de chat e memórias explicitamente excluídos), bloco por baixo da resposta e identificado; personalização exige opt-in explícito, revogável a qualquer momento nas definições de privacidade; OpenAI Ireland Limited como data controller.**
- **Mecânica de compra:** CPC (entrada reportada ~$3-5) e CPM (~$25-60, reportado), pixel de medição (OAIQ) + Conversions API. Targeting por contexto conversacional. Integrações: Dentsu, Omnicom, Publicis, WPP; Adobe, Criteo, Kargo, Pacvue, StackAdapt.
- **Estado UE anunciantes (24 Ago 2026):** a compra directa por contas europeias/PT continua fechada — acesso inicial apenas via equipa OpenAI Ads Solutions e parceiros/agências certificadas; self-service via Ads Manager para a UE previsto para "mais tarde este verão", sem data exacta. Acção quando abrir: registo imediato no Ads Manager.
- **Verificação de primeira mão (24 Ago 2026):** sem acesso a uma conta ChatGPT Free/Go geolocalizada em Portugal nesta sessão (ambiente sandbox, sem browser autenticado) — o "primeiro anúncio visível" fica por confirmar em primeira mão; o estado acima assenta na confirmação oficial da OpenAI e em corroboração cruzada de imprensa (ver news-feed 2026-08-24). Próxima sessão com acesso a um ecrã real de ChatGPT em PT deve tentar reproduzir e citar o texto exacto do anúncio.
- Fontes: openai.com/index/chatgpt-ads-expands-across-europe/ (19 Ago 2026, WebFetch bloqueado pelo proxy — verificado via WebSearch) · euronews.com/next/2026/08/21 · digiday.com (openais-ads-business-hits-europe-at-the-six-month-mark) · techtimes.com (325091) · marketing4ecommerce.net.

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
2. **A porta prática na UE é o Google.** Ads nas superfícies de IA compram-se pelo Google Ads que já existe em PT; quem gere PMax já concorre ao AI Mode sem saber. Dominar isto primeiro; OpenAI Ads Manager em watch para abertura UE.
3. **Pago e orgânico na mesma medição.** A proposta de valor destaque.ai no pago não é "compramos media", é "compramos e MEDIMOS o que o anúncio acrescenta à presença orgânica, semana a semana" — capacidade que agências de media não têm.
4. **Contas com histórico entram primeiro.** Formatos novos abrem primeiro a contas estabelecidas e parceiros certificados: MCC Google + conta Microsoft Advertising criadas antes de haver inventário PT é posição na fila, custo zero.

---

## Watch (espelha daily-prompt.md)

Gatilhos que obrigam a actualizar este ficheiro no próprio dia: primeiro anúncio visível no ChatGPT em Portugal; abertura do OpenAI Ads Manager a contas UE; chegada de formatos de IA do Google Ads / Microsoft Advertising à UE; qualquer reversão (novo motor a adoptar ou abandonar ads); research independente sobre efeito de ads na composição das respostas orgânicas.
