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
}
export default new UserDatabase()
