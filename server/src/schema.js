import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Get a specific track by id"
    track(id: ID!): Track
    "Get details for a specific module by id"
    module(id: ID!): Module
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  "Group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int @deprecated(reason: "Use durationInSeconds")
    durationInSeconds: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  "A module is a single unit of teaching"
  type Module {
    id: ID!
    title: String!
    length: Int @deprecated(reason: "Use durationInSeconds")
    durationInSeconds: Int
    videoUrl: String
    content: String
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

export default typeDefs;
