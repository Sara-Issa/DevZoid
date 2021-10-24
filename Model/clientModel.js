const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
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
      image: {
        type: String,
      },
      phone: {
        type: Number,
    
        trim: true,
      },
      address: {
        type: String,
        trim: true,
      },
});

const clientModel = mongoose.model("client", clientSchema);

module.exports = clientModel;
