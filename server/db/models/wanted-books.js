const Sequelize = require('sequelize');
const db = require('../db');

const WantedBooks = db.define('wantedBooks', {
  book_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  }
}, {

});

module.exports = WantedBooks;

// TODO: instance methods, class methods, hooks, foreign key rels
