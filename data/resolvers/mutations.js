import { models } from "../../data/model";
import moment from "moment";

export default {
  Mutation: {
    AddLocation: async (_, { name, description, lat, long }) => {
      console.log(`${lat} - ${long}`);
      const insert = await models.location
        .upsert({
          name,
          description,
          lat,
          long
        })
        .then(async () => {
          const row = await models.location.findOne({
            where: {
              name,
              description,
              lat: lat.toFixed(6),
              long: long.toFixed(6)
            }
          });
          console.log(row);
          return row;
        });
      console.log(insert);
      return insert ? insert.locationId : null;
    },

    CheckIn: async (_, { locationId, comments, userTripId }) => {
      const date = moment.utc().format();
      const insert = await models.tripLocation
        .upsert({
          locationId,
          comments,
          userTripId,
          date
        })
        .then(() => {
          const row = models.tripLocation.findOne({
            where: {
              locationId,
              comments,
              userTripId
            }
          });
          return row;
        })
        .then(r => r.tripLocationId);

      return insert;
    },
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
