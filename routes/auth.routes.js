const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controllers");

router.post("/", authControllers.signUp);
router.post("/signin", authControllers.signIn);
router.get("/:id", authControllers.getUser);

module.exports = router;
