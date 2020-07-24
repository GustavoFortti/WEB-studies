/*

Exercício 1 - Par ou ímpar?
Altere o código a seguir para utilizar o 
método forEach de modo que a saída permaneça a mesma.

var numeros = [0, 1, 2, 3, 4, 5];

saída:
0 é par
1 é ímpar
2 é par
3 é ímpar
4 é par
5 é ímpar

*/

var numeros = [0, 1, 2, 3, 4, 5];

numeros.forEach(El => {
    if(El % 2 === 0) console.log(`${El} é par`);
    else console.log(`${El} é impar`);
})