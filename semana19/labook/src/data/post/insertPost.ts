// import { POST_TYPES } from "../../model/Post";

// import { connection } from "../BaseDatabase";


// export default async function insertPost(
//     id: string,
//     photo: string,
//     description: string,
//     type: POST_TYPES,
//     created_at: Date,
//     author_id: string

    
// ) {

    
//     try{
//         await connection.insert({
//             id,
//             photo,
//             description,
//             type,
//             created_at,
//             author_id
        
            
//         }).into("labook_posts")
//     }catch(error){
//         throw new Error("Erro de banco de dados: " + error.sqlMessage);
//     }
// }