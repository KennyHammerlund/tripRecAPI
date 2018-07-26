import { models } from "../../data/model";
export default {
  Query: {
    location: (obj, { id }) => {
      return models.location.findOne({
        where: { locationId: id }
      });
    }
  },
  Image: {
    location: (obj, { id }) => {
      return models.tripLocation.findOne({
        where: { tripLocationId: obj.tripLocationId },
        include: {
          model: models.location,
          as: "tripLocation"
        }
      });
    }
  },
  Trip: {
    stops: (obj, { id }) => {
      return models.tripLocation.findAll({
        where: { userTripId: obj.userTripId },
        include: {
          model: models.location,
          as: "tripLocation"
        }
      });
    }
  },
  Location: {
    id: (obj, args) => obj.tripLocationId,
    name: (obj, args) => obj.tripLocation.name,
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
  }
};
