// Exercício 1
process.argv [0];
process.argv [1];
const name = process.argv[2];
const age = process.argv[3];
const futureAge = Number(age) + 7;

console.log("Olá,"+ name +"!Você tem," + age +"anos.");
console.log("Olá,"+ name +"!Você tem,"+ age +"anos."+"Em sete anos você terá ,"+ futureAge +"anos.");

