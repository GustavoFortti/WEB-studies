/*

Exercício 4 - Eu prefiro o meu
Crie o método 'criaIterador' que recebe como 
parâmetro uma lista e então o devolve um 
objeto que possui o mesmo comportamento de 
um iterador, ou seja, que possui o método 
next que toda vez que invocado, retorna um 
objeto com as propriedades: value e done.

Exemplo: criaIterador([1,2]).next() → { value: 1, done: false }

*/

const list = [0, 1, 2, 3, 4, 5, 6, 7];

// console.log(list[Symbol.iterator]().next());

const criaIterador = list => {
    index = 0;
    return {
        next: () => {
            if (index < list.length) {
                return { value: list[index++], done: false}
            } else {
                return { value: undefined, done: true}
            }
        }
    }
}

console.log(criaIterador(list).next());
