"use strict";
/**
 * molde usado para criar objetos
 */
class computador {
    nome;
    ram;
    velocidade;
    ligado;
    /**constructor será chamada no ato da instanciação
     *
     * @param nome
     * @param ram
     * @param velocidade
     * @param ligado
     */
    constructor(nome, ram, velocidade, ligado) {
        //this significa que estou usando as propriedades da classe
        this.nome = nome;
        this.ram = ram;
        this.velocidade = velocidade;
        this.ligado = ligado;
    }
    /**
     * @method mostrará as informações no console quando for chamado
     */
    mostrarInformacoes() {
        console.log(`nome:${this.nome}`);
        console.log(`ram:${this.ram}`);
        console.log(`velocidade:${this.velocidade}`);
        if (this.ligado == true) {
            console.log('o computador easca cstá ligado!');
        }
        else {
            console.log('o computador está desligado!');
        }
    }
    /**
     * @ligar ligará o computador quando for chamado
     * @desligar desligará o computador quando for chamado
     * @
     * isso será fornecido pelo usuário/
     */
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(quantidade) {
        if (quantidade >= 0 && quantidade <= 1000) {
            this.ram + quantidade;
        }
        else {
            console.log(`a quantidade ${this.upRam} não é permitido`);
        }
    }
}
//instanciação = objeto da classe foi criada
let c1 = new computador('ikaro', 12, 10, true);
c1.upRam(-100);
//exibição das informações do objeto no console
c1.mostrarInformacoes();
