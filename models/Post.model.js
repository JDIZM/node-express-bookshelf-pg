const bookshelf = require("../services/bookshelf");

const Post = bookshelf.model("Post", {
  tableName: "post",
});

module.exports = Post;
