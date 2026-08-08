# Source intelligence — o que os motores citam, medido por nós

Referência do `geo-seo-aeo-master`. Evidência empírica semanal, extraída das
auditorias reais do Visibility Tracker: que tipos de fonte cada motor cita,
como isso varia por categoria de pergunta, e o que se mantém estável semana
a semana. É o complemento medido dos `engine_playbooks.md` — os playbooks
dizem o método; este ficheiro diz o que as NOSSAS medições mostram.

**Quem escreve:** a Routine do cérebro do Tracker, uma vez por semana,
depois de processar as auditorias (spec na secção C de
`routines/tracker-brain.md` do repo destaque-ai-tracker). Entra no main via
`routine-automerge` (commit `audit: source-intel YYYY-MM-DD`).

**Regras:**

- Entrada nova no TOPO, datada. Números com denominadores.
- **Privacidade:** este ficheiro é público. Nunca nomear clientes nem
  números de citação de um cliente. Domínios de terceiros citados pelos
  motores são observação dos motores e podem ficar; o domínio de um cliente
  escreve-se "site próprio do cliente". Agregar por tipo de fonte quando a
  categoria sozinha identificasse o cliente.
- **Promoção a playbook:** padrão estável em 2+ semanas seguidas pode ser
  proposto como edição ao bloco do motor em `engine_playbooks.md` (regra
  das duas auditorias), com registo no `methodology-changelog.md` e
  `validate-skill-tables.mjs` verde. Uma semana só fica aqui como
  observação datada.
- A reconciliação semanal do self-audit (ponto 6b) lê também este ficheiro:
  observação daqui que contradiga um playbook conta como evidência interna.
- Truncar para as últimas 12 semanas; antes de truncar, confirmar que o
  durável foi promovido ou registado.

## Semanas

<!-- A Routine acrescenta aqui: ## YYYY-MM-DD, um bloco por motor com
     tipos de fonte dominantes, mudanças vs semana anterior, e
     confirmações/contradições dos playbooks. -->
