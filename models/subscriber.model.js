const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subscriber", subscriberSchema);
