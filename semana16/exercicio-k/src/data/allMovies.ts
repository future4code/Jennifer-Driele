import { connection} from "../index";


export const allMovies = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movie 
    `);
  
    return result[0];
  };