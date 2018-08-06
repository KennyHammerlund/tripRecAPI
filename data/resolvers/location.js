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
    id: (obj, args) => obj.locationId,
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
  }
};
