import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblUser", {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "UserID"
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "FirstName"
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "LastName"
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "Email"
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "Password"
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "DisplayName"
    },
    imageId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "ImageID"
    }
  });
};
