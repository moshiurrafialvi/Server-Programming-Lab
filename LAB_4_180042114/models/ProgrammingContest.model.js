const mongoose = require("mongoose");
const PCSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  coachName: {
    type: String,
    required: true,
  },
  coachContact: {
    type: String,
    required: true,
  },
  coachEmail: {
    type: String,
    required: true,
  },
  coachtshirt: {
    type: String,
    required: true,
  },

  teamLeaderName: {
    type: String,
    required: true,
  },
  teamLeaderContact: {
    type: String,
    required: true,
  },
  teamLeaderEmail: {
    type: String,
    required: true,
  },
  teamLeadertshirt: {
    type: String,
    required: true,
  },

  teamMember1Name: {
    type: String,
    required: true,
  },
  teamMember1Contact: {
    type: String,
    required: true,
  },
  teamMember1Email: {
    type: String,
    required: true,
  },
  teamMember1tshirt: {
    type: String,
    required: true,
  },

  teamMember2Name: {
    type: String,
    required: true,
  },
  teamMember2Contact: {
    type: String,
    required: true,
  },
  teamMember2Email: {
    type: String,
    required: true,
  },
  teamMember2tshirt: {
    type: String,
    required: true,
  },
  key:{
    type: String,
    required: true,

  },
});

const ProgrammingContest = mongoose.model("ProgrammingContest", PCSchema);
module.exports = ProgrammingContest;
