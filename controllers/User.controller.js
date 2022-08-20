// methods for the User model
const bookshelf = require("../services/bookshelf");
const User = require("../models/User.model");

const fetchUser = async function (req, res) {
  User.where({ Id: req.params.id })
    .fetch()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(500).json(err));
};

const fetchAllUsers = async function (req, res) {
  User.fetchAll()
    .then((user) => {
      // close connection; breaks the app
      // bookshelf.knex.destroy();
      return res.json(user.models);
    })
    .catch((err) => res.status(500).json(err));
};

const createUser = async function (req, res) {
  try {
    new User(req.body).save().then((model) => res.json(model));
  } catch (err) {
    return res.sendStatus(500);
  }
};

const updateUser = async function (req, res) {
  new User()
    .where({ Id: req.params.id })
    .save(req.body, {
      method: "update",
      patch: true,
    })
    .then((model) => {
      console.log("updateUser", req.params.id, req.body);
      res.json(model);
    })
    .catch((err) => {
      console.error(`updateUser error: 500 ${err.message}`);
      return res.status(500).json(err);
    });
};

const removeUser = async function (req, res) {
  console.log("removeUser");
  return res.sendStatus(200);
};

module.exports = {
  fetchUser,
  fetchAllUsers,
  createUser,
  updateUser,
  removeUser,
};
