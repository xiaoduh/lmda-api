const FreelanceResponse = require("../models/freelanceResponse.model");

const createNewFreelanceRes = async (req, res) => {
  const { experience, cppDomains, tjm, clientDepartment } = req.body;

  // Vérification si experience et tjm ne contiennent que des chiffres
  if (!/^\d+$/.test(experience) || !/^\d+$/.test(tjm)) {
    return res.status(400).json({
      error:
        "Les champs experience et tjm doivent contenir uniquement des chiffres.",
    });
  }

  try {
    // Créez une instance de FreelanceResponse avec les données de la requête
    const freelanceResponse = new FreelanceResponse({
      experience,
      cppDomains,
      tjm,
      clientDepartment,
    });

    // Enregistrez l'instance dans la base de données
    const savedResponse = await freelanceResponse.save();

    // Envoyez la réponse au client
    res.status(201).json(savedResponse);
  } catch (error) {
    console.error(
      "Erreur lors de la création de la réponse freelance :",
      error
    );
    res
      .status(500)
      .json({ error: "Erreur lors de la création de la réponse freelance" });
  }
};

const countResponses = async (req, res) => {
  try {
    const responseCount = await FreelanceResponse.countDocuments();
    res.status(200).json({ count: responseCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getResponsesData = async (req, res) => {
  try {
    const resData = await FreelanceResponse.find();
    res.status(200).json(resData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllTJM = async (req, res) => {
  try {
    const tjmValues = await FreelanceResponse.distinct("tjm");

    if (tjmValues && tjmValues.length > 0) {
      res.json({ tjmValues });
    } else {
      res.status(404).json({ message: "Aucune valeur TJM trouvée." });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des valeurs TJM :", error);
    res.status(500).json({
      message: "Erreur serveur lors de la récupération des valeurs TJM.",
    });
  }
};

const getExp = async (req, res) => {
  try {
    const experienceValues = await FreelanceResponse.distinct("experience");

    if (experienceValues && experienceValues.length > 0) {
      res.json({ experienceValues });
    } else {
      res.status(404).json({ message: "Aucune valeur d'expérience trouvée." });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des valeurs d'expérience :",
      error
    );
    res.status(500).json({
      message:
        "Erreur serveur lors de la récupération des valeurs d'expérience.",
    });
  }
};

const getDomains = async (req, res) => {
  try {
    const domainValues = await FreelanceResponse.distinct("cppDomains");

    if (domainValues && domainValues.length > 0) {
      res.json({ domainValues });
    } else {
      res.status(404).json({ message: "Aucune valeur de domaine trouvée." });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des valeurs de domaine :",
      error
    );
    res.status(500).json({
      message: "Erreur serveur lors de la récupération des valeurs de domaine.",
    });
  }
};

module.exports = {
  createNewFreelanceRes,
  countResponses,
  getResponsesData,
  getAllTJM,
  getExp,
  getDomains,
};
