import { ADD_USER } from "./action-types";

const initialState = {
  email: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        email: action.email
      };
    default:
      return state;
  }
};
