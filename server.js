const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 10000;
const app = express();
const subscribers = require("./routes/subscribers.routes");
const users = require("./routes/users.routes");
const jobs = require("./routes/jobs.routes");
const career = require("./routes/career.routes");
const business = require("./routes/business.routes");

const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

// connexion à DB
connectDB();

// middleware qui permet de traiter les données de la Request (lire le body, url et cookies)
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Subscriber routes
app.use("/subscribers", subscribers);

//Users routes
app.use("/users", users);

//Jobs routes
app.use("/jobs", jobs);

//Career routes
app.use("/career", career);

//Business routes
app.use("/business", business);

// Lancement du server
app.listen(port, () => console.log("server is running at port " + port));
