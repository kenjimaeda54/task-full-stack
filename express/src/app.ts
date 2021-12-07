import Express from "express";
require("dotenv").config();
import "express-async-errors";
import mongoose from "mongoose";
import taskRouter from "./routes/taskRouter";
import handleErros from "./middleware/handleError";

class App {
  app: any;
  constructor() {
    this.app = Express();
    this.middleware();
    this.routes();
    mongoose.connect(process.env.CONNECT_STRING).then(() => {
      this.app.emit("appStarted", console.log("Mongo connected"));
    });
  }
  middleware() {}

  routes() {
    this.app.use(Express.json());
    this.app.use(Express.urlencoded({ extended: true }));
    this.app.use("/tasks", taskRouter);
    this.app.use(handleErros);
  }
}

export default new App().app;
