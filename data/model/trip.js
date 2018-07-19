import Sequelize from "sequelize";
import userTrip from "./userTrip";

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("tblTrip", {
    tripId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "TripID"
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "Title"
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "Description"
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "UserID",
      references: {
        model: "tblUsers",
        key: "UserID"
      }
    }
  });

  return model;
};
