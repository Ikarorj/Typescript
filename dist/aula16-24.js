"use strict";
//Programação orientada a objetos
//classe é o molde do objetos, onde os objetos serão implementados
//foi criado o modelo Computador
class Computador {
    nome = 'computador 01';
    ram = 0;
    cpu = 0;
    ligado = false;
    //aula 17 = construindo com constructor, 
    constructor(nome, ram, cpu, ligado) {
        // this informa que a propriedade e parâmetros
        // vão armazenar os valores da classe.
        this.nome = nome,
            this.ram = ram,
            this.cpu = cpu,
            this.ligado = ligado;
        console.log('Novo computador criado!');
    }
    //método são ações que um determinado sistema irá fazer.
    //esse metodo retorna vazio
    Info() {
        //ele está chamando a propriedade do constructor com ${}
        console.log(`Nome: ${this.nome}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado}`);
        console.log('-----------------------');
    }
}
// Nesse caso, é feito a isntância com o constructor, no qual é pego as 
// propriedades de this para colocar as infomrações dos atributos da classe
let comp1 = new Computador('ACER', 8, 200, false);
let comp2 = new Computador('SAMSUNG', 12, 24, true);
let comp3 = new Computador('ASUS', 24, 120, false);
//chama as instâncias e chama o método info para executar o que há dentro dele
comp1.Info();
comp2.Info();
comp3.Info();
//não operamos a classe, apenas o objeto dela
//instanciar uma classe
// aula 16 = criação da classe sem o uso do constructor, fazendo a instânciação direta dos dados fornecidos
// let comp1 = new Computador();
// let comp2 = new Computador();
// let comp3 = new Computador();
// comp1.nome = 'rapidão';
// comp1.nome = 'carão';
// comp1.nome = 'gamer';
// console.log(comp1.nome);
// console.log(comp2.nome);
// console.log(comp3.nome);
