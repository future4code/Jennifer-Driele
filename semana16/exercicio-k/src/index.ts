import express, { Express } from "express";
import cors from "cors";
import knex from 'knex';
import dotenv from "dotenv"
import { getActorByName } from "./endpoints/getActorByName"
import { userActorByName } from "./data/userActorByName"
import { getActorById } from "./endpoints/getActorById";
import { getActorCount } from "./endpoints/getActorCount";
import { getCreateActor } from "./endpoints/getCreateActor";
import { getPostActor } from "./endpoints/getPostActor";
import { getActorDelete } from "./endpoints/getActorDelete";
import { getAllMovie } from "./endpoints/getAllMovie";
import { getMovieSearch } from "./endpoints/getMovieSearch";

dotenv.config()

console.log(process.env.teste)

export const connection = knex({	// Estabelece conexão com o banco
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();

app.use(express.json());
app.use(cors())


app.get("/actors/:name",getActorByName);
app.get("/actors/:id", getActorById);
app.get("/actor/count",getActorCount);
app.put("/actor",getCreateActor);
app.post("/actor/post", getPostActor);
app.delete("/actor/id", getActorDelete);

app.get("/movie/search",getMovieSearch)
app.post("/movie/:id",getAllMovie);


app.listen(3003, () =>{
    console.log("Servidor rodando na porta 3003")
});

userActorByName("t")

