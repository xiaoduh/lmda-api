const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    short_desc: {
      type: String,
      required: true,
    },
    context: {
      type: String,
      required: true,
    },
    localisation: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    daily_rate: {
      type: Number,
      required: true,
    },
    work_organisation: {
      type: String,
      required: true,
    },
    missions: {
      type: [String],
      required: true,
    },
    technical_stack: {
      type: [String],
      required: true,
    },
    skills_required: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    meta_description: {
      type: String,
      required: true,
    },
    experience_level: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
