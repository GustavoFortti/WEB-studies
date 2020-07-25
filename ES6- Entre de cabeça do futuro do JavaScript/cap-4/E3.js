/*

Exercício 3 - S-o-l-e-t-r-a-n-d-o
Utilizando os aprendizados deste capítulo,
implemente a função soletraPalavra que recebe
como único parâmetro uma String e então exibe
cada letra da String em uma linha do console.

*/

const soletraPalavra = str => {
    return str.split('').join('\n');
}

console.log(soletraPalavra('Soletrando'));