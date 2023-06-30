const User = require("../models/User.model");
const Article = require("../models/Article.model");

// test belongsTo one-to-one
Article.where({ id: 1 })
  .fetch({ withRelated: ["user"] })
  .then((article) => {
    console.log(
      "one to one: article to user",
      JSON.stringify(article.related("user"))
    );
  })
  .catch((err) => console.log(err));

// test hasMany one-to-many
User.where({ id: 1 })
  .fetch({ withRelated: ["articles"] })
  .then((user) => {
    console.log(
      "one to many: user to articles",
      JSON.stringify(user.related("articles"))
    );
    process.exit(0);
  })
  .catch((err) => console.log(err));
