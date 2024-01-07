const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controllers");

// Route pour créer une nouvelle offre d'emploi
router.post("/create", jobController.createJob);

// Route pour récupérer toutes les offres d'emploi d'une company
router.get("/myjobs", jobController.getAllMyJobs);

// Route pour récupérer une offre d'emploi spécifique par son ID
router.get("/:id", jobController.getJobById);

// Route pour mettre à jour une offre d'emploi spécifique par son ID
router.put("/:id/update", jobController.updateJobById);

// Route pour supprimer une offre d'emploi spécifique par son ID
router.delete("/:id/delete", jobController.deleteJobById);

module.exports = router;
