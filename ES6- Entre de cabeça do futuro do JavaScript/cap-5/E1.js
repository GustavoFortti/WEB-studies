/*

Nestes exercícios iremos exercitar como fazer laços de repetição utilizando a estrutura for...of

Exercício 1 - Contando o faturamento
Escreva uma função chamada somaFaturamento que recebe uma lista de números inteiros e devolve a soma destes valores.

Exemplo: somaFaturamento([1,2,3,4]) → 10

*/

const somaFaturamento = (arr) => {
    var sum = 0;
    for (el of arr) {
        sum += el;
    }
    return sum;
}

console.log(somaFaturamento([0, 1, 2, 3, 4, 5, 6, 7]));