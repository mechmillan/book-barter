const Sequelize = require('sequelize');
const db = require('../db');

const UserRating = db.define("userRating", {
  rated_user_id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true
  },
  rater_user_id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true
  },
  value: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  }
}, {
  timestamps: true
});

module.exports = UserRating;

// TODO: instance methods, class methods, hooks
