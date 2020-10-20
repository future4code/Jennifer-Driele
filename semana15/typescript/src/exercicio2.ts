function obterEstatisticas(numeros:number[]): Object {
   const numerosOrdenados : number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0
    let num: number

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number , menor:number ,media:number}  = { 
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}

//console.log(obterEstatisticas([8,4,6,8]));

type Amostra = {
    numeros : number[],
    obterEstatisticas:(numeros: number[])=> number
}

const amostraDeIdades :Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
     obterEstatisticas:function(numeros: number[]):number {
         return 18

     }
}

