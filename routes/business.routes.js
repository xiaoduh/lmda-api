const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "voici les prise de contact pour un profil !!!!" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
