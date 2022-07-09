const bookshelf = require('../services/bookshelf')

const Post = bookshelf.model('Post', {
  tableName: 'Post'
})

module.exports = Post;
