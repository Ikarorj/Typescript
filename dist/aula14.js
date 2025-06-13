"use strict";
//função de seta ou arrowfunction, são funções que necessáriamente retornadas
let testeArrrow = (texto) => {
    console.log('testando arrow fucntion');
};
// ele declara uma variável onde recebe uma string vazia com um console.log
//chamando a variável com a função de seta
testeArrrow('programando em typescript');
//uma variável somar2 declara uma função que recebe como parâmetro n1 do tipo número
//é uma lista.
let somar2 = (n1) => {
    //uma variável de nome s do tipo number que recebe o dado 0;
    let s = 0;
    //o array n1 faz uma leitura dos elementos dentro da lista
    //e soma os valores presentes na lista e retorna o valor da soma
    n1.forEach((e) => {
        s += e;
    });
    return s;
};
//cria uma variavel lista do tipo number, fornecendo dados dentro dele
let ListaNumeros = [20, 40, 60, 70];
//imprime no console a função somar2 dentro da listaNumeros
console.log(somar2(ListaNumeros));
