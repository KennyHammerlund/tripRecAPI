import { models } from "../../data/model";
export default {
  Query: {
    user: (obj, { id }) => {
      return models.user.findOne({
        where: { userId: id }
      });
    }
  },
  User: {
    id: (obj, args) => obj.userId
  },
  Image: {
    user: (obj, { id }) => {
      return models.user.findOne({
        where: { userId: obj.userId }
      });
    }
  }
};
