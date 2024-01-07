const mongoose = require("mongoose");

const freelanceResponseSchema = new mongoose.Schema(
  {
    experience: {
      type: String,
      required: true,
    },
    cppDomains: {
      type: String,
      required: true,
    },
    tjm: {
      type: String,
      required: true,
    },
    clientDepartment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FreelanceResponse = mongoose.model(
  "FreelanceResponse",
  freelanceResponseSchema
);

module.exports = FreelanceResponse;
