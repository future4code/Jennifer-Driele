//Funções
//Exercício 1

// a- vai ser impresso os valores 10 e 50
// b- quando você retira o console o valores não são impressos no console

//Exercício 2

// a- Ele só esta imprimindo os dois primeiros valores , pois não estamos pedindo pra ele percorrer a array inteita com length.banner
// b- Nesse caso os dois valores serão impresso pois estamos pedidando o primeiro valor e o segundo valor.

// Exercício 3

  //a- Se a variavel divicido por dois for igual a zero, vai ser par
  // no arrayFinal ele acrecenta mais um valor e  multiplica a variavel por ela mesma.banner
  // melhorMetodo


  // Exercício 4

//   function minhaMensagem(){
//     console.log(" Eu sou Jennifer", "tenho 32 anos", "Moro em Piraciacaba e sou estudante. ")
//      }
//      minhaMensagem()

//   function minhaMensagem1(nome,idade,cidade,estudante){
//       if(estudante === false){
//           console.log(`Èu sou ${nome},tenho ${idade} anos, moro em ${Cidade} e não sou estudante.`)
//       }else if(estudante === true){
//           console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e  sou estudante.`)
//       }
// }
//  const resultado = minhaMensagem1("Jennifer", 32 ,"Piracicaba - Sp", true)


//  // Exercício 5
// //a

//   function doisNumeros (num1, num2){
//       const soma = num1 + num2
//       console.log(soma)
//   }
//   doisNumeros(10 ,15)

//   //b

//   function doisNumeros1 ( number1 ,number2){
//       if(number1 >= number2){
//           console.log( true)
//       }else if( number1 <= number2){
//           console.log(false)
//       }
//   }
//   doisNumeros1(10,5)

//   //c
//  function minhaMensagem10(string){
//      for (i = 0; i < 10; i++) {
//        console.log(i , string);
// }
//  }
//  let frase = "O dia está lindo"
//  const frase2 = minhaMensagem10(frase)

// //Exercício 6

// // a
// function verificaNumero(verificaArray){
//     for(let elemento of verificaArray){ 
//     console.log(elemento)
// }
// return verificaArray.length
// }
// const arrayNumber = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const resultado1 = verificaNumero(arrayNumber)
// console.log(resultado)



// // b-
// function numeroPar(number){
//     if(number % 2 === 0){
//         return true
//     } else if ( number % 2 === 1){
//         return false
//     }
// }

// let inputNumber=prompt("Digite um número")
// const passo1 = numeroPar(inputNumber)
// console.log(`O número ${inputNumber} é par? Resposta: ${passo1}`)

  
//   // c
  
  
  
//   function verificarArray(lista){
//     let numPar=[]
//     for(let elemento of lista){
//         if(elemento % 2 === 0){
//             numPar.push(elemento)
        
//         }
//     }
//     return lista.length 
//   }
//   const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//   const resposta=verificarArray(array)
//   console.log(resposta)
 

// //d


// const numbers =[10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let novoArray= []

// for (num of numbers){
//     if (num %2 === 0){
//         novoArray= num
//     }
//     console.log(novoArray);
// }


// //Desafio 1

// let semParar= () =>{ 
//  console.log('Teste arrow function');
// }


// let somaNumero=(number1 ,number2) =>{
//     const soma =number1 + number2
//     return soma
// }
// const resultado2 = somaNumero(7,6)
// console.log(resultado2)

// //Desafio 2
// //c
// const lista = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let maior =0

//   for(let i =0 ; i < lista.length; i++){
//     if(lista[i] > maior){
//       maior = lista[i]
//       }
//   }
//       console.log(maior)

//       // 