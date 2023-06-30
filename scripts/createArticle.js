const bookshelf = require("../services/bookshelf");
const Article = require("../models/Article.model");

// const insertArticle = (callback) => {
//   // create a new entry in Article table
//   new Article({
//     title: "Sample title",
//     body: "Sample body",
//     created_at: "2022-09-20T18:51:48Z",
//     updated_at: "2022-09-20T19:51:48Z",
//     user_email: "fred@flintstones.com",
//   })
//     .save()
//     .then(function (saved) {
//       console.log(saved);
//       const insertedId = saved.attributes.id;

//       callback(insertedId);
//     });
// };

// insert the article, and when we are done, destroy connection and get the inserted article
// insertArticle(function (id) {
//   bookshelf.knex.destroy();
//   console.log("inserted article with id: " + id);
// });

const insertArticle = async () => {
  // create a new entry in Article table
  try {
    const article = await new Article({
      title: "Sample title",
      body: "Sample body",
      created_at: "2022-09-20T18:51:48Z",
      updated_at: "2022-09-20T19:51:48Z",
      user_email: "fred@flintstones.com",
    }).save();

    console.log("inserted article with id: ", article.attributes.id);
  } catch (err) {
    console.error(err);
  } finally {
    bookshelf.knex.destroy();
  }
};

insertArticle();
