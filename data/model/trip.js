import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblTrip", {
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
};
