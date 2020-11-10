import { connection} from "../index";
//import { Actor } from "../types";



export const selectActorById = async (id: string): Promise<void> => {
  await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);
};

// export const selectActorById = async (id: string): Promise<Actor[]> => {
//   try{ 
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}
     
//     `)
//     console.log(result[0])
//     return result[0];
//   }catch (error){
//     console.log(error)
//     return[]
//   }
      
//   }
