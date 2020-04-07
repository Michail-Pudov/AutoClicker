import {
  ADD_USER,
  WRITE_FILTERS,
  GET_USER_JOBS,
  RECORDS_NEW_VACANCIES
} from "./action-types";

const initialState = {
  email: false,
  filters: {},
  userJobs: {
    allVacansies: [],
    weResponded: [],
    testTaskCame: [],
    iGotAnInvitationForAnInterview: [],
    needToCall: [],
    closedVacancies: [],
    theOfferCame: []
  }
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
    case GET_USER_JOBS:
      return {
        ...state,
        userJobs: action.userJobs
      };
    case RECORDS_NEW_VACANCIES:
      return {
        ...state,
        userJobs: action.userJobs
      };
    default:
      return state;
  }
};
