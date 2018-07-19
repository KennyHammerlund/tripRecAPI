import { models } from "../../data/model";
export default {
  Query: {
    userTrip: (obj, { id }) => {
      return models.userTrip.findOne({
        where: { userTripId: id }
      });
    }
  },
  UserTrip: {
    id: (obj, args) => obj.userTripId
  }
};
