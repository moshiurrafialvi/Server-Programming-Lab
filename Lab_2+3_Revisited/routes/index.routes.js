const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("./../middleware/auth.middleware");

router.get("/", (req, res) => {
  res.render("welcome.ejs");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard.ejs");
});

module.exports = router;
