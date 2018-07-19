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
      return models.location.findOne({
        where: { locationId: obj.locationId }
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
    id: (obj, args) => obj.locationId,
    name: (obj, args) => obj.tripLocation.name,
    lat: (obj, args) => obj.tripLocation.lat,
    long: (obj, args) => obj.tripLocation.long,
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
