import { models } from "../../data/model";
export default {
  Query: {
    viewer: (obj, args) => {return models.user.findOne({
        
    })}
  }
};
