module.exports = (server) => {
  const userController = require("../controllers/userController");
  const { checkRole } = require("../middlewares/jwtMiddleware");

  server.post("/user/register", userController.userRegister);
  server.post("/user/login", userController.loginRegister);
  server.get("/user", userController.getUser);
  server.get("/user/checkRole", checkRole);
};
