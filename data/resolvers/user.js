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
    id: (obj, args) => obj.userId,
    trips: ({ userId }, args) => {
      return models.userTrip.findAll({
        include: {
          model: models.trip,
          where: { userId: userId },
          as: "userTrip"
        }
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
