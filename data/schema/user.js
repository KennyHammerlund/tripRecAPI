export const user = `type User {
  id: Int
  firstName: String
  lastName: String
  displayName: String
  email: String
  password: String
  profileImage: Image
  images: [Image]
  trips: [UserTrip]
  currentTrips: [UserTrip]
}`;
