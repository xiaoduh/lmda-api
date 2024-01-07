const MissionModel = require("../models/mission.model");
const formMission = require("../utils/formMission");

module.exports.createMissionRequest = async (req, res) => {
  try {
    const newMissionRequestEntry = await MissionModel.create({
      looking_for: req.body.looking_for,
      email: req.body.email,
      phone_number: req.body.phone_number,
      context: req.body.context,
    });
    formMission(
      req.body.looking_for,
      req.body.email,
      req.body.phone_number,
      req.body.context
    );
    res.status(200).json(newMissionRequestEntry);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getMissionRequests = async (req, res) => {
  const data = await MissionModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
