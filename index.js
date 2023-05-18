const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const teamRouter = require("./routes/our-teams/index");
const isBossMiddleware = require("./middleware/boss");
const app = express();
const port = 5000;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.get("/", isBossMiddleware, (req, res) => {
  res.send("hello World");
});

app.use("/api", routes);
app.use("/api/teama", teamRouter);

app.listen(port, () => {
  console.log("Listenting on port 5000");
});
