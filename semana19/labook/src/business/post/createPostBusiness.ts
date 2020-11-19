// import { Request, Response } from "express";
// import { generateToken } from "../../services/authenticator";
// import { generateId } from "../../services/idGeneretor";
// import { Post } from "../../model/Post";
// import insertPost from "../../data/post/insertPost";
// import convertFormat from "../../services/convertFormat";
// import {  AuthenticationData, getTokenData } from "../../services/authenticator";

// export  default async function createPostBusiness(req:Request,res:Response,input:any):Promise<void>{
    
//     const token:string= req.headers.authorization as string
//     const tokenData: AuthenticationData = getTokenData(token)
    
//     try{
    
//     const { photo, description,type } =req.body

//       if (!photo || !description || !type ) {
//        throw new Error('"photo", "description"and "type",  must be provided')
//       }

//     const id: string = generateId()
    

//         await insertPost(
//         id,
//         photo,
//         description,
//         type,
       
//     )
//     const token :string = generateToken({
//         id:req.body.id
//      });

    

//     }catch(error){
//         if(error.code === 1048){
//             throw new Error("This Post already exist!");
//         }
//     }
   
// }