const bookshelf = require("../services/bookshelf");

const User = bookshelf.model("User", {
  tableName: "User",
});

module.exports = User;
