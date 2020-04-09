import { call, put, takeLatest } from "redux-saga/effects";
import {
  SAGA_GET_USER_JOBS,
  SAGA_RECORDS_NEW_VACANCIES,
  SAGA_VACANCY_STATUS_CHANGE,
  SAGA_GET_ALL_REVIEW_IN_DATABASE,
  SAGA_WRITE_NEW_REVIEW
} from "../action-types";
import {
  getUserJobs,
  recordsNewVacansies,
  vacancyStatusChange,
  getAllReviewInDatabase,
  writeNewReviewInRedux
} from "../action";
import { uploadUserJobsFetch } from "../../allFetch/uploadUserJobsFetch";
import { vacansiesToTheDatabase } from "../../allFetch/vacansiesToTheDatabase";
import { newStatusInVacancy } from "../../allFetch/newStatusInVacancy";
import { getAllReviews } from "../../allFetch/getAllReviews";
import { newReviewFetch } from "../../allFetch/newReview";

function* fetchSagaWriteNewReview(payload) {
  try {
    const data = yield call(newReviewFetch, payload.newReview);
    const comment = {
      creator: payload.newReview.email,
      review: payload.newReview.review,
      urlVacancy: payload.newReview.vacancy.alternate_url,
      nameVacancy: payload.newReview.vacancy.name
    };
    let indexCompany = null;
    for (let i = 0; i < payload.allReviews.length; i++) {
      if (
        payload.allReviews[i].companyId ===
        payload.newReview.vacancy.employer.id
      ) {
        indexCompany = `${i}`;
      }
    }
    console.log(indexCompany);

    if (indexCompany) {
      payload.allReviews[+indexCompany].comments.push(comment);
    } else {
      let newCompany = {
        companyName: payload.newReview.vacancy.employer.name,
        companyId: payload.newReview.vacancy.employer.id,
        company: payload.newReview.vacancy,
        comments: [comment]
      };
      payload.allReviews.push(newCompany);
    }
    console.log([...payload.allReviews]);

    yield put(writeNewReviewInRedux({ allReviews: [...payload.allReviews] }));
  } catch (e) {
    console.log(e);
  }
}

function* fetchSagaGetAllReviews(payload) {
  try {
    const data = yield call(getAllReviews);
    yield put(getAllReviewInDatabase(data));
  } catch (e) {
    console.log(e);
  }
}

function* fetchSagaVacancyStatusChange(payload) {
  try {
    const { index, email, keyArray, allArray, changes, indexInArray } = payload;
    const modifiedVacancy = allArray[keyArray].filter(
      item => item.vacancy.id === index
    );
    allArray[keyArray].splice(indexInArray, 1);
    let date = new Date();
    modifiedVacancy[0].comment = changes.comment;
    modifiedVacancy[0].contacts = changes.contacts;
    modifiedVacancy[0].status = changes.status;
    modifiedVacancy[0].timeTracker.push(date);
    let vacancyInAllArray = allArray.allVacansies.find(
      item => item.vacancy.id === index
    );
    vacancyInAllArray.timeTracker.push(date);
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
  yield takeLatest(SAGA_GET_ALL_REVIEW_IN_DATABASE, fetchSagaGetAllReviews);
  yield takeLatest(SAGA_WRITE_NEW_REVIEW, fetchSagaWriteNewReview);
}
