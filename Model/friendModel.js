const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema(
  {
     friendId: {
      type: Array,
    },

  },
  { timestamps: true }
);

const friendModel = mongoose.model("Friend", FriendSchema);

module.exports = friendModel;