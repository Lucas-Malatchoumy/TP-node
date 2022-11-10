module.exports = (server) => {
  const postController = require("../controllers/postController");
  const { verifyToken, checkRole } = require("../middlewares/jwtMiddleware");
  server
    .route("/posts")
    .get(postController.listAllPosts)
    .post(postController.createAPost)
    .delete(postController.deleteAll);

  server
    .route("/posts/:post_id")
    .all(verifyToken)
    .get(postController.getAPost)
    .put(postController.updateAPost)
    .delete(postController.deleteApost);
};
