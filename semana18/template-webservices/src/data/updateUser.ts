import { connection } from "../index";

export default async function updateUser(
   id: string,
   name?: string,
   nickname?: string,
   email?: string
) {

   await connection("ListUser")
      .update({
         name, nickname, email
      })
      .where({ 
         id 
      })

}