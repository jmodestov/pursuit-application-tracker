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
    default:
      return state;
  }
};

export default jobAppsReducer;
