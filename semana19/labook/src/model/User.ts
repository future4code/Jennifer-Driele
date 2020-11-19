export type CreateUserInput = {
    id: string,
    name: string,
    email: string,
    password: string
 }

 export type CreateUserOutput = {
   token: string
}

export interface CreateUserOutputInterface {
   token: string
}

 
 export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
 }
 
 export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }