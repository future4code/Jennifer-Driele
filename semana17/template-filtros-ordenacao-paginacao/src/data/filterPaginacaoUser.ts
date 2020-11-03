import { connection } from ".."
import {inputData,User} from "../types/User";

export const filterPaginacaoUser = async(data:inputData):Promise<User[]> => {
    try{
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${data.name}%"
            ORDER BY "${data.orderBy}" "${data.orderType}"

        `)
        return result [0]

    }catch (err){
        throw new Error(err.sqlMessage)
    }
}