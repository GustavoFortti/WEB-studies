/*

Exercício 2 - Por quê não funciona?
Um jovem programador tentou utilizar o laço de repetição for...of no objeto Casa na esperança de que o laço passasse por todas as propriedades deste objeto. No entanto, ele só recebeu o erro: TypeError: Casa[Symbol.iterator] is not a function. Por que não está funcionando?

Este foi o código que ele tentou executar:

var Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
  
    //...
  }
  
  
  for(var atributo of Casa) {
    console.log(atributo);
  }

*/

var Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
}
  
for (var [keys, value] of Object.entries(Casa)) {
    console.log(value);
}