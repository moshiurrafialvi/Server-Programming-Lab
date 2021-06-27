const express = require("express");
const connectDB = require("./config/db");

const app = express(); // Init Express

connectDB(); //Connect db

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(PORT, () => {
  console.log("Server started");
});
