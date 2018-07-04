import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import mocks from "./mocks";
import typeDefs from "./_typeDefs";
import * as resolvers from "../resolvers";
import _ from "lodash";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: _.reduce(resolvers, (prev, next) => _.merge(prev, next))
});

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

export default schema;
