let arrayPost =[]

//Selecionar Dom
     const tituloPost = document.getElementById("titulo-post")
     const  autorPost = document.getElementById("autor-post")
     const conteudoPost = document.getElementById("conteudo-post")
     const imagemPost = document.getElementById("imagem-post")

//Criar Object

let post ={
    titulo:tituloPost.value,
    autor: autorPost.value,
    conteudo:conteudoPost.value,
    imagem:imagemPost.value
    }
//Adcionar array
 
arrayPost.push(post) 

//imprimir no console
 console.log(post)
 console.log(arrayPost)

  
//post na pagiana html

function apertarBotao(){
    const containerPost = document.getElementById("container-de-posts")
    containerPost.innerHTML +=`<div><h2>${tituloPost.value}</h2><h3>${autorPost.value}</h3><p>${conteudoPost.value}</p></div>`
    if (imagemPost.value.includes('.png') || imagemPost.value.includes('.jpg')){
        containerPost.innerHTML += `<img src=${imagemPost.value}>`
    }else{
        alert("Nenhuma imagem adicionada")
    }
 
}
// Função aperta o botão

function addPost(event){
    apertarBotao()

// limpar os campos
   tituloPost.value = ""
   autorPost.value = ""
   conteudoPost.value = ""
   imagemPost.value = ""
  
}