/*
Exercício 5 - Sem duplicações
Faça uma função chamada removeDuplicatas 
que recebe um array de números inteiros e
 remove todas as suas duplicadas.

Utilize as funções auxiliares: reduce e find.

Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]
*/

const list = [0, 1, 2, 3, 3, 4, 5, 6, 7, 8];

const removeDuplicatas = arr => {
    return arr.reduce((Elements, El) => {
        if(!Elements.find(ElAux => ElAux === El)) {
            Elements.push(El);
        }

        return Elements;
    }, [])
}

console.log(removeDuplicatas(list));