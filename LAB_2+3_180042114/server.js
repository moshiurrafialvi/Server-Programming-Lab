const express = require("express");

const app = express();

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(PORT, () => {
  console.log("Server started");
});
