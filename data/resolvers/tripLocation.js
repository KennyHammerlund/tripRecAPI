import { models } from "../../data/model";
export default {
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
