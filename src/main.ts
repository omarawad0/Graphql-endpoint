import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";
const PORT = process.env.PORT || 5000;
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
