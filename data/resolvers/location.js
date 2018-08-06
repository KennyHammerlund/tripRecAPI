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
