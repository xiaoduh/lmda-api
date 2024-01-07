const mongoose = require("mongoose");
const Job = require("../models/job.model");

const createJob = async (req, res) => {
  try {
    const {
      title,
      short_desc,
      context,
      localisation,
      active,
      salary,
      daily_rate,
      work_organisation,
      missions,
      technical_stack,
      skills_required,
      companyId,
      slug,
      meta_description,
      experience_level,
      job_type,
    } = req.body;

    const savedJob = await Job.create({
      title,
      short_desc,
      context,
      localisation,
      active,
      salary,
      daily_rate,
      work_organisation,
      missions,
      technical_stack,
      skills_required,
      companyId: mongoose.Types.ObjectId(companyId), // Convertir companyId en ObjectId
      slug,
      meta_description,
      experience_level,
      job_type,
    });

    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMyJobs = async (req, res) => {
  const companyId = req.query.companyId;
  try {
    const jobs = await Job.find({ companyId: companyId });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJobById = async (req, res) => {
  const jobId = req.params.id;

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateJobById = async (req, res) => {
  const jobId = req.params.id;
  const updateFields = req.body;

  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, updateFields, {
      new: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteJobById = async (req, res) => {
  const jobId = req.params.id;

  try {
    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  getAllMyJobs,
  getJobById,
  updateJobById,
  deleteJobById,
};
