import { Request, Response, NextFunction } from "express";
import { isPast } from "date-fns";
import { TasksModel } from "../models/TasksModel";

async function taskValidation(req: Request, res: Response, next: NextFunction) {
  const { when, macaddress } = req.body;
  //preciso converter para o formato Date;
  let haveTask = {};

  //cuidado com  await quando for usar o findOne
  //ou alguma coisa do banco de dados
  if (req.params.id) {
    haveTask = await TasksModel.findOne({
      //aqui tambem preciso verificar o id da task
      //porque se eu desejo atualizar os dados da task, preciso passar o id
      //para verificar se estou atualizando a mesma,se for task diferente
      //o when e macaddress serao validadores.
      //$ne verifica os campos que nao sejam o id da task
      //estou dizendo oa findeOne se for id diferente da task e
      //mesmo macaddress,dia me retorna o objeto.
      //Se nao for retorna objeto vazio
      _id: { $ne: req.params.id },
      when: {
        //operador de igualdade
        //precisei transformar em date,porque do request.body
        //vem como string
        $eq: new Date(when),
      },
      macaddress: {
        //operador de contém
        $in: macaddress,
      },
    });
  } else if (isPast(new Date(when))) {
    res.status(400).json({ error: "Task date must be in the future" });
  } else {
    haveTask = await TasksModel.findOne({
      when: {
        //operador de igualdade
        $eq: new Date(when),
      },
      macaddress: {
        //operador de contém
        $in: macaddress,
      },
    });
  }

  if (haveTask) {
    return res.status(400).json({ error: "Task already exists" });
  }
  return next();
}

export default taskValidation;
