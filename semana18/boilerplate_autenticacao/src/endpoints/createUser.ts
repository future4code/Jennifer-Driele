import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import {generateId} from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password
        ) {
          throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = generateId()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            req.body.password   
        )

         const token: string = generateToken({
            id
         })

        res
            .status(200)
            .send({
               message:"Usuário criado com sucesso!",
               token:generateToken ({id})
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}