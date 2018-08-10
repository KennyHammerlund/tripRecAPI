import { models } from "../../data/model";
import moment from "moment";
export default {
  Query: {
    userTrip: (obj, { id }) => {
      return models.userTrip.findOne({
        where: { userTripId: id }
      });
    }
  },
  UserTrip: {
    id: (obj, args) => obj.userTripId,
    trip: (obj, args) =>
      models.trip.findOne({
        where: { tripId: obj.tripId }
      }),
    date: (obj, args) => moment(obj.date).format(),
    comments: (obj, args) => obj.comment,
    user: obj =>
      models.user.findOne({
        where: { userId: obj.userId }
      })
  }
};
