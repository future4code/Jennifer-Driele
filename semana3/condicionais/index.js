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
    const ingresso =prompt("Qual o valor do ingresso?")
   const valorMenor = 15
 

    if(valorMenor <= 15 ){ 
    console.log("Bom Filme")
    }else{
        console.log("Escolha outro filme") 
    }


    //Desafio1
    Const



 

   //Desafio 2
   let categoria1FI = 1980
    if(categoria === 1) {
            preco = categoria1FI
        } else if(categoria === 2){
            preco = categoria2FI


   
