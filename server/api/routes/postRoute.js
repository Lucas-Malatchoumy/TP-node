module.exports = (server) => {
  const postController = require("../controllers/postController");
  const { verifyToken } = require("../middlewares/jwtMiddleware");
  server
    .route("/posts")
    .get(postController.listAllPosts)
    .post(verifyToken, postController.createAPost);

  server
    .route("/posts/:post_id")
    .all(verifyToken)
    .get(postController.getAPost)
    .put(postController.updateAPost)
    .delete(postController.deleteApost);
};
