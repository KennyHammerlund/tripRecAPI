import { models } from "../../data/model";
import {bcrypt} from 'bcrypt';
import {jsonwebtoken} from 'jsonwebtoken';
export default {
  Mutation: {
    Login: async (_, { email, password }) => {
    const user = await models.user.findOne({where: email});

    if(!user) {
      throw new Error('No user with that email');
    }
    const valid = await bcrypt.compare(password, user.password);
    
    if(!valid){
      throw new Error('Incorrect Password/Username Combo');
    }
    return jsonwebtoken.sign({
      id: user.userId,
      email: user.email
    }, 'tripRecRocks', {expiresIn: '1y'})
    }
  },
};

