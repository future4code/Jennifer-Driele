import { Request, Response } from "express"
import { createUser } from "../data/createUser";



export const getCreateUser = async (req: Request, res: Response) => {
    try {
       if(!req.body.name ||
        !req.body.nickname ||
        !req.body.email
        ){
            res.status(400)
            .send("Digite todos os campos!")
        }
     const id:string = Date.now( ) + Math.random() . toString()
      await createUser(
          id,
          req.body.name,
          req.body.nickname,
          req.body.email
      );
  
      res.status(200).send("Usuário criado com sucesso!");
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };



// export const getCreateUser = async (req: Request, res: Response) => {
//     try {
//         const {id,name,nickname,email} = req.body;
//         if(!(id && name && nickname && email)){
//             throw new Error ("Digite todos os campos!")
//         }
//      const users= await createUser(id,name,nickname,email);
  
//       res.status(200).send("Usuário criado com sucesso!");
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   };


