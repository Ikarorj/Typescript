"use strict";
//função é uma maneira de definir um bloco de
//  código que pode ser chamado em diferentes partes do programa.
function teste() {
    // Esta função não retorna nenhum valor, apenas executa um bloco de código
    console.log("Esta função não retorna nada.");
}
;
teste();
// Chama a função 'teste', que imprime uma mensagem no console
function logar(user, senha) {
    // Esta função recebe dois parâmetros, 'user' e 'senha', ambos do tipo string
    // Ela não retorna nenhum valor, apenas executa um bloco de código
    console.log(`User..: ${user}`);
    console.log(`Senha: ${senha}`);
}
;
logar('ikaro', '12345');
function soma(Numero1, Numero2) {
    // Esta função recebe dois parâmetros, 'Numero1' e 'Numero2', ambos do tipo number
    // Ela retorna a soma dos dois números como um valor do tipo number
    return Numero1 + Numero2;
}
;
soma(10, 20);
// Chama a função 'soma' com os números 10 e 20, e retorna o resultado da soma
let resultadoDaSoma = soma(10, 40);
// Atribui o resultado da soma à variável 'resultadoDaSoma', que é do tipo number
console.log(resultadoDaSoma);
// Imprime o resultado da soma, que é 50
let transformaEmTexto = soma(10, 20).toString();
// Converte o resultado da soma em uma string usando toString e atribui à variável 
// 'transformaEmTexto'
console.log(transformaEmTexto);
// Imprime o resultado da soma convertido em string, que é "30"
