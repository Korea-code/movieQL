import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const PORT = process.env.PORT || 5000;

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});
server.start({ port: PORT }, () => console.log("Graphql Server Running"));
