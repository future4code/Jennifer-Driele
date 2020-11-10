import { Request, Response } from "express"
import { createActor} from "../data/createActor"

export const getCreateActor = async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.salary
      );
  
      res.status(200).send();
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };