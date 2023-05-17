const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
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

app.get("/", (req, res) => {
  res.send("hello World");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log("Listenting on port 5000");
});
