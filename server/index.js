const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const app = express();
const db = require("./db");
const session = require("express-session");
const passport = require("passport");
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  require('../secrets');
}

// logging middleware
app.use(morgan("dev"));

// handle serving static files off a public directory
app.use(express.static(path.join(__dirname, "..", "public")));

// parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// compression middleware
app.use(compression());

// configure and create db store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dbStore = new SequelizeStore({ db: db });

// sync so session table gets created
dbStore.sync();

// session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "unsecure",
    store: dbStore,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

// passport registration
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  db.models.user
    .findById(id)
    .then(user => done(null, user))
    .catch(done);
});

// mount routes
app.use("/auth", require("./auth"));
app.use("/api", require("./apiRoutes"));

// after all routes in server entry file
// send index.html for any requests that don't match our API routes
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling if anything has made it this far!
// note express recognizes 4 passed in params as error-handling func
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// start the server
// useful if deploying to heroku to use process envs
const PORT = process.env.PORT || 3000;

// { force: true } to wipe db
db.sync().then(() =>
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
);
