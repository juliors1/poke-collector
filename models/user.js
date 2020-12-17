const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const teamSchema = new Schema({
  name: String,
  img: String,
  id: Number,
})

const userSchema = new Schema(
  {
    name: String,
    email: String,
    alias: String,
    avatar: String,
    googleId: String,
    bio: String,
    friends:[{type:Schema.Types.ObjectId, ref: "User"}],
    team: [teamSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
