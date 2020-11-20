import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"
import userBusiness from "../business/UserBusiness"
import userDatabase from "../data/UserDatabase"
import { AddFriend, CreateUserInput, User } from "../model/User"
import authenticator from "../services/authenticator"
import hashManager from "../services/hashManager"

class UserController {
   public async signup(
      req: Request,
      res: Response
   ) {
      try {

         const input: CreateUserInput = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
           
         }

         const token = await userBusiness.signup(input)

         res
            .status(201)
            .send({
               message: "Usuário criado!",
               token
            })
      } catch (error) {
      
         res
         .status(error.statusCode)
         .send({
            message: error.message || error.sqlMessage
         })
      }
   }

   public async login(
      req: Request,
      res: Response
   ): Promise<void> {
      try {
         const { email, password } = req.body
   
         let message = "Usuário logado!"
   
         if (!email || !password) {
            res.statusCode = 406
            message = "'email' e 'senha' são obrigatórios"
            throw new Error(message)
         }
   
         const user: User = await userDatabase.getUserByEmail(email)
   
         if (!user) {
            res.statusCode = 404
            message = "Usuário não encontrado ou senha incorreta"
            throw new Error(message)
         }
   
         const passwordIsCorrect: boolean = await hashManager.compare(password, user.getPassword())
   
         if (!passwordIsCorrect) {
            res.statusCode = 404
            message = "Usuário não encontrado ou senha incorreta"
            throw new Error(message)
         }
   
         const token: string = authenticator.generateToken({
            id: user.getId(),
            
         })
   
         res.send({
            message,
            token
         })
   
      } catch (error) {
         let { message } = error
   
         if(message === "Cannot read property 'id' of undefined"){
            message = "Usuário não encontrado ou senha incorreta"
            res.statusCode = 404
         }
         
         if(message === "Field 'name' doesn't have a default value"){
            message = "Insira um nome para seu usuário"
            res.statusCode = 406
         }
         res.send({message})
      }
   }
   
   public async addFriendById(
      req:Request,
      res:Response
   ):Promise<any>{
      try{
         const input:AddFriend ={
            id:req.params.id,
            token:req.headers.authorization !
         }
         const friends = await UserBusiness.addFriendById(input)

         res.status(200).send({
            message:"Friend add",friends
         })
   
      }catch (error){
         res.status(400).send({
            message:error.message
         })
      }
   }
}

export default new UserController()