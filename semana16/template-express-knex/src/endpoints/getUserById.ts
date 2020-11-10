import { Request, Response } from "express"
import { selectUserById } from "../data/selectUserById";


export const getUserById = async (req: Request, res: Response) => {
    try {
   const id = req.params.id;
   const user = await selectUserById(id);

   //validar a saida
   if(!user){
       res.status(400).send({
           message:"Usuário não encontrado"
       })
   }
    res.status(200).send(user)
   

 } catch (err) {
   res.status(400).send({
     message: err.message ||  err.sqlMessage
     
   });
 }
   
}
