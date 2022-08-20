const bookshelf = require("../services/bookshelf");

const User = bookshelf.model("User", {
  tableName: "user",
});

module.exports = User;
