import { ADD_USER, WRITE_FILTERS } from "./action-types";

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
