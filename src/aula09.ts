// Exemplo de enumeração em TypeScript
// Enumerações são usadas para definir um conjunto de constantes nomeadas
enum dias  {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
    // Neste exemplo, 'dias' é uma enumeração que define os dias da semana
    // Cada dia é associado a um número inteiro, começando do zero para domingo
    // Podemos usar enumerações para tornar o código mais legível e fácil de entender
    
};

console.log(dias.domingo);
// Imprime o valor associado a 'domingo' na enumeração 'dias', que é 0
console.log(dias[`domingo`]);
// Imprime o valor associado a 'domingo' na enumeração 'dias', que é 0
console.log(dias[0]);

const d = new Date();
// Cria um novo objeto Date que representa a data e hora atuais
console.log(d.getDay());
// Imprime o dia da semana atual (0 para domingo, 1 para segunda, etc.) usando o método getDay() do objeto Date
// Exemplo de enumeração de cores em TypeScript
// Enumerações são usadas para definir um conjunto de constantes nomeadas
enum cores {
    branco = '#FFFFFF',
    preto = '#000000',
    vermelho = '#FF0000',
    verde = '#00FF00',
    azul = '#0000FF',

    // Neste exemplo, 'cores' é uma enumeração que define cores com seus respectivos códigos hexadecimais
};

console.log(cores.branco);
// Imprime o valor associado a 'branco' na enumeração 'cores', que é '#FFFFFF'

console.log(cores['branco']);
// Imprime o valor associado a 'branco' na enumeração 'cores', que é '#FFFFFF'
