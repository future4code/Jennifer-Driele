import { Request, Response } from "express";
import moment from "moment";
import { insertUserTask } from "../data/insertUserTask";




export const getTaskUser = async (req: Request, res: Response) => {
    try {
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.deadline ||
            !req.body.authorid 
        ){
          res.status(400).send({
              message:'"title", "description", "deadline", "authorid" são obrigatorios'
          }) 
          return
        }
        const dateDiff: number = moment(req.body.deadline, "DD/MM/YYYY").unix()-moment().unix()
        if(dateDiff <= 0){
            res.status(400).send({
                message:'"deadline", deve ser uma data futura!'

        })
      return
    }
    const id:string = Date.now() + Math.random().toString()
    await insertUserTask(
        id,
        req.body.title ,
        req.body.description ,
        moment(req.body.deadline,'DD/MM/YYYY').format('YYYY-MM-DD'),
        req.body.authorid ,
    )
     res.status(200).send({
         message:"Tarefa criada com sucesso!",
         id
     })
     
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };