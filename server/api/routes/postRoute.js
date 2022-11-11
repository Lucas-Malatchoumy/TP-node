module.exports = (server) => {
  const postController = require("../controllers/postController");
  const { verifyToken, checkRole } = require("../middlewares/jwtMiddleware");
  server
    .route("/posts")
    .get(verifyToken, postController.listAllPosts)
    .post(checkRole, postController.createAPost)
    .delete(postController.deleteAll);
};
