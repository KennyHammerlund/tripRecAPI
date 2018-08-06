export const trip = `type Trip {
  id: Int
  title: String
  description: String
  stops: [Location]
  date: String
  userTrips: [UserTrip]
  createdBy: User
}`;
