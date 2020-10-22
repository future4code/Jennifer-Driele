
//Exercício 2
const number1 = Number(process.argv[2]);
const number2 = Number(process.argv[3]);

if(isNaN(number1) || isNaN(number2)){
    console.log("Insira numeros,por favor")
}else{ 
console.log(number1 * number2);
}
