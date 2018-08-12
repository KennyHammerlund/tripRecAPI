export const query = `type Query {
  trip(id: Int!): Trip
  userTrip(id: Int!): UserTrip
  tripLocation(id: Int!): TripLocation
  location(id: Int): Location
  findNearbyLocations(lat:Float, long:Float): [Location]
  image(id: Int!): Image
  user(id: Int): User
  allTrips(id:Int, userID: Int): [Trip]
  viewer(token: String!): User
}`;
