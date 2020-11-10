import {Request , Response} from "express";
import { filterUser } from "../data/filterUser";
import { input } from "../types/User";

export const getUser = async(req:Request , res:Response) =>{
    try{
        const datas: input ={
            name:(req.query.name as string).toLowerCase(),
            orderBy: req.query.orderBy as string || 'type',
            orderType:req.query.orderType as string || 'ASC',
            page: Number(req.query.page)<= 0 ? 1 : Number(req.query.page) || 1,
           }

       if(!datas.name){
            throw new Error("Você deve inserir um valor para \'name\'")
        }
        const validOrderByValue =['name', 'type'];
        if(!validOrderByValue.includes(datas.orderBy)){
            throw new Error('Os valores para "orderBy" devem ser "name"ou "type" ')
        }

        const validOrderTypeValues = ['ASC' , 'DESC'];
        if(!validOrderTypeValues.includes(datas.orderType)) {
            throw new Error ("Os valores para 'orderType' devem ser 'ASC' ou 'DESC'")
        }
        const result = await filterUser(datas)

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



