const Sequelize = require("sequelize");
const db = require("../db");

const Books = db.define(
  "books",
  {
    title: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    publisher: {
      type: Sequelize.STRING
    },
    isbn_10: {
      type: Sequelize.STRING,
      allowNull: true
    },
    isbn_13: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {}
);

module.exports = Books;

// TODO: instance methods, class methods, associations
