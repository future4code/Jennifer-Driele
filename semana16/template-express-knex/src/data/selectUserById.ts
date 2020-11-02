import { connection} from "../index";
import { User } from "../types/types";


// export const selectUserById = async (id: string): Promise<void> => {
//     await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `);
//   };


export const selectUserById = async (id:string): Promise<User[]> => {
  try{ 
    const result = await connection.raw(`
      SELECT id, nickname  FROM ListUser WHERE id = '${id}'
     
    `)
    console.log(result[0])
    return result[0];
  }catch (error){
    console.log(error)
    return[]
  }
      
  }