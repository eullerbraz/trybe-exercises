// console.log('Hello World');

const { question, questionInt } = require('readline-sync');

const name = question('Digite seu nome: ');
const age = questionInt('Digite sua idade: ');

console.log(`Olá ${name}, você tem ${age} anos!!!`);
