/*

Exercício 4 - Pare aqui senhor motorista
Implemente o método percorreRuas que recebe uma lista de strings que representam nomes de ruas e um segundo parâmetro que também é um string, mas representa o nome da rua em que deve parar. Para cada rua percorrida, deve ser apresentada no console, como neste exemplo:

Exemplo: percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') → 'Rua 1' , 'Rua 2'
Utilize o laço for...of e o break para não percorrer mais ruas que o necessário.

*/

const percorreRuas = (list, str) => {
    const arr = [];
    for(let el of list) {    //for of
        arr.push(el);
        if(el === str) break;
    }
    return arr;
    
    // return list.reduce((Elements, El) => { // reduce
    //     if(!Elements.find(ElAux => ElAux === str)) {
    //         Elements.push(El);
    //     }
    //     return Elements;
    // }, [])

}

const arr = percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');
console.log(arr);