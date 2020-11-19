import { connection } from "../..";
import { User } from "../../types/types";

export default async function selectAllUser():Promise<any> {
    const result: User[] = await connection.raw(`
       SELECT id, name, email,password, role
       FROM User_Arq
       
    `)
 
    return result[0]
 }