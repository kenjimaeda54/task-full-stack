import { ITasksModel, TasksModel } from "../models/TasksModel";
import { Response, Request } from "express";
import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";
import { Condition, Document } from "mongoose";

const current = new Date();

class TasksController {
  async store(req: Request, res: Response) {
    const body = req.body;
    console.log("entrou no body", body);
    const { id, created, type, title, when, done, description } =
      await TasksModel.create(body);
    return res
      .status(200)
      .json({ id, description, created, type, title, when, done });
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
    //este campo tem que ser o mesmo que esta em roter.get("/search/macaddress/:macaddress")
    const macaddressBody = req.params.macaddress as unknown as (
      | string
      | RegExp
    )[];

    const tasks = await TasksModel.find({
      //in e importante para garantir que so os que contem esse parametro
      macaddress: { $in: macaddressBody },
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
    const macaddressBody = req.params.macaddress as unknown as (
      | string
      | RegExp
    )[];

    const tasks = await TasksModel.find({
      //in e importante para garantir que apenas usuario
      //que contem  o macaddress vai ver suas tarefas
      macaddress: { $in: macaddressBody },
      //lt e menos que
      //nao preciso transformar  em data,porque current ja e data
      when: { $lt: current },
    })
      .sort({ when: "desc" })
      .select([
        "id",
        "description",
        "created",
        "type",
        "title",
        "when",
        "done",
      ]);

    return res.status(200).json(tasks);
  }

  async todayTasks(req: Request, res: Response) {
    const macaddressBody = req.params.macaddress as unknown as (
      | string
      | RegExp
    )[];
    const tasks = await TasksModel.find({
      macaddress: { $in: macaddressBody },
      //$gte e maior ou igual
      when: { $gte: startOfDay(current), $lte: endOfDay(current) },
    })
      .sort({ when: "desc" })
      .select([
        "id",
        "description",
        "created",
        "type",
        "title",
        "when",
        "done",
      ]);
    return res.status(200).json(tasks);
  }

  async weekTask(req: Request, res: Response) {
    const macaddressBody = req.params.macaddress as unknown as (
      | string
      | RegExp
    )[];
    const tasks = await TasksModel.find({
      macaddress: { $in: macaddressBody },
      //$gte e maior ou igual
      when: { $gte: startOfWeek(current), $lte: endOfWeek(current) },
    })
      .sort({ when: "desc" })
      .select([
        "id",
        "description",
        "created",
        "type",
        "title",
        "when",
        "done",
      ]);
    return res.status(200).json(tasks);
  }
  async monthTask(req: Request, res: Response) {
    const macaddressBody = req.params.macaddress as unknown as (
      | string
      | RegExp
    )[];
    const tasks = await TasksModel.find({
      macaddress: { $in: macaddressBody },
      //$gte e maior ou igual
      when: { $gte: startOfMonth(current), $lte: endOfMonth(current) },
    })
      .sort({ when: "desc" })
      .select([
        "id",
        "description",
        "created",
        "type",
        "title",
        "when",
        "done",
      ]);
    return res.status(200).json(tasks);
  }
  async yearTask(req: Request, res: Response) {
    const macaddressBody = req.params.macaddress as unknown as (
      | string
      | RegExp
    )[];
    const tasks = await TasksModel.find({
      macaddress: { $in: macaddressBody },
      //$gte e maior ou igual
      when: { $gte: startOfYear(current), $lte: endOfYear(current) },
    })
      .sort({ when: "desc" })
      .select([
        "id",
        "description",
        "created",
        "type",
        "title",
        "when",
        "done",
      ]);
    return res.status(200).json(tasks);
  }
}
export default new TasksController();
