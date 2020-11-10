import { connection } from ".."
import {input,User} from "../types/User";

export const filterUser = async(datas:input):Promise<User[]> => {
    try{
        const resultPage : number = 5;
        const offset: number = resultPage *(datas.page -1)
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${datas.name}%"
            ORDER BY ${datas.orderBy} ${datas.orderType}
            LIMIT ${resultPage}
            OFFSET ${offset}

        `)
        return result [0]

    }catch (err){
        throw new Error(err.sqlMessage)
    }
}