import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblImage", {
    ImageID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "ImageID"
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
    date: {
      type: Sequelize.DATE,
      allowNull: true,
      field: "Date",
      defaultValue: Sequelize.NOW
    },
    userId: {
      type: Sequelize.INTEGER,
      field: "UserID",
      references: {
        model: "tblUsers",
        key: "UserID"
      }
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "Link"
    },
    locationId: {
      type: Sequelize.INTEGER,
      field: "LocationID",
      allowNull: true,
      references: {
        model: "tblLocations",
        key: "LocationID"
      }
    },
    userTripId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "tblUserTrips",
        key: "UserTripID"
      },
      field: "UserTripID"
    },

    tripLocationID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "tblTripLocations",
        key: "TripLocationID"
      },
      field: "TripLocationID"
    },

    flagged: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: "Flagged"
    },
    isPrimary: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: "IsPrimary"
    }
  });
};
