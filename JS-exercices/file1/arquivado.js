
            
            // var names = ["Diego", "Gustavo", "Gabriel"];

            // var inputElement = document.querySelector('input');
            // function addItem() {
            //     var text = inputElement.value;
            //     names.push(text);
            //     show();
            // }
            
            // var listElement = document.createElement("ul");
            // function show() {
            //     listElement.innerHTML = "";
            //     for(let i of names) {
            //         var itemElement = document.createElement("il");
            //         var textElement = document.createTextNode(i);
            //         itemElement.appendChild(textElement);
            //         listElement.appendChild(itemElement);
            //     }
            //     var containerElement = document.querySelector('#app');
            //     containerElement.appendChild(listElement);
            //     inputElement.value = "";
            // }
            
            // show();


            // var btnElement = document.createElement('button');
            // btnElement.setAttribute('onclick',  'visualElement()');

            // var textElement = document.createTextNode('Botao');
            // btnElement.appendChild(textElement);
            // var containerElement = document.querySelector('#app');
            // containerElement.appendChild(btnElement);
            
            // function visualElement() {
            //     var boxElement = document.createElement('div');
            //     boxElement.setAttribute('class', 'box');
    
            //     boxElement.style.width = "100px";
            //     boxElement.style.height = "100px";
            //     boxElement.style.backgroundColor = 'red';

            //     containerElement.appendChild(boxElement);
            // }

            

            // var usuarios = [
            //     {
            //         nome: "Diego",
            //         habilidades: ["Javascript", "ReactJS", "Redux"]
            //     },
            //     {
            //         nome: "Gabriel",
            //         habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
            //     }
            // ];
            // function setSkill(usuarios) {
            //     for(let x of usuarios) {
            //         console.log(x.nome + " possui " + x.habilidades.join(', '));
            //     }
            // }
            // setSkill(usuarios);

            // function temHabilidade(skills) {
            //     if(skills.includes("Javascript")) {
            //         return true;
            //     }
            //     return false;
            // }

            // var skills = ["Javascript", "ReactJS", "React Native"];
            // console.log(temHabilidade(skills));// true ou false

// function addNames(name) {
    //     var ulElement = document.createElement("ul");
    //     ulElement.setAttribute("class", "names");

    //     var textElement = document.createTextNode(name);
    //     ulElement.appendChild(textElement);

    //     var conteinerElement = document.querySelector("#app");
    //     conteinerElement.appendChild(ulElement);
    // }

    // var buttonElement = document.querySelector("#btn1");
    // var inputElement = document.querySelector("input");
    // buttonElement.onclick = function() {
    //     var text = inputElement.value;
    //     addNames(text);
    //     inputElement.value = '';
    // }

    // var buttonElement = document.querySelector("#bt1");
    // buttonElement.onclick = function() {
    //     var divElement = document.createElement("div");
    //     divElement.setAttribute('class', 'box');
    //     divElement.style.width = "100px";
    //     divElement.style.height = "100px";
    //     var newColor = getRandomColor(); 
    //     divElement.style.backgroundColor = newColor;
    //     var figureElement = document.querySelector('.box');
    //     figureElement.appendChild(divElement);
    // }

    // function getRandomColor() {
    //     var letters = "0123456789ABCDEF";
    //     var color = "#";
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }
    // #E943F0

    // function user(endereco) {
    //     console.log("O usuário mora em " + endereco.cidade + "/ " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " com nº " + endereco.numero);
    // }
    // var endereco = {
    //     rua: "Rua dos pinheiros",
    //     numero: 1293,
    //     bairro: "Centro",
    //     cidade: "São Paulo",
    //     uf: "SP"
    // };
    // user(endereco);

    // function pares(x, y) {
    //     for (let i = x; i < y; i++) {
    //         if(i % 2 == 0) console.log(i);
    //     }    
    // }
    // pares(32, 321);

    // function temHabilidade(skills) {
    //     console.log(skills.indexOf("Javascript") != -1);
    // }
    // var skills = ["Javascript", "ReactJS", "React Native"];
    // temHabilidade(skills); // true ou false

    // function experiencia(anos) {
    //     var tipo = (anos < 1) ? "Iniciante" : (anos < 3) ? "Intermediario" : (anos < 6) ? "Avancado" : "Jedi Master";
    //     console.log(tipo);
    // }
    // var anosEstudo = 7;
    // experiencia(anosEstudo);
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master

    // var usuarios = [
    //     {
    //         nome: "Diego",
    //         habilidades: ["Javascript", "ReactJS", "Redux"]
    //     },
    //     {
    //         nome: "Gabriel",
    //         habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    //     }
    // ];

    // function skill(user) {
    //     console.log(user.nome + " possui as habilidades " + user.habilidades.join(", "));
    // }
    // for(let user of usuarios) {
    //     skill(user);
    // }