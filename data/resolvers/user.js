import { models } from "../../data/model";
export default {
  Query: {
    user: (obj, { id }) => {
      return models.user.findOne({
        where: { userId: id }
      });
    },
    userTrip: (obj, { id }) => {
      return models.userTrip.findOne({
        where: { userTripId: id }
      });
    },
    location: (obj, { id }) => {
      return models.location.findOne({
        where: { locationId: id }
      });
    },
    image: (obj, { id }) => {
      return models.image.findOne({
        where: { imageId: id }
      });
    },
    trip: (obj, { id }) => {
      return models.trip.findOne({
        where: { tripId: id }
      });
    }
  }
};
