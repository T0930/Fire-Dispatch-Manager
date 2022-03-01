const { AuthenticationError } = require('apollo-server-express');
const { Application } = require('../models');
// const { User } = require('../models');

const resolvers = {
    Query: {
      applications: async () => {
        return Application.find();
      },
      application: async(parent, {applicationId}) => {
        return Application.findOne({_id: applicationId});
      },
      interview: async(parent, {interview}, context, info) => {
        return Application.find({interview: true});
      },
      rejection: async(parent, {rejection}, context, info) => {
        return Application.find({rejection: true});
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

        addApplication: async (parent, args) => {
            return Application.create(args, { new: true });
          },
          // editInterview: async (parent, { applicationId, interview, interviewDate, interviewLocation, interviewTime }) => {
          //   const changeInt = await Application.findOneAndUpdate(
          //     { _id: applicationId },
          //     { 
          //       $set: {interview: true, interviewDate: interviewDate, interviewLocation: interviewLocation, interviewTime: interviewTime }
          //     },
          //     { new: true }
          //   );
          //   return changeInt;
          // },
          editInterview: async (parent, { applicationId, interviewDate, interviewLocation, interviewTime }) => {
            const changeInt = await Application.findOneAndUpdate(
              { _id: applicationId },
              { $set: {interview: true }, interviewDate: interviewDate, interviewLocation: interviewLocation, interviewTime: interviewTime},
            );
            return changeInt;
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