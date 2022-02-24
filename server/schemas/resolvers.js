const { AuthenticationError } = require('apollo-server-express');
const { Application } = require('../models');
// const { User } = require('../models');

const resolvers = {
    Query: {
      applications: async () => {
        return Application.find();
      },
    //   me: async (parent, args, context) => {
    //     if (context.user) {
    //       return User.findOne({ _id: context.user._id });
    //     }
    //     throw new AuthenticationError('You need to be logged in!');
    //   },
    },


    Mutation: {
        // addUser: async (parent, { name, email, password }) => {
        //     const profile = await User.create({ name, email, password });
        //     const token = signToken(profile);
        //     return { token, profile };
        // },

        addApplication: async (parent, { companyName, position, dateApplied, dateRejected, description,
             location, notes, interviewDate, interviewTime }) => {
            return Application.create({ companyName, position, dateApplied, dateRejected, description,
                location, notes, interviewDate, interviewTime });
          },
        addNote: async (parent, { applicationId, noteText }) => {
            return Application.findOneAndUpdate(
              { _id: applicationId },
              {
                $addToSet: { notes: { noteText } },
              },
              {
                new: true,
                runValidators: true,
              }
            );
          },
        removeApplication: async (parent, { applicationId }) => {
            return Application.findOneAndDelete({ _id: applicationId });
          },
        removeNote: async (parent, { applicationId, noteId }) => {
            return Application.findOneAndUpdate(
              { _id: applicationId },
              { $pull: { notes: { _id: noteId } } },
              { new: true }
            );
          },
    },
}

module.exports = resolvers;