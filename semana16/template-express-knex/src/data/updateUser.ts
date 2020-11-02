import { connection } from "..";
//import { User } from "../types/types";

//atualiza os parametros

  export const updateUser = async (
      id:string,
      name?:string,
      nickname?:string,
      email?:string
    ) =>{

     if(name){
          await connection.raw(`
          UPDATE ListUser
          SET name = '${name}'
          WHERE id = '${id}';
           `)
      }

      if(nickname){
        await connection.raw(`
        UPDATE ListUser
        SET nickname = '${nickname}'
        WHERE id = '${id}';
         `)
    }

    if(email){
        await connection.raw(`
        UPDATE ListUser
        SET email = '${email}'
        WHERE id = '${id}';
         `)
    }
}