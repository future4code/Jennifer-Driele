import {Request ,Response} from "express";
import { updateUser } from "../data/updateUser";


export const getEditUser = async (req: Request, res: Response) => {
    try {
        //validar as entradas da requisição
        if(
            req.body.name === "" ||
            req.body.nickname  === ""||
            req.body.email === ""
        ){
            res.status(400)
            .send("Nenhum dos campos pode estar em branco !")
        }
        if (!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send("Escolha ao menos um valor para alterar")
        }
       await updateUser(
        req.params.id,
        req.body.name,
        req.body.nickname ,
        req.body.email 
    
       )
       res.status(200).send({
           message:"Usuário atualizado"
       })
    } catch(err){
        res.status(400).send({
            message: err.message || err.sqlMessage
        })
    }
}