import { models } from "../../data/model";
import moment from "moment";

export default {
  Query: {
    trip: (obj, { id }) => {
      return models.trip.findOne({
        where: { tripId: id }
      });
    },

    allTrips: (obj, { id, userID }) => {
      let whereQuery = id
        ? {
            where: {
              tripId: id
            }
          }
        : {};

      return models.trip.findAll(whereQuery);
    }
  },
  Trip: {
    id: (obj, args) => obj.tripId,
    title: (obj, args) => obj.title,
    date: (obj, args) => moment(obj.date).format(),
    createdBy: ({ userId }, args) =>
      models.user.findOne({
        where: { userId: userId }
      }),
    userTrips: async ({ tripId }, args) => {
      const trips = await models.userTrip.findAll({
        where: { tripId: tripId }
      });
      return trips.length === 0 ? null : trips;
    }
    // stops: ({ tripId }, args) => {
    //   return models.tripLocation.findAll({
    //     where: { tripId: tripId },
    //     required: true,
    //     include: {
    //       model: models.location,
    //       as: "tripLocation"
    //     }
    //   });
    // }
  }
};
