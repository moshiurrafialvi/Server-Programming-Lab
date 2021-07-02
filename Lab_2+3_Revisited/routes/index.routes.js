const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("users/register-v2.ejs");
});

module.exports = router;
