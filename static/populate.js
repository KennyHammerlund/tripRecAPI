import casual from "casual";
import { models } from "../data/model/index";
import moment from "moment";
import _ from "lodash";
export default db => {
  console.log("MODELS _____________________________");
  console.log(models);

  //Change force to true to force a wipe of the current DB
  //Uncomment the return statement for each table.
  casual.seed(234);
  db.sequelize.sync({ force: false }).then(() => {
    // *******CREATE USERS**************
    // _.times(100, () => {
    //   return models.user.create({
    //     firstName: casual.first_name,
    //     lastName: casual.last_name,
    //     email: casual.email,
    //     password: casual.word,
    //     displayName: casual.full_name,
    //     imageId: casual.building_number
    //   });
    // });
    //******IMAGES
    // _.times(50, () => {
    //   return models.image.create({
    //     title: casual.title,
    //     description: casual.description,
    //     date: moment(casual.moment).format(),
    //     userId: Math.floor(Math.random() * 100),
    //     link: casual.url,
    //     locationId: Math.floor(Math.random() * 100),
    //     tripId: Math.floor(Math.random() * 100),
    //     tripLocationId: Math.floor(Math.random() * 100),
    //     flagged: casual.boolean,
    //     isPrimary: casual.boolean,
    //     createdAt: moment(casual.moment).format(),
    //     updatedAt: moment(casual.moment).format()
    //   });
    // });
    //******LOCATIONS
    // _.times(100, () => {
    //   return models.location.create({
    //     name: casual.word,
    //     description: casual.description,
    //     date: moment(casual.moment).format(),
    //     lat: Math.random() * 100,
    //     long: Math.random() * 100,
    //     createdAt: moment(casual.moment).format(),
    //     updatedAt: moment(casual.moment).format()
    //   });
    // });
    //***** TRIPS ***** */
    // _.times(100, () => {
    //   return models.trip.create({
    //     title: `${casual.city} on ${casual.month} ${casual.day_of_month}`,
    //     description: casual.description,
    //     date: moment(casual.moment).format(),
    //     userId: Math.floor(Math.random() * 100),
    //     createdAt: moment(casual.moment).format(),
    //     updatedAt: moment(casual.moment).format()
    //   });
    // });
    //****** User Trips *****
    // _.times(100, () => {
    //   return models.userTrip.create({
    //     title: `${casual.name}'s trip to ${casual.city}`,
    //     comment: casual.description,
    //     date: moment(casual.moment).format(),
    //     tripId: Math.floor(Math.random() * 100),
    //     userId: Math.floor(Math.random() * 100),
    //     createdAt: moment(casual.moment).format(),
    //     updatedAt: moment(casual.moment).format()
    //   });
    // });
    //*****TRIP lOCATIONS */
    // _.times(100, () => {
    //   return models.tripLocation.create({
    //     title: `${casual.city} on ${casual.month} ${casual.day_of_month}`,
    //     comments: casual.description,
    //     date: moment(casual.moment).format(),
    //     locationId: Math.floor(Math.random() * 100),
    //     userTripId: Math.floor(Math.random() * 100),
    //     createdAt: moment(casual.moment).format(),
    //     updatedAt: moment(casual.moment).format()
    //   });
    // });
  });
};

// title: `${casual.city} on ${casual.month_name} ${casual.day_of_month} ${casual.year}`,
//
