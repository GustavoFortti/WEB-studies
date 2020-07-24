
//gustavofortti

var listElement = document.createElement("ul");
listElement.setAttribute("id", "users");
var divElement = document.querySelector("#app");
divElement.appendChild(listElement);
var i = 0;

function userInfo() {
    var inputElement = document.querySelector("#user");
    var loadTextElement = document.createTextNode("Carregando");
    var loadElement = document.createElement("li");
    loadElement.appendChild(loadTextElement);
    listElement.appendChild(loadElement);
    axios.get("https://api.github.com/users/" + inputElement.value + "/repos")
        
        .then(function(respnse) {
            listElement.removeChild(loadElement);
            console.log(respnse.config.url);
            i++;
            answeRequest("Repo" + i);
        })
        .catch(function(error) {
            listElement.removeChild(loadElement);
            console.warn("erro 404");
            answeRequest("Erro 404");
        })
}

function answeRequest(answer) {
    
    var itemElement = document.createElement("li");
    var textElement = document.createTextNode(answer);
    itemElement.appendChild(textElement);
    listElement.appendChild(itemElement);
}