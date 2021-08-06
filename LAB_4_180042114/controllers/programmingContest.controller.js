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
    institute,
    coachName,
    coachContact,
    coachEmail,
    coachTshirt,
    TLName,
    TLContact,
    TLEmail,
    TLtshirt,
    TM1Name,
    TM1Contact,
    TM1Email,
    TM1tshirt,
    TM2Name,
    TM2Contact,
    TM2Email,
    TM2tshirt,
  } = req.body;
  console.log(institute);

  const total = 1500;
  const paid = 0;
  const selected = false;
  let error = "";

  ProgrammingContest.findOne({ teamName: teamName, institute: institute }).then(
    (team) => {
      if (team) {
        error = "Team with same name and institution exists";
        req.flash("error", error);
        res.redirect("/ProgrammingContest/register");
      } else {
        const participant = newProgrammingContest({
          teamName,
          institute,
          coachName,
          coachContact,
          coachEmail,
          coachTshirt,
          TLName,
          TLContact,
          TLEmail,
          TLtshirt,
          TM1Name,
          TM1Contact,
          TM1Email,
          TM1tshirt,
          TM2Name,
          TM2Contact,
          TM2Email,
          TM2tshirt,
          total,
          paid,
          selected,
        });
        participant
          .save()
          .then(() => {
            error =
              "Team for Programming Contest has been registered successfully!!";
            console.log("save ", error);
            req.flash("error", error);
            res.redirect("/ProgrammingContest/register");
          })
          .catch(() => {
            error = "Unexpected error";
            console.log("error ", error);
            req.flash("error", error);
            res.redirect("/ProgrammingContest/register");
          });
      }
    }
  );
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
