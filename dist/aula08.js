"use strict";
// Exemplo de uso de tipos primitivos em TypeScript
// Aprendendo sobre objetos em TypeScript
let dados = {
    nome: 'ikaro',
    idade: 30,
    status: 'A',
    ola: () => { console.log('Olá, '); },
    info: (p) => {
        console.log(p);
        // Método que recebe um parâmetro do tipo string e imprime no console
    }
};
dados.nome = 'Herbert';
// Atribui um novo valor à propriedade 'nome' do objeto 'dados'
console.log(typeof (dados));
// Imprime o tipo do objeto 'dados' no console, que será 'object'
console.log(dados.nome);
// Imprime o conteúdo do objeto 'dados' no console
dados.ola();
// Chama o método 'ola' do objeto 'dados', que imprime 'Olá, ' no console
dados.info(dados.nome);
// Chama o método 'info' do objeto 'dados', passando o nome como parâmetro, que imprime o nome no console
