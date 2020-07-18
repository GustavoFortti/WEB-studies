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

//////////////////////////////////////////
// import { sum } from './func';

// console.log(sum(1, 2));

//////////////////////////////////////////

// const name = 'Gustavo';
// const age = 22;

// const user = {
//     name,
//     age,
//     city: 'SP'
// }

// console.log(user);

//////////////////////////////////////////
// const name = "Gustavo";
// const age = 22;

// console.log(`eu nome é ${name} e tenho ${age} anos.`);


//////////////////////////////////////////
// // SPREAD

// const user1 = {
//     name: "Gustavo",
//     age: 22,
//     city: "SP",
// };

// const user2 = { ...user1, name: 'Diego'};

// console.log(user2);


//  const arr1 = [1, 2, 3];
//  const arr2 = [5, 9, 1];

//  const arr3 = [ ...arr1, ...arr2];

// console.log(arr3);


//////////////////////////////////////////
// //REST

// function sum(...params) {
//     return params.reduce((total, next) => total + next);
// }

// // or

// function sum(a, b ,...params) {
//     return params.reduce((total, next) => total + next) + a + b;
// }

// console.log(sum(1, 2, 5, 8, 48));

// const arr = [1, 2, 3, 4];

// const [ a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);



// const user = {
//     name: "Gustavo",
//     age: "22",
//     city: "São Paulo",
// }

// const { name, ...resto } = user;
// console.log(name);
// console.log(resto);

//////////////////////////////////////////
// const user = {
//     name: 'Gsutavo',
//     age: 22,
//     endereco: {
//         city: 'Votorantim',
//         state: 'SP',
//     },
// };

// const { name, age, endereco: { city } } = user;
// console.log(name);
// console.log(age);
// console.log(city);

// function printName({ name, idade }) {
//     console.log(name);
//     console.log(age);
// }

// printName(user);

//////////////////////////////////////////
// const soma = (a = 3, b = 6) => a + b;

// console.log(soma());
// console.log(soma(3));

//////////////////////////////////////////
// // //Arrow function
// const arr = [1, 3, 4, 5, 9, 47, 94, 498];
// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const teste = () => ({ nome: 'Gustavo' });

// console.log(teste());

//////////////////////////////////////////
// const arr = [1, 3, 4, 5, 9, 47, 94, 498];

// const newArr = arr.map(function(item, index) {
//     return (item * index);
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//     return (total + next);
// });

// console.log(sum);

// const filter = arr.filter(function(item) {
//     return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item) {
//     return item === 9;
// });

// console.log(find);

//////////////////////////////////////////
// function test(x) {
//     let y = 2; //variavel de escopo
//     if(x > 5) {
//         let y = 4;
//         console.log(x, y);
//     }
// }
/////////////////////////////////////////////
// const user = { name: 'Gustavo' }
// user.name = 'Caio'
// ///////////////////////////////////////////
// class Math {
//     static soma(a, b) {
//         return a + b;
//     }
// }

// console.log(Math.soma(1, 3));
/////////////////////////////////////////////
// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List{
//     constructor() {
//         super();

//         this.user = 'Gustavo';
//     }

//     printUser() {
//         console.log(this.user);
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');   
// }

// MinhaLista.printUser();