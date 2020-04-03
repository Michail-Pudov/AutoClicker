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

module.exports = router;
