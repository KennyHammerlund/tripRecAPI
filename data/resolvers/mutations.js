import { models } from "../../data/model";
import moment from "moment";

export default {
  Mutation: {
    CreateTrip: async (_, { title, description, userId, comment }) => {
      if (title === "" || description === "" || comment === "") return false;

      const insert = models.trip
        .upsert({
          title,
          description,
          userId
        })
        .then(() => {
          const row = models.trip.findOne({
            where: {
              title,
              description,
              userId
            }
          });
          return row;
        })
        .then(row => {
          const date = moment.utc().format();
          const insertUserTrip = models.userTrip.upsert({
            comment,
            tripId: row.tripId,
            userId,
            date,
            isActive: 1
          });
          return row.tripId;
        })
        .then(id => {
          var userRow = models.userTrip.findOne({
            where: {
              comment,
              tripId: id,
              userId
            }
          });
          return userRow;
        })
        .then(row => {
          if (row) {
            return true;
          }
          return false;
        });

      return insert;
    }
  }
};
