import { Request, Response } from "express";
import {userById} from "../data/userById";
import { getData } from "../services/authenticator";
import { USER_ROLES } from "../types/types";


export const getUserById =async(
   req: Request,
   res: Response
) =>{
    try {
        const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    if (authenticationData.role !== USER_ROLES.NORMAL) {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await userById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
   
}

