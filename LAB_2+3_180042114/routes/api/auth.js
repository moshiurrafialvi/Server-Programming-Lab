const express = require("express");

const router = express.Router();
const auth = require("../../middleware/auth");
//api/auth
//Test Route
router.get("/", auth, (req, res) => {
  res.send("Auth route");
});

module.exports = router;
