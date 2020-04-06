import { call, put, takeLatest } from "redux-saga/effects";
import {
  SAGA_GET_USER_JOBS,
  SAGA_RECORDS_NEW_VACANCIES
} from "../action-types";
import { getUserJobs, recordsNewVacansies } from "../action";
import { uploadUserJobsFetch } from "../../allFetch/uploadUserJobsFetch";
import { vacansiesToTheDatabase } from "../../allFetch/vacansiesToTheDatabase";

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
}
