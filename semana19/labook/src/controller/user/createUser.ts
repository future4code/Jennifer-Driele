import { Request, Response } from "express";
import { createUserBusiness } from "../../business/user/createUserBusiness";
import { CreateUserInput} from "../../model/User";

export default async function createUser(
    req: Request,
    res: Response
) {
    let message = "Success!"
    try {
        const input: CreateUserInput = {
            id:req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
           
        }

       const token = await createUserBusiness(input);

        res
            .status(201)
            .send({
               message,
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}