import { Request, Response } from "express"
import selectAllUser from "../../data/user/selectAllUser"
import { User } from "../../types/types"

export default async function getAllUsers(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
       const recipes: User[] = await selectAllUser()
 
       if(!recipes.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(recipes)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }