import { connection} from "../index";
import { Actor } from "../types";


export const userActorByName = async (name: string): Promise<Actor[]> => {
  try{ 
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name Like "%${name}%"
    `)
    console.log(result[0])
    return result[0]
  }catch(error){
    console.log(error)
    return []
  }
}