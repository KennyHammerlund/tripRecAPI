export const mutation = `type Mutation {

  SignupMutation(email: String!, password: String!, name: String!): Login
  LoginMutation(email: String!, password: String!): Login
  
 }`;