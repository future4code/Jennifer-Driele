 function adicionarTarefa(){
     const meuInput = document.getElementById("tarefa")
     let valor = meuInput.value
     const diasDaSemana = document.getElementById("dias-semana").value
 
     switch(diasDaSemana){
         case"domingo":
          document.getElementById("domingo").innerHTML += `<li>${valor}</li>`
         break

         case"segunda":
          document.getElementById("segunda").innerHTML += `<li>${valor}</li>`
         break

         case"terca":
         document.getElementById("terca").innerHTML += `<li>${valor}</li>`
         break

         case"quarta":
         document.getElementById("quarta").innerHTML += `<li>${valor}</li>`
         break

         case"quinta":
         document.getElementById("quinta").innerHTML += `<li>${valor}</li>`
         break

         case"sexta":
         document.getElementById("sexta").innerHTML += `<li>${valor}</li>`
         break

         case"sabado":
        document.getElementById("sabado").innerHTML += `<li>${valor}</li>`
         break
     }
     meuInput.value =""

 }


// Desafio

// if(meuInput.value !== ""){ 
// switch(diasDaSemana){
//     case"domingo":
//      document.getElementById("domingo").innerHTML += `<li>${valor}</li>`
//     break

//     case"segunda":
//      document.getElementById("segunda").innerHTML += `<li>${valor}</li>`
//     break

//     case"terca":
//     document.getElementById("terca").innerHTML += `<li>${valor}</li>`
//     break

//     case"quarta":
//     document.getElementById("quarta").innerHTML += `<li>${valor}</li>`
//     break

//     case"quinta":
//     document.getElementById("quinta").innerHTML += `<li>${valor}</li>`
//     break

//     case"sexta":
//     document.getElementById("sexta").innerHTML += `<li>${valor}</li>`
//     break

//     case"sabado":
//     document.getElementById("sabado").innerHTML += `<li>${valor}</li>`
//     break

// }}else{
//     alert("Nada preenchido")
// }
// meuInput.value = ""




//  if(myTodo !==""){
//      document.getElementById(whenTodo).innerHTML +=` <li onclick ="deleteTodo(this)">${myTodo}</li` 
//      document.getElementById("tarefa").value = ""
//  }else{
//      alert("Por favor, digite uma tarefa!")
//  }


// function deleTodo(element){
//     element.className ="done"
//}