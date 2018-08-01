import { models } from "../../data/model";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
export default {
  Mutation: {
    Login: async (_, { email, password }) => {
      const user = await models.user.findOne({where: {email:email}});

      if(!user) {
        throw new Error('No user with that email');
      }
      const valid = user.password && user.password == password;
      // const valid = await bcrypt.compare(password, user.password);
      
      if(!valid){
        throw new Error('Incorrect Password/Username Combo');
      }

      return jsonwebtoken.sign({
        id: "test",
        email: "email"
      }, 'tripRecRocks', {expiresIn: '1y'})
    },

    Signup: async (_, {firstName, lastName, email, password}) => {
      const insert = await models.user.upsert({
        firstName: firstName,
        lastName: lastName,
        displayName: `${firstName} ${lastName}`,
        email: email,
        password: password
      });
      
      const user = await models.user.findOne({where: {email:email}});
      if(user && insert){
        return jsonwebtoken.sign({
          id: user.userId,
          email: user.email
        }, 'tripRecRocks', {expiresIn: '1y'})
      }

      return null;
    }

  },

};

