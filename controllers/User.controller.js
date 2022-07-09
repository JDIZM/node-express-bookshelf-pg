// methods for the User model
const bookshelf = require('../services/bookshelf')
const User = require('../models/User.model')

const fetchUser = async function(req, res) {
    console.log('fetchUser', req.params)
    User.where({ Id: req.params.id })
        .fetch().then(user =>{
            res.json(user)
        })
        .catch(err => res.status(500).json(err))
}

const fetchAllUsers = async function(req, res) {
    console.log('fetchAllUsers')
    User.fetchAll()
        .then(user => {
            // close connection; breaks the app
            // bookshelf.knex.destroy();
            return res.json(user.models)
        })
      .catch(err => res.status(500).json(err))
}

const createUser = async function(req, res) {
    console.log('createUser', req.body)
    return res.sendStatus(200)
}

const updateUser = async function(req, res) {
    console.log('updateUser', req.body)
    return res.sendStatus(200)
}


const removeUser = async function(req, res) {
    console.log('removeUser')
    return res.sendStatus(200)
}


module.exports = {
    fetchUser,
    fetchAllUsers,
    createUser,
    updateUser,
    removeUser
}