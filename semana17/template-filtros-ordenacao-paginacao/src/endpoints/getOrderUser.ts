import {Request , Response} from "express";
import { filterOrderUser } from "../data/filterOrderUser";
import { inputData } from "../types/User";

export const getOrderUser = async(req:Request , res:Response) =>{
    try{
        const data: inputData ={
            name:(req.query.name as string).toLowerCase(),
            orderBy: req.query.orderBy as string || 'type',
            orderType:req.query.orderType as string || 'ASC',
           }
       if(!data.name){
            throw new Error("Você deve inserir um valor para \'name\'")
        }
        const validOrderByValue =['name', 'type'];
        if(!validOrderByValue.includes(data.orderBy)){
            throw new Error('Os valores para "orderBy" devem ser "name"ou "type" ')
        }

        const validOrderTypeValues = ['ASC' , 'DESC'];
        if(!validOrderTypeValues.includes(data.orderType)) {
            throw new Error ("Os valores para 'orderType' devem ser 'ASC' ou 'DESC'")
        }
        const result = await filterOrderUser(data)

        if(!result.length){
            res.statusCode =404;
            throw new Error ('Nenhuma professor encontrado')
        }
        res.status(200).send(result)


    }catch (err){
        res.status(400).send({
            message:err.message
        })
    }
}



