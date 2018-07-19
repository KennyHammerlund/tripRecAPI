import { models } from "../../data/model";
export default {
  Query: {
    trip: (obj, { id }) => {
      return models.userTrip.findOne({
        where: { userTripId: id },
        include: {
          model: models.trip,
          as: "userTrip"
        }
      });
    }
  },
  Trip: {
    id: (obj, args) => obj.userTripId,
    title: (obj, args) => obj.userTrip.title,
    description: (obj, args) => obj.userTrip.description
  }
};
