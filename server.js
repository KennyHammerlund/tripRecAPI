import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import { express as voyager } from "graphql-voyager/middleware";
import path from "path";
import compress from "compression";

import schema from "./data/schema/schema";
import { ENGINE_METHOD_NONE } from "constants";
import { db } from "./data/model";
import populate from "./static/populate";
import models from "./data/model/index";

const GRAPHQL_PORT = process.env.PORT || 3002;

const graphQLServer = express();

// graphQLServer.use(compress());

graphQLServer.use(cors());
graphQLServer.use(bodyParser.json());

graphQLServer.use(express.static(path.join(__dirname, "/")));
graphQLServer.use(bodyParser.urlencoded({ extended: true }));

// graphQLServer.use("/", bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

graphQLServer.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
graphQLServer.use("/voyager", voyager({ endpointUrl: "/graphql" }));

//***USE THIS TO CREATE MOCK DATA ****/
// populate(db);

// db.sequelize.sync().then(() => {
graphQLServer.listen(GRAPHQL_PORT, () => {
  console.log(
    `\n\n\n******************** TripRec API ******************\nServices Running:\n  GraphiQL: http://localhost:${GRAPHQL_PORT}/graphiql`
  );
  console.log(`  Voyager: http://localhost:${GRAPHQL_PORT}/voyager\n\n`);
});
// });
