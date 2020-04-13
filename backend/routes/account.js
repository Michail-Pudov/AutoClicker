const express = require("express");
const router = express.Router();
const User = require("../models/user");
const ReviewsModel = require("../models/reviews");

async function getData() {
  let currentUser = await User.findOne({ email: "1" });
  let data = [];
  for (let index = 0; index < 5; index++) {
    data.push({
      name: index,
      uv: (await currentUser.allVacansies[index].salary.to) + 1000,
      pv: Math.round(Math.random() * 160000),
      amt: (await currentUser.allVacansies[index].salary.from) + 1000
    });
  }
  return data;
}
router.get("/getdata", async function(req, res) {
  res.json({ data: await getData() });
});

router.get("/getAllReviews", async function(req, res) {
  const allReviews = await ReviewsModel.find();
  res.json({ allReviews });
});

router.post("/newReview", async function(req, res) {
  const company = await ReviewsModel.findOne({
    companyId: req.body.vacancy.employer.id
  });
  const comment = {
    creator: req.body.email,
    review: req.body.review,
    urlVacancy: req.body.vacancy.alternate_url,
    nameVacancy: req.body.vacancy.name
  };
  if (company) {
    company.comments.push(comment);
    await company.save();
  } else {
    ReviewsModel.create({
      companyName: req.body.vacancy.employer.name,
      companyId: req.body.vacancy.employer.id,
      company: req.body.vacancy,
      comments: [comment]
    });
  }

  res.json({ write: true });
});

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
  let contacts = req.body.vacansies.contacts
    ? `${
        req.body.vacansies.contacts.name ? req.body.vacansies.contacts.name : ""
      } ${
        req.body.vacansies.contacts.email
          ? req.body.vacansies.contacts.email
          : ""
      } ${
        req.body.vacansies.contacts.phones
          ? `+${req.body.vacansies.contacts.phones[0].country}-${req.body.vacansies.contacts.phones[0].city}-${req.body.vacansies.contacts.phones[0].number}`
          : ""
      }`
    : "";
  const vacanсy = {
    vacancy: req.body.vacansies,
    date: new Date(),
    status: "Жду ответа",
    comment: "",
    contacts: contacts,
    timeTracker: [new Date()]
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

router.post("/newStatus", async function(req, res) {
  let user = await User.findOne({ email: req.body.email });
  const objectVacancy = req.body.arrayVacancies;
  user.allVacansies = objectVacancy.allVacansies;
  user.weResponded = objectVacancy.weResponded;
  user.testTaskCame = objectVacancy.testTaskCame;
  user.iGotAnInvitationForAnInterview =
    objectVacancy.iGotAnInvitationForAnInterview;
  user.needToCall = objectVacancy.needToCall;
  user.closedVacancies = objectVacancy.closedVacancies;
  user.theOfferCame = objectVacancy.theOfferCame;
  await user.save();
  res.json({ write: true });
});
module.exports = router;
