//Programação orientada a objetos

import { isConstructorDeclaration } from "typescript";

//classe é o molde do objetos, onde os objetos serão implementados
//foi criado o modelo Computador
class Computador {
    nome: string = 'computador 1';
    ram: number = 0;
    cpu: number = 0;
    ligado: boolean = false;

    ligar() {
        let ligado: boolean = true;

        if( ligado == true){
            console.log('O computador está ligado!');
        } else {
            ligado == false;
            console.log('o computador está desligado!');
        }
    }
}





//não operamos a classe, apenas o objeto dela

//instanciar uma classe

let comp1 = new Computador();
let comp2 = new Computador();
let comp3 = new Computador();

comp1.nome = 'rapidão';
comp1.nome = 'carão';
comp1.nome = 'gamer';


console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);

