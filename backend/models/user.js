const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  vacancyBase: Array,
});

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
