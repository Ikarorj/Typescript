//Programação orientada a objetos



//classe é o molde do objetos, onde os objetos serão implementados
//foi criado o modelo Computador
class Computador {
    nome: string = 'computador 01';
    ram: number = 0;
    cpu: number = 0;
    ligado: boolean = false;

    //aula 17 = construindo com constructor, 
    constructor(nome:string, ram:number, cpu: number, ligado: boolean){
        // this informa que a propriedade e parâmetros
        // vão armazenar os valores da classe.
        this.nome = nome,
        this.ram = ram,
        this.cpu = cpu,
        this.ligado = ligado

        console.log('Novo computador criado!');
    }
    //método são ações que um determinado sistema irá fazer.
    //esse metodo retorna vazio
    Info(): void{
        //ele está chamando a propriedade do constructor com ${}
        console.log(`Nome: ${this.nome}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado?"sim": "Não"}`);
        console.log('-----------------------');
    }
    //método ligar que retorna vazio e muda o valor booleano de ligado para true
    ligar(): void {
        this.ligado = true;
    }
    //método desligar que retorna vazio e muda o valor booleano de ligado para False
    desligar(): void{
        this.ligado = false;
    }
}

// Nesse caso, é feito a isntância com o constructor, no qual é pego as 
// propriedades de this para colocar as infomrações dos atributos da classe
let comp1 = new Computador('ACER', 8 , 200 , false);
let comp2 = new Computador('SAMSUNG', 12 , 24 , true);
let comp3 = new Computador('ASUS', 24 , 120 , false);


//chama as instâncias e chama o método info para executar o que há dentro dele
comp1.Info();
comp2.Info();
comp3.Info();

//chamando o método ligar pela instância, muda o estado booleano do atributo ligado

comp1.ligar();
comp2.ligar();
comp3.ligar();

//chamando o método desligar pela instância, muda o estado boolean do atributo ligado
comp1.desligar();
comp2.desligar();
comp3.desligar();

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

