const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Application {
    _id: ID
    companyName: String!
    position: String!
    dateApplied: String!
    rejection: Boolean
    dateRejected: String
    description: String
    location: String
    notes: [Note]
    interview: Boolean
    interviewDate: String
    interviewTime: String
    interviewLocation: String
    createdAt: String
  }
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Note {
    _id: ID
    noteText: String
    createdAt: String
  }
  type Query {
    applications(limit: Int): [Application]!
    application(applicationId: ID!): Application
    interview(interview: Boolean): [Application]
    rejection(rejection: Boolean): [Application]
    users: [User]
    user(username: String!): User
    me: User
  }
  type Mutation {
    addApplication(companyName: String!, position: String!, dateApplied: String!,
      dateRejected: String, description: String, location: String,
      interviewDate: String, interviewTime: String): Application
    addNote(applicationId: ID!, noteText: String!): Application
    removeApplication(applicationId: ID!): Application
    removeNote(applicationId: ID!, noteId: ID!): Application
    editInterview(applicationId: ID!, interviewDate: String, interviewTime: String, interviewLocation: String): Application
    editRejection(applicationId: ID!, dateRejected: String): Application
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;