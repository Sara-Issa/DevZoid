const express = require("express");
const jobController = require("./../Controller/jobController");
const router = express.Router();
const verifyToken = require("../middleware/auth");

router.route("/").get(jobController.allJob).post(jobController.saveJob);

// router.route("/applied")
// // freelancer applied to a job
//   .post(jobController.Applied)
// // freelancer gets the list of the jobs he applied to
//   .get(jobController.getApplied);


router
  .route("/:id")
  .put(jobController.editJob)
  // the job is done/over, client deletes the job he posted, delete function for both
  // delete the job button and job fulfilled button.
  .delete(jobController.deleteJob)
  .get(jobController.findJob);

module.exports = router;
