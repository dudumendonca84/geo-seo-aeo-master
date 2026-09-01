/**
 * Converte as citações em parêntesis dos playbooks para o marcador
 * `[fonte: …]`, que o Tracker retira antes de mostrar o cartão.
 *
 * PORQUÊ (1 Set 2026). A convenção foi escrita no cabeçalho do ficheiro e
 * o Tracker aprendeu a remover o marcador, mas o texto que já lá estava
 * continuou com as citações no meio da frase: a regra existia e o
 * trabalho não estava feito, e o cliente continuou a ler bibliografia.
 *
 * O QUE CONVERTE: só parêntesis com forma de fonte (um ano 20xx, ou o
 * nome de um dos editores que citamos), e só dentro dos dois blocos de
 * playbooks. Um parêntesis que faz parte da frase ("(e o IndexNow)") não
 * é tocado.
 *
 * O CONTEÚDO VAI INTEIRO para dentro do marcador, incluindo a estatística
 * quando ela lá está. É deliberado: uma estatística sem fonte é
 * exactamente o que as nossas regras proíbem, portanto ou vão as duas ou
 * não vai nenhuma. O que fica no ecrã é a instrução.
 *
 * Corre e imprime cada conversão para se poder ler antes de commit:
 *   node scripts/converter-fontes.mjs           (mostra)
 *   node scripts/converter-fontes.mjs --escrever (grava)
 */
import { readFileSync, writeFileSync } from "node:fs";

const FICHEIRO = "skills/geo-seo-aeo-master/references/engine_playbooks.md";
const escrever = process.argv.includes("--escrever");

const md = readFileSync(FICHEIRO, "utf8");
const inicio = md.indexOf("## Deck Builder/Tracker playbooks");
if (inicio < 0) throw new Error("bloco de playbooks nao encontrado");

const cabeca = md.slice(0, inicio);
let corpo = md.slice(inicio);

const EDITORES =
  /(Semrush|Ahrefs|Search Engine Land|Peec|Profound|BrightEdge|Similarweb|SE Ranking|Writesonic|Pillarbase|Grossman|SIGIR|Lily Ray|OpenAI|Google|Microsoft|Digiday|Dataconomy|TechXplore|5W|Limy)/i;

const conversoes = [];
corpo = corpo.replace(/\(([^()]{8,400}?)\)/g, (todo, dentro) => {
  const temAno = /\b20\d\d\b/.test(dentro);
  const temEditor = EDITORES.test(dentro);
  if (!temAno && !temEditor) return todo;
  // Um parêntesis que já é um marcador, ou uma nota sem fonte nenhuma,
  // fica como está.
  if (/^fonte:/i.test(dentro.trim())) return todo;
  const limpo = dentro.trim().replace(/\.$/, "");
  conversoes.push(limpo);
  return `[fonte: ${limpo}]`;
});

// O marcador colado à pontuação lê-se mal no ficheiro; separa-se do ponto.
corpo = corpo.replace(/\s*\[fonte:/g, " [fonte:");

console.log(`Conversões: ${conversoes.length}`);
for (const c of conversoes) console.log("  · " + c.slice(0, 90));

if (escrever) {
  writeFileSync(FICHEIRO, cabeca + corpo);
  console.log("\nGravado em " + FICHEIRO);
} else {
  console.log("\n(nada gravado; corre com --escrever)");
}
