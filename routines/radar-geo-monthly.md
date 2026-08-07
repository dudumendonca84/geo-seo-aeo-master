# Routine: `radar-geo-monthly`

**Schedule:** Mensal — 1ª sexta-feira do mês às 10:00 (Europe/Lisbon)
**Repo:** `dudumendonca84/geo-seo-aeo-master` (branch `main`)
**Output:**
- `radar-geo/YYYY-MM.md` (novo a cada execução — o relatório público do mês)
- `radar-geo/index.md` (append de uma linha com o link do mês)

**Porquê:** o `competitor-monitor` recolhe o mercado GEO PT todas as terças, mas
esse material fica em ficheiros internos. O Radar transforma-o num **relatório
público mensal citável** — original data sobre a própria categoria, exatamente o
tipo de fonte que os motores de IA citam. É o pattern «Território livre» aplicado
à própria destaque.ai: reclamar o ângulo "quem mede o mercado GEO português".

---

## O que faz

1. **Lê os inputs do mês** (deste repo):
   - `competitor-monitor/reports/` — todos os relatórios semanais do mês.
   - `competitor-monitor/share-of-voice-history.md` — série SoV por player.
   - `competitor-monitor/known-competitors.md` — o censo do mercado.
2. **Escreve `radar-geo/YYYY-MM.md`** — PT-PT sóbrio, sem emoji, publicável tal
   como está:
   - **Resumo do mês** (3-5 frases): o que mudou no mercado GEO PT.
   - **Quem sobe / quem desce** — movimentos de SoV com números e denominador
     explícito (ex: "/5 respostas, 1 motor" quando for o caso — honestidade
     sobre a amostra é inegociável).
   - **Entradas e saídas** — novos players detetados no mês, com 1 linha factual
     por cada.
   - **Movimento notável do mês** — 1 destaque com fonte (lançamento, pricing,
     media).
   - **Nota metodológica** no rodapé: como se mede, amostra, limitações. Nunca
     apresentar leitura direcional como estatística firme.
3. **Anonimização: NÃO aplicável** — isto é market data pública sobre empresas
   (nomes reais, como no competitor-monitor). O que NUNCA entra: dados de
   clientes da destaque.ai, métricas do Tracker de clientes, ou qualquer coisa
   de `destaque-ai-ops`.
4. **Commit + push direto a `main`** com mensagem `radar-geo: YYYY-MM` — mesmo
   padrão autónomo do `competitor-monitor` e da `geo-seo-news-daily`. Se o push
   falhar por permissões, reporta o erro em vez de abrir PR.

## Distribuição (manual, founder)

O ficheiro do mês é a fonte; o founder decide onde o publicar: post no site
(destaque.ai/radar), LinkedIn, newsletter. Quando a página do site existir,
acrescentar aqui o passo de cross-post.

---

## Prompt (copia tudo abaixo do `---`)

---

Lê o ficheiro routines/radar-geo-monthly.md deste repo e segue as instruções.
Gera o relatório público mensal `radar-geo/YYYY-MM.md` (mês anterior completo)
a partir de competitor-monitor/{reports,share-of-voice-history.md,known-competitors.md}.
PT-PT sóbrio, números com denominador explícito, nota metodológica no rodapé.
Nunca uses dados de clientes destaque.ai nem nada de destaque-ai-ops. No fim,
commit + push directo a main com mensagem "radar-geo: YYYY-MM". Sem PR.
