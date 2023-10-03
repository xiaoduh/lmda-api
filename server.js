const express = require("express");
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Subscriber routes
app.use("/subscribers", require("./routes/subscribers.routes"));

//Users routes
app.use("/users", require("./routes/users.routes"));

//Jobs routes
app.use("/jobs", require("./routes/jobs.routes"));

//Career routes
app.use("/career", require("./routes/career.routes"));

//Business routes
app.use("/business", require("./routes/business.routes"));

app.listen(port, () => console.log("server is running at port " + port));
