const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Vacancy = require('../models/vacancy')


///////Здесь все ручки связанные с авторизованным пользователем
// router.get("/getvacancy", async function (req, res) {
//   let vacancies = await Vacancy.find();
//   console.log(vacancies);  
//   res.json({vacancies:vacancies});
// });

router.post('/getBase', async function (req, res) {
// console.log('dfgdfggggg/gggggggggggggggggggggggggggggggggggggg');
  
 // console.log(req.bo/dy.vacansies);
  
const user = await User.findOne({email:req.body.email});
console.log(user);

// await user.vacancyBase.push(req.body.vacansies);
// console.log({vacancyBase: user.vacancyBase})//;

await res.json({vacancyBase: user})
})

module.exports = router;
