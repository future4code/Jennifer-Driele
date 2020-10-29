import { Request, Response } from "express"
import { selectActorById} from "../data/selectActorById"
//import { Actor } from "../types";

export const getActorById = async (req: Request, res: Response) => {
     try {
    const id = req.params.id;
    const actor = await selectActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
    
 }

 
