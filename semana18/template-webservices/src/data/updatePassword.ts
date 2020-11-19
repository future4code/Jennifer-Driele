import { connection } from "../index";

const TABLE_NAME = "ListUser"

export async function updatePassword(id: string,
     newPassword: string){
    await connection.raw(`
        UPDATE ${TABLE_NAME}
        SET password = "${newPassword}"
        WHERE id = "${id}"
    `);
}