const ProgrammingContest = require("../models/ProgrammingContest.model");

const getPC = (req, res) => {
  res.render("programming-contest/register.ejs", { error: req.flash("error") });
};

const postPC = (req, res) => {
  res.render("programming-contest/register.ejs");
};

const getPClist = (req, res) => {
  res.render("programming-contest/list.ejs");
};
const deletePC = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.render("programming-contest/list.ejs");
};

module.exports = program{ getPC, postPC, getPClist, deletePC };
