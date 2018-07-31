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
    }, 
    allTrips: (obj, {id, userID }) =>{
      let whereQuery = id ? {
       where:{
        tripId:id
            }      } : {};

      return models.trip.findAll(
        whereQuery   
      );
    }
  },
  Trip: {
    id: (obj, args) => obj.tripId,
    title: (obj, args) => obj.title ,
    description: (obj, args) => obj.userTrip.description
  },

};
