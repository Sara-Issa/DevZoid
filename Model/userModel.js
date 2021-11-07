const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['user','freelancer'],
  },

  //   i should figure out how to differentiate between clients and freelancers
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
