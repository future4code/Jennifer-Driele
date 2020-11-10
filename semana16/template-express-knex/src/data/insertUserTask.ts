import { connection } from ".."

export const insertUserTask = async (
     id:string,
     title:string,
     description:string,
     deadline:string,
     authorid:string
 ) => {
     await connection(" ListTask")
     .insert({
        id,
        title,
        description,
        deadline,
        author_id:authorid
     })
 }