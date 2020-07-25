/*

Exercício 12 - Limpando o estoque
Crie um método chamado existeProdutosDatados que recebe um parâmetro chamado produtos que é um array de produtos e identifica se há algum produto que está acima da data de validade. Caso existe, deve voltar true, caso contrário, false. Cada produto tem as seguintes características:

nome: String que representa o nome do produto
preco: Número que representa o preço do produto
dataValidade: Data de validade do produto
O método também deve aceitar um segundo parâmetro dataReferencia. Se passado, o método deve fazer a comparação de validade em relação a ele, caso contrário, utiliza a data da execução como parâmetro.

Tome como exemplo os produtos a seguir:

*/

const produtos = [
  { nome:'Cereal', preco:'10', dataValidade:'21/02/2020' },
  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2020' },
  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2020' }
]

/*

Exemplo: existeProdutosDatados(produtos, '2017-03-01') → true
existeProdutosDatados(produtos,'2016-01-01') → false

*/

const existeProdutosDatados = (produtos, dataReferencia = new Date()) => {
    return produtos.some(element => {
        var date = element.dataValidade.slice(0, 10).split('/').reverse().join('-');
        return date > dataReferencia;
    });
}

console.log(existeProdutosDatados(produtos, '2019-03-01'));