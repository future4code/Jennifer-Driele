import { Request, Response } from "express";
import { deleteUser } from "../data/deleteUser";
import { userById } from "../data/userById";
import { getData } from "../services/authenticator";
import { USER_ROLES } from "../types/types";

export const deleteUserId = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const userData = await userById(req.body.id);
  
      const authenticationData = getData(token);
  
      if (authenticationData.role !== USER_ROLES.ADMIN) {
        throw new Error("Only a admin user can access this funcionality");
      }

      if(!userData){
          res.statusCode = 404
         throw new Error("User not found")
      }
  
      const id = req.params.id;
  
      await deleteUser(id);
  
      res.status(200).send({
        
      });

    } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }

  
  };