//NULL É UM VALOR NULO
//undefined É UM VALOR NÃO DEFINIDO
//UNKNOWN É UM TIPO DESCONHECIDO
//NEVER É UM TIPO QUE NUNCA EXISTE, POR EXEMPLO, UMA FUNÇÃO QUE JAMAIS RETORNA

import { isConstructorDeclaration } from "typescript";

let valorNulo: string | null;
// Exemplo de atribuição de valor nulo
valorNulo = null; // OK
// Neste exemplo, 'valorNulo' é uma variável do tipo string que pode ser nula
// Isso significa que ela pode conter uma string ou o valor null

console.log(valorNulo);
// Imprime o valor de 'valorNulo', que é null

// Exemplo de atribuição de valor indefinido
let valorIndefinido;
// Neste exemplo, 'valorIndefinido' é uma variável que não foi inicializada
// Isso significa que ela não tem um valor definido, e seu tipo é 'undefined'

console.log(valorIndefinido);
// Imprime o valor de 'valorIndefinido', que é undefined

valorIndefinido = "Agora tem um valor";
// Atribuindo um valor à variável 'valorIndefinido'


let valorDesconhecido: unknown;
// Exemplo de atribuição de valor desconhecido

console.log(valorDesconhecido);
// Neste exemplo, 'valorDesconhecido' é uma variável do tipo 'unknown'

// Isso significa que ela pode conter qualquer valor, mas não podemos fazer
//  operações com ela sem verificar seu tipo primeiro

let outroValorDesconhecido: unknown = 42;
// Atribuindo um valor do tipo number à variável 'outroValorDesconhecido'
console.log(outroValorDesconhecido);
// Imprime o valor de 'outroValorDesconhecido', que é 42

// Exemplo de atribuição de valor nunca

