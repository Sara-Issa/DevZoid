const { number } = require("joi");
const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    max: 50,
  },
  title: {
    type: String,
    required:true,
    trim: true,
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
