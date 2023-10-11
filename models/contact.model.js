const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    profilId: {
      type: String,
      required: true,
    },
    subject: {
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

module.exports = mongoose.model("contact", contactSchema);
