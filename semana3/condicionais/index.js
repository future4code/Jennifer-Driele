//Exercício 1

/* Ele testa o número que o usuario digita e indentifica se o número é par ou impar. Se o ususario digita um número par,
ele mostra o resultado que passou no teste (porque todo número par dividido por 2 é
igual a 0) .Quando o usuariro digita um número impar o resultado (Não passou no teste)
*/

//Exercícios 2

/* a- Ele serve para simplificar quando usamos muito o comparador ===
   b- Ele retorna que "O preço da fruta ,Maçã é R$2.25
   c-Quando titamos o break e digitamos Pêra ele retorna "O preço da fruta ,Maçã é R$5"
*/

//Exercício 3


/* a- está pedindo ao usuario digitar o primeiro número
   b- Será "Esse número passou no teste , quando o usuraio digita  -10 (da erro no console)
   c-cada bloco possui seu proprio escopo , o que sigifica que as variaveis criada lá pertence 
   a este escopo , não conseguindo acessar a variavel mensagem

   */
  
   //Exercício 4

   const respostaDoUsuario =Number(prompt("Qual a sua idade?"))
   const idadeMinima = true
   const idade =18
   const semIdade = false 

   if(idadeMinima && idade >= 15 && !semIdade){
       console.log ("Você pode dirigir")
   }else {
       console.log("Você não pode dirigir") 
   }

   //Exercício 5

   let turnoDoAluno=prompt("Digite qual qual o seu turno M (Matutino V(Vespertino N(Noturno?")

   const turno ="M"
   
   if(turno === "M"){ 
       console.log("Bom Dia")

   } else if(turno === "V" ){ 
       console.log("Boa Tarde")
   
    }else if(turno === "N"){ 
      console.log("Boa Noite")
    
    }else{
        console.log("Turno não indentificado")
    }

    //Exercício 6


   let turnoAluno = prompt("Digite qual qual o seu turno M (Matutino V(Vespertino N(Noturno?")
   
    switch (turnoAluno) {
    case "M":
      console.log("Bom Dia")
    break
    case "V":
      console.log("Boa Tarde")  
    break
    case "N":
    console.log("Boa Noite")
    break
  
  default:
    console.log ("Turno não indentificado")
    break
    }

    //Exercício 7

    const filme =prompt("Qual o gênero de filme que vão assistir?")
    const ingresso = Number(prompt("Qual o valor do ingresso?"))
    
    

    switch(ingresso){
        case "15": 
           
    console.log("Bom Filme")
    break;
   
    default: 
        console.log("Escolha outro Filme")
        break;
    }
    //Desafio 1

const doces = prompt("Qual snack que você que comprar , Pipoca , Chocolate,Doces, etc?").toUpperCase()
let gulosemas ="Chocolate"
switch(doces){
    case "SNACK":
        console.log("Bom Filme !")
       console.log("... com " + gulosemas) 
    break;

  
  default: 
  console.log("Escolha outro  SNACK")
  break; 


 
}

   
  //Desafio 2

  let nome=prompt("Qual é seu nome Completo")
  let tipoDeJogo = prompt("O jogo é do tipo Nacional ou Internacional?").toUpperCase()
  let etapa=prompt("Qual é a etapa do jogo?")
  let categoria =Number( prompt("Qual é a categoria do jogo"))
  let ingresso1 =Number(prompt("Quantos ingressos deseja comprar?"))
  let valorDoSf1 = 1980 
  let ingressos = 5
  let nomeCompleto =" Vitor Silva"
  let tipoDoJogo1 = "Nacional"
  let etapaDoJogo = "Semifinais"
  let categorias = 1

 
 console.log("----Dados da Compra----")
 console.log("Nome do cliente: " + nomeCompleto)
 console.log("Tipo do Jogo: " + tipoDoJogo1)
 console.log("Etapa do Jogo: " + etapaDoJogo)  
 console.log("Categoria:" + categoria)
 
 console.log("Quantidade de ingressos:"  +  ingressos  +  "Ingressos")
 console.log("---Valores---")
 console.log("Valor do ingresso:" ,"R$", + valorDoSf1)


 if(categorias === 1) {
             preco = valorDoSf1
 console.log("Valor Total:" ,"R$", + (valorDoSf1 * ingressos))
}else{
    console.log("Dados incorretos")
}


   

let nome1=prompt("Qual é seu nome Completo")
let tipoDeJogo1 = prompt("O jogo é do tipo Nacional ou Internacional?").toUpperCase()
let etapa1=prompt("Qual é a etapa do jogo?")
let categoria1 =Number( prompt("Qual é a categoria do jogo"))
let ingresso2 =Number(prompt("Quantos ingressos deseja comprar?"))
let valorDoSf2 = 321.95 
let ingressos2 = 2
let nomeCompleto2 =" Mario Vinicius"
let tipoDoJogo2 = "Internacional"
let etapaDoJogo2 = "Final"
let categorias2 = 2

console.log("----Dados da Compra----")
console.log("Nome do cliente: " + nomeCompleto2)
console.log("Tipo do Jogo: " + tipoDoJogo2)
console.log("Etapa do Jogo: " + etapaDoJogo2)
console.log("Categoria:" + categorias2)

console.log("Quantidade de ingressos:"  +  ingressos2  +  "Ingressos")
console.log("---Valores---")
console.log("Valor do ingresso:" ,"U$", + valorDoSf2)

if(categorias2 === 2 ) {
           preco = valorDoSf2
console.log("Valor Total:","U$",  + ( 321.95 *ingressos2))
}else{
  console.log("Dados incorretos")
}

