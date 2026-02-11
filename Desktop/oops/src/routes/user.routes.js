const express = require("express");
const UserController = require("../controller/user.controller");

class UserRoutes {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", UserController.createUser);
    this.router.get("/", UserController.getUsers);
  }
}

module.exports = new UserRoutes().router;
