import { Request, Response } from "express";
import { deleteUser } from "../../data/user/deleteUser";
import { getTokenData } from "../../services/authenticator";
import { USER_ROLES } from "../../types/types";

export const deleteUserId = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      
  
      const authenticationData = getTokenData(token);
  
      if (authenticationData.role !== USER_ROLES.ADMIN) {
        throw new Error("Only a admin user can access this funcionality");
      }
      
      const id = req.params.id;
  
      await deleteUser(id);
  
      res.status(200).send({
        message:"Usuário apagado com sucesso" 
        
      });

    } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }

  
  };