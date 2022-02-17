const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    User: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Age: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("usersModels", usersSchema);
