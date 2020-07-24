/*
Utilizando a função auxiliar reduce,
escreva uma função chamada validaParenteses
que avalia se os parênteses estão balanceados.
Isso significa que, pra cada parênteses esquerdo
“(“ é necessário ter um parênteses direito “)”
correspondente. A função deve aceitar uma string 
e retornar um valor booleano (true ou false).

Exemplo: validaParenteses(')((()()())))'); → false
Exemplo: "()()()" → true
Exemplo: ")(" → false
*/

var arr = [")((()()())))", "()()()", ")("];

const validaParenteses = (str) => {
    var arr = str.split("");
    return situacao = arr.reduce((sum, El) => {
        if(sum < 0) return sum;
        if(El === "(") sum++;
        else if(El === ")") sum--;

        return sum;
    }, 0) == 0 ? true : false;

}

console.log(")((()()()))) " + validaParenteses(arr[0]));
console.log("()()()       " + validaParenteses(arr[1]));
console.log(")(           " + validaParenteses(arr[2]));