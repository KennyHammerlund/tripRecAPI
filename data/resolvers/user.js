import { models } from "../../data/model";
export default {
  Query: {
    user: (obj, { id }) => {
      console.log(`ID: ${id}`);
      console.log(obj);
      return models.user.findOne({
        where: { id: id }
      });
    }
  }
};
