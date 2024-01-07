const UserModel = require("../models/user.model");
const Token = require("../models/token.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const ObjectID = require("mongoose").Types.ObjectId;

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign(
    { id },
    "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5ceyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    {
      expiresIn: maxAge,
    }
  );
};

module.exports.signUp = async (req, res) => {
  const {
    first_name,
    last_name,
    professional_role,
    business_registration_number,
    email,
    password,
    companyId,
  } = req.body;

  try {
    const existingUser = await UserModel.findOne({
      business_registration_number: business_registration_number,
    });

    if (!existingUser) {
      const user = await UserModel.create({
        first_name,
        last_name,
        professional_role,
        business_registration_number,
        email,
        password,
        companyId,
      });
      const token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
      res.status(200).json(user);
    } else {
      res.status(200).json({
        siret: true,
        message: "Un siret est déjà enregistré comme utilisateur.",
        number: business_registration_number,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    console.log(user);
    if (user.is_verified) {
      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge,
        sameSite: "none",
        secure: true,
      });
      res.status(200).json({
        user: user,
        is_verified: true,
        connected: true,
        message: "Vous êtes authentifié.",
      });
    } else {
      res.status(200).json({
        user: user,
        is_verified: false,
        connected: false,
        message: "Votre compte est en attente de validation.",
      });
    }
  } catch (err) {
    let errors = { email: "", password: "" };

    console.log(err.message);

    if (err.message.includes("email")) errors.email = "Email inconnu";

    if (err.message.includes("password"))
      errors.password = "Le mot de passe ne correspond pas";
    res.status(200).json({ errors });
  }
};

module.exports.getUser = async (req, res) => {
  console.log("object");
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const user = await UserModel.findById(req.params.id).select("-password");
  if (user) return res.status(200).json(user);
  else console.log("ID unknown : " + req.params.id);
};

// a deplacer dans users controllers
// module.exports.getAllUsers = async (req, res) => {
//   const data = await UserModel.find().sort({ createdAt: -1 });
//   res.status(200).json(data);
// };
