//Exercíco 1 ( Interpretação de código)

// Ele pega o valor em Dolar e multiplica pelo valor da cotação em real, 
//retornando o valor que o usuario digitar no prompt convertido para real.

//Exercíco 2

// Ele multiplica o valor do seu investimento pelos juros, quando da console.log,
// ele mostra o valor total já multiplicado , no caso so segundo console , ele vai mostrar undefined pós o valor "Tesouro Direto" , não faz parte
// da estrutura de codigo.

//Exercício 3

// Primeiro ele vai retornar o total de numeros na araray que são 14
// no array1 ele retorna todos os numeros que são  Par
// no array2 retorna todos os numeros Impar

// Exercíco 4

// numero1 = (infinity) ela vai achar o menor numero do array
// numero2 = ele vai achar o maior numero do array

           // Lógica de programação

//Exercício 1

//While, for , for of

// let listaDeNomes=["Maria","Lucas", "Teresa"];
// for(let i = 0; i < listaDeNomes.length; i++){
//     let mensagem ="Boas vindas," + listaDeNomes[i] +"!";
//     console.log(mensagem)
// } 

//Exercício 2

 //a - false
 //b- false
 //c- true
 //d - true
 //e- false

 //Exercício 3

 // O código não funciona, pois precisa de um valor para a quantidade,
 //e não tem o incremento. O código fica assim

// const quantidadeDeNumerosPares = 10
// let i = 0
// while(i <= quantidadeDeNumerosPares){
//     console.log(i*2)
//     i++
// }

 // Exercício 4
 
// const ladoDosTriangulos=(a,b,c) =>{
//      if(a === b && b === c && c === b){
//          console.log("O triangulo é Equilatero")
//         }else if((b=== a && c !== b && c !== a) || (a=== c && b !==c !==a) || (a!== c && b!== a && b===c)){
//             console.log("O triangulo Isosceles")
//         }else if (a !== b && b !== c && c !== a){
//             console.log("O triangulo é Escaleno")
//         }
//     }
//     ladoDosTriangulos(10,1,10)

//Exercíco 5 (não sei se esta certo)

// const numbers = (a,b) =>{
//     if ( a === b){  // caso sejam iguais,para a função)
//         console.log("Os dois números são iguais")
//         console.log("A diferença entre eles é 0")
//     }else if(a > b){
//         console.log (`O maior é ${a}`)
//     }else{
//         console.log(`O maior é: ${b}`)
// }
// numbers(15,30)
    

                 //Funções

 //Exercício 1

// let numerosArray = [ 1,43,2,54,78,98,50]
// const verificarNumeros = (array) =>{
//     let menor = Infinity;
//     let maior = 0;
//     for ( numero of array){
//         if(numero < menor){
//             menor = numero
//         }
//         for (numero of  array){
//             if(numero > maior){
//                 maior = numero
//             }
//         }
//     }
//     console.log(menor)
//     console.log(maior)
// }
// verificarNumeros(numerosArray)

// Exercício 2

// let semParar= () =>{ 
//     alert('Hello Future4');
// }
// semParar()


           //Objetos

//Exercício1

//array : permite que guardemos mais informação ao mesmo tempo
//Object: é uma estrutura que representa dados mais complexos de uma maneira mais organiza


 //Exercício 2

//Exercíco 3

// const nomeFilme ={
//     titulo: "Jogos Vorazes",
//     ano :"2008",
//     diretor : "Suzanne Marie Collins",
//     atriz:"Jennifer Lawrence",
//     ator:"Josh Hutcherson"
// }
// console.log(`Venha assistir ao filme ${nomeFilme.titulo} de ${nomeFilme.ano} , dirigido por ${nomeFilme.diretor} e estrelado por ${nomeFilme.atriz} e ${nomeFilme.ator}`)


 //Exercíco 4
 
//  const pessoa ={
//     nome:"Jennifer",
//     idade:32,
//     email: "jenni@gmail.com",
//     endereco: "Avenida dos Cardeais ,Parque Chapadão"
// }

// function anonimizarPessoa(){
//     const pessoaAnonima = {
//         ...pessoa,
//         nome:"ANÔNIMO"
//     }
//     console.log(pessoaAnonima)
// }
// anonimizarPessoa()



            // Funções de array

// Exercício 1
//a

// let pessoas =[
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]
// const callback = (adulto ,index,array) =>{
//     return adulto.idade > 18
// }
// const adultos = pessoas.filter(callback )
// console.log(adultos)

//b

// const callback = (adolecente ,index,array) =>{
//     return adolecente.idade < 18
// }
// const adolecentes = pessoas.filter(callback )
// console.log(adolecentes)

//Exercício 2

//a

// let array3 =[1,2,3,4,5,6]
// const exemplo =(elemento ,index,array)=>{
//     array[index]=elemento *2
// }
// array3.forEach(exemplo)
// console.log(array3)

//b
// let array4 =[1,2,3,4,5,6]
// const exemplo1 = (elemento,index, array) =>{
//     array[index]=elemento *3
// }
// array4.forEach(exemplo1)
// console.log(array4.toString())

//Exercícos 3
// const pessoas = [
//     { nome: "Paula", idade: 12, altura: 1.8},
//     { nome: "João", idade: 20, altura: 1.3},
//     { nome: "Pedro", idade: 15, altura: 1.9},
//     { nome: "Luciano", idade: 22, altura: 1.8},
//     { nome: "Artur", idade: 10, altura: 1.2},
//     { nome: "Soter", idade: 70, altura: 1.9}
// ]

//a 

// const callback=  (elementoDoArray,index,array)=>{
//     if(elementoDoArray.altura > 1.5 ){
//         return true
//     }
// }
// const pessoaAltura = pessoas.filter(callback)
// console.log(pessoaAltura)

//Exercício4

// const consultas = [
//     { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
//     { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
//     { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

//a
// let consultaNaoCancelada= (elemento,index,array) =>{
//     if(elemento.cancelada === false)
//     return consultas
// }
// const consultasTrue = consultas.filter(consultaNaoCancelada)
// console.log(consultasTrue)

    
//b
// let consultaCancelada =(elemento,index,array)=>{
//     if(elemento.cancelada === true)
//     return consultas
// }
// const consultasFalse = consultas.filter(consultaCancelada)
// console.log(consultasFalse)
    
//Exercício 5
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]


