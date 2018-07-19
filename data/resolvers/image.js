import { models } from "../../data/model";
import moment from "moment";
export default {
  Query: {
    image: async (obj, { id }) => {
      const test = await models.image.findOne({
        where: { imageId: id }
      });
      console.log(test);
      return test;
    }
  },
  User: {
    images: (obj, { id }) => {
      return models.image.findAll({
        where: { userId: obj.userId }
      });
    }
  },
  Image: {
    id: (obj, args) => obj.imageId,
    date: (obj, args) => moment(obj.date).format()
  }
};
