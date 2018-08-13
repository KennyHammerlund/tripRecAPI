import { models } from "../../data/model";
export default {
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
  UserTrip: {
    stops: (obj, { id }) => {
      return models.tripLocation.findAll({
        where: { userTripId: obj.userTripId },
        include: {
          model: models.location,
          as: "tripLocation"
        }
      });
    }
  }
};
