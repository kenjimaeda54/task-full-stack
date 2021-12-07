import { TasksModel } from "../models/TasksModel";
import { Response, Request } from "express";

class TasksController {
  async store(req: Request, res: Response) {
    const body = req.body;
    console.log("entrou no body", body);
    const { id, created, type, macaddress, title, when, done } =
      await TasksModel.create(body);
    return res
      .status(200)
      .json({ id, created, type, macaddress, title, when, done });
  }

  async update(req: Request, res: Response) {
    //new true e para retornar objeto atualizado
    const { id, description, type, macaddress, title, when, done } =
      await TasksModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
      });

    return res
      .status(200)
      .json({ id, description, type, macaddress, title, when, done });
  }
}
export default new TasksController();
