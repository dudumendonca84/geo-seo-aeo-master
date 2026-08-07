# Routine: `competitor-monitor-weekly`

**Schedule:** Semanal — Terça às 09:00 (Europe/Lisbon)
**Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
**Output:**
- `competitor-monitor/reports/YYYY-MM-DD.md` (novo a cada execução)
- `competitor-monitor/known-competitors.md` (linhas novas se a Dimensão 0 produziu candidatos)
- `competitor-monitor/share-of-voice-history.md` (append da linha desta semana, por player)
- `competitor-monitor/execution-log.md` (append do log desta execução)

**Porquê terça 09:00:** Desfasado da `geo-seo-news-daily` (08:00 diário) e da `destaque-ai-self-audit-weekly` (segunda 09:00). Dá um dia depois da segunda para os concorrentes terem publicado movimentos de fim-de-semana e da própria segunda; corre antes da janela comercial de meio da semana, onde os outputs são mais úteis.

---

## Prompt (copia tudo abaixo do `---`)

---

Lê o ficheiro competitor-monitor/monitor-prompt.md deste repo e segue todas as instruções nele descritas. Substitui {{TODAY}} pela data de hoje (YYYY-MM-DD, timezone Europe/Lisbon). No fim, commit + push directo ao branch main com mensagem "competitors: YYYY-MM-DD monitor".

IMPORTANTE: NÃO abras pull request. Esta é uma routine autónoma de conteúdo (monitor semanal de concorrentes) que não precisa de revisão humana — faz `git push` directo a `main`, mesmo padrão da `geo-seo-news-daily`. Se o push directo falhar por branch protection ou erro de permissões, reporta o erro na resposta em vez de criar um PR.
