const express = require("express");
const router = express.Router();
const missionControllers = require("../controllers/mission.controllers");

router.get("/", missionControllers.getMissionRequests);

router.post("/", missionControllers.createMissionRequest);

module.exports = router;
