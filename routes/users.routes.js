const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controller");

router.get("/", userControllers.getAllUsers);

router.post("/", userControllers.addNewUser);

module.exports = router;
