const mongoose = require("mongoose");

<<<<<<<< HEAD:models/freelanceResponse.model.js
const freelanceResponseSchema = new mongoose.Schema(
  {
    experience: {
========
const missionSchema = mongoose.Schema(
  {
    looking_for: {
>>>>>>>> ac942b551ec47a5105002c3d4ff4e8d6dc2b0c58:models/mission.model.js
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

<<<<<<<< HEAD:models/freelanceResponse.model.js
const FreelanceResponse = mongoose.model(
  "FreelanceResponse",
  freelanceResponseSchema
);

module.exports = FreelanceResponse;
========
module.exports = mongoose.model("mission", missionSchema);
>>>>>>>> ac942b551ec47a5105002c3d4ff4e8d6dc2b0c58:models/mission.model.js
