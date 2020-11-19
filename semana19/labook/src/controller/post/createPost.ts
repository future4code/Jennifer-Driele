
// import { Request, Response } from "express";
// import {  AuthenticationData, getTokenData } from "../../services/authenticator";
// import insertPost from "../../data/post/insertPost";
// import { generateId } from "../../services/idGenerator";



// export default async function createRecipe(
//     req: Request,
//     res: Response
//     )  {
//         const token= req.headers.authorization as string
//         const auth: AuthenticationData = getTokenData(token);
//         const { photo, description, type ,created_at,author_id} = req.body
//         let message = "Success!"
//         try {
        
//        if(
//            !req.body.photo ||
//            !req.body.description ||
//            !req.body.type
//        ){
//            res.statusCode = 406
//            throw new Error('"photo", "description"and "type"')
//        } 
//         const id :string = generateId()  
//         //const createdATs = new Date(convertFormat(createdAt)).getTime()
//          await insertPost( 
//             id,
//             photo,
//             description,
//             type,
//             created_at,
//             auth.id
//         )
        
//         res.status(200).send({
//            message,
         
           
//         })
//     } catch (error) {
//         res.status(400).send({
//             message: error.message || error.sqlMessage,
//             auth: req.headers.auth
//         })
//     }
// }