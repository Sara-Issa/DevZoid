const mongoose = require("mongoose");

const freelancerSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    trim: true,
    min: 5,
    max: 30,
  },
  title: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  experience: {
    type: String,
    trim: true,
  },
  education: {
    type: String,
    trim: true,
  },
  about: {
    type: String,
    trim: true,
  },
  skills: {
    type: String,
    trim: true,
  },
  // payment: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  phone: {
    type: Number,

    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  twitter: {
    type: String,
    trim: true,
  },
  github: {
    type: String,
    trim: true,
  },
  facebook: {
    type: String,
    trim: true,
  },
  linked: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  youtube: {
    type: String,
    trim: true,
  },
});

const freelancerModel = mongoose.model("freelancer", freelancerSchema);

module.exports = freelancerModel;
