//union types são usados para permitir que uma variável possa ter mais de um tipo de dado
// Exemplo de union types em TypeScript

// Exemplo de uso de variáveis, tipos primitivos e arrays em TypeScript
// Variáveis são usadas para armazenar dados que podem ser alterados durante a execução do programa
let cursos = ['javascript', 'typescript', 'python'];

let valores = [10,20,30];
// 'cursos' é um array que armazena uma lista de strings representando nomes de cursos

cursos.push('java');
// O método 'push' adiciona um novo curso ao final do array
// 'valores' é um array que armazena uma lista de números
// O método 'push' adiciona um novo valor ao final do array 'valores'

valores.push
console.log(cursos);
// 'console.log' imprime o conteúdo do array 'cursos' no console


let uniãoDeTipos: string | number;
// 'uniãoDeTipos' é uma variável que pode armazenar um valor do tipo string ou number4

uniãoDeTipos = 'AvanTec';
// Atribuindo uma string à variável 'uniãoDeTipos'
uniãoDeTipos = 100;
// Atribuindo um número à variável 'uniãoDeTipos'

let qualquerCoisa: any;
// 'qualquerCoisa' é uma variável do tipo 'any', que pode armazenar qualquer tipo de dado
qualquerCoisa = 'besteira';
qualquerCoisa = 1000;
qualquerCoisa = true;
// A variável 'qualquerCoisa' pode ser reatribuída com diferentes tipos de valores