import { ADD_USER, WRITE_FILTERS } from "./action-types";

const initialState = {
  email: false,
  filters: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        email: action.email
      };
    case WRITE_FILTERS:
      return {
        ...state,
        filters: action.filters
      };
    default:
      return state;
  }
};
