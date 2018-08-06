import { models } from "../../data/model";
import jsonwebtoken from "jsonwebtoken";

export default {
  Query: {
    viewer: (obj, { token }) => {
      const { id } = jsonwebtoken.verify(token, "tripRecRocks");
      return models.user.findOne({
        where: { userId: id }
      });
    }
  }
};
