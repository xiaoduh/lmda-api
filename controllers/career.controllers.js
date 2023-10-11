const CareerModel = require("../models/career.model");
const appliance = require("../utils/appliance");

module.exports.createCareerRequest = async (req, res) => {
  try {
    const newCareerRequestEntry = await CareerModel.create({
      subject: req.body.subject,
      email: req.body.email,
      phone_number: req.body.phone_number,
      motivation: req.body.motivation,
    });
    appliance(
      req.body.subject,
      req.body.email,
      req.body.phone_number,
      req.body.motivation
    );
    res.status(200).json({ newAppliance: newCareerRequestEntry });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getCareerRequests = async (req, res) => {
  const data = await CareerModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
