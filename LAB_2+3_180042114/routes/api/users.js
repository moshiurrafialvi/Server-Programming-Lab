const express = require("express");

const router = express.Router();

//api/users
//Test Route
router.get("/", (req, res) => {
  res.send("User route");
});

module.exports = router;
