//import new schema files here, This is called a "barrel file" where all the files inside this folder
//get wrapped into a "barrel" so it can be easily impoorted into other files.

import { query } from "./query";
import { image } from "./image";
import { location } from "./location";
import { trip } from "./trip";
import { user } from "./user";
import { userTrip } from "./userTrip";
import { mutation } from "./mutation";
import { Login } from "./login";
import { tripLocation } from "./tripLocation";

export default [
  query,
  image,
  location,
  trip,
  user,
  userTrip,
  mutation,
  Login,
  tripLocation
];
