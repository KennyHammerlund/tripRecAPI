export const mutation = `type Mutation {

  Signup(email: String!, password: String!, name: String!): Login
  Login(email: String!, password: String!): Login
  
 }`;