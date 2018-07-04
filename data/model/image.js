import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblImage", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "(null)"
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "(null)"
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: "(null)"
    },
    userID: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "(null)"
    },
    link: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "(null)"
    },
    locationID: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "(null)"
    },
    tripID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: "(null)"
    },
    tripLocationID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: "(null)"
    },
    flagged: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: "(null)"
    },
    isPrimary: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: "(null)"
    }
  });
};
