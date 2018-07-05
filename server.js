import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import schema from "./data/schema/schema";
import { ENGINE_METHOD_NONE } from "constants";
import { db } from "./data/model";
const GRAPHQL_PORT = 3002;

const graphQLServer = express();

graphQLServer.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

db.sequelize.sync().then(() => {
  graphQLServer.listen(GRAPHQL_PORT, () => {
    console.log(
      `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
    );
  });
});
