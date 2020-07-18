/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const User1 = new Usuario('email@teste.com', 'senha123');\n// const Adm1 = new Admin('email@teste.com', 'senha123');\n// console.log() // false\n// console.log(Adm1.isAdmin()) // true\n// class Admin extends Usuario{\n//     constructor() {\n//         super();\n//         this.admin = true;\n//     }\n//     isAdmin() {\n//         return this.admin = true;\n//     }\n// // }\n// const User1 = new Usuario(\"\", \"\");\n// class Usuario {\n//     // constructor(email, pass) {\n//     //     this.email = email;\n//     //     this.pass = pass;\n//     // }\n// }\n//////////////////////////////////////////\n// import { sum } from './func';\n// console.log(sum(1, 2));\n//////////////////////////////////////////\n// const name = 'Gustavo';\n// const age = 22;\n// const user = {\n//     name,\n//     age,\n//     city: 'SP'\n// }\n// console.log(user);\n//////////////////////////////////////////\n// const name = \"Gustavo\";\n// const age = 22;\n// console.log(`eu nome é ${name} e tenho ${age} anos.`);\n//////////////////////////////////////////\n// // SPREAD\n// const user1 = {\n//     name: \"Gustavo\",\n//     age: 22,\n//     city: \"SP\",\n// };\n// const user2 = { ...user1, name: 'Diego'};\n// console.log(user2);\n//  const arr1 = [1, 2, 3];\n//  const arr2 = [5, 9, 1];\n//  const arr3 = [ ...arr1, ...arr2];\n// console.log(arr3);\n//////////////////////////////////////////\n// //REST\n// function sum(...params) {\n//     return params.reduce((total, next) => total + next);\n// }\n// // or\n// function sum(a, b ,...params) {\n//     return params.reduce((total, next) => total + next) + a + b;\n// }\n// console.log(sum(1, 2, 5, 8, 48));\n// const arr = [1, 2, 3, 4];\n// const [ a, b, ...c] = arr;\n// console.log(a);\n// console.log(b);\n// console.log(c);\n// const user = {\n//     name: \"Gustavo\",\n//     age: \"22\",\n//     city: \"São Paulo\",\n// }\n// const { name, ...resto } = user;\n// console.log(name);\n// console.log(resto);\n//////////////////////////////////////////\n// const user = {\n//     name: 'Gsutavo',\n//     age: 22,\n//     endereco: {\n//         city: 'Votorantim',\n//         state: 'SP',\n//     },\n// };\n// const { name, age, endereco: { city } } = user;\n// console.log(name);\n// console.log(age);\n// console.log(city);\n// function printName({ name, idade }) {\n//     console.log(name);\n//     console.log(age);\n// }\n// printName(user);\n//////////////////////////////////////////\n// const soma = (a = 3, b = 6) => a + b;\n// console.log(soma());\n// console.log(soma(3));\n//////////////////////////////////////////\n// // //Arrow function\n// const arr = [1, 3, 4, 5, 9, 47, 94, 498];\n// const newArr = arr.map(item => item * 2);\n// console.log(newArr);\n// const teste = () => ({ nome: 'Gustavo' });\n// console.log(teste());\n//////////////////////////////////////////\n// const arr = [1, 3, 4, 5, 9, 47, 94, 498];\n// const newArr = arr.map(function(item, index) {\n//     return (item * index);\n// });\n// console.log(newArr);\n// const sum = arr.reduce(function(total, next) {\n//     return (total + next);\n// });\n// console.log(sum);\n// const filter = arr.filter(function(item) {\n//     return item % 2 === 0;\n// });\n// console.log(filter);\n// const find = arr.find(function(item) {\n//     return item === 9;\n// });\n// console.log(find);\n//////////////////////////////////////////\n// function test(x) {\n//     let y = 2; //variavel de escopo\n//     if(x > 5) {\n//         let y = 4;\n//         console.log(x, y);\n//     }\n// }\n/////////////////////////////////////////////\n// const user = { name: 'Gustavo' }\n// user.name = 'Caio'\n// ///////////////////////////////////////////\n// class Math {\n//     static soma(a, b) {\n//         return a + b;\n//     }\n// }\n// console.log(Math.soma(1, 3));\n/////////////////////////////////////////////\n// class List {\n//     constructor() {\n//         this.data = [];\n//     }\n//     add(data) {\n//         this.data.push(data);\n//         console.log(this.data);\n//     }\n// }\n// class TodoList extends List{\n//     constructor() {\n//         super();\n//         this.user = 'Gustavo';\n//     }\n//     printUser() {\n//         console.log(this.user);\n//     }\n// }\n// var MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function() {\n//     MinhaLista.add('Novo todo');   \n// }\n// MinhaLista.printUser();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });