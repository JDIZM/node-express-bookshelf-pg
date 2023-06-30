const Article = require("../models/Article.model");

const fetchArticle = async (req, res) => {
  try {
    const article = await Article.where({ id: req.params.id }).fetch();
    return res.status(200).json(article);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const fetchAllArticles = async (req, res) => {
  try {
    const articles = await Article.fetchAll();
    return res.status(200).json(articles.models);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const fetchUserByArticleId = async (req, res) => {
  try {
    const article = await Article.where({ id: req.params.id }).fetch({
      withRelated: ["user"],
    });
    return res.status(200).json(article.related("user"));
  } catch (err) {
    return res.status(400).json(err);
  }
};

const createArticle = async (req, res) => {
  try {
    const article = new Article(req.body).save();
    return res.status(201).json(article);
  } catch (err) {
    return res.sendStatus(400).json(err);
  }
};

module.exports = {
  fetchArticle,
  fetchAllArticles,
  fetchUserByArticleId,
  createArticle,
};
