import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const opts = {
  port: process.env.PORT || 7777,
  endpoint: "/graphql"
};
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  opts
});
server.start(() => console.log("Graphql Server Running"));
