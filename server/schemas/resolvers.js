// const { AuthenticationError } = require('apollo-server-express');
const { Application } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    applications: async () => {
      return Application.find();
    },
  },

}


module.exports = resolvers;