import fs from "fs";
import path from "path";
import Sequelize from "Sequelize";
import config from "../config/config";
var env = process.env.NODE_ENV || "development";

console.log(config.options);
let db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options
);

var models = require("sequelize-import")(__dirname, sequelize, {
  exclude: ["index.js"]
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
