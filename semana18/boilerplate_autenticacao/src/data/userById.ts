import { connection } from "../index";


export const userById = async(id: string): Promise<any> => {
    
    const result = await connection("to_do_list_users")
       .select("*")
       .where({ id})

    return result [0];

}