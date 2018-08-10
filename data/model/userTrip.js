import Sequelize from "sequelize";
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblUserTrip", {
    userTripId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "UserTripId"
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "Comment"
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
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "UserID",
      references: {
        model: "tblUsers",
        key: "UserID"
      }
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: "IsActive",
      defaultValue: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "Date",
      defaultValue: Sequelize.NOW
    }
  });
};
