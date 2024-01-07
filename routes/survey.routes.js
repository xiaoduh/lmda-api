const express = require("express");
const router = express.Router();
const surveyController = require("../controllers/survey.controllers");

// Endpoint pour créer une nouvelle réponse a un formaulaire
router.post("/freelance", surveyController.createNewFreelanceRes);
router.get("/freelance/count", surveyController.countResponses);
router.get("/freelance/data", surveyController.getResponsesData);
router.get("/freelance/data/tjm", surveyController.getAllTJM);
router.get("/freelance/data/exp", surveyController.getExp);
router.get("/freelance/data/domains", surveyController.getDomains);

module.exports = router;
