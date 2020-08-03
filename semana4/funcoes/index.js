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

  function minhaMensagem(){
    console.log(" Eu sou Jennifer", "tenho 32 anos", "Moro em Piraciacaba e sou estudante. ")
     }
     minhaMensagem()

  function minhaMensagem1(nome,idade,cidade,estudante){
      if(estudante === false){
          console.log(`Èu sou ${nome},tenho ${idade} anos, moro em ${Cidade} e não sou estudante.`)
      }else if(estudante === true){
          console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e  sou estudante.`)
      }
}
 const resultado = minhaMensagem1("Jennifer", 32 ,"Piracicaba - Sp", true)


 // Exercício 5
//a

  function doisNumeros (num1, num2){
      const soma = num1 + num2
      console.log(soma)
  }
  doisNumeros(10 ,15)

  //b

  function doisNumeros1 ( number1 ,number2){
      if(number1 >= number2){
          console.log( true)
      }else if( number1 <= number2){
          console.log(false)
      }
  }
  doisNumeros1(10,5)

  //c

  let minhaMensagem2
for (minhaMensagem2 = 0; minhaMensagem2 < 10; minhaMensagem2++) {
  // Executa 10 vezes, com os valores de passos de 0 a 9.
  console.log('Olá dia está lindo');
}

//Exercício 6

// b-
function numeroPar(number){
    if(number % 2 === 0){
        return true
    } else if ( number % 2 === 1){
        return false
    }
}

let inpuNumber=prompt("Digite um número")
const passo1 = numeroPar(inpuNumber)
console.log(`O número ${inputNumber} é part? Resposta: ${passo1}`)

  
  // c

  const array =[]
  function verificarArray(arrayParametro){
    for(let number of arrayParametro){
        if(number % 2 === 0){
            array.push()
        }else{
            return false
        }
    }
    return arrayParametro.length
  }
  const resposta= verifircarArray(array)
 

