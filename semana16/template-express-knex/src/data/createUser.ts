import { connection} from "../index";


 export const createUser = async (
    id:string,
    name: string,
    nickname: string,
    email: string
  ): Promise<void> => {
    await connection
      .insert({
       id,
        name,
        nickname,
        email,
      })
      .into("ListUser");
  };
  