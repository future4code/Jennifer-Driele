import { connection } from "..";
//import { User } from "../types/types";


export const selectUserEmail = async(email: string): Promise<any> => {
    
        const result = await connection("to_do_list_users")
           .select("*")
           .where({ email })
  
        return result [0];
    
}