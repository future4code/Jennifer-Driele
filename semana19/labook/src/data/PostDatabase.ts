import { Post } from "../model/Post";
import BaseDatabase from "./BaseDatabase";


class PostDatabase extends BaseDatabase{

    private static tableName: string = "labook_posts" 
    public geTableName =():string => PostDatabase.tableName

    public async getPostById(
        id:string
       
    ):Promise<any>{
        const result = await BaseDatabase.connection(PostDatabase.tableName)
        .select("*")
        .where({ id })
        
        return result[0]
    }
    
    public async createPost(
        post:Post
    ){
        try{
            await BaseDatabase. connection.insert({
                id:post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                created_at: post.getCreatedAt(),
                author_id: post.getAuthorId()
            })
            .into(PostDatabase.tableName)
        }catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage);
         }
    }

    public async selectFeedPost():Promise<any> {
        const result: Post[] = await BaseDatabase.connection.raw(`
           SELECT id, name,
           FROM tablePost
           
        `)
     
        return result[0]
  }
}
export default new PostDatabase() 
