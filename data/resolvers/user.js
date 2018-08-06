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
    id: (obj, args, ctx) => {
      return obj.userId;
    },
    displayName: (obj, args, ctx) => {
      return JSON.stringify(ctx);
    },
    trips: (obj, args) => {
      return models.userTrip.findAll({
        where: { userId: obj.userId }
      });
    },
    profileImage: ({ userId }, args) => {
      return models.image.findOne({
        where: {
          userId: userId,
          isPrimary: true
        }
      });
    }
  },
  Image: {
    user: (obj, { id }) => {
      return models.user.findOne({
        where: { userId: obj.userId }
      });
    }
  }
};
