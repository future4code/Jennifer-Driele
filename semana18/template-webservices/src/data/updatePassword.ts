import { connection } from "..";

const TABLE_NAME = "to_do_list_users"

export async function updatePassword(id: string,
     newPassword: string){
    await connection.raw(`
        UPDATE ${TABLE_NAME}
        SET password = "${newPassword}"
        WHERE id = "${id}"
    `);
}