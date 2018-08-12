import { models } from "../../data/model";
import Sequelize from "sequelize";

export default {
  Query: {
    location: (obj, { id, lat, long }) =>
      models.location.findOne({
        where: { locationId: id }
      }),
    findNearbyLocations: (obj, { lat, long }) => {
      return models.location.findAll({
        where: {
          lat: { [Sequelize.Op.between]: [lat - 0.0001, lat + 0.001] },
          long: { [Sequelize.Op.between]: [long - 0.0001, long + 0.001] }
        }
      });
    }
  },
  Image: {
    location: (obj, { id }) => {
      console.log(obj.locationId);
      return models.location.findOne({
        where: { locationId: obj.locationId }
      });
    }
  },
  Location: {
    id: (obj, args) => {
      console.log(obj);
      return obj.tripLocationId;
    },
    name: (obj, args) => obj.name,
    lat: (obj, args) => obj.lat,
    long: (obj, args) => obj.long,
    stockImage: (obj, args) => {
      return models.image.findOne({
        where: {
          locationId: obj.locationId,
          isPrimary: true
        }
      });
    },
    userImages: (obj, args) => {
      return models.image.findAll({
        where: {
          locationId: obj.locationId
        }
      });
    }
  },
  Stop: {
    id: (obj, args) => obj.userTripLocation.id,
    name: (obj, args) => {
      return obj.userTripLocation[0].tripLocation.name || null;
    },
    stockImage: (obj, args) => {
      return models.image.findOne({
        where: {
          locationId: obj.userTripLocation[0].tripLocation.locationId,
          isPrimary: true
        }
      });
    },
    userImages: (obj, args) => {
      return models.image.findAll({
        where: {
          locationId: obj.userTripLocation[0].tripLocation.locationId
        }
      });
    },
    comment: (obj, args) => {
      return obj.comment;
    },
    userTrip: (obj, args) => {
      return models.userTrip.findOne({
        where: { userTripId: obj.userTripId }
      });
    }
  }
};
