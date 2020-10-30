import { connection} from "../index";


 export const createUser = async (
    id:string,
    name: string,
    nickname: string,
    email: string
  ): Promise<void> => {
    await connection
      .insert({
       id:id,
        name: name,
        nickname: nickname,
        email: email,
      })
      .into("ListUser");
  };
  