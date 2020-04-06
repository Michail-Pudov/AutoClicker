const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Vacancy = require("../models/vacancy");

router.post("/newVacansy", async function(req, res) {
  let user = await User.findOne({ email: req.body.email });
  const vacansy = {
    vacancy: req.body.vacansies,
    date: new Date(),
    status: "answer",
    comment: ""
  };
  user.allVacansies.push(vacansy);
  await user.save();
  res.json({ vacancies: true });
});

module.exports = router;
