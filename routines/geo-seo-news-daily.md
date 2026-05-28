# Routine: `geo-seo-news-daily`

**Schedule:** Diário às 08:00 (Europe/Lisbon)
**Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
**Output:** `skills/geo-seo-aeo-master/daily-agent/news-feed.md` + absorção em references/

---

## Prompt (copia tudo abaixo do `---`)

---

Lê o ficheiro skills/geo-seo-aeo-master/daily-agent/daily-prompt.md deste repo e segue todas as instruções nele descritas. Substitui {{TODAY}} pela data de hoje (YYYY-MM-DD, timezone Europe/Lisbon). No fim, commit + push directo ao branch main com mensagem "daily: YYYY-MM-DD news update".

IMPORTANTE: NÃO abras pull request. Esta é uma routine autónoma de conteúdo (news-feed) que não precisa de revisão humana — faz `git push` directo a `main`. Se o push directo falhar por branch protection ou erro de permissões, reporta o erro na resposta em vez de criar um PR. PRs acumulam-se e criam ruído de triagem.
