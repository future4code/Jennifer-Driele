import { connection } from "../..";


export const deleteUser = async (id: string): Promise<any> => {
    await connection
      .delete()
      .from("User_Arq")
      .where({ id });
  }