import { TasksModel } from "../models/TasksModel";
import { Response, Request } from "express";
import { startOfDay, endOfDay } from "date-fns";

const current = new Date();

class TasksController {
  async store(req: Request, res: Response) {
    const body = req.body;
    console.log("entrou no body", body);
    const { id, created, type, title, when, done } = await TasksModel.create(
      body
    );
    return res.status(200).json({ id, created, type, title, when, done });
  }

  async update(req: Request, res: Response) {
    //new true e para retornar objeto atualizado
    const { id, description, type, title, when, done } =
      await TasksModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
      });

    return res.status(200).json({ id, description, type, title, when, done });
  }

  async index(req: Request, res: Response) {
    const tasks = await TasksModel.find({
      //in e importante para garantir que so os que contem esse parametro
      macaddress: { $in: req.body.macaddress },
    })
      .sort({ when: "desc" })
      .select(["id", "created", "type", "title", "when", "done"]);

    return res.status(200).json(tasks);
  }

  async show(req: Request, res: Response) {
    const tasks = await TasksModel.findById(req.params.id);
    if (tasks) {
      const { id, description, type, title, when, done } = tasks;
      return res.status(200).json({ id, description, type, title, when, done });
    }
    return res.status(404).json({ message: "Task not found" });
  }

  async destroy(req: Request, res: Response) {
    const tasks = await TasksModel.findByIdAndDelete(req.params.id);
    if (tasks) {
      return res.status(200).json({ message: "Task deleted" });
    }
    return res.status(404).json({ message: "Task not found" });
  }

  async updateDone(req: Request, res: Response) {
    const tasks = await TasksModel.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.body.done },
      { new: true }
    );
    if (tasks) {
      const { id, description, type, title, when, done } = tasks;
      return res.status(200).json({ id, description, type, title, when, done });
    }
    return res.status(404).json({ message: "Task not found" });
  }

  async lateTasks(req: Request, res: Response) {
    console.log(current);
    const tasks = await TasksModel.find({
      //in e importante para garantir que apenas usuario
      //que contem  o macaddress vai ver suas tarefas
      macaddress: { $in: req.body.macaddress },
      //lt e menos que
      //nao preciso transformar  em data,porque current ja e data
      when: { $lt: current },
    })
      .sort({ when: "desc" })
      .select(["id", "created", "type", "title", "when", "done"]);

    return res.status(200).json(tasks);
  }

  async todayTasks(req: Request, res: Response) {
    const tasks = await TasksModel.find({
      macaddress: { $in: req.body.macaddress },
      //$gte e maior ou igual
      when: { $gte: startOfDay(current), $lte: endOfDay(current) },
    })
      .sort({ when: "desc" })
      .select(["id", "created", "type", "title", "when", "done"]);
    return res.status(200).json(tasks);
  }
}
export default new TasksController();
