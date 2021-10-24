const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  title: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "freelancer",
  },
  // you have to identify how u know the user and who the review is for.
});

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;
