/*

Exercício 5 - Não vá por ali!
Implemente o método 'percorreRuas' que recebe dois parâmetros:

ruas: Lista de strings que presentam as ruas que serão percorridas (ex: 'Rua 1')
ruaPerigosa: String que represeta o nome da rua que deve ser evitada
Faça com que o método percorra cada uma das ruas exibindo no console, menos para a ruaPerigosa. Utilize o for...of e o continue para fazer esta lógica.

*/


const percorreRuas = (ruas, ruaPerigosa) => {
    const listRuas = [];
    for(var rua of ruas) {
        if(rua === ruaPerigosa) continue;
        listRuas.push(rua);
    }
    return listRuas;
}

const arr = percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');
console.log(arr);