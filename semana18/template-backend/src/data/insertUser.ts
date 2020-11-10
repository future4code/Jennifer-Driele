import { connection } from "../index";
import { USER_ROLES } from "../types/types";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role
    }).into('to_do_list_users')
}