import { models } from "../../data/model";
import moment from "moment";

export default {
  Mutation: {
    AddLocation: async (_, { name, description, lat, long }) => {
      console.log(`${lat} - ${long}`);
      console.log(name);
      console.log(description);
      const newLat = lat.toFixed(6);
      const newLong = long.toFixed(6);
      const insert = await models.location
        .upsert({
          name,
          description,
          lat: newLat,
          long: newLong
        })
        .then(async () => {
          const row = await models.location.findOne({
            where: {
              name,
              description,
              lat: newLat,
              long: newLong
            }
          });
          console.log(row);
          return row;
        });
      console.log(insert);
      return insert ? insert.locationId : null;
    },

    CheckIn: async (
      _,
      { locationId, comments, userTripId, newTrip, tripId }
    ) => {
      const date = moment.utc().format();
      if (newTrip) {
        let maxVal = await models.tripLocationOrder.max("order", {
          where: { tripId: tripId }
        });
        maxVal = isNaN(maxVal) ? 0 : maxVal;

        const tripOrder = await models.tripLocationOrder.upsert({
          locationId,
          tripId: tripId,
          order: maxVal + 1
        });
        const insert = await models.tripLocation.upsert({
          locationId,
          comments,
          userTripId,
          date
        });
        return tripOrder && insert;
      } else {
        const insert = await models.tripLocation.upsert({
          locationId,
          comments,
          userTripId,
          date
        });
        return insert;
      }
    },
    EndTrip: (_, { userTripId }) => {
      console.log(userTripId);
      const insert = models.userTrip
        .upsert({
          userTripId,
          isActive: 0
        })
        .then(() => {
          return true;
        });

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
