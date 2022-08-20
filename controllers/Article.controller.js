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

module.exports = { fetchArticle, fetchAllArticles };
