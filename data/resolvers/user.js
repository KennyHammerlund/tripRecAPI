export default {
  Query: {
    user: (obj, args) => tblUser.findAll()
  },
  User: {
    firstName: () => "Kenny",
    lastName: () => "Testing"
  }
};
