/*

Exercício 2 - Tem alguém ai?
Desenvolva a função 'isListaVazia'
que recebe como parâmetro uma
lista de números inteiros qualquer 
e retorna o valor true caso esta
lista não tenha nenhum item e
false para os demais resultados.
A lógica deve ser feita usando
somente a propriedade done do objeto 
que é obtido ao executar o next no
iterador do array.

*/

var Void = {}

var noVoid = {id: '1'}

const isEmpty = object => {
    for(var el in object) {
        if (object.hasOwnProperty(el)) {
            return false;
        }
    }
    return true;
}

console.log(isEmpty(Void));
console.log(isEmpty(noVoid));