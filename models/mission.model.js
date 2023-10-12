const mongoose = require("mongoose");

const missionSchema = mongoose.Schema(
  {
    looking_for: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    context: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("mission", missionSchema);
