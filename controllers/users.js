const User = require("../models/user");

module.exports = {
  index,
  showProfile,
  update,
};

function index(req, res) {
  User.find({}).then((users) => {
    res.render("users/index", { title: "Trainer List", user: req.user, users });
  });
}
function showProfile(req, res) {
  User.findById(req.user._id)
  .populate("friends")
  .then((user) => {
    res.render("users/profile", { title: "My Profile", user });
  });
}
function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true })
  .then(() => {
    res.redirect("/users/profile");
  });
}
