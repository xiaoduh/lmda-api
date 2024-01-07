const UserModel = require("../models/user.model");
const ContactModel = require("../models/contact.model");
const contact = require("../utils/contact");

module.exports.addNewUser = async (req, res) => {
  const {
    first_name,
    last_name,
    number_of_missions,
    status,
    number_of_yr_exp,
    price,
    position,
  } = req.body;

  try {
    const newUser = await UserModel.create({
      first_name,
      last_name,
      number_of_missions,
      status,
      number_of_yr_exp,
      price,
      position,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.createContactProfil = async (req, res) => {
  try {
    const newContact = await ContactModel.create({
      profilId: req.body.profilId,
      subject: req.body.subject,
      email: req.body.email,
      phone_number: req.body.phone_number,
      context: req.body.context,
    });
    contact(
      req.body.profilId,
      req.body.subject,
      req.body.email,
      req.body.phone_number,
      req.body.context
    );
    res.status(200).json({ newAppliance: newContact });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllUsers = async (req, res) => {
  const data = await UserModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
