export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT",
 }
 
 export interface CreatePostInput  {
    id: string,
    photo: string,
    description: string,
    type: string,
    token:string
    
 }
 export class Post {
   constructor(
      private id: string,
      private photo: string,
      private description: string,
      private type: string,
      private createdAt: Date = new Date(),
      private authorId: string

   ){ }

   public getId = ():string => this.id
   public getPhoto = () :string => this.photo
   public getDescription = ():string => this.description
   public getType = ():string => this.type
   public getCreatedAt= (): Date => this.createdAt
   public getauthorId = () :string=> this.authorId

   public setPost(newPost: string){
      this.photo = newPost
      return this
   }
}
   public setType(type:POST_TYPES){
      this.type = type
      return this
   }

   // if(type.toLowerCase()=== POST_TYPES.NORMAL){
   //    this.type =POST_TYPES.NORMAL;
   // }else if(type.toLowerCase()=== POST_TYPES.EVENT){
   //    this.type = POST_TYPES.EVENT;
   // }else{
   //    throw new Error ("Post type is not valid")
   // }

   
   }
 export type CreatePostOutput = {
   token: string
}

export interface CreatePostOutputInterface {
   token: string
}

