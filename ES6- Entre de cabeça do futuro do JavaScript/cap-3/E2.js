/*

Exercício 2 - Quero o dobro
Utilizando o método map, escreva o método dobrar que 
recebe um array de números inteiros e retorna um array 
com todos os valores do array original dobrados.

Exemplo: dobrar([1,2,3]) → [2,4,6]

*/

var numeros = [0, 1, 2, 3, 4, 5];

const dobrar = numeros.map(El => El * 2);
console.log(numeros);
console.log(dobrar);