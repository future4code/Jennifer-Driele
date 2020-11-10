import { Request, Response } from "express";
import {userById} from "../data/userById";


export const getUserById =async(
   req: Request,
   res: Response
) =>{
    try {
   const result = await userById(req.params.id)

      if (!result) {
         throw new Error("Usúario não encontrado")
      }

      res.status(200).send({
         id: result.id,
         email:result.email
         
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}

