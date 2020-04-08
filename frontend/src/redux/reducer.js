import {
  ADD_USER,
  WRITE_FILTERS,
  GET_USER_JOBS,
  RECORDS_NEW_VACANCIES,
  VACANCY_STATUS_CHANGE,
  WRITE_NEW_REVIEWS
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
  },
  urlNewReviews: ""
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
    case VACANCY_STATUS_CHANGE:
      return {
        ...state,
        userJobs: { ...action.userJobs }
      };
    case WRITE_NEW_REVIEWS:
      return {
        ...state,
        urlNewReviews: action.urlNewReviews
      };
    default:
      return state;
  }
};
