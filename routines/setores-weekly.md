# Routine: `setores-weekly`

**Schedule:** Domingo às 20:00 (Europe/Lisbon), antes da edição do Radar e
da auditoria de segunda.
**Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
**Output:** os ficheiros `skills/geo-seo-aeo-master/setores/<id>.md`

O agente do painel do Tracker e o Estúdio leem estes ficheiros em runtime
(cache de 1 h): o que entrar aqui no domingo está no produto na segunda.

---

## Prompt (copia tudo abaixo do `---`)

---

Lê o ficheiro skills/geo-seo-aeo-master/setores/setores-prompt.md deste repo e segue todas as instruções. Substitui {{TODAY}} pela data de hoje (AAAA-MM-DD, timezone Europe/Lisbon). No fim, commit e push direto ao branch main com a mensagem "setores: semana de AAAA-MM-DD".

OBRIGATÓRIO no fim: confirma que o commit chegou a main (`git fetch origin && git log origin/main --oneline -1`). Se não chegou, tenta o push de novo (2s, 4s, 8s de intervalo) e, se continuar a falhar, di-lo na resposta.

IMPORTANTE: NÃO abras pull request. É uma routine de conteúdo, como a `geo-seo-news-daily`: push direto a `main`.
