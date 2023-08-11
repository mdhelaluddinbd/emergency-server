const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.ehwknzz.mongodb.net/emergency-servicedb?retryWrites=true&w=majority`;

const databaseConnection = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("=========MongoDB Cloud is connected==========");
  })
  .catch((error) => {
    console.log(error);
  });
