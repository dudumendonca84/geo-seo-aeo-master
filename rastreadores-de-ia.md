# Rastreadores de IA e o robots.txt

Guia da [destaque.ai](https://www.destaque.ai), revisto a 13 de novembro de 2026, sobre os agentes com que as empresas de IA leem a web e sobre o que se escreve no `robots.txt` para os deixar entrar ou não.

Cada linha da tabela foi confirmada na documentação oficial da empresa nesse dia. Uma linha que deixe de se confirmar sai da tabela na revisão seguinte.

## Os agentes, um a um

| Empresa | Agente (`user-agent`) | Para que serve, segundo a empresa | Respeita o `robots.txt`? | Documentação |
|---|---|---|---|---|
| OpenAI | `GPTBot` | Recolhe conteúdo que pode ser usado para treinar os modelos | Sim: bloquear o `GPTBot` diz que o conteúdo não deve ser usado em treino | [OpenAI](https://developers.openai.com/api/docs/bots) |
| OpenAI | `OAI-SearchBot` | Índice da pesquisa do ChatGPT | Sim. Um site que o bloqueia não aparece nas respostas de pesquisa do ChatGPT (a mudança leva cerca de 24 horas) | [OpenAI](https://developers.openai.com/api/docs/bots) |
| OpenAI | `ChatGPT-User` | Visita uma página quando um utilizador o pede numa conversa; não rastreia a web sozinho | Não é garantido: «robots.txt rules may not apply» | [OpenAI](https://developers.openai.com/api/docs/bots) |
| Anthropic | `ClaudeBot` | Recolhe conteúdo que pode contribuir para o treino | Sim, e aceita `Crawl-delay` | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Anthropic | `Claude-SearchBot` | Índice de pesquisa do Claude | Sim | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Anthropic | `Claude-User` | Vai buscar uma página quando um utilizador faz uma pergunta ao Claude | Sim | [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Perplexity | `PerplexityBot` | Índice da pesquisa do Perplexity; não é usado para treinar modelos | A empresa apresenta-o como etiqueta de `robots.txt` | [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) |
| Perplexity | `Perplexity-User` | Ações pedidas pelo utilizador; não rastreia nem recolhe para treino | Em geral não: «this fetcher generally ignores robots.txt rules» | [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) |
| Google | `Google-Extended` | Não é um rastreador: é uma etiqueta de controlo para o uso no treino do Gemini e no *grounding* das aplicações Gemini e da Vertex AI | É a própria etiqueta de `robots.txt`. Não mexe na presença na Pesquisa Google | [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) |
| Apple | `Applebot-Extended` | Não rastreia: decide se o que o `Applebot` recolheu pode treinar os modelos da Apple | É a própria etiqueta de `robots.txt` | [Apple](https://support.apple.com/en-us/119829) |
| Meta | `Meta-ExternalAgent` | Treino de modelos e indexação de conteúdo | Bloqueia-se no `robots.txt`, segundo a Meta | [Meta](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers) |
| Meta | `Meta-WebIndexer` | Índice de pesquisa da Meta AI | Permiti-lo ajuda a Meta AI a citar e ligar o conteúdo | [Meta](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers) |
| Meta | `Meta-ExternalFetcher` | Vai buscar ligações a pedido do utilizador | Pode ignorar o `robots.txt` | [Meta](https://developers.facebook.com/documentation/sharing/webmasters/web-crawlers) |

## Três `robots.txt` prontos a copiar

**1. Abrir tudo.** Os motores de IA podem ler o site para pesquisa e para treino.

```
User-agent: *
Allow: /
```

**2. Abrir a pesquisa e fechar o treino.** O site continua a poder aparecer nas respostas com pesquisa (ChatGPT, Claude, Perplexity, Meta AI) e deixa de alimentar o treino dos modelos.

```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Meta-WebIndexer
Allow: /

User-agent: *
Allow: /
```

**3. Fechar tudo o que é IA.** Atenção ao efeito: fechar o agente de pesquisa de um motor tira o site das respostas com pesquisa desse motor. E os agentes que agem a pedido do utilizador (`ChatGPT-User`, `Perplexity-User`, `Meta-ExternalFetcher`) podem não respeitar esta regra, como as próprias empresas dizem.

```
User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-SearchBot
Disallow: /

User-agent: Claude-User
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Perplexity-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: Meta-WebIndexer
Disallow: /
```

## Como verificar

1. Abra `https://o-seu-site/robots.txt` e confirme que diz o que decidiu, e que não há uma regra genérica (`User-agent: *` com `Disallow: /`) a fechar tudo por engano.
2. Procure os agentes nos registos do servidor ou da CDN: se o `OAI-SearchBot` ou o `PerplexityBot` nunca aparecem, o site não está a ser lido para pesquisa.
3. O `llms.txt` não substitui o `robots.txt`: um diz o que há para ler, o outro diz quem pode ler. A diferença está explicada em [llms.txt ou robots.txt](https://www.destaque.ai/blog/llms-txt-vs-robots-txt).

## Declaração de interesse

A destaque.ai mede a presença das marcas nas respostas dos assistentes de IA e trabalha para a melhorar. Este guia está aberto para que o possa aplicar quem quiser, connosco ou sem nós.
