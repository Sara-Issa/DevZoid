const express = require("express");
const reviewController = require("./../Controller/reviewController");
const router = express.Router();

router
  .route("/")
  .get(reviewController.allReview)
  .post(reviewController.saveReview);

router
  .route("/:id")
  .put(reviewController.editReview)
  .delete(reviewController.deleteReview)
  .get(reviewController.findReview);

module.exports = router;
