const bookshelf = require("../services/bookshelf");

const User = bookshelf.model("User", {
  tableName: "user",
  articles() {
    // https://bookshelfjs.org/api.html#Model-instance-hasMany
    return this.hasMany("Article", "user_email", "email");
  },
});

module.exports = User;
