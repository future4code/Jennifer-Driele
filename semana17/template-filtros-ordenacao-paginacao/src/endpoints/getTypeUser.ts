import {Request , Response} from "express";
import { filterTypeUser } from "../data/filterTypeUser";

export const getTypeUser = async (req:Request, res:Response) => {
    try{
        const result = await filterTypeUser(req.params.type)
        if(!result){
            res.status(404).send({
            message:"Tarefa não encontrada"
        })
    return
  }
    res.status(200).send(result)

    }catch(err){
        res.status(400).send({
        message:err.message
    })
  }
}



