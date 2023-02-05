const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input UserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  input UpdateUserInput {
    id: ID!
    newusername: String!
  }


  type Mutation {
    createUser(input : UserInput!) : User
    updateUsername(input: UpdateUserInput!): User
    deleteUserId(id : ID!): User
  } 

  enum Nationality {
    GERMANY
    CHILE
    CANADA
    BRAZIL
    INDIA
  }
`;

module.exports = { typeDefs };
