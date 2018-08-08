import { models } from "../../data/model";
import moment from "moment";

export default {
  //CreateTrip(title: String!, description: String!, userId: Int!, comment: String! userId: Int!): Boolean
  Mutation: {
    CreateTrip: async (_, { title, description, userId, comment }) => {
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
          console.log("ROW");
          console.log(row);
          return row;
        })
        .then(row => {
          const date = moment.utc().format();
          const insertUserTrip = models.userTrip.upsert({
            comment,
            tripId: row.tripId,
            userId,
            date
          });
        })
        .then(() => {
          var userRow = models.userTrip.upsert({
            where: {
              comment,
              tripId: row.tripId,
              userId
            }
          });
          console.log("USERROW");
          console.log(userRow);
          return true;
        });

      return insert;
    }
  }
};
