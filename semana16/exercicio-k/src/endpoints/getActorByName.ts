import { Request, Response } from "express"
import { userActorByName } from "../data/userActorByName"
import { Actor } from "../types";


export const getActorByName = async (req: Request, res: Response) => {
    try {
 
       const actorName: Actor[] = await userActorByName (req.params.name)
       res.status(200).send(actorName)
 
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
 }