// eslint-disable-next-line import/order
const knexfile = require("../knexfile")[process.env.NODE_ENV];

// Setting up the database connection
const knex = require("knex")(knexfile);

// eslint-disable-next-line no-console
console.log("knex config:", knex.context.client.config);

// elsewhere, to use the bookshelf client:
// const bookshelf = require('../services/bookshelf')
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;
