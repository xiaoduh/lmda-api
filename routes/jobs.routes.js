const express = require("express");
const router = express.Router();
const jobControllers = require("../controllers/job.controllers");

router.get("/", jobControllers.getAllJobs);

router.post("/", jobControllers.createJobOpen);
router.post("/apply", jobControllers.createApplianceJob);

module.exports = router;
