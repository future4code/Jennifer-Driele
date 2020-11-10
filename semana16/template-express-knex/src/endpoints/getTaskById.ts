import { selecTaskById } from "../data/selectTaskById";
import {Request ,Response} from "express";
import moment from "moment";

export const getTaskById = async (req: Request, res: Response) => {
    try {
        const result = await selecTaskById(req.params.id)
        if(!result){
            res.status(404).send({
                message:"Tarefa não encontrada"
            })
            return
        }
        res.status(200).send({
           id:result.id,
           title:result.title,
           description:result.description,
           deadline:moment(result.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY'),
           status:result.status,
           authorid:result.author_id,
           authorNickname:result.authorNickname
           //authorid:result.author_id
        })
        
    } catch (err) {
      res.status(400).send({
        message: err.message || err.sqlMessage
      });
    }
  };