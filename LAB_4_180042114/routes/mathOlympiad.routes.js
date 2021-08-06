const express = require("express");
const router = express.Router();

const {
  ensureAuthenticated,
  addUserData,
} = require("../middleware/auth.middleware");

const {
  getMO,
  postMO,
  getMOList,
  deleteMO,
  paymentDoneMO,
  getMOedit,
  postMOedit,
  selectMO,
} = require("../controllers/mathOlympiad.controller");

router.get("/register", ensureAuthenticated, addUserData, getMO);
router.post("/register", ensureAuthenticated, addUserData, postMO);

router.get("/list", ensureAuthenticated, addUserData, getMOList);
router.get("/delete/:id", ensureAuthenticated, addUserData, deleteMO);
router.get("/paymentDone/:id", ensureAuthenticated, addUserData, paymentDoneMO);
/* router.get("/select/:id", ensureAuthenticated, addUserData, selectMO); */
router.get("/edit/:id", ensureAuthenticated, addUserData, getMOedit);
router.post("/edit/:id", ensureAuthenticated, addUserData, postMOedit);
router.get("/select/:id", ensureAuthenticated, addUserData, selectMO);

module.exports = router;
