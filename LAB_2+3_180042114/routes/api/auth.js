const express = require("express");

const router = express.Router();

//api/auth
//Test Route
router.get("/", (req, res) => {
  res.send("Auth route");
});

module.exports = router;
