"use strict";
class Conta {
    /**
     * //public: acessado de qualquer lugar
     * //private: acessado somente na sua própria classe e nas classes filho
     * Protected: acessado somente nas sua própria classe e nas classes filho
     */
    numero;
    titular;
    saldo;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldo = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    Informar() {
        console.log(`Titular: ${this.titular}`);
        console.log(`número: ${this.numero}`);
    }
    saldoConta() {
        return this.saldo;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`);
        this.Informar;
    }
    Informar() {
        console.log('pessoa física criada!');
        super.Informar();
        console.log(`CPF....${this.cpf}`);
        console.log(`-----------------------`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${titular}`);
    }
    Informar() {
        console.log('Conta jurídica criada!');
        super.Informar();
        console.log(`CNPJ.... ${this.cnpj}`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('valor de depósito muito grande para este tipo de conta');
        }
        else {
            //super.deposito(valor);
        }
    }
}
let pessoa1 = new ContaPF(1112223344, 'ikaro');
let pessoa2 = new ContaPJ(111212312312, 'herbert');
let pessoa3 = new ContaPF(1231231233, 'vasconcelos');
// console.log(pessoa1.titular);
// console.log(pessoa1.numero);
pessoa1.Informar();
pessoa2.Informar();
pessoa3.Informar();
pessoa1.saldoConta();
pessoa2.saldoConta();
pessoa3.saldoConta();
