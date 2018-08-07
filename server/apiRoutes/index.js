const router = require('express').Router();

// delegate each router into its own namespace
// router.use('/users', require('./users'));
// router.use('/puppies', require('./puppies'));
// router.use('/kittens', require('./kittens'));
router.use('/users', require('./users'));

// error handling for all routes before punting to /server/index.js
router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
