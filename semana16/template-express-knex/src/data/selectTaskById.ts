import { connection } from ".."

export const selecTaskById = async (id:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT task . * ,nickname FROM ListTask As task 
        JOIN ListUser AS user
        ON author_id = user.id
        WHERE task.id = '${id}';
 
    `)
    return result[0][0]
}