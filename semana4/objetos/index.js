
//Selecionar Dom
function apertouBotao(){ 

const tituloPost = document.getElementById("titulo-post")
const autorPost = document.getElementById("autor-post")
const conteudoPost = document.getElementById("conteudo-post")


//Criar Object

 const criarPost ={
     titulo:tituloPost.Value,
     autor: autorPost.value,
     conteúdo:conteudoPost.value
 }
 //Adcionar array
 const arrayPost =[]
 arrayPost.push(criarPost)

 //imprimir no console
// console.log(criarPost)
// console.log(arrayPost)

//post na pagiana html
const containerPost = document.getElementById("container-de-posts")
containerPost.innerHtml +=`<div><h2>${tituloPost.value}</h2> <h3>${autorPost.value}</h3> <p>${conteudoPost.value}</p></div>`



// limpar os campos
tituloPost.value=""
autorPost.value=""
conteudoPost.value=""
 
}


