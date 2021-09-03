const ProgrammingContest = require("../models/ProgrammingContest.model");
const generateKey=require("../utility/key-generator");
const mailer=require("../utility/mail-sender");

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

  const total = 2500;
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
      const key= generateKey()
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
        key,
      });
      team
        .save()
        .then(() => {
          mailer(coachEmail, 'Programming Contest', key, coachName)
                    mailer(teamLeaderEmail, 'Programming Contest', key, teamLeaderName)
                    mailer(teamMember1Email, 'Programming Contest', key, teamMember1Name)
                    mailer(teamMember2Email, 'Programming Contest', key, teamMember2Name)
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
  let all_team = [];
  let error = "";
  ProgrammingContest.find()
    .then((data) => {
      all_team = data;
      res.render("programming-contest/list.ejs", {
        error: req.flash("error"),
        teams: all_team,
      });
    })
    .catch(() => {
      error = "Failed to retrieve data!";
      res.render("programminh-contest/list.ejs", {
        error: req.flash("error", error),
        teams: all_team,
      });
    });
};
const deletePC = (req, res) => {
  let error = "";

  ProgrammingContest.deleteOne({ _id: req.params.id })
    .then(() => {
      let error = "Data has been deleted successfully!";
      req.flash("error", error);
      res.redirect("/ProgrammingContest/list");
    })
    .catch(() => {
      let error = "Failed to delete data";
      req.flash("error", error);
      res.redirect("/ProgrammingContest/list");
    });
};

const paymentDonePC = (req, res) => {
  const id = req.params.id;

  ProgrammingContest.findOne({ _id: id })
    .then((team) => {
      team.paid = team.total;
      team
        .save()
        .then(() => {
          let error = "Payment completed successfully!";
          req.flash("error", error);
          res.redirect("/ProgrammingContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/ProgrammingContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/ProgrammingContest/list");
    });
};

const selectPC = (req, res) => {
  const id = req.params.id;

  ProgrammingContest.findOne({ _id: id })
    .then((team) => {
      team.selected = true;
      team
        .save()
        .then(() => {
          let error = "Team has been selected successfully!";
          req.flash("error", error);
          res.redirect("/ProgrammingContest/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/ProgrammingContest/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/ProgrammingContest/list");
    });
};

const getPCedit = (req, res) => {
  ProgrammingContest.findOne({ _id: req.params.id })
    .then((team) => {
      if (!team) {
        error = "Invalid Participant";
        req.flash("error", error);
        res.redirect("/ProgrammingContest/list");
      } else {
        res.render("programming-contest/edit.ejs", {
          error: req.flash("error"),
          team,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      error = "Data Retrieval Failed";
      req.flash("error", error);
      res.redirect("/ProgrammingContest/list");
    });
};

const postPCedit = (req, res) => {
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
  const filter = { _id: req.params.id };
  ProgrammingContest.findOneAndUpdate(filter, {
    $set: {
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
    },
  })
    .then(() => {
      let error = "Data has been edited successfully!";
      req.flash("error", error);
      res.redirect("/ProgrammingContest/list");
    })
    .catch(() => {
      let error = "Failed to edit data";
      req.flash("error", error);
      res.redirect("/ProgrammingContest/list");
    });
};
module.exports = {
  getPC,
  postPC,
  getPCList,
  deletePC,
  paymentDonePC,
  selectPC,
  postPCedit,
  getPCedit,
};
