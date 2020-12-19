const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    reviewer: String,
    reviewerPhoto: String,
    rating: { type: Number, min: 1, max: 10 },
    content: String,
  },
  {
    timestamps: true,
  }
);


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
    team: [teamSchema],
    reviews:[reviewSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
