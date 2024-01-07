const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 10000;
const app = express();
const auth = require("./routes/auth.routes");
const jobRoutes = require("./routes/job.routes");
const companyRoutes = require("./routes/company.routes");
const surveyRoutes = require("./routes/survey.routes");
const { checkUser, requireAuth } = require("./middleware/auth.user.middleware");

const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

// Ajoutez un gestionnaire de route pour les options pré-échange
app.options("/auth/signin", (req, res) => {
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send();
});

// connexion à DB
connectDB();

// middleware qui permet de traiter les données de la Request (lire le body, url et cookies)
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//auth routes
app.use("/auth", auth);

// jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals);
});

// jobs routes
app.use("/jobs", jobRoutes);

// comapny routes
app.use("/company", companyRoutes);

// survey routes
app.use("/survey", surveyRoutes);

// Lancement du server
app.listen(port, () => console.log("server is running at port " + port));
