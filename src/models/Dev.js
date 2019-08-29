const { Schema, model } = require("mongoose");
const DevSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    user: {
      type: String,
      require: true
    },
    avatar: {
      type: String,
      require: true
    },
    bio: String
  },
  {
    timestamps: true
    //Seta a data de criaçao e de alteracao
  }
);

module.exports = model("Dev", DevSchema);
