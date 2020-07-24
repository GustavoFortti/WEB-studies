/*

Exercício 11 - A pequena ovelha Dolly
Utilizando o método auxiliar forEach, 
crie uma função clonaObjeto que recebe como 
parâmetro um objeto e cria uma cópia exata dela.

utilize o método Object.getOwnPropertyNames 
para obter as propriedades do objeto

*/

const meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

const clonaObjeto = object => {
    var prop = Object.getOwnPropertyNames(object);
    const newObject = new Object();
    prop.forEach(element => {
        newObject[element] = object[element];
    });
    return newObject;
}

const nossoCarro = clonaObjeto(meuCarro);

meuCarro.fabricacao = "Subaru";
meuCarro.modelo = "BRZ";
meuCarro.ano = 2020;

console.log(meuCarro);
console.log(nossoCarro);