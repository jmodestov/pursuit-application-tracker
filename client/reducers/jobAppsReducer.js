import * as types from '../constants/actionTypes';

const initialState = {
  jobsApplied: 0,
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
      jobsApplied = action.payload.reduce((total) => {
        total += 1;
        return total;
      }, 0);

      console.log('Inside of the jobAppsReducer');
      return {
        ...state,
        jobsApplied,
      };
    default:
      return state;
  }
};

export default jobAppsReducer;
