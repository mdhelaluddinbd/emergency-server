require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
const db = require("./config/main.config");
const apiRoute = require("./routes/api.routes");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", apiRoute);

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to MongoDb Server");
});

