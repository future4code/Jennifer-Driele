import { connection } from "..";


export const searchMovie = async (term: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movie 
      WHERE title LIKE '%${term}%' OR synposis LIKE '%${term}%'
      ORDER BY release_date
    `);
  
    return result[0];
  };
  