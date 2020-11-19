import { Request, Response } from "express";
import PostDatabase from "../data/PostDatabase";
import { CreatePostInput,Post } from "../model/Post";
import authenticator, { AuthenticationData } from "../services/authenticator";
import idGenerator from "../services/idGenerator";


class PostBusiness {
    public async createPost(input: CreatePostInput): Promise<string> {
        let message= "Success!"
       try {
        const { photo, description,type } =input

        if (!input.photo || !input.description || !input.type ) {
         throw new Error('"photo", "description"and "type",  must be provided')
        }
        const tokenData: AuthenticationData =authenticator. getTokenData(input)
        const author_id: string tokenData.id
         const id: string =idGenerator. generateId()
         
         if(!tokenData){
           message = "Unauthorized";
           throw new Error("message")
         }
         const createdATS = moment().format("YYYY-MM-DD")
         const newPost:Post = new Post(
            id,
            input.photo,
            input.description,
            input.type,
            createdATS,
            author_id
       )
       await PostDatabase.createPost(newPost)
       return message
         }catch(error){
            let message = error.sqlMessage || error.message
            return message

         }
        
    )
    const token :string = generateToken({
        id:req.body.id
     });

    

    }catch(error){
        if(error.code === 1048){
            throw new Error("This Post already exist!");
        }
    }
   
}