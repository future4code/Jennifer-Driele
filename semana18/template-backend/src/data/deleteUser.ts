import { connection } from "../index";

export const deleteUser = async (id: string): Promise<any> => {
    await connection
      .delete()
      .from("to_do_list_users")
      .where({ id });
  }