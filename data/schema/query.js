export const query = `type Query {
  trip(id: Int!): Trip
  userTrip(id: Int!): UserTrip
  location(id: Int!): Location
  image(id: Int!): Image
  user(id: Int): User
  allTrips(id:Int, userID: Int): [Trip]
}`;
