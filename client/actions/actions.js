import * as types from '../constants/actionTypes';

export const loadApps = () => (dispatch) => {
  fetch('/api')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: types.LOAD_JOB_APPS,
        // payload will consist of an array of jobItems
        payload: data,
      });
    })
    .catch(console.error);
};

export const addJob = () => (dispatch) => {
  dispatch({
    type: types.ADD_JOB_APP,
  });
};
export const updateApps = () => {
  // Does nothing so far
};
