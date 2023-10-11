const JobModel = require("../models/job.model");
const ApplianceModel = require("../models/appliance.model");
const applianceJob = require("../utils/applianceJob");

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

module.exports.createApplianceJob = async (req, res) => {
  try {
    const newApplianceEntry = await ApplianceModel.create({
      jobId: req.body.jobId,
      subject: req.body.subject,
      email: req.body.email,
      phone_number: req.body.phone_number,
      motivation: req.body.motivation,
    });
    applianceJob(
      req.body.jobId,
      req.body.subject,
      req.body.email,
      req.body.phone_number,
      req.body.motivation
    );
    res.status(200).json({ newAppliance: newApplianceEntry });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllJobs = async (req, res) => {
  const data = await JobModel.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};
