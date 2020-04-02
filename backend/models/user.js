const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

let userModel = mongoose.model("user", userSchema);

module.exports = userModel;
