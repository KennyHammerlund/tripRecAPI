import Sequelize from "sequelize";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblTripLocation", {
    tripLocationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "TripLocationId"
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
    comments: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "Comments"
    },
    userTripId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "UserTripID",
      references: {
        model: "tblUserTrips",
        key: "UserTripID"
      }
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "Date",
      defaultValue: Sequelize.NOW
    }
  });
};
