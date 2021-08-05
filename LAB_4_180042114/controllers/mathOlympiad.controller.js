const getMO = (req, res) => {
  res.render("math-olympiad/register.ejs", { error: req.flash("error") });
};

const postMO = (req, res) => {
  res.render("math-olympiad/register.ejs");
};


const getMOlist = (req, res) => {
    res.render("math-olympiad/list.ejs")
}
const deleteMO = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.render("math-olympiad/list.ejs");
};



module.exports ={getMO,postMO,,getMOlist,deleteMO};