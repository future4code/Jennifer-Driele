import { POST_TYPES } from "../model/Post";
import BaseDatabase from "./BaseDatabase";


class PostDatabase extends BaseDatabase{

    private  tableName: string = "labook_posts" 

    public async getPostById(
        id:string
    ):Promise<any>{
        const result = await BaseDatabase.connection.raw(`
          SELECT *,FROM ${this.tableName} 
          WHERE id = '${id}';
        `)
        return result[0][0]
    }
    
    public createPost = async(
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string

    
)=> {
        await BaseDatabase. connection(this.tableName)
        .insert({
            id,
            photo,
            description,
            type,
            created_at,
            author_id
        })
   
}
}
export default new PostDatabase() 
