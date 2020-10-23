type Payment ={
    valuePayment:number,
    data:Date | string,
    description:string
}

export type User = {
    id:number,
    name:string,
    cpf:string,
    dateOfBirth: string | Date,
    saldo:number,
    extrato:Payment[]
}

export let users: User[] = [
    {
        id: 1,
        name:"Maria",
        cpf:"234-245-345-89",
        dateOfBirth:"26/01/1999",
        saldo:500.00,
        extrato:[
            {
                valuePayment:0.00,
                data:"",
                description:""
            }
        ]
    }

]