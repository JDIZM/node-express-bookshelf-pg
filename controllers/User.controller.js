const User = require("../models/User.model");

const fetchUser = async (req, res) => {
  try {
    const user = await User.where({ id: req.params.id }).fetch();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.fetchAll();
    return res.status(200).json(users.models);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const fetchArticlesByUserId = async (req, res) => {
  try {
    const user = await User.where({ id: req.params.id }).fetch({
      withRelated: ["articles"],
    });
    return res.status(200).json(user.related("articles"));
  } catch (err) {
    return res.status(400).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.where({ id: req.params.id }).save(req.body, {
      method: "update",
      patch: true,
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const removeUser = async (req, res) => res.sendStatus(200);

module.exports = {
  fetchUser,
  fetchAllUsers,
  fetchArticlesByUserId,
  createUser,
  updateUser,
  removeUser,
};
