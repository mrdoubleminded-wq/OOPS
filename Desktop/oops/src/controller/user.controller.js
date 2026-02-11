const userService = require("../services/user.service");

class UserController {
  createUser(req, res) {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
  }

  getUsers(req, res) {
    const users = userService.getUsers();
    res.json(users);
  }
}
module.exports = new UserController();
