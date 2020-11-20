import {Request, Response} from 'express'
import PostBusiness from '../business/PostBusiness'
import PostDatabase from '../data/PostDatabase'
import { CreatePostInput} from '../model/Post'


class PostController {
    public async createPost(
        req:Request,
        res:Response
    ){
        try{
           
            const input:CreatePostInput ={
                photo:req.body.photo,
                description:req.body.description,
                type:req.body.type,
                token:req.headers.authorization !

            }
            if(!input){
                throw new Error('"Photo", "description",and "type"must be fill')
            }
            const message = await PostBusiness.createPost(input)
            res.status(200).send({
                message
            })
        }catch (error) {
            res.status(400).send({
               message: error.message || error.sqlMessage
            })
    }
}

public async getPostById(
    req: Request,
      res: Response
   ) {
    try {
       
        const result = await PostDatabase.getPostById(req.params.id)
  
        if (!result) {
           throw new Error("Tarefa não encontrada")
        }
  
        res.status(200).send({
            id: result.id,
            photo: result.photo,
            description: result.description,
            type: result.type, 
            created_at: result.created_at,
            author_id: result.author_id,
            
         })
        

    } catch (error) {
        res.status(400).send({
           message: error.message || error.sqlMessage
        })
     }
  }
}

export default new PostController()
