import * as types from '../constants/actionTypes';

const initialState = {
  josbApplied: [],
  newCompany: '',
  newPosition: '',
  newDate: '',
  newStatus: '',
  addJobCard: false,
};

const jobAppsReducer = (state = initialState, action) => {
  let jobsApplied;
  switch (action.type) {
    case types.LOAD_JOB_APPS:
      // payload will contain the collection of applied job items
      // updates the number of jobsApplied upon loading
      jobsApplied = action.payload;

      return {
        ...state,
        jobsApplied,
      };
    case types.ADD_JOB_APP:
      return {
        ...state,
        addJobCard: true,
      };
    case types.UPDATE_NEW_COMPANY:
      return {
        ...state,
        newCompany: action.payload,
      };
    case types.UPDATE_NEW_POSITION:
      return {
        ...state,
        newPosition: action.payload,
      };
    case types.UPDATE_NEW_DATE:
      return {
        ...state,
        newDate: action.payload,
      };
    case types.UPDATE_NEW_STATUS:
      return {
        ...state,
        newStatus: action.payload,
      };
    case types.SAVE_NEW_JOB:
      // do fetch request here?
      return {
        ...state,
        newCompany: '',
        newPosition: '',
        newDate: '',
        newStatus: '',
        addJobCard: false,
      };
    default:
      return state;
  }
};

export default jobAppsReducer;
