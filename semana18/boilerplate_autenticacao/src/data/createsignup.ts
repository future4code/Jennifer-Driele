import { connection } from "..";

export const createsignup = async(
    id: string,
    email: string,
    password: string
):Promise<void>  =>{
    await connection.insert({
        id,
        email,
        password
    }).into('to_do_list_users')
}