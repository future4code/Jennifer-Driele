import { connection } from "../connection";


export default async function insertUser(
    id: string,
    name: string,
    email: string,
    password: string,
    
) {
    try{
        await connection.insert({
            id,
            name,
            email,
            password
            
        }).into("labook_users")
    }catch(error){
        throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
}