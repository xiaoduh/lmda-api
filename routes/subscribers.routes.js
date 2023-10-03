const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "voici les abonnées à la liste de dif !!!" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
