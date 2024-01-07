const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company.controllers");

// Endpoint pour créer une nouvelle entreprise
router.post("/create", companyController.createCompany);

// Endpoint pour obtenir la liste de toutes les entreprises
router.get("/", companyController.getAllCompanies);

// Endpoint pour obtenir les détails d'une entreprise spécifique
router.get("/:companyId", companyController.getCompanyById);

// Endpoint pour mettre à jour les détails d'une entreprise
router.put("/:companyId", companyController.updateCompany);

// Endpoint pour supprimer une entreprise
router.delete("/:companyId", companyController.deleteCompany);

module.exports = router;
