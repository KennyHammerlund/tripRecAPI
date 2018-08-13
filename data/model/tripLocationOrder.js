import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblTripLocationOrder", {
    locationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "TripLocationOrderID"
    },
    locationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "LocationID",
      references: {
        model: "tblLocations",
        key: "LocationID"
      }
    },
    tripId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "TripID",
      references: {
        model: "tblTrips",
        key: "TripID"
      }
    },
    order: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "Order"
    }
  });
};
