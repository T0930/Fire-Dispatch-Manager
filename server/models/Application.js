const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const applicationSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
    },
    dateApplied: {
        type: String,
        required: true,
    },
    dateRejected: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    notes: [
        {
          noteText: {
            type: String,
          },
        },
        {
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    interviewDate: {
        type: String,
    },
    interviewTime: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Application = model("Application", applicationSchema);
module.exports = Application;
