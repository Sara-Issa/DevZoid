const Payment = require("./../Model/paymentModel");

exports.allPayment = (req, res) => {
  res.status(200).json({
    message: "all Payment",
  });
};

exports.savePayment = (req, res) => {
  res.status(201).json({
    message: "created a Payment",
  });
};

exports.editPayment = (req, res) => {
  res.status(200).json({
    message: "Payment Edited",
  });
};

exports.deletePayment = (req, res) => {
  res.status(200).json({
    message: "Payment Deleted",
  });
};

exports.findPayment = (req, res) => {
  res.status(200).json({
    message: "Payment Found",
  });
};
