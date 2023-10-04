const JobModel = require("../models/job.model");

module.exports.createJobOpen = async (req, res) => {
  const {
    title,
    localisation,
    tags,
    expected_skills,
    context,
    missions,
    technical_environment,
  } = req.body;

  try {
    const newJob = await JobModel.create({
      title,
      localisation,
      tags,
      expected_skills,
      context,
      missions,
      technical_environment,
    });
    res.status(200).json(newJob);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllJobs = async (req, res) => {
  const data = await JobModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
