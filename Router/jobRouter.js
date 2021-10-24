const express = require("express");
const jobController = require("./../Controller/jobController");
const router = express.Router();
const verifyToken = require("../middleware/auth");

router.route("/").get(jobController.allJob).post(jobController.saveJob);

router
  .route("/:id")
  .put(jobController.editJob)
  .delete(jobController.deleteJob)
  .get(jobController.findJob);

module.exports = router;
