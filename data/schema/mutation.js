export const mutation = `type Mutation {

  Signup(email: String!, password: String!, firstName: String!, lastName: String!): String
  Login(email: String!, password: String!): String
  CreateTrip(title: String!, description: String!, comment: String! userId: Int!): Boolean
  AddLocation(name: String!, description: String!, lat: Float!, long: Float!): Int
  CheckIn(locationId: Int!, comments: String!, userTripId: Int!, newTrip: Boolean!, tripId: Int!): Boolean
  EndTrip(tripId: Int, userTripId: Int): Boolean
 }`;
