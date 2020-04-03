const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema({
  createdAt: String,  
  title: String,
  description: String,
  responsibilities: String,
  experience: String,
  company: String,
  salary: Number,
  userStatus: String,
  link: String,
});

let vacancyModel = mongoose.model("vacancy", vacancySchema);

module.exports = vacancyModel;
