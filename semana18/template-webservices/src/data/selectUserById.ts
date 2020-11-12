import { connection } from "../index";

export default async function selectUserById(
    id: string
) {
    const result = await connection('ListUser')
        .select('*')
        .where({ id })

    return result[0]
}