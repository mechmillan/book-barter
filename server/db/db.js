const Sequelize = require("sequelize");
const pkg = require("../../package.json");
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

// if deploying on Heroku
dbLocation = process.env.DATABASE_URL || "postgres://localhost:5432/test1";

const db = new Sequelize(dbLocation, { logging: false });

module.exports = db;
