const bookshelf = require("../services/bookshelf");

// create the Article model, it will include all of the attributes of the table.
// the hasTimestamps: true command will automatically populate the created_at and updated_at columns
const Article = bookshelf.Model.extend({
  tableName: "articles",
  hasTimestamps: true,
});

module.exports = Article;
