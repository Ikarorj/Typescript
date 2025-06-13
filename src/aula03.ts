//// Exemplo de classe em TypeScript
// A classe é um modelo para criar objetos, encapsulando dados e comportamentos
// Exemplo de classe em TypeScript

class Curso {
    // Atributos da classe Curso
    canal = null;    
    curso = null;

    // O construtor é um método especial que é chamado quando uma instância da classe é criada
    constructor(canal: any, curso: any) {
        // Inicializa os atributos da classe com os valores passados como parâmetros
        // 'this' refere-se à instância atual da classe
        // 'canal' e 'curso' são os parâmetros do construtor
        this.canal = canal;
        this.curso = curso;
        
        
    }


}

// Criação de uma instância da classe Curso
// Aqui, estamos criando um novo objeto 'curso1' da classe Curso, passando 'AvanTec' e 'Curso de TypeScript' como argumentos
let curso1 = new Curso('AvanTec', 'Curso de TypeScript');

// Impressão dos atributos da instância 'curso1' no console
// 'console.log' é usado para exibir os valores dos atributos 'canal' e 'curso' da instância 'curso1' 
console.log(curso1.canal);
console.log(curso1.curso);