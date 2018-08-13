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
models.location.belongsToMany(models.tripLocationOrder, {
  as: "Location_Order",
  through: "locationToOrder"
});
models.tripLocationOrder.belongsToMany(models.location, {
  as: "Order_Location",
  through: "locationToOrder"
});
models.trip.belongsToMany(models.tripLocationOrder, {
  as: "Trip_Order",
  through: "tripToOrder"
});
models.tripLocationOrder.belongsToMany(models.trip, {
  as: "Order_Trip",
  through: "tripToOrder"
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db, models };
