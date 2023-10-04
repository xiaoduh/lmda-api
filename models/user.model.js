const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    number_of_missions: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    number_of_yr_exp: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
