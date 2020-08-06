let arrayDespesas=[]

function cadastroDespesas(){
    const inputValor = document.getElementById("valor-despesa")
    const inputTipo = document.getElementById("tipo-despesa")
    const inputDescricao = document.getElementById("descricao-despesa")
     
 if(inputValor.value !==""  && inputTipo.value !== ""&&  inputDescricao.value !== ""){
     const novaDespesa ={
        valor:(inputValor.value),
        tipo: inputTipo.value,
        descricao: inputDescricao.value
    
    }
     console.log(novaDespesa)
     
     arrayDespesas.push(novaDespesa)
     console.log(arrayDespesas)
     
     arrayDespesas.forEach(adicionarDespesa)
     
     inputValor.value =""
     inputTipo.value =""
     inputDescricao.value =""
    
    }else{

    alert("Verifique suas informações")
    
   }

}


const adicionarDespesa = (despesa ,index,array) =>{
    addDespesa.innerHTML += `<li>${despesa.valor}</li><li>${despesa.tipo}</li><li>${despesa.descricao}</li> <br>`
}

const addDespesa = document.getElementById("lista-de-depesas-detalhada") 

function filtrarDespesa(){
    const valorMin =document.getElementById("valor-minimo").value
    const valorMax =document.getElementById("valor-maximo").value
    console.log(valorMax,valorMin)

    sectionDespesa.innerHTML=""
    const filtroDeValores =arrayDespesas.filter((despesa) =>{
        return Number(dispesa.valor) >= valorMin && Number(despesa.valor) <= valorMax
    })
    
    sectionDespesa.innerHTML +=`<li>Valor:${filtroDeValores.valor}</li>
    <li>Descriçao: ${filtroDeValores.descricao}</li>
    <li>Tipo de Despesa:${filtroDeValores.tipoDespesa}</li>`
    console.log(filtroDeValores)
    event.preventDefault()

}

