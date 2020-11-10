import { Request, Response } from "express";
import { createsignup } from "../data/createsignup";
import { generateToken } from "../services/authenticator";
import {generateId} from "../services/idGenerator";

export const createUserSignup = async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === 1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password ||  req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    // const userData = {
    //   email: req.body.email,
    //   password: req.body.password,
    // };

    const id = generateId();

  
    await createsignup(id,  req.body.email,req.body.password );

    const token = generateToken({
      id
    });

    res.status(200).send({
        token:generateToken ({id})
    });
  } catch (err) {
    res.status(400).send({
      message: err.message || err.sqlMessage
    });
  }
};