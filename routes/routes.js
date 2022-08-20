// api routes

const {
  createUser,
  fetchUser,
  fetchAllUsers,
  updateUser,
  removeUser,
} = require("../controllers/User.controller");

const {
  fetchArticle,
  fetchAllArticles,
} = require("../controllers/Article.controller");

// example route controller
const routeController = function (req, res) {
  console.log("routeHandler");
  res.sendStatus(200);
};

// pass express router object
module.exports = function (router) {
  router.get("/", routeController);
  // users
  router.get("/users/:id", fetchUser);
  router.get("/users", fetchAllUsers);
  router.post("/users/create", createUser);
  router.patch("/users/:id", updateUser);
  router.delete("/users/:id", removeUser);
  // articles
  router.get("/articles/:id", fetchArticle);
  router.get("/articles", fetchAllArticles);
};
