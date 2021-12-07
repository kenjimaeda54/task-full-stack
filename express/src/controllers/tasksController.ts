import { TasksModel } from "../models/TasksModel";
import { Response, Request } from "express";

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

  async show(req: Request, res: Response) {
    const tasks = await TasksModel.find({
      //in e importante para garantir que so os que contem esse parametro
      macaddress: { $in: req.body.macaddress },
    })
      .sort({ when: "desc" })
      .select(["id", "created", "type", "title", "when", "done"]);

    return res.status(200).json(tasks);
  }
}
export default new TasksController();
