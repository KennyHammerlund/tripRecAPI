export const trip = `type Trip {
  id: Int
  title: String
  description: String
  stops: [Stop]
  date: String
  userTrips: [UserTrip]
  createdBy: User
}`;
