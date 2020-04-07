import {
  ADD_USER,
  WRITE_FILTERS,
  GET_USER_JOBS,
  SAGA_GET_USER_JOBS,
  RECORDS_NEW_VACANCIES,
  SAGA_RECORDS_NEW_VACANCIES,
  VACANCY_STATUS_CHANGE,
  SAGA_VACANCY_STATUS_CHANGE
} from "./action-types";

export const vacancyStatusChange = payload => {
  return {
    type: VACANCY_STATUS_CHANGE,
    userJobs: payload.userJobs
  };
};
export const vacancyStatusChangeSaga = payload => {
  return {
    type: SAGA_VACANCY_STATUS_CHANGE,
    index: payload.vacancy,
    email: payload.email,
    keyArray: payload.keyArray,
    allArray: payload.allArray,
    changes: payload.changes,
    indexInArray: payload.indexInArray
  };
};

export const addUser = payload => {
  return {
    type: ADD_USER,
    email: payload
  };
};

export const writeFilters = payload => {
  return {
    type: WRITE_FILTERS,
    filters: payload
  };
};

export const getUserJobs = payload => {
  return {
    type: GET_USER_JOBS,
    userJobs: payload.arrayAllVacansies
  };
};

export const getUserJobsSaga = payload => {
  return {
    type: SAGA_GET_USER_JOBS,
    email: payload
  };
};

export const recordsNewVacansies = payload => {
  return {
    type: RECORDS_NEW_VACANCIES,
    userJobs: payload.data
  };
};

export const recordsNewVacansiesSaga = payload => {
  return {
    type: SAGA_RECORDS_NEW_VACANCIES,
    email: payload.email,
    vacancy: payload.vacansies
  };
};
