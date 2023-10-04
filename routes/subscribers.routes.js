const express = require("express");
const router = express.Router();
const subControllers = require("../controllers/subscriber.controllers");

router.get("/", subControllers.getAllSubscribers);

router.post("/", subControllers.addNewSubscriber);

module.exports = router;
