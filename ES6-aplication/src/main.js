//////////////////////////////////////////////////////
import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loagin = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();
        
        const repoInput = this.inputEl.value;
        if (repoInput.length === 0) return;

        const response = await api.get(`/users/${repoInput}`);
        const { login, bio, html_url, avatar_url } = response.data;

        this.setLoading();

        try {

            this.repositories.push({
                login,
                avatar_url,
                bio,
                html_url,
            });
            
            this.inputEl.value = '';
            
            this.render();
        } catch (err) {
            alert('O repositorio não existe!');
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.login));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.bio));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();


//////////////////////////////////////////////////////

// import axios from 'axios';

// const buscaUsuario = async usuario => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${usuario}`)
//         console.log(response);
//     } catch(err) {
//         console.warn('Erro na API');
//     }
// }

// buscaUsuario('gustavofortti');

//////////////////////////////////////////////////////

// import axios from 'axios';

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`)
//             console.log(response);
//         } catch(err) {
//             console.warn('erro na API')
//         }
    
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

//////////////////////////////////////////////////////
// import axios from 'axios';

// async function getUserFromGithub(user) {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`)
//         console.log(response);
//     } catch {
//         console.log('Erro na API')
//     }
    
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

//////////////////////////////////////////////////////
// import axios from 'axios';

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// async function umPorSegundo() {
//     await delay(console.log('ok'));
//     await delay(console.log('ok'));
//     await delay(console.log('ok'));
// }

// umPorSegundo();

//////////////////////////////////////////////////////
// import axios from 'axios';

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);
//         } catch(err) {
//             console.warn('Erro na API');
//         }
//     }
// }

// Api.getUserInfo('gustavofortti');

//////////////////////////////////////////////////////

// const myPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// async function execPromise() {
//     const response = await myPromise();
//     console.log(response);
// }

// execPromise();

// myPrmisse().then(response => {
//     console.log(response);
// });

//////////////////////////////////////////////////////
// import user, {idade as age} from './functions';

// console.log(user.info());
// console.log(age);

//////////////////////////////////////////////////////

// import { sum } from './func';
// console.log(sum(2, 3));

//////////////////////////////////////////////////////

// const nome = 'Diego';
// const idade = 23;

// const usuario = {
//     nome,
//     idade,
//     cidade: 'Rio do Sul',
// };

//////////////////////////////////////////////////////

// const usuario = 'Diego';
// const idade = 23;

// console.log(`O usuário ${usuario} possui  ${idade}  anos`);

//////////////////////////////////////////////////////

// const usuario = {
//         nome: 'Diego',
//         idade: 23,
//         endereco: {
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         pais: 'Brasil',
//     }
// };

// const usuario2 = { ...usuario, nome: 'Gabriel'}
// const usuario2 = { ...usuario, cidade: 'Londres'}

// const arr = [1, 2, 3, 4, 5, 6]
// const {x, ...y } = arr;

// const sum = (...params) => (params.reduce((total, next) => total + next ));

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

//////////////////////////////////////////////////////

// function mostraInfo({nome, idade}) {
//     return `${nome} tem ${idade} anos.`;
// }

// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));


// const empresa = {
//         nome: 'Rocketseat',
//         endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     }
// };

// const {nome, endereco: {cidade, estado}} = empresa;
// console.log(nome);
// console.log(cidade);
// console.log(estado);

//////////////////////////////////////////////////////

// const promis = () => new Promise((resolve, reject) => resolve());

// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }

// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = usuario => usuario.idade;

// const arr = [1, 2, 3, 4, 5];
// const arrCalc = arr.map(item => item + 10 );

//////////////////////////////////////////////////////

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

// const filterAge = usuarios.map(user => ({...user, idade : user.idade * 2 })).filter(user => user.idade <= 50);
// const find = usuarios.find(employ => employ.empresa === "Google");
// const job = usuarios.filter(jobs => (jobs.empresa === "Rocketseat" && jobs.idade >= 18));
// const age = usuarios.map(user => user.idade);

// console.log(filterAge);

//////////////////////////////////////////////////////

// class Usuario {
//     constructor(email, pass) {
//         this.email,
//         this.pass
//     }
//     isAdmin() {
//         return this.admin === true;
//     }
// }

// class Admin extends Usuario{
//     constructor() {
//         super();
//         this.admin = true;
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true