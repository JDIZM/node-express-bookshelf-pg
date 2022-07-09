// bookshelf with knex

// Setting up the database connection
const knex = require('knex')({
    client: 'postgres',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'example',
      database : 'postgres',
      charset  : 'utf8'
    }
  })

// elsewhere, to use the bookshelf client:
// const bookshelf = require('../services/bookshelf')
module.exports = require('bookshelf')(knex)