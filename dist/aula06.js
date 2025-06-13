"use strict";
//array e readonly array são usados para armazenar listas de dados, mas com algumas diferenças
// O array permite que os dados sejam alterados, 
// enquanto o readonly array não permite alterações após sua criação
let numeros = [20, 30, 40];
// Exemplo de array em TypeScript
// Um array é uma coleção de elementos do mesmo tipo, que podem ser acessados por um índice
let numerosdeclarado1 = [10, 20, 30];
// Exemplo de array com tipos primitivos e union types
// Neste exemplo, estamos declarando um array que pode conter números e strings
let numerosdeclarado2 = [10, 20, 30];
//Por viés de simplicidade, vamos usar o primeiro exemplo de array
numeros.push(50);
console.log(numeros);
// O método 'push' adiciona um novo número ao final do array 'numeros'
numeros.unshift(10);
// O método 'unshift' adiciona um novo número ao início do array 'numeros'
numeros.pop();
// O método 'pop' remove o último elemento do array 'numeros'
numeros.shift();
// O método 'shift' remove o primeiro elemento do array 'numeros'
let numeros_reandoly = [10, 20, 30];
// O ReadonlyArray é um tipo de array que não permite modificações após sua criação
// Isso significa que não podemos usar métodos como 'push', 'pop', 'shift' ou 'unshift' para alterar o array
