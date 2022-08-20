// bookshelf with knex

// knex config can be replaced by a knexfile
// const config = {
//   client: "postgres",
//   connection: {
//     host: "127.0.0.1",
//     user: "postgres",
//     password: "example",
//     database: "postgres",
//     charset: "utf8",
//   },
// };

const knexfile = require("../knexfile")[process.env.NODE_ENV];

// Setting up the database connection
const knex = require("knex")(knexfile);

console.log("knex config:", knex.context.client.config);

// elsewhere, to use the bookshelf client:
// const bookshelf = require('../services/bookshelf')
const bookshelf = require("bookshelf")(knex);
module.exports = bookshelf;
