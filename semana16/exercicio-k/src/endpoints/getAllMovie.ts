import { Request, Response } from "express"
import { allMovies } from "../data/allMovies";

export const getAllMovie = async (req: Request, res: Response) => {
    try {
      const movies = await allMovies();
  
      res.status(200).send({
        movies: movies,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };