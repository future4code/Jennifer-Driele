import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import knex from 'knex';
import { createUser } from './controller/user/createUser'
import login from './controller/user/login';
import { deleteUserId } from './controller/user/deleteUserId';
import getAllUsers from './controller/user/getAllUsers';
//import { connection } from './data/connection'


dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})


const app = express()
app.use(express.json())
app.use(cors())


//  app.get("/", async function(req,res){
//    res.send(await connection.raw('show tables'))
// })

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/all",getAllUsers)
app.delete("/user/delete/:id", deleteUserId)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})