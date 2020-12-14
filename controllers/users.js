const User = require("../models/user");

module.exports = {
  index,
  showProfile,

};

function index(req, res) {
  User.find({}).then((users) => {
    res.render("users/index", { title: "User index", user: req.user, users });
  });
}
function showProfile(req,res){
  User.findById(req.user._id)
  .then((user)=>{
    res.render('users/profile', {title:"My Profile", user})
  })
}
