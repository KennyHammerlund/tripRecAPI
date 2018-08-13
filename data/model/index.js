import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import config from "../config/config";

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

//**DEFINE SEQUELIZE RELATIONSHIPS HERE
//
models.trip.hasMany(models.userTrip, {
  as: "userTrips",
  foreignKey: "userTripId"
});
models.userTrip.belongsTo(models.trip, {
  as: "userTrip",
  foreignKey: "userTripId"
});
models.location.hasMany(models.tripLocation, {
  as: "tripLocations",
  foreignKey: "locationId"
});
models.tripLocation.belongsTo(models.location, {
  as: "tripLocation",
  foreignKey: "locationId"
});
models.userTrip.hasMany(models.tripLocation, {
  as: "userTripLocation",
  foreignKey: "userTripId"
});
models.tripLocationOrder.hasMany(models.tripLocation, {
  as: "tripLocationOrderTrips",
  foreignKey: "tripId"
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db, models };
