import { Request, Response } from "express"
import { countActor } from "../data/countActor"
import { Actor } from "../types";

export const getActorCount = async(req: Request, res: Response) => {
    try {
      const count:Actor[] = await countActor(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };