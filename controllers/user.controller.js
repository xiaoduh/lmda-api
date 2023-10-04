const UserModel = require("../models/user.model");

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

module.exports.getAllUsers = async (req, res) => {
  const data = await UserModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
