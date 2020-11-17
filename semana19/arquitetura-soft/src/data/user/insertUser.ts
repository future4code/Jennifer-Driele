import { connection } from "../..";
import { USER_ROLES } from "../../types/types";

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
) {
    try{
        await connection.insert({
            id,
            name,
            email,
            password,
            role
        }).into(' User_Arq')
    }catch(error){
        throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
}
