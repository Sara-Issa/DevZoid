const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({});

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = paymentModel;
