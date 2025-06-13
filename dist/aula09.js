"use strict";
// Exemplo de enumeração em TypeScript
// Enumerações são usadas para definir um conjunto de constantes nomeadas
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
    // Neste exemplo, 'dias' é uma enumeração que define os dias da semana
    // Cada dia é associado a um número inteiro, começando do zero para domingo
    // Podemos usar enumerações para tornar o código mais legível e fácil de entender
})(dias || (dias = {}));
;
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
var cores;
(function (cores) {
    cores["branco"] = "#FFFFFF";
    cores["preto"] = "#000000";
    cores["vermelho"] = "#FF0000";
    cores["verde"] = "#00FF00";
    cores["azul"] = "#0000FF";
    // Neste exemplo, 'cores' é uma enumeração que define cores com seus respectivos códigos hexadecimais
})(cores || (cores = {}));
;
console.log(cores.branco);
// Imprime o valor associado a 'branco' na enumeração 'cores', que é '#FFFFFF'
console.log(cores['branco']);
// Imprime o valor associado a 'branco' na enumeração 'cores', que é '#FFFFFF'
