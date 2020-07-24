var vet, img;
var imagem;
function funcao(){
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    if( x1 > 9  || x1 < 0 || x2 > 9  || x2 < 0 || x3 > 9  || x3 < 0){
        img = "./imagens/erro.jpg"
        imagem = document.getElementById("imagem");
        imagem.src = img;
    }
    if ( x1 == x2 || x2 == x3 || x1 == x3){
        img = "./imagens/erro2.jpg"
        imagem = document.getElementById("imagem");
        imagem.src = img;
    }
    if(x1 > x2 && x1 > x3){
        document.getElementById('result').value =  x1;
    }
    else{   
        if( x2 > x1 && x2 > x3){
            document.getElementById('result').value =  x2;
        }
        else{
            if( x3 > x1 && x3 > x2){
                document.getElementById('result').value =  x3;
            }
        }
    }
}