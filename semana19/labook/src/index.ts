import express, { Express } from "express"
import cors from "cors"
import BaseDatabase from "./data/BaseDatabase"
import { userRouter } from "./routes/userRoutes"
//import { postRouter } from "./routes/postRoutes"




const app: Express = express()
app.use(express.json())
app.use(cors())

// app.get("/", async function(req,res){
//    res.send(await  BaseDatabase.connection.raw('show tables'))
// })

app.use("/user", userRouter);
//app.use("/post",postRouter);


app.listen(3003, () => {
   console.log("Server running on port 3003")
})