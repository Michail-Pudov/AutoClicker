const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  allVacansies: Array,
  weResponded: Array,
  testTaskCame: Array,
  iGotAnInvitationForAnInterview: Array,
  needToCall: Array,
  rejectionCame: Array,
  theOfferCame: Array
});
let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
