/*

Exercício 4 - Pare aqui senhor motorista
Implemente o método percorreRuas que recebe uma lista de strings que representam nomes de ruas e um segundo parâmetro que também é um string, mas representa o nome da rua em que deve parar. Para cada rua percorrida, deve ser apresentada no console, como neste exemplo:

Exemplo: percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') → 'Rua 1' , 'Rua 2'
Utilize o laço for...of e o break para não percorrer mais ruas que o necessário.

*/

const percorreRuas = (list, str) => {
    // for(let el of list) {    //for of
    //     console.log(el);
    //     if(el === str) break;
    // }
    
    return list.reduce((Els, El) => {
        Els.push(El);
        if(El === str) return Els;
        return Els;
    }, []);

    // return list.reduce((Elements, El) => {
    //     if(!Elements.find(ElAux => ElAux === El)) {
    //         Elements.push(El);
    //     }

    //     return Elements;
    // }, [])
}

const arr = percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');
console.log(arr);