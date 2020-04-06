
const faker = require('faker/locale/ru')
const bcrypt = require("bcrypt");

const saltRounds = 10;

const mongoose = require('mongoose');
mongoose.pluralize(null);
const User = require('./models/user');
const Vacancy = require('./models/vacancy');


async function createBase() {
  await mongoose.connect('mongodb://localhost:27017/AutoClicker', { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('error', console.error.bind(console, 'Ошибка соединения с MongoDB:'));

  for (let indexUser =1; indexUser < 10; indexUser++) {
    let passwordHash = await bcrypt.hash(String(indexUser), saltRounds);
    await User.create({
      name: faker.name.findName(),
      email: indexUser,
      password: passwordHash,
      vacancyBase: [],
    })
  }

  for (let vacancyIndex = 0; vacancyIndex < 30; vacancyIndex++) {

    await Vacancy.create({
      createdAt: faker.date.past(),
      title: faker.name.jobTitle(),
      description: faker.name.jobDescriptor(),
      responsibilities: faker.name.jobDescriptor(),
      experience: Math.round(Math.random()*6),
      company: faker.company.companyName(),
      salary: Math.round(faker.finance.amount()*100),
      userStatus: 'ADD',
      link: "https://hh.ru/vacancy/"+Math.round(Math.random()*36312327),
    });

  }
// console.table(await Vacancy.find())





await mongoose.disconnect();
}

createBase();


