const userRouter = require('express').Router();
const { User } = require('../db/models');

// route -> /api/users/:id
userRouter.post('/', (req, res, next) => {
  let name = req.body.name;

  User.create({
    name: name
  })
    .then(createdUser => {
      res.status(200).send(createdUser);
    })
    .catch(err => console.log(err));
});

module.exports = userRouter;
