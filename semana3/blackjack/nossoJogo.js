/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 //Montando o Jogo

 //Parte 1 ,2,3 e 4

 console.log("Bem Vindo ao jogo de BlackJack !")
 let rodada= confirm("Quer iniciar uma nova rodada?")
 let rodada2
     if(rodada === true){
       rodada2="Você pressionou ok!"
     }else{
        rodada2="Você preciossou Cancelar!" 
        console.log("O jogo acabou")
     }  
     
  //Parte 5 
  
   const cartasDoUsuario = comprarCarta()
  console.log(cartasDoUsuario.texto) 

  const cartasDoComputador = comprarCarta()
  console.log(cartasDoComputador.valor)

  //Parte 6 e 7
   const usuario ="J♥️  10♥️"
   const computador ="J♥️  10♥️"
   const pontosDoUsuario = 20
   const pontosDoComputador = 20



  
  
  
  
  
  
  
  
   if(pontosDoUsuario === pontosDoComputador){
       console.log("Empate!")
  }else if( pontosDoUsuario > pontosDoComputador) {
       console.log("O usuario ganhou!")
  }else if(pontosDoUsuario < pontosDoComputador){
       console.log("O computador ganhou!")
  }else{
      console.log(erro)
  }

