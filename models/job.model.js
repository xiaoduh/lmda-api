const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    localisation: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    expected_skills: {
      type: [String],
      required: true,
    },
    context: {
      type: String,
      required: true,
    },
    missions: {
      type: [String],
      required: true,
    },
    technical_environment: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("job", jobSchema);
