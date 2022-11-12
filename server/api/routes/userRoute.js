module.exports = (server) => {
  const userController = require("../controllers/userController");
  const { checkRole } = require("../middlewares/jwtMiddleware");

  server.post("/user/register", userController.userRegister);
  server.post("/user/login", userController.loginRegister);
  server.get("/user", userController.getUsers);
  server.delete("/user", userController.deleteAll);
  server.get("/user/checkRole", checkRole, userController.isAdmin);
};
