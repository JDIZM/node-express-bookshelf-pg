const bookshelf = require("../services/bookshelf");
const Article = require("../models/Article.model");

const insertArticle = (callback) => {
  // create a new entry in Article table
  new Article({
    title: "Sample title",
    body: "Sample body",
  })
    .save()
    .then(function (saved) {
      console.log(saved);
      const insertedId = saved.attributes.id;

      callback(insertedId);
    });
};

// insert the article, and when we are done, destroy connection and get the inserted article
insertArticle(function (id) {
  bookshelf.knex.destroy();
  console.log("inserted article with id: " + id);
});
