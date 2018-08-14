const Sequelize = require('sequelize');
const db = require('../db');

const Shipments = db.define('shipments', {
  tracking_number: {
    type: Sequelize.STRING,
    allowNull: true
  },
  sending_user_id: {
    type: Sequelize.INTEGER,
  },
  receiving_user_id: {
    type: Sequelize.INTEGER,
  }
}, {

});

module.exports = Shipments;

// TODO: instance methods, class methods, hooks
// TODO: foreign keys
