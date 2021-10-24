const express = require("express");
const paymentController = require("./../Controller/paymentController");
const router = express.Router();
const verifyToken = require("../middleware/auth");

router
  .route("/")
  .get(paymentController.allPayment)
  .post(paymentController.savePayment);

router
  .route("/:id")
  .put(paymentController.editPayment)
  .delete(paymentController.deletePayment)
  .get(paymentController.findPayment);

module.exports = router;
