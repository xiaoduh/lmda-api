const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "voici les demandes de missions !!!" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
