import { models } from "../../data/model";
import moment from "moment";
export default {
  Query: {
    image: async (obj, { id }) => {
      const test = await models.image.findOne({
        where: { imageId: id }
      });
      return test;
    }
  },
  User: {
    images: async (obj, { id }) => {
      const images = await models.image.findAll({
        where: { userId: obj.userId }
      });
      return images.length === 0 ? null : images;
    }
  },
  Image: {
    id: (obj, args) => obj.imageId,
    date: (obj, args) => moment(obj.date).format()
  }
};
