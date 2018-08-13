import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tblLocationToOrder", {
    locationToOrderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "LocationToOrderID"
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
    tripLocationOrderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "TripLocationOrderID",
      references: {
        model: "tblTripLocationOrders",
        key: "TripLocationOrderID"
      }
    }
  });
};
