const bookshelf = require('./services/bookshelf')
// console.log('bookshelf', bookshelf)

// models
const Post = require('./models/Post.model')
const User = require('./models/User.model')

// fetch all users using the model 
// when to use controller?
User.fetchAll().then(user => console.log(user.models))