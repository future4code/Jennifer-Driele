arrayDespesas=[]

//adicionar as despesas num array de objetos



//função adicionar despesas na lista
function cadastroDespesas(){
    const valorDespesa = document.getElementById("valor").value
    const tipoDespesa=document.getElementById("tipo").value
    const descricaoDespesa = document.getElementById("descricao").value
    const despesas =document.getElementById("")
    if(valorDespesa .value !=="" && valor.value !== ""&&  descricaoDespesa.value != ""){
        despesas.innerHTML += `<p>${valorDespesa.value}</p><p>${tipoDespesa.value}</p><p>${descricaoDespesa.value}</p>`
         

    alert("Verifique suas informações")
}else{
    const novaDespesa ={
        valor:valorDespesa,
        tipo:tipoDespesa,
        descricao: descricaoDespesa
    }
    arrayDespesas.push(novaDespesa)
        valorDespesa.value =""
        tipoDespesa.valeu =""
        descricaoDespesa.value =""
        }

}
// Obejeto da 1 seção

    
    

