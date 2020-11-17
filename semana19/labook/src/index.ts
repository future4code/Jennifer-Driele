/**************************** IMPORTS ******************************/
import express, { Express } from "express"
import cors from "cors"
import { connection } from "./data/connection"
import { userRouter } from "./routes/userRoutes"




const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.use("/user", userRouter);


app.listen(3003, () => {
   console.log("Server running on port 3003")
})