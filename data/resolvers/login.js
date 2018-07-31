import { models } from "../../data/model";

export default {
  Mutation: {
    login: async (obj, { input: { username, password, remember } }) => {
      const {
        token: { tokenValue },
      } = await connection
        .post({
          route: `account/login`,
          data: { UserName: username, Password: password, RememberMe: remember || false },
        })
        .catch(loginErrorHandler);
      return tokenValue;
    },
    logout: (obj, args) => {
      return connection.post({ route: 'account/logout', token: ctx.token, data: ctx.token });
    },
  },
};

