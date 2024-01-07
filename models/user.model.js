const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    professional_role: {
      type: String,
      required: true,
    },
    business_registration_number: {
      type: String,
      required: true,
      unique: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// play function before save into db

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email })
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      const userWithoutPW = await this.findOne({ email })
        .select("-password")
        .populate("companyId");
      return userWithoutPW;
    }
    throw Error("incorrect password");
  }
  throw Error("inccorect email");
};

const UserModel = mongoose.model("user", userSchema);

// Ajouter un index unique à business_registration_number
UserModel.collection.createIndex(
  { business_registration_number: 1 },
  { unique: true }
);

module.exports = UserModel;
