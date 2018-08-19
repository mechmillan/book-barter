const Sequelize = require("sequelize");
const db = require("../db");

const Messages = db.define("messages", {
  title: {
    type: Sequelize.STRING,
  },
  sender_user_id: {
    type: Sequelize.INTEGER,
  },
  receiver_user_id: {
    type: Sequelize.INTEGER,
  },
  body: {
    type: Sequelize.TEXT,
  },
  convo_id: {
    type: Sequelize.INTEGER,
  }
}, {
  timestamps: true,
});

module.exports = Messages;

// TODO: instance methods, class methods, instance methods
