//type assertions ém uma forma de informar ao TypeScript
//  que você tem mais informações sobre o tipo de uma variável do que o 
// compilador pode inferir.

import { isConstructorDeclaration } from "typescript";

let nValor : number;
let svalor: string;
let uValor: unknown;

uValor = 10;
svalor = "42";
// Atribuindo um valor do tipo string à variável 'svalor'
// Atribuindo um valor do tipo number à variável 'uValor'


nValor = Number.parseInt(svalor);
// Convertendo a string 'svalor' para um número usando parseInt

svalor = nValor.toString();
// Convertendo o número 'nValor' de volta para uma string usando toString


// Usando type assertion para informar ao TypeScript que 'uValor' é do tipo number


console.log(typeof(nValor));

console.log(nValor);
// Imprime o valor de 'nValor', que é 42
console.log(typeof(nValor));
console.log(uValor);
// Imprime o tipo de 'nValor', que é 'number'
