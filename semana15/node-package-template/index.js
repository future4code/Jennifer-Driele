
// Exercício 1
process.argv [0];
process.argv [1];
const name = process.argv[2];
const age = process.argv[3];
const futureAge = Number(age) + 7;

console.log("Olá,"+ name +"!Você tem," + age +"anos.");
console.log("Olá,"+ name +"!Você tem,"+ age +"anos."+"Em sete anos você terá ,"+ futureAge +"anos.");

//Exercício 2

// const number1 = Number(process.argv[2]);
// const number2 = Number(process.argv[3]);

// if(isNaN(number1) || isNaN(number2)){
//     console.log("Insira numeros,por favor")
// }else{ 
// console.log(number1 * number2);
// }


//Exercício 3

// const userTask = process.argv[2];
// const taskList = ["Arrumar a Cama","Lavar-Roupa", "Arrumar a Cozinha"];

// const showTask =(task) =>{
//     taskList.push(task);
//   console.table("Tarefa adicionada com sucesso:"+taskList)

// };

// showTask(userTask);
