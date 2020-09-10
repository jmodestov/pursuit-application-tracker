import * as types from '../constants/actionTypes';

const initialState = {
  josbApplied: [],
  newCompany: '',
  newPosition: '',
  newDate: '',
  newStatus: '',
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
    default:
      return state;
  }
};

export default jobAppsReducer;
