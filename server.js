import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import Cors from "cors";
import { express as voyager } from "graphql-voyager/middleware";

import schema from "./data/schema/schema";
import { ENGINE_METHOD_NONE } from "constants";
import { db } from "./data/model";
const GRAPHQL_PORT = process.env.PORT || 3002;

const graphQLServer = express();

graphQLServer.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
graphQLServer.use("/voyager", voyager({ endpointUrl: "/graphql" }));

graphQLServer.use(Cors());

db.sequelize.sync().then(() => {
  graphQLServer.listen(GRAPHQL_PORT, () => {
    console.log(
      `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
    );
  });
});
