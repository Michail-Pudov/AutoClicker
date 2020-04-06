const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/uploadJobs", async function(req, res) {
  let user = await User.findOne({ email: req.body.email });
  const arrayAllVacansies = {
    allVacansies: user.allVacansies,
    weResponded: user.weResponded,
    testTaskCame: user.testTaskCame,
    iGotAnInvitationForAnInterview: user.iGotAnInvitationForAnInterview,
    needToCall: user.needToCall,
    closedVacancies: user.closedVacancies,
    theOfferCame: user.theOfferCame
  };
  res.json({ arrayAllVacansies });
});

router.post("/newVacansy", async function(req, res) {
  let user = await User.findOne({ email: req.body.email });
  const vacanсy = {
    vacancy: req.body.vacansies,
    date: new Date(),
    status: "Жду ответа",
    comment: "",
    contacts: ""
  };
  user.allVacansies.push(vacanсy);
  user.weResponded.push(vacanсy);
  await user.save();
  const arrayAllVacansies = {
    allVacansies: user.allVacansies,
    weResponded: user.weResponded,
    testTaskCame: user.testTaskCame,
    iGotAnInvitationForAnInterview: user.iGotAnInvitationForAnInterview,
    needToCall: user.needToCall,
    closedVacancies: user.closedVacancies,
    theOfferCame: user.theOfferCame
  };
  res.json({ arrayAllVacansies });
});

module.exports = router;
