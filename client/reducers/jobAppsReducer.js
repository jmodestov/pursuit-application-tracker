import * as types from '../constants/actionTypes';

const initialState = {
  totalJobs: 0,
  josbApplied: [],
  newCompany: '',
  newPosition: '',
  newDate: '',
  newStatus: 'Not Heard Back',
  addJobCard: false,
};

const jobAppsReducer = (state = initialState, action) => {
  let jobsApplied;
  let totalJobs;
  switch (action.type) {
    case types.LOAD_JOB_APPS:
      // payload will contain the collection of applied job items
      // updates the number of jobsApplied upon loading
      jobsApplied = action.payload;
      totalJobs = jobsApplied.length;
      return {
        ...state,
        jobsApplied,
        totalJobs,
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
      return {
        ...state,
        totalJobs: state.totalJobs + 1,
        newCompany: '',
        newPosition: '',
        newDate: '',
        newStatus: 'Not Heard Back',
        addJobCard: false,
      };
    case types.DELETE_JOB:
      return {
        ...state,
        totalJobs: state.totalJobs - 1,
      };
    default:
      return state;
  }
};

export default jobAppsReducer;
