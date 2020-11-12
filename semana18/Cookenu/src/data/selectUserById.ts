import { connection } from "../index";
import { User } from "../types/types";

export default async function selectUserById(
    id: string
): Promise<User> {
    const result = await connection('table_user')
        .select('*')
        .where({ id })

    return result[0]
}