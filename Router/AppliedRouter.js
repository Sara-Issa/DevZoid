const express = require("express");
const jobController = require("./../Controller/AppliedController");
const router = express.Router();



router.route("/applied")
// freelancer applied to a job
  .post(jobController.Applied)
// freelancer gets the list of the jobs he applied to
  .get(jobController.getApplied);


module.exports = router;
