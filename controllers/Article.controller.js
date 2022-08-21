const Article = require("../models/Article.model");
const bookshelf = require("../services/bookshelf");

const fetchArticle = async function (req, res) {
  Article.where({ id: req.params.id })
    .fetch()
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((err) => res.status(500).json(err));
};

const fetchAllArticles = async function (req, res) {
  Article.fetchAll()
    .then((article) => {
      // close connection; breaks the app
      // bookshelf.knex.destroy();
      return res.status(200).json(article.models);
    })
    .catch((err) => res.status(500).json(err));
};

const fetchArticleUser = async function (req, res) {
  console.log("fetchArticleUser");
  Article.where({ id: req.params.id })
    .fetch({ withRelated: ["user"] })
    .then((article) => {
      return res.status(200).json(article.related("user"));
    })
    .catch((err) => res.sendStatus(500).json(err));
};

const createArticle = async function (req, res) {
  try {
    new Article(req.body).save().then((model) => res.status(201).json(model));
  } catch (err) {
    return res.sendStatus(500).json(err);
  }
};

module.exports = {
  fetchArticle,
  fetchAllArticles,
  fetchArticleUser,
  createArticle,
};
