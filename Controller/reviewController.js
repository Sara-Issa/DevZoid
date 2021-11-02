const Review = require("./../Model/reviewModel");

exports.allReview =  (req, res) => {
};

exports.saveReview = async (req, res) => {
  try {
    await Review.create(req.body);
    res.status(200).json({ message: "created" });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }};

exports.editReview = (req, res) => {
    res.status(200).json({
      message: "Review Edited",
    });
};

exports.deleteReview = (req, res) => {
    res.status(200).json({
      message: "Review Deleted",
    });
};

exports.findReview = async (req, res) => {
  try {
    const reviews = await Review.find({ profile: req.params.id }).populate("user");
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
};
};
