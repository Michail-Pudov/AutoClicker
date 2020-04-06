import { call, put, takeLatest } from "redux-saga/effects";
import { SAGA_GET_USER_JOBS } from "../action-types";
import { getUserJobs } from "../action";
import { uploadUserJobsFetch } from "../../allFetch/uploadUserJobsFetch";

function* fetchSagaUserJobs(payload) {
  console.log(payload);

  try {
    const data = yield call(uploadUserJobsFetch, payload.email);
    yield put(getUserJobs(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* actionWatcher() {
  yield takeLatest(SAGA_GET_USER_JOBS, fetchSagaUserJobs);
}
