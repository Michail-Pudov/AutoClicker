const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  companyName: String,
  companyId: String,
  company: Object,
  comments: Array
});

let reviewsModel = mongoose.model("reviews", reviewsSchema);

module.exports = reviewsModel;
