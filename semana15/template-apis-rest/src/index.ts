//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
//import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    age: number,
    type: string
}


enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}


let users:user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]


//Exercício 1
// a)Metdodo GET
// b)app.get("/users",(req:Request, res:Response) =>{
//});

app.get("/users", (req: Request, res: Response): void => {
    try{
        res.status(200).send(users);

    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

// Exercício 2
//a) Utilizando pathParams por ser dados controlados e conhecidos
//b) através do enum que defini dados types que podem ser utilizados

app.get("/users/:type", (req: Request, res: Response): void => {
    try{
        const usersByType = users.filter((user)=> user.type === req.params.type)
        if(req.params.type !== UserType.ADMIN && req.params.type !== UserType.NORMAL){
            req.params.type = "NORMAL"
        }
        res.status(200).send(usersByType);

    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

//Exercício 3
//a)O tipo query trata-se de dados  aleatorios

app.get("/users/query/", (req: Request, res: Response): void =>{
    console.log(req.query.name)
    let user:user | undefined = users.find(user => user.name === req.query.name)
    
    try{
        if(!user){
            throw new Error()
        }
      res.status(200).send(user);

    }catch{
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

// Exercício 4
//a) não mudou nada
//b)

app.post("/users", (req: Request, res: Response): void => {
    try{
        const {id, name, email, age, type} = req.body;
        const user:user = {
           id: id,
           name: name,
           email: email,
            age:age,
            type:type
        }
        users.push(user);
        res.status(200).send({message: "User created successfully"});

    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

//Exercício 5

app.put("/users", (req: Request, res: Response): void =>{
    try{
        const {id, name} = req.body;
        const userIndex = users.findIndex((u)=> u.id === id);
        if(userIndex === -1){
            throw new Error();
        }
        users[userIndex].name = name;
        res.status(200).send({message: "User updated successfully"});
    
    }catch(error){
        res.status(400).send({
            message: "Error inserting users"
        });
    }
});

// Exercício 6

app.patch("/users", (req: Request, res: Response): void => {
    try{
        const {id, name} = req.body;
        const userIndex = users.findIndex((u)=> u.id === id);
        if(userIndex === -1){
            throw new Error();
        }
        users[userIndex].name = name;
        res.status(200).send({message: "User updated successfully"});
    
    }catch(error){
        res.status(400).send({
            message: "Error inserting users"
        });
    }
});


//Exercício 7

app.delete("/users/:id", (req:Request, res:Response):void => {
     try{
        const userIndex: number | undefined = users.findIndex((user)=>user.id === Number(req.params.id)
        )
        console.log(req.params.id)
        console.log(userIndex)

        if(userIndex === -1){
            console.log(userIndex)
            throw new Error("unregister user")
        }
        users.splice(userIndex,1)
        res.status(200).send({message:"deleted user"})

    }catch (error){
        res.status(400).send({
            message:`$error.message`
        })
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       //const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:3003`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
