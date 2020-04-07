const express = require("express");
const router = express.Router();
const User = require("../models/user");

async function getData() {
let currentUser = await User.findOne({email:'1'});
let data = [];
console.log(currentUser, data);

for (let index = 0; index < 5; index++) {
  data.push({
    "name": index,
    "uv": await currentUser.allVacansies[index].salary.to+1000,
    "pv": Math.round(Math.random()*160000),
    "amt": await currentUser.allVacansies[index].salary.from+1000
  })  
}  
console.log('data' + data);
  return data
}

router.get('/getdata', async function(req, res) {
  console.log('res' + res);  
  res.json({data: await getData()})
})




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
