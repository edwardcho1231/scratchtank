const db = require('../models/model');

const fishController = {};

fishController.fetchFishes = (req, res, next) => {
  const user_id = req.user[0].user_id;
  const text = `INSERT INTO users_in_fishes(user_id, fish_id) VALUES (${user_id}, 1)`
  db.query(text)
  .then((data) => next())
  .catch(e => next(e))
}

module.exports = fishController;