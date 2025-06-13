"use strict";
//parâmetros padrões e parâmetros opcionais
// Parâmetros padrão são usados para definir valores iniciais para os parâmetros de uma função
// quando nenhum valor é passado para eles durante a chamada da função.
Object.defineProperty(exports, "__esModule", { value: true });
function somarNumeros(numero1, numero2) {
    // Esta função recebe dois parâmetros, 'numero1' do tipo number e 'numero2' do tipo number com valor padrão 10
    // Ela retorna a soma dos dois números como um valor do tipo number
    return numero1 + numero2;
    // Neste exemplo, 'numero1' e 'numero2' são definidos como 0 antes de serem somados
    // Isso significa que a função sempre retornará 0, independentemente dos valores passados
}
// Chama a função 'somarNumeros' com os números 5 e 15, e retorna o resultado da soma, que é 20
function novoUser(User, Senha, passNome) {
    let dados = [User, Senha, passNome];
    console.log(dados);
}
;
novoUser('Savyo', 'coisafofa', 'gostosa');
alert(`a soma desses dois números é: ` + somarNumeros(130, 150));
//
