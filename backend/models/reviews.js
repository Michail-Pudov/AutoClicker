const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  company: Object,
  comments: Array
});

let reviewsModel = mongoose.model("reviews", reviewsSchema);

module.exports = reviewsModel;
