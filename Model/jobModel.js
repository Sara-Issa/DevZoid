const { number } = require("joi");
const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
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

const jobModel = mongoose.model("job", jobSchema);

module.exports = jobModel;
