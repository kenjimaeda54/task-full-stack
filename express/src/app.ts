import Express from "express";
require("dotenv").config();
import mongoose from "mongoose";

class App {
  app: any;
  constructor() {
    this.app = Express();
    this.middleware();
    this.routes();
    mongoose.connect(process.env.CONNECT_STRING).then(() => {
      this.app.emit("appStarted");
    });
  }
  middleware() {}

  routes() {}
}

export default new App().app;
