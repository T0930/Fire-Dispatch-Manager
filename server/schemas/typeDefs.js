
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Application {
    _id: ID
    companyName: String!
    position: String!
    dateApplied: String!
    dateRejected: String
    description: String
    location: String
    notes: [Note]
    interviewDate: String
    interviewTime: String
    createdAt: String
  }

  type Note {
    _id: ID
    noteText: String
    createdAt: String
  }

  type Query {
    applications: [Application]!
    application(applicationId: ID!): Application
  }

  type Mutation {
    addApplication(companyName: String!, position: String!, dateApplied: String!,
      dateRejected: String, description: String, location: String,
      interviewDate: String, interviewTime: String): Application
    addNote(applicationId: ID!, noteText: String!): Application
    removeApplication(applicationId: ID!): Application
    removeNote(applicationId: ID!, noteId: ID!): Application
  }
`;

module.exports = typeDefs;