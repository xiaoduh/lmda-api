const express = require("express");
const router = express.Router();
const businessControllers = require("../controllers/business.controllers");

router.get("/", businessControllers.getBusinessRequests);

router.post("/", businessControllers.createBusinessRequest);

module.exports = router;
