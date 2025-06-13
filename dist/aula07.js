"use strict";
//aprendendo sobre tuplas
let coisas = ['bruno', 30, true];
// Tuplas são usadas para armazenar uma coleção de elementos de tipos diferentes
let coisas2 = ['bruno', 'marta', 'vasconcelos'];
// Neste exemplo, 'coisas' é uma tupla que contém uma string, um número e um booleano
// A tupla 'coisas2' contém três strings
//let coisas3: readonly Array<string> = ['bruno', 'marta', 'vasconcelos'];
// A tupla 'coisas' é declarada como um array somente leitura, o que significa que não podemos modificar seus elementos
// Isso é útil quando queremos garantir que os dados não sejam alterados acidentalmente
console.log(coisas);
// Imprime o conteúdo da tupla 'coisas' no console
console.log(coisas[2]);
// Acessa o terceiro elemento da tupla 'coisas' (o booleano) e o imprime no console
console.log(coisas2);
// Imprime o conteúdo da tupla 'coisas2' no console
