const CareerModel = require("../models/career.model");

module.exports.createCareerRequest = async (req, res) => {
  const { subject, email, phone_number, motivation } = req.body;

  try {
    const newCareerRequestEntry = await CareerModel.create({
      subject: subject,
      email: email,
      phone_number: phone_number,
      motivation: motivation,
    });
    res.status(200).json(newCareerRequestEntry);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getCareerRequests = async (req, res) => {
  const data = await CareerModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
