const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
    },
    location: {
      type: String,
    },
    size: {
      type: Number,
    },
    website: {
      type: String,
    },
    description: {
      type: String,
    },
    contact: {
      name: String,
      email: String,
      phone: String,
    },
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
