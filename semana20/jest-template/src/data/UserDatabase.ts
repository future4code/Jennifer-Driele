import { BaseDatabase } from "./BaseDatabase";
import dotenv from "dotenv";

dotenv.config();

class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "TestsUser";

  public async createUser(
    id: string,
    name: string,
    balance: number
  ): Promise<void> {
    await BaseDatabase.connection
      .insert({
        id,
        name,
        balance
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserById(id: string): Promise<any> {
    const result = await BaseDatabase.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deleteUser(id: string): Promise<any> {
    await BaseDatabase.connection
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
  }
}
export default new UserDatabase()
