const BusinessModel = require("../models/business.model");

module.exports.createBusinessRequest = async (req, res) => {
  const { subject, email, phone_number, context } = req.body;

  try {
    const newBusinessRequestEntry = await BusinessModel.create({
      subject: subject,
      email: email,
      phone_number: phone_number,
      context: context,
    });
    res.status(200).json(newBusinessRequestEntry);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getBusinessRequests = async (req, res) => {
  const data = await BusinessModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
