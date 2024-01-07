const mongoose = require("mongoose");
require("dotenv").config(); // Chargez les variables d'environnement depuis un fichier .env

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connecté à la base de données Lambda");
  } catch (error) {
    console.log("Échec de la connexion à la base de données Lambda");
    console.error(error);
    process.exit(1); // Arrêt du processus avec un code d'erreur
  }
};

module.exports = connectDB;
