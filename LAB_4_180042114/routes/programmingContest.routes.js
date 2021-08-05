const express = require("express");
const router = express.Router();

const {
  ensureAuthenticated,
  addUserData,
} = require("../middleware/auth.middleware");

const {
  getPC,
  postPC,
  getPCList,
  deletePC,
  paymentDonePC,
  selectPC,
} = require("../controllers/programmingContest.controller");

router.get("/register", ensureAuthenticated, addUserData, getPC);
router.post("/register", ensureAuthenticated, addUserData, postPC);
router.get("/list", ensureAuthenticated, addUserData, getPCList);

module.exports = router;
