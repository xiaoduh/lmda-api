const express = require("express");
const router = express.Router();
const careerControllers = require("../controllers/career.controllers");

router.get("/", careerControllers.getCareerRequests);

router.post("/", careerControllers.createCareerRequest);

module.exports = router;
