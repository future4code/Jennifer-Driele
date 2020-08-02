// Exercício 1

/* Ele faz uma condição de continuação
 depois de ação repetida imprime o incremento que é o (i) , o resultado vai ser (10).
*/

// Exercício 2

/* a- Ele imprime todos os números maiores que 18.
   b- Não o for of não pode usar  o indice.
   */

   // Exercíco 3

   //a

    const arrayOriginal = [10,15,25,30,35,50,65,70,72,80]

   for(let i= 0; i < arrayOriginal . length; i++){
     console.log(arrayOriginal[i])
   }
 
   //b
   const arrayNum = [10,15,25,30,35,50,65,70,72,80]

   for(let i= 0; i < arrayNum . length; i++){
     console.log(arrayNum[i]/10)
   }
 

   //c
   
   let numbers = [1,2,20,44,45,55,58,80]
   let novoArray= []

   for (num of numbers){
       if (num %2 === 0){
           novoArray= num
       }
       console.log(novoArray);
   }
        //d

        let array= [21,62,1,5,70]
        for(i =0 ; i < array.length; i++){
       console.log(`O elemento do index ${i} é o número ${array[i]}`)
}
  

//e

const number = [10,15,25,30,35,50,65,70,72,80]
  let valorMaximo = 0
  let valorMinimo = 90
  
  for (i = 0; i< number.length; i++){
  if(number[i]> valorMaximo){
  valorMaximo =number[i];
  }
  }
  
  for(i = 0; i <number.length; i++){
    if(number[i]<valorMinimo){
      valorMinimo=number[i]
  
    }
  }
  console.log(`O maior numero é ${valorMaximo} e o menor número é ${valorMinimo}`)