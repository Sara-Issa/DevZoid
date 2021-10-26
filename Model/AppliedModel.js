const mongoose = require("mongoose");

const appliedSchema = mongoose.Schema({
  applierId: {
    type: String,
  },
  jobId: {
    type: String,
  },
  posterId: {
      type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    max: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const AppliedModel = mongoose.model("Applied", appliedSchema);

module.exports = AppliedModel;
