const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Vacancy = require("../models/vacancy");

router.post("/uploadJobs", async function(req, res) {
  let user = await User.findOne({ email: req.body.email });
  const arrayAllVacansies = {
    allVacansies: user.allVacansies,
    weResponded: user.weResponded,
    testTaskCame: user.testTaskCame,
    iGotAnInvitationForAnInterview: user.iGotAnInvitationForAnInterview,
    needToCall: user.needToCall,
    rejectionCame: user.rejectionCame,
    theOfferCame: user.theOfferCame
  };
  res.json({ arrayAllVacansies });
});

router.post("/newVacansy", async function(req, res) {
  let user = await User.findOne({ email: req.body.email });
  const vacanсy = {
    vacancy: req.body.vacansies,
    date: new Date(),
    status: "answer",
    comment: ""
  };
  user.allVacansies.push(vacanсy);
  user.weResponded.push(vacanсy);
  await user.save();
  res.json({ vacanсy: true });
});

module.exports = router;
