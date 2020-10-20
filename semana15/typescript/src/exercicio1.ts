//   const minhaString :string = "Jennifer"
//   const meuNumero : number = 15

//   const person:{name: string,favouriteColor:string, age:number} = {
//       name:"Jennifer",
//       favouriteColor:"Azul",
//       age:32
//   }
enum CORES_DO_ARCO_IRIS {
    VIOLETA = "VIOLETA",
    ANIL = "ANIL",
    AZUL = "AZUL",
    VERDE = "VERDE",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERMELHO = 'VERMELHO'
}
  type person ={
      name:string,
      age:number,
      favouriteColor:CORES_DO_ARCO_IRIS
  }

  const jennifer:person={
      name:"Jennifer",
      age:32,
      favouriteColor:CORES_DO_ARCO_IRIS.AZUL
  }

  const rafael:person={
    name:"Rafael",
    age:20,
    favouriteColor:CORES_DO_ARCO_IRIS.VERMELHO
}

const maria:person={
    name:"Maria",
    age:52,
    favouriteColor:CORES_DO_ARCO_IRIS.ANIL
}

const mario:person={
    name:"Mario",
    age:32,
    favouriteColor:CORES_DO_ARCO_IRIS.AMARELO
}
  

