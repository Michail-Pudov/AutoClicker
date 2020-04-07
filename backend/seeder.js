
//const faker = require('faker/locale/ru')
const fetch = require('cross-fetch');
const bcrypt = require("bcrypt");

const saltRounds = 10;

const mongoose = require('mongoose');
mongoose.pluralize(null);
const User = require('./models/user');
//const Vacancy = require('./models/vacancy');


async function createBase() {
  await mongoose.connect('mongodb://localhost:27017/AutoClicker', { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('error', console.error.bind(console, 'Ошибка соединения с MongoDB:'));

  let response = await fetch(
    `https://api.hh.ru/vacancies?salary=50000&employment=full&experience=noExperience&profession=1.395&schedule=fullDay&specialization=1&vacancy_label=with_address&vacancy_search_fields=name&vacancy_type=open&per_page=100&area=1&vacancy_search_order=publication_time`
  );
  let result = await response.json();

  console.log(result.items);
  
  

  let indexUser = 1
    let passwordHash = await bcrypt.hash(String(indexUser), saltRounds);
    await User.create({
      email: indexUser,
      password: passwordHash,
      allVacansies: await result.items,
      weResponded: await result.items.slice([0],[23]),
      testTaskCame: await result.items.slice([24],[32]),
      iGotAnInvitationForAnInterview: await result.items.slice([33],[57]),
      needToCall: await result.items.slice([58],[72]),
      rejectionCame: await result.items.slice([73],[84]),
      theOfferCame: await result.items.slice([85],[99])
    })
  

  // for (let vacancyIndex = 0; vacancyIndex < 30; vacancyIndex++) {

  //   await Vacancy.create({
  //     createdAt: faker.date.past(),
  //     title: faker.name.jobTitle(),
  //     description: faker.name.jobDescriptor(),
  //     responsibilities: faker.name.jobDescriptor(),
  //     experience: Math.round(Math.random() * 6),
  //     company: faker.company.companyName(),
  //     salary: Math.round(faker.finance.amount() * 100),
  //     userStatus: 'ADD',
  //     link: "https://hh.ru/vacancy/" + Math.round(Math.random() * 36312327),
  //   });

  
  // console.table(await Vacancy.find())





  await mongoose.disconnect();
}

createBase();


