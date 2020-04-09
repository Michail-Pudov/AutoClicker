//const faker = require('faker/locale/ru')
const fetch = require("cross-fetch");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const mongoose = require("mongoose");
mongoose.pluralize(null);
const User = require("./models/user");

async function createBase() {
  await mongoose.connect("mongodb://localhost:27017/AutoClicker", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on(
    "error",
    console.error.bind(console, "Ошибка соединения с MongoDB:")
  );

  let response = await fetch(
    `https://api.hh.ru/vacancies?salary=50000&employment=full&experience=noExperience&profession=1.395&schedule=fullDay&specialization=1&vacancy_label=with_address&vacancy_search_fields=name&vacancy_type=open&text=javascript&per_page=100&area=1&vacancy_search_order=publication_time`
  );
  let result = await response.json();

  function randomTracker() {
    const timeArr = [];
    const stages = Math.round(Math.random() * 5) + 1;
    for (let index = 0; index < stages; index++) {
      let newDate = new Date(2020, index, Math.round(Math.random() * 30));
      timeArr.push(newDate);
    }
    return timeArr;
  }

  const arrvacansy = [];
  for (
    let indexVacancy = 0;
    indexVacancy < result.items.length;
    indexVacancy++
  ) {
    let vacan = {
      vacancy: await result.items[indexVacancy],
      date: new Date(),
      timeTracker: randomTracker(),
      status: "Жду ответа",
      comment: "",
      contacts: await result.items[indexVacancy].contacts
    };

    arrvacansy.push(await vacan);
  }
  for (let indexUser = 0; indexUser < 10; indexUser++) {
    let passwordHash = await bcrypt.hash(String(indexUser), saltRounds);

    await User.create({
      email: indexUser,
      password: passwordHash,
      allVacansies: await arrvacansy,
      weResponded: await arrvacansy.slice(
        [Math.round(Math.random() * 49)],
        [Math.round(Math.random() * 20 + 50)]
      ),
      testTaskCame: await arrvacansy.slice(
        [Math.round(Math.random() * 49)],
        [Math.round(Math.random() * 20 + 50)]
      ),
      iGotAnInvitationForAnInterview: await arrvacansy.slice(
        [Math.round(Math.random() * 49)],
        [Math.round(Math.random() * 20 + 50)]
      ),
      needToCall: await arrvacansy.slice(
        [Math.round(Math.random() * 49)],
        [Math.round(Math.random() * 20 + 50)]
      ),
      closedVacancies: await arrvacansy.slice(
        [Math.round(Math.random() * 49)],
        [Math.round(Math.random() * 20 + 50)]
      ),
      theOfferCame: await arrvacansy.slice(
        [Math.round(Math.random() * 49)],
        [Math.round(Math.random() * 20 + 50)]
      )
    });
  }

  await mongoose.disconnect();
}

createBase();
