const MathOlympiad = require("../models/MathOlympiad.model");

const getMO = (req, res) => {
  res.render("math-olympiad/register.ejs", { error: req.flash("error") });
};

const postMO = (req, res) => {
  const { name, category, contact, email, institution, tshirt } = req.body;
  console.log(name);
  console.log(category);
  console.log(contact);
  console.log(email);
  console.log(institution);
  console.log(tshirt);

  let registrationFee = 0;
  if (category == "School") {
    registrationFee = 250;
  } else if (category == "College") {
    registrationFee = 400;
  } else {
    registrationFee = 500;
  }

  const total = registrationFee;
  const paid = 0;
  const selected = false;

  let error = "";

  MathOlympiad.findOne({ name: name, contact: contact }).then((participant) => {
    if (participant) {
      error = "Participant with this name and contact number already exists!";
      req.flash("error", error);
      res.redirect("/MathOlympiad/register");
    } else {
      const participant = new MathOlympiad({
        name,
        category,
        contact,
        email,
        institution,
        paid,
        total,
        selected,
        tshirt,
      });
      participant
        .save()
        .then(() => {
          error = "Participant has been registered successfully!";
          req.flash("error", error);
          res.redirect("/MathOlympiad/register");
        })
        .catch(() => {
          error = "An unexpected error occured while registering participant";
          req.flash("error", error);
          res.redirect("/MathOlympiad/register");
        });
    }
  });
};
const deleteMO = (req, res) => {
  let error = "";

  MathOlympiad.deleteOne({ _id: req.params.id })
    .then(() => {
      let error = "Data has been deleted successfully!";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    })
    .catch(() => {
      let error = "Failed to delete data";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    });
};
const getMOList = (req, res) => {
  let all_participant = [];
  let error = "";
  MathOlympiad.find()
    .then((data) => {
      all_participant = data;
      res.render("math-olympiad/list.ejs", {
        error: req.flash("error"),
        participants: all_participant,
      });
    })
    .catch(() => {
      error = "Failed to retrieve data!";
      res.render("math-olympiad/list.ejs", {
        error: req.flash("error", error),
        participants: all_participant,
      });
    });
};

const paymentDoneMO = (req, res) => {
  const id = req.params.id;

  MathOlympiad.findOne({ _id: id })
    .then((participant) => {
      participant.paid = participant.total;
      participant
        .save()
        .then(() => {
          let error = "Payment completed successfully!";
          req.flash("error", error);
          res.redirect("/MathOlympiad/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/MathOlympiad/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    });
};

const getMOedit = (req, res) => {
  MathOlympiad.findOne({ _id: req.params.id })
    .then((participant) => {
      if (!participant) {
        error = "Invalid Participant";
        req.flash("error", error);
        res.redirect("/MathOlympiad/list");
      } else {
        res.render("math-olympiad/edit.ejs", {
          error: req.flash("error"),
          participant,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      error = "Data Retrieval Failed";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    });
};

const postMOedit = (req, res) => {
  const { name, category, contact, email, institution, tshirt } = req.body;
  /* console.log(name);
  console.log(category);
  console.log(contact);
  console.log(email);
  console.log(institution);
  console.log(tshirt); */
  const filter = { _id: req.params.id };
  MathOlympiad.findOneAndUpdate(filter, {
    $set: { name, category, contact, email, institution, tshirt },
  })
    .then(() => {
      let error = "Data has been edited successfully!";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    })
    .catch(() => {
      let error = "Failed to edit data";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    });
};
const selectMO = (req, res) => {
  const id = req.params.id;

  MathOlympiad.findOne({ _id: id })
    .then((participant) => {
      participant.selected = true;
      participant
        .save()
        .then(() => {
          let error = "Participant has been selected successfully!";
          req.flash("error", error);
          res.redirect("/MathOlympiad/list");
        })
        .catch(() => {
          let error = "Data could not be updated!";
          req.flash("error", error);
          res.redirect("/MathOlympiad/list");
        });
    })
    .catch(() => {
      let error = "Data could not be updated!";
      req.flash("error", error);
      res.redirect("/MathOlympiad/list");
    });
};
module.exports = {
  getMO,
  postMO,
  deleteMO,
  getMOList,
  paymentDoneMO,
  postMOedit,
  getMOedit,
  selectMO,
};
