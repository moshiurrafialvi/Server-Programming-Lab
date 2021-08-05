const MathOlympiad = require("../models/MathOlympiad.model");

const getMO = (req, res) => {
  res.render("math-olympiad/register.ejs");
};

const postMO = (req, res) => {
  res.render("math-olympiad/list.ejs");
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
  const id = req.params.id;
  console.log(id);
  res.render("math-olympiad/list.ejs");
};
const getMOList = (req, res) => {
  res.render("math-olympiad/list.ejs");
};

module.exports = { getMO, postMO, deleteMO, getMOList };
