import {
  ADD_USER,
  WRITE_FILTERS,
  GET_USER_JOBS,
  SAGA_GET_USER_JOBS,
  RECORDS_NEW_VACANCIES,
  SAGA_RECORDS_NEW_VACANCIES
} from "./action-types";

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
