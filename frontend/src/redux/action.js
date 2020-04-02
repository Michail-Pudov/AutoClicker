import { ADD_USER } from "./action-types";

export const addUser = payload => {
  return {
    type: ADD_USER,
    email: payload
  };
};
