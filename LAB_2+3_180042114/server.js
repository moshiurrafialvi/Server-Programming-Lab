const express = require("express");
const connectDB = require("./config/db");

const app = express(); // Init Express

connectDB(); //Connect db

app.use(express.json({ extend: false }));

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Running");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, () => {
  console.log("Server started");
});
