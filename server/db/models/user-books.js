const Sequelize = require("sequelize");
const db = require("../db");

const UserBooks = db.define(
  "userBooks",
  {
    book_id: {
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    }
  },
  {}
);

module.exports = UserBooks;

// TODO: instance methods, class methods, associations
