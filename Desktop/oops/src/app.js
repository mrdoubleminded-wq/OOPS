const express = require("express");
const userRoutes = require("./routes/user.routes.js");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/users", userRoutes);
  }
}

module.exports = new App().app;
