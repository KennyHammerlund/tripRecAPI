import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblUser", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    imageId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null
    }
  });
};
