import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblLocation", {
    locationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "LocationID"
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "Name"
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "Description"
    },

    lat: {
      type: Sequelize.FLOAT,
      allowNull: false,
      field: "lat"
    },
    long: {
      type: Sequelize.FLOAT,
      allowNull: false,
      field: "Long"
    }
  });
};
