const { gql } = require('graphql-tag');

// schema using SDL
const typeDefs = gql`
  scalar String

  input Payload {
    apiKey: String!
    model: String!
    prompt: String!
    isEncrypted: Boolean
  }

  type Query {
    gemini(payload: Payload!): String
    chatgpt(payload: Payload!): String
    claude(payload: Payload!): String
  }
`;

module.exports = typeDefs;