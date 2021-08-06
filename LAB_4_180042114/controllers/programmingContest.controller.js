const ProgrammingContest = require("../models/ProgrammingContest.model");

const getPC = (req, res) => {
  res.render("programming-contest/register.ejs", { error: req.flash("error") });
};

/* const postPC = (req, res) => {
  res.render("programming-contest/register.ejs");
}; */

const postPC = (req, res) => {
  const {
    teamName,
    institution,
    coachName,
    coachEmail,
    coachContact,
    coachtshirt,
    teamLeaderName,
    teamLeaderEmail,
    teamLeaderContact,
    teamLeadertshirt,
    teamMember1Name,
    teamMember1Email,
    teamMember1Contact,
    teamMember1tshirt,
    teamMember2Name,
    teamMember2Email,
    teamMember2Contact,
    teamMember2tshirt,
  } = req.body;

  const total = 1500;
  const paid = 0;
  const selected = false;
  let error = "";

  ProgrammingContest.findOne({
    teamName: teamName,
    institution: institution,
  }).then((team) => {
    if (team) {
      error = "Team with this team name and institution already exists!";
      console.log(error);
      req.flash("error", error);
      res.redirect("/ProgrammingContest/register");
    } else {
      const team = new ProgrammingContest({
        teamName,
        institution,
        coachName,
        coachEmail,
        coachContact,
        coachtshirt,
        teamLeaderName,
        teamLeaderEmail,
        teamLeaderContact,
        teamLeadertshirt,
        teamMember1Name,
        teamMember1Email,
        teamMember1Contact,
        teamMember1tshirt,
        teamMember2Name,
        teamMember2Email,
        teamMember2Contact,
        teamMember2tshirt,
        total,
        paid,
        selected,
      });
      team
        .save()
        .then(() => {
          error = "Team has been registered successfully!";
          console.log(error);
          req.flash("error", error);
          res.redirect("/ProgrammingContest/register");
        })
        .catch((err) => {
          error = "An unexpected error occured while registering team";
          console.log(error);
          console.log(err);
          req.flash("error", error);
          res.redirect("/ProgrammingContest/register");
        });
    }
  });
};

const getPCList = (req, res) => {
  res.render("programming-contest/list.ejs");
};
const deletePC = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.render("programming-contest/list.ejs");
};

module.exports = { getPC, postPC, getPCList, deletePC };
