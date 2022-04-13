import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import TrackAPI from "./dataSources/track-api.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(() => {
  console.log("Server started running on port 4000!");
});
