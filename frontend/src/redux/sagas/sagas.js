import { call, put, takeLatest } from "redux-saga/effects";
import {
  SAGA_GET_USER_JOBS,
  SAGA_RECORDS_NEW_VACANCIES,
  SAGA_VACANCY_STATUS_CHANGE
} from "../action-types";
import {
  getUserJobs,
  recordsNewVacansies,
  vacancyStatusChange
} from "../action";
import { uploadUserJobsFetch } from "../../allFetch/uploadUserJobsFetch";
import { vacansiesToTheDatabase } from "../../allFetch/vacansiesToTheDatabase";
import { newStatusInVacancy } from "../../allFetch/newStatusInVacancy";

function* fetchSagaVacancyStatusChange(payload) {
  try {
    const { index, email, keyArray, allArray, changes, indexInArray } = payload;
    const modifiedVacancy = allArray[keyArray].filter(
      item => item.vacancy.id === index
    );
    allArray[keyArray].splice(indexInArray, 1);

    modifiedVacancy[0].comment = changes.comment;
    modifiedVacancy[0].contacts = changes.contacts;
    modifiedVacancy[0].status = changes.status;
    switch (modifiedVacancy[0].status) {
      case "Жду ответа":
        allArray.weResponded.push(modifiedVacancy[0]);
        break;
      case "Прислали тестовое задание":
        allArray.testTaskCame.push(modifiedVacancy[0]);
        break;
      case "Пригласили на интервью":
        allArray.iGotAnInvitationForAnInterview.push(modifiedVacancy[0]);
        break;
      case "Нужно перезвонить":
        allArray.needToCall.push(modifiedVacancy[0]);
        break;
      case "Поступил оффер":
        allArray.theOfferCame.push(modifiedVacancy[0]);
        break;
      case "Вакансия закрыта":
        allArray.closedVacancies.push(modifiedVacancy[0]);
        break;
      default:
        return allArray;
    }
    const data = yield call(newStatusInVacancy, email, allArray);
    yield put(vacancyStatusChange({ userJobs: allArray }));
  } catch (e) {
    console.log(e);
  }
}

function* fetchSagaUserJobs(payload) {
  try {
    const data = yield call(uploadUserJobsFetch, payload.email);
    yield put(getUserJobs(data));
  } catch (e) {
    console.log(e);
  }
}

function* fetchSagaNewVacancy(payload) {
  try {
    const data = yield call(
      vacansiesToTheDatabase,
      payload.email,
      payload.vacancy
    );
    yield put(recordsNewVacansies({ data: data.arrayAllVacansies }));
  } catch (e) {
    console.log(e);
  }
}

export default function* actionWatcher() {
  yield takeLatest(SAGA_GET_USER_JOBS, fetchSagaUserJobs);
  yield takeLatest(SAGA_RECORDS_NEW_VACANCIES, fetchSagaNewVacancy);
  yield takeLatest(SAGA_VACANCY_STATUS_CHANGE, fetchSagaVacancyStatusChange);
}
