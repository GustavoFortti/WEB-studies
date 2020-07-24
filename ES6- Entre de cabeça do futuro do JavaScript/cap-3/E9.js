/*

Exercício 9 - Raízes quadradas
Crie uma função chamada calculaRaizesQuadradas que 
recebe um array de números inteiros positivos e 
devolve um outro array com as raízes quadradas 
correspondentes de cada um dos itens.

para este exercício, assuma que a entrada terá somente números com raiz exata.
utilize a função Math.sqrt para calcular a raiz quadrada

*/

const v = [1, 4, 9, 16, 25, 36, 49];

const { sqrt } = Math;

const calculaRaizesQuadradas = array => {
    return array.map(El => sqrt(El));
}

console.log(calculaRaizesQuadradas(v));