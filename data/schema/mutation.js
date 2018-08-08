export const mutation = `type Mutation {

  Signup(email: String!, password: String!, firstName: String!, lastName: String!): String
  Login(email: String!, password: String!): String
  CreateTrip(title: String!, description: String!, comment: String! userId: Int!): Boolean
 }`;
