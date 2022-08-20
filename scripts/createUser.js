const bookshelf = require("../services/bookshelf");
const User = require("../models/User.model");

const insertUser = (callback) => {
  // create a new entry in Article table
  new User({
    email: "fred@flintstones.com",
    first_name: "Fred",
    last_name: "Flintstone",
  })
    .save()
    .then(function (saved) {
      console.log(saved);
      const insertedId = saved.attributes.id;
      const insertedEmail = saved.attributes.email;
      callback(insertedId, insertedEmail);
    });
};

// insert the user, and when we are done, destroy connection and get the inserted article
insertUser(function (id, email) {
  bookshelf.knex.destroy();
  console.log("inserted user with id: " + id);
  console.log("inserted user with email: " + email);
});
