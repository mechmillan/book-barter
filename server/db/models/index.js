const User = require("./user");
const UserRating = require("./user-rating");
const Shipments = require("./shipments");
const WantedBooks = require("./wanted-books");
const UserBooks = require("./user-books");
const Messages = require("./messages");
const Books = require("./books");

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  UserRating,
  Shipments,
  WantedBooks,
  UserBooks,
  Messages,
  Books
};
