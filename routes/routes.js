// api routes

const {
  createUser,
  fetchUser,
  fetchAllUsers,
  fetchArticlesByUserId,
  updateUser,
  removeUser,
} = require("../controllers/User.controller");

const {
  createArticle,
  fetchArticle,
  fetchUserByArticleId,
  fetchAllArticles,
} = require("../controllers/Article.controller");

// example route controller
const routeController = function (req, res) {
  console.log("routeHandler");
  res.sendStatus(200);
};

// pass express router object
module.exports = function routes (router) {
  router.get("/", routeController);
  // users
  router.get("/users/:id", fetchUser);
  router.get("/users", fetchAllUsers);
  router.post("/users/create", createUser);
  router.patch("/users/:id", updateUser);
  router.delete("/users/:id", removeUser);
  router.get("/users/:id/articles", fetchArticlesByUserId);
  // articles
  router.get("/articles/:id", fetchArticle);
  router.get("/articles", fetchAllArticles);
  router.post("/articles/create", createArticle);
  router.get("/articles/:id/user", fetchUserByArticleId);
};
